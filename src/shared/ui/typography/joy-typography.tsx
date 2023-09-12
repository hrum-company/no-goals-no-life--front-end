import { Typography } from '@mui/joy'
import { memo } from 'react'

import { TypographyProps, TypographyVariant } from './types'

type JoyTypographyVariant = 'outlined' | 'plain' | 'soft' | 'solid'

const variantMap: Record<TypographyVariant, JoyTypographyVariant> = {
  primary: 'plain',
  secondary: 'solid',
}

export const JoyTypography = memo(function JoyTypography({
  children,
  className = '',

  startDecorator,
  endDecorator,

  variant = 'primary',
  level = 'body-md',
  color = 'neutral',

  noWrap = false,
}: TypographyProps) {
  return (
    <Typography
      className={className}
      level={level}
      variant={variantMap[variant]}
      color={color}
      startDecorator={startDecorator}
      endDecorator={endDecorator}
      noWrap={noWrap}
    >
      {children}
    </Typography>
  )
})
