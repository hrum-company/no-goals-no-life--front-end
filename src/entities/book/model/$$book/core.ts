import { combine, createEffect, createEvent, createStore } from 'effector'

import { Book } from 'shared/api'

//* Stores

export const $books = createStore<Book[]>([])
export const $activeBookId = createStore<number | null>(null)

export const $book = combine($books, $activeBookId, (books, activeBookId) => {
  if (!books.length) {
    return null
  }

  return books.find(({ id }) => id === activeBookId)
})

//* Events

export const activeBookChanged = createEvent<number | null>()

//* Effects

export const pushBookFx = createEffect(({ book, books }: { book: Book; books: Book[] }) => {
  const bookIndex = books.findIndex(({ id }) => id === book.id)

  if (bookIndex === -1) {
    return [...books, book]
  }

  books.splice(bookIndex, 1, book)

  return [...books]
})

//* Bussines Logic

$activeBookId.on(activeBookChanged, (_, id) => id)
