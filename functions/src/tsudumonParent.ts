/**
 * つづもん 保護者導線（カード発行 → 保護者ページ閲覧 → 保護者による決済）。
 * 設計: pdf-workbook/.steering/20260727-parent-handoff/design.md
 *
 * ## なぜ必要か
 *
 * 中学生本人は決済できない。従来の `tsudumonCreateCheckout` は idToken から uid を取るため、
 * 保護者が自分のスマホで登録すると**保護者自身の uid にサブスクが付き、子の教材は開かない**。
 * つまり「保護者に払ってもらう」経路が構造的に存在しなかった。ここを開ける。
 *
 * ## 方針
 *
 * - **決済に LINE 連携を必須にしない**。保護者は「払う」だけで完了できる。
 *   公式LINEでの連携（進捗の閲覧）は決済完了画面から任意で誘う（フェーズ3）。
 * - 課金先は常に**子の uid**。`client_reference_id` も子なので webhook は無改修で通る。
 * - トークンは `tsudumonInviteCore` の HMAC 付きランダム ID（URL に uid を載せない）。
 *
 * ## read 規律
 *
 * すべて `doc().get()` のみでクエリを使わない。
 * カード閲覧 = invite 1 read + 子 1 read。QR は署名検証だけで **0 read**。
 */
import * as functions from 'firebase-functions/v1';

import {
  createInviteId,
  evaluateInvite,
  inviteExpiresAtMs,
  signInviteToken,
  verifyInviteToken,
} from './tsudumonInviteCore';
import {
  MAX_CHILDREN_PER_PARENT,
  MAX_PARENTS_PER_CHILD,
  buildChildSummary,
  fallbackChildName,
  resolveParentLink,
  type ChildSummary,
} from './tsudumonParentCore';
import { buildTsudumonCheckoutParams } from './tsudumonStripe';
import { evaluateTsudumonAccess } from './tsudumonCore';

const REGION = 'asia-northeast1';

/** 保護者ページ（子から渡されるURL）。 */
const PARENT_PAGE = 'https://tsudumon.jp/parents/';
/** 決済完了ページ。ここで「公式LINEで進捗を見る」へ誘導する。 */
const PARENT_THANKS_PAGE = 'https://tsudumon.jp/parents/thanks/';
/** 保護者ダッシュボード（学習の記録・お支払い）。 */
const PARENT_DASHBOARD_PAGE = 'https://tsudumon.jp/parents/dashboard/';
/** 子が保護者に見せる画面（QR・台本）。 */
const HANDOFF_PAGE = 'https://tsudumon.jp/handoff/';

function inviteSecret(): string {
  return process.env.TSUDUMON_INVITE_SECRET || '';
}

async function getDb() {
  const { initializeApp, getApps } = await import('firebase-admin/app');
  const { getFirestore } = await import('firebase-admin/firestore');
  if (getApps().length === 0) {
    initializeApp();
  }
  return getFirestore();
}

function setCors(res: functions.Response) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
}

/** idToken を検証して `line:` uid を返す。失敗時は null（呼び出し側で扱いを決める）。 */
async function verifyLineUidOrNull(idToken: unknown): Promise<string | null> {
  if (typeof idToken !== 'string' || !idToken) return null;
  try {
    const { getApps, initializeApp } = await import('firebase-admin/app');
    const { getAuth } = await import('firebase-admin/auth');
    if (getApps().length === 0) {
      initializeApp();
    }
    const uid = (await getAuth().verifyIdToken(idToken)).uid;
    return uid.startsWith('line:') ? uid : null;
  } catch {
    return null;
  }
}

/** 招待URL（保護者が開くページ）。 */
export function inviteUrl(token: string): string {
  return `${PARENT_PAGE}?t=${encodeURIComponent(token)}`;
}

/** QR画像のURL（`<img src>` にそのまま置ける）。 */
function inviteQrUrl(token: string, projectId: string): string {
  return `https://${REGION}-${projectId}.cloudfunctions.net/tsudumonInviteQr?t=${encodeURIComponent(token)}`;
}

/** 子が保護者に見せる画面のURL。 */
function handoffUrl(token: string): string {
  return `${HANDOFF_PAGE}?t=${encodeURIComponent(token)}`;
}

