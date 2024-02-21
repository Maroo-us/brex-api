import { HttpClient } from '../http/HttpClient'

import { CashAccount } from '../model'
import { ListResponse } from '../response'

export class AccountsApi {
  /**
   * @internal
   */
  constructor(
    /**
     * @internal
     */ private readonly httpClient: HttpClient
  ) {}

  async listCashAccounts(): Promise<ListResponse<CashAccount>> {
    return this.httpClient.get({
      path: '/v2/accounts/cash',
    })
  }
}
