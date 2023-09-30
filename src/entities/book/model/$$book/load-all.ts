import { attach, createEffect, createEvent, sample } from 'effector'
import { some } from 'patronum'

import { Book, api } from 'shared/api'

import { $activeBookId, $books, activeBookChanged } from './core'

//* Api

const requestFx = attach({ effect: api.book.requestBookAllFx })

//* Events

const allBooksRequested = createEvent()

//* Effects

const validateActiveBookIdFx = createEffect(
  async ({ activeBookId, loadedBooks }: { activeBookId: number | null; loadedBooks: Book[] }) => {
    if (!loadedBooks.length) {
      return null
    }

    if (!activeBookId) {
      return loadedBooks[0].id
    }

    const activeBook = loadedBooks.find(({ id }) => id === activeBookId)

    if (!activeBook) {
      return loadedBooks[0].id
    }

    return activeBookId
  }
)

//* Pendings

const $pending = some({
  stores: [requestFx.pending, validateActiveBookIdFx.pending],
  predicate: true,
})

//* Bussines Logic

// Отправляем запрос на получение данных
sample({
  clock: allBooksRequested,
  source: { pending: requestFx.pending },
  filter: ({ pending }) => !pending,
  target: requestFx,
})

// Получаем данные
$books.on(requestFx.doneData, (_, books) => books)

// Валидация полученных данных
sample({
  clock: requestFx.doneData,
  source: { activeBookId: $activeBookId },
  fn: ({ activeBookId }, loadedBooks) => ({ activeBookId, loadedBooks }),
  target: validateActiveBookIdFx,
})

// Изменяем активную книжку
sample({
  clock: validateActiveBookIdFx.doneData,
  target: activeBookChanged,
})

//* Exports

export const loadAll = {
  $pending: $pending,

  requested: allBooksRequested,
}
