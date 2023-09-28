import { EmojiEventsOutlined } from '@mui/icons-material'
import { CircularProgress, Stack, Typography } from '@mui/joy'
import { memo } from 'react'

import { BookCardBookProps } from './types'

export const BookCardBook = memo(function BookCardBook({ book }: BookCardBookProps) {
  // Variables
  const completedGoalsCount = book.completedGoalsCount
  const goalsCount = book.goals?.length || 0
  const progressValue = Math.round(goalsCount !== 0 ? (completedGoalsCount / goalsCount) * 100 : 0)

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
    >
      <CircularProgress
        size="lg"
        determinate
        value={progressValue}
      >
        <EmojiEventsOutlined />
      </CircularProgress>
      <Stack>
        <Typography level="body-md">Первая книга</Typography>
        <Typography level="title-lg">{book.name}</Typography>
        <Typography level="body-sm">Выполнено {progressValue}%</Typography>
      </Stack>
    </Stack>
  )
})
