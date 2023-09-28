import { EmojiEventsOutlined } from '@mui/icons-material'
import { Button, Card, CardActions, CircularProgress, Stack, Typography } from '@mui/joy'
import { Link } from 'atomic-router-react'
import { useUnit } from 'effector-react/effector-react.umd'
import { memo } from 'react'

import { $$editBookModal } from 'entities/book'

import { routes } from 'shared/routing'

import { BookCardProps } from './types'

export const BookCard = memo(function BookCard({
  book,

  buttonSide,
}: BookCardProps) {
  // Effector
  const [editBookModalOpened] = useUnit([$$editBookModal.opened])

  // Variables
  const completedGoalsCount = book.completedGoalsCount
  const goalsCount = book.goals?.length || 0
  const progressValue = Math.round(goalsCount !== 0 ? (completedGoalsCount / goalsCount) * 100 : 0)

  return (
    <Card
      variant="solid"
      color="primary"
      invertedColors
      sx={{ width: '100%', borderRadius: 16 }}
    >
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
          <Typography level="body-md">Книга целей</Typography>
          <Typography level="title-lg">{book.name}</Typography>
          <Typography level="body-sm">Выполнено {progressValue}%</Typography>
        </Stack>
      </Stack>

      <CardActions>
        {buttonSide ? (
          buttonSide
        ) : (
          <>
            <Button
              variant="soft"
              size="sm"
              fullWidth
              onClick={editBookModalOpened}
            >
              Настроить
            </Button>

            <Link
              style={{ width: '100%' }}
              to={routes.goal.create}
              params={{ bookId: book.id || 0 }}
            >
              <Button
                variant="solid"
                size="sm"
                fullWidth
              >
                Добавить цель
              </Button>
            </Link>
          </>
        )}
      </CardActions>
    </Card>
  )
})
