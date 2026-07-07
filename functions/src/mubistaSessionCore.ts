/**
 * ムビスタ連携トークンの純粋ロジック（署名・検証）。
 *
 * `line:<LINE userId>` = Firestore の uid を HMAC-SHA256 署名トークンに載せ、
 * LINE → ムビスタ → recordMubistaProgress の間で本人を安全に受け渡す。
 * - link トークン: 短命（15分）。LINE が送るワンタイムリンク（URL に載る）。
 * - session トークン: 長命（90日）。ムビスタが localStorage に保持し毎回の送信に使う。
 *
 * トークン形式: `base64url(JSON payload).base64url(HMAC-SHA256)`。
 * uid はペイロード内（URL 上は署名で保護され、改ざんできない）。
 * secret は呼び出し側が渡す（テスト可能・環境非依存）。
 *
 * 統合設計: docs/ideas/mubista-line-shared-brain.md / .steering/20260707-mubista-id-link
 */

import { createHmac, timingSafeEqual } from 'node:crypto';

export type MubistaTokenKind = 'link' | 'session';

export interface MubistaTokenPayload {
  uid: string;
  kind: MubistaTokenKind;
  /** 失効時刻（エポックミリ秒）。 */
  exp: number;
}

/** 有効期間。 */
export const LINK_TTL_MS = 15 * 60 * 1000; // 15 分
export const SESSION_TTL_MS = 90 * 24 * 60 * 60 * 1000; // 90 日

function b64url(buf: Buffer): string {
  return buf.toString('base64url');
}

function hmac(data: string, secret: string): Buffer {
  return createHmac('sha256', secret).update(data).digest();
}

/** payload を署名してトークン文字列にする。 */
export function signMubistaToken(
  payload: MubistaTokenPayload,
  secret: string
): string {
  const body = b64url(Buffer.from(JSON.stringify(payload), 'utf8'));
  const sig = b64url(hmac(body, secret));
  return `${body}.${sig}`;
}

/**
 * トークンを検証して payload を返す。無効（署名不一致・期限切れ・壊れ）なら null。
 * kind を指定するとその種別のみ受理する。
 */
export function verifyMubistaToken(
  token: unknown,
  secret: string,
  nowMs: number,
  kind?: MubistaTokenKind
): MubistaTokenPayload | null {
  if (typeof token !== 'string' || !token.includes('.')) return null;
  const [body, sig] = token.split('.');
  if (!body || !sig) return null;

  // 署名照合（タイミング安全比較）。
  const expected = hmac(body, secret);
  let given: Buffer;
  try {
    given = Buffer.from(sig, 'base64url');
  } catch {
    return null;
  }
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) {
    return null;
  }

  // ペイロード復号。
  let payload: MubistaTokenPayload;
  try {
    payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
  } catch {
    return null;
  }
  if (
    !payload ||
    typeof payload.uid !== 'string' ||
    !payload.uid ||
    (payload.kind !== 'link' && payload.kind !== 'session') ||
    typeof payload.exp !== 'number'
  ) {
    return null;
  }
  if (nowMs >= payload.exp) return null; // 期限切れ
  if (kind && payload.kind !== kind) return null; // 種別不一致
  return payload;
}

/** LINE が送るワンタイム link トークン。 */
export function makeLinkToken(
  uid: string,
  secret: string,
  nowMs: number
): string {
  return signMubistaToken(
    { uid, kind: 'link', exp: nowMs + LINK_TTL_MS },
    secret
  );
}

/** ムビスタが保持する長命 session トークン。 */
export function makeSessionToken(
  uid: string,
  secret: string,
  nowMs: number
): { token: string; exp: number } {
  const exp = nowMs + SESSION_TTL_MS;
  return {
    token: signMubistaToken({ uid, kind: 'session', exp }, secret),
    exp,
  };
}
