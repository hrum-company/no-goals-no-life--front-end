import { memo, useMemo } from 'react'

import { Button, PageLayout, Typography } from 'shared/ui'

export const OnBoardPage = memo(function OnBoardPage() {
  const decoratsiya = useMemo(() => <div>Suka</div>, [])

  return (
    <PageLayout>
      <Typography>Title</Typography>
      <Typography>Description</Typography>

      <Button fullWidth startDecorator={decoratsiya} color="warning" variant="secondary">
        Продолжить
      </Button>
    </PageLayout>
  )
})
