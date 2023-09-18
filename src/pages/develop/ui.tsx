import { EmojiEventsOutlined } from '@mui/icons-material'
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CircularProgress,
  FormControl,
  Stack,
  Textarea,
  Typography,
} from '@mui/joy'
import { Editor, EditorState, RichUtils } from 'draft-js'
import { memo, useState } from 'react'

import { Navigation } from 'widgets/navigation'

import {
  Div,
  Header,
  HeaderContent,
  PageLayout,
  PageLayoutContent,
  PageLayoutFooter,
  PageLayoutHeader,
} from 'shared/ui'
import { Cloud } from 'shared/ui/cloud'

export const DevelopPage = memo(function DevelopPage() {
  return (
    <PageLayout>
      <PageLayoutHeader>
        <Header>
          <HeaderContent>Страница для разработки</HeaderContent>
        </Header>
      </PageLayoutHeader>

      <PageLayoutContent>
        <Stack spacing={1}>
          <Div>
            <Cloud borderRadius={16}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <Avatar color="primary">ДД</Avatar>
                <Typography>Денис Русланович</Typography>
              </Stack>
              <Card
                sx={{ margin: '0 -16px -16px', borderRadius: 16 }}
                variant="solid"
                color="primary"
                invertedColors
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                >
                  <CircularProgress
                    size="lg"
                    determinate
                    value={10}
                  >
                    <EmojiEventsOutlined />
                  </CircularProgress>
                  <Stack>
                    <Typography level="body-md">Заголовок?</Typography>
                    <Typography level="title-lg">Название книги целей</Typography>
                    <Typography level="body-sm">Выполнено 10%</Typography>
                  </Stack>
                </Stack>

                <CardActions>
                  <Button>Открыть</Button>
                </CardActions>
              </Card>
            </Cloud>
          </Div>
        </Stack>
      </PageLayoutContent>

      <PageLayoutFooter>
        <Navigation />
      </PageLayoutFooter>
    </PageLayout>
  )
})
