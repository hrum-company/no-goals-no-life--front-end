import { createEffect } from 'effector'

type FindIndexCallback<T> = (currentItem: T, pushableItem: T) => boolean
type EffectParams<T> = { item: T; items: T[] }

export function PushItemFactory<T>(findIndexCallback: FindIndexCallback<T>) {
  const pushItemFx = createEffect(({ item, items }: EffectParams<T>) => {
    const itemIndex = items.findIndex((currentItem) => findIndexCallback(currentItem, item))

    if (itemIndex === -1) {
      return [...items, item]
    }

    items.splice(itemIndex, 1, item)

    return [...items]
  })

  return pushItemFx
}
