import { Modal, ModalClose, Sheet, Stack, Typography } from '@mui/joy'
import { memo } from 'react'

import { BookFormModalProps } from './types'

export const BookFormModal = memo(function BookFormModal({
  open,
  onClose,

  title,
  children,
  buttonSlot,
}: BookFormModalProps) {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={onClose}
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
          <Typography level="title-md">{title}</Typography>

          {children}

          {buttonSlot}
        </Stack>
      </Sheet>
    </Modal>
  )
})
