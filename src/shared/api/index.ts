import auth from './auth'
import book from './book'
import friendsBook from './friends-book'
import goal from './goal'
import goalMark from './goal-mark'
import user from './user'

export * from './base-types'

export { default as authApi } from './auth'
export * from './book'
export * from './goal'
export * from './goal-mark'
export * from './user'
export * from './friends-book'

export const api = {
  auth,
  user,
  book,
  goal,
  goalMark,
  friendsBook,
}
