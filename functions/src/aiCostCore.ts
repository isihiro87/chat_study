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
/**
 * 無料ティア全体の月次上限（円）。
 *
 * 実測（2026-08-01〜06 の `aiCostStats.byTier.free`）は月換算 約 ¥560 なので
 * **約5倍の余裕**を置く。無料は最安モデル固定で単価が低く、通常利用がここに
 * 当たることはない。当たるのは「教材追加で利用が跳ねた」「暴走した」ときだけ。
 */
export const DEFAULT_FREE_MONTHLY_CAP_JPY = 3_000;
/**
 * 無料ティア全体の日次上限（円）。実測 約 ¥18.5/日 に対し 16倍の余裕。
 * 月次だけだと「月初に一気に使い切って残り29日止まる」形になるため、
 * **急増をその日のうちに止める**役割を持たせる。
 */
export const DEFAULT_FREE_DAILY_CAP_JPY = 300;
/**
 * 無料ユーザー1人あたりの月次呼び出し上限（回）。
 *
 * これは費用対策ではなく**公平性**の担保。1日40回 × 30日 = 1,200回 を1人が
 * 使い切ると、その1人だけで無料ティア全体の月次枠を食い潰し、他の3,000人が
 * 使えなくなる。20回/日ぶんに相当する 600 回で頭を押さえる
 * （実測の中央値は月数回なので、通常利用がここに当たることはない）。
 */
