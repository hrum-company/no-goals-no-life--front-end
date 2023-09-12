import { useUnit } from 'effector-react/effector-react.mjs'
import { memo } from 'react'

import { Button } from 'shared/ui'

import { createGoalSubmited } from './model'

export const CreateGoalButton = memo(function CreateGoalButton() {
  // Effector
  const [submited] = useUnit([createGoalSubmited])

  // TODO Нужен canSubmit
  return (
    <Button onClick={submited} fullWidth size="large">
      Создать
    </Button>
  )
})
