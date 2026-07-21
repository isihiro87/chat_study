/**
 * つづもん ライセンスの「受け取りリンク」自動有効化。
 * 設計: pdf-workbook/docs/つづもん-登録フロー設計.md
 *
 * 購入者が受け取りリンク（www.chatstudy.jp/tsudumon/activate?c=CODE）を開くと、
 * www.chatstudy.jp の既存 LINE Login（Firebase Auth, uid=`line:{userId}`）で
 * uid を取り、コードを手入力せずに自動でライセンスを有効化する。
 *
 * 有効化コア `activateTsudumonLicense` は LINE webhook のトーク送信有効化
 * （handleTsudumonActivation）と共有する。書き込み先は同じ tsudumonLicenses/{code}
 * と users/{uid}.tsudumon なので、ワーク/参考書ゲートとそのまま整合する。
 *
 * 認証は referenceChat.ts と同じ idToken 検証パターン。
 */
import * as functions from 'firebase-functions/v1';
import {
  TSUDUMON_DEFAULT_MAX_ACTIVATIONS,
  TSUDUMON_PLAN_LABEL,
  computeTsudumonExpiresAtMs,
  evaluateTsudumonAccess,
  extractTsudumonCode,
  readTsudumonEntitlement,
  tsudumonPlanGrades,
  type TsudumonPlan,
} from './tsudumonCore';

export type TsudumonActivationOutcome =
  | { kind: 'ok'; plan: TsudumonPlan; expiresMs: number; already: boolean }
  | { kind: 'not_found' }
  | { kind: 'revoked' }
  | { kind: 'expired' }
  | { kind: 'max'; max: number };

async function getDb() {
  const { initializeApp, getApps } = await import('firebase-admin/app');
  const { getFirestore, FieldValue } = await import('firebase-admin/firestore');
  if (getApps().length === 0) {
    initializeApp();
  }
  return { db: getFirestore(), FieldValue };
}

/**
 * ライセンスを uid に紐付けて有効化する（LINE webhook / 受け取りリンク 共通コア）。
 * reply / JSON への整形は呼び出し側で行う。トランザクションで二重登録・上限・
 * 期限・失効を検証し、初回登録で有効期限を確定する。
 */
export async function activateTsudumonLicense(
  uid: string,
  code: string
): Promise<TsudumonActivationOutcome> {
  const { db, FieldValue } = await getDb();
  const { Timestamp } = await import('firebase-admin/firestore');
  const licRef = db.doc(`tsudumonLicenses/${code}`);
  const userRef = db.doc(`users/${uid}`);

  return db.runTransaction(async (tx): Promise<TsudumonActivationOutcome> => {
    const snap = await tx.get(licRef);
    if (!snap.exists) return { kind: 'not_found' };
    const lic = snap.data() as Record<string, unknown>;
    if (lic.status !== 'active') return { kind: 'revoked' };

    const activated: string[] = Array.isArray(lic.activatedUids)
      ? (lic.activatedUids as string[])
      : [];
    const max =
      typeof lic.maxActivations === 'number'
        ? lic.maxActivations
        : TSUDUMON_DEFAULT_MAX_ACTIVATIONS;
    const already = activated.includes(uid);
    if (!already && activated.length >= max) return { kind: 'max', max };

    const nowMs = Date.now();
    const toMillis = (v: unknown): number | null => {
      const t = v as { toMillis?: () => number } | null | undefined;
      return t && typeof t.toMillis === 'function' ? t.toMillis() : null;
    };
    const years = typeof lic.years === 'number' ? lic.years : 1;
    const firstMs = toMillis(lic.firstActivatedAt) ?? nowMs;
    const expiresMs =
      toMillis(lic.expiresAt) ?? computeTsudumonExpiresAtMs(firstMs, years);
    if (nowMs >= expiresMs) return { kind: 'expired' };

    const plan = lic.plan as TsudumonPlan;
    tx.set(
      licRef,
      {
        firstActivatedAt: lic.firstActivatedAt ?? Timestamp.fromMillis(firstMs),
        expiresAt: lic.expiresAt ?? Timestamp.fromMillis(expiresMs),
        activatedUids: FieldValue.arrayUnion(uid),
        lastActivatedAt: Timestamp.fromMillis(nowMs),
      },
      { merge: true }
    );
    tx.set(
      userRef,
      {
        tsudumon: {
          code,
          plan,
          years,
          activatedAt: Timestamp.fromMillis(nowMs),
          expiresAt: Timestamp.fromMillis(expiresMs),
        },
      },
      { merge: true }
    );
    return { kind: 'ok', plan, expiresMs, already };
  });
}

