import { Link } from 'atomic-router-react'
import { useUnit } from 'effector-react/compat'
import { memo } from 'react'

import { $book, $booksLoading } from 'entities/book'
import { GoalList } from 'entities/goal'

import { routes } from 'shared/routing'
import { Button, PageLayout, Typography } from 'shared/ui'

export const HomePage = memo(function GoalsListPage() {
  // Effector
  const [book, bookLoading] = useUnit([$book, $booksLoading])

  if (!book || bookLoading) {
    return 'loading..'
  }

  return (
    <PageLayout
      header={
        <Typography level="h2" color="primary">
          {book?.name}
        </Typography>
      }
      footer={
        <Link style={{ width: '100%' }} to={routes.goal.create} params={{ bookId: book.id }}>
          <Button fullWidth size="large">
            Создать цель
          </Button>
        </Link>
      }
    >
      <GoalList goals={book.goals || []} />
    </PageLayout>
  )
})
