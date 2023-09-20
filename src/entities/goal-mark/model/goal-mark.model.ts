import { Store, createStore, sample } from 'effector'
import { attach } from 'effector/effector.umd'

import { GoalMark, api } from 'shared/api'
import { ModelEvent, ModelEventFactory } from 'shared/helpers/effector'

//#region //* API

const requestFindAllGoalMarkFx = attach({ effect: api.goalMark.requestFindAllGoalMarkFx })

//#endregion

//#region //* Store

const $goalMarks = createStore<GoalMark[]>([])
const $loaded = createStore<boolean>(false)

//#endregion

//#region //* Events

const loadAll = ModelEventFactory()

//#endregion

//#region //* Bussines Logic

sample({
  clock: loadAll.inited,
  fn: () => null,
  target: requestFindAllGoalMarkFx,
})

loadAll.$pending = requestFindAllGoalMarkFx.pending
$goalMarks.on(requestFindAllGoalMarkFx.doneData, (_, marks) => marks)
$loaded.on(requestFindAllGoalMarkFx.done, () => true)

sample({
  clock: requestFindAllGoalMarkFx.done,
  target: loadAll.done,
})

//#endregion

//#region //* Model

export interface GoalMarkModel {
  $items: Store<GoalMark[]>

  loadAll: ModelEvent<void>
  $loadAllLoaded: Store<boolean>
}

export const $$goalMark: GoalMarkModel = {
  $items: $goalMarks,

  loadAll: loadAll,
  $loadAllLoaded: $loaded,
}

//#endregion
