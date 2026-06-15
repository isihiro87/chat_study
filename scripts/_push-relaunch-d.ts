/**
 * 指定 lineUserId 1名に、Segment D（配信再開）＋ trial 案内バブルを push する。
 * 17:30(18時)multicast の取りこぼし救済・配信検証用。
 *   npx tsx scripts/_push-relaunch-d.ts <lineUserId> [hourLabel]
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const LIFF_PREMIUM_INFO_URL = "https://liff.line.me/2009587166-k51bH4LC";
const RESTART_HINT =
  "※ テスト範囲設定や暗記カードのページに進めない場合は、LINE アプリを完全に終了してから開き直してください。\n（ホームに戻るだけでは更新されません。アプリ切替画面から LINE を上にスワイプ）";

function parseDotenv(t: string): Record<string, string> {
  const r: Record<string, string> = {};
  for (const line of t.split(/\r?\n/)) {
    const s = line.trim(); if (!s || s.startsWith("#")) continue;
    const eq = s.indexOf("="); if (eq === -1) continue;
    let v = s.slice(eq + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    r[s.slice(0, eq).trim()] = v;
  }
  return r;
}

function bubbleRedelivery(hourLabel: string) {
  return {
    type: "flex", altText: "公式LINE 配信を再開しました",
    contents: { type: "bubble", size: "mega",
      header: { type: "box", layout: "vertical", backgroundColor: "#F59E0B", paddingAll: "14px",
        contents: [{ type: "text", text: "📢 配信を再開しました", color: "#FFFFFF", weight: "bold", size: "md" }] },
      body: { type: "box", layout: "vertical", paddingAll: "14px", spacing: "sm", contents: [
        { type: "text", text: "公式LINE のメッセージ送信枠を増やし、配信を再開しました。通学・寝る前のスキマ時間にどうぞ！", wrap: true, size: "sm", color: "#333333" },
        { type: "text", text: `⏰ ご設定の${hourLabel}に、今日から毎日1問お届けします。`, wrap: true, size: "sm", color: "#92400E", weight: "bold", margin: "md" },
        { type: "text", text: RESTART_HINT, wrap: true, size: "xs", color: "#888888", margin: "md" },
      ] } } };
}
function bubbleTrialInfo() {
  return {
    type: "flex", altText: "7日間プレミアム体験中です（登録しない限り料金はかかりません）",
    contents: { type: "bubble", size: "kilo",
      header: { type: "box", layout: "vertical", backgroundColor: "#FEF3C7", paddingAll: "14px",
        contents: [{ type: "text", text: "🎁 7日間プレミアム体験中", color: "#92400E", weight: "bold", size: "md" }] },
      body: { type: "box", layout: "vertical", paddingAll: "14px", spacing: "sm", contents: [
        { type: "text", text: "「追加で解く」「苦手を復習」「じっくり学ぶ」など、有料機能を 7 日間フルでお試しいただけます。", wrap: true, size: "sm", color: "#333333" },
        { type: "text", text: "登録しない限り料金はかからないよ。安心してたくさん使ってね😊", wrap: true, size: "sm", color: "#92400E", weight: "bold", margin: "md" },
      ] },
      footer: { type: "box", layout: "vertical", paddingAll: "14px",
        contents: [{ type: "button", style: "primary", color: "#F59E0B", height: "sm",
          action: { type: "uri", label: "プレミアムを詳しく見る", uri: LIFF_PREMIUM_INFO_URL } }] } } };
}

async function main() {
  const uid = process.argv[2];
  const hourLabel = process.argv[3] || "夕方6時";
  if (!uid || !uid.startsWith("U")) { console.error("usage: tsx scripts/_push-relaunch-d.ts U<id> [hourLabel]"); process.exit(1); }
  const env = parseDotenv(readFileSync(resolve(import.meta.dirname, "../functions/.env"), "utf8"));
  const token = env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
  if (!token) throw new Error("token 未設定");
  const res = await fetch("https://api.line.me/v2/bot/message/push", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ to: uid, messages: [bubbleRedelivery(hourLabel), bubbleTrialInfo()] }),
  });
  const reqId = res.headers.get("x-line-request-id");
  if (!res.ok) throw new Error(`push ${res.status} reqId=${reqId} body=${await res.text()}`);
  console.log(`✓ push ok to ${uid} requestId=${reqId}`);
}
main().catch((e) => { console.error("[push-d] fatal:", e); process.exit(1); });
