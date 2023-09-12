import { useUnit } from 'effector-react'
import { memo } from 'react'

import { GoalDescriptionTextarea, GoalNameInput } from 'features/goal'

import { $$goal } from 'entities/goal'

import { Stack } from 'shared/ui'

export const CreateGoalForm = memo(function CreateGoalForm() {
  // Effector
  const name = useUnit($$goal.toCreate.name)
  const description = useUnit($$goal.toCreate.description)

  return (
    <Stack spacing={2}>
      <GoalNameInput value={name.$value} onChange={name.changed} />
      <GoalDescriptionTextarea value={description.$value} onChange={description.changed} />
    </Stack>
  )
})
