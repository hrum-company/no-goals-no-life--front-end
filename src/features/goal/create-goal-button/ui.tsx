import { useUnit } from 'effector-react/effector-react.mjs'
import { memo } from 'react'

import { Button } from 'shared/ui'

import { $createGoalCanSubmit, createGoalSubmited } from './model'

export const CreateGoalButton = memo(function CreateGoalButton() {
  // Effector
  const [canSubmit, submited] = useUnit([$createGoalCanSubmit, createGoalSubmited])

  return (
    <Button disabled={!canSubmit} onClick={submited} fullWidth size="large">
      Создать
    </Button>
  )
})
