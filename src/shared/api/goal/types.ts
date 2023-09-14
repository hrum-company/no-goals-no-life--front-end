import { DateTime, ID, Name } from '../base-types'

/**
 * Че-то там кто-то там.
 *
 * @param id - Уникальный идентификатор
 * @param bookId - Уникальный идентификатор списка
 * @param name - Название
 * @param description - Описание
 * @param completed - Статус выполнения
 * @param createdAt - Дата создания
 * @param completedAt - Дата завершения
 */
export interface Goal {
  id: ID
  bookId: ID

  name: Name
  description?: string

  order: number

  completed: boolean
  createdAt: DateTime
  completedAt?: DateTime
}
