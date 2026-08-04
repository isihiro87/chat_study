/** 管理人アカウントの「登録に関わる状態」を全部出す（読み取りのみ）。 */
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const UID = 'line:U429b1d951fc7236c9e8e85e5ca96b910';

async function main() {
  initializeApp({
    credential: applicationDefault(),
    projectId: 'chatstudy-63477',
  });
  const db = getFirestore();
  const d = (await db.doc(`users/${UID}`).get()).data() as
    | Record<string, unknown>
    | undefined;
  const show = (k: string, v: unknown) =>
    console.log('  ' + k.padEnd(24), JSON.stringify(v ?? null));
  console.log('=== users/' + UID + ' ===');
  for (const k of [
    'tsudumon',
    'tsudumonTrialUsedAt',
    'stripeTsudumon',
    'grade',
    'tsudumonExam',
    'tsudumonRole',
    'tsudumonChildren',
    'tsudumonParents',
    'tsudumonInviteId',
    'tsudumonParentName',
    'tsudumonFollowed',
  ])
    show(k, d?.[k]);
  for (const c of [
    'tsudumonTrials',
    'tsudumonDaily',
    'tsudumonProgress',
    'tsudumonReview',
    'tsudumonSnapshots',
  ]) {
    const s = await db.doc(`${c}/${UID}`).get();
    console.log('  ' + (c + '/{uid}').padEnd(24), s.exists ? 'あり' : '—');
  }
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
