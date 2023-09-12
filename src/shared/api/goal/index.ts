import { createEffect } from 'effector'

import { ID } from '..'
import { request } from '../request'
import { Goal } from './types'

//#region Find One

type FindOneGoalRequestFx = { id: ID; listId: ID }
type FindOneGoalResponse = Goal

const requestFindOneGoalFx = createEffect<FindOneGoalRequestFx, FindOneGoalResponse>(
  async ({ id, listId }) => {
    return request<FindOneGoalResponse>({
      path: `/goal-list/${listId}/goal/${id}`,
    })
  }
)

//#endregion

//#region Create

type CreateGoalRequestFx = Omit<Goal, 'id' | 'completed' | 'createAt' | 'completedAt'>
type CreateGoalRequest = Omit<CreateGoalRequestFx, 'listId'>
type CreateGoalResponse = Goal

const requestCreateGoalFx = createEffect<CreateGoalRequestFx, CreateGoalResponse>(
  async ({ listId, ...data }) => {
    return request<Goal, CreateGoalRequest>({
      method: 'post',
      path: `/goal-list/${listId}/goal`,
      data,
    })
  }
)

//#endregion

//#region Edit

type EditGoalRequestFx = Omit<Goal, 'name' | 'completed' | 'createAt' | 'completedAt'>
type EditGoalRequest = Omit<EditGoalRequestFx, 'id' | 'listId'>
type EditGoalResponse = Goal

const requestEditGoalFx = createEffect<EditGoalRequestFx, EditGoalResponse>(
  async ({ id, listId, ...data }) => {
    return request<EditGoalResponse, EditGoalRequest>({
      method: 'put',
      path: `/goal-list/${listId}/goal/${id}`,
      data,
    })
  }
)

//#endregion

export default {
  requestFindOneGoalFx,

  requestCreateGoalFx,

  requestEditGoalFx,
}

export * from './types'
