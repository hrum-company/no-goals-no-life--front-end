import { Avatar, Skeleton, Stack, Typography } from '@mui/joy'
import { memo } from 'react'

import { Div } from 'shared/ui'
import { Cloud } from 'shared/ui/cloud'

import classes from './styles.module.scss'

export const GoalPageCardSkeleton = memo(function GoalPageCardSkeleton() {
  return (
    <div>
      <Skeleton
        variant="rectangular"
        className={classes.topBg}
        loading
      ></Skeleton>
      <Cloud>
        <Div
          className={classes.avatar}
          noPadding
        >
          <Avatar
            size="xxl"
            color="primary"
          >
            <Skeleton loading />
          </Avatar>
        </Div>

        <Div noPadding>
          <Typography level="h4">
            <Skeleton loading>Какое-то название</Skeleton>
          </Typography>
          <Typography level="body-sm">
            <Skeleton loading>Дата создания: XX.XX.XXXX</Skeleton>
          </Typography>
        </Div>

        <Skeleton
          loading
          variant="rectangular"
          width="100%"
          height={32}
        />
      </Cloud>
    </div>
  )
})
