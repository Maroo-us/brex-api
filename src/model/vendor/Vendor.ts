import { PaymentAccount } from './PaymentAccount'

export interface Vendor {
  id: string

  companyName: string

  email?: string

  phone?: string

  paymentAccounts?: PaymentAccount[]
}
