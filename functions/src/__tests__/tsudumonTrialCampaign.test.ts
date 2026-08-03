// @vitest-environment node
/**
 * 公開キャンペーン「8月15日まで無料でおためし」。
 *
 * ここが狂うと **無料と言いながら課金する**（または期限が数分で切れる）ので、
 * 境界だけは固定しておく。キャンペーンが終わったら定数を過去日時のまま残せば
 * 自動で通常運用（72時間）に戻る。
 */
import { describe, it, expect } from 'vitest';

import {
  TSUDUMON_TRIAL_CAMPAIGN_ENTRY_END_MS,
  TSUDUMON_TRIAL_CAMPAIGN_UNTIL_MS,
  TSUDUMON_TRIAL_HOURS,
  computeTsudumonTrialExpiresAtMs,
  tsudumonTrialMaxDays,
} from '../tsudumonCore';
import { resolveTrialPeriodDays } from '../tsudumonStripe';

const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;
const NORMAL = TSUDUMON_TRIAL_HOURS * HOUR;

describe('computeTsudumonTrialExpiresAtMs', () => {
  it('締切までに始めたら 8月15日まで使える', () => {
    const start = TSUDUMON_TRIAL_CAMPAIGN_ENTRY_END_MS - 6 * DAY;
    expect(computeTsudumonTrialExpiresAtMs(start)).toBe(
      TSUDUMON_TRIAL_CAMPAIGN_UNTIL_MS
    );
  });

  it('締切ぎりぎり（8/11 23:59）でも 8月15日まで＝通常より短くならない', () => {
    const start = TSUDUMON_TRIAL_CAMPAIGN_ENTRY_END_MS - 60 * 1000;
    const got = computeTsudumonTrialExpiresAtMs(start);
    expect(got).toBe(TSUDUMON_TRIAL_CAMPAIGN_UNTIL_MS);
    expect(got).toBeGreaterThanOrEqual(start + NORMAL);
  });

  it('8月12日以降に登録した人は通常の72時間に戻る', () => {
    const start = TSUDUMON_TRIAL_CAMPAIGN_ENTRY_END_MS + 60 * 1000;
    expect(computeTsudumonTrialExpiresAtMs(start)).toBe(start + NORMAL);
  });
});

describe('tsudumonTrialMaxDays（Stripeの trial_period_days の丸め）', () => {
  it('締切まではキャンペーンの長さぶん認める', () => {
    const now = TSUDUMON_TRIAL_CAMPAIGN_ENTRY_END_MS - 6 * DAY;
    expect(tsudumonTrialMaxDays(now)).toBeGreaterThan(3);
  });

  it('締切を過ぎたら3日に戻る', () => {
    expect(
      tsudumonTrialMaxDays(TSUDUMON_TRIAL_CAMPAIGN_ENTRY_END_MS + DAY)
    ).toBe(3);
  });
});

describe('resolveTrialPeriodDays（無料期間中に課金しないこと）', () => {
  it('キャンペーンの体験中に登録しても、期限まで課金されない', () => {
    // これが 3 に丸められていたのが元のバグ。8/15まで無料なのに3日後に請求されていた。
    const now = TSUDUMON_TRIAL_CAMPAIGN_ENTRY_END_MS - 6 * DAY;
    const expiresAtMs = computeTsudumonTrialExpiresAtMs(now);
    const days = resolveTrialPeriodDays(
      { plan: 'set', source: 'trial', expiresAt: expiresAtMs },
      now
    );
    expect(days).toBe(Math.ceil((expiresAtMs - now) / DAY));
    expect(days).toBeGreaterThan(3);
  });

  it('通常運用（キャンペーン後）は従来どおり3日', () => {
    const now = TSUDUMON_TRIAL_CAMPAIGN_ENTRY_END_MS + DAY;
    const days = resolveTrialPeriodDays(
      { plan: 'set', source: 'trial', expiresAt: now + NORMAL },
      now
    );
    expect(days).toBe(3);
  });
});
