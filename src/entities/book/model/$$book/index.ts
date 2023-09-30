import { $book, $books, activeBookChanged } from './core'
import { edit } from './edit'

export const $$book = {
  $items: $books,
  $item: $book,

  activeBookChanged: activeBookChanged,

  edit: edit,
}
