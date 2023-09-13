import { memo } from 'react'

import classes from './styles.module.scss'
import { HeaderProps } from './types'

export const Header = memo(function Header({ children }: HeaderProps) {
  return <header className={classes.root}>{children}</header>
})
