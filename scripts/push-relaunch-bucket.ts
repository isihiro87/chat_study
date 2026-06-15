/**
 * 指定 preferredHour バケットの relaunch を、自動 multicast の代わりに
 * push API で 1 ユーザーずつ確実に送る（multicast の取りこぼし対策）。
 *
 * - 未発火バケットは relaunchSends lock を先回り作成して自動 multicast を抑止。
 * - 各ユーザーをセグメント(C/D/E)分類し、対応バンドルを push。
 * - per-user の 送信結果(ok/失敗+requestId)をログ＝取りこぼし確認に使える。
 *
 *   npx tsx scripts/push-relaunch-bucket.ts 20            # dry-run
 *   npx tsx scripts/push-relaunch-bucket.ts 20 --apply    # lock作成 + 個別push
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

const APPLY = process.argv.includes("--apply");
const HOUR = Number(process.argv[2]);
const TARGET_YMD = "2026-06-01";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910", "U732828c7b975479c97a104c5cbc45b7a"]);
const SCHEDULE_HHMM: Record<number, string> = { 6: "05:50", 7: "06:50", 16: "15:50", 18: "17:30", 20: "19:30" };
const HOUR_LABEL: Record<number, string> = { 6: "朝6時", 7: "朝7時", 16: "夕方4時", 18: "夕方6時", 20: "夜8時" };
const LIFF_SCOPE_URL = "https://line.chatstudy.jp/scope";
const LIFF_PREMIUM_INFO_URL = "https://liff.line.me/2009587166-k51bH4LC";
const RESTART_HINT = "※ テスト範囲設定や暗記カードのページに進めない場合は、LINE アプリを完全に終了してから開き直してください。\n（ホームに戻るだけでは更新されません。アプリ切替画面から LINE を上にスワイプ）";

function dailyLine(h: number) {
  return { type: "text", text: `⏰ ご設定の${HOUR_LABEL[h]}に、今日から毎日1問お届けします。`, wrap: true, size: "sm", color: "#92400E", weight: "bold", margin: "md" };
}
function trialInfo() {
  return { type: "flex", altText: "7日間プレミアム体験中です（登録しない限り料金はかかりません）",
    contents: { type: "bubble", size: "kilo",
      header: { type: "box", layout: "vertical", backgroundColor: "#FEF3C7", paddingAll: "14px", contents: [{ type: "text", text: "🎁 7日間プレミアム体験中", color: "#92400E", weight: "bold", size: "md" }] },
      body: { type: "box", layout: "vertical", paddingAll: "14px", spacing: "sm", contents: [
        { type: "text", text: "「追加で解く」「苦手を復習」「じっくり学ぶ」など、有料機能を 7 日間フルでお試しいただけます。", wrap: true, size: "sm", color: "#333333" },
        { type: "text", text: "登録しない限り料金はかからないよ。安心してたくさん使ってね😊", wrap: true, size: "sm", color: "#92400E", weight: "bold", margin: "md" } ] },
      footer: { type: "box", layout: "vertical", paddingAll: "14px", contents: [{ type: "button", style: "primary", color: "#F59E0B", height: "sm", action: { type: "uri", label: "プレミアムを詳しく見る", uri: LIFF_PREMIUM_INFO_URL } }] } } };
}
function header(text: string) { return { type: "box", layout: "vertical", backgroundColor: "#F59E0B", paddingAll: "14px", contents: [{ type: "text", text, color: "#FFFFFF", weight: "bold", size: "md", wrap: true }] }; }
function bundleC(h: number) {
  return [{ type: "flex", altText: "テスト範囲を設定すると出題精度が上がります",
    contents: { type: "bubble", size: "mega", header: header("📢 配信を再開しました"),
      body: { type: "box", layout: "vertical", paddingAll: "14px", spacing: "sm", contents: [ dailyLine(h),
        { type: "text", text: "テスト範囲を設定すると、その単元だけから出題されてテスト対策の精度が上がります。", wrap: true, size: "sm", color: "#333333", margin: "md" },
        { type: "text", text: RESTART_HINT, wrap: true, size: "xs", color: "#888888", margin: "md" } ] },
      footer: { type: "box", layout: "vertical", paddingAll: "14px", contents: [{ type: "button", style: "primary", color: "#F59E0B", height: "sm", action: { type: "uri", label: "範囲を設定する", uri: LIFF_SCOPE_URL } }] } } }, trialInfo()];
}
function bundleD(h: number) {
  return [{ type: "flex", altText: "公式LINE 配信を再開しました",
    contents: { type: "bubble", size: "mega", header: header("📢 配信を再開しました"),
      body: { type: "box", layout: "vertical", paddingAll: "14px", spacing: "sm", contents: [
        { type: "text", text: "公式LINE のメッセージ送信枠を増やし、配信を再開しました。通学・寝る前のスキマ時間にどうぞ！", wrap: true, size: "sm", color: "#333333" },
        dailyLine(h), { type: "text", text: RESTART_HINT, wrap: true, size: "xs", color: "#888888", margin: "md" } ] } } }, trialInfo()];
}
function bundleE(h: number) {
  return [{ type: "flex", altText: "突然の配信停止についてのお詫びと、月末までの配信再開のお知らせ",
    contents: { type: "bubble", size: "mega", header: header("🙏 突然の配信停止、すみませんでした"),
      body: { type: "box", layout: "vertical", paddingAll: "14px", spacing: "sm", contents: [
        { type: "text", text: "公式LINE のメッセージ送信上限に達してしまい、お使いいただいているのに突然配信が止まってしまいました。本当に申し訳ありませんでした。", wrap: true, size: "sm", color: "#333333" },
        { type: "text", text: "今月から送信枠を増やしました。月末まで毎日1問お送りします！", wrap: true, size: "sm", color: "#92400E", weight: "bold", margin: "md" },
        dailyLine(h), { type: "text", text: RESTART_HINT, wrap: true, size: "xs", color: "#888888", margin: "md" } ] } } }, trialInfo()];
}

function classify(x: any): "C" | "D" | "E" | "skip" {
  const line = x.lineUserId;
  if (!line || ADMIN.has(line) || x.blocked === true) return "skip";
  const g = x.grade; const hasP = (g === "中1" || g === "中2" || g === "中3") && typeof x.subject === "string" && x.subject;
  if (!hasP) return "skip";
  const ta = x.stats?.totalAnswered ?? 0;
  const sc = Array.isArray(x.testScope?.topics) && x.testScope.topics.length > 0;
  if (ta >= 1) return "E";
  return sc ? "D" : "C";
}

async function push(token: string, to: string, messages: any[]): Promise<{ ok: boolean; reqId: string | null; status: number }> {
  const res = await fetch("https://api.line.me/v2/bot/message/push", {
    method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ to, messages }),
  });
  return { ok: res.ok, reqId: res.headers.get("x-line-request-id"), status: res.status };
}

async function main() {
  if (!SCHEDULE_HHMM[HOUR]) throw new Error(`未対応の hour: ${process.argv[2]}`);
  const env = (() => { const r: Record<string, string> = {}; for (const l of readFileSync(resolve(import.meta.dirname, "../functions/.env"), "utf8").split(/\r?\n/)) { const s = l.trim(); if (!s || s.startsWith("#")) continue; const e = s.indexOf("="); if (e < 0) continue; let v = s.slice(e + 1).trim(); if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1); r[s.slice(0, e).trim()] = v; } return r; })();
  const token = env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
  if (APPLY && !token) throw new Error("token 未設定");

  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const lockKey = `${TARGET_YMD}-${SCHEDULE_HHMM[HOUR]}-h${HOUR}`;
  const us = await db.collection("users").get();
  const targets: { line: string; seg: "C" | "D" | "E"; name: string }[] = [];
  let skip = 0;
  us.docs.forEach((d) => { const x = d.data() as any; if (x.preferredHour !== HOUR) return;
    const seg = classify(x); if (seg === "skip") { skip++; return; }
    targets.push({ line: x.lineUserId, seg, name: x.displayName ?? d.id });
  });
  const dist = { C: 0, D: 0, E: 0 }; targets.forEach((t) => dist[t.seg]++);
  console.log(`\n=== ${HOUR}時バケット 個別push ${APPLY ? "【実行】" : "(DRY RUN)"} ===`);
  console.log(`lockKey: ${lockKey}（apply時に先回り作成→自動multicast抑止）`);
  console.log(`対象: ${targets.length}名（skip ${skip}）/ セグメント C=${dist.C} D=${dist.D} E=${dist.E}`);
  if (!APPLY) { console.log(`\n▶ DRY RUN。--apply で lock作成+個別push。`); return; }

  // lock 先回り作成（既存なら multicast 済みの可能性 → 警告のみ）
  const lockRef = db.doc(`relaunchSends/${lockKey}`);
  if ((await lockRef.get()).exists) console.log(`⚠️ lock 既存（自動multicastが既に走ったかも）。個別pushは続行。`);
  else await lockRef.set({ startedAt: FieldValue.serverTimestamp(), preferredHourFilter: String(HOUR), note: "manual-push-instead-of-multicast" });

  const bundle = (seg: string) => seg === "C" ? bundleC(HOUR) : seg === "D" ? bundleD(HOUR) : bundleE(HOUR);
  let ok = 0; const fails: string[] = [];
  for (const t of targets) {
    try { const r = await push(token!, t.line, bundle(t.seg)); if (r.ok) ok++; else fails.push(`${t.name}(${t.line.slice(0,8)}) status=${r.status} reqId=${r.reqId}`); }
    catch (e) { fails.push(`${t.name}(${t.line.slice(0,8)}) err=${(e as Error).message}`); }
  }
  await lockRef.set({ finishedAt: FieldValue.serverTimestamp(), pushedOk: ok, pushedFail: fails.length }, { merge: true });
  console.log(`\n✅ 個別push 完了: ok=${ok} / fail=${fails.length} / 計${targets.length}`);
  if (fails.length) { console.log("失敗一覧（取りこぼし）:"); fails.forEach((f) => console.log("  " + f)); }
}
main().catch((e) => { console.error(e); process.exit(1); });
