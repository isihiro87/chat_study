/**
 * 用途 × ティア × デグレード段階 → 使用するモデルの解決（純粋ロジック）。
 *
 * 高額請求防止の要点（`requirements.md` §3-b）:
 *   - `free` は purpose に関わらず**常に最安モデル**（無料3,000人が上位モデルに触れない）
 *   - 解決結果が価格表に無ければ**この時点で throw**（コスト不明のまま呼ばせない）
 *   - env の指定が壊れていたら既定へフォールバック（無制限・未知モデルへ倒さない）
 *
 * env での上書き: `LLM_MODEL_{PURPOSE}`（例 `LLM_MODEL_COUNSEL=gemini:gemini-3.6-flash`）
 * 設定手順は docs/operations/ai-cost-guardrails.md §3。
 */

import { isPricedModel, UnknownModelPriceError } from './llmPrices';
import type { AiTier } from './aiTier';

/** LLM の用途。モデル階層とトークン上限をこれで決める。 */
export type LlmPurpose =
  /** 安全分類・意図分類・単元解決・要約（最安） */
  | 'classify'
  /** 通常の学習質問・雑談 */
  | 'chat'
  /** 学習分析の説明文 */
  | 'analysis'
  /** 学習プラン生成 */
  | 'plan'
  /** 悩み相談 */
  | 'counsel'
  /** 出力の自己検証（最安） */
  | 'verify';

export type LlmProviderName = 'gemini' | 'openai';

/**
 * 予算消費に応じたデグレード段階。
 * 0 = 通常 / 1 = 70%超（上位用途を1段下げる） / 2 = 90%超（全用途最安）
 */
export type DegradeLevel = 0 | 1 | 2;

export interface ResolvedModel {
  provider: LlmProviderName;
  model: string;
}

/**
 * 現行の既定モデル（**無料Botで稼働中**）。ここを最安の基準にする。
 * ⚠️ 一問一答（3,000人・無料）はこのまま。つづもんの切替で触ってはいけない。
 */
export const CHEAPEST_MODEL = 'gemini-3.1-flash-lite';

/**
 * つづもん（paid）のメイン頭脳を **OpenAI へ切替**（2026-07-26 ユーザー指示）。
 *
 * 用途別に混ぜる方針:
 *   - 通常の会話・分類・検証 = luna（安い。$1/$6 per 1M）
 *   - 学習分析・プラン・相談 = terra（質が要る。$2.5/$15 per 1M）
 *   - sol は使わない（標準利用で予算オーバー。1人あたり月595円の試算）
 *
 * デグレード時は **OpenAI の中で1段下げ、最終的に最安のGeminiへ落ちる**
 * （予算を超えたときに確実に安くするため）。
 */
export const OPENAI_MID_MODEL = 'gpt-5.6-luna';
export const OPENAI_UPPER_MODEL = 'gpt-5.6-terra';
/** paid の通常チャット用（中位）。 */
export const MID_MODEL = OPENAI_MID_MODEL;
/** paid の相談・プラン用（上位）。 */
export const UPPER_MODEL = OPENAI_UPPER_MODEL;

/**
 * paid の既定モデル階層（degrade 0 のとき）。
 * degrade で1段ずつ下がる（UPPER → MID → CHEAPEST）。
 */
const PAID_DEFAULT: Record<LlmPurpose, string> = {
  // 分類・検証は精度より速さと安さ。OpenAIの最安帯を使う
  classify: OPENAI_MID_MODEL,
  verify: OPENAI_MID_MODEL,
  chat: MID_MODEL,
  // 2026-08-06: analysis を UPPER → MID に変更。
  //   `terra` は `luna` のちょうど10倍（1回 ¥7.01 vs ¥0.63）。一方 analysis は
  //   **答えを既に持っている数字の読み上げ**であり、生成後に `verify` で自己検証も
  //   している（`aiPaidChat.verifyAnalysisAnswer`）。地力より検算が効く領域なので、
  //   「上位1回」より「中位で生成＋中位で検証」のほうが**5.6倍安く、質も落ちにくい**。
  //   質の劣化が見えたら env `LLM_MODEL_ANALYSIS=openai:gpt-5.6-terra` で即戻せる。
  analysis: MID_MODEL,
  // plan / counsel は上位のまま。
  //   plan は月1〜2回で長期の見通しを立てる質が要り、counsel は中学生のメンタルに
  //   関わる。どちらも回数が少なく、削る場所ではない（合わせて月 ¥60 程度）。
  plan: UPPER_MODEL,
  counsel: UPPER_MODEL,
};

/** 1段下げる（最安まで来たらそれ以上下げない）。 */
function downgrade(model: string): string {
  if (model === UPPER_MODEL) return MID_MODEL;
  // OpenAIの最安帯まで来たら、最後は最安のGeminiへ落ちる（予算超過時の逃げ場）
  if (model === MID_MODEL) return CHEAPEST_MODEL;
  return CHEAPEST_MODEL;
}

