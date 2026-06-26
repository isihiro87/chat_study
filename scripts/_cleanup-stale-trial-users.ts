/**
 * 期限切れトライアル状態のまま残るユーザーを「push を一切送らず」フィールドだけ整える。
 * expireTrialUsers が GCP から削除済みで自動清掃されないため、その降格部分だけを
 * 安全に肩代わりする（メッセージ push もリッチメニュー API も呼ばない）。
 *
 * 対象: planSource=="trial" & plan=="premium" のうち premiumUntil が過去のもの。
 *   → plan="free", planSource="trial_expired", trialExpiredAt=now に更新。
 * 除外: premiumUntil が未来（=まだ有効なトライアル）／ stripeSubscriptionId 持ち（課金移行待ち）。
 *
 * 既定は dry-run。実書き込みは `--commit`。
 * richMenuType は変更しない（実際の表示メニューは LINE 側のままで、機能は全無料のため実害なし）。
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";

async function main() {
  const commit = process.argv.includes("--commit");
  initializeApp({ credential: applicationDefault(), projectId: FIREBASE_PROJECT_ID });
  const db = getFirestore();

  const snap = await db.collection("users")
    .where("planSource", "==", "trial")
    .where("plan", "==", "premium")
    .get();
  console.log(`[cleanup] 対象候補(planSource=trial & plan=premium): ${snap.size}`);

  const now = Date.now();
  let toFix = 0, activeSkipped = 0, stripeSkipped = 0, noUntilFixed = 0;
  const targets: string[] = [];
  for (const doc of snap.docs) {
    const data = doc.data();
    if (typeof data.stripeSubscriptionId === "string" && data.stripeSubscriptionId.length > 0) {
      stripeSkipped++; continue;
    }
    const until = data.premiumUntil as { toDate?: () => Date } | undefined | null;
    const untilMs = until && typeof until.toDate === "function" ? until.toDate().getTime() : null;
    if (untilMs !== null && untilMs > now) { activeSkipped++; continue; } // まだ有効なtrial→放置
    if (untilMs === null) noUntilFixed++; // premiumUntil不正も降格対象に含める
    toFix++; targets.push(doc.id);
  }

  console.log(`  降格対象: ${toFix}（うちpremiumUntil不正 ${noUntilFixed}）`);
  console.log(`  有効trialのため除外: ${activeSkipped}`);
  console.log(`  Stripe課金移行待ちのため除外: ${stripeSkipped}`);

  if (!commit) {
    console.log(`\n[dry-run] 書き込みなし。実行するには --commit を付与。`);
    console.log(`  対象uid(先頭5): ${targets.slice(0, 5).join(", ")}`);
    return;
  }

  let wrote = 0;
  // 500件ごとに batch commit（Firestore上限）
  let batch = db.batch();
  let inBatch = 0;
  for (const uid of targets) {
    batch.set(db.doc(`users/${uid}`), {
      plan: "free",
      planSource: "trial_expired",
      trialExpiredAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    }, { merge: true });
    inBatch++; wrote++;
    if (inBatch >= 400) { await batch.commit(); batch = db.batch(); inBatch = 0; console.log(`  ${wrote}/${targets.length}`); }
  }
  if (inBatch > 0) await batch.commit();
  console.log(`[cleanup] 完了: ${wrote} 件を free/trial_expired に更新（push送信なし）`);
}

main().catch((e) => { console.error(e); process.exit(1); });
