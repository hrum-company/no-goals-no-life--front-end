import { Link } from 'atomic-router-react'
import { memo } from 'react'

import { GoalListItem } from 'entities/goal'

import { routes } from 'shared/routing'
import { Card, Stack } from 'shared/ui'

import styles from './styles.module.scss'
import { GoalListTemplateProps } from './types'

export const GoalListTemplate = memo(function GoalListTemplate({ goals }: GoalListTemplateProps) {
  return (
    <Stack fullWidth className={styles.wrapper} spacing={1}>
      {goals.map((goal, index) => {
        return (
          <Link
            key={goal.id}
            to={routes.goal.show}
            params={{ listId: goal.listId, id: goal.id }}
            style={{ width: '100%' }}
          >
            <GoalListItem goal={goal} index={index + 1} />
          </Link>
        )
      })}
    </Stack>
  )
})
