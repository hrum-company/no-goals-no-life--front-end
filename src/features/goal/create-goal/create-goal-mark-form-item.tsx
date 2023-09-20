import { useUnit } from 'effector-react'
import { memo } from 'react'

import { $$goal, GoalMarkSelect } from 'entities/goal'
import { $$goalMark } from 'entities/goal-mark'

export const CreateGoalMarkFormItem = memo(function CreateGoalMarkFormItem() {
  // Effector
  const [items, loading] = useUnit([$$goalMark.$items, $$goalMark.loadAll.$pending])
  const markId = useUnit($$goal.toCreate.markId)

  return (
    <GoalMarkSelect
      items={items}
      loading={loading}
      value={markId.$value}
      setValue={markId.changed}
    />
  )
})
