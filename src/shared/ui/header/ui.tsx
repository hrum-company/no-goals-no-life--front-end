import classNames from 'classnames'
import { memo } from 'react'

import classes from './styles.module.scss'
import { HeaderProps } from './types'

export const Header = memo(function Header({ children, className = '', noBorder }: HeaderProps) {
  const HeaderClassName = classNames(classes.root, { [classes.noBorder]: noBorder }, className)

  return <header className={HeaderClassName}>{children}</header>
})
