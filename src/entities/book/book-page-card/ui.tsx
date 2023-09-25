import { EmojiEventsOutlined } from '@mui/icons-material'
import { Card, CircularProgress, Stack, Typography } from '@mui/joy'
import { Icon20LikeOutline, Icon20ViewOutline } from '@vkontakte/icons'
import { memo, useContext } from 'react'

import { Div, PageLayoutSizesContext } from 'shared/ui'

import classes from './styles.module.scss'
import { BookPageCardProps } from './types'

export const BookPageCard = memo(function BookPageCard({ book, actionsSlot }: BookPageCardProps) {
  // Context
  const { headerHeight } = useContext(PageLayoutSizesContext)

  // Variables
  const completedGoalsCount = book.completedGoalsCount
  const goalsCount = book.goals?.length || 0
  const progressValue = Math.round(goalsCount !== 0 ? (completedGoalsCount / goalsCount) * 100 : 0)

  // Render
  const renderActions = () => {
    if (!actionsSlot) {
      return null
    }

    return (
      <Div>
        <Stack
          spacing={2}
          direction="row"
        >
          {actionsSlot}
        </Stack>
      </Div>
    )
  }

  return (
    <div className={classes.root}>
      <Stack spacing={2}>
        <Card
          variant="solid"
          color="primary"
          invertedColors
          sx={{ width: '100%', borderRadius: '0 0 16px 16px' }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ paddingTop: `${headerHeight}px` }}
          >
            <CircularProgress
              size="lg"
              determinate
              value={progressValue}
            >
              <EmojiEventsOutlined />
            </CircularProgress>
            <Stack>
              <Typography level="body-md">Ваша книга целей</Typography>
              <Typography level="title-lg">{book?.name}</Typography>
              <Typography level="body-sm">Выполнено {progressValue}%</Typography>
            </Stack>
          </Stack>
        </Card>

        {renderActions()}

        <Div>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={1.5}
          >
            <Typography
              level="body-sm"
              startDecorator={<Icon20LikeOutline fill="currentColor" />}
            >
              0 лайков
            </Typography>
            <Typography
              level="body-sm"
              startDecorator={<Icon20ViewOutline fill="currentColor" />}
            >
              0 просмотра
            </Typography>
          </Stack>
        </Div>
      </Stack>
    </div>
  )
})
