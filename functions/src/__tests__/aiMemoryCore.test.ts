import { describe, it, expect } from 'vitest';

import {
  validateMemoryPatch,
  containsPersonalInfo,
  mergeNotes,
  applyMemoryPatch,
  buildMemoryPrompt,
  buildMemoryAckText,
  daysUntil,
  MAX_NOTES,
  LIMITS,
  MAX_FUTURE_DAYS,
} from '../aiMemoryCore';

/** 2026-07-25 12:00 JST */
const NOW = new Date('2026-07-25T03:00:00Z');

describe('aiMemoryCore.containsPersonalInfo', () => {
  const shouldBlock = [
    '電話は090-1234-5678だよ',
    '09012345678',
    'メールは test@example.com',
    '〒123-4567',
    '東京都○○区3丁目',
    '青葉中学校に通ってる',
    'さくら小学校のとき',
    '本名は◯◯です',
    'わたしの名前はゆうき',
    'パスワードは1234',
  ];
  for (const text of shouldBlock) {
    it(`「${text}」→ 個人情報`, () => {
      expect(containsPersonalInfo(text)).toBe(true);
    });
  }

  const shouldPass = [
    '次のテストは数学と英語',
    '部活が忙しくて平日は20分しか取れない',
    '80点とりたい',
    '中学校のテストが不安',
    '',
  ];
  for (const text of shouldPass) {
    it(`「${text}」→ 個人情報ではない`, () => {
      expect(containsPersonalInfo(text)).toBe(false);
    });
  }
});

describe('aiMemoryCore.validateMemoryPatch', () => {
  it('正しいパッチを受け付ける', () => {
    const r = validateMemoryPatch(
      {
        nextTestDate: '2026-09-10',
        goal: '次は80点',
        busyNote: '平日は部活で20分だけ',
        testSubjects: ['歴史', '数学'],
      },
      NOW
    );
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.value.nextTestDate).toBe('2026-09-10');
      expect(r.value.testSubjects).toEqual(['歴史', '数学']);
    }
  });

  it('ホワイトリスト外のキーは無視される', () => {
    const r = validateMemoryPatch({ goal: '80点', evilKey: 'x' }, NOW);
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(Object.keys(r.value)).toEqual(['goal']);
    }
  });

  it('個人情報を含むならパッチ全体を拒否する', () => {
    const r = validateMemoryPatch(
      { goal: '80点', busyNote: '青葉中学校の部活' },
      NOW
    );
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.reason).toContain('個人情報');
  });

  it('配列の中の個人情報も弾く', () => {
    const r = validateMemoryPatch({ notes: ['電話は090-1111-2222'] }, NOW);
    expect(r.ok).toBe(false);
  });

  describe('テスト日', () => {
    it('今日は受け付ける', () => {
      expect(validateMemoryPatch({ nextTestDate: '2026-07-25' }, NOW).ok).toBe(
        true
      );
    });

    it('過去は拒否', () => {
      const r = validateMemoryPatch({ nextTestDate: '2026-07-24' }, NOW);
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toContain('過去');
    });

    it('1年より先は拒否', () => {
      const far = new Date(NOW.getTime() + (MAX_FUTURE_DAYS + 5) * 86400000)
        .toISOString()
        .slice(0, 10);
      const r = validateMemoryPatch({ nextTestDate: far }, NOW);
      expect(r.ok).toBe(false);
    });

    it('存在しない日付は拒否', () => {
      expect(validateMemoryPatch({ nextTestDate: '2026-02-31' }, NOW).ok).toBe(
        false
      );
    });

    it('形式違いは拒否', () => {
      for (const bad of ['2026/09/10', '9月10日', 'あした', 123]) {
        expect(validateMemoryPatch({ nextTestDate: bad }, NOW).ok).toBe(false);
      }
    });
  });

  describe('長さ制限（切り詰めずに拒否する）', () => {
    it('goal が上限超過なら拒否', () => {
      const r = validateMemoryPatch(
        { goal: 'あ'.repeat(LIMITS.goal + 1) },
        NOW
      );
      expect(r.ok).toBe(false);
      if (!r.ok) expect(r.reason).toContain(`${LIMITS.goal}文字`);
    });

    it('メモ1件が上限超過なら拒否', () => {
      const r = validateMemoryPatch(
        { notes: ['あ'.repeat(LIMITS.note + 1)] },
        NOW
      );
      expect(r.ok).toBe(false);
    });
  });

  it('空・不正な入力は拒否', () => {
    for (const bad of [null, undefined, 'x', 42, [], {}]) {
      expect(validateMemoryPatch(bad, NOW).ok).toBe(false);
    }
  });

  it('値が空文字だけなら拒否', () => {
    expect(validateMemoryPatch({ goal: '   ' }, NOW).ok).toBe(false);
  });
});

