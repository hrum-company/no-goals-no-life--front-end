import { Card } from '@mui/joy'
import { memo, useMemo } from 'react'

import { BookCardContentProps } from './types'

export const BookCardContent = memo(function BookCardContent({ children }: BookCardContentProps) {
  // Memo
  const sx = useMemo(() => ({ borderRadius: 16 }), [])

  return (
    <Card
      variant="solid"
      color="primary"
      invertedColors
      sx={sx}
    >
      {children}
    </Card>
  )
})
