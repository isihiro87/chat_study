/**
 * 2026-06-26 「タイプでスタディ」新ゲーム告知 broadcast スクリプト。
 *
 * 全友だち（ブロック中除く、LINE 側で自動判定）にプレーンテキスト 1 通を配信する。
 * メッセージ末尾の URL は LINE が自動でリンクプレビュー化する。
 *
 * 前提:
 *   - functions/.env に LINE_MESSAGING_CHANNEL_ACCESS_TOKEN
 *   - 月次送信枠に余裕（broadcast は friends 数だけ消費）
 *
 * 使い方:
 *   # 0. 認証（deliveryStats 記録に必要）
 *   gcloud auth application-default login
 *
 *   # 1. dry-run（payload 検証のみ、送信なし）
 *   npx tsx scripts/send-typing-game-broadcast.ts --dry-run
 *
 *   # 2. 自分の LINE にだけテスト送信（push API・stats 記録なし）
 *   npx tsx scripts/send-typing-game-broadcast.ts --test-uid U429b1d951fc7236c9e8e85e5ca96b910
 *
 *   # 3. 本番 broadcast（全友だち）
 *   npx tsx scripts/send-typing-game-broadcast.ts --execute
 *
 * 送信後は Firestore `deliveryStats/{YYYY-MM}.typingGameBroadcast` に通数記録。
 */

import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const PROJECT_ID = "chatstudy-63477";
const ENV_FILE = resolve(process.cwd(), "functions/.env");

const MESSAGE_TEXT = `歴史を“打って覚える”新ゲーム、できました！

「タイプでスタディ」⌨️
中学の歴史用語を、タイピングしながら楽しく暗記できる無料ゲームだよ！

✅ こんな人におすすめ
・歴史の用語がなかなか覚えられない
・テスト前にサクッと復習したい
・タイピングも上手くなりたい

🎮 遊び方はカンタン2モード
①暗記モード … こたえを見ながら打って覚える
②テストモード … かくして力だめし！

🏆 自己ベスト更新を目指して、何度でもチャレンジ！

💴 もちろん完全無料！お金は一切かからないよ

▼ いますぐ遊ぶ（無料）
https://www.chatstudy.jp/typing/

⚠️  キーボードのある【パソコン】で遊んでね。
スマホ・タブレットでは遊べないよ🙏
👉 このリンクを自分宛てに送るか、保存してパソコンで開いてね！

まずは「暗記モード」から、好きな時代でチャレンジ✏️ 🔥`;

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
        "usage: npx tsx scripts/send-typing-game-broadcast.ts [--dry-run | --execute | --test-uid <uid>]"
      );
      process.exit(0);
    }
  }
  if (opts.mode === "test" && !opts.testUid) {
    console.error("[typing-broadcast] --test-uid には対象 LINE UID が必要です。");
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

function buildTextMessage() {
  return { type: "text" as const, text: MESSAGE_TEXT };
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
  console.log(
    `[typing-broadcast] ${endpoint} ok, requestId=${res.headers.get("x-line-request-id")}`
  );
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
      typingGameBroadcast: FieldValue.increment(count),
      typingGameBroadcastSentAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
  console.log(`[typing-broadcast] deliveryStats/${month}.typingGameBroadcast += ${count}`);
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
  const message = buildTextMessage();

  if (opts.mode === "dry-run") {
    console.log("[typing-broadcast] dry-run: text payload preview");
    console.log(JSON.stringify(message, null, 2));
    console.log("\n[typing-broadcast] no send performed.");
    return;
  }

  const token = loadToken();

  if (opts.mode === "test") {
    console.log(`[typing-broadcast] test push to uid=${opts.testUid}`);
    await callLineApi("push", token, {
      to: opts.testUid,
      messages: [message],
    });
    console.log("[typing-broadcast] test send done. deliveryStats は記録しません。");
    return;
  }

  // execute: broadcast
  const followers = await fetchFollowerCount(token);
  if (followers !== null) {
    console.log(`[typing-broadcast] current followers: ${followers}`);
  }

  console.log(
    "[typing-broadcast] sending broadcast to ALL followers in 3 seconds... (Ctrl-C to cancel)"
  );
  await new Promise((r) => setTimeout(r, 3000));

  await callLineApi("broadcast", token, { messages: [message] });

  if (followers !== null) {
    await recordDeliveryStats(followers);
  } else {
    console.log(
      "[typing-broadcast] follower count 取得失敗のため deliveryStats 記録は手動で更新してください"
    );
  }
}

main().catch((error) => {
  console.error("[typing-broadcast] fatal:", error);
  process.exit(1);
});
