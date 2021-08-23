import { TransferStatus } from './TransferStatus'
import { Counterparty } from './Counterparty'
import { PaymentType } from './PaymentType'
import { Money } from '../common'

export interface Transfer {
  id: string
  counterparty: Counterparty
  description: string
  paymentType: PaymentType
  amount: Money
  cashAccountId: string
  status: TransferStatus
  estimatedDeliveryDate: string
  creatorUserId: string
  createdAt: string
}
