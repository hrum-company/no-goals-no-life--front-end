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

export const CreateGoalPage = memo(function CreateGoalPage() {
  return (
    <PageLayout>
      <PageLayoutHeader>
        <Header>
          <HeaderLeft>
            <HeaderBack />
          </HeaderLeft>

          <HeaderContent>Создание цели</HeaderContent>
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
