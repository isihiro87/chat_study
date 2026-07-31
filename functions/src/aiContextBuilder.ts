/**
 * `users/{uid}.aiContext`（学習分析サマリ）の計算と書き込み。
 *
 * 夜間 cron `recalculateUserStatuses`（JST 02:00）に相乗りして、
 * **つづもん課金者だけ**を対象に1日1回だけ計算する。
 *
 * ## なぜ cron で事前計算するか
 * 会話のたびに `answers` を集計すると、1ターンあたり数百 read になり
 * read 規律（CLAUDE.md）に反する。事前に1フィールドへ畳んでおけば、
 * 会話時は**取得済みの user doc から読むだけ＝追加 read ゼロ**で済む。
 *
 * ## read 規律
 * - 対象は課金者のみ（無料3,000人ぶんは計算しない＝cron のコストを増やさない）
 * - `answers` は「uid＋直近30日＋`limit()`」の1クエリ（`monthlyReport` と同形）
 * - 既存の複合インデックス (uid ASC, answeredAt DESC) を使う（新規作成不要）
 */

import { buildAiContext, ANALYSIS_WINDOW_DAYS } from './aiContextCore';
import type { AnswerLite } from './monthlyReportCore';
import { evaluateTsudumonAccess } from './tsudumonCore';

/** 1ユーザーあたりの answers 取得上限（read 規律）。 */
export const ANSWERS_QUERY_LIMIT = 500;

/** つづもんの権利が有効か（体験を含む）。cron の対象判定に使う。 */
export function isPaidUser(
  userData: Record<string, unknown>,
  nowMs: number
): boolean {
  try {
    return evaluateTsudumonAccess(userData.tsudumon, null, nowMs) === 'ok';
  } catch {
    return false;
  }
}

/**
 * 1ユーザーぶんの `aiContext` を計算して書き込む。
 * 失敗しても throw しない（cron 全体を止めない）。
 *
 * @returns 書き込めたら true
 */
export async function computeAndWriteAiContext(opts: {
  db: FirebaseFirestore.Firestore;
  uid: string;
  userData: Record<string, unknown>;
  now: Date;
}): Promise<boolean> {
  const { db, uid, userData, now } = opts;
  try {
    const { Timestamp } = await import('firebase-admin/firestore');
    const sinceMs = now.getTime() - ANALYSIS_WINDOW_DAYS * 24 * 3600 * 1000;

    const snap = await db
      .collection('answers')
      .where('uid', '==', uid)
      .where('answeredAt', '>=', Timestamp.fromMillis(sinceMs))
      .orderBy('answeredAt', 'desc')
      .limit(ANSWERS_QUERY_LIMIT)
      .get();

    const answers: AnswerLite[] = snap.docs.map((d) => {
      const v = d.data();
      const ts = v.answeredAt as { toDate?: () => Date } | undefined;
      return {
        questionId: typeof v.questionId === 'string' ? v.questionId : '',
        choice: typeof v.choice === 'number' ? v.choice : -1,
        topic: typeof v.topic === 'string' ? v.topic : null,
        subject: typeof v.subject === 'string' ? v.subject : null,
        isCorrect: v.isCorrect === true,
        answeredAt: ts?.toDate ? ts.toDate() : new Date(sinceMs),
      };
    });

    const context = buildAiContext({
      answers,
      workbookStatsRaw: userData.workbookStats,
      now,
    });

    await db.doc(`users/${uid}`).set({ aiContext: context }, { merge: true });
    return true;
  } catch (error) {
    console.error(`[aiContextBuilder] failed for ${uid}:`, error);
    return false;
  }
}

/** cron から呼ぶ集計結果（ログ用）。 */
export interface AiContextRunStats {
  targets: number;
  written: number;
  failed: number;
  answersRead: number;
}

/**
 * 課金ユーザーのリストに対して `aiContext` を順に計算する。
 *
 * 直列に回す（並列にすると Firestore のスループットを一気に使い、
 * 同時刻に走る他の cron に影響しうるため）。課金者は当面少数なので十分。
 */
export async function runAiContextBatch(opts: {
  db: FirebaseFirestore.Firestore;
  targets: Array<{ uid: string; userData: Record<string, unknown> }>;
  now: Date;
}): Promise<AiContextRunStats> {
  const stats: AiContextRunStats = {
    targets: opts.targets.length,
    written: 0,
    failed: 0,
    answersRead: 0,
  };
  for (const t of opts.targets) {
    const ok = await computeAndWriteAiContext({
      db: opts.db,
      uid: t.uid,
      userData: t.userData,
      now: opts.now,
    });
    if (ok) stats.written++;
    else stats.failed++;
  }
  return stats;
}
