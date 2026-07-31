/**
 * OpenAI（ChatGPT）アダプタ — つづもんのメイン頭脳（2026-07-26 切替）。
 *
 * **Responses API**（`/v1/responses`）を使う。Chat Completions ではない。
 * 入出力は `llmGemini.ts` の `callGeminiAdapter` と同じ `LlmAdapterInput/Output` に
 * 揃えてあるので、`llmModelResolver` の階層を差し替えるだけで両者を行き来できる。
 *
 * ## gpt-5.6 系で実機確認した仕様（2026-07-26・本番キーで検証）
 *   - `temperature` は **400 で拒否される**（`Unsupported parameter`）。渡さない。
 *   - `reasoning.effort` の既定は思考する設定で、**推論トークンが出力枠を食う**。
 *     `classify`（出力上限32）だと推論だけで枠を使い切り、本文ゼロで失敗した。
 *     → 既定を **`none`** にする（推論トークン0・応答1〜2秒）。
 *     必要なら env `OPENAI_REASONING_EFFORT` で `low`/`medium`/`high` に上げられる。
 *   - `tools` は `strict` を明示しないと **自動で `strict: true`** になる。
 *     `TOOL_DEFINITIONS` は任意プロパティ主体（`required` を持たない）ので、
 *     将来 strict の検証が厳しくなったときに壊れないよう **明示的に false** を渡す。
 *   - `output` は配列で、`reasoning` / `message` / `function_call` が混在する。
 *     テキストは `message.content[].output_text` を連結して取る。
 *   - 出力上限で切れたときは `status: "incomplete"` ＋
 *     `incomplete_details.reason === "max_output_tokens"`。
 *   - usage は `input_tokens` / `output_tokens` / `input_tokens_details.cached_tokens`。
 *
 * ## 音声は扱えない
 * このモデル群は Responses API で音声入力を受け取れない。音声つきの呼び出しは
 * `llmProvider.generateText` の側で **Gemini（音声対応・最安）へ振り替える**ので、
 * ここには来ない。
 *
 * ## プライバシー
 * `store: false` を必ず送る。中学生の会話を OpenAI 側に残さない
 * （既定は `store: true` で30日保持される）。
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

const RESPONSES_ENDPOINT = 'https://api.openai.com/v1/responses';

/**
 * 推論の既定。**`none`（推論しない）**。
 * 上げると出力トークン（＝課金・レイテンシ）が増え、短い出力上限の用途が壊れるので、
 * 上げるときは `resolveMaxOutputTokens` の値も一緒に見直すこと。
 */
const DEFAULT_REASONING_EFFORT = 'none';
const ALLOWED_EFFORTS = new Set(['none', 'low', 'medium', 'high']);

/**
 * プロンプトキャッシュのルーティングキー。
 * つづもんの system プロンプトは「不変ブロック → 可変ブロック」の順に組んであり
 * （`aiChatPrompt.ts`）、同じキーを付けると先頭一致のキャッシュが効きやすくなる。
 */
const PROMPT_CACHE_KEY = 'tsudumon-chat-v1';

interface OpenaiOutputItem {
  type?: string;
  /** type === 'message' */
  content?: Array<{ type?: string; text?: string }>;
  /** type === 'function_call' */
  name?: string;
  arguments?: string;
}

interface OpenaiResponse {
  status?: string;
  incomplete_details?: { reason?: string } | null;
  output?: OpenaiOutputItem[];
  usage?: {
    input_tokens?: number;
    output_tokens?: number;
    input_tokens_details?: { cached_tokens?: number };
  };
}

/** 用途別キー → 共通キーの順で解決する（Gemini 側と同じ流儀）。 */
function resolveApiKey(env: Record<string, string | undefined>): string {
  const key = env.OPENAI_API_KEY_LINE_AI || env.OPENAI_API_KEY || '';
  if (!key) throw new LlmProviderNotConfiguredError('openai');
  return key;
}

/** env の推論設定を読む。未設定・不正値なら `none`（＝安い・速い）へ倒す。 */
function resolveEffort(env: Record<string, string | undefined>): string {
  const raw = (env.OPENAI_REASONING_EFFORT ?? '').trim().toLowerCase();
  return ALLOWED_EFFORTS.has(raw) ? raw : DEFAULT_REASONING_EFFORT;
}

/**
 * リクエストボディを組み立てる（副作用なし＝テストから直接検証できる）。
 *
 * 履歴の `role: 'model'`（Gemini 語彙）は `assistant` に読み替える。
 */
