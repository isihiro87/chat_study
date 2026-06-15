/**
 * status=active が実態と乖離していないか切り分けるワンショット。
 * - active ユーザーを limit でサンプルし、lastAnsweredAt の経過日数で分類
 *   → 4日以上前 / 8日以上前が居れば「recalc が status を落とせていない」証拠
 * - statusChangedAt を JST 日付で集計 → 特定日に固まっていれば一括リセット(relaunch)疑い
 *
 * 全件 .get() はしない（where + limit のみ）。
 * 実行: npx tsx scripts/_status-verify.ts
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const ADMIN = new Set([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);
const JST = 9 * 3600 * 1000;
const DAY = 24 * 3600 * 1000;
const SAMPLE = 400;

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const now = Date.now();

  const snap = await db
    .collection("users")
    .where("status", "==", "active")
    .limit(SAMPLE)
    .get();

  const bucket = { null: 0, "0-3d": 0, "4-7d": 0, "8-14d": 0, "15d+": 0 };
  let premium = 0;
  let blocked = 0;
  let shouldDemote = 0; // null以外で4日以上前（本来 active でないはず）
  const changedByDate: Record<string, number> = {};
  let noChangedAt = 0;
  const staleExamples: string[] = [];

  snap.docs.forEach((doc) => {
    const x = doc.data() as Record<string, unknown>;
    if (typeof x.lineUserId === "string" && ADMIN.has(x.lineUserId)) return;
    if (x.plan === "premium") premium++;
    if (x.blocked === true) blocked++;

    const la = (x.lastAnsweredAt as { toDate?: () => Date } | undefined)?.toDate?.();
    if (!la) {
      bucket.null++;
    } else {
      const days = Math.floor((now - la.getTime()) / DAY);
      if (days <= 3) bucket["0-3d"]++;
      else if (days <= 7) {
        bucket["4-7d"]++;
        shouldDemote++;
      } else if (days <= 14) {
        bucket["8-14d"]++;
        shouldDemote++;
      } else {
        bucket["15d+"]++;
        shouldDemote++;
      }
      if (days >= 4 && staleExamples.length < 8) {
        staleExamples.push(`${doc.id.slice(0, 14)}… last=${days}d前`);
      }
    }

    const sc = (x.statusChangedAt as { toDate?: () => Date } | undefined)?.toDate?.();
    if (!sc) noChangedAt++;
    else {
      const d = new Date(sc.getTime() + JST).toISOString().slice(0, 10);
      changedByDate[d] = (changedByDate[d] || 0) + 1;
    }
  });

  const sampled = snap.size;
  console.log(`==== status=active サンプル ${sampled}件（管理者除外後で集計） ====`);
  console.log(`\n[lastAnsweredAt 経過日数の内訳]`);
  console.log(`  未回答(null)     : ${bucket.null}  ← 仕様上 active で正しい`);
  console.log(`  0-3日前(active正) : ${bucket["0-3d"]}`);
  console.log(`  4-7日前(本来at-risk): ${bucket["4-7d"]}`);
  console.log(`  8-14日前(本来dormant): ${bucket["8-14d"]}`);
  console.log(`  15日+前(本来churned): ${bucket["15d+"]}`);
  console.log(`\n  ⚠️ 本来 active でないはず(4日以上前なのに active): ${shouldDemote}`);
  if (staleExamples.length) {
    console.log(`     例: ${staleExamples.join(" / ")}`);
  }
  console.log(`\n  premium(常にactive): ${premium} / blocked: ${blocked}`);

  console.log(`\n[statusChangedAt の JST 日付分布（一括リセット検出）]`);
  console.log(`  statusChangedAt 無し: ${noChangedAt}`);
  Object.entries(changedByDate)
    .sort((a, b) => (a[0] < b[0] ? 1 : -1))
    .slice(0, 12)
    .forEach(([d, n]) => console.log(`  ${d}: ${n}`));

  console.log(`\n[判定の目安]`);
  if (shouldDemote > 0) {
    console.log(`  → recalc が status を落とせていない可能性大（4日以上前が active に ${shouldDemote}件）。要修正。`);
  } else {
    console.log(`  → active は全員 0-3日 or 未回答。status は正常で、基盤が若い/直近活発なだけ。修正不要。`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
