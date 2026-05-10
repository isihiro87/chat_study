import * as functions from "firebase-functions/v1";
import type { messagingApi } from "@line/bot-sdk";
import {
  getCorrectFeedback,
  getIncorrectFeedback,
  getDailyIntro,
  getExtraQuestionIntro,
  getWeakReviewIntro,
  getInitialFirstQuestionIntro,
  getInitialFirstQuestionTrailing,
  getAlreadyDeliveredText,
  isDayStreakMilestone,
} from "./messageVariations";

interface LineEvent {
  type: string;
  source?: { type?: string; userId?: string };
  replyToken?: string;
  postback?: { data: string };
  message?: { type?: string; text?: string };
  [key: string]: unknown;
}

interface LineWebhookBody {
  destination?: string;
  events?: LineEvent[];
}

type ValidGrade = "中1" | "中2" | "中3";
const VALID_GRADES: readonly ValidGrade[] = ["中1", "中2", "中3"] as const;

type ValidSubject = "history" | "english";
const VALID_SUBJECTS: readonly ValidSubject[] = ["history", "english"] as const;
const SUBJECT_LABELS: Record<ValidSubject, string> = {
  history: "歴史",
  english: "英語",
};
// 教科別のヘッダー背景色。将来 math/science/geography を追加する際は
// ValidSubject 型と SUBJECT_LABELS / SUBJECT_HEADER_COLORS を同時に更新する。
// 想定色: 英語=ピンク、歴史/地理=茶（社会系）、数学=青、理科=緑
const SUBJECT_HEADER_COLORS: Record<ValidSubject, string> = {
  history: "#A16207", // 社会系の茶色
  english: "#EC4899", // ピンク
  // math: "#3B82F6",     // 青
  // science: "#10B981",  // 緑
  // geography: "#A16207", // 茶色（歴史と同じ社会系）
};

type ValidHour = 6 | 7 | 17 | 19;
const VALID_HOURS: readonly ValidHour[] = [6, 7, 17, 19] as const;
const HOUR_LABELS: Record<ValidHour, string> = {
  6: "朝6時",
  7: "朝7時",
  17: "夕方5時",
  19: "夜7時",
};

interface Question {
  subject: ValidSubject;
  grade: ValidGrade;
  topic: string;
  text: string;
  choices: [string, string, string, string];
  correctChoiceId: 0 | 1 | 2 | 3;
  explanation: string;
}

const gradeSelectMessage = {
  type: "template" as const,
  altText: "学年を選んでください",
  template: {
    type: "buttons" as const,
    title: "学年選択",
    text: "あなたの学年を選んでください。",
    actions: [
      { type: "postback" as const, label: "中1", data: "type=select_grade&grade=中1", displayText: "中1" },
      { type: "postback" as const, label: "中2", data: "type=select_grade&grade=中2", displayText: "中2" },
      { type: "postback" as const, label: "中3", data: "type=select_grade&grade=中3", displayText: "中3" },
    ],
  },
};

const subjectSelectMessage = {
  type: "template" as const,
  altText: "教科を選んでください",
  template: {
    type: "buttons" as const,
    title: "教科選択",
    text: "勉強したい教科を選んでください。",
    actions: [
      { type: "postback" as const, label: "歴史", data: "type=select_subject&subject=history", displayText: "歴史" },
      { type: "postback" as const, label: "英語", data: "type=select_subject&subject=english", displayText: "英語" },
    ],
  },
};

const timeSelectMessage = {
  type: "template" as const,
  altText: "配信時間を選んでください",
  template: {
    type: "buttons" as const,
    title: "配信時間選択",
    text: "毎日問題を送る時間を選んでください。",
    actions: [
      { type: "postback" as const, label: "朝6時", data: "type=select_time&hour=6", displayText: "朝6時" },
      { type: "postback" as const, label: "朝7時", data: "type=select_time&hour=7", displayText: "朝7時" },
      { type: "postback" as const, label: "夕方5時", data: "type=select_time&hour=17", displayText: "夕方5時" },
      { type: "postback" as const, label: "夜7時", data: "type=select_time&hour=19", displayText: "夜7時" },
    ],
  },
};

let cachedClient: messagingApi.MessagingApiClient | null = null;
async function getLineClient(): Promise<messagingApi.MessagingApiClient> {
  if (cachedClient) return cachedClient;
  const channelAccessToken = process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN || "";
  if (!channelAccessToken) {
    throw new Error("LINE_MESSAGING_CHANNEL_ACCESS_TOKEN is not set");
  }
  const { messagingApi: api } = await import("@line/bot-sdk");
  cachedClient = new api.MessagingApiClient({ channelAccessToken });
  return cachedClient;
}

async function verifyLineSignature(
  bodyText: string,
  channelSecret: string,
  signature: string
): Promise<boolean> {
  const { validateSignature } = await import("@line/bot-sdk");
  return validateSignature(bodyText, channelSecret, signature);
}

async function getDb() {
  const { initializeApp, getApps } = await import("firebase-admin/app");
  const { getFirestore, FieldValue } = await import("firebase-admin/firestore");
  if (getApps().length === 0) {
    initializeApp();
  }
  return { db: getFirestore(), FieldValue };
}

