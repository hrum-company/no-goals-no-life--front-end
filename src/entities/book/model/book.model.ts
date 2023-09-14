import { Store, attach, combine, createStore, sample } from 'effector'
import { Event } from 'effector/compat'

import { Book, api } from 'shared/api'
import { ModelEventFactory } from 'shared/helpers/effector'

//#region //* API

const requestBookAllFx = attach({ effect: api.book.requestBookAllFx })

//#endregion

//#region //* Store

export const $books = createStore<Book[]>([])
export const $book = combine($books, (books) => (books.length ? books[0] : null))

//#endregion

//#region //* Events

const loadAll = ModelEventFactory()

//#endregion

//#region //* Effects

//#endregion

//#region //* Bussines Logic

//? Load All
sample({
  clock: [loadAll.inited],
  fn: () => null,
  target: requestBookAllFx,
})

loadAll.$pending = requestBookAllFx.pending
$books.on(requestBookAllFx.doneData, (_, books) => books)

sample({
  clock: requestBookAllFx.done,
  target: loadAll.done,
})

//#endregion

//#region //* Model

interface ModelEvent<T> {
  inited: Event<T>
  $pending: Store<boolean>
  done: Event<void>
}

export interface BookModel {
  $items: Store<Book[]>
  $item: Store<Book | null>

  loadAll: ModelEvent<void>
}

export const $$book: BookModel = {
  $items: $books,
  $item: $book,

  loadAll: loadAll,
}

//#endregion

//#region //* Helpers

//#endregion
