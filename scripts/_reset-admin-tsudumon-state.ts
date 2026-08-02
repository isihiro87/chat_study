/**
 * 管理人アカウントの**つづもん側の状態**を消して、「初めて使う人」に戻す（実機テスト用）。
 *
 * `_clear-admin-tsudumon.ts` はライセンス（`tsudumon` / `tsudumonTrialUsedAt` /
 * `stripeTsudumon` / `tsudumonTrials`）しか消さない。それだけだと学習の記録や
 * テスト範囲が残り、**新規ユーザーが見る画面と変わってしまう**:
 *   - `tsudumonExam` があると、登録直後の開始カードから
 *     「テスト範囲を決める（あとでOK）」ボタンが消える
 *   - `tsudumonProgress` があると出題が「復習優先」に寄る
 *   - `tsudumonDaily` があると配信時刻・cursor が引き継がれる
 * この2本を続けて実行すると素の状態になる。
 *
 * ⚠️ **`grade` と `subject` は消さない。** `users/{uid}` は一問一答と共有していて
 *    （CLAUDE.md「users/{uid} は両Botで共有」）、消すと**無料Bot側の毎日配信が
 *    学年不明になる**。つづもんの導線は学年が入っていても見た目が変わらない
 *    （登録直後に必ず学年カードを出し、押した値で上書きする）ので、消す必要もない。
 *
 * ⚠️ Stripe のサブスクは**Firestoreを消しても止まらない**。先にダッシュボードで
 *    解約しておくこと。解約せずに消すと「課金は続くのにアクセスは戻らない」状態になる
 *    （`invoice.paid` は `source === 'stripe'` のときだけ延長するため）。
 *
 * 実行: npx tsx scripts/_reset-admin-tsudumon-state.ts          （dry-run・控えの出力のみ）
 *       npx tsx scripts/_reset-admin-tsudumon-state.ts --apply
 *
 * 控えは**必ず標準出力に全文を出す**。消したあとに「あの設定なんだったっけ」を
 * 復元できるようにするため（専用の復元スクリプトは無い）。
 */
import { initializeApp, applicationDefault, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const TARGET_UID = 'line:U429b1d951fc7236c9e8e85e5ca96b910';

/** users/{uid} から消すフィールド（つづもん専用のものだけ）。 */
const USER_FIELDS = [
  'tsudumonMode',
  'tsudumonExam',
  'tsudumonProgress',
  'tsudumonLastUnit',
  'tsudumonRecap',
] as const;

/** まるごと消すドキュメント。 */
const DOCS = [
  'tsudumonDaily',
  'tsudumonSessions',
  'tsudumonReview',
  'tsudumonFollowUps',
] as const;

async function main() {
  const apply = process.argv.includes('--apply');
  if (getApps().length === 0) {
    initializeApp({
      credential: applicationDefault(),
      projectId: 'chatstudy-63477',
    });
  }
  const db = getFirestore();

  console.log('===== 控え（消す前の全内容）=====');
  const snap = await db.doc(`users/${TARGET_UID}`).get();
  const u = (snap.data() ?? {}) as Record<string, unknown>;
  const backup: Record<string, unknown> = { userFields: {}, docs: {} };
  for (const k of USER_FIELDS) {
    (backup.userFields as Record<string, unknown>)[k] = u[k] ?? null;
  }
  for (const c of DOCS) {
    const d = await db.doc(`${c}/${TARGET_UID}`).get();
    (backup.docs as Record<string, unknown>)[c] = d.exists ? d.data() : null;
  }
  const invites = await db
    .collection('tsudumonInvites')
    .where('childUid', '==', TARGET_UID)
    .get();
  backup.invites = invites.docs.map((d) => ({ id: d.id, ...d.data() }));
  console.log(JSON.stringify(backup, null, 2));

  console.log('\n===== 消すもの =====');
  console.log(`  users/${TARGET_UID} のフィールド: ${USER_FIELDS.join(' / ')}`);
  console.log(`  ドキュメント: ${DOCS.map((c) => `${c}/{uid}`).join(' / ')}`);
  console.log(`  tsudumonInvites: ${invites.size} 件`);
  console.log('  ※ grade / subject は残す（一問一答と共有のため）');

  if (!apply) {
    console.log('\n(dry-run。実行するには --apply を付ける)');
    return;
  }

  const patch: Record<string, unknown> = {};
  for (const k of USER_FIELDS) patch[k] = FieldValue.delete();
  await db.doc(`users/${TARGET_UID}`).update(patch);
  for (const c of DOCS) {
    await db.doc(`${c}/${TARGET_UID}`).delete();
  }
  for (const d of invites.docs) await d.ref.delete();

  console.log('\n完了。素の状態になった。');
  console.log(
    'ライセンス側もまだなら: npx tsx scripts/_clear-admin-tsudumon.ts --apply'
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
