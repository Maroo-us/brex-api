import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { HttpClient } from './http/HttpClient'
import { HttpGetOptions } from './http/HttpGetOptions'
import { HttpPutOptions } from './http/HttpPutOptions'
import { HttpPostOptions } from './http/HttpPostOptions'
import { HttpDeleteOptions } from './http/HttpDeleteOptions'
import { RequestOptions } from './http/RequestOptions'
import { HttpClientOptions } from './HttpClientOptions'

import { decamelizeRequestData } from './interceptor/DecamelizeRequestData'
import { camelizeResponseData } from './interceptor/CamelizeResponseData'

export class HttpClientImpl implements HttpClient {
  private readonly axios: AxiosInstance

  constructor(options: HttpClientOptions) {
    const { baseUrl, accessToken } = options

    this.axios = axios.create({
      baseURL: baseUrl,
    })

    this.axios.interceptors.request.use(decamelizeRequestData)
    this.axios.interceptors.response.use(camelizeResponseData)
    this.axios.interceptors.request.use((config: AxiosRequestConfig) => {
      return {
        ...config,
        headers: {
          ...config.headers,
          common: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      }
    })
  }

  async get<Response>(options: HttpGetOptions): Promise<Response> {
    const { data } = await this.axios.get<void, AxiosResponse<Response>>(
      options.path,
      HttpClientImpl.convertToAxiosRequestConfig(options)
    )

    return data
  }

  async post<Request, Response>(
    options: HttpPostOptions<Request>
  ): Promise<Response> {
    const { data } = await this.axios.post<Request, AxiosResponse<Response>>(
      options.path,
      options.body,
      HttpClientImpl.convertToAxiosRequestConfig(options)
    )

    return data
  }

  async put<Request, Response>(
    options: HttpPutOptions<Request>
  ): Promise<Response> {
    const { data } = await this.axios.put<Request, AxiosResponse<Response>>(
      options.path,
      options.body,
      HttpClientImpl.convertToAxiosRequestConfig(options)
    )

    return data
  }

  async delete<Response>(options: HttpDeleteOptions): Promise<Response> {
    const { data } = await this.axios.delete<void, AxiosResponse<Response>>(
      options.path,
      HttpClientImpl.convertToAxiosRequestConfig(options)
    )

    return data
  }

  private static convertToAxiosRequestConfig<T extends RequestOptions>(
    options: T
  ): AxiosRequestConfig {
    return {
      params: options.params,
      headers: options.headers,
      baseURL: options.baseUrl,
    }
  }
}
