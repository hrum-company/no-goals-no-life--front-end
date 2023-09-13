import { Button } from '@mui/joy'
import { memo } from 'react'

import classes from './styles.module.scss'
import { ButtonProps, ButtonSize, ButtonVariant } from './types'

type JoyButtonVariant = 'outlined' | 'plain' | 'soft' | 'solid'
type JoyButtonSize = 'sm' | 'md' | 'lg'

const variantMap: Record<ButtonVariant, JoyButtonVariant> = {
  primary: 'solid',
  secondary: 'plain',
  outlined: 'outlined',
}

const sizeMap: Record<ButtonSize, JoyButtonSize> = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
}

export const JoyButton = memo(function JoyButton({
  children,
  startDecorator,
  endDecorator,

  onClick = () => null,

  variant = 'primary',
  size = 'medium',
  color = 'primary',

  fullWidth = false,
  disabled = false,
  loading = false,
}: ButtonProps) {
  return (
    <Button
      variant={variantMap[variant]}
      size={sizeMap[size]}
      disabled={disabled}
      loading={loading}
      fullWidth={fullWidth}
      color={color}
      startDecorator={startDecorator}
      endDecorator={endDecorator}
      onClick={onClick}
    >
      {children}
    </Button>
  )
})
