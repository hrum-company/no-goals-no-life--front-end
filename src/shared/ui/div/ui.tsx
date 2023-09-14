import classNames from 'classnames'
import { memo } from 'react'

import classes from './styles.module.scss'
import { DivProps } from './types'

export const Div = memo(function Div({ children, className, noPadding }: DivProps) {
  const DivClassName = classNames(
    classes.root,
    {
      [classes.noPadding]: noPadding,
    },
    className
  )
  return <div className={DivClassName}>{children}</div>
})
