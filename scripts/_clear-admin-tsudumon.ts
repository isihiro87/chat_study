/**
 * 管理人アカウントの つづもんライセンスを外して「未登録の状態」に戻す（実機テスト用）。
 *
 * なぜ要るか: 3日間無料体験は 1アカウント1回まで（`tsudumonTrialUsedAt`）で、
 * すでにライセンスがあると `already_licensed` で開始すらできない。
 * 体験 → リマインド → 決済の一連を実機で通すには、いったん素の状態に戻す必要がある。
 *
 * ⚠️ 消すのは **石本大貴（U429b…）だけ**。石本裕未（U732…）は
 *    `_restore-admin-tsudumon.ts` の復元テンプレートなので触らない。
 *    両方消すと書き戻す元が無くなる。
 *
 * 実行前に必ず `npx tsx scripts/_dump-admin-tsudumon.ts` で控えを取ること。
 *
 * 実行: npx tsx scripts/_clear-admin-tsudumon.ts          （dry-run）
 *       npx tsx scripts/_clear-admin-tsudumon.ts --apply
 *
 * 戻すとき: npx tsx scripts/_restore-admin-tsudumon.ts --apply
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const TARGET_UID = 'line:U429b1d951fc7236c9e8e85e5ca96b910';
/** 復元テンプレート。ここは絶対に消さない。 */
const TEMPLATE_UID = 'line:U732828c7b975479c97a104c5cbc45b7a';

async function main() {
  const apply = process.argv.includes('--apply');
  initializeApp({
    credential: applicationDefault(),
    projectId: 'chatstudy-63477',
  });
  const db = getFirestore();

  // 復元テンプレートが生きていることを先に確かめる（これが無いと戻せない）
  const tpl = (await db.doc(`users/${TEMPLATE_UID}`).get()).data()?.tsudumon;
  if (!tpl?.code || tpl.plan !== 'set') {
    throw new Error(
      `復元テンプレート（${TEMPLATE_UID}）が想定外なので中止: ${JSON.stringify(tpl)}`
    );
  }
  console.log('復元テンプレート  :', JSON.stringify(tpl));

  const cur = (await db.doc(`users/${TARGET_UID}`).get()).data();
  console.log('対象の現在        :', JSON.stringify(cur?.tsudumon ?? null));
  console.log(
    '対象のtrialUsedAt :',
    cur?.tsudumonTrialUsedAt?.toDate?.().toISOString() ?? null
  );
  console.log('');
  console.log(
    '消すフィールド    : tsudumon / tsudumonTrialUsedAt / stripeTsudumon /' +
      ' grade / tsudumonExam / tsudumonInviteId / tsudumonParentName'
  );
  console.log(
    '消すドキュメント  : tsudumonTrials / tsudumonDaily / tsudumonProgress /' +
      ' tsudumonReview / tsudumonSnapshots ＋ 発行ずみの招待'
  );

  if (!apply) {
    console.log('\n(dry-run。実行するには --apply を付ける)');
    return;
  }

  // 発行ずみの保護者カードは、先に招待doc本体を消してから参照を外す
  const inviteId = cur?.tsudumonInviteId;
  if (typeof inviteId === 'string' && inviteId) {
    await db
      .doc(`tsudumonInvites/${inviteId}`)
      .delete()
      .catch(() => {});
  }

  await db.doc(`users/${TARGET_UID}`).update({
    tsudumon: FieldValue.delete(),
    tsudumonTrialUsedAt: FieldValue.delete(),
    stripeTsudumon: FieldValue.delete(),
    // 登録のやり直しに要るもの
    grade: FieldValue.delete(),
    tsudumonExam: FieldValue.delete(),
    tsudumonInviteId: FieldValue.delete(),
    // ⚠️ 撤去した「呼び名」導線が子の発言をそのまま保存していた残骸。
    // 消しておかないと保護者ページに変な表示名が出続ける。
    tsudumonParentName: FieldValue.delete(),
    tsudumonParentNameAwaiting: FieldValue.delete(),
  });

  // 体験リマインドの既送管理・日次配信の予定表・進捗の控えも消す
  // （残っていると再体験時にスキップされたり、前回の続きが出たりする）。
  for (const c of [
    'tsudumonTrials',
    'tsudumonDaily',
    'tsudumonProgress',
    'tsudumonReview',
    'tsudumonSnapshots',
  ]) {
    await db
      .doc(`${c}/${TARGET_UID}`)
      .delete()
      .catch(() => {});
  }

  const after = (await db.doc(`users/${TARGET_UID}`).get()).data();
  console.log('\n完了。tsudumon =', JSON.stringify(after?.tsudumon ?? null));
  console.log('戻すとき: npx tsx scripts/_restore-admin-tsudumon.ts --apply');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
