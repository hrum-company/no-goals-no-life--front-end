import { SvgIconComponent } from '@mui/icons-material'
import { memo } from 'react'

export const Icon = memo(function Icon({ icon }: { icon: SvgIconComponent }) {
  const Icon = icon

  return <Icon />
})
