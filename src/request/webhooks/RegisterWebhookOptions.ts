import { WebhookEventType } from '../../model'

export interface RegisterWebhookOptions {
  url: string

  eventTypes: WebhookEventType[]
}
