/**
 * LLM プロバイダの統一インターフェース。
 *
 * ## 設計の中核: 予算ゲートを通らないと呼べない
 *
 * `generateText` は `BudgetGrant`（`aiCostCore.evaluateGate` が allow のときだけ
 * 発行される通行証）を**必須引数**にしている。これにより「予算チェックを忘れて
 * 素で LLM を叩く」コードがコンパイル時に書けない（`requirements.md` §3-b）。
 *
 * `BudgetGrant` は branded type なので、呼び出し側でリテラルを捏造できない。
 * 発行口は `createGrant`（本ファイル）だけに限定する。
 *
 * プロバイダ差（Gemini / OpenAI）は `llmGemini.ts` / `llmOpenai.ts` が吸収する。
 */

import type { AiChatTurn } from './userDocTypes';
import type { AiTier } from './aiTier';
import type { DegradeLevel, LlmPurpose } from './llmModelResolver';
import { CHEAPEST_MODEL, resolveModel } from './llmModelResolver';
import {
  estimateCostJpy,
  isPricedModel,
  type CostBreakdown,
  type LlmUsage,
} from './llmPrices';
import type { GateAllow } from './aiCostCore';

/** プロバイダ未設定（OpenAI のキーが無い等）。フォールバック文で受ける。 */
export class LlmProviderNotConfiguredError extends Error {
  constructor(provider: string) {
    super(`LLM provider "${provider}" is not configured.`);
    this.name = 'LlmProviderNotConfiguredError';
  }
}

/**
 * タイムアウト。**トークンは消費され得る**（モデルは生成していた可能性がある）ので
 * コストは推定値で計上する＝`billable = true`。
 */
export class LlmTimeoutError extends Error {
  /** 課金され得るか（計上するか） */
  readonly billable = true;
  constructor(ms: number) {
    super(`LLM call timed out after ${ms}ms`);
    this.name = 'LlmTimeoutError';
  }
}

/**
 * プロバイダが HTTP エラーで**リクエストを拒否した**ときのエラー。
 *
 * ## なぜ課金判定が必要か（実地で踏んだ問題）
 * AI Studio の費用上限に到達すると Gemini は 429 / 403 を返して**サービスを止める**。
 * このときトークンは1つも消費されていないので、**コストを計上してはいけない**。
 * 計上すると、止まっている間リクエストごとに架空のコストが積まれ、
 * ユーザーの月次予算（`aiBudget`）と全体集計（`aiCostStats`）を食い潰す。
 *
 * 判定:
 *   - 4xx（400 不正・401/403 認証や上限・429 レート）→ **課金されない**
 *   - 5xx（サーバ側エラー）→ 課金されない扱い（Google 側の障害に課金しない前提）
 *   - タイムアウト（`LlmTimeoutError`）→ **課金され得る**ので計上する
 */
export class LlmHttpError extends Error {
  readonly billable: boolean;
  constructor(
    readonly status: number,
    readonly detail: string
  ) {
    super(`LLM HTTP ${status}: ${detail}`);
    this.name = 'LlmHttpError';
    // 明示的に拒否された（=処理されていない）リクエストは課金されない。
    this.billable = false;
  }

  /** 費用上限・レート制限による停止か（運用ログの判別用）。 */
  get isQuotaOrBilling(): boolean {
    return this.status === 429 || this.status === 403 || this.status === 402;
  }
}

/** エラーがコスト計上対象かを判定する（不明なら安全側＝計上する）。 */
export function isBillableError(error: unknown): boolean {
  if (error instanceof LlmProviderNotConfiguredError) return false;
  const billable = (error as { billable?: unknown } | null)?.billable;
  if (typeof billable === 'boolean') return billable;
  // 判定できないエラーは「課金された可能性がある」として計上する
  // （過小計上で上限をすり抜けるより安全）。
  return true;
}

/**
 * ブランド用のシンボル。**export しない**ので、このモジュールの外から
 * `BudgetGrant` 型のオブジェクトリテラルを作れない（＝予算ゲートを迂回できない）。
 */
declare const budgetGrantBrand: unique symbol;

/**
 * 予算ゲートの通行証。
 * 発行口は `createGrant` / `createOneShotGrant` だけ。
 */
export interface BudgetGrant {
  readonly tier: AiTier;
  readonly degrade: DegradeLevel;
  readonly maxInputTokens: number;
  readonly maxOutputTokens: number;
  readonly [budgetGrantBrand]: true;
}

/**
 * `evaluateGate` の allow 結果から通行証を作る。**唯一の発行口。**
 * ここを経由しないと `generateText` を呼べない。
 */
export function createGrant(tier: AiTier, allow: GateAllow): BudgetGrant {
  return {
    tier,
    degrade: allow.degrade,
    maxInputTokens: allow.maxInputTokens,
    maxOutputTokens: allow.maxOutputTokens,
  } as BudgetGrant;
}

