import { Book } from '../book'
import { User } from '../user'

export interface FriendsBook {
  user: User
  list: Book
}
