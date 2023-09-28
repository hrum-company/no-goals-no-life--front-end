import { memo } from 'react'

import { Cloud } from 'shared/ui'

import { BookCardActions, BookCardBook, BookCardContent, BookCardUser } from './components'
import { BookCardProps } from './types'

export const BookCard = memo(function BookCard({ book, user, actionsSlot }: BookCardProps) {
  // Render
  const renderUser = () => {
    if (!user) {
      return null
    }

    return <BookCardUser user={user} />
  }

  const renderBook = () => <BookCardBook book={book} />

  const renderActions = () => {
    if (!actionsSlot) {
      return null
    }

    return <BookCardActions>{actionsSlot}</BookCardActions>
  }

  return (
    <Cloud sx={{ borderRadius: 16, p: 0 }}>
      <BookCardContent>
        {renderUser()}
        {renderBook()}
      </BookCardContent>

      {renderActions()}
    </Cloud>
  )
})
