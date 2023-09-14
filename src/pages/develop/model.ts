import { routes } from 'shared/routing'
import { chainAuthorize } from 'shared/session'

export const currentRoute = routes.develop
export const authorizedRoute = chainAuthorize(currentRoute)
