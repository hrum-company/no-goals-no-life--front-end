import { requestGoalSampleFactory } from 'entities/goal'

import { routes } from 'shared/routing'
import { chainAuthorize } from 'shared/session'

export const currentRoute = routes.goal.show
export const authorizedRoute = chainAuthorize(currentRoute)

requestGoalSampleFactory(authorizedRoute)
