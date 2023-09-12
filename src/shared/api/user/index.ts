import { createEffect } from 'effector'

import { request } from '../request'
import { User } from './types'

type UserMeResponse = User

const requestUserMeFx = createEffect<null, UserMeResponse>(async () => {
  return request<UserMeResponse>({
    path: '/user/me',
  })
})

export default {
  requestUserMeFx,
}

export * from './types'
