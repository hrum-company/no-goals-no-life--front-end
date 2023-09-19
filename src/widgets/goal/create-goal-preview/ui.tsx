import { useUnit } from 'effector-react'
import { memo } from 'react'

import { $$book } from 'entities/book'
import { $$goal, GoalListItem } from 'entities/goal'

import { Goal } from 'shared/api'
import { Div } from 'shared/ui'

import classes from './styles.module.scss'

export const CreateGoalPreview = memo(function CreateGoalPreview() {
  // Effector
  const name = useUnit($$goal.toCreate.name.$value)
  const order = useUnit($$book.$item)?.goals?.length || 0

  const mockGoal: Goal = {
    id: 45345,
    bookId: 123,
    completed: false,
    createdAt: '12-12-2023',

    name: name || 'Будущая цель',
    order: order + 1,
    mark: 'test',
  }

  return (
    <Div className={classes.root}>
      <GoalListItem goal={mockGoal} />
    </Div>
  )
})
