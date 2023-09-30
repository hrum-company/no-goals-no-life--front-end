import { Event, Store, createEvent, createStore } from 'effector'

export interface ModalModel<OpenParams = void> {
  $open: Store<boolean>

  opened: Event<OpenParams>
  closed: Event<void>
}

export function ModalModelFactory<OpenParams = void>(): ModalModel<OpenParams> {
  const $open = createStore<boolean>(false)

  const opened = createEvent<OpenParams>()
  const closed = createEvent()

  $open.on(opened, () => true)
  $open.on(closed, () => false)

  return {
    $open,
    opened,
    closed,
  }
}
