/**
 * 参考書Webページ内チャット（スタ先生）。
 * 設計: .steering/20260719-reference-inline-chat/
 *
 * つづもん参考書Web版（www.chatstudy.jp/tsudumon/ref/{NN}/）に埋め込まれた
 * チャットウィジェットから呼ばれる。知識（教材接地 = REFERENCE_TOPICS ＋
 * refAskSystemPrompt）と会話履歴（users/{lineUserId}.refSession.history）を
 * 公式LINEの参考書AI（ref_ask 質問モード）と完全に共有する:
 * ページで聞いた続きをLINEトークで、LINEで聞いた続きをページで継続できる。
 *
 * 認証: www.chatstudy.jp の既存 LINE Login（Firebase Auth, uid = `line:{userId}`）。
 * コスト: 公式LINEのAIチャットと同じ 1日枠（users/{uid}.aiChat.count, 40回/日）を
 * 消費・共有する（LINE側 ref 対話は reply 経路のため枠を消費しないが、Web は
 * ブラウザから叩けるぶん上限で確実に守る）。Gemini 成功時のみ count を消費。
 *
 * Firestore read: ゲート判定 1 read（無料単元は 0）＋ user doc 1 read のみ。
 */
import * as functions from 'firebase-functions/v1';
import type { AiChatTurn } from './userDocTypes';

/** refSession.history の保持メッセージ数（LINE側 handleReferenceTextInput と同値）。 */
const REF_HISTORY_LIMIT = 8;
/** Gemini に文脈として渡す直近メッセージ数（LINE側と同値）。 */
const REF_CONTEXT_MESSAGES = 6;
/** 入力テキストの上限（暴走防止）。 */
const MAX_INPUT_CHARS = 1000;

interface RefSessionLite {
  topicKey?: string;
  mode?: string;
  history?: AiChatTurn[];
}

