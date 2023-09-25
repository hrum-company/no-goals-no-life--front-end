import { useUnit } from 'effector-react'
import { memo } from 'react'

import { $$goal, GoalDescriptionFormItem } from 'entities/goal'

export const EditGoalDescriptionFormItem = memo(function EditGoalDescriptionFormItem() {
  // Effector
  const description = useUnit($$goal.toEdit.description)

  return (
    <GoalDescriptionFormItem
      value={description.$value}
      onChange={description.changed}
    />
  )
})
