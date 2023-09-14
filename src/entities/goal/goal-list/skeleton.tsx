import { Stack } from '@mui/joy'
import { memo } from 'react'

import { GoalListItemSkeleton } from './components/goal-list-item/skeleton'
import classes from './styles.module.scss'

export const GoalListSkeleton = memo(function GoalListSkeleton() {
  return (
    <Stack
      className={classes.root}
      spacing={1}
    >
      <GoalListItemSkeleton order={1} />
      <GoalListItemSkeleton order={2} />
    </Stack>
  )
})
