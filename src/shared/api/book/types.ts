import { DateTime, ID, Name } from '../base-types'
import { Goal } from '../goal'

type BookItem = Goal

/**
 * Book
 *
 * @param id - Уникальный идентификатор
 * @param userId - Уникальный идентификатор владельца
 * @param name - Название
 * @param hidden - Скрыто ли содержимое списка от других пользователей
 * @param createdAt - дата создания списка
 * @param goals - Массив целей списка
 * @param completedGoalsCount - Количество выполненных целей
 */
export interface Book {
  id: ID
  userId: number

  name: Name

  hidden: boolean

  createdAt: DateTime

  goals?: BookItem[]
  completedGoalsCount: number
}
