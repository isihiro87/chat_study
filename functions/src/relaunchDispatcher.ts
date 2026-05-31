/**
 * 2026-06-01 公式LINE 再開告知のセグメント別 multicast を、
 * コンテナ非依存で Google Cloud 上から実行するための cron 関数。
 *
 * 配信タイミング (すべて JST、2026-06-01 限定):
 *   05:50 → preferredHour=6     (朝6時配信の 10 分前)
 *   06:50 → preferredHour=7+未設定 (朝7時の 10 分前 + 配信時刻未設定 A/B)
 *   15:50 → preferredHour=16    (夕方4時の 10 分前)
 *   17:30 → preferredHour=18    (夕方6時の 30 分前)
 *   19:30 → preferredHour=20    (夜8時の 30 分前)
 *
 * cron は 10 分間隔（:00, :10, ..., :50）。スケジュール時刻と
 * cron 起動点が一致する分のみ multicast を実行する。
 * 多重発火に備え Firestore `relaunchSends/{key}` で idempotency lock を取る。
 *
 * 2026-06-02 以降は date guard で即 return（無害化）。確実に
 * 安全な日付に達したら本関数を削除して構わない。
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import * as functions from "firebase-functions/v1";
import {
  initializeApp,
  getApps,
  applicationDefault,
} from "firebase-admin/app";
import { FieldValue, Timestamp, getFirestore } from "firebase-admin/firestore";

if (getApps().length === 0) {
  initializeApp({ credential: applicationDefault() });
}

const TARGET_JST_YMD = "2026-06-01";

const SCHEDULE: Record<string, string> = {
  "05:50": "6",
  "06:50": "7,none",
  "15:50": "16",
  "17:30": "18",
  "19:30": "20",
};

/** 管理者テスト用: この時刻に U429... を trial 化 + flex push する */
const ADMIN_TEST_HHMM = "00:02";
const ADMIN_TEST_LINE_USER_ID = "U429b1d951fc7236c9e8e85e5ca96b910";
const ADMIN_TEST_TRIAL_END_ISO = "2026-06-08T00:02:00+09:00";

const ADMIN_LINE_USER_IDS = new Set<string>([
  "U429b1d951fc7236c9e8e85e5ca96b910",
  "U732828c7b975479c97a104c5cbc45b7a",
]);

const LIFF_SCOPE_URL = "https://liff.line.me/2009587166-fLjzMGk8";
const LIFF_PREMIUM_INFO_URL = "https://liff.line.me/2009587166-k51bH4LC";

const RESTART_HINT_TEXT =
  "※ テスト範囲設定や暗記カードのページに進めない場合は、LINE アプリを完全に終了してから開き直してください。\n（ホームに戻るだけでは更新されません。アプリ切替画面から LINE を上にスワイプ）";

type Segment = "A" | "B" | "C" | "D" | "E";

interface Candidate {
  uid: string;
  lineUserId: string;
  segment: Segment;
  preferredHour: number | null;
}

function classify(
  uid: string,
  data: any
): Candidate | null {
  const lineUserId = typeof data.lineUserId === "string" ? data.lineUserId : "";
  if (!lineUserId) return null;
  if (ADMIN_LINE_USER_IDS.has(lineUserId)) return null;
  if (data.blocked === true) return null;

  const grade = typeof data.grade === "string" ? data.grade : "";
  const subject = typeof data.subject === "string" ? data.subject : "";
  const hasProfile =
    (grade === "中1" || grade === "中2" || grade === "中3") &&
    subject.length > 0;
  const hasPreferredHour = typeof data.preferredHour === "number";
  const totalAnswered =
    typeof data.stats?.totalAnswered === "number"
      ? data.stats.totalAnswered
      : 0;
  const scopeTopics = (data.testScope?.topics as unknown[] | undefined) ?? [];
  const hasScope = Array.isArray(scopeTopics) && scopeTopics.length > 0;

  let segment: Segment;
  if (totalAnswered >= 1) segment = "E";
  else if (!hasProfile) segment = "A";
  else if (!hasPreferredHour) segment = "B";
  else if (!hasScope) segment = "C";
  else segment = "D";

  return {
    uid,
    lineUserId,
    segment,
    preferredHour: hasPreferredHour ? (data.preferredHour as number) : null,
  };
}

