/**
 * 「いまの日時」ブロックの検査。
 *
 * 2026-07-27 の朝に、つづもんBotが「今は2026年7月26日だよ」と1日ずれた日付を答え、
 * 「今何時？」には「確認できない」と答えた。原因は**つづもんのプロンプトに
 * 日付も時刻も入っていなかった**こと（AIが自分の学習データの日付で答えていた）。
 */

import { describe, it, expect } from 'vitest';

import { buildNowContext, buildSystemPrompt } from '../aiChatPrompt';

describe('buildNowContext', () => {
  it('日本時間の日付・曜日・時刻を出す', () => {
    // UTC 00:29 → JST 09:29（同じ日）
    const text = buildNowContext(new Date('2026-07-27T00:29:00Z'));
    expect(text).toContain('2026年7月27日');
    expect(text).toContain('（月）');
    expect(text).toContain('9時29分');
  });

  it('UTCとJSTで日付が変わる時間帯でも、日本時間で答える', () => {
    // UTC 2026-07-26 15:30 → JST 2026-07-27 00:30
    const text = buildNowContext(new Date('2026-07-26T15:30:00Z'));
    expect(text).toContain('2026年7月27日');
    expect(text).toContain('0時30分');
  });

  it('「今何時？」に答えてよいと明示する（以前は拒否していた）', () => {
    const text = buildNowContext(new Date('2026-07-27T00:29:00Z'));
    expect(text).toContain('今何時？');
    expect(text).toContain('答えてよい');
  });

  it('記憶の日付を使わないよう釘を刺す', () => {
    expect(buildNowContext(new Date())).toContain(
      'あなたの記憶の中の日付は古い'
    );
  });
});

describe('つづもんのプロンプトに日時が入っている', () => {
  const prompt = buildSystemPrompt({ grade: '中2' } as never, 'tsudumon', {
    promptText: '今日は何日？',
  });

  it('日付の見出しがある', () => {
    expect(prompt).toContain('# いまの日時（日本時間）');
  });

  it('今年の日付が入っている（記憶まかせにしない）', () => {
    const year = new Intl.DateTimeFormat('ja-JP', {
      timeZone: 'Asia/Tokyo',
      year: 'numeric',
    }).format(new Date());
    expect(prompt).toContain(year.replace('年', '') + '年');
  });
});
