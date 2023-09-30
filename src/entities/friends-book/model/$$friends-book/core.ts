import { combine, createEvent, createStore } from 'effector'

import { FriendsBook } from 'shared/api'
import { PushItemFactory } from 'shared/helpers/effector'

//* Store

export const $friendsBooks = createStore<FriendsBook[]>([])
export const $activeFriendsBookId = createStore<number | null>(null)

export const $friendsBook = combine(
  $friendsBooks,
  $activeFriendsBookId,
  (friendsBook, activeFriendsBookId) => {
    if (!friendsBook.length) {
      return null
    }

    return friendsBook.find(({ book }) => book.id === activeFriendsBookId)
  }
)

//* Events

export const activeFriendsBookChanged = createEvent<number | null>()

//* Effects

export const pushFriendsBookFx = PushItemFactory<FriendsBook>(
  ({ book: currentBook }, { book }) => currentBook.id === book.id
)

//* Bussines Logic

$activeFriendsBookId.on(activeFriendsBookChanged, (_, id) => id)
