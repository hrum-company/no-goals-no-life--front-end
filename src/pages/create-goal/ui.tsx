import { Stack } from '@mui/joy'
import { memo } from 'react'

import { CreateGoalForm, CreateGoalPreview } from 'widgets/goal'

import { CreateGoalButton } from 'features/goal'

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

export const CreateGoalPage = memo(function CreateGoalPage() {
  return (
    <PageLayout>
      <PageLayoutHeader>
        <Header>
          <HeaderLeft>
            <HeaderBack />
          </HeaderLeft>

          <HeaderContent>Создание</HeaderContent>
        </Header>
      </PageLayoutHeader>

      <PageLayoutContent className={classes.content}>
        <Stack spacing={2.5}>
          <Div className={classes.preview}>
            <CreateGoalPreview />
          </Div>
          <Div className={classes.form}>
            <CreateGoalForm />
          </Div>
        </Stack>
      </PageLayoutContent>

      <PageLayoutFooter>
        <Footer>
          <CreateGoalButton />
        </Footer>
      </PageLayoutFooter>
    </PageLayout>
  )
})
