import { sample } from 'effector'

import { $$goal, requestGoalSampleFactory } from 'entities/goal'
import { $$goalMark } from 'entities/goal-mark'

import { routes } from 'shared/routing'
import { chainAuthorize } from 'shared/session'

export const currentRoute = routes.goal.edit
export const authorizedRoute = chainAuthorize(currentRoute)

requestGoalSampleFactory(authorizedRoute)

authorizedRoute.opened.watch(() => $$goal.toEditReseted())

sample({
  clock: currentRoute.opened,
  source: { loaded: $$goalMark.loadAll.$alreadyLoaded, pending: $$goalMark.loadAll.$pending },
  filter: ({ loaded, pending }) => !loaded && !pending,
  target: $$goalMark.loadAll.requested,
})
