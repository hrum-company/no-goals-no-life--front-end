import { Card, CardContent, CardCover, Typography } from '@mui/joy'
import { memo } from 'react'

import classes from './styles.module.scss'
import { GoalListItemProps } from './types'

export const GoalListItem = memo(function GoalListItem({ goal }: GoalListItemProps) {
  return (
    <Card
      variant="soft"
      color={goal.completed ? 'success' : 'neutral'}
      className={classes.root}
      sx={{ borderRadius: 16 }}
    >
      <CardCover
        className={classes.cover}
        sx={{ left: 'auto' }}
      >
        <Typography
          level="inherit"
          color={goal.completed ? 'success' : 'primary'}
        >
          {goal.order}
        </Typography>
      </CardCover>
      <CardContent>
        <Typography
          level="title-lg"
          noWrap
        >
          {goal.name}
        </Typography>
        <Typography level="body-md">{goal.completed ? 'Выполнено' : 'Ждёт выполнения'}</Typography>
      </CardContent>
    </Card>
  )
})