function getJstDateString(date: Date | undefined): string | null {
  if (!date) return null;
  const formatter = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formatter.format(date).replace(/\//g, "-");
}

function isInitialSetupComplete(
  userData: Record<string, unknown> | undefined
): boolean {
  if (!userData) return false;
  const stored = userData.preferredHour;
  return typeof stored === "number" && VALID_HOURS.includes(stored as ValidHour);
}

type UserPlan = "free" | "premium";

function getUserPlan(userData: Record<string, unknown> | undefined): UserPlan {
  if (!userData) return "free";
  if (userData.plan !== "premium") return "free";
  const until = userData.premiumUntil as { toDate?: () => Date } | undefined | null;
  if (until && typeof until.toDate === "function") {
    if (until.toDate().getTime() < Date.now()) return "free"; // 期限切れ
  }
  return "premium";
}

const PREMIUM_LANDING_URL = "https://www.chatstudy.jp/premium";

export const lineWebhook = functions
  .region("asia-northeast1")
  .https.onRequest(async (req, res) => {
    if (req.method === "GET") {
      res.json({ message: "LINE webhook endpoint is working." });
      return;
    }

    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }

    const channelSecret = process.env.LINE_MESSAGING_CHANNEL_SECRET || "";
    if (!channelSecret) {
      console.error("[lineWebhook] LINE_MESSAGING_CHANNEL_SECRET is not set");
      res.status(500).json({ error: "Server misconfigured" });
      return;
    }

    const signature = req.get("x-line-signature");
    if (!signature) {
      console.warn("[lineWebhook] missing x-line-signature header");
      res.status(401).json({ error: "Missing signature" });
      return;
    }

    const rawBody = req.rawBody;
    if (!rawBody || rawBody.length === 0) {
      console.error("[lineWebhook] empty rawBody");
      res.status(400).json({ error: "Empty body" });
      return;
    }

    const bodyText = rawBody.toString("utf8");

    const signatureValid = await verifyLineSignature(bodyText, channelSecret, signature);
    if (!signatureValid) {
      console.warn("[lineWebhook] invalid signature");
      res.status(401).json({ error: "Invalid signature" });
      return;
    }

    let body: LineWebhookBody;
    try {
      body = JSON.parse(bodyText) as LineWebhookBody;
    } catch (error) {
      console.error("[lineWebhook] failed to parse body JSON:", error);
      res.status(400).json({ error: "Invalid JSON" });
      return;
    }

    const events = body.events ?? [];
    if (events.length === 0) {
      res.json({ ok: true });
      return;
    }

    await Promise.allSettled(events.map((event) => dispatchEvent(event)));
    res.json({ ok: true });
  });

async function dispatchEvent(event: LineEvent): Promise<void> {
  try {
    switch (event.type) {
      case "follow":
        await handleFollow(event);
        return;
      case "postback":
        await handlePostback(event);
        return;
      case "message":
        await handleMessage(event);
        return;
      default:
        console.warn("[lineWebhook] unhandled event type:", event.type);
        return;
    }
  } catch (error) {
    console.error(`[lineWebhook] dispatchEvent failed (type=${event.type}):`, error);
  }
}

async function handleMessage(event: LineEvent): Promise<void> {
  const messageType = event.message?.type;
  if (messageType !== "text") {
    console.warn("[lineWebhook] handleMessage: non-text message type:", messageType);
    return;
  }

  const text = event.message?.text?.trim() ?? "";
  const replyToken = event.replyToken;

  if (text === "設定変更" || text === "せってい変更") {
    await handleSettingsChange(event, replyToken);
    return;
  }

  console.warn("[lineWebhook] handleMessage: unhandled text:", text.slice(0, 30));
}

async function handleSettingsChange(
  event: LineEvent,
  replyToken: string | undefined
): Promise<void> {
  const uid = buildUid(event);
  if (!uid) return;
  if (!replyToken) return;

  const { db, FieldValue } = await getDb();

  // 1日1回制限チェック
  try {
    const userSnap = await db.doc(`users/${uid}`).get();
    const userData = userSnap.data();
    const stored = userData?.lastSettingsChangeAt;
    let lastChangeDate: Date | undefined;
    if (stored && typeof stored.toDate === "function") {
      lastChangeDate = stored.toDate();
    }
    const lastChangeJst = getJstDateString(lastChangeDate);
    const todayJst = getJstDateString(new Date());
    if (lastChangeJst !== null && lastChangeJst === todayJst) {
      console.warn("[lineWebhook] handleSettingsChange locked (already changed today):", uid);
      await replyText(
        replyToken,
        "設定変更は1日1回までです。明日もう一度お試しください。",
        "(settings change locked)"
      );
      return;
    }
  } catch (error) {
    console.error("[lineWebhook] handleSettingsChange user read failed:", error);
    // 読み込み失敗時は続行（保険）
  }

  try {
    await db.doc(`users/${uid}`).set(
      {
        preferredHour: FieldValue.delete(),
        lastSettingsChangeAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error("[lineWebhook] handleSettingsChange firestore update failed:", error);
  }

  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        { type: "text", text: "設定を変更します。学年を選んでください。" },
        gradeSelectMessage,
      ],
    });
  } catch (error) {
    console.error("[lineWebhook] handleSettingsChange reply failed:", error);
  }
}

function buildUid(event: LineEvent): string | null {
  const userId = event.source?.userId;
  if (!userId || event.source?.type !== "user") {
    console.warn("[lineWebhook] event.source is not a user:", event.source?.type);
    return null;
  }
  return `line:${userId}`;
}

async function handleFollow(event: LineEvent): Promise<void> {
  const uid = buildUid(event);
  if (!uid) return;
  const userId = event.source!.userId!;
  const replyToken = event.replyToken;

  try {
    const { db, FieldValue } = await getDb();
    await db.doc(`users/${uid}`).set(
      {
        provider: "line",
        lineUserId: userId,
        status: "active",
        source: "messaging-webhook",
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error("[lineWebhook] handleFollow firestore write failed:", error);
  }

  if (!replyToken) {
    console.warn("[lineWebhook] follow event without replyToken");
    return;
  }

  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [gradeSelectMessage],
    });
  } catch (error) {
    console.error("[lineWebhook] handleFollow reply failed:", error);
  }
}

async function handlePostback(event: LineEvent): Promise<void> {
  const uid = buildUid(event);
  if (!uid) return;
  const replyToken = event.replyToken;
  const data = event.postback?.data ?? "";

  const params = new URLSearchParams(data);
  const type = params.get("type");

  if (type === "select_grade") {
    await handleSelectGradePostback(uid, replyToken, params);
    return;
  }

  if (type === "select_subject") {
    await handleSelectSubjectPostback(uid, replyToken, params);
    return;
  }

  if (type === "select_time") {
    await handleSelectTimePostback(uid, replyToken, params);
    return;
  }

  if (type === "answer") {
    await handleAnswerPostback(uid, replyToken, params);
    return;
  }

  if (type === "extra_question") {
    await handleExtraQuestionPostback(uid, replyToken);
    return;
  }

  if (type === "weak_review") {
    await handleWeakReviewPostback(uid, replyToken);
    return;
  }

  if (type === "help") {
    await handleHelpPostback(replyToken);
    return;
  }

  if (type === "streak") {
    await handleStreakPostback(uid, replyToken);
    return;
  }

  if (type === "settings_menu") {
    await handleSettingsMenuPostback(replyToken);
    return;
  }

  if (type === "premium_info") {
    await handlePremiumInfoPostback(replyToken);
    return;
  }

  console.warn("[lineWebhook] unhandled postback type:", type);
}

