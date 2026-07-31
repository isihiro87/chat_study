import { describe, it, expect } from 'vitest';

import {
  decideRecommendation,
  findNextTopicKey,
  buildRecommendSourceText,
  buildFallbackRecommendText,
  type TopicOrderEntry,
} from '../aiRecommendCore';
import { summarizeLookback } from '../aiDailyMessageCore';
import type { AnswerLite } from '../monthlyReportCore';

const DAY = 24 * 3600 * 1000;
const NOW = new Date('2026-07-25T03:00:00Z');

const TOPICS: TopicOrderEntry[] = [
  { key: '08-edo-bakufu', name: '江戸幕府の成立', chapter: '08', anchor: 1 },
  { key: '08-sakoku', name: '鎖国', chapter: '08', anchor: 2 },
  { key: '09-meiji', name: '明治維新', chapter: '09', anchor: 1 },
];

const NAME_TO_KEY: Record<string, string> = {
  江戸幕府の成立: '08-edo-bakufu',
  鎖国: '08-sakoku',
  明治維新: '09-meiji',
};
const keyByName = (n: string) => NAME_TO_KEY[n] ?? null;

function answer(
  topic: string,
  isCorrect: boolean,
  daysAgo: number
): AnswerLite {
  return {
    questionId: `${topic}${daysAgo}${isCorrect}`,
    choice: 0,
    topic,
    subject: 'history',
    isCorrect,
    answeredAt: new Date(NOW.getTime() - daysAgo * DAY),
  };
}

const emptySummary = summarizeLookback([], 'day', NOW);

describe('aiRecommendCore.decideRecommendation の優先順位', () => {
  it('① プランがあればプランを最優先', () => {
    const r = decideRecommendation({
      planTopicKey: '09-meiji',
      // つまずきがあってもプランが勝つ
      summary: summarizeLookback([answer('鎖国', false, 0)], 'day', NOW),
      topics: TOPICS,
      keyByName,
    });
    expect(r?.kind).toBe('plan');
    expect(r?.topicKey).toBe('09-meiji');
  });

  it('プランの単元が教材に無ければ無視する', () => {
    const r = decideRecommendation({
      planTopicKey: '99-nope',
      summary: emptySummary,
      topics: TOPICS,
      keyByName,
    });
    expect(r?.kind).not.toBe('plan');
  });

  it('② 期間内のつまずきを復習にまわす', () => {
    const r = decideRecommendation({
      summary: summarizeLookback(
        [answer('鎖国', false, 0), answer('鎖国', false, 0)],
        'day',
        NOW
      ),
      topics: TOPICS,
      keyByName,
    });
    expect(r?.kind).toBe('review_recent');
    expect(r?.topicKey).toBe('08-sakoku');
  });

  it('③ 長期的なニガテを復習にまわす', () => {
    const r = decideRecommendation({
      summary: emptySummary,
      context: {
        computedDateJST: '2026-07-24',
        totalAnswered: 40,
        totalCorrect: 20,
        correctRate: 50,
        activeDaysInPace: 5,
        strengths: [],
        weaknesses: [{ topic: '明治維新', total: 10, correct: 3, rate: 30 }],
        mostPracticed: null,
        hasEnoughData: true,
      },
      topics: TOPICS,
      keyByName,
    });
    expect(r?.kind).toBe('review_weak');
    expect(r?.topicKey).toBe('09-meiji');
  });

  it('④ 順調なら次の単元へ進む', () => {
    const r = decideRecommendation({
      summary: summarizeLookback(
        [answer('江戸幕府の成立', true, 0)],
        'day',
        NOW
      ),
      topics: TOPICS,
      keyByName,
    });
    expect(r?.kind).toBe('next');
    expect(r?.topicKey).toBe('08-sakoku');
  });

  it('⑤ しばらく空いていれば前回の続きから軽く再開', () => {
    const r = decideRecommendation({
      // 期間内は無学習だが、長期分析には記録がある
      summary: summarizeLookback([answer('鎖国', true, 10)], 'day', NOW),
      context: {
        computedDateJST: '2026-07-24',
        totalAnswered: 20,
        totalCorrect: 18,
        correctRate: 90,
        activeDaysInPace: 0,
        strengths: [],
        weaknesses: [],
        mostPracticed: { topic: '鎖国', total: 20, correct: 18, rate: 90 },
        hasEnoughData: true,
      },
      topics: TOPICS,
      keyByName,
    });
    expect(r?.kind).toBe('restart');
    expect(r?.topicKey).toBe('08-sakoku');
  });

  it('⑥ 記録が何も無ければ最初の単元', () => {
    const r = decideRecommendation({
      summary: emptySummary,
      topics: TOPICS,
      keyByName,
    });
    expect(r?.kind).toBe('start');
    expect(r?.topicKey).toBe('08-edo-bakufu');
  });

  it('最後の単元まで来ていたら復習にする（次が無い）', () => {
    const r = decideRecommendation({
      summary: summarizeLookback([answer('明治維新', true, 0)], 'day', NOW),
      topics: TOPICS,
      keyByName,
    });
    expect(r?.topicKey).toBe('09-meiji');
    expect(r?.kind).toBe('review_recent');
  });

  it('教材が無ければ null', () => {
    expect(
      decideRecommendation({ summary: emptySummary, topics: [], keyByName })
    ).toBeNull();
  });

  it('必ず教材に実在する単元を返す', () => {
    const cases = [
      { planTopicKey: '09-meiji' },
      { summary: summarizeLookback([answer('鎖国', false, 0)], 'day', NOW) },
      {},
    ];
    for (const c of cases) {
      const r = decideRecommendation({
        summary: emptySummary,
        topics: TOPICS,
        keyByName,
        ...c,
      });
      expect(TOPICS.some((t) => t.key === r?.topicKey)).toBe(true);
    }
  });
});

