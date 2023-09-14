import { createEffect, createEvent, sample } from 'effector'

import { $$goal } from 'entities/goal'

import { $$alert } from 'shared/alerts'
import { routes } from 'shared/routing'

const $params = routes.goal.show.$params

export const completeGoalSubmited = createEvent()

const showSuccessAlertFx = createEffect(async () => {
  $$alert.pushed({
    data: {
      type: 'success',
      message: 'Цель завершена',
    },
  })
})

sample({
  clock: completeGoalSubmited,
  source: { params: $params, pending: $$goal.complete.$pending },
  filter: ({ pending }) => !pending,
  fn: ({ params }) => ({
    bookId: Number(params.bookId),
    id: Number(params.id),
  }),
  target: $$goal.complete.inited,
})

sample({
  clock: $$goal.complete.done,
  target: [showSuccessAlertFx],
})
