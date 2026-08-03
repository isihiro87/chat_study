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
  tsudumonTrialMaxDays,
} from './tsudumonCore';

/** サブスク期限に足す猶予（決済確定の遅延・失敗リトライ中の失効を防ぐ）。 */
const GRACE_DAYS = 3;
// 体験中に登録したときの trial_period_days のキャップは
// tsudumonCore.tsudumonTrialMaxDays に移した（キャンペーンで体験が延びると
// 固定3日では無料期間の途中で課金が始まるため）。

const STRIPE_API_BASE = 'https://api.stripe.com/v1';

/** 誰が支払ったか。保護者ペイリンク経由なら 'parent'。 */
export type TsudumonPaidBy = 'self' | 'parent';

export interface CheckoutParamsInput {
  /** 課金先。**必ず子（教材を使う本人）の uid**。保護者が払う場合も子の uid を入れる。 */
  uid: string;
  /** users/{uid}.tsudumon（体験中なら残日数を trial_period_days に渡すため） */
  tsudumonRaw: unknown;
  nowMs: number;
  priceId: string;
  paidBy: TsudumonPaidBy;
  successUrl: string;
  cancelUrl: string;
}

/**
 * Checkout Session の生成パラメータを組み立てる（純粋関数）。
 *
 * 本人が登録する経路（`tsudumonCreateCheckout`）と、保護者がペイリンクから登録する経路
 * （`tsudumonParentCheckout`）の**唯一の実装**。差分は「uid をどう手に入れたか」と
 * price / 戻り先 / paidBy だけなので、パラメータ生成を二重に持たない。
 *
 * `client_reference_id` と `subscription_data.metadata.uid` はどちらも**子の uid**。
 * これにより webhook（`checkout.session.completed` / `invoice.paid`）は無改修で通る。
 */
export function buildTsudumonCheckoutParams(
  input: CheckoutParamsInput
): URLSearchParams {
  const { uid, tsudumonRaw, nowMs, priceId, paidBy, successUrl, cancelUrl } =
    input;

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
  params.append('subscription_data[metadata][product]', TSUDUMON_PRODUCT_TAG);
  // 保護者経由の成約率を単独で追えるようにする。webhook が users に写す。
  params.append('metadata[paidBy]', paidBy);
  params.append('subscription_data[metadata][paidBy]', paidBy);
  params.append('success_url', successUrl);
  params.append('cancel_url', cancelUrl);
  params.append('locale', 'ja');
  params.append('allow_promotion_codes', 'true');

  const trialPeriodDays = resolveTrialPeriodDays(tsudumonRaw, nowMs);
  if (trialPeriodDays > 0) {
    params.append(
      'subscription_data[trial_period_days]',
      String(trialPeriodDays)
    );
  }
  // 改正特商法（2022-06 施行）の「特定申込みを受ける画面」の表示義務への対応。
  // Stripe Checkout が標準で出すのは金額と請求サイクルだけで、
  // 「自動更新であること」「引渡時期」「解約方法・違約金の有無」は出ない。
  // 表示が欠けると申込みの取消事由になりうるので、ここで補う。
  params.append(
    'custom_text[submit][message]',
    buildCheckoutNotice(trialPeriodDays)
  );
  return params;
}

/**
 * Checkout の申込みボタンの上に出す注意書き（改正特商法の最終確認画面対応）。
 *
 * **金額は書かない。** きょうだい価格（2人目以降 980円）があり、ここに数字を置くと
 * 価格表と二重管理になって食い違う。金額と請求サイクルは Stripe 自身が表示する。
 *
 * 上限は500文字（Stripe の custom_text の制限）。
 */
export function buildCheckoutNotice(trialPeriodDays: number): string {
  const tail =
    '決済が完了すると、すぐに中学歴史 全19単元のWeb教材（問題集・参考書）を' +
    'ご利用いただけます。解約は「アカウント・お支払い管理」ページから' +
    'いつでもお手続きいただけます。違約金はいただきません。';
  return trialPeriodDays > 0
    ? `無料体験の終了日から課金が始まり、以降は表示の金額で毎月自動更新されます。${tail}`
    : `お申し込み日を起算日として、表示の金額で毎月自動更新されます。${tail}`;
}

/**
 * 体験中の登録なら、体験終了までの残日数を返す（体験期間の二重取りを防ぐ）。
 * 体験中でなければ 0。
 */
