import { attach, combine, createEffect, createEvent, createStore, sample } from 'effector'

import { api } from 'shared/api'
import { routes } from 'shared/routing'

const requestCreateGoalFx = attach({ effect: api.goal.requestCreateGoalFx })

const $params = routes.goal.create.$params
export const $createGoalName = createStore<string>('')
export const $createGoalDescription = createStore<string>('')

export const $createGoalCanSubmit = combine($createGoalName, (name) => !!name)

export const $createGoalPending = requestCreateGoalFx.pending

export const createGoalNameChanged = createEvent<string>()
export const createGoalDescriptionChanged = createEvent<string>()

export const createGoalSubmited = createEvent()

const redirectToHomeFx = createEffect(async () => {
  routes.home.open()
})

$createGoalName.on(createGoalNameChanged, (_, changedName) => changedName)
$createGoalDescription.on(createGoalDescriptionChanged, (_, changeDescription) => changeDescription)

sample({
  clock: createGoalSubmited,
  source: { params: $params, name: $createGoalName, description: $createGoalDescription },
  filter: $createGoalCanSubmit,
  fn: ({ params, ...other }) => ({ ...other, bookId: params.bookId }),
  target: requestCreateGoalFx,
})

sample({
  clock: requestCreateGoalFx.doneData,
  target: redirectToHomeFx,
})
