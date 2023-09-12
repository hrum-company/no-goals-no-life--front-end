import { createHistoryRouter, createRoute, createRouterControls } from 'atomic-router'
import { sample } from 'effector'
import { createHashHistory } from 'history'

import { appStarted } from 'shared/config/init'

export const routes = {
  onBoard: createRoute(),
  home: createRoute(),
  goal: {
    create: createRoute<{ listId: number }>(),
    show: createRoute<{ listId: number; id: number }>(),
    edit: createRoute<{ listId: number; id: number }>(),
  },
  friendLists: createRoute(),
}

export const controls = createRouterControls()

export const router = createHistoryRouter({
  routes: [
    {
      path: '/on-board',
      route: routes.onBoard,
    },
    {
      path: '/',
      route: routes.home,
    },
    {
      path: '/goal-list/:listId/goal/create',
      route: routes.goal.create,
    },
    {
      path: '/goal-list/:listId/goal/:id',
      route: routes.goal.show,
    },
    {
      path: '/goal-list/:listId/goal/:id/edit',
      route: routes.goal.edit,
    },
    {
      path: '/friends-lists',
      route: routes.friendLists,
    },
  ],
  controls,
})

sample({
  clock: appStarted,
  fn: () => createHashHistory(),
  target: router.setHistory,
})