// ===== flex bubble builders =====
function bubbleGradeSelect(): any {
  return {
    type: "flex",
    altText: "学年を選んでください - 公式LINE で毎日1問配信を始めます",
    contents: {
      type: "bubble",
      size: "kilo",
      header: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#F59E0B",
        paddingAll: "14px",
        spacing: "xs",
        contents: [
          { type: "text", text: "STEP 1 / 3", color: "#FEF3C7", size: "xs", weight: "bold" },
          { type: "text", text: "学年を選んでください", color: "#FFFFFF", weight: "bold", size: "md" },
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
            text: "公式LINE で毎日1問の配信を始めるには、まず学年を教えてください。下のボタンをタップするとオンボーディングが続きます。",
            wrap: true, size: "sm", color: "#333333",
          },
          { type: "text", text: RESTART_HINT_TEXT, wrap: true, size: "xs", color: "#888888", margin: "md" },
        ],
      },
      footer: {
        type: "box",
        layout: "vertical",
        spacing: "sm",
        paddingAll: "14px",
        contents: ["中1", "中2", "中3"].map((label) => ({
          type: "button",
          style: "secondary",
          height: "sm",
          action: { type: "postback", label, data: `type=select_grade&grade=${label}`, displayText: label },
        })),
      },
    },
  };
}

function bubblePreferredHourSelect(): any {
  return {
    type: "flex",
    altText: "配信時刻を選んでください",
    contents: {
      type: "bubble",
      size: "kilo",
      header: {
        type: "box", layout: "vertical", backgroundColor: "#F59E0B", paddingAll: "14px", spacing: "xs",
        contents: [
          { type: "text", text: "STEP 2 / 3", color: "#FEF3C7", size: "xs", weight: "bold" },
          { type: "text", text: "配信時刻を選んでください", color: "#FFFFFF", weight: "bold", size: "md" },
        ],
      },
      body: {
        type: "box", layout: "vertical", paddingAll: "14px", spacing: "sm",
        contents: [
          { type: "text", text: "毎日1問の問題をお届けする時刻を選んでください。タップするとオンボーディングが続きます。", wrap: true, size: "sm", color: "#333333" },
          { type: "text", text: RESTART_HINT_TEXT, wrap: true, size: "xs", color: "#888888", margin: "md" },
        ],
      },
      footer: {
        type: "box", layout: "vertical", spacing: "sm", paddingAll: "14px",
        contents: [
          { label: "朝6時", hour: 6 },
          { label: "朝7時", hour: 7 },
          { label: "夕方4時", hour: 16 },
          { label: "夕方6時", hour: 18 },
          { label: "夜8時", hour: 20 },
        ].map((o) => ({
          type: "button", style: "secondary", height: "sm",
          action: { type: "postback", label: o.label, data: `type=select_time&hour=${o.hour}`, displayText: o.label },
        })),
      },
    },
  };
}

function bubbleScopeSetup(): any {
  return {
    type: "flex",
    altText: "テスト範囲を設定すると出題精度が上がります",
    contents: {
      type: "bubble", size: "mega",
      header: {
        type: "box", layout: "vertical", backgroundColor: "#F59E0B", paddingAll: "14px",
        contents: [{ type: "text", text: "📢 配信を再開しました", color: "#FFFFFF", weight: "bold", size: "md", wrap: true }],
      },
      body: {
        type: "box", layout: "vertical", paddingAll: "14px", spacing: "sm",
        contents: [
          { type: "text", text: "本日から毎日1問の配信を再開しています。", wrap: true, size: "sm", color: "#333333" },
          { type: "text", text: "テスト範囲を設定すると、その単元だけから出題されてテスト対策の精度が上がります。", wrap: true, size: "sm", color: "#333333", margin: "md" },
          { type: "text", text: RESTART_HINT_TEXT, wrap: true, size: "xs", color: "#888888", margin: "md" },
        ],
      },
      footer: {
        type: "box", layout: "vertical", paddingAll: "14px",
        contents: [{ type: "button", style: "primary", color: "#F59E0B", height: "sm",
          action: { type: "uri", label: "範囲を設定する", uri: LIFF_SCOPE_URL } }],
      },
    },
  };
}

