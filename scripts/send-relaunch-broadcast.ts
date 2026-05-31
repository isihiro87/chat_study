/**
 * 2026-06-01 公式LINE 再開キャンペーン broadcast スクリプト。
 *
 * 全友だち（ブロック中除く、LINE 側で自動判定）に flex バブルを 1 通配信する。
 *
 * 前提:
 *   - functions/.env に LINE_MESSAGING_CHANNEL_ACCESS_TOKEN
 *   - 月次送信枠に余裕（broadcast は friends 数だけ消費）
 *   - 配信前に bulk-grant-trial.ts で全員に trial 付与済み（メッセージで「体験プレゼント」と告知する）
 *
 * 使い方:
 *   # 0. 認証
 *   gcloud auth application-default login
 *
 *   # 1. dry-run（payload 検証のみ、送信なし）
 *   npx tsx scripts/send-relaunch-broadcast.ts --dry-run
 *
 *   # 2. 自分の LINE にだけテスト送信（push API）
 *   npx tsx scripts/send-relaunch-broadcast.ts --test-uid U429b1d951fc7236c9e8e85e5ca96b910
 *
 *   # 3. 本番 broadcast（全友だち）
 *   npx tsx scripts/send-relaunch-broadcast.ts --execute
 *
 * 送信後は Firestore `deliveryStats/{YYYY-MM}.relaunchBroadcast` に通数記録。
 */

import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const PROJECT_ID = "chatstudy-63477";
const ENV_FILE = resolve(process.cwd(), "functions/.env");

const LIFF_PREMIUM_INFO = "https://liff.line.me/2009587166-k51bH4LC";
const LIFF_PREMIUM_APPLY = "https://liff.line.me/2009587166-GKRX5kOQ";

interface CliOptions {
  mode: "dry-run" | "execute" | "test";
  testUid?: string;
}

function parseArgs(argv: string[]): CliOptions {
  const opts: CliOptions = { mode: "dry-run" };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--dry-run") opts.mode = "dry-run";
    else if (arg === "--execute") opts.mode = "execute";
    else if (arg === "--test-uid") {
      opts.mode = "test";
      opts.testUid = argv[++i];
    } else if (arg === "--help" || arg === "-h") {
      console.log(
        "usage: npx tsx scripts/send-relaunch-broadcast.ts [--dry-run | --execute | --test-uid <uid>]"
      );
      process.exit(0);
    }
  }
  if (opts.mode === "test" && !opts.testUid) {
    console.error("[broadcast] --test-uid には対象 LINE UID が必要です。");
    process.exit(1);
  }
  return opts;
}

function parseDotenv(text: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    result[key] = value;
  }
  return result;
}

function loadToken(): string {
  const env = parseDotenv(readFileSync(ENV_FILE, "utf8"));
  const token = env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
  if (!token) {
    throw new Error("LINE_MESSAGING_CHANNEL_ACCESS_TOKEN が functions/.env に未設定");
  }
  return token;
}

/**
 * 再開告知 flex bubble。
 * - hero: 再開 + 全員trial プレゼントの強い見出し
 * - body: 期限 / フル機能 / 価格ロック
 * - footer: 2 つの CTA（使ってみる / 詳しく見る）
 */
