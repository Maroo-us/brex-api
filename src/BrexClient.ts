import { AccountingApi, TransfersApi, VendorsApi } from './namespace'

import { BrexClientOptions } from './BrexClientOptions'
import { BrexEnvironment, getBaseUrl } from './BrexEnvironment'

import { HttpClientImpl } from './HttpClientImpl'

/**
 * A wrapper around Brex API.
 */
export class BrexClient {
  readonly accounting: AccountingApi
  readonly transfers: TransfersApi
  readonly vendors: VendorsApi

  constructor(options: BrexClientOptions) {
    const { accessToken, environment = BrexEnvironment.Production } = options
    const baseUrl = getBaseUrl(environment)

    const httpClient = new HttpClientImpl({
      accessToken,
      baseUrl,
    })

    this.accounting = new AccountingApi(httpClient)
    this.transfers = new TransfersApi(httpClient)
    this.vendors = new VendorsApi(httpClient)
  }
}
