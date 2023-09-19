import auth from './auth'
import book from './book'
import goal from './goal'
import user from './user'

export * from './base-types'
export { default as authApi } from './auth'
export * from './book'
export * from './goal'
export * from './user'

export const api = {
  auth,
  user,
  book,
  goal,
}
