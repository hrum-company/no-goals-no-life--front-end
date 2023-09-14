import classNames from 'classnames'
import { CSSProperties, memo } from 'react'

import { useElementHeight } from 'shared/hooks'

import classes from '../styles.module.scss'
import { PageLayoutHeaderProps } from '../types'

export const PageLayoutHeader = memo(function PageLayoutHeader({
  children,
  className,
  noWrapperHeight,
}: PageLayoutHeaderProps) {
  // Hooks
  const [headerRef, headerHeight] = useElementHeight<HTMLDivElement>({
    observeChange: !noWrapperHeight,
  })

  // Vars
  const HeaderClassName = classNames(classes.header, className)

  const style = {
    minHeight: !noWrapperHeight ? `${headerHeight}px` : null,
  } as CSSProperties

  return (
    <div
      style={style}
      className={classes.headerWrapper}
    >
      <div
        ref={headerRef}
        className={HeaderClassName}
      >
        {children}
      </div>
    </div>
  )
})
