// @vitest-environment node

import { readFileSync } from 'fs';
import { join } from 'path';
import { describe, it, expect } from 'vitest';
import {
  buildChildPlan,
  buildChildSummary,
  fallbackChildName,
  lastStudiedLabel,
  resolveParentLink,
  resolveParentUnlink,
  summarizeRecentDays,
} from '../tsudumonParentCore';

/** 2026-07-27 12:00 JST */
const NOW = Date.parse('2026-07-27T03:00:00Z');
const DAY = 24 * 60 * 60 * 1000;

describe('プライバシー: 保護者に出さないものを構造で担保する', () => {
  it('まちがい関連・会話関連のヘルパーを一切呼ばない', () => {
    // 2026-07-27 決定: まちがえた問題は、問題文も「件数」も保護者に出さない。
    // 方針をコードで固定する（便利だから、と後から足されるのを防ぐ）。
    // コメントでの言及は許すので、実コードだけを検査する。
    const source = readFileSync(
      join(__dirname, '..', 'tsudumonParentCore.ts'),
      'utf8'
    );
    const code = source
      .replace(/\/\*[\s\S]*?\*\//g, '') // ブロックコメント
      .replace(/(^|[^:])\/\/.*$/gm, '$1'); // 行コメント（URLの // は残す）

    for (const forbidden of [
      'unitsNeedingReview',
      'topWrongQids',
      'wrongLeft',
      'wrongNow',
      'aiThread',
      'aiMemory',
    ]) {
      expect(code).not.toContain(forbidden);
    }
  });

  it('サマリに wrong / 会話由来のキーが一切現れない', () => {
    const summary = buildChildSummary(
      {
        tsudumonProgress: {
          totals: { answered: 10, correct: 7, msTotal: 60000 },
          units: { '01': { lastAt: NOW, wrongNow: ['qa-1', 'qa-2'] } },
          wrong: { 'qa-1': 3 },
        },
        aiThreads: [{ role: 'user', text: '見せてはいけない発言' }],
      },
      'お子さん',
      NOW
    );
    const json = JSON.stringify(summary);
    expect(json).not.toMatch(/wrong/i);
    expect(json).not.toMatch(/qa-1/);
    expect(json).not.toMatch(/見せてはいけない発言/);
  });
});

describe('summarizeRecentDays', () => {
  const logs = [
    { d: '2026-07-27', ms: 600000, a: 10 }, // 今日
    { d: '2026-07-26', ms: 300000, a: 5 }, // 1日前
    { d: '2026-07-21', ms: 120000, a: 2 }, // 6日前（範囲内）
    { d: '2026-07-20', ms: 999999, a: 99 }, // 7日前（範囲外）
  ];

  it('直近7日だけを数える', () => {
    expect(summarizeRecentDays(logs, NOW)).toEqual({
      days: 3,
      minutes: 17,
      answered: 17,
    });
  });

  it('0分0問の日は「学習した日」に数えない', () => {
    const result = summarizeRecentDays([{ d: '2026-07-27', ms: 0, a: 0 }], NOW);
    expect(result.days).toBe(0);
  });

  it('未来日付は無視する', () => {
    const result = summarizeRecentDays(
      [{ d: '2026-08-01', ms: 60000, a: 1 }],
      NOW
    );
    expect(result).toEqual({ days: 0, minutes: 0, answered: 0 });
  });
});

describe('lastStudiedLabel', () => {
  it.each([
    [NOW, 'きょう'],
    [NOW - DAY, 'きのう'],
    [NOW - 3 * DAY, '3日前'],
    [NOW - 8 * DAY, '1週間以上前'],
    [NOW - 20 * DAY, '2週間以上前'],
  ])('%s → %s', (ms, expected) => {
    expect(lastStudiedLabel(ms, NOW)).toBe(expected);
  });

  it('未学習は null', () => {
    expect(lastStudiedLabel(null, NOW)).toBeNull();
    expect(lastStudiedLabel(0, NOW)).toBeNull();
  });
});

describe('buildChildPlan', () => {
  it('体験中は残り日数を出す', () => {
    const plan = buildChildPlan(
      { plan: 'set', source: 'trial', expiresAt: NOW + 2 * DAY },
      false,
      NOW
    );
    expect(plan.state).toBe('trial');
    expect(plan.label).toContain('あと2日');
    // 体験中は Stripe 顧客がいないので解約導線を出さない
    expect(plan.canManage).toBe(false);
  });

  it('契約中は利用期限を出す', () => {
    const plan = buildChildPlan(
      {
        plan: 'set',
        source: 'stripe',
        expiresAt: Date.parse('2026-08-27T00:00:00Z'),
      },
      true,
      NOW
    );
    expect(plan.state).toBe('active');
    expect(plan.label).toContain('8月27日');
    expect(plan.canManage).toBe(true);
  });

  it('期限切れ', () => {
    const plan = buildChildPlan(
      { plan: 'set', source: 'stripe', expiresAt: NOW - DAY },
      true,
      NOW
    );
    expect(plan.state).toBe('expired');
  });

  it('未登録', () => {
    expect(buildChildPlan(null, false, NOW).state).toBe('none');
    expect(buildChildPlan({}, false, NOW).state).toBe('none');
  });
});

describe('buildChildSummary', () => {
  const userData = {
    grade: '中2',
    tsudumonParentName: 'けんた',
    tsudumon: { plan: 'set', source: 'trial', expiresAt: NOW + DAY },
    stripeTsudumon: { customerId: null },
    tsudumonProgress: {
      updatedAt: NOW - DAY,
      totals: {
        answered: 132,
        correct: 94,
        msTotal: 8_040_000, // 134分
        startedUnits: 4,
      },
      days: [
        { d: '2026-07-27', ms: 3_600_000, a: 60 },
        { d: '2026-07-26', ms: 2_400_000, a: 42 },
        { d: '2026-07-25', ms: 2_040_000, a: 30 },
      ],
    },
  };

  it('体験3日ぶんの実績をまとめる', () => {
    const s = buildChildSummary(userData, 'お子さん', NOW);
    expect(s.name).toBe('けんた');
    expect(s.grade).toBe('中2');
    expect(s.plan.state).toBe('trial');
    expect(s.study).toEqual({
      daysThisWeek: 3,
      minutesThisWeek: 134,
      minutesTotal: 134,
      unitsStarted: 4,
      unitsTotal: 19,
      answered: 132,
      accuracy: 71,
      lastStudiedLabel: 'きのう',
    });
  });

  it('呼び名が未設定なら fallback を使う', () => {
    const s = buildChildSummary(
      { grade: '中1' },
      fallbackChildName('中1'),
      NOW
    );
    expect(s.name).toBe('中1のお子さん');
  });

  it('学習が空でも壊れない', () => {
    const s = buildChildSummary(null, 'お子さん', NOW);
    expect(s.study.answered).toBe(0);
    expect(s.study.accuracy).toBeNull();
    expect(s.study.lastStudiedLabel).toBeNull();
    expect(s.plan.state).toBe('none');
  });

  it('全単元数は19', () => {
    expect(buildChildSummary(null, 'お子さん', NOW).study.unitsTotal).toBe(19);
  });
});

/**
 * 親子連携の判定。
 *
 * この機能でいちばん壊れやすいのが**冪等性**（同じカードを2回開く／きょうだいの2枚目）と
 * **上限**。トランザクションの中に埋めるとテストできないので、判定を純粋関数に切り出して
 * ここで固定する。
 */
describe('resolveParentLink', () => {
  const P = 'line:Uparent';
  const C1 = 'line:Uchild1';
  const C2 = 'line:Uchild2';
  const base = {
    parentUid: P,
    childUid: C1,
    childName: 'けんた',
    childGrade: '中2' as string | null,
    linkedAt: 'TS',
  };

  it('はじめての連携で親子の両方に相互参照が入る', () => {
    const r = resolveParentLink(null, null, base);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.already).toBe(false);
    expect(r.children).toEqual([
      { uid: C1, name: 'けんた', grade: '中2', linkedAt: 'TS' },
    ]);
    expect(r.parents).toEqual([{ uid: P, linkedAt: 'TS' }]);
  });

  it('同じカードを2回開いても積み増さない（冪等）', () => {
    const first = resolveParentLink(null, null, base);
    if (!first.ok) throw new Error('unreachable');
    const second = resolveParentLink(
      { tsudumonChildren: first.children },
      { tsudumonParents: first.parents },
      base
    );
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.already).toBe(true);
    expect(second.children).toHaveLength(1);
    expect(second.parents).toHaveLength(1);
  });

  it('再連携では表示名と学年だけ最新化される', () => {
    const r = resolveParentLink(
      {
        tsudumonChildren: [
          { uid: C1, name: '中1のこども', grade: '中1', linkedAt: 'OLD' },
        ],
      },
      { tsudumonParents: [{ uid: P, linkedAt: 'OLD' }] },
      base
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.children[0]).toEqual({
      uid: C1,
      name: 'けんた',
      grade: '中2',
      linkedAt: 'OLD', // 連携日は最初のものを保つ
    });
  });

  it('きょうだいの2枚目は子が増える', () => {
    const r = resolveParentLink(
      {
        tsudumonChildren: [
          { uid: C1, name: 'けんた', grade: '中2', linkedAt: 'TS' },
        ],
      },
      null,
      { ...base, childUid: C2, childName: 'ゆい', childGrade: '中1' }
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.already).toBe(false);
    expect(r.children.map((c) => c.uid)).toEqual([C1, C2]);
  });

  it('自分自身とは連携できない', () => {
    const r = resolveParentLink(null, null, { ...base, childUid: P });
    expect(r).toEqual({ ok: false, reason: 'self_link' });
  });

  it('子が4人を超えると拒否する', () => {
    const children = ['a', 'b', 'c', 'd'].map((s) => ({
      uid: `line:U${s}`,
      name: s,
      grade: '中1',
      linkedAt: 'TS',
    }));
    const r = resolveParentLink({ tsudumonChildren: children }, null, base);
    expect(r).toEqual({ ok: false, reason: 'too_many_children' });
  });

  it('上限に達していても、既に連携済みの子なら通る（冪等が優先）', () => {
    const children = ['a', 'b', 'c'].map((s) => ({
      uid: `line:U${s}`,
      name: s,
      grade: '中1',
      linkedAt: 'TS',
    }));
    children.push({ uid: C1, name: 'けんた', grade: '中2', linkedAt: 'TS' });
    const r = resolveParentLink({ tsudumonChildren: children }, null, base);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.already).toBe(true);
    expect(r.children).toHaveLength(4);
  });

  it('保護者が2人を超えると拒否する', () => {
    const r = resolveParentLink(
      null,
      {
        tsudumonParents: [
          { uid: 'line:Ux', linkedAt: 'TS' },
          { uid: 'line:Uy', linkedAt: 'TS' },
        ],
      },
      base
    );
    expect(r).toEqual({ ok: false, reason: 'too_many_parents' });
  });

  it('壊れた配列要素は無視する', () => {
    const r = resolveParentLink(
      { tsudumonChildren: [null, 'x', { name: 'uidなし' }, 42] },
      { tsudumonParents: [null, {}] },
      base
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.children).toHaveLength(1);
    expect(r.parents).toHaveLength(1);
  });
});

describe('resolveParentUnlink', () => {
  it('連携中の保護者uidを全部返す', () => {
    expect(
      resolveParentUnlink({
        tsudumonParents: [
          { uid: 'line:Ua', linkedAt: 'TS' },
          { uid: 'line:Ub', linkedAt: 'TS' },
        ],
      }).parentUids
    ).toEqual(['line:Ua', 'line:Ub']);
  });

  it('つながっていなければ空', () => {
    expect(resolveParentUnlink(null).parentUids).toEqual([]);
    expect(resolveParentUnlink({}).parentUids).toEqual([]);
  });
});
