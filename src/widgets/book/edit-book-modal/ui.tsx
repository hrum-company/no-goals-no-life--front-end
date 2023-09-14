import { Button } from '@mui/joy'
import { useUnit } from 'effector-react'
import { memo, useState } from 'react'

import { $$editBookModal, BookFormModal, BookHiddenFormItem, BookNameFormItem } from 'entities/book'

export const EditBookModal = memo(function EditBookModal() {
  // Efector
  const [open, closed] = useUnit([$$editBookModal.$open, $$editBookModal.closed])

  // State
  const [name, setName] = useState<string>('')
  const [hidden, setHidden] = useState<boolean>(false)

  return (
    <BookFormModal
      open={open}
      onClose={closed}
      title="Редактирование"
      buttonSlot={
        <Button
          size="sm"
          fullWidth
        >
          Сохранить
        </Button>
      }
    >
      <BookNameFormItem
        value={name}
        onChange={setName}
      />

      <BookHiddenFormItem
        value={hidden}
        onChange={setHidden}
      />
    </BookFormModal>
  )
})
