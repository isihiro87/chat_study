import { describe, it, expect } from 'vitest';

import {
  buildAiContext,
  buildAiContextPrompt,
  summarizeWorkbookStats,
  detectAnalysisIntent,
  describeStaleness,
  parseVerifyResult,
  buildAnalysisVerifyInput,
  jstDateKey,
  MIN_ANSWERS_FOR_ANALYSIS,
  PACE_WINDOW_DAYS,
} from '../aiContextCore';
import type { AnswerLite } from '../monthlyReportCore';

/** 2026-07-25 12:00 JST */
const NOW = new Date('2026-07-25T03:00:00Z');
const DAY = 24 * 3600 * 1000;

function answer(topic: string, isCorrect: boolean, daysAgo = 0): AnswerLite {
  return {
    questionId: `q-${topic}-${daysAgo}-${isCorrect}`,
    choice: 0,
    topic,
    subject: 'history',
    isCorrect,
    answeredAt: new Date(NOW.getTime() - daysAgo * DAY),
  };
}

describe('aiContextCore.buildAiContext', () => {
  it('回答が少なければ hasEnoughData=false', () => {
    const ctx = buildAiContext({
      answers: [answer('鎌倉幕府の成立', true)],
      now: NOW,
    });
    expect(ctx.hasEnoughData).toBe(false);
    expect(ctx.totalAnswered).toBe(1);
  });

  it('十分な回答があれば集計する', () => {
    const answers = [
      ...Array.from({ length: 4 }, () => answer('鎌倉幕府の成立', true)),
      answer('鎌倉幕府の成立', false),
      ...Array.from({ length: 3 }, () => answer('律令国家と奈良時代', true)),
    ];
    const ctx = buildAiContext({ answers, now: NOW });
    expect(ctx.hasEnoughData).toBe(true);
    expect(ctx.totalAnswered).toBe(8);
    expect(ctx.totalCorrect).toBe(7);
    expect(ctx.correctRate).toBe(88);
    expect(ctx.mostPracticed?.topic).toBe('鎌倉幕府の成立');
  });

  it('全問正解の単元が得意に、間違えた単元がニガテに入る', () => {
    const answers = [
      ...Array.from({ length: 3 }, () => answer('得意単元', true)),
      ...Array.from({ length: 3 }, () => answer('苦手単元', false)),
    ];
    const ctx = buildAiContext({ answers, now: NOW });
    expect(ctx.strengths.map((t) => t.topic)).toContain('得意単元');
    expect(ctx.weaknesses.map((t) => t.topic)).toContain('苦手単元');
  });

  it('学習ペースは直近14日ぶんだけ数える', () => {
    const answers = [
      answer('A', true, 0),
      answer('A', true, 1),
      answer('A', true, 2),
      // 期間外
      answer('A', true, PACE_WINDOW_DAYS + 5),
      answer('A', true, PACE_WINDOW_DAYS + 6),
    ];
    const ctx = buildAiContext({ answers, now: NOW });
    expect(ctx.activeDaysInPace).toBe(3);
  });

  it('同じ日の複数回答は1日として数える', () => {
    const answers = [answer('A', true, 0), answer('A', false, 0)];
    const ctx = buildAiContext({ answers, now: NOW });
    expect(ctx.activeDaysInPace).toBe(1);
  });

  it('回答ゼロでも壊れない', () => {
    const ctx = buildAiContext({ answers: [], now: NOW });
    expect(ctx.totalAnswered).toBe(0);
    expect(ctx.hasEnoughData).toBe(false);
    expect(ctx.correctRate).toBe(0);
  });

  it('集計日が記録される', () => {
    const ctx = buildAiContext({ answers: [], now: NOW });
    expect(ctx.computedDateJST).toBe(jstDateKey(NOW));
  });
});

describe('aiContextCore.summarizeWorkbookStats', () => {
  it('total と正答率を出す', () => {
    const s = summarizeWorkbookStats({ total: 20, correct: 15 });
    expect(s?.total).toBe(20);
    expect(s?.rate).toBe(75);
  });

  it('byTopic の2段構造から単元別のニガテを出す', () => {
    const s = summarizeWorkbookStats({
      total: 10,
      correct: 6,
      byTopic: {
        '04': {
          律令国家と奈良時代: { t: 5, c: 2 },
          飛鳥時代: { t: 5, c: 4 },
        },
      },
    });
    expect(s?.weakTopics[0].topic).toBe('律令国家と奈良時代');
    expect(s?.weakTopics[0].rate).toBe(40);
  });

  it('ニガテは最大3件', () => {
    const byTopic: Record<string, Record<string, { t: number; c: number }>> = {
      '01': {},
    };
    for (let i = 0; i < 10; i++) {
      byTopic['01'][`単元${i}`] = { t: 5, c: 1 };
    }
    const s = summarizeWorkbookStats({ total: 50, correct: 10, byTopic });
    expect(s?.weakTopics.length).toBeLessThanOrEqual(3);
  });

  it('未実施・壊れた値なら undefined', () => {
    expect(summarizeWorkbookStats(undefined)).toBeUndefined();
    expect(summarizeWorkbookStats({})).toBeUndefined();
    expect(summarizeWorkbookStats({ total: 0 })).toBeUndefined();
    expect(summarizeWorkbookStats('x')).toBeUndefined();
  });
});

