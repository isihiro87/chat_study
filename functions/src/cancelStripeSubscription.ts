import * as functions from 'firebase-functions/v1';

import { logServerFunnelEvent } from './funnelEvent';

interface CancelResponse {
  /** Cancel 受け付け済みかどうか（true なら cancel_at_period_end=true へ更新済み） */
  ok: boolean;
  /** UI に「○月○日まで使えます」を出すための ISO 文字列（JSTで描画は呼び出し側） */
  currentPeriodEnd: string | null;
}

interface StripeSubscriptionResponse {
  id?: string;
  status?: string;
  cancel_at_period_end?: boolean;
  current_period_end?: number;
  error?: { message?: string };
}

function setCorsHeaders(req: functions.https.Request, res: functions.Response) {
  const origin = req.get('origin') || '*';
  res.set('Access-Control-Allow-Origin', origin);
  res.set('Vary', 'Origin');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

function getBearerToken(req: functions.https.Request): string {
  const header = req.get('authorization') || '';
  const prefix = 'Bearer ';
  return header.startsWith(prefix) ? header.slice(prefix.length).trim() : '';
}

function getString(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

/**
 * プレミアム（paid）契約を「期末まで利用可・期末で停止」へ切り替えるエンドポイント。
 *
 * 仕様:
 *   - 即時解約はしない。Stripe `cancel_at_period_end=true` で予約し、
 *     `current_period_end` まではプレミアム機能を使い続けてもらう
 *   - `customer.subscription.updated` webhook 経由で users doc にも
 *     `cancelAtPeriodEnd=true` / `currentPeriodEnd=<ts>` が反映される
 *   - 体験中（planSource='trial'）の解約はそもそも不要のため 409 を返す
 *
 * リクエスト: POST { Authorization: Bearer <Firebase ID token> }
 * レスポンス: { ok, currentPeriodEnd } / 4xx-5xx に error
 */
export const cancelStripeSubscription = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    setCorsHeaders(req, res);

    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY || '';
    if (!stripeSecretKey) {
      console.error('[cancelStripeSubscription] STRIPE_SECRET_KEY is not set');
      res.status(500).json({ error: 'Server misconfigured' });
      return;
    }

    const token = getBearerToken(req);
    if (!token) {
      res.status(401).json({ error: 'Missing auth token' });
      return;
    }

    const { getAuth } = await import('firebase-admin/auth');
    const { getFirestore } = await import('firebase-admin/firestore');

    let decoded;
    try {
      decoded = await getAuth().verifyIdToken(token);
    } catch (error) {
      console.warn('[cancelStripeSubscription] invalid auth token', error);
      res.status(401).json({ error: 'Invalid auth token' });
      return;
    }

    const uid = decoded.uid;
    try {
      const db = getFirestore();
      const userSnap = await db.doc(`users/${uid}`).get();
      const userData = userSnap.data() ?? {};

      const plan = getString(userData.plan);
      const planSource = getString(userData.planSource);
      const subscriptionId = getString(userData.stripeSubscriptionId);

      if (plan !== 'premium' || planSource !== 'paid') {
        // free / 体験中 (trial) / 既に解約済みなどは Stripe を触らずに弾く。
        // 体験中の解約は不要 (期限到来で自動的に free に戻る)。
        res
          .status(409)
          .json({ error: 'Not in active paid subscription', planSource });
        return;
      }
      if (!subscriptionId) {
        console.error(
          `[cancelStripeSubscription] uid=${uid} is paid but has no stripeSubscriptionId`
        );
        res.status(409).json({ error: 'Subscription id missing' });
        return;
      }

      // Stripe に cancel_at_period_end=true で予約。即時停止 (cancel) ではない点に注意。
      const stripeRes = await fetch(
        `https://api.stripe.com/v1/subscriptions/${subscriptionId}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${stripeSecretKey}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            cancel_at_period_end: 'true',
          }),
        }
      );

      const stripeData = (await stripeRes.json()) as StripeSubscriptionResponse;
      if (!stripeRes.ok) {
        console.error(
          '[cancelStripeSubscription] Stripe update failed',
          stripeData
        );
        res.status(502).json({
          error: stripeData.error?.message || 'Stripe update failed',
        });
        return;
      }

      const currentPeriodEnd =
        typeof stripeData.current_period_end === 'number'
          ? stripeData.current_period_end
          : undefined;

      // webhook 経由でも users doc は更新されるが、UI 即時反映のため先回りで書く。
      const { FieldValue, Timestamp } = await import('firebase-admin/firestore');
      const update: Record<string, unknown> = {
        cancelAtPeriodEnd: true,
        updatedAt: FieldValue.serverTimestamp(),
      };
      if (typeof currentPeriodEnd === 'number') {
        const ts = Timestamp.fromMillis(currentPeriodEnd * 1000);
        update.currentPeriodEnd = ts;
        update.premiumUntil = ts;
      }
      await db.doc(`users/${uid}`).set(update, { merge: true });

      await logServerFunnelEvent('paid_cancel_requested', uid, {
        stripeSubscriptionId: subscriptionId,
        currentPeriodEnd: currentPeriodEnd ?? null,
      });

      const response: CancelResponse = {
        ok: true,
        currentPeriodEnd: currentPeriodEnd
          ? new Date(currentPeriodEnd * 1000).toISOString()
          : null,
      };
      res.json(response);
    } catch (error) {
      console.error('[cancelStripeSubscription] failed', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
