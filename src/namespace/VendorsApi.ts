import { HttpClient } from '../http/HttpClient'

import { Vendor } from '../model'
import { CreateVendorRequestOptions, ListOptions } from '../request'
import { ListResponse } from '../response'

import { CreateVendorOptions, UpdateVendorOptions } from '../request/vendors'

export class VendorsApi {
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
    createOptions: CreateVendorOptions,
    requestOptions: CreateVendorRequestOptions
  ): Promise<Vendor> {
    const { idempotencyKey } = requestOptions

    return this.httpClient.post({
      path: '/v1/vendors',
      body: createOptions,
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
    })
  }

  async get(vendorId: string): Promise<Vendor> {
    return this.httpClient.get({
      path: `/v1/vendors/${vendorId}`,
    })
  }

  async update(
    vendorId: string,
    updateOptions: UpdateVendorOptions
  ): Promise<Vendor> {
    return this.httpClient.put({
      path: `/v1/vendors/${vendorId}`,
      body: updateOptions,
    })
  }

  async delete(vendorId: string): Promise<void> {
    await this.httpClient.delete({
      path: `/v1/vendors/${vendorId}`,
    })
  }

  async list(listOptions: ListOptions = {}): Promise<ListResponse<Vendor>> {
    const { cursor, limit = 100 } = listOptions

    return this.httpClient.get({
      path: '/v1/vendors',
      params: {
        cursor,
        limit,
      },
    })
  }
}
