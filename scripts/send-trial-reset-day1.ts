/**
 * 送信枠超過で体験が届かなかった 1 名の trial を Day1 にリセットし、
 * 仕切り直しのお知らせ flex を push する単発スクリプト。
 *
 * 対象: line:U83169ff20f9c098a50827f605f19de32
 *   - trialStartedAt → 今
 *   - premiumUntil   → 今 + 7 日
 *   - lastTrialReminderAt / Legacy → クリア（Day1/3/6 を再発火）
 *
 * 使い方: npx tsx scripts/send-trial-reset-day1.ts
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, FieldValue, Timestamp } from "firebase-admin/firestore";

const TARGET_LINE_USER_ID = "U83169ff20f9c098a50827f605f19de32";
const TARGET_DOC_ID = `line:${TARGET_LINE_USER_ID}`;
const TRIAL_DAYS = 7;
const LIFF_PREMIUM_INFO_URL = "https://liff.line.me/2009587166-k51bH4LC";
const ENV_FILE = resolve(import.meta.dirname, "../functions/.env");

function parseDotenv(text: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const line of text.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq === -1) continue;
    const k = t.slice(0, eq).trim();
    let v = t.slice(eq + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    result[k] = v;
  }
  return result;
}

function bubbleTrialResetDay1() {
  return {
    type: "flex",
    altText: "プレミアム体験を1日目にリセットしました（6/8まで、登録しない限り料金はかかりません）",
    contents: {
      type: "bubble",
      size: "mega",
      header: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#F59E0B",
        paddingAll: "14px",
        contents: [
          {
            type: "text",
            text: "🎁 プレミアム体験、仕切り直しました！",
            color: "#FFFFFF",
            weight: "bold",
            size: "md",
            wrap: true,
          },
        ],
      },
      body: {
        type: "box",
        layout: "vertical",
        paddingAll: "14px",
        spacing: "sm",
        contents: [
          {
            type: "text",
            text: "先日は公式LINEの送信上限の都合で、せっかくのプレミアム体験中に毎日の問題をお届けできず、申し訳ありませんでした🙏",
            wrap: true,
            size: "sm",
            color: "#333333",
          },
          {
            type: "text",
            text: "本日から「7日間プレミアム体験」を1日目にリセットしました。6/8まで、追加で解く・苦手を復習・じっくり学ぶ など有料機能をフルでお試しいただけます。",
            wrap: true,
            size: "sm",
            color: "#92400E",
            weight: "bold",
            margin: "md",
          },
          {
            type: "text",
            text: "登録しない限り料金はかからないので、安心してたくさん使ってくださいね😊",
            wrap: true,
            size: "sm",
            color: "#333333",
            margin: "md",
          },
        ],
      },
      footer: {
        type: "box",
        layout: "vertical",
        paddingAll: "14px",
        contents: [
          {
            type: "button",
            style: "primary",
            color: "#F59E0B",
            height: "sm",
            action: {
              type: "uri",
              label: "プレミアムを詳しく見る",
              uri: LIFF_PREMIUM_INFO_URL,
            },
          },
        ],
      },
    },
  };
}

async function main() {
  const env = parseDotenv(readFileSync(ENV_FILE, "utf8"));
  const token = env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
  if (!token) throw new Error("LINE_MESSAGING_CHANNEL_ACCESS_TOKEN 未設定");

  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();

  // --- 1) Day1 リセット ---
  const ref = db.doc(`users/${TARGET_DOC_ID}`);
  const snap = await ref.get();
  if (!snap.exists) throw new Error(`user doc not found: ${TARGET_DOC_ID}`);

  const now = new Date();
  const until = new Date(now.getTime() + TRIAL_DAYS * 24 * 3600 * 1000);
  await ref.set(
    {
      trialStartedAt: Timestamp.fromDate(now),
      premiumUntil: Timestamp.fromDate(until),
      plan: "premium",
      planSource: "trial",
      status: "active",
      lastTrialReminderAt: {},
      lastTrialReminderAtLegacy: FieldValue.delete(),
      trialResetDay1At: Timestamp.fromDate(now),
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
  console.log(
    `✓ Day1 reset: trialStartedAt=${now.toISOString()} premiumUntil=${until.toISOString()}`
  );

  // --- 2) お知らせ push ---
  const res = await fetch("https://api.line.me/v2/bot/message/push", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ to: TARGET_LINE_USER_ID, messages: [bubbleTrialResetDay1()] }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(
      `LINE push ${res.status} reqId=${res.headers.get("x-line-request-id")} body=${body}`
    );
  }
  console.log(`✓ push ok requestId=${res.headers.get("x-line-request-id")}`);
}

main().catch((err) => {
  console.error("[trial-reset-day1] fatal:", err);
  process.exit(1);
});
