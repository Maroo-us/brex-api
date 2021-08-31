import { TokenPair } from './TokenPair'

export interface TokenProviderOptions {
  authTokenUrl: string
  clientId: string
  clientSecret: string
  redirectUri: string
  tokenPair: TokenPair
}
