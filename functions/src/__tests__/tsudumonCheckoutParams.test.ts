// @vitest-environment node

import { describe, it, expect } from 'vitest';
import {
  buildTsudumonCheckoutParams,
  resolveTrialPeriodDays,
} from '../tsudumonStripe';

const NOW = 1_800_000_000_000;
const DAY = 24 * 60 * 60 * 1000;
const CHILD = 'line:U0123456789abcdef';

function build(
  overrides: Partial<Parameters<typeof buildTsudumonCheckoutParams>[0]> = {}
) {
  return buildTsudumonCheckoutParams({
    uid: CHILD,
    tsudumonRaw: null,
    nowMs: NOW,
    priceId: 'price_normal',
    paidBy: 'self',
    successUrl: 'https://tsudumon.jp/map/?sub=thanks',
    cancelUrl: 'https://tsudumon.jp/',
    ...overrides,
  });
}

describe('buildTsudumonCheckoutParams', () => {
  it('サブスクとして子の uid に紐づく', () => {
    const p = build();
    expect(p.get('mode')).toBe('subscription');
    expect(p.get('client_reference_id')).toBe(CHILD);
    expect(p.get('subscription_data[metadata][uid]')).toBe(CHILD);
  });

  it('商品タグを Session と Subscription の両方に載せる（プレミアム側との相互汚染防止）', () => {
    const p = build();
    expect(p.get('metadata[product]')).toBe('tsudumon');
    expect(p.get('subscription_data[metadata][product]')).toBe('tsudumon');
  });

  it('paidBy を Session と Subscription の両方に載せる', () => {
    const p = build({ paidBy: 'parent' });
    expect(p.get('metadata[paidBy]')).toBe('parent');
    expect(p.get('subscription_data[metadata][paidBy]')).toBe('parent');
  });

  it('price と戻り先を差し替えられる（きょうだい価格・保護者用の戻り先）', () => {
    const p = build({
      priceId: 'price_sibling',
      successUrl: 'https://tsudumon.jp/parents/thanks/?t=abc',
      cancelUrl: 'https://tsudumon.jp/parents/?t=abc',
    });
    expect(p.get('line_items[0][price]')).toBe('price_sibling');
    expect(p.get('success_url')).toBe(
      'https://tsudumon.jp/parents/thanks/?t=abc'
    );
    expect(p.get('cancel_url')).toBe('https://tsudumon.jp/parents/?t=abc');
  });

  it('体験中でなければ trial_period_days を付けない', () => {
    expect(build().has('subscription_data[trial_period_days]')).toBe(false);
  });

  it('体験中なら残日数を trial_period_days に渡す', () => {
    const p = build({
      tsudumonRaw: {
        plan: 'set',
        source: 'trial',
        expiresAt: NOW + 2 * DAY,
      },
    });
    expect(p.get('subscription_data[trial_period_days]')).toBe('2');
  });

  it('日本語ロケール・プロモコード許可は据え置き', () => {
    const p = build();
    expect(p.get('locale')).toBe('ja');
    expect(p.get('allow_promotion_codes')).toBe('true');
  });
});

describe('resolveTrialPeriodDays', () => {
  it('体験でなければ 0', () => {
    expect(
      resolveTrialPeriodDays(
        { plan: 'set', source: 'stripe', expiresAt: NOW + 30 * DAY },
        NOW
      )
    ).toBe(0);
  });

  it('体験が失効済みなら 0', () => {
    expect(
      resolveTrialPeriodDays(
        { plan: 'set', source: 'trial', expiresAt: NOW - 1 },
        NOW
      )
    ).toBe(0);
  });

  it('残り3日なら 3', () => {
    expect(
      resolveTrialPeriodDays(
        { plan: 'set', source: 'trial', expiresAt: NOW + 3 * DAY },
        NOW
      )
    ).toBe(3);
  });

  it('clock skew で 4 日相当になっても 3 に丸める', () => {
    expect(
      resolveTrialPeriodDays(
        { plan: 'set', source: 'trial', expiresAt: NOW + 3.5 * DAY },
        NOW
      )
    ).toBe(3);
  });

  it('残りが1日未満でも最低 1 を返す（0日を渡して即課金しない）', () => {
    expect(
      resolveTrialPeriodDays(
        { plan: 'set', source: 'trial', expiresAt: NOW + 60 * 1000 },
        NOW
      )
    ).toBe(1);
  });

  it('tsudumon が無ければ 0', () => {
    expect(resolveTrialPeriodDays(null, NOW)).toBe(0);
    expect(resolveTrialPeriodDays(undefined, NOW)).toBe(0);
  });
});

describe('特商法の最終確認画面（custom_text）', () => {
  it('通常の申し込みでは、自動更新・引渡時期・解約方法・違約金なしを載せる', () => {
    const notice = build().get('custom_text[submit][message]') ?? '';
    expect(notice).toContain('毎月自動更新');
    expect(notice).toContain('すぐに');
    expect(notice).toContain('解約');
    expect(notice).toContain('違約金はいただきません');
  });

  it('体験中からの申し込みでは、課金の開始が体験終了日であることを明記する', () => {
    const notice =
      build({
        tsudumonRaw: { plan: 'set', source: 'trial', expiresAt: NOW + 2 * DAY },
      }).get('custom_text[submit][message]') ?? '';
    expect(notice).toContain('無料体験の終了日から課金');
  });

  // きょうだい価格（980円）があるので、金額を文面に焼くと二重管理になる。
  // 金額と請求サイクルは Stripe 自身が表示する。
  it('注意書きに金額を書かない', () => {
    for (const raw of [
      null,
      { plan: 'set', source: 'trial', expiresAt: NOW + DAY },
    ]) {
      const notice =
        build({ tsudumonRaw: raw }).get('custom_text[submit][message]') ?? '';
      expect(notice).not.toMatch(/\d{3,}|円/);
    }
  });

  it('Stripe の上限（500文字）に収まる', () => {
    for (const raw of [
      null,
      { plan: 'set', source: 'trial', expiresAt: NOW + DAY },
    ]) {
      const notice =
        build({ tsudumonRaw: raw }).get('custom_text[submit][message]') ?? '';
      expect(notice.length).toBeGreaterThan(0);
      expect(notice.length).toBeLessThanOrEqual(500);
    }
  });
});
