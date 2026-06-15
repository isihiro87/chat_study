/**
 * 公式LINE フォールバック AI チャットボット（Gemini）。
 *
 * `lineWebhook.ts` の `handleMessage` で、既存コマンド（設定変更 / ニックネーム
 * 入力 / 復帰キーワード）のいずれにもマッチしなかった自由文に対して呼び出される。
 * 本サービスの仕様を内蔵したシステムプロンプト＋直近の会話履歴＋ユーザーの質問を
 * Gemini に送り、応答を LINE reply で返す。
 *
 * コスト管理（多層）:
 *   1. 1 日利用上限（プラン統合により全ユーザー共通 20 回）。
 *      超過時は API を呼ばず固定文で断る（課金ゼロ）。
 *   2. 出力トークン上限・入力履歴ターン制限でトークンを抑制。
 *   3. Gemini 呼び出し成功時のみ count を消費（エラーで上限を無駄にしない）。
 *
 * 失敗時はフォールバック文を返し、webhook 全体（200 応答）を壊さない。
 */

import type { UserDoc, AiChatTurn } from "./userDocTypes";
import { getUserPlan, getLineClient } from "./lineWebhook";
import { buildSystemPrompt } from "./aiChatPrompt";
import {
  getDailyLimit,
  getHistoryTurns,
  getJstDate,
  trimHistory,
  evaluateRateLimit,
} from "./aiChatCore";

/** Gemini の出力トークン上限。LINE で読める長さに抑える。 */
const MAX_OUTPUT_TOKENS = 500;
/** Gemini 呼び出しのタイムアウト（ms）。LINE replyToken の有効期間内に返す。 */
const GEMINI_TIMEOUT_MS = 12_000;

/** 上限超過時の固定文。webhook 側のメディア早期ガードでも再利用する。 */
export const LIMIT_REACHED_TEXT =
  "ごめんね、1日にやり取りできる回数に達しちゃったみたい💦 また明日、続きを質問してね😊";
/** Gemini エラー時のフォールバック文。 */
const FALLBACK_ERROR_TEXT =
  "ごめんね、いまうまく答えられなかったみたい💦 もう一度送ってみてくれる？";
/**
 * AI 応答の注意書き。初回利用時と毎月最初のやり取り時に、AI 回答の前に1通添える。
 */
const AI_DISCLAIMER_TEXT =
  "💡 ここからは AI が自動で返信するよ。べんりだけど、ときどき間違えることもあるんだ。大事なことは教科書や先生にも確認してね😊";

interface GeminiResult {
  text: string;
}

/**
 * マルチモーダル入力（画像・音声）の 1 パート。base64 データと MIME タイプを持つ。
 * webhook 側が LINE のコンテンツ API から取得してこの形に詰めて渡す。
 */
export interface AiChatMediaPart {
  /** Gemini に渡す MIME タイプ（例: "image/jpeg" / "audio/mp4"）。 */
  mimeType: string;
  /** base64 エンコード済みのバイナリ。 */
  data: string;
}

/** メディア種別を MIME から判定（プロンプト・履歴マーカーの出し分け用）。 */
function mediaKind(media: AiChatMediaPart[]): "image" | "audio" | "mixed" {
  const kinds = new Set(
    media.map((m) => (m.mimeType.startsWith("audio/") ? "audio" : "image"))
  );
  if (kinds.size > 1) return "mixed";
  return kinds.has("audio") ? "audio" : "image";
}

/** テキスト無しでメディアだけ送られたときに Gemini へ与える既定の指示文。 */
function defaultMediaPrompt(media: AiChatMediaPart[]): string {
  switch (mediaKind(media)) {
    case "audio":
      return "送られてきた音声を聞き取って、その内容にわかりやすく答えてあげてね。質問が含まれていれば中学生にもわかるように解説して。";
    case "image":
      return "送られてきた画像の内容を読み取って、わかりやすく説明したり質問に答えてあげてね。問題の写真なら解き方も教えてあげて。";
    default:
      return "送られてきたファイルの内容を読み取って、わかりやすく答えてあげてね。";
  }
}

