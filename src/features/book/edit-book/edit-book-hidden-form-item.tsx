import { useUnit } from 'effector-react'
import { memo } from 'react'

import { $$book, BookHiddenFormItem } from 'entities/book'

export const EditBookHiddenFormItem = memo(function EditBookHiddenFormItem() {
  // Effector
  const hidden = useUnit($$book.toEdit.hidden)

  return (
    <BookHiddenFormItem
      value={hidden.$value}
      onChange={hidden.changed}
    />
  )
})