export function buildOpenaiRequestBody(
  input: LlmAdapterInput,
  effort: string
): Record<string, unknown> {
  const userContent: Array<Record<string, unknown>> = [];
  // メディア → テキストの順（Gemini 側と同じ並び）。
  for (const m of input.media ?? []) {
    userContent.push({
      type: 'input_image',
      image_url: `data:${m.mimeType};base64,${m.data}`,
    });
  }
  userContent.push({ type: 'input_text', text: input.userText });

  const body: Record<string, unknown> = {
    model: input.model,
    instructions: input.system,
    input: [
      ...input.history.map((turn) =>
        turn.role === 'model'
          ? {
              role: 'assistant',
              content: [{ type: 'output_text', text: turn.text }],
            }
          : {
              role: 'user',
              content: [{ type: 'input_text', text: turn.text }],
            }
      ),
      { role: 'user', content: userContent },
    ],
    max_output_tokens: input.maxOutputTokens,
    reasoning: { effort },
    // 生徒の会話を OpenAI 側に残さない。
    store: false,
    prompt_cache_key: PROMPT_CACHE_KEY,
  };

  if (input.tools && input.tools.length > 0) {
    body.tools = input.tools.map((t) => ({
      type: 'function',
      name: t.name,
      description: t.description,
      parameters: t.parameters,
      // 任意プロパティ主体の定義なので strict は使わない（明示しないと true になる）。
      strict: false,
    }));
  }

  return body;
}

export async function callOpenaiAdapter(
  input: LlmAdapterInput
): Promise<LlmAdapterOutput> {
  const apiKey = resolveApiKey(input.env);
  const body = buildOpenaiRequestBody(input, resolveEffort(input.env));

  const controller = new AbortController();
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, input.timeoutMs);

  try {
    const res = await fetch(RESPONSES_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      throw new LlmHttpError(res.status, errText.slice(0, 300));
    }
    const data = (await res.json()) as OpenaiResponse;
    return parseOpenaiResponse(data);
  } catch (error) {
    if (timedOut) throw new LlmTimeoutError(input.timeoutMs);
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * レスポンスからテキスト・ツール呼び出し・usage を取り出す。
 * どちらも取れなければ throw（Gemini 側の「空応答は失敗」と揃える）。
 *
 * `arguments` は **JSON 文字列**で返るので、ここでパースして
 * `LlmToolCall.args`（オブジェクト）に揃える。壊れた JSON はそのツール呼び出しを
 * 捨てる（実行側 `aiTools` の検証まで壊れた値を運ばない）。
 */
export function parseOpenaiResponse(data: OpenaiResponse): LlmAdapterOutput {
  const items = data.output ?? [];

  const text = items
    .filter((i) => i.type === 'message')
    .flatMap((i) => i.content ?? [])
    .filter((c) => c.type === 'output_text')
    .map((c) => c.text ?? '')
    .join('')
    .trim();

  const toolCalls: LlmToolCall[] = [];
  for (const item of items) {
    if (item.type !== 'function_call') continue;
    const name = item.name;
    if (typeof name !== 'string' || name.length === 0) continue;
    let args: Record<string, unknown> = {};
    if (typeof item.arguments === 'string' && item.arguments.trim() !== '') {
      try {
        const parsed = JSON.parse(item.arguments) as unknown;
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
          args = parsed as Record<string, unknown>;
        }
      } catch {
        console.warn(
          `[llmOpenai] tool "${name}" returned unparsable arguments; skipping.`
        );
        continue;
      }
    }
    toolCalls.push({ name, args });
  }

  const usage = readUsage(data);
  const truncated =
    data.status === 'incomplete' &&
    data.incomplete_details?.reason === 'max_output_tokens';

  if (!text && toolCalls.length === 0) {
    throw new Error('OpenAI returned empty text');
  }

  return {
    text,
    ...(toolCalls.length > 0 ? { toolCalls } : {}),
    ...(truncated ? { truncated: true } : {}),
    usage,
  };
}

/**
 * usage を読む。取れなければ `missing: true` を立て、
 * 呼び出し側（`llmPrices.estimateCostJpy`）が**上限値で多めに計上**する。
 */
function readUsage(data: OpenaiResponse): LlmAdapterOutput['usage'] {
  const u = data.usage;
  const input = u?.input_tokens;
  const output = u?.output_tokens;
  if (typeof input !== 'number' || typeof output !== 'number') {
    return { missing: true };
  }
  const cached = u?.input_tokens_details?.cached_tokens;
  return {
    inputTokens: input,
    outputTokens: output,
    ...(typeof cached === 'number' ? { cachedInputTokens: cached } : {}),
  };
}
