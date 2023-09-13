import { Avatar, Skeleton } from '@mui/joy'
import { memo, useEffect, useState } from 'react'

import classes from '../styles.module.scss'

export const HeaderAvatar = memo(function HeaderAvatar() {
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 3000)
  })

  return (
    <div className={classes.avatar}>
      <Avatar
        color="primary"
        size="sm"
      >
        {loaded ? 'NG' : <Skeleton loading />}
      </Avatar>
    </div>
  )
})
