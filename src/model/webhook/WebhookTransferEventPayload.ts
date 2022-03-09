import { WebhookEventType } from './WebhookEventType'

export interface WebhookTransferEventPayload {
  event_type:
    | WebhookEventType.TransferProcessed
    | WebhookEventType.TransferFailed

  transfer_id: string

  company_id?: string
}
