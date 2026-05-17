import type { Timestamp } from 'firebase/firestore/lite';

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
export type PremiumApplicationType = 'trial_start';

/**
 * Firestore `premiumApplications/{applicationId}` のドキュメントスキーマ。
 * クライアントは7日間無料トライアル開始リクエストのみ create 可能。
 * read/update/delete は admin SDK 経由。
 *
 * - `uid` には `line:U...` 形式の Firebase Auth UID を入れる
 * - `lineUserId` には prefix を剥がした `U...` を入れる（admin が sync-plan する際に使う）
 */
export interface PremiumApplication {
  // 自動付与
  createdAt: Timestamp;
  status: PremiumApplicationStatus;
  applicationType: PremiumApplicationType;

  // ユーザー識別
  uid: string;
  lineUserId: string;

  // 自動コピー（LIFF /premium-apply 起動時に users/{uid} と liff.getProfile() から取得）
  displayName: string;
  subject: ApplicationSubject | null;
  grade: ApplicationGrade | null;
  preferredHour: ApplicationPreferredHour | null;

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
