import { AlignItems, Direction, FlexWrap, JustifyContent } from 'shared/ui/types'

export interface StackProps {
  className?: string
  children?: React.ReactNode
  divider?: React.ReactNode

  fullWidth?: boolean

  direction?: Direction
  alignItems?: AlignItems
  justifyContent?: JustifyContent
  flexWrap?: FlexWrap
  spacing?: number

  useFlexGap?: boolean
}
