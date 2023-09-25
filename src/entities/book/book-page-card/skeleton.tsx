import { Card, Skeleton, Stack, Typography } from '@mui/joy'
import { memo, useContext } from 'react'

import { Div, PageLayoutSizesContext } from 'shared/ui'

import classes from './styles.module.scss'

export const BookPageCardSkeleton = memo(function BookPageCardSkeleton() {
  // Context
  const { headerHeight } = useContext(PageLayoutSizesContext)

  return (
    <div className={classes.root}>
      <Stack spacing={2}>
        {/* Main */}
        <Card
          variant="plain"
          sx={{ width: '100%', borderRadius: '0 0 16px 16px' }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ paddingTop: `${headerHeight}px` }}
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
        </Card>

        {/* Actions */}
        <Div>
          <Stack
            spacing={2}
            direction="row"
          >
            <Skeleton
              loading
              variant="rectangular"
              width="100%"
              height={77}
              sx={{ borderRadius: 12 }}
            />
            <Skeleton
              loading
              variant="rectangular"
              width="100%"
              height={77}
              sx={{ borderRadius: 12 }}
            />
            <Skeleton
              loading
              variant="rectangular"
              width="100%"
              height={77}
              sx={{ borderRadius: 12 }}
            />
          </Stack>
        </Div>
      </Stack>
    </div>
  )
})
