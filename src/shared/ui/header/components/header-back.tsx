import { Button } from '@mui/joy'
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
      <Button
        onClick={handleClick}
        size="sm"
      >
        Назад
      </Button>
    </div>
  )
})
