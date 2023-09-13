import { memo } from 'react'

import classes from './styles.module.scss'
import { FooterProps } from './types'

export const Footer = memo(function Footer({ children }: FooterProps) {
  return <footer className={classes.root}>{children}</footer>
})
