import { createEffect } from 'effector'

import { ID } from '..'
import { request } from '../request'
import { Goal } from './types'

//#region Find One

type FindOneGoalRequestFx = Pick<Goal, 'id' | 'bookId'>
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

type CreateGoalRequestFx = Pick<Goal, 'bookId' | 'name' | 'markId' | 'description'>
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

type EditGoalRequestFx = Pick<Goal, 'id' | 'bookId' | 'markId' | 'description'>
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
