import bridge from '@vkontakte/vk-bridge'
import { createEffect, createEvent, createStore, sample } from 'effector'

//* Stores

const $inited = createStore<boolean>(false)

//* Events

const init = createEvent()

//* Effects

const initFx = createEffect(async () => {
  await bridge.send('VKWebAppInit')
})

//* Bussiness Logic

sample({
  clock: init,
  target: initFx,
})

$inited.on(initFx.done, () => true)

//* Model

export const $$vkAppInited = {
  $value: $inited,
  $pending: initFx.pending,

  init,
  inited: initFx.done,
}
