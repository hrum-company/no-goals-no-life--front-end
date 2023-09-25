import { Icon28SettingsOutline } from '@vkontakte/icons'
import { useUnit } from 'effector-react'
import { memo } from 'react'

import { $$editBookModal } from 'entities/book'

import { VerticalButton } from 'shared/ui'

export const OpenEditBookVerticalButton = memo(function OpenEditBookVerticalButton() {
  // Effector
  const [editBookModalOpened] = useUnit([$$editBookModal.opened])

  return (
    <VerticalButton
      variant="soft"
      fullWidth
      icon={<Icon28SettingsOutline fill="currentColor" />}
      title="Настройки"
      onClick={editBookModalOpened}
    />
  )
})
