import { useUnit } from 'effector-react/compat'
import { memo, useCallback } from 'react'

import { EditGoalForm } from 'widgets/goal'

import { EditGoalButton } from 'features/goal'

import { $goal, $goalLoading } from 'entities/goal'

import { controls } from 'shared/routing'
import {
  Button,
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

export const EditGoalPage = memo(function EditGoalPage() {
  const [goal, goalLoading] = useUnit([$goal, $goalLoading])

  const handleBackClicked = useCallback(() => {
    controls.back()
  }, [])

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

          <HeaderContent>Редактирование</HeaderContent>
        </Header>
      </PageLayoutHeader>

      <PageLayoutContent>
        <EditGoalForm />
      </PageLayoutContent>

      <PageLayoutFooter>
        <Footer>
          <EditGoalButton />
        </Footer>
      </PageLayoutFooter>
    </PageLayout>
  )
})
