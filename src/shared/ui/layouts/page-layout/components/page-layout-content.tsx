import classNames from 'classnames'
import { memo } from 'react'

import classes from '../styles.module.scss'
import { PageLayoutContentProps } from '../types'

export const PageLayoutContent = memo(function PageLayoutContent({
  children,
  className = '',
}: PageLayoutContentProps) {
  const PageLayoutContentClassName = classNames(className, classes.content)

  return <div className={PageLayoutContentClassName}>{children}</div>
})
