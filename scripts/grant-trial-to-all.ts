/**
 * relaunch で「7日間プレミアム体験中」と案内した全ユーザーに、実際に 7 日 trial を
 * 付与する一回限りの remediation（plan 付与 + LINE リッチメニュー trial 切替）。
 *
 * 対象: profile(学年+教科)あり / 非admin / blocked!==true / plan!=="premium"
 *
 *   npx tsx scripts/grant-trial-to-all.ts            # dry-run
 *   npx tsx scripts/grant-trial-to-all.ts --apply    # 実書き込み + メニュー切替
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, FieldValue, Timestamp } from "firebase-admin/firestore";

const APPLY = process.argv.includes("--apply");
const ADMIN = new Set([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);
const TRIAL_MS = 7 * 24 * 60 * 60 * 1000;

function parseDotenv(text: string): Record<string, string> {
  const r: Record<string, string> = {};
  for (const line of text.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq === -1) continue;
    let v = t.slice(eq + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    r[t.slice(0, eq).trim()] = v;
  }
  return r;
}

async function linkMenu(token: string, menuId: string, lineUserId: string): Promise<boolean> {
  const res = await fetch(`https://api.line.me/v2/bot/user/${lineUserId}/richmenu/${menuId}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.ok;
}

async function main() {
  const env = parseDotenv(readFileSync(resolve(import.meta.dirname, "../functions/.env"), "utf8"));
  const token = env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
  const trialMenu = env.LINE_RICHMENU_TRIAL_ID || env.LINE_RICHMENU_PREMIUM_ID;
  if (APPLY && (!token || !trialMenu)) throw new Error("token / trial richmenu id 未設定");

  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const now = new Date();
  const trialEnd = Timestamp.fromDate(new Date(now.getTime() + TRIAL_MS));

  const us = await db.collection("users").get();
  const targets: { ref: FirebaseFirestore.DocumentReference; uid: string; line: string; ph: unknown }[] = [];
  let skipPrem = 0, skipNoProfile = 0, skipBlocked = 0, skipAdmin = 0;
  for (const d of us.docs) {
    const x = d.data() as Record<string, unknown>;
    const line = typeof x.lineUserId === "string" ? x.lineUserId : "";
    if (line && ADMIN.has(line)) { skipAdmin++; continue; }
    if (x.blocked === true) { skipBlocked++; continue; }
    const g = x.grade;
    if (!((g === "中1" || g === "中2" || g === "中3") && typeof x.subject === "string" && x.subject)) { skipNoProfile++; continue; }
    if (x.plan === "premium") { skipPrem++; continue; }
    targets.push({ ref: d.ref, uid: d.id, line, ph: x.preferredHour });
  }

  console.log(`\n=== 全ユーザー trial 付与 ${APPLY ? "【実書込+メニュー切替】" : "(DRY RUN)"} ===`);
  console.log(`users総数: ${us.size} / 除外: admin=${skipAdmin} blocked=${skipBlocked} profile無=${skipNoProfile} 既premium=${skipPrem}`);
  console.log(`付与対象: ${targets.length}名 / うち lineUserId 有: ${targets.filter((t) => t.line).length}名`);
  console.log(`付与: plan=premium, planSource=trial, premiumUntil=+7日(${trialEnd.toDate().toISOString()}), lockedMonthlyPrice=680, richMenuType=trial`);
  if (!APPLY) { console.log(`\n▶ DRY RUN。--apply で実行。`); return; }

  // 1) Firestore 付与（高速・先に確定）
  let granted = 0;
  for (let i = 0; i < targets.length; i += 400) {
    const batch = db.batch();
    for (const t of targets.slice(i, i + 400)) {
      batch.set(t.ref, {
        plan: "premium", planSource: "trial", trialStartedAt: FieldValue.serverTimestamp(),
        premiumUntil: trialEnd, priceLockExpiresAt: trialEnd, lockedMonthlyPrice: 680,
        richMenuType: "trial", updatedAt: FieldValue.serverTimestamp(),
      }, { merge: true });
      granted++;
    }
    await batch.commit();
  }
  console.log(`✅ Firestore 付与: ${granted}名`);

  // 2) リッチメニュー trial 切替（API・1件ずつ）
  let ok = 0, fail = 0;
  for (const t of targets) {
    if (!t.line) continue;
    try { (await linkMenu(token!, trialMenu!, t.line)) ? ok++ : fail++; }
    catch { fail++; }
  }
  console.log(`✅ リッチメニュー切替: ok=${ok} fail=${fail}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