function buildFlexMessage() {
  return {
    type: "flex" as const,
    altText:
      "公式LINE 再開しました！全員に 7 日間プレミアム体験プレゼント🎁",
    contents: {
      type: "bubble" as const,
      size: "mega" as const,
      header: {
        type: "box" as const,
        layout: "vertical" as const,
        backgroundColor: "#F59E0B",
        paddingAll: "16px",
        contents: [
          {
            type: "text" as const,
            text: "🎁 公式LINE 再開しました",
            color: "#FFFFFF",
            weight: "bold" as const,
            size: "lg" as const,
          },
          {
            type: "text" as const,
            text: "全員に 7 日間プレミアム体験をプレゼント",
            color: "#FFFFFF",
            size: "sm" as const,
            margin: "sm",
            wrap: true,
          },
        ],
      },
      body: {
        type: "box" as const,
        layout: "vertical" as const,
        spacing: "md" as const,
        contents: [
          {
            type: "text" as const,
            text: "おかえりなさい！今日から配信を再開しました。",
            wrap: true,
            size: "sm" as const,
          },
          {
            type: "text" as const,
            text: "感謝の気持ちを込めて、登録者全員に 7 日間のプレミアム体験をプレゼントします。",
            wrap: true,
            size: "sm" as const,
            color: "#444444",
          },
          {
            type: "separator" as const,
            margin: "md",
          },
          {
            type: "box" as const,
            layout: "vertical" as const,
            spacing: "sm" as const,
            margin: "md",
            contents: [
              {
                type: "text" as const,
                text: "✅ 7 日間フル機能",
                size: "sm" as const,
                color: "#333333",
              },
              {
                type: "text" as const,
                text: "✅ じっくり学ぶ / 苦手復習 / 追加で解く すべて開放",
                size: "sm" as const,
                color: "#333333",
                wrap: true,
              },
              {
                type: "text" as const,
                text: "✅ 期間中の登録で 月¥680 永続ロック",
                size: "sm" as const,
                color: "#333333",
              },
              {
                type: "text" as const,
                text: "✅ クレジットカード登録は継続時のみ（自動課金なし）",
                size: "sm" as const,
                color: "#333333",
                wrap: true,
              },
            ],
          },
        ],
      },
      footer: {
        type: "box" as const,
        layout: "vertical" as const,
        spacing: "sm" as const,
        contents: [
          {
            type: "button" as const,
            style: "primary" as const,
            color: "#F59E0B",
            height: "sm" as const,
            action: {
              type: "uri" as const,
              label: "プレミアム機能を見る",
              uri: LIFF_PREMIUM_INFO,
            },
          },
          {
            type: "button" as const,
            style: "secondary" as const,
            height: "sm" as const,
            action: {
              type: "uri" as const,
              label: "継続登録について",
              uri: LIFF_PREMIUM_APPLY,
            },
          },
        ],
      },
    },
  };
}

async function callLineApi(
  endpoint: "broadcast" | "push",
  token: string,
  payload: Record<string, unknown>
): Promise<void> {
  const url = `https://api.line.me/v2/bot/message/${endpoint}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = await res.text();
    const reqId = res.headers.get("x-line-request-id");
    throw new Error(`LINE API ${endpoint} ${res.status} reqId=${reqId} body=${body}`);
  }
  console.log(`[broadcast] ${endpoint} ok, requestId=${res.headers.get("x-line-request-id")}`);
}

async function recordDeliveryStats(count: number): Promise<void> {
  initializeApp({
    credential: applicationDefault(),
    projectId: PROJECT_ID,
  });
  const db = getFirestore();
  const now = new Date();
  const month = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, "0")}`;
  await db.doc(`deliveryStats/${month}`).set(
    {
      relaunchBroadcast: FieldValue.increment(count),
      relaunchBroadcastSentAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
  console.log(`[broadcast] deliveryStats/${month}.relaunchBroadcast += ${count}`);
}

async function fetchFollowerCount(token: string): Promise<number | null> {
  try {
    const res = await fetch(
      "https://api.line.me/v2/bot/insight/followers?date=" +
        new Date(Date.now() - 24 * 3600 * 1000)
          .toISOString()
          .slice(0, 10)
          .replace(/-/g, ""),
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { followers?: number };
    return typeof data.followers === "number" ? data.followers : null;
  } catch {
    return null;
  }
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const message = buildFlexMessage();

  if (opts.mode === "dry-run") {
    console.log("[broadcast] dry-run: flex payload preview");
    console.log(JSON.stringify(message, null, 2));
    console.log("\n[broadcast] no send performed.");
    return;
  }

  const token = loadToken();

  if (opts.mode === "test") {
    console.log(`[broadcast] test push to uid=${opts.testUid}`);
    await callLineApi("push", token, {
      to: opts.testUid,
      messages: [message],
    });
    console.log("[broadcast] test send done. deliveryStats は記録しません。");
    return;
  }

  // execute: broadcast
  const followers = await fetchFollowerCount(token);
  if (followers !== null) {
    console.log(`[broadcast] current followers: ${followers}`);
  }

  console.log("[broadcast] sending broadcast to ALL followers in 3 seconds... (Ctrl-C to cancel)");
  await new Promise((r) => setTimeout(r, 3000));

  await callLineApi("broadcast", token, { messages: [message] });

  if (followers !== null) {
    await recordDeliveryStats(followers);
  } else {
    console.log("[broadcast] follower count 取得失敗のため deliveryStats 記録は手動で更新してください");
  }
}

main().catch((error) => {
  console.error("[broadcast] fatal:", error);
  process.exit(1);
});
