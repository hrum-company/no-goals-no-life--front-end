import { attach, combine, createEffect, createEvent, createStore, sample } from 'effector'
import { reset } from 'patronum'

import { $goal } from 'entities/goal'

import { api } from 'shared/api'
import { routes } from 'shared/routing'

//#region Api -----

const requestEditGoalFx = attach({ effect: api.goal.requestEditGoalFx })

//#endregion -----

//#region Stores -----

const $params = routes.goal.edit.$params

export const $editGoalName = $goal.map((goal) => goal?.name || '')
export const $editGoalDescription = createStore<string>('')
export const $editGoalIsEdited = combine(
  $goal,
  $editGoalDescription,
  (goal, desciprion) => goal?.description !== desciprion
)

export const $editGoalPending = requestEditGoalFx.pending

//#endregion -----

//#region Events -----

// Его мы вызываем когда нам нужно из $goal взять description и записать его в $editGoalDescription
export const editGoalDescriptionSetted = createEvent()

export const editFormReseted = reset({
  target: [$editGoalDescription],
})
export const editGoalDescriptionChanged = createEvent<string>()

export const editGoalSubmited = createEvent()

//#endregion -----

//#region Effects -----

const successEditGoalFx = createEffect(async () => {
  console.log('Изменения сохранены')
})

//#endregion -----

//#region Business Logic -----

sample({
  clock: editGoalDescriptionSetted,
  source: { goal: $goal },
  fn: ({ goal }) => goal?.description || '',
  target: editGoalDescriptionChanged,
})

$goal.watch((goal) => goal && editGoalDescriptionChanged(goal.description || ''))

$editGoalDescription.on(editGoalDescriptionChanged, (_, changedDescription) => changedDescription)

sample({
  clock: editGoalSubmited,
  source: { params: $params, description: $editGoalDescription },
  fn: ({ params, ...other }) => ({ ...other, bookId: params.bookId, id: params.id }),
  target: requestEditGoalFx,
})

$goal.on(requestEditGoalFx.doneData, (_, goal) => goal)

sample({
  clock: requestEditGoalFx.doneData,
  target: successEditGoalFx,
})

//#endregion -----
