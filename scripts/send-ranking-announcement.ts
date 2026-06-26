/**
 * 学習ランキング告知:
 *   A) 全員（admin/blocked/lineUserIdなし を除く全ユーザー）へ匿名リーダーボード
 *      （TOP10＋連続正解TOP3）を multicast。1ユーザー1通。
 *   B) 累計回答数 TOP10 の本人だけに「第○位おめでとう！」を個別 push。
 *      → TOP10 の人は A と B の 2 通を受け取る。
 *
 * 名前はプライバシー配慮で A には出さない（順位＋問題数のみ）。B は本人にだけ。
 * TOP10 は users.stats.totalAnswered から算出（A 用の全件スキャンと同じ in-memory
 * 集合から拾うので追加 read なし）。admin は順位・配信から除外。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/send-ranking-announcement.ts --dry-run         # 件数・プレビューのみ
 *   npx tsx scripts/send-ranking-announcement.ts --execute         # 実送信（全員＋TOP10）
 *   npx tsx scripts/send-ranking-announcement.ts --execute --only-admin  # admin だけ（最終確認）
 *   npx tsx scripts/send-ranking-announcement.ts --execute --limit 1     # 先頭1人だけ（テスト）
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
const TOP_N = 10;

const ADMIN_LINE_USER_IDS = new Set<string>([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);

interface Args {
  dryRun: boolean;
  limit: number | null;
  onlyAdmin: boolean;
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
        "usage: npx tsx scripts/send-ranking-announcement.ts " +
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
// メッセージA: 全員向け 匿名リーダーボード
// ============================================================
const BROADCAST_TEXT =
  "🏆 みんなの学習ランキング発表！\n\n" +
  "いつもチャットでスタディを使ってくれてありがとう！\n" +
  "これまでにみんなが解いた問題は、合わせて16,500問をこえました🎉\n\n" +
  "今回は「たくさん解いた人」TOP10を発表します✨\n" +
  "（プライバシーのため、お名前は伏せて順位だけ紹介するね）\n\n" +
  "🏆 たくさん解いた人 TOP10\n" +
  "🥇 1位 235問（正答率89%！）\n" +
  "🥈 2位 198問（正答率89%！）\n" +
  "🥉 3位 174問\n" +
  "4位 171問\n" +
  "5位 167問\n" +
  "6位 153問\n" +
  "7位 147問\n" +
  "8位 134問\n" +
  "9位 122問\n" +
  "10位 119問\n\n" +
  "🔥 連続正解 TOP3\n" +
  "🥇 1位 22問れんぞく正解！\n" +
  "🥈 2位 16問れんぞく\n" +
  "🥉 3位 13問れんぞく\n\n" +
  "ランクインしたみんな、本当におめでとう🎉\n" +
  "まだの人も大丈夫！毎日コツコツ続ければ、次は自分の番。\n" +
  "今日も「1問解く」から挑戦してみよう💪";

// ============================================================
// メッセージB: TOP10 本人向け 個別おめでとう
// ============================================================
function buildCongratsText(
  rank: number,
  total: number,
  rate: number
): string {
  const medal = rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : "🎉";
  return (
    "🎉 おめでとう！\n\n" +
    "あなたは「たくさん解いた人ランキング」で\n" +
    `${medal} 第${rank}位 にランクイン！👏\n\n` +
    `これまでに解いた問題：${total}問（正答率${rate}%）\n` +
    "コツコツ続けてきた成果だね。本当にすごいよ！\n\n" +
    "この調子で次回はさらに上を目指そう🔥\n" +
    "今日も1問、一緒にがんばろう！"
  );
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

async function pushOne(
  token: string,
  to: string,
  messages: any[]
): Promise<void> {
  const res = await fetch("https://api.line.me/v2/bot/message/push", {
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
    throw new Error(`LINE push ${res.status} reqId=${reqId} body=${body}`);
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

/** JST の YYYY-MM（deliveryStats のドキュメントID）。 */
function jstMonthKey(): string {
  const jst = new Date(Date.now() + 9 * 60 * 60 * 1000);
  return `${jst.getUTCFullYear()}-${String(jst.getUTCMonth() + 1).padStart(2, "0")}`;
}

interface TopUser {
  lineUserId: string;
  total: number;
  rate: number;
}

