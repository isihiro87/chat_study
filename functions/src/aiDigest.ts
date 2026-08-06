/**
 * セグメント要約（digest）の生成。**想起の検索インデックス**を作る。
 *
 * digests が無いと `aiRecallCore.pickRecallSegments` は何も見つけられないので、
 * 「ずっと覚えている」体験はここが動いて初めて成立する。
 *
 * ## 実行タイミング
 * `aiPaidChat` が**返信を送った後**に呼ぶ（レイテンシに乗せない）。
 * 生成は最安モデル（`classify`）＋短い出力なのでコストはごく小さい。
 *
 * ## 要約は「履歴の代わり」ではない
 * 原文は `aiThreads/{uid}/segments/{seq}` に永続保存されており、要約は
 * **どのセグメントを引き戻すかを決めるための索引**。だから多少粗くてよい。
 */

import { createOneShotGrant, generateText } from './llmProvider';
import { recordCost } from './aiCostStore';
import type { AiTier } from './aiTier';
import type { ThreadMessage } from './aiThreadStore';

/** 1回の呼び出しで作る digest の最大数（暴走ガード）。 */
export const MAX_DIGESTS_PER_RUN = 2;

/** 要約に渡す原文の最大文字数（コスト・トークンの頭を押さえる）。 */
const MAX_SOURCE_CHARS = 6_000;

const DIGEST_SYSTEM_PROMPT = `あなたは中学生向け学習サービスの会話ログを整理する担当です。
渡された「生徒とAI先生の会話」を、あとから検索して引き当てられるように要約します。

出力は次の JSON だけ。前後に説明や記号（\`\`\` など）を付けないこと。
{"summary":"...","keywords":["...","..."]}

- summary: その会話で何が話されたかを150〜250字の日本語で。事実だけを淡々と書く。
  「誰が何を相談し、どう答えたか」が分かるように。感想や評価は書かない。
- keywords: あとで検索の手がかりになる語を最大12個。次を優先して入れる。
  ①単元名・用語（例「鎌倉幕府の成立」「御成敗式目」）
  ②生活の話題（例「部活」「テスト」「進路」「友だち」「時間がない」）
  ③固有名詞（学校名・人名などの個人情報は除く）
- 個人情報（本名・住所・学校名・電話番号）は summary にも keywords にも入れない。`;

/** 要約結果。 */
export interface DigestResult {
  summary: string;
  keywords: string[];
}

/**
 * LLM 応答の JSON をパースする（純粋関数）。
 * コードフェンス付き・前後に文章があっても最初の JSON オブジェクトを拾う。
 * 失敗したら null（呼び出し側はフォールバック要約を使う）。
 */
export function parseDigestJson(raw: string): DigestResult | null {
  if (!raw) return null;
  const match = /\{[\s\S]*\}/.exec(raw);
  if (!match) return null;
  try {
    const parsed = JSON.parse(match[0]) as {
      summary?: unknown;
      keywords?: unknown;
    };
    const summary =
      typeof parsed.summary === 'string' ? parsed.summary.trim() : '';
    const keywords = Array.isArray(parsed.keywords)
      ? parsed.keywords
          .filter((k): k is string => typeof k === 'string')
          .map((k) => k.trim())
          .filter((k) => k.length > 0)
          .slice(0, 12)
      : [];
    if (!summary && keywords.length === 0) return null;
    return { summary, keywords };
  } catch {
    return null;
  }
}

/**
 * AI を使わないフォールバック要約（純粋関数）。
 * LLM が失敗しても**索引が全く無い状態を避ける**ため、生徒の発話の冒頭を
 * つないだ簡易要約を作る。粗いが「何の話だったか」の当たりは付く。
 */
export function buildFallbackDigest(messages: ThreadMessage[]): DigestResult {
  const userTexts = messages
    .filter((m) => m.role === 'user')
    .map((m) => m.text.replace(/\s+/g, ' ').trim())
    .filter((t) => t.length > 0);
  const summary = userTexts.join(' / ').slice(0, 250);
  // 手がかりになりそうな内容語を拾う（aiRecallCore の抽出と同じ発想）。
  const words =
    summary.match(/[一-龠々]{2,}|[ァ-ヴー]{2,}|[A-Za-z]{3,}/g) ?? [];
  return {
    summary: summary || '（内容なし）',
    keywords: [...new Set(words)].slice(0, 12),
  };
}

