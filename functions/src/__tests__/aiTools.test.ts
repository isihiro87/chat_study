import { describe, it, expect } from 'vitest';

import {
  executeTool,
  isKnownTool,
  buildToolResultContext,
  buildTopicKeyCatalog,
  TOOL_DEFINITIONS,
  TOOL_NAMES,
  type ToolContext,
} from '../aiTools';

const NOW = new Date('2026-07-25T03:00:00Z');

const NAMES: Record<string, string> = {
  '08-edo-bakufu': '江戸幕府の成立',
  '08-sakoku': '鎖国',
};

const CTX: ToolContext = {
  existingMemory: undefined,
  validTopicKeys: new Set(Object.keys(NAMES)),
  topicName: (k) => NAMES[k] ?? null,
  analysisSummary: '直近30日で40問・正答率70%',
  now: NOW,
};

describe('aiTools のツール定義', () => {
  it('定義と実行可能名が一致する', () => {
    expect(TOOL_DEFINITIONS.map((d) => d.name).sort()).toEqual(
      [...TOOL_NAMES].sort()
    );
  });

  it('未知のツール名は実行しない', () => {
    expect(isKnownTool('remember')).toBe(true);
    expect(isKnownTool('deleteEverything')).toBe(false);

    const r = executeTool({ name: 'deleteEverything', args: {} }, CTX);
    expect(r.rejected).toBe(true);
    expect(r.write).toBeUndefined();
  });

  it('savePlan の説明が「単元名を作るな」と明示している', () => {
    const def = TOOL_DEFINITIONS.find((d) => d.name === 'savePlan')!;
    expect(def.description).toContain('作ってはいけない');
  });

  it('remember の説明が個人情報を渡さないよう指示している', () => {
    const def = TOOL_DEFINITIONS.find((d) => d.name === 'remember')!;
    expect(def.description).toContain('個人情報');
  });
});

describe('aiTools.remember', () => {
  it('正しい内容を覚える', () => {
    const r = executeTool(
      { name: 'remember', args: { nextTestDate: '2026-09-10', goal: '80点' } },
      CTX
    );
    expect(r.rejected).toBe(false);
    expect(r.write?.kind).toBe('memory');
    if (r.write?.kind === 'memory') {
      expect(r.write.value.nextTestDate).toBe('2026-09-10');
      expect(r.write.value.goal).toBe('80点');
    }
    expect(r.ackText).toContain('2026-09-10');
  });

  it('🚨 個人情報は保存しない（書き込み内容を返さない）', () => {
    const r = executeTool(
      { name: 'remember', args: { busyNote: '青葉中学校の部活' } },
      CTX
    );
    expect(r.rejected).toBe(true);
    expect(r.write).toBeUndefined();
    expect(r.resultForModel).toContain('個人情報');
  });

  it('過去の日付は保存しない', () => {
    const r = executeTool(
      { name: 'remember', args: { nextTestDate: '2020-01-01' } },
      CTX
    );
    expect(r.rejected).toBe(true);
    expect(r.write).toBeUndefined();
  });

  it('既存の記憶に追記される（notes は積み上がる）', () => {
    const r = executeTool(
      { name: 'remember', args: { notes: ['新メモ'] } },
      { ...CTX, existingMemory: { notes: ['旧メモ'], goal: '70点' } }
    );
    if (r.write?.kind === 'memory') {
      expect(r.write.value.notes).toEqual(['旧メモ', '新メモ']);
      // 触っていない項目は保たれる
      expect(r.write.value.goal).toBe('70点');
    } else {
      throw new Error('should write memory');
    }
  });

  it('拒否時は AI に理由が返る（言い直させる）', () => {
    const r = executeTool({ name: 'remember', args: {} }, CTX);
    expect(r.rejected).toBe(true);
    expect(r.resultForModel).toContain('保存できませんでした');
  });
});

describe('aiTools.savePlan', () => {
  const validPlan = {
    testDate: '2026-08-10',
    weeks: [
      {
        fromDate: '2026-07-20',
        toDate: '2026-07-26',
        topicKeys: ['08-edo-bakufu', '08-sakoku'],
      },
    ],
  };

  it('正しいプランを保存する', () => {
    const r = executeTool({ name: 'savePlan', args: validPlan }, CTX);
    expect(r.rejected).toBe(false);
    expect(r.write?.kind).toBe('plan');
    expect(r.ackText).toContain('2026-08-10');
  });

  it('🚨 教材に無い単元は保存しない（使えない単元名を AI に返す）', () => {
    const r = executeTool(
      {
        name: 'savePlan',
        args: {
          ...validPlan,
          weeks: [{ ...validPlan.weeks[0], topicKeys: ['幕末のこと'] }],
        },
      },
      CTX
    );
    expect(r.rejected).toBe(true);
    expect(r.write).toBeUndefined();
    expect(r.resultForModel).toContain('幕末のこと');
    expect(r.resultForModel).toContain('選び直して');
  });

  it('壊れたプランは保存しない', () => {
    for (const bad of [{}, { testDate: 'x' }, { testDate: '2026-08-10' }]) {
      const r = executeTool({ name: 'savePlan', args: bad }, CTX);
      expect(r.rejected).toBe(true);
      expect(r.write).toBeUndefined();
    }
  });
});

describe('aiTools.getStats', () => {
  it('分析サマリを返す（書き込みなし）', () => {
    const r = executeTool({ name: 'getStats', args: {} }, CTX);
    expect(r.rejected).toBe(false);
    expect(r.write).toBeUndefined();
    expect(r.resultForModel).toContain('正答率70%');
  });

  it('分析が無ければその旨を返す', () => {
    const r = executeTool(
      { name: 'getStats', args: {} },
      { ...CTX, analysisSummary: '' }
    );
    expect(r.resultForModel).toContain('分析できる段階じゃない');
  });
});

describe('aiTools.buildToolResultContext', () => {
  it('結果と「同じツールを再度呼ぶな」が入る', () => {
    const outcome = executeTool({ name: 'getStats', args: {} }, CTX);
    const ctx = buildToolResultContext({ name: 'getStats', args: {} }, outcome);
    expect(ctx).toContain('getStats');
    expect(ctx).toContain('もう一度呼ばないこと');
  });
});

describe('aiTools.buildTopicKeyCatalog', () => {
  it('候補が無ければ空文字', () => {
    expect(buildTopicKeyCatalog([])).toBe('');
  });

  it('キーと表示名を並べ、作文を禁じる', () => {
    const cat = buildTopicKeyCatalog([
      { key: '08-edo-bakufu', name: '江戸幕府の成立', volume: '歴史 ⑧' },
    ]);
    expect(cat).toContain('08-edo-bakufu');
    expect(cat).toContain('江戸幕府の成立');
    expect(cat).toContain('作らない');
  });
});
