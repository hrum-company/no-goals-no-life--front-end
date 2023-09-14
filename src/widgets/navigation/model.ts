import { ChecklistRounded, Code, Diversity1 } from '@mui/icons-material'
import { RouteInstance, RouteParams } from 'atomic-router'
import { Effect, Event, createEvent, createStore, sample } from 'effector'

import { routes } from 'shared/routing'

export type NavName = 'home' | 'develop' | 'friendsBooks'
type NavItem = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  open: Effect<any, any>
  icon: typeof ChecklistRounded
}

export const $currentNav = createStore<NavName>('home')

const currentNavChanged = createEvent<NavName>()

$currentNav.on(currentNavChanged, (_, nav) => nav)

export const navs: Record<NavName, NavItem> = {
  home: NavFactory('home', routes.home, ChecklistRounded, currentNavChanged),
  friendsBooks: NavFactory('friendsBooks', routes.friendsBooks, Diversity1, currentNavChanged),
  develop: NavFactory('develop', routes.develop, Code, currentNavChanged),
}

// Знать, какая страница сейчас открыта
// Иметь возможность открыть страницу

function NavFactory<Param extends RouteParams>(
  name: NavName,
  route: RouteInstance<Param>,
  icon: typeof ChecklistRounded,
  navChanged: Event<NavName>
) {
  sample({
    clock: route.opened,
    fn: () => name,
    target: navChanged,
  })

  return {
    open: route.open,
    icon,
  }
}
