import axios from 'axios'

const defualtSearch =
  '?vk_access_token_settings=&vk_app_id=51746063&vk_are_notifications_enabled=0&vk_is_app_user=1&vk_is_favorite=0&vk_language=ru&vk_platform=mobile_web&vk_ref=snippet_im&vk_ts=1694354222&vk_user_id=471247721&sign=2V3CrSjOg2EnLFWTQm-sELxJ5RYg4BpUF3CgArnqSaI'

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
  return axios<ResponseData>({
    method,
    url: `${host}api${path}/${window.location.search || defualtSearch}`,
    data,
  }).then((response) => {
    return response.data
  })
}