/** env キー名（`LLM_MODEL_CHAT` など）。 */
function envKey(purpose: LlmPurpose): string {
  return `LLM_MODEL_${purpose.toUpperCase()}`;
}

/**
 * `"gemini:gemini-3.6-flash"` / `"gemini-3.6-flash"` をパースする。
 * provider 省略時は gemini。壊れていれば null（呼び出し側が既定へフォールバック）。
 */
/** モデル名からプロバイダを推定する（`gpt-` で始まれば OpenAI）。 */
export function providerOfModel(model: string): LlmProviderName {
  return model.startsWith('gpt-') ? 'openai' : 'gemini';
}

export function parseModelSpec(raw: string | undefined): ResolvedModel | null {
  const spec = (raw ?? '').trim();
  if (!spec) return null;
  const idx = spec.indexOf(':');
  if (idx < 0) return { provider: providerOfModel(spec), model: spec };
  const provider = spec.slice(0, idx).trim().toLowerCase();
  const model = spec.slice(idx + 1).trim();
  if (!model) return null;
  if (provider !== 'gemini' && provider !== 'openai') return null;
  return { provider, model };
}

/**
 * モデルを解決する。
 *
 * 解決順:
 *   1. `free` → 常に最安（env も見ない。無料層に上位モデルを開放しないため）
 *   2. env `LLM_MODEL_{PURPOSE}`（degrade があれば適用対象外＝env は「上限」ではなく「選択」なので
 *      degrade 時は既定階層に戻して確実に安くする）
 *   3. paid の既定階層 → degrade を適用
 *
 * @throws {UnknownModelPriceError} 解決結果が価格表に無い場合
 */
export function resolveModel(
  purpose: LlmPurpose,
  tier: AiTier,
  degrade: DegradeLevel,
  env: Record<string, string | undefined> = {}
): ResolvedModel {
  const resolved = resolveModelRaw(purpose, tier, degrade, env);
  // 価格表チェックは provider を問わず通す
  // （モデルを足し忘れて「コスト不明のまま課金」になるのを防ぐ）。
  if (!isPricedModel(resolved.model)) {
    throw new UnknownModelPriceError(resolved.model);
  }
  return resolved;
}

/**
 * `free` で唯一許す env オプトイン。
 *
 * 悩み相談（`counsel`）のときだけ、無料Botでも1段上のモデルを使えるようにする。
 * **既定は未設定＝従来どおり最安**なので、設定しない限り 3,000人が上位モデルに
 * 触れることはない（`requirements.md` R16 / C3）。
 * 価格表に無いモデルが入っていたら最安へ倒す（会話を落とさない）。
 */
export const FREE_COUNSEL_MODEL_ENV = 'LLM_MODEL_FREE_COUNSEL';

function resolveModelRaw(
  purpose: LlmPurpose,
  tier: AiTier,
  degrade: DegradeLevel,
  env: Record<string, string | undefined>
): ResolvedModel {
  // 1. free は最安が既定。唯一の例外は「悩み相談だけ env で1段上げる」オプトイン。
  if (tier !== 'paid') {
    if (purpose === 'counsel') {
      const fromEnv = parseModelSpec(env[FREE_COUNSEL_MODEL_ENV]);
      // 価格表に無いモデルは無視する（未知モデルで throw させず最安へ倒す）。
      if (fromEnv && isPricedModel(fromEnv.model)) return fromEnv;
    }
    return { provider: 'gemini', model: CHEAPEST_MODEL };
  }

  // 2. degrade が無いときだけ env の選択を尊重する。
  //    degrade 中に env の上位モデルが効いてしまうと「安くする」目的を達せない。
  if (degrade === 0) {
    const fromEnv = parseModelSpec(env[envKey(purpose)]);
    if (fromEnv) return fromEnv;
  }

  // 3. 既定階層 ＋ degrade。
  let model = PAID_DEFAULT[purpose] ?? CHEAPEST_MODEL;
  if (degrade >= 2) {
    model = CHEAPEST_MODEL;
  } else if (degrade === 1) {
    model = downgrade(model);
  }
  // provider はモデル名から決める（`gpt-*` は OpenAI）。
  // ここを 'gemini' 固定にしていると、OpenAIモデルをGeminiへ投げて必ず失敗する。
  return { provider: providerOfModel(model), model };
}

/**
 * 用途別の出力トークン上限（`paid`）。LINE で読める長さも考慮する。
 *
 * ⚠️ **出力はコストの主因**。gpt-5.6-luna は 入力$1 / **出力$6**（キャッシュ入力$0.1）で、
 * 出力は入力の60倍高い。実測でも1メッセージ約1円の大半が出力ぶんだった（2026-07-27）。
 * chat を 800 → 600 に下げたのはこのため。中学生が読む長さとしても、これで足りる。
 */
