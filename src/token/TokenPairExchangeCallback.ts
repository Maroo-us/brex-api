import { TokenPair } from './TokenPair'

export type TokenPairExchangeCallback = (
  tokenPair: TokenPair
) => void | Promise<void>
