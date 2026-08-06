// @vitest-environment node

import { describe, it, expect } from 'vitest';
import {
  appendAiEvent,
  readAiEvents,
  readTopicStats,
  buildRecentEventsContext,
  buildWeakTopicsContext,
  MAX_AI_EVENTS,
  MIN_TOPIC_ATTEMPTS,
  EVENT_MAX_AGE_MS,
  type AiLearningEvent,
} from '../aiLearningContextCore';

/** 2026-08-06 12:00 JST */
const NOW = new Date('2026-08-06T03:00:00Z');
const NOW_MS = NOW.getTime();

function ev(over: Partial<AiLearningEvent> = {}): AiLearningEvent {
  return { t: NOW_MS, k: 'answer', topic: '江戸幕府の成立', ok: true, ...over };
}

describe('appendAiEvent', () => {
  it('空から1件追加できる', () => {
    expect(appendAiEvent(undefined, ev())).toHaveLength(1);
  });

  it('古いものから落ちる（user doc を太らせない）', () => {
    let list: AiLearningEvent[] = [];
    for (let i = 0; i < MAX_AI_EVENTS + 5; i++) {
      list = appendAiEvent(list, ev({ t: NOW_MS + i, topic: `t${i}` }));
    }
    expect(list).toHaveLength(MAX_AI_EVENTS);
    // 最新が末尾・最古が先頭
    expect(list[list.length - 1].topic).toBe(`t${MAX_AI_EVENTS + 4}`);
    expect(list[0].topic).toBe('t5');
  });

  it('壊れた既存データが混じっても落ちない（不正要素は捨てる）', () => {
    const prev = [null, 'ゴミ', { k: 'answer' }, ev({ topic: '有効' })];
    const list = appendAiEvent(prev, ev({ topic: '新規' }));
    expect(list.map((e) => e.topic)).toEqual(['有効', '新規']);
  });

  it('topic 無し（単元不明）でも記録できる', () => {
    const list = appendAiEvent([], { t: NOW_MS, k: 'answer', ok: false });
    expect(list[0].topic).toBeUndefined();
  });
});

describe('readAiEvents', () => {
  it('配列でなければ空', () => {
    expect(readAiEvents(undefined)).toEqual([]);
    expect(readAiEvents({ a: 1 })).toEqual([]);
  });
});

describe('buildRecentEventsContext', () => {
  it('記録が無ければ空文字（プロンプトを1文字も増やさない）', () => {
    expect(buildRecentEventsContext(undefined, NOW)).toBe('');
    expect(buildRecentEventsContext([], NOW)).toBe('');
  });

  it('単元と正誤が読める形で入る', () => {
    const text = buildRecentEventsContext(
      [ev({ topic: '鎌倉幕府', ok: false })],
      NOW
    );
    expect(text).toContain('鎌倉幕府');
    expect(text).toContain('❌まちがえた');
    expect(text).toContain('8/6');
  });

  it('正解は ⭕ で入る', () => {
    const text = buildRecentEventsContext([ev({ ok: true })], NOW);
    expect(text).toContain('⭕正解');
  });

  it('古いイベント（14日超）は出さない', () => {
    const old = ev({ t: NOW_MS - EVENT_MAX_AGE_MS - 1000 });
    expect(buildRecentEventsContext([old], NOW)).toBe('');
  });

  it('新しいものが下に並ぶ（時系列）', () => {
    const text = buildRecentEventsContext(
      [
        ev({ t: NOW_MS, topic: 'あたらしい' }),
        ev({ t: NOW_MS - 86_400_000, topic: 'ふるい' }),
      ],
      NOW
    );
    expect(text.indexOf('ふるい')).toBeLessThan(text.indexOf('あたらしい'));
  });

  it('「ここに無いことは知らない」と釘を刺す（実行したフリの再発防止）', () => {
    const text = buildRecentEventsContext([ev()], NOW);
    expect(text).toContain('ここに無いことは知らない');
  });

  it('JST で日付が出る（UTC 深夜でも翌日にならない）', () => {
    // 2026-08-06 23:30 JST = 14:30 UTC
    const jstNight = new Date('2026-08-06T14:30:00Z');
    const text = buildRecentEventsContext(
      [ev({ t: jstNight.getTime() })],
      jstNight
    );
    expect(text).toContain('8/6');
    expect(text).not.toContain('8/7');
  });
});

describe('readTopicStats', () => {
  it('出題数が少ない単元は捨てる（偶然でニガテ扱いしない）', () => {
    const stats = readTopicStats({
      少ない: { total: MIN_TOPIC_ATTEMPTS - 1, correct: 0 },
      じゅうぶん: { total: MIN_TOPIC_ATTEMPTS, correct: 0 },
    });
    expect(stats.map((s) => s.topic)).toEqual(['じゅうぶん']);
  });

  it('壊れた値（correct > total・負値・非数）は捨てる', () => {
    const stats = readTopicStats({
      こわれ1: { total: 5, correct: 9 },
      こわれ2: { total: 5, correct: -1 },
      こわれ3: { total: 'x', correct: 1 },
      正常: { total: 5, correct: 2 },
    });
    expect(stats.map((s) => s.topic)).toEqual(['正常']);
  });

  it('オブジェクトでなければ空', () => {
    expect(readTopicStats(undefined)).toEqual([]);
    expect(readTopicStats('x')).toEqual([]);
  });
});

describe('buildWeakTopicsContext', () => {
  it('データが無ければ空文字', () => {
    expect(buildWeakTopicsContext(undefined)).toBe('');
    expect(buildWeakTopicsContext({})).toBe('');
  });

  it('正答率の低い順にニガテとして出る（最大3件）', () => {
    const text = buildWeakTopicsContext({
      A: { total: 10, correct: 1 }, // 10%
      B: { total: 10, correct: 3 }, // 30%
      C: { total: 10, correct: 5 }, // 50%
      D: { total: 10, correct: 5 }, // 50%（4件目＝出ない）
    });
    expect(text).toContain('ニガテぎみ');
    expect(text.indexOf('A')).toBeLessThan(text.indexOf('B'));
    expect(text).toContain('1/10問正解（10%）');
    // 3件までに絞られている
    const shown = ['A', 'B', 'C', 'D'].filter((k) => text.includes(`「${k}」`));
    expect(shown).toHaveLength(3);
  });

  it('得意な単元も出る（ほめる材料）', () => {
    const text = buildWeakTopicsContext({ 得意: { total: 10, correct: 9 } });
    expect(text).toContain('とくい');
    expect(text).toContain('9/10問正解（90%）');
  });

  it('ニガテも得意も無い（全部ふつう）なら空文字', () => {
    const text = buildWeakTopicsContext({ ふつう: { total: 10, correct: 7 } });
    expect(text).toBe('');
  });

  it('推測で単元名を作らないよう指示している', () => {
    const text = buildWeakTopicsContext({ A: { total: 10, correct: 1 } });
    expect(text).toContain('推測で単元名を作らない');
  });

  it('復習への導線を案内している', () => {
    const text = buildWeakTopicsContext({ A: { total: 10, correct: 1 } });
    expect(text).toContain('苦手を復習');
  });
});
