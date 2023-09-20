import { ID } from '..'

/**
 * Метка у цели.
 *
 * @param id - Уникальный идентификатор
 * @param title - Текст метки
 * @param icon - Имоджи метки
 */
export interface GoalMark {
  id: ID
  title: string
  icon: string
}
