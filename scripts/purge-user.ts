/**
 * 指定ユーザーに関する全 Firestore データを完全に削除する。
 *
 * 対象:
 *   - users/{uid} ドキュメント
 *   - answers where uid == {uid}
 *   - premiumApplications where lineUserId == {lineUserId}（uid が "line:" prefix 付きの場合のみ）
 *   - premiumFunnelEvents where uid == {uid}
 *
 * reset-user-onboarding.ts との違い:
 *   reset-user-onboarding.ts は users doc のオンボーディング系フィールドだけを削除し、
 *   answers / stats などの学習履歴は保持する。本スクリプトは「ユーザーの存在自体を消す」用途。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/purge-user.ts --uid line:Uxxxx --dry-run
 *   npx tsx scripts/purge-user.ts --uid line:Uxxxx --yes
 *
 * --yes を付けないと live モードでも実行を拒否する（誤爆防止）。
 */

const FIREBASE_PROJECT_ID = 'chatstudy-63477';

interface CliArgs {
  uid: string | null;
  dryRun: boolean;
  confirmed: boolean;
}

function parseArgs(argv: string[]): CliArgs {
  let uid: string | null = null;
  let dryRun = false;
  let confirmed = false;
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--uid') {
      uid = argv[++i] ?? null;
    } else if (a === '--dry-run') {
      dryRun = true;
    } else if (a === '--yes') {
      confirmed = true;
    }
  }
  return { uid, dryRun, confirmed };
}

async function main() {
  const { uid, dryRun, confirmed } = parseArgs(process.argv.slice(2));
  if (!uid) {
    console.error(
      'Usage: npx tsx scripts/purge-user.ts --uid line:Uxxxx [--dry-run] [--yes]'
    );
    process.exit(1);
  }
  if (!dryRun && !confirmed) {
    console.error(
      '[purge-user] live mode requires --yes (destructive operation)'
    );
    process.exit(1);
  }

  const { initializeApp, applicationDefault, getApps } = await import(
    'firebase-admin/app'
  );
  const { getFirestore } = await import('firebase-admin/firestore');
  if (getApps().length === 0) {
    initializeApp({
      credential: applicationDefault(),
      projectId: FIREBASE_PROJECT_ID,
    });
  }
  const db = getFirestore();

  const lineUserId = uid.startsWith('line:') ? uid.slice('line:'.length) : '';

  console.log(
    `[purge-user] mode=${dryRun ? 'dry-run' : 'live'} uid=${uid} lineUserId=${
      lineUserId || '(none)'
    }`
  );

  // 1. users/{uid}
  const userRef = db.doc(`users/${uid}`);
  const userSnap = await userRef.get();
  const userExists = userSnap.exists;
  console.log(
    `[purge-user] users/${uid}: ${userExists ? 'EXISTS — will delete' : 'not found'}`
  );

  // 2. answers where uid == {uid}
  const answersSnap = await db
    .collection('answers')
    .where('uid', '==', uid)
    .get();
  console.log(
    `[purge-user] answers where uid == ${uid}: ${answersSnap.size} doc(s)`
  );

  // 3. premiumApplications where lineUserId == {lineUserId}
  let premiumAppsSnap = { size: 0, docs: [] as FirebaseFirestore.QueryDocumentSnapshot[] };
  if (lineUserId) {
    const snap = await db
      .collection('premiumApplications')
      .where('lineUserId', '==', lineUserId)
      .get();
    premiumAppsSnap = { size: snap.size, docs: snap.docs };
  }
  console.log(
    `[purge-user] premiumApplications where lineUserId == ${lineUserId || '(skipped)'}: ${premiumAppsSnap.size} doc(s)`
  );

  // 4. premiumFunnelEvents where uid == {uid}
  const funnelSnap = await db
    .collection('premiumFunnelEvents')
    .where('uid', '==', uid)
    .get();
  console.log(
    `[purge-user] premiumFunnelEvents where uid == ${uid}: ${funnelSnap.size} doc(s)`
  );

  if (dryRun) {
    console.log('[purge-user] dry-run mode, no writes performed');
    return;
  }

  // 削除実行（バッチで分割。Firestore は1バッチ最大500ドキュメント）
  const BATCH_LIMIT = 400;
  async function batchDelete(
    label: string,
    refs: FirebaseFirestore.DocumentReference[]
  ) {
    let deleted = 0;
    for (let i = 0; i < refs.length; i += BATCH_LIMIT) {
      const chunk = refs.slice(i, i + BATCH_LIMIT);
      const batch = db.batch();
      for (const r of chunk) batch.delete(r);
      await batch.commit();
      deleted += chunk.length;
    }
    console.log(`[purge-user] deleted ${label}: ${deleted}`);
  }

  if (userExists) {
    await userRef.delete();
    console.log(`[purge-user] deleted users/${uid}`);
  }
  await batchDelete(
    'answers',
    answersSnap.docs.map((d) => d.ref)
  );
  if (lineUserId) {
    await batchDelete(
      'premiumApplications',
      premiumAppsSnap.docs.map((d) => d.ref)
    );
  }
  await batchDelete(
    'premiumFunnelEvents',
    funnelSnap.docs.map((d) => d.ref)
  );

  console.log('[purge-user] done');
}

main().catch((err) => {
  console.error('[purge-user] failed:', err);
  process.exit(1);
});
