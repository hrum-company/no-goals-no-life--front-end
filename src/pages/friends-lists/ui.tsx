import { Button, Sheet, Stack, Typography } from '@mui/joy'
import { memo } from 'react'

import { PageLayout } from 'shared/ui'

interface List {
  name: string
  goalsCount: number
  completedGoalsCount: number
  hidden: boolean
}

interface FriendsList {
  id: string
  user: string
  list: List
}

const friendsLists: FriendsList[] = [
  {
    id: '1:1',
    user: 'Денис',
    list: {
      name: 'Я справлюсь!',
      goalsCount: 20,
      completedGoalsCount: 10,
      hidden: false,
    },
  },
  {
    id: '2:2',
    user: 'Артем',
    list: {
      name: 'Я Артём!',
      goalsCount: 1,
      completedGoalsCount: 0,
      hidden: true,
    },
  },
]

export const FriendsListsPage = memo(function FriendsListsPage() {
  const renderFriendsList = (friendsList: FriendsList) => (
    <Sheet
      key={friendsList.id}
      variant="soft"
      sx={{ p: 2, width: '100%', borderRadius: '16px' }}
    >
      <Stack spacing={1}>
        <Typography>{friendsList.user}</Typography>
        <Typography>Название: {friendsList.list.name}</Typography>
        <Typography>
          Целей: {friendsList.list.completedGoalsCount.toString()} /{' '}
          {friendsList.list.goalsCount.toString()}
        </Typography>
        {!friendsList.list.hidden && <Button size="sm">Открыть</Button>}
      </Stack>
    </Sheet>
  )
  return (
    <PageLayout>
      <Stack spacing={1}>{friendsLists.map((friendsList) => renderFriendsList(friendsList))}</Stack>
    </PageLayout>
  )
})
