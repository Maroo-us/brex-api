import { AxiosRequestConfig } from 'axios'
import { toSnake } from 'snake-camel'

export function decamelizeRequestData(
  config: AxiosRequestConfig
): AxiosRequestConfig {
  const newConfig = { ...config }

  if (newConfig.headers['Content-Type'] === 'multipart/form-data') {
    return newConfig
  }

  if (config.params) {
    newConfig.params = toSnake(config.params)
  }

  if (config.data) {
    newConfig.data = toSnake(config.data)
  }

  return newConfig
}
