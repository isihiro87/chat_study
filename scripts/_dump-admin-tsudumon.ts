/**
 * 管理人アカウントの つづもん関連フィールドを表示するだけの読み取り専用スクリプト。
 *
 * 体験（3日間無料）を実機テストするには `tsudumon` と `tsudumonTrialUsedAt` を
 * 消す必要があるが、消す前に必ずこれで控えを取る。
 * （2026-07-25 に実カード決済テストで既存ライセンスを失った事故があるため）
 *
 * 実行: npx tsx scripts/_dump-admin-tsudumon.ts
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const UIDS = [
  'line:U429b1d951fc7236c9e8e85e5ca96b910',
  'line:U732828c7b975479c97a104c5cbc45b7a',
];

async function main() {
  initializeApp({
    credential: applicationDefault(),
    projectId: 'chatstudy-63477',
  });
  const db = getFirestore();

  for (const uid of UIDS) {
    const snap = await db.doc(`users/${uid}`).get();
    console.log('=== ' + uid + ' ===');
    if (!snap.exists) {
      console.log('  ドキュメントなし');
      continue;
    }
    const d = snap.data() as Record<string, any>;
    console.log('  displayName        :', d.displayName ?? '(なし)');
    console.log('  tsudumon           :', JSON.stringify(d.tsudumon ?? null));
    console.log(
      '  tsudumonTrialUsedAt:',
      d.tsudumonTrialUsedAt?.toDate?.().toISOString() ?? null
    );
    console.log(
      '  stripeTsudumon     :',
      JSON.stringify(d.stripeTsudumon ?? null)
    );
    const t = await db.doc(`tsudumonTrials/${uid}`).get();
    console.log(
      '  tsudumonTrials     :',
      t.exists ? JSON.stringify(t.data()) : '(なし)'
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
