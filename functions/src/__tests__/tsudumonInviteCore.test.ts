// @vitest-environment node

import { describe, it, expect } from 'vitest';
import {
  TSUDUMON_INVITE_TTL_DAYS,
  createInviteId,
  evaluateInvite,
  inviteExpiresAtMs,
  parseInviteToken,
  signInviteToken,
  toMillis,
  verifyInviteToken,
} from '../tsudumonInviteCore';

const SECRET = 'test-secret-do-not-use-in-production';

describe('createInviteId', () => {
  it('base64url 22文字を返す', () => {
    expect(createInviteId()).toMatch(/^[A-Za-z0-9_-]{22}$/);
  });

  it('毎回異なる（衝突しない）', () => {
    const ids = new Set(Array.from({ length: 200 }, () => createInviteId()));
    expect(ids.size).toBe(200);
  });

  it('乱数ソースを差し替えられる', () => {
    const id = createInviteId(() => Buffer.alloc(16, 0));
    expect(id).toBe('AAAAAAAAAAAAAAAAAAAAAA');
  });
});

describe('signInviteToken / verifyInviteToken', () => {
  it('署名したトークンを検証すると inviteId が戻る', () => {
    const id = createInviteId();
    expect(verifyInviteToken(signInviteToken(id, SECRET), SECRET)).toBe(id);
  });

  it('別の secret では検証に失敗する', () => {
    const token = signInviteToken(createInviteId(), SECRET);
    expect(verifyInviteToken(token, 'another-secret')).toBeNull();
  });

  it('secret が空なら必ず失敗する（env 未設定で素通りさせない）', () => {
    const token = signInviteToken(createInviteId(), SECRET);
    expect(verifyInviteToken(token, '')).toBeNull();
  });

  it('inviteId を差し替えた改ざんトークンは弾く', () => {
    const id = createInviteId();
    const other = createInviteId();
    const signature = signInviteToken(id, SECRET).split('.')[1];
    expect(verifyInviteToken(`${other}.${signature}`, SECRET)).toBeNull();
  });

  it('署名を1文字書き換えたトークンは弾く', () => {
    const token = signInviteToken(createInviteId(), SECRET);
    const [id, sig] = token.split('.');
    const flipped = (sig[0] === 'a' ? 'b' : 'a') + sig.slice(1);
    expect(verifyInviteToken(`${id}.${flipped}`, SECRET)).toBeNull();
  });

  it('署名なし（inviteId だけ）では通らない', () => {
    const id = createInviteId();
    expect(verifyInviteToken(id, SECRET)).toBeNull();
  });
});

describe('parseInviteToken', () => {
  it.each([
    ['空文字', ''],
    ['ドット無し', 'abcdefghijklmnopqrstuv'],
    ['先頭がドット', '.0123456789abcdef0123456789abcdef'],
    ['inviteId が短い', 'short.0123456789abcdef0123456789abcdef'],
    ['署名が短い', 'AAAAAAAAAAAAAAAAAAAAAA.0123456789abcdef'],
    [
      '署名に hex 以外',
      'AAAAAAAAAAAAAAAAAAAAAA.zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
    ],
    [
      'inviteId に不正文字',
      'AAAAAAAAAAAAAAAAAAAA+/.0123456789abcdef0123456789abcdef',
    ],
  ])('%s は null', (_label, token) => {
    expect(parseInviteToken(token)).toBeNull();
  });

  it.each([undefined, null, 123, {}, []])('非文字列 %s は null', (token) => {
    expect(parseInviteToken(token)).toBeNull();
  });
});

describe('evaluateInvite', () => {
  const childUid = 'line:U0123456789abcdef';
  const now = 1_800_000_000_000;

  it('期限内なら ok', () => {
    const { result, snapshot } = evaluateInvite(
      { childUid, expiresAt: now + 1000 },
      now
    );
    expect(result).toBe('ok');
    expect(snapshot).toEqual({ childUid, expiresAtMs: now + 1000 });
  });

  it('期限ちょうどは expired（境界）', () => {
    expect(evaluateInvite({ childUid, expiresAt: now }, now).result).toBe(
      'expired'
    );
  });

  it('期限切れは expired（invalid と区別して案内文を出し分ける）', () => {
    expect(evaluateInvite({ childUid, expiresAt: now - 1 }, now).result).toBe(
      'expired'
    );
  });

  it('Firestore Timestamp 形式（toMillis）も読める', () => {
    const raw = { childUid, expiresAt: { toMillis: () => now + 5000 } };
    expect(evaluateInvite(raw, now).result).toBe('ok');
  });

  it.each([
    ['doc なし', null],
    ['オブジェクトでない', 'nope'],
    ['childUid なし', { expiresAt: 1 }],
    ['childUid が line: で始まらない', { childUid: 'U123', expiresAt: 1 }],
    ['expiresAt なし', { childUid }],
    ['expiresAt が不正', { childUid, expiresAt: 'tomorrow' }],
  ])('%s は invalid', (_label, raw) => {
    expect(evaluateInvite(raw, now).result).toBe('invalid');
  });
});

describe('toMillis', () => {
  it('number / Date / Timestamp を受ける', () => {
    expect(toMillis(1234)).toBe(1234);
    expect(toMillis(new Date(1234))).toBe(1234);
    expect(toMillis({ toMillis: () => 1234 })).toBe(1234);
  });

  it('NaN / Infinity は null', () => {
    expect(toMillis(NaN)).toBeNull();
    expect(toMillis(Infinity)).toBeNull();
    expect(toMillis({ toMillis: () => NaN })).toBeNull();
  });

  it('その他は null', () => {
    expect(toMillis(undefined)).toBeNull();
    expect(toMillis('2026-07-27')).toBeNull();
  });
});

describe('inviteExpiresAtMs', () => {
  it('発行から14日後', () => {
    const now = 1_800_000_000_000;
    expect(inviteExpiresAtMs(now) - now).toBe(
      TSUDUMON_INVITE_TTL_DAYS * 24 * 60 * 60 * 1000
    );
  });
});