/** 履歴に残す user 側マーカー（base64 は保存せず、何を送ったかだけ残す）。 */
function mediaHistoryMarker(media: AiChatMediaPart[], caption: string): string {
  const tag =
    mediaKind(media) === "audio"
      ? "[音声を送信]"
      : mediaKind(media) === "image"
        ? "[画像を送信]"
        : "[ファイルを送信]";
  return caption ? `${tag} ${caption}` : tag;
}

/**
 * Gemini REST API（generativelanguage）を fetch で呼び出す。
 * 成功時は応答テキストを返す。失敗・空応答時は throw する。
 * media が渡された場合は最後の user ターンに inlineData として添付する。
 */
async function callGemini(
  systemPrompt: string,
  history: AiChatTurn[],
  userText: string,
  media?: AiChatMediaPart[]
): Promise<GeminiResult> {
  const apiKey = process.env.GEMINI_API_KEY || "";
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set");
  }
  const model = process.env.GEMINI_MODEL || "gemini-3.1-flash-lite";

  // 最後の user ターン: メディア（あれば）→ テキストの順に parts を並べる。
  const userParts: Array<Record<string, unknown>> = [];
  if (media) {
    for (const m of media) {
      userParts.push({
        inlineData: { mimeType: m.mimeType, data: m.data },
      });
    }
  }
  userParts.push({ text: userText });

  const contents = [
    ...history.map((turn) => ({
      role: turn.role,
      parts: [{ text: turn.text }],
    })),
    { role: "user", parts: userParts },
  ];

  const body = {
    system_instruction: { parts: [{ text: systemPrompt }] },
    contents,
    generationConfig: {
      maxOutputTokens: MAX_OUTPUT_TOKENS,
      temperature: 0.7,
    },
  };

  const url =
    `https://generativelanguage.googleapis.com/v1beta/models/` +
    `${encodeURIComponent(model)}:generateContent?key=${apiKey}`;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), GEMINI_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      throw new Error(`Gemini HTTP ${res.status}: ${errText.slice(0, 300)}`);
    }
    const data = (await res.json()) as {
      candidates?: Array<{
        content?: { parts?: Array<{ text?: string }> };
      }>;
    };
    const text = data.candidates?.[0]?.content?.parts
      ?.map((p) => p.text ?? "")
      .join("")
      .trim();
    if (!text) {
      throw new Error("Gemini returned empty text");
    }
    return { text };
  } finally {
    clearTimeout(timer);
  }
}

/** LINE に reply を送る（薄いラッパ）。 */
async function reply(replyToken: string, text: string): Promise<void> {
  const client = await getLineClient();
  await client.replyMessage({
    replyToken,
    messages: [{ type: "text", text }],
  });
}

/**
 * フォールバック AI 応答のメインハンドラ。
 *
 * @param uid        users/{uid} の ID
 * @param replyToken LINE の replyToken
 * @param userText   ユーザーが送ってきた自由文
 * @param userData   handleMessage で取得済みの users/{uid} データ（追加 read 回避）
 */
