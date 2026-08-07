// @vitest-environment node
/**
 * 配信停止期間の共有定義。
 *
 * ここが正しくないと、7月に起きた「配信が止まっていたせいで 64.5%（2,395人）が
 * 配信対象外に落ちた」事故がそのまま再発する。
 */
import { describe, it, expect } from 'vitest';
import {
  PUSH_SUSPENSION_WINDOWS,
  CURRENT_SUSPENSION_WINDOW,
  isWithinSuspension,
  findSuspensionGrace,
} from '../pushSuspensionWindows';
import { effectiveLastAnsweredAt } from '../userStatus';
import { isPushSuspended } from '../pushSuspension';

const JULY = PUSH_SUSPENSION_WINDOWS[0];
const d = (iso: string) => new Date(iso);

describe('定義の健全性', () => {
  it('各期間は start < end < baseline の順で、救済幅は正の日数', () => {
    for (const w of PUSH_SUSPENSION_WINDOWS) {
      expect(w.start.getTime(), w.label).toBeLessThan(w.end.getTime());
      // baseline は「配信が戻ったあとのお知らせ日」なので end 以降
      expect(w.baseline.getTime(), w.label).toBeGreaterThanOrEqual(
        w.end.getTime()
      );
      expect(w.activeWindowDays, w.label).toBeGreaterThan(0);
    }
  });

  it('CURRENT は最後の期間を指す', () => {
    expect(CURRENT_SUSPENSION_WINDOW).toBe(
      PUSH_SUSPENSION_WINDOWS[PUSH_SUSPENSION_WINDOWS.length - 1]
    );
  });
});

describe('isWithinSuspension / isPushSuspended', () => {
  it('期間の内側だけ true（開始は含み、終了は含まない）', () => {
    expect(isWithinSuspension(new Date(JULY.start.getTime() - 1))).toBe(false);
    expect(isWithinSuspension(JULY.start)).toBe(true);
    expect(isWithinSuspension(new Date(JULY.end.getTime() - 1))).toBe(true);
    expect(isWithinSuspension(JULY.end)).toBe(false);
  });

  it('pushSuspension 側と判定が一致する（定義を二重に持たない）', () => {
    for (const t of [
      new Date(JULY.start.getTime() - 1),
      JULY.start,
      new Date(JULY.end.getTime() - 1),
      JULY.end,
      d('2026-08-08T00:00:00+09:00'),
    ]) {
      expect(isPushSuspended(t)).toBe(isWithinSuspension(t));
    }
  });
});

describe('findSuspensionGrace（誰を救済するか）', () => {
  it('停止の直前まで解いていた人は救済される', () => {
    expect(findSuspensionGrace(d('2026-07-25T12:00:00+09:00'))).toBe(JULY);
  });

  // 上限を停止「終了」にしているのは、停止中に自分から「1問解く」で
  // 解いていた人を取りこぼさないため（2026-08-03 実測 211人が該当）。
  it('停止中に自分で解いた人も救済される', () => {
    expect(findSuspensionGrace(d('2026-07-27T12:00:00+09:00'))).toBe(JULY);
  });

  it('ずっと前から放置している人は救済しない', () => {
    // 停止開始の30日より前
    expect(findSuspensionGrace(d('2026-06-01T12:00:00+09:00'))).toBeNull();
  });

  it('配信が戻ったあとに解いた人は対象外（救済の必要がない）', () => {
    expect(findSuspensionGrace(d('2026-08-05T12:00:00+09:00'))).toBeNull();
  });
});

describe('effectiveLastAnsweredAt', () => {
  it('救済対象は baseline へ繰り上がる', () => {
    expect(effectiveLastAnsweredAt(d('2026-07-25T12:00:00+09:00'))).toEqual(
      JULY.baseline
    );
  });

  it('対象外はそのまま返す（挙動が変わらない）', () => {
    const after = d('2026-08-05T12:00:00+09:00');
    expect(effectiveLastAnsweredAt(after)).toEqual(after);
    const old = d('2026-06-01T12:00:00+09:00');
    expect(effectiveLastAnsweredAt(old)).toEqual(old);
  });

  it('null はそのまま（未回答のオンボ直後）', () => {
    expect(effectiveLastAnsweredAt(null)).toBeNull();
  });

  // 「解いてくれた人は自然にこの分岐から出る」ことが自己終了の条件。
  it('baseline より後に解けば救済から外れる（自己終了する）', () => {
    const afterBaseline = new Date(JULY.baseline.getTime() + 60_000);
    expect(effectiveLastAnsweredAt(afterBaseline)).toEqual(afterBaseline);
  });
});
