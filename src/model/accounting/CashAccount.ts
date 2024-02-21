import { Money } from '../common'

export interface CashAccount {
  id: string
  status: 'ACTIVE'
  currentBalance: Money
  availableBalance: Money
  accountLimit: Money
  currentStatementPeriod: {
    startDate: string
    endDate: string
  }
}
