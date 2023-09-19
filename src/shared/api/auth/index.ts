import axios from 'axios'
import { createEffect } from 'effector'

import { User } from '..'

interface AuthRequest {
  first_name?: string
  last_name?: string
  photo_100?: string
  photo_200?: string
}

interface AuthResponse {
  token: string
  user: User
}

const requestAuthFx = createEffect<AuthRequest, AuthResponse>(async (data) => {
  const query = window.location.search
  return axios.post(`/api/auth${query}`, data).then((response) => response.data as AuthResponse)
})

export default {
  requestAuthFx,
}
