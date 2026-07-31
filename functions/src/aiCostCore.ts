/**
 * 高額請求を防ぐ多層キャップの判定（純粋ロジック）。
 *
 * `requirements.md` §3-b の②〜⑤層を実装する。①層（Google Cloud の予算アラート・
 * API クォータ・専用キー）はコンソール設定なのでコードには無い
 * （手順: docs/operations/ai-cost-guardrails.md §1）。
 *
 * ## 設計原則: 迷ったら「止める・安くする」側に倒す
 *
 * この判定が誤って allow に倒れると**そのまま請求になる**。したがって:
 *   - 集計値が取れない（undefined / NaN）→ deny
 *   - env が不正・未設定 → 既定の低い値を使う（無制限にしない）
 *   - 判定に迷う入力 → deny
 *
 * 副作用なし・環境非依存（Firestore / fetch を import しない）。
 */

import type { LlmPurpose, DegradeLevel } from './llmModelResolver';
import {
  resolveHistoryTurns,
  resolveMaxOutputTokens,
} from './llmModelResolver';
import type { AiTier, TierResolution } from './aiTier';
import { budgetScale } from './aiTier';

// ---------------------------------------------------------------------------
// 上限値（env 未設定・不正時に使う既定）
// ---------------------------------------------------------------------------

/** サービス全体の月次上限（円）。超過で全ユーザーの AI を止める。 */
export const DEFAULT_GLOBAL_MONTHLY_CAP_JPY = 30_000;
/** サービス全体の日次上限（円）。 */
export const DEFAULT_GLOBAL_DAILY_CAP_JPY = 2_000;
/** 課金ユーザー1人あたりの月次予算（円）。 */
export const DEFAULT_USER_MONTHLY_BUDGET_JPY = 350;
/** 1リクエストの入力トークン上限。 */
export const DEFAULT_MAX_INPUT_TOKENS = 20_000;
/** paid の1日あたり呼び出し回数上限（暴走ガード）。 */
export const DEFAULT_USER_DAILY_CALL_CAP = 200;
/** 月予算のうち「1日で使ったら異常」とみなす割合。 */
export const DEFAULT_SPIKE_RATIO = 0.3;
/** 日次コスト上限＝月予算 × この割合。 */
export const DEFAULT_DAILY_BUDGET_RATIO = 0.1;
/** フラッド判定の窓（ms）と件数。 */
export const FLOOD_WINDOW_MS = 60_000;
export const FLOOD_MAX_MESSAGES = 10;

export interface CostLimits {
  globalMonthlyCapJpy: number;
  globalDailyCapJpy: number;
  userMonthlyBudgetJpy: number;
  maxInputTokens: number;
  userDailyCallCap: number;
  spikeRatio: number;
  dailyBudgetRatio: number;
}

/**
 * env から上限を組む。**不正値・未設定は既定値（低い方）**へ倒す。
 * 「大きい値を設定したつもりが typo で無制限」という事故を作らない。
 */
export function parseLimits(
  env: Record<string, string | undefined> = {}
): CostLimits {
  return {
    globalMonthlyCapJpy: positiveNumber(
      env.AI_GLOBAL_MONTHLY_CAP_JPY,
      DEFAULT_GLOBAL_MONTHLY_CAP_JPY
    ),
    globalDailyCapJpy: positiveNumber(
      env.AI_GLOBAL_DAILY_CAP_JPY,
      DEFAULT_GLOBAL_DAILY_CAP_JPY
    ),
    userMonthlyBudgetJpy: positiveNumber(
      env.AI_MONTHLY_BUDGET_JPY,
      DEFAULT_USER_MONTHLY_BUDGET_JPY
    ),
    maxInputTokens: positiveNumber(
      env.AI_MAX_INPUT_TOKENS,
      DEFAULT_MAX_INPUT_TOKENS
    ),
    userDailyCallCap: positiveNumber(
      env.AI_USER_DAILY_CALL_CAP,
      DEFAULT_USER_DAILY_CALL_CAP
    ),
    spikeRatio: ratio(env.AI_SPIKE_RATIO, DEFAULT_SPIKE_RATIO),
    dailyBudgetRatio: ratio(
      env.AI_DAILY_BUDGET_RATIO,
      DEFAULT_DAILY_BUDGET_RATIO
    ),
  };
}

/** 正の有限数だけ採用。それ以外は既定値。 */
function positiveNumber(raw: string | undefined, fallback: number): number {
  if (raw === undefined || raw === '') return fallback;
  const n = Number(raw);
  if (!Number.isFinite(n) || n <= 0) return fallback;
  return n;
}

/** 0 < r <= 1 の割合だけ採用。それ以外は既定値。 */
function ratio(raw: string | undefined, fallback: number): number {
  if (raw === undefined || raw === '') return fallback;
  const n = Number(raw);
  if (!Number.isFinite(n) || n <= 0 || n > 1) return fallback;
  return n;
}

// ---------------------------------------------------------------------------
// 判定の入力
// ---------------------------------------------------------------------------