function bubbleRedelivery(): any {
  return {
    type: "flex",
    altText: "公式LINE 配信を再開しました",
    contents: {
      type: "bubble", size: "mega",
      header: {
        type: "box", layout: "vertical", backgroundColor: "#F59E0B", paddingAll: "14px",
        contents: [{ type: "text", text: "📢 配信を再開しました", color: "#FFFFFF", weight: "bold", size: "md" }],
      },
      body: {
        type: "box", layout: "vertical", paddingAll: "14px", spacing: "sm",
        contents: [
          { type: "text", text: "公式LINE のメッセージ送信枠を増やし、本日から毎日1問の配信を再開しています。通学・寝る前のスキマ時間にどうぞ！", wrap: true, size: "sm", color: "#333333" },
          { type: "text", text: RESTART_HINT_TEXT, wrap: true, size: "xs", color: "#888888", margin: "md" },
        ],
      },
    },
  };
}

function bubbleApologyAnswered(): any {
  return {
    type: "flex",
    altText: "突然の配信停止についてのお詫びと、月末までの配信再開のお知らせ",
    contents: {
      type: "bubble", size: "mega",
      header: {
        type: "box", layout: "vertical", backgroundColor: "#F59E0B", paddingAll: "14px",
        contents: [{ type: "text", text: "🙏 突然の配信停止、すみませんでした", color: "#FFFFFF", weight: "bold", size: "md", wrap: true }],
      },
      body: {
        type: "box", layout: "vertical", paddingAll: "14px", spacing: "sm",
        contents: [
          { type: "text", text: "公式LINE のメッセージ送信上限に達してしまい、お使いいただいているのに突然配信が止まってしまいました。本当に申し訳ありませんでした。", wrap: true, size: "sm", color: "#333333" },
          { type: "text", text: "今月から送信枠を増やしました。月末まで毎日1問お送りします！", wrap: true, size: "sm", color: "#92400E", weight: "bold", margin: "md" },
          { type: "text", text: RESTART_HINT_TEXT, wrap: true, size: "xs", color: "#888888", margin: "md" },
        ],
      },
    },
  };
}

function bubbleTrialBrief(): any {
  return {
    type: "flex",
    altText: "7日間、こんな機能が使えます",
    contents: {
      type: "bubble", size: "kilo",
      header: {
        type: "box", layout: "vertical", backgroundColor: "#FEF3C7", paddingAll: "14px",
        contents: [{ type: "text", text: "🎁 7日間、こんな機能が使えます", color: "#92400E", weight: "bold", size: "md", wrap: true }],
      },
      body: {
        type: "box", layout: "vertical", paddingAll: "14px", spacing: "sm",
        contents: [
          { type: "text", text: "登録後の 7 日間は、プレミアム機能をフル体験いただけます。", wrap: true, size: "sm", color: "#333333" },
          { type: "text",
            text: "✅ 追加で解く（範囲指定して何問でも）\n✅ 苦手を復習（誤答を優先出題）\n✅ 暗記カードで深く学ぶ\n✅ 詳細な成績レポート",
            wrap: true, size: "sm", color: "#444444", margin: "md" },
        ],
      },
    },
  };
}

function bubbleTrialInfo(): any {
  return {
    type: "flex",
    altText: "7日間プレミアム体験中です（登録しない限り料金は発生しません）",
    contents: {
      type: "bubble", size: "kilo",
      header: {
        type: "box", layout: "vertical", backgroundColor: "#FEF3C7", paddingAll: "14px",
        contents: [{ type: "text", text: "🎁 7日間プレミアム体験中", color: "#92400E", weight: "bold", size: "md" }],
      },
      body: {
        type: "box", layout: "vertical", paddingAll: "14px", spacing: "sm",
        contents: [
          { type: "text", text: "「追加で解く」「苦手を復習」「じっくり学ぶ」など、有料機能を 7 日間フルでお試しいただけます。", wrap: true, size: "sm", color: "#333333" },
          { type: "text", text: "ご自分で本登録の手続きをしない限り料金は発生しません。安心してお試しください。", wrap: true, size: "sm", color: "#92400E", weight: "bold", margin: "md" },
          { type: "text", text: "✅ クレジットカード登録不要・自動課金なし\n✅ 期間中の登録で月¥680 永続ロック", wrap: true, size: "xs", color: "#666666" },
        ],
      },
      footer: {
        type: "box", layout: "vertical", paddingAll: "14px",
        contents: [{ type: "button", style: "primary", color: "#F59E0B", height: "sm",
          action: { type: "uri", label: "プレミアムを詳しく見る", uri: LIFF_PREMIUM_INFO_URL } }],
      },
    },
  };
}

