/**
 * つづもんの有料受付停止にともない、**いま使っている人の利用権を切らさない**。
 *
 * ## なぜ延長するのか（2026-08-06）
 * 有料の単独プロダクトとしては畳む判断をしたが、体験中の14人は全員が実際に
 * 教材を開いていて、うち6人は翌日以降も戻ってきている。**失う売上はゼロ**
 * （Stripe のサブスクは1件も存在しない）なので、8/15 で取り上げる理由が無い。
 * 告知を信じて試してくれた人に、撤回に加えて「使えなくなる」を重ねない。
 *
 * 対象は `tsudumon.source === 'trial'` かつ期限が近い人。`expiresAt` だけを
 * 伸ばす（`plan` は 'set'＝全学年のまま。`evaluateTsudumonAccess` は
 * expiresAt と plan しか見ないので、これで通る）。
 *
 * `tsudumonExtendedAt` / `tsudumonExtendedReason` を残すのは、あとから
 * 「なぜこの人だけ期限が長いのか」を追えるようにするため。
 *
 * ⚠️ 期限を伸ばすと `tsudumonTrialReminder` の lastday / expired も走らなくなる
 *（＝8/14・8/15 の「あすで終了」通知が飛ばない）。これは意図した副作用。
 *
 * 実行:
 *   npx tsx scripts/_extend-tsudumon-licenses.ts           # dry-run
 *   npx tsx scripts/_extend-tsudumon-licenses.ts --apply
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';

/** 新しい期限。JST 2029-12-31 23:59:59（実質「当面ずっと」）。 */
const NEW_EXPIRES_MS = Date.parse('2029-12-31T14:59:59Z');
const REASON = 'paid_flow_shutdown_20260806';

function jst(ms: number): string {
  return new Date(ms + 9 * 3600e3).toISOString().slice(0, 16).replace('T', ' ');
}

async function main() {
  const apply = process.argv.includes('--apply');
  initializeApp({
    credential: applicationDefault(),
    projectId: 'chatstudy-63477',
  });
  const db = getFirestore();

  // つづもんのライセンス保持者だけを引く（users 全体は舐めない＝read 規律）。
  const snap = await db
    .collection('users')
    .where('tsudumon.plan', '!=', null)
    .limit(500)
    .get();

  const targets: { ref: FirebaseFirestore.DocumentReference; cur: number }[] =
    [];
  console.log(`ライセンス保持者 ${snap.size} 人\n`);
  for (const d of snap.docs) {
    const t = d.data().tsudumon as Record<string, unknown> | undefined;
    const exp = t?.expiresAt as Timestamp | undefined;
    const curMs = exp ? exp.toMillis() : 0;
    const source = String(t?.source ?? '');
    const skip = curMs >= NEW_EXPIRES_MS;
    console.log(
      `  ${d.id.slice(5, 13)}  source=${source.padEnd(6)} 期限=${curMs ? jst(curMs) : '—'}` +
        (skip ? '  → 対象外（すでに十分先）' : '  → 延長')
    );
    if (!skip) targets.push({ ref: d.ref, cur: curMs });
  }

  console.log(`\n延長する: ${targets.length} 人 → ${jst(NEW_EXPIRES_MS)}`);
  if (!apply) {
    console.log('\n(dry-run。実行するには --apply を付ける)');
    return;
  }

  for (const t of targets) {
    // ⚠️ `tsudumon` を丸ごと set すると code / plan / activatedAt が消える。
    // 期限だけをドット記法で差し替える。
    await t.ref.update({
      'tsudumon.expiresAt': Timestamp.fromMillis(NEW_EXPIRES_MS),
      tsudumonExtendedAt: FieldValue.serverTimestamp(),
      tsudumonExtendedReason: REASON,
      updatedAt: FieldValue.serverTimestamp(),
    });
  }
  console.log(`\n${targets.length} 人の期限を延長しました。`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
