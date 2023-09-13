import { WithColor } from '../types'

export type CardVariant = 'primary' | 'secondary' | 'plain'

export interface CardProps extends WithColor {
  className?: string
  children?: React.ReactNode

  fullWidth?: boolean
  invertedColors?: boolean

  variant?: CardVariant
}
