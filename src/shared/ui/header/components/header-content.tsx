import { memo } from 'react'

import { Typography } from 'shared/ui'

import classes from '../styles.module.scss'
import { HeaderProps } from '../types'

export const HeaderContent = memo(function HeaderContent({ children }: HeaderProps) {
  // Redner
  const renderContent = () => {
    if (typeof children === 'string') {
      return (
        <Typography
          level="h4"
          color="primary"
        >
          {children}
        </Typography>
      )
    }

    return children
  }

  return <div className={classes.content}>{renderContent()}</div>
})
