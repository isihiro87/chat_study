/**
 * つづもん「登録者限定 1日先行公開」の案内を、一問一答の公式LINE（@824cebif）から送る。
 * 2026-08-04 の一度きり。前日 8/3 の「おしらせとおわび」（scripts/send-aug-notice.ts）で
 * 「明日8月4日、登録者だけにひと足先にお知らせするね」と予告した、その本編にあたる。
 *
 * 誘導先は**つづもんの公式LINE（@215uijik）の友だち追加**。
 * 友だち追加すると、つづもん側の follow あいさつ（buildTsudumonFollowText）が
 * 「まず中身を見る」「体験を始める」を届けるので、この本文では入口だけ示す。
 *
 * 重複防止は `users/{uid}.tsudumonLaunchNoticeSentAt`。中断しても再実行すれば残りだけ送る。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/send-tsudumon-launch-notice.ts                  # dry-run（既定）
 *   npx tsx scripts/send-tsudumon-launch-notice.ts --admin --send   # 管理人1名に確認送信
 *   npx tsx scripts/send-tsudumon-launch-notice.ts --send           # 本送信
 */
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { initializeApp, applicationDefault, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const requireCjs = createRequire(import.meta.url);
const { evaluateTsudumonAccess } = requireCjs(
  '../functions/src/tsudumonCore.ts'
) as typeof import('../functions/src/tsudumonCore');

const PROJECT = 'chatstudy-63477';
const SEND = process.argv.includes('--send');
const ADMIN_ONLY = process.argv.includes('--admin');
const LIMIT = (() => {
  const i = process.argv.indexOf('--limit');
  if (i === -1) return Infinity;
  const n = Number(process.argv[i + 1]);
  return Number.isFinite(n) && n > 0 ? n : Infinity;
})();

const ADMIN_PRIMARY = 'U429b1d951fc7236c9e8e85e5ca96b910';
const ADMIN_SECONDARY = 'U732828c7b975479c97a104c5cbc45b7a';
/** 2人目の管理人にだけ確認送信する（`--admin` は1人目）。 */
const ADMIN2_ONLY = process.argv.includes('--admin2');
/**
 * ⚠️ 管理人は**一斉送信から除外しない**（ユーザー判断 2026-08-04）。
 * 実際のユーザーと同じタイミング・同じ内容で受け取るほうが不具合に気づきやすい。
 * 以前は除外していたため、**2人目の管理人に 8/3 の告知が1通も届いていなかった**。
 * 確認送信（--admin / --admin2）でも送信済みフラグを立てるので二重送信にはならない。
 */

const PAGE_SIZE = 500;
const MULTICAST_CHUNK = 150;
/** 送信済みフラグ。send-aug-notice.ts の augNoticeSentAt とは別物。 */
const FLAG = 'tsudumonLaunchNoticeSentAt';

/** つづもん公式LINE（@215uijik）の友だち追加リンク。 */
const TSUDUMON_LINE_URL = 'https://lin.ee/XGIhuYi';
/** 登録もログインも要らずに読める無料の1節（律令国家と奈良時代）。 */
const TSUDUMON_FREE_UNIT_URL = 'https://tsudumon.jp/ref/04/';

/**
 * 本文（ユーザー確定 2026-08-04）。
 *
 * 文言の方針:
 *   - 「まず中身を見る（登録不要）」を友だち追加リンクより**前**に置く。
 *     いきなり別アカウントの追加を求めると重いため（つづもん側の follow 文面と同じ並び）。
 *   - **有料であることを先に言ってから無料体験**の順にする。逆にすると
 *     「無料だと思ったら有料だった」になる（docs/message-copy-guidelines.md §4）。
 *   - 無料期間は「8月15日まで」だが、**実装上その条件は「8/11 までに開始した人」**
 *     （tsudumonCore の TSUDUMON_TRIAL_CAMPAIGN_ENTRY_END_MS / _UNTIL_MS）。
 *     条件を丸ごと書かない代わりに「**いま始めれば**」を必ず残すこと。
 *     これを外すと 8/12 以降に始めた人（体験72時間）に対して嘘になる。
 *   - 「このLINEは今までどおり全部無料」を必ず入れる。前日におわびを送った直後なので
 *     「有料化するの？」という不安を先回りして潰す。
 *   - 料金・体験にふれる段落だけ敬体（保護者が読む前提・ガイドライン §2）。絵文字は2個。
 */
const LAUNCH_NOTICE_TEXT = [
  '📣 きのう予告した「つづもん」、今日から先行公開！',
  '',
  '中学歴史ぜんぶ（全19単元）を、参考書と問題集がセットで',
  'スマホで進められる教材だよ。',
  '「今日はここをやろう」をAIが決めて届けてくれるから、',
  'なにから手をつけるか迷わない。',
  '',
  '▼ まずは中身を見てみる（無料）',
  TSUDUMON_FREE_UNIT_URL,
  '登録もログインもいらないよ。',
  '',
  'つづもんは、この公式LINEとは別の有料の教材です。',
  'ただ、いま始めれば8月15日まで無料でためせます。',
  'クレジットカードの登録もいらないから、',
  '勝手にお金が発生することは一切ないよ。安心してね。',
  '',
  '▼ はじめかた',
  '下から「つづもん」の公式LINEを友だち追加してね。',
  '追加すると、すぐに始め方が届くよ。',
  TSUDUMON_LINE_URL,
  '',
  'このLINE（チャットでスタディ）は今までどおり全部無料。',
  '1問配信もそのまま続くよ🙌',
].join('\n');

function loadEnv(): void {
  const dir = dirname(fileURLToPath(import.meta.url));
  try {
    const raw = readFileSync(resolve(dir, '../functions/.env'), 'utf8');
    for (const line of raw.split(/\r?\n/)) {
      const t = line.trim();
      if (!t || t.startsWith('#')) continue;
      const eq = t.indexOf('=');
      if (eq < 0) continue;
      const k = t.slice(0, eq).trim();
      let v = t.slice(eq + 1).trim();
      if (
        (v.startsWith('"') && v.endsWith('"')) ||
        (v.startsWith("'") && v.endsWith("'"))
      ) {
        v = v.slice(1, -1);
      }
      if (!(k in process.env)) process.env[k] = v;
    }
  } catch {
    /* .env が無くても環境変数で渡せる */
  }
}

function jstMonthKey(now: Date): string {
  return new Date(now.getTime() + 9 * 60 * 60 * 1000).toISOString().slice(0, 7);
}

async function recordStats(
  db: FirebaseFirestore.Firestore,
  now: Date,
  count: number
): Promise<void> {
  const monthKey = jstMonthKey(now);
  await db.doc(`deliveryStats/${monthKey}`).set(
    {
      yearMonth: monthKey,
      totalPushCount: FieldValue.increment(count),
      pushCountByType: { tsudumonIntroNudge: FieldValue.increment(count) },
      lastUpdatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
}

async function main(): Promise<void> {
  loadEnv();
  const now = new Date();
  const token = process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
  if (SEND && !token) {
    throw new Error('LINE_MESSAGING_CHANNEL_ACCESS_TOKEN 未設定');
  }
  if (getApps().length === 0) {
    initializeApp({ credential: applicationDefault(), projectId: PROJECT });
  }
  const db = getFirestore();

  console.log(
    `\n=== つづもん 登録者限定 先行公開の案内 ${SEND ? '【送信】' : '(DRY RUN)'}${
      ADMIN_ONLY || ADMIN2_ONLY ? '【管理人のみ】' : ''
    } ===`
  );

  if (ADMIN_ONLY || ADMIN2_ONLY) {
    const to = ADMIN2_ONLY ? ADMIN_SECONDARY : ADMIN_PRIMARY;
    console.log(`\n送信対象: 管理人1名（${to.slice(0, 10)}…）`);
    console.log('\n--- 送信する本文 ---');
    console.log(LAUNCH_NOTICE_TEXT);
    if (!SEND) {
      console.log(
        '\n▶ DRY RUN。実送信は --admin --send で再実行してください。'
      );
      return;
    }
    const res = await fetch('https://api.line.me/v2/bot/message/push', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to,
        messages: [{ type: 'text', text: LAUNCH_NOTICE_TEXT }],
      }),
    });
    if (!res.ok) {
      console.error(
        `\n❌ 送信失敗 ${res.status} ${res.headers.get('x-line-request-id')} ${await res.text()}`
      );
      process.exit(1);
    }
    await recordStats(db, now, 1);
    // 管理人も一斉送信の対象に含めるので、ここでフラグを立てて二重送信を防ぐ。
    const who = await db
      .collection('users')
      .where('lineUserId', '==', to)
      .limit(1)
      .get();
    if (!who.empty) {
      await who.docs[0].ref.set(
        { [FLAG]: FieldValue.serverTimestamp() },
        { merge: true }
      );
    }
    console.log(
      `\n✅ 管理人へ送信しました（1通）。${FLAG} を立てたので一斉送信では重複しません。`
    );
    return;
  }

  // ── 一斉送信 ────────────────────────────────────────────────
  const targets: { uid: string; lineUserId: string }[] = [];
  const skipped = {
    alreadySent: 0,
    noLineId: 0,
    blockedOrPaused: 0,
    tsudumonAccess: 0,
  };
  let scanned = 0;
  let cursor: FirebaseFirestore.QueryDocumentSnapshot | null = null;

  for (;;) {
    let q = db
      .collection('users')
      .orderBy('__name__')
      .limit(PAGE_SIZE) as FirebaseFirestore.Query;
    if (cursor) q = q.startAfter(cursor);
    const snap = await q.get();
    if (snap.empty) break;
    scanned += snap.size;
    for (const doc of snap.docs) {
      const x = doc.data() as Record<string, unknown>;
      if (x[FLAG] !== undefined) {
        skipped.alreadySent++;
        continue;
      }
      const lineUserId = typeof x.lineUserId === 'string' ? x.lineUserId : '';
      if (!lineUserId) {
        skipped.noLineId++;
        continue;
      }
      if (x.blocked === true || x.deliveryPaused === true) {
        skipped.blockedOrPaused++;
        continue;
      }
      // すでにつづもんを使っている人に「先行公開のお知らせ」は不要。
      if (evaluateTsudumonAccess(x.tsudumon, null, now.getTime()) === 'ok') {
        skipped.tsudumonAccess++;
        continue;
      }
      targets.push({ uid: doc.id, lineUserId });
    }
    cursor = snap.docs[snap.docs.length - 1];
    if (snap.size < PAGE_SIZE) break;
  }

  console.log(`\n走査: ${scanned}件（read=${scanned}）`);
  console.log(
    `除外: 送信済み ${skipped.alreadySent} / lineUserIdなし ${skipped.noLineId} / ` +
      `ブロック・おやすみ ${skipped.blockedOrPaused} / つづもん利用権あり ${skipped.tsudumonAccess}`
  );

  const sendList = targets.slice(0, LIMIT);
  console.log(
    `\n送信対象: ${sendList.length}名（配信枠 ${sendList.length}通）`
  );

  if (!SEND) {
    console.log('\n--- 送信予定の本文 ---');
    console.log(LAUNCH_NOTICE_TEXT);
    console.log('\n▶ DRY RUN。実送信は --send を付けて再実行してください。');
    return;
  }

  let sent = 0;
  const fails: string[] = [];
  for (let i = 0; i < sendList.length; i += MULTICAST_CHUNK) {
    const chunk = sendList.slice(i, i + MULTICAST_CHUNK);
    try {
      const res = await fetch('https://api.line.me/v2/bot/message/multicast', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: chunk.map((t) => t.lineUserId),
          messages: [{ type: 'text', text: LAUNCH_NOTICE_TEXT }],
        }),
      });
      if (!res.ok) {
        fails.push(`chunk@${i} ${res.status} ${await res.text()}`);
        continue;
      }
    } catch (e) {
      fails.push(`chunk@${i} ${(e as Error).message}`);
      continue;
    }
    const batch = db.batch();
    for (const t of chunk) {
      batch.set(
        db.doc(`users/${t.uid}`),
        { [FLAG]: FieldValue.serverTimestamp() },
        { merge: true }
      );
    }
    await batch.commit();
    sent += chunk.length;
    console.log(`  送信 ${sent}/${sendList.length}`);
  }

  if (sent > 0) await recordStats(db, now, sent);
  console.log(
    `\n✅ 送信完了: ok=${sent} / fail(chunk)=${fails.length} / 対象${sendList.length}`
  );
  fails.slice(0, 10).forEach((f) => console.log('  ' + f));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
