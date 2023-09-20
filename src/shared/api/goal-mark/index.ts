import { createEffect } from 'effector/effector.mjs'

import { GoalMark } from '..'
import { request } from '../request'

type FindAllGoalMarkResponse = GoalMark[]

const requestFindAllGoalMarkFx = createEffect<null, FindAllGoalMarkResponse>(async () => {
  return request({
    path: '/goal-mark',
  })
})

export default {
  requestFindAllGoalMarkFx,
}

export * from './types'