/**
 * LINE の送り先一覧（シェアターゲットピッカー）を開く LIFF URL。
 *
 * `LIFF_TSUDUMON_SHARE_ID` が未設定なら空文字を返す。呼び出し側は
 * そのとき `handoffUrl`（QRページ）に落とす＝行き止まりを作らない。
 * LIFF は LINE Developers Console（つづもんの LINE Login チャネル）で
 * エンドポイント `https://tsudumon.jp/share/` として作る。
 */
function shareUrl(token: string): string {
  const liffId = process.env.LIFF_TSUDUMON_SHARE_ID || '';
  if (!liffId) return '';
  return `https://liff.line.me/${liffId}?t=${encodeURIComponent(token)}`;
}

function projectId(): string {
  return (
    process.env.GCLOUD_PROJECT || process.env.GCP_PROJECT || 'chatstudy-63477'
  );
}

/** 「M月D日」（JST）。 */
function dateLabel(ms: number): string {
  const d = new Date(ms + 9 * 3600 * 1000);
  return `${d.getUTCMonth() + 1}月${d.getUTCDate()}日`;
}

/**
 * つづもんBotから子へ1通 push する。失敗しても本体は成功扱い（ログのみ）。
 * 保護者導線の通知はどれも「1回だけ」なので、配信枠への影響は小さい。
 */
async function pushToChild(
  uid: string,
  text: string,
  label: string
): Promise<void> {
  const lineUserId = uid.startsWith('line:') ? uid.slice('line:'.length) : '';
  if (!lineUserId) return;
  try {
    const { getTsudumonLineClient } = await import('./tsudumon/client');
    const client = await getTsudumonLineClient();
    await client.pushMessage({
      to: lineUserId,
      messages: [{ type: 'text', text }],
    } as never);
    const { recordPushDelivery } = await import('./deliveryStats');
    await recordPushDelivery('tsudumonParent');
  } catch (error) {
    console.error(`[tsudumonParent] ${label} push failed:`, error);
  }
}

// ---------------------------------------------------------------------------
// 1. カード発行（子）
// ---------------------------------------------------------------------------

export interface CreatedInvite {
  token: string;
  url: string;
  qrUrl: string;
  handoffUrl: string;
  /** 送り先一覧を開く LIFF URL。LIFF 未設定なら空文字 */
  shareUrl: string;
  childName: string;
  expiresLabel: string;
}

/**
 * 「おうちの人にわたすカード」を発行するコア。
 * HTTP（`tsudumonInviteCreate`）と LINE の postback（`tsudumonParentCard`）で共有する。
 *
 * 子1人につき**有効なカードは1枚**。再発行すると前のものを削除する
 * （古いトークに残ったURLが無期限に実績を晒すのを防ぐ）。
 *
 * read は `users/{childUid}` の 1 read のみ。
 */
