import { Link } from 'atomic-router-react'
import { memo } from 'react'

import { routes } from 'shared/routing'
import { Stack } from 'shared/ui'

import { GoalListItem } from './components'
import styles from './styles.module.scss'
import { GoalListProps } from './types'

export const GoalList = memo(function GoalList({ goals }: GoalListProps) {
  return (
    <Stack fullWidth className={styles.wrapper} spacing={1}>
      {goals.map((goal, index) => {
        return (
          <Link key={goal.id} to={routes.goal.show} params={{ ...goal }} style={{ width: '100%' }}>
            <GoalListItem goal={goal} index={index + 1} />
          </Link>
        )
      })}
    </Stack>
  )
})
