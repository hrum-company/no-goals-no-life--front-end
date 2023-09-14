import { useUnit } from 'effector-react'
import { memo } from 'react'

import { $$book, BookNameFormItem } from 'entities/book'

export const EditBookNameFormItem = memo(function EditBookNameFormItem() {
  // Effector
  const name = useUnit($$book.toEdit.name)

  return (
    <BookNameFormItem
      value={name.$value}
      onChange={name.changed}
    />
  )
})
