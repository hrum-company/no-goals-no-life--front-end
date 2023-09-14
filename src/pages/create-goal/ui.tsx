import { memo } from 'react'

import { CreateGoalForm } from 'widgets/goal'

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
        <Header
          className={classes.header}
          noBorder
        >
          <HeaderLeft>
            <HeaderBack />
          </HeaderLeft>

          <HeaderContent>Создание</HeaderContent>
        </Header>
      </PageLayoutHeader>

      <PageLayoutContent>
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
