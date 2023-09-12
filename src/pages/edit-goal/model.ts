import { sample } from 'effector/effector.mjs'

import { $goal, goalRequested } from 'entities/goal'

import { routes } from 'shared/routing'
import { chainAuthorize } from 'shared/session'

export const currentRoute = routes.goal.edit
export const authorizedRoute = chainAuthorize(currentRoute)

sample({
  clock: authorizedRoute.opened,
  filter: ($goal) => !!$goal,
  target: goalRequested,
})
