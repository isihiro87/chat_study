/**
 * つづもん 月額サブスク（Stripe Checkout 直付け）。
 * 設計: pdf-workbook/.steering/20260724-tsudumon-flow-overhaul/design.md §7
 *
 * 方針は「コードレスの Checkout 直付け」。LINE uid（`line:{userId}`）を
 * `client_reference_id` と `subscription_data.metadata.uid` に載せて Checkout Session を
 * 作り、webhook が `users/{uid}.tsudumon` を直接書く（tsudumonActivate のコード有効化は
 * ギフト用に温存）。既存 `createStripeCheckoutSession.ts` と同じく **Stripe SDK は使わず
 * 生 fetch（form-urlencoded）** で叩き、署名検証は `stripeWebhook.ts` と同じ HMAC 方式。
 *
 * 認証・CORS・`line:` prefix チェックは tsudumonActivate と同型。Firestore は
 * doc get のみ（クエリ追加なし＝read 規律）。
 *
 * Env（`functions/.env`。旧プレミアム用 STRIPE_* とは別系統）:
 *   STRIPE_TSUDUMON_SECRET_KEY / STRIPE_TSUDUMON_PRICE_ID / STRIPE_TSUDUMON_WEBHOOK_SECRET
 */
import * as crypto from 'crypto';
import * as functions from 'firebase-functions/v1';

import {
  getInvoiceLinesPeriodEnd,
  getInvoiceSubscriptionId,
  getInvoiceSubscriptionMetadata,
  getSubscriptionPeriodEnd,
  resolvePeriodEnd,
} from './stripeInvoiceFields';
import { TSUDUMON_PRODUCT_TAG, getStripeProductTag } from './stripeProductTag';
import {
  evaluateTsudumonAccess,
  readTsudumonEntitlement,
} from './tsudumonCore';

/** サブスク期限に足す猶予（決済確定の遅延・失敗リトライ中の失効を防ぐ）。 */
const GRACE_DAYS = 3;
/**
 * 体験（trial）中に登録したとき、体験終了まで課金しないための trial_period_days の
 * キャップ。体験は最大3日なので、clock skew で 4 になっても 3 に丸める
 * （createStripeCheckoutSession.ts の MAX_TRIAL_DAYS と同じ考え方）。
 */
const MAX_TRIAL_DAYS = 3;

const STRIPE_API_BASE = 'https://api.stripe.com/v1';

async function getDb() {
  const { initializeApp, getApps } = await import('firebase-admin/app');
  const { getFirestore } = await import('firebase-admin/firestore');
  if (getApps().length === 0) {
    initializeApp();
  }
  return getFirestore();
}

function getString(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

/** CORS ヘッダ（tsudumonActivate と同型）。 */
function setCors(res: functions.Response) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
}

