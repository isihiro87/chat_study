/**
 * フォールバック AI チャットの純粋ロジック（副作用なし・重い依存なし）。
 *
 * `lineWebhook` / firebase-admin を import しないため、単体テストから安全に
 * 読み込める。`aiChat.ts` はこの core を使ってオーケストレーションする。
 */

import type { AiChatTurn } from "./userDocTypes";
import type { UserPlan } from "./lineWebhook";

/** 全ユーザー共通の 1 日あたり AI 応答回数上限（プラン統合後）。 */
export const DAILY_LIMIT = 40;

/** 無料プランで保持する会話ターン数（user/model のペア数）。 */
export const FREE_HISTORY_TURNS = 3;
/** トライアル・プレミアムで保持する会話ターン数（微増）。 */
export const PREMIUM_HISTORY_TURNS = 6;

/** 1 日上限を返す（プラン統合により全ユーザー共通）。 */
export function getDailyLimit(_plan: UserPlan): number {
  return DAILY_LIMIT;
}

/** プランに応じた保持ターン数を返す。 */
export function getHistoryTurns(plan: UserPlan): number {
  return plan === "premium" ? PREMIUM_HISTORY_TURNS : FREE_HISTORY_TURNS;
}

/** JST の YYYY-MM-DD を返す。 */
export function getJstDate(date: Date): string {
  const formatter = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formatter.format(date).replace(/\//g, "-");
}

/**
 * 履歴を「直近 maxTurns ターン（= maxTurns*2 メッセージ）」にトリミングする。
 * 先頭（古い方）から切り捨てる。
 */
export function trimHistory(
  history: AiChatTurn[],
  maxTurns: number
): AiChatTurn[] {
  const maxMessages = maxTurns * 2;
  if (history.length <= maxMessages) return history;
  return history.slice(history.length - maxMessages);
}

/** 当日カウント状態の最小形。 */
export interface AiChatCountState {
  dateJST?: string;
  count?: number;
}

/**
 * レート制限の判定。JST 日付が変わっていれば当日カウントは 0 に戻る。
 * @returns currentCount: 当日の使用済み回数 / limited: 上限到達済みか
 */
export function evaluateRateLimit(
  state: AiChatCountState | undefined,
  todayJst: string,
  limit: number
): { currentCount: number; limited: boolean } {
  const sameDay = state?.dateJST === todayJst;
  const currentCount = sameDay ? state?.count ?? 0 : 0;
  return { currentCount, limited: currentCount >= limit };
}
