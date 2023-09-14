import { Stack } from '@mui/joy'
import { useUnit } from 'effector-react'
import { memo } from 'react'

import { GoalDescriptionTextarea, GoalNameInput } from 'features/goal'

import { $$goal } from 'entities/goal'

export const EditGoalForm = memo(function EditGoalForm() {
  // Effector
  const [goal] = useUnit([$$goal.$item])
  const description = useUnit($$goal.toEdit.description)

  return (
    <Stack spacing={2}>
      <GoalNameInput
        value={goal?.name || ''}
        disabled
      />
      <GoalDescriptionTextarea
        value={description.$value}
        onChange={description.changed}
      />
    </Stack>
  )
})
