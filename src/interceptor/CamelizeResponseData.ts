import { AxiosResponse } from 'axios'
import { toCamel } from 'snake-camel'

export function camelizeResponseData(response: AxiosResponse): AxiosResponse {
  const isJson =
    response.data && response.headers['content-type'] === 'application/json'

  if (isJson) {
    response.data = toCamel(response.data)
  }

  return response
}
