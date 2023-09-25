import { GoalMark } from 'shared/api'

type Value = number | null

export interface GoalMarkIdFormItemProps {
  items: GoalMark[]
  loading?: boolean

  value: Value
  onChange: (value: Value) => void
}