export async function createTsudumonInvite(
  childUid: string
): Promise<CreatedInvite | null> {
  const secret = inviteSecret();
  if (!secret) {
    console.error('[createTsudumonInvite] TSUDUMON_INVITE_SECRET is not set');
    return null;
  }

  const db = await getDb();
  const { Timestamp } = await import('firebase-admin/firestore');
  const userRef = db.doc(`users/${childUid}`);
  const snap = await userRef.get();
  const data = snap.exists ? (snap.data() as Record<string, unknown>) : {};

  const grade = typeof data.grade === 'string' ? data.grade : null;
  // ⚠️ 子ドキュメントの `tsudumonParentName` は**読まない**（2026-08-02）。
  // 呼び名を子に聞く導線は 2026-08-01 に撤去したのに受け取り側だけが残っており、
  // 「呼び名待ち」状態の子が別件で送ったメッセージ本文がそのまま保存されていた。
  // 実際に `childName: "テストの範囲がわからない"` の状態で発行されたカードがあり、
  // 保護者ページの冒頭が「テストの範囲がわからないさんから届いています」になっていた。
  // 見分けたいのは保護者のほうなので、表示名は保護者ダッシュボードの
  // 「表示名を変える」に一本化する（8/1 の決定どおり）。
  const childName = fallbackChildName(grade);

  // 旧カードは失効させる（1人1枚）。失敗しても発行は続ける。
  const previousId =
    typeof data.tsudumonInviteId === 'string' ? data.tsudumonInviteId : '';
  if (previousId) {
    try {
      await db.doc(`tsudumonInvites/${previousId}`).delete();
    } catch (e) {
      console.error('[createTsudumonInvite] old invite delete failed:', e);
    }
  }

  const nowMs = Date.now();
  const expiresMs = inviteExpiresAtMs(nowMs);
  const inviteId = createInviteId();

  await db.doc(`tsudumonInvites/${inviteId}`).set({
    childUid,
    childName,
    childGrade: grade,
    createdAt: Timestamp.fromMillis(nowMs),
    expiresAt: Timestamp.fromMillis(expiresMs),
    viewedAt: null,
    notifiedAt: null,
    linkedUids: [],
  });
  await userRef.set(
    { tsudumonInviteId: inviteId },
    { mergeFields: ['tsudumonInviteId'] }
  );

  try {
    const { logServerFunnelEvent } = await import('./funnelEvent');
    await logServerFunnelEvent('parent_link_created', childUid);
  } catch (e) {
    console.error('[createTsudumonInvite] funnel log failed:', e);
  }

  const token = signInviteToken(inviteId, secret);
  console.log(`[createTsudumonInvite] uid=${childUid} invite=${inviteId}`);
  return {
    token,
    url: inviteUrl(token),
    qrUrl: inviteQrUrl(token, projectId()),
    handoffUrl: handoffUrl(token),
    shareUrl: shareUrl(token),
    childName,
    expiresLabel: dateLabel(expiresMs),
  };
}

/**
 * 「おうちの人にわたすカード」を発行する（Web用）。
 * POST { idToken } → { ok, token, url, qrUrl, handoffUrl, childName, expiresLabel }
 */
export const tsudumonInviteCreate = functions
  .region(REGION)
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

    try {
      const childUid = await verifyLineUidOrNull(req.body?.idToken);
      if (!childUid) {
        res.status(401).json({ error: 'line_login_required' });
        return;
      }
      const invite = await createTsudumonInvite(childUid);
      if (!invite) {
        res.status(503).json({ ok: false, reason: 'not_configured' });
        return;
      }
      res.status(200).json({ ok: true, ...invite });
    } catch (error) {
      console.error('[tsudumonInviteCreate] failed:', error);
      res.status(500).json({ error: 'internal' });
    }
  });

// ---------------------------------------------------------------------------
// 2. カードを開く（保護者・LINEログイン不要）
// ---------------------------------------------------------------------------

interface InviteLookup {
  inviteId: string;
  childUid: string;
  inviteData: Record<string, unknown>;
  childData: Record<string, unknown> | null;
  summary: ChildSummary;
}

/**
 * トークンから招待と子のデータを引く（invite 1 read + 子 1 read）。
 * 失効・改ざんは `reason` を返して呼び出し側で案内文を出し分ける。
 */
async function lookupInvite(
  token: unknown
): Promise<
  | { ok: true; value: InviteLookup }
  | { ok: false; reason: 'invalid' | 'expired' }
> {
  const secret = inviteSecret();
  const inviteId = verifyInviteToken(token, secret);
  if (!inviteId) return { ok: false, reason: 'invalid' };

  const db = await getDb();
  const inviteSnap = await db.doc(`tsudumonInvites/${inviteId}`).get();
  const inviteData = inviteSnap.exists
    ? (inviteSnap.data() as Record<string, unknown>)
    : null;
  const nowMs = Date.now();
  const { result, snapshot } = evaluateInvite(inviteData, nowMs);
  if (result !== 'ok' || !snapshot || !inviteData) {
    return { ok: false, reason: result === 'expired' ? 'expired' : 'invalid' };
  }

  const childSnap = await db.doc(`users/${snapshot.childUid}`).get();
  const childData = childSnap.exists
    ? (childSnap.data() as Record<string, unknown>)
    : null;

  const fallback =
    typeof inviteData.childName === 'string' && inviteData.childName
      ? inviteData.childName
      : fallbackChildName(inviteData.childGrade);

  return {
    ok: true,
    value: {
      inviteId,
      childUid: snapshot.childUid,
      inviteData,
      childData,
      summary: buildChildSummary(childData, fallback, nowMs),
    },
  };
}

