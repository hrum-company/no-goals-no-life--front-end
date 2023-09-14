import { Create, Info } from '@mui/icons-material'
import { Card, CardContent, CardCover, Stack, Typography } from '@mui/joy'
import { useUnit } from 'effector-react'
import { memo } from 'react'

import { GoalDescriptionTextarea, GoalNameInput } from 'features/goal'

import { $$goal } from 'entities/goal'

import { Div } from 'shared/ui'

import classes from './styles.module.scss'

export const CreateGoalForm = memo(function CreateGoalForm() {
  // Effector
  const name = useUnit($$goal.toCreate.name)
  const description = useUnit($$goal.toCreate.description)

  return (
    <Div className={classes.root}>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <GoalNameInput
            value={name.$value}
            onChange={name.changed}
          />
          <Typography
            justifyContent="center"
            startDecorator={
              <Info
                color="neutral"
                fontSize="xl2"
              />
            }
            level="body-sm"
            sx={{
              opacity: name.$value ? 1 : 0,
              height: name.$value ? 'inherit' : '0px',
              overflow: name.$value ? 'hidden' : 'auto',
              transition: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            В дальнейшем название не изменить
          </Typography>
        </Stack>

        <GoalDescriptionTextarea
          value={description.$value}
          onChange={description.changed}
        />
      </Stack>

      {/* <Card
        variant="soft"
        className={classes.card}
        sx={{ borderRadius: 16 }}
      >
        <CardCover
          className={classes.cover}
          sx={{ right: 'auto', bottom: 'auto' }}
        >
          <Typography level="inherit">NO GOALS</Typography>
        </CardCover>

        <CardContent className={classes.content}></CardContent>

        <CardCover
          className={classes.cover}
          sx={{ right: 'auto', top: 'auto' }}
        >
          <Typography level="inherit">NO LIFE</Typography>
        </CardCover>
      </Card> */}
    </Div>
  )
})