async function main(): Promise<void> {
  const args = parseArgs();
  const env = loadEnv();
  console.log(
    `[announce-ranking] start dryRun=${args.dryRun} limit=${args.limit ?? "none"} onlyAdmin=${args.onlyAdmin}`
  );

  initializeApp({
    credential: applicationDefault(),
    projectId: FIREBASE_PROJECT_ID,
  });
  const db = getFirestore();

  // 全員ブロードキャスト用に users を全件取得（＝この告知の対象集合そのもの）。
  // TOP10 も同じ in-memory 集合から算出するので追加 read は無し。
  const usersSnap = await db.collection("users").get();
  console.log(`[announce-ranking] scanned ${usersSnap.size} users`);

  // --- ブロードキャスト宛先（admin/blocked/lineUserIdなし 除外）---
  const broadcastIds: string[] = [];
  let skippedAdmin = 0;
  let skippedNoLineUserId = 0;
  let skippedBlocked = 0;
  // --- TOP10 算出用（admin 除外、stats.totalAnswered>0）---
  const ranked: TopUser[] = [];

  for (const doc of usersSnap.docs) {
    const data = doc.data() as any;
    const lineUserId =
      typeof data.lineUserId === "string" ? data.lineUserId : "";
    if (!lineUserId) {
      skippedNoLineUserId++;
      continue;
    }
    const isAdmin = ADMIN_LINE_USER_IDS.has(lineUserId);

    // ランキング集計（admin 除外）
    const total =
      typeof data?.stats?.totalAnswered === "number"
        ? data.stats.totalAnswered
        : 0;
    const correct =
      typeof data?.stats?.totalCorrect === "number"
        ? data.stats.totalCorrect
        : 0;
    if (!isAdmin && total > 0) {
      ranked.push({
        lineUserId,
        total,
        rate: total > 0 ? Math.round((correct / total) * 100) : 0,
      });
    }

    // ブロードキャスト宛先
    if (args.onlyAdmin) {
      if (!isAdmin) continue;
    } else {
      if (isAdmin) {
        skippedAdmin++;
        continue;
      }
      if (data.blocked === true) {
        skippedBlocked++;
        continue;
      }
    }
    broadcastIds.push(lineUserId);
  }

  ranked.sort((a, b) => b.total - a.total);
  let top = ranked.slice(0, TOP_N);

  // --only-admin: TOP10 個別送信も admin だけに絞る（最終確認用）。
  if (args.onlyAdmin) {
    top = top.filter((t) => ADMIN_LINE_USER_IDS.has(t.lineUserId));
  }

  let broadcastTargets = broadcastIds;
  let topTargets = top;
  if (args.limit !== null) {
    broadcastTargets = broadcastTargets.slice(0, args.limit);
    topTargets = topTargets.slice(0, args.limit);
    console.log(`[announce-ranking] --limit ${args.limit} applied`);
  }

  console.log(
    `[announce-ranking] broadcast=${broadcastTargets.length} ` +
      `(skipped admin=${skippedAdmin} noLineUserId=${skippedNoLineUserId} blocked=${skippedBlocked})`
  );
  console.log(`[announce-ranking] TOP${TOP_N} 個別おめでとう=${topTargets.length} 名`);
  console.log(
    `[announce-ranking] 消費する配信枠 ≈ ${broadcastTargets.length + topTargets.length} 通` +
      `（全員 ${broadcastTargets.length} ＋ TOP10 ${topTargets.length}）`
  );
  console.log("\n----- メッセージA（全員・匿名）-----\n" + BROADCAST_TEXT);
  console.log("\n----- メッセージB（TOP10本人・例: 1位）-----");
  if (top[0]) {
    console.log(buildCongratsText(1, top[0].total, top[0].rate));
  }
  console.log("\n----- 算出された TOP10（UID 末尾4桁・本人にだけ B 送信）-----");
  top.forEach((t, i) =>
    console.log(
      `  ${i + 1}位 …${t.lineUserId.slice(-4)} : ${t.total}問 (正答率${t.rate}%)`
    )
  );

  if (args.dryRun) {
    console.log("\n[announce-ranking] dry-run のため送信なし。");
    return;
  }

  // --- A) 全員ブロードキャスト ---
  console.log("\n[announce-ranking] (A) 全員ブロードキャスト送信開始...");
  let broadcastSent = 0;
  for (let i = 0; i < broadcastTargets.length; i += MULTICAST_BATCH_SIZE) {
    const batch = broadcastTargets.slice(i, i + MULTICAST_BATCH_SIZE);
    try {
      await multicast(env.token, batch, [{ type: "text", text: BROADCAST_TEXT }]);
      broadcastSent += batch.length;
      console.log(
        `  ✓ batch ${i / MULTICAST_BATCH_SIZE + 1}: ${batch.length} users`
      );
    } catch (err) {
      console.error(
        `  ✗ batch failed (${batch.length} users):`,
        (err as Error).message
      );
    }
    await sleep(RATE_LIMIT_SLEEP_MS);
  }

  // --- B) TOP10 個別おめでとう ---
  console.log("\n[announce-ranking] (B) TOP10 個別おめでとう送信開始...");
  let congratsSent = 0;
  for (let i = 0; i < topTargets.length; i++) {
    const t = topTargets[i];
    const rank = i + 1; // top はソート済みなので index+1 が順位
    const text = buildCongratsText(rank, t.total, t.rate);
    try {
      await pushOne(env.token, t.lineUserId, [{ type: "text", text }]);
      congratsSent++;
      console.log(`  ✓ ${rank}位 …${t.lineUserId.slice(-4)}`);
    } catch (err) {
      console.error(
        `  ✗ ${rank}位 …${t.lineUserId.slice(-4)} failed:`,
        (err as Error).message
      );
    }
    await sleep(RATE_LIMIT_SLEEP_MS);
  }

  // --- deliveryStats 記録（枠モニタリングの total にも反映）---
  const totalSent = broadcastSent + congratsSent;
  const month = jstMonthKey();
  await db.doc(`deliveryStats/${month}`).set(
    {
      yearMonth: month,
      totalPushCount: FieldValue.increment(totalSent),
      "pushCountByType.other": FieldValue.increment(totalSent),
      rankingAnnounceSent: FieldValue.increment(totalSent),
      rankingAnnounceSentAt: FieldValue.serverTimestamp(),
      lastUpdatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  console.log(
    `\n[announce-ranking] done: broadcast=${broadcastSent} congrats=${congratsSent} total=${totalSent}`
  );
}

main().catch((err) => {
  console.error("[announce-ranking] fatal:", err);
  process.exit(1);
});
