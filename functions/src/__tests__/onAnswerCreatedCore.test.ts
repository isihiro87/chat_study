import { describe, it, expect } from 'vitest';

import {
  TSUDUMON_INTRO_NUDGE_MILESTONE,
  TSUDUMON_INTRO_NUDGE_ENABLED,
  hasReachedTsudumonIntroMilestone,
  isWorkbookAnswer,
  shouldCountForOneOnOneTotal,
  shouldSendOneOnOneNudges,
  shouldSendTsudumonIntroNudge,
  buildTsudumonIntroNudgeText,
  TSUDUMON_LP_URL,
  type TsudumonIntroNudgeContext,
} from '../onAnswerCreatedCore';

describe('isWorkbookAnswer / shouldSendOneOnOneNudges / shouldCountForOneOnOneTotal', () => {
  it('source:"workbook" はワーク経由と判定する', () => {
    expect(isWorkbookAnswer('workbook')).toBe(true);
    expect(isWorkbookAnswer(null)).toBe(false);
    expect(isWorkbookAnswer(undefined)).toBe(false);
    expect(isWorkbookAnswer('daily')).toBe(false);
  });

  it('source:"workbook" のとき一問一答固有のナッジを送らない', () => {
    expect(shouldSendOneOnOneNudges('workbook')).toBe(false);
    expect(shouldSendOneOnOneNudges(null)).toBe(true);
    expect(shouldSendOneOnOneNudges('daily')).toBe(true);
  });

  it('source:"workbook" の回答は一問一答の累計回答数に数えない', () => {
    expect(shouldCountForOneOnOneTotal('workbook')).toBe(false);
    expect(shouldCountForOneOnOneTotal(null)).toBe(true);
  });
});

describe('hasReachedTsudumonIntroMilestone', () => {
  it('マイルストーンは10問', () => {
    expect(TSUDUMON_INTRO_NUDGE_MILESTONE).toBe(10);
  });

  it('9問目→10問目で新規到達と判定する', () => {
    expect(hasReachedTsudumonIntroMilestone(9, 10)).toBe(true);
  });

  it('10問未満では到達と判定しない', () => {
    expect(hasReachedTsudumonIntroMilestone(5, 6)).toBe(false);
    expect(hasReachedTsudumonIntroMilestone(0, 1)).toBe(false);
  });

  it('11問目以降は新規到達と判定しない（再送しない）', () => {
    expect(hasReachedTsudumonIntroMilestone(10, 11)).toBe(false);
    expect(hasReachedTsudumonIntroMilestone(20, 21)).toBe(false);
  });
});

describe('shouldSendTsudumonIntroNudge', () => {
  const baseCtx: TsudumonIntroNudgeContext = {
    lineUserId: 'Uxxxxxxxx',
    blocked: false,
    prevOneOnOneAnswered: 9,
    nextOneOnOneAnswered: 10,
    alreadySent: false,
    hasTsudumonAccess: false,
  };

  // --- 無効フラグ（現在の本番状態）---------------------------------------
  // ユーザー指示 2026-07-25: つづもん側の実装が整うまで一問一答ユーザーへ届かせない。

  it('既定（TSUDUMON_INTRO_NUDGE_ENABLED=false）では条件が揃っても送らない', () => {
    expect(shouldSendTsudumonIntroNudge(baseCtx)).toBe(false);
  });

  it('フラグが無効なら、他の条件をどう変えても送らない', () => {
    expect(shouldSendTsudumonIntroNudge(baseCtx, false)).toBe(false);
  });

  it('本番のフラグが false のままであること（誤って有効化されていないかの番人）', () => {
    expect(TSUDUMON_INTRO_NUDGE_ENABLED).toBe(false);
  });

  // --- 有効化したときの判定ロジック（フラグを明示的に true にして検証）-------

  it('累計10問に新規到達・未送信・未保有・非ブロックなら送る', () => {
    expect(shouldSendTsudumonIntroNudge(baseCtx, true)).toBe(true);
  });

  it('10問未満では送らない', () => {
    expect(
      shouldSendTsudumonIntroNudge(
        {
          ...baseCtx,
          prevOneOnOneAnswered: 5,
          nextOneOnOneAnswered: 6,
        },
        true
      )
    ).toBe(false);
  });

  it('11問目以降では再送しない', () => {
    expect(
      shouldSendTsudumonIntroNudge(
        {
          ...baseCtx,
          prevOneOnOneAnswered: 10,
          nextOneOnOneAnswered: 11,
        },
        true
      )
    ).toBe(false);
  });

  it('すでに送信済み（alreadySent）なら送らない', () => {
    expect(
      shouldSendTsudumonIntroNudge({ ...baseCtx, alreadySent: true }, true)
    ).toBe(false);
  });

  it('つづもんライセンス／体験を既に保有していれば送らない', () => {
    expect(
      shouldSendTsudumonIntroNudge(
        { ...baseCtx, hasTsudumonAccess: true },
        true
      )
    ).toBe(false);
  });

  it('公式LINE（一問一答）をブロック中なら送らない', () => {
    expect(
      shouldSendTsudumonIntroNudge({ ...baseCtx, blocked: true }, true)
    ).toBe(false);
  });

  it('lineUserId が無ければ送らない', () => {
    expect(
      shouldSendTsudumonIntroNudge({ ...baseCtx, lineUserId: '' }, true)
    ).toBe(false);
  });
});

describe('buildTsudumonIntroNudgeText', () => {
  it('つづもんのLPのURLを含むこと', () => {
    expect(buildTsudumonIntroNudgeText()).toContain(TSUDUMON_LP_URL);
    expect(buildTsudumonIntroNudgeText()).toContain('https://tsudumon.jp/');
  });

  it('友だち追加リンク（lin.ee）を含まないこと', () => {
    expect(buildTsudumonIntroNudgeText()).not.toContain('lin.ee');
  });

  it('つづもんの名称を含む', () => {
    expect(buildTsudumonIntroNudgeText()).toContain('つづもん');
  });
});
