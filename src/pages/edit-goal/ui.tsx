import { useUnit } from 'effector-react/compat'
import { memo, useCallback } from 'react'

import { EditGoalForm } from 'widgets/goal'

import { EditGoalButton } from 'features/goal'

import { $goal, $goalLoading } from 'entities/goal'

import { controls } from 'shared/routing'
import { Button, PageLayout, Stack, Typography } from 'shared/ui'

export const EditGoalPage = memo(function EditGoalPage() {
  const [goal, goalLoading] = useUnit([$goal, $goalLoading])

  const handleBackClicked = useCallback(() => {
    controls.back()
  }, [])

  if (!goal || goalLoading) {
    return 'loading..'
  }

  return (
    <PageLayout
      header={
        <Typography level="h2" color="primary">
          Редактирование цели
        </Typography>
      }
      footer={
        <Stack fullWidth direction="column" spacing={1}>
          <EditGoalButton />

          <Button
            fullWidth
            size="large"
            variant="outlined"
            color="danger"
            onClick={handleBackClicked}
          >
            Назад
          </Button>
        </Stack>
      }
    >
      <EditGoalForm />
    </PageLayout>
  )
})
