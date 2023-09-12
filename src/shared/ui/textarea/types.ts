import { WithColor, WithDecorator } from 'shared/ui/types'

export type TextareaSize = 'small' | 'medium' | 'large'

export interface TextareaProps extends WithColor, WithDecorator {
  placeholder?: string

  size?: TextareaSize

  minRows?: number
  maxRows?: number

  disabled?: boolean
  readOnly?: boolean

  value?: string
  onChange?: (value: string) => void
}
