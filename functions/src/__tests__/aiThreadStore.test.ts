import { describe, it, expect } from 'vitest';

import {
  planAppend,
  SEGMENT_MAX_MESSAGES,
  type ThreadMessage,
} from '../aiThreadStore';

function msgs(n: number, at = 1000): ThreadMessage[] {
  return Array.from({ length: n }, (_, i) => ({
    role: i % 2 === 0 ? ('user' as const) : ('model' as const),
    text: `m${i}`,
    atMs: at,
  }));
}

describe('aiThreadStore.planAppend（セグメント分割）', () => {
  it('初回はセグメント1に入る', () => {
    const plans = planAppend(null, msgs(2));
    expect(plans).toHaveLength(1);
    expect(plans[0].seq).toBe(1);
    expect(plans[0].messages).toHaveLength(2);
    expect(plans[0].closes).toBe(false);
  });

  it('余裕があれば現在のセグメントに追記する', () => {
    const plans = planAppend({ seq: 3, count: 10 }, msgs(2));
    expect(plans).toHaveLength(1);
    expect(plans[0].seq).toBe(3);
  });

  it('ちょうど満杯になるとき closes を立てる', () => {
    const plans = planAppend(
      { seq: 1, count: SEGMENT_MAX_MESSAGES - 2 },
      msgs(2)
    );
    expect(plans).toHaveLength(1);
    expect(plans[0].closes).toBe(true);
  });

  it('満杯のセグメントには追記せず次の seq を開く', () => {
    const plans = planAppend({ seq: 5, count: SEGMENT_MAX_MESSAGES }, msgs(2));
    expect(plans).toHaveLength(1);
    expect(plans[0].seq).toBe(6);
    expect(plans[0].closes).toBe(false);
  });

  it('境界を跨ぐ追記は2つに分割する', () => {
    const plans = planAppend(
      { seq: 1, count: SEGMENT_MAX_MESSAGES - 1 },
      msgs(2)
    );
    expect(plans).toHaveLength(2);
    expect(plans[0].seq).toBe(1);
    expect(plans[0].messages).toHaveLength(1);
    expect(plans[0].closes).toBe(true);
    expect(plans[1].seq).toBe(2);
    expect(plans[1].messages).toHaveLength(1);
    expect(plans[1].closes).toBe(false);
  });

  it('1セグメントの上限を超えるメッセージは複数に分かれる', () => {
    const plans = planAppend(null, msgs(SEGMENT_MAX_MESSAGES * 2 + 5));
    expect(plans).toHaveLength(3);
    expect(plans[0].messages).toHaveLength(SEGMENT_MAX_MESSAGES);
    expect(plans[1].messages).toHaveLength(SEGMENT_MAX_MESSAGES);
    expect(plans[2].messages).toHaveLength(5);
    expect(plans[0].closes).toBe(true);
    expect(plans[1].closes).toBe(true);
    expect(plans[2].closes).toBe(false);
  });

  it('どのセグメントも上限を超えない（1MB 制限を守る前提）', () => {
    const plans = planAppend({ seq: 2, count: 99 }, msgs(250));
    for (const p of plans) {
      expect(p.messages.length).toBeLessThanOrEqual(SEGMENT_MAX_MESSAGES);
    }
  });

  it('全メッセージが失われずどこかに割り当てられる', () => {
    const incoming = msgs(137);
    const plans = planAppend({ seq: 1, count: 42 }, incoming);
    const total = plans.reduce((sum, p) => sum + p.messages.length, 0);
    expect(total).toBe(incoming.length);
    // 順序も保たれている
    const flat = plans.flatMap((p) => p.messages.map((m) => m.text));
    expect(flat).toEqual(incoming.map((m) => m.text));
  });

  it('空の追記なら何もしない', () => {
    expect(planAppend({ seq: 1, count: 10 }, [])).toEqual([]);
  });

  it('seq は単調増加する（過去のセグメントを上書きしない）', () => {
    const plans = planAppend(
      { seq: 7, count: SEGMENT_MAX_MESSAGES },
      msgs(250)
    );
    const seqs = plans.map((p) => p.seq);
    expect(seqs[0]).toBe(8);
    for (let i = 1; i < seqs.length; i++) {
      expect(seqs[i]).toBeGreaterThan(seqs[i - 1]);
    }
  });
});
