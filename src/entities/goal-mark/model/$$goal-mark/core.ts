import { createStore } from 'effector'

import { GoalMark } from 'shared/api'

export const $goalMarks = createStore<GoalMark[]>([])
