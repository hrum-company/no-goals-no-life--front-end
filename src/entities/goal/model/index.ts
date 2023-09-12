import { attach, createEffect, createEvent, createStore, sample } from 'effector'

import { Goal, api } from 'shared/api'
import { routes } from 'shared/routing'

const requestFindOneGoalFx = attach({ effect: api.goal.requestFindOneGoalFx })

const $params = routes.goal.show.$params

export const $goal = createStore<Goal | null>(null)

export const $goalLoading = requestFindOneGoalFx.pending

export const goalRequested = createEvent()
export const goalReloaded = createEvent()

const redirectToHomeFx = createEffect(() => {
  routes.home.open()
})

sample({
  clock: [goalRequested, goalReloaded],
  source: { params: $params },
  fn: ({ params }) => params,
  target: requestFindOneGoalFx,
})

sample({
  clock: requestFindOneGoalFx.fail,
  target: redirectToHomeFx,
})

$goal.on(requestFindOneGoalFx.doneData, (_, goal) => goal)
