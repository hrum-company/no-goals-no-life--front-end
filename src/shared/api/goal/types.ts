import { DateTime, ID, Name } from '../base-types'

/**
 * Че-то там кто-то там.
 *
 * @param id - Уникальный идентификатор
 * @param listId - Уникальный идентификатор списка
 * @param name - Название
 * @param description - Описание
 * @param completed - Статус выполнения
 * @param createdAt - Дата создания
 * @param completedAt - Дата завершения
 */
export interface Goal {
  id: ID
  listId: ID

  name: Name
  description?: string

  completed: boolean
  createdAt: DateTime
  completedAt?: DateTime
}
