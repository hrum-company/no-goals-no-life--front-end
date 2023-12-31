import { Book, User } from 'shared/api'

export interface BookCardProps {
  book: Book

  buttonSide?: React.ReactNode

  user?: User
  actionsSlot?: React.ReactNode
}
