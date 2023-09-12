import { createRoutesView } from 'atomic-router-react'

import { CreateGoalRoute } from './create-goal'
import { EditGoalRoute } from './edit-goal'
import { FriendsListsRoute } from './friends-lists'
import { ShowGoalRoute } from './goal'
import { HomeRoute } from './home'
import { OnBoardRoute } from './on-board'

export const Pages = createRoutesView({
  routes: [
    OnBoardRoute,
    HomeRoute,
    CreateGoalRoute,
    EditGoalRoute,
    ShowGoalRoute,
    FriendsListsRoute,
  ],
})
