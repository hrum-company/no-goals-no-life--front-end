import { Event, Store, createEvent, createStore } from 'effector'

/**
 * Че-то там кто-то там.
 *
 * @param {Store<T>} $value - стор значения
 * @param {Event<T>} changed - события для изменения стора значения
 */
export interface EditableField<T> {
  [key: string]: Store<T> | Event<T>
  $value: Store<T>
  changed: Event<T>
}

export interface ModelEvent<T> {
  inited: Event<T>
  $pending: Store<boolean>
  done: Event<void>
}

export function EditableFieldFactory<T>(initialValue: T): EditableField<T> {
  const $value = createStore<T>(initialValue)
  const changed = createEvent<T>()

  $value.on(changed, (_, value) => value)

  return {
    $value,
    changed,
  }
}

export function ModelEventFactory<T = void>(): ModelEvent<T> {
  return {
    inited: createEvent<T>(),
    $pending: createStore<boolean>(false),
    done: createEvent(),
  }
}

export * from './model'
export * from './push-item.factory'