export interface CostState {
  /** サービス全体の当月累計（円）。取得できなければ undefined → deny */
  globalMonthJpy: number | undefined;
  /** サービス全体の当日累計（円）。取得できなければ undefined → deny */
  globalDayJpy: number | undefined;
  /** このユーザーの当月累計（円） */
  userMonthJpy: number;
  /** このユーザーの当日累計（円） */
  userDayJpy: number;
  /** このユーザーの当日呼び出し回数 */
  userDayCount: number;
  /** 直近メッセージの受信時刻（ms・新しい順でも古い順でもよい） */
  recentMessageTimesMs?: number[];
  /** 直前にユーザーが送ってきたテキスト（同一反復の検知用） */
  lastUserText?: string;
}

export type DenyReason =
  | 'state_unavailable'
  | 'global_daily'
  | 'global_monthly'
  | 'duplicate'
  | 'flood'
  | 'user_daily_cost'
  | 'user_daily_count'
  | 'user_spike'
  | 'user_monthly';

export interface GateAllow {
  kind: 'allow';
  degrade: DegradeLevel;
  maxInputTokens: number;
  maxOutputTokens: number;
  historyTurns: number;
}

export interface GateDeny {
  kind: 'deny';
  reason: DenyReason;
  /** 運営（管理者）へ通知すべきか */
  notifyAdmin: boolean;
}

export type GateDecision = GateAllow | GateDeny;

export interface GateInput {
  tier: TierResolution;
  purpose: LlmPurpose;
  state: CostState;
  limits: CostLimits;
  nowMs: number;
  /** 今回ユーザーが送ってきたテキスト（同一反復の検知用） */
  userText?: string;
}

/**
 * 5層キャップを判定する。早く止まる順に評価する。
 *
 * | 順 | 条件 | 結果 |
 * |---|---|---|
 * | 1 | 全体集計が取れない | deny: state_unavailable |
 * | 2 | 全体 日次超過 | deny（運営通知） |
 * | 3 | 全体 月次超過 | deny（運営通知） |
 * | 4 | 同一メッセージ反復 | deny |
 * | 5 | フラッド | deny |
 * | 6 | ユーザー日次 回数超過 | deny |
 * | 7 | ユーザー日次 コスト超過 | deny |
 * | 8 | 1日で月予算の spikeRatio 超 | deny（運営通知） |
 * | 9 | ユーザー月次 100%超 | deny |
 * | 10 | 90%超 → degrade 2 / 70%超 → degrade 1 / それ以外 → 0 | allow |
 */
export function evaluateGate(input: GateInput): GateDecision {
  const { tier, purpose, state, limits, nowMs } = input;

  // paid 以外はこの予算制の対象外（free は従来の回数制のまま）。
  // 呼び出し側が free でここを通すことは無いが、通っても安全な既定を返す。
  if (tier.tier !== 'paid') {
    return allow(0, tier.tier, purpose, limits);
  }

  // 1. 全体集計が読めない → 止める。
  //    「読めなかったから無制限」は請求事故に直結するため禁止。
  if (
    !isFiniteNumber(state.globalMonthJpy) ||
    !isFiniteNumber(state.globalDayJpy) ||
    !isFiniteNumber(state.userMonthJpy) ||
    !isFiniteNumber(state.userDayJpy) ||
    !isFiniteNumber(state.userDayCount)
  ) {
    return { kind: 'deny', reason: 'state_unavailable', notifyAdmin: false };
  }

  // 2/3. サービス全体のキャップ。
  if (state.globalDayJpy >= limits.globalDailyCapJpy) {
    return { kind: 'deny', reason: 'global_daily', notifyAdmin: true };
  }
  if (state.globalMonthJpy >= limits.globalMonthlyCapJpy) {
    return { kind: 'deny', reason: 'global_monthly', notifyAdmin: true };
  }

  // 4. 同一メッセージの反復（誤タップ・自動化の連投）。
  if (isDuplicateMessage(input.userText, state.lastUserText)) {
    return { kind: 'deny', reason: 'duplicate', notifyAdmin: false };
  }

  // 5. フラッド。
  if (isFlooding(state.recentMessageTimesMs, nowMs)) {
    return { kind: 'deny', reason: 'flood', notifyAdmin: false };
  }

  // ユーザー予算（体験は倍率で小さくする）。
  const scale = budgetScale(tier);
  const monthlyBudget = limits.userMonthlyBudgetJpy * scale;
  // 倍率が 0 以下になる（=paid でない）ことは上でガード済みだが念のため。
  if (!(monthlyBudget > 0)) {
    return { kind: 'deny', reason: 'user_monthly', notifyAdmin: false };
  }

  // 6. 1日の回数上限（暴走ガード）。
  if (state.userDayCount >= limits.userDailyCallCap) {
    return { kind: 'deny', reason: 'user_daily_count', notifyAdmin: false };
  }

  // 7. 1日のコスト上限。
  const dailyCap = monthlyBudget * limits.dailyBudgetRatio;
  if (state.userDayJpy >= dailyCap) {
    return { kind: 'deny', reason: 'user_daily_cost', notifyAdmin: false };
  }

  // 8. 急増（1日で月予算の spikeRatio 以上）→ 遮断＋運営通知。
  if (state.userDayJpy >= monthlyBudget * limits.spikeRatio) {
    return { kind: 'deny', reason: 'user_spike', notifyAdmin: true };
  }

  // 9. 月次超過。
  const usedRatio = state.userMonthJpy / monthlyBudget;
  if (usedRatio >= 1) {
    return { kind: 'deny', reason: 'user_monthly', notifyAdmin: false };
  }

  // 10. デグレード段階を決めて allow。
  const degrade: DegradeLevel = usedRatio >= 0.9 ? 2 : usedRatio >= 0.7 ? 1 : 0;
  return allow(degrade, 'paid', purpose, limits);
}

