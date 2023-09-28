import { attach, combine, createEffect, createEvent, createStore, sample } from 'effector'

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
const fieldName = EditableFieldFactory<string>('')
const fieldHidden = EditableFieldFactory<boolean>(false)

//* Events
const fieldsReseted = createEvent()
const editBookRequested = createEvent()

//* Effects
const resetFieldsFx = createEffect(({ name, hidden }: { name: string; hidden: boolean }) => {
  fieldName.changed(name)
  fieldHidden.changed(hidden)
})

const editRequestFx = attach({
  effect: requestFx,
  source: { id: $editableBookId, name: fieldName.$value, hidden: fieldHidden.$value },
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

//* Bussines Logic
// Сброс при вызове события сброса
sample({
  clock: fieldsReseted,
  source: { book: $editableBook },
  filter: ({ book }) => !!book,
  fn: ({ book }) => book as Book,
  target: resetFieldsFx,
})

// Сброс при обновлении активного book
sample({
  clock: $editableBook.updates,
  filter: (book) => !!book,
  fn: (book) => book as Book,
  target: resetFieldsFx,
})

// Отправляем запрос на изменение
sample({
  clock: editBookRequested,
  target: editRequestFx,
})

// Пушим измененную книгу
sample({
  clock: editRequestFx.doneData,
  target: pushEditedBookFx,
})

// Сохраняем в стор пропушенные значения
$books.on(pushEditedBookFx.doneData, (_, books) => books)
