/**
 * Stripe webhook の「商品タグ振り分け」検証ワンショット。
 *
 * 目的: プレミアム（`stripeWebhook`）と つづもん（`tsudumonStripeWebhook`）は同一 Stripe
 * アカウントに相乗りしているため、同じイベントが両エンドポイントに配信される。
 * `metadata.product = 'tsudumon'` タグによる振り分け（functions/src/stripeProductTag.ts）が
 * 実際にデプロイ済み関数で効いているかを、**署名付きの疑似イベントを自分で POST** して確認する。
 *
 * 実行するパターン（uid は `line:TESTGUARD0*` の使い捨てのみ）:
 *   1. tsudumonStripeWebhook ← タグ有り checkout.session.completed → 処理される
 *   2. tsudumonStripeWebhook ← タグ無し invoice.paid（プレミアム模擬） → skipped:not_tsudumon
 *   3. stripeWebhook         ← タグ有り checkout.session.completed → skipped:tsudumon
 *   ※ パターン4「stripeWebhook ← タグ無し」は**実行しない**。本番のプレミアム処理
 *     （markPaid / LINE push / Firestore 書き込み）が実際に走ってしまうため。
 *     既存挙動の担保はコードレビューとユニットテストで行う。
 *
 * 継続課金（invoice.paid）の期限延長 検証（2026-07-25 追加。`--renewal` で単独実行可）:
 *   A. 実 Subscription を Stripe API から retrieve し、`getSubscriptionPeriodEnd` が
 *      現行形（`items.data[].current_period_end`）から次回請求日を取れることを実測。
 *   B. **Stripe テストモードの本物の `invoice.paid` イベント JSON** を取得し、uid を
 *      `line:TESTGUARD010` に、商品タグを `tsudumon` に差し替えて署名付き POST。
 *      `users/line:TESTGUARD010.tsudumon.expiresAt` が period_end + 3日 へ延長されるか確認。
 *   C. 同じイベントから商品タグだけ外して POST → `skipped:not_tsudumon`（デグレ防止）。
 *   D. **実在する Subscription id** を載せた `checkout.session.completed` を POST し、
 *      デプロイ済み関数が retrieve → `items[].current_period_end` を使って expiresAt を
 *      書くことを確認（uid は client_reference_id 優先なので書き込み先は TESTGUARD のまま）。
 *
 * 安全ガード:
 *   - Firestore の読み書き（確認と後片付け）は doc id が `line:TESTGUARD` で始まるものだけ。
 *     それ以外は例外を投げて中断する。
 *   - `invoice.paid`（B/C）で POST するイベントの subscription id は**実在しない id に
 *     差し替える**。実 id のままだと webhook が Stripe から取得した `metadata.uid`
 *     （= 別のテスト uid）へ書きに行き、TESTGUARD 以外のドキュメントに触れてしまうため。
 *     実 Subscription を経由する経路は、uid が client_reference_id で決まる D で検証する。
 *   - Stripe API は **GET（既存テストデータの参照）のみ**。商品・価格・サブスク・webhook
 *     エンドポイントを新規作成しない。
 *
 * 実行:
 *   gcloud auth application-default login 済みで
 *   npx tsx scripts/_test-stripe-webhook-routing.ts            # 全部
 *   npx tsx scripts/_test-stripe-webhook-routing.ts --renewal  # A〜D だけ
 */
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';

import type * as StripeInvoiceFields from '../functions/src/stripeInvoiceFields';

// functions/ 配下は CJS ビルド設定なので、ESM のこのスクリプトからは名前付き import が
// 解決できない。動的 import + default interop で読み込む（実装は本番と同一モジュール）。
const fieldsModule =
  (await import('../functions/src/stripeInvoiceFields')) as typeof StripeInvoiceFields & {
    default?: typeof StripeInvoiceFields;
  };
const {
  getInvoiceLinesPeriodEnd,
  getInvoiceSubscriptionId,
  getSubscriptionPeriodEnd,
} = fieldsModule.default ?? fieldsModule;

