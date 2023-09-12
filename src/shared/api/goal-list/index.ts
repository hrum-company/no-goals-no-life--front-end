import { createEffect } from 'effector'

import { request } from '../request'
import { GoalList } from './types'

//#region Find All

const requestGoalListAllFx = createEffect<null, GoalList[]>(async () => {
  return request<GoalList[]>({
    path: '/goal-list',
  })
})

//#endregion

//#region Edit

type EditGoalListRequestFx = Omit<GoalList, 'userId' | 'createAt' | 'goals'>
type EditGoalListRequest = Omit<EditGoalListRequestFx, 'id'>
type EditGoalListResponse = GoalList

const requestEditGoalListFx = createEffect<EditGoalListRequestFx, EditGoalListResponse>(
  async ({ id, ...data }) => {
    return request<EditGoalListResponse, EditGoalListRequest>({
      method: 'put',
      path: `/goal-list/${id}`,
      data,
    })
  }
)

//#endregion

export default {
  requestGoalListAllFx,

  requestEditGoalListFx,
}

export * from './types'
