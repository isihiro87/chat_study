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
 * 2026-08-06: 10→20。「数回前の話を忘れる」がユーザー体感の最大の不満だった。
 *   - 増える入力は約1,500トークン＝**+¥0.06/ターン**（最安モデル）。
 *     無料全体でも月 +¥80 程度で、無料ティアキャップ（月¥3,000）に対して十分小さい。
 *   - user doc のサイズは 40メッセージ ≒ 8KB（1MB 上限に対して余裕）。
 *   - **これは短期記憶。長期記憶は `aiThreads` のアーカイブが担う**（`appendTurn`）。
 * ⚠️ `llmModelResolver.FREE_HISTORY_TURNS` と同値に保つこと。
 */
export const FREE_HISTORY_TURNS = 20;
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
  /** 集計対象の JST 月（YYYY-MM）。当月と違えば月次カウントは 0 扱い */
  monthJST?: string;
  /** 当月の使用済み回数（2026-08-06〜。無い場合は 0 から数え始める） */
  monthCount?: number;
  /** 検索的想起を最後に行った JST 日（YYYY-MM-DD） */
  recallDateJST?: string;
}

/**
 * 無料ティアで検索的想起（過去会話の引き戻し）を行ってよいか。
 *
 * **1日1回まで**に絞る。想起は「digests を引く（最大20 read）＋原文を引く（最大2 read）
 * ＋プロンプトが数千トークン増える」ので、会話のたびに走らせると無料の枠を
 * 一気に食う。有料は毎ターン判定してよいが、無料はここで差をつける
 * （＝記憶は全員に残し、**思い出す深さ**で差をつけるという方針）。
 *
 * 判定はトリガー検出（`aiRecallCore.detectRecallIntent`）の**前**に置くこと。
 * 当日ぶんを使い切っていれば、検出も Firestore アクセスも行わない。
 */
export function canRecallToday(
  state: AiChatCountState | undefined,
  todayJst: string
): boolean {
  return state?.recallDateJST !== todayJst;
}

/**
 * レート制限の判定。JST 日付が変わっていれば当日カウントは 0 に戻る。
 *
 * 月次カウントも同時に返す（2026-08-06〜）。**月次の上限判定はここではなく
 * `aiCostCore.evaluateFreeGate` が行う**（無料の上限判定を1箇所に集めるため）。
 * ここは「いま何回目か」を数えるだけに留める。
 *
 * 月次カウントを `users/{uid}.aiChat` に同居させているのは、日次カウントの
 * 書き戻しと**同じ1回の set に相乗りできる**ため（3,000人ぶんの write を増やさない）。
 *
 * @returns currentCount: 当日の使用済み回数 / limited: 当日上限に到達済みか
 *          / currentMonthCount: 当月の使用済み回数
 */
export function evaluateRateLimit(
  state: AiChatCountState | undefined,
  todayJst: string,
  limit: number
): { currentCount: number; limited: boolean; currentMonthCount: number } {
  const sameDay = state?.dateJST === todayJst;
  const currentCount = sameDay ? (state?.count ?? 0) : 0;
  // "YYYY-MM-DD" の先頭7文字が JST の当月。
  const sameMonth = state?.monthJST === todayJst.slice(0, 7);
  const currentMonthCount = sameMonth ? (state?.monthCount ?? 0) : 0;
  return { currentCount, limited: currentCount >= limit, currentMonthCount };
}
