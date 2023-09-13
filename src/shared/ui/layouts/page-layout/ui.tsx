import { memo } from 'react'

import styles from './styles.module.scss'
import { PageLayoutProps } from './types'

export const PageLayout = memo(function PageLayout({ children }: PageLayoutProps) {
  return <div className={styles.root}>{children}</div>
})
