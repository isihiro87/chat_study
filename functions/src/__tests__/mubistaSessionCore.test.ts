// @vitest-environment node

import { describe, it, expect } from 'vitest';
import {
  signMubistaToken,
  verifyMubistaToken,
  makeLinkToken,
  makeSessionToken,
  LINK_TTL_MS,
  SESSION_TTL_MS,
} from '../mubistaSessionCore';

const SECRET = 'test-secret-abc123';
const NOW = 1_000_000_000_000;

describe('sign / verify round-trip', () => {
  it('正しい secret で uid/kind/exp が復元できる', () => {
    const t = signMubistaToken(
      { uid: 'line:U123', kind: 'session', exp: NOW + 1000 },
      SECRET
    );
    const p = verifyMubistaToken(t, SECRET, NOW);
    expect(p).toMatchObject({
      uid: 'line:U123',
      kind: 'session',
      exp: NOW + 1000,
    });
  });
});

describe('改ざん・不正トークンは null', () => {
  it('別 secret では検証失敗', () => {
    const t = makeLinkToken('line:U1', SECRET, NOW);
    expect(verifyMubistaToken(t, 'other-secret', NOW)).toBeNull();
  });
  it('payload 改ざん（uid すり替え）は署名不一致で null', () => {
    const t = makeLinkToken('line:U1', SECRET, NOW);
    const [, sig] = t.split('.');
    const forged =
      Buffer.from(
        JSON.stringify({
          uid: 'line:UEVIL',
          kind: 'link',
          exp: NOW + LINK_TTL_MS,
        }),
        'utf8'
      ).toString('base64url') +
      '.' +
      sig;
    expect(verifyMubistaToken(forged, SECRET, NOW)).toBeNull();
  });
  it('壊れた形式は null', () => {
    expect(verifyMubistaToken('garbage', SECRET, NOW)).toBeNull();
    expect(verifyMubistaToken('', SECRET, NOW)).toBeNull();
    expect(verifyMubistaToken(null, SECRET, NOW)).toBeNull();
    expect(verifyMubistaToken('a.b.c', SECRET, NOW)).toBeNull();
  });
});

describe('期限・種別', () => {
  it('期限切れは null', () => {
    const t = signMubistaToken(
      { uid: 'line:U1', kind: 'link', exp: NOW },
      SECRET
    );
    expect(verifyMubistaToken(t, SECRET, NOW)).toBeNull(); // exp==now は失効
    expect(verifyMubistaToken(t, SECRET, NOW - 1)).not.toBeNull();
  });
  it('kind 指定で種別違いを弾く', () => {
    const link = makeLinkToken('line:U1', SECRET, NOW);
    expect(verifyMubistaToken(link, SECRET, NOW, 'session')).toBeNull();
    expect(verifyMubistaToken(link, SECRET, NOW, 'link')).not.toBeNull();
  });
});

describe('makeLinkToken / makeSessionToken', () => {
  it('link は 15 分・session は 90 日の exp', () => {
    const link = verifyMubistaToken(
      makeLinkToken('line:U1', SECRET, NOW),
      SECRET,
      NOW
    )!;
    expect(link.exp).toBe(NOW + LINK_TTL_MS);
    const s = makeSessionToken('line:U1', SECRET, NOW);
    expect(s.exp).toBe(NOW + SESSION_TTL_MS);
    expect(verifyMubistaToken(s.token, SECRET, NOW, 'session')!.uid).toBe(
      'line:U1'
    );
  });
});
