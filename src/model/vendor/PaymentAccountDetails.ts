import { PaymentAccountType } from './PaymentAccountType'

export interface PaymentAccountDetails {
  paymentInstrumentId: string

  type: PaymentAccountType

  routingNumber: string

  accountNumber: string

  accountType: string

  accountClass: string
}
