import { Stack } from '@mui/joy'
import { useUnit } from 'effector-react/compat'
import { memo } from 'react'

import { BookCard, BookCardSkeleton, EditBookModal } from 'widgets/book'
import { Navigation } from 'widgets/navigation'

import { $$book } from 'entities/book'
import { GoalList, GoalListSkeleton } from 'entities/goal'

import {
  Div,
  Header,
  HeaderAvatar,
  HeaderContent,
  HeaderLeft,
  PageLayout,
  PageLayoutContent,
  PageLayoutFooter,
  PageLayoutHeader,
  PageLayoutModals,
} from 'shared/ui'

export const HomePage = memo(function GoalsListPage() {
  // Effector
  const [book, bookLoading] = useUnit([$$book.$item, $$book.loadAll.$pending])

  return (
    <PageLayout>
      <PageLayoutHeader>
        <Header>
          <HeaderLeft>
            <HeaderAvatar />
          </HeaderLeft>
          <HeaderContent>Главная</HeaderContent>
        </Header>
      </PageLayoutHeader>

      <PageLayoutContent>
        <Stack spacing={2}>
          <Div>{bookLoading && book ? <BookCardSkeleton /> : book && <BookCard book={book} />}</Div>

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
