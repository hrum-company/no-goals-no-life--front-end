import { attach, createEffect, createEvent, sample } from 'effector'

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

//* Bussines Logic

sample({
  clock: allBooksRequested,
  source: { pending: requestFx.pending },
  filter: ({ pending }) => !pending,
  target: requestFx,
})

$books.on(requestFx.doneData, (_, books) => books)

sample({
  clock: requestFx.doneData,
  source: { activeBookId: $activeBookId },
  fn: ({ activeBookId }, loadedBooks) => ({ activeBookId, loadedBooks }),
  target: validateActiveBookIdFx,
})

sample({
  clock: validateActiveBookIdFx.doneData,
  target: activeBookChanged,
})
