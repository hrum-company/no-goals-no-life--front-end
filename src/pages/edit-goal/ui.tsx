import { Stack } from '@mui/joy'
import { useUnit } from 'effector-react/compat'
import { memo } from 'react'

import { EditGoalForm, EditGoalPreview } from 'widgets/goal'

import { EditGoalButton } from 'features/goal'

import { $goal, $goalLoading } from 'entities/goal'

import {
  Div,
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

import classes from './styles.module.scss'

export const EditGoalPage = memo(function EditGoalPage() {
  const [goal, goalLoading] = useUnit([$goal, $goalLoading])

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

      <PageLayoutContent className={classes.content}>
        <Stack spacing={2.5}>
          <Div className={classes.preview}>
            <EditGoalPreview />
          </Div>
          <Div className={classes.form}>
            <EditGoalForm />
          </Div>
        </Stack>
      </PageLayoutContent>

      <PageLayoutFooter>
        <Footer>
          <EditGoalButton />
        </Footer>
      </PageLayoutFooter>
    </PageLayout>
  )
})
