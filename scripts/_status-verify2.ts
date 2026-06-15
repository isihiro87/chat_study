/**
 * active かつ最終回答4日以上前のユーザーを、premium 有効性で分類する。
 * - premium かつ premiumUntil>now → 仕様上 active で正しい（トライアル残存grant）
 * - premium だが premiumUntil<=now / 無し → 本来 lastAnswered で落ちるべき
 * - free → 本来 at-risk 以降に落ちるべき（recalc 取りこぼし or 未実行）
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const ADMIN = new Set([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);
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

  let staleTotal = 0;
  let premiumValid = 0; // 正しく active（premium残存）
  let premiumExpired = 0; // plan=premium だが premiumUntil 切れ/無し
  let free = 0; // free なのに active = 取りこぼし
  const premiumUntilSoon: number[] = []; // premium残存の premiumUntil まで日数

  // 参考: サンプル全体の plan / premiumUntil 状況も見る
  let allPremium = 0;
  let allPremiumValid = 0;

  snap.docs.forEach((doc) => {
    const x = doc.data() as Record<string, unknown>;
    if (typeof x.lineUserId === "string" && ADMIN.has(x.lineUserId)) return;

    const plan = x.plan === "premium" ? "premium" : "free";
    const pu = (x.premiumUntil as { toDate?: () => Date } | undefined)?.toDate?.();
    const premiumValidNow = plan === "premium" && !!pu && pu.getTime() > now;
    if (plan === "premium") allPremium++;
    if (premiumValidNow) allPremiumValid++;

    const la = (x.lastAnsweredAt as { toDate?: () => Date } | undefined)?.toDate?.();
    if (!la) return;
    const days = Math.floor((now - la.getTime()) / DAY);
    if (days < 4) return;

    staleTotal++;
    if (premiumValidNow) {
      premiumValid++;
      premiumUntilSoon.push(Math.ceil((pu!.getTime() - now) / DAY));
    } else if (plan === "premium") {
      premiumExpired++;
    } else {
      free++;
    }
  });

  console.log(`==== active サンプル ${snap.size}件 ====`);
  console.log(`サンプル全体: plan=premium ${allPremium} / うち premiumUntil 有効 ${allPremiumValid}`);
  console.log(`\n[active かつ 最終回答4日以上前 = ${staleTotal}件 の内訳]`);
  console.log(`  premium 有効(premiumUntil>now) → 正しく active : ${premiumValid}`);
  console.log(`  premium 切れ/無し(plan=premiumだが期限切れ)    : ${premiumExpired}`);
  console.log(`  free なのに active（本来 at-risk 以降）        : ${free}`);
  if (premiumUntilSoon.length) {
    premiumUntilSoon.sort((a, b) => a - b);
    console.log(`\n  premium残存の premiumUntil まで日数: 最小${premiumUntilSoon[0]}日 / 最大${premiumUntilSoon[premiumUntilSoon.length - 1]}日 / 中央${premiumUntilSoon[Math.floor(premiumUntilSoon.length / 2)]}日`);
  }
  console.log(`\n[判定]`);
  if (premiumExpired + free === 0) {
    console.log(`  → stale-active は全て「premium残存(トライアルgrant)」。recalc バグではない。`);
    console.log(`     premiumUntil 失効に伴い順次 status は正常化する見込み。`);
  } else {
    console.log(`  → premium切れ/free が active のまま ${premiumExpired + free}件。recalc 取りこぼしの可能性。`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
