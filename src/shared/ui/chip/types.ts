import { WithColor } from '../types'

export type ChipVariant = 'primary' | 'secondary' | 'outlined'
export type ChipSize = 'small' | 'medium' | 'large'

export interface ChipProps extends WithColor {
  children?: React.ReactNode
  className?: string

  variant?: ChipVariant
  size?: ChipSize
}
