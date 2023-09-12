import { Card, CardActions } from '@mui/joy'
import { Link } from 'atomic-router-react'
import { useUnit } from 'effector-react/compat'
import { memo } from 'react'

import { GoalList } from 'widgets/goal'

import { $goalList, $goalListsLoading } from 'entities/goal-list'

import { routes } from 'shared/routing'
import { Button, PageLayout, Stack, Typography } from 'shared/ui'

export const HomePage = memo(function GoalsListPage() {
  // Effector
  const [goalList, goalListLoading] = useUnit([$goalList, $goalListsLoading])

  if (!goalList || goalListLoading) {
    return 'loading..'
  }

  return (
    <PageLayout
      header={
        <Typography level="h2" color="primary">
          {goalList?.name}
        </Typography>
      }
      footer={
        <Link style={{ width: '100%' }} to={routes.goal.create} params={{ listId: goalList.id }}>
          <Button fullWidth size="large">
            Создать цель
          </Button>
        </Link>
      }
    >
      <Stack spacing={2}>
        <Card sx={{ width: '100%' }} variant="outlined">
          <Typography level="title-lg">{goalList.name}</Typography>

          <CardActions orientation="vertical">
            <Button fullWidth variant="secondary">
              Настроить
            </Button>
            <Button fullWidth>Создать цель</Button>
          </CardActions>
        </Card>
        <GoalList goals={goalList.goals || []} />
      </Stack>
    </PageLayout>
  )
})