/** POST /v1/... を form-urlencoded で叩く（生 fetch）。 */
async function stripePost(
  path: string,
  params: URLSearchParams,
  secretKey: string
): Promise<{ ok: boolean; status: number; data: Record<string, unknown> }> {
  const res = await fetch(`${STRIPE_API_BASE}${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${secretKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  });
  let data: Record<string, unknown> = {};
  try {
    data = (await res.json()) as Record<string, unknown>;
  } catch {
    data = {};
  }
  return { ok: res.ok, status: res.status, data };
}

/** GET /v1/... （subscription retrieve 用）。 */
async function stripeGet(
  path: string,
  secretKey: string
): Promise<{ ok: boolean; status: number; data: Record<string, unknown> }> {
  const res = await fetch(`${STRIPE_API_BASE}${path}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${secretKey}` },
  });
  let data: Record<string, unknown> = {};
  try {
    data = (await res.json()) as Record<string, unknown>;
  } catch {
    data = {};
  }
  return { ok: res.ok, status: res.status, data };
}

/** idToken を検証して `line:` uid を返す。失敗時は res にエラーを書いて null を返す。 */
async function verifyLineUid(
  idToken: string,
  res: functions.Response
): Promise<string | null> {
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
    return null;
  }
  if (!uid.startsWith('line:')) {
    res.status(403).json({ error: 'line_login_required' });
    return null;
  }
  return uid;
}

/**
 * つづもん 月額サブスクの Checkout Session を作る。
 * POST { idToken } → { ok:true, url } | { ok:false, reason, message }
 *  - env 未設定: 503 { ok:false, reason:'not_configured' }
 *  - すでに有効な Stripe サブスクあり: { ok:false, reason:'already_subscribed' }
 * 体験中（source==='trial' 且つ未失効）は残日数を trial_period_days に渡し、
 * 体験終了後から課金を開始する。
 */
export const tsudumonCreateCheckout = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    setCors(res);
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const secretKey = process.env.STRIPE_TSUDUMON_SECRET_KEY || '';
    const priceId = process.env.STRIPE_TSUDUMON_PRICE_ID || '';
    if (!secretKey || !priceId) {
      console.error('[tsudumonCreateCheckout] Stripe env is not set');
      res.status(503).json({ ok: false, reason: 'not_configured' });
      return;
    }

    const { idToken } = req.body ?? {};
    if (typeof idToken !== 'string' || !idToken) {
      res.status(400).json({ error: 'idToken is required' });
      return;
    }

    try {
      const uid = await verifyLineUid(idToken, res);
      if (!uid) return;

      const db = await getDb();
      const snap = await db.doc(`users/${uid}`).get();
      const raw = snap.exists
        ? (snap.data() as Record<string, unknown>).tsudumon
        : null;
      const source = getString(
        raw && typeof raw === 'object'
          ? (raw as Record<string, unknown>).source
          : ''
      );
      const nowMs = Date.now();
      const access = evaluateTsudumonAccess(raw, null, nowMs);

      // すでに有効な Stripe サブスクを持っているなら二重登録させない。
      if (access === 'ok' && source === 'stripe') {
        res.status(200).json({
          ok: false,
          reason: 'already_subscribed',
          message:
            'すでに月額プランにご登録いただいています。そのまま全単元をご利用いただけます。',
        });
        return;
      }

      // 体験中の登録は、体験終了までの残日数を trial_period_days に渡して
      // 「体験終了後から1ヶ月」を開始する（体験期間の二重取りを防ぐ）。
      let trialPeriodDays = 0;
      if (source === 'trial' && access === 'ok') {
        const ent = readTsudumonEntitlement(raw);
        if (ent && ent.expiresAtMs > nowMs) {
          const rawDays = Math.ceil(
            (ent.expiresAtMs - nowMs) / (24 * 60 * 60 * 1000)
          );
          trialPeriodDays = Math.min(MAX_TRIAL_DAYS, Math.max(1, rawDays));
        }
      }

      const params = new URLSearchParams();
      params.append('mode', 'subscription');
      params.append('line_items[0][price]', priceId);
      params.append('line_items[0][quantity]', '1');
      params.append('client_reference_id', uid);
      params.append('subscription_data[metadata][uid]', uid);
      // 商品タグ。同一 Stripe アカウントに相乗りしているプレミアム側 webhook との
      // 相互汚染を防ぐ振り分けキー（stripeProductTag.ts 参照）。Session と
      // Subscription の両方に載せることで、checkout.session.* / invoice.* /
      // customer.subscription.* のどのイベントからもタグを引ける。
      params.append('metadata[product]', TSUDUMON_PRODUCT_TAG);
      params.append(
        'subscription_data[metadata][product]',
        TSUDUMON_PRODUCT_TAG
      );
      params.append(
        'success_url',
        'https://www.chatstudy.jp/tsudumon/map/?sub=thanks'
      );
      params.append('cancel_url', 'https://www.chatstudy.jp/tsudumon/');
      params.append('locale', 'ja');
      params.append('allow_promotion_codes', 'true');
      if (trialPeriodDays > 0) {
        params.append(
          'subscription_data[trial_period_days]',
          String(trialPeriodDays)
        );
      }

      const result = await stripePost('/checkout/sessions', params, secretKey);
      const url = getString(result.data.url);
      if (!result.ok || !url) {
        console.error(
          '[tsudumonCreateCheckout] Stripe session creation failed',
          result.data
        );
        res
          .status(502)
          .json({
            ok: false,
            reason: 'stripe_error',
            message: '決済の準備に失敗しました。',
          });
        return;
      }

      console.log(
        `[tsudumonCreateCheckout] uid=${uid} trialDays=${trialPeriodDays} ok`
      );
      res.status(200).json({ ok: true, url });
    } catch (error) {
      console.error('[tsudumonCreateCheckout] failed:', error);
      res.status(500).json({ error: 'internal' });
    }
  });

function timingSafeEqual(a: string, b: string): boolean {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);
  if (aBuffer.length !== bBuffer.length) return false;
  return crypto.timingSafeEqual(aBuffer, bBuffer);
}

/** Stripe-Signature ヘッダを raw body で検証（stripeWebhook.ts と同じ方式）。 */
function verifyStripeSignature(
  rawBody: Buffer,
  signatureHeader: string,
  secret: string
): boolean {
  const parts = signatureHeader.split(',').map((part) => part.trim());
  const timestamp = parts
    .find((part) => part.startsWith('t='))
    ?.slice('t='.length);
  const signatures = parts
    .filter((part) => part.startsWith('v1='))
    .map((part) => part.slice('v1='.length));
  if (!timestamp || signatures.length === 0) return false;

  const timestampMs = Number(timestamp) * 1000;
  if (!Number.isFinite(timestampMs)) return false;
  const toleranceMs = 5 * 60 * 1000;
  if (Math.abs(Date.now() - timestampMs) > toleranceMs) return false;

  const signedPayload = `${timestamp}.${rawBody.toString('utf8')}`;
  const expected = crypto
    .createHmac('sha256', secret)
    .update(signedPayload)
    .digest('hex');

  return signatures.some((sig) => timingSafeEqual(sig, expected));
}

interface StripeWebhookEvent {
  id?: string;
  type?: string;
  data?: { object?: Record<string, unknown> };
}

function getMetadataUid(obj: Record<string, unknown>): string {
  const metadata = obj.metadata;
  if (metadata && typeof metadata === 'object') {
    return getString((metadata as Record<string, unknown>).uid);
  }
  return '';
}

function normalizeUid(value: string): string {
  if (!value) return '';
  return value.startsWith('line:') ? value : `line:${value}`;
}

/**
 * subscription を retrieve して uid / customerId / 次回請求日 を取り出す。
 * 次回請求日は現行 API では `items.data[].current_period_end` にあるため、
 * 抽出は `stripeInvoiceFields.getSubscriptionPeriodEnd` に集約している。
 */
async function retrieveSubscriptionInfo(
  subscriptionId: string,
  secretKey: string
): Promise<{
  uid: string;
  customerId: string;
  currentPeriodEnd: number;
} | null> {
  if (!subscriptionId) return null;
  const result = await stripeGet(`/subscriptions/${subscriptionId}`, secretKey);
  if (!result.ok) {
    console.error(
      `[tsudumonStripeWebhook] subscription retrieve failed id=${subscriptionId}`,
      result.data
    );
    return null;
  }
  const sub = result.data;
  const uid = normalizeUid(getMetadataUid(sub));
  const customerId = getString(sub.customer);
  const currentPeriodEnd = getSubscriptionPeriodEnd(sub);
  return { uid, customerId, currentPeriodEnd };
}

/**
 * つづもん Stripe webhook。STRIPE_TSUDUMON_WEBHOOK_SECRET で署名検証（raw body）。
 *  - checkout.session.completed: サブスク開始 → users/{uid}.tsudumon を stripe で書く
 *  - invoice.paid: 継続課金 → expiresAt を新しい period_end + 猶予 に延長
 *  - customer.subscription.deleted: ログのみ（expiresAt 経過で自然失効に任せる）
 *  - 未知イベント: 200 で無視。署名不正: 400。
 */
export const tsudumonStripeWebhook = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).send('Method not allowed');
      return;
    }

    const secret = process.env.STRIPE_TSUDUMON_WEBHOOK_SECRET || '';
    const secretKey = process.env.STRIPE_TSUDUMON_SECRET_KEY || '';
    if (!secret || !secretKey) {
      console.error('[tsudumonStripeWebhook] Stripe env is not set');
      res.status(500).send('Server misconfigured');
      return;
    }

    const signature = req.get('stripe-signature') || '';
    if (!signature || !verifyStripeSignature(req.rawBody, signature, secret)) {
      console.warn('[tsudumonStripeWebhook] invalid signature');
      res.status(400).send('Invalid signature');
      return;
    }

    let event: StripeWebhookEvent;
    try {
      event = JSON.parse(req.rawBody.toString('utf8')) as StripeWebhookEvent;
    } catch (error) {
      console.error('[tsudumonStripeWebhook] invalid JSON:', error);
      res.status(400).send('Invalid JSON');
      return;
    }

    const eventType = event.type || '';
    const obj = event.data?.object ?? {};

    // 商品タグによる opt-in ガード。同一 Stripe アカウントのプレミアム課金イベントも
    // ここへ配信されるため、`product=tsudumon` のイベント以外は一切処理しない。
    // タグ無し（空）も処理しない＝誤付与より不付与を選ぶ。
    // 注: この変更**以前**にテストモードで作ったサブスクにはタグが無く対象外になるが、
    // テストデータなので問題ない（本番サブスクは全てタグ付きで作られる）。
    const productTag = getStripeProductTag(obj);
    if (productTag !== TSUDUMON_PRODUCT_TAG) {
      console.log(
        `[tsudumonStripeWebhook] skip type=${eventType} tag=${productTag || '(none)'}`
      );
      res.status(200).json({ received: true, skipped: 'not_tsudumon' });
      return;
    }

    try {
      const { Timestamp } = await import('firebase-admin/firestore');
      const graceMs = GRACE_DAYS * 24 * 60 * 60 * 1000;

      if (eventType === 'checkout.session.completed') {
        // Checkout Session は現行 API（2026-04-22.dahlia）でも `subscription` /
        // `customer` / `client_reference_id` がトップレベルのまま（実イベントで確認済み）。
        const subscriptionId = getString(obj.subscription);
        const info = await retrieveSubscriptionInfo(subscriptionId, secretKey);
        // uid は session.client_reference_id を優先し、無ければ subscription.metadata.uid。
        const uid =
          normalizeUid(getString(obj.client_reference_id)) ||
          (info ? info.uid : '');
        if (!uid) {
          console.error(
            '[tsudumonStripeWebhook] missing uid in checkout.session.completed'
          );
          res.status(200).json({ received: true, skipped: 'no_uid' });
          return;
        }
        const customerId =
          getString(obj.customer) || (info ? info.customerId : '');
        // 次回請求日は subscription の items[].current_period_end から取る
        // （現行 API ではトップレベルの current_period_end は存在しない）。
        const periodEndSec = info ? info.currentPeriodEnd : 0;
        // それでも取れないケース（retrieve 失敗など）は当面 30 日で暫定。
        // invoice.paid で正しい period_end に上書きされる。
        const expiresMs =
          (periodEndSec > 0
            ? periodEndSec * 1000
            : Date.now() + 30 * 24 * 60 * 60 * 1000) + graceMs;

        const db = await getDb();
        await db.doc(`users/${uid}`).set(
          {
            tsudumon: {
              plan: 'set',
              source: 'stripe',
              activatedAt: Timestamp.now(),
              expiresAt: Timestamp.fromMillis(expiresMs),
            },
            stripeTsudumon: {
              customerId: customerId || null,
              subscriptionId: subscriptionId || null,
            },
          },
          { mergeFields: ['tsudumon', 'stripeTsudumon'] }
        );

        try {
          const { logServerFunnelEvent } = await import('./funnelEvent');
          await logServerFunnelEvent('tsudumon_activated', uid, {
            source: 'stripe',
          });
        } catch (e) {
          console.error(
            '[tsudumonStripeWebhook] tsudumon_activated log failed:',
            e
          );
        }
        console.log(
          `[tsudumonStripeWebhook] checkout.session.completed uid=${uid}`
        );
        res.status(200).json({ received: true });
        return;
      }

      if (eventType === 'invoice.paid') {
        // Invoice の `subscription` は 2025-04-30.basil 以降廃止され
        // `parent.subscription_details.subscription` に移動している（実物確認済み）。
        // 抽出は stripeInvoiceFields に集約（旧形も後方互換で読む）。
        const subscriptionId = getInvoiceSubscriptionId(obj);
        const info = await retrieveSubscriptionInfo(subscriptionId, secretKey);
        // uid は subscription.metadata.uid が第一。retrieve に失敗しても
        // Invoice に載っている subscription metadata から拾えるようにする。
        const uid =
          (info && info.uid) ||
          normalizeUid(getString(getInvoiceSubscriptionMetadata(obj).uid));
        // 期末は subscription の items[].current_period_end を優先し、
        // 取れなければ請求書明細 lines.data[].period.end にフォールバックする。
        // （Invoice トップレベルの period_end は請求書自体の期間＝period_start と
        //  同値になるので使わない。）
        const periodEnd = resolvePeriodEnd(
          info ? info.currentPeriodEnd : 0,
          getInvoiceLinesPeriodEnd(obj)
        );
        if (!uid || periodEnd <= 0) {
          console.error(
            `[tsudumonStripeWebhook] invoice.paid unresolved sub=${subscriptionId || '(none)'} uid=${uid || '(none)'} periodEnd=${periodEnd}`
          );
          res.status(200).json({ received: true, skipped: 'no_subscription' });
          return;
        }
        const db = await getDb();
        const snap = await db.doc(`users/${uid}`).get();
        const raw = snap.exists
          ? (snap.data() as Record<string, unknown>).tsudumon
          : null;
        const cur =
          raw && typeof raw === 'object'
            ? (raw as Record<string, unknown>)
            : {};
        // stripe サブスクのユーザーだけ延長する（trial / コード有効化は触らない）。
        if (getString(cur.source) !== 'stripe') {
          res.status(200).json({ received: true, skipped: 'not_stripe' });
          return;
        }
        const expiresMs = periodEnd * 1000 + graceMs;
        // tsudumon はネストマージを避けて丸ごと書き直す。activatedAt は既存を温存。
        await db.doc(`users/${uid}`).set(
          {
            tsudumon: {
              plan: 'set',
              source: 'stripe',
              activatedAt: cur.activatedAt ?? Timestamp.now(),
              expiresAt: Timestamp.fromMillis(expiresMs),
            },
          },
          { mergeFields: ['tsudumon'] }
        );
        console.log(
          `[tsudumonStripeWebhook] invoice.paid uid=${uid} sub=${subscriptionId} periodEnd=${periodEnd} expiresAt=${new Date(expiresMs).toISOString()}`
        );
        res.status(200).json({ received: true });
        return;
      }

      if (eventType === 'customer.subscription.deleted') {
        // 即失効はさせない。expiresAt（+猶予）経過で自然失効に任せる。
        // Subscription の `id` / `customer` / `metadata` は現行 API でもトップレベル
        // のまま（実イベントで確認済み）。`current_period_end` だけが items 配下へ
        // 移動しているので、ログ用に取り出すときは getSubscriptionPeriodEnd を使う。
        console.log(
          `[tsudumonStripeWebhook] customer.subscription.deleted id=${getString(
            obj.id
          )} periodEnd=${getSubscriptionPeriodEnd(obj)} (natural expiry)`
        );
        res.status(200).json({ received: true });
        return;
      }

      res.status(200).json({ received: true, ignored: eventType });
    } catch (error) {
      console.error(
        `[tsudumonStripeWebhook] handling failed type=${eventType}:`,
        error
      );
      res.status(500).send('Webhook handling failed');
    }
  });

/**
 * Billing Portal（解約・カード変更）セッションを作る。
 * POST { idToken } → { ok:true, url } | { ok:false, reason:'no_subscription' }
 */
export const tsudumonCreatePortal = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    setCors(res);
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const secretKey = process.env.STRIPE_TSUDUMON_SECRET_KEY || '';
    if (!secretKey) {
      console.error('[tsudumonCreatePortal] Stripe env is not set');
      res.status(503).json({ ok: false, reason: 'not_configured' });
      return;
    }

    const { idToken } = req.body ?? {};
    if (typeof idToken !== 'string' || !idToken) {
      res.status(400).json({ error: 'idToken is required' });
      return;
    }

    try {
      const uid = await verifyLineUid(idToken, res);
      if (!uid) return;

      const db = await getDb();
      const snap = await db.doc(`users/${uid}`).get();
      const stripeTsudumon = snap.exists
        ? (snap.data() as Record<string, unknown>).stripeTsudumon
        : null;
      const customerId =
        stripeTsudumon && typeof stripeTsudumon === 'object'
          ? getString((stripeTsudumon as Record<string, unknown>).customerId)
          : '';
      if (!customerId) {
        res.status(200).json({ ok: false, reason: 'no_subscription' });
        return;
      }

      const params = new URLSearchParams();
      params.append('customer', customerId);
      params.append('return_url', 'https://www.chatstudy.jp/tsudumon/map/');

      const result = await stripePost(
        '/billing_portal/sessions',
        params,
        secretKey
      );
      const url = getString(result.data.url);
      if (!result.ok || !url) {
        console.error(
          '[tsudumonCreatePortal] Stripe portal creation failed',
          result.data
        );
        res.status(502).json({ ok: false, reason: 'stripe_error' });
        return;
      }
      res.status(200).json({ ok: true, url });
    } catch (error) {
      console.error('[tsudumonCreatePortal] failed:', error);
      res.status(500).json({ error: 'internal' });
    }
  });
