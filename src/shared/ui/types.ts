export type JoyColor = 'danger' | 'neutral' | 'primary' | 'success' | 'warning'

export interface WithColor {
  color?: JoyColor
}

export interface WithDecorator {
  startDecorator?: React.ReactNode
  endDecorator?: React.ReactNode
}

export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'
export type AlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
export type JustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
export type FlexWrap = 'wrap' | 'nowrap'
