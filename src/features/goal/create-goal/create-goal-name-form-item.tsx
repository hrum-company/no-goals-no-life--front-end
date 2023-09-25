import { Stack, Typography } from '@mui/joy'
import { useUnit } from 'effector-react'
import { memo } from 'react'

import { $$goal, GoalNameFormItem } from 'entities/goal'

export const CreateGoalNameFormItem = memo(function CreateGoalNameFormItem() {
  // Effector
  const name = useUnit($$goal.toCreate.name)

  // Render
  const renderNotify = () => {
    if (!name.$value) {
      return null
    }

    return <Typography level="body-sm">В дальнейшем название не изменить</Typography>
  }

  return (
    <Stack spacing={1}>
      <GoalNameFormItem
        value={name.$value}
        onChange={name.changed}
      />
      {renderNotify()}
    </Stack>
  )
})
