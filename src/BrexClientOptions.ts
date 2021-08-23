import { BrexEnvironment } from './BrexEnvironment'
import { TokenPair } from './token'

export interface BrexClientOptions {
  clientId: string
  clientSecret: string
  redirectUri: string

  tokenPair: TokenPair
  environment?: BrexEnvironment
}
