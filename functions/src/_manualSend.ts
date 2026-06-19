/**
 * 特定の uid にテスト配信を手動実行する。
 * 使い方:
 *   cd functions
 *   node --env-file=.env --import tsx src/_manualSend.ts line:U429b1d951fc7236c9e8e85e5ca96b910
 *
 * bypassDailyLimit=true で当日重複制限を無視して送る。
 */
if (!process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN) {
  console.error('LINE_MESSAGING_CHANNEL_ACCESS_TOKEN is not set');
  process.exit(1);
}

const uid = process.argv[2];
if (!uid) {
  console.error('usage: ... _manualSend.ts <uid>  例: line:U429...');
  process.exit(1);
}

async function main() {
  const { initializeApp, getApps, applicationDefault } = await import(
    'firebase-admin/app'
  );
  if (getApps().length === 0) {
    initializeApp({
      credential: applicationDefault(),
      projectId: 'chatstudy-63477',
    });
  }

  // まず user 存在確認
  const { getFirestore } = await import('firebase-admin/firestore');
  const db = getFirestore();
  const userSnap = await db.doc(`users/${uid}`).get();
  if (!userSnap.exists) {
    console.error(`[manualSend] user not found: ${uid}`);
    process.exit(1);
  }
  const u = userSnap.data() ?? {};
  console.log(`[manualSend] target user:`);
  console.log(`  uid              : ${uid}`);
  console.log(`  nickname         : ${u.nickname ?? '(none)'}`);
  console.log(`  grade / subject  : 中${u.grade} / ${u.subject}`);
  console.log(`  preferredHour    : ${u.preferredHour ?? '(unset)'}`);
  console.log(`  plan             : ${u.plan ?? '(unset)'}`);
  console.log(`  blocked          : ${u.blocked === true ? 'YES' : 'no'}`);
  console.log(`  lastQuestionDeliveredAt: ${
    u.lastQuestionDeliveredAt?.toDate?.()?.toISOString() ?? '(unset)'
  }`);

  const { selectAndSendQuestion } = await import('./lineWebhook');
  console.log(`\n[manualSend] sending question (bypassDailyLimit=true) ...`);
  await selectAndSendQuestion(uid, {
    bypassDailyLimit: true,
    pushType: 'dailyQuiz',
    source: 'manual',
  });
  console.log('[manualSend] done');
}
main().catch((err) => {
  console.error('[manualSend] failed:', err);
  process.exit(1);
});
