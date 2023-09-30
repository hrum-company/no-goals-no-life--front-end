import { useUnit } from 'effector-react'
import { memo } from 'react'

import { $$goal, GoalMarkIdFormItem } from 'entities/goal'
import { $$goalMark } from 'entities/goal-mark'

export const EditGoalMarkIdFormItem = memo(function EditGoalMarkIdFormItem() {
  // Effector
  const [marks, loaded] = useUnit([$$goalMark.$items, $$goalMark.loadAll.$alreadyLoaded])
  const markId = useUnit($$goal.toEdit.markId)

  return (
    <GoalMarkIdFormItem
      items={marks}
      loading={!loaded}
      value={markId.$value}
      onChange={markId.changed}
    />
  )
})
