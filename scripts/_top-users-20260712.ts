/**
 * 使い捨て分析: ヘビーユーザー / 高正答率ユーザーの抽出（2026-07-12）
 *
 * read 規律: users を stats.totalAnswered 降順で上位300件のみ取得（select で
 * 必要フィールドに絞る）。全件スキャンなし。answers コレクションは読まない。
 */
import { applicationDefault, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const ADMIN_LINE_USER_IDS = new Set([
  'U429b1d951fc7236c9e8e85e5ca96b910',
  'U732828c7b975479c97a104c5cbc45b7a',
]);

const LIMIT = 300;
const MIN_ANSWERED_FOR_ACCURACY = 100;

initializeApp({
  credential: applicationDefault(),
  projectId: 'chatstudy-63477',
});
const db = getFirestore();

interface Row {
  uid: string;
  lineUserId: string;
  nickname: string;
  grade: string;
  subject: string;
  status: string;
  answered: number;
  correct: number;
  acc: number;
  lastAnsweredAt: string;
}

function fmtDate(v: unknown): string {
  const d =
    v && typeof (v as { toDate?: () => Date }).toDate === 'function'
      ? (v as { toDate: () => Date }).toDate()
      : null;
  return d ? d.toISOString().slice(0, 10) : '-';
}

async function main() {
  const snap = await db
    .collection('users')
    .orderBy('stats.totalAnswered', 'desc')
    .limit(LIMIT)
    .select(
      'lineUserId',
      'nickname',
      'grade',
      'subject',
      'status',
      'stats',
      'lastAnsweredAt'
    )
    .get();
  console.log(`[top-users] fetched=${snap.size} (limit=${LIMIT})`);

  const rows: Row[] = [];
  for (const doc of snap.docs) {
    const d = doc.data();
    const lineUserId = String(d.lineUserId ?? '');
    if (ADMIN_LINE_USER_IDS.has(lineUserId)) continue;
    const answered = Number(d.stats?.totalAnswered ?? 0);
    const correct = Number(d.stats?.totalCorrect ?? 0);
    rows.push({
      uid: doc.id,
      lineUserId,
      nickname: String(d.nickname ?? ''),
      grade: String(d.grade ?? '-'),
      subject: String(d.subject ?? '-'),
      status: String(d.status ?? '-'),
      answered,
      correct,
      acc: answered > 0 ? (correct / answered) * 100 : 0,
      lastAnsweredAt: fmtDate(d.lastAnsweredAt),
    });
  }

  const print = (r: Row, i: number) =>
    console.log(
      `${String(i + 1).padStart(2)}. ${r.answered}問 正答率${r.acc.toFixed(1)}% ` +
        `${r.grade}/${r.subject} status=${r.status} 最終回答=${r.lastAnsweredAt} ` +
        `nick=${r.nickname || '(なし)'} ${r.lineUserId || r.uid}`
    );

  console.log('\n===== 回答数 上位20（ヘビーユーザー） =====');
  rows.slice(0, 20).forEach(print);

  console.log(
    `\n===== 正答率 上位20（${MIN_ANSWERED_FOR_ACCURACY}問以上・上位${LIMIT}母集団内） =====`
  );
  rows
    .filter((r) => r.answered >= MIN_ANSWERED_FOR_ACCURACY)
    .sort((a, b) => b.acc - a.acc)
    .slice(0, 20)
    .forEach(print);

  const eligible = rows.filter((r) => r.answered >= MIN_ANSWERED_FOR_ACCURACY);
  console.log(
    `\n[参考] ${MIN_ANSWERED_FOR_ACCURACY}問以上の該当者=${eligible.length}人 / ` +
      `上位300の回答数レンジ=${rows[rows.length - 1]?.answered}〜${rows[0]?.answered}問`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