describe('aiContextCore.buildAiContextPrompt', () => {
  const richCtx = buildAiContext({
    answers: [
      ...Array.from({ length: 4 }, () => answer('鎌倉幕府の成立', true)),
      ...Array.from({ length: 4 }, () => answer('律令国家と奈良時代', false)),
    ],
    now: NOW,
  });

  it('aiContext が無ければ何も足さない', () => {
    expect(buildAiContextPrompt(undefined, NOW)).toBe('');
  });

  it('実データの数字と単元名が入る', () => {
    const p = buildAiContextPrompt(richCtx, NOW);
    expect(p).toContain('鎌倉幕府の成立');
    expect(p).toContain('律令国家と奈良時代');
    expect(p).toContain('8問');
  });

  it('「ここに無い単元名を作らない」と釘を刺す', () => {
    const p = buildAiContextPrompt(richCtx, NOW);
    expect(p).toContain('作らない');
    expect(p).toContain('推測せず');
  });

  it('鮮度を明示して「今日の分も入ってる」と言わせない', () => {
    const p = buildAiContextPrompt(richCtx, new Date(NOW.getTime() + DAY));
    expect(p).toContain('前日夜までの集計');
    expect(p).toContain('とは言わない');
  });

  it('データ不足なら「推測でニガテを作るな」と指示する', () => {
    const thin = buildAiContext({ answers: [answer('A', true)], now: NOW });
    const p = buildAiContextPrompt(thin, NOW);
    expect(p).toContain('推測でニガテを作らず');
    expect(p).not.toContain('ニガテそうな単元');
  });

  it('ワーク演習の集計も入る', () => {
    const ctx = buildAiContext({
      answers: Array.from({ length: MIN_ANSWERS_FOR_ANALYSIS }, () =>
        answer('A', true)
      ),
      workbookStatsRaw: {
        total: 20,
        correct: 12,
        byTopic: { '04': { 奈良: { t: 10, c: 3 } } },
      },
      now: NOW,
    });
    const p = buildAiContextPrompt(ctx, NOW);
    expect(p).toContain('ワーク演習');
    expect(p).toContain('奈良');
  });

  it('Markdown 記法を含まない（LINE で記号が見えるため）', () => {
    const p = buildAiContextPrompt(richCtx, NOW);
    expect(p).not.toMatch(/^\s*[-*]\s+\S.*\*\*/m);
  });
});

describe('aiContextCore.describeStaleness', () => {
  it('同日なら「今日の未明まで」', () => {
    expect(describeStaleness(jstDateKey(NOW), NOW)).toContain('今日');
  });

  it('1日前なら「前日夜まで」', () => {
    expect(
      describeStaleness(jstDateKey(NOW), new Date(NOW.getTime() + DAY))
    ).toBe('前日夜までの集計');
  });

  it('1週間を超えたら「古い集計」と明示する', () => {
    const old = describeStaleness(
      jstDateKey(NOW),
      new Date(NOW.getTime() + 10 * DAY)
    );
    expect(old).toContain('古い集計');
  });

  it('壊れた日付でも例外を投げない', () => {
    expect(() => describeStaleness('not-a-date', NOW)).not.toThrow();
  });
});

describe('aiContextCore.detectAnalysisIntent', () => {
  const yes = [
    'わたしの苦手どこ？',
    'ニガテな単元おしえて',
    '得意なとこある？',
    '正答率どのくらい？',
    '最近どう？',
    '何問解いたっけ',
    '復習はどこからやればいい？',
    '自分の状況しりたい',
  ];
  for (const text of yes) {
    it(`「${text}」→ 分析リクエスト`, () => {
      expect(detectAnalysisIntent(text)).toBe(true);
    });
  }

  const no = ['御成敗式目って何？', 'こんにちは', '今日の問題ちょうだい', ''];
  for (const text of no) {
    it(`「${text}」→ 分析リクエストではない`, () => {
      expect(detectAnalysisIntent(text)).toBe(false);
    });
  }
});

describe('aiContextCore の自己検証', () => {
  it('ok/ng を読む', () => {
    expect(parseVerifyResult('ok')).toBe(true);
    expect(parseVerifyResult('ng')).toBe(false);
    expect(parseVerifyResult('NG です')).toBe(false);
  });

  it('判定不能なら ok（誤検知で正しい回答を捨てない）', () => {
    expect(parseVerifyResult('')).toBe(true);
    expect(parseVerifyResult('わかりません')).toBe(true);
  });

  it('検証入力にデータと回答の両方が入る', () => {
    const input = buildAnalysisVerifyInput('データ本文', 'AIの回答');
    expect(input).toContain('データ本文');
    expect(input).toContain('AIの回答');
  });
});
