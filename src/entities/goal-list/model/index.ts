import { attach, combine, createEvent, createStore, sample } from 'effector'

import { GoalList, api } from 'shared/api'

const requestGoalListAllFx = attach({ effect: api.goalList.requestGoalListAllFx })

export const $goalLists = createStore<GoalList[]>([])
export const $goalList = combine($goalLists, (goalLists) =>
  goalLists.length ? goalLists[0] : null
)

export const $goalListsLoading = requestGoalListAllFx.pending

export const goalListsRequested = createEvent()
export const goalListsReloaded = createEvent()

sample({
  clock: [goalListsRequested, goalListsReloaded],
  fn: () => null,
  target: requestGoalListAllFx,
})

$goalLists.on(requestGoalListAllFx.doneData, (_, goalLists) => goalLists)
