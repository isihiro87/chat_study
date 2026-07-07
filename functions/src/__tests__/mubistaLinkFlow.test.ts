// @vitest-environment node
//
// フェーズ2 の連携フローを1本で通す統合テスト（純粋ロジックの結線確認）:
//   LINE: makeLinkToken(uid) → link
//   redeem: verify(link,'link') → makeSessionToken(uid) → session
//   record: verify(session,'session') → uid 復元
// これで「LINEの本人 uid が、URL・localStorage を経ても改ざんされず record に届く」ことを保証する。

import { describe, it, expect } from 'vitest';
import {
  makeLinkToken,
  makeSessionToken,
  verifyMubistaToken,
} from '../mubistaSessionCore';

const SECRET = 'integration-secret-xyz';

describe('mubista link→session→record フロー', () => {
  it('uid が end-to-end で保たれる', () => {
    const uid = 'line:U0123456789abcdef0123456789abcdef';
    const t0 = 1_700_000_000_000;

    // 1) LINE が link を発行
    const link = makeLinkToken(uid, SECRET, t0);

    // 2) redeem: link を検証（link 種別のみ受理）→ session 発行
    const linkPayload = verifyMubistaToken(link, SECRET, t0 + 60_000, 'link');
    expect(linkPayload?.uid).toBe(uid);
    const { token: session } = makeSessionToken(uid, SECRET, t0 + 60_000);

    // 3) record: session を検証（session 種別のみ）→ uid 復元
    const rec = verifyMubistaToken(
      session,
      SECRET,
      t0 + 24 * 3600_000,
      'session'
    );
    expect(rec?.uid).toBe(uid);
  });

  it('link を record にそのまま出しても弾かれる（種別の分離）', () => {
    const uid = 'line:U1';
    const link = makeLinkToken(uid, SECRET, 1000);
    // record は session 種別しか受理しない
    expect(verifyMubistaToken(link, SECRET, 2000, 'session')).toBeNull();
  });

  it('link 失効後（15分超）は redeem 不可', () => {
    const link = makeLinkToken('line:U1', SECRET, 0);
    expect(verifyMubistaToken(link, SECRET, 16 * 60 * 1000, 'link')).toBeNull();
  });
});
