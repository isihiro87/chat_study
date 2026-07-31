import { describe, it, expect } from 'vitest';

import {
  decideLookbackWindow,
  lookbackSinceMs,
  windowLabel,
  summarizeLookback,
  buildDailySourceText,
  isTooSimilar,
  pushMessageHistory,
  alreadySentToday,
  buildFallbackDailyMessage,
  LOOKBACK_DAYS,
  DAILY_MESSAGE_PROMPT,
} from '../aiDailyMessageCore';
import type { AnswerLite } from '../monthlyReportCore';

const DAY = 24 * 3600 * 1000;
/** 2026-07-25（土）12:00 JST */
const SAT = new Date('2026-07-25T03:00:00Z');

function answer(
  topic: string,
  isCorrect: boolean,
  daysAgo: number
): AnswerLite {
  return {
    questionId: `q${topic}${daysAgo}${isCorrect}`,
    choice: 0,
    topic,
    subject: 'history',
    isCorrect,
    answeredAt: new Date(SAT.getTime() - daysAgo * DAY),
  };
}

describe('aiDailyMessageCore.decideLookbackWindow', () => {
  it('ふつうの日は前日', () => {
    expect(decideLookbackWindow(SAT)).toBe('day');
  });

  it('月曜は1週間', () => {
    // 2026-07-27 は月曜
    expect(decideLookbackWindow(new Date('2026-07-27T03:00:00Z'))).toBe('week');
  });

  it('毎月1日は1か月', () => {
    expect(decideLookbackWindow(new Date('2026-08-01T03:00:00Z'))).toBe(
      'month'
    );
  });

  it('1日が月曜なら長い方（1か月）を優先する', () => {
    // 2026-06-01 は月曜
    const d = new Date('2026-06-01T03:00:00Z');
    expect(d.getUTCDay()).toBe(1);
    expect(decideLookbackWindow(d)).toBe('month');
  });

  it('JST で日付が変わる境界を正しく扱う', () => {
    // 2026-07-31 16:00 UTC = 2026-08-01 01:00 JST → 月初
    expect(decideLookbackWindow(new Date('2026-07-31T16:00:00Z'))).toBe(
      'month'
    );
  });
});

describe('aiDailyMessageCore の期間', () => {
  it('日数がそれぞれ対応する', () => {
    expect(LOOKBACK_DAYS.day).toBe(1);
    expect(LOOKBACK_DAYS.week).toBe(7);
    expect(LOOKBACK_DAYS.month).toBeGreaterThan(27);
  });

  it('開始時刻が期間ぶん過去になる', () => {
    expect(SAT.getTime() - lookbackSinceMs(SAT, 'week')).toBe(7 * DAY);
  });

  it('ラベルが日本語で出る', () => {
    expect(windowLabel('day')).toBe('きのう');
    expect(windowLabel('week')).toContain('1週間');
    expect(windowLabel('month')).toContain('1か月');
  });
});

describe('aiDailyMessageCore.summarizeLookback', () => {
  const answers = [
    answer('江戸幕府の成立', true, 0),
    answer('江戸幕府の成立', false, 0),
    answer('鎖国', true, 3),
    answer('鎖国', false, 3),
    answer('鎖国', false, 3),
    answer('古い単元', true, 20),
  ];

  it('期間内だけを集計する（前日）', () => {
    const s = summarizeLookback(answers, 'day', SAT);
    expect(s.answered).toBe(2);
    expect(s.correct).toBe(1);
    expect(s.topics[0].topic).toBe('江戸幕府の成立');
  });

  it('期間を広げると増える（1週間）', () => {
    const s = summarizeLookback(answers, 'week', SAT);
    expect(s.answered).toBe(5);
    expect(s.activeDays).toBe(2);
  });

  it('1か月なら古いぶんも入る', () => {
    expect(summarizeLookback(answers, 'month', SAT).answered).toBe(6);
  });

  it('つまずいた単元を正答率の低い順に出す', () => {
    const s = summarizeLookback(answers, 'week', SAT);
    expect(s.weakTopics[0].topic).toBe('鎖国');
  });

  it('期間内に学習が無ければ isSilent', () => {
    const s = summarizeLookback([answer('x', true, 10)], 'day', SAT);
    expect(s.isSilent).toBe(true);
    expect(s.answered).toBe(0);
  });

  it('沈黙中でも最後に学習した日は分かる（声かけに使う）', () => {
    const s = summarizeLookback([answer('x', true, 10)], 'day', SAT);
    expect(s.lastStudiedDate).toBe('2026-07-15');
  });

  it('一度も学習が無ければ lastStudiedDate は null', () => {
    const s = summarizeLookback([], 'day', SAT);
    expect(s.lastStudiedDate).toBeNull();
    expect(s.isSilent).toBe(true);
  });

  it('単元が空でも「その他」に集約して壊れない', () => {
    const a: AnswerLite = { ...answer('x', true, 0), topic: null };
    expect(summarizeLookback([a], 'day', SAT).topics[0].topic).toBe('その他');
  });
});

