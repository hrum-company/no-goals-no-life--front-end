import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  ListItem,
  Modal,
  ModalClose,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy'
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

export const DevelopPage = memo(function DevelopPage() {
  const [open, setOpen] = useState(false)

  // Handlers
  const handleAlertPushed = () => {
    setOpen(true)
  }

  return (
    <PageLayout>
      <PageLayoutHeader>
        <Header>
          <HeaderContent>Страница для разработки</HeaderContent>
        </Header>
      </PageLayoutHeader>

      <PageLayoutContent>
        <Div>
          <Button
            color="success"
            fullWidth
            onClick={handleAlertPushed}
          >
            Показать алерт
          </Button>
        </Div>

        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            p: 2,
          }}
        >
          <Sheet sx={{ width: '100%', p: 2, borderRadius: 8 }}>
            <ModalClose />

            <Stack spacing={2}>
              <Typography level="title-md">Редактирование книги</Typography>

              <FormControl>
                <FormLabel>Название</FormLabel>
                <Input placeholder="Введите название" />
              </FormControl>

              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ position: 'relative' }}
              >
                <Stack>
                  <Typography level="title-sm">Скрыть цели</Typography>
                  <Typography level="body-xs">
                    Друзья не смогут посмотреть ваши цели, но будут видеть ваш прогресс
                  </Typography>
                </Stack>
                <Checkbox overlay />
              </Stack>

              <Button
                size="sm"
                fullWidth
              >
                Сохранить
              </Button>
            </Stack>
          </Sheet>
        </Modal>
      </PageLayoutContent>

      <PageLayoutFooter>
        <Navigation />
      </PageLayoutFooter>
    </PageLayout>
  )
})
