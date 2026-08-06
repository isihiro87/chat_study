/**
 * 無料Bot（一問一答）の軽量プロフィール記憶（`requirements.md` R17）。
 *
 * つづもん（有料）の「全会話アーカイブ＋検索的想起」は 3,000人規模には重すぎるので、
 * 無料側は**1フィールドだけ覚える**方式にする:
 *   - 覚えるのは呼び名・好きなこと・目標・メモの4つだけ（`users/{uid}.aiProfile`）
 *   - 抽出は**最安モデルで N ターンに1回だけ**（1日40回上限なので最大2回/日/人）
 *   - 実行は**返信後**なので、ユーザーの待ち時間は増えない
 *   - 個人情報は `aiProfileCore.validateProfilePatch` が**パッチ全体を拒否**する
 *
 * コスト: 1回あたり約 ¥0.09（入力1,500tok＋出力120tok）。20ターンに1回なので
 * 1ターンあたり約 ¥0.004。
 */

import type { AiChatTurn } from './userDocTypes';
import {
  FREE_PROFILE_EXTRACT_PROMPT,
  applyProfilePatch,
  isSameProfilePatch,
  parseProfileExtraction,
  validateProfilePatch,
  type AiProfile,
} from './aiProfileCore';

/** 何ターンに1回抽出するか。 */
export const PROFILE_EXTRACT_EVERY = 20;

/** 抽出に使う出力トークン上限（JSON 1個ぶん）。 */
const EXTRACT_MAX_OUTPUT_TOKENS = 200;

/** 素材にする直近ターン数（多すぎると入力コストが増える）。 */
const EXTRACT_HISTORY_TURNS = 10;

/**
 * 今回の応答で抽出を走らせるか。
 * 当日の通算回数が `PROFILE_EXTRACT_EVERY` の倍数のときだけ true。
 */
export function shouldExtractProfile(newCount: number): boolean {
  if (!Number.isFinite(newCount) || newCount <= 0) return false;
  return newCount % PROFILE_EXTRACT_EVERY === 0;
}

/** 会話履歴を抽出の素材テキストにする（純粋関数）。 */
export function buildExtractionInput(history: AiChatTurn[]): string {
  const recent = history.slice(-EXTRACT_HISTORY_TURNS * 2);
  return recent
    .map((t) => `${t.role === 'user' ? '生徒' : '先生'}: ${t.text}`)
    .join('\n');
}

/**
 * 会話からプロフィールを抽出して保存する。
 *
 * **例外は投げない**（返信は済んでいるのでログのみ）。
 * 変化が無ければ書き込まない（無駄な write を作らない）。
 */
export async function extractAndSaveProfile(opts: {
  uid: string;
  history: AiChatTurn[];
  existing: AiProfile | undefined;
  now: Date;
  env?: Record<string, string | undefined>;
}): Promise<void> {
  const env = opts.env ?? (process.env as Record<string, string | undefined>);
  const material = buildExtractionInput(opts.history);
  if (!material.trim()) return;

  try {
    const { generateText, createOneShotGrant } = await import('./llmProvider');
    const { parseLimits, freeGateAllowance } = await import('./aiCostCore');
    const limits = parseLimits(env);

    // classify 用途＝free では常に最安モデル。出力上限だけ絞る。
    // これは「予算ゲートを通過した会話ターンの後始末」なので、ゲート判定は
    // 再実行せず上限値だけ受け取る（判定は `aiChat` が1回だけ行う）。
    const gate = freeGateAllowance('classify', limits);
    const grant = createOneShotGrant({
      maxInputTokens: Math.min(gate.maxInputTokens, 8_000),
      maxOutputTokens: EXTRACT_MAX_OUTPUT_TOKENS,
    });

    const result = await generateText({
      purpose: 'classify',
      grant,
      system: FREE_PROFILE_EXTRACT_PROMPT,
      history: [],
      userText: material,
      env,
      // createOneShotGrant は tier:'paid' の通行証なので、モデルを最安に固定する。
      modelOverride: 'gemini-3.1-flash-lite',
    });

    // 抽出のコストも計上する（見えない支出を作らない）。
    try {
      const { recordCost } = await import('./aiCostStore');
      await recordCost({
        purpose: 'classify',
        cost: result.cost,
        now: opts.now,
        tier: 'free',
      });
    } catch (error) {
      console.error('[aiFreeProfile] cost record failed:', error);
    }

    const raw = parseProfileExtraction(result.text);
    if (!raw) return;

    // 個人情報・長さ超過はここで**パッチ全体を拒否**する。
    const validated = validateProfilePatch(raw);
    if (!validated.ok) {
      console.log(`[aiFreeProfile] patch rejected: ${validated.reason}`);
      return;
    }
    if (isSameProfilePatch(opts.existing, validated.value)) return;

    const merged = applyProfilePatch(opts.existing, validated.value);
    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore } = await import('firebase-admin/firestore');
    if (getApps().length === 0) initializeApp();
    await getFirestore()
      .doc(`users/${opts.uid}`)
      .set({ aiProfile: merged }, { merge: true });
    console.log(
      `[aiFreeProfile] profile updated uid=${opts.uid.slice(0, 16)}… keys=${Object.keys(
        validated.value
      ).join(',')}`
    );
  } catch (error) {
    console.error('[aiFreeProfile] extraction failed:', error);
  }
}
