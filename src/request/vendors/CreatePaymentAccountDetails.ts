import { PaymentAccountType } from '../../model'

export interface CreatePaymentAccountDetails {
  type: PaymentAccountType

  routingNumber: string

  accountNumber: string

  accountType: string

  accountClass: string
}
