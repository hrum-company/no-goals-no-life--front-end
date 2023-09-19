import { SvgIconComponent } from '@mui/icons-material'
import { ColorPaletteProp } from '@mui/joy'
import { memo } from 'react'

export const Icon = memo(function Icon({
  icon,
  iconColor = 'primary',
}: {
  icon: SvgIconComponent
  iconColor?: ColorPaletteProp
}) {
  const Icon = icon

  return (
    <Icon
      color={iconColor}
      size="lg"
    />
  )
})
