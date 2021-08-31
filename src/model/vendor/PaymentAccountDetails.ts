import { PaymentDetailsType } from './PaymentDetailsType'
import { PaymentAccountClass } from './PaymentAccountClass'
import { PaymentAccountType } from './PaymentAccountType'

export interface PaymentAccountDetails {
  paymentInstrumentId: string

  type: PaymentDetailsType

  routingNumber: string

  accountNumber: string

  accountType: PaymentAccountClass

  accountClass: PaymentAccountType
}
