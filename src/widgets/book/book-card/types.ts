import { Book } from 'shared/api'

export interface BookCardProps {
  book: Book
  title?: string

  buttonSide?: React.ReactNode
}
