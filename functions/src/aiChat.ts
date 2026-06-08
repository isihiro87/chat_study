/**
 * 公式LINE フォールバック AI チャットボット（Gemini）。
 *
 * `lineWebhook.ts` の `handleMessage` で、既存コマンド（設定変更 / ニックネーム
 * 入力 / 復帰キーワード）のいずれにもマッチしなかった自由文に対して呼び出される。
 * 本サービスの仕様を内蔵したシステムプロンプト＋直近の会話履歴＋ユーザーの質問を
 * Gemini に送り、応答を LINE reply で返す。
 *
 * コスト管理（多層）:
 *   1. ユーザー別の 1 日利用上限（無料5 / トライアル・プレミアム50）。
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

/** 上限超過時の固定文。 */
const LIMIT_REACHED_TEXT =
  "今日の質問はここまで！たくさん使ってくれてありがとう😊 また明日、続きを聞かせてね。";
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
 * Gemini REST API（generativelanguage）を fetch で呼び出す。
 * 成功時は応答テキストを返す。失敗・空応答時は throw する。
 */
async function callGemini(
  systemPrompt: string,
  history: AiChatTurn[],
  userText: string
): Promise<GeminiResult> {
  const apiKey = process.env.GEMINI_API_KEY || "";
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set");
  }
  const model = process.env.GEMINI_MODEL || "gemini-3.1-flash-lite";

  const contents = [
    ...history.map((turn) => ({
      role: turn.role,
      parts: [{ text: turn.text }],
    })),
    { role: "user", parts: [{ text: userText }] },
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
  userData: UserDoc | undefined
): Promise<void> {
  const trimmed = userText.trim();
  if (!trimmed) return;

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
    const result = await callGemini(systemPrompt, priorHistory, trimmed);
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
        { role: "user" as const, text: trimmed },
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
