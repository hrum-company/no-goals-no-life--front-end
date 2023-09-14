import { CSSProperties, memo, useContext } from 'react'

import { useElementHeight } from 'shared/hooks'

import { PageLayoutSizesContext } from '../context'
import classes from '../styles.module.scss'
import { PageLayoutFooterProps } from '../types'

export const PageLayoutFooter = memo(function PageLayoutFooter({
  children,
}: PageLayoutFooterProps) {
  // Context
  const { setFooterHeight } = useContext(PageLayoutSizesContext)

  // Hooks
  const [footerRef, footerHeight] = useElementHeight<HTMLDivElement>({
    observeChange: true,
    setter: setFooterHeight,
  })

  // Vars
  const style = {
    minHeight: `${footerHeight}px`,
    '--page-footer-height': `${footerHeight}px`,
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
