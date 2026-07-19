/**
 * richMenuType の棚卸し＋古い値の掃除（2026-07-19）。
 *
 * 背景: 旧 free/trial/premium リッチメニューは LINE 上から削除済み（manage-line-richmenu list で確認）。
 * 削除されたメニューへの個別リンクは LINE 側で自動的に外れ default に戻るため、
 * LINE 側の移行作業は不要。Firestore の users.richMenuType に残る旧値
 * （free/trial/premium）だけが実態と乖離しているので、棚卸しして削除する。
 * 'workbook'（つづもんタブメニュー）は現役なので触らない。
 *
 * read 規律: richMenuType 等価 where + count / limit。全件スキャンなし。
 *
 * 実行:
 *   npx tsx scripts/_audit-richmenu-links.ts           # dry-run（件数と一部uid表示のみ）
 *   npx tsx scripts/_audit-richmenu-links.ts --apply   # 旧値の削除を実行
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const FIREBASE_PROJECT_ID = 'chatstudy-63477';
const STALE_TYPES = ['free', 'trial', 'premium'] as const;
const LIMIT = 2000;

async function main() {
  const apply = process.argv.includes('--apply');
  initializeApp({
    credential: applicationDefault(),
    projectId: FIREBASE_PROJECT_ID,
  });
  const db = getFirestore();

  console.log(`richMenuType 棚卸し（${apply ? 'APPLY' : 'dry-run'}）`);

  for (const t of [...STALE_TYPES, 'workbook']) {
    const c = await db
      .collection('users')
      .where('richMenuType', '==', t)
      .count()
      .get();
    console.log(`  richMenuType=${t}: ${c.data().count} 人`);
  }

  let cleaned = 0;
  for (const t of STALE_TYPES) {
    const snap = await db
      .collection('users')
      .where('richMenuType', '==', t)
      .limit(LIMIT)
      .get();
    if (snap.empty) continue;
    console.log(
      `  ${t}: 例 ${snap.docs
        .slice(0, 3)
        .map((d) => d.id.slice(0, 12))
        .join(', ')} ...`
    );
    if (!apply) continue;
    // 旧メニューは LINE 上に存在しない＝実際は default 表示。フィールドを削除して実態に合わせる。
    let batch = db.batch();
    let inBatch = 0;
    for (const doc of snap.docs) {
      batch.update(doc.ref, {
        richMenuType: FieldValue.delete(),
        lastRichMenuUpdatedAt: FieldValue.serverTimestamp(),
      });
      inBatch++;
      cleaned++;
      if (inBatch >= 400) {
        await batch.commit();
        batch = db.batch();
        inBatch = 0;
      }
    }
    if (inBatch > 0) await batch.commit();
  }

  if (apply) {
    console.log(
      `削除完了: ${cleaned} 人の richMenuType を除去（=default 扱い）`
    );
  } else {
    console.log('dry-run のみ。実行するには --apply を付ける。');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
