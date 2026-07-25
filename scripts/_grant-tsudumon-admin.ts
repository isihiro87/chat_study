/**
 * 一回きり: 管理用LINEアカウントへ つづもん ライセンスを付与する。
 *
 * manage-tsudumon.ts issue と activateTsudumonLicense と同じフィールド形で、
 * 1. tsudumonLicenses/{code} を発行（plan=set / years=3 / 管理用）
 * 2. 管理者 uid（line:Uxxx）ごとに users/{uid}.tsudumon を書き込み
 * を行う。有料登録ユーザーと同一のデータ形なので、教材ゲート・
 * tsudumonEntitlement・AI採点・スタ先生チャットが同じ動きになる。
 *
 * 実行: npx tsx scripts/_grant-tsudumon-admin.ts          # dry-run
 *       npx tsx scripts/_grant-tsudumon-admin.ts --apply  # 実書き込み
 */
import { randomBytes } from 'node:crypto';
import { createRequire } from 'node:module';

const requireCjs = createRequire(import.meta.url);
const { generateTsudumonCode } = requireCjs(
  '../functions/src/tsudumonCore'
) as typeof import('../functions/src/tsudumonCore');

const FIREBASE_PROJECT_ID = 'chatstudy-63477';
const ADMIN_LINE_USER_IDS = [
  'U429b1d951fc7236c9e8e85e5ca96b910',
  'U732828c7b975479c97a104c5cbc45b7a',
];
const PLAN = 'set' as const;
const YEARS = 3;
const APPLY = process.argv.includes('--apply');

async function main() {
  const { initializeApp, applicationDefault, getApps } =
    await import('firebase-admin/app');
  if (getApps().length === 0) {
    initializeApp({
      credential: applicationDefault(),
      projectId: FIREBASE_PROJECT_ID,
    });
  }
  const { getFirestore, Timestamp } = await import('firebase-admin/firestore');
  const db = getFirestore();

  // 既に有効な tsudumon を持つ管理者がいないか先に確認
  for (const lineId of ADMIN_LINE_USER_IDS) {
    const snap = await db.doc(`users/line:${lineId}`).get();
    const t = snap.exists ? (snap.data() as any).tsudumon : null;
    console.log(
      `users/line:${lineId} … ${snap.exists ? 'あり' : 'なし'} / tsudumon=${
        t ? JSON.stringify({ plan: t.plan, code: t.code }) : 'なし'
      }`
    );
  }

  // 一意コード生成
  const randomInt = (max: number) => randomBytes(1)[0] % max;
  let code = '';
  for (let i = 0; i < 20; i++) {
    code = generateTsudumonCode(randomInt);
    if (!(await db.doc(`tsudumonLicenses/${code}`).get()).exists) break;
    code = '';
  }
  if (!code) throw new Error('コード生成が20回衝突しました');

  const nowMs = Date.now();
  const d = new Date(nowMs);
  d.setFullYear(d.getFullYear() + YEARS);
  const expiresMs = d.getTime();
  const uids = ADMIN_LINE_USER_IDS.map((id) => `line:${id}`);

  console.log(`\n発行コード: ${code} (plan=${PLAN}/${YEARS}年)`);
  console.log(`有効期限: ${new Date(expiresMs).toISOString()}`);
  console.log(`付与先: ${uids.join(', ')}`);

  if (!APPLY) {
    console.log('\n--apply が無いので書き込みしません（dry-run）');
    return;
  }

  await db.doc(`tsudumonLicenses/${code}`).set({
    plan: PLAN,
    years: YEARS,
    buyerName: '管理用（運営）',
    orderId: 'ADMIN',
    status: 'active',
    maxActivations: uids.length,
    activatedUids: uids,
    firstActivatedAt: Timestamp.fromMillis(nowMs),
    expiresAt: Timestamp.fromMillis(expiresMs),
    lastActivatedAt: Timestamp.fromMillis(nowMs),
    storagePath: null,
    downloadUrl: null,
    dlCount: 0,
    dlLimit: 0, // PDF納品なし（Web教材のみ）
    createdAt: Timestamp.now(),
  });
  for (const uid of uids) {
    await db.doc(`users/${uid}`).set(
      {
        tsudumon: {
          code,
          plan: PLAN,
          years: YEARS,
          activatedAt: Timestamp.fromMillis(nowMs),
          expiresAt: Timestamp.fromMillis(expiresMs),
        },
      },
      { merge: true }
    );
    console.log(`users/${uid}.tsudumon 書き込み完了`);
  }
  console.log(
    '\n完了。取り消すときは users/{uid} の tsudumon フィールド削除＋'
  );
  console.log(`npx tsx scripts/manage-tsudumon.ts revoke --code ${code}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
