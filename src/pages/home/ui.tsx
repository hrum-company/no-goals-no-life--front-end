import { Stack } from '@mui/joy'
import { useUnit } from 'effector-react/compat'
import { memo } from 'react'

import { BookCard, BookCardSkeleton, BookHomePageCard, EditBookModal } from 'widgets/book'
import { Navigation } from 'widgets/navigation'

import { $$book } from 'entities/book'
import { GoalList, GoalListSkeleton } from 'entities/goal'

import {
  Div,
  PageLayout,
  PageLayoutContent,
  PageLayoutFooter,
  PageLayoutHeader,
  PageLayoutModals,
} from 'shared/ui'

import { HomeHeader } from './components'
import classes from './styles.module.scss'

export const HomePage = memo(function GoalsListPage() {
  // Effector
  const [book, bookLoading] = useUnit([$$book.$item, $$book.loadAll.$pending])

  return (
    <PageLayout>
      <PageLayoutHeader noWrapperHeight>
        <HomeHeader />
      </PageLayoutHeader>

      <PageLayoutContent className={classes.content}>
        <Stack spacing={2}>
          <BookHomePageCard />

          <Div>{bookLoading ? <GoalListSkeleton /> : <GoalList goals={book?.goals || []} />}</Div>
        </Stack>
      </PageLayoutContent>

      <PageLayoutFooter>
        <Navigation />
      </PageLayoutFooter>

      <PageLayoutModals>
        <EditBookModal />
      </PageLayoutModals>
    </PageLayout>
  )
})
