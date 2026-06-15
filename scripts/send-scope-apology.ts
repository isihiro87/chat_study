/**
 * 出題範囲をまだ設定できていないユーザーに、範囲設定の不具合のお詫びと
 * 改めての設定案内を push する。
 *
 * 対象: profile(学年+教科)あり / 非admin / blocked!==true / testScope 未設定。
 *   npx tsx scripts/send-scope-apology.ts            # dry-run
 *   npx tsx scripts/send-scope-apology.ts --apply
 */
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { initializeApp, applicationDefault, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const APPLY = process.argv.includes("--apply");
const PROJECT = "chatstudy-63477";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910", "U732828c7b975479c97a104c5cbc45b7a"]);
const LIFF_SCOPE_URL = "https://line.chatstudy.jp/scope";

function loadEnv() {
  const dir = dirname(fileURLToPath(import.meta.url));
  try {
    for (const line of readFileSync(resolve(dir, "../functions/.env"), "utf8").split("\n")) {
      const t = line.trim(); if (!t || t.startsWith("#")) continue;
      const eq = t.indexOf("="); if (eq < 0) continue;
      let v = t.slice(eq + 1).trim();
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
      const k = t.slice(0, eq).trim(); if (!(k in process.env)) process.env[k] = v;
    }
  } catch { /* ignore */ }
}

function apologyFlex() {
  return {
    type: "flex", altText: "出題範囲設定の不具合のお詫びと、改めての設定のお願い",
    contents: { type: "bubble", size: "mega",
      header: { type: "box", layout: "vertical", backgroundColor: "#F59E0B", paddingAll: "14px",
        contents: [{ type: "text", text: "🙏 出題範囲設定の不具合のお詫び", color: "#FFFFFF", weight: "bold", size: "md", wrap: true }] },
      body: { type: "box", layout: "vertical", paddingAll: "14px", spacing: "sm", contents: [
        { type: "text", text: "出題範囲の設定がうまくできない不具合がありました。ご不便をおかけして大変申し訳ありません。", wrap: true, size: "sm", color: "#333333" },
        { type: "text", text: "現在は修正済みです。お手数ですが、下のボタンから改めて出題範囲の設定をお試しください。", wrap: true, size: "sm", color: "#92400E", weight: "bold", margin: "md" },
        { type: "text", text: "※ 未設定のままでも、学年全体から毎日1問は届きます。範囲を設定すると、その単元にしぼって出題されます。", wrap: true, size: "xs", color: "#888888", margin: "md" },
        { type: "text", text: "※ 設定画面が開けない場合は、LINE アプリを完全に終了してから開き直してください（アプリ切替画面から LINE を上にスワイプ）。", wrap: true, size: "xs", color: "#888888", margin: "md" },
      ] },
      footer: { type: "box", layout: "vertical", paddingAll: "14px",
        contents: [{ type: "button", style: "primary", color: "#F59E0B", height: "sm",
          action: { type: "uri", label: "出題範囲を設定する", uri: LIFF_SCOPE_URL } }] } } };
}

async function main() {
  loadEnv();
  const token = process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
  if (APPLY && !token) throw new Error("LINE token 未設定");
  if (getApps().length === 0) initializeApp({ credential: applicationDefault(), projectId: PROJECT });
  const db = getFirestore();

  const us = await db.collection("users").get();
  const targets: { line: string; name: string }[] = [];
  for (const d of us.docs) {
    const x = d.data() as Record<string, any>;
    const line = typeof x.lineUserId === "string" ? x.lineUserId : "";
    if (!line || ADMIN.has(line) || x.blocked === true) continue;
    const g = x.grade;
    if (!((g === "中1" || g === "中2" || g === "中3") && typeof x.subject === "string" && x.subject)) continue;
    const set = Array.isArray(x.testScope?.topics) && x.testScope.topics.length > 0;
    if (set) continue;
    targets.push({ line, name: x.displayName ?? d.id });
  }

  console.log(`\n=== 範囲未設定ユーザーへのお詫び＋再設定案内 ${APPLY ? "【送信】" : "(DRY RUN)"} ===`);
  console.log(`対象: ${targets.length}名（profile有・非admin・非blocked・testScope未設定）`);
  if (!APPLY) { console.log(`\n▶ DRY RUN。--apply で push。`); return; }

  let ok = 0; const fails: string[] = [];
  for (const t of targets) {
    try {
      const res = await fetch("https://api.line.me/v2/bot/message/push", {
        method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ to: t.line, messages: [apologyFlex()] }),
      });
      if (res.ok) ok++; else fails.push(`${t.name}(${t.line.slice(0, 8)}) ${res.status} ${res.headers.get("x-line-request-id")}`);
    } catch (e) { fails.push(`${t.name}(${t.line.slice(0, 8)}) ${(e as Error).message}`); }
  }
  console.log(`\n✅ 送信完了: ok=${ok} / fail=${fails.length} / 計${targets.length}`);
  if (fails.length) fails.slice(0, 20).forEach((f) => console.log("  " + f));
}
main().catch((e) => { console.error(e); process.exit(1); });
