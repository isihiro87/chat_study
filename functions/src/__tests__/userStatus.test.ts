// @vitest-environment node

import { describe, it, expect } from 'vitest';
import {
  computeStatusFromLastAnswer,
  shouldSendWinback,
  shouldResetStreak,
  shouldSkipCronPush,
  daysBetweenJst,
} from '../userStatus';

/** JST の日付文字列から Date を作る（テスト用ヘルパー） */
function jstDate(yyyyMmDd: string, hh = 12): Date {
  // JST 12:00 を UTC で表現（UTC 03:00）
  return new Date(`${yyyyMmDd}T${String(hh).padStart(2, '0')}:00:00+09:00`);
}

describe('daysBetweenJst', () => {
  it('同日 = 0', () => {
    expect(daysBetweenJst(jstDate('2026-05-19'), jstDate('2026-05-19'))).toBe(
      0
    );
  });
  it('翌日 = 1', () => {
    expect(daysBetweenJst(jstDate('2026-05-19'), jstDate('2026-05-20'))).toBe(
      1
    );
  });
  it('1週間後 = 7', () => {
    expect(daysBetweenJst(jstDate('2026-05-19'), jstDate('2026-05-26'))).toBe(
      7
    );
  });
});

describe('computeStatusFromLastAnswer - free ユーザー境界値', () => {
  const now = jstDate('2026-05-19');

  it('lastAnsweredAt が null → active', () => {
    expect(
      computeStatusFromLastAnswer({
        lastAnsweredAt: null,
        now,
        plan: 'free',
      })
    ).toBe('active');
  });

  it('3日前 → active', () => {
    expect(
      computeStatusFromLastAnswer({
        lastAnsweredAt: jstDate('2026-05-16'),
        now,
        plan: 'free',
      })
    ).toBe('active');
  });

  it('4日前 → at-risk', () => {
    expect(
      computeStatusFromLastAnswer({
        lastAnsweredAt: jstDate('2026-05-15'),
        now,
        plan: 'free',
      })
    ).toBe('at-risk');
  });

  it('7日前 → at-risk', () => {
    expect(
      computeStatusFromLastAnswer({
        lastAnsweredAt: jstDate('2026-05-12'),
        now,
        plan: 'free',
      })
    ).toBe('at-risk');
  });

  it('8日前 → dormant', () => {
    expect(
      computeStatusFromLastAnswer({
        lastAnsweredAt: jstDate('2026-05-11'),
        now,
        plan: 'free',
      })
    ).toBe('dormant');
  });

  it('14日前 → dormant', () => {
    expect(
      computeStatusFromLastAnswer({
        lastAnsweredAt: jstDate('2026-05-05'),
        now,
        plan: 'free',
      })
    ).toBe('dormant');
  });

  it('15日前 → churned', () => {
    expect(
      computeStatusFromLastAnswer({
        lastAnsweredAt: jstDate('2026-05-04'),
        now,
        plan: 'free',
      })
    ).toBe('churned');
  });

  it('30日前 → churned', () => {
    expect(
      computeStatusFromLastAnswer({
        lastAnsweredAt: jstDate('2026-04-19'),
        now,
        plan: 'free',
      })
    ).toBe('churned');
  });
});

describe('computeStatusFromLastAnswer - プレミアム会員', () => {
  const now = jstDate('2026-05-19');

  it('有効期限内のプレミアム → 常に active（15日離脱でも）', () => {
    expect(
      computeStatusFromLastAnswer({
        lastAnsweredAt: jstDate('2026-05-04'),
        now,
        plan: 'premium',
        premiumUntil: jstDate('2026-06-19'),
      })
    ).toBe('active');
  });

  it('期限切れプレミアム → free と同じロジックで判定', () => {
    expect(
      computeStatusFromLastAnswer({
        lastAnsweredAt: jstDate('2026-05-04'),
        now,
        plan: 'premium',
        premiumUntil: jstDate('2026-05-10'), // 期限切れ
      })
    ).toBe('churned');
  });

  it('premiumUntil 未設定 → free と同じロジック', () => {
    expect(
      computeStatusFromLastAnswer({
        lastAnsweredAt: jstDate('2026-05-15'),
        now,
        plan: 'premium',
      })
    ).toBe('at-risk');
  });
});

describe('shouldSendWinback', () => {
  it('active → at-risk: day3', () => {
    expect(shouldSendWinback('active', 'at-risk')).toBe('day3');
  });
  it('at-risk → dormant: day7', () => {
    expect(shouldSendWinback('at-risk', 'dormant')).toBe('day7');
  });
  it('dormant → churned: day14', () => {
    expect(shouldSendWinback('dormant', 'churned')).toBe('day14');
  });
  it('同じ status 維持: null', () => {
    expect(shouldSendWinback('dormant', 'dormant')).toBeNull();
    expect(shouldSendWinback('churned', 'churned')).toBeNull();
  });
  it('active への復帰: null（Win-back 不要）', () => {
    expect(shouldSendWinback('dormant', 'active')).toBeNull();
  });
  it('急激な遷移（active → dormant など）でも newStatus に対応した Win-back を返す', () => {
    expect(shouldSendWinback('active', 'dormant')).toBe('day7');
    expect(shouldSendWinback('active', 'churned')).toBe('day14');
  });
});

describe('shouldResetStreak', () => {
  it('active → dormant: リセット', () => {
    expect(shouldResetStreak('active', 'dormant')).toBe(true);
  });
  it('at-risk → dormant: リセット', () => {
    expect(shouldResetStreak('at-risk', 'dormant')).toBe(true);
  });
  it('active → at-risk: 維持', () => {
    expect(shouldResetStreak('active', 'at-risk')).toBe(false);
  });
  it('dormant → churned: 既にリセット済みなので false', () => {
    expect(shouldResetStreak('dormant', 'churned')).toBe(false);
  });
  it('active → churned: 一気に飛んだ場合もリセット', () => {
    expect(shouldResetStreak('active', 'churned')).toBe(true);
  });
});

describe('shouldSkipCronPush', () => {
  it('blocked=true → スキップ', () => {
    expect(shouldSkipCronPush({ blocked: true })).toBe(true);
  });
  it('deliveryPaused=true → スキップ', () => {
    expect(shouldSkipCronPush({ deliveryPaused: true })).toBe(true);
  });
  it('両方 true → スキップ', () => {
    expect(shouldSkipCronPush({ blocked: true, deliveryPaused: true })).toBe(
      true
    );
  });
  it('どちらも未定義 → 送る', () => {
    expect(shouldSkipCronPush({})).toBe(false);
  });
  it('false 明示 → 送る', () => {
    expect(shouldSkipCronPush({ blocked: false, deliveryPaused: false })).toBe(
      false
    );
  });
  it('data undefined → 送る（読み取り失敗時に配信を止めない）', () => {
    expect(shouldSkipCronPush(undefined)).toBe(false);
  });
  it("truthy でも true 以外はスキップしない（文字列 'true' 等）", () => {
    expect(shouldSkipCronPush({ deliveryPaused: 'true' })).toBe(false);
  });
});
