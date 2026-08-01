/**
 * 2026年7月 補足スナップショット。
 *  (A) answers の教科別 / 正答率をサンプリング推定（月内10スライス×200件 = 2,000 read）
 *  (B) premiumFunnelEvents の7月イベント件数（複合インデックスが無ければ skip）
 * 実行: node scripts/_july-2026-usage2.mjs
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const PROJECT_ID = "chatstudy-63477";
const JUL_START = Date.UTC(2026, 5, 30, 15, 0, 0);
const AUG_START = Date.UTC(2026, 6, 31, 15, 0, 0);
const ts = (ms) => Timestamp.fromMillis(ms);

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: PROJECT_ID });
  const db = getFirestore();

  // --- (A) サンプリング ---
  const SLICES = 10;
  const PER = 200;
  const span = AUG_START - JUL_START;
  const bySubject = {};
  const bySource = {};
  let n = 0;
  let correct = 0;
  const uids = new Set();
  for (let i = 0; i < SLICES; i++) {
    const from = JUL_START + Math.floor((span * i) / SLICES);
    const snap = await db
      .collection("answers")
      .where("answeredAt", ">=", ts(from))
      .where("answeredAt", "<", ts(AUG_START))
      .orderBy("answeredAt", "asc")
      .limit(PER)
      .get();
    for (const d of snap.docs) {
      const v = d.data();
      n++;
      if (v.isCorrect === true) correct++;
      const s = typeof v.subject === "string" ? v.subject : "(none)";
      bySubject[s] = (bySubject[s] ?? 0) + 1;
      const src = typeof v.source === "string" ? v.source : "(none)";
      bySource[src] = (bySource[src] ?? 0) + 1;
      if (typeof v.uid === "string") uids.add(v.uid);
    }
  }
  console.log("=== サンプル推定 (n=" + n + ") ===");
  console.log("正答率:", ((correct / n) * 100).toFixed(1) + "%");
  console.log("教科別:", JSON.stringify(bySubject));
  console.log("source別:", JSON.stringify(bySource));
  console.log("サンプル内ユニークuid:", uids.size);

  // --- (B) funnel イベント ---
  const EVENTS = [
    "extra_question_tap",
    "weak_review_tap",
    "not_learned_tap",
    "sample_question_answered",
    "winback_sent",
    "restart_intent_detected",
    "delivery_paused",
    "delivery_resumed",
    "monthly_report_viewed",
    "tsudumon_activated",
  ];
  console.log("\n=== premiumFunnelEvents (2026-07) ===");
  for (const e of EVENTS) {
    try {
      const c = (
        await db
          .collection("premiumFunnelEvents")
          .where("eventType", "==", e)
          .where("occurredAt", ">=", ts(JUL_START))
          .where("occurredAt", "<", ts(AUG_START))
          .count()
          .get()
      ).data().count;
      console.log(`  ${e}: ${c}`);
    } catch (err) {
      console.log(`  ${e}: [skip] ${String(err.message).slice(0, 90)}`);
    }
  }
  // 全体件数（7月）
  try {
    const c = (
      await db
        .collection("premiumFunnelEvents")
        .where("occurredAt", ">=", ts(JUL_START))
        .where("occurredAt", "<", ts(AUG_START))
        .count()
        .get()
    ).data().count;
    console.log(`  (7月の全イベント): ${c}`);
  } catch (err) {
    console.log(`  (all): [skip] ${String(err.message).slice(0, 90)}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
