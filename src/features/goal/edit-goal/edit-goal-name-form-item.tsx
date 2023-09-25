import { useUnit } from 'effector-react'
import { memo } from 'react'

import { $$goal, GoalNameFormItem } from 'entities/goal'

export const EditGoalNameFormItem = memo(function EditGoalNameFormItem() {
  // Effector
  const goal = useUnit($$goal.$item)

  // Variables
  const name = goal?.name || 'Название'

  return (
    <GoalNameFormItem
      disabled
      readOnly
      value={name}
    />
  )
})