describe('aiMemoryCore.mergeNotes', () => {
  it('追記して上限まで保持する', () => {
    const merged = mergeNotes(['a', 'b'], ['c']);
    expect(merged).toEqual(['a', 'b', 'c']);
  });

  it('上限を超えたら古いものから落ちる', () => {
    const existing = Array.from({ length: MAX_NOTES }, (_, i) => `n${i}`);
    const merged = mergeNotes(existing, ['new']);
    expect(merged).toHaveLength(MAX_NOTES);
    expect(merged).toContain('new');
    expect(merged).not.toContain('n0');
  });

  it('重複は新しい方を残す', () => {
    expect(mergeNotes(['a', 'b'], ['a'])).toEqual(['b', 'a']);
  });

  it('空文字は落とす', () => {
    expect(mergeNotes(['a'], ['', '  '])).toEqual(['a']);
  });
});

describe('aiMemoryCore.applyMemoryPatch', () => {
  it('notes は追記、他は置き換え', () => {
    const next = applyMemoryPatch(
      { goal: '70点', notes: ['古いメモ'] },
      { goal: '80点', notes: ['新しいメモ'] }
    );
    expect(next.goal).toBe('80点');
    expect(next.notes).toEqual(['古いメモ', '新しいメモ']);
  });

  it('既存が無くても動く', () => {
    expect(applyMemoryPatch(undefined, { goal: '80点' }).goal).toBe('80点');
  });

  it('パッチに無い項目は保たれる', () => {
    const next = applyMemoryPatch(
      { goal: '80点', busyNote: '部活' },
      {
        goal: '90点',
      }
    );
    expect(next.busyNote).toBe('部活');
  });
});

describe('aiMemoryCore.daysUntil', () => {
  it('未来なら正の値', () => {
    expect(daysUntil('2026-08-01', NOW)).toBe(7);
  });

  it('今日なら 0', () => {
    expect(daysUntil('2026-07-25', NOW)).toBe(0);
  });

  it('過去なら負の値', () => {
    expect(daysUntil('2026-07-20', NOW)).toBe(-5);
  });
});

describe('aiMemoryCore.buildMemoryPrompt', () => {
  it('何も覚えていなければ空文字', () => {
    expect(buildMemoryPrompt(undefined, NOW)).toBe('');
    expect(buildMemoryPrompt({}, NOW)).toBe('');
  });

  it('テスト日と残り日数が入る', () => {
    const p = buildMemoryPrompt({ nextTestDate: '2026-08-01' }, NOW);
    expect(p).toContain('2026-08-01');
    expect(p).toContain('あと7日');
  });

  it('テスト当日は強調される', () => {
    const p = buildMemoryPrompt({ nextTestDate: '2026-07-25' }, NOW);
    expect(p).toContain('今日');
  });

  it('毎回むし返さない指示が入る', () => {
    const p = buildMemoryPrompt({ goal: '80点' }, NOW);
    expect(p).toContain('むし返さない');
  });

  it('覚えている項目がすべて出る', () => {
    const p = buildMemoryPrompt(
      {
        goal: '80点',
        busyNote: '部活',
        callStyle: 'ゆうくん',
        notes: ['メモ1'],
        testSubjects: ['歴史'],
      },
      NOW
    );
    for (const s of ['80点', '部活', 'ゆうくん', 'メモ1', '歴史']) {
      expect(p).toContain(s);
    }
  });
});

describe('aiMemoryCore.buildMemoryAckText', () => {
  it('覚えた項目を伝える', () => {
    const t = buildMemoryAckText({ nextTestDate: '2026-09-10', goal: '80点' });
    expect(t).toContain('2026-09-10');
    expect(t).toContain('目標');
  });

  it('何も無ければ空文字', () => {
    expect(buildMemoryAckText({})).toBe('');
  });
});
