import { $$goal, requestGoalSampleFactory } from 'entities/goal'

import { routes } from 'shared/routing'
import { chainAuthorize } from 'shared/session'

export const currentRoute = routes.goal.edit
export const authorizedRoute = chainAuthorize(currentRoute)

requestGoalSampleFactory(authorizedRoute)

authorizedRoute.opened.watch(() => $$goal.toEditReseted())
