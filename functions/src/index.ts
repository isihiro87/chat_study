import * as functions from 'firebase-functions/v1';
import { getApps, initializeApp } from 'firebase-admin/app';

// Firestore トリガーで `if (getApps().length === 0) initializeApp()` を関数本体内
// で呼ぶ pattern は cold start のタイミングで default app の解決に失敗するケースが
// あった（"The default Firebase app does not exist" エラーで全 trigger が失敗）。
// 確実に1度だけ初期化されるよう、index.ts の load 時に同期で実行する。
if (getApps().length === 0) {
  initializeApp();
}

export { lineWebhook } from './lineWebhook';
export { instagramWebhook } from './instagramWebhook';
// relaunchDispatcher は 2026-06-01 限定の一度きり再起動キャンペーン用で、
// 以降は 2分おき cron が即 return する空打ちだった（無駄起動 約2.2万回/月 +
// Cloud Scheduler ジョブ1個）。2026-06-27 に export 撤去＋関数削除でコスト削減。
// 配信時間は 6/7/16/18/20 時の 5 枠のみ（17/19/21 時は利用ほぼ 0 で 2026-06-27 に廃止）。
export {
  dailyQuiz06,
  dailyQuiz07,
  dailyQuiz16,
  dailyQuiz18,
  dailyQuiz20,
} from './dailyQuiz';
export { onAnswerCreated } from './onAnswerCreated';
export { onPremiumApplicationCreated } from './onPremiumApplicationCreated';
export { syncRichMenuToPlan } from './syncRichMenuToPlan';
// expireTrialUsers は 2026-06 トライアル廃止に伴い登録停止（dormant 残置）。
export { remindIncompleteOnboarding } from './remindIncompleteOnboarding';
export { onTestScopeFirstSet } from './onTestScopeFirstSet';
export { onTestScopeSaved } from './onTestScopeSaved';
export { stripeWebhook } from './stripeWebhook';
export { createStripeCheckoutSession } from './createStripeCheckoutSession';
export { cancelStripeSubscription } from './cancelStripeSubscription';
export { submitContactForm } from './submitContactForm';

// つづもん納品zipのダウンロード口（回数制限つき・/tsudumon/dl から rewrite）
export { tsudumonDownload } from './tsudumonDownload';
export { tsudumonActivate } from './tsudumonActivate';

// 参考書Webページ内チャット（スタ先生。LINEの参考書AIと知識・履歴・回数枠を共有）
export { referenceChat } from './referenceChat';

// 記述問題のAIその場採点（問題集Web版。購入者ゲート＋LINEのAI枠を共有）
export { gradeWritten } from './gradeWritten';

// ムビスタ（授業動画アプリ）学習イベントの受け口（users/{uid}.mubista へ集約）
export { recordMubistaProgress } from './recordMubistaProgress';
// ムビスタ連携: LINE の link トークンを長命 session に交換する
export { redeemMubistaSession } from './redeemMubistaSession';

// 休眠ユーザー除外システム + Win-back（§B, §C）
export { recalculateUserStatuses } from './recalculateUserStatuses';
export { sendWinbackMessages } from './sendWinbackMessages';

// 送信通数の月次レポート（通数モニタは新モデルでも継続）
export { monthlyDeliveryReport } from './monthlyDeliveryReport';

// 月末ふり返りレポート 招待 push（AI 学習分析。タップで reply 生成）
export { sendMonthlyReportInvite } from './sendMonthlyReportInvite';

// 2026-06 トライアル廃止・課金導線停止:
// 以下の trial 関連 cron は登録を停止（ファイル本体は dormant として残置）。
// 再開する場合はこの export を復活させる。
//   trialDripDay2 / trialDripDay3Parent / trialDripDay4 / trialDripDay5Story /
//   trialDripDay6Projection / trialReminderEveningDay7 / trialFormAbandonReminder /
//   postTrialFollowup / expireTrialUsers

const LINE_LOGIN_CHANNEL_ID = process.env.LINE_LOGIN_CHANNEL_ID || '';
const LINE_LOGIN_CHANNEL_SECRET = process.env.LINE_LOGIN_CHANNEL_SECRET || '';

interface LineTokenResponse {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  id_token: string;
}

