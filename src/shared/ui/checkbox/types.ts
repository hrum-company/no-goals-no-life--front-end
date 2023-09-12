import { WithColor, WithDecorator } from 'shared/ui/types'

export type InputVariant = 'primary' | 'secondary'
export type InputSize = 'small' | 'medium' | 'large'

export interface InputProps extends WithColor, WithDecorator {
  placeholder?: string

  variant?: InputVariant
  size?: InputSize

  disabled?: boolean
  error?: boolean
  fullWidth?: boolean

  value?: string
  onChange?: (value: string) => void
}
