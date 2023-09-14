import { ArrowBack } from '@mui/icons-material'
import { IconButton } from '@mui/joy'
import { memo, useCallback } from 'react'

import { controls } from 'shared/routing'

import classes from '../styles.module.scss'

export const HeaderBack = memo(function HeaderBack() {
  // Handlers
  const handleClick = useCallback(() => {
    controls.back()
  }, [])

  return (
    <div className={classes.back}>
      <IconButton
        color="primary"
        onClick={handleClick}
      >
        <ArrowBack />
      </IconButton>
    </div>
  )
})
