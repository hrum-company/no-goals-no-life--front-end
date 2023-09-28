import { Stack } from '@mui/joy'
import { memo } from 'react'

import { BookCardActionProps } from './types'

export const BookCardActions = memo(function BookCardActions({ children }: BookCardActionProps) {
  return <Stack sx={{ p: '0 16px 16px' }}>{children}</Stack>
})
