import { useUnit } from 'effector-react/compat'
import { memo, useCallback } from 'react'

import { GoalDescriptionTextarea, GoalNameInput } from 'features/goal'

import { $goal, $goalLoading, ShowGoalTemplate } from 'entities/goal'

import { controls, routes } from 'shared/routing'
import { Button, PageLayout, Stack, Typography } from 'shared/ui'

export const GoalPage = memo(function GoalPage() {
  const [goal, goalLoading] = useUnit([$goal, $goalLoading])

  const handleEditOpened = useCallback(() => {
    if (!goal) {
      return null
    }
    routes.goal.edit.open({ ...goal })
  }, [goal])

  const handleBackClicked = useCallback(() => {
    controls.back()
  }, [])

  if (!goal || goalLoading) {
    return 'loading..'
  }

  // handle{сущность с которой действие}{действие}
  // handleNameEdited

  return (
    <PageLayout
      header={
        <Typography level="h2" color="primary">
          Цель какая-то
        </Typography>
      }
      footer={
        <Stack fullWidth direction="column" spacing={1}>
          <Button fullWidth variant="secondary" color="danger" onClick={handleEditOpened}>
            Редактировать
          </Button>
          <Button fullWidth size="large" onClick={handleBackClicked}>
            Назад
          </Button>
        </Stack>
      }
    >
      <ShowGoalTemplate>
        <Typography level="title-lg" color="primary">
          Название цели
        </Typography>
        <GoalNameInput value={goal.name} readOnly />

        <Typography level="title-lg" color="primary">
          Описание цели
        </Typography>
        <GoalDescriptionTextarea value={goal.description} readOnly />
      </ShowGoalTemplate>
    </PageLayout>
  )
})
