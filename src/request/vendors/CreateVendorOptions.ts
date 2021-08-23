import { CreatePaymentAccountOptions } from './CreatePaymentAccountOptions'

export interface CreateVendorOptions {
  companyName: string

  email?: string

  phone?: string

  paymentAccounts?: CreatePaymentAccountOptions[]
}
