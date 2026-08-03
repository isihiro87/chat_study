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
  TSUDUMON_TRIAL_CAMPAIGN_END_MS,
  TSUDUMON_TRIAL_HOURS,
  computeTsudumonTrialExpiresAtMs,
  tsudumonTrialMaxDays,
} from '../tsudumonCore';
import { resolveTrialPeriodDays } from '../tsudumonStripe';

const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;
const NORMAL = TSUDUMON_TRIAL_HOURS * HOUR;

describe('computeTsudumonTrialExpiresAtMs', () => {
  it('キャンペーン中に始めたら 8月15日まで使える', () => {
    const start = TSUDUMON_TRIAL_CAMPAIGN_END_MS - 10 * DAY;
    expect(computeTsudumonTrialExpiresAtMs(start)).toBe(
      TSUDUMON_TRIAL_CAMPAIGN_END_MS
    );
  });

  it('締切ぎりぎりに始めても、72時間は必ず確保する', () => {
    // ここを max にしていないと、8/15 の 23:50 に始めた人が10分で切れる。
    const start = TSUDUMON_TRIAL_CAMPAIGN_END_MS - 10 * 60 * 1000;
    expect(computeTsudumonTrialExpiresAtMs(start)).toBe(start + NORMAL);
  });

  it('キャンペーンが終わったら通常の72時間に戻る', () => {
    const start = TSUDUMON_TRIAL_CAMPAIGN_END_MS + DAY;
    expect(computeTsudumonTrialExpiresAtMs(start)).toBe(start + NORMAL);
  });
});

describe('tsudumonTrialMaxDays（Stripeの trial_period_days の丸め）', () => {
  it('キャンペーン中はキャンペーンの長さぶん認める', () => {
    const now = TSUDUMON_TRIAL_CAMPAIGN_END_MS - 10 * DAY;
    expect(tsudumonTrialMaxDays(now)).toBeGreaterThanOrEqual(10);
  });

  it('キャンペーン後は3日に戻る', () => {
    expect(tsudumonTrialMaxDays(TSUDUMON_TRIAL_CAMPAIGN_END_MS + DAY)).toBe(3);
  });
});

describe('resolveTrialPeriodDays（無料期間中に課金しないこと）', () => {
  it('キャンペーンの体験中に登録しても、期限まで課金されない', () => {
    // これが 3 に丸められていたのが元のバグ。8/15まで無料なのに3日後に請求されていた。
    const now = TSUDUMON_TRIAL_CAMPAIGN_END_MS - 10 * DAY;
    const expiresAtMs = computeTsudumonTrialExpiresAtMs(now);
    const days = resolveTrialPeriodDays(
      { plan: 'set', source: 'trial', expiresAt: expiresAtMs },
      now
    );
    expect(days).toBe(Math.ceil((expiresAtMs - now) / DAY));
    expect(days).toBeGreaterThan(3);
  });

  it('通常運用（キャンペーン後）は従来どおり3日', () => {
    const now = TSUDUMON_TRIAL_CAMPAIGN_END_MS + DAY;
    const days = resolveTrialPeriodDays(
      { plan: 'set', source: 'trial', expiresAt: now + NORMAL },
      now
    );
    expect(days).toBe(3);
  });
});
