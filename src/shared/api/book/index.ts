import { createEffect } from 'effector'

import { request } from '../request'
import { Book } from './types'

//#region Find All

const requestBookAllFx = createEffect<null, Book[]>(async () => {
  return request<Book[]>({
    path: '/book',
  })
})

//#endregion

//#region Edit

type EditBookRequestFx = Omit<Book, 'userId' | 'createAt' | 'goals'>
type EditBookRequest = Omit<EditBookRequestFx, 'id'>
type EditBookResponse = Book

const requestEditBookFx = createEffect<EditBookRequestFx, EditBookResponse>(
  async ({ id, ...data }) => {
    return request<EditBookResponse, EditBookRequest>({
      method: 'put',
      path: `/book/${id}`,
      data,
    })
  }
)

//#endregion

export default {
  requestBookAllFx,

  requestEditBookFx,
}

export * from './types'
