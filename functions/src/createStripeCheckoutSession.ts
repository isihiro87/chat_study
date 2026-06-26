import * as functions from 'firebase-functions/v1';

import { logServerFunnelEvent } from './funnelEvent';

interface CheckoutRequestBody {
  successUrl?: unknown;
  cancelUrl?: unknown;
}

interface StripeCheckoutSessionResponse {
  id?: string;
  url?: string;
  error?: {
    message?: string;
  };
}

/**
 * プレミアム課金導線の有効フラグ。
 * 2026-06 にプレミアム/トライアルを廃止（全機能無料化）。導線（webhook の訴求 CTA・
 * LIFF premium ページ）は止めたが、この onRequest 自体が生きていると廃止後も
 * 決済が成立し得るため、バックストップとして無効化する。再開時は true に戻す。
 */
const PREMIUM_FLOW_ENABLED = false;

const TRIAL_PRICE_YEN = 680;
const NORMAL_PRICE_YEN = 980;
/**
 * 体験期間の最大日数。Stripe Checkout で trial_period_days を計算するとき、
 * Math.ceil とクロックずれの組合せで本来 7 を返すべきところ 8 が返るケースを
 * 防ぐためのキャップ。「7日間無料」と表示されるはずなのに「8日間無料」と
 * 出ていたのはこれが原因。
 */
const MAX_TRIAL_DAYS = 7;

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

function getOriginFromUrl(value: string): string {
  try {
    return new URL(value).origin;
  } catch {
    return '';
  }
}

function isAllowedReturnUrl(value: string, origin: string): boolean {
  if (!value) return false;
  const urlOrigin = getOriginFromUrl(value);
  return Boolean(urlOrigin && origin && urlOrigin === origin);
}

function appendFormParam(params: URLSearchParams, key: string, value: string) {
  if (value) params.append(key, value);
}

export const createStripeCheckoutSession = functions
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

    // プレミアム廃止中は決済を受け付けない（バックストップ）。
    if (!PREMIUM_FLOW_ENABLED) {
      console.warn(
        '[createStripeCheckoutSession] premium flow disabled; rejecting request'
      );
      res.status(410).json({ error: 'Premium subscription is no longer available' });
      return;
    }

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY || '';
    const trialPriceId = process.env.STRIPE_PRICE_TRIAL_680 || '';
    const normalPriceId = process.env.STRIPE_PRICE_NORMAL_980 || '';
    if (!stripeSecretKey || !trialPriceId || !normalPriceId) {
      console.error('[createStripeCheckoutSession] Stripe env is not set');
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
      console.warn('[createStripeCheckoutSession] invalid auth token', error);
      res.status(401).json({ error: 'Invalid auth token' });
      return;
    }

    const uid = decoded.uid;
    const lineUserId = uid.startsWith('line:') ? uid.slice('line:'.length) : '';
    if (!lineUserId) {
      res.status(400).json({ error: 'LINE user is required' });
      return;
    }

    const origin = req.get('origin') || '';
    const body = (req.body ?? {}) as CheckoutRequestBody;
    const successUrl = getString(body.successUrl);
    const cancelUrl = getString(body.cancelUrl);
    if (
      !isAllowedReturnUrl(successUrl, origin) ||
      !isAllowedReturnUrl(cancelUrl, origin)
    ) {
      res.status(400).json({ error: 'Invalid return URL' });
      return;
    }

    try {
      const db = getFirestore();
      const userSnap = await db.doc(`users/${uid}`).get();
      const userData = userSnap.data() ?? {};
      const planSource = getString(userData.planSource);
      const plan = getString(userData.plan);

      if (plan === 'premium' && planSource === 'paid') {
        res.status(409).json({ error: 'Already subscribed' });
        return;
      }

      const lockedMonthlyPrice =
        planSource === 'trial' ? TRIAL_PRICE_YEN : NORMAL_PRICE_YEN;
      const priceId =
        lockedMonthlyPrice === TRIAL_PRICE_YEN ? trialPriceId : normalPriceId;

      // 無料体験中にサブスク登録した場合、体験終了までは課金しない。
      // Stripe の trial_period_days に「体験終了までの残り日数」を渡すと、
      // 初回課金は trial_end の翌日に発生 → ユーザー目線では「体験終了後から1ヶ月開始」になる。
      let trialPeriodDays = 0;
      if (planSource === 'trial') {
        const premiumUntilRaw = userData.premiumUntil as
          | { toMillis?: () => number }
          | undefined
          | null;
        const premiumUntilMs =
          premiumUntilRaw && typeof premiumUntilRaw.toMillis === 'function'
            ? premiumUntilRaw.toMillis()
            : 0;
        if (premiumUntilMs > Date.now()) {
          const rawDays = Math.ceil(
            (premiumUntilMs - Date.now()) / (24 * 60 * 60 * 1000)
          );
          // 体験は最大 7 日なので、計算結果が clock skew で 8 になっても 7 に丸める
          trialPeriodDays = Math.min(MAX_TRIAL_DAYS, Math.max(1, rawDays));
        }
      }

      const params = new URLSearchParams();
      params.append('mode', 'subscription');
      params.append('line_items[0][price]', priceId);
      params.append('line_items[0][quantity]', '1');
      params.append('success_url', successUrl);
      params.append('cancel_url', cancelUrl);
      params.append('client_reference_id', uid);
      params.append('metadata[uid]', uid);
      params.append('metadata[lineUserId]', lineUserId);
      params.append('metadata[lockedMonthlyPrice]', String(lockedMonthlyPrice));
      params.append('subscription_data[metadata][uid]', uid);
      params.append('subscription_data[metadata][lineUserId]', lineUserId);
      params.append(
        'subscription_data[metadata][lockedMonthlyPrice]',
        String(lockedMonthlyPrice)
      );
      if (trialPeriodDays > 0) {
        params.append(
          'subscription_data[trial_period_days]',
          String(trialPeriodDays)
        );
      }
      // Stripe Checkout のサブミット直下にユーザー安心感を補強する文言を表示。
      // 「X日間無料」の標準表示に加えて、課金額と解約自由を明示する。
      params.append(
        'custom_text[submit][message]',
        trialPeriodDays > 0
          ? `体験終了後は月¥${lockedMonthlyPrice}（税込）。マイページからいつでも解約できます。`
          : `月¥${lockedMonthlyPrice}（税込）。マイページからいつでも解約できます。`
      );
      appendFormParam(
        params,
        'customer_email',
        getString(userData.guardianEmail) || getString(userData.email)
      );

      const stripeRes = await fetch(
        'https://api.stripe.com/v1/checkout/sessions',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${stripeSecretKey}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params,
        }
      );

      const stripeData =
        (await stripeRes.json()) as StripeCheckoutSessionResponse;
      if (!stripeRes.ok || !stripeData.url) {
        console.error(
          '[createStripeCheckoutSession] Stripe session creation failed',
          stripeData
        );
        res.status(502).json({
          error:
            stripeData.error?.message ||
            'Failed to create Stripe Checkout Session',
        });
        return;
      }

      await logServerFunnelEvent('checkout_session_created', uid, {
        stripeCheckoutSessionId: stripeData.id || null,
        lockedMonthlyPrice,
        priceId,
      });

      res.json({
        url: stripeData.url,
        lockedMonthlyPrice,
      });
    } catch (error) {
      console.error('[createStripeCheckoutSession] failed', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
