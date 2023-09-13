import { memo } from 'react'

import { Stack } from 'shared/ui'

import { GoalListItemSkeleton } from './components/goal-list-item/skeleton'
import styles from './styles.module.scss'

export const GoalListSkeleton = memo(function GoalListSkeleton() {
  return (
    <Stack
      fullWidth
      className={styles.wrapper}
      spacing={1}
    >
      <GoalListItemSkeleton />
      <GoalListItemSkeleton />
    </Stack>
  )
})
