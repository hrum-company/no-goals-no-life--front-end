import { createEffect, createEvent, sample } from 'effector'

import { $$goal } from 'entities/goal'

import { $$alert } from 'shared/alerts'
import { routes } from 'shared/routing'

const $params = routes.goal.create.$params

export const createGoalSubmited = createEvent()

const redirectToHomeFx = createEffect(async () => {
  routes.home.open()
})

const showSuccessAlertFx = createEffect(async () => {
  $$alert.pushed({
    data: {
      type: 'success',
      message: 'Цель успешно создана',
    },
  })
})

sample({
  clock: createGoalSubmited,
  source: { params: $params },
  fn: ({ params }) => params.bookId,
  target: $$goal.create.inited,
})

sample({
  clock: $$goal.create.done,
  target: [redirectToHomeFx, showSuccessAlertFx],
})
