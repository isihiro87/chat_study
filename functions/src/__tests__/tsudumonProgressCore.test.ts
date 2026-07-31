// @vitest-environment node
/**
 * つづもんの学習ログ集計。
 *
 * ここが壊れると AI が実在しない学習状況を語る（＝生徒に嘘をつく）ので、
 * 「送られた記録どおりに集計されること」「再送で二重に増えないこと」を固定する。
 */
import { describe, it, expect } from 'vitest';

import {
  STUDY_DAY_LOG_MAX,
  appendStudyDay,
  classifySession,
  isRefComplete,
  isWorkbookComplete,
  buildTsudumonProgressContext,
  isValidUnitKey,
  kindOfQid,
  mergeProgress,
  normalizePayload,
  readStudyDayLogs,
  topWrongQids,
  unitsNeedingReview,
} from '../tsudumonProgressCore';

const NOW = new Date('2026-07-26T20:00:00+09:00').getTime();
const unitName = (u: string) => `第${u}章`;

describe('入力の正規化', () => {
  it('章キーの形が違うものは捨てる', () => {
    expect(isValidUnitKey('04')).toBe(true);
    expect(isValidUnitKey('19')).toBe(true);
    expect(isValidUnitKey('20')).toBe(false);
    expect(isValidUnitKey('4')).toBe(false);
    expect(isValidUnitKey('__proto__')).toBe(false);
  });

  it('未知のqid・巨大な時間は落とす（壊れた入力で集計を壊さない）', () => {
    const p = normalizePayload({
      units: {
        '04': {
          refSteps: 3,
          r: { 'qa-x-1': 1, 'bad-1': 1, 'qz-x-2': 0 },
          msWb: 999 * 60 * 60 * 1000, // 999時間 → 上限で切る
        },
        '99': { refSteps: 1 },
      },
    });
    expect(Object.keys(p.units)).toEqual(['04']);
    expect(Object.keys(p.units['04'].r ?? {})).toEqual(['qa-x-1', 'qz-x-2']);
    expect(p.units['04'].msWb).toBe(12 * 60 * 60 * 1000);
  });

  it('qidの接頭辞から形式が分かる', () => {
    expect(kindOfQid('qa-t-1')).toBe('qa');
    expect(kindOfQid('qz-t-1')).toBe('qz');
    expect(kindOfQid('wr-t-1')).toBe('wr');
    expect(kindOfQid('zz-t-1')).toBeNull();
  });
});

describe('集計', () => {
  const first = normalizePayload({
    units: {
      '04': {
        refSteps: 5,
        wbSteps: 2,
        r: { 'qa-a-1': 1, 'qa-a-2': 0, 'qz-a-1': 1 },
        msRef: 10 * 60 * 1000,
        msWb: 5 * 60 * 1000,
      },
    },
  });

  it('進捗・時間・正答が集計される', () => {
    const p = mergeProgress(undefined, first, NOW);
    expect(p.units['04'].refSteps).toBe(5);
    expect(p.units['04'].answered).toBe(3);
    expect(p.units['04'].correct).toBe(2);
    expect(p.totals.msTotal).toBe(15 * 60 * 1000);
    expect(p.totals.startedUnits).toBe(1);
    expect(p.byKind.qa).toEqual({ answered: 2, correct: 1 });
    expect(p.byKind.qz).toEqual({ answered: 1, correct: 1 });
  });

  it('時間は加算、進捗は巻き戻らない', () => {
    const p1 = mergeProgress(undefined, first, NOW);
    // 2回目は進捗が減った状態で届く（別端末・リセット等）＋時間の増分
    const p2 = mergeProgress(
      p1,
      normalizePayload({
        units: { '04': { refSteps: 1, r: { 'qa-a-1': 1 }, msWb: 60 * 1000 } },
      }),
      NOW + 1000
    );
    expect(p2.units['04'].refSteps).toBe(5); // 巻き戻らない
    expect(p2.units['04'].answered).toBe(3);
    expect(p2.totals.msTotal).toBe(16 * 60 * 1000); // 時間は足される
  });

  it('同じ誤答を再送しても「間違えた回数」は増えない（冪等）', () => {
    const p1 = mergeProgress(undefined, first, NOW);
    expect(p1.wrong['qa-a-2']).toBe(1);
    const p2 = mergeProgress(p1, first, NOW + 1000);
    expect(p2.wrong['qa-a-2']).toBe(1);
  });

  it('直したあとに再び間違えたら回数が増える', () => {
    let p = mergeProgress(undefined, first, NOW);
    p = mergeProgress(
      p,
      normalizePayload({ units: { '04': { r: { 'qa-a-2': 1 } } } }),
      NOW + 1000
    );
    expect(p.units['04'].wrongNow).toEqual([]);
    p = mergeProgress(
      p,
      normalizePayload({ units: { '04': { r: { 'qa-a-2': 0 } } } }),
      NOW + 2000
    );
    expect(p.wrong['qa-a-2']).toBe(2);
  });

  it('複数の章を扱える（部分同期でも他の章が消えない）', () => {
    let p = mergeProgress(undefined, first, NOW);
    p = mergeProgress(
      p,
      normalizePayload({ units: { '07': { r: { 'qz-b-1': 1 } } } }),
      NOW + 1000
    );
    expect(Object.keys(p.units).sort()).toEqual(['04', '07']);
    expect(p.totals.answered).toBe(4);
  });
});

