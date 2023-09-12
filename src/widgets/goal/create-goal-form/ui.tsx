import { useUnit } from 'effector-react'
import { memo } from 'react'

import {
  $createGoalDescription,
  $createGoalName,
  GoalDescriptionTextarea,
  GoalNameInput,
  createGoalDescriptionChanged,
  createGoalNameChanged,
} from 'features/goal'

import { Stack } from 'shared/ui'

export const CreateGoalForm = memo(function CreateGoalForm() {
  // Effector
  const [name, nameChanged, description, descriptionChanged] = useUnit([
    $createGoalName,
    createGoalNameChanged,
    $createGoalDescription,
    createGoalDescriptionChanged,
  ])

  return (
    <Stack spacing={2}>
      <GoalNameInput value={name} onChange={nameChanged} />
      <GoalDescriptionTextarea value={description} onChange={descriptionChanged} />
    </Stack>
  )
})