/** 原文を要約プロンプト用のテキストにする（長すぎる場合は末尾を切る）。 */
export function buildDigestSource(messages: ThreadMessage[]): string {
  const lines = messages.map(
    (m) =>
      `${m.role === 'user' ? '生徒' : 'AI先生'}: ${m.text.replace(/\s+/g, ' ')}`
  );
  const joined = lines.join('\n');
  return joined.length > MAX_SOURCE_CHARS
    ? joined.slice(0, MAX_SOURCE_CHARS)
    : joined;
}

/** 原文の概算トークン数（想起の上限判定に使う。多めに見る）。 */
export function approxTokensOf(messages: ThreadMessage[]): number {
  const chars = messages.reduce((sum, m) => sum + m.text.length, 0);
  return Math.ceil(chars / 1.8);
}

/**
 * 要約がまだ無い閉じたセグメントを見つけて digest を作る。
 *
 * `aiPaidChat` が**返信後**に呼ぶ。失敗しても throw しない
 * （次のターンで再挑戦される）。
 */
export async function generatePendingDigests(opts: {
  uid: string;
  now: Date;
  env?: Record<string, string | undefined>;
  limit?: number;
  /**
   * どのティアの支出か（既定 `'paid'`）。
   * `'free'` のときは**ユーザー予算（`users/{uid}.aiBudget`）に計上しない**
   * ——無料は回数制でユーザー予算を持たず、3,000人ぶんの transaction write を
   * 増やさないため（`aiChat.recordFreeCost` と同じ方針）。全体キャップには載る。
   */
  tier?: AiTier;
}): Promise<number> {
  const limit = Math.min(
    opts.limit ?? MAX_DIGESTS_PER_RUN,
    MAX_DIGESTS_PER_RUN
  );
  let created = 0;
  try {
    const { findSegmentsNeedingDigest, loadSegments, writeDigest } =
      await import('./aiThreadStore');
    const seqs = await findSegmentsNeedingDigest({ uid: opts.uid, limit });
    if (seqs.length === 0) return 0;

    const segments = await loadSegments({ uid: opts.uid, seqs });
    for (const seg of segments) {
      const result = await summarizeSegment({
        uid: opts.uid,
        messages: seg.messages,
        now: opts.now,
        env: opts.env,
        tier: opts.tier ?? 'paid',
      });
      await writeDigest({
        uid: opts.uid,
        seq: seg.seq,
        summary: result.summary,
        keywords: result.keywords,
        approxTokens: approxTokensOf(seg.messages),
      });
      created++;
    }
  } catch (error) {
    console.error('[aiDigest] generatePendingDigests failed:', error);
  }
  return created;
}

/** 1セグメントを要約する。LLM が失敗したらフォールバック要約を返す。 */
async function summarizeSegment(opts: {
  uid: string;
  messages: ThreadMessage[];
  now: Date;
  env?: Record<string, string | undefined>;
  tier: AiTier;
}): Promise<DigestResult> {
  // free はユーザー予算を持たないので uid を渡さない（全体キャップだけに載せる）。
  const costUid = opts.tier === 'free' ? undefined : opts.uid;
  const grant = createOneShotGrant({
    maxInputTokens: 8_000,
    maxOutputTokens: 400,
  });
  try {
    const result = await generateText({
      // 最安モデル（classify 階層）。索引作りに上位モデルは不要。
      purpose: 'classify',
      grant,
      system: DIGEST_SYSTEM_PROMPT,
      history: [],
      userText: buildDigestSource(opts.messages),
      env: opts.env,
    });
    // 索引作りのコストもユーザー予算に計上する（見えない支出を作らない）。
    await recordCost({
      uid: costUid,
      purpose: 'classify',
      cost: result.cost,
      now: opts.now,
      tier: opts.tier,
    });
    const parsed = parseDigestJson(result.text);
    if (parsed) return parsed;
    console.warn('[aiDigest] could not parse digest JSON; using fallback');
  } catch (error) {
    console.error('[aiDigest] summarize failed; using fallback:', error);
    const failedCost = (
      error as { llmCost?: Parameters<typeof recordCost>[0]['cost'] }
    ).llmCost;
    if (failedCost) {
      await recordCost({
        uid: costUid,
        purpose: 'classify',
        cost: failedCost,
        now: opts.now,
        tier: opts.tier,
      });
    }
  }
  return buildFallbackDigest(opts.messages);
}
