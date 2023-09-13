import { sample } from 'effector'

import { $$goal } from 'entities/goal'

import { routes } from 'shared/routing'
import { chainAuthorize } from 'shared/session'

export const currentRoute = routes.goal.create
export const authorizedRoute = chainAuthorize(currentRoute)

sample({
  clock: currentRoute.opened,
  target: $$goal.toCreateReseted,
})