function buildBundle(segment: Segment): any[] {
  switch (segment) {
    case "A": return [bubbleGradeSelect(), bubbleTrialBrief()];
    case "B": return [bubblePreferredHourSelect(), bubbleTrialBrief()];
    case "C": return [bubbleScopeSetup(), bubbleTrialInfo()];
    case "D": return [bubbleRedelivery(), bubbleTrialInfo()];
    case "E": return [bubbleApologyAnswered(), bubbleTrialInfo()];
  }
}

async function multicastApi(token: string, to: string[], messages: any[]): Promise<void> {
  const res = await fetch("https://api.line.me/v2/bot/message/multicast", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ to, messages }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`LINE multicast ${res.status} body=${body}`);
  }
}

function jstDateTime(now: Date): { ymd: string; hhmm: string } {
  const fmt = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", hour12: false,
  });
  const parts = fmt.formatToParts(now);
  const m: Record<string, string> = {};
  parts.forEach((p) => { if (p.type !== "literal") m[p.type] = p.value; });
  return {
    ymd: `${m.year}-${m.month}-${m.day}`,
    hhmm: `${m.hour}:${m.minute}`,
  };
}

async function runDispatchFor(preferredHourFilter: string, lockKey: string): Promise<void> {
  const token = process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
  if (!token) {
    console.error("[relaunchDispatcher] LINE_MESSAGING_CHANNEL_ACCESS_TOKEN 未設定");
    return;
  }
  const db = getFirestore();
  const lockRef = db.doc(`relaunchSends/${lockKey}`);
  const lockSnap = await lockRef.get();
  if (lockSnap.exists) {
    console.log(`[relaunchDispatcher] lock 既存、二重送信回避: ${lockKey}`);
    return;
  }
  await lockRef.set({
    startedAt: FieldValue.serverTimestamp(),
    preferredHourFilter,
  });

  const filterSet = new Set<number | "none">();
  for (const tok of preferredHourFilter.split(",")) {
    const t = tok.trim();
    if (t === "none") filterSet.add("none");
    else if (/^\d+$/.test(t)) filterSet.add(Number(t));
  }

  const usersSnap = await db.collection("users").get();
  const candidates: Candidate[] = [];
  for (const doc of usersSnap.docs) {
    const c = classify(doc.id, doc.data());
    if (!c) continue;
    const key: number | "none" = c.preferredHour ?? "none";
    if (!filterSet.has(key)) continue;
    candidates.push(c);
  }
  console.log(`[relaunchDispatcher] ${lockKey} 対象 ${candidates.length} 名`);

  const bySegment: Record<Segment, Candidate[]> = { A: [], B: [], C: [], D: [], E: [] };
  for (const c of candidates) bySegment[c.segment].push(c);

  const sendStats: Record<Segment, { ok: number; failed: number }> = {
    A: { ok: 0, failed: 0 }, B: { ok: 0, failed: 0 },
    C: { ok: 0, failed: 0 }, D: { ok: 0, failed: 0 }, E: { ok: 0, failed: 0 },
  };

  for (const seg of ["A", "B", "C", "D", "E"] as Segment[]) {
    const users = bySegment[seg];
    if (users.length === 0) continue;
    const bundle = buildBundle(seg);
    const ids = users.map((u) => u.lineUserId);
    for (let i = 0; i < ids.length; i += 500) {
      const batch = ids.slice(i, i + 500);
      try {
        await multicastApi(token, batch, bundle);
        sendStats[seg].ok += batch.length;
      } catch (err) {
        sendStats[seg].failed += batch.length;
        console.error(`[relaunchDispatcher] ${seg} multicast 失敗:`, (err as Error).message);
      }
    }
  }

  // deliveryStats 記録
  const now = new Date();
  const month = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, "0")}`;
  await db.doc(`deliveryStats/${month}`).set(
    {
      relaunchSegmentedA: FieldValue.increment(sendStats.A.ok),
      relaunchSegmentedB: FieldValue.increment(sendStats.B.ok),
      relaunchSegmentedC: FieldValue.increment(sendStats.C.ok),
      relaunchSegmentedD: FieldValue.increment(sendStats.D.ok),
      relaunchSegmentedE: FieldValue.increment(sendStats.E.ok),
      relaunchSegmentedSentAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  await lockRef.set(
    {
      finishedAt: FieldValue.serverTimestamp(),
      stats: sendStats,
    },
    { merge: true }
  );

  console.log(
    `[relaunchDispatcher] ${lockKey} 完了: ${JSON.stringify(sendStats)}`
  );
}

async function runAdminTrialTest(): Promise<void> {
  const token = process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
  const trialMenuId =
    process.env.LINE_RICHMENU_TRIAL_ID || process.env.LINE_RICHMENU_PREMIUM_ID;
  if (!token || !trialMenuId) {
    console.error("[adminTrialTest] LINE token or trial richmenu id 未設定");
    return;
  }
  const db = getFirestore();
  const lockRef = db.doc(`relaunchSends/${TARGET_JST_YMD}-${ADMIN_TEST_HHMM}-admin`);
  const lockSnap = await lockRef.get();
  if (lockSnap.exists) {
    console.log("[adminTrialTest] 既実行、skip");
    return;
  }
  await lockRef.set({ startedAt: FieldValue.serverTimestamp() });

  // 1. richmenu trial に切替
  try {
    const res = await fetch(
      `https://api.line.me/v2/bot/user/${ADMIN_TEST_LINE_USER_ID}/richmenu/${trialMenuId}`,
      { method: "POST", headers: { Authorization: `Bearer ${token}` } }
    );
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`richmenu link ${res.status} body=${body}`);
    }
    console.log("[adminTrialTest] richmenu trial にリンク成功");
  } catch (err) {
    console.error("[adminTrialTest] richmenu リンク失敗:", err);
  }

  // 2. Firestore users/{uid} を trial 状態に
  const trialEnd = new Date(ADMIN_TEST_TRIAL_END_ISO);
  const uid = `line:${ADMIN_TEST_LINE_USER_ID}`;
  try {
    await db.doc(`users/${uid}`).set(
      {
        plan: "premium",
        planSource: "trial",
        richMenuType: "trial",
        trialStartedAt: FieldValue.serverTimestamp(),
        premiumUntil: Timestamp.fromDate(trialEnd),
        priceLockExpiresAt: Timestamp.fromDate(trialEnd),
        lockedMonthlyPrice: 680,
        lastRichMenuUpdatedAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    console.log("[adminTrialTest] Firestore trial 状態書き込み完了");
  } catch (err) {
    console.error("[adminTrialTest] Firestore 書き込み失敗:", err);
  }

  // 3. flex push (Segment E と同じ：お詫び+月末まで配信 + trial info)
  try {
    const messages = [bubbleApologyAnswered(), bubbleTrialInfo()];
    const res = await fetch("https://api.line.me/v2/bot/message/push", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ to: ADMIN_TEST_LINE_USER_ID, messages }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`push ${res.status} body=${body}`);
    }
    console.log("[adminTrialTest] push 成功");
  } catch (err) {
    console.error("[adminTrialTest] push 失敗:", err);
  }

  await lockRef.set({ finishedAt: FieldValue.serverTimestamp() }, { merge: true });
}

export const relaunchDispatcher = functions
  .region("asia-northeast1")
  .runWith({ timeoutSeconds: 540 })
  .pubsub.schedule("*/2 * * * *")
  .timeZone("Asia/Tokyo")
  .onRun(async () => {
    const now = new Date();
    const { ymd, hhmm } = jstDateTime(now);
    if (ymd !== TARGET_JST_YMD) {
      // 2026-06-01 以外は何もしない（無害化）
      return null;
    }
    if (hhmm === ADMIN_TEST_HHMM) {
      await runAdminTrialTest();
      return null;
    }
    const filter = SCHEDULE[hhmm];
    if (!filter) {
      return null;
    }
    const lockKey = `${ymd}-${hhmm}-h${filter.replace(/,/g, "_")}`;
    await runDispatchFor(filter, lockKey);
    return null;
  });
