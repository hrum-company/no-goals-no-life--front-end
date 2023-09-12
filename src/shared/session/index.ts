import { RouteInstance, RouteParams, RouteParamsAndQuery, chainRoute } from 'atomic-router'
import { attach, createEvent, createStore, sample } from 'effector'

import { User, api } from 'shared/api'

enum AuthStatus {
  Initial = 0,
  Pending,
  Authenticated,
  AuthError,
}

const requestUserMeFx = attach({ effect: api.user.requestUserMeFx })

export const $user = createStore<User | null>(null)
export const $authStatus = createStore<AuthStatus>(AuthStatus.Initial)

$authStatus.on(requestUserMeFx, (status) => {
  if (status === AuthStatus.Initial) return AuthStatus.Pending

  return status
})

$user.on(requestUserMeFx.doneData, (_, user) => user)
$authStatus.on(requestUserMeFx.doneData, () => AuthStatus.Authenticated)

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
    fn: () => null,
    target: requestUserMeFx,
  })

  return chainRoute({
    route,
    beforeOpen: sessionCheckStarted,
    openOn: [alreadyAuthenticated, requestUserMeFx.done],
  })
}
