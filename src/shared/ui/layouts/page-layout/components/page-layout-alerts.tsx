import { CSSProperties, memo, useContext } from 'react'

import { AlertController } from 'shared/ui/alerts'

import { PageLayoutSizesContext } from '../context'
import classes from '../styles.module.scss'

export const PageLayoutAlerts = memo(function PageLayoutAlerts() {
  // Context
  const { footerHeight } = useContext(PageLayoutSizesContext)

  // Vars
  const style = {
    bottom: footerHeight,
  } as CSSProperties

  return (
    <div
      className={classes.alerts}
      style={style}
    >
      <AlertController />
    </div>
  )
})
