import { Card, CardContent, CardCover, Skeleton, Typography } from '@mui/joy'
import { memo } from 'react'

import classes from './styles.module.scss'

export const GoalListItemSkeleton = memo(function GoalListItemSkeleton({
  order,
}: {
  order: number
}) {
  return (
    <Card
      variant="soft"
      className={classes.root}
      sx={{ borderRadius: 16 }}
    >
      <CardCover className={classes.cover}>{order}</CardCover>
      <CardContent>
        <Typography
          level="title-lg"
          noWrap
        >
          <Skeleton loading>Длинное название цели</Skeleton>
        </Typography>
        <Typography level="body-md">
          <Skeleton>Ждёт выполнения</Skeleton>
        </Typography>
      </CardContent>
    </Card>
  )
})
