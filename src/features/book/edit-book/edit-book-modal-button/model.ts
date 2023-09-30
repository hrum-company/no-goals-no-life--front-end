import { createEffect, createEvent, sample } from 'effector'

import { $$book, $$editBookModal } from 'entities/book'

import { $$alert } from 'shared/alerts'

//#region Events -----

export const editBookModalSubmited = createEvent()

//#endregion -----

//#region Effects -----

const pushSuccessAlertFx = createEffect(() => {
  $$alert.pushed({
    data: {
      type: 'success',
      message: 'Изменения успешно сохранены',
    },
  })
})

//#endregion -----

//#region Business Logic -----

sample({
  clock: editBookModalSubmited,
  target: $$book.edit.requested,
})

sample({
  clock: $$book.edit.done,
  target: $$editBookModal.closed,
})

sample({
  clock: $$book.edit.done,
  target: pushSuccessAlertFx,
})

//#endregion -----
