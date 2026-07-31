import { describe, it, expect } from 'vitest';

import {
  validatePlan,
  daysUntilTest,
  findCurrentWeek,
  pickTodayTopicKey,
  buildTodayPlanLine,
  buildPlanPrompt,
  buildPlanAckText,
  MAX_WEEKS,
  MAX_TOPICS_PER_WEEK,
  type StudyPlan,
} from '../studyPlanCore';

/** 2026-07-25 12:00 JST */
const NOW = new Date('2026-07-25T03:00:00Z');

const VALID_KEYS = new Set([
  '08-edo-bakufu',
  '08-sakoku',
  '05-kamakura-bakufu',
]);

/** キー → 表示名（テスト用のダミー解決）。 */
const NAME: Record<string, string> = {
  '08-edo-bakufu': '江戸幕府の成立',
  '08-sakoku': '鎖国',
  '05-kamakura-bakufu': '鎌倉幕府の成立',
};
const topicName = (k: string) => NAME[k] ?? null;

const PLAN: StudyPlan = {
  testDate: '2026-08-10',
  weeks: [
    {
      fromDate: '2026-07-20',
      toDate: '2026-07-26',
      topicKeys: ['08-edo-bakufu', '08-sakoku'],
      note: 'まずは流れをつかもう',
    },
    {
      fromDate: '2026-07-27',
      toDate: '2026-08-02',
      topicKeys: ['05-kamakura-bakufu'],
    },
  ],
};

describe('studyPlanCore.validatePlan', () => {
  it('正しいプランを受け付ける', () => {
    const r = validatePlan(PLAN, VALID_KEYS, NOW);
    expect(r.ok).toBe(true);
  });

  describe('🚨 教材に無い単元は保存しない', () => {
    it('未知の単元があれば拒否し、その名前を返す', () => {
      const r = validatePlan(
        {
          testDate: '2026-08-10',
          weeks: [
            {
              fromDate: '2026-07-20',
              toDate: '2026-07-26',
              topicKeys: ['08-edo-bakufu', '存在しない単元'],
            },
          ],
        },
        VALID_KEYS,
        NOW
      );
      expect(r.ok).toBe(false);
      if (!r.ok) {
        expect(r.unknownTopics).toEqual(['存在しない単元']);
      }
    });

    it('未知の単元が複数でも重複を除いて返す', () => {
      const r = validatePlan(
        {
          testDate: '2026-08-10',
          weeks: [
            {
              fromDate: '2026-07-20',
              toDate: '2026-07-26',
              topicKeys: ['謎A', '謎A'],
            },
          ],
        },
        VALID_KEYS,
        NOW
      );
      if (!r.ok) expect(r.unknownTopics).toEqual(['謎A']);
      else throw new Error('should reject');
    });
  });

  describe('日付の検証', () => {
    it('過去のテスト日は拒否', () => {
      const r = validatePlan(
        { ...PLAN, testDate: '2026-07-24' },
        VALID_KEYS,
        NOW
      );
      expect(r.ok).toBe(false);
    });

    it('存在しない日付は拒否', () => {
      const r = validatePlan(
        { ...PLAN, testDate: '2026-02-31' },
        VALID_KEYS,
        NOW
      );
      expect(r.ok).toBe(false);
    });

    it('週の開始日と終了日が逆なら拒否', () => {
      const r = validatePlan(
        {
          testDate: '2026-08-10',
          weeks: [
            {
              fromDate: '2026-07-26',
              toDate: '2026-07-20',
              topicKeys: ['08-edo-bakufu'],
            },
          ],
        },
        VALID_KEYS,
        NOW
      );
      expect(r.ok).toBe(false);
    });
  });

  describe('上限', () => {
    it('週数が上限超過なら拒否', () => {
      const weeks = Array.from({ length: MAX_WEEKS + 1 }, () => ({
        fromDate: '2026-07-20',
        toDate: '2026-07-26',
        topicKeys: ['08-edo-bakufu'],
      }));
      expect(
        validatePlan({ testDate: '2026-08-10', weeks }, VALID_KEYS, NOW).ok
      ).toBe(false);
    });

    it('1週の単元数が上限超過なら拒否（詰め込みすぎない）', () => {
      const r = validatePlan(
        {
          testDate: '2026-08-10',
          weeks: [
            {
              fromDate: '2026-07-20',
              toDate: '2026-07-26',
              topicKeys: Array.from(
                { length: MAX_TOPICS_PER_WEEK + 1 },
                () => '08-edo-bakufu'
              ),
            },
          ],
        },
        VALID_KEYS,
        NOW
      );
      expect(r.ok).toBe(false);
    });
  });

  it('壊れた入力は拒否', () => {
    for (const bad of [null, undefined, 'x', 42, [], {}]) {
      expect(validatePlan(bad, VALID_KEYS, NOW).ok).toBe(false);
    }
  });

  it('週が空なら拒否', () => {
    expect(
      validatePlan({ testDate: '2026-08-10', weeks: [] }, VALID_KEYS, NOW).ok
    ).toBe(false);
  });
});

