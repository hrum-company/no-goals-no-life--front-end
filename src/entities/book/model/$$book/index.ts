import { $book, $books, activeBookChanged } from './core'
import { edit } from './edit'
import { loadAll } from './load-all'

export const $$book = {
  $items: $books,
  $item: $book,

  activeBookChanged: activeBookChanged,

  loadAll: loadAll,
  edit: edit,
}
