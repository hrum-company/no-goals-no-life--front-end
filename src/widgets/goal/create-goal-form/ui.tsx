import { Stack, Typography } from '@mui/joy'
import { useUnit } from 'effector-react'
import { memo } from 'react'

import { GoalDescriptionTextarea, GoalNameInput } from 'features/goal'

import { $$goal, GoalMarkSelect } from 'entities/goal'

import { Cloud, Div } from 'shared/ui'

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

        <GoalMarkSelect />

        <GoalDescriptionTextarea
          value={description.$value}
          onChange={description.changed}
        />
      </Stack>
    </Cloud>
  )
})
