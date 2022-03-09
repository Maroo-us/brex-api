import { WebhookEventType, WebhookSubscriptionStatus } from '../../model'

export interface UpdateWebhookSubscriptionOptions {
  url: string

  eventTypes: WebhookEventType[]

  status: WebhookSubscriptionStatus
}
