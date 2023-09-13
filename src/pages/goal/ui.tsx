import { useUnit } from 'effector-react/compat'
import { memo, useCallback } from 'react'

import { GoalDescriptionTextarea } from 'features/goal'

import { $$goal, GoalInfoChips } from 'entities/goal'

import { routes } from 'shared/routing'
import {
  Button,
  Card,
  Footer,
  Header,
  HeaderBack,
  HeaderContent,
  HeaderLeft,
  PageLayout,
  PageLayoutContent,
  PageLayoutFooter,
  PageLayoutHeader,
  Stack,
  Typography,
} from 'shared/ui'

export const GoalPage = memo(function GoalPage() {
  const [goal, goalLoading] = useUnit([$$goal.$item, $$goal.loadOne.$pending])

  const handleEditOpened = useCallback(() => {
    if (!goal) {
      return null
    }
    routes.goal.edit.open({ ...goal })
  }, [goal])

  if (!goal || goalLoading) {
    return 'loading..'
  }

  return (
    <PageLayout>
      <PageLayoutHeader>
        <Header>
          <HeaderLeft>
            <HeaderBack />
          </HeaderLeft>

          <HeaderContent>Цель какая-то</HeaderContent>
        </Header>
      </PageLayoutHeader>

      <PageLayoutContent>
        <Stack spacing={2}>
          <Stack
            spacing={0.5}
            fullWidth
          >
            <Typography
              level="title-lg"
              color="primary"
            >
              Название
            </Typography>
            <Card
              fullWidth
              variant="secondary"
            >
              <Typography>{goal.name}</Typography>
            </Card>
          </Stack>

          <Stack
            spacing={0.5}
            fullWidth
          >
            <Typography
              level="title-lg"
              color="primary"
            >
              Описание
            </Typography>
            <Card
              fullWidth
              variant="secondary"
            >
              <Typography>{goal.description || 'Отсутствует'}</Typography>
            </Card>
          </Stack>

          <GoalInfoChips goal={goal} />
        </Stack>
      </PageLayoutContent>

      <PageLayoutFooter>
        <Footer>
          <Button
            fullWidth
            size="large"
            onClick={handleEditOpened}
          >
            Редактировать
          </Button>
        </Footer>
      </PageLayoutFooter>
    </PageLayout>
  )
})
