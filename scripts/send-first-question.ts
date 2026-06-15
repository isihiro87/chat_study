/**
 * 一度も問題を配信されていない（lastQuestionDeliveredAt 未設定）ユーザーに
 * 1問目を送る。配信停止期間に取りこぼした層の救済。
 *
 * - 本番の selectAndSendQuestion（functions/lib）を呼ぶので daily quiz と同一形式。
 * - bypassDailyLimit は使わない（万一その日配信済みなら内部でスキップ）。
 * - 対象: profile(学年+教科)あり / 非admin / blocked!==true / lastQuestionDeliveredAt 未設定。
 *
 *   cd functions && npm run build && cd ..
 *   npx tsx scripts/send-first-question.ts            # dry-run
 *   npx tsx scripts/send-first-question.ts --apply    # 送信
 */
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const APPLY = process.argv.includes("--apply");
const PROJECT = "chatstudy-63477";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910", "U732828c7b975479c97a104c5cbc45b7a"]);

function loadEnv() {
  const dir = dirname(fileURLToPath(import.meta.url));
  for (const line of readFileSync(resolve(dir, "../functions/.env"), "utf8").split("\n")) {
    const t = line.trim(); if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("="); if (eq < 0) continue;
    let v = t.slice(eq + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    const k = t.slice(0, eq).trim(); if (!(k in process.env)) process.env[k] = v;
  }
}

async function main() {
  loadEnv();
  if (APPLY && !process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN) throw new Error("LINE token 未設定（functions/.env）");
  process.env.GOOGLE_CLOUD_PROJECT ||= PROJECT;
  process.env.GCLOUD_PROJECT ||= PROJECT;

  const { initializeApp, applicationDefault, getApps } = await import("firebase-admin/app");
  const { getFirestore } = await import("firebase-admin/firestore");
  if (getApps().length === 0) initializeApp({ credential: applicationDefault(), projectId: PROJECT });
  const db = getFirestore();

  const us = await db.collection("users").get();
  const targets: { uid: string; line: string; grade: string; subject: string; scope: number }[] = [];
  for (const d of us.docs) {
    const x = d.data() as Record<string, any>;
    const line = typeof x.lineUserId === "string" ? x.lineUserId : "";
    if (!line || ADMIN.has(line)) continue;
    if (x.blocked === true) continue;
    const g = x.grade;
    if (!((g === "中1" || g === "中2" || g === "中3") && typeof x.subject === "string" && x.subject)) continue;
    if (x.lastQuestionDeliveredAt) continue; // 既に1回でも配信済みなら対象外
    targets.push({ uid: d.id, line, grade: g, subject: x.subject, scope: x.testScope?.topics?.length ?? 0 });
  }

  console.log(`\n=== 1問目未送信ユーザーへの初回配信 ${APPLY ? "【送信】" : "(DRY RUN)"} ===`);
  console.log(`対象: ${targets.length}名`);
  const byGrade: Record<string, number> = {};
  targets.forEach((t) => { byGrade[t.grade] = (byGrade[t.grade] || 0) + 1; });
  console.log(`学年別: ${JSON.stringify(byGrade)} / 範囲設定ありの対象: ${targets.filter((t) => t.scope > 0).length}`);
  if (!APPLY) { console.log(`\n▶ DRY RUN。--apply で送信。`); return; }

  const mod = await import("../functions/lib/lineWebhook.js");
  if (typeof mod.selectAndSendQuestion !== "function") throw new Error("selectAndSendQuestion 未export");

  let ok = 0; const errs: string[] = [];
  for (const t of targets) {
    try { await mod.selectAndSendQuestion(t.uid, { pushType: "dailyQuiz" }); ok++; }
    catch (e) { errs.push(`${t.uid}: ${(e as Error).message}`); }
  }
  console.log(`\n呼び出し完了: ${ok}/${targets.length}（エラー ${errs.length}）`);
  if (errs.length) errs.slice(0, 20).forEach((e) => console.log("  " + e));

  // 実際に配信されたか（lastQuestionDeliveredAt が今日になったか）を検証
  const JST = 9 * 3600 * 1000; const today = new Date(Date.now() + JST).toISOString().slice(0, 10);
  let deliveredNow = 0, notDelivered = 0;
  for (const t of targets) {
    const x = (await db.doc(`users/${t.uid}`).get()).data() as any;
    const ld = x?.lastQuestionDeliveredAt?.toDate?.();
    if (ld && new Date(ld.getTime() + JST).toISOString().slice(0, 10) === today) deliveredNow++;
    else notDelivered++;
  }
  console.log(`\n✅ 実配信確認: 配信済み=${deliveredNow} / 未配信のまま=${notDelivered}`);
  if (notDelivered > 0) console.log(`  ※ 未配信のまま = scope に合致する問題が無い等（要確認）`);
}
main().catch((e) => { console.error(e); process.exit(1); });
