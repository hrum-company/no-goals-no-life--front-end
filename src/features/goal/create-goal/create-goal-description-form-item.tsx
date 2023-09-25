import { useUnit } from 'effector-react'
import { memo } from 'react'

import { $$goal, GoalDescriptionFormItem } from 'entities/goal'

export const CreateGoalDescriptionFormItem = memo(function CreateGoalDescriptionFormItem() {
  // Effector
  const description = useUnit($$goal.toCreate.description)

  return (
    <GoalDescriptionFormItem
      value={description.$value}
      onChange={description.changed}
    />
  )
})
