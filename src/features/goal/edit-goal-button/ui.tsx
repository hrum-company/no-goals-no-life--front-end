import { useUnit } from 'effector-react/effector-react.mjs'
import { memo } from 'react'

import { Button } from 'shared/ui'

import { $editGoalIsEdited, editGoalSubmited } from './model'

export const EditGoalButton = memo(function EditGoalButton() {
  // Effector
  const [submited, isEdited] = useUnit([editGoalSubmited, $editGoalIsEdited])

  return (
    <Button onClick={submited} disabled={!isEdited} fullWidth size="large">
      Сохранить изменения
    </Button>
  )
})