async function handleHelpPostback(replyToken: string | undefined): Promise<void> {
  if (!replyToken) return;
  const helpMessage = buildHelpFlexMessage();
  try {
    const client = await getLineClient();
    await client.replyMessage({ replyToken, messages: [helpMessage] });
  } catch (error) {
    console.error("[lineWebhook] handleHelp reply failed:", error);
  }
}

async function handleStreakPostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  const { db } = await getDb();

  // 直近500件の回答履歴から streak を計算（typically 1問/日 ペースなので500件 ≒ 1.5年分）
  let answers: FirebaseFirestore.QueryDocumentSnapshot[] = [];
  try {
    const snap = await db
      .collection("answers")
      .where("uid", "==", uid)
      .orderBy("answeredAt", "desc")
      .limit(500)
      .get();
    answers = snap.docs;
  } catch (error) {
    console.error("[lineWebhook] handleStreak query failed:", error);
    await replyText(replyToken, "記録の取得に失敗しました。少し時間を置いて試してください。", "(streak query error)");
    return;
  }

  const stats = computeStreakStats(answers);
  const flex = buildStreakFlexMessage(stats);
  try {
    const client = await getLineClient();
    await client.replyMessage({ replyToken, messages: [flex] });
  } catch (error) {
    console.error("[lineWebhook] handleStreak reply failed:", error);
  }
}

async function handleSettingsMenuPostback(
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  const flex = buildSettingsMenuFlexMessage();
  try {
    const client = await getLineClient();
    await client.replyMessage({ replyToken, messages: [flex] });
  } catch (error) {
    console.error("[lineWebhook] handleSettingsMenu reply failed:", error);
  }
}

async function handlePremiumInfoPostback(
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;
  const flex = buildPremiumInfoFlexMessage();
  try {
    const client = await getLineClient();
    await client.replyMessage({ replyToken, messages: [flex] });
  } catch (error) {
    console.error("[lineWebhook] handlePremiumInfo reply failed:", error);
  }
}

interface StreakStats {
  streakDays: number;
  totalAnswered: number;
  totalCorrect: number;
  accuracyPercent: number;
  answeredToday: boolean;
}

function computeStreakStats(
  answers: FirebaseFirestore.QueryDocumentSnapshot[]
): StreakStats {
  const totalAnswered = answers.length;
  const totalCorrect = answers.filter((d) => d.get("isCorrect") === true).length;
  const accuracyPercent =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const answeredDates = new Set<string>();
  for (const doc of answers) {
    const ts = doc.get("answeredAt") as { toDate?: () => Date } | undefined;
    const date = ts && typeof ts.toDate === "function" ? ts.toDate() : undefined;
    const jst = getJstDateString(date);
    if (jst !== null) answeredDates.add(jst);
  }

  // 連続日数: 今日 or 昨日から遡って連続している日数を数える
  const todayJst = getJstDateString(new Date()) ?? "";
  const answeredToday = answeredDates.has(todayJst);
  let streakDays = 0;
  let cursor = answeredToday ? todayJst : shiftJstDate(todayJst, -1);
  while (cursor && answeredDates.has(cursor)) {
    streakDays += 1;
    cursor = shiftJstDate(cursor, -1);
  }

  return {
    streakDays,
    totalAnswered,
    totalCorrect,
    accuracyPercent,
    answeredToday,
  };
}

interface AnswerStreaks {
  /** 今回の回答を含めた最新からの連続正解数（正解時 >=1、不正解時 0） */
  correctStreak: number;
  /** 今日を含めた連続学習日数 */
  dayStreak: number;
  /** 今回の回答で連続日数が節目（3,7,14,30,100）に到達した瞬間か */
  isMilestoneDay: boolean;
}

/**
 * handleAnswer 用: 直近の answers 履歴と「今回の回答が正解か」から、
 * 連続正解数・連続日数・節目到達かをまとめて算出する。
 * 既存の computeStreakStats とロジックの一部が重なるが、
 * こちらは「今回の回答を加味した結果」を返す点が異なる。
 */
function computeAnswerStreaks(
  recentAnswers: FirebaseFirestore.QueryDocumentSnapshot[],
  currentIsCorrect: boolean
): AnswerStreaks {
  // 連続正解: 最新から isCorrect=true が続く件数
  let prevCorrectStreak = 0;
  for (const doc of recentAnswers) {
    if (doc.get("isCorrect") === true) prevCorrectStreak += 1;
    else break;
  }
  const correctStreak = currentIsCorrect ? prevCorrectStreak + 1 : 0;

  // 過去の回答日（JST）の集合
  const dateSet = new Set<string>();
  for (const doc of recentAnswers) {
    const ts = doc.get("answeredAt") as { toDate?: () => Date } | undefined;
    const date = ts && typeof ts.toDate === "function" ? ts.toDate() : undefined;
    const jst = getJstDateString(date);
    if (jst !== null) dateSet.add(jst);
  }

  const todayJst = getJstDateString(new Date()) ?? "";
  const todayAlreadyAnswered = dateSet.has(todayJst);
  // 今回の回答で today は必ずセットに含まれる
  if (todayJst) dateSet.add(todayJst);

  let dayStreak = 0;
  let cursor = todayJst;
  while (cursor && dateSet.has(cursor)) {
    dayStreak += 1;
    cursor = shiftJstDate(cursor, -1);
  }

  // 「今日その日に初めて」連続日数が節目に達したかどうか。
  // すでに今日回答済みだった場合は重ねて祝わない。
  const isMilestoneDay = !todayAlreadyAnswered && isDayStreakMilestone(dayStreak);

  return { correctStreak, dayStreak, isMilestoneDay };
}

/** JST 日付文字列同士の差分日数（to - from） */
function jstDayDiff(fromJst: string, toJst: string): number {
  const [fy, fm, fd] = fromJst.split("-").map(Number);
  const [ty, tm, td] = toJst.split("-").map(Number);
  if (!fy || !fm || !fd || !ty || !tm || !td) return 0;
  const fromUtc = Date.UTC(fy, fm - 1, fd);
  const toUtc = Date.UTC(ty, tm - 1, td);
  return Math.round((toUtc - fromUtc) / (24 * 60 * 60 * 1000));
}

/**
 * push 経路（dailyQuiz からの呼び出し）で「今日の1問」前置きを生成する。
 * 直近 answers から連続日数と最終回答日からの経過日数を計算し、
 * 状況に合うランダムなメッセージを返す。
 */
