import { Stack } from '@mui/joy'
import classNames from 'classnames'
import { memo } from 'react'

import styles from './styles.module.scss'
import { StackProps } from './types'

export const JoyStack = memo(function JoyStack({
  className = '',
  children,
  divider,

  fullWidth = false,

  direction = 'column',
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  flexWrap = 'nowrap',
  spacing = 0,
}: StackProps) {
  const StackClassName = classNames(className, {
    [styles.fullWidth]: fullWidth,
  })

  return (
    <Stack
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexWrap={flexWrap}
      spacing={spacing}
      divider={divider}
      className={StackClassName}
    >
      {children}
    </Stack>
  )
})
