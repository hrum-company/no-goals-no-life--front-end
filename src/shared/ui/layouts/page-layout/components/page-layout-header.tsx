import { CSSProperties, memo } from 'react'

import { useElementHeight } from 'shared/hooks'

import classes from '../styles.module.scss'
import { PageLayoutHeaderProps } from '../types'

export const PageLayoutHeader = memo(function PageLayoutHeader({
  children,
}: PageLayoutHeaderProps) {
  // Hooks
  const [headerRef, headerHeight] = useElementHeight<HTMLDivElement>({ observeChange: true })

  // Vars
  const style = {
    minHeight: `${headerHeight}px`,
  } as CSSProperties

  return (
    <div
      style={style}
      className={classes.headerWrapper}
    >
      <div
        ref={headerRef}
        className={classes.header}
      >
        {children}
      </div>
    </div>
  )
})
