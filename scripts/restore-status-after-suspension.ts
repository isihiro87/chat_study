/**
 * 2026-07-26〜07-31 の配信停止で「濡れ衣 dormant」になった人の status を active に戻す。
 *
 * 背景（2026-08-03 実測）: 停止中はこちらが問題を送っていないのでユーザーは解きようが
 * なく、それなのに `lastAnsweredAt` だけ古くなって dormant / churned に落ちていた。
 * 結果 active 1,152 / dormant 1,096 / churned 1,299 ＝ **64% が dailyQuiz の対象外**。
 * 朝6時・7時設定の人の約7割に今日の1問が届かず「送られてこない」と指摘が来た。
 *
 * 判定ロジックの本体は `functions/src/userStatus.ts` の `effectiveLastAnsweredAt`
 * （停止前30日以内に回答があった人は起点を再開日 8/3 まで繰り上げる）。**そちらを
 * 直したので毎晩 02:00 の `recalculateUserStatuses` でも同じ結果になる**が、今夜の
 * 18時・20時の配信に間に合わせるため、このスクリプトで即時反映する。
 *
 * 対象は `lastAnsweredAt` の範囲クエリで絞る（users 全件スキャンをしない）。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/restore-status-after-suspension.ts          # dry-run
 *   npx tsx scripts/restore-status-after-suspension.ts --apply  # 実書き込み
 */
import { createRequire } from 'node:module';
import { initializeApp, applicationDefault, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue, Timestamp } from 'firebase-admin/firestore';

const requireCjs = createRequire(import.meta.url);
// `effectiveLastAnsweredAt` の判定条件は、このスクリプトでは
// SUSPENSION_START/END のクエリとして再現しているため関数自体は import しない。
const { computeStatusFromLastAnswer } = requireCjs(
  '../functions/src/userStatus.ts'
) as typeof import('../functions/src/userStatus');

const PROJECT = 'chatstudy-63477';
const APPLY = process.argv.includes('--apply');

/** `effectiveLastAnsweredAt` の救済ウィンドウと同じ範囲（クエリで絞るため再掲）。 */
const SUSPENSION_START = new Date('2026-07-26T00:00:00+09:00');
/** 上限は停止「終了」。停止中に自分で「1問解く」して解いた人も救済するため。 */
const SUSPENSION_END = new Date('2026-08-01T00:00:00+09:00');
const WINDOW_START = new Date(
  SUSPENSION_START.getTime() - 30 * 24 * 60 * 60 * 1000
);

async function main(): Promise<void> {
  if (getApps().length === 0) {
    initializeApp({ credential: applicationDefault(), projectId: PROJECT });
  }
  const db = getFirestore();
  const now = new Date();

  // 救済対象になり得るのは「停止前30日以内に回答があった人」だけ。範囲クエリで絞る。
  const snap = await db
    .collection('users')
    .where('lastAnsweredAt', '>=', Timestamp.fromDate(WINDOW_START))
    .where('lastAnsweredAt', '<', Timestamp.fromDate(SUSPENSION_END))
    .get();

  console.log(
    `\n=== 配信停止による濡れ衣 dormant の復旧 ${APPLY ? '【書き込み】' : '(DRY RUN)'} ===`
  );
  console.log(
    `候補（${WINDOW_START.toISOString().slice(0, 10)}〜停止終了8/1 に回答あり）: ` +
      `${snap.size}件（read=${snap.size}）`
  );

  const byOld: Record<string, number> = {};
  let skipBlocked = 0;
  const updates: string[] = [];

  for (const doc of snap.docs) {
    const x = doc.data() as Record<string, unknown>;
    // ブロック中・配信おやすみ中の人は status を触らない（どのみち配信されない）。
    if (x.blocked === true || x.deliveryPaused === true) {
      skipBlocked++;
      continue;
    }
    const la = x.lastAnsweredAt as { toDate?: () => Date } | undefined;
    const lastAnsweredAt =
      la && typeof la.toDate === 'function' ? la.toDate() : null;
    const next = computeStatusFromLastAnswer({
      lastAnsweredAt,
      now,
      plan: x.plan === 'premium' ? 'premium' : 'free',
      premiumUntil:
        x.premiumUntil && typeof (x.premiumUntil as any).toDate === 'function'
          ? (x.premiumUntil as any).toDate()
          : null,
    });
    const current = typeof x.status === 'string' ? x.status : '(なし)';
    if (next === current) continue;
    byOld[current] = (byOld[current] ?? 0) + 1;
    updates.push(doc.id);
  }

  console.log(`ブロック中・おやすみ中でスキップ: ${skipBlocked}件`);
  console.log(`\nactive へ戻す内訳（変更前の status）:`);
  for (const [k, v] of Object.entries(byOld)) console.log(`  ${k}: ${v}`);
  console.log(`\n合計 ${updates.length}件を active に戻します`);

  // 目安: これらの人は次の配信日（週2＝月・木）に今日の1問が届くようになる。
  if (!APPLY) {
    console.log(
      '\n▶ DRY RUN。--apply で書き込みます。\n' +
        '  （判定ロジック自体は userStatus.ts に入れたので、書き込まなくても\n' +
        '   毎晩 02:00 の recalculateUserStatuses で同じ結果になります。\n' +
        '   今夜18時・20時の配信に間に合わせたいときだけ --apply してください）'
    );
    return;
  }

  let written = 0;
  for (let i = 0; i < updates.length; i += 400) {
    const chunk = updates.slice(i, i + 400);
    const batch = db.batch();
    for (const uid of chunk) {
      batch.set(
        db.doc(`users/${uid}`),
        {
          status: 'active',
          statusChangedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
    }
    await batch.commit();
    written += chunk.length;
    console.log(`  書き込み ${written}/${updates.length}`);
  }
  console.log(`\n✅ 完了: ${written}件を active に戻しました`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
