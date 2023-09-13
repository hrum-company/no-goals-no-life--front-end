import { Button, Card, CardActions, CircularProgress, Stack, Typography } from '@mui/joy'
import { Link } from 'atomic-router-react'
import { memo } from 'react'

import { routes } from 'shared/routing'

import { BookCardProps } from './types'

export const BookCard = memo(function BookCard({ book }: BookCardProps) {
  return (
    <Card
      variant="solid"
      color="primary"
      invertedColors
      sx={{ width: '100%' }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
      >
        <CircularProgress
          size="lg"
          determinate
          value={40}
        />
        <Stack>
          <Typography level="body-md">Ваша книга целей</Typography>
          <Typography level="title-md">{book.name}</Typography>
        </Stack>
      </Stack>

      <CardActions>
        <Button
          variant="soft"
          size="sm"
          fullWidth
        >
          Настроить
        </Button>

        <Link
          style={{ width: '100%' }}
          to={routes.goal.create}
          params={{ bookId: book?.id || 0 }}
        >
          <Button
            variant="solid"
            size="sm"
            fullWidth
          >
            Добавить цель
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
})
