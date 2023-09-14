import { Button } from '@mui/joy'
import { useUnit } from 'effector-react/effector-react.mjs'
import { memo } from 'react'

import { $$book } from 'entities/book'

import { editBookModalSubmited } from './model'

export const EditBookModalButton = memo(function EditBookModalButton() {
  // Effector
  const [submited, loading] = useUnit([editBookModalSubmited, $$book.edit.$pending])

  return (
    <Button
      size="sm"
      fullWidth
      loading={loading}
      onClick={submited}
    >
      Сохранить
    </Button>
  )
})
