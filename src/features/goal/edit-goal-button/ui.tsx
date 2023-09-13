import { Button } from '@mui/joy'
import { useUnit } from 'effector-react/effector-react.mjs'
import { memo } from 'react'

import { $editGoalIsEdited, editGoalSubmited } from './model'

export const EditGoalButton = memo(function EditGoalButton() {
  // Effector
  const [submited, isEdited] = useUnit([editGoalSubmited, $editGoalIsEdited])

  return (
    <Button
      onClick={submited}
      disabled={!isEdited}
      fullWidth
      size="lg"
    >
      Сохранить изменения
    </Button>
  )
})
