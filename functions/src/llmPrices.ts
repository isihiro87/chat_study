/**
 * LLM モデルの価格表と、実トークン使用量 → 円換算（純粋ロジック）。
 *
 * 高額請求を防ぐ多層キャップ（`requirements.md` §3-b）の「計上」を担う。
 * ここが過小に見積もると上限が効かなくなるため、**迷ったら高く見積もる**方針で実装する:
 *   - usage が取れなかったら上限値で計上する
 *   - 為替は保守的に高めの既定値を使う
 *   - 価格表に無いモデルは throw（コスト不明のまま呼ばせない）
 *
 * firebase-admin / fetch を import しないため単体テストから安全に読める。
 *
 * ⚠️ 価格の出典と確認日:
 *   https://ai.google.dev/gemini-api/docs/pricing （確認日 2026-07-25）
 *   料金改定があり得るので、実請求と計上額が乖離したらまずここを見直す
 *   （手順: docs/operations/ai-cost-guardrails.md §4）。
 */

/** 価格表に無いモデルを使おうとしたときのエラー。呼び出し前に落とす。 */
export class UnknownModelPriceError extends Error {
  constructor(public readonly model: string) {
    super(
      `No price entry for model "${model}". Refusing to call an unpriced model.`
    );
    this.name = 'UnknownModelPriceError';
  }
}

/** 1M トークンあたりの USD 単価。 */
export interface ModelPriceUsd {
  /** 入力（テキスト/画像/動画） */
  inputPerMillion: number;
  /** 出力 */
  outputPerMillion: number;
  /** 音声入力（無ければ inputPerMillion を使う） */
  audioInputPerMillion?: number;
  /** キャッシュ済み入力（無ければ inputPerMillion を使う＝割引を見込まない＝安全側） */
  cachedInputPerMillion?: number;
}

/**
 * モデル価格表（USD / 1M トークン）。
 * 出典・確認日はファイル冒頭のコメント参照。
 *
 * ここに載っていないモデルは使えない（`estimateCostJpy` が throw する）。
 * 新しいモデルを使いたくなったら、必ず公式料金ページを見て1行足す。
 */
export const MODEL_PRICES_USD: Readonly<Record<string, ModelPriceUsd>> = {
  // ── OpenAI（有料ティアのメイン頭脳・2026-07-26 切替）──
  // 価格は Short context 帯。1リクエストは約2〜3万トークンなので常に short 側に
  // 収まる。Long context 帯（128k超）は使わない前提。
  //
  // 🔻 2026-07-30 の値下げを反映（確認日 2026-08-06）:
  //      luna  $1.00→$0.20 / $6.00→$1.20（**−80%**）
  //      terra $2.50→$2.00 / $15.00→$12.00（−20%）
  //      sol   据え置き（$5.00 / $30.00。高速化のみで値下げはされていない）
  //    キャッシュ済み入力は**標準入力の1/10（90%off）**。
  //    出典: https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/
  //          https://www.elser.ai/blog/gpt-5-6-pricing-explained-sol-terra-luna-and-prompt-caching
  //
  // ⚠️ キャッシュ**書き込み**（cache writes・標準入力の 1.25倍）は集計に列が無く、
  //    通常入力として計上している＝その分だけ**過小計上**になる。
  //    静的 prefix は初回だけ書き込みが発生し以降は読み出しなので影響は小さいが、
  //    実請求と計上が数%ずれる要因として認識しておく（手順: ai-cost-guardrails.md §4）。
  'gpt-5.6-sol': {
    inputPerMillion: 5.0,
    cachedInputPerMillion: 0.5,
    outputPerMillion: 30.0,
  },
  'gpt-5.6-terra': {
    inputPerMillion: 2.0,
    cachedInputPerMillion: 0.2,
    outputPerMillion: 12.0,
  },
  'gpt-5.6-luna': {
    inputPerMillion: 0.2,
    cachedInputPerMillion: 0.02,
    outputPerMillion: 1.2,
  },

  // ---- Gemini ----
  // 最安。現行の既定モデル（free / classify / verify 用）
  'gemini-3.1-flash-lite': {
    inputPerMillion: 0.25,
    outputPerMillion: 1.5,
    audioInputPerMillion: 0.5,
  },
  // 中位。paid の通常チャット / 分析用
  'gemini-3.5-flash-lite': {
    inputPerMillion: 0.3,
    outputPerMillion: 2.5,
  },
  // 上位。相談 / 学習プラン生成用
  'gemini-3.6-flash': {
    inputPerMillion: 1.5,
    outputPerMillion: 7.5,
  },
  'gemini-3.5-flash': {
    inputPerMillion: 1.5,
    outputPerMillion: 9.0,
  },
  // 予備（現状は用途に割り当てていない）。200k 超は単価が上がるが、
  // 安全側に倒して常に高い方（>200k）の単価で計上する。
  'gemini-3.1-pro-preview': {
    inputPerMillion: 4.0,
    outputPerMillion: 18.0,
  },
  'gemini-2.5-flash': {
    inputPerMillion: 0.3,
    outputPerMillion: 2.5,
    audioInputPerMillion: 1.0,
  },
  'gemini-2.5-flash-lite': {
    inputPerMillion: 0.1,
    outputPerMillion: 0.4,
    audioInputPerMillion: 0.3,
  },
  'gemini-2.5-pro': {
    inputPerMillion: 2.5,
    outputPerMillion: 15.0,
  },
};

