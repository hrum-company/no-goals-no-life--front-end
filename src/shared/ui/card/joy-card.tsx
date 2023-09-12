import { Card } from '@mui/joy'
import { memo } from 'react'

import { CardProps, CardVariant } from './types'

type JoyCardVariant = 'outlined' | 'plain' | 'soft' | 'solid'

const variantMap: Record<CardVariant, JoyCardVariant> = {
  primary: 'soft',
  secondary: 'outlined',
}

export const JoyCard = memo(function JoyCard({
  className = '',
  children,

  color = 'primary',
  variant = 'primary',
}: CardProps) {
  return (
    <Card className={className} variant={variantMap[variant]} color={color}>
      {children}
    </Card>
  )
})
