import { memo } from 'react'

import { Stack } from 'shared/ui'

import styles from './styles.module.scss'
import { PageLayoutProps } from './types'

export const PageLayout = memo(function PageLayout({ children, header, footer }: PageLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Stack className={styles.header} direction="row" alignItems="center">
        {header}
      </Stack>

      <div className={styles.content}>{children}</div>

      <Stack className={styles.footer} justifyContent="center" alignItems="center">
        {footer}
      </Stack>
    </div>
  )
})
