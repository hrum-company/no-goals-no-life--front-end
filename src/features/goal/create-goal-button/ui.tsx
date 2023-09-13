import { useUnit } from 'effector-react/effector-react.mjs'
import { memo } from 'react'

import { $$goal } from 'entities/goal'

import { Button } from 'shared/ui'

import { createGoalSubmited } from './model'

export const CreateGoalButton = memo(function CreateGoalButton() {
  // Effector
  const [canSubmit, loading, submited] = useUnit([
    $$goal.$createCanSubmit,
    $$goal.create.$pending,
    createGoalSubmited,
  ])

  // TODO Нужен canSubmit
  return (
    <Button
      onClick={submited}
      fullWidth
      size="large"
      disabled={!canSubmit}
      loading={loading}
    >
      Создать
    </Button>
  )
})
