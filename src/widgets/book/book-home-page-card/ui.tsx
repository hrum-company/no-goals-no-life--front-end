import { Icon28ShareOutline } from '@vkontakte/icons'
import { useUnit } from 'effector-react'
import { memo } from 'react'

import { OpenEditBookVerticalButton } from 'features/book/'
import { OpenCreateGoalVerticalButton } from 'features/goal'

import { $$book, BookPageCard, BookPageCardSkeleton } from 'entities/book'

import { VerticalButton } from 'shared/ui'

export const BookHomePageCard = memo(function BookHomePageCard() {
  const [book, loaded] = useUnit([$$book.$item, $$book.loadAll.$alreadyLoaded])

  if (!loaded) {
    return <BookPageCardSkeleton />
  }

  if (!book) {
    // TODO: Должен выводиться блок с информацией о том, что книги нет
    return null
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
