import { Money } from '../../model/common'
import { CreateCounterpartyRequest } from './CreateCounterpartyRequest'

export interface CreateTransferRequest {
  /**
   * Counterparty details for the transfer.
   */
  counterparty: CreateCounterpartyRequest

  /**
   * Amount to transfer.
   */
  amount: Money

  /**
   * Description of the transfer for internal use. Not exposed externally.
   */
  description: string

  /**
   * External memo for the transfer. `Payment Instructions` for Wires and the `Entry Description`
   * for ACH payments. Must be at most 90 characters for `ACH` and `WIRE` transactions and
   * at most 40 characters for `CHEQUE` transactions.
   */
  externalMemo: string

  /**
   * Brex Cash Account ID that is used for the funds.
   */
  cashAccountId: string
}
