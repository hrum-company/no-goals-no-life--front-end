import { TypographySystem } from '@mui/joy'

import { WithColor, WithDecorator } from 'shared/ui/types'

export type TypographyLevel = keyof TypographySystem
export type TypographyVariant = 'primary' | 'secondary'

export interface TypographyProps extends WithColor, WithDecorator {
  children: React.ReactNode
  className?: string

  variant?: TypographyVariant
  level?: TypographyLevel

  noWrap?: boolean
}