describe('studyPlanCore の日付計算', () => {
  it('テストまでの残り日数', () => {
    expect(daysUntilTest(PLAN, NOW)).toBe(16);
  });

  it('今日を含む週を返す', () => {
    expect(findCurrentWeek(PLAN, '2026-07-25')?.fromDate).toBe('2026-07-20');
  });

  it('期間外なら null', () => {
    expect(findCurrentWeek(PLAN, '2026-08-05')).toBeNull();
  });
});

describe('studyPlanCore.pickTodayTopicKey（同じ日は同じ答え）', () => {
  const week = PLAN.weeks[0];

  it('週の中で日ごとに単元が回る', () => {
    expect(pickTodayTopicKey(week, '2026-07-20')).toBe('08-edo-bakufu');
    expect(pickTodayTopicKey(week, '2026-07-21')).toBe('08-sakoku');
    expect(pickTodayTopicKey(week, '2026-07-22')).toBe('08-edo-bakufu');
  });

  it('同じ日に何度呼んでも同じ（ランダムにしない）', () => {
    const a = pickTodayTopicKey(week, '2026-07-25');
    const b = pickTodayTopicKey(week, '2026-07-25');
    expect(a).toBe(b);
  });

  it('単元が空なら null', () => {
    expect(
      pickTodayTopicKey({ ...week, topicKeys: [] }, '2026-07-25')
    ).toBeNull();
  });
});

describe('studyPlanCore.buildTodayPlanLine', () => {
  it('残り日数と今日やることを出す', () => {
    const line = buildTodayPlanLine(PLAN, NOW, topicName);
    expect(line).toContain('あと16日');
    expect(line).toMatch(/江戸幕府の成立|鎖国/);
  });

  it('プランが無ければ null（従来の文面のまま）', () => {
    expect(buildTodayPlanLine(undefined, NOW, topicName)).toBeNull();
  });

  it('テストが終わっていれば null', () => {
    const past: StudyPlan = { ...PLAN, testDate: '2026-07-01' };
    expect(buildTodayPlanLine(past, NOW, topicName)).toBeNull();
  });

  it('テスト当日は本番と伝える', () => {
    const today: StudyPlan = { ...PLAN, testDate: '2026-07-25' };
    expect(buildTodayPlanLine(today, NOW, topicName)).toContain('本番');
  });

  it('週の期間外でも残り日数は伝える', () => {
    const plan: StudyPlan = {
      testDate: '2026-08-10',
      weeks: [
        {
          fromDate: '2026-08-01',
          toDate: '2026-08-07',
          topicKeys: ['08-edo-bakufu'],
        },
      ],
    };
    const line = buildTodayPlanLine(plan, NOW, topicName);
    expect(line).toContain('あと16日');
    expect(line).not.toContain('きょうは');
  });

  it('単元名が解決できなくても壊れない', () => {
    const line = buildTodayPlanLine(PLAN, NOW, () => null);
    expect(line).toContain('あと16日');
  });
});

describe('studyPlanCore.buildPlanPrompt', () => {
  it('プランが無ければ空文字', () => {
    expect(buildPlanPrompt(undefined, NOW, topicName)).toBe('');
  });

  it('今日やること・今週の範囲・ひとことが入る', () => {
    const p = buildPlanPrompt(PLAN, NOW, topicName);
    expect(p).toContain('あと16日');
    expect(p).toContain('江戸幕府の成立');
    expect(p).toContain('まずは流れをつかもう');
  });

  it('遅れを問い詰めない指示が入る', () => {
    const p = buildPlanPrompt(PLAN, NOW, topicName);
    expect(p).toContain('問い詰めない');
    expect(p).toContain('責めず');
  });
});

describe('studyPlanCore.buildPlanAckText', () => {
  it('週数・残り日数・今日やることを伝える', () => {
    const t = buildPlanAckText(PLAN, NOW, topicName);
    expect(t).toContain('2026-08-10');
    expect(t).toContain('2週間');
    expect(t).toContain('あと16日');
  });

  it('Markdown 記法を含まない', () => {
    expect(buildPlanAckText(PLAN, NOW, topicName)).not.toMatch(/\*\*|^#\s/m);
  });
});
