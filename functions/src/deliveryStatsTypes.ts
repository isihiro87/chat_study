/**
 * Firestore `deliveryStats/{yearMonth}` のサーバー側型定義。
 *
 * LINE Messaging API の月次送信通数を記録し、プラン上限の超過を検知するために
 * 各 push 送信処理から書き込まれる。
 *
 * ドキュメント ID は `YYYY-MM` 形式（例: `"2026-05"`）。
 */

import type { Timestamp } from "firebase-admin/firestore";

/** 送信種別。`pushCountByType` の key として使用。 */
export type PushType =
  | "dailyQuiz"
  | "trialReminder"
  | "winback"
  | "onboardingReminder"
  | "premiumNudge"
  | "scopeSetupNudge"
  | "abandonReminder"
  | "postTrialFollowup"
  | "restartWelcome"
  | "other";

/** 送信種別ごとのカウント。 */
export type PushCountByType = Record<PushType, number>;

export interface DeliveryStatsDoc {
  /** ドキュメント ID と一致する年月（例: "2026-05"） */
  yearMonth: string;

  /** 月の総 push 通数（全種別合算） */
  totalPushCount: number;

  /** 送信種別ごとの通数 */
  pushCountByType: PushCountByType;

  /** 当月に push を1回でも受け取ったユニークユーザー数（参考値） */
  uniqueUserCount: number;

  /** 最終更新日時 */
  lastUpdatedAt: Timestamp;
}

/** 空の `PushCountByType` を生成する。 */
export function emptyPushCountByType(): PushCountByType {
  return {
    dailyQuiz: 0,
    trialReminder: 0,
    winback: 0,
    onboardingReminder: 0,
    premiumNudge: 0,
    scopeSetupNudge: 0,
    abandonReminder: 0,
    postTrialFollowup: 0,
    restartWelcome: 0,
    other: 0,
  };
}
