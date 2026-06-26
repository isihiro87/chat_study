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

/**
 * Win-back メッセージのタッチポイント。
 * 値は「最終回答からの経過日数の目安」を表す（命名は -1 オフセット）。
 * - day3  → 最終回答から 4 日目に送信（at-risk 入り）
 * - day5  → 6 日目（at-risk 中の追撃。2026-06 追加）
 * - day7  → 8 日目（dormant 入り）
 * - day10 → 11 日目（dormant 中の追撃。2026-06 追加）
 * - day14 → 15 日目（churned 入り・最終）
 */
export type WinbackTouchpoint = "day3" | "day5" | "day7" | "day10" | "day14";

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
  day5?: WinbackHistoryEntry[];
  day7?: WinbackHistoryEntry[];
  day10?: WinbackHistoryEntry[];
  day14?: WinbackHistoryEntry[];
}

/** フォールバック AI チャットの 1 ターン（user / model）。 */
export interface AiChatTurn {
  role: "user" | "model";
  text: string;
}

/**
 * 最後に出題した問題のスナップショット（`users/{uid}.lastQuestion`）。
 * AI チャットボットが直近の問題について解説できるよう、正解・解説まで含めて保持する。
 */
export interface LastQuestionSnapshot {
  /** Firestore `questions` のドキュメント ID。 */
  id: string;
  /** 単元名（questions.topic）。 */
  topic: string;
  /** 問題文。 */
  text: string;
  /** 4 択の選択肢。 */
  choices: string[];
  /** 正解の選択肢インデックス（0-3）。 */
  correctChoiceId: number;
  /** 解説文。 */
  explanation: string;
}

/**
 * フォールバック AI チャット（Gemini）のユーザー別状態。
 * コスト管理のための日次カウントと、文脈維持のための直近会話履歴を持つ。
 */
export interface AiChatState {
  /** 当日カウントの基準となる JST 日付（YYYY-MM-DD）。日付が変わると count リセット。 */
  dateJST?: string;
  /** 当日の AI 応答利用回数。 */
  count?: number;
  /** 直近の会話履歴（user/model 交互。プラン別の上限ターンでトリミング）。 */
  history?: AiChatTurn[];
  /** 最終 AI 応答日時。 */
  lastChatAt?: Timestamp;
  /**
   * AI 注意書きを最後に表示した JST 月（YYYY-MM）。
   * 当月と異なる（未設定含む）なら、その月の最初の応答に注意書きを添える。
   */
  lastDisclaimerMonth?: string;
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

  /**
   * 毎日配信→週3配信の切替案内（登録14日目）を送った日時。
   * `dailyQuiz` が二重送信を防ぐためのフラグ（2026-06 配信モデル）。
   */
  deliveryTransitionNotifiedAt?: Timestamp;

  // === プラン関連 ===
  plan?: Plan;
  planSource?: PlanSource;
  premiumUntil?: Timestamp;
  trialStartedAt?: Timestamp;
  trialExpiredAt?: Timestamp;
  richMenuType?: "free" | "trial" | "premium";

  // === 活性状態（新規・休眠ユーザー除外システム用） ===

  /**
   * 活性状態。`recalculateUserStatuses` cron で日次更新される。
   * 既存ドキュメントは "active" として扱う。
   */
  status?: UserStatus;

  /**
   * 公式 LINE アカウントをブロック中かどうか。
   * webhook の `unfollow` イベント受信時に true、`follow` (再フォロー) で false。
   * `true` のユーザーには cron 系 push (dailyQuiz / trialDrip* / winback /
   * onboardingReminder / abandonReminder / postTrialFollowup / premiumNudge /
   * firstExtraFollowup) を送らない。
   */
  blocked?: boolean;

  /** ブロック発生（unfollow 受信）日時 */
  blockedAt?: Timestamp;

  /** 再フォロー（follow 受信）日時 */
  unblockedAt?: Timestamp;

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

  // === フォールバック AI チャット（新規） ===

  /** Gemini フォールバック応答の日次カウント・会話履歴。 */
  aiChat?: AiChatState;

  /**
   * このユーザーに最後に出題した問題のスナップショット。
   * 問題送信時（毎日配信 / 追加で解く / 苦手復習）に書き込み、AI チャットボットが
   * 「さっきの問題」等の質問に答えられるよう buildSystemPrompt で文脈に注入する。
   * 配信時刻は別フィールド `lastQuestionDeliveredAt` を参照。
   */
  lastQuestion?: LastQuestionSnapshot;

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
