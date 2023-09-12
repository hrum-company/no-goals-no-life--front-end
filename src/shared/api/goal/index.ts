import { createEffect } from 'effector'

import { ID } from '..'
import { request } from '../request'
import { Goal } from './types'

//#region Find One

type FindOneGoalRequestFx = { id: ID; bookId: ID }
type FindOneGoalResponse = Goal

const requestFindOneGoalFx = createEffect<FindOneGoalRequestFx, FindOneGoalResponse>(
  async ({ id, bookId }) => {
    return request<FindOneGoalResponse>({
      path: `/book/${bookId}/goal/${id}`,
    })
  }
)

//#endregion

//#region Create

type CreateGoalRequestFx = Omit<Goal, 'id' | 'completed' | 'createdAt' | 'completedAt'>
type CreateGoalRequest = Omit<CreateGoalRequestFx, 'bookId'>
type CreateGoalResponse = Goal

const requestCreateGoalFx = createEffect<CreateGoalRequestFx, CreateGoalResponse>(
  async ({ bookId, ...data }) => {
    return request<Goal, CreateGoalRequest>({
      method: 'post',
      path: `/book/${bookId}/goal`,
      data,
    })
  }
)

//#endregion

//#region Edit

type EditGoalRequestFx = Omit<Goal, 'name' | 'completed' | 'createAt' | 'completedAt'>
type EditGoalRequest = Omit<EditGoalRequestFx, 'id' | 'bookId'>
type EditGoalResponse = Goal

const requestEditGoalFx = createEffect<EditGoalRequestFx, EditGoalResponse>(
  async ({ id, bookId, ...data }) => {
    return request<EditGoalResponse, EditGoalRequest>({
      method: 'put',
      path: `/book/${bookId}/goal/${id}`,
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
