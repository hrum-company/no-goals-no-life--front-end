import bridge, { UserInfo } from '@vkontakte/vk-bridge'
import { createEffect, createStore, sample } from 'effector'

import { $$vkAppInited } from './vk-app-init.model'

//#region //* Store

export const $vkCurrentUser = createStore<UserInfo | null>(null)

//#endregion

//#region //* Effects

const vkLoadCurrentUserFx = createEffect(async () => {
  const currentUser = await bridge.send('VKWebAppGetUserInfo')

  return currentUser
})

//#endregion

//#region //* BussinessLogic

sample({
  clock: $$vkAppInited.inited,
  target: vkLoadCurrentUserFx,
})

$vkCurrentUser.on(vkLoadCurrentUserFx.doneData, (_, user) => user)

//#endregion