/**
 * 保護者ページの表示データ。
 * POST { t } → { ok, summary } | { ok:false, reason:'invalid'|'expired' }
 *
 * 初回閲覧時だけ子へ「見てくれたみたい」を1通送る（`notifiedAt` で二重送信を防ぐ）。
 * 決済に至らなくても追撃はしない（子と保護者の関係に踏み込まない）。
 */
export const tsudumonInviteView = functions
  .region(REGION)
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

    try {
      const found = await lookupInvite(req.body?.t);
      if (!found.ok) {
        res.status(200).json({ ok: false, reason: found.reason });
        return;
      }
      const { inviteId, childUid, inviteData, summary } = found.value;

      // 初回閲覧の記録と、子への通知（どちらも1回だけ）。
      if (!inviteData.notifiedAt) {
        const db = await getDb();
        const { Timestamp } = await import('firebase-admin/firestore');
        const nowTs = Timestamp.now();
        await db
          .doc(`tsudumonInvites/${inviteId}`)
          .set(
            { viewedAt: inviteData.viewedAt ?? nowTs, notifiedAt: nowTs },
            { merge: true }
          );
        await pushToChild(
          childUid,
          [
            // ⚠️ 「あとは待つだけ」と言わない（ユーザー指摘 2026-08-02）。
            // ページを見てもらえた**直後がいちばん話しかけやすい**のに、待てと
            // 言うと動く機会をこちらから閉じてしまう。ここは背中を押す場所。
            // 「すぐに決まらなくても気にしないで」も外した。まだ断られてもいない
            // 段階で断られる前提の慰めを渡すと、こちらから期待値を下げてしまう。
            'おうちの人が、つづもんのページを見てくれたみたいだよ👀',
            '',
            'よかったら「どうだった？」って聞いてみてね。',
            '見たあとのいまがいちばん話しやすいタイミングだよ。',
            '',
            'そのあいだ、体験のつづきをやっておこう。',
          ].join('\n'),
          'invite viewed'
        );
        try {
          const { logServerFunnelEvent } = await import('./funnelEvent');
          await logServerFunnelEvent('parent_page_viewed', childUid);
        } catch (e) {
          console.error('[tsudumonInviteView] funnel log failed:', e);
        }
      }

      res.status(200).json({ ok: true, summary });
    } catch (error) {
      console.error('[tsudumonInviteView] failed:', error);
      res.status(500).json({ error: 'internal' });
    }
  });

// ---------------------------------------------------------------------------
// 3. 保護者による決済
// ---------------------------------------------------------------------------

/**
 * きょうだい価格を使うべきか判定する（保護者が連携済みで、他に連携中の子がいる場合）。
 *
 * 決済に連携を必須にしていないため、決済時点で「同じ世帯の2人目」と判定できる材料は
 * 連携情報しかない。結果として割引が連携の動機になる。
 *
 * 判定は `users/{parentUid}` の 1 read のみ。人数ではなく「この子以外に連携中の子が
 * 1人以上いるか」で見る（解約済みの子が混ざっても割引側に倒れるだけで不利にならない）。
 */
async function isSiblingPurchase(
  parentUid: string | null,
  childUid: string
): Promise<boolean> {
  if (!parentUid) return false;
  try {
    const db = await getDb();
    const snap = await db.doc(`users/${parentUid}`).get();
    if (!snap.exists) return false;
    const data = snap.data() as Record<string, unknown>;
    if (data.tsudumonRole !== 'parent') return false;
    const children = Array.isArray(data.tsudumonChildren)
      ? (data.tsudumonChildren as Array<Record<string, unknown>>)
      : [];
    return children.some(
      (c) => c && typeof c.uid === 'string' && c.uid !== childUid
    );
  } catch (error) {
    console.error('[tsudumonParentCheckout] sibling check failed:', error);
    return false;
  }
}

