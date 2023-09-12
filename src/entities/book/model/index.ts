import { attach, combine, createEvent, createStore, sample } from 'effector'

import { Book, api } from 'shared/api'

const requestBookAllFx = attach({ effect: api.book.requestBookAllFx })

export const $books = createStore<Book[]>([])
export const $book = combine($books, (books) => (books.length ? books[0] : null))

export const $booksLoading = requestBookAllFx.pending

export const booksRequested = createEvent()
export const booksReloaded = createEvent()

sample({
  clock: [booksRequested, booksReloaded],
  fn: () => null,
  target: requestBookAllFx,
})

$books.on(requestBookAllFx.doneData, (_, goalLists) => goalLists)
