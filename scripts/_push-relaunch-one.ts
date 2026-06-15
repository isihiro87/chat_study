/**
 * 指定 lineUserId 1 名に、Segment E と同じ flex バブル
 * (お詫び+月末まで配信 + trial 案内) を push する。テスト用。
 *
 * 使い方:
 *   npx tsx scripts/_push-relaunch-one.ts U429b1d951fc7236c9e8e85e5ca96b910
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const ENV_FILE = resolve(import.meta.dirname, "../functions/.env");

const LIFF_PREMIUM_INFO_URL = "https://liff.line.me/2009587166-k51bH4LC";

const RESTART_HINT_TEXT =
  "※ テスト範囲設定や暗記カードのページに進めない場合は、LINE アプリを完全に終了してから開き直してください。\n（ホームに戻るだけでは更新されません。アプリ切替画面から LINE を上にスワイプ）";

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

function bubbleApologyAnswered() {
  return {
    type: "flex",
    altText: "突然の配信停止についてのお詫びと、月末までの配信再開のお知らせ",
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
            text: "🙏 突然の配信停止、すみませんでした",
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
            text: "公式LINE のメッセージ送信上限に達してしまい、お使いいただいているのに突然配信が止まってしまいました。本当に申し訳ありませんでした。",
            wrap: true,
            size: "sm",
            color: "#333333",
          },
          {
            type: "text",
            text: "今月から送信枠を増やしました。月末まで毎日1問お送りします！",
            wrap: true,
            size: "sm",
            color: "#92400E",
            weight: "bold",
            margin: "md",
          },
          {
            type: "text",
            text: "⏰ ご設定の朝6時に、今日から毎日1問お届けします。",
            wrap: true,
            size: "sm",
            color: "#92400E",
            weight: "bold",
            margin: "md",
          },
          {
            type: "text",
            text: RESTART_HINT_TEXT,
            wrap: true,
            size: "xs",
            color: "#888888",
            margin: "md",
          },
        ],
      },
    },
  };
}

function bubbleTrialInfo() {
  return {
    type: "flex",
    altText: "7日間プレミアム体験中です（登録しない限り料金はかかりません）",
    contents: {
      type: "bubble",
      size: "kilo",
      header: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#FEF3C7",
        paddingAll: "14px",
        contents: [
          {
            type: "text",
            text: "🎁 7日間プレミアム体験中",
            color: "#92400E",
            weight: "bold",
            size: "md",
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
            text: "「追加で解く」「苦手を復習」「じっくり学ぶ」など、有料機能を 7 日間フルでお試しいただけます。",
            wrap: true,
            size: "sm",
            color: "#333333",
          },
          {
            type: "text",
            text: "登録しない限り料金はかからないよ。安心してたくさん使ってね😊",
            wrap: true,
            size: "sm",
            color: "#92400E",
            weight: "bold",
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
  const uid = process.argv[2];
  if (!uid || !uid.startsWith("U")) {
    console.error("usage: npx tsx scripts/_push-relaunch-one.ts U<lineUserId>");
    process.exit(1);
  }
  const env = parseDotenv(readFileSync(ENV_FILE, "utf8"));
  const token = env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
  if (!token) throw new Error("LINE_MESSAGING_CHANNEL_ACCESS_TOKEN 未設定");

  const messages = [bubbleApologyAnswered(), bubbleTrialInfo()];
  const res = await fetch("https://api.line.me/v2/bot/message/push", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ to: uid, messages }),
  });
  if (!res.ok) {
    const body = await res.text();
    const reqId = res.headers.get("x-line-request-id");
    throw new Error(`LINE push ${res.status} reqId=${reqId} body=${body}`);
  }
  console.log(
    `✓ push to ${uid} ok, requestId=${res.headers.get("x-line-request-id")}`
  );
}

main().catch((err) => {
  console.error("[push-one] fatal:", err);
  process.exit(1);
});