describe('aiRecommendCore.findNextTopicKey', () => {
  it('章内で次へ進む', () => {
    expect(findNextTopicKey(TOPICS, '08-edo-bakufu')).toBe('08-sakoku');
  });

  it('章をまたいで次へ進む', () => {
    expect(findNextTopicKey(TOPICS, '08-sakoku')).toBe('09-meiji');
  });

  it('最後なら null', () => {
    expect(findNextTopicKey(TOPICS, '09-meiji')).toBeNull();
  });

  it('未知のキーなら null', () => {
    expect(findNextTopicKey(TOPICS, 'x')).toBeNull();
  });

  it('並びが乱れていても章・位置の昇順で判断する', () => {
    const shuffled = [TOPICS[2], TOPICS[0], TOPICS[1]];
    expect(findNextTopicKey(shuffled, '08-edo-bakufu')).toBe('08-sakoku');
  });
});

describe('aiRecommendCore の素材テキスト', () => {
  const rec = {
    kind: 'restart' as const,
    topicKey: '08-sakoku',
    reason: 'しばらく間があいている',
  };

  it('単元・理由・方針が入る', () => {
    const t = buildRecommendSourceText({
      recommendation: rec,
      topicName: '鎖国',
      volume: '歴史 ⑧',
    });
    expect(t).toContain('鎖国');
    expect(t).toContain('歴史 ⑧');
    expect(t).toContain('しばらく間があいている');
    expect(t).toContain('おかえり');
  });

  it('単元の変更と URL 記述を禁じる', () => {
    const t = buildRecommendSourceText({
      recommendation: rec,
      topicName: '鎖国',
      volume: '歴史 ⑧',
    });
    expect(t).toContain('すすめないこと');
    expect(t).toContain('URL は書かない');
  });
});

describe('aiRecommendCore.buildFallbackRecommendText', () => {
  it('久しぶりのときは責めずに迎える', () => {
    const t = buildFallbackRecommendText(
      { kind: 'restart', topicKey: 'x', reason: '' },
      '鎖国'
    );
    expect(t).toContain('おかえり');
    expect(t).not.toMatch(/サボ|なんで|どうして/);
  });

  it('復習は軽く誘う', () => {
    const t = buildFallbackRecommendText(
      { kind: 'review_weak', topicKey: 'x', reason: '' },
      '鎖国'
    );
    expect(t).toContain('5分');
  });

  it('どの種類でも単元名が入り、Markdown を含まない', () => {
    for (const kind of [
      'plan',
      'review_recent',
      'review_weak',
      'next',
      'restart',
      'start',
    ] as const) {
      const t = buildFallbackRecommendText(
        { kind, topicKey: 'x', reason: '' },
        '鎖国'
      );
      expect(t).toContain('鎖国');
      expect(t).not.toMatch(/\*\*|^#\s|^- /m);
    }
  });
});
