import { Avatar, Skeleton } from '@mui/joy'
import { useUnit } from 'effector-react'
import { memo } from 'react'

import { $vkCurrentUser } from 'shared/vk-bridge/vk-current-user.model'

import classes from '../styles.module.scss'

export const HeaderAvatar = memo(function HeaderAvatar() {
  // Effector
  const [user] = useUnit([$vkCurrentUser])

  return (
    <div className={classes.avatar}>
      <Avatar
        color="primary"
        size="sm"
      >
        {user ? user.first_name[0] + user.last_name[0] : <Skeleton loading />}
      </Avatar>
    </div>
  )
})