async function computeDailyIntro(
  uid: string,
  db: FirebaseFirestore.Firestore
): Promise<string> {
  let recentAnswers: FirebaseFirestore.QueryDocumentSnapshot[] = [];
  try {
    const snap = await db
      .collection("answers")
      .where("uid", "==", uid)
      .orderBy("answeredAt", "desc")
      .limit(15)
      .get();
    recentAnswers = snap.docs;
  } catch (error) {
    console.error("[lineWebhook] computeDailyIntro fetch failed:", error);
    return getDailyIntro({ daysSinceLastAnswer: null, dayStreak: 0 });
  }

  if (recentAnswers.length === 0) {
    return getDailyIntro({ daysSinceLastAnswer: null, dayStreak: 0 });
  }

  const latest = recentAnswers[0];
  const ts = latest.get("answeredAt") as { toDate?: () => Date } | undefined;
  const lastDate = ts && typeof ts.toDate === "function" ? ts.toDate() : undefined;
  const lastJst = getJstDateString(lastDate);
  const todayJst = getJstDateString(new Date());

  let daysSinceLastAnswer: number | null = null;
  if (lastJst && todayJst) {
    daysSinceLastAnswer = jstDayDiff(lastJst, todayJst);
  }

  const dateSet = new Set<string>();
  for (const doc of recentAnswers) {
    const docTs = doc.get("answeredAt") as { toDate?: () => Date } | undefined;
    const date = docTs && typeof docTs.toDate === "function" ? docTs.toDate() : undefined;
    const jst = getJstDateString(date);
    if (jst !== null) dateSet.add(jst);
  }

  // dayStreak: 今日 or 昨日から遡って連続している日数（answeredToday 不要）
  let dayStreak = 0;
  if (todayJst) {
    let cursor = dateSet.has(todayJst) ? todayJst : shiftJstDate(todayJst, -1);
    while (cursor && dateSet.has(cursor)) {
      dayStreak += 1;
      cursor = shiftJstDate(cursor, -1);
    }
  }

  return getDailyIntro({ daysSinceLastAnswer, dayStreak });
}

function shiftJstDate(jstDate: string, days: number): string {
  // jstDate は "YYYY-MM-DD" 形式。UTC として一度パースしてからオフセットすると DST 等の影響を受けない
  const [yStr, mStr, dStr] = jstDate.split("-");
  const y = Number(yStr);
  const m = Number(mStr);
  const d = Number(dStr);
  if (!y || !m || !d) return "";
  const utc = Date.UTC(y, m - 1, d);
  const shifted = new Date(utc + days * 24 * 60 * 60 * 1000);
  const yy = shifted.getUTCFullYear();
  const mm = String(shifted.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(shifted.getUTCDate()).padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}

function buildHelpFlexMessage() {
  return {
    type: "flex" as const,
    altText: "使い方ガイド",
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
            text: "📖 使い方ガイド",
            color: "#FFFFFF",
            weight: "bold" as const,
            size: "md" as const,
          },
        ],
      },
      body: {
        type: "box" as const,
        layout: "vertical" as const,
        spacing: "md" as const,
        paddingAll: "16px",
        contents: [
          {
            type: "text" as const,
            text: "毎日決まった時間に1問届きます。",
            wrap: true,
            size: "sm" as const,
            color: "#111827",
          },
          {
            type: "separator" as const,
            margin: "sm" as const,
          },
          {
            type: "box" as const,
            layout: "vertical" as const,
            spacing: "xs" as const,
            margin: "md" as const,
            contents: [
              { type: "text" as const, text: "⏰ 配信時間", weight: "bold" as const, size: "sm" as const, color: "#111827" },
              { type: "text" as const, text: "朝6時 / 朝7時 / 夕方5時 / 夜7時 から選べます。", wrap: true, size: "xs" as const, color: "#6B7280" },
            ],
          },
          {
            type: "box" as const,
            layout: "vertical" as const,
            spacing: "xs" as const,
            margin: "md" as const,
            contents: [
              { type: "text" as const, text: "🔁 設定を変えたい", weight: "bold" as const, size: "sm" as const, color: "#111827" },
              { type: "text" as const, text: "「設定変更」とトークに送ると、学年・教科・時間を選び直せます（1日1回まで）。", wrap: true, size: "xs" as const, color: "#6B7280" },
            ],
          },
          {
            type: "box" as const,
            layout: "vertical" as const,
            spacing: "xs" as const,
            margin: "md" as const,
            contents: [
              { type: "text" as const, text: "🚀 もっと解きたい", weight: "bold" as const, size: "sm" as const, color: "#111827" },
              { type: "text" as const, text: "プレミアムなら「追加で解く」「苦手を復習」「テスト範囲設定」が使えます。", wrap: true, size: "xs" as const, color: "#6B7280" },
            ],
          },
        ],
      },
      footer: {
        type: "box" as const,
        layout: "vertical" as const,
        paddingAll: "16px",
        contents: [
          {
            type: "button" as const,
            style: "primary" as const,
            color: "#F59E0B",
            height: "sm" as const,
            action: {
              type: "uri" as const,
              label: "サイトを開く",
              uri: "https://www.chatstudy.jp/",
            },
          },
        ],
      },
    },
  };
}

