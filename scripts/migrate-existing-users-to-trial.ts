/**
 * Phase 5(b): 既存ユーザーへの一括 trial 適用スクリプト。
 *
 * Phase 1+2（auto-trial on first answer）は新規ユーザー専用で、
 * `prevTotalAnswered === 0 && nextTotalAnswered === 1` のときだけ発火する。
 * そのため「Phase 1+2 デプロイ前から既に 1問以上回答していたユーザー」は
 * 永遠に auto-trial に入れない。本スクリプトでそれらに一括で trial を開放する。
 *
 * 対象条件:
 *   - 管理者ではない
 *   - lineUserId が設定済み
 *   - blocked !== true（ブロック中ユーザーは LINE API でリッチメニュー変更や
 *     push が失敗するので除外）
 *   - grade が "中1" | "中2" | "中3"（trial 適用前に学年は必須）
 *   - stats.totalAnswered >= 1（1問以上回答済）。
 *     ※ --include-zero-answers で未回答ユーザーも対象に含める
 *   - plan !== "premium"（既プレミアム化済みは除外）
 *   - planSource !== "trial"（既に trial 使用済み = 期限切れも含む は除外）
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/migrate-existing-users-to-trial.ts --dry-run
 *   npx tsx scripts/migrate-existing-users-to-trial.ts --dry-run --include-zero-answers
 *   npx tsx scripts/migrate-existing-users-to-trial.ts --confirm --skip-flex --include-zero-answers
 *   npx tsx scripts/migrate-existing-users-to-trial.ts --confirm
 *
 * 引数:
 *   --dry-run                実書き込みなし。対象者リストのみ表示（デフォルト）
 *   --confirm                実書き込みあり
 *   --skip-flex              LINE 公式の trial 開始 flex push を送らない
 *                            （配信制限中の本実行用、または broadcast で代替する場合）
 *   --limit <N>              先頭 N 件だけ処理（段階リリース用）
 *   --uid <line:Uxxx>        特定 1 件だけ処理（テスト用）
 *   --include-zero-answers   stats.totalAnswered < 1 のユーザーも対象に含める
 *                            （登録者全員 trial キャンペーン用、デフォルトは除外）
 *
 * 各ユーザーに対して行うこと:
 *   1. Firestore users/{uid} に Phase 1+2 と同じ trial フィールド一式を merge
 *      （plan / planSource / premiumUntil / priceLockExpiresAt /
 *        lockedMonthlyPrice / trialStartedAt / richMenuType /
 *        lastRichMenuUpdatedAt / updatedAt）
 *   2. LINE API でリッチメニューを trial に link
 *   3. premiumFunnelEvents に trial_started { source: 'migration' } を記録
 *   4. （--skip-flex なしの時のみ）trial 開始 flex を push
 *
 * 失敗時の挙動:
 *   - 各ユーザーごとに try/catch で処理を分離。1人の失敗で全体は止めない
 *   - 失敗内訳をサマリーに出力
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { applicationDefault, initializeApp } from "firebase-admin/app";
import { FieldValue, getFirestore, Timestamp } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";
const TRIAL_DURATION_MS = 7 * 24 * 60 * 60 * 1000;
const RATE_LIMIT_SLEEP_MS = 200;

const ADMIN_LINE_USER_IDS = new Set<string>([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);

const ROOT = resolve(import.meta.dirname, "..");
const ENV_FILE = resolve(ROOT, "functions/.env");

interface Env {
  channelAccessToken: string;
  richmenuFreeId: string;
  richmenuTrialId: string;
  richmenuPremiumId: string;
}

interface Args {
  dryRun: boolean;
  skipFlex: boolean;
  limit: number | null;
  onlyUid: string | null;
  includeZeroAnswers: boolean;
}

interface Candidate {
  uid: string;
  lineUserId: string;
  grade: string;
  totalAnswered: number;
  status: string;
}

interface Stats {
  scanned: number;
  candidates: number;
  processed: number;
  firestoreUpdated: number;
  richmenuLinked: number;
  funnelLogged: number;
  flexPushed: number;
  skippedAlreadyPremium: number;
  skippedAlreadyTrial: number;
  skippedNoLineUserId: number;
  skippedBlocked: number;
  skippedNoGrade: number;
  skippedNoAnswers: number;
  skippedAdmin: number;
  errorsFirestore: number;
  errorsRichmenu: number;
  errorsFlex: number;
}

function parseArgs(): Args {
  const argv = process.argv.slice(2);
  const args: Args = {
    dryRun: true,
    skipFlex: false,
    limit: null,
    onlyUid: null,
    includeZeroAnswers: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--dry-run") args.dryRun = true;
    else if (a === "--confirm") args.dryRun = false;
    else if (a === "--skip-flex") args.skipFlex = true;
    else if (a === "--include-zero-answers") args.includeZeroAnswers = true;
    else if (a === "--limit") {
      const n = Number(argv[++i]);
      if (!Number.isFinite(n) || n <= 0) {
        throw new Error("--limit には正の整数を指定してください");
      }
      args.limit = n;
    } else if (a === "--uid") {
      args.onlyUid = argv[++i] ?? null;
      if (!args.onlyUid || !args.onlyUid.startsWith("line:")) {
        throw new Error("--uid は line:Uxxxx... の形式で指定してください");
      }
    } else {
      throw new Error(`不明な引数: ${a}`);
    }
  }
  return args;
}

function loadEnv(): Env {
  let raw: string;
  try {
    raw = readFileSync(ENV_FILE, "utf8");
  } catch (error) {
    throw new Error(
      `${ENV_FILE} を読めません: ${(error as Error).message}\n` +
        "docs/operations/line-webhook-deploy.md §2 を参照",
    );
  }
  const map: Record<string, string> = {};
  for (const line of raw.split(/\r?\n/)) {
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
    map[key] = value;
  }
  const channelAccessToken = map.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN || "";
  if (!channelAccessToken) {
    throw new Error(
      "LINE_MESSAGING_CHANNEL_ACCESS_TOKEN が functions/.env にありません",
    );
  }
  return {
    channelAccessToken,
    richmenuFreeId: map.LINE_RICHMENU_FREE_ID || "",
    richmenuTrialId: map.LINE_RICHMENU_TRIAL_ID || "",
    richmenuPremiumId: map.LINE_RICHMENU_PREMIUM_ID || "",
  };
}

function resolveTrialRichMenuId(env: Env): string {
  if (env.richmenuTrialId) return env.richmenuTrialId;
  if (env.richmenuPremiumId) {
    console.warn(
      "[migrate] LINE_RICHMENU_TRIAL_ID 未設定。LINE_RICHMENU_PREMIUM_ID にフォールバック",
    );
    return env.richmenuPremiumId;
  }
  throw new Error(
    "LINE_RICHMENU_TRIAL_ID も LINE_RICHMENU_PREMIUM_ID も未設定。",
  );
}

async function linkRichMenu(
  env: Env,
  lineUserId: string,
  richMenuId: string,
): Promise<void> {
  const res = await fetch(
    `https://api.line.me/v2/bot/user/${lineUserId}/richmenu/${richMenuId}`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${env.channelAccessToken}` },
    },
  );
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(
      `LINE link API ${res.status}: ${body || "(empty body)"}`,
    );
  }
}

async function pushTrialStartedFlex(
  env: Env,
  lineUserId: string,
): Promise<void> {
  // 自己完結版の trial 開始 flex（buildTrialStartedFlexMessage と同等の挙動だが
  // postback ボタンは LINE webhook ハンドラに依存するため、ここでは LIFF / URL
  // ボタンの軽量版を使う）。
  const flex = {
    type: "flex",
    altText: "7日間お試しを開放しました！ - チャットでスタディ",
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
            text: "✨ 7日間お試しを開放しました！",
            color: "#FFFFFF",
            weight: "bold",
            size: "md",
          },
          {
            type: "text",
            text: "追加問題・苦手復習・暗記カード・四択クイズが7日間使い放題",
            color: "#FFF7E6",
            size: "xs",
            margin: "xs",
            wrap: true,
          },
        ],
      },
      body: {
        type: "box",
        layout: "vertical",
        paddingAll: "16px",
        contents: [
          {
            type: "text",
            text: "いつもありがとう！🎉",
            weight: "bold",
            size: "sm",
            color: "#111827",
            wrap: true,
          },
          {
            type: "text",
            text: "7日間だけ気軽に試せるモードを開放したよ。カード登録なし、7日後はそのまま自動で元に戻るから安心して試してね。",
            wrap: true,
            size: "xs",
            color: "#374151",
            margin: "sm",
          },
        ],
      },
      footer: {
        type: "box",
        layout: "vertical",
        spacing: "sm",
        paddingAll: "16px",
        contents: [
          {
            type: "button",
            style: "primary",
            color: "#F59E0B",
            height: "sm",
            action: {
              type: "postback",
              label: "▶ まずは追加で解く",
              data: "type=extra_question",
              displayText: "追加で解く",
            },
          },
          {
            type: "button",
            style: "secondary",
            height: "sm",
            action: {
              type: "postback",
              label: "苦手を復習する",
              data: "type=weak_review",
              displayText: "苦手を復習",
            },
          },
        ],
      },
    },
  };

  const res = await fetch("https://api.line.me/v2/bot/message/push", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.channelAccessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ to: lineUserId, messages: [flex] }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(
      `LINE push API ${res.status}: ${body || "(empty body)"}`,
    );
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

function classify(
  uid: string,
  data: any,
  stats: Stats,
  includeZeroAnswers: boolean,
): Candidate | null {
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
  if (grade !== "中1" && grade !== "中2" && grade !== "中3") {
    stats.skippedNoGrade++;
    return null;
  }
  const totalAnswered =
    typeof data.stats?.totalAnswered === "number"
      ? data.stats.totalAnswered
      : 0;
  if (totalAnswered < 1 && !includeZeroAnswers) {
    stats.skippedNoAnswers++;
    return null;
  }
  if (data.plan === "premium") {
    stats.skippedAlreadyPremium++;
    return null;
  }
  if (data.planSource === "trial") {
    stats.skippedAlreadyTrial++;
    return null;
  }
  return {
    uid,
    lineUserId,
    grade,
    totalAnswered,
    status: typeof data.status === "string" ? data.status : "(unset)",
  };
}

async function main(): Promise<void> {
  const args = parseArgs();
  const env = loadEnv();
  const trialRichMenuId = resolveTrialRichMenuId(env);

  console.log(
    `[migrate] start dryRun=${args.dryRun} skipFlex=${args.skipFlex} ` +
      `includeZeroAnswers=${args.includeZeroAnswers} ` +
      `limit=${args.limit ?? "none"} onlyUid=${args.onlyUid ?? "(all)"}`,
  );
  console.log(`[migrate] trial richMenuId = ${trialRichMenuId}`);

  initializeApp({
    credential: applicationDefault(),
    projectId: FIREBASE_PROJECT_ID,
  });
  const db = getFirestore();

  let usersSnap;
  if (args.onlyUid) {
    const doc = await db.doc(`users/${args.onlyUid}`).get();
    usersSnap = { docs: doc.exists ? [doc] : [], size: doc.exists ? 1 : 0 };
  } else {
    usersSnap = await db.collection("users").get();
  }
  console.log(`[migrate] scanned ${usersSnap.size} users`);

  const stats: Stats = {
    scanned: usersSnap.size,
    candidates: 0,
    processed: 0,
    firestoreUpdated: 0,
    richmenuLinked: 0,
    funnelLogged: 0,
    flexPushed: 0,
    skippedAlreadyPremium: 0,
    skippedAlreadyTrial: 0,
    skippedNoLineUserId: 0,
    skippedBlocked: 0,
    skippedNoGrade: 0,
    skippedNoAnswers: 0,
    skippedAdmin: 0,
    errorsFirestore: 0,
    errorsRichmenu: 0,
    errorsFlex: 0,
  };

  const candidates: Candidate[] = [];
  for (const doc of usersSnap.docs) {
    const c = classify(doc.id, doc.data(), stats, args.includeZeroAnswers);
    if (c) candidates.push(c);
  }
  stats.candidates = candidates.length;

  console.log(`\n[migrate] 対象者 ${candidates.length} 名:`);
  for (const c of candidates) {
    console.log(
      `  - ${c.uid.padEnd(50)} grade=${c.grade} answered=${String(c.totalAnswered).padStart(3)} status=${c.status}`,
    );
  }

  const targets = args.limit ? candidates.slice(0, args.limit) : candidates;
  if (args.limit && targets.length < candidates.length) {
    console.log(
      `\n[migrate] --limit=${args.limit} のため先頭 ${targets.length} 件のみ処理`,
    );
  }

  if (args.dryRun) {
    console.log("\n[migrate] dry-run のため書き込みは行いません。");
    printSummary(stats);
    return;
  }

  console.log(`\n[migrate] 実書き込みを開始します...`);
  for (const c of targets) {
    stats.processed++;
    const trialEnd = new Date(Date.now() + TRIAL_DURATION_MS);

    try {
      await db.doc(`users/${c.uid}`).set(
        {
          plan: "premium",
          planSource: "trial",
          premiumUntil: Timestamp.fromDate(trialEnd),
          priceLockExpiresAt: Timestamp.fromDate(trialEnd),
          lockedMonthlyPrice: 680,
          trialStartedAt: FieldValue.serverTimestamp(),
          richMenuType: "trial",
          lastRichMenuUpdatedAt: FieldValue.serverTimestamp(),
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true },
      );
      stats.firestoreUpdated++;
    } catch (error) {
      stats.errorsFirestore++;
      console.error(`[migrate] Firestore 書き込み失敗 uid=${c.uid}:`, error);
      continue;
    }

    try {
      await linkRichMenu(env, c.lineUserId, trialRichMenuId);
      stats.richmenuLinked++;
    } catch (error) {
      stats.errorsRichmenu++;
      console.error(`[migrate] richmenu link 失敗 uid=${c.uid}:`, error);
    }

    try {
      await db.collection("premiumFunnelEvents").add({
        uid: c.uid,
        lineUserId: c.lineUserId,
        eventType: "trial_started",
        occurredAt: FieldValue.serverTimestamp(),
        context: { source: "migration", migratedAt: new Date().toISOString() },
      });
      stats.funnelLogged++;
    } catch (error) {
      console.warn(`[migrate] funnel event 失敗 uid=${c.uid}:`, error);
    }

    if (!args.skipFlex) {
      try {
        await pushTrialStartedFlex(env, c.lineUserId);
        stats.flexPushed++;
      } catch (error) {
        stats.errorsFlex++;
        console.error(`[migrate] flex push 失敗 uid=${c.uid}:`, error);
      }
    }

    console.log(
      `  ✓ ${c.uid} done (firestore=${stats.firestoreUpdated} richmenu=${stats.richmenuLinked}${args.skipFlex ? "" : ` flex=${stats.flexPushed}`})`,
    );

    await sleep(RATE_LIMIT_SLEEP_MS);
  }

  printSummary(stats);
}

function printSummary(stats: Stats): void {
  console.log("\n========== Summary ==========");
  console.log(`scanned                 : ${stats.scanned}`);
  console.log(`candidates              : ${stats.candidates}`);
  console.log(`processed               : ${stats.processed}`);
  console.log(`  firestoreUpdated      : ${stats.firestoreUpdated}`);
  console.log(`  richmenuLinked        : ${stats.richmenuLinked}`);
  console.log(`  funnelLogged          : ${stats.funnelLogged}`);
  console.log(`  flexPushed            : ${stats.flexPushed}`);
  console.log(`skipped:`);
  console.log(`  admin                 : ${stats.skippedAdmin}`);
  console.log(`  no lineUserId         : ${stats.skippedNoLineUserId}`);
  console.log(`  blocked               : ${stats.skippedBlocked}`);
  console.log(`  no grade              : ${stats.skippedNoGrade}`);
  console.log(`  totalAnswered < 1     : ${stats.skippedNoAnswers}`);
  console.log(`  already premium       : ${stats.skippedAlreadyPremium}`);
  console.log(`  already trial         : ${stats.skippedAlreadyTrial}`);
  console.log(`errors:`);
  console.log(`  firestore             : ${stats.errorsFirestore}`);
  console.log(`  richmenu link         : ${stats.errorsRichmenu}`);
  console.log(`  flex push             : ${stats.errorsFlex}`);
  console.log("=============================");
}

main().catch((e) => {
  console.error("[migrate] fatal:", e);
  process.exit(1);
});