export function resolveTrialPeriodDays(
  tsudumonRaw: unknown,
  nowMs: number
): number {
  const source = getString(
    tsudumonRaw && typeof tsudumonRaw === 'object'
      ? (tsudumonRaw as Record<string, unknown>).source
      : ''
  );
  if (source !== 'trial') return 0;
  if (evaluateTsudumonAccess(tsudumonRaw, null, nowMs) !== 'ok') return 0;
  const ent = readTsudumonEntitlement(tsudumonRaw);
  if (!ent || ent.expiresAtMs <= nowMs) return 0;
  const rawDays = Math.ceil((ent.expiresAtMs - nowMs) / (24 * 60 * 60 * 1000));
  // ⚠️ 固定の3日で丸めない。キャンペーンで体験が長いとき、ここで切ると
  // **無料期間の途中で課金が始まる**（8/15まで無料なのに3日後に請求）。
  return Math.min(tsudumonTrialMaxDays(nowMs), Math.max(1, rawDays));
}

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
      const selfData = snap.exists
        ? (snap.data() as Record<string, unknown>)
        : {};

      // ⚠️ 保護者が**自分のアカウント**に課金してしまう事故を防ぐ（2026-08-02）。
      // この関数はログインした本人の uid に課金する。保護者がLPの
      // 「月額プランに登録」を自分のLINEで踏むと、保護者に課金され、
      // **お子さまの教材は一切開かない**。しかも本人は気づけない
      // （決済は成功し、Stripeの領収書も届く）。
      // 連携ずみの保護者はここで止めて、正しい入口（ダッシュボード）へ送る。
      // users/{uid} は下でも読むので **追加の read はゼロ**。
      if (selfData.tsudumonRole === 'parent') {
        res.status(200).json({
          ok: false,
          reason: 'is_parent',
          message:
            'こちらは、お子さまご本人がご自身のアカウントに登録するためのページです。保護者の方は「学習の記録」のページから、お子さまを選んでご登録ください。',
          url: 'https://tsudumon.jp/parents/dashboard/',
        });
        return;
      }

      const raw = selfData.tsudumon;
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
      const params = buildTsudumonCheckoutParams({
        uid,
        tsudumonRaw: raw,
        nowMs,
        priceId,
        paidBy: 'self',
        successUrl: 'https://tsudumon.jp/map/?sub=thanks',
        cancelUrl: 'https://tsudumon.jp/',
      });
      const trialPeriodDays = resolveTrialPeriodDays(raw, nowMs);

      const result = await stripePost('/checkout/sessions', params, secretKey);
      const url = getString(result.data.url);
      if (!result.ok || !url) {
        console.error(
          '[tsudumonCreateCheckout] Stripe session creation failed',
          result.data
        );
        res.status(502).json({
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

/** Session / Subscription の metadata から paidBy を読む（無ければ空文字＝本人扱い）。 */
function readPaidBy(obj: Record<string, unknown>): string {
  const metadata = obj.metadata;
  if (metadata && typeof metadata === 'object') {
    return getString((metadata as Record<string, unknown>).paidBy);
  }
  return '';
}

function normalizeUid(value: string): string {
  if (!value) return '';
  return value.startsWith('line:') ? value : `line:${value}`;
}

/** 次回請求日の表示用ラベル（JST）。取れないときは null。 */
function billingLabel(periodEndMs: number): string | null {
  if (!periodEndMs || !Number.isFinite(periodEndMs)) return null;
  const jst = new Date(periodEndMs + 9 * 60 * 60 * 1000);
  return `${jst.getUTCMonth() + 1}月${jst.getUTCDate()}日`;
}

/**
 * 決済完了の御礼を、つづもんBotから1通だけ push する。
 *
 * 決済直後に何の確認も返らないと「ちゃんと払えたのか」が分からない
 * （Checkout の戻り先は /map/?sub=thanks だが、LINEには何も残らない）。
 * 購入時のみ・つづもん枠の1通なので配信枠への影響は小さい。
 * 失敗しても課金処理は成功扱いにする（ログのみ）。
 *
 * @param periodEndMs 次回請求日（猶予を足す前の current_period_end 相当）。0 なら日付を出さない。
 */
async function pushPurchaseThanks(
  uid: string,
  periodEndMs: number,
  paidBy: TsudumonPaidBy = 'self'
): Promise<void> {
  // ⚠️ 保護者が払ったときは、**お子さまに支払い・解約の話をしない**（2026-08-02）。
  // 解約できるのは払った本人（保護者）で、/account/ はお子さま本人用のページ。
  // ここで案内すると、子が触れてはいけない場所（保護者のカード情報・請求履歴）へ誘導する。
  const byParent = paidBy === 'parent';
  const nextBilling = billingLabel(periodEndMs);
  const text = [
    'ご登録ありがとうございます！🎉',
    '',
    '中学歴史ぜんぶ（全19単元・問題集＋参考書）が使えるようになりました。',
    'https://tsudumon.jp/map/',
    '',
    'あすから毎日、「今日の1単元」をこのトークにお届けします（はじめは平日 夜7時ごろ・土日 朝10時ごろ）。',
    '届く曜日・時刻は、あとから https://tsudumon.jp/settings/ で変えられます。',
    '',
    ...(byParent
      ? ['おうちの人が手続きしてくれました。ありがとうを伝えてね。']
      : [
          nextBilling
            ? `次回のお支払いは ${nextBilling} です（月額1,280円・税込）。`
            : '月額1,280円（税込）で自動更新されます。',
          'お支払い状況の確認と解約は、こちらのページからいつでもどうぞ。',
          'https://tsudumon.jp/account/',
        ]),
    '',
    'わからないところは、このトークでつづ先生に聞いてくださいね。',
  ].join('\n');

  await pushToTsudumon(uid, text, 'tsudumonPurchase', 'purchase thanks');

  // 「あすから毎日…」で終わらせない。いちばん熱があるのは**いまこの瞬間**なので、
  // その場で学習に入れるところまでつなぐ（ユーザー要望 2026-07-27）。
  // 聞くのは学年だけ＝**1タップで完了**（ユーザー指摘 2026-08-02）。
  try {
    const { buildStep1Flex, buildStep1Message, step1QuickReply } =
      await import('./tsudumonOnboarding');
    await pushToTsudumon(
      uid,
      buildStep1Message(),
      'tsudumonPurchase',
      'onboarding step1',
      step1QuickReply(),
      buildStep1Flex()
    );
  } catch (error) {
    console.error('[tsudumonStripe] onboarding push failed:', error);
  }
}

/**
 * つづもんBotへの1通 push（共通）。失敗しても課金処理は成功扱いにする。
 * `deliveryStats` への計上もここでまとめて行う。
 */
async function pushToTsudumon(
  uid: string,
  text: string,
  pushType: 'tsudumonPurchase' | 'tsudumonBilling',
  label: string,
  /** クイックリプライ（オンボーディングの選択肢など） */
  quickReply?: unknown,
  /**
   * Flex カードで送るときの中身。指定すると `text` は使わず**カードだけ**を送る
   * （`text` は Flex が 400 で落ちたときのフォールバックに回る）。
   */
  flex?: Record<string, unknown>
): Promise<void> {
  const lineUserId = uid.startsWith('line:') ? uid.slice(5) : '';
  if (!lineUserId) return;
  try {
    const { getTsudumonLineClient } = await import('./tsudumon/client');
    const client = await getTsudumonLineClient();
    const message = flex
      ? flex
      : { type: 'text', text, ...(quickReply ? { quickReply } : {}) };
    try {
      await client.pushMessage({
        to: lineUserId,
        messages: [message],
      } as never);
    } catch (flexError) {
      // Flex は構造が1か所でも不正だと丸ごと 400 になる。登録直後の1通目が
      // 消えると「買ったのに何も来ない」になるので、テキストで配り直す。
      if (!flex) throw flexError;
      console.error(
        `[tsudumonStripeWebhook] ${label} flex push failed; falling back to text:`,
        flexError
      );
      await client.pushMessage({
        to: lineUserId,
        messages: [
          { type: 'text', text, ...(quickReply ? { quickReply } : {}) },
        ],
      } as never);
    }
    const { recordPushDelivery } = await import('./deliveryStats');
    await recordPushDelivery(pushType);
  } catch (error) {
    console.error(`[tsudumonStripeWebhook] ${label} push failed:`, error);
  }
}

/**
 * 支払い関係の連絡を、**払った人に届ける**（2026-08-02 追加）。
 *
 * 保護者ペイリンクで払われた場合、カードを直せるのは保護者だけ。子にだけ送っても
 * 誰も直せず、黙って失効する（設計 C-4 の「放置＝黙って失効が最悪」が達成できない）。
 *
 * `users/{childUid}.tsudumonParents` の 1 read だけで宛先が分かる（read 規律）。
 * 連携していない保護者には届かないので、その場合は Stripe の督促メールが頼り。
 */
async function pushToLinkedParents(
  childUid: string,
  text: string,
  label: string
): Promise<void> {
  try {
    const db = await getDb();
    const snap = await db.doc(`users/${childUid}`).get();
    if (!snap.exists) return;
    const { readLinkedParents } = await import('./tsudumonParentCore');
    const parents = readLinkedParents(snap.data());
    for (const p of parents) {
      await pushToTsudumon(p.uid, text, 'tsudumonBilling', label);
    }
  } catch (e) {
    console.error(`[tsudumonStripe] ${label} to parents failed:`, e);
  }
}

/** その契約を保護者が払っているか（users/{uid}.tsudumon.paidBy）。 */
async function isPaidByParent(uid: string): Promise<boolean> {
  try {
    const db = await getDb();
    const snap = await db.doc(`users/${uid}`).get();
    if (!snap.exists) return false;
    const raw = (snap.data() as Record<string, unknown>).tsudumon;
    return (
      !!raw &&
      typeof raw === 'object' &&
      getString((raw as Record<string, unknown>).paidBy) === 'parent'
    );
  } catch {
    return false;
  }
}

/** C-4: 決済失敗の案内。責めず、直し方（カード変更）だけを短く伝える。 */
async function pushBillingFailed(uid: string): Promise<void> {
  const byParent = await isPaidByParent(uid);

  if (byParent) {
    // 子には「使えなくなるかも」だけ。カードの話をしても直せない。
    await pushToTsudumon(
      uid,
      [
        'つづもんのお支払いが確認できませんでした。',
        '',
        'おうちの人に、つづもんからお知らせが届いています。手続きが終われば、そのまま続けて使えます。',
      ].join('\n'),
      'tsudumonBilling',
      'billing failed (child)'
    );
    await pushToLinkedParents(
      uid,
      [
        'つづもんの月額プランのお支払いが確認できませんでした。',
        '',
        'カードの有効期限切れや上限などが考えられます。お手数ですが、下のページからお支払い方法をご確認ください。',
        'https://tsudumon.jp/parents/dashboard/',
        '',
        'お手続きいただければ、そのまま続けてご利用いただけます。',
      ].join('\n'),
      'billing failed (parent)'
    );
    return;
  }

  const text = [
    'つづもんの月額プランのお支払いが確認できませんでした。',
    '',
    'カードの有効期限切れや上限などが考えられます。お手数ですが、下のページからお支払い方法をご確認ください。',
    'https://tsudumon.jp/account/',
    '',
    'お手続きいただければ、そのまま続けてご利用いただけます。ご不明な点はこのトークにお送りください。',
  ].join('\n');
  await pushToTsudumon(uid, text, 'tsudumonBilling', 'billing failed');
}

/** C-5: 解約の受付。引き止めず、いつまで使えるかだけを伝える。 */
async function pushCancelAccepted(
  uid: string,
  periodEndMs: number
): Promise<void> {
  const until = billingLabel(periodEndMs);
  const byParent = await isPaidByParent(uid);
  const common = [
    'つづもんの月額プランの解約を承りました。ご利用ありがとうございました。',
    '',
    until
      ? `${until}まではこれまでどおりお使いいただけます。`
      : 'お支払い済みの期間の終了日まではこれまでどおりお使いいただけます。',
    'そのあとも「律令国家と奈良時代」の単元と、各単元の最初のページは無料でお読みいただけます。',
    '',
    'またお使いになりたくなったら、いつでも再開できます。',
  ];
  // 再開の入口は「払える人」に合わせる。保護者が払っているのに子へ /account/ を
  // 案内しても、そこからは操作できない（tsudumonCreatePortal が paidBy で断る）。
  await pushToTsudumon(
    uid,
    common
      .concat(
        byParent
          ? ['おうちの人にお願いしてね。']
          : ['https://tsudumon.jp/account/']
      )
      .join('\n'),
    'tsudumonBilling',
    'cancel accepted'
  );
  if (byParent) {
    await pushToLinkedParents(
      uid,
      common.concat(['https://tsudumon.jp/parents/dashboard/']).join('\n'),
      'cancel accepted (parent)'
    );
  }
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

        // 誰が払ったか（本人 / 保護者ペイリンク）。Checkout 生成時に metadata へ載せている。
        // 保護者経由の成約率を単独で追うために users にも写す。
        const paidBy: TsudumonPaidBy =
          readPaidBy(obj) === 'parent' ? 'parent' : 'self';

        const db = await getDb();
        await db.doc(`users/${uid}`).set(
          {
            tsudumon: {
              plan: 'set',
              source: 'stripe',
              paidBy,
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
            paidBy,
          });
        } catch (e) {
          console.error(
            '[tsudumonStripeWebhook] tsudumon_activated log failed:',
            e
          );
        }
        // 決済の直後に何も返らないと「払えたのか」が分からない。つづもんBotから
        // 完了の1通だけ push する（購入時のみ・つづもん枠。失敗しても課金処理は成功扱い）。
        await pushPurchaseThanks(uid, expiresMs - graceMs, paidBy);
        // 「今日の1単元」日次配信の対象に加える（解約→再登録なら cursor は続きから）。
        try {
          const { ensureTsudumonDaily } = await import('./tsudumonDailyUnit');
          await ensureTsudumonDaily(uid);
        } catch (e) {
          console.error(
            '[tsudumonStripeWebhook] ensureTsudumonDaily failed:',
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
        // paidBy も**必ず引き継ぐ**（丸ごと置き換えなので、書かないと継続課金のたびに消える）。
        await db.doc(`users/${uid}`).set(
          {
            tsudumon: {
              plan: 'set',
              source: 'stripe',
              paidBy: getString(cur.paidBy) || 'self',
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

      // C-4: 決済失敗。放置すると本人も気づかないまま失効するので必ず知らせる。
      //      期限（expiresAt）はここでは動かさない（Stripeのリトライで復帰しうるため）。
      if (eventType === 'invoice.payment_failed') {
        const subscriptionId = getInvoiceSubscriptionId(obj);
        const info = await retrieveSubscriptionInfo(subscriptionId, secretKey);
        const uid =
          (info && info.uid) ||
          normalizeUid(getString(getInvoiceSubscriptionMetadata(obj).uid));
        if (!uid) {
          console.error(
            '[tsudumonStripeWebhook] invoice.payment_failed: uid unresolved'
          );
          res.status(200).json({ received: true, skipped: 'no_uid' });
          return;
        }
        console.warn(
          `[tsudumonStripeWebhook] invoice.payment_failed uid=${uid}`
        );
        await pushBillingFailed(uid);
        res.status(200).json({ received: true });
        return;
      }

      if (eventType === 'customer.subscription.deleted') {
        // 即失効はさせない。expiresAt（+猶予）経過で自然失効に任せる。
        // Subscription の `id` / `customer` / `metadata` は現行 API でもトップレベル
        // のまま（実イベントで確認済み）。`current_period_end` だけが items 配下へ
        // 移動しているので、ログ用に取り出すときは getSubscriptionPeriodEnd を使う。
        const periodEndSec = getSubscriptionPeriodEnd(obj);
        const uid = normalizeUid(getMetadataUid(obj));
        console.log(
          `[tsudumonStripeWebhook] customer.subscription.deleted id=${getString(
            obj.id
          )} periodEnd=${periodEndSec} (natural expiry)`
        );
        if (uid && periodEndSec > 0) {
          const usableUntilMs = periodEndSec * 1000 + graceMs;
          // C-5: 解約を受け付けた事実と「いつまで使えるか」をその場で伝える。
          await pushCancelAccepted(uid, periodEndSec * 1000);
          // C-6: 期限の翌日に1通だけフォローする予約を入れる。
          try {
            const { scheduleAfterExpiryFollowUp } =
              await import('./tsudumonLifecycle');
            await scheduleAfterExpiryFollowUp(uid, usableUntilMs);
          } catch (e) {
            console.error(
              '[tsudumonStripeWebhook] scheduleAfterExpiryFollowUp failed:',
              e
            );
          }
          // 日次配信は期限まで続け、失効時に cron 側が自動で止める
          // （ここで止めると、支払い済みの残り期間に届かなくなる）。
        }
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
      const userData = snap.exists
        ? (snap.data() as Record<string, unknown>)
        : {};

      // ⚠️ 保護者が払った契約を、お子さま本人に触らせない（2026-08-02）。
      // customerId は「誰が払ったか」に関わらず**お子さまのuid**に書かれるため、
      // ここを素通しすると Billing Portal が開き、**保護者のカード下4桁・請求先メール・
      // 請求履歴が子に見え、解約もできてしまう**。paidBy は webhook が保存している。
      const tsudumonRaw = userData.tsudumon;
      const paidBy =
        tsudumonRaw && typeof tsudumonRaw === 'object'
          ? getString((tsudumonRaw as Record<string, unknown>).paidBy)
          : '';
      if (paidBy === 'parent') {
        res.status(200).json({
          ok: false,
          reason: 'paid_by_parent',
          message:
            'このお支払いは、おうちの人の画面から手続きされています。お支払いの確認や解約は、おうちの人にお願いしてください。',
        });
        return;
      }

      const stripeTsudumon = userData.stripeTsudumon;
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
      params.append('return_url', 'https://tsudumon.jp/map/');

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
