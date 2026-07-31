/**
 * 保護者ダッシュボード（学習の記録のみ）。
 * 設計: pdf-workbook/.steering/20260727-parent-handoff/design.md §4-5 / §6
 *
 * ## このファイルの最も重要な性質
 *
 * **保護者に子のトークを見せない**という約束を、コードの構造で守る。
 *
 * この関数は会話・記述解答・まちがえた問題を扱うモジュールを **import しない**。
 * レスポンスから削るのではなく「読む手段を持たない」。レビューは下の import 一覧を
 * 見れば済む（`aiThreadStore` / `aiMemoryCore` / `gradeWritten` などが増えていたら赤信号）。
 *
 * 組み立ては `tsudumonParentCore.buildChildSummary` に集約しており、そちらでも
 * まちがい関連ヘルパーを呼ばないことをテストで固定している。
 *
 * ## read 規律
 * `users/{parent}` 1 read ＋ 連携中の子の人数ぶんの `doc().get()`。
 * **クエリ・コレクション走査を一切しない**（`tsudumonChildren` に uid を持っているため）。
 */
import * as functions from 'firebase-functions/v1';

import {
  buildChildSummary,
  fallbackChildName,
  type ChildSummary,
} from './tsudumonParentCore';
import { sanitizeParentName } from './tsudumonParentCard';

const REGION = 'asia-northeast1';

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
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
}

async function verifyParentUid(
  idToken: unknown,
  res: functions.Response
): Promise<string | null> {
  if (typeof idToken !== 'string' || !idToken) {
    res.status(400).json({ error: 'idToken is required' });
    return null;
  }
  try {
    const { getApps, initializeApp } = await import('firebase-admin/app');
    const { getAuth } = await import('firebase-admin/auth');
    if (getApps().length === 0) {
      initializeApp();
    }
    const uid = (await getAuth().verifyIdToken(idToken)).uid;
    if (!uid.startsWith('line:')) {
      res.status(403).json({ error: 'line_login_required' });
      return null;
    }
    return uid;
  } catch {
    res.status(401).json({ error: 'invalid_token' });
    return null;
  }
}

interface LinkedChildRef {
  uid: string;
  name?: string;
  grade?: string | null;
}

/** 保護者ドキュメントから連携中の子を取り出す（壊れた要素は捨てる）。 */
function readLinkedChildren(data: Record<string, unknown>): LinkedChildRef[] {
  if (data.tsudumonRole !== 'parent') return [];
  const raw = data.tsudumonChildren;
  if (!Array.isArray(raw)) return [];
  return raw
    .filter(
      (c): c is LinkedChildRef =>
        !!c &&
        typeof c === 'object' &&
        typeof (c as LinkedChildRef).uid === 'string'
    )
    .map((c) => ({ uid: c.uid, name: c.name, grade: c.grade ?? null }));
}

export interface DashboardChild extends ChildSummary {
  /** 画面内の識別用（表示名の変更・解約導線の対象指定）。 */
  uid: string;
}

/**
 * 連携中の子の学習サマリを返す。
 * POST { idToken } → { ok, children: DashboardChild[] }
 *
 * 保護者でなければ 403。連携していない子は uid を知っていても取得できない
 * （`tsudumonChildren` にある uid しか読まないため）。
 */
export const tsudumonParentDashboard = functions
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
      const parentUid = await verifyParentUid(req.body?.idToken, res);
      if (!parentUid) return;

      const db = await getDb();
      const parentSnap = await db.doc(`users/${parentUid}`).get();
      const parentData = parentSnap.exists
        ? (parentSnap.data() as Record<string, unknown>)
        : {};
      const links = readLinkedChildren(parentData);
      if (links.length === 0) {
        res.status(200).json({ ok: true, children: [] });
        return;
      }

      const nowMs = Date.now();
      const snaps = await Promise.all(
        links.map((link) => db.doc(`users/${link.uid}`).get())
      );

      const children: DashboardChild[] = links.map((link, i) => {
        const snap = snaps[i];
        const data = snap.exists
          ? (snap.data() as Record<string, unknown>)
          : null;
        // 表示名は保護者側の記録を優先する（同学年のきょうだいを見分けるため
        // 保護者が編集できる。子のドキュメントには書かない）。
        const fallback = link.name || fallbackChildName(link.grade);
        const summary = buildChildSummary(data, fallback, nowMs);
        return {
          ...summary,
          uid: link.uid,
          name: link.name || summary.name,
          grade: link.grade ?? summary.grade,
        };
      });

      console.log(
        `[tsudumonParentDashboard] parent=${parentUid} children=${children.length}`
      );
      res.status(200).json({ ok: true, children });
    } catch (error) {
      console.error('[tsudumonParentDashboard] failed:', error);
      res.status(500).json({ error: 'internal' });
    }
  });

