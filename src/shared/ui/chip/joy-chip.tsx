import { Chip } from '@mui/joy'
import classNames from 'classnames'
import { memo } from 'react'

import classes from './styles.module.scss'
import { ChipProps, ChipSize, ChipVariant } from './types'

type JoyChipVariant = 'outlined' | 'plain' | 'soft' | 'solid'
type JoyChipSize = 'sm' | 'md' | 'lg'

const variantMap: Record<ChipVariant, JoyChipVariant> = {
  primary: 'solid',
  secondary: 'plain',
  outlined: 'outlined',
}

const sizeMap: Record<ChipSize, JoyChipSize> = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
}

export const JoyChip = memo(function JoyChip({
  className = '',
  children,

  variant = 'primary',
  size = 'medium',
  color = 'primary',
}: ChipProps) {
  const ChipClassName = classNames(className, classes.root)

  return (
    <Chip
      className={ChipClassName}
      variant={variantMap[variant]}
      size={sizeMap[size]}
      color={color}
    >
      {children}
    </Chip>
  )
})
