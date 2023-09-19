import { RouteInstance, RouteParams, RouteParamsAndQuery, chainRoute } from 'atomic-router'
import { attach, createEvent, createStore, sample } from 'effector'

import { User, authApi } from 'shared/api'

enum AuthStatus {
  Initial = 0,
  Pending,
  Authenticated,
  AuthError,
}

//#region //* API

const requestAuthFx = attach({ effect: authApi.requestAuthFx })

//#endregion

//#region //* Stores

export const $token = createStore<string | null>(null)
export const $user = createStore<User | null>(null)
export const $authStatus = createStore<AuthStatus>(AuthStatus.Initial)

//#endregion

//#region //* Bussiness Logic

$authStatus.on(requestAuthFx, (status) => {
  if (status === AuthStatus.Initial) return AuthStatus.Pending

  return status
})

$token.on(requestAuthFx.doneData, (_, response) => response.token)
$user.on(requestAuthFx.doneData, (_, response) => response.user)
$authStatus.on(requestAuthFx.done, () => AuthStatus.Authenticated)

//#endregion

//#region //* Route Chain

export function chainAuthorize<Params extends RouteParams>(
  route: RouteInstance<Params>
): RouteInstance<Params> {
  const sessionCheckStarted = createEvent<RouteParamsAndQuery<Params>>()

  const alreadyAuthenticated = sample({
    clock: sessionCheckStarted,
    source: $authStatus,
    filter: (status) => status === AuthStatus.Authenticated,
  })

  sample({
    clock: sessionCheckStarted,
    filter: route.$isOpened,
    fn: () => ({}),
    target: requestAuthFx,
  })

  return chainRoute({
    route,
    beforeOpen: sessionCheckStarted,
    openOn: [alreadyAuthenticated, requestAuthFx.done],
  })
}

//#endregion

//? Идеальный вариант
// Начали проверку
// Отправили запрос за токеном
// Токена нет
// Отправили запрос за юзером
// Получили вк-юзера
// Отправили запрос на авторизацию
// Авторизировались
// Сохранили токен

//?
// Начали проверку
// Отправили запрос за токеном
// Токен есть
// Отправили запрос на проверку
// Проверка прошла успешно
//
