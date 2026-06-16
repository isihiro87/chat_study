// @vitest-environment node

import { describe, it, expect } from 'vitest';
import {
  getEraMetas,
  supportsEraFlow,
  parseSel,
  serializeSel,
  toggleEra,
  normalizeSel,
  expandErasToTopics,
  buildDetailUrl,
  eraChipLabel,
  buildScopeQuickItems,
  buildPickData,
  buildCommitData,
  QUICK_REPLY_LABEL_MAX,
  POSTBACK_DATA_MAX,
} from '../lineScopeFlow';

describe('getEraMetas / supportsEraFlow', () => {
  it('history は学年ごとに 6〜7 時代を返す', () => {
    expect(getEraMetas('history', 1).length).toBe(6);
    expect(getEraMetas('history', 2).length).toBe(6);
    expect(getEraMetas('history', 3).length).toBe(7);
    expect(supportsEraFlow('history', 1)).toBe(true);
  });

  it('未対応の教科・学年は空＝フローを使わない', () => {
    expect(getEraMetas('math', 1)).toEqual([]);
    expect(supportsEraFlow('english', 1)).toBe(false); // 時代1個以下はフォールバック
    expect(supportsEraFlow('history', 9 as unknown as number)).toBe(false);
  });
});

describe('parseSel / serializeSel', () => {
  it('空・null は空配列', () => {
    expect(parseSel('')).toEqual([]);
    expect(parseSel(null)).toEqual([]);
    expect(parseSel(undefined)).toEqual([]);
  });

  it('カンマ連結を往復できる', () => {
    const sel = ['ancient-state', 'warrior-kamakura'];
    expect(parseSel(serializeSel(sel))).toEqual(sel);
  });
});

describe('toggleEra', () => {
  it('未選択を追加・選択済みを解除（表示順に正規化）', () => {
    let sel: string[] = [];
    sel = toggleEra('history', 1, sel, 'warrior-kamakura');
    expect(sel).toEqual(['warrior-kamakura']);
    // 表示順では ancient-state が先なので前に入る
    sel = toggleEra('history', 1, sel, 'ancient-state');
    expect(sel).toEqual(['ancient-state', 'warrior-kamakura']);
    // 解除
    sel = toggleEra('history', 1, sel, 'ancient-state');
    expect(sel).toEqual(['warrior-kamakura']);
  });

  it('未知 eraId は無視', () => {
    const sel = toggleEra('history', 1, [], 'no-such-era');
    expect(sel).toEqual([]);
  });
});

describe('normalizeSel', () => {
  it('未知 eraId を除去し表示順に並べる', () => {
    const sel = normalizeSel('history', 1, [
      'medieval-world',
      'bogus',
      'history-basics',
    ]);
    expect(sel).toEqual(['history-basics', 'medieval-world']);
  });
});

describe('expandErasToTopics', () => {
  it('選択 era 配下の topic 名を展開（重複除去）', () => {
    const topics = expandErasToTopics('history', 1, ['japanese-origins']);
    expect(topics).toEqual([
      '旧石器時代と縄文時代',
      '弥生時代',
      '古墳時代と大和政権',
    ]);
  });

  it('空 sel は空配列、未知 eraId は無視', () => {
    expect(expandErasToTopics('history', 1, [])).toEqual([]);
    expect(expandErasToTopics('history', 1, ['bogus'])).toEqual([]);
  });

  it('複数 era を連結（順序保持・重複なし）', () => {
    const topics = expandErasToTopics('history', 1, [
      'history-basics',
      'japanese-origins',
    ]);
    expect(topics[0]).toBe('時期や年代の表し方');
    expect(new Set(topics).size).toBe(topics.length);
  });
});

describe('buildDetailUrl', () => {
  it('sel が空なら base のまま', () => {
    expect(buildDetailUrl('https://x/scope?openExternalBrowser=1', [])).toBe(
      'https://x/scope?openExternalBrowser=1'
    );
  });

  it('sel があれば eras クエリを付与', () => {
    const url = buildDetailUrl('https://x/scope?openExternalBrowser=1', [
      'ancient-state',
      'warrior-kamakura',
    ]);
    expect(url).toContain('eras=ancient-state%2Cwarrior-kamakura');
  });
});

describe('eraChipLabel', () => {
  it('選択状態で ✅/⬜ を切り替える', () => {
    const meta = getEraMetas('history', 1)[0];
    expect(eraChipLabel(meta, false).startsWith('⬜')).toBe(true);
    expect(eraChipLabel(meta, true).startsWith('✅')).toBe(true);
  });
});

describe('Quick Reply / postback の上限', () => {
  const subjects: Array<[string, number]> = [
    ['history', 1],
    ['history', 2],
    ['history', 3],
  ];

  it('全選択時もラベル≤20字・data≤300字・チップ≤13件', () => {
    for (const [subject, grade] of subjects) {
      const all = getEraMetas(subject, grade).map((e) => e.eraId);
      const items = buildScopeQuickItems(
        subject,
        grade,
        all,
        'https://line.chatstudy.jp/scope?openExternalBrowser=1'
      );
      expect(items.length).toBeLessThanOrEqual(13);
      for (const item of items) {
        expect(
          [...item.label].length,
          `label too long: ${item.label}`
        ).toBeLessThanOrEqual(QUICK_REPLY_LABEL_MAX);
        if (item.data) {
          expect(
            item.data.length,
            `data too long: ${item.data}`
          ).toBeLessThanOrEqual(POSTBACK_DATA_MAX);
        }
      }
    }
  });

  it('個別ビルダーも全選択時に data≤300字', () => {
    const all = getEraMetas('history', 3).map((e) => e.eraId);
    expect(
      buildPickData('history', 3, all, all[0]).length
    ).toBeLessThanOrEqual(POSTBACK_DATA_MAX);
    expect(buildCommitData('history', 3, all).length).toBeLessThanOrEqual(
      POSTBACK_DATA_MAX
    );
  });
});
