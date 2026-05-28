import type { Timestamp } from 'firebase-admin/firestore';

export interface IgCampaign {
  id: string;
  mediaId: string;
  mediaPermalink?: string;
  keywords: string[];
  commentReplyText: string;
  dmText: string;
  lineUrl: string;
  startsAt: Timestamp;
  endsAt: Timestamp;
  isActive: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string;
}

export type IgCommentEventStatus =
  | 'processing'
  | 'completed'
  | 'skipped_self'
  | 'skipped_duplicate'
  | 'no_match'
  | 'error';

export interface IgCommentEvent {
  commentId: string;
  campaignId: string;
  mediaId: string;
  fromIgUserId: string;
  fromUsername?: string;
  text: string;
  matchedKeyword?: string;
  receivedAt: Timestamp;
  status: IgCommentEventStatus;
  error?: string;
}

export type IgDmEventStatus = 'sent' | 'failed';

export interface IgDmEventMetaError {
  code: number;
  message: string;
  type?: string;
  subcode?: number;
}

export interface IgDmEvent {
  campaignId: string;
  commentId: string;
  recipientIgUserId: string;
  lineUrl: string;
  status: IgDmEventStatus;
  sentAt: Timestamp;
  metaMessageId?: string;
  metaError?: IgDmEventMetaError;
}

export interface InstagramCommentValue {
  id: string;
  text?: string;
  from?: { id: string; username?: string };
  media?: { id?: string; media_product_type?: string };
  parent_id?: string;
}

export interface InstagramChange {
  field: string;
  value: InstagramCommentValue;
}

export interface InstagramEntry {
  id: string;
  time: number;
  changes?: InstagramChange[];
}

export interface InstagramWebhookBody {
  object?: string;
  entry?: InstagramEntry[];
}
