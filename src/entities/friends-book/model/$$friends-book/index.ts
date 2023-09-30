import { $friendsBook, $friendsBooks, activeFriendsBookChanged } from './core'
import { loadAll } from './load-all'

export const $$friendsBook = {
  $items: $friendsBooks,
  $item: $friendsBook,

  activeFriendsBookChanged: activeFriendsBookChanged,

  loadAll: loadAll,
}