/**
 * 保護者が自分の端末から、子のアカウントに月額プランを登録する。
 * POST { t, idToken? } → { ok, url } | { ok:false, reason }
 *
 * `idToken` は任意。渡された保護者が連携済みなら、きょうだい価格を適用する。
 */
export const tsudumonParentCheckout = functions
  .region(REGION)
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
      console.error('[tsudumonParentCheckout] Stripe env is not set');
      res.status(503).json({ ok: false, reason: 'not_configured' });
      return;
    }

    try {
      const token = req.body?.t;
      const parentUid = await verifyLineUidOrNull(req.body?.idToken);

      // 対象の子を決める経路は2つある。
      //   ① カードのトークン … 連携していない保護者（決済だけして帰る人）
      //   ② 連携ずみ＋childUid … 体験中に連携し、体験終了後に登録する保護者。
      //      ダッシュボードにはトークンが無いので、こちらが無いと行き止まりになる。
      //      連携ずみであることはトークン保持より強い権限なので、これで認可できる。
      let childUid = '';
      let childData: Record<string, unknown> | null = null;
      if (typeof token === 'string' && token) {
        const found = await lookupInvite(token);
        if (!found.ok) {
          res.status(200).json({ ok: false, reason: found.reason });
          return;
        }
        childUid = found.value.childUid;
        childData = found.value.childData;
      } else {
        const requested = req.body?.childUid;
        if (!parentUid || typeof requested !== 'string' || !requested) {
          res.status(400).json({ ok: false, reason: 'invalid' });
          return;
        }
        const db = await getDb();
        const parentSnap = await db.doc(`users/${parentUid}`).get();
        const parentData = parentSnap.exists
          ? (parentSnap.data() as Record<string, unknown>)
          : {};
        const linked =
          parentData.tsudumonRole === 'parent' &&
          Array.isArray(parentData.tsudumonChildren) &&
          (parentData.tsudumonChildren as Array<Record<string, unknown>>).some(
            (c) => c && c.uid === requested
          );
        if (!linked) {
          res.status(403).json({ ok: false, reason: 'not_linked' });
          return;
        }
        childUid = requested;
        const childSnap = await db.doc(`users/${childUid}`).get();
        childData = childSnap.exists
          ? (childSnap.data() as Record<string, unknown>)
          : null;
      }

      const nowMs = Date.now();
      const tsudumonRaw = childData ? childData.tsudumon : null;
      const source =
        tsudumonRaw && typeof tsudumonRaw === 'object'
          ? (tsudumonRaw as Record<string, unknown>).source
          : '';
      // すでに有効なサブスクがあるなら二重に払わせない。
      if (
        evaluateTsudumonAccess(tsudumonRaw, null, nowMs) === 'ok' &&
        source === 'stripe'
      ) {
        res.status(200).json({
          ok: false,
          reason: 'already_subscribed',
          message:
            'このお子さまはすでに月額プランにご登録済みです。そのまま全単元をご利用いただけます。',
        });
        return;
      }

      const sibling = await isSiblingPurchase(parentUid, childUid);
      const siblingPriceId = process.env.STRIPE_TSUDUMON_PRICE_ID_SIBLING || '';
      // きょうだい価格が未設定なら通常価格にフォールバックする（決済を止めない）。
      const usedPriceId = sibling && siblingPriceId ? siblingPriceId : priceId;

      // 戻り先はトークンの有無で変える。ダッシュボード経由（トークン無し）は
      // 連携ずみなので、完了後はダッシュボードへ戻すのが素直。
      const tokenParam =
        typeof token === 'string' && token ? encodeURIComponent(token) : '';
      const successUrl = tokenParam
        ? `${PARENT_THANKS_PAGE}?t=${tokenParam}`
        : `${PARENT_DASHBOARD_PAGE}?sub=thanks`;
      const cancelUrl = tokenParam
        ? `${PARENT_PAGE}?t=${tokenParam}`
        : PARENT_DASHBOARD_PAGE;
      const params = buildTsudumonCheckoutParams({
        uid: childUid,
        tsudumonRaw,
        nowMs,
        priceId: usedPriceId,
        paidBy: 'parent',
        successUrl,
        cancelUrl,
      });

      const result = await stripePost('/checkout/sessions', params, secretKey);
      const url = typeof result.data.url === 'string' ? result.data.url : '';
      if (!result.ok || !url) {
        console.error(
          '[tsudumonParentCheckout] Stripe session creation failed',
          result.data
        );
        res.status(502).json({
          ok: false,
          reason: 'stripe_error',
          message: '決済の準備に失敗しました。時間をおいてお試しください。',
        });
        return;
      }

      try {
        const { logServerFunnelEvent } = await import('./funnelEvent');
        await logServerFunnelEvent('parent_checkout_started', childUid, {
          sibling,
        });
      } catch (e) {
        console.error('[tsudumonParentCheckout] funnel log failed:', e);
      }

      console.log(
        `[tsudumonParentCheckout] child=${childUid} sibling=${sibling} ok`
      );
      res.status(200).json({ ok: true, url });
    } catch (error) {
      console.error('[tsudumonParentCheckout] failed:', error);
      res.status(500).json({ error: 'internal' });
    }
  });

