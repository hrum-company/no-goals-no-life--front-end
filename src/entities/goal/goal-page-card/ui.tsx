import { Avatar, Stack, Typography } from '@mui/joy'
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
          fontFamily=""
          color={'primary'}
        >
          #{goal.order}
        </Typography>
      </Stack>
      <Cloud>
        <Div
          className={classes.avatar}
          noPadding
        >
          <Avatar
            size="xxl"
            color="primary"
          >
            NGNL
          </Avatar>
        </Div>

        <Div noPadding>
          <Typography level="h4">{goal.name}</Typography>
          <Typography level="body-sm">
            Дата создания: {ourMoment(goal.createdAt).format('DD.MM.YYYY')}
          </Typography>
        </Div>

        {actionSlot}
      </Cloud>
    </div>
  )
})
