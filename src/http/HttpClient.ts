import { HttpGetOptions } from './HttpGetOptions'
import { HttpPostOptions } from './HttpPostOptions'
import { HttpDeleteOptions } from './HttpDeleteOptions'
import { HttpPutOptions } from './HttpPutOptions'

export interface HttpClient {
  get<Response>(options: HttpGetOptions): Promise<Response>

  post<Request, Response>(options: HttpPostOptions<Request>): Promise<Response>

  put<Request, Response>(options: HttpPutOptions<Request>): Promise<Response>

  delete<Response>(options: HttpDeleteOptions): Promise<Response>
}
