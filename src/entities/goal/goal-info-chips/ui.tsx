import { memo } from 'react'

import { ourMoment, rangeOfDates } from 'shared/helpers'
import { Chip, Stack, Typography } from 'shared/ui'

import classes from './styles.module.scss'
import { GoalInfoChipsProps } from './types'

export const GoalInfoChips = memo(function GoalInfoChips({ goal }: GoalInfoChipsProps) {
  return (
    <Stack
      className={classes.root}
      fullWidth
    >
      <Typography
        level="title-lg"
        color="primary"
      >
        Информация
      </Typography>

      <Stack
        className={classes.chips}
        direction="row"
        flexWrap="wrap"
        fullWidth
      >
        <Chip
          variant="outlined"
          color={goal.completed ? 'success' : 'primary'}
        >
          {goal.completed ? 'Выполнено' : 'В процессе'}
        </Chip>
        <Chip
          variant="outlined"
          color={goal.completed ? 'success' : 'warning'}
        >
          {goal.completed
            ? rangeOfDates(goal.createdAt, goal.completedAt)
            : `Дата создания ${ourMoment(goal.createdAt).format('DD.MM.YYYY')}`}
        </Chip>
      </Stack>
    </Stack>
  )
})
