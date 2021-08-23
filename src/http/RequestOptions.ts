import { HttpParams } from './HttpParams'
import { HttpHeaders } from './HttpHeaders'

export interface RequestOptions {
  baseUrl?: string
  path: string
  params?: HttpParams
  headers?: HttpHeaders
}
