import { Goal } from 'shared/api'

export interface GoalDescriptionProps extends Required<Pick<Goal, 'description'>> {}