function buildStreakFlexMessage(stats: StreakStats) {
  const subText = stats.answeredToday
    ? "今日も継続中。"
    : stats.streakDays > 0
      ? "今日まだ解いていません。続けるなら『追加で解く』！"
      : "まずは今日の1問から始めよう。";

  return {
    type: "flex" as const,
    altText: `連続${stats.streakDays}日｜累計${stats.totalAnswered}問｜正答率${stats.accuracyPercent}%`,
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
            text: "🔥 連続記録",
            color: "#FFFFFF",
            weight: "bold" as const,
            size: "md" as const,
          },
        ],
      },
      body: {
        type: "box" as const,
        layout: "vertical" as const,
        paddingAll: "20px",
        spacing: "md" as const,
        contents: [
          {
            type: "box" as const,
            layout: "horizontal" as const,
            contents: [
              {
                type: "text" as const,
                text: `${stats.streakDays}`,
                weight: "bold" as const,
                size: "4xl" as const,
                color: "#F59E0B",
                flex: 0,
              },
              {
                type: "text" as const,
                text: "日連続",
                size: "md" as const,
                color: "#111827",
                gravity: "bottom" as const,
                margin: "md" as const,
              },
            ],
          },
          {
            type: "text" as const,
            text: subText,
            wrap: true,
            size: "sm" as const,
            color: "#6B7280",
          },
          {
            type: "separator" as const,
            margin: "md" as const,
          },
          {
            type: "box" as const,
            layout: "vertical" as const,
            spacing: "sm" as const,
            margin: "md" as const,
            contents: [
              {
                type: "box" as const,
                layout: "horizontal" as const,
                contents: [
                  { type: "text" as const, text: "累計問題数", size: "sm" as const, color: "#6B7280", flex: 0 },
                  { type: "text" as const, text: `${stats.totalAnswered} 問`, size: "sm" as const, color: "#111827", align: "end" as const, weight: "bold" as const },
                ],
              },
              {
                type: "box" as const,
                layout: "horizontal" as const,
                contents: [
                  { type: "text" as const, text: "正解数", size: "sm" as const, color: "#6B7280", flex: 0 },
                  { type: "text" as const, text: `${stats.totalCorrect} 問`, size: "sm" as const, color: "#111827", align: "end" as const, weight: "bold" as const },
                ],
              },
              {
                type: "box" as const,
                layout: "horizontal" as const,
                contents: [
                  { type: "text" as const, text: "正答率", size: "sm" as const, color: "#6B7280", flex: 0 },
                  { type: "text" as const, text: `${stats.accuracyPercent}%`, size: "sm" as const, color: "#111827", align: "end" as const, weight: "bold" as const },
                ],
              },
            ],
          },
        ],
      },
    },
  };
}

function buildSettingsMenuFlexMessage() {
  return {
    type: "flex" as const,
    altText: "設定・サポート",
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
            text: "⚙️ 設定・サポート",
            color: "#FFFFFF",
            weight: "bold" as const,
            size: "md" as const,
          },
        ],
      },
      body: {
        type: "box" as const,
        layout: "vertical" as const,
        paddingAll: "20px",
        spacing: "sm" as const,
        contents: [
          {
            type: "text" as const,
            text: "通知時間や学年を変えたいときは、トークに「設定変更」と送ってください（1日1回まで）。",
            wrap: true,
            size: "sm" as const,
            color: "#111827",
          },
          {
            type: "text" as const,
            text: "解約や問い合わせは下のボタンから。",
            wrap: true,
            size: "xs" as const,
            color: "#6B7280",
            margin: "sm" as const,
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
              type: "message" as const,
              label: "設定変更",
              text: "設定変更",
            },
          },
          {
            type: "button" as const,
            style: "secondary" as const,
            height: "sm" as const,
            action: {
              type: "uri" as const,
              label: "問い合わせ",
              uri: "https://www.chatstudy.jp/contact",
            },
          },
          {
            type: "button" as const,
            style: "secondary" as const,
            height: "sm" as const,
            action: {
              type: "uri" as const,
              label: "プレミアム解約案内",
              uri: "https://www.chatstudy.jp/premium",
            },
          },
        ],
      },
    },
  };
}

function buildPremiumInfoFlexMessage() {
  return {
    type: "flex" as const,
    altText: "プレミアムで学習を加速",
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
            text: "🚀 プレミアムで学習を加速",
            color: "#FFFFFF",
            weight: "bold" as const,
            size: "md" as const,
          },
        ],
      },
      body: {
        type: "box" as const,
        layout: "vertical" as const,
        paddingAll: "20px",
        spacing: "md" as const,
        contents: [
          {
            type: "text" as const,
            text: "毎日1問だけじゃ物足りない人へ。",
            wrap: true,
            size: "sm" as const,
            color: "#111827",
            weight: "bold" as const,
          },
          {
            type: "box" as const,
            layout: "vertical" as const,
            spacing: "xs" as const,
            margin: "md" as const,
            contents: [
              { type: "text" as const, text: "🔁 追加で解く", weight: "bold" as const, size: "sm" as const, color: "#111827" },
              { type: "text" as const, text: "今すぐもう1問。1日の上限なしで挑戦できる。", wrap: true, size: "xs" as const, color: "#6B7280" },
            ],
          },
          {
            type: "box" as const,
            layout: "vertical" as const,
            spacing: "xs" as const,
            margin: "md" as const,
            contents: [
              { type: "text" as const, text: "🎯 苦手を復習", weight: "bold" as const, size: "sm" as const, color: "#111827" },
              { type: "text" as const, text: "間違えた問題から自動出題。弱点を集中的につぶす。", wrap: true, size: "xs" as const, color: "#6B7280" },
            ],
          },
          {
            type: "box" as const,
            layout: "vertical" as const,
            spacing: "xs" as const,
            margin: "md" as const,
            contents: [
              { type: "text" as const, text: "📝 テスト範囲設定", weight: "bold" as const, size: "sm" as const, color: "#111827" },
              { type: "text" as const, text: "教科書名と範囲を入れるだけで、それに合わせた問題が届く。", wrap: true, size: "xs" as const, color: "#6B7280" },
            ],
          },
        ],
      },
      footer: {
        type: "box" as const,
        layout: "vertical" as const,
        paddingAll: "16px",
        contents: [
          {
            type: "button" as const,
            style: "primary" as const,
            color: "#F59E0B",
            height: "sm" as const,
            action: {
              type: "uri" as const,
              label: "詳細を見る",
              uri: "https://www.chatstudy.jp/premium",
            },
          },
        ],
      },
    },
  };
}

async function handleExtraQuestionPostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;

  const { db } = await getDb();
  const userSnap = await db.doc(`users/${uid}`).get();
  const userData = userSnap.data();
  const plan = getUserPlan(userData);

  if (plan !== "premium") {
    await replyText(
      replyToken,
      `追加で問題を解くにはプレミアムが必要です。\n詳細はこちら: ${PREMIUM_LANDING_URL}`,
      "(extra_question free guard)"
    );
    return;
  }

  await selectAndSendQuestion(uid, {
    replyToken,
    introText: getExtraQuestionIntro(),
    bypassDailyLimit: true,
  });
}