export async function handleAiChat(
  uid: string,
  replyToken: string,
  userText: string,
  userData: UserDoc | undefined,
  media?: AiChatMediaPart[]
): Promise<void> {
  const trimmed = userText.trim();
  const hasMedia = !!media && media.length > 0;
  // テキストも添付も無ければ何もしない（メディアだけ・テキストだけは続行）。
  if (!trimmed && !hasMedia) return;

  // Gemini に渡す指示文と、履歴に残す user 側テキスト。
  // メディアのみ（キャプション無し）のときは既定の指示文を補う。
  const promptText = hasMedia ? trimmed || defaultMediaPrompt(media!) : trimmed;
  const historyUserText = hasMedia
    ? mediaHistoryMarker(media!, trimmed)
    : trimmed;

  const plan = getUserPlan(userData as Record<string, unknown> | undefined);
  const limit = getDailyLimit(plan);
  const maxTurns = getHistoryTurns(plan);
  const todayJst = getJstDate(new Date());

  const aiChat = userData?.aiChat;
  const { currentCount, limited } = evaluateRateLimit(aiChat, todayJst, limit);

  // AI 注意書きを出すか: 初回利用 or 当月まだ出していない（毎月最初のやり取り）。
  // todayJst は "YYYY-MM-DD" なので先頭7文字が "YYYY-MM"（JST 基準の当月）。
  const currentMonth = todayJst.slice(0, 7);
  const needsDisclaimer = aiChat?.lastDisclaimerMonth !== currentMonth;

  // 1. レート制限。超過時は API を呼ばず固定文で断る（課金ゼロ）。
  if (limited) {
    try {
      await reply(replyToken, LIMIT_REACHED_TEXT);
    } catch (error) {
      console.error("[aiChat] limit reply failed:", error);
    }
    return;
  }

  // 2. 履歴（プラン downgrade に備え送信側でもトリミング）。
  const priorHistory = trimHistory(aiChat?.history ?? [], maxTurns);

  // 3. Gemini 呼び出し。
  let answer: string;
  try {
    const systemPrompt = buildSystemPrompt(userData);
    const result = await callGemini(systemPrompt, priorHistory, promptText, media);
    answer = result.text;
  } catch (error) {
    console.error("[aiChat] Gemini call failed:", error);
    try {
      await reply(replyToken, FALLBACK_ERROR_TEXT);
    } catch (replyError) {
      console.error("[aiChat] fallback reply failed:", replyError);
    }
    return; // count は消費しない
  }

  // 4. 返信。初回・毎月最初のやり取りでは AI 注意書きを先頭に添えて送る。
  try {
    const client = await getLineClient();
    const messages = needsDisclaimer
      ? [
          { type: "text" as const, text: AI_DISCLAIMER_TEXT },
          { type: "text" as const, text: answer },
        ]
      : [{ type: "text" as const, text: answer }];
    await client.replyMessage({ replyToken, messages });
  } catch (error) {
    console.error("[aiChat] reply failed:", error);
    return; // 返信できなければ count も履歴も更新しない
  }

  // 5. count++ ＋ 履歴追記 ＋ 当月の注意書き表示済みを書き戻し（成功時のみ）。
  try {
    const { db, FieldValue } = await getDb();
    const newHistory = trimHistory(
      [
        ...priorHistory,
        { role: "user" as const, text: historyUserText },
        { role: "model" as const, text: answer },
      ],
      maxTurns
    );
    await db.doc(`users/${uid}`).set(
      {
        aiChat: {
          dateJST: todayJst,
          count: currentCount + 1,
          history: newHistory,
          lastChatAt: FieldValue.serverTimestamp(),
          // 当月分の注意書きは表示済みにする（needsDisclaimer に関わらず冪等）。
          lastDisclaimerMonth: currentMonth,
        },
      },
      { merge: true }
    );
  } catch (error) {
    // 返信は済んでいるのでログのみ。
    console.error("[aiChat] state write failed:", error);
  }

  // 注: AI 応答は replyMessage（リプライ）で送るため LINE の月間配信枠を
  // 消費しない。deliveryStats（push 配信枠モニター）には記録しない。
  // 利用量・コストは Gemini 側（Google AI Studio / GCP 課金）と
  // users/{uid}.aiChat.count で把握する。
}

/** firebase-admin の Firestore を遅延初期化して返す（lineWebhook と同パターン）。 */
async function getDb() {
  const { initializeApp, getApps } = await import("firebase-admin/app");
  const { getFirestore, FieldValue } = await import(
    "firebase-admin/firestore"
  );
  if (getApps().length === 0) {
    initializeApp();
  }
  return { db: getFirestore(), FieldValue };
}