// ---------------------------------------------------------------------------
// 4. 親子連携（きょうだい対応）
// ---------------------------------------------------------------------------

/**
 * 保護者と子を連携する。
 * POST { idToken, t } → { ok, childName, childCount } | { ok:false, reason, message }
 *
 * ## 連携できる経路をここ1本に絞っている
 * 連携は**子が発行したカード経由でのみ**成立する。保護者が uid を指定したり検索して
 * 繋ぐ口は作らない。子の同意なく繋がる経路を1つも残さないための設計。
 *
 * ## 冪等
 * 同じカードを2回開いても、きょうだいの2枚目を開いても正しく積み上がる。
 * トランザクションで親子両方を更新し、`mergeFields` で対象フィールドだけ書く
 * （既存の `tsudumon` / `blocked` / `onboardingState` には触れない）。
 */
export const tsudumonParentLink = functions
  .region(REGION)
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

    try {
      const parentUid = await verifyLineUidOrNull(req.body?.idToken);
      if (!parentUid) {
        res.status(401).json({ error: 'line_login_required' });
        return;
      }
      const found = await lookupInvite(req.body?.t);
      if (!found.ok) {
        res.status(200).json({
          ok: false,
          reason: found.reason,
          message:
            found.reason === 'expired'
              ? 'このご案内の有効期限が切れています。お子さまにもう一度送ってもらってください。'
              : 'ご案内のリンクが正しく読み取れませんでした。',
        });
        return;
      }
      const { inviteId, childUid, inviteData, childData } = found.value;

      // 自分自身を子として登録しようとしていないか（同じ端末で子がログインしたまま等）。
      if (parentUid === childUid) {
        res.status(200).json({
          ok: false,
          reason: 'self_link',
          message:
            'お子さまご本人のLINEでは連携できません。保護者の方のLINEで開いてください。',
        });
        return;
      }

      const db = await getDb();
      const { Timestamp } = await import('firebase-admin/firestore');
      const nowTs = Timestamp.now();
      const parentRef = db.doc(`users/${parentUid}`);
      const childRef = db.doc(`users/${childUid}`);

      const childName =
        typeof inviteData.childName === 'string' && inviteData.childName
          ? inviteData.childName
          : fallbackChildName(inviteData.childGrade);
      const childGrade =
        typeof inviteData.childGrade === 'string'
          ? inviteData.childGrade
          : null;

      // 判定は純粋関数（`resolveParentLink`）に置き、トランザクションは
      // 「読んで・判定を当てはめて・書く」だけにする。冪等性と上限はテスト済み。
      const result = await db.runTransaction(async (tx) => {
        const [parentSnap, childSnap] = await Promise.all([
          tx.get(parentRef),
          tx.get(childRef),
        ]);
        const decision = resolveParentLink(
          parentSnap.exists ? parentSnap.data() : null,
          childSnap.exists ? childSnap.data() : null,
          { parentUid, childUid, childName, childGrade, linkedAt: nowTs }
        );
        if (!decision.ok) return decision;

        tx.set(
          parentRef,
          { tsudumonRole: 'parent', tsudumonChildren: decision.children },
          { mergeFields: ['tsudumonRole', 'tsudumonChildren'] }
        );
        tx.set(
          childRef,
          { tsudumonParents: decision.parents },
          { mergeFields: ['tsudumonParents'] }
        );
        return {
          ok: true as const,
          childCount: decision.children.length,
          already: decision.already,
        };
      });

      if (!result.ok) {
        const messages = {
          self_link:
            'お子さまご本人のLINEでは連携できません。保護者の方のLINEで開いてください。',
          too_many_children: `お一人の保護者アカウントにつなげられるお子さまは${MAX_CHILDREN_PER_PARENT}人までです。`,
          too_many_parents: `お一人のお子さまにつなげられる保護者の方は${MAX_PARENTS_PER_CHILD}人までです。`,
        };
        res.status(200).json({
          ok: false,
          reason: result.reason,
          message: messages[result.reason],
        });
        return;
      }

      // 招待に「この保護者が使った」ことを残す（運用調査用。失敗しても連携は成立）。
      try {
        const { FieldValue } = await import('firebase-admin/firestore');
        await db
          .doc(`tsudumonInvites/${inviteId}`)
          .set(
            { linkedUids: FieldValue.arrayUnion(parentUid) },
            { merge: true }
          );
      } catch (e) {
        console.error('[tsudumonParentLink] invite update failed:', e);
      }

      if (!result.already) {
        // 子には必ず知らせる。勝手につながることが無いのが、この機能の前提。
        await pushToChild(
          childUid,
          [
            'おうちの人と、つづもんがつながったよ👨‍👩‍👧',
            '',
            // ⚠️ ここでは見える範囲を書く。カードを渡す前（buildParentCardGuide）
            // では外したが、あれは「まだ何も起きていない子に不安を教える」から。
            // つながった**いま**は実際に見られる側になるので、何が見えて何が
            // 見えないかを本人が知っておくべき場面。
            'おうちの人に見えるのは、勉強した日・時間・進んだ単元・正答率だけ。',
            'つづ先生に送ったトークの内容や、まちがえた問題は見えないよ。',
            '',
            'つながりをやめたいときは、このトークに「保護者の連携を解除」と送ってね。',
          ].join('\n'),
          'parent linked'
        );
        // 保護者にも「何が見えて何が見えないか」とダッシュボードのURLを届ける。
        // 直前に中学生向けのあいさつが届いているので、ここで上書きする。
        await pushParentLinked(parentUid, childName, result.childCount);
        // 保護者は「今日の1単元」を受け取る側ではないので、日次配信の予定表は作らない
        // （ensureTsudumonDaily を呼ばない）。リッチメニューは保護者用に差し替える。
        await linkParentRichMenu(parentUid);
        try {
          const { logServerFunnelEvent } = await import('./funnelEvent');
          await logServerFunnelEvent('parent_linked', parentUid, {
            childCount: result.childCount,
          });
        } catch (e) {
          console.error('[tsudumonParentLink] funnel log failed:', e);
        }
      }

      void childData;
      console.log(
        `[tsudumonParentLink] parent=${parentUid} child=${childUid} count=${result.childCount} already=${result.already}`
      );
      res.status(200).json({
        ok: true,
        childName,
        childCount: result.childCount,
        already: result.already,
      });
    } catch (error) {
      console.error('[tsudumonParentLink] failed:', error);
      res.status(500).json({ error: 'internal' });
    }
  });