describe('aiDailyMessageCore.buildDailySourceText', () => {
  const summary = summarizeLookback(
    [answer('江戸幕府の成立', true, 0), answer('江戸幕府の成立', false, 0)],
    'day',
    SAT
  );

  it('期間と実績が入る', () => {
    const t = buildDailySourceText({ summary, now: SAT });
    expect(t).toContain('きのう');
    expect(t).toContain('2問');
    expect(t).toContain('江戸幕府の成立');
  });

  it('沈黙中はその旨と最終学習日が入る', () => {
    const silent = summarizeLookback([answer('x', true, 10)], 'day', SAT);
    const t = buildDailySourceText({ summary: silent, now: SAT });
    expect(t).toContain('解いていない');
    expect(t).toContain('2026-07-15');
  });

  it('記憶（テスト日・目標・忙しさ）が入る', () => {
    const t = buildDailySourceText({
      summary,
      memory: {
        nextTestDate: '2026-09-10',
        goal: '80点',
        busyNote: '平日は部活',
      },
      now: SAT,
    });
    expect(t).toContain('2026-09-10');
    expect(t).toContain('80点');
    expect(t).toContain('平日は部活');
  });

  it('今日のプランが入る', () => {
    const t = buildDailySourceText({
      summary,
      todayPlanLine: '📅 テストまであと10日。きょうは「鎖国」をやろう',
      now: SAT,
    });
    expect(t).toContain('鎖国');
    expect(t).not.toContain('📅');
  });
});

describe('aiDailyMessageCore のプロンプト', () => {
  it('責めない・作らないを明示している', () => {
    expect(DAILY_MESSAGE_PROMPT).toContain('責めない');
    expect(DAILY_MESSAGE_PROMPT).toContain('作らない');
    expect(DAILY_MESSAGE_PROMPT).toContain('Markdown');
  });
});

describe('aiDailyMessageCore の繰り返し防止', () => {
  const history = {
    recentTexts: ['おはよう！きのうは3問といたね、いい調子！'],
  };

  it('書き出しがほぼ同じなら似ていると判定する', () => {
    // 先頭20文字が一致するケース（末尾だけ違う）
    expect(
      isTooSimilar(
        'おはよう！きのうは3問といたね、いい調子！きょうもいこう',
        history
      )
    ).toBe(true);
  });

  it('途中から言い回しが変わっていれば通す（多少の重なりは許す）', () => {
    expect(
      isTooSimilar('おはよう！きのうは3問といたね、そのちょうし！', history)
    ).toBe(false);
  });

  it('違う書き出しなら通す', () => {
    expect(isTooSimilar('きょうは新しい単元にいってみよう！', history)).toBe(
      false
    );
  });

  it('履歴が無ければ通す', () => {
    expect(isTooSimilar('なんでもいい文章です', undefined)).toBe(false);
  });

  it('履歴は最大3件で新しい順', () => {
    let h = pushMessageHistory(undefined, 'a', SAT);
    h = pushMessageHistory(h, 'b', SAT);
    h = pushMessageHistory(h, 'c', SAT);
    h = pushMessageHistory(h, 'd', SAT);
    expect(h.recentTexts).toEqual(['d', 'c', 'b']);
  });
});

describe('aiDailyMessageCore.alreadySentToday（二重送信の防止）', () => {
  it('同じ日なら true', () => {
    const h = pushMessageHistory(undefined, 'x', SAT);
    expect(alreadySentToday(h, SAT)).toBe(true);
  });

  it('翌日なら false', () => {
    const h = pushMessageHistory(undefined, 'x', SAT);
    expect(alreadySentToday(h, new Date(SAT.getTime() + DAY))).toBe(false);
  });

  it('履歴が無ければ false', () => {
    expect(alreadySentToday(undefined, SAT)).toBe(false);
  });
});

describe('aiDailyMessageCore.buildFallbackDailyMessage（必ず何か届く）', () => {
  it('学習ありのときは実績に触れる', () => {
    const s = summarizeLookback([answer('a', true, 0)], 'day', SAT);
    expect(buildFallbackDailyMessage(s)).toContain('1問');
  });

  it('沈黙中は責めずに誘う', () => {
    const s = summarizeLookback([], 'day', SAT);
    const t = buildFallbackDailyMessage(s);
    expect(t).toContain('ムリのない');
    expect(t).not.toMatch(/サボ|なんで|どうして/);
  });

  it('プランがあれば今日やることを入れる', () => {
    const s = summarizeLookback([], 'day', SAT);
    const t = buildFallbackDailyMessage(s, '📅 きょうは「鎖国」をやろう');
    expect(t).toContain('鎖国');
  });

  it('Markdown 記法を含まない', () => {
    const s = summarizeLookback([answer('a', true, 0)], 'day', SAT);
    expect(buildFallbackDailyMessage(s)).not.toMatch(/\*\*|^#\s|^- /m);
  });
});
