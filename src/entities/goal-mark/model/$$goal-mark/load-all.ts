import { attach } from 'effector'

import { api } from 'shared/api'
import { LoadAllFactory } from 'shared/helpers/effector'

import { $goalMarks } from './core'

const requestFx = attach({ effect: api.goalMark.requestFindAllGoalMarkFx })

export const loadAll = LoadAllFactory($goalMarks, requestFx)
