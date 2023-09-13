import { memo } from 'react'

import styles from '../styles.module.scss'
import { PageLayoutContentProps } from '../types'

export const PageLayoutContent = memo(function PageLayoutContent({
  children,
}: PageLayoutContentProps) {
  return <div className={styles.content}>{children}</div>
})
