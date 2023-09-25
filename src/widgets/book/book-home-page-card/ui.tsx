import { Icon28ShareOutline } from '@vkontakte/icons'
import { useUnit } from 'effector-react'
import { memo } from 'react'

import { OpenEditBookVerticalButton } from 'features/book/'
import { OpenCreateGoalVerticalButton } from 'features/goal'

import { $$book, BookPageCard, BookPageCardSkeleton } from 'entities/book'

import { VerticalButton } from 'shared/ui'

export const BookHomePageCard = memo(function BookHomePageCard() {
  const [book] = useUnit([$$book.$item])

  if (!book) {
    return <BookPageCardSkeleton />
  }

  return (
    <BookPageCard
      book={book}
      actionsSlot={
        <>
          <OpenEditBookVerticalButton />
          <OpenCreateGoalVerticalButton />
          <VerticalButton
            variant="soft"
            fullWidth
            icon={<Icon28ShareOutline fill="currentColor" />}
            title="Поделиться"
          />
        </>
      }
    />
  )
})