const PROJECT_ID = 'chatstudy-63477';
const BASE = `https://asia-northeast1-${PROJECT_ID}.cloudfunctions.net`;
const TSUDUMON_URL = `${BASE}/tsudumonStripeWebhook`;
const PREMIUM_URL = `${BASE}/stripeWebhook`;

/** これで始まる doc 以外には絶対に触らない。 */
const TEST_UID_PREFIX = 'line:TESTGUARD';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ENV_PATH = path.join(__dirname, '..', 'functions', '.env');

function loadEnv(): Record<string, string> {
  const raw = fs.readFileSync(ENV_PATH, 'utf8');
  const out: Record<string, string> = {};
  for (const line of raw.split(/\r?\n/)) {
    const m = /^([A-Z0-9_]+)=(.*)$/.exec(line.trim());
    if (m) out[m[1]] = m[2];
  }
  return out;
}

/** Stripe-Signature ヘッダを作る（webhook 側の検証と同じ HMAC-SHA256 方式・許容ずれ5分）。 */
function signPayload(payload: string, secret: string): string {
  const t = Math.floor(Date.now() / 1000);
  const v1 = crypto
    .createHmac('sha256', secret)
    .update(`${t}.${payload}`)
    .digest('hex');
  return `t=${t},v1=${v1}`;
}

async function postEvent(
  url: string,
  event: unknown,
  secret: string
): Promise<{ status: number; body: string }> {
  const payload = JSON.stringify(event);
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Stripe-Signature': signPayload(payload, secret),
    },
    body: payload,
  });
  return { status: res.status, body: (await res.text()).trim() };
}

function assertTestUid(uid: string) {
  if (!uid.startsWith(TEST_UID_PREFIX)) {
    throw new Error(`SAFETY GUARD: refusing to touch uid=${uid}`);
  }
}

// ---- 疑似イベント（実データの形に合わせる） ----

/** つづもん Checkout Session（タグ有り）。 */
function tsudumonCheckoutEvent(uid: string) {
  return {
    id: `evt_testguard_${Date.now()}`,
    object: 'event',
    type: 'checkout.session.completed',
    data: {
      object: {
        id: 'cs_test_TESTGUARD',
        object: 'checkout.session',
        mode: 'subscription',
        payment_status: 'paid',
        client_reference_id: uid,
        customer: 'cus_TESTGUARD',
        subscription: 'sub_TESTGUARD_NOT_REAL',
        metadata: { uid, product: 'tsudumon' },
      },
    },
  };
}

/**
 * プレミアムの継続課金を模した invoice.paid（タグ無し）。
 * 形は本アカウント現行 API（parent.subscription_details.metadata）に合わせる。
 */
function premiumInvoiceEvent(uid: string) {
  return {
    id: `evt_testguard_${Date.now()}`,
    object: 'event',
    type: 'invoice.paid',
    data: {
      object: {
        id: 'in_TESTGUARD',
        object: 'invoice',
        customer: 'cus_TESTGUARD',
        metadata: {},
        parent: {
          type: 'subscription_details',
          quote_details: null,
          subscription_details: {
            subscription: 'sub_TESTGUARD_NOT_REAL',
            metadata: { uid, lineUserId: uid.slice('line:'.length) },
          },
        },
        lines: {
          data: [{ id: 'il_TESTGUARD', metadata: { uid } }],
        },
      },
    },
  };
}

// ---- 継続課金（invoice.paid）検証用ヘルパー ----

const GRACE_MS = 3 * 24 * 60 * 60 * 1000;
/** 実在しない subscription id。webhook が実データの uid へ書きに行かないようにする。 */
const FAKE_SUB_ID = 'sub_TESTGUARD_NOT_REAL';

type Json = Record<string, unknown>;

function asRecord(value: unknown): Json | null {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
    ? (value as Json)
    : null;
}

/** Stripe API を GET する（参照のみ）。 */
async function stripeGet(path: string, secretKey: string): Promise<Json> {
  const res = await fetch(`https://api.stripe.com/v1${path}`, {
    headers: { Authorization: `Bearer ${secretKey}` },
  });
  const json = (await res.json()) as Json;
  if (!res.ok) {
    throw new Error(
      `Stripe GET ${path} failed: ${res.status} ${JSON.stringify(json)}`
    );
  }
  return json;
}

