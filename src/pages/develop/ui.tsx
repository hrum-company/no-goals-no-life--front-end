import { FormControl, FormLabel, Stack, Textarea, Typography } from '@mui/joy'
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

export const DevelopPage = memo(function DevelopPage() {
  return (
    <PageLayout>
      <PageLayoutHeader>
        <Header>
          <HeaderContent>Страница для разработки</HeaderContent>
        </Header>
      </PageLayoutHeader>

      <PageLayoutContent>
        <Stack spacing={2}>
          <Div>
            <FormControl>
              <Typography>Название</Typography>
              <Textarea variant="plain"></Textarea>
            </FormControl>
          </Div>

          <Div>
            <FormControl>
              <Typography>Описание</Typography>
              <Textarea
                variant="plain"
                minRows={3}
              ></Textarea>
            </FormControl>
          </Div>
        </Stack>
      </PageLayoutContent>

      <PageLayoutFooter>
        <Navigation />
      </PageLayoutFooter>
    </PageLayout>
  )
})
