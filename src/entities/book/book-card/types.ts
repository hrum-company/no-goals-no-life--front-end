import { Book, User } from 'shared/api'

export interface BookCardProps {
  book: Book

  user?: User

  actionsSlot?: React.ReactNode
}
