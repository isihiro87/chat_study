import { describe, expect, it } from 'vitest';

import {
  NEW_USER_PUSH_DAYS,
  PUSH_SUSPENSION_END,
  PUSH_SUSPENSION_START,
  getRegisteredAt,
  isPushSuspended,
  isWithinNewUserWindow,
  shouldSuppressPush,
  shouldSuppressPushForRegisteredAt,
} from '../pushSuspension';

/** Firestore Timestamp のふりをする（toDate() だけ持つ）オブジェクト */
function ts(date: Date) {
  return { toDate: () => date };
}

const jst = (iso: string) => new Date(`${iso}+09:00`);

describe('isPushSuspended', () => {
  it('開始前は停止しない', () => {
    expect(isPushSuspended(new Date(PUSH_SUSPENSION_START.getTime() - 1))).toBe(
      false
    );
  });

  it('開始時刻ちょうど〜終了直前は停止中', () => {
    expect(isPushSuspended(PUSH_SUSPENSION_START)).toBe(true);
    expect(isPushSuspended(jst('2026-07-28T06:00:00'))).toBe(true);
    expect(isPushSuspended(new Date(PUSH_SUSPENSION_END.getTime() - 1))).toBe(
      true
    );
  });

  it('8月に入ったら自動的に解除される', () => {
    expect(isPushSuspended(PUSH_SUSPENSION_END)).toBe(false);
    expect(isPushSuspended(jst('2026-08-01T06:00:00'))).toBe(false);
  });
});

describe('isWithinNewUserWindow', () => {
  const now = jst('2026-07-28T07:00:00');

  it('登録当日（0日目）は対象', () => {
    expect(isWithinNewUserWindow(jst('2026-07-28T01:00:00'), now)).toBe(true);
  });

  it('JST 暦日で3日目までは対象', () => {
    expect(isWithinNewUserWindow(jst('2026-07-25T23:00:00'), now)).toBe(true);
  });

  it('4日目は対象外', () => {
    expect(isWithinNewUserWindow(jst('2026-07-24T23:00:00'), now)).toBe(false);
  });

  it('登録日不明（旧スキーマ）は対象外', () => {
    expect(isWithinNewUserWindow(null, now)).toBe(false);
  });

  it('NEW_USER_PUSH_DAYS は3日', () => {
    expect(NEW_USER_PUSH_DAYS).toBe(3);
  });
});

describe('getRegisteredAt', () => {
  it('onboardingStartedAt を優先する', () => {
    const started = jst('2026-07-20T10:00:00');
    const created = jst('2026-07-01T10:00:00');
    expect(
      getRegisteredAt({
        onboardingStartedAt: ts(started),
        createdAt: ts(created),
      })
    ).toEqual(started);
  });

  it('onboardingStartedAt が無ければ createdAt を使う', () => {
    const created = jst('2026-07-01T10:00:00');
    expect(getRegisteredAt({ createdAt: ts(created) })).toEqual(created);
  });

  it('どちらも無ければ null', () => {
    expect(getRegisteredAt({})).toBeNull();
    expect(getRegisteredAt(undefined)).toBeNull();
  });
});

describe('shouldSuppressPush', () => {
  it('停止期間中は既存ユーザーの push を止める', () => {
    const now = jst('2026-07-28T07:00:00');
    const data = { onboardingStartedAt: ts(jst('2026-06-01T10:00:00')) };
    expect(shouldSuppressPush(data, now)).toBe(true);
  });

  it('停止期間中でも登録3日以内は止めない', () => {
    const now = jst('2026-07-28T07:00:00');
    const data = { onboardingStartedAt: ts(jst('2026-07-26T10:00:00')) };
    expect(shouldSuppressPush(data, now)).toBe(false);
  });

  it('停止期間外は誰も止めない（8月に自動復帰）', () => {
    const now = jst('2026-08-03T07:00:00');
    const data = { onboardingStartedAt: ts(jst('2026-06-01T10:00:00')) };
    expect(shouldSuppressPush(data, now)).toBe(false);
  });

  it('登録日不明の旧ユーザーは停止期間中は止める', () => {
    expect(shouldSuppressPush({}, jst('2026-07-28T07:00:00'))).toBe(true);
  });
});

describe('shouldSuppressPushForRegisteredAt', () => {
  it('ms ベースでも同じ判定になる', () => {
    const now = jst('2026-07-28T07:00:00');
    expect(
      shouldSuppressPushForRegisteredAt(
        jst('2026-07-27T10:00:00').getTime(),
        now
      )
    ).toBe(false);
    expect(
      shouldSuppressPushForRegisteredAt(
        jst('2026-07-01T10:00:00').getTime(),
        now
      )
    ).toBe(true);
    expect(shouldSuppressPushForRegisteredAt(null, now)).toBe(true);
  });

  it('停止期間外は常に false', () => {
    expect(
      shouldSuppressPushForRegisteredAt(null, jst('2026-08-05T07:00:00'))
    ).toBe(false);
  });
});
