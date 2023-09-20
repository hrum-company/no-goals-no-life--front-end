import { sample } from 'effector'

import { $$goal } from 'entities/goal'
import { $$goalMark } from 'entities/goal-mark'

import { routes } from 'shared/routing'
import { chainAuthorize } from 'shared/session'

export const currentRoute = routes.goal.create
export const authorizedRoute = chainAuthorize(currentRoute)

sample({
  clock: currentRoute.opened,
  target: $$goal.toCreateReseted,
})

sample({
  clock: currentRoute.opened,
  source: { loaded: $$goalMark.$loadAllLoaded, pending: $$goalMark.loadAll.$pending },
  filter: ({ loaded, pending }) => !loaded && !pending,
  target: $$goalMark.loadAll.inited,
})
