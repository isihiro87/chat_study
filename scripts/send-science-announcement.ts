/**
 * 機能告知 multicast:「理科（中1・中2）が新登場！」。
 *
 * 学年が 中1 / 中2 のユーザーにだけ 1 通の flex を配信する。
 * admin・blocked・lineUserId なしは除外。1 ユーザー = 1 push なので、対象人数ぶん
 * 月間配信枠を消費する。
 *
 * send-scope-announcement.ts の multicast パターンを踏襲（500件バッチ、admin/blocked
 * 除外、deliveryStats 記録）。違いは「学年=中1/中2」での絞り込みと、本文に
 * 「🎓 学年・教科を変更」ボタン（postback type=change_learning＝トーク内変更フロー）。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/send-science-announcement.ts --dry-run        # 件数とプレビューのみ
 *   npx tsx scripts/send-science-announcement.ts --execute        # 実送信（中1・中2 全員）
 *   npx tsx scripts/send-science-announcement.ts --execute --only-admin # admin だけ（最終確認用）
 *   npx tsx scripts/send-science-announcement.ts --execute --limit 1    # 先頭1人だけ（テスト）
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
        "usage: npx tsx scripts/send-science-announcement.ts " +
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

/** users.grade は '中1'/'中2' 文字列で保存される（webhook の select_grade 由来）。
 *  念のため数値 1/2 表現も拾う。 */
function isTargetGrade(grade: unknown): boolean {
  return (
    grade === "中1" || grade === "中2" || grade === 1 || grade === 2
  );
}

// ============================================================
// 告知 flex バブル
// ============================================================
function bubbleAnnouncement() {
  return {
    type: "flex" as const,
    altText:
      "🎉 理科（中1・中2）が新登場！教科の切り替えは「設定・サポート」→「学年・教科を変更」から",
    contents: {
      type: "bubble" as const,
      size: "mega" as const,
      header: {
        type: "box" as const,
        layout: "vertical" as const,
        backgroundColor: "#10B981",
        paddingAll: "16px",
        contents: [
          {
            type: "text" as const,
            text: "🎉 理科が新登場！（中1・中2）",
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
            text: "今日から【理科】の毎日1問が解けるようになりました😊",
            wrap: true,
            size: "sm" as const,
            color: "#333333",
          },
          {
            type: "text" as const,
            text: "教科の切り替えは、リッチメニュー右下の「⚙️ 設定・サポート」→「🎓 学年・教科を変更」から！",
            wrap: true,
            size: "sm" as const,
            color: "#333333",
          },
          {
            type: "text" as const,
            text: "かんたんに設定できるよ📚💪",
            wrap: true,
            size: "sm" as const,
            weight: "bold" as const,
            color: "#047857",
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
            color: "#10B981",
            height: "sm" as const,
            action: {
              type: "postback" as const,
              label: "🎓 学年・教科を変更",
              data: "type=change_learning",
              displayText: "🎓 学年・教科を変更",
            },
          },
          {
            type: "text" as const,
            text: "リッチメニュー右下の「設定・サポート」からもいつでも変更できます。",
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

async function main(): Promise<void> {
  const args = parseArgs();
  const env = loadEnv();
  console.log(
    `[announce-science] start dryRun=${args.dryRun} limit=${args.limit ?? "none"} onlyAdmin=${args.onlyAdmin}`
  );

  initializeApp({
    credential: applicationDefault(),
    projectId: FIREBASE_PROJECT_ID,
  });
  const db = getFirestore();

  // 対象は学年=中1/中2 のみ。--only-admin のときは全件から admin を拾う。
  const usersSnap = args.onlyAdmin
    ? await db.collection("users").get()
    : await db.collection("users").where("grade", "in", ["中1", "中2"]).get();
  console.log(`[announce-science] scanned ${usersSnap.size} users`);

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
      // --only-admin: admin だけに送る最終確認モード（学年は問わない）。
      if (!isAdmin) continue;
    } else {
      if (isAdmin) {
        stats.skippedAdmin++;
        continue;
      }
      if (!isTargetGrade(data.grade)) continue; // 念のための二重チェック
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
    console.log(`[announce-science] --limit ${args.limit} applied`);
  }
  stats.candidates = targets.length;

  const bundle = [bubbleAnnouncement()];
  console.log(
    `[announce-science] candidates=${targets.length} ` +
      `(skipped admin=${stats.skippedAdmin} noLineUserId=${stats.skippedNoLineUserId} ` +
      `blocked=${stats.skippedBlocked})`
  );
  console.log(`[announce-science] message: ${bundle[0].altText}`);
  console.log(
    `[announce-science] 消費する配信枠 ≈ ${targets.length} 通（1ユーザー1通）`
  );

  if (args.dryRun) {
    console.log("\n[announce-science] dry-run のため送信なし。");
    return;
  }

  console.log("\n[announce-science] 送信開始...");
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
      scienceAnnounceSent: FieldValue.increment(stats.multicastSent),
      scienceAnnounceSentAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  console.log(`\n[announce-science] done: ${JSON.stringify(stats, null, 2)}`);
}

main().catch((err) => {
  console.error("[announce-science] fatal:", err);
  process.exit(1);
});
