import { Button } from '@mui/joy'
import { useUnit } from 'effector-react/effector-react.umd'
import { memo } from 'react'

import { Navigation } from 'widgets/navigation'

import { $$alert } from 'shared/alerts'
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
  // Effector
  const [pushed] = useUnit([$$alert.pushed])

  // Handlers
  const handleAlertPushed = () => {
    pushed({
      data: {
        type: 'success',
        message: 'Hello World',
      },
    })
  }

  return (
    <PageLayout>
      <PageLayoutHeader>
        <Header>
          <HeaderContent>Страница для разработки</HeaderContent>
        </Header>
      </PageLayoutHeader>

      <PageLayoutContent>
        <Div>
          <Button
            color="success"
            fullWidth
            onClick={handleAlertPushed}
          >
            Показать алерт
          </Button>
        </Div>
      </PageLayoutContent>

      <PageLayoutFooter>
        <Navigation />
      </PageLayoutFooter>
    </PageLayout>
  )
})
