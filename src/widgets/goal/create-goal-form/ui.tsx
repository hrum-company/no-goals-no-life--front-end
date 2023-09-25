import { Stack } from '@mui/joy'
import { memo } from 'react'

import {
  CreateGoalDescriptionFormItem,
  CreateGoalMarkFormItem,
  CreateGoalNameFormItem,
} from 'features/goal'

export const CreateGoalForm = memo(function CreateGoalForm() {
  // Effector

  return (
    <Stack spacing={2}>
      <CreateGoalNameFormItem />
      <CreateGoalMarkFormItem />
      <CreateGoalDescriptionFormItem />
    </Stack>
  )
})
