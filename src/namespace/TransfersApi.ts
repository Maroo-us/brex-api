import { HttpClient } from '../http/HttpClient'

import { Transfer } from '../model'
import { ListResponse } from '../response'
import {
  ListOptions,
  CreateTransferRequest,
  CreateTransferRequestOptions,
} from '../request'

export class TransfersApi {
  /**
   * @internal
   */
  constructor(
    /**
     * @internal
     */
    private readonly httpClient: HttpClient
  ) {}

  async create(
    createOptions: CreateTransferRequest,
    requestOptions: CreateTransferRequestOptions
  ): Promise<Transfer> {
    const { idempotencyKey } = requestOptions

    return this.httpClient.post({
      path: '/v1/transfers',
      body: createOptions,
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
    })
  }

  async get(transferId: string): Promise<Transfer> {
    return this.httpClient.get({
      path: `/v1/transfers/${transferId}`,
    })
  }

  async list(listOptions: ListOptions = {}): Promise<ListResponse<Transfer>> {
    const { cursor, limit = 0 } = listOptions

    return this.httpClient.get({
      path: `/v1/transfers`,
      params: {
        cursor,
        limit,
      },
    })
  }
}
