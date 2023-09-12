import { WithColor } from '../types'

export type CardVariant = 'primary' | 'secondary'

export interface CardProps extends WithColor {
  className?: string
  children?: React.ReactNode

  variant?: CardVariant
}
