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

type CreateGoalRequestFx = Omit<Goal, 'id' | 'order' | 'completed' | 'createdAt' | 'completedAt'>
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

type EditGoalRequestFx = Omit<Goal, 'name' | 'order' | 'completed' | 'createdAt' | 'completedAt'>
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

//#region Complete

type FindCompleteGoalRequestFx = { id: ID; bookId: ID }
type FindCompleteGoalResponse = Goal

const requestCompleteGoalFx = createEffect<FindCompleteGoalRequestFx, FindCompleteGoalResponse>(
  async ({ id, bookId }) => {
    return request<FindCompleteGoalResponse>({
      method: 'put',
      path: `/book/${bookId}/goal/${id}/complete`,
    })
  }
)

//#endregion

export default {
  requestFindOneGoalFx,

  requestCreateGoalFx,

  requestEditGoalFx,

  requestCompleteGoalFx,
}

export * from './types'