/**
 * 連携中の子の Stripe Billing Portal（お支払い方法の変更・解約）を開く。
 * POST { idToken, childUid } → { ok, url } | { ok:false, reason }
 *
 * 既存 `tsudumonCreatePortal` は「本人の customerId」しか開けないため、
 * 保護者が払った契約を保護者自身が管理できるようにここで別口を用意する。
 * **連携中の子に限定**する（uid を知っていても、繋がっていなければ開けない）。
 */
export const tsudumonParentPortal = functions
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
    if (!secretKey) {
      console.error('[tsudumonParentPortal] Stripe env is not set');
      res.status(503).json({ ok: false, reason: 'not_configured' });
      return;
    }

    try {
      const parentUid = await verifyParentUid(req.body?.idToken, res);
      if (!parentUid) return;
      const childUid = req.body?.childUid;
      if (typeof childUid !== 'string' || !childUid) {
        res.status(400).json({ error: 'childUid is required' });
        return;
      }

      const db = await getDb();
      const parentSnap = await db.doc(`users/${parentUid}`).get();
      const links = readLinkedChildren(
        parentSnap.exists ? (parentSnap.data() as Record<string, unknown>) : {}
      );
      if (!links.some((l) => l.uid === childUid)) {
        res.status(403).json({ ok: false, reason: 'not_linked' });
        return;
      }

      const childSnap = await db.doc(`users/${childUid}`).get();
      const stripeTsudumon = childSnap.exists
        ? (childSnap.data() as Record<string, unknown>).stripeTsudumon
        : null;
      const customerId =
        stripeTsudumon && typeof stripeTsudumon === 'object'
          ? (stripeTsudumon as Record<string, unknown>).customerId
          : '';
      if (typeof customerId !== 'string' || !customerId) {
        res.status(200).json({ ok: false, reason: 'no_subscription' });
        return;
      }

      const params = new URLSearchParams();
      params.append('customer', customerId);
      params.append('return_url', 'https://tsudumon.jp/parents/dashboard/');

      const stripeRes = await fetch(
        'https://api.stripe.com/v1/billing_portal/sessions',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${secretKey}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params,
        }
      );
      const data = (await stripeRes.json().catch(() => ({}))) as Record<
        string,
        unknown
      >;
      const url = typeof data.url === 'string' ? data.url : '';
      if (!stripeRes.ok || !url) {
        console.error('[tsudumonParentPortal] portal creation failed', data);
        res.status(502).json({ ok: false, reason: 'stripe_error' });
        return;
      }
      res.status(200).json({ ok: true, url });
    } catch (error) {
      console.error('[tsudumonParentPortal] failed:', error);
      res.status(500).json({ error: 'internal' });
    }
  });

/**
 * 保護者画面での子の表示名を変える。
 * POST { idToken, childUid, name } → { ok }
 *
 * 同学年のきょうだい（双子など）は学年だけでは見分けられないため。
 * **書き換えるのは保護者ドキュメントの `tsudumonChildren[].name` だけ**で、
 * 子のドキュメント（`tsudumonParentName`）には触れない。
 */
export const tsudumonParentRenameChild = functions
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
      const parentUid = await verifyParentUid(req.body?.idToken, res);
      if (!parentUid) return;

      const childUid = req.body?.childUid;
      const name = sanitizeParentName(String(req.body?.name ?? ''));
      if (typeof childUid !== 'string' || !childUid || !name) {
        res.status(200).json({ ok: false, reason: 'invalid_name' });
        return;
      }

      const db = await getDb();
      const parentRef = db.doc(`users/${parentUid}`);
      const updated = await db.runTransaction(async (tx) => {
        const snap = await tx.get(parentRef);
        const data = snap.exists
          ? (snap.data() as Record<string, unknown>)
          : {};
        const links = readLinkedChildren(data);
        if (!links.some((l) => l.uid === childUid)) return false;
        const raw = data.tsudumonChildren as Array<Record<string, unknown>>;
        const next = raw.map((c) =>
          c && c.uid === childUid ? { ...c, name } : c
        );
        tx.set(
          parentRef,
          { tsudumonChildren: next },
          { mergeFields: ['tsudumonChildren'] }
        );
        return true;
      });

      if (!updated) {
        res.status(200).json({ ok: false, reason: 'not_linked' });
        return;
      }
      res.status(200).json({ ok: true, name });
    } catch (error) {
      console.error('[tsudumonParentRenameChild] failed:', error);
      res.status(500).json({ error: 'internal' });
    }
  });
