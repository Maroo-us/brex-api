import { HttpClient } from '../http/HttpClient'

import { Account } from '../model'
import { ListResponse } from '../response'

export class AccountingApi {
  /**
   * @internal
   */
  constructor(
    /**
     * @internal
     */ private readonly httpClient: HttpClient
  ) {}

  async list(): Promise<ListResponse<Account>> {
    return this.httpClient.get({
      path: '/v1/accounting/accounts',
    })
  }
}
