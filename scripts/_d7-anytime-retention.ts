/**
 * 「登録して1問でも解いたユーザーのうち、初回回答から7日後以降にも
 *  一度でも回答したことのある人の割合」を算出する一回限りスクリプト。
 * （つづもんLPの実績表記用・2026-07-16）
 *
 * 注意: answers 全件スキャン（report-retention.ts と同等の read 量）。
 * 実行は必要時のみ。結果は docs/operations/log-snapshots/ に保存する。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/_d7-anytime-retention.ts
 */

import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const FIREBASE_PROJECT_ID = 'chatstudy-63477';

const ADMIN_LINE_USER_IDS = new Set<string>([
  'U429b1d951fc7236c9e8e85e5ca96b910',
  'U732828c7b975479c97a104c5cbc45b7a',
]);

const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

function getJstDate(date: Date): string {
  const jst = new Date(date.getTime() + JST_OFFSET_MS);
  return jst.toISOString().slice(0, 10);
}

function diffDays(a: string, b: string): number {
  return Math.floor(
    (new Date(`${b}T00:00:00Z`).getTime() -
      new Date(`${a}T00:00:00Z`).getTime()) /
      86400000
  );
}

async function main() {
  initializeApp({
    credential: applicationDefault(),
    projectId: FIREBASE_PROJECT_ID,
  });
  const db = getFirestore();

  const usersSnap = await db.collection('users').get();
  const adminUids = new Set<string>();
  for (const doc of usersSnap.docs) {
    const u = doc.data() as Record<string, unknown>;
    const lineUserId = typeof u.lineUserId === 'string' ? u.lineUserId : null;
    if (lineUserId && ADMIN_LINE_USER_IDS.has(lineUserId))
      adminUids.add(doc.id);
  }
  console.log(`users=${usersSnap.size} adminUids=${adminUids.size}`);

  const answersSnap = await db.collection('answers').get();
  console.log(`answers=${answersSnap.size}`);

  const userDates = new Map<string, Set<string>>();
  for (const doc of answersSnap.docs) {
    const data = doc.data() as Record<string, unknown>;
    const uid = typeof data.uid === 'string' ? data.uid : null;
    if (!uid || adminUids.has(uid)) continue;
    const ts = data.answeredAt as { toDate?: () => Date } | undefined;
    const date = ts && typeof ts.toDate === 'function' ? ts.toDate() : null;
    if (!date) continue;
    if (!userDates.has(uid)) userDates.set(uid, new Set());
    userDates.get(uid)!.add(getJstDate(date));
  }

  const todayJst = getJstDate(new Date());
  let answered = 0;
  let observable = 0; // 初回回答から7日以上経過（判定可能）
  let hit = 0; // 初回+7日以降のどこかで1回でも回答

  for (const dates of userDates.values()) {
    if (dates.size === 0) continue;
    answered++;
    const sorted = Array.from(dates).sort();
    const first = sorted[0];
    const last = sorted[sorted.length - 1];
    if (diffDays(first, todayJst) < 7) continue; // まだ7日たっていない人は分母から除外
    observable++;
    if (diffDays(first, last) >= 7) hit++;
  }

  console.log('');
  console.log(`集計時点(JST): ${todayJst}`);
  console.log(`1問でも解いたユーザー: ${answered}`);
  console.log(`うち初回回答から7日以上経過（判定対象）: ${observable}`);
  console.log(`初回から7日後以降にも回答あり: ${hit}`);
  console.log(
    `割合: ${((hit / observable) * 100).toFixed(1)}% (${hit}/${observable})`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
