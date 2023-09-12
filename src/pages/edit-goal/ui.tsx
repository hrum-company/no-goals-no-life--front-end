import { useUnit } from 'effector-react/compat'
import { memo, useCallback } from 'react'

import { GoalDescriptionTextarea, GoalNameInput } from 'features/goal'

import { $goal, $goalLoading } from 'entities/goal'

import { controls } from 'shared/routing'
import { Button, PageLayout, Stack, Typography } from 'shared/ui'

export const EditGoalPage = memo(function EditGoalPage() {
  const [goal, goalLoading] = useUnit([$goal, $goalLoading])

  const handleBackClicked = useCallback(() => {
    controls.back()
  }, [])

  const handleSaveClicked = useCallback(() => {
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
          <Button
            fullWidth
            size="large"
            variant="outlined"
            color="danger"
            onClick={handleBackClicked}
          >
            Отменить
          </Button>
          <Button fullWidth size="large" onClick={handleSaveClicked}>
            Сохранить
          </Button>
        </Stack>
      }
    >
      <Stack spacing={2}>
        <Typography level="title-lg" color="primary">
          Название цели
        </Typography>
        <GoalNameInput value={goal.name} readOnly />

        <Typography level="title-lg" color="primary">
          Описание цели
        </Typography>
        <GoalDescriptionTextarea value={goal.description} />
      </Stack>
    </PageLayout>
  )
})