/**
 * 単発生成（月末レポート・採点など、会話予算とは別系統）のための通行証。
 * 呼び出し側がコストを管理する前提で、上限だけ明示して発行する。
 * ⚠️ 会話（AIチャット）ではこれを使わない。必ず `evaluateGate` → `createGrant`。
 */
export function createOneShotGrant(opts: {
  maxInputTokens: number;
  maxOutputTokens: number;
}): BudgetGrant {
  return {
    tier: 'paid',
    degrade: 0,
    maxInputTokens: opts.maxInputTokens,
    maxOutputTokens: opts.maxOutputTokens,
  } as BudgetGrant;
}

/** マルチモーダル入力の1パート（現行 `aiChat.AiChatMediaPart` と同形）。 */
export interface LlmMediaPart {
  mimeType: string;
  data: string;
}

/** function calling のツール定義（プロバイダ非依存の最小形）。 */
export interface LlmToolDef {
  name: string;
  description: string;
  /** JSON Schema（プロパティのみ） */
  parameters: Record<string, unknown>;
}

export interface LlmToolCall {
  name: string;
  args: Record<string, unknown>;
}

export interface LlmRequest {
  purpose: LlmPurpose;
  /** 予算ゲートの通行証。必須（これが設計の要点） */
  grant: BudgetGrant;
  system: string;
  history: AiChatTurn[];
  userText: string;
  media?: LlmMediaPart[];
  tools?: LlmToolDef[];
  timeoutMs?: number;
  /** テスト・運用のための env 注入（既定は process.env） */
  env?: Record<string, string | undefined>;
  /**
   * purpose によるモデル解決を上書きする（単発生成の互換シム用）。
   * 価格表に無いモデルは無視され、既定の最安モデルへ倒す（WARN ログ）。
   * ⚠️ 会話（AIチャット）では使わない。必ず purpose 経由にする。
   */
  modelOverride?: string;
}

export interface LlmResult {
  text: string;
  toolCalls?: LlmToolCall[];
  /** 出力トークン上限で打ち切られたか（文の途中で切れている可能性がある） */
  truncated?: boolean;
  usage: LlmUsage;
  model: string;
  /** 実トークン（取れなければ上限値）から換算した円 */
  cost: CostBreakdown;
}

/** 各プロバイダのアダプタが実装する形。 */
export interface LlmAdapterInput {
  model: string;
  system: string;
  history: AiChatTurn[];
  userText: string;
  media?: LlmMediaPart[];
  tools?: LlmToolDef[];
  maxOutputTokens: number;
  timeoutMs: number;
  env: Record<string, string | undefined>;
}

export interface LlmAdapterOutput {
  text: string;
  toolCalls?: LlmToolCall[];
  /** 出力トークン上限で打ち切られたか（Gemini の `finishReason === 'MAX_TOKENS'`） */
  truncated?: boolean;
  usage: LlmUsage;
}

/** 既定のタイムアウト（replyToken の有効期間内に返すため）。 */
export const DEFAULT_TIMEOUT_MS = 12_000;

/** 1トークンあたりの概算文字数（日本語）。入力量の見積りに使う。 */
const CHARS_PER_TOKEN = 1.8;

/** テキスト長からトークン数を概算する（切り上げ＝多めに見る）。 */
export function estimateTokens(text: string): number {
  if (!text) return 0;
  return Math.ceil(text.length / CHARS_PER_TOKEN);
}

/**
 * 入力が `maxInputTokens` を超えないよう履歴を古い方から削る。
 *
 * system プロンプトと最新の user 発話は削れない（削ると意味が壊れる）ので、
 * 履歴だけを削る。それでも収まらない場合は `overflow: true` を返し、
 * 呼び出し側が判断できるようにする（system 側の注入量を減らす等）。
 */
export function fitHistoryToBudget(
  system: string,
  history: AiChatTurn[],
  userText: string,
  maxInputTokens: number
): { history: AiChatTurn[]; estimatedInputTokens: number; overflow: boolean } {
  const fixed = estimateTokens(system) + estimateTokens(userText);
  if (fixed >= maxInputTokens) {
    return { history: [], estimatedInputTokens: fixed, overflow: true };
  }
  let budget = maxInputTokens - fixed;
  const kept: AiChatTurn[] = [];
  // 新しい方から詰めて、入るぶんだけ残す。
  for (let i = history.length - 1; i >= 0; i--) {
    const cost = estimateTokens(history[i].text);
    if (cost > budget) break;
    budget -= cost;
    kept.unshift(history[i]);
  }
  const used =
    fixed + kept.reduce((sum, turn) => sum + estimateTokens(turn.text), 0);
  return { history: kept, estimatedInputTokens: used, overflow: false };
}

/**
 * LLM を呼ぶ。
 *
 * 1. `grant` からモデルを解決（価格表に無ければ throw）
 * 2. 入力トークン上限に合わせて履歴を切り詰める
 * 3. プロバイダのアダプタを呼ぶ
 * 4. 実トークンを円に換算して返す（取れなければ上限値で多めに計上）
 */
