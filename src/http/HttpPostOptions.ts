import { RequestOptions } from './RequestOptions'

export interface HttpPostOptions<T> extends RequestOptions {
  body: T
}