/**
 * 連携が成立したことを**保護者本人**にも送る。
 *
 * これが無いと、保護者のトークには直前に届いた**中学生向けのあいさつ**
 * （「3日間無料でおためし」「つづ先生に質問できます」）だけが残る。連携は
 * 「連携ボタン → LINEログイン（友だち追加）→ follow → 連携成立」の順で進むので、
 * follow の時点ではまだ保護者だと分からないため避けられない。ここで上書きする。
 *
 * ダッシュボードのURLもここでしか渡らない（リッチメニュー画像が未設定の間は、
 * これが保護者にとって唯一の手がかりになる）。
 */
async function pushParentLinked(
  parentUid: string,
  childName: string,
  childCount: number
): Promise<void> {
  const lineUserId = parentUid.startsWith('line:')
    ? parentUid.slice('line:'.length)
    : '';
  if (!lineUserId) return;

  const text = [
    `${childName}さんとつながりました。`,
    '',
    childCount > 1
      ? `連携中のお子さまは${childCount}人です。お一人ずつ学習の記録をご覧いただけます。`
      : '学習した日・時間・進んだ単元・正答率を、いつでもご覧いただけます。',
    'https://tsudumon.jp/parents/dashboard/',
    '',
    'お支払い方法の変更・解約も、同じページからお手続きいただけます。',
    '',
    '🔒 お子さまがつづ先生（AI）に送ったトークの内容や、まちがえた問題は表示されません。安心して質問できる場所であることを、学習を続けるための条件と考えているためです。',
    '',
    '※直前に届いたご案内は、お子さま向けの内容でした。保護者の方はこのご案内をご覧ください。',
  ].join('\n');

  try {
    const { getTsudumonLineClient } = await import('./tsudumon/client');
    const client = await getTsudumonLineClient();
    await client.pushMessage({
      to: lineUserId,
      messages: [{ type: 'text', text }],
    } as never);
    const { recordPushDelivery } = await import('./deliveryStats');
    await recordPushDelivery('tsudumonParent');
  } catch (error) {
    // 連携自体は成立しているので、送信失敗はログのみ
    console.error('[tsudumonParentLink] parent notify failed:', error);
  }
}

