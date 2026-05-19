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

const TRIAL_PRICE_YEN = 680;
const NORMAL_PRICE_YEN = 980;

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
