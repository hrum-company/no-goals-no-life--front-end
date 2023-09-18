import { Event, Store, createEvent, createStore } from 'effector'

export interface ModalModel {
  $open: Store<boolean>

  opened: Event<void>
  closed: Event<void>
}

export function ModalModelFactory(): ModalModel {
  const $open = createStore<boolean>(false)

  const opened = createEvent()
  const closed = createEvent()

  $open.on(opened, () => true)
  $open.on(closed, () => false)

  return {
    $open,
    opened,
    closed,
  }
}
