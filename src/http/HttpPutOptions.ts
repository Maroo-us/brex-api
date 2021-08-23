import { RequestOptions } from './RequestOptions'

export interface HttpPutOptions<T> extends RequestOptions {
  body: T
}
