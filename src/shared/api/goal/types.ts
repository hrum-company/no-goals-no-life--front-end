import { DateTime, ID, Name } from '../base-types'

export type GoalMarkKeys =
  | 'goal-of-life'
  | 'warrior-will'
  | 'for-mother'
  | 'for-father'
  | 'egoisto'
  | 'you-fail'
  | 'male'
  | 'female'

/**
 * Метка у цели.
 *
 * @param id - Уникальный идентификатор
 * @param key - Уникальный ключ (для иконки)
 * @param title - Текст метки
 */
export interface GoalMark {
  id: ID
  key: GoalMarkKeys
  title: string
}

/**
 * Че-то там кто-то там.
 *
 * @param id - Уникальный идентификатор
 * @param bookId - Уникальный идентификатор списка
 * @param name - Название
 * @param description - Описание
 * @param mark - Метка
 * @param completed - Статус выполнения
 * @param createdAt - Дата создания
 * @param completedAt - Дата завершения
 */
export interface Goal {
  id: ID
  bookId: ID

  name: Name
  description?: string
  mark?: GoalMark

  order: number

  completed: boolean
  createdAt: DateTime
  completedAt?: DateTime
}