/** 直近の本物の `invoice.paid` イベントを1件取ってくる。 */
async function fetchRealInvoicePaidEvent(secretKey: string): Promise<Json> {
  const list = await stripeGet('/events?type=invoice.paid&limit=1', secretKey);
  const data = Array.isArray(list.data) ? list.data : [];
  const event = asRecord(data[0]);
  if (!event) throw new Error('invoice.paid の実イベントが見つからない');
  return event;
}

/**
 * 実イベントの Invoice を検証用に加工する。
 *  - subscription id → 実在しない id（実データへの波及を断つ）
 *  - metadata.uid → TESTGUARD uid
 *  - metadata.product → 付ける / 付けない（タグ振り分けの検証用）
 * 期末（lines[].period.end）は**実データのまま**にして、そこから延長されるかを見る。
 */
function buildInvoicePaidEvent(
  realEvent: Json,
  uid: string,
  withTag: boolean
): { event: Json; periodEnd: number } {
  const clone = JSON.parse(JSON.stringify(realEvent)) as Json;
  const dataNode = asRecord(clone.data);
  const invoice = dataNode ? asRecord(dataNode.object) : null;
  if (!invoice) throw new Error('event.data.object が読めない');

  const metadata: Json = { uid };
  if (withTag) metadata.product = 'tsudumon';

  const parent = asRecord(invoice.parent);
  const details = parent ? asRecord(parent.subscription_details) : null;
  if (!details)
    throw new Error(
      'parent.subscription_details が無い（実データの形が想定外）'
    );
  details.subscription = FAKE_SUB_ID;
  details.metadata = metadata;

  // 明細側の uid / subscription も同様に差し替える（フォールバック経路の汚染防止）。
  const lines = asRecord(invoice.lines);
  const lineData = lines && Array.isArray(lines.data) ? lines.data : [];
  for (const line of lineData) {
    const record = asRecord(line);
    if (!record) continue;
    record.metadata = { ...metadata };
    const lineParent = asRecord(record.parent);
    const itemDetails = lineParent
      ? asRecord(lineParent.subscription_item_details)
      : null;
    if (itemDetails) itemDetails.subscription = FAKE_SUB_ID;
  }

  invoice.customer = 'cus_TESTGUARD';
  clone.id = `evt_testguard_${Date.now()}`;

  return { event: clone, periodEnd: getInvoiceLinesPeriodEnd(invoice) };
}

function iso(ms: number): string {
  return new Date(ms).toISOString();
}

/** users/{uid}.tsudumon.expiresAt を ms で読む（TESTGUARD 限定）。 */
async function readExpiresAtMs(uid: string): Promise<number | null> {
  const data = await readTestDoc(uid);
  const tsudumon = data ? asRecord(data.tsudumon) : null;
  const expiresAt = tsudumon ? tsudumon.expiresAt : null;
  if (expiresAt instanceof Timestamp) return expiresAt.toMillis();
  return null;
}