describe('ニガテの抽出', () => {
  it('2回以上まちがえた問題だけを「間違えやすい」とみなす', () => {
    const progress = {
      updatedAt: NOW,
      units: {},
      totals: {
        answered: 0,
        correct: 0,
        msRef: 0,
        msWb: 0,
        msTotal: 0,
        startedUnits: 0,
      },
      byKind: {
        qa: { answered: 0, correct: 0 },
        qz: { answered: 0, correct: 0 },
        wr: { answered: 0, correct: 0 },
      },
      wrong: { 'qa-a-1': 3, 'qz-a-2': 1, 'wr-a-3': 2 },
    };
    const top = topWrongQids(progress);
    expect(top.map((t) => t.qid)).toEqual(['qa-a-1', 'wr-a-3']);
  });

  it('間違いが残っている章を、多い順に返す', () => {
    const p = mergeProgress(
      undefined,
      normalizePayload({
        units: {
          '04': { r: { 'qa-a-1': 0, 'qa-a-2': 0 } },
          '07': { r: { 'qz-b-1': 0 } },
          '08': { r: { 'qz-c-1': 1 } },
        },
      }),
      NOW
    );
    expect(unitsNeedingReview(p)).toEqual([
      { unit: '04', wrong: 2 },
      { unit: '07', wrong: 1 },
    ]);
  });
});

describe('AIへ渡す要約', () => {
  it('記録が無ければ空文字（平常時のプロンプトを汚さない）', () => {
    expect(buildTsudumonProgressContext(undefined, unitName)).toBe('');
  });

  it('実データが数字で入り、推測を禁じる注意書きが付く', () => {
    const p = mergeProgress(
      undefined,
      normalizePayload({
        units: {
          '04': {
            refSteps: 4,
            r: { 'qa-a-1': 1, 'qa-a-2': 0, 'wr-a-1': 1 },
            msRef: 20 * 60 * 1000,
            msWb: 10 * 60 * 1000,
          },
        },
      }),
      NOW
    );
    const ctx = buildTsudumonProgressContext(p, unitName);
    expect(ctx).toContain('取り組んだ章: 1 / 19');
    expect(ctx).toContain('3問');
    expect(ctx).toContain('正答率 67%');
    expect(ctx).toContain('合計 30分');
    expect(ctx).toContain('参考書 20分');
    expect(ctx).toContain('第04章');
    expect(ctx).toContain('推測で言わない');
  });
});

describe('やり切ったかの判定（8割・厳密すぎない）', () => {
  const unit = (over: Record<string, number>) => ({
    refSteps: 0,
    wbSteps: 0,
    answered: 0,
    correct: 0,
    msRef: 0,
    msWb: 0,
    wrongNow: [] as string[],
    refTotal: 0,
    qTotal: 0,
    lastAt: NOW,
    ...over,
  });

  it('8割に届けば「やり切った」', () => {
    expect(isRefComplete(unit({ refSteps: 8, refTotal: 10 }))).toBe(true);
    expect(isRefComplete(unit({ refSteps: 7, refTotal: 10 }))).toBe(false);
    expect(isWorkbookComplete(unit({ answered: 20, qTotal: 24 }))).toBe(true);
    expect(isWorkbookComplete(unit({ answered: 10, qTotal: 24 }))).toBe(false);
  });

  it('総数が分からないうちは「やり切った」と言わない', () => {
    expect(isRefComplete(unit({ refSteps: 99 }))).toBe(false);
    expect(isWorkbookComplete(unit({ answered: 99 }))).toBe(false);
    expect(isRefComplete(undefined)).toBe(false);
  });

  it('学習のかたちを分類できる', () => {
    expect(
      classifySession(
        unit({
          refSteps: 10,
          refTotal: 10,
          answered: 10,
          correct: 9,
          qTotal: 10,
        })
      )
    ).toBe('both_done');
    expect(
      classifySession(unit({ answered: 10, correct: 9, qTotal: 10 }))
    ).toBe('wb_done_high');
    expect(
      classifySession(unit({ answered: 10, correct: 5, qTotal: 10 }))
    ).toBe('wb_done_low');
    // 参考書だけ読み切って問題は未着手 → 問題に誘う
    expect(classifySession(unit({ refSteps: 10, refTotal: 10 }))).toBe(
      'ref_done_only'
    );
    // 途中
    expect(classifySession(unit({ answered: 2, qTotal: 20 }))).toBe(
      'partial_wb'
    );
    expect(classifySession(unit({ refSteps: 2, refTotal: 20 }))).toBe(
      'partial_ref'
    );
  });
});

