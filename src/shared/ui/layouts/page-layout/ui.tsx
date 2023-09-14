import { memo } from 'react'

import { PageLayoutAlerts } from './components/page-layout-alerts'
import { PageLayoutSizesProvider } from './context'
import styles from './styles.module.scss'
import { PageLayoutProps } from './types'

export const PageLayout = memo(function PageLayout({ children }: PageLayoutProps) {
  return (
    <PageLayoutSizesProvider>
      <div className={styles.root}>
        {children}
        <PageLayoutAlerts />
      </div>
    </PageLayoutSizesProvider>
  )
})