/**
 * `free` 用の通行証を作る。
 *
 * `free` は予算制の対象外（1日40回の回数制のまま）なので、コスト状態を読まずに
 * 通行証だけ発行する＝**追加 Firestore read ゼロ**。`evaluateGate` に free を渡した
 * ときと同じ結果になる（重複ロジックを作らないため同じ `allow` を通す）。
 *
 * ⚠️ これは「予算チェックの迂回」ではない。free の上限は `aiChat` の
 * `evaluateRateLimit`（1日40回）が担い、支出は `recordCost` で全体キャップ②層に載る。
 */
export function evaluateFreeGate(
  purpose: LlmPurpose,
  limits: CostLimits
): GateAllow {
  return allow(0, 'free', purpose, limits);
}

function allow(
  degrade: DegradeLevel,
  tier: AiTier,
  purpose: LlmPurpose,
  limits: CostLimits
): GateAllow {
  return {
    kind: 'allow',
    degrade,
    maxInputTokens: limits.maxInputTokens,
    maxOutputTokens: resolveMaxOutputTokens(purpose, tier, degrade),
    historyTurns: resolveHistoryTurns(tier, degrade),
  };
}

function isFiniteNumber(v: unknown): v is number {
  return typeof v === 'number' && Number.isFinite(v);
}

/**
 * 直前と同一のメッセージか。空白差・全角半角差は正規化して比べる。
 * 短い相槌（「うん」「はい」等）は自然に繰り返されるので対象外にする。
 */
export function isDuplicateMessage(
  current: string | undefined,
  previous: string | undefined
): boolean {
  const a = normalizeForCompare(current);
  const b = normalizeForCompare(previous);
  if (!a || !b) return false;
  if (a.length < 8) return false;
  return a === b;
}

function normalizeForCompare(text: string | undefined): string {
  return (text ?? '').normalize('NFKC').replace(/\s+/gu, '').trim();
}

/** 直近 FLOOD_WINDOW_MS に FLOOD_MAX_MESSAGES 件超のメッセージが来ているか。 */
export function isFlooding(
  timesMs: number[] | undefined,
  nowMs: number
): boolean {
  if (!Array.isArray(timesMs) || timesMs.length === 0) return false;
  const since = nowMs - FLOOD_WINDOW_MS;
  let count = 0;
  for (const t of timesMs) {
    if (
      typeof t === 'number' &&
      Number.isFinite(t) &&
      t >= since &&
      t <= nowMs
    ) {
      count++;
    }
  }
  return count > FLOOD_MAX_MESSAGES;
}

// ---------------------------------------------------------------------------
// ユーザー向けの文言（deny 理由ごと）
// ---------------------------------------------------------------------------

/**
 * deny のときにユーザーへ返す文言。
 * どの理由でも**責めず・不安にさせず**、次にできることを伝える
 * （文言基準: docs/message-copy-guidelines.md）。
 */
export function denyMessage(reason: DenyReason): string {
  switch (reason) {
    case 'duplicate':
      return 'さっきと同じメッセージが届いたよ😊 もう少しくわしく教えてくれる？';
    case 'flood':
      return 'ちょっとメッセージが続いているみたい💦 少し待ってから、まとめて送ってくれる？';
    case 'user_daily_count':
    case 'user_daily_cost':
    case 'user_spike':
      return 'きょうはたくさん話せたね！このつづきは、また明日いっしょにやろう😊';
    case 'user_monthly':
      return '今月はたっぷり話せたね！来月またリセットされるから、それまではワークや参考書で進めていこう😊';
    case 'global_daily':
    case 'global_monthly':
    case 'state_unavailable':
    default:
      return 'ごめんね、いますこし混み合っているみたい💦 少し時間をおいてから、もう一度送ってみてくれる？';
  }
}

/** deny を「ユーザー都合（枠を使い切った）」と「システム都合」に分ける（計測用）。 */
export function isUserQuotaDeny(reason: DenyReason): boolean {
  return (
    reason === 'user_daily_cost' ||
    reason === 'user_daily_count' ||
    reason === 'user_monthly' ||
    reason === 'user_spike'
  );
}
