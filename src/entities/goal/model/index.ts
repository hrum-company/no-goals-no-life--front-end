import { RouteInstance } from 'atomic-router'
import {
  Event,
  Store,
  attach,
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from 'effector'
import { reset } from 'patronum'

import { Goal, api } from 'shared/api'
import {
  EditableField,
  EditableFieldFactory,
  ModelEvent,
  ModelEventFactory,
} from 'shared/helpers/effector'
import { routes } from 'shared/routing'

//#region //* API

const requestFindOneGoalFx = attach({ effect: api.goal.requestFindOneGoalFx })
const requestCreateGoalFx = attach({ effect: api.goal.requestCreateGoalFx })
const requestEditGoalFx = attach({ effect: api.goal.requestEditGoalFx })
const requestCompleteGoalFx = attach({ effect: api.goal.requestCompleteGoalFx })

//#endregion

//#region //* Store

export const $goal = createStore<Goal | null>(null)

const toCreateName = EditableFieldFactory<string>('')
const toCreateDescription = EditableFieldFactory<string>('')
const $createCanSubmit = combine(toCreateName.$value, (name) => !!name)

const toEditDescription = EditableFieldFactory<string>('')

export const $goalLoading = requestFindOneGoalFx.pending

//#endregion

//#region //* Events

const loadOne = ModelEventFactory<{ bookId: number; id: number }>()
const loadAll = ModelEventFactory()
const created = ModelEventFactory<number>()
const edited = ModelEventFactory()
const completed = ModelEventFactory<{ bookId: number; id: number }>()

const toCreateReseted = reset({ target: [toCreateName.$value, toCreateDescription.$value] })
const toEditReseted = createEvent()

//#endregion

//#region //* Effects

const redirectToHomeFx = createEffect(() => {
  routes.home.open()
})

//#endregion

//#region //* Bussines Logic

//? Load One
sample({
  clock: [loadOne.inited],
  target: requestFindOneGoalFx,
})

sample({
  clock: requestFindOneGoalFx.fail,
  target: redirectToHomeFx,
})

loadOne.$pending = requestFindOneGoalFx.pending
$goal.on(requestFindOneGoalFx.doneData, (_, goal) => goal)

sample({
  clock: requestFindOneGoalFx.done,
  target: loadOne.done,
})

//? Create
sample({
  clock: [created.inited],
  source: { name: toCreateName.$value, description: toCreateDescription.$value },
  fn: (data, bookId) => ({ ...data, bookId }),
  target: requestCreateGoalFx,
})

created.$pending = requestCreateGoalFx.pending
$goal.on(requestCreateGoalFx.doneData, (_, goal) => goal)

sample({
  clock: requestCreateGoalFx.done,
  target: created.done,
})

//? Edit
$goal.watch((goal) => toEditDescription.changed(goal?.description || ''))

sample({
  clock: toEditReseted,
  source: $goal,
  fn: (goal) => goal?.description || '',
  target: toEditDescription.changed,
})

sample({
  clock: [edited.inited],
  source: { goal: $goal, description: toEditDescription.$value },
  filter: ({ goal }) => !!goal,
  fn: ({ goal, description }) => ({
    id: goal?.id || 0,
    bookId: goal?.bookId || 0,
    description,
  }),
  target: requestEditGoalFx,
})

edited.$pending = requestEditGoalFx.pending
$goal.on(requestEditGoalFx.doneData, (_, goal) => goal)

sample({
  clock: requestEditGoalFx.done,
  target: edited.done,
})

//? Complete
sample({
  clock: [completed.inited],
  target: requestCompleteGoalFx,
})

completed.$pending = requestCompleteGoalFx.pending
$goal.on(requestCompleteGoalFx.doneData, (_, goal) => goal)

sample({
  clock: requestCompleteGoalFx.done,
  target: completed.done,
})

//#endregion

//#region //* Model

/**
 * Глобальная модель Goal
 *
 * @param {Store<Goal | null>} $item - текущая goal, с которой будут происходить манипуляции
 * @param {EditableField<T>} toCreate - объект полей для создания
 * @param {EditableField<T>} toEdit - объект полей для редактирования
 * @param {Event<number>} loadOne - событие запуска загрузки одного элемента
 * @param {Event<null>} loadAll - событие запуска загрузки множества
 * @param {Event<null>} create - событие отправки запроса на создание
 * @param {Event<null>} edit - событие отправки запроса на редактирование
 */
export interface GoalModel {
  $item: Store<Goal | null>

  toCreate: {
    name: EditableField<string>
    description: EditableField<string>
  }
  $createCanSubmit: Store<boolean>
  toCreateReseted: Event<void>

  toEdit: {
    description: EditableField<string>
  }
  toEditReseted: Event<void>

  loadOne: ModelEvent<{ bookId: number; id: number }>
  loadAll?: ModelEvent<void>
  create: ModelEvent<number>
  edit: ModelEvent<void>
  complete: ModelEvent<{ bookId: number; id: number }>
}

export const $$goal: GoalModel = {
  $item: $goal,

  toCreate: {
    name: toCreateName,
    description: toCreateDescription,
  },
  $createCanSubmit,
  toCreateReseted,

  toEdit: {
    description: toEditDescription,
  },
  toEditReseted,

  loadOne: loadOne,
  loadAll: loadAll,
  create: created,
  edit: edited,
  complete: completed,
}

//#endregion

//#region //* Helpers

export function requestGoalSampleFactory(route: RouteInstance<{ bookId: number; id: number }>) {
  sample({
    clock: route.opened,
    source: { params: route.$params, goal: $goal },
    filter: ({ goal, params }) => !(goal && Number(params.id) === Number(goal?.id)),
    fn: ({ params }) => params,
    target: loadOne.inited,
  })
}

//#endregion
