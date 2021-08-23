import { Money } from '../common'
import { AccountType } from './AccountType'
import { AccountStatus } from './AccountStatus'
import { AccountInstrument } from './AccountInstrument'

export interface Account {
  id: string
  type: AccountType
  instrument: AccountInstrument
  name: string
  description: string
  status: AccountStatus
  settlementCurrency: string
  currentBalance: Money
  availableBalance: Money
}
