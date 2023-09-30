import { useUnit } from 'effector-react'
import { memo } from 'react'

import { $$goal, GoalMarkIdFormItem } from 'entities/goal'
import { $$goalMark } from 'entities/goal-mark'

export const CreateGoalMarkFormItem = memo(function CreateGoalMarkFormItem() {
  // Effector
  const [items, loading] = useUnit([$$goalMark.$items, $$goalMark.loadAll.$alreadyLoaded])
  const markId = useUnit($$goal.toCreate.markId)

  return (
    <GoalMarkIdFormItem
      items={items}
      loading={!loading}
      value={markId.$value}
      onChange={markId.changed}
    />
  )
})
