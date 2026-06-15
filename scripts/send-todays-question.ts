/**
 * 今日まだ配信されていないユーザーのうち、preferredHour が「既に過ぎた（=今日の
 * dailyQuiz が発火済み）」層にだけ手動で今日の1問を配信する救済スクリプト。
 * これから発火する時刻（主に20時）の人は自動配信に任せるため除外する。
 *
 * - 本番 selectAndSendQuestion（functions/lib）を呼ぶ＝daily quiz と同一形式・scope尊重。
 * - 対象: profile有 / 非admin / blocked!==true / 今日未配信 / preferredHour <= 現在JST時 (or 未設定)。
 *
 *   cd functions && npm run build && cd ..
 *   npx tsx scripts/send-todays-question.ts            # dry-run
 *   npx tsx scripts/send-todays-question.ts --apply
 */
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const APPLY = process.argv.includes("--apply");
const PROJECT = "chatstudy-63477";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910", "U732828c7b975479c97a104c5cbc45b7a"]);
const JST = 9 * 3600 * 1000;

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
  if (APPLY && !process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN) throw new Error("LINE token 未設定");
  process.env.GOOGLE_CLOUD_PROJECT ||= PROJECT;
  process.env.GCLOUD_PROJECT ||= PROJECT;

  const now = new Date();
  const jstNow = new Date(now.getTime() + JST);
  const curHour = jstNow.getUTCHours();
  const today = jstNow.toISOString().slice(0, 10);

  const { initializeApp, applicationDefault, getApps } = await import("firebase-admin/app");
  const { getFirestore } = await import("firebase-admin/firestore");
  if (getApps().length === 0) initializeApp({ credential: applicationDefault(), projectId: PROJECT });
  const db = getFirestore();

  const us = await db.collection("users").get();
  const targets: { uid: string; ph: number | null; scope: number }[] = [];
  let skipUpcoming = 0, skipDeliveredToday = 0, skipOther = 0;
  for (const d of us.docs) {
    const x = d.data() as Record<string, any>;
    const line = typeof x.lineUserId === "string" ? x.lineUserId : "";
    if (!line || ADMIN.has(line) || x.blocked === true) { skipOther++; continue; }
    const g = x.grade;
    if (!((g === "中1" || g === "中2" || g === "中3") && typeof x.subject === "string" && x.subject)) { skipOther++; continue; }
    const ld = x.lastQuestionDeliveredAt?.toDate?.();
    if (ld && new Date(ld.getTime() + JST).toISOString().slice(0, 10) === today) { skipDeliveredToday++; continue; }
    const ph = typeof x.preferredHour === "number" ? x.preferredHour : null;
    if (ph !== null && ph > curHour) { skipUpcoming++; continue; } // これから自動配信される
    targets.push({ uid: d.id, ph, scope: x.testScope?.topics?.length ?? 0 });
  }

  console.log(`\n=== 時刻経過済みユーザーへの今日の1問 手動配信 ${APPLY ? "【送信】" : "(DRY RUN)"} ===`);
  console.log(`現在JST: ${jstNow.toISOString().slice(0, 16)} (${curHour}時台) / 今日=${today}`);
  console.log(`対象: ${targets.length}名`);
  const byPh: Record<string, number> = {};
  targets.forEach((t) => { const k = t.ph === null ? "未設定" : `${t.ph}時`; byPh[k] = (byPh[k] || 0) + 1; });
  console.log(`  preferredHour別: ${JSON.stringify(byPh)} / 範囲設定ありの対象: ${targets.filter((t) => t.scope > 0).length}`);
  console.log(`除外: これから自動配信(preferredHour>${curHour})=${skipUpcoming} / 今日配信済み=${skipDeliveredToday} / 対象外=${skipOther}`);
  if (!APPLY) { console.log(`\n▶ DRY RUN。--apply で送信。`); return; }

  const mod = await import("../functions/lib/lineWebhook.js");
  let ok = 0; const errs: string[] = [];
  for (const t of targets) {
    try { await mod.selectAndSendQuestion(t.uid, { pushType: "dailyQuiz" }); ok++; }
    catch (e) { errs.push(`${t.uid}: ${(e as Error).message}`); }
  }
  console.log(`\n呼び出し完了: ${ok}/${targets.length}（エラー ${errs.length}）`);
  let deliveredNow = 0, notDelivered = 0;
  for (const t of targets) {
    const x = (await db.doc(`users/${t.uid}`).get()).data() as any;
    const ld = x?.lastQuestionDeliveredAt?.toDate?.();
    if (ld && new Date(ld.getTime() + JST).toISOString().slice(0, 10) === today) deliveredNow++; else notDelivered++;
  }
  console.log(`✅ 実配信確認: 配信済み=${deliveredNow} / 未配信のまま=${notDelivered}`);
  if (notDelivered) console.log(`  ※未配信のまま=scope該当問題なし等`);
}
main().catch((e) => { console.error(e); process.exit(1); });
