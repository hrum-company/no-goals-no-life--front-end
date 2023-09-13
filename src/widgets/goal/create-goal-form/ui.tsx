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
    <Stack
      fullWidth
      spacing={2}
    >
      <GoalNameInput
        value={name.$value}
        onChange={name.changed}
        withHelperText
      />

      <GoalDescriptionTextarea
        value={description.$value}
        onChange={description.changed}
        withHelperText
      />
    </Stack>
  )
})