/** 検証 A〜C。 */
async function runRenewalChecks(
  secretKey: string,
  tsudumonSecret: string,
  uidPaid: string,
  uidNoTag: string,
  uidCheckout: string
) {
  console.log(
    '\n=== 検証A: 実 Subscription から次回請求日が取れるか（Stripe API GET のみ） ==='
  );
  const realEvent = await fetchRealInvoicePaidEvent(secretKey);
  const realInvoice = asRecord(asRecord(realEvent.data)?.object) ?? {};
  const realSubId = getInvoiceSubscriptionId(realInvoice);
  console.log(
    '  実イベント:',
    String(realEvent.id),
    'api_version=',
    String(realEvent.api_version)
  );
  console.log(
    '  invoice.subscription（旧形の参照先）:',
    JSON.stringify(realInvoice.subscription)
  );
  console.log('  getInvoiceSubscriptionId():', realSubId || '(取れず)');
  if (realSubId) {
    const sub = await stripeGet(`/subscriptions/${realSubId}`, secretKey);
    const top = sub.current_period_end;
    const resolved = getSubscriptionPeriodEnd(sub);
    console.log(
      '  subscription.current_period_end（トップレベル）:',
      JSON.stringify(top)
    );
    console.log(
      '  getSubscriptionPeriodEnd():',
      resolved,
      resolved > 0 ? `(${iso(resolved * 1000)})` : ''
    );
    console.log(
      '  期待: トップレベルは undefined、items 由来で >0 →',
      top === undefined && resolved > 0 ? 'OK' : 'NG'
    );
  }
  const invoiceLinesEnd = getInvoiceLinesPeriodEnd(realInvoice);
  console.log(
    '  invoice.lines[].period.end（フォールバック）:',
    invoiceLinesEnd,
    invoiceLinesEnd > 0 ? `(${iso(invoiceLinesEnd * 1000)})` : ''
  );
  console.log(
    '  invoice トップレベル period_start/period_end:',
    realInvoice.period_start,
    '/',
    realInvoice.period_end,
    '→ 同値なので期限延長には使えない'
  );

  console.log(
    '\n=== 検証B: タグ有り invoice.paid で expiresAt が延長されるか ==='
  );
  assertTestUid(uidPaid);
  const db = getFirestore();
  const beforeMs = Date.now() + 2 * 24 * 60 * 60 * 1000; // 近い将来（2日後）
  await db.doc(`users/${uidPaid}`).set(
    {
      tsudumon: {
        plan: 'set',
        source: 'stripe',
        activatedAt: Timestamp.now(),
        expiresAt: Timestamp.fromMillis(beforeMs),
      },
    },
    { mergeFields: ['tsudumon'] }
  );
  console.log(`  事前 users/${uidPaid}.tsudumon.expiresAt = ${iso(beforeMs)}`);

  const { event, periodEnd } = buildInvoicePaidEvent(realEvent, uidPaid, true);
  const expectedMs = periodEnd * 1000 + GRACE_MS;
  console.log(
    `  POST するイベントの period_end = ${periodEnd} (${iso(periodEnd * 1000)})`
  );
  const rb = await postEvent(TSUDUMON_URL, event, tsudumonSecret);
  console.log('  response:', rb.status, rb.body);
  const afterMs = await readExpiresAtMs(uidPaid);
  console.log(`  事後 expiresAt = ${afterMs ? iso(afterMs) : '(取れず)'}`);
  console.log(`  期待 expiresAt = ${iso(expectedMs)}（period_end + 猶予3日）`);
  console.log(
    '  判定:',
    afterMs === expectedMs && afterMs !== beforeMs
      ? 'OK 延長された'
      : 'NG 延長されていない'
  );

  console.log(
    '\n=== 検証C: タグ無し invoice.paid は従来どおり弾かれるか（デグレ防止） ==='
  );
  assertTestUid(uidNoTag);
  const noTagBeforeMs = Date.now() + 2 * 24 * 60 * 60 * 1000;
  await db.doc(`users/${uidNoTag}`).set(
    {
      tsudumon: {
        plan: 'set',
        source: 'stripe',
        activatedAt: Timestamp.now(),
        expiresAt: Timestamp.fromMillis(noTagBeforeMs),
      },
    },
    { mergeFields: ['tsudumon'] }
  );
  const noTag = buildInvoicePaidEvent(realEvent, uidNoTag, false);
  const rc = await postEvent(TSUDUMON_URL, noTag.event, tsudumonSecret);
  console.log('  response:', rc.status, rc.body);
  const noTagAfterMs = await readExpiresAtMs(uidNoTag);
  console.log(
    `  事前 expiresAt = ${iso(noTagBeforeMs)} / 事後 = ${noTagAfterMs ? iso(noTagAfterMs) : '(取れず)'}`
  );
  console.log(
    '  期待: skipped:not_tsudumon かつ expiresAt 不変 →',
    rc.body.includes('not_tsudumon') && noTagAfterMs === noTagBeforeMs
      ? 'OK'
      : 'NG'
  );

  // B は subscription id を実在しない値にしているため、期末は明細フォールバック由来。
  // 「デプロイ済み関数が **実 Subscription を retrieve して items[].current_period_end を
  // 読む**」経路は、uid が client_reference_id 優先で決まる checkout.session.completed で
  // 検証する（＝実サブスクを参照しても書き込み先は TESTGUARD のまま）。
  console.log(
    '\n=== 検証D: 実 Subscription を retrieve する経路（checkout.session.completed） ==='
  );
  assertTestUid(uidCheckout);
  const realSubPeriodEnd = realSubId
    ? getSubscriptionPeriodEnd(
        await stripeGet(`/subscriptions/${realSubId}`, secretKey)
      )
    : 0;
  const checkoutEvent = {
    id: `evt_testguard_${Date.now()}`,
    object: 'event',
    type: 'checkout.session.completed',
    data: {
      object: {
        id: 'cs_test_TESTGUARD_REALSUB',
        object: 'checkout.session',
        mode: 'subscription',
        payment_status: 'paid',
        // client_reference_id が uid の第一優先＝書き込み先は必ず TESTGUARD。
        client_reference_id: uidCheckout,
        customer: 'cus_TESTGUARD',
        subscription: realSubId,
        metadata: { uid: uidCheckout, product: 'tsudumon' },
      },
    },
  };
  const rd = await postEvent(TSUDUMON_URL, checkoutEvent, tsudumonSecret);
  console.log('  response:', rd.status, rd.body);
  const checkoutAfterMs = await readExpiresAtMs(uidCheckout);
  const expectedCheckoutMs = realSubPeriodEnd * 1000 + GRACE_MS;
  console.log(
    `  事後 expiresAt = ${checkoutAfterMs ? iso(checkoutAfterMs) : '(取れず)'}`
  );
  console.log(
    `  期待 expiresAt = ${iso(expectedCheckoutMs)}（実 subscription の items[].current_period_end + 3日）`
  );
  console.log(
    '  判定:',
    checkoutAfterMs === expectedCheckoutMs
      ? 'OK 実サブスクの期末が使われた'
      : 'NG 30日フォールバックのまま'
  );
}

