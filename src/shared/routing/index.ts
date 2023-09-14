import { createHistoryRouter, createRoute, createRouterControls } from 'atomic-router'
import { sample } from 'effector'
import { createHashHistory } from 'history'

import { appStarted } from 'shared/config/init'

export const routes = {
  onBoard: createRoute(),
  home: createRoute(),
  goal: {
    create: createRoute<{ bookId: number }>(),
    show: createRoute<{ bookId: number; id: number }>(),
    edit: createRoute<{ bookId: number; id: number }>(),
  },
  friendsBooks: createRoute(),

  develop: createRoute(),
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
      path: '/book/:bookId/goal/create',
      route: routes.goal.create,
    },
    {
      path: '/book/:bookId/goal/show/:id',
      route: routes.goal.show,
    },
    {
      path: '/book/:bookId/goal/edit/:id',
      route: routes.goal.edit,
    },
    {
      path: '/friends-books',
      route: routes.friendsBooks,
    },

    {
      path: '/develop',
      route: routes.develop,
    },
  ],
  controls,
})

sample({
  clock: appStarted,
  fn: () => createHashHistory(),
  target: router.setHistory,
})
