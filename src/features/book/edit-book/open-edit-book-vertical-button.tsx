import { Icon28SettingsOutline } from '@vkontakte/icons'
import { useUnit } from 'effector-react'
import { memo, useCallback } from 'react'

import { $$book, $$editBookModal } from 'entities/book'

import { VerticalButton } from 'shared/ui'

export const OpenEditBookVerticalButton = memo(function OpenEditBookVerticalButton() {
  // Effector
  const [book, editBookModalOpened] = useUnit([$$book.$item, $$editBookModal.opened])

  // Handlers
  const handleClicked = useCallback(() => {
    if (!book) {
      return null
    }

    editBookModalOpened(book.id)
  }, [book, editBookModalOpened])

  return (
    <VerticalButton
      variant="soft"
      fullWidth
      icon={<Icon28SettingsOutline fill="currentColor" />}
      title="Настройки"
      onClick={handleClicked}
    />
  )
})
