import { memo } from 'react'

import { Navigation } from 'widgets/navigation'

import {
  Div,
  Header,
  HeaderContent,
  PageLayout,
  PageLayoutContent,
  PageLayoutFooter,
  PageLayoutHeader,
} from 'shared/ui'

export const DevelopPage = memo(function DevelopPage() {
  return (
    <PageLayout>
      <PageLayoutHeader>
        <Header>
          <HeaderContent>Страница для разработки</HeaderContent>
        </Header>
      </PageLayoutHeader>

      <PageLayoutContent>
        <Div>Nothing</Div>
      </PageLayoutContent>

      <PageLayoutFooter>
        <Navigation />
      </PageLayoutFooter>
    </PageLayout>
  )
})