async function readTestDoc(uid: string) {
  assertTestUid(uid);
  const db = getFirestore();
  const snap = await db.doc(`users/${uid}`).get();
  return snap.exists ? (snap.data() as Record<string, unknown>) : null;
}

async function deleteTestDoc(uid: string) {
  assertTestUid(uid);
  const db = getFirestore();
  await db.doc(`users/${uid}`).delete();
}

/** premiumFunnelEvents に残る TESTGUARD 由来のログを消す（uid 完全一致 + limit）。 */
async function deleteTestFunnelEvents(uid: string) {
  assertTestUid(uid);
  const db = getFirestore();
  const snap = await db
    .collection('premiumFunnelEvents')
    .where('uid', '==', uid)
    .limit(10)
    .get();
  if (snap.empty) {
    console.log(`  premiumFunnelEvents(${uid}): 無し`);
    return;
  }
  for (const doc of snap.docs) {
    const docUid = String((doc.data() as Record<string, unknown>).uid ?? '');
    assertTestUid(docUid);
    await doc.ref.delete();
  }
  console.log(`  premiumFunnelEvents(${uid}): ${snap.size} 件削除 → OK`);
}

async function main() {
  const env = loadEnv();
  const tsudumonSecret = env.STRIPE_TSUDUMON_WEBHOOK_SECRET || '';
  const premiumSecret = env.STRIPE_WEBHOOK_SECRET || '';
  const stripeKey = env.STRIPE_TSUDUMON_SECRET_KEY || '';
  if (!tsudumonSecret || !premiumSecret || !stripeKey) {
    throw new Error('stripe secret(s) missing in functions/.env');
  }

  initializeApp({ credential: applicationDefault(), projectId: PROJECT_ID });

  const renewalOnly = process.argv.includes('--renewal');

  const uid1 = 'line:TESTGUARD001';
  const uid2 = 'line:TESTGUARD002';
  const uid3 = 'line:TESTGUARD003';
  const uid4 = 'line:TESTGUARD010'; // invoice.paid 期限延長（タグ有り）
  const uid5 = 'line:TESTGUARD011'; // invoice.paid タグ無し（デグレ防止）
  const uid6 = 'line:TESTGUARD012'; // checkout.session.completed（実サブスク retrieve）
  const touched = renewalOnly
    ? [uid4, uid5, uid6]
    : [uid1, uid2, uid3, uid4, uid5, uid6];

  if (renewalOnly) {
    await runRenewalChecks(stripeKey, tsudumonSecret, uid4, uid5, uid6);
    await cleanup(touched);
    return;
  }

  console.log(
    '=== パターン1: tsudumonStripeWebhook ← タグ有り checkout.session.completed ==='
  );
  const r1 = await postEvent(
    TSUDUMON_URL,
    tsudumonCheckoutEvent(uid1),
    tsudumonSecret
  );
  console.log('  response:', r1.status, r1.body);
  const d1 = await readTestDoc(uid1);
  console.log(
    '  firestore users/' + uid1 + ':',
    d1 ? JSON.stringify(d1) : '(存在しない)'
  );
  console.log(
    '  期待: 処理される（tsudumon が書かれる）→',
    d1 ? 'OK 書き込みあり' : 'NG 書き込み無し'
  );

  console.log(
    '\n=== パターン2: tsudumonStripeWebhook ← タグ無し invoice.paid（プレミアム模擬） ==='
  );
  const r2 = await postEvent(
    TSUDUMON_URL,
    premiumInvoiceEvent(uid2),
    tsudumonSecret
  );
  console.log('  response:', r2.status, r2.body);
  const d2 = await readTestDoc(uid2);
  console.log(
    '  firestore users/' + uid2 + ':',
    d2 ? JSON.stringify(d2) : '(存在しない)'
  );
  console.log(
    '  期待: skipped:not_tsudumon かつ書き込み無し →',
    r2.body.includes('not_tsudumon') && !d2 ? 'OK' : 'NG'
  );

  console.log(
    '\n=== パターン3: stripeWebhook ← タグ有り checkout.session.completed ==='
  );
  const r3 = await postEvent(
    PREMIUM_URL,
    tsudumonCheckoutEvent(uid3),
    premiumSecret
  );
  console.log('  response:', r3.status, r3.body);
  const d3 = await readTestDoc(uid3);
  console.log(
    '  firestore users/' + uid3 + ':',
    d3 ? JSON.stringify(d3) : '(存在しない)'
  );
  console.log(
    '  期待: skipped:tsudumon かつ書き込み無し（push も飛ばない）→',
    r3.body.includes('"skipped":"tsudumon"') && !d3 ? 'OK' : 'NG'
  );

  console.log(
    '\n=== パターン4（stripeWebhook ← タグ無し）は意図的に未実行 ==='
  );
  console.log(
    '  本番のプレミアム処理（markPaid / LINE push）が走るため。ユニットテストで担保。'
  );

  await runRenewalChecks(stripeKey, tsudumonSecret, uid4, uid5, uid6);
  await cleanup(touched);
}

/** 後片付け（line:TESTGUARD* のみ削除）。 */
async function cleanup(touched: string[]) {
  console.log('\n=== 後片付け（line:TESTGUARD* のみ削除） ===');
  for (const uid of touched) {
    const before = await readTestDoc(uid);
    if (before) {
      await deleteTestDoc(uid);
      const after = await readTestDoc(uid);
      console.log(
        `  users/${uid}: 削除 → ${after ? 'NG まだ残っている' : 'OK 消えた'}`
      );
    } else {
      console.log(`  users/${uid}: 元から存在しない（削除不要）`);
    }
    // パターン1 が成功すると tsudumon_activated が premiumFunnelEvents に残るので消す。
    await deleteTestFunnelEvents(uid);
  }
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
