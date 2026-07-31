// @vitest-environment node
/**
 * 「学習が一段落した」の検出。
 *
 * ここは**誤検知の害が大きい**（調べもので離席しただけの人に毎回話しかける／
 * 夜中に通知が飛ぶ）。判定条件を1つずつ固定して、うるさくならないことを守る。
 */
import { describe, it, expect } from 'vitest';

import {
  buildRecapMessage,
  buildRecapContext,
  isStaleSession,
  jstDateKey,
  shouldSendRecapAt,
} from '../tsudumonRecapCore';

/** JST 2026-07-27（月）20:00 */
const NOW = new Date('2026-07-27T20:00:00+09:00').getTime();
const active = {
  unit: '07',
  ms: 12 * 60 * 1000,
  answered: 5,
  lastSyncAt: NOW - 30 * 60 * 1000, // きょうの学習（時刻は問わない）
  pending: true,
};

describe('shouldSendRecapAt（定時配信・2026-07-27 変更）', () => {
  // 「学習の15分後」ではなく**選んだ曜日・時刻ちょうど**に送る方式へ変えた。
  // いつ来るか読めないメッセージは、生活のリズムに組み込めないため。
  const sched = { days: [0, 1, 2, 3, 4, 5, 6], hour: 20 };

  it('きょう学習していて、選んだ時刻ちょうどなら送る', () => {
    expect(shouldSendRecapAt(active, NOW, sched)).toBe(true);
  });

  it('時刻が違えば送らない', () => {
    const oneHourLater = NOW + 60 * 60 * 1000;
    expect(shouldSendRecapAt(active, oneHourLater, sched)).toBe(false);
  });

  it('選んでいない曜日には送らない', () => {
    // NOW は月曜。土日だけの設定なら送らない
    expect(shouldSendRecapAt(active, NOW, { days: [0, 6], hour: 20 })).toBe(
      false
    );
  });

  it('きょう学習していなければ送らない（催促にしない）', () => {
    const yesterday = { ...active, lastSyncAt: NOW - 26 * 60 * 60 * 1000 };
    expect(shouldSendRecapAt(yesterday, NOW, sched)).toBe(false);
  });

  it('朝に勉強して夜に振り返る、が成立する（15分ルールの廃止）', () => {
    // 朝7時に学習 → 夜8時のおつかれさま
    const morning = new Date('2026-07-27T07:00:00+09:00').getTime();
    expect(
      shouldSendRecapAt({ ...active, lastSyncAt: morning }, NOW, sched)
    ).toBe(true);
  });

  it('ちょっと開いただけ（短時間・少問数）では送らない', () => {
    expect(
      shouldSendRecapAt({ ...active, ms: 60 * 1000, answered: 0 }, NOW, sched)
    ).toBe(false);
  });

  it('時間が短くても3問以上解いていれば送る', () => {
    expect(
      shouldSendRecapAt({ ...active, ms: 60 * 1000, answered: 3 }, NOW, sched)
    ).toBe(true);
  });

  it('その日すでに送っていれば送らない（1日1回・「終わったよ」報告を含む）', () => {
    expect(
      shouldSendRecapAt(
        { ...active, lastRecapDate: jstDateKey(NOW) },
        NOW,
        sched
      )
    ).toBe(false);
  });

  it('記録が無ければ何もしない', () => {
    expect(shouldSendRecapAt(undefined, NOW, sched)).toBe(false);
  });

  it('日をまたいだセッションは畳む（同じ日なら畳まない）', () => {
    const yesterday = { ...active, lastSyncAt: NOW - 26 * 60 * 60 * 1000 };
    expect(isStaleSession(yesterday, NOW)).toBe(true);
    // 朝に勉強したセッションは、夜になっても畳まない
    const morning = new Date('2026-07-27T07:00:00+09:00').getTime();
    expect(isStaleSession({ ...active, lastSyncAt: morning }, NOW)).toBe(false);
  });
});

describe('文面（学習のかたち別）', () => {
  it('やり切ったときは達成を、途中のときは「途中でも大丈夫」を言う', () => {
    const done = buildRecapMessage(active, '幕末の動乱', 'wb_done_high');
    expect(done).toContain('やり切ったね');
    const partial = buildRecapMessage(active, '幕末の動乱', 'partial_wb');
    expect(partial).toContain('ここまで進んだね');
    expect(partial).toContain('途中でも大丈夫');
    // 途中でも必ず「やったことの承認」から入る（急かさない）
    expect(partial).not.toContain('がんばろう');
  });

  it('間違いが残っているときは、責めずにそこを一緒に見ようと誘う', () => {
    const t = buildRecapMessage(active, '幕末の動乱', 'wb_done_low', {
      wrongLeft: 3,
      workbookUrl: 'https://tsudumon.jp/wb/10/',
    });
    expect(t).toContain('悪いことじゃない');
    expect(t).toContain('3問');
    expect(t).toContain('https://tsudumon.jp/wb/10/');
  });

  it('参考書だけ読み終えた人には、問題も誘う', () => {
    const t = buildRecapMessage(active, '幕末の動乱', 'ref_done_only', {
      workbookUrl: 'https://tsudumon.jp/wb/10/',
    });
    expect(t).toContain('読み切ったね');
    expect(t).toContain('問題で試してみる');
    expect(t).toContain('https://tsudumon.jp/wb/10/');
  });

  it('どのかたちでも「話してみない？」と「スルーで大丈夫」を必ず含む', () => {
    const shapes = [
      'both_done',
      'wb_done_high',
      'wb_done_low',
      'ref_done_only',
      'ref_done',
      'partial_wb',
      'partial_ref',
    ] as const;
    for (const shape of shapes) {
      const t = buildRecapMessage(active, '幕末の動乱', shape, {
        wrongLeft: 1,
      });
      expect(t, shape).toContain('スルーで大丈夫');
      expect(t, shape).toMatch(/話してみない|整理してみない/);
      expect(t, shape).not.toContain('**');
    }
  });
});

describe('文面', () => {
  it('実績の数字を添えて、話すことに誘う（宿題にしない）', () => {
    const t = buildRecapMessage(active, 'ヨーロッパと天下統一');
    expect(t).toContain('おつかれさま');
    expect(t).toContain('ヨーロッパと天下統一');
    expect(t).toContain('5問');
    expect(t).toContain('12分');
    expect(t).toContain('話してみない');
    expect(t).toContain('スルーで大丈夫');
    // LINEでは装飾されないので Markdown 記号を残さない
    expect(t).not.toContain('**');
  });

  it('章が分からなくても文面は壊れない', () => {
    expect(buildRecapMessage({ answered: 4 }, null)).toContain('おつかれさま');
  });

  it('誘った当日はAIに「受け止めてほめる」文脈が入る', () => {
    const ctx = buildRecapContext(
      { lastRecapDate: jstDateKey(NOW) },
      'ヨーロッパと天下統一',
      NOW
    );
    expect(ctx).toContain('ふり返りの会話');
    expect(ctx).toContain('まず受け止めてほめる');
    expect(ctx).toContain('答えを先に言わない');
  });

  it('誘っていない日はプロンプトを汚さない', () => {
    expect(buildRecapContext({ lastRecapDate: '2026-07-01' }, null, NOW)).toBe(
      ''
    );
    expect(buildRecapContext(undefined, null, NOW)).toBe('');
  });
});
