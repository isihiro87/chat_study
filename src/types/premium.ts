import type { Timestamp } from 'firebase/firestore/lite';

/**
 * プレミアム申込の連絡可能時間帯。
 * 担当者がLINEで折り返す際の目安として使う。
 */
export type ContactTimeBand = 'morning' | 'afternoon' | 'evening' | 'anytime';

/**
 * 支払い希望方法のアンケート結果。実際の決済はLINE外で行う想定で、
 * 自動課金には連動しない（manage-line-richmenu.ts sync-plan を手動実行する運用）。
 */
export type PaymentPreference = 'bank_transfer' | 'credit_card' | 'undecided';

/**
 * 申込ステータス。クライアントは create 時に必ず 'pending' を入れる
 * （firestore.rules で強制）。それ以降は admin が更新する。
 */
export type PremiumApplicationStatus =
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'cancelled';

export type ApplicationSubject = 'history' | 'english';
export type ApplicationGrade = '中1' | '中2' | '中3';
export type ApplicationPreferredHour = 6 | 7 | 17 | 19;

/**
 * Firestore `premiumApplications/{applicationId}` のドキュメントスキーマ。
 * クライアントは create のみ可能。read/update/delete は admin SDK 経由。
 *
 * - `uid` には `line:U...` 形式の Firebase Auth UID を入れる
 * - `lineUserId` には prefix を剥がした `U...` を入れる（admin が sync-plan する際に使う）
 */
export interface PremiumApplication {
  // 自動付与
  createdAt: Timestamp;
  status: PremiumApplicationStatus;

  // ユーザー識別
  uid: string;
  lineUserId: string;

  // 自動コピー（LIFF /premium-apply 起動時に users/{uid} と liff.getProfile() から取得）
  displayName: string;
  subject: ApplicationSubject | null;
  grade: ApplicationGrade | null;
  preferredHour: ApplicationPreferredHour | null;

  // ユーザー入力
  parentName: string | null;
  contactTimeBand: ContactTimeBand;
  paymentPreference: PaymentPreference;
  note: string | null;

  // 管理用（admin が手動で更新）
  approvedAt?: Timestamp;
  approvedBy?: string;
  rejectedReason?: string;
}

/** クライアントが create 時に送信する payload（自動付与フィールドを除く）。 */
export type PremiumApplicationCreatePayload = Omit<
  PremiumApplication,
  'createdAt' | 'status' | 'approvedAt' | 'approvedBy' | 'rejectedReason'
> & {
  status: 'pending';
};

/** メモ欄の最大文字数（バリデーション用に共有）。 */
export const PREMIUM_APPLICATION_NOTE_MAX_LENGTH = 500;

export const CONTACT_TIME_BAND_LABEL: Record<ContactTimeBand, string> = {
  morning: '朝（〜12時）',
  afternoon: '昼（12〜17時）',
  evening: '夜（17時〜）',
  anytime: 'いつでも',
};

export const PAYMENT_PREFERENCE_LABEL: Record<PaymentPreference, string> = {
  bank_transfer: '銀行振込',
  credit_card: 'クレジットカード',
  undecided: '相談して決めたい',
};