interface LineProfile {
  userId: string;
  displayName: string;
  pictureUrl?: string;
}

export const createLineCustomToken = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    // CORS
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

    const { code, redirectUri } = req.body;
    if (!code || !redirectUri) {
      res.status(400).json({ error: 'code and redirectUri are required' });
      return;
    }

    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getAuth } = await import('firebase-admin/auth');
    const { getFirestore, FieldValue } =
      await import('firebase-admin/firestore');

    if (getApps().length === 0) {
      initializeApp();
    }

    try {
      const tokenRes = await fetch('https://api.line.me/oauth2/v2.1/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code,
          redirect_uri: redirectUri,
          client_id: LINE_LOGIN_CHANNEL_ID,
          client_secret: LINE_LOGIN_CHANNEL_SECRET,
        }),
      });

      if (!tokenRes.ok) {
        const err = await tokenRes.text();
        console.error('LINE token exchange failed:', err);
        res.status(401).json({ error: 'LINE token exchange failed' });
        return;
      }

      const tokenData = (await tokenRes.json()) as LineTokenResponse;

      const profileRes = await fetch('https://api.line.me/v2/profile', {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
      });

      if (!profileRes.ok) {
        res.status(401).json({ error: 'Failed to get LINE profile' });
        return;
      }

      const profile = (await profileRes.json()) as LineProfile;

      const auth = getAuth();
      const uid = `line:${profile.userId}`;
      try {
        await auth.getUser(uid);
        await auth.updateUser(uid, {
          displayName: profile.displayName,
          photoURL: profile.pictureUrl,
        });
      } catch {
        await auth.createUser({
          uid,
          displayName: profile.displayName,
          photoURL: profile.pictureUrl,
        });
      }

      const db = getFirestore();
      await db.doc(`users/${uid}`).set(
        {
          displayName: profile.displayName,
          photoURL: profile.pictureUrl || null,
          provider: 'line',
          lineUserId: profile.userId,
          lastActiveAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );

      const customToken = await auth.createCustomToken(uid);
      res.json({ customToken, displayName: profile.displayName });
    } catch (error) {
      console.error('LINE auth error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

interface LineIdTokenPayload {
  sub: string;
  name?: string;
  picture?: string;
  email?: string;
}

/**
 * LIFF SDK が発行する ID トークンを LINE 公式の verify エンドポイントで
 * 検証し、Firebase の custom token を返す。
 *
 * 用途: LIFF ページが /welcome → LINE OAuth → /auth/line/callback の
 * リダイレクトチェーンを経由せず、LIFF webview 内で完結する認証フローを
 * 提供する（LINE webview 内 OAuth が一部 LIFF で 400 を返す問題への対処）。
 */
export const createLiffFirebaseToken = functions
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

    const { idToken } = req.body ?? {};
    if (typeof idToken !== 'string' || !idToken) {
      res.status(400).json({ error: 'idToken is required' });
      return;
    }

    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getAuth } = await import('firebase-admin/auth');
    const { getFirestore, FieldValue } =
      await import('firebase-admin/firestore');
    if (getApps().length === 0) {
      initializeApp();
    }

    try {
      const verifyRes = await fetch('https://api.line.me/oauth2/v2.1/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          id_token: idToken,
          client_id: LINE_LOGIN_CHANNEL_ID,
        }),
      });

      if (!verifyRes.ok) {
        const err = await verifyRes.text();
        console.error('LIFF id_token verify failed:', err);
        res.status(401).json({ error: 'Invalid LIFF id_token' });
        return;
      }

      const payload = (await verifyRes.json()) as LineIdTokenPayload;
      const userId = payload.sub;
      if (!userId) {
        res.status(401).json({ error: 'userId missing in token' });
        return;
      }

      const displayName = payload.name ?? null;
      const pictureUrl = payload.picture ?? null;

      const auth = getAuth();
      const uid = `line:${userId}`;
      try {
        await auth.getUser(uid);
        await auth.updateUser(uid, {
          ...(displayName ? { displayName } : {}),
          ...(pictureUrl ? { photoURL: pictureUrl } : {}),
        });
      } catch {
        await auth.createUser({
          uid,
          ...(displayName ? { displayName } : {}),
          ...(pictureUrl ? { photoURL: pictureUrl } : {}),
        });
      }

      const db = getFirestore();
      await db.doc(`users/${uid}`).set(
        {
          displayName,
          photoURL: pictureUrl,
          provider: 'line',
          lineUserId: userId,
          lastActiveAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );

      const customToken = await auth.createCustomToken(uid);
      res.json({ customToken });
    } catch (error) {
      console.error('createLiffFirebaseToken error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

/**
 * QR即出題: 印刷ワークの QR（LIFF /liff/units/wb?t=単元名）から呼ばれ、
 * LIFF の ID トークンを検証してその単元の「ワーク開始カード」をトークへ push する。
 * 生徒は QR を読むだけで送信操作なしに問題を始められる（push のため配信枠を消費）。
 *
 * レスポンス: 200 ok / 404 unknown topic / 424 push失敗（友だち未登録など） / 401 token不正
 */
export const workbookLaunch = functions
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

    const { idToken, topic } = req.body ?? {};
    if (
      typeof idToken !== 'string' ||
      !idToken ||
      typeof topic !== 'string' ||
      !topic
    ) {
      res.status(400).json({ error: 'idToken and topic are required' });
      return;
    }

    try {
      const verifyRes = await fetch('https://api.line.me/oauth2/v2.1/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          id_token: idToken,
          client_id: LINE_LOGIN_CHANNEL_ID,
        }),
      });
      if (!verifyRes.ok) {
        console.error('workbookLaunch verify failed:', await verifyRes.text());
        res.status(401).json({ error: 'Invalid LIFF id_token' });
        return;
      }
      const payload = (await verifyRes.json()) as LineIdTokenPayload;
      const userId = payload.sub;
      if (!userId) {
        res.status(401).json({ error: 'userId missing in token' });
        return;
      }

      const { pushWorkbookStart } = await import('./lineWebhook');
      const result = await pushWorkbookStart(userId, topic.slice(0, 60));
      if (result === 'unknown_topic') {
        res.status(404).json({ error: 'unknown topic' });
        return;
      }
      if (result === 'push_failed') {
        // 友だち未登録などで push できない。クライアントは友だち追加へ誘導する。
        res.status(424).json({ error: 'push failed (not a friend?)' });
        return;
      }
      res.json({ ok: true });
    } catch (error) {
      console.error('workbookLaunch error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

/**
 * 参考書QR即開始: 参考書の QR（LIFF /liff/units/ref?t=章番号-topicId）から呼ばれ、
 * LIFF の ID トークンを検証して「スタ先生と深める」メニュー（質問／理解度チェック）を
 * トークへ push する。生徒は QR を読むだけで LINE 上のAI学習を始められる。
 *
 * レスポンス: 200 ok / 404 unknown topic / 424 push失敗 / 401 token不正
 */
export const referenceLaunch = functions
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

    const { idToken, topic } = req.body ?? {};
    if (
      typeof idToken !== 'string' ||
      !idToken ||
      typeof topic !== 'string' ||
      !topic
    ) {
      res.status(400).json({ error: 'idToken and topic are required' });
      return;
    }

    try {
      const verifyRes = await fetch('https://api.line.me/oauth2/v2.1/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          id_token: idToken,
          client_id: LINE_LOGIN_CHANNEL_ID,
        }),
      });
      if (!verifyRes.ok) {
        console.error('referenceLaunch verify failed:', await verifyRes.text());
        res.status(401).json({ error: 'Invalid LIFF id_token' });
        return;
      }
      const payload = (await verifyRes.json()) as LineIdTokenPayload;
      const userId = payload.sub;
      if (!userId) {
        res.status(401).json({ error: 'userId missing in token' });
        return;
      }

      const { pushReferenceStart } = await import('./lineWebhook');
      const result = await pushReferenceStart(userId, topic.slice(0, 60));
      if (result === 'unknown_topic') {
        res.status(404).json({ error: 'unknown topic' });
        return;
      }
      if (result === 'push_failed') {
        res.status(424).json({ error: 'push failed (not a friend?)' });
        return;
      }
      res.json({ ok: true });
    } catch (error) {
      console.error('referenceLaunch error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
