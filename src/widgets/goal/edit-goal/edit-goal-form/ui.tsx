import { Stack } from '@mui/joy'
import { memo } from 'react'

import {
  EditGoalDescriptionFormItem,
  EditGoalMarkIdFormItem,
  EditGoalNameFormItem,
} from 'features/goal'

export const EditGoalForm = memo(function EditGoalForm() {
  return (
    <Stack spacing={2}>
      <EditGoalNameFormItem />
      <EditGoalMarkIdFormItem />
      <EditGoalDescriptionFormItem />
    </Stack>
  )
})
