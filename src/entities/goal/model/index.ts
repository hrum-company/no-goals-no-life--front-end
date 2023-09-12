import { RouteInstance } from 'atomic-router'
import { Event, Store, attach, createEffect, createEvent, createStore, sample } from 'effector'

import { Goal, api } from 'shared/api'
import { routes } from 'shared/routing'

//#region //* API

const requestFindOneGoalFx = attach({ effect: api.goal.requestFindOneGoalFx })
const requestCreateGoalFx = attach({ effect: api.goal.requestCreateGoalFx })
const requestEditGoalFx = attach({ effect: api.goal.requestEditGoalFx })

//#endregion

//#region //* Store

export const $goal = createStore<Goal | null>(null)
const toCreateName = EditableFieldFactory<string>('')
const toCreateDescription = EditableFieldFactory<string>('')
const toEditDescription = EditableFieldFactory<string>('')

export const $goalLoading = requestFindOneGoalFx.pending

//#endregion

//#region //* Events

const loadOne = ModelEventFactory<{ bookId: number; id: number }>()
const loadAll = ModelEventFactory()
const created = ModelEventFactory<number>()
const edited = ModelEventFactory()

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

//#endregion

//#region //* Model

/**
 * Че-то там кто-то там.
 *
 * @param {Store<T>} $value - стор значения
 * @param {Event<T>} changed - события для изменения стора значения
 */
interface EditableField<T> {
  [key: string]: Store<T> | Event<T>
  $value: Store<T>
  changed: Event<T>
}

interface ModelEvent<T> {
  inited: Event<T>
  $pending: Store<boolean>
  done: Event<void>
}

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

  toEdit: {
    description: EditableField<string>
  }

  loadOne: ModelEvent<{ bookId: number; id: number }>
  loadAll?: ModelEvent<void>
  create: ModelEvent<number>
  edit: ModelEvent<void>
}

export const $$goal: GoalModel = {
  $item: $goal,

  toCreate: {
    name: toCreateName,
    description: toCreateDescription,
  },

  toEdit: {
    description: toEditDescription,
  },

  loadOne: loadOne,
  loadAll: loadAll,
  create: created,
  edit: edited,
}

//#endregion

//#region Helpers

function EditableFieldFactory<T>(initialValue: T): EditableField<T> {
  const $value = createStore<T>(initialValue)
  const changed = createEvent<T>()

  $value.on(changed, (_, value) => value)

  return {
    $value,
    changed,
  }
}

function ModelEventFactory<T = void>(): ModelEvent<T> {
  return {
    inited: createEvent<T>(),
    $pending: createStore<boolean>(false),
    done: createEvent(),
  }
}

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