export const DEFAULT_FREE_USER_MONTHLY_CALL_CAP = 600;
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
  /** 無料ティア全体の月次上限（円） */
  freeMonthlyCapJpy: number;
  /** 無料ティア全体の日次上限（円） */
  freeDailyCapJpy: number;
  /** 無料ユーザー1人あたりの月次呼び出し上限（回） */
  freeUserMonthlyCallCap: number;
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
    freeMonthlyCapJpy: positiveNumber(
      env.AI_FREE_MONTHLY_CAP_JPY,
      DEFAULT_FREE_MONTHLY_CAP_JPY
    ),
    freeDailyCapJpy: positiveNumber(
      env.AI_FREE_DAILY_CAP_JPY,
      DEFAULT_FREE_DAILY_CAP_JPY
    ),
    freeUserMonthlyCallCap: positiveNumber(
      env.AI_FREE_USER_MONTHLY_CALL_CAP,
      DEFAULT_FREE_USER_MONTHLY_CALL_CAP
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
  | 'user_monthly'
  /** 無料ティア全体の日次上限に達した */
  | 'free_daily'
  /** 無料ティア全体の月次上限に達した */
  | 'free_monthly'
  /** 無料ユーザー個人の月次呼び出し上限に達した */
  | 'free_user_monthly';

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
 * `evaluateFreeGate` に渡す集計値（全体ぶん＋無料ティアぶん）。
 *
 * 全体・ティア別の値は **`undefined`（＝集計が読めなかった）を許す**。
 * その場合その項目の判定はスキップされる（`evaluateFreeGate` の doc 参照）。
 */
export interface FreeCostState {
  /** サービス全体の当月累計（円） */
  globalMonthJpy: number | undefined;
  /** サービス全体の当日累計（円） */
  globalDayJpy: number | undefined;
  /** 無料ティアの当月累計（円・`aiCostStats.byTier.free`） */
  freeMonthJpy: number | undefined;
  /** 無料ティアの当日累計（円・`aiCostStats.byTierDay[day].free`） */
  freeDayJpy: number | undefined;
  /** この無料ユーザーの当月呼び出し回数（`users/{uid}.aiChat.monthCount`） */
  userMonthCount: number;
}

export interface FreeGateInput {
  purpose: LlmPurpose;
  limits: CostLimits;
  state: FreeCostState;
}

/**
 * `free`（一問一答・3,000人）の予算ゲート。
 *
 * ## 2026-08-06 まで: ここは無条件 allow だった
 * 支出は `recordCost` で `aiCostStats` に**計上**されていたが、**判定には使われて
 * いなかった**ため、無料側は全体キャップ（②層）で止まらなかった。歯止めは
 * 「1人1日40回」だけで、理論上は 1人 ¥650/月・上位1%が張り付けば ¥23,000/月 まで
 * 伸びうる状態だった。教材とAI機能を増やすほどこのリスクは実体化するので、
 * 無料にも全体キャップ＋**無料ティア専用のサブキャップ**を通す。
 *
 * ## 判定順（早く止まる順）
 * | 順 | 条件 | 結果 |
 * |---|---|---|
 * | 1 | 全体 日次超過 | deny: global_daily（運営通知） |
 * | 2 | 全体 月次超過 | deny: global_monthly（運営通知） |
 * | 3 | 無料ティア 日次超過 | deny: free_daily（運営通知） |
 * | 4 | 無料ティア 月次超過 | deny: free_monthly（運営通知） |
 * | 5 | 個人の月次回数超過 | deny: free_user_monthly（通知しない） |
 * | 6 | それ以外 | allow（degrade は常に 0＝最安モデル固定） |
 *
 * ## `evaluateGate`（paid）との意図的な違い: 集計が読めないときは**止めない**
 * paid は「読めなかったから無制限」を禁じて deny に倒すが、free は逆にする。
 *   - free は最安モデル固定で、暴走しても「1人1日40回」が先に効く
 *   - 集計が読めない数分間の想定損失は数十円で、事故になる額に達しない
 *   - 一方 deny に倒すと **3,000人の AI が一斉に沈黙**する（損失が非対称）
 * したがって非有限値は「未取得」とみなして通す。呼び出し側は WARN を残すこと。
 */
export function evaluateFreeGate(input: FreeGateInput): GateDecision {
  const { purpose, limits, state } = input;

  // 全体キャップ（②層）。無料もここに載せるのが今回の主目的。
  if (overCap(state.globalDayJpy, limits.globalDailyCapJpy)) {
    return { kind: 'deny', reason: 'global_daily', notifyAdmin: true };
  }
  if (overCap(state.globalMonthJpy, limits.globalMonthlyCapJpy)) {
    return { kind: 'deny', reason: 'global_monthly', notifyAdmin: true };
  }

  // 無料ティア専用のサブキャップ。
  // 全体キャップだけだと「無料の暴走が有料会員の予算まで食う」ので分けて持つ。
  if (overCap(state.freeDayJpy, limits.freeDailyCapJpy)) {
    return { kind: 'deny', reason: 'free_daily', notifyAdmin: true };
  }
  if (overCap(state.freeMonthJpy, limits.freeMonthlyCapJpy)) {
    return { kind: 'deny', reason: 'free_monthly', notifyAdmin: true };
  }

  // 個人の月次回数（公平性）。運営通知はしない＝日常的に起きてよい上限。
  if (overCap(state.userMonthCount, limits.freeUserMonthlyCallCap)) {
    return { kind: 'deny', reason: 'free_user_monthly', notifyAdmin: false };
  }

  return allow(0, 'free', purpose, limits);
}

/**
 * 上限に達しているか。**非有限値（未取得）は false＝通す**。
 * free 専用の判断なので、paid の `isFiniteNumber` ガードとは意図的に逆に倒す
 * （理由は `evaluateFreeGate` の doc コメント）。
 */
function overCap(value: number | undefined, cap: number): boolean {
  if (!isFiniteNumber(value)) return false;
  return value >= cap;
}

/**
 * `free` の「予算ゲートを通した後」の追撃処理（プロフィール抽出など）が使う上限値。
 * ゲート判定そのものは既に済んでいる前提なので、通行証の材料だけを返す。
 */
export function freeGateAllowance(
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
    case 'free_user_monthly':
      // AI 以外（1問解く・苦手を復習・じっくり学ぶ）はこの上限と無関係に使える。
      // 呼び出し側が Quick Reply でそこへ逃がすので、文言でも次の一手を示す。
      return '今月はたくさん話せたね！ここでのおしゃべりは来月またリセットされるよ😊 それまでは「1問解く」や「苦手を復習」でどんどん進めよう！';
    case 'free_daily':
    case 'free_monthly':
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
    reason === 'user_spike' ||
    reason === 'free_user_monthly'
  );
}
