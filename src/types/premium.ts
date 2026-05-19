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
export type ApplicationPreferredHour = 6 | 7 | 16 | 18 | 20;
export type PremiumApplicationType = 'trial_start';

/**
 * 申込が発生した経路。コピー効果測定・コンバージョン分析用。
 *
 * - `trial-day*`: 体験中のリマインダー経由
 * - `post-trial-*`: 体験終了後のフォローアップ経由
 * - `winback-*`: 離脱ユーザー向け Win-back 経由（trial 経験者の価格ロック再オープン含む）
 * - `first-answer`: 初回回答直後のプレミアム誘導 flex
 * - `milestone`: 連続記録 / 累計回答 milestone のナッジ flex
 * - `other`: 上記以外（ボタン操作などからの直接遷移）
 */
export type PremiumApplicationSource =
  | 'trial-day0'
  | 'trial-day1'
  | 'trial-day3'
  | 'trial-day6'
  | 'trial-day7-morning'
  | 'trial-day7-evening'
  | 'trial-day7-night'
  | 'post-trial-day8'
  | 'post-trial-day15'
  | 'post-trial-day30'
  | 'winback-day7'
  | 'winback-day14'
  | 'first-answer'
  | 'milestone'
  | 'other';

/** 申込時にロックされる月額価格。 */
export type LockedPrice = 680 | 980;

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

  // === 価格ロック / 経路（D-3 / D-15 のセールスコピー対応） ===

  /**
   * 申込時点で確定した永続月額。
   * - 体験中の申込 / 価格ロック再オープン中の申込 → 680
   * - それ以外（体験経験者の通常申込含む） → 980
   * 既存ユーザー（マイグレーション前のドキュメント）は undefined になり得る。
   */
  lockedPrice?: LockedPrice;

  /** 申込経路（コピー効果測定用） */
  source?: PremiumApplicationSource;

  /** 保護者が決済者として申し込んだか（D-5 / D-6 の分岐用） */
  parentInitiated?: boolean;
}

/** クライアントが create 時に送信する payload（自動付与フィールドを除く）。 */
export type PremiumApplicationCreatePayload = Omit<
  PremiumApplication,
  'createdAt' | 'status' | 'approvedAt' | 'approvedBy' | 'rejectedReason'
> & {
  status: 'pending';
};
