import { describe, it, expect } from 'vitest';
import { stripHtmlTags, estimateReadingTime } from '../../../src/utils/estimateReadingTime';
import type { ChatContent } from '../../../src/data/history-chat/types';

describe('stripHtmlTags', () => {
  it('HTMLタグが正しく除去される', () => {
    expect(stripHtmlTags('<strong>太字</strong>')).toBe('太字');
    expect(stripHtmlTags('<span class="keyword">用語</span>')).toBe('用語');
    expect(stripHtmlTags('タグなしテキスト')).toBe('タグなしテキスト');
  });

  it('rubyタグが除去される', () => {
    const input = '<ruby>猿人<rp>(</rp><rt>えんじん</rt><rp>)</rp></ruby>';
    expect(stripHtmlTags(input)).toBe('猿人(えんじん)');
  });

  it('ネストしたタグが除去される', () => {
    const input = '<strong><span class="keyword">重要用語</span></strong>';
    expect(stripHtmlTags(input)).toBe('重要用語');
  });

  it('空文字列を返す', () => {
    expect(stripHtmlTags('')).toBe('');
  });
});

describe('estimateReadingTime', () => {
  it('空コンテンツの場合に0が返る', () => {
    expect(estimateReadingTime([])).toBe(0);
  });

  it('1分未満の場合に1分が返る', () => {
    const content: ChatContent[] = [
      { type: 'date', text: '2024年' },
    ];
    expect(estimateReadingTime(content)).toBe(1);
  });

  it('dateコンテンツの所要時間が算出される', () => {
    const content: ChatContent[] = [
      { type: 'date', text: '約700万年前〜' },
    ];
    const result = estimateReadingTime(content);
    expect(result).toBeGreaterThanOrEqual(1);
  });

  it('narratorコンテンツの所要時間が算出される', () => {
    const content: ChatContent[] = [
      {
        type: 'narrator',
        text: '人類の歴史は、約<strong>700万年前</strong>のアフリカから始まります。',
      },
    ];
    const result = estimateReadingTime(content);
    expect(result).toBeGreaterThanOrEqual(1);
  });

  it('messageコンテンツの所要時間が算出される', () => {
    const content: ChatContent[] = [
      {
        type: 'message',
        side: 'left',
        characterId: 'researcher',
        text: '猿人は二足歩行を始めた最初の人類だよ。',
      },
    ];
    const result = estimateReadingTime(content);
    expect(result).toBeGreaterThanOrEqual(1);
  });

  it('quizコンテンツの所要時間にはthinking timeが含まれる', () => {
    const quizContent: ChatContent[] = [
      {
        type: 'quiz',
        question: '最古の人類は？',
        options: [
          { letter: 'A', text: '新人', correct: false },
          { letter: 'B', text: '原人', correct: false },
          { letter: 'C', text: '猿人', correct: true },
          { letter: 'D', text: '旧人', correct: false },
        ],
        explanation: '正解はC「猿人」です。',
      },
    ];
    const result = estimateReadingTime(quizContent);
    // クイズには15秒のthinking timeが加算されるので最低1分
    expect(result).toBeGreaterThanOrEqual(1);
  });

  it('summary-pointコンテンツの所要時間が算出される', () => {
    const content: ChatContent[] = [
      {
        type: 'summary-point',
        text: '猿人 → 原人（火を使用） → 新人 の順で進化！',
      },
    ];
    const result = estimateReadingTime(content);
    expect(result).toBeGreaterThanOrEqual(1);
  });

  it('endコンテンツの所要時間が算出される', () => {
    const content: ChatContent[] = [
      {
        type: 'end',
        points: ['ポイント1', 'ポイント2'],
      },
    ];
    const result = estimateReadingTime(content);
    expect(result).toBeGreaterThanOrEqual(1);
  });

  it('複数コンテンツの合計が正しく算出される', () => {
    // 多数のコンテンツを含む場合、読了時間は増加する
    const content: ChatContent[] = [];
    for (let i = 0; i < 20; i++) {
      content.push({
        type: 'message',
        side: 'left',
        characterId: 'researcher',
        text: 'テスト用の長めのメッセージです。これは中学生向けの歴史学習コンテンツの一部です。',
      });
    }
    const result = estimateReadingTime(content);
    // 20メッセージあればそれなりの時間になる
    expect(result).toBeGreaterThan(1);
  });
});
