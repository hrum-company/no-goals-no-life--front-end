import { AbcSharp } from '@mui/icons-material'
import { Card, CardContent, CardCover, Stack, Typography } from '@mui/joy'
import { memo } from 'react'

import classes from './styles.module.scss'
import { GoalListItemProps } from './types'

export const GoalListItem = memo(function GoalListItem({ goal }: GoalListItemProps) {
  return (
    <div className={classes.root}>
      <Card
        variant="soft"
        color={goal.completed ? 'success' : 'neutral'}
        className={classes.card}
        sx={{ borderRadius: 0 }}
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
          <Typography level="body-md">
            {goal.completed ? 'Выполнено' : 'Ждёт выполнения'}
          </Typography>
        </CardContent>
      </Card>
      {goal.mark && (
        <Stack
          direction="row"
          spacing={1}
          className={classes.markWrapper}
        >
          <AbcSharp />
          <Typography>Текст метки</Typography>
        </Stack>
      )}
    </div>
  )
})
