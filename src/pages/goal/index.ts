import { currentRoute } from './model'
import { GoalPage } from './ui'

export const ShowGoalRoute = {
  view: GoalPage,
  route: currentRoute,
}
