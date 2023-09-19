import axios from 'axios'

import { $token } from 'shared/session'

interface Request<T> {
  path: string
  method?: 'get' | 'post' | 'put' | 'patch' | 'delete'
  data?: T
}

// const host = 'https://ngnl.dev.local:3000/'
const host = '/'

export const request = async <ResponseData, RequestData = unknown>({
  path,
  method = 'get',
  data,
}: Request<RequestData>): Promise<ResponseData> => {
  const token = $token.getState()
  return axios<ResponseData>({
    method,
    url: `${host}api${path}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  }).then((response) => {
    return response.data
  })
}
