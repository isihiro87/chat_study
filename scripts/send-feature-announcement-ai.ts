/**
 * 機能告知 multicast: 「AIに質問できる / 画像・音声入力に対応 / 1日20回まで」。
 *
 * 全ユーザー（admin・blocked・lineUserId なしを除く）に 1 通の flex を配信する。
 * 1 ユーザー = 1 push なので、対象人数ぶん月間配信枠を消費する。
 *
 * 既存の send-relaunch-segmented.ts の multicast パターンを踏襲（500件バッチ、
 * admin/blocked 除外、deliveryStats 記録）。セグメント分けはせず単一メッセージ。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/send-feature-announcement-ai.ts --dry-run        # 件数とプレビューのみ
 *   npx tsx scripts/send-feature-announcement-ai.ts --execute        # 実送信
 *   npx tsx scripts/send-feature-announcement-ai.ts --execute --limit 1   # 自分宛テスト等
 *   npx tsx scripts/send-feature-announcement-ai.ts --execute --only-admin # admin だけに送信（最終確認用）
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
        "usage: npx tsx scripts/send-feature-announcement-ai.ts " +
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
      "🤖 AIに質問できるようになりました！画像や音声でも質問OK（1日20回まで）",
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
            text: "🤖 AIに質問できるようになりました",
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
            text: "わからない問題や勉強の疑問を、このトークでそのまま送ってみてね。AIがすぐに答えてくれるよ！",
            wrap: true,
            size: "sm" as const,
            color: "#333333",
          },
          {
            type: "text" as const,
            text: "📸 画像・🎤 音声でも質問OK",
            wrap: true,
            size: "sm" as const,
            weight: "bold" as const,
            color: "#92400E",
            margin: "md",
          },
          {
            type: "text" as const,
            text: "ノートや問題の写真を送ったり、声で質問したりもできるようになりました。",
            wrap: true,
            size: "sm" as const,
            color: "#333333",
          },
          {
            type: "text" as const,
            text: "📚 ほかの教科も今つくっているよ。もう少し待っててね！",
            wrap: true,
            size: "sm" as const,
            weight: "bold" as const,
            color: "#92400E",
            margin: "md",
          },
          {
            type: "text" as const,
            text: "※ AIへの質問は1日20回まで。たくさん使いたいときは、また明日ね😊\n※ AIはときどき間違えることもあるよ。大事なことは教科書や先生にも確認してね。",
            wrap: true,
            size: "xs" as const,
            color: "#888888",
            margin: "md",
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

async function main(): Promise<void> {
  const args = parseArgs();
  const env = loadEnv();
  console.log(
    `[announce-ai] start dryRun=${args.dryRun} limit=${args.limit ?? "none"} onlyAdmin=${args.onlyAdmin}`
  );

  initializeApp({
    credential: applicationDefault(),
    projectId: FIREBASE_PROJECT_ID,
  });
  const db = getFirestore();
  const usersSnap = await db.collection("users").get();
  console.log(`[announce-ai] scanned ${usersSnap.size} users`);

  const stats: Stats = {
    scanned: usersSnap.size,
    candidates: 0,
    skippedAdmin: 0,
    skippedNoLineUserId: 0,
    skippedBlocked: 0,
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
      // --only-admin: admin だけに送る最終確認モード。
      if (!isAdmin) continue;
    } else if (isAdmin) {
      stats.skippedAdmin++;
      continue;
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
    console.log(`[announce-ai] --limit ${args.limit} applied`);
  }
  stats.candidates = targets.length;

  const bundle = [bubbleAnnouncement()];
  console.log(
    `[announce-ai] candidates=${targets.length} ` +
      `(skipped admin=${stats.skippedAdmin} noLineUserId=${stats.skippedNoLineUserId} blocked=${stats.skippedBlocked})`
  );
  console.log(`[announce-ai] message: ${bundle[0].altText}`);
  console.log(
    `[announce-ai] 消費する配信枠 ≈ ${targets.length} 通（1ユーザー1通）`
  );

  if (args.dryRun) {
    console.log("\n[announce-ai] dry-run のため送信なし。");
    return;
  }

  console.log("\n[announce-ai] 送信開始...");
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
      featureAnnounceAiSent: FieldValue.increment(stats.multicastSent),
      featureAnnounceAiSentAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  console.log(`\n[announce-ai] done: ${JSON.stringify(stats, null, 2)}`);
}

main().catch((err) => {
  console.error("[announce-ai] fatal:", err);
  process.exit(1);
});
