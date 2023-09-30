import { attach } from 'effector'

import { api } from 'shared/api'
import { LoadAllFactory } from 'shared/helpers/effector'

import { $friendsBooks } from './core'

//* Api

const requestFx = attach({ effect: api.friendsBook.requestFindAllFriendsBookFx })

const loadAll = LoadAllFactory($friendsBooks, requestFx)

//* Exports

export { loadAll }
