/**
 * Money fields can be signed or unsigned. Fields are signed (an unsigned value will be interpreted as positive).
 */
export interface Money {
  /**
   * The amount of money, in the smallest denomination of the currency indicated by currency. For example, when currency is USD, amount is in cents.
   */
  amount: number

  /**
   * The type of currency in ISO 4217 format. Default to USD if not specified.
   */
  currency?: string
}
