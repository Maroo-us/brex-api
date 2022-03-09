import { WebhookSecretStatus } from './WebhookSecretStatus'

export interface WebhookSecret {
  secret: string

  status: WebhookSecretStatus
}
