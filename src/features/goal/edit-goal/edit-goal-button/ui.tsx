import { Button } from '@mui/joy'
import { useUnit } from 'effector-react/effector-react.mjs'
import { memo } from 'react'

import { editGoalSubmited } from './model'

export const EditGoalButton = memo(function EditGoalButton() {
  // Effector
  const [submited] = useUnit([editGoalSubmited])

  return (
    <Button
      onClick={submited}
      fullWidth
      size="lg"
    >
      Сохранить изменения
    </Button>
  )
})
