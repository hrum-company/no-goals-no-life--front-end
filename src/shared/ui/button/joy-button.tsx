import { Button } from '@mui/joy'
import { Link } from 'atomic-router-react'
import { memo } from 'react'

import styles from './styles.module.scss'
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
  to,

  variant = 'primary',
  size = 'medium',
  color = 'primary',

  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const button = (
    <Button
      variant={variantMap[variant]}
      size={sizeMap[size]}
      disabled={disabled}
      fullWidth={fullWidth}
      color={color}
      startDecorator={startDecorator}
      endDecorator={endDecorator}
      onClick={onClick}
    >
      {children}
    </Button>
  )

  if (to) {
    return (
      <Link className={fullWidth ? styles.fullWidthLink : ''} to={to}>
        {button}
      </Link>
    )
  }

  return button
})
