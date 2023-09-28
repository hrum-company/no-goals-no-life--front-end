import { Stack } from '@mui/joy'
import { useUnit } from 'effector-react'
import { memo } from 'react'

import { FriendsBookCard } from 'widgets/friends-book'
import { Navigation } from 'widgets/navigation'

import { $$friendsBook } from 'entities/friends-book'

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
  // Effector
  const [friendsBooks] = useUnit([$$friendsBook.$items])

  // Render
  const renderFriendsBooks = () =>
    friendsBooks.map((friendsBook) => (
      <Div key={friendsBook.book.id}>
        <FriendsBookCard friendsBook={friendsBook} />
      </Div>
    ))

  return (
    <PageLayout>
      <PageLayoutHeader>
        <Header className={classes.header}>
          <HeaderContent>У тебя нет друзяй</HeaderContent>
        </Header>
      </PageLayoutHeader>

      <PageLayoutContent className={classes.content}>
        <Stack spacing={2}>{renderFriendsBooks()}</Stack>
      </PageLayoutContent>

      <PageLayoutFooter>
        <Navigation />
      </PageLayoutFooter>
    </PageLayout>
  )
})
