import {
  AccountingApi,
  AccountsApi,
  TransfersApi,
  VendorsApi,
  WebhooksApi,
} from './namespace'

import { BrexClientOptions } from './BrexClientOptions'
import { BrexEnvironment, getBaseUrl } from './BrexEnvironment'

import { HttpClientImpl } from './HttpClientImpl'

/**
 * A wrapper around Brex API.
 */
export class BrexClient {
  /**
   * @deprecated
   */
  readonly accounting: AccountingApi
  readonly transfers: TransfersApi
  readonly accounts: AccountsApi
  readonly webhooks: WebhooksApi
  readonly vendors: VendorsApi

  constructor(options: BrexClientOptions) {
    const {
      accessToken,
      baseUrl,
      environment = BrexEnvironment.Production,
    } = options

    const httpClient = new HttpClientImpl({
      accessToken: accessToken,
      baseUrl: baseUrl || getBaseUrl(environment),
    })

    this.accounting = new AccountingApi(httpClient)
    this.transfers = new TransfersApi(httpClient)
    this.accounts = new AccountsApi(httpClient)
    this.webhooks = new WebhooksApi(httpClient)
    this.vendors = new VendorsApi(httpClient)
  }
}
