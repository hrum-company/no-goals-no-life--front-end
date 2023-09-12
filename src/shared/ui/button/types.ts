import { WithColor, WithDecorator } from 'shared/ui/types'

export type ButtonVariant = 'primary' | 'secondary' | 'outlined'
export type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps extends WithColor, WithDecorator {
  children?: string

  onClick?: () => void
  to?: string

  variant?: ButtonVariant
  size?: ButtonSize

  fullWidth?: boolean
  disabled?: boolean
}