/** 有効期限を「YYYY年M月D日」表記に（JST）。 */
function expiresLabel(ms: number): string {
  const d = new Date(ms + 9 * 3600 * 1000);
  return `${d.getUTCFullYear()}年${d.getUTCMonth() + 1}月${d.getUTCDate()}日`;
}

/**
 * 受け取りリンクからの自動有効化 HTTP エンドポイント。
 * POST { idToken, code } → { ok, plan, planLabel, expiresLabel, already } | { ok:false, reason, message }
 */
export const tsudumonActivate = functions
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

    const { idToken, code } = req.body ?? {};
    if (typeof idToken !== 'string' || !idToken || typeof code !== 'string') {
      res.status(400).json({ error: 'idToken and code are required' });
      return;
    }
    // 受け取りリンクの ?c= は全角・ハイフン省略などの表記ゆれを吸収して正規化
    const normalized = extractTsudumonCode(code);
    if (!normalized) {
      res.status(200).json({
        ok: false,
        reason: 'not_found',
        message:
          'コードの形式が正しくないようです。ご案内メールのコード（TZM-〇〇〇〇-〇〇〇〇）をご確認ください。',
      });
      return;
    }

    try {
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
        return;
      }
      if (!uid.startsWith('line:')) {
        res.status(403).json({ error: 'line_login_required' });
        return;
      }

      const outcome = await activateTsudumonLicense(uid, normalized);
      console.log(
        `[tsudumonActivate] uid=${uid} code=${normalized} → ${outcome.kind}`
      );

      if (outcome.kind === 'ok') {
        res.status(200).json({
          ok: true,
          plan: outcome.plan,
          planLabel: TSUDUMON_PLAN_LABEL[outcome.plan],
          expiresLabel: expiresLabel(outcome.expiresMs),
          already: outcome.already,
        });
        return;
      }
      const messages: Record<
        Exclude<TsudumonActivationOutcome['kind'], 'ok'>,
        string
      > = {
        not_found:
          'このコードが見つかりませんでした。ご案内メールのコードをもう一度ご確認ください。',
        revoked:
          'このコードは現在ご利用いただけない状態です。お手数ですが公式LINEでお問い合わせください。',
        expired:
          'このコードのご利用期間は終了しています。ダウンロード済みのPDF教材は引き続きお使いいただけます。',
        max: 'このコードは登録できるアカウント数の上限に達しています。ご家族での追加利用は公式LINEでご相談ください。',
      };
      res.status(200).json({
        ok: false,
        reason: outcome.kind,
        message: messages[outcome.kind],
      });
    } catch (error) {
      console.error('[tsudumonActivate] failed:', error);
      res.status(500).json({ error: 'internal' });
    }
  });

/**
 * 教材Web版のライセンス確認。POST { idToken } → 学年ごとの解放判定。
 * users/{uid}.tsudumon を 1 read するだけ（read 規律）。教材ページはこの grades に
 * ページの学年が含まれるかで「頭出しのみ／全開放」を切り替える（中間案・ゆるめ）。
 * POST { idToken } → { ok, result, grades, expiresLabel }
 */
export const tsudumonEntitlement = functions
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
    try {
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
        return;
      }
      if (!uid.startsWith('line:')) {
        res.status(403).json({ error: 'line_login_required' });
        return;
      }
      const { db } = await getDb();
      const snap = await db.doc(`users/${uid}`).get();
      const raw = snap.exists
        ? (snap.data() as Record<string, unknown>).tsudumon
        : null;
      const result = evaluateTsudumonAccess(raw, null, Date.now());
      const ent = readTsudumonEntitlement(raw);
      const grades = ent && result === 'ok' ? tsudumonPlanGrades(ent.plan) : [];
      res.status(200).json({
        ok: result === 'ok',
        result,
        grades,
        expiresLabel: ent ? expiresLabel(ent.expiresAtMs) : null,
      });
    } catch (error) {
      console.error('[tsudumonEntitlement] failed:', error);
      res.status(500).json({ error: 'internal' });
    }
  });
