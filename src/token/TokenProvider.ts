import axios from 'axios'

import { TokenProviderOptions } from './TokenProviderOptions'
import { TokenPair } from './TokenPair'
import FormData from 'form-data'
import { TokenPairExchangeCallback } from './TokenPairExchangeCallback'

export class TokenProvider {
  private readonly clientId: string
  private readonly clientSecret: string
  private readonly redirectUri: string

  private tokenPair: TokenPair
  private exchangeCallback: TokenPairExchangeCallback = () => {
    // Do nothing
  }

  constructor(private readonly options: TokenProviderOptions) {
    this.clientId = options.clientId
    this.clientSecret = options.clientSecret
    this.redirectUri = options.redirectUri

    this.tokenPair = options.tokenPair
  }

  getAccessToken(): string {
    return this.tokenPair.accessToken
  }

  async exchangePair(): Promise<void> {
    const { accessToken, refreshToken } = this.tokenPair

    const formData = new FormData()
    formData.append('grant_type', 'refresh_token')
    formData.append('client_id', this.clientId)
    formData.append('client_secret', this.clientSecret)
    formData.append('redirect_uri', this.redirectUri)
    formData.append('token_type', 'bearer')
    formData.append('access_token', accessToken)
    formData.append('refresh_token', refreshToken)

    const { data } = await axios.post(
      'https://accounts.staging.brexapps.com/oauth2/v1/token',
      formData,
      { headers: formData.getHeaders() }
    )

    this.tokenPair = {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
    }

    await this.exchangeCallback(this.tokenPair)
  }

  onExchangeComplete(callback: TokenPairExchangeCallback): void {
    this.exchangeCallback = callback
  }
}
