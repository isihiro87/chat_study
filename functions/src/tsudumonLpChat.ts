/**
 * つづもんLP（https://tsudumon.jp/）の相談チャットAPI。
 *
 * POST /api/chat  { messages: [{role:'user'|'assistant', content:string}], uid?:string }
 *   → { reply: string }
 *
 * 公開URLは pdf-workbook/firebase.json の rewrite で
 *   https://tsudumon.jp/api/chat
 * に載る（直接の Cloud Functions URL でも動く）。
 *
 * 経緯: もとは Vercel Serverless Function（marutto-study/api/chat.js）だった。
 * つづもんを chatstudy.jp のVercelプロキシから切り離すにあたり、
 * Firebase Hosting は静的配信専用でサーバー関数を持てないため、ここへ移設した。
 *
 * 必要な環境変数（functions/.env）:
 *   GEMINI_API_KEY        … Google AI Studio のAPIキー（必須）
 *   CHAT_DAILY_LIMIT      … 全体の1日あたりAI応答回数上限（省略時 300）
 *   CHAT_USER_DAILY_LIMIT … 1人（IP＋ブラウザID）あたりの1日上限（省略時 15）
 *
 * コスト設計（Vercel版から不変）:
 *   - gemini-2.5-flash-lite / maxOutputTokens 400 / 履歴は直近8件 / 1メッセージ300文字まで
 *   - 全体・利用者ごとの日次上限を超えたら、課金せずFAQと公式LINEへ誘導する
 *
 * 設計: pdf-workbook/.steering/20260725-tsudumon-domain-independence/
 */
import * as functions from 'firebase-functions/v1';
import {
  DailyCounters,
  DEFAULT_DAILY_LIMIT,
  DEFAULT_USER_DAILY_LIMIT,
  MODEL,
  REPLY,
  buildGeminiRequest,
  normalizeMessages,
  parseGeminiReply,
  readLimit,
} from './tsudumonLpChatCore';

/** インスタンス単位の日次カウンタ（モジュールスコープで使い回す）。 */
const counters = new DailyCounters();

/** レート制限のキー。IP と、クライアントが送るブラウザIDの組。 */
function clientKey(req: functions.https.Request): string {
  const fwd = req.headers['x-forwarded-for'];
  const ip =
    (typeof fwd === 'string' && fwd.split(',')[0].trim()) ||
    req.socket?.remoteAddress ||
    'unknown';
  const rawUid = (req.body as { uid?: unknown } | undefined)?.uid;
  const uid = typeof rawUid === 'string' ? rawUid.slice(0, 40) : '';
  return ip + '|' + uid;
}

export const tsudumonLpChat = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'method not allowed' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      res.status(500).json({ reply: REPLY.noApiKey });
      return;
    }

    const now = Date.now();

    // 全体上限（サービス全体のコスト上限）
    const dailyLimit = readLimit(
      process.env.CHAT_DAILY_LIMIT,
      DEFAULT_DAILY_LIMIT
    );
    if (counters.isTotalExceeded(now, dailyLimit)) {
      res.status(200).json({ reply: REPLY.totalLimit });
      return;
    }

    // 1人あたりの上限（IP＋ブラウザID単位）
    const userLimit = readLimit(
      process.env.CHAT_USER_DAILY_LIMIT,
      DEFAULT_USER_DAILY_LIMIT
    );
    const key = clientKey(req);
    if (counters.isUserExceeded(now, key, userLimit)) {
      res.status(200).json({ reply: REPLY.userLimit });
      return;
    }

    const messages = normalizeMessages(
      (req.body as { messages?: unknown } | undefined)?.messages
    );
    if (!messages) {
      res.status(400).json({ error: 'bad request' });
      return;
    }

    try {
      const r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: buildGeminiRequest(messages),
        }
      );
      if (!r.ok) throw new Error('gemini ' + r.status);
      const reply = parseGeminiReply(await r.json());
      counters.record(now, key);
      res.status(200).json({ reply });
    } catch (e) {
      console.error('[tsudumonLpChat] generateContent failed:', e);
      res.status(200).json({ reply: REPLY.failed });
    }
  });
