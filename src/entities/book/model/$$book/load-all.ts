import { attach } from 'effector'

import { api } from 'shared/api'
import { LoadAllFactory } from 'shared/helpers/effector'

import { $books } from './core'

//* Api

const requestFx = attach({ effect: api.book.requestBookAllFx })

//* Exports

export const loadAll = LoadAllFactory($books, requestFx)
