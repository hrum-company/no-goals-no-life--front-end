import { Card, CardActions, Skeleton, Stack, Typography } from '@mui/joy'
import { memo } from 'react'

export const BookCardSkeleton = memo(function BookCardSkeleton() {
  return (
    <Card
      variant="plain"
      sx={{ width: '100%', borderRadius: 16 }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
      >
        <Skeleton
          loading
          variant="circular"
          width={64}
          height={64}
        />
        <Stack>
          <Typography level="body-md">
            <Skeleton loading>Ваша книга целей</Skeleton>
          </Typography>
          <Typography level="title-lg">
            <Skeleton loading>100 жизненных целей</Skeleton>
          </Typography>
          <Typography level="body-sm">
            <Skeleton loading>Выполнено 0%</Skeleton>
          </Typography>
        </Stack>
      </Stack>

      <CardActions>
        <Skeleton
          loading
          variant="rectangular"
          width="100%"
          height={32}
        />
        <Skeleton
          loading
          variant="rectangular"
          width="100%"
          height={32}
        />
      </CardActions>
    </Card>
  )
})
