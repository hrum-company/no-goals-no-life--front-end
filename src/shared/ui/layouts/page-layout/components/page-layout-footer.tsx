import { CSSProperties, memo } from 'react'

import { useElementHeight } from 'shared/hooks'

import classes from '../styles.module.scss'
import { PageLayoutFooterProps } from '../types'

export const PageLayoutFooter = memo(function PageLayoutFooter({
  children,
}: PageLayoutFooterProps) {
  // Hooks
  const [footerRef, footerHeight] = useElementHeight<HTMLDivElement>({ observeChange: true })

  // Vars
  const style = {
    minHeight: `${footerHeight}px`,
  } as CSSProperties

  return (
    <div
      style={style}
      className={classes.footerWrapper}
    >
      <div
        ref={footerRef}
        className={classes.footer}
      >
        {children}
      </div>
    </div>
  )
})
