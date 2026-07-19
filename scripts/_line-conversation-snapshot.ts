/**
 * 公式LINE やり取りスナップショット（メッセージ一貫性分析用・2026-07-18）。
 *
 * 取得するもの:
 *   1. AI チャット直近履歴 — users/{uid}.aiChat.history（直近数ターンのみ保持される）。
 *      aiChat.dateJST が直近 N 日のユーザーに絞って取得（全 users スキャンはしない）。
 *   2. お問い合わせ — contactSubmissions 直近 50 件。
 *
 * read 規律: すべて where + limit。全件スキャンなし。
 *   - users: aiChat.dateJST 等価 × 日数ぶん（1日あたり limit 400）
 *   - contactSubmissions: orderBy(createdAt desc) limit 50
 *
 * 出力: 標準出力（呼び出し側でファイルへリダイレクトして
 *   docs/operations/log-snapshots/ に保存する）。uid は先頭6文字に短縮。
 *
 * 実行: npx tsx scripts/_line-conversation-snapshot.ts <nowMs> [days]
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const FIREBASE_PROJECT_ID = 'chatstudy-63477';
const PER_DAY_LIMIT = 400;
const CONTACT_LIMIT = 50;

function jstDate(offsetDays: number, nowMs: number): string {
  const d = new Date(nowMs + offsetDays * 24 * 3600 * 1000);
  return new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
    .format(d)
    .replace(/\//g, '-');
}

function shortUid(uid: string): string {
  // uid は "line:Uxxxxxxxx..." 形式。プレフィックスを飛ばして識別可能な6文字を取る。
  const core = uid.startsWith('line:U') ? uid.slice(6) : uid;
  return core.slice(0, 6);
}

async function main() {
  initializeApp({
    credential: applicationDefault(),
    projectId: FIREBASE_PROJECT_ID,
  });
  const db = getFirestore();
  const nowMs = Number(process.argv[2]);
  const days = Number(process.argv[3] ?? 7);
  if (!Number.isFinite(nowMs)) {
    throw new Error(
      'usage: npx tsx scripts/_line-conversation-snapshot.ts <nowMs> [days]'
    );
  }

  let totalReads = 0;

  console.log(
    `# 公式LINE やり取りスナップショット（取得日: ${jstDate(0, nowMs)}）`
  );
  console.log(``);
  console.log(
    `## 1. AI チャット直近履歴（aiChat.dateJST 直近${days}日 / uid短縮 / 各ユーザー直近数ターンのみ）`
  );
  console.log(``);

  for (let off = 0; off > -days; off--) {
    const day = jstDate(off, nowMs);
    const snap = await db
      .collection('users')
      .where('aiChat.dateJST', '==', day)
      .limit(PER_DAY_LIMIT)
      .get();
    totalReads += snap.size;
    for (const doc of snap.docs) {
      const aiChat = doc.get('aiChat') as
        | {
            history?: Array<{ role?: string; text?: string }>;
            count?: number;
          }
        | undefined;
      const history = aiChat?.history ?? [];
      if (history.length === 0) continue;
      const grade = doc.get('grade') ?? '?';
      const subject = doc.get('subject') ?? '?';
      const status = doc.get('status') ?? '?';
      console.log(
        `### ${day} uid=${shortUid(doc.id)} (${grade}/${subject}/status=${status}, 当日${aiChat?.count ?? '?'}回)`
      );
      for (const turn of history) {
        const role = turn.role === 'user' ? '生徒' : 'AI';
        const text = (turn.text ?? '').replace(/\n/g, ' ').slice(0, 500);
        console.log(`- ${role}: ${text}`);
      }
      console.log(``);
    }
  }

  console.log(
    `## 2. お問い合わせ（contactSubmissions 直近${CONTACT_LIMIT}件）`
  );
  console.log(``);
  try {
    const contacts = await db
      .collection('contactSubmissions')
      .orderBy('createdAt', 'desc')
      .limit(CONTACT_LIMIT)
      .get();
    totalReads += contacts.size;
    for (const doc of contacts.docs) {
      const d = doc.data();
      const created = d.createdAt?.toDate?.()?.toISOString?.() ?? '?';
      const bodyText = String(d.body ?? '')
        .replace(/\n/g, ' ')
        .slice(0, 500);
      console.log(
        `- ${created} [${d.category ?? '未指定'}] uid=${shortUid(String(d.uid ?? '?'))}: ${bodyText}`
      );
    }
  } catch (e) {
    console.log(`(contactSubmissions 取得失敗: ${String(e).slice(0, 200)})`);
  }

  console.log(``);
  console.log(`(total reads: ${totalReads})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
