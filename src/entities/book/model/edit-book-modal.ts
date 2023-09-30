import { sample } from 'effector'

import { $$book } from 'entities/book'

import { ModalModelFactory } from 'shared/modals'

export const $$editBookModal = ModalModelFactory<number>()

sample({
  clock: $$editBookModal.opened,
  target: $$book.edit.editableBookChanged,
})

sample({
  clock: $$editBookModal.closed,
  fn: () => null,
  target: $$book.edit.editableBookChanged,
})
