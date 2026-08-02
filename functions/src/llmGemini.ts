/**
 * Gemini アダプタ（`llmProvider` から呼ばれる）。
 *
 * 現行 `aiChat.callGemini` の実装を移植したもの。振る舞いは同じで、
 * 追加点は次の2つ:
 *   - **usage（実トークン）を返す** … コスト計上に使う（`usageMetadata`）
 *   - **function calling（tools）に対応** … つづもんの paid パイプライン用
 *
 * API キーは用途で分離できる（`docs/operations/ai-cost-guardrails.md §1-2`）:
 *   GEMINI_API_KEY_LINE_AI があればそれを使い、無ければ GEMINI_API_KEY にフォールバック。
 *
 * ⚠️ **キーを作り直すときは、必ず課金が有効なプロジェクトで作ること。**
 * Gemini は無料枠だと送信内容が Google の製品改善（＝モデルの学習）に使われる。
 * 有料枠なら使われない。つまり課金の有無がそのままデータの扱いを切り替える。
 * つづもんは `lp/privacy.html` §4 と `web/parents/index.html` §04 で
 * 「学習に使わせていない」と**公開の場で断言している**ので、無料枠のキーに
 * 差し替えると、ページを1文字も変えないまま記述が虚偽になる。
 * 現行の課金先は `gen-lang-client-0677055253`。詳細は
 * `docs/operations/ai-cost-guardrails.md §1-0b`。
 */

import type {
  LlmAdapterInput,
  LlmAdapterOutput,
  LlmToolCall,
} from './llmProvider';
import {
  LlmProviderNotConfiguredError,
  LlmTimeoutError,
  LlmHttpError,
} from './llmProvider';

const GENERATIVE_LANGUAGE_ENDPOINT =
  'https://generativelanguage.googleapis.com/v1beta/models';

/** 温度。現行 `aiChat` と同値（口調の自然さを保つ）。 */
const TEMPERATURE = 0.7;

interface GeminiPart {
  text?: string;
  functionCall?: { name?: string; args?: Record<string, unknown> };
}

interface GeminiResponse {
  candidates?: Array<{
    content?: { parts?: GeminiPart[] };
    /** `MAX_TOKENS` なら出力上限で打ち切られている（＝文の途中で切れている）。 */
    finishReason?: string;
  }>;
  usageMetadata?: {
    promptTokenCount?: number;
    candidatesTokenCount?: number;
    cachedContentTokenCount?: number;
  };
}

/** 用途別キー → 共通キーの順で解決する。 */
function resolveApiKey(env: Record<string, string | undefined>): string {
  const key = env.GEMINI_API_KEY_LINE_AI || env.GEMINI_API_KEY || '';
  if (!key) throw new LlmProviderNotConfiguredError('gemini');
  return key;
}

export async function callGeminiAdapter(
  input: LlmAdapterInput
): Promise<LlmAdapterOutput> {
  const apiKey = resolveApiKey(input.env);

  // 最後の user ターン: メディア（あれば）→ テキストの順に parts を並べる
  // （現行 aiChat.callGemini と同じ順序）。
  const userParts: Array<Record<string, unknown>> = [];
  for (const m of input.media ?? []) {
    userParts.push({ inlineData: { mimeType: m.mimeType, data: m.data } });
  }
  userParts.push({ text: input.userText });

  const body: Record<string, unknown> = {
    system_instruction: { parts: [{ text: input.system }] },
    contents: [
      ...input.history.map((turn) => ({
        role: turn.role,
        parts: [{ text: turn.text }],
      })),
      { role: 'user', parts: userParts },
    ],
    generationConfig: {
      maxOutputTokens: input.maxOutputTokens,
      temperature: TEMPERATURE,
    },
  };

  if (input.tools && input.tools.length > 0) {
    body.tools = [
      {
        functionDeclarations: input.tools.map((t) => ({
          name: t.name,
          description: t.description,
          parameters: t.parameters,
        })),
      },
    ];
  }

  const url =
    `${GENERATIVE_LANGUAGE_ENDPOINT}/` +
    `${encodeURIComponent(input.model)}:generateContent?key=${apiKey}`;

  const controller = new AbortController();
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, input.timeoutMs);

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      throw new LlmHttpError(res.status, errText.slice(0, 300));
    }
    const data = (await res.json()) as GeminiResponse;
    return parseGeminiResponse(data);
  } catch (error) {
    if (timedOut) throw new LlmTimeoutError(input.timeoutMs);
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * レスポンスからテキスト・ツール呼び出し・usage を取り出す。
 * テキストもツール呼び出しも無い場合は throw（現行の「空応答は失敗」を踏襲）。
 *
 * `finishReason === 'MAX_TOKENS'` は **出力上限で打ち切られた**合図なので
 * `truncated: true` を立てる。呼び出し側が末尾を整えられるようにするためで、
 * これを見ない経路（つづもんの paid パイプライン）の挙動は変わらない。
 */
export function parseGeminiResponse(data: GeminiResponse): LlmAdapterOutput {
  const candidate = data.candidates?.[0];
  const parts = candidate?.content?.parts ?? [];
  const text = parts
    .map((p) => p.text ?? '')
    .join('')
    .trim();

  const toolCalls: LlmToolCall[] = [];
  for (const p of parts) {
    const name = p.functionCall?.name;
    if (typeof name === 'string' && name.length > 0) {
      toolCalls.push({ name, args: p.functionCall?.args ?? {} });
    }
  }

  const usage = readUsage(data);

  if (!text && toolCalls.length === 0) {
    throw new Error('Gemini returned empty text');
  }

  return {
    text,
    ...(toolCalls.length > 0 ? { toolCalls } : {}),
    ...(candidate?.finishReason === 'MAX_TOKENS' ? { truncated: true } : {}),
    usage,
  };
}

/**
 * usageMetadata を読む。取れなければ `missing: true` を立て、
 * 呼び出し側（`llmPrices.estimateCostJpy`）が**上限値で多めに計上**する。
 */
function readUsage(data: GeminiResponse): LlmAdapterOutput['usage'] {
  const u = data.usageMetadata;
  const input = u?.promptTokenCount;
  const output = u?.candidatesTokenCount;
  if (typeof input !== 'number' || typeof output !== 'number') {
    return { missing: true };
  }
  return {
    inputTokens: input,
    outputTokens: output,
    ...(typeof u?.cachedContentTokenCount === 'number'
      ? { cachedInputTokens: u.cachedContentTokenCount }
      : {}),
  };
}
