import { GoalMark } from 'shared/api'

type Value = number | null

export interface GoalMarkSelectProps {
  items: GoalMark[]
  loading?: boolean

  value: Value
  setValue: (value: Value) => void
}
