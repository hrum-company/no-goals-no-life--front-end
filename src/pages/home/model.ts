import { sample } from 'effector'

import { booksRequested } from 'entities/book'

import { routes } from 'shared/routing'
import { chainAuthorize } from 'shared/session'

export const currentRoute = routes.home
export const authorizedRoute = chainAuthorize(currentRoute)

sample({
  clock: [authorizedRoute.$isOpened],
  fn: () => null,
  target: booksRequested,
})
