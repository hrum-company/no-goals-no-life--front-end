import { routes } from 'shared/routing'
import { chainAuthorize } from 'shared/session'

export const currentRoute = routes.goal.create
export const authorizedRoute = chainAuthorize(currentRoute)
