import { WebhookEventType } from './WebhookEventType'
import { WebhookSubscriptionStatus } from './WebhookSubscriptionStatus'

export interface WebhookSubscription {
  id: string

  url: string

  eventTypes: WebhookEventType[]

  status: WebhookSubscriptionStatus
}
