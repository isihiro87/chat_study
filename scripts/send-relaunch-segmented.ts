/**
 * 2026-06-01 公式LINE 再開時のセグメント別告知 multicast。
 *
 * ユーザーを 4 セグメントに分類し、各セグメントに最適化された flex バブル群を
 * 1 push（最大5メッセージ）で配信する。1 ユーザー = 1 push なので
 * 約 200 ユーザーで約 200 通の配信枠消費。
 *
 * セグメント分類:
 *   A: プロフィール未設定         （grade or subject なし）
 *      → お詫び + 学年・教科の登録案内 + アプリ再起動推奨 + trial 案内
 *   B: プロフィール済+範囲未設定   （testScope.topics 空）
 *      → お詫び + テスト範囲設定案内 + アプリ再起動推奨 + trial 案内
 *   C: アクティブ                 （testScope 済 + totalAnswered ≥ 1）
 *      → お詫び+明日から再開 + アプリ再起動推奨 + trial 案内
 *   D: 設定済だが未回答           （testScope 済 + totalAnswered 0）
 *      → 明日から配信開始 + アプリ再起動推奨 + trial 案内
 *
 * 除外:
 *   - admin
 *   - lineUserId なし
 *   - blocked === true
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/send-relaunch-segmented.ts --dry-run
 *   npx tsx scripts/send-relaunch-segmented.ts --execute
 *   npx tsx scripts/send-relaunch-segmented.ts --execute --segment B   # 特定セグメントのみ
 *   npx tsx scripts/send-relaunch-segmented.ts --execute --limit 3     # テスト用、各セグメント先頭N件
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

const LIFF_SETTINGS_URL = "https://liff.line.me/2009587166-IvJl78Hk";
const LIFF_SCOPE_URL = "https://liff.line.me/2009587166-fLjzMGk8";
const LIFF_PREMIUM_INFO_URL = "https://liff.line.me/2009587166-k51bH4LC";

type Segment = "A" | "B" | "C" | "D";

interface Args {
  dryRun: boolean;
  onlySegment: Segment | null;
  limit: number | null;
}

interface Candidate {
  uid: string;
  lineUserId: string;
  segment: Segment;
  grade: string;
  totalAnswered: number;
  scopeCount: number;
}

interface Stats {
  scanned: number;
  segmentA: number;
  segmentB: number;
  segmentC: number;
  segmentD: number;
  skippedAdmin: number;
  skippedNoLineUserId: number;
  skippedBlocked: number;
  multicastSent: number;
  multicastFailed: number;
}

function parseArgs(): Args {
  const argv = process.argv.slice(2);
  const args: Args = { dryRun: true, onlySegment: null, limit: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--dry-run") args.dryRun = true;
    else if (a === "--execute") args.dryRun = false;
    else if (a === "--segment") {
      const s = argv[++i] as Segment;
      if (!["A", "B", "C", "D"].includes(s)) {
        throw new Error("--segment は A|B|C|D");
      }
      args.onlySegment = s;
    } else if (a === "--limit") {
      const n = Number(argv[++i]);
      if (!Number.isFinite(n) || n <= 0) {
        throw new Error("--limit には正の整数を指定してください");
      }
      args.limit = n;
    } else if (a === "--help" || a === "-h") {
      console.log(
        "usage: npx tsx scripts/send-relaunch-segmented.ts [--dry-run | --execute] [--segment A|B|C|D] [--limit N]"
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
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    map[k] = v;
  }
  const token = map.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
  if (!token) throw new Error("LINE_MESSAGING_CHANNEL_ACCESS_TOKEN 未設定");
  return { token };
}

function classify(uid: string, data: any, stats: Stats): Candidate | null {
  const lineUserId = typeof data.lineUserId === "string" ? data.lineUserId : "";
  if (!lineUserId) {
    stats.skippedNoLineUserId++;
    return null;
  }
  if (ADMIN_LINE_USER_IDS.has(lineUserId)) {
    stats.skippedAdmin++;
    return null;
  }
  if (data.blocked === true) {
    stats.skippedBlocked++;
    return null;
  }

  const grade = typeof data.grade === "string" ? data.grade : "";
  const subject = typeof data.subject === "string" ? data.subject : "";
  const hasProfile =
    (grade === "中1" || grade === "中2" || grade === "中3") && subject.length > 0;
  const scopeTopics = (data.testScope?.topics as unknown[] | undefined) ?? [];
  const hasScope = Array.isArray(scopeTopics) && scopeTopics.length > 0;
  const totalAnswered =
    typeof data.stats?.totalAnswered === "number" ? data.stats.totalAnswered : 0;

  let segment: Segment;
  if (!hasProfile) segment = "A";
  else if (!hasScope) segment = "B";
  else if (totalAnswered >= 1) segment = "C";
  else segment = "D";

  if (segment === "A") stats.segmentA++;
  else if (segment === "B") stats.segmentB++;
  else if (segment === "C") stats.segmentC++;
  else stats.segmentD++;

  return {
    uid,
    lineUserId,
    segment,
    grade,
    totalAnswered,
    scopeCount: scopeTopics.length,
  };
}

// ============================================================
// flex バブル定義
// ============================================================

function bubbleApology(isActive: boolean) {
  return {
    type: "flex" as const,
    altText: "公式LINE 配信を再開しました",
    contents: {
      type: "bubble" as const,
      size: "kilo" as const,
      header: {
        type: "box" as const,
        layout: "vertical" as const,
        backgroundColor: "#F59E0B",
        paddingAll: "14px",
        contents: [
          {
            type: "text" as const,
            text: isActive
              ? "📢 お休みしていてすみません"
              : "📢 公式LINE 配信を再開しました",
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
        paddingAll: "14px",
        contents: [
          {
            type: "text" as const,
            text: isActive
              ? "先月いっぱい配信を止めていました。\nいつも使ってくれていたのに失礼しました 🙏\n\n本日から毎日1問の配信を再開します！"
              : "本日から毎日1問の配信を再開します。\nまた一緒に学んでいきましょう。",
            wrap: true,
            size: "sm" as const,
            color: "#333333",
          },
        ],
      },
    },
  };
}

function bubbleProfileSetup() {
  return {
    type: "flex" as const,
    altText: "学年・教科を登録してください",
    contents: {
      type: "bubble" as const,
      size: "kilo" as const,
      body: {
        type: "box" as const,
        layout: "vertical" as const,
        paddingAll: "14px",
        spacing: "sm" as const,
        contents: [
          {
            type: "text" as const,
            text: "👤 学年・教科を登録してください",
            weight: "bold" as const,
            size: "md" as const,
            wrap: true,
          },
          {
            type: "text" as const,
            text: "明日からの配信のために、学年と教科を選んでください。\n設定画面から1分で完了します。",
            wrap: true,
            size: "sm" as const,
            color: "#444444",
          },
        ],
      },
      footer: {
        type: "box" as const,
        layout: "vertical" as const,
        paddingAll: "14px",
        contents: [
          {
            type: "button" as const,
            style: "primary" as const,
            color: "#F59E0B",
            height: "sm" as const,
            action: {
              type: "uri" as const,
              label: "設定画面を開く",
              uri: LIFF_SETTINGS_URL,
            },
          },
        ],
      },
    },
  };
}

function bubbleScopeSetup() {
  return {
    type: "flex" as const,
    altText: "テスト範囲を設定してください",
    contents: {
      type: "bubble" as const,
      size: "kilo" as const,
      body: {
        type: "box" as const,
        layout: "vertical" as const,
        paddingAll: "14px",
        spacing: "sm" as const,
        contents: [
          {
            type: "text" as const,
            text: "🎯 テスト範囲を設定してください",
            weight: "bold" as const,
            size: "md" as const,
            wrap: true,
          },
          {
            type: "text" as const,
            text: "明日からの配信で出題する範囲を選んでください。\n設定後に LINE アプリを一度閉じて開き直すと、最新の状態で表示されます。",
            wrap: true,
            size: "sm" as const,
            color: "#444444",
          },
        ],
      },
      footer: {
        type: "box" as const,
        layout: "vertical" as const,
        paddingAll: "14px",
        contents: [
          {
            type: "button" as const,
            style: "primary" as const,
            color: "#F59E0B",
            height: "sm" as const,
            action: {
              type: "uri" as const,
              label: "範囲を設定する",
              uri: LIFF_SCOPE_URL,
            },
          },
        ],
      },
    },
  };
}

function bubbleNewStart() {
  return {
    type: "flex" as const,
    altText: "本日から配信を始めます",
    contents: {
      type: "bubble" as const,
      size: "kilo" as const,
      header: {
        type: "box" as const,
        layout: "vertical" as const,
        backgroundColor: "#F59E0B",
        paddingAll: "14px",
        contents: [
          {
            type: "text" as const,
            text: "✨ 本日から配信開始",
            color: "#FFFFFF",
            weight: "bold" as const,
            size: "md" as const,
          },
        ],
      },
      body: {
        type: "box" as const,
        layout: "vertical" as const,
        paddingAll: "14px",
        contents: [
          {
            type: "text" as const,
            text: "設定いただいた範囲で、毎日1問のクイズをお届けします。\n通学・寝る前のスキマ時間にどうぞ！",
            wrap: true,
            size: "sm" as const,
            color: "#333333",
          },
        ],
      },
    },
  };
}

function bubbleAppReload() {
  return {
    type: "flex" as const,
    altText: "LINE アプリを一度閉じて開き直してください",
    contents: {
      type: "bubble" as const,
      size: "kilo" as const,
      body: {
        type: "box" as const,
        layout: "vertical" as const,
        paddingAll: "14px",
        spacing: "sm" as const,
        contents: [
          {
            type: "text" as const,
            text: "🔄 アプリの再起動を推奨",
            weight: "bold" as const,
            size: "md" as const,
            color: "#0EA5E9",
          },
          {
            type: "text" as const,
            text: "メニューや表示が古いままになっている場合があります。\nLINE アプリを一度閉じて開き直すと、最新の状態で表示されます。",
            wrap: true,
            size: "sm" as const,
            color: "#444444",
          },
        ],
      },
    },
  };
}

function bubbleTrialInfo() {
  return {
    type: "flex" as const,
    altText: "7日間プレミアム体験中です",
    contents: {
      type: "bubble" as const,
      size: "kilo" as const,
      header: {
        type: "box" as const,
        layout: "vertical" as const,
        backgroundColor: "#FEF3C7",
        paddingAll: "14px",
        contents: [
          {
            type: "text" as const,
            text: "🎁 7日間プレミアム体験中",
            color: "#92400E",
            weight: "bold" as const,
            size: "md" as const,
          },
        ],
      },
      body: {
        type: "box" as const,
        layout: "vertical" as const,
        paddingAll: "14px",
        spacing: "sm" as const,
        contents: [
          {
            type: "text" as const,
            text: "「追加で解く」「苦手を復習」「じっくり学ぶ」など、有料機能を 7 日間フルでお試しいただけます。",
            wrap: true,
            size: "sm" as const,
            color: "#333333",
          },
          {
            type: "text" as const,
            text: "✅ クレジットカード登録なし\n✅ 期間中の登録で月¥680 永続ロック",
            wrap: true,
            size: "xs" as const,
            color: "#666666",
          },
        ],
      },
      footer: {
        type: "box" as const,
        layout: "vertical" as const,
        paddingAll: "14px",
        contents: [
          {
            type: "button" as const,
            style: "primary" as const,
            color: "#F59E0B",
            height: "sm" as const,
            action: {
              type: "uri" as const,
              label: "プレミアムを詳しく見る",
              uri: LIFF_PREMIUM_INFO_URL,
            },
          },
        ],
      },
    },
  };
}

function buildBundle(segment: Segment): any[] {
  switch (segment) {
    case "A":
      return [bubbleApology(false), bubbleProfileSetup(), bubbleAppReload(), bubbleTrialInfo()];
    case "B":
      return [bubbleApology(false), bubbleScopeSetup(), bubbleAppReload(), bubbleTrialInfo()];
    case "C":
      return [bubbleApology(true), bubbleAppReload(), bubbleTrialInfo()];
    case "D":
      return [bubbleNewStart(), bubbleAppReload(), bubbleTrialInfo()];
  }
}

async function multicast(token: string, to: string[], messages: any[]): Promise<void> {
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
    `[segmented] start dryRun=${args.dryRun} segment=${args.onlySegment ?? "all"} limit=${args.limit ?? "none"}`
  );

  initializeApp({ credential: applicationDefault(), projectId: FIREBASE_PROJECT_ID });
  const db = getFirestore();
  const usersSnap = await db.collection("users").get();
  console.log(`[segmented] scanned ${usersSnap.size} users`);

  const stats: Stats = {
    scanned: usersSnap.size,
    segmentA: 0,
    segmentB: 0,
    segmentC: 0,
    segmentD: 0,
    skippedAdmin: 0,
    skippedNoLineUserId: 0,
    skippedBlocked: 0,
    multicastSent: 0,
    multicastFailed: 0,
  };

  const candidates: Candidate[] = [];
  for (const doc of usersSnap.docs) {
    const c = classify(doc.id, doc.data(), stats);
    if (!c) continue;
    if (args.onlySegment && c.segment !== args.onlySegment) continue;
    candidates.push(c);
  }

  console.log(
    `[segmented] candidates: A=${stats.segmentA} B=${stats.segmentB} C=${stats.segmentC} D=${stats.segmentD} ` +
      `(filtered ${candidates.length}) | skipped admin=${stats.skippedAdmin} noLineUserId=${stats.skippedNoLineUserId} blocked=${stats.skippedBlocked}`
  );

  // セグメント別にグループ化
  const bySegment: Record<Segment, Candidate[]> = { A: [], B: [], C: [], D: [] };
  for (const c of candidates) bySegment[c.segment].push(c);

  // --limit でセグメントごとに先頭 N 件に絞る
  if (args.limit !== null) {
    for (const seg of ["A", "B", "C", "D"] as Segment[]) {
      bySegment[seg] = bySegment[seg].slice(0, args.limit);
    }
    console.log(`[segmented] --limit ${args.limit} applied per segment`);
  }

  // 各セグメントの bundle プレビュー
  for (const seg of ["A", "B", "C", "D"] as Segment[]) {
    const users = bySegment[seg];
    if (users.length === 0) continue;
    const bundle = buildBundle(seg);
    console.log(
      `\n[segmented] === Segment ${seg}: ${users.length} users, ${bundle.length} bubbles ===`
    );
    bundle.forEach((b, i) => {
      console.log(`  bubble ${i + 1}: ${b.altText}`);
    });
    console.log(`  対象例: ${users.slice(0, 3).map((u) => u.uid).join(", ")}${users.length > 3 ? ` ... (+${users.length - 3})` : ""}`);
  }

  if (args.dryRun) {
    console.log("\n[segmented] dry-run のため送信なし。");
    return;
  }

  // 実送信: 各セグメントを 500 件単位で multicast
  console.log("\n[segmented] 送信開始...");
  for (const seg of ["A", "B", "C", "D"] as Segment[]) {
    const users = bySegment[seg];
    if (users.length === 0) continue;
    const bundle = buildBundle(seg);
    const ids = users.map((u) => u.lineUserId);
    for (let i = 0; i < ids.length; i += MULTICAST_BATCH_SIZE) {
      const batch = ids.slice(i, i + MULTICAST_BATCH_SIZE);
      try {
        await multicast(env.token, batch, bundle);
        stats.multicastSent += batch.length;
        console.log(
          `  ✓ Segment ${seg} batch ${i / MULTICAST_BATCH_SIZE + 1}: ${batch.length} users`
        );
      } catch (err) {
        stats.multicastFailed += batch.length;
        console.error(
          `  ✗ Segment ${seg} batch failed (${batch.length} users):`,
          (err as Error).message
        );
      }
      await sleep(RATE_LIMIT_SLEEP_MS);
    }
  }

  // deliveryStats 記録
  const now = new Date();
  const month = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, "0")}`;
  await db.doc(`deliveryStats/${month}`).set(
    {
      relaunchSegmentedA: FieldValue.increment(bySegment.A.length),
      relaunchSegmentedB: FieldValue.increment(bySegment.B.length),
      relaunchSegmentedC: FieldValue.increment(bySegment.C.length),
      relaunchSegmentedD: FieldValue.increment(bySegment.D.length),
      relaunchSegmentedSentAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  console.log(`\n[segmented] done: ${JSON.stringify(stats, null, 2)}`);
}

main().catch((err) => {
  console.error("[segmented] fatal:", err);
  process.exit(1);
});
