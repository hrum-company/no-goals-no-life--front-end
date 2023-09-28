import { createEffect } from 'effector'

import { request } from '../request'
import { FriendsBook } from './types'

//#region Find All

type FindAllFrinedsGoalResponse = FriendsBook[]

const requestFindAllFriendsBookFx = createEffect<void, FindAllFrinedsGoalResponse>(async () => {
  return request<FindAllFrinedsGoalResponse>({
    path: '/friends-book',
  })
})

//#endregion

export default {
  requestFindAllFriendsBookFx,
}

export * from './types'
