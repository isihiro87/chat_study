/**
 * AI 会話アーカイブ（`aiThreads/{uid}`）の削除（運用スクリプト）。
 *
 * つづもんの AI は会話を**削除せず永続保存**する設計なので、
 * 解約・退会・本人からの削除要求に応じられる出口を用意しておく必要がある
 * （`requirements.md` §機能6・`ai-capabilities.md` §7 プライバシー）。
 *
 * 削除対象:
 *   - `aiThreads/{uid}/segments/*`（会話原文）
 *   - `aiThreads/{uid}/digests/*`（要約＝検索インデックス）
 *   - `aiThreads/{uid}`（メタ）
 *   - `--all` を付けると `users/{uid}.aiMemory`（構造化事実）と
 *     `users/{uid}.aiChat.history`（直近履歴）も消す
 *
 * 消さないもの:
 *   - `users/{uid}.aiBudget`（コスト集計。会計記録なので残す）
 *   - `aiCostStats`（全体集計。個人情報を含まない）
 *   - `answers` などの学習記録（AI の記憶ではない）
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/purge-ai-thread.ts line:U1234... --dry-run
 *   npx tsx scripts/purge-ai-thread.ts line:U1234...
 *   npx tsx scripts/purge-ai-thread.ts line:U1234... --all
 */

import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const FIREBASE_PROJECT_ID = 'chatstudy-63477';

/** 1回のバッチで消す件数。 */
const BATCH_SIZE = 200;

initializeApp({
  credential: applicationDefault(),
  projectId: FIREBASE_PROJECT_ID,
});
const db = getFirestore();

/** サブコレクションをページングで全削除する（件数が多くても落ちないように）。 */
async function deleteSubcollection(
  path: string,
  dryRun: boolean
): Promise<number> {
  let deleted = 0;
  for (;;) {
    const snap = await db.collection(path).limit(BATCH_SIZE).get();
    if (snap.empty) break;
    if (dryRun) {
      deleted += snap.size;
      // dry-run では削除しないので、同じページを無限に読まないよう1回で抜ける。
      console.log(`  [dry-run] ${path}: ${snap.size} 件以上あります`);
      break;
    }
    const batch = db.batch();
    for (const doc of snap.docs) batch.delete(doc.ref);
    await batch.commit();
    deleted += snap.size;
    if (snap.size < BATCH_SIZE) break;
  }
  return deleted;
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const uid = args.find((a) => !a.startsWith('--'));
  const dryRun = args.includes('--dry-run');
  const alsoMemory = args.includes('--all');

  if (!uid) {
    console.error(
      '使い方: npx tsx scripts/purge-ai-thread.ts <uid> [--dry-run] [--all]'
    );
    process.exit(1);
  }
  if (!uid.startsWith('line:')) {
    console.error(`⚠️ uid は "line:U..." 形式です（受け取った値: ${uid}）`);
    process.exit(1);
  }

  console.log(`\n=== AI 会話アーカイブの削除 ${dryRun ? '(dry-run)' : ''} ===`);
  console.log(`対象 uid: ${uid}`);

  const metaSnap = await db.doc(`aiThreads/${uid}`).get();
  if (metaSnap.exists) {
    const m = metaSnap.data() ?? {};
    console.log(
      `メタ: totalMessages=${m.totalMessages ?? '-'} latestSeq=${m.latestSeq ?? '-'}`
    );
  } else {
    console.log('メタ: aiThreads ドキュメントはありません');
  }

  const segs = await deleteSubcollection(`aiThreads/${uid}/segments`, dryRun);
  console.log(`segments: ${segs} 件${dryRun ? '（未削除）' : ' 削除'}`);

  const digs = await deleteSubcollection(`aiThreads/${uid}/digests`, dryRun);
  console.log(`digests : ${digs} 件${dryRun ? '（未削除）' : ' 削除'}`);

  if (!dryRun && metaSnap.exists) {
    await db.doc(`aiThreads/${uid}`).delete();
    console.log('メタ    : 削除');
  }

  if (alsoMemory) {
    if (dryRun) {
      console.log(
        '[dry-run] users/{uid}.aiMemory と aiChat.history も削除対象です'
      );
    } else {
      await db.doc(`users/${uid}`).set(
        {
          aiMemory: FieldValue.delete(),
          aiChat: { history: FieldValue.delete() },
        },
        { merge: true }
      );
      console.log('users/{uid}: aiMemory / aiChat.history を削除');
    }
  } else {
    console.log(
      'users/{uid}.aiMemory は残しました（消すには --all を付けてください）'
    );
  }

  console.log(
    '\n※ aiBudget（コスト集計）と aiCostStats は会計記録として残しています。\n'
  );
}

main().catch((error) => {
  console.error('[purge-ai-thread] failed:', error);
  process.exit(1);
});
