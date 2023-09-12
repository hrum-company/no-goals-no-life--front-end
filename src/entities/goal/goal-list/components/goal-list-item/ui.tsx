import { memo } from 'react'

import { Stack, Typography } from 'shared/ui'

import styles from './styles.module.scss'
import { GoalListItemProps } from './types'

export const GoalListItem = memo(function GoalListItem({ goal, index }: GoalListItemProps) {
  return (
    <Stack className={styles.wrapper} direction="row" alignItems="center" spacing={1}>
      <Typography color="primary" level="title-lg">
        №{index}
      </Typography>
      <Typography color="neutral" level="title-md" noWrap>
        {goal.name}
      </Typography>
    </Stack>
  )
})
