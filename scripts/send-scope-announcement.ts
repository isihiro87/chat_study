/**
 * 機能告知 multicast:「テスト範囲の設定がかんたんになりました」。
 *
 * テスト範囲（testScope.topics）を *まだ設定していない* ユーザーにだけ 1 通の flex を
 * 配信する。すでに範囲を設定済みのユーザー・admin・blocked・lineUserId なしは除外。
 * 1 ユーザー = 1 push なので、対象人数ぶん月間配信枠を消費する。
 *
 * send-feature-announcement-ai.ts の multicast パターンを踏襲（500件バッチ、
 * admin/blocked 除外、deliveryStats 記録）。違いは「testScope 未設定」での絞り込み。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/send-scope-announcement.ts --dry-run        # 件数とプレビューのみ
 *   npx tsx scripts/send-scope-announcement.ts --execute        # 実送信
 *   npx tsx scripts/send-scope-announcement.ts --execute --limit 1   # 自分宛テスト等
 *   npx tsx scripts/send-scope-announcement.ts --execute --only-admin # admin だけに送信（最終確認用）
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { applicationDefault, initializeApp } from "firebase-admin/app";
import { FieldValue, getFirestore } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";
const ENV_FILE = resolve(import.meta.dirname, "../functions/.env");
const MULTICAST_BATCH_SIZE = 500;
const RATE_LIMIT_SLEEP_MS = 200;

const ADMIN_LINE_USER_IDS = new Set<string>([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);

interface Args {
  dryRun: boolean;
  limit: number | null;
  onlyAdmin: boolean;
}

interface Stats {
  scanned: number;
  candidates: number;
  skippedAdmin: number;
  skippedNoLineUserId: number;
  skippedBlocked: number;
  skippedAlreadyScoped: number;
  multicastSent: number;
  multicastFailed: number;
}

function parseArgs(): Args {
  const argv = process.argv.slice(2);
  const args: Args = { dryRun: true, limit: null, onlyAdmin: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--dry-run") args.dryRun = true;
    else if (a === "--execute") args.dryRun = false;
    else if (a === "--only-admin") args.onlyAdmin = true;
    else if (a === "--limit") {
      const n = Number(argv[++i]);
      if (!Number.isFinite(n) || n <= 0) {
        throw new Error("--limit には正の整数を指定してください");
      }
      args.limit = n;
    } else if (a === "--help" || a === "-h") {
      console.log(
        "usage: npx tsx scripts/send-scope-announcement.ts " +
          "[--dry-run | --execute] [--limit N] [--only-admin]"
      );
      process.exit(0);
    } else {
      throw new Error(`unknown arg: ${a}`);
    }
  }
  return args;
}

function loadEnv(): { token: string } {
  const raw = readFileSync(ENV_FILE, "utf8");
  const map: Record<string, string> = {};
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq === -1) continue;
    const k = t.slice(0, eq).trim();
    let v = t.slice(eq + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    map[k] = v;
  }
  const token = map.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
  if (!token) throw new Error("LINE_MESSAGING_CHANNEL_ACCESS_TOKEN 未設定");
  return { token };
}

// ============================================================
// 告知 flex バブル
// ============================================================
function bubbleAnnouncement() {
  return {
    type: "flex" as const,
    altText:
      "📚 テスト範囲の設定がかんたんになりました！リッチメニュー左下「出題範囲設定」からどうぞ",
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
            text: "📚 テスト範囲の設定がかんたんになりました",
            color: "#FFFFFF",
            weight: "bold" as const,
            size: "md" as const,
            wrap: true,
          },
        ],
      },
      body: {
        type: "box" as const,
        layout: "vertical" as const,
        paddingAll: "16px",
        spacing: "md" as const,
        contents: [
          {
            type: "text" as const,
            text: "「テスト範囲を設定すると、毎日の1問が習った範囲から届く」——その設定が、トークの中だけでできるようになりました！",
            wrap: true,
            size: "sm" as const,
            color: "#333333",
          },
          {
            type: "text" as const,
            text: "✅ ボタンをタップするだけ",
            wrap: true,
            size: "sm" as const,
            weight: "bold" as const,
            color: "#92400E",
            margin: "md",
          },
          {
            type: "text" as const,
            text: "習った時代を選ぶだけ。タップした瞬間に保存されて、もう難しいページ操作はいりません。",
            wrap: true,
            size: "sm" as const,
            color: "#333333",
          },
          {
            type: "text" as const,
            text: "📲 はじめ方",
            wrap: true,
            size: "sm" as const,
            weight: "bold" as const,
            color: "#92400E",
            margin: "md",
          },
          {
            type: "text" as const,
            text: "リッチメニュー左下の「出題範囲設定」を押すとスタートできます。下のボタンからもすぐに始められるよ👇",
            wrap: true,
            size: "sm" as const,
            color: "#333333",
          },
          {
            type: "text" as const,
            text: "※ テスト前に範囲をしぼると、勉強がぐっと効率的になるよ。",
            wrap: true,
            size: "xs" as const,
            color: "#888888",
            margin: "md",
          },
        ],
      },
      footer: {
        type: "box" as const,
        layout: "vertical" as const,
        spacing: "sm" as const,
        paddingAll: "16px",
        contents: [
          {
            type: "button" as const,
            style: "primary" as const,
            color: "#F59E0B",
            height: "sm" as const,
            action: {
              type: "postback" as const,
              label: "今すぐテスト範囲を設定する",
              data: "type=scope_start",
              displayText: "テスト範囲を設定する",
            },
          },
          {
            type: "text" as const,
            text: "リッチメニュー左下の「出題範囲設定」からもいつでも開けます。",
            wrap: true,
            size: "xxs" as const,
            color: "#9CA3AF",
            align: "center" as const,
          },
        ],
      },
    },
  };
}

async function multicast(
  token: string,
  to: string[],
  messages: any[]
): Promise<void> {
  const res = await fetch("https://api.line.me/v2/bot/message/multicast", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ to, messages }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    const reqId = res.headers.get("x-line-request-id");
    throw new Error(`LINE multicast ${res.status} reqId=${reqId} body=${body}`);
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

function hasTestScope(data: any): boolean {
  const topics = data?.testScope?.topics;
  return Array.isArray(topics) && topics.length > 0;
}

async function main(): Promise<void> {
  const args = parseArgs();
  const env = loadEnv();
  console.log(
    `[announce-scope] start dryRun=${args.dryRun} limit=${args.limit ?? "none"} onlyAdmin=${args.onlyAdmin}`
  );

  initializeApp({
    credential: applicationDefault(),
    projectId: FIREBASE_PROJECT_ID,
  });
  const db = getFirestore();
  const usersSnap = await db.collection("users").get();
  console.log(`[announce-scope] scanned ${usersSnap.size} users`);

  const stats: Stats = {
    scanned: usersSnap.size,
    candidates: 0,
    skippedAdmin: 0,
    skippedNoLineUserId: 0,
    skippedBlocked: 0,
    skippedAlreadyScoped: 0,
    multicastSent: 0,
    multicastFailed: 0,
  };

  const ids: string[] = [];
  for (const doc of usersSnap.docs) {
    const data = doc.data() as any;
    const lineUserId =
      typeof data.lineUserId === "string" ? data.lineUserId : "";
    if (!lineUserId) {
      stats.skippedNoLineUserId++;
      continue;
    }
    const isAdmin = ADMIN_LINE_USER_IDS.has(lineUserId);
    if (args.onlyAdmin) {
      // --only-admin: admin だけに送る最終確認モード（範囲設定状況は問わない）。
      if (!isAdmin) continue;
    } else {
      if (isAdmin) {
        stats.skippedAdmin++;
        continue;
      }
      // すでに範囲を設定済みのユーザーには送らない（今回の告知対象外）。
      if (hasTestScope(data)) {
        stats.skippedAlreadyScoped++;
        continue;
      }
    }
    if (data.blocked === true) {
      stats.skippedBlocked++;
      continue;
    }
    ids.push(lineUserId);
  }

  let targets = ids;
  if (args.limit !== null) {
    targets = targets.slice(0, args.limit);
    console.log(`[announce-scope] --limit ${args.limit} applied`);
  }
  stats.candidates = targets.length;

  const bundle = [bubbleAnnouncement()];
  console.log(
    `[announce-scope] candidates=${targets.length} ` +
      `(skipped admin=${stats.skippedAdmin} noLineUserId=${stats.skippedNoLineUserId} ` +
      `blocked=${stats.skippedBlocked} alreadyScoped=${stats.skippedAlreadyScoped})`
  );
  console.log(`[announce-scope] message: ${bundle[0].altText}`);
  console.log(
    `[announce-scope] 消費する配信枠 ≈ ${targets.length} 通（1ユーザー1通）`
  );

  if (args.dryRun) {
    console.log("\n[announce-scope] dry-run のため送信なし。");
    return;
  }

  console.log("\n[announce-scope] 送信開始...");
  for (let i = 0; i < targets.length; i += MULTICAST_BATCH_SIZE) {
    const batch = targets.slice(i, i + MULTICAST_BATCH_SIZE);
    try {
      await multicast(env.token, batch, bundle);
      stats.multicastSent += batch.length;
      console.log(
        `  ✓ batch ${i / MULTICAST_BATCH_SIZE + 1}: ${batch.length} users`
      );
    } catch (err) {
      stats.multicastFailed += batch.length;
      console.error(
        `  ✗ batch failed (${batch.length} users):`,
        (err as Error).message
      );
    }
    await sleep(RATE_LIMIT_SLEEP_MS);
  }

  // deliveryStats 記録
  const now = new Date();
  const month = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, "0")}`;
  await db.doc(`deliveryStats/${month}`).set(
    {
      scopeAnnounceSent: FieldValue.increment(stats.multicastSent),
      scopeAnnounceSentAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  console.log(`\n[announce-scope] done: ${JSON.stringify(stats, null, 2)}`);
}

main().catch((err) => {
  console.error("[announce-scope] fatal:", err);
  process.exit(1);
});
