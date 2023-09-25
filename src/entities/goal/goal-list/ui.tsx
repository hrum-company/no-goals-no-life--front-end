import { Stack } from '@mui/joy'
import { Link } from 'atomic-router-react'
import { memo } from 'react'

import { routes } from 'shared/routing'

import { GoalListItem } from './components'
import styles from './styles.module.scss'
import { GoalListProps } from './types'

export const GoalList = memo(function GoalList({ goals }: GoalListProps) {
  return (
    <Stack
      sx={{ width: '100%' }}
      className={styles.wrapper}
      spacing={2}
    >
      {goals.map((goal) => {
        return (
          <Link
            key={goal.id}
            to={routes.goal.show}
            params={{ ...goal }}
            style={{ width: '100%' }}
          >
            <GoalListItem goal={goal} />
          </Link>
        )
      })}
    </Stack>
  )
})
