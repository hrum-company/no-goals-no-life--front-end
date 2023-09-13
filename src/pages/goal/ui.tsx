import { Button, Card, Stack, Typography } from '@mui/joy'
import { useUnit } from 'effector-react/compat'
import { memo, useCallback } from 'react'

import { $$goal, GoalInfoChips } from 'entities/goal'

import { routes } from 'shared/routing'
import {
  Footer,
  Header,
  HeaderBack,
  HeaderContent,
  HeaderLeft,
  PageLayout,
  PageLayoutContent,
  PageLayoutFooter,
  PageLayoutHeader,
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
            sx={{ width: '100%' }}
          >
            <Typography
              level="title-lg"
              color="primary"
            >
              Название
            </Typography>
            <Card
              sx={{ width: '100%' }}
              variant="outlined"
            >
              <Typography>{goal.name}</Typography>
            </Card>
          </Stack>

          <Stack
            sx={{ width: '100%' }}
            spacing={0.5}
          >
            <Typography
              level="title-lg"
              color="primary"
            >
              Описание
            </Typography>
            <Card
              sx={{ width: '100%' }}
              variant="outlined"
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
            size="lg"
            onClick={handleEditOpened}
          >
            Редактировать
          </Button>
        </Footer>
      </PageLayoutFooter>
    </PageLayout>
  )
})
