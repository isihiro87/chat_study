/**
 * フォールバック AI チャットの純粋ロジック（副作用なし・重い依存なし）。
 *
 * `lineWebhook` / firebase-admin を import しないため、単体テストから安全に
 * 読み込める。`aiChat.ts` はこの core を使ってオーケストレーションする。
 */

import type { AiChatTurn } from './userDocTypes';
import type { UserPlan } from './lineWebhook';
import { classifyDeterministic, type SafetyClass } from './aiSafetyCore';

/** 全ユーザー共通の 1 日あたり AI 応答回数上限（プラン統合後）。 */
export const DAILY_LIMIT = 40;

/**
 * 無料プランで保持する会話ターン数（user/model のペア数）。
 * 2026-07: 3→6 に拡大。3ターンだと AI が自分の直前の発言を忘れて
 * 釈明する事故が実会話で確認されたため（flash-lite の入力コストは十分小さい）。
 * 2026-07-26: さらに 6→10。同じ事故が6ターンでも起きるため。増える入力は
 * `aiChatPrompt` の話題別ブロック化（毎ターン全量送信をやめた分）で相殺している。
 * ⚠️ `llmModelResolver.FREE_HISTORY_TURNS` と同値に保つこと。
 */
export const FREE_HISTORY_TURNS = 10;
/** トライアル・プレミアムで保持する会話ターン数。 */
export const PREMIUM_HISTORY_TURNS = 10;

/** 1 日上限を返す（プラン統合により全ユーザー共通）。 */
export function getDailyLimit(_plan: UserPlan): number {
  return DAILY_LIMIT;
}

/** プランに応じた保持ターン数を返す。 */
export function getHistoryTurns(plan: UserPlan): number {
  return plan === 'premium' ? PREMIUM_HISTORY_TURNS : FREE_HISTORY_TURNS;
}

/** JST の YYYY-MM-DD を返す。 */
export function getJstDate(date: Date): string {
  const formatter = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return formatter.format(date).replace(/\//g, '-');
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

/**
 * 無料Botの安全分類（`requirements.md` R1〜R3）。
 *
 * **LLM を一切呼ばない**（正規表現だけ）＝コストゼロ・レイテンシゼロ。
 * paid は `unknown`（弱いシグナルはあるが判断がつかない）を最安モデルで補完するが、
 * free は呼ばないので**傾聴側（`concern`）に倒す**——素通りさせるより安全で、
 * 既定モデルは変わらないので追加コストも出ない。
 *
 * `crisis` を返したら、呼び出し側は**生成を1回も行わずに**固定文で受け止める。
 */
export function resolveFreeSafety(userText: string): SafetyClass {
  const deterministic = classifyDeterministic(userText);
  return deterministic === 'unknown' ? 'concern' : deterministic;
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
  const currentCount = sameDay ? (state?.count ?? 0) : 0;
  return { currentCount, limited: currentCount >= limit };
}
