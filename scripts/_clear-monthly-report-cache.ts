/**
 * 指定ユーザーの月末レポートキャッシュ（users/{uid}.monthlyReport）を消す。
 * 同月レポートは生成済みだとキャッシュが返るため、作り直して確認したいときに使う。
 *
 *   npx tsx scripts/_clear-monthly-report-cache.ts U429b1d951fc7236c9e8e85e5ca96b910
 */

import { applicationDefault, initializeApp } from "firebase-admin/app";
import { FieldValue, getFirestore } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";

async function main(): Promise<void> {
  const raw = process.argv[2];
  if (!raw) throw new Error("usage: ... <lineUserId or uid>");
  const uid = raw.startsWith("line:") ? raw : `line:${raw}`;

  initializeApp({
    credential: applicationDefault(),
    projectId: FIREBASE_PROJECT_ID,
  });
  const db = getFirestore();
  await db.doc(`users/${uid}`).set(
    { monthlyReport: FieldValue.delete() },
    { merge: true }
  );
  console.log(`[clear-monthly-cache] cleared monthlyReport for ${uid}`);
}

main().catch((err) => {
  console.error("[clear-monthly-cache] fatal:", err);
  process.exit(1);
});
