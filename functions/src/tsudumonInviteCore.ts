/**
 * つづもん「おうちの人にわたすカード」の招待トークン（純粋ロジック）。
 * 設計: pdf-workbook/.steering/20260727-parent-handoff/design.md §3
 *
 * 保護者は LINE ログインをしないまま、子の学習実績を見て・子のアカウントに課金できる。
 * そのため URL に載せる識別子は次を満たす必要がある:
 *
 *   1. **LINE uid を載せない**（URLから子のuidを復元できない）
 *   2. Firestore を引く前に偽物を弾ける（総当たりで read を焼かれない）
 *   3. 失効させられる（古いトークが残っていても、いつまでも実績を晒さない）
 *
 * そこで `tsudumonInvites/{inviteId}` の **推測不能なランダム ID** を本体とし、
 * HMAC 署名を付けて「読む前に弾く」を実現する。失効は doc 削除＋`expiresAt` の二段構え。
 *
 *   token = `<inviteId>.<HMAC-SHA256(inviteId, secret) の先頭32hex>`
 *
 * 漏洩時の被害は「他人の子の学習実績が見える」「他人の子に課金してあげられる」に
 * 限定され、書き込み・トーク閲覧・アカウント乗っ取りには繋がらない。
 *
 * 副作用なし・環境非依存（secret は引数で受ける）。Firestore アクセスは tsudumonParent.ts。
 */
import * as crypto from 'crypto';

/** 招待カードの有効期間（日）。古いトークに残ったURLが晒され続けるのを防ぐ。 */
export const TSUDUMON_INVITE_TTL_DAYS = 14;

/** inviteId のバイト長（22文字の base64url になる）。 */
const INVITE_ID_BYTES = 16;

/** 署名の長さ（hex 文字数）。32hex = 128bit で総当たりには十分。 */
const SIGNATURE_HEX_LENGTH = 32;

/** inviteId として許容する形（base64url・長さ固定）。 */
const INVITE_ID_RE = /^[A-Za-z0-9_-]{22}$/;

/** 署名として許容する形。 */
const SIGNATURE_RE = /^[0-9a-f]{32}$/;

/**
 * 推測不能な inviteId を生成する。
 * @param randomBytes テスト用に差し替え可能な乱数ソース（既定は crypto）
 */
export function createInviteId(
  randomBytes: (size: number) => Buffer = crypto.randomBytes
): string {
  return randomBytes(INVITE_ID_BYTES).toString('base64url');
}

/** inviteId に HMAC 署名を付けてトークン文字列にする。 */
export function signInviteToken(inviteId: string, secret: string): string {
  return `${inviteId}.${inviteSignature(inviteId, secret)}`;
}

/** inviteId の署名（先頭32hex）を計算する。 */
function inviteSignature(inviteId: string, secret: string): string {
  return crypto
    .createHmac('sha256', secret)
    .update(inviteId)
    .digest('hex')
    .slice(0, SIGNATURE_HEX_LENGTH);
}

export interface ParsedInviteToken {
  inviteId: string;
  signature: string;
}

/**
 * トークン文字列を分解する。書式が違えば null（Firestore を引かずに弾ける）。
 */
export function parseInviteToken(token: unknown): ParsedInviteToken | null {
  if (typeof token !== 'string' || !token) return null;
  const dot = token.indexOf('.');
  if (dot <= 0) return null;
  const inviteId = token.slice(0, dot);
  const signature = token.slice(dot + 1);
  if (!INVITE_ID_RE.test(inviteId)) return null;
  if (!SIGNATURE_RE.test(signature)) return null;
  return { inviteId, signature };
}

/**
 * トークンを検証して inviteId を返す。書式不正・署名不一致なら null。
 *
 * 署名の比較は**タイミング安全**に行う（`timingSafeEqual`）。長さが揃っていることは
 * 正規表現で保証済み。
 */
export function verifyInviteToken(
  token: unknown,
  secret: string
): string | null {
  const parsed = parseInviteToken(token);
  if (!parsed || !secret) return null;
  const expected = inviteSignature(parsed.inviteId, secret);
  const a = Buffer.from(parsed.signature, 'utf8');
  const b = Buffer.from(expected, 'utf8');
  if (a.length !== b.length) return null;
  if (!crypto.timingSafeEqual(a, b)) return null;
  return parsed.inviteId;
}

/** `tsudumonInvites/{inviteId}` の想定形（Timestamp はミリ秒に落として渡す）。 */
export interface InviteSnapshot {
  childUid: string;
  expiresAtMs: number;
}

export type InviteEvaluation = 'ok' | 'expired' | 'invalid';

/**
 * 招待ドキュメントの有効性を判定する。
 *
 * - doc が無い / childUid が無い → 'invalid'
 * - `expiresAtMs` を過ぎている → 'expired'（案内文を出し分けるため invalid と区別する）
 */
export function evaluateInvite(
  raw: unknown,
  nowMs: number
): { result: InviteEvaluation; snapshot: InviteSnapshot | null } {
  if (!raw || typeof raw !== 'object')
    return { result: 'invalid', snapshot: null };
  const doc = raw as { childUid?: unknown; expiresAt?: unknown };
  const childUid = typeof doc.childUid === 'string' ? doc.childUid : '';
  if (!childUid.startsWith('line:')) {
    return { result: 'invalid', snapshot: null };
  }
  const expiresAtMs = toMillis(doc.expiresAt);
  if (expiresAtMs === null) return { result: 'invalid', snapshot: null };
  const snapshot: InviteSnapshot = { childUid, expiresAtMs };
  if (nowMs >= expiresAtMs) return { result: 'expired', snapshot };
  return { result: 'ok', snapshot };
}

/** Firestore Timestamp / Date / number をミリ秒に正規化する。 */
export function toMillis(value: unknown): number | null {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : null;
  }
  if (value instanceof Date) return value.getTime();
  const t = value as { toMillis?: () => number } | null | undefined;
  if (t && typeof t.toMillis === 'function') {
    const ms = t.toMillis();
    return Number.isFinite(ms) ? ms : null;
  }
  return null;
}

/** 発行時刻から有効期限（ミリ秒）を求める。 */
export function inviteExpiresAtMs(createdAtMs: number): number {
  return createdAtMs + TSUDUMON_INVITE_TTL_DAYS * 24 * 60 * 60 * 1000;
}
