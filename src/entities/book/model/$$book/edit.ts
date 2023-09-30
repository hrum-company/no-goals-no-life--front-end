import { attach, combine, createEffect, createEvent, createStore, sample } from 'effector'
import { reset, some } from 'patronum'

import { Book, api } from 'shared/api'
import { EditableFieldFactory } from 'shared/helpers/effector'

import { $books, pushBookFx } from './core'

//* API

const requestFx = attach({ effect: api.book.requestEditBookFx })

//* Stores

const $editableBookId = createStore<number | null>(null)
const $editableBook = combine($books, $editableBookId, (books, bookId) => {
  if (!books.length) {
    return null
  }

  return books.find(({ id }) => id === bookId) || null
})

//* Fields

const editFieldName = EditableFieldFactory<string>('')
const editFieldHidden = EditableFieldFactory<boolean>(false)

//* Events

const reseted = createEvent()

const editableBookIdChanged = createEvent<number | null>()

const editRequested = createEvent()
const done = createEvent()

//* Effects

const updateFieldsFx = createEffect(({ name, hidden }: { name: string; hidden: boolean }) => {
  editFieldName.changed(name)
  editFieldHidden.changed(hidden)
})

const editRequestFx = attach({
  effect: requestFx,
  source: { id: $editableBookId, name: editFieldName.$value, hidden: editFieldHidden.$value },
  mapParams: (_, { id, ...data }) => ({
    id: id || 0,
    ...data,
  }),
})

const pushEditedBookFx = attach({
  effect: pushBookFx,
  source: { books: $books },
  mapParams: (book: Book, { books }) => ({ book, books }),
})

//* Pendings

const $editPending = some({
  stores: [editRequestFx.pending, pushEditedBookFx.pending],
  predicate: true,
})

//* Bussines Logic

$editableBookId.on(editableBookIdChanged, (_, id) => id)

// Сброс при обновлении активного book
sample({
  clock: $editableBook.updates,
  filter: (book) => !!book,
  fn: (book) => book as Book,
  target: updateFieldsFx,
})

sample({
  clock: $editableBookId.updates,
  filter: (id) => !id,
  target: reseted,
})

reset({
  clock: reseted,
  target: [editFieldName.$value, editFieldHidden.$value],
})

// Отправляем запрос на изменение
sample({
  clock: editRequested,
  source: $editPending,
  filter: (pending) => !pending,
  target: editRequestFx,
})

// Пушим измененную книгу
sample({
  clock: editRequestFx.doneData,
  target: pushEditedBookFx,
})

// Done
sample({
  clock: editRequestFx.done,
  target: done,
})

// Сохраняем в стор пропушенные значения
$books.on(pushEditedBookFx.doneData, (_, books) => books)

//* Exports

export const edit = {
  $pending: $editPending,

  fields: {
    name: editFieldName,
    hidden: editFieldHidden,
  },

  editableBookChanged: editableBookIdChanged,
  requested: editRequested,
  done: done,
}
