import { RouteInstance } from 'atomic-router'
import { attach, createEffect, createEvent, createStore, sample } from 'effector'

import { Goal, api } from 'shared/api'
import { routes } from 'shared/routing'

const requestFindOneGoalFx = attach({ effect: api.goal.requestFindOneGoalFx })

export const $goal = createStore<Goal | null>(null)

export const $goalLoading = requestFindOneGoalFx.pending

interface GoalRequest {
  id: number
  bookId: number
}

export const goalRequested = createEvent<GoalRequest>()
export const goalReloaded = createEvent<GoalRequest>()

const redirectToHomeFx = createEffect(() => {
  routes.home.open()
})

sample({
  clock: [goalRequested, goalReloaded],
  target: requestFindOneGoalFx,
})

sample({
  clock: requestFindOneGoalFx.fail,
  target: redirectToHomeFx,
})

$goal.on(requestFindOneGoalFx.doneData, (_, goal) => goal)

// External

export function requestGoalSampleFactory(route: RouteInstance<GoalRequest>) {
  sample({
    clock: route.opened,
    source: { params: route.$params, goal: $goal },
    filter: ({ goal, params }) => !(goal && Number(params.id) === Number(goal?.id)),
    fn: ({ params }) => params,
    target: goalRequested,
  })
}
