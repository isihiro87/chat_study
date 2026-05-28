/**
 * 指定 LINE ユーザーの Firestore データを完全削除する。
 *
 * 削除対象:
 *   - users/{uid} ドキュメント本体
 *   - answers コレクションのうち uid == {uid} のドキュメント
 *   - premiumApplications コレクションのうち uid == {uid} のドキュメント
 *   - premiumFunnelEvents コレクションのうち uid == {uid} のドキュメント
 *
 * 残置:
 *   - Firebase Auth account（再ログインで紐づく）
 *   - contactSubmissions / igCommentEvents / igDmEvents（user-keyed ではない）
 *
 * 用途: 新規ユーザー体験（auto trial on first answer 等）の動作確認
 * 実行後の手順:
 *   1. LINE 公式アカウントをブロック → ブロック解除
 *   2. follow event が再発火し、新規 users/{uid} が作成される
 *   3. 学年登録 → 1問目回答 → auto trial 開放を観察
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/delete-line-user.ts --uid line:Uxxxx --dry-run
 *   npx tsx scripts/delete-line-user.ts --uid line:Uxxxx --confirm
 */

const FIREBASE_PROJECT_ID = 'chatstudy-63477';

interface CliArgs {
  uid: string | null;
  dryRun: boolean;
  confirm: boolean;
}

function parseArgs(argv: string[]): CliArgs {
  let uid: string | null = null;
  let dryRun = false;
  let confirm = false;
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--uid') {
      uid = argv[++i] ?? null;
    } else if (a === '--dry-run') {
      dryRun = true;
    } else if (a === '--confirm') {
      confirm = true;
    }
  }
  return { uid, dryRun, confirm };
}

async function deleteByQuery(
  db: FirebaseFirestore.Firestore,
  collection: string,
  uid: string,
  dryRun: boolean
): Promise<number> {
  const snap = await db.collection(collection).where('uid', '==', uid).get();
  if (snap.empty) {
    console.log(`  [${collection}] 0 docs`);
    return 0;
  }
  console.log(`  [${collection}] ${snap.size} docs`);
  if (dryRun) return snap.size;

  let written = 0;
  const docs = snap.docs;
  while (written < docs.length) {
    const batch = db.batch();
    const slice = docs.slice(written, written + 400);
    for (const doc of slice) batch.delete(doc.ref);
    await batch.commit();
    written += slice.length;
  }
  return written;
}

async function main() {
  const { uid, dryRun, confirm } = parseArgs(process.argv.slice(2));
  if (!uid) {
    console.error(
      'Usage: npx tsx scripts/delete-line-user.ts --uid line:Uxxxx [--dry-run | --confirm]'
    );
    process.exit(1);
  }
  if (!dryRun && !confirm) {
    console.error(
      'For safety, specify either --dry-run (preview) or --confirm (actually delete).'
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

  console.log(
    `[delete-line-user] mode=${dryRun ? 'dry-run' : 'live'} uid=${uid}`
  );

  const userRef = db.doc(`users/${uid}`);
  const userSnap = await userRef.get();
  if (!userSnap.exists) {
    console.warn(`[delete-line-user] users/${uid} not found (continuing for related collections)`);
  } else {
    const data = userSnap.data() ?? {};
    console.log('[delete-line-user] users/{uid} fields:');
    console.log(
      JSON.stringify(
        {
          displayName: data.displayName,
          nickname: data.nickname,
          grade: data.grade,
          plan: data.plan,
          planSource: data.planSource,
          richMenuType: data.richMenuType,
          'stats.totalAnswered': data.stats?.totalAnswered,
          createdAt: data.createdAt,
        },
        null,
        2
      )
    );
  }

  console.log('[delete-line-user] related collections:');
  const answers = await deleteByQuery(db, 'answers', uid, dryRun);
  const apps = await deleteByQuery(db, 'premiumApplications', uid, dryRun);
  const funnels = await deleteByQuery(db, 'premiumFunnelEvents', uid, dryRun);

  if (!dryRun && userSnap.exists) {
    await userRef.delete();
    console.log(`[delete-line-user] users/${uid} deleted`);
  }

  console.log(
    `[delete-line-user] done. answers=${answers} premiumApplications=${apps} premiumFunnelEvents=${funnels} userDoc=${userSnap.exists ? (dryRun ? 'will-delete' : 'deleted') : 'absent'}`
  );
}

main().catch((err) => {
  console.error('[delete-line-user] failed:', err);
  process.exit(1);
});