export async function generateText(req: LlmRequest): Promise<LlmResult> {
  const env = req.env ?? (process.env as Record<string, string | undefined>);
  const resolved = adjustForAudio(resolveRequestModel(req, env), req.media);

  const fitted = fitHistoryToBudget(
    req.system,
    req.history,
    req.userText,
    req.grant.maxInputTokens
  );

  const adapterInput: LlmAdapterInput = {
    model: resolved.model,
    system: req.system,
    history: fitted.history,
    userText: req.userText,
    media: req.media,
    tools: req.tools,
    maxOutputTokens: req.grant.maxOutputTokens,
    timeoutMs: req.timeoutMs ?? DEFAULT_TIMEOUT_MS,
    env,
  };

  const ceiling = {
    // 実測が取れなかったときは「上限まで使った」とみなす（過小計上を防ぐ）。
    maxInputTokens: req.grant.maxInputTokens,
    maxOutputTokens: req.grant.maxOutputTokens,
  };

  let out: LlmAdapterOutput;
  try {
    out = await callAdapter(resolved.provider, adapterInput);
  } catch (error) {
    // タイムアウト等「課金され得る」失敗だけコストを載せて投げ直す。
    // 4xx/5xx で拒否された場合はトークン未消費なので**載せない**——載せると
    // 費用上限で停止している間、架空のコストが積まれて予算を食い潰す（実地で判明）。
    if (isBillableError(error)) {
      const cost = estimateCostJpy(
        resolved.model,
        { missing: true },
        ceiling,
        env
      );
      throw Object.assign(error as Error, { llmCost: cost });
    }
    throw error;
  }

  const cost = estimateCostJpy(resolved.model, out.usage, ceiling, env);
  return {
    text: out.text,
    toolCalls: out.toolCalls,
    truncated: out.truncated,
    usage: out.usage,
    model: resolved.model,
    cost,
  };
}

/**
 * リクエストから実際に使うモデルを解決する（`generateText` が呼ぶ本体）。
 * 副作用が無いのでテストから直接検証できる。
 */
export function resolveRequestModel(
  req: Pick<LlmRequest, 'purpose' | 'grant' | 'modelOverride'>,
  env: Record<string, string | undefined> = {}
): { provider: 'gemini' | 'openai'; model: string } {
  return req.modelOverride
    ? resolveOverride(req.modelOverride, req.purpose, req.grant, env)
    : resolveModel(req.purpose, req.grant.tier, req.grant.degrade, env);
}

/**
 * `modelOverride` を解決する（単発生成の互換シム用）。
 *
 * 価格表に無いモデルが渡されたら **throw せず既定解決へ倒す**（WARN ログ）。
 * ここで throw すると、`GEMINI_MODEL` env に価格表未収録のモデルが入っている本番で
 * 月末レポート・記述採点・参考書チャットが一斉に壊れる。コスト可視性は
 * 「価格表にあるモデルで計上する」ことで担保されるので、倒す先が priced なら十分。
 */
function resolveOverride(
  model: string,
  purpose: LlmPurpose,
  grant: BudgetGrant,
  env: Record<string, string | undefined>
): { provider: 'gemini' | 'openai'; model: string } {
  if (isPricedModel(model)) {
    // provider はモデル名から決める（`gpt-*` は OpenAI）
    return { provider: model.startsWith('gpt-') ? 'openai' : 'gemini', model };
  }
  console.warn(
    `[llmProvider] modelOverride "${model}" is not in the price table; ` +
      `falling back to the default model for purpose "${purpose}".`
  );
  return resolveModel(purpose, grant.tier, grant.degrade, env);
}

/**
 * 音声つきの呼び出しは **Gemini へ振り替える**。
 *
 * つづもんのメイン頭脳（OpenAI gpt-5.6 系）は Responses API で音声入力を
 * 受け取れない。振り替えないと、LINE のボイスメッセージを送った有料ユーザーに
 * 毎回フォールバック文（「うまく答えられなかったみたい」）が返る。
 *
 * 倒す先は音声単価が明示されている最安モデル（`CHEAPEST_MODEL`）。
 * コスト計上はここで決めたモデルで行われるので、実費と計上がずれない。
 */
function adjustForAudio(
  resolved: { provider: 'gemini' | 'openai'; model: string },
  media: LlmMediaPart[] | undefined
): { provider: 'gemini' | 'openai'; model: string } {
  if (resolved.provider !== 'openai') return resolved;
  if (!media?.some((m) => m.mimeType.startsWith('audio/'))) return resolved;
  return { provider: 'gemini', model: CHEAPEST_MODEL };
}

/** プロバイダ別のアダプタへ振り分ける（動的 import でコールドスタートを軽くする）。 */
async function callAdapter(
  provider: 'gemini' | 'openai',
  input: LlmAdapterInput
): Promise<LlmAdapterOutput> {
  if (provider === 'gemini') {
    const { callGeminiAdapter } = await import('./llmGemini');
    return callGeminiAdapter(input);
  }
  const { callOpenaiAdapter } = await import('./llmOpenai');
  return callOpenaiAdapter(input);
}
