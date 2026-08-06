/**
 * 2026-08-03 限定のおしらせ（7月末に配信枠を使いきって問題を届けられなかったことの
 * おわび ＋ 翌 8/4 につづもんを公式LINE登録者だけへ先行公開することの予告）を、
 * **回答直後の reply でまだ受け取っていない人だけ**へ push する。
 *
 * 要求（ユーザー指示 2026-08-03）: このおしらせ全体で **配信枠は1人あたり最大1通**。
 * これは `users/{uid}.augNoticeSentAt` の1フラグを
 *   経路1 `lineWebhook.handleAnswerPostback`（reply 同梱・0通）
 *   経路2 このスクリプト（単独 push・1通）
 * の両方が見て・両方が立てることで保証している。すでにフラグが立っている人は
 * ここでは必ず除外されるので、二重には送られない。
 *
 * 除外条件:
 *   - `augNoticeSentAt` あり（reply で既に届いた／このスクリプトで送信済み）
 *   - `lineUserId` なし
 *   - `blocked === true` / `deliveryPaused === true`（shouldSkipCronPush 相当）
 *   - つづもんの利用権が有効（すでに使っている人に「あした先行公開」は無意味）
 *   - 管理者アカウント（テスト送信は --limit で別途行う）
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/send-aug-notice.ts                 # dry-run（既定・送信しない）
 *   npx tsx scripts/send-aug-notice.ts --limit 1 --send # 先頭1名だけ実送信（動作確認）
 *   npx tsx scripts/send-aug-notice.ts --send           # 実送信
 *
 * 中断しても安全: 送信済みの人にはフラグが立つので、再実行すれば残りだけ送る。
 *
 * 設計: .steering/20260803-tsudumon-teaser-in-answer-reply/
 */
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { initializeApp, applicationDefault, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

// functions/ 配下は CJS（package.json に type:module なし）のため、ESM の
// named import だと export を解決できない。createRequire 経由で読み込む
// （scripts/eval-ai-chat.ts と同じ方式）。本文とロジックを二重管理しないための共有。
const requireCjs = createRequire(import.meta.url);
const { AUG_NOTICE_TEXT, isAugNoticeWindow } = requireCjs(
  '../functions/src/augNotice.ts'
) as typeof import('../functions/src/augNotice');
const { evaluateTsudumonAccess } = requireCjs(
  '../functions/src/tsudumonCore.ts'
) as typeof import('../functions/src/tsudumonCore');

const PROJECT = 'chatstudy-63477';
const SEND = process.argv.includes('--send');
const LIMIT = (() => {
  const i = process.argv.indexOf('--limit');
  if (i === -1) return Infinity;
  const n = Number(process.argv[i + 1]);
  return Number.isFinite(n) && n > 0 ? n : Infinity;
})();

/** 管理者アカウント（一斉送信の対象からは外す）。 */
const ADMIN_PRIMARY = 'U429b1d951fc7236c9e8e85e5ca96b910';
const ADMIN = new Set([ADMIN_PRIMARY, 'U732828c7b975479c97a104c5cbc45b7a']);

/**
 * `--admin`: 一斉送信の前に、管理人1名にだけ本番と同じ本文を送って見た目を確認する。
 * `--limit 1` では**管理人は除外対象なので別の一般ユーザーに飛んでしまう**ため、
 * 確認用には必ずこちらを使う。
 * このモードでは `augNoticeSentAt` を**書かない** — 管理人は一斉送信の対象外なので
 * 二重送信の心配がなく、フラグを立てないことで reply 経路の確認も続けてできる。
 */
const ADMIN_ONLY = process.argv.includes('--admin');

/** users の走査ページサイズ（read 規律: 全件 .get() をしない）。 */
const PAGE_SIZE = 500;
/** multicast 1回あたりの宛先数（LINE の上限は500）。 */
const MULTICAST_CHUNK = 150;

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

/** JST の年月（"YYYY-MM"）。deliveryStats のドキュメントIDに使う。 */
function jstMonthKey(now: Date): string {
  return new Date(now.getTime() + 9 * 60 * 60 * 1000).toISOString().slice(0, 7);
}

interface Target {
  uid: string;
  lineUserId: string;
}

interface Skipped {
  alreadySent: number;
  noLineId: number;
  blockedOrPaused: number;
  tsudumonAccess: number;
  admin: number;
}

async function collectTargets(
  db: FirebaseFirestore.Firestore,
  nowMs: number
): Promise<{ targets: Target[]; skipped: Skipped; scanned: number }> {
  const targets: Target[] = [];
  const skipped: Skipped = {
    alreadySent: 0,
    noLineId: 0,
    blockedOrPaused: 0,
    tsudumonAccess: 0,
    admin: 0,
  };
  let scanned = 0;
  let cursor: FirebaseFirestore.QueryDocumentSnapshot | null = null;

  // 一度きりのキャンペーンなので users 全体を1周するが、ページングして
  // 件数を必ず log に出す（CLAUDE.md「Firestore 読み取りコストの規律」§4）。
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
      if (x.augNoticeSentAt !== undefined) {
        skipped.alreadySent++;
        continue;
      }
      const lineUserId = typeof x.lineUserId === 'string' ? x.lineUserId : '';
      if (!lineUserId) {
        skipped.noLineId++;
        continue;
      }
      if (ADMIN.has(lineUserId)) {
        skipped.admin++;
        continue;
      }
      if (x.blocked === true || x.deliveryPaused === true) {
        skipped.blockedOrPaused++;
        continue;
      }
      if (evaluateTsudumonAccess(x.tsudumon, null, nowMs) === 'ok') {
        skipped.tsudumonAccess++;
        continue;
      }
      targets.push({ uid: doc.id, lineUserId });
    }

    cursor = snap.docs[snap.docs.length - 1];
    if (snap.size < PAGE_SIZE) break;
    console.log(
      `  …走査中 scanned=${scanned} 対象=${targets.length}（read=${scanned}）`
    );
  }

  return { targets, skipped, scanned };
}

