import { createEffect, createEvent, sample } from 'effector'

import { $$goal } from 'entities/goal'

import { $$alert } from 'shared/alerts'

//#region Events -----

export const editGoalSubmited = createEvent()

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
  clock: editGoalSubmited,
  target: $$goal.edit.inited,
})

sample({
  clock: $$goal.edit.done,
  target: pushSuccessAlertFx,
})

//#endregion -----
