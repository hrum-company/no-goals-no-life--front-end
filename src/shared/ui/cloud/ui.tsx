import { Card } from '@mui/joy'
import { memo } from 'react'

import { CloudProps } from './types'

export const Cloud = memo(function Cloud({ children, borderRadius = 8 }: CloudProps) {
  return (
    <Card
      variant="plain"
      sx={{
        backgroundColor: 'white',
        boxShadow: '0 2px 20px -8px rgba(0, 0, 0, 0.08)',
        borderRadius,
      }}
    >
      {children}
    </Card>
  )
})
