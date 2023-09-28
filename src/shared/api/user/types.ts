import { DateTime, FirstName, ID, LastName, VKID } from '../base-types'

export interface User {
  id: ID
  vkId: VKID
  createAt: DateTime

  first_name: FirstName
  last_name: LastName

  photo_100: string
  photo_200: string
}
