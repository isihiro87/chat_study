// @vitest-environment node
/**
 * 節（92節）と、節ベースのテスト範囲。
 *
 * 章だけで範囲を持つと粗すぎる（第08章は9節あり「江戸幕府の成立〜享保の改革」が
 * 表現できない）ため 2026-08-02 に節を導入した。既存ユーザーのデータは章しか
 * 持っていないので、**壊さないこと**がいちばんの関心事。
 */
import { describe, it, expect } from 'vitest';

import {
  TSUDUMON_TOPICS,
  expandUnitsToTopics,
  topicsOfUnit,
  unitNosOfTopics,
} from '../tsudumonTopics';
import { TSUDUMON_UNITS } from '../tsudumonUnits';
import {
  buildExamAckText,
  examTopicIds,
  firstInScopeTopicIndex,
  isTopicScoped,
  validateExam,
} from '../tsudumonExamCore';

describe('tsudumonTopics: 節の一覧', () => {
  it('全92節が19章に配られている', () => {
    expect(TSUDUMON_TOPICS).toHaveLength(92);
    const total = TSUDUMON_UNITS.reduce(
      (n, u) => n + topicsOfUnit(u.no).length,
      0
    );
    expect(total).toBe(92);
  });

  it('index は章内で1始まりの連番（教材の #t{index} と一致させるため）', () => {
    for (const u of TSUDUMON_UNITS) {
      const topics = topicsOfUnit(u.no);
      expect(topics.length).toBeGreaterThan(0);
      topics.forEach((t, i) => {
        expect(t.index).toBe(i + 1);
        expect(t.unitNo).toBe(u.no);
      });
    }
  });

  it('章05の第1節は「武士の成長」（実機の #t1 と一致）', () => {
    // ここがずれると、配信カードの行き先が別の節になる。
    const first = topicsOfUnit('05')[0];
    expect(first.id).toBe('05-rise-of-bushi');
    expect(first.name).toBe('武士の成長');
    expect(first.index).toBe(1);
  });

  it('節ID → 章番号はカリキュラム順で返る', () => {
    expect(unitNosOfTopics(['08-edo-bakufu', '05-rise-of-bushi'])).toEqual([
      '05',
      '08',
    ]);
    expect(unitNosOfTopics(['存在しないID'])).toEqual([]);
  });

  it('章の展開＝その章の全節', () => {
    expect(expandUnitsToTopics(['05'])).toEqual(
      topicsOfUnit('05').map((t) => t.id)
    );
  });
});

describe('tsudumonExamCore: 節ベースの範囲', () => {
  const now = Date.parse('2026-08-02T10:00:00+09:00');
  const date = '2026-08-20';

  it('節を渡すと保存され、章はそこから計算される（食い違いを作らない）', () => {
    const r = validateExam(
      { testDate: date, topicIds: ['08-edo-bakufu', '05-rise-of-bushi'] },
      now
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    // 保存順は教材の並びにそろえる（保存のたびに順番が変わらないように）
    expect(r.value.topicIds).toEqual(['05-rise-of-bushi', '08-edo-bakufu']);
    expect(r.value.unitNos).toEqual(['05', '08']);
    expect(isTopicScoped(r.value)).toBe(true);
  });

  it('章と節の両方が来たら節を正とする', () => {
    const r = validateExam(
      {
        testDate: date,
        unitNos: ['01', '02', '03'],
        topicIds: ['05-rise-of-bushi'],
      },
      now
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.value.unitNos).toEqual(['05']);
  });

  it('章だけの古いデータは「その章ぜんぶ」として読める（後方互換）', () => {
    const old = {
      date,
      unitNos: ['05'],
      confidence: 'confirmed' as const,
      updatedAt: now,
    };
    expect(isTopicScoped(old)).toBe(false);
    expect(examTopicIds(old)).toEqual(topicsOfUnit('05').map((t) => t.id));
    // 章まるごとなので、配信の行き先は章のトップのまま
    expect(firstInScopeTopicIndex(old, '05')).toBeUndefined();
  });

  it('節まで絞ってあれば、その章で最初に範囲へ入る節番号を返す', () => {
    const r = validateExam(
      {
        testDate: date,
        topicIds: ['05-kamakura-bakufu', '05-kamakura-society'],
      },
      now
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    // 3節目・4節目を選んだので、行き先は #t3
    expect(firstInScopeTopicIndex(r.value, '05')).toBe(3);
    // 範囲に入っていない章では出さない
    expect(firstInScopeTopicIndex(r.value, '08')).toBeUndefined();
  });

  it('存在しない節IDだけなら断る（黙って空の範囲を保存しない）', () => {
    const r = validateExam({ testDate: date, topicIds: ['not-a-topic'] }, now);
    expect(r.ok).toBe(false);
  });

  it('確認文は節名まで出す（狭めた指定が伝わったと分かるように）', () => {
    const r = validateExam(
      { testDate: date, topicIds: ['05-kamakura-bakufu'] },
      now
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    const ack = buildExamAckText(r.value, now);
    expect(ack).toContain('武士と鎌倉幕府');
    expect(ack).toContain('鎌倉幕府の成立');
  });

  it('章の全節を選んだときは「ぜんぶ」とまとめる（節名の羅列にしない）', () => {
    const all = topicsOfUnit('03').map((t) => t.id);
    const r = validateExam({ testDate: date, topicIds: all }, now);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(buildExamAckText(r.value, now)).toContain('（ぜんぶ）');
  });
});
