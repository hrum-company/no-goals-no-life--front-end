import { sample } from 'effector'

import { $$book } from 'entities/book'

import { ModalModelFactory } from 'shared/modals'

export const $$editBookModal = ModalModelFactory()

sample({
  clock: $$editBookModal.closed,
  target: $$book.toEditReseted,
})
