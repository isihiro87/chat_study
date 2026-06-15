/**
 * 決定的チェック: active かつ最終回答4日以上前 かつ premium失効/free のユーザーで、
 * premiumUntil が「いつ失効したか」を JST 日付で集計する。
 *  - 大半が today 失効 → recalc(02:00)後に切れただけ＝明日2:00で正常化（benign）
 *  - 過去日に失効が多い → recalc が落とせていない（bug）
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
  const todayStr = new Date(now + JST).toISOString().slice(0, 10);

  const snap = await db
    .collection("users")
    .where("status", "==", "active")
    .limit(SAMPLE)
    .get();

  const expiredByDate: Record<string, number> = {};
  let freeStale = 0;
  let noPremiumUntil = 0;
  let stuckTotal = 0;

  snap.docs.forEach((doc) => {
    const x = doc.data() as Record<string, unknown>;
    if (typeof x.lineUserId === "string" && ADMIN.has(x.lineUserId)) return;

    const la = (x.lastAnsweredAt as { toDate?: () => Date } | undefined)?.toDate?.();
    if (!la) return;
    const days = Math.floor((now - la.getTime()) / DAY);
    if (days < 4) return; // stale のみ

    const plan = x.plan === "premium" ? "premium" : "free";
    const pu = (x.premiumUntil as { toDate?: () => Date } | undefined)?.toDate?.();
    const premiumValidNow = plan === "premium" && !!pu && pu.getTime() > now;
    if (premiumValidNow) return; // 正しく active なので除外

    stuckTotal++;
    if (plan === "free") {
      freeStale++;
    } else if (!pu) {
      noPremiumUntil++;
    } else {
      const d = new Date(pu.getTime() + JST).toISOString().slice(0, 10);
      expiredByDate[d] = (expiredByDate[d] || 0) + 1;
    }
  });

  console.log(`==== active & 最終回答4日以上前 & (premium失効 or free) = ${stuckTotal}件 ====`);
  console.log(`today(JST) = ${todayStr}\n`);
  console.log(`[premiumUntil が失効した JST 日付]`);
  Object.entries(expiredByDate)
    .sort((a, b) => (a[0] < b[0] ? 1 : -1))
    .forEach(([d, n]) => console.log(`  ${d}: ${n}${d === todayStr ? "  ← 今日（recalc後失効ならbenign）" : "  ← 過去日（recalc取りこぼし）"}`));
  console.log(`  premiumUntil 無しの plan=premium: ${noPremiumUntil}`);
  console.log(`  free なのに active: ${freeStale}`);

  const pastExpired = Object.entries(expiredByDate)
    .filter(([d]) => d < todayStr)
    .reduce((a, [, n]) => a + n, 0);
  const bug = pastExpired + noPremiumUntil + freeStale;
  console.log(`\n[判定]`);
  console.log(`  今日失効(benign見込み): ${expiredByDate[todayStr] ?? 0}`);
  console.log(`  過去失効+無期限+free(=recalc取りこぼし疑い): ${bug}`);
  if (bug > 2) {
    console.log(`  → recalc が status を落とせていない可能性が高い。要調査（cron実行ログ確認）。`);
  } else {
    console.log(`  → ほぼ「今日の同期失効ウェーブ」。明日2:00の recalc で正常化する見込み。修正不要。`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
