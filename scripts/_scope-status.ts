/**
 * テスト範囲設定（testScope）の現状スナップショット。
 * - 全体の設定済み率（testScope.topics あり）
 * - 直近N日登録者の設定済み率（onboardingStartedAt で絞る）
 * - 設定済みユーザーの「設定経路」内訳（testScope.lastSource）
 * - 設定済みユーザーの平均トピック数（サンプル）
 * すべて count() 集計 / レンジ+limit で全件スキャン回避。
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: FIREBASE_PROJECT_ID });
  const db = getFirestore();
  const nowMs = Number(process.argv[2]) || Date.now();

  const total = (await db.collection("users").count().get()).data().count;
  const withScope = (await db.collection("users").where("testScope.topics", "!=", null).count().get()).data().count;
  console.log(`総ユーザー数: ${total}`);
  console.log(`範囲設定済み（testScope.topicsあり）: ${withScope} / ${total} (${((withScope / total) * 100).toFixed(1)}%)`);

  // 直近登録者の設定率（onboardingStartedAt の単一レンジで読み、testScope はメモリ判定）
  console.log(`\n直近登録者の範囲設定率:`);
  const since30 = Timestamp.fromMillis(nowMs - 30 * 24 * 3600 * 1000);
  const regSnap = await db.collection("users")
    .where("onboardingStartedAt", ">=", since30)
    .limit(5000).get();
  for (const days of [3, 7, 14, 30]) {
    const cut = nowMs - days * 24 * 3600 * 1000;
    let regCount = 0, regWithScope = 0;
    for (const d of regSnap.docs) {
      const onb = d.get("onboardingStartedAt") as Timestamp | undefined;
      if (!onb || onb.toMillis() < cut) continue;
      regCount++;
      const topics = (d.get("testScope") as { topics?: unknown[] } | undefined)?.topics;
      if (Array.isArray(topics) && topics.length > 0) regWithScope++;
    }
    const rate = regCount > 0 ? ((regWithScope / regCount) * 100).toFixed(1) : "—";
    console.log(`  直近${String(days).padStart(2)}日登録: ${String(regWithScope).padStart(3)} / ${String(regCount).padStart(3)} (${rate}%)`);
  }

  // 設定経路の内訳（lastSource）。設定済みのサンプルを limit で読む。
  console.log(`\n設定経路（testScope.lastSource）内訳 / トピック数分布（サンプル最大3000）:`);
  const snap = await db.collection("users").where("testScope.topics", "!=", null).limit(3000).get();
  const bySource = new Map<string, number>();
  let topicTotal = 0, topicMin = Infinity, topicMax = 0, withTopics = 0;
  for (const d of snap.docs) {
    const ts = d.get("testScope") as { topics?: unknown[]; lastSource?: string } | undefined;
    const src = ts?.lastSource || "(不明)";
    bySource.set(src, (bySource.get(src) || 0) + 1);
    if (Array.isArray(ts?.topics)) {
      const n = ts!.topics!.length;
      topicTotal += n; withTopics++;
      if (n < topicMin) topicMin = n;
      if (n > topicMax) topicMax = n;
    }
  }
  for (const [src, c] of [...bySource.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${src.padEnd(14)}: ${String(c).padStart(4)} (${((c / snap.size) * 100).toFixed(1)}%)`);
  }
  if (withTopics > 0) {
    console.log(`\nトピック数: 平均 ${(topicTotal / withTopics).toFixed(1)} / 最小 ${topicMin} / 最大 ${topicMax}（${withTopics}件サンプル）`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
