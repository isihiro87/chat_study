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

// ムビスタ（授業動画アプリ）学習イベントの受け口（users/{uid}.mubista へ集約）
export { recordMubistaProgress } from './recordMubistaProgress';

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
