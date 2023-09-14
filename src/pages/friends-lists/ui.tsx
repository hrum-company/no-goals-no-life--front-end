import { FavoriteBorder } from '@mui/icons-material'
import { Button, Sheet, Stack, Typography } from '@mui/joy'
import { useUnit } from 'effector-react/compat'
import { memo } from 'react'

import { BookCard, BookCardSkeleton } from 'widgets/book'
import { Navigation } from 'widgets/navigation'

import { $$book } from 'entities/book'

import {
  Div,
  Header,
  HeaderContent,
  PageLayout,
  PageLayoutContent,
  PageLayoutFooter,
  PageLayoutHeader,
} from 'shared/ui'

import classes from './styles.module.scss'

export const FriendsListsPage = memo(function FriendsListsPage() {
  // Effects
  const [book, bookLoading] = useUnit([$$book.$item, $$book.loadAll.$pending])

  return (
    <PageLayout>
      <PageLayoutHeader>
        <Header className={classes.header}>
          <HeaderContent>У тебя нет друзяй</HeaderContent>
        </Header>
      </PageLayoutHeader>

      <PageLayoutContent className={classes.content}>
        <Div>
          <Stack spacing={2}>
            {bookLoading && book ? (
              <BookCardSkeleton />
            ) : (
              book && (
                <BookCard
                  book={book}
                  title="Книга целей Артёма Александровича"
                  buttonSide={
                    <>
                      <Button fullWidth>Перейти</Button>
                      <Button
                        color="danger"
                        variant="soft"
                      >
                        <FavoriteBorder />
                      </Button>
                    </>
                  }
                />
              )
            )}

            {book && (
              <BookCard
                book={book}
                title="Книга целей Диси"
                buttonSide={
                  <>
                    <Button
                      fullWidth
                      disabled
                    >
                      Приватная книга
                    </Button>
                    <Button
                      color="danger"
                      variant="soft"
                      disabled
                    >
                      <FavoriteBorder />
                    </Button>
                  </>
                }
              />
            )}
          </Stack>
        </Div>
      </PageLayoutContent>

      <PageLayoutFooter>
        <Navigation />
      </PageLayoutFooter>
    </PageLayout>
  )
})
