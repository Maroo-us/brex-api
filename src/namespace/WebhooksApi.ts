import { HttpClient } from '../http/HttpClient'

import {
  ListOptions,
  RegisterWebhookRequestOptions,
  UpdateWebhookSubscriptionOptions,
} from '../request'
import { ListResponse } from '../response'

import { WebhookSecret, WebhookSubscription } from '../model'
import { RegisterWebhookOptions } from '../request'

export class WebhooksApi {
  /**
   * @internal
   */
  constructor(
    /**
     * @internal
     */
    private readonly httpClient: HttpClient
  ) {}

  async register(
    options: RegisterWebhookOptions,
    requestOptions: RegisterWebhookRequestOptions
  ): Promise<WebhookSubscription> {
    const { idempotencyKey } = requestOptions

    return this.httpClient.post({
      path: '/v1/webhooks',
      body: options,
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
    })
  }

  async unregister(webhookId: string): Promise<void> {
    await this.httpClient.delete({
      path: `/v1/webhooks/${webhookId}`,
    })
  }

  async get(webhookId: string): Promise<WebhookSubscription> {
    return this.httpClient.get({
      path: `/v1/webhooks/${webhookId}`,
    })
  }

  async update(
    webhookId: string,
    updateOptions: UpdateWebhookSubscriptionOptions
  ): Promise<WebhookSubscription> {
    return this.httpClient.put({
      path: `/v1/webhooks/${webhookId}`,
      body: updateOptions,
    })
  }

  async list(
    listOptions: ListOptions = {}
  ): Promise<ListResponse<WebhookSubscription>> {
    const { cursor, limit = 100 } = listOptions

    return this.httpClient.get({
      path: '/v1/webhooks',
      params: {
        cursor,
        limit,
      },
    })
  }

  async listSecrets(): Promise<WebhookSecret[]> {
    return this.httpClient.get({
      path: '/v1/webhooks/secrets',
    })
  }
}
