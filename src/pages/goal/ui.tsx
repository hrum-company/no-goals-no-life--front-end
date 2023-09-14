import { Button, Stack } from '@mui/joy'
import { useUnit } from 'effector-react/compat'
import { memo, useCallback } from 'react'

import { CompleteGoalButton } from 'features/goal'

import {
  $$goal,
  GoalDescription,
  GoalDescriptionSkeleton,
  GoalPageCard,
  GoalPageCardSkeleton,
} from 'entities/goal'

import { routes } from 'shared/routing'
import {
  Header,
  HeaderBack,
  HeaderLeft,
  PageLayout,
  PageLayoutContent,
  PageLayoutHeader,
} from 'shared/ui'

import classes from './styles.module.scss'

export const GoalPage = memo(function GoalPage() {
  const [goal, goalLoading] = useUnit([$$goal.$item, $$goal.loadOne.$pending])

  const handleEditOpened = useCallback(() => {
    if (!goal) {
      return null
    }
    routes.goal.edit.open({ ...goal })
  }, [goal])

  return (
    <PageLayout>
      <PageLayoutHeader noWrapperHeight>
        <Header
          className={classes.header}
          noBorder
        >
          <HeaderLeft>
            <HeaderBack />
          </HeaderLeft>
        </Header>
      </PageLayoutHeader>

      <PageLayoutContent className={classes.content}>
        <Stack spacing={1.5}>
          {goalLoading ? (
            <GoalPageCardSkeleton />
          ) : (
            goal && (
              <GoalPageCard
                goal={goal}
                actionSlot={
                  !goal.completed && (
                    <>
                      <Button
                        variant="soft"
                        size="sm"
                        fullWidth
                        onClick={handleEditOpened}
                      >
                        Редактировать
                      </Button>
                      <CompleteGoalButton />
                    </>
                  )
                }
              />
            )
          )}

          {goalLoading ? (
            <GoalDescriptionSkeleton />
          ) : (
            goal && !!goal.description && <GoalDescription description={goal.description} />
          )}
        </Stack>
      </PageLayoutContent>
    </PageLayout>
  )
})