const PAID_MAX_OUTPUT: Record<LlmPurpose, number> = {
  classify: 32,
  verify: 200,
  chat: 600,
  analysis: 1000,
  plan: 1200,
  counsel: 1200,
};

/**
 * 「くわしく教えて」と頼まれたときの chat の上限。
 *
 * ふだんは短く（600）、**本人が長い説明を求めたときだけ**伸ばす。
 * 一律に長くすると全員ぶんのコストが上がるが、こうすれば
 * **必要な子にだけ**払える（ユーザー判断 2026-07-27）。
 */
export const PAID_CHAT_DETAILED_MAX_OUTPUT = 1000;

/**
 * 「長めに答えてほしい」意思表示か。
 *
 * 拾いすぎない語だけにする——「なんで？」のような短い問いまで長文にすると、
 * 節約の意味がなくなる。ここに無い言い回しでも、生徒が「もっと」と言えば
 * 次のターンで伸びるので実害は小さい。
 */
export function wantsDetailedAnswer(text: string | undefined): boolean {
  if (!text) return false;
  return /(くわしく|詳しく|くわしい|詳しい|もっと教え|もっと詳|長めに|ちゃんと説明|しっかり説明|流れを説明|順を追って|まとめて教え|全部教え|例をたくさん|練習問題をたくさん)/.test(
    text
  );
}

/**
 * `free` の基本出力上限。分類・検証などの短い用途と、**paid の degrade 2 の
 * clamp 値**として使う（ここを動かすと paid の最終防衛線が緩むので変えない）。
 */
export const FREE_MAX_OUTPUT_TOKENS = 500;

/**
 * `free` の会話（chat / counsel）の出力上限。
 *
 * 500 だと説明の途中で `MAX_TOKENS` に当たり、**文の途中で切れた返信**がそのまま
 * 届いていた（`requirements.md` R14）。読める長さを保ちつつ切れにくい 700 にする。
 * 増える出力コストは1ターン約 ¥0.02（最安モデル）。
 */
export const FREE_CHAT_MAX_OUTPUT_TOKENS = 700;

/**
 * 出力トークン上限を返す。
 * `free` は会話 700 / それ以外 500。`paid` は用途別で、degrade 2 では 500 まで絞る。
 *
 * @param detailed 生徒が「くわしく教えて」と頼んだか（chat のときだけ効く）。
 *   予算がひっ迫している（degrade >= 1）ときは**伸ばさない**——
 *   節約が目的の状態で例外を作ると、上限の意味がなくなる。
 */
export function resolveMaxOutputTokens(
  purpose: LlmPurpose,
  tier: AiTier,
  degrade: DegradeLevel,
  detailed = false
): number {
  if (tier !== 'paid') {
    return purpose === 'chat' || purpose === 'counsel'
      ? FREE_CHAT_MAX_OUTPUT_TOKENS
      : FREE_MAX_OUTPUT_TOKENS;
  }
  const base =
    purpose === 'chat' && detailed && degrade === 0
      ? PAID_CHAT_DETAILED_MAX_OUTPUT
      : (PAID_MAX_OUTPUT[purpose] ?? FREE_MAX_OUTPUT_TOKENS);
  if (degrade >= 2) return Math.min(base, FREE_MAX_OUTPUT_TOKENS);
  return base;
}

/** 直近ウィンドウ（会話ターン数）。degrade で縮む。 */
export const PAID_HISTORY_TURNS: Record<DegradeLevel, number> = {
  0: 30,
  1: 20,
  2: 8,
};

/**
 * 無料Botの履歴ターン数。
 *
 * 2026-07: 6 → 10 に拡大。3→6 にした経緯（`aiChatCore.ts`）と同じ「AI が自分の
 * 直前の発言を忘れて釈明する」事故が 6 でも起きるため。プロンプト分割
 * （`aiChatPrompt` の話題別ブロック）で削った入力の範囲で買っている。
 * 2026-08-06: 10 → 20。理由と費用は `aiChatCore.FREE_HISTORY_TURNS` を参照。
 * ⚠️ `aiChatCore.FREE_HISTORY_TURNS` と同値に保つこと。
 */
export const FREE_HISTORY_TURNS = 20;

/**
 * 直近ウィンドウのターン数を返す。
 *
 * 既定を 30 にしているのは実価格による制約（docs/operations/ai-cost-guardrails.md §5）:
 * 中位モデルで入力30,000トークンだと1ターン約¥1.7＝月350円では約200ターンしか話せない。
 * 過去の会話は「全件アーカイブ＋検索的想起」で補うため、ウィンドウを無理に広げない。
 * コンテキストキャッシュの実測後にこの既定値を見直す。
 */
export function resolveHistoryTurns(
  tier: AiTier,
  degrade: DegradeLevel
): number {
  if (tier !== 'paid') return FREE_HISTORY_TURNS;
  return PAID_HISTORY_TURNS[degrade] ?? FREE_HISTORY_TURNS;
}
