import { useUnit } from 'effector-react/compat'
import { memo } from 'react'

import { BookCard, BookCardSkeleton } from 'widgets/book'

import { $$book } from 'entities/book'
import { GoalList, GoalListSkeleton } from 'entities/goal'

import {
  Header,
  HeaderAvatar,
  HeaderContent,
  HeaderLeft,
  PageLayout,
  PageLayoutContent,
  PageLayoutHeader,
  Stack,
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
          {bookLoading && book ? <BookCardSkeleton /> : book && <BookCard book={book} />}

          {bookLoading ? <GoalListSkeleton /> : <GoalList goals={book?.goals || []} />}
        </Stack>
      </PageLayoutContent>
    </PageLayout>
  )
})
