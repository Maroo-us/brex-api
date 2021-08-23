import { TokenPair } from './TokenPair'

export interface TokenProviderOptions {
  clientId: string
  clientSecret: string
  redirectUri: string
  tokenPair: TokenPair
}