/**
 * 為替の既定値（円/USD）。
 * **実勢より高めに置く**（多めに計上され、上限が早めに効く＝安全側）。
 */
export const DEFAULT_JPY_PER_USD = 155;

/** 為替を env から読む。不正値・未設定なら既定値（＝高め）を使う。 */
export function resolveJpyPerUsd(
  env: Record<string, string | undefined> = {}
): number {
  const raw = env.JPY_PER_USD;
  if (raw === undefined || raw === '') return DEFAULT_JPY_PER_USD;
  const parsed = Number(raw);
  // NaN / 0 以下 / 非現実的な低さ は「設定ミス」とみなし既定値へ倒す。
  // ここで低い値を受け入れると計上が小さくなり上限が効かなくなる。
  if (!Number.isFinite(parsed) || parsed < 50) return DEFAULT_JPY_PER_USD;
  return parsed;
}

/** LLM 応答から得られる実トークン使用量。 */
export interface LlmUsage {
  inputTokens?: number;
  outputTokens?: number;
  /** キャッシュヒットした入力トークン（inputTokens の内訳） */
  cachedInputTokens?: number;
  /** 音声入力トークン（inputTokens の内訳） */
  audioInputTokens?: number;
  /** usage が取得できなかった場合に true。上限値で計上する */
  missing?: boolean;
}

/** 計上に使う「上限値」。usage が取れなかったときのフォールバック。 */
export interface UsageCeiling {
  maxInputTokens: number;
  maxOutputTokens: number;
}

export interface CostBreakdown {
  model: string;
  costJpy: number;
  inputTokens: number;
  outputTokens: number;
  /** usage が取れず上限値で計上したか（監視用） */
  estimated: boolean;
}

/**
 * usage を円に換算する。
 *
 * - 価格表に無いモデルは `UnknownModelPriceError`
 * - `usage.missing` または トークン数が取れない場合は **ceiling（上限値）で計上**
 *   （過小計上で上限をすり抜けるのを防ぐ）
 * - キャッシュ単価が未定義のモデルは**割引を見込まない**（入力単価をそのまま使う）
 */
export function estimateCostJpy(
  model: string,
  usage: LlmUsage,
  ceiling: UsageCeiling,
  env: Record<string, string | undefined> = {}
): CostBreakdown {
  const price = MODEL_PRICES_USD[model];
  if (!price) throw new UnknownModelPriceError(model);

  const jpyPerUsd = resolveJpyPerUsd(env);

  const hasInput =
    typeof usage.inputTokens === 'number' && usage.inputTokens >= 0;
  const hasOutput =
    typeof usage.outputTokens === 'number' && usage.outputTokens >= 0;
  const estimated = usage.missing === true || !hasInput || !hasOutput;

  const inputTokens = estimated
    ? ceiling.maxInputTokens
    : (usage.inputTokens as number);
  const outputTokens = estimated
    ? ceiling.maxOutputTokens
    : (usage.outputTokens as number);

  // 入力の内訳（音声・キャッシュ）は実測が取れているときだけ考慮する。
  // 推定計上のときは全量を通常単価（＝高い方）で見る。
  const audioTokens = estimated
    ? 0
    : clampInner(usage.audioInputTokens, inputTokens);
  const cachedTokens = estimated
    ? 0
    : clampInner(usage.cachedInputTokens, inputTokens - audioTokens);
  const plainTokens = Math.max(0, inputTokens - audioTokens - cachedTokens);

  const audioPrice = price.audioInputPerMillion ?? price.inputPerMillion;
  // キャッシュ単価が不明なら通常単価（割引を見込まない＝安全側）。
  const cachedPrice = price.cachedInputPerMillion ?? price.inputPerMillion;

  const usd =
    (plainTokens * price.inputPerMillion +
      audioTokens * audioPrice +
      cachedTokens * cachedPrice +
      outputTokens * price.outputPerMillion) /
    1_000_000;

  return {
    model,
    // 円未満を切り捨てると小口が積み上がらず上限が効かないので、丸めずに保持する。
    costJpy: usd * jpyPerUsd,
    inputTokens,
    outputTokens,
    estimated,
  };
}

/** 内訳トークンを [0, max] に収める（不正値で全体が壊れないように）。 */
function clampInner(value: number | undefined, max: number): number {
  if (typeof value !== 'number' || !Number.isFinite(value) || value <= 0)
    return 0;
  return Math.min(value, Math.max(0, max));
}

/** モデルが価格表に載っているか（呼び出し前チェック用）。 */
export function isPricedModel(model: string): boolean {
  return Object.prototype.hasOwnProperty.call(MODEL_PRICES_USD, model);
}
