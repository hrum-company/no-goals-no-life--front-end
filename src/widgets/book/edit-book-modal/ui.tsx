import { useUnit } from 'effector-react'
import { memo } from 'react'

import { EditBookModalButton, EditBookHiddenFormItem, EditBookNameFormItem } from 'features/book'

import { $$editBookModal, BookFormModal } from 'entities/book'

export const EditBookModal = memo(function EditBookModal() {
  // Efector
  const [open, closed] = useUnit([$$editBookModal.$open, $$editBookModal.closed])

  return (
    <BookFormModal
      open={open}
      onClose={closed}
      title="Редактирование"
      buttonSlot={<EditBookModalButton />}
    >
      <EditBookNameFormItem />
      <EditBookHiddenFormItem />
    </BookFormModal>
  )
})
