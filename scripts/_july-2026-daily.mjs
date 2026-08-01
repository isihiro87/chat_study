/** 2026年7月の日別回答数・日別新規登録数（count() のみ）。 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
const JUL_START = Date.UTC(2026, 5, 30, 15, 0, 0);
const DAY = 86400000;
const ts = (ms) => Timestamp.fromMillis(ms);
initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
const db = getFirestore();
const rows = [];
for (let d = 0; d < 32; d++) {
  const a = JUL_START + d * DAY, b = a + DAY;
  const ans = (await db.collection("answers").where("answeredAt", ">=", ts(a)).where("answeredAt", "<", ts(b)).count().get()).data().count;
  const usr = (await db.collection("users").where("onboardingStartedAt", ">=", ts(a)).where("onboardingStartedAt", "<", ts(b)).count().get()).data().count;
  const day = new Date(a + 9 * 3600000).toISOString().slice(0, 10);
  rows.push([day, ans, usr]);
}
console.log("date,answers,newUsers");
for (const r of rows) console.log(r.join(","));
