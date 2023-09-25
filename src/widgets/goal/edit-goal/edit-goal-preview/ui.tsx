import { useUnit } from 'effector-react'
import { memo } from 'react'

import { $$goal, GoalListItem } from 'entities/goal'
import { $$goalMark } from 'entities/goal-mark'

import { Goal } from 'shared/api'

export const EditGoalPreview = memo(function EditGoalPreview() {
  // Effector
  const [marks, markId, description] = useUnit([
    $$goalMark.$items,
    $$goal.toEdit.markId.$value,
    $$goal.toEdit.description.$value,
  ])

  const goal = useUnit($$goal.$item)

  if (!goal) {
    return null
  }

  const mark = marks.find(({ id }) => id === markId) || null

  const mockGoal: Goal = {
    ...goal,
    mark,
    markId,
    description,
  }

  return (
    <GoalListItem
      goal={mockGoal}
      statusText="Цель редактируется"
    />
  )
})