/**
 * 日別の学習ログ（`days`）。
 *
 * 保護者ダッシュボードの「この1週間で◯日」の元データ。`units[].lastAt` は1点しか
 * 持たないので日単位の記録が別に要る。**既存の書き込みに相乗りさせる**ので、
 * ここが壊れると追加の read を払わずに直す手段が無くなる。
 */
describe('appendStudyDay', () => {
  const DAY_MS = 24 * 60 * 60 * 1000;

  it('新しい日を追加する', () => {
    expect(appendStudyDay([], '2026-07-27', 60000, 3)).toEqual([
      { d: '2026-07-27', ms: 60000, a: 3 },
    ]);
  });

  it('同じ日は加算する（1日に何度同期しても1日ぶん）', () => {
    const logs = appendStudyDay(
      [{ d: '2026-07-27', ms: 60000, a: 3 }],
      '2026-07-27',
      30000,
      2
    );
    expect(logs).toEqual([{ d: '2026-07-27', ms: 90000, a: 5 }]);
  });

  it('日付順に並び、古いものから捨てられる', () => {
    let logs: ReturnType<typeof appendStudyDay> = [];
    for (let i = 0; i < STUDY_DAY_LOG_MAX + 5; i += 1) {
      const d = new Date(Date.parse('2026-07-01T00:00:00Z') + i * DAY_MS)
        .toISOString()
        .slice(0, 10);
      logs = appendStudyDay(logs, d, 1000, 1);
    }
    expect(logs).toHaveLength(STUDY_DAY_LOG_MAX);
    expect(logs[0].d).toBe('2026-07-06');
    expect(logs[logs.length - 1].d).toBe('2026-07-19');
  });

  it('負の増分は無視する（異常値でマイナスに振れない）', () => {
    expect(appendStudyDay([], '2026-07-27', -5000, -1)).toEqual([
      { d: '2026-07-27', ms: 0, a: 0 },
    ]);
  });
});

describe('readStudyDayLogs', () => {
  it('壊れた値を捨てる', () => {
    expect(
      readStudyDayLogs({
        days: [
          { d: '2026-07-27', ms: 1000, a: 2 },
          { d: 'not-a-date', ms: 1000, a: 2 },
          null,
          'string',
          { ms: 1000 },
          { d: '2026-07-26' },
        ],
      })
    ).toEqual([
      { d: '2026-07-27', ms: 1000, a: 2 },
      { d: '2026-07-26', ms: 0, a: 0 },
    ]);
  });

  it('days が無ければ空配列（古い進捗ドキュメントでも壊れない）', () => {
    expect(readStudyDayLogs(null)).toEqual([]);
    expect(readStudyDayLogs({})).toEqual([]);
    expect(readStudyDayLogs({ days: 'nope' })).toEqual([]);
  });
});

describe('mergeProgress の days 記録', () => {
  const payload = (msRef: number, r: Record<string, number>) => ({
    units: { '04': { msRef, r } },
  });

  it('学習した日を JST 日付で1件積む', () => {
    const next = mergeProgress(undefined, payload(60000, { 'qa-1': 1 }), NOW);
    expect(next.days).toEqual([{ d: '2026-07-26', ms: 60000, a: 1 }]);
  });

  it('同じ日の再同期は加算される（日数は増えない）', () => {
    const first = mergeProgress(undefined, payload(60000, { 'qa-1': 1 }), NOW);
    const second = mergeProgress(
      first,
      payload(30000, { 'qa-1': 1, 'qa-2': 0 }),
      NOW + 60_000
    );
    // 2回目で qa-2 も解いているので、その日の問題数は 1 → 2 に増える
    expect(second.days).toHaveLength(1);
    expect(second.days?.[0]).toEqual({ d: '2026-07-26', ms: 90000, a: 2 });
  });

  it('日をまたぐと2件になる', () => {
    const first = mergeProgress(undefined, payload(60000, { 'qa-1': 1 }), NOW);
    const next = mergeProgress(
      first,
      payload(60000, { 'qa-1': 1, 'qa-2': 1 }),
      NOW + 24 * 60 * 60 * 1000
    );
    expect(next.days?.map((d) => d.d)).toEqual(['2026-07-26', '2026-07-27']);
  });

  it('0分0問の同期では日を積まない（開いただけを学習日にしない）', () => {
    const next = mergeProgress(undefined, { units: { '04': {} } }, NOW);
    expect(next.days).toEqual([]);
  });

  it('既存の days を引き継ぐ（部分同期で消えない）', () => {
    const prev = mergeProgress(undefined, payload(60000, { 'qa-1': 1 }), NOW);
    const next = mergeProgress(prev, { units: { '05': {} } }, NOW);
    expect(next.days).toEqual([{ d: '2026-07-26', ms: 60000, a: 1 }]);
  });
});
