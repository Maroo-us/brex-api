import { AccountingApi, TransfersApi, VendorsApi } from './namespace'

import { BrexClientOptions } from './BrexClientOptions'
import { BrexEnvironment, getBaseUrl } from './BrexEnvironment'

import { HttpClientImpl } from './HttpClientImpl'
import { TokenProvider, TokenPairExchangeCallback } from './token'

/**
 * A wrapper around Brex API.
 */
export class BrexClient {
  readonly accounting: AccountingApi
  readonly transfers: TransfersApi
  readonly vendors: VendorsApi

  private tokenExchangeCallback: TokenPairExchangeCallback = () => {
    // Do nothing
  }

  constructor(options: BrexClientOptions) {
    const {
      tokenPair,
      clientId,
      clientSecret,
      redirectUri,
      environment = BrexEnvironment.Production,
    } = options
    const baseUrl = getBaseUrl(environment)

    const tokenProvider = new TokenProvider({
      clientId,
      clientSecret,
      redirectUri,
      tokenPair,
    })
    const httpClient = new HttpClientImpl(tokenProvider, {
      baseUrl,
    })

    tokenProvider.onExchangeComplete((tokenPair) => {
      this.tokenExchangeCallback(tokenPair)
    })

    this.accounting = new AccountingApi(httpClient)
    this.transfers = new TransfersApi(httpClient)
    this.vendors = new VendorsApi(httpClient)
  }

  onTokenPairExchanged(callback: TokenPairExchangeCallback): BrexClient {
    this.tokenExchangeCallback = callback

    return this
  }
}
