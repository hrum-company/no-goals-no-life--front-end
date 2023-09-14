import { memo } from 'react'

import { PageLayoutModalsProps } from '..'
import classes from '../styles.module.scss'

export const PageLayoutModals = memo(function PageLayoutModals({
  children,
}: PageLayoutModalsProps) {
  return <div className={classes.modals}>{children}</div>
})
