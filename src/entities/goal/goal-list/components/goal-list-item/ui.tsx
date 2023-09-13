import { memo } from 'react'

import { Card, Chip, Stack, Typography } from 'shared/ui'

import classes from './styles.module.scss'
import { GoalListItemProps } from './types'

export const GoalListItem = memo(function GoalListItem({ goal, index }: GoalListItemProps) {
  return (
    <Card
      variant="secondary"
      color="neutral"
      className={classes.root}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={1}
      >
        <div className={classes.content}>
          <Typography
            color="primary"
            level="body-md"
          >
            №{index}
          </Typography>
          <Typography
            color="neutral"
            level="title-lg"
            noWrap
          >
            {goal.name}
          </Typography>
        </div>

        {goal.completed && (
          <Chip
            className={classes.right}
            size="medium"
            variant="outlined"
            color="success"
          >
            Выполнено
          </Chip>
        )}
      </Stack>
    </Card>
  )
})
