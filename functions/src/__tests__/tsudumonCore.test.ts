import {
  extractTsudumonCode,
  generateTsudumonCode,
  tsudumonPlanGrades,
  parseTsudumonPlan,
  computeTsudumonExpiresAtMs,
  readTsudumonEntitlement,
  evaluateTsudumonAccess,
  evaluateTrialEligibility,
  TSUDUMON_CODE_ALPHABET,
} from '../tsudumonCore';

describe('extractTsudumonCode', () => {
  it('正規形のコードを抽出する', () => {
    expect(extractTsudumonCode('TZM-AB2D-3FGH')).toBe('TZM-AB2D-3FGH');
  });

  it('文中・小文字・ハイフンなしでも拾って正規形にする', () => {
    expect(extractTsudumonCode('つづもん登録 tzm-ab2d-3fgh です')).toBe(
      'TZM-AB2D-3FGH'
    );
    expect(extractTsudumonCode('TZMAB2D3FGH')).toBe('TZM-AB2D-3FGH');
  });

  it('全角英数字も正規化して拾う', () => {
    expect(extractTsudumonCode('ＴＺＭ－ＡＢ２Ｄ－３ＦＧＨ')).toBe(
      'TZM-AB2D-3FGH'
    );
  });

  it('紛らわしい文字（0/O/1/I）を含む列や無関係のテキストは null', () => {
    expect(extractTsudumonCode('TZM-AB0D-3FGH')).toBeNull();
    expect(extractTsudumonCode('こんにちは')).toBeNull();
    expect(extractTsudumonCode('')).toBeNull();
  });
});

describe('generateTsudumonCode', () => {
  it('TZM-XXXX-XXXX 形式で、アルファベット内の文字だけを使う', () => {
    let i = 0;
    const code = generateTsudumonCode(
      (max) => (i += 7) % max // 決定的な擬似乱数
    );
    expect(code).toMatch(/^TZM-[A-Z2-9]{4}-[A-Z2-9]{4}$/);
    for (const ch of code.replace(/TZM|-/g, '')) {
      expect(TSUDUMON_CODE_ALPHABET).toContain(ch);
    }
    // 生成したコードは必ず自分の抽出器で拾える（往復整合）
    expect(extractTsudumonCode(code)).toBe(code);
  });
});

describe('parseTsudumonPlan / tsudumonPlanGrades', () => {
  it('学年別とセットの表記ゆれを受ける', () => {
    expect(parseTsudumonPlan('中1')).toBe('中1');
    expect(parseTsudumonPlan('セット')).toBe('set');
    expect(parseTsudumonPlan('3学年セット')).toBe('set');
    expect(parseTsudumonPlan('set')).toBe('set');
    expect(parseTsudumonPlan('中4')).toBeNull();
  });

  it('プラン→学年展開', () => {
    expect(tsudumonPlanGrades('中2')).toEqual(['中2']);
    expect(tsudumonPlanGrades('set')).toEqual(['中1', '中2', '中3']);
  });
});

describe('computeTsudumonExpiresAtMs', () => {
  it('カレンダー年で加算する', () => {
    const start = new Date('2026-07-18T03:00:00Z').getTime();
    expect(new Date(computeTsudumonExpiresAtMs(start, 1)).toISOString()).toBe(
      '2027-07-18T03:00:00.000Z'
    );
    expect(new Date(computeTsudumonExpiresAtMs(start, 3)).toISOString()).toBe(
      '2029-07-18T03:00:00.000Z'
    );
  });
});

describe('readTsudumonEntitlement', () => {
  it('Timestamp風 / Date / number の expiresAt を受ける', () => {
    const ms = 1800000000000;
    expect(
      readTsudumonEntitlement({
        plan: '中1',
        expiresAt: { toMillis: () => ms },
      })
    ).toEqual({ plan: '中1', expiresAtMs: ms });
    expect(
      readTsudumonEntitlement({ plan: 'set', expiresAt: new Date(ms) })
    ).toEqual({ plan: 'set', expiresAtMs: ms });
    expect(readTsudumonEntitlement({ plan: '中3', expiresAt: ms })).toEqual({
      plan: '中3',
      expiresAtMs: ms,
    });
  });

  it('壊れた形は null', () => {
    expect(readTsudumonEntitlement(undefined)).toBeNull();
    expect(readTsudumonEntitlement({ plan: '中5', expiresAt: 1 })).toBeNull();
    expect(readTsudumonEntitlement({ plan: '中1' })).toBeNull();
  });
});

describe('evaluateTsudumonAccess', () => {
  const now = 1000;
  const valid = { plan: '中1' as const, expiresAt: now + 1 };

  it('未登録は none', () => {
    expect(evaluateTsudumonAccess(undefined, '中1', now)).toBe('none');
  });

  it('期間内・購入学年は ok（学年不問は null で通す）', () => {
    expect(evaluateTsudumonAccess(valid, '中1', now)).toBe('ok');
    expect(evaluateTsudumonAccess(valid, null, now)).toBe('ok');
  });

  it('期限切れは expired（学年より優先）', () => {
    const expired = { plan: '中1' as const, expiresAt: now };
    expect(evaluateTsudumonAccess(expired, '中1', now)).toBe('expired');
    expect(evaluateTsudumonAccess(expired, '中2', now)).toBe('expired');
  });

  it('購入学年外は wrong_grade、セットは全学年 ok', () => {
    expect(evaluateTsudumonAccess(valid, '中3', now)).toBe('wrong_grade');
    const set = { plan: 'set' as const, expiresAt: now + 1 };
    expect(evaluateTsudumonAccess(set, '中3', now)).toBe('ok');
  });
});

describe('evaluateTrialEligibility', () => {
  const now = 1000;

  it('未登録・未体験は ok', () => {
    expect(evaluateTrialEligibility(null, null, now)).toBe('ok');
    expect(evaluateTrialEligibility(undefined, undefined, now)).toBe('ok');
  });

  it('現在有効なライセンス/体験を持つ人は already_licensed（trialUsedAt より優先）', () => {
    const licensed = { plan: 'set' as const, expiresAt: now + 1 };
    expect(evaluateTrialEligibility(licensed, null, now)).toBe(
      'already_licensed'
    );
    // 体験フラグが立っていても、いま有効なら「持っている」案内を優先する
    expect(evaluateTrialEligibility(licensed, now - 1, now)).toBe(
      'already_licensed'
    );
  });

  it('体験済み（trialUsedAt truthy）は trial_used', () => {
    expect(evaluateTrialEligibility(null, now - 1, now)).toBe('trial_used');
    expect(
      evaluateTrialEligibility(undefined, { toMillis: () => now }, now)
    ).toBe('trial_used');
  });

  it('期限切れの体験者は trialUsedAt があるので trial_used（体験は 1 回まで）', () => {
    // 期限切れ体験 tsudumon（access !== ok）＋ 体験フラグ → trial_used
    const expiredTrial = {
      plan: 'set' as const,
      source: 'trial',
      expiresAt: now,
    };
    expect(evaluateTrialEligibility(expiredTrial, now, now)).toBe('trial_used');
  });

  it('期限切れの本ライセンス保持者で trialUsedAt なしは ok（再購入までの体験を許す）', () => {
    const expiredLicense = { plan: 'set' as const, expiresAt: now };
    expect(evaluateTrialEligibility(expiredLicense, null, now)).toBe('ok');
  });
});