async function handleWeakReviewPostback(
  uid: string,
  replyToken: string | undefined
): Promise<void> {
  if (!replyToken) return;

  const { db, FieldValue } = await getDb();
  const userSnap = await db.doc(`users/${uid}`).get();
  const userData = userSnap.data();
  const plan = getUserPlan(userData);

  if (plan !== "premium") {
    await replyText(
      replyToken,
      `苦手復習はプレミアムの機能です。\n詳細はこちら: ${PREMIUM_LANDING_URL}`,
      "(weak_review free guard)"
    );
    return;
  }

  let wrongAnswers: FirebaseFirestore.QueryDocumentSnapshot[] = [];
  try {
    const snap = await db
      .collection("answers")
      .where("uid", "==", uid)
      .where("isCorrect", "==", false)
      .orderBy("answeredAt", "desc")
      .limit(50)
      .get();
    wrongAnswers = snap.docs;
  } catch (error) {
    console.error("[lineWebhook] handleWeakReview answers query failed:", error);
    await replyText(
      replyToken,
      "苦手の取得に失敗しました。少し時間を置いて試してください。",
      "(weak_review query error)"
    );
    return;
  }

  const questionIds = Array.from(
    new Set(
      wrongAnswers
        .map((doc) => doc.get("questionId"))
        .filter((id): id is string => typeof id === "string" && id.length > 0)
    )
  );
  if (questionIds.length === 0) {
    await replyText(
      replyToken,
      getWeakReviewIntro({ empty: true }),
      "(weak_review empty)"
    );
    return;
  }

  const pickedId = questionIds[Math.floor(Math.random() * questionIds.length)];
  const questionSnap = await db.doc(`questions/${pickedId}`).get();
  if (!questionSnap.exists) {
    console.warn("[lineWebhook] handleWeakReview question gone:", pickedId);
    await replyText(
      replyToken,
      "苦手の出題対象が見つかりませんでした。もう一度押してみてください。",
      "(weak_review question gone)"
    );
    return;
  }

  const question = questionSnap.data() as Question;
  const questionMessage = buildQuestionMessage(pickedId, question);

  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [{ type: "text", text: getWeakReviewIntro() }, questionMessage],
    });
  } catch (error) {
    console.error("[lineWebhook] handleWeakReview reply failed:", error);
    return;
  }

  // dailyQuiz とのバッティング回避のため、直近送信時刻を更新する。
  // 加えて「同じ問題の再出題でも回答できる」よう、回答済みフラグもクリアする。
  try {
    await db.doc(`users/${uid}`).set(
      {
        lastQuestionDeliveredAt: FieldValue.serverTimestamp(),
        lastAnsweredQuestionId: FieldValue.delete(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error("[lineWebhook] handleWeakReview lastDelivered update failed:", error);
  }
}

async function handleSelectGradePostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const { db, FieldValue } = await getDb();

  const userSnap = await db.doc(`users/${uid}`).get();
  const userData = userSnap.data();
  if (isInitialSetupComplete(userData)) {
    console.warn("[lineWebhook] handleSelectGrade locked (already set):", uid);
    if (replyToken) {
      const storedGrade = typeof userData?.grade === "string" ? userData.grade : "登録済みの学年";
      await replyText(
        replyToken,
        `すでに${storedGrade}で登録済みです。変更したい場合は『設定変更』と送ってください。`,
        "(grade locked)"
      );
    }
    return;
  }

  const grade = params.get("grade");
  if (!grade || !VALID_GRADES.includes(grade as ValidGrade)) {
    console.warn("[lineWebhook] invalid grade in postback:", grade);
    if (replyToken) {
      try {
        const client = await getLineClient();
        await client.replyMessage({
          replyToken,
          messages: [{ type: "text", text: "もう一度学年を選んでください。" }],
        });
      } catch (error) {
        console.error("[lineWebhook] handlePostback reply (invalid grade) failed:", error);
      }
    }
    return;
  }

  try {
    await db.doc(`users/${uid}`).set(
      {
        grade,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error("[lineWebhook] handlePostback firestore write failed:", error);
  }

  if (!replyToken) {
    console.warn("[lineWebhook] postback event without replyToken");
    return;
  }

  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        { type: "text", text: `${grade}ですね！次に教科を選んでください。` },
        subjectSelectMessage,
      ],
    });
  } catch (error) {
    console.error("[lineWebhook] handlePostback reply failed:", error);
  }
}

async function handleSelectSubjectPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const { db, FieldValue } = await getDb();

  const userSnap = await db.doc(`users/${uid}`).get();
  const userData = userSnap.data();
  if (isInitialSetupComplete(userData)) {
    console.warn("[lineWebhook] handleSelectSubject locked (already set):", uid);
    if (replyToken) {
      const storedSubject = userData?.subject;
      const label =
        typeof storedSubject === "string" && VALID_SUBJECTS.includes(storedSubject as ValidSubject)
          ? SUBJECT_LABELS[storedSubject as ValidSubject]
          : "登録済みの教科";
      await replyText(
        replyToken,
        `すでに${label}で登録済みです。変更したい場合は『設定変更』と送ってください。`,
        "(subject locked)"
      );
    }
    return;
  }

  const subject = params.get("subject");
  if (!subject || !VALID_SUBJECTS.includes(subject as ValidSubject)) {
    console.warn("[lineWebhook] invalid subject in postback:", subject);
    if (replyToken) {
      try {
        const client = await getLineClient();
        await client.replyMessage({
          replyToken,
          messages: [{ type: "text", text: "もう一度教科を選んでください。" }],
        });
      } catch (error) {
        console.error("[lineWebhook] handlePostback reply (invalid subject) failed:", error);
      }
    }
    return;
  }

  try {
    await db.doc(`users/${uid}`).set(
      {
        subject,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error("[lineWebhook] handlePostback (subject) firestore write failed:", error);
  }

  if (!replyToken) {
    console.warn("[lineWebhook] postback event without replyToken");
    return;
  }

  try {
    const subjectLabel = SUBJECT_LABELS[subject as ValidSubject];
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        { type: "text", text: `${subjectLabel}ですね！毎日問題を送る時間を選んでください。` },
        timeSelectMessage,
      ],
    });
  } catch (error) {
    console.error("[lineWebhook] handlePostback (subject) reply failed:", error);
  }
}

