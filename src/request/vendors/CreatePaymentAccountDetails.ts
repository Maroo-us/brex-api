import { PaymentDetailsType } from '../../model'

export interface CreatePaymentAccountDetails {
  type: PaymentDetailsType

  routingNumber: string

  accountNumber: string

  accountType: string

  accountClass: string
}
