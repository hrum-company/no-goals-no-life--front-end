import { memo } from 'react'

import classes from '../styles.module.scss'
import { HeaderProps } from '../types'

export const HeaderLeft = memo(function HeaderLeft({ children }: HeaderProps) {
  return <div className={classes.left}>{children}</div>
})
