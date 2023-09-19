import { memo } from 'react'

import { CreateGoalForm, CreateGoalPreview } from 'widgets/goal'

import { CreateGoalButton } from 'features/goal'

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

import classes from './styles.module.scss'

export const CreateGoalPage = memo(function CreateGoalPage() {
  return (
    <PageLayout>
      <PageLayoutHeader>
        <Header className={classes.header}>
          <HeaderLeft>
            <HeaderBack />
          </HeaderLeft>

          <HeaderContent>Создание</HeaderContent>
        </Header>
      </PageLayoutHeader>

      <PageLayoutContent>
        <CreateGoalPreview />
        <CreateGoalForm />
      </PageLayoutContent>

      <PageLayoutFooter>
        <Footer>
          <CreateGoalButton />
        </Footer>
      </PageLayoutFooter>
    </PageLayout>
  )
})
