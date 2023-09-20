import { Card } from '@mui/joy'
import { memo } from 'react'

import { CloudProps } from './types'

export const Cloud = memo(function Cloud({
  children,
  className = '',
  borderRadius = 8,
}: CloudProps) {
  return (
    <Card
      variant="plain"
      className={className}
      sx={{
        backgroundColor: 'white',
        boxShadow: '0 2px 22px -6px rgba(0, 0, 0, 0.16)',
        borderRadius,
      }}
    >
      {children}
    </Card>
  )
})
