import { createEvent, sample } from 'effector'

import { $$vkAppInited } from 'shared/vk-bridge'

export const appStarted = createEvent()

sample({
  clock: appStarted,
  target: $$vkAppInited.init,
})
