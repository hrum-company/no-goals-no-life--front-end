import { Button, Stack } from '@mui/joy'
import { Icon20FavoriteOutline, Icon20LikeOutline } from '@vkontakte/icons'
import { memo } from 'react'

import { BookCard } from 'entities/book'

import { FriendsBookCardProps } from './types'

export const FriendsBookCard = memo(function FriendsBookCard({
  friendsBook,
}: FriendsBookCardProps) {
  return (
    <BookCard
      book={friendsBook.book}
      user={friendsBook.user}
      actionsSlot={
        <Stack
          direction="row"
          justifyContent="space-between"
        >
          <Stack
            direction="row"
            spacing={1}
          >
            <Button
              variant="soft"
              sx={{ borderRadius: 12 }}
              startDecorator={<Icon20LikeOutline />}
            >
              4
            </Button>
            <Button
              variant="soft"
              sx={{ borderRadius: 12, paddingLeft: 1, paddingRight: 1 }}
            >
              <Icon20FavoriteOutline />
            </Button>
          </Stack>
          <Button sx={{ borderRadius: 12 }}>Открыть</Button>
        </Stack>
      }
    />
  )
})
