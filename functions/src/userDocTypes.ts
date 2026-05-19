/**
 * Firestore `users/{uid}` のサーバー側型定義。
 *
 * クライアント側の `src/contexts/AuthContext.tsx` の `UserDoc` は LIFF / Web で
 * 表示するための整形済みサブセット。サーバー側（Cloud Functions）は本ファイルの
 * 型を参照する。
 *
 * フィールドはすべて optional 扱いにする（Firestore のドキュメントは段階的に
 * 拡張されるため、古いドキュメントには新フィールドが存在しないことが多い）。
 */

import type { Timestamp } from "firebase-admin/firestore";

/** ユーザーの活性状態。最終回答日からの経過日数で算出される。 */
export type UserStatus = "active" | "at-risk" | "dormant" | "churned";

/** Win-back メッセージのタッチポイント */
export type WinbackTouchpoint = "day3" | "day7" | "day14";

/** ロック可能な月額価格 */
export type LockedMonthlyPrice = 680 | 980;

/** プラン種別（既存） */
export type Plan = "free" | "premium";

/** プランのソース（既存） */
export type PlanSource = "trial" | "paid" | "trial_expired" | null;

/** 配信時刻（既存。テスト範囲は要件上 6/7/16/17/18/19/20/21 だが旧 18/20 も互換維持） */
export type PreferredHour = 6 | 7 | 16 | 17 | 18 | 19 | 20 | 21;

/** Win-back 送信履歴の1件 */
export interface WinbackHistoryEntry {
  variationId: string;
  sentAt: Timestamp;
}

/** Trial 期間中の機能利用状況（D-10 アクティベーション可視化用） */
export interface TrialUsage {
  extraQuestionCount: number;
  jikkuriOpened: boolean;
  weakReviewUsed: boolean;
}

/** Trial リマインダー送信履歴（milestone 別） */
export interface TrialReminderHistory {
  day1?: Timestamp;
  day2?: Timestamp;
  day3?: Timestamp;
  day3Parent?: Timestamp;
  day4?: Timestamp;
  day5?: Timestamp;
  day6?: Timestamp;
  day7Morning?: Timestamp;
  day7Evening?: Timestamp;
  day7Night?: Timestamp;
}

/** Trial 期限切れ後フォローアップ送信履歴 */
export interface PostTrialFollowupHistory {
  day15?: Timestamp;
  day30?: Timestamp;
}

/** Onboarding 未完了リマインダー送信履歴 */
export interface OnboardingReminderHistory {
  day1?: Timestamp;
  day3?: Timestamp;
  day7?: Timestamp;
}

/** Win-back 送信履歴（タッチポイント別） */
export interface WinbackHistory {
  day3?: WinbackHistoryEntry[];
  day7?: WinbackHistoryEntry[];
  day14?: WinbackHistoryEntry[];
}

/**
 * `users/{uid}` の完全型。
 *
 * 既存ドキュメントには新フィールドが存在しないことがあるため、ほぼ全フィールドが optional。
 * 読み取り側は必ず undefined を考慮すること。
 */
export interface UserDoc {
  // === 基本情報 ===
  lineUserId?: string;
  displayName?: string;
  nickname?: string | null;
  grade?: "中1" | "中2" | "中3";
  subject?: "history" | "english";
  preferredHour?: PreferredHour;

  // === プラン関連 ===
  plan?: Plan;
  planSource?: PlanSource;
  premiumUntil?: Timestamp;
  trialStartedAt?: Timestamp;
  trialExpiredAt?: Timestamp;
  richMenuType?: "free" | "premium";

  // === 活性状態（新規・休眠ユーザー除外システム用） ===

  /**
   * 活性状態。`recalculateUserStatuses` cron で日次更新される。
   * 既存ドキュメントは "active" として扱う。
   */
  status?: UserStatus;

  /** 最終回答日時。`onAnswerCreated` で更新される。 */
  lastAnsweredAt?: Timestamp;

  /** status が最後に変わった日時。Win-back 送信判定の起点。 */
  statusChangedAt?: Timestamp;

  // === Win-back 関連（新規） ===

  /** 最終 Win-back 送信日時（粗い重複回避用） */
  lastWinbackAt?: Timestamp;

  /** Win-back 送信履歴（タッチポイント別、過去90日分） */
  winbackHistory?: WinbackHistory;

  // === Trial 関連（新規） ===

  /** Trial 中の機能利用状況 */
  trialUsage?: TrialUsage;

  /** Trial リマインダー送信履歴（milestone 別マップ） */
  lastTrialReminderAt?: TrialReminderHistory;

  /** Trial 期限切れ後フォローアップ送信履歴 */
  postTrialFollowupAt?: PostTrialFollowupHistory;

  // === 価格ロック関連（新規） ===

  /** 価格ロックが有効な期限。trial 中なら trialStartedAt + 7日。 */
  priceLockExpiresAt?: Timestamp;

  /** 登録時に確定した永続価格。 */
  lockedMonthlyPrice?: LockedMonthlyPrice;

  /** Win-back で価格ロック再オープンした日時（trial 経験者・生涯1回） */
  priceLockReopenedAt?: Timestamp;

  /** 価格ロック再オープン使用済みフラグ（true なら再度の再オープン不可） */
  priceLockReopenUsed?: boolean;

  // === Onboarding 関連（新規拡張） ===

  /** Onboarding 状態（既存） */
  onboardingState?:
    | "started"
    | "awaiting_name"
    | "awaiting_grade"
    | "awaiting_subject"
    | "awaiting_hour"
    | "reminded"
    | "completed";

  /** Onboarding 未完了リマインダー送信履歴（Day 1/3/7） */
  onboardingReminderAt?: OnboardingReminderHistory;

  // === プレミアム申込フォーム離脱検知（新規） ===

  /** プレミアム申込フォーム到達日時 */
  premiumApplicationStartedAt?: Timestamp;

  /** プレミアム申込フォーム離脱リマインド送信日時 */
  abandonedApplicationReminderAt?: Timestamp;

  // === 学習状態（既存） ===

  /** 連続学習日数。dormant 移行時にリセット。 */
  dayStreak?: number;

  /** 最終学習日（JST 日付文字列、既存） */
  lastStudiedDateJst?: string;

  // === メタ ===
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
  lastRichMenuUpdatedAt?: Timestamp;
}

/**
 * UserDoc から `WinbackHistoryEntry[]` を取得するヘルパー。
 * 未定義時は空配列を返す。
 */
export function getWinbackHistoryFor(
  user: UserDoc,
  touchpoint: WinbackTouchpoint
): WinbackHistoryEntry[] {
  return user.winbackHistory?.[touchpoint] ?? [];
}
