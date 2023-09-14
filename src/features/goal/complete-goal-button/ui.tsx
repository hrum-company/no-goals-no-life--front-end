import { Button } from '@mui/joy'
import { useUnit } from 'effector-react/effector-react.mjs'
import { memo } from 'react'

import { $$goal } from 'entities/goal'

import 'shared/ui'

import { completeGoalSubmited } from './model'

export const CompleteGoalButton = memo(function CompleteGoalButton() {
  // Effector
  const [submited, loading] = useUnit([completeGoalSubmited, $$goal.complete.$pending])

  return (
    <Button
      onClick={submited}
      fullWidth
      size="sm"
      variant="soft"
      color="success"
      loading={loading}
    >
      Завершить
    </Button>
  )
})
