import { combine, createEvent, createStore, sample } from 'effector'

import { Book } from 'shared/api'
import { PushItemFactory } from 'shared/helpers/effector'

//* Stores

export const $books = createStore<Book[]>([], { name: 'books' })
export const $activeBookId = createStore<number | null>(null, { name: 'activeBookId' })

export const $book = combine($books, $activeBookId, (books, activeBookId) => {
  if (!books.length) {
    return null
  }

  return books.find(({ id }) => id === activeBookId) || null
})

//* Events

export const activeBookChanged = createEvent<number | null>()

//* Effects

export const pushBookFx = PushItemFactory<Book>(({ id: currentId }, { id }) => currentId === id)

//* Bussines Logic

$activeBookId.on(activeBookChanged, (_, id) => id)

sample({
  clock: $books.updates,
  source: $activeBookId,
  filter: (id) => !id,
  fn: (_, [book]) => book.id,
  target: activeBookChanged,
})

sample({
  clock: $book.updates,
  source: { id: $activeBookId, books: $books },
  filter: ({ id }, book) => !!id && !book,
  fn: ({ books }) => (books.length ? books[0].id : null),
  target: activeBookChanged,
})
