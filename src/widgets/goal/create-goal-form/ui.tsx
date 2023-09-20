import { Stack, Typography } from '@mui/joy'
import { useUnit } from 'effector-react'
import { memo } from 'react'

import { CreateGoalMarkFormItem, GoalDescriptionTextarea, GoalNameInput } from 'features/goal'

import { $$goal } from 'entities/goal'

import { Cloud } from 'shared/ui'

import classes from './styles.module.scss'

export const CreateGoalForm = memo(function CreateGoalForm() {
  // Effector
  const name = useUnit($$goal.toCreate.name)
  const description = useUnit($$goal.toCreate.description)

  return (
    <Cloud className={classes.root}>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <GoalNameInput
            value={name.$value}
            onChange={name.changed}
          />
          {name.$value ? (
            <Typography level="body-sm">В дальнейшем название не изменить</Typography>
          ) : null}
        </Stack>

        <CreateGoalMarkFormItem />

        <GoalDescriptionTextarea
          value={description.$value}
          onChange={description.changed}
        />
      </Stack>
    </Cloud>
  )
})
