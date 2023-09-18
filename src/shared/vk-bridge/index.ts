import bridge from '@vkontakte/vk-bridge'

bridge.subscribe((e) => {
  console.log(e.detail.type, { data: e.detail.data })
})

export * from './vk-app-init.model'
export * from './vk-current-user.model'
export * from './vk-parent-config-data.model'
