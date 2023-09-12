import { createEffect, createEvent, sample } from 'effector'

import { $$goal } from 'entities/goal'

import { routes } from 'shared/routing'

const $params = routes.goal.create.$params

export const createGoalSubmited = createEvent()

const redirectToHomeFx = createEffect(async () => {
  routes.home.open()
})

sample({
  clock: createGoalSubmited,
  source: { params: $params },
  fn: ({ params }) => params.bookId,
  target: $$goal.create.inited,
})

sample({
  clock: $$goal.create.done,
  target: redirectToHomeFx,
})
