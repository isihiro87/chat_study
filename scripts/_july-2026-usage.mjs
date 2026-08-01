/**
 * 2026年7月 公式LINE「チャットでスタディ（一問一答）」月次利用状況スナップショット。
 * count() 集計＋単一 doc 取得のみ（全件スキャンなし）。
 * 実行: node scripts/_july-2026-usage.mjs
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const PROJECT_ID = "chatstudy-63477";

// JST 月境界（UTC）
const JUL_START = Date.UTC(2026, 5, 30, 15, 0, 0); // 2026-07-01 00:00 JST
const AUG_START = Date.UTC(2026, 6, 31, 15, 0, 0); // 2026-08-01 00:00 JST
const JUN_START = Date.UTC(2026, 4, 31, 15, 0, 0); // 2026-06-01 00:00 JST

const ts = (ms) => Timestamp.fromMillis(ms);

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: PROJECT_ID });
  const db = getFirestore();
  const users = db.collection("users");
  const answers = db.collection("answers");

  const cnt = async (label, q) => {
    try {
      return (await q.count().get()).data().count;
    } catch (e) {
      console.log(`  [skip] ${label}: ${String(e.message).slice(0, 120)}`);
      return null;
    }
  };

  const out = {};

  // --- 配信通数 ---
  for (const m of ["2026-06", "2026-07"]) {
    const snap = await db.doc(`deliveryStats/${m}`).get();
    out[`delivery_${m}`] = snap.exists ? snap.data() : null;
  }
  // --- AIコスト ---
  for (const m of ["2026-06", "2026-07"]) {
    const snap = await db.doc(`aiCostStats/${m}`).get();
    out[`ai_${m}`] = snap.exists ? snap.data() : null;
  }

  // --- ユーザー ---
  out.totalUsers = await cnt("total", users);
  out.blocked = await cnt("blocked", users.where("blocked", "==", true));
  out.newJul = await cnt(
    "newJul",
    users.where("onboardingStartedAt", ">=", ts(JUL_START)).where("onboardingStartedAt", "<", ts(AUG_START))
  );
  out.newJun = await cnt(
    "newJun",
    users.where("onboardingStartedAt", ">=", ts(JUN_START)).where("onboardingStartedAt", "<", ts(JUL_START))
  );
  out.usersBeforeJul = await cnt("usersBeforeJul", users.where("onboardingStartedAt", "<", ts(JUL_START)));

  // 7月中に回答した人（lastAnsweredAt が7月内 = 8/1時点でほぼ「7月アクティブ」）
  out.lastAnsJul = await cnt(
    "lastAnsweredInJul",
    users.where("lastAnsweredAt", ">=", ts(JUL_START)).where("lastAnsweredAt", "<", ts(AUG_START))
  );
  out.lastAnsAfterJulStart = await cnt("lastAnsweredAfterJul1", users.where("lastAnsweredAt", ">=", ts(JUL_START)));
  // 直近7日（7/25〜）
  out.lastAns7d = await cnt(
    "lastAnswered7d",
    users.where("lastAnsweredAt", ">=", ts(AUG_START - 7 * 86400000))
  );

  out.status = {};
  for (const s of ["active", "at-risk", "dormant", "churned"]) {
    out.status[s] = await cnt(`status:${s}`, users.where("status", "==", s));
  }

  // --- 回答 ---
  out.ansJul = await cnt("answersJul", answers.where("answeredAt", ">=", ts(JUL_START)).where("answeredAt", "<", ts(AUG_START)));
  out.ansJun = await cnt("answersJun", answers.where("answeredAt", ">=", ts(JUN_START)).where("answeredAt", "<", ts(JUL_START)));
  out.ansTotal = await cnt("answersTotal", answers);
  out.ansJulCorrect = await cnt(
    "answersJulCorrect",
    answers.where("isCorrect", "==", true).where("answeredAt", ">=", ts(JUL_START)).where("answeredAt", "<", ts(AUG_START))
  );
  out.ansJulWorkbook = await cnt(
    "answersJulWorkbook",
    answers.where("source", "==", "workbook").where("answeredAt", ">=", ts(JUL_START)).where("answeredAt", "<", ts(AUG_START))
  );
  out.bySubject = {};
  for (const s of ["history", "geography", "science", "english", "math"]) {
    out.bySubject[s] = await cnt(
      `subject:${s}`,
      answers.where("subject", "==", s).where("answeredAt", ">=", ts(JUL_START)).where("answeredAt", "<", ts(AUG_START))
    );
  }

  // 週次（JST 週境界ざっくり: 7/1-7, 8-14, 15-21, 22-28, 29-31）
  out.weekly = [];
  const bounds = [
    ["07/01-07", JUL_START, JUL_START + 7 * 86400000],
    ["07/08-14", JUL_START + 7 * 86400000, JUL_START + 14 * 86400000],
    ["07/15-21", JUL_START + 14 * 86400000, JUL_START + 21 * 86400000],
    ["07/22-28", JUL_START + 21 * 86400000, JUL_START + 28 * 86400000],
    ["07/29-31", JUL_START + 28 * 86400000, AUG_START],
  ];
  for (const [label, a, b] of bounds) {
    const c = await cnt(`week:${label}`, answers.where("answeredAt", ">=", ts(a)).where("answeredAt", "<", ts(b)));
    out.weekly.push([label, c]);
  }

  console.log(JSON.stringify(out, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
