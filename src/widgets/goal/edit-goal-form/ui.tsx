import { useUnit } from 'effector-react'
import { memo } from 'react'

import {
  $editGoalDescription,
  $editGoalName,
  GoalDescriptionTextarea,
  GoalNameInput,
  editGoalDescriptionChanged,
} from 'features/goal'

import { Stack } from 'shared/ui'

export const EditGoalForm = memo(function EditGoalForm() {
  // Effector
  const [name, description, descriptionChanged] = useUnit([
    $editGoalName,
    $editGoalDescription,
    editGoalDescriptionChanged,
  ])

  return (
    <Stack spacing={2}>
      <GoalNameInput value={name} disabled />
      <GoalDescriptionTextarea value={description} onChange={descriptionChanged} />
    </Stack>
  )
})
