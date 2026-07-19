// @vitest-environment node

import { describe, it, expect } from 'vitest';
import {
  getEraMetas,
  supportsEraFlow,
  computeScopeAfterNotLearned,
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
  buildFinishData,
  topicsToSel,
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
    expect(supportsEraFlow('math', 1)).toBe(false); // 単元データなしはフォールバック
    expect(supportsEraFlow('geography', 3)).toBe(false); // 地理は中3対象外（単元0）
    expect(supportsEraFlow('history', 9 as unknown as number)).toBe(false);
  });

  it('english は学年別単元の再構成（2026-06）以降フロー対応', () => {
    expect(supportsEraFlow('english', 1)).toBe(true);
    expect(supportsEraFlow('english', 2)).toBe(true);
    expect(supportsEraFlow('english', 3)).toBe(true);
  });
});

describe('computeScopeAfterNotLearned', () => {
  // 実データ（line-scope-eras.generated.ts）に基づく:
  //   history g1: era0=[時期や年代の表し方] era1=[人類の出現と進化, 古代文明の誕生, ...]
  //   science g1: era0(植物)=[観察のしかた, 顕微鏡の詳細, 花と種子のしくみ, 植物の分類]
  //               era1(動物)=[脊椎動物, ...]
  const allHistory1 = getEraMetas('history', 1).flatMap((m) => m.topics);
  const allScience1 = getEraMetas('science', 1).flatMap((m) => m.topics);

  it('single: その topic だけ外れる（未設定ユーザーは全 topic が母集合）', () => {
    const r = computeScopeAfterNotLearned({
      subject: 'history',
      grade: 1,
      topic: '古代文明の誕生',
      currentTopics: null,
      mode: 'single',
    });
    expect(r).not.toBeNull();
    expect(r!.excluded).toEqual(['古代文明の誕生']);
    expect(r!.topics).toEqual(
      allHistory1.filter((t) => t !== '古代文明の誕生')
    );
  });

  it('history × after: その topic 以降が era をまたいで全部外れる', () => {
    const r = computeScopeAfterNotLearned({
      subject: 'history',
      grade: 1,
      topic: '古代文明の誕生',
      currentTopics: null,
      mode: 'after',
    });
    const idx = allHistory1.indexOf('古代文明の誕生');
    expect(r!.topics).toEqual(allHistory1.slice(0, idx));
    expect(r!.excluded).toEqual(allHistory1.slice(idx));
  });

  it('science × after: 同じ単元（era）内の以降だけ外れ、他の単元は残る', () => {
    const r = computeScopeAfterNotLearned({
      subject: 'science',
      grade: 1,
      topic: '花と種子のしくみ',
      currentTopics: null,
      mode: 'after',
    });
    // 植物 era の「花と種子のしくみ」以降だけ除外
    expect(r!.excluded).toEqual(['花と種子のしくみ', '植物の分類']);
    // 動物 era 以降（脊椎動物など）は残る
    expect(r!.topics).toContain('脊椎動物');
    expect(r!.topics).toContain('観察のしかた');
    expect(r!.topics).not.toContain('植物の分類');
    expect(r!.topics.length).toBe(allScience1.length - 2);
  });

  it('現スコープ設定済みなら母集合はそのスコープ', () => {
    const current = [
      '時期や年代の表し方',
      '人類の出現と進化',
      '古代文明の誕生',
    ];
    const r = computeScopeAfterNotLearned({
      subject: 'history',
      grade: 1,
      topic: '人類の出現と進化',
      currentTopics: current,
      mode: 'after',
    });
    expect(r!.topics).toEqual(['時期や年代の表し方']);
    // excluded は母集合に実在したものだけ
    expect(r!.excluded).toEqual(['人類の出現と進化', '古代文明の誕生']);
  });

  it('未知 topic（教科・学年に無い）は null', () => {
    expect(
      computeScopeAfterNotLearned({
        subject: 'history',
        grade: 1,
        topic: '存在しない単元',
        currentTopics: null,
        mode: 'single',
      })
    ).toBeNull();
    expect(
      computeScopeAfterNotLearned({
        subject: 'math',
        grade: 1,
        topic: '正負の数',
        currentTopics: null,
        mode: 'single',
      })
    ).toBeNull();
  });

  it('先頭 topic × after は空スコープになり得る（呼び出し側でガードする前提）', () => {
    const r = computeScopeAfterNotLearned({
      subject: 'history',
      grade: 1,
      topic: allHistory1[0],
      currentTopics: null,
      mode: 'after',
    });
    expect(r!.topics).toEqual([]);
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
    ['science', 1],
    ['science', 2],
    ['science', 3], // 11単元の密ケース
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

  it('中3理科(11単元)は sel 状態によらず ≤13件かつ era チップは全件出す', () => {
    const eraIds = getEraMetas('science', 3).map((e) => e.eraId);
    expect(eraIds.length).toBe(11);
    const url = 'https://line.chatstudy.jp/scope?openExternalBrowser=1';
    // sel=0 / 一部選択 / 全選択 のどれでも 13 件を超えない。
    for (const sel of [[], eraIds.slice(0, 3), eraIds]) {
      const items = buildScopeQuickItems('science', 3, sel, url);
      expect(items.length).toBeLessThanOrEqual(13);
      // era チップ（postback data が scope_pick かつ era= を持つ）は必ず 11 件すべて含まれる。
      const eraChips = items.filter(
        (i) => i.data?.includes('type=scope_pick') && i.data.includes('&era=')
      );
      expect(eraChips.length).toBe(11);
      // 「これで決定」は常に残す（最優先の操作チップ）。
      expect(items.some((i) => i.label.includes('これで決定'))).toBe(true);
    }
  });

  it('buildFinishData は sel を含まず常に短い', () => {
    const data = buildFinishData('history', 3);
    expect(data).toContain('type=scope_finish');
    expect(data).toContain('s=history');
    expect(data).toContain('g=3');
    expect(data).not.toContain('sel=');
    expect(data.length).toBeLessThanOrEqual(POSTBACK_DATA_MAX);
  });

  it('topicsToSel は保存済み topics から era を逆算する（往復一致）', () => {
    const metas = getEraMetas('history', 1);
    const sel = [metas[0].eraId, metas[2].eraId];
    const topics = expandErasToTopics('history', 1, sel);
    expect(topicsToSel('history', 1, topics)).toEqual(sel);
  });

  it('topicsToSel は era の一部 topic しか無い場合その era を含めない', () => {
    const metas = getEraMetas('history', 1);
    const multiTopicEra = metas.find((m) => m.topics.length >= 2)!;
    const sel = topicsToSel('history', 1, multiTopicEra.topics.slice(0, 1));
    expect(sel).not.toContain(multiTopicEra.eraId);
    // 空 topics は空 sel。
    expect(topicsToSel('history', 1, [])).toEqual([]);
  });

  it('個別ビルダーも全選択時に data≤300字', () => {
    const all = getEraMetas('history', 3).map((e) => e.eraId);
    expect(buildPickData('history', 3, all, all[0]).length).toBeLessThanOrEqual(
      POSTBACK_DATA_MAX
    );
    expect(buildCommitData('history', 3, all).length).toBeLessThanOrEqual(
      POSTBACK_DATA_MAX
    );
  });
});
