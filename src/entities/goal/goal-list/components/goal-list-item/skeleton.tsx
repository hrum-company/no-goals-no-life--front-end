import { Card, Skeleton, Stack, Typography } from '@mui/joy'
import { memo } from 'react'

import classes from './styles.module.scss'

export const GoalListItemSkeleton = memo(function GoalListItemSkeleton() {
  return (
    <Card
      variant="plain"
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
            <Skeleton loading>index</Skeleton>
          </Typography>
          <Typography
            color="neutral"
            level="title-lg"
            noWrap
          >
            <Skeleton loading>long name of goal</Skeleton>
          </Typography>
        </div>
      </Stack>
    </Card>
  )
})
