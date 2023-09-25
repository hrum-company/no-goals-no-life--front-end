import { Icon28AddSquareOutline } from '@vkontakte/icons'
import { useUnit } from 'effector-react'
import { memo, useCallback } from 'react'

import { $$book } from 'entities/book'

import { routes } from 'shared/routing'
import { VerticalButton } from 'shared/ui'

export const OpenCreateGoalVerticalButton = memo(function OpenCreateGoalVerticalButton() {
  // Effector
  const book = useUnit($$book.$item)

  // Handlers
  const handleClicked = useCallback(() => {
    if (!book) {
      return null
    }

    routes.goal.create.open({ bookId: book.id })
  }, [book])

  return (
    <VerticalButton
      fullWidth
      icon={<Icon28AddSquareOutline fill="currentColor" />}
      title="Добавить"
      onClick={handleClicked}
    />
  )
})
