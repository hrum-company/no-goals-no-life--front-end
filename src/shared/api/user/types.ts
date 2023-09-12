import { DateTime, ID, VKID } from '../base-types'

export interface User {
  id: ID
  vkId: VKID
  createAt: DateTime
}
