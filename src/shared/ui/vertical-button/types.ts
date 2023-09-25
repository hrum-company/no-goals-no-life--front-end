import { VariantProp } from '@mui/joy'

type Variant = VariantProp

export interface VerticalButtonProps {
  variant?: Variant
  fullWidth?: boolean
  icon: React.ReactNode
  title: string
  onClick?: () => void
}
