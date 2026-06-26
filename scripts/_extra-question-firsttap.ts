/**
 * 代理指標: 「もう一問解く」(extra_question) の初回タップ日別分布。
 * users.firstExtraQuestionAt を直近 14 日のレンジで取得し JST 日別に集計。
 * read は range マッチ件数のみ（全件スキャンしない / CLAUDE.md 規律）。
 *
 * 注意: firstExtraQuestionAt は「初回タップのみ」記録される一度きりフィールド。
 * リピートタップは見えないため真のクリック率ではなく方向性の代理指標。
 * 配置変更デプロイ: 2026-06-17 05:42 UTC = 14:42 JST。
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";

function jstDayKey(d: Date): string {
  const jst = new Date(d.getTime() + 9 * 3600 * 1000);
  return jst.toISOString().slice(0, 10);
}

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: FIREBASE_PROJECT_ID });
  const db = getFirestore();

  // 直近 14 日のレンジ。終端を引数 nowMs（固定）で渡して再現性確保。
  const nowMs = Number(process.argv[2]); // epoch ms (UTC)
  const since = new Date(nowMs - 14 * 24 * 3600 * 1000);

  const snap = await db
    .collection("users")
    .where("firstExtraQuestionAt", ">=", Timestamp.fromDate(since))
    .get();

  console.log(`[firsttap] matched users (last 14d): ${snap.size}`);

  const byDay = new Map<string, number>();
  for (const doc of snap.docs) {
    const ts = doc.get("firstExtraQuestionAt") as Timestamp | undefined;
    if (!ts) continue;
    const k = jstDayKey(ts.toDate());
    byDay.set(k, (byDay.get(k) ?? 0) + 1);
  }

  const keys = [...byDay.keys()].sort();
  console.log("\nJST日別 初回タップ数 (firstExtraQuestionAt):");
  for (const k of keys) {
    const after = k >= "2026-06-17" ? "  ← 配置変更後(6/17 14:42 JST〜)" : "";
    console.log(`  ${k}: ${byDay.get(k)}${after}`);
  }

  // 配置変更前後の単純比較（6/17 は午後デプロイなので部分日）
  let before = 0, on17 = 0, on18 = 0;
  for (const [k, v] of byDay) {
    if (k < "2026-06-17") before += v;
    else if (k === "2026-06-17") on17 += v;
    else on18 += v;
  }
  console.log(`\nまとめ: 6/16以前合計=${before} / 6/17=${on17} / 6/18=${on18}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
