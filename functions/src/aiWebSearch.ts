/**
 * つづもんAIの Web検索（Google 検索連携）。
 *
 * ## いつ使うか
 * **教材に無いことを聞かれたときだけ**。歴史の学習内容は参考書（教材接地）で答えるのが
 * 正しく、検索に頼るとかえって不正確になる。想定は「最近のニュース」「人物の細かい情報」
 * 「学校行事や一般常識の確認」など、教材が守備範囲にしていないもの。
 *
 * ## 中学生向けサービスとしての安全策
 * - **検索するかどうかはAIが判断するが、実行するのはコード側**（`searchWeb`）。
 * - 検索専用の指示で「中学生向けに・短く・事実だけ」を強制し、そのまま生徒に出さず
 *   本体のAIが噛み砕いて答える（二段構え）。
 * - クエリは 100 文字までに丸め、個人情報を含む検索を避けるよう指示する。
 * - 失敗・タイムアウトしても会話は止めない（「調べられなかった」と正直に返す）。
 *
 * ## コスト
 * 呼ばれたときだけ 1 回だけ Gemini を追加で叩く（grounding つき）。
 * 有料ティア専用の経路（`aiPaidChat`）からのみ実行される。
 */

/** 検索クエリの上限。長文をそのまま投げない。 */
const QUERY_MAX = 100;
/** 検索の待ち時間の上限。返事が遅くなるくらいなら諦める。 */
const TIMEOUT_MS = 12000;

export interface WebSearchResult {
  ok: boolean;
  /** AIに渡す要約（中学生向け・短く） */
  summary: string;
  /** 参照したページのタイトル（あれば） */
  sources: string[];
}

function buildSearchSystem(now: Date): string {
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const today = `${jst.getUTCFullYear()}年${jst.getUTCMonth() + 1}月${jst.getUTCDate()}日`;
  return SEARCH_SYSTEM_BASE.replace('__TODAY__', today);
}

const SEARCH_SYSTEM_BASE = [
  'あなたは中学生向け学習サービスの調査アシスタントです。',
  '**今日は __TODAY__ です。**「最近」「今年」はこの日付を基準に考えてください。',
  '**必ず Google 検索の結果にもとづいて答えてください。**自分の記憶だけで答えてはいけません。',
  'Google検索の結果をもとに、質問に**事実だけ**で短く答えてください。',
  '- 3文以内。中学生が読んで分かる言葉にする',
  '- 分からない・情報が見つからないときは、正直に「見つからなかった」と書く',
  '- 推測で埋めない。数字や年号は確実なものだけ',
  '- 出会い系・アダルト・暴力・自傷など、中学生に不適切な話題は答えず「答えられない」と返す',
].join('\n');

/**
 * Google検索連携つきで Gemini を1回だけ呼ぶ。
 * 生の検索結果ではなく「短い要約」を返し、生徒への言い方は呼び出し側のAIに任せる。
 */
export async function searchWeb(
  rawQuery: string,
  env: Record<string, string | undefined> = process.env as Record<
    string,
    string | undefined
  >
): Promise<WebSearchResult> {
  const query = String(rawQuery ?? '')
    .trim()
    .slice(0, QUERY_MAX);
  if (!query) {
    return { ok: false, summary: '検索する言葉が空でした。', sources: [] };
  }
  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('[aiWebSearch] GEMINI_API_KEY not configured');
    return { ok: false, summary: 'いま検索を使えませんでした。', sources: [] };
  }
  // 検索は軽いモデルで足りる（要約するだけ）。会話本体のモデルとは分ける。
  const model = env.GEMINI_SEARCH_MODEL || 'gemini-3.1-flash-lite';

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(
        model
      )}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: buildSearchSystem(new Date()) }],
          },
          contents: [{ role: 'user', parts: [{ text: query }] }],
          // Google 検索連携（grounding）。これが無いと単なる生成になる。
          tools: [{ google_search: {} }],
          generationConfig: { maxOutputTokens: 300, temperature: 0.2 },
        }),
      }
    );
    if (!res.ok) {
      console.error('[aiWebSearch] http error:', res.status, await res.text());
      return {
        ok: false,
        summary: 'うまく調べられませんでした。',
        sources: [],
      };
    }
    const data = (await res.json()) as Record<string, unknown>;
    const candidate = (data.candidates as Array<Record<string, unknown>>)?.[0];
    const parts =
      ((candidate?.content as Record<string, unknown>)?.parts as Array<{
        text?: string;
      }>) ?? [];
    const summary = parts
      .map((p) => p.text ?? '')
      .join('')
      .trim();

    // 参照元のタイトル（あれば）。URLは生徒に出さないのでタイトルだけ拾う。
    const grounding = candidate?.groundingMetadata as
      | Record<string, unknown>
      | undefined;
    const chunks =
      (grounding?.groundingChunks as Array<Record<string, unknown>>) ?? [];
    const sources = chunks
      .map((c) => (c.web as { title?: string } | undefined)?.title ?? '')
      .filter(Boolean)
      .slice(0, 3);

    if (!summary) {
      return {
        ok: false,
        summary: '答えが見つかりませんでした。',
        sources: [],
      };
    }
    // ⚠️ 検索が実際に効いたかは groundingMetadata の有無で判断する。
    // 参照元ゼロは「検索できず、モデルの記憶で書いた」状態。これを
    // 「調べた結果」として生徒に見せると、古い情報を事実として伝えてしまう
    // （2026-07-26 実機: 「最近のニュース」に2024〜2025年の話を返した）。
    if (!grounding || chunks.length === 0) {
      console.warn(
        `[aiWebSearch] no grounding for query="${query.slice(0, 40)}" ` +
          `(model=${model}. 検索ツール名がモデルに合っていない可能性)`
      );
      return {
        ok: false,
        summary: 'いまインターネットで確認できませんでした。',
        sources: [],
      };
    }
    console.log(
      `[aiWebSearch] ok query="${query.slice(0, 40)}" sources=${sources.length}`
    );
    return { ok: true, summary, sources };
  } catch (error) {
    console.error('[aiWebSearch] failed:', error);
    return { ok: false, summary: 'うまく調べられませんでした。', sources: [] };
  } finally {
    clearTimeout(timer);
  }
}

/** 検索結果をAIに渡す文脈。生徒への言い方は本体のAIに任せる。 */
export function buildSearchResultContext(
  query: string,
  result: WebSearchResult
): string {
  if (!result.ok) {
    return (
      `\n\n# 検索の結果\n「${query}」を調べようとしましたが、${result.summary}\n` +
      `**調べられなかったことを正直に伝えて**、代わりにできること（教材で近い単元を見る等）を提案してください。`
    );
  }
  return (
    `\n\n# 検索でわかったこと（「${query}」）\n` +
    `${result.summary}\n` +
    (result.sources.length > 0 ? `参照: ${result.sources.join(' / ')}\n` : '') +
    `- この内容をもとに、**中学生に分かる言葉で短く**答えてください。\n` +
    `- ここに書かれていないことは足さない（推測で補わない）。\n` +
    `- URLは貼らない。「調べてみたよ」と前置きしてから話す。\n` +
    `- 歴史の学習内容そのものは、検索よりも教材（参考書）の説明を優先する。`
  );
}