/**
 * 保護者用リッチメニューを uid にリンクする。
 * env `LINE_TSUDUMON_RICHMENU_PARENT` が未設定なら何もしない（画像未用意でも連携は通す）。
 */
async function linkParentRichMenu(parentUid: string): Promise<void> {
  const richMenuId = process.env.LINE_TSUDUMON_RICHMENU_PARENT || '';
  const lineUserId = parentUid.startsWith('line:')
    ? parentUid.slice('line:'.length)
    : '';
  if (!richMenuId || !lineUserId) return;
  try {
    const { getTsudumonLineClient } = await import('./tsudumon/client');
    const client = await getTsudumonLineClient();
    await client.linkRichMenuIdToUser(lineUserId, richMenuId);
  } catch (error) {
    console.error('[tsudumonParentLink] rich menu link failed:', error);
  }
}

/** POST /v1/... を form-urlencoded で叩く（tsudumonStripe.ts と同じ生 fetch 方式）。 */
async function stripePost(
  path: string,
  params: URLSearchParams,
  secretKey: string
): Promise<{ ok: boolean; status: number; data: Record<string, unknown> }> {
  const res = await fetch(`https://api.stripe.com/v1${path}`, {
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

// ---------------------------------------------------------------------------
// 4. QRコード（子の画面に出し、保護者は自分の端末で読む）
// ---------------------------------------------------------------------------

/**
 * 招待URLのQRコードを SVG で返す。GET ?t=<token>
 *
 * URL転送だけだと結局スマホを渡すことになり、中学生はトーク履歴を見られるのを嫌がる。
 * QRなら保護者の端末で完結する。ここが実際の摩擦点。
 *
 * **Firestore を読まない**（署名検証のみ）ので、画像の再読込で read を焼かない。
 */
export const tsudumonInviteQr = functions
  .region(REGION)
  .https.onRequest(async (req, res) => {
    setCors(res);
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    const token = req.query?.t;
    const inviteId = verifyInviteToken(token, inviteSecret());
    if (!inviteId) {
      res.status(400).send('invalid token');
      return;
    }
    try {
      const QRCode = await import('qrcode');
      const svg = await QRCode.toString(inviteUrl(String(token)), {
        type: 'svg',
        errorCorrectionLevel: 'M',
        margin: 1,
        width: 640,
      });
      // トークンが変わらない限り内容は不変。CDN/ブラウザに任せる。
      res.set('Content-Type', 'image/svg+xml; charset=utf-8');
      res.set('Cache-Control', 'public, max-age=86400');
      res.status(200).send(svg);
    } catch (error) {
      console.error('[tsudumonInviteQr] failed:', error);
      res.status(500).send('internal');
    }
  });
