import { Avatar, Chip, Stack, Typography } from '@mui/joy'
import { memo } from 'react'

import { ourMoment } from 'shared/helpers'
import { Div } from 'shared/ui'
import { Cloud } from 'shared/ui/cloud'

import classes from './styles.module.scss'
import { GoalPageCardProps } from './types'

export const GoalPageCard = memo(function GoalPageCard({ goal, actionSlot }: GoalPageCardProps) {
  return (
    <div>
      <Stack
        className={classes.topBg}
        direction="row"
        alignItems="flex-end"
        justifyContent="flex-end"
      >
        <Typography
          level="inherit"
          color={goal.completed ? 'success' : 'primary'}
        >
          #{goal.order}
        </Typography>
      </Stack>
      <Cloud>
        <Div
          className={classes.avatar}
          noPadding
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Avatar
              size="xxl"
              color="primary"
            >
              NGNL
            </Avatar>
            {goal.completed && (
              <Chip
                variant="outlined"
                color="success"
                sx={{ height: 'max-content' }}
              >
                Цель выполнена!
              </Chip>
            )}
          </Stack>
        </Div>

        <Div noPadding>
          <Stack spacing={1}>
            <Typography level="h4">{goal.name}</Typography>
            <Typography level="body-sm">
              Дата создания: {ourMoment(goal.createdAt).format('DD.MM.YYYY')}
            </Typography>

            {goal.completed && (
              <Typography level="body-sm">
                Дата завершения: {ourMoment(goal.completedAt).format('DD.MM.YYYY')}
              </Typography>
            )}
          </Stack>
        </Div>

        {actionSlot}
      </Cloud>
    </div>
  )
})
