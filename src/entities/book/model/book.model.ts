import { Store, attach, combine, createEvent, createStore, sample } from 'effector'
import { Event } from 'effector/compat'

import { Book, api } from 'shared/api'
import { EditableFieldFactory, ModelEventFactory } from 'shared/helpers/effector'

import { EditableField } from './../../../shared/helpers/effector/factories'

//#region //* API

const requestBookAllFx = attach({ effect: api.book.requestBookAllFx })
const requestEditBookFx = attach({ effect: api.book.requestEditBookFx })

//#endregion

//#region //* Store

const $books = createStore<Book[]>([])
const $book = combine($books, (books) => (books.length ? books[0] : null))

const toEditName = EditableFieldFactory<string>('')
const toEditHidden = EditableFieldFactory<boolean>(false)

//#endregion

//#region //* Events

const toEditReseted = createEvent()

const loadAll = ModelEventFactory()
const edit = ModelEventFactory()

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

//? Edit

$book.watch((book) => {
  if (!book) {
    return
  }

  toEditName.changed(book?.name)
  toEditHidden.changed(book?.hidden)
})

//! Можно сделать лучше
sample({
  clock: toEditReseted,
  source: $book,
  fn: (book) => book?.name || '',
  target: toEditName.changed,
})

sample({
  clock: toEditReseted,
  source: $book,
  fn: (book) => book?.hidden || false,
  target: toEditHidden.changed,
})

sample({
  clock: edit.inited,
  source: { book: $book, name: toEditName.$value, hidden: toEditHidden.$value },
  filter: ({ book }) => !!book,
  fn: ({ book, name, hidden }) => ({
    id: book?.id || 0,
    name,
    hidden,
  }),
  target: requestEditBookFx,
})

edit.$pending = requestEditBookFx.pending
$books.on(requestEditBookFx.doneData, (books, editedBook) => {
  const bookIndex = books.findIndex((book) => book.id === editedBook.id)

  if (bookIndex !== -1) {
    books.splice(bookIndex, 1, editedBook)

    return [...books]
  }

  return [editedBook]
})

sample({
  clock: requestEditBookFx.done,
  target: edit.done,
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

  toEdit: {
    name: EditableField<string>
    hidden: EditableField<boolean>
  }
  toEditReseted: Event<void>

  loadAll: ModelEvent<void>
  edit: ModelEvent<void>
}

export const $$book: BookModel = {
  $items: $books,
  $item: $book,

  toEdit: {
    name: toEditName,
    hidden: toEditHidden,
  },
  toEditReseted: toEditReseted,

  loadAll: loadAll,
  edit: edit,
}

//#endregion
