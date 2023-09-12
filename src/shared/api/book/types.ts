import { DateTime, ID, Name } from '../base-types'
import { Goal } from '../goal'

type BookItem = Goal

/**
 * Returns the average of two numbers.
 *
 * @param id - Уникальный идентификатор
 * @param userId - Уникальный идентификатор владельца
 * @param name - Название
 * @param hidden - Скрыто ли содержимое списка от других пользователей
 * @param createdAt - дата создания списка
 * @param goals - Массив целей списка
 */
export interface Book {
  id: ID
  userId: number

  name: Name

  hidden: boolean

  createdAt: DateTime

  goals?: BookItem[]
}
