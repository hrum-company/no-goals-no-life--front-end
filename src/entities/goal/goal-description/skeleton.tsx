import { Skeleton, Typography } from '@mui/joy'
import { memo } from 'react'

import { Cloud } from 'shared/ui/cloud'

export const GoalDescriptionSkeleton = memo(function GoalDescriptionSkeleton() {
  return (
    <Cloud>
      <Typography level="title-lg">
        <Skeleton loading>Описание</Skeleton>
      </Typography>
      <Typography level="body-md">
        <Skeleton loading>
          Какое-то довольно длинное описание для цели, чтобы можно было потом глянуть, что
          получилось
        </Skeleton>
      </Typography>
    </Cloud>
  )
})
