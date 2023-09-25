import { useUnit } from 'effector-react'
import { memo } from 'react'

import { $$book } from 'entities/book'
import { $$goal, GoalListItem } from 'entities/goal'
import { $$goalMark } from 'entities/goal-mark'

import { Goal } from 'shared/api'

export const CreateGoalPreview = memo(function CreateGoalPreview() {
  // Effector
  const marks = useUnit($$goalMark.$items)
  const name = useUnit($$goal.toCreate.name.$value)
  const markId = useUnit($$goal.toCreate.markId.$value)
  const order = useUnit($$book.$item)?.goals?.length || 0

  const mark = marks.find(({ id }) => id === markId) || null

  const mockGoal: Goal = {
    id: 45345,
    bookId: 123,
    completed: false,
    createdAt: '12-12-2023',

    name: name || 'Название',
    order: order + 1,
    mark,
    markId,
  }

  return <GoalListItem goal={mockGoal} />
})