async function handleSelectTimePostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const { db, FieldValue } = await getDb();

  const userSnap = await db.doc(`users/${uid}`).get();
  const userData = userSnap.data();
  if (isInitialSetupComplete(userData)) {
    console.warn("[lineWebhook] handleSelectTime locked (already set):", uid);
    if (replyToken) {
      const storedHour = userData?.preferredHour;
      const label =
        typeof storedHour === "number" && VALID_HOURS.includes(storedHour as ValidHour)
          ? HOUR_LABELS[storedHour as ValidHour]
          : "登録済みの時間";
      await replyText(
        replyToken,
        `すでに${label}で登録済みです。変更したい場合は『設定変更』と送ってください。`,
        "(time locked)"
      );
    }
    return;
  }

  const hourRaw = params.get("hour");
  const hour = hourRaw ? Number(hourRaw) : NaN;
  if (!VALID_HOURS.includes(hour as ValidHour)) {
    console.warn("[lineWebhook] invalid hour in postback:", hourRaw);
    if (replyToken) {
      try {
        const client = await getLineClient();
        await client.replyMessage({
          replyToken,
          messages: [{ type: "text", text: "もう一度時間を選んでください。" }],
        });
      } catch (error) {
        console.error("[lineWebhook] handlePostback reply (invalid hour) failed:", error);
      }
    }
    return;
  }

  const validHour = hour as ValidHour;
  try {
    await db.doc(`users/${uid}`).set(
      {
        preferredHour: validHour,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error("[lineWebhook] handlePostback (time) firestore write failed:", error);
  }

  if (!replyToken) {
    console.warn("[lineWebhook] postback event without replyToken");
    return;
  }

  const hourLabel = HOUR_LABELS[validHour];
  await selectAndSendQuestion(uid, {
    replyToken,
    introText: getInitialFirstQuestionIntro(hourLabel),
    trailingText: getInitialFirstQuestionTrailing(hourLabel),
    isInitialSetup: true,
  });
}

async function handleAnswerPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  const questionId = params.get("questionId");
  const choiceRaw = params.get("choice");
  const choice = choiceRaw !== null ? Number(choiceRaw) : NaN;

  if (!questionId || !Number.isInteger(choice) || choice < 0 || choice > 3) {
    console.warn("[lineWebhook] handleAnswer invalid params:", params.toString());
    if (replyToken) {
      await replyText(replyToken, "もう一度選択肢を選んでください。", "(invalid params)");
    }
    return;
  }

  if (!replyToken) {
    return;
  }

  const { db, FieldValue } = await getDb();

  // 重複回答チェック
  try {
    const userSnap = await db.doc(`users/${uid}`).get();
    const userData = userSnap.data();
    if (userData?.lastAnsweredQuestionId === questionId) {
      console.warn("[lineWebhook] handleAnswer duplicate:", uid, questionId);
      await replyText(replyToken, "すでに回答済みです。", "(duplicate answer)");
      return;
    }
  } catch (error) {
    console.error("[lineWebhook] handleAnswer user read failed:", error);
    // 読み込み失敗時は続行（保険）
  }

  let questionSnap;
  try {
    questionSnap = await db.doc(`questions/${questionId}`).get();
  } catch (error) {
    console.error("[lineWebhook] handleAnswer firestore read failed:", error);
    await replyText(replyToken, "エラーが発生しました。", "(read error)");
    return;
  }

  if (!questionSnap.exists) {
    console.warn("[lineWebhook] handleAnswer question not found:", questionId);
    await replyText(replyToken, "問題が見つかりませんでした。", "(not found)");
    return;
  }

  const question = questionSnap.data() as Question;
  const isCorrect = choice === question.correctChoiceId;
  const correctLabel = question.choices[question.correctChoiceId];

  // 連続正解・連続日数を計算するため、書き込み前に直近 answers を取得する。
  // ここで取った docs は今回の回答を含まないので、`computeAnswerStreaks` の中で
  // 「今回の正誤」と合わせて最終的な連続数を出す。
  let recentAnswers: FirebaseFirestore.QueryDocumentSnapshot[] = [];
  try {
    const snap = await db
      .collection("answers")
      .where("uid", "==", uid)
      .orderBy("answeredAt", "desc")
      .limit(15)
      .get();
    recentAnswers = snap.docs;
  } catch (error) {
    console.error("[lineWebhook] handleAnswer recent answers fetch failed:", error);
    // 取得失敗時は連続0として扱い、デフォルト文言で返す
  }

  const { correctStreak, dayStreak, isMilestoneDay } = computeAnswerStreaks(
    recentAnswers,
    isCorrect
  );

  const headText = isCorrect
    ? getCorrectFeedback({ correctStreak, dayStreak, isMilestoneDay })
    : getIncorrectFeedback({ correctLabel });

  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [
        { type: "text", text: headText },
        { type: "text", text: `📖 解説\n${question.explanation}` },
      ],
    });
  } catch (error) {
    console.error("[lineWebhook] handleAnswer reply failed:", error);
  }

  try {
    await db.collection("answers").add({
      uid,
      questionId,
      choice,
      isCorrect,
      subject: question.subject,
      grade: question.grade,
      answeredAt: FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error("[lineWebhook] handleAnswer answers write failed:", error);
  }

  try {
    await db.doc(`users/${uid}`).set(
      {
        lastAnsweredQuestionId: questionId,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error("[lineWebhook] handleAnswer lastAnsweredQuestionId update failed:", error);
  }
}

async function replyText(
  replyToken: string,
  text: string,
  context: string
): Promise<void> {
  try {
    const client = await getLineClient();
    await client.replyMessage({
      replyToken,
      messages: [{ type: "text", text }],
    });
  } catch (error) {
    console.error(`[lineWebhook] replyText failed ${context}:`, error);
  }
}

interface SendOptions {
  replyToken?: string;
  introText?: string;
  trailingText?: string;
  isInitialSetup?: boolean;
  /** true のとき「当日送信済みなら早期 return」を行わず、強制的に1問送る。プレミアムの『追加で解く』向け */
  bypassDailyLimit?: boolean;
}

const RECENT_QUESTION_LIMIT = 10;

export async function selectAndSendQuestion(
  uid: string,
  options: SendOptions = {}
): Promise<void> {
  const { replyToken, introText, trailingText, isInitialSetup, bypassDailyLimit } = options;
  const { db, FieldValue } = await getDb();

  const userSnap = await db.doc(`users/${uid}`).get();
  const userData = userSnap.data();
  if (!userData) {
    console.warn("[lineWebhook] selectAndSendQuestion: user not found", uid);
    return;
  }

  const grade = userData.grade as ValidGrade | undefined;
  const subject = userData.subject as ValidSubject | undefined;
  if (!grade || !subject) {
    console.warn(
      "[lineWebhook] selectAndSendQuestion: missing grade/subject",
      uid,
      grade,
      subject
    );
    return;
  }

  // 当日送信済みチェック（JST 暦日）
  let lastDeliveredDate: Date | undefined;
  try {
    const stored = userData.lastQuestionDeliveredAt;
    if (stored && typeof stored.toDate === "function") {
      lastDeliveredDate = stored.toDate();
    }
  } catch (error) {
    console.warn("[lineWebhook] selectAndSendQuestion: lastQuestionDeliveredAt parse failed:", error);
  }
  const lastDeliveredJst = getJstDateString(lastDeliveredDate);
  const todayJst = getJstDateString(new Date());
  const alreadyDeliveredToday = lastDeliveredJst !== null && lastDeliveredJst === todayJst;

  if (alreadyDeliveredToday && !bypassDailyLimit) {
    const storedHour = userData.preferredHour;
    const hourLabel =
      typeof storedHour === "number" && VALID_HOURS.includes(storedHour as ValidHour)
        ? HOUR_LABELS[storedHour as ValidHour]
        : "次回";
    if (replyToken) {
      const text = isInitialSetup
        ? `設定を更新したよ。次の問題は明日の${hourLabel}にお届けするね`
        : getAlreadyDeliveredText(hourLabel);
      await replyText(replyToken, text, "(already delivered today)");
    } else {
      console.log(
        `[lineWebhook] selectAndSendQuestion skipped (already delivered today): ${uid}`
      );
    }
    return;
  }

  const recentIds: string[] = Array.isArray(userData.recentQuestionIds)
    ? userData.recentQuestionIds
    : [];

  const snap = await db
    .collection("questions")
    .where("subject", "==", subject)
    .where("grade", "==", grade)
    .get();

  if (snap.empty) {
    console.warn(
      "[lineWebhook] selectAndSendQuestion: no questions",
      subject,
      grade
    );
    if (replyToken) {
      try {
        const client = await getLineClient();
        await client.replyMessage({
          replyToken,
          messages: [{ type: "text", text: "準備中です。少し待ってください。" }],
        });
      } catch (error) {
        console.error("[lineWebhook] selectAndSendQuestion empty reply failed:", error);
      }
    }
    return;
  }

  const candidates = snap.docs.filter((d) => !recentIds.includes(d.id));
  const pool = candidates.length > 0 ? candidates : snap.docs;
  const picked = pool[Math.floor(Math.random() * pool.length)];
  const question = picked.data() as Question;

  const updatedRecent = [...recentIds.filter((id) => id !== picked.id), picked.id].slice(
    -RECENT_QUESTION_LIMIT
  );
  try {
    await db.doc(`users/${uid}`).set(
      {
        recentQuestionIds: updatedRecent,
        lastQuestionDeliveredAt: FieldValue.serverTimestamp(),
        // 同じ問題が再出題された場合に「すでに回答済み」ブロックが発生しないよう、
        // 新しい問題を送るタイミングで前回の回答済みフラグを必ずクリアする。
        lastAnsweredQuestionId: FieldValue.delete(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error("[lineWebhook] selectAndSendQuestion recent update failed:", error);
  }

  const questionMessage = buildQuestionMessage(picked.id, question);
  const messages: Array<{ type: "text"; text: string } | ReturnType<typeof buildQuestionMessage>> = [];

  // 呼び出し元が introText を渡していなければ、push 経路（毎日配信）と判断して
  // ユーザー状態に合うランダムな intro を生成する。reply 経路（追加で解く・苦手復習・
  // 初期設定）は呼び出し元が introText を必ず渡すため、ここでは上書きしない。
  let resolvedIntroText = introText;
  if (!resolvedIntroText && !replyToken) {
    try {
      resolvedIntroText = await computeDailyIntro(uid, db);
    } catch (error) {
      console.error("[lineWebhook] selectAndSendQuestion intro compute failed:", error);
    }
  }

  if (resolvedIntroText) {
    messages.push({ type: "text" as const, text: resolvedIntroText });
  }
  messages.push(questionMessage);
  if (trailingText) {
    messages.push({ type: "text" as const, text: trailingText });
  }

  try {
    const client = await getLineClient();
    if (replyToken) {
      await client.replyMessage({ replyToken, messages });
    } else {
      const lineUserId = typeof userData.lineUserId === "string" ? userData.lineUserId : "";
      if (!lineUserId) {
        console.error("[lineWebhook] selectAndSendQuestion: missing lineUserId for push", uid);
        return;
      }
      await client.pushMessage({ to: lineUserId, messages });
    }
  } catch (error) {
    console.error("[lineWebhook] selectAndSendQuestion send failed:", error);
  }
}

function buildQuestionMessage(questionId: string, q: Question) {
  const subjectLabel = SUBJECT_LABELS[q.subject];
  const headerColor = SUBJECT_HEADER_COLORS[q.subject];
  return {
    type: "flex" as const,
    altText: `${subjectLabel}｜${q.grade}: ${q.text.slice(0, 40)}`,
    contents: {
      type: "bubble" as const,
      size: "kilo" as const,
      header: {
        type: "box" as const,
        layout: "vertical" as const,
        backgroundColor: headerColor,
        paddingAll: "14px",
        contents: [
          {
            type: "text" as const,
            text: `${subjectLabel}｜${q.grade}`,
            color: "#FFFFFF",
            weight: "bold" as const,
            size: "md" as const,
            align: "start" as const,
          },
        ],
      },
      body: {
        type: "box" as const,
        layout: "vertical" as const,
        paddingAll: "20px",
        contents: [
          {
            type: "text" as const,
            text: q.text,
            wrap: true,
            weight: "bold" as const,
            size: "lg" as const,
            color: "#111827",
            align: "start" as const,
          },
        ],
      },
      footer: {
        type: "box" as const,
        layout: "vertical" as const,
        spacing: "sm" as const,
        paddingAll: "16px",
        contents: q.choices.map((choice, i) => ({
          type: "button" as const,
          style: "secondary" as const,
          height: "sm" as const,
          action: {
            type: "postback" as const,
            label: choice.slice(0, 40),
            data: `type=answer&questionId=${questionId}&choice=${i}`,
            displayText: choice,
          },
        })),
      },
      styles: {
        header: { separator: false },
        body: { separator: true, separatorColor: "#E5E7EB" },
        footer: { separator: true, separatorColor: "#E5E7EB" },
      },
    },
  };
}
