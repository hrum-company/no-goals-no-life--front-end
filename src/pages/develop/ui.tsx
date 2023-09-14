import { Avatar, Button, Stack, Typography } from '@mui/joy'
import { memo } from 'react'

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

import classes from './styles.module.scss'

export const DevelopPage = memo(function DevelopPage() {
  return (
    <PageLayout>
      <PageLayoutHeader noWrapperHeight>
        <Header
          className={classes.header}
          noBorder
        >
          <HeaderContent>Страница для разработки</HeaderContent>
        </Header>
      </PageLayoutHeader>

      <PageLayoutContent className={classes.content}>
        <Stack
          className={classes.topBg}
          direction="row"
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <Typography
            level="inherit"
            fontFamily=""
            color={'primary'}
          >
            #26
          </Typography>
        </Stack>
        <Stack spacing={1.5}>
          <Cloud>
            <Div
              className={classes.avatar}
              noPadding
            >
              <Avatar
                size="xxl"
                color="primary"
              >
                NGNL
              </Avatar>
            </Div>

            <Div noPadding>
              <Typography level="h4">Моя супер крутая жизненная цель</Typography>
              <Typography level="body-sm">Дата создания: XX.XX.XXXX</Typography>
            </Div>

            <Button
              variant="soft"
              size="sm"
              fullWidth
            >
              Редактировать
            </Button>
          </Cloud>

          <Cloud>
            <Typography level="title-lg">Описание</Typography>
          </Cloud>
        </Stack>
      </PageLayoutContent>

      <PageLayoutFooter>
        <Navigation />
      </PageLayoutFooter>
    </PageLayout>
  )
})
