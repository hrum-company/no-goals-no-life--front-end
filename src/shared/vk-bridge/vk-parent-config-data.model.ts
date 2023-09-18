import bridge, { ParentConfigData } from '@vkontakte/vk-bridge'
import { createEvent, createStore } from 'effector/compat'

//#region //* Stores

export const $vkParentConfigData = createStore<ParentConfigData | null>(null)

//#endregion

//#region //* Events

const vkAppConfigUpdated = createEvent<ParentConfigData>()

//#endregion

//#region //* Bussiness Logic

bridge.subscribe((e) => {
  if (e.detail.type === 'VKWebAppUpdateConfig') {
    vkAppConfigUpdated(e.detail.data)
  }
})

$vkParentConfigData.on(vkAppConfigUpdated, (_, data) => data)

//#endregion
