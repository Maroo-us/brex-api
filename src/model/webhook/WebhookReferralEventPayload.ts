import { WebhookEventType } from './WebhookEventType'

export interface WebhookReferralEventPayload {
  event_type:
    | WebhookEventType.ReferralCreated
    | WebhookEventType.ReferralActivated
    | WebhookEventType.ReferralApplicationStatusChanged

  referral_id: string
}
