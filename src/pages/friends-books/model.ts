import { sample } from 'effector'

import { $$friendsBook } from 'entities/friends-book'

import { routes } from 'shared/routing'
import { chainAuthorize } from 'shared/session'

export const currentRoute = routes.friendsBooks
export const authorizedRoute = chainAuthorize(currentRoute)

sample({
  clock: [authorizedRoute.$isOpened],
  target: $$friendsBook.loadAll.requested,
})