export const referenceChat = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const { idToken, topicKey, action, text } = req.body ?? {};
    if (
      typeof idToken !== 'string' ||
      !idToken ||
      typeof topicKey !== 'string' ||
      !topicKey ||
      (action !== 'history' && action !== 'send')
    ) {
      res.status(400).json({ error: 'idToken, topicKey, action are required' });
      return;
    }
    const userText =
      typeof text === 'string' ? text.trim().slice(0, MAX_INPUT_CHARS) : '';
    if (action === 'send' && !userText) {
      res.status(400).json({ error: 'text is required for send' });
      return;
    }

    try {
      // 1. Firebase ID token 検証（LINE Login 由来の uid のみ許可）。
      const { getApps, initializeApp } = await import('firebase-admin/app');
      const { getAuth } = await import('firebase-admin/auth');
      if (getApps().length === 0) {
        initializeApp();
      }
      let uid: string;
      try {
        uid = (await getAuth().verifyIdToken(idToken)).uid;
      } catch {
        res.status(401).json({ error: 'invalid_token' });
        return;
      }
      if (!uid.startsWith('line:')) {
        res.status(403).json({ error: 'line_login_required' });
        return;
      }
      const lineUserId = uid.slice('line:'.length);

      // 2. 単元教材の解決（LINE側と同じ生成TS＝知識共有）。
      const { resolveReferenceTopic } = await import('./referenceTopic');
      const topic = resolveReferenceTopic(topicKey);
      if (!topic) {
        res.status(404).json({ error: 'unknown_topic' });
        return;
      }

      // 3. 購入者ゲート（pushReferenceStart と同一判定・同一文言）。
      const { TSUDUMON_FREE_REFERENCE_KEYS } = await import('./tsudumonCore');
      if (!TSUDUMON_FREE_REFERENCE_KEYS.includes(topicKey)) {
        const { checkTsudumonAccess, buildTsudumonGateText } =
          await import('./lineWebhook');
        const gate = await checkTsudumonAccess(
          `line:${lineUserId}`,
          topic.grade
        );
        if (gate.result !== 'ok') {
          res.status(402).json({
            error: 'license_required',
            message: buildTsudumonGateText(gate, topic.grade),
          });
          return;
        }
      }

      // 4. LINE本体側の user doc を 1 read（refSession ＋ aiChat 枠）。
      const { getFirestore } = await import('firebase-admin/firestore');
      const db = getFirestore();
      const snap = await db.doc(`users/${lineUserId}`).get();
      const userData = (snap.data() ?? {}) as Record<string, unknown>;

      const { getDailyLimit, getJstDate, evaluateRateLimit } =
        await import('./aiChatCore');
      const { getUserPlan } = await import('./lineWebhook');
      const plan = getUserPlan(userData);
      const limit = getDailyLimit(plan);
      const todayJst = getJstDate(new Date());
      const { currentCount, limited } = evaluateRateLimit(
        userData.aiChat as { dateJST?: string; count?: number } | undefined,
        todayJst,
        limit
      );

      const session = (userData.refSession ?? {}) as RefSessionLite;
      // 履歴共有は同一単元のみ（別単元の会話を混ぜない。LINE側の check モード中の
      // 履歴も質問モードの文脈としてそのまま使える）。
      const history: AiChatTurn[] =
        session.topicKey === topicKey && Array.isArray(session.history)
          ? session.history
          : [];

      if (action === 'history') {
        res.json({
          history,
          remaining: Math.max(0, limit - currentCount),
          topicName: topic.name,
        });
        return;
      }

      // 5. レート制限（LINEのAIチャットと共有の1日枠）。超過時は課金ゼロで断る。
      if (limited) {
        const { LIMIT_REACHED_TEXT } = await import('./aiChat');
        res.status(429).json({ error: 'limit', message: LIMIT_REACHED_TEXT });
        return;
      }

      // 6. Gemini 呼び出し（LINE側 ask 分岐と同じ履歴インライン方式）。
      const { generateGeminiText } = await import('./aiChat');
      const { refAskSystemPrompt } = await import('./referencePrompt');
      const hist = history
        .slice(-REF_CONTEXT_MESSAGES)
        .map((h) => `${h.role === 'user' ? '生徒' : 'スタ先生'}: ${h.text}`)
        .join('\n');
      const prompt = hist
        ? `これまでのやり取り:\n${hist}\n\n生徒の発言: ${userText}`
        : userText;
      let answer: string;
      try {
        answer = (
          await generateGeminiText(refAskSystemPrompt(topic), prompt, 500)
        ).trim();
      } catch (error) {
        console.error('[referenceChat] Gemini call failed:', error);
        res.status(502).json({
          error: 'ai_failed',
          message:
            'ごめんね、いまうまく答えられなかった。もう一度おしえてくれる？',
        });
        return; // count は消費しない
      }

      // 7. 書き戻し: refSession（LINEと履歴共有・トークでそのまま続きを話せる形）
      //    ＋ aiChat の当日カウント（merge write で他キーを壊さない）。
      const newHistory = [
        ...history,
        { role: 'user' as const, text: userText },
        { role: 'model' as const, text: answer },
      ].slice(-REF_HISTORY_LIMIT);
      try {
        await db.doc(`users/${lineUserId}`).set(
          {
            refSession: {
              topicKey,
              mode: 'ask',
              awaiting: true,
              history: newHistory,
            },
            aiChat: { dateJST: todayJst, count: currentCount + 1 },
          },
          { merge: true }
        );
      } catch (error) {
        // 応答は成立しているのでログのみ（次回の履歴共有が1往復分欠けるだけ）。
        console.error('[referenceChat] state write failed:', error);
      }

      res.json({
        answer,
        remaining: Math.max(0, limit - currentCount - 1),
      });
    } catch (error) {
      console.error('[referenceChat] error:', error);
      res.status(500).json({ error: 'internal' });
    }
  });