async function main(): Promise<void> {
  loadEnv();
  const now = new Date();

  // 本文が「明日8月4日」なので、掲出期間を過ぎたら絶対に流さない。
  if (!isAugNoticeWindow(now)) {
    console.error(
      `\n❌ 掲出期間外（JST ${new Date(now.getTime() + 9 * 3600 * 1000)
        .toISOString()
        .slice(0, 19)
        .replace('T', ' ')}）。\n` +
        '   本文は「明日8月4日」表記なので 8/3 中にしか送れません。中止します。'
    );
    process.exit(1);
  }

  const token = process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
  if (SEND && !token) {
    throw new Error('LINE_MESSAGING_CHANNEL_ACCESS_TOKEN 未設定');
  }
  if (getApps().length === 0) {
    initializeApp({ credential: applicationDefault(), projectId: PROJECT });
  }
  const db = getFirestore();

  console.log(
    `\n=== 8月のおしらせ（おわび＋つづもん先行公開予告）${SEND ? '【送信】' : '(DRY RUN)'}${
      ADMIN_ONLY ? '【管理人のみ】' : ''
    } ===`
  );

  // 管理人1名だけへの確認送信。users の全走査もフラグ書き込みも行わない。
  if (ADMIN_ONLY) {
    console.log(`\n送信対象: 管理人1名（${ADMIN_PRIMARY.slice(0, 10)}…）`);
    console.log('\n--- 送信する本文 ---');
    console.log(AUG_NOTICE_TEXT);
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
        to: ADMIN_PRIMARY,
        messages: [{ type: 'text', text: AUG_NOTICE_TEXT }],
      }),
    });
    if (!res.ok) {
      console.error(
        `\n❌ 送信失敗 ${res.status} ${res.headers.get('x-line-request-id')} ${await res.text()}`
      );
      process.exit(1);
    }
    const monthKey = jstMonthKey(now);
    await db.doc(`deliveryStats/${monthKey}`).set(
      {
        yearMonth: monthKey,
        totalPushCount: FieldValue.increment(1),
        pushCountByType: { augNotice: FieldValue.increment(1) },
        lastUpdatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    console.log(
      '\n✅ 管理人へ送信しました（1通）。augNoticeSentAt は書いていないので、' +
        '一斉送信の対象件数は変わりません。'
    );
    return;
  }

  const { targets, skipped, scanned } = await collectTargets(db, now.getTime());

  console.log(`\n走査: ${scanned}件（read=${scanned}）`);
  console.log(`除外の内訳:`);
  console.log(
    `  すでに届いている（reply同梱ずみ / 送信済み）: ${skipped.alreadySent}`
  );
  console.log(
    `  lineUserId なし                            : ${skipped.noLineId}`
  );
  console.log(
    `  ブロック中 / 配信おやすみ中                : ${skipped.blockedOrPaused}`
  );
  console.log(
    `  つづもん利用権あり                          : ${skipped.tsudumonAccess}`
  );
  console.log(
    `  管理者                                      : ${skipped.admin}`
  );

  const sendList = targets.slice(0, LIMIT);
  console.log(
    `\n送信対象: ${sendList.length}名` +
      (LIMIT !== Infinity
        ? `（--limit ${LIMIT} で ${targets.length} 名から絞り込み）`
        : '') +
      `\n配信枠の消費見込み: ${sendList.length}通（1人1通）`
  );

  if (!SEND) {
    console.log('\n--- 送信予定の本文 ---');
    console.log(AUG_NOTICE_TEXT);
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
          messages: [{ type: 'text', text: AUG_NOTICE_TEXT }],
        }),
      });
      if (!res.ok) {
        fails.push(
          `chunk@${i} ${res.status} ${res.headers.get('x-line-request-id')} ${await res.text()}`
        );
        continue;
      }
    } catch (e) {
      fails.push(`chunk@${i} ${(e as Error).message}`);
      continue;
    }

    // 送信できたぶんだけフラグを立てる（中断しても再実行で残りだけ送れる）。
    const batch = db.batch();
    for (const t of chunk) {
      batch.set(
        db.doc(`users/${t.uid}`),
        { augNoticeSentAt: FieldValue.serverTimestamp() },
        { merge: true }
      );
    }
    await batch.commit();
    sent += chunk.length;
    console.log(`  送信 ${sent}/${sendList.length}`);
  }

  // 月次配信枠の集計へ計上（deliveryStats/{YYYY-MM}）。
  if (sent > 0) {
    const monthKey = jstMonthKey(now);
    await db.doc(`deliveryStats/${monthKey}`).set(
      {
        yearMonth: monthKey,
        totalPushCount: FieldValue.increment(sent),
        pushCountByType: { augNotice: FieldValue.increment(sent) },
        lastUpdatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  }

  console.log(
    `\n✅ 送信完了: ok=${sent} / fail(chunk)=${fails.length} / 対象${sendList.length}`
  );
  fails.slice(0, 10).forEach((f) => console.log('  ' + f));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
