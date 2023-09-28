import { Avatar, Stack, Typography } from '@mui/joy'
import { memo } from 'react'

import { BookCardUserProps } from './types'

export const BookCardUser = memo(function BookCardUser({ user }: BookCardUserProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
    >
      <Avatar>{user.first_name[0] + user.last_name[0]}</Avatar>
      <Typography textColor="common.white">{user.first_name + ' ' + user.last_name}</Typography>
    </Stack>
  )
})
