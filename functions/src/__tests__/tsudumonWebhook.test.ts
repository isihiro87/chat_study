import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { messagingApi } from '@line/bot-sdk';

// tsudumon/webhook.ts が '../lineWebhook' から import する全ハンドラを vi.fn() で
// スタブ化する。目的は「つづもんwebhookのディスパッチが正しい関数だけを呼ぶこと」を
// 検証すること（実際の一問一答ロジックは lineWebhook.ts 側の既存テストの範囲）。
vi.mock('../lineWebhook', () => ({
  handleTsudumonActivation: vi.fn(),
  handleTsudumonContinueRequest: vi.fn(),
  handleWorkbookQuestion: vi.fn().mockResolvedValue(false),
  handleWorkbookTextAnswer: vi.fn().mockResolvedValue(false),
  handleWorkbookStartPostback: vi.fn(),
  handleWorkbookNextPostback: vi.fn(),
  handleWorkbookEndPostback: vi.fn(),
  handleWorkbookIdkPostback: vi.fn(),
  handleWorkbookKindPostback: vi.fn(),
  handleWorkbookInputSkipPostback: vi.fn(),
  handleWorkbookRegradePostback: vi.fn(),
  handleWorkbookStatsPostback: vi.fn(),
  handleWorkbookRecentPostback: vi.fn(),
  handleWorkbookWeakPostback: vi.fn(),
  handleWorkbookHelpPostback: vi.fn(),
  handleReferenceAskPostback: vi.fn(),
  handleReferenceTalkPostback: vi.fn(),
  handleReferenceCheckPostback: vi.fn(),
  handleReferenceLevelPostback: vi.fn(),
  handleReferenceTextInput: vi.fn().mockResolvedValue(false),
  handleAnswerPostback: vi.fn(),
  handleMediaMessage: vi.fn(),
}));

vi.mock('../aiChat', () => ({
  handleAiChatWith: vi.fn(),
}));

// dispatchTsudumonMessage（workbookSession / refSession の途中状態チェック）と
// handleTsudumonFollow（users/{uid} への merge write）が共有する Firestore モック。
// vi.mock は他の import より先に hoist されるため、モックが参照する get/set/doc の
// スパイは vi.hoisted で先に用意しておく（TDZ を避けるため）。
const { docGetMock, docSetMock, docRefMock } = vi.hoisted(() => {
  const docGetMock = vi.fn(async () => ({
    exists: false,
    data: () => undefined,
  }));
  const docSetMock = vi.fn(async () => undefined);
  const docRefMock = vi.fn(() => ({ get: docGetMock, set: docSetMock }));
  return { docGetMock, docSetMock, docRefMock };
});

vi.mock('firebase-admin/app', () => ({
  initializeApp: vi.fn(),
  getApps: vi.fn(() => [{}]),
}));

vi.mock('firebase-admin/firestore', () => ({
  getFirestore: vi.fn(() => ({ doc: docRefMock })),
  FieldValue: { serverTimestamp: vi.fn(() => 'SERVER_TIMESTAMP') },
}));

import {
  handleTsudumonActivation,
  handleAnswerPostback,
  handleWorkbookStartPostback,
  handleReferenceAskPostback,
} from '../lineWebhook';
import { handleAiChatWith } from '../aiChat';
import {
  dispatchTsudumonPostback,
  dispatchTsudumonMessage,
} from '../tsudumon/webhook';
import { handleTsudumonFollow } from '../tsudumon/followHandlers';

const fakeClient = {
  replyMessage: vi.fn(),
  pushMessage: vi.fn(),
} as unknown as messagingApi.MessagingApiClient;

// 一問一答固有（つづもんとは無関係）の postback type。design.md のディスパッチ表に
// 存在せず、つづもんwebhookが処理してはいけないもの。
const ICHIMON_ITTOU_ONLY_TYPES = [
  'select_grade',
  'select_subject',
  'select_time',
  'scope_start',
  'scope_pick',
  'scope_commit',
  'scope_finish',
  'restart',
  'weak_review',
  'settings_menu',
  'settings_guide',
  'pause_delivery',
  'resume_delivery',
  'extra_question',
  'premium_info',
  'not_learned',
  'not_learned_apply',
  'sample_answer',
];

describe('dispatchTsudumonPostback', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    docGetMock.mockResolvedValue({ exists: false, data: () => undefined });
  });

  it.each(ICHIMON_ITTOU_ONLY_TYPES)(
    '一問一答固有の type=%s はどのハンドラも呼ばない',
    async (type) => {
      const params = new URLSearchParams({ type });
      await dispatchTsudumonPostback(fakeClient, 'line:U1', 'reply1', params);

      expect(handleAnswerPostback).not.toHaveBeenCalled();
      expect(handleWorkbookStartPostback).not.toHaveBeenCalled();
      expect(handleReferenceAskPostback).not.toHaveBeenCalled();
      expect(handleTsudumonActivation).not.toHaveBeenCalled();
    }
  );

  it('type=answer は workbook 問題への回答として handleAnswerPostback へ委譲する', async () => {
    const params = new URLSearchParams({
      type: 'answer',
      questionId: 'q-wb-history-1-1',
      choice: '0',
    });
    await dispatchTsudumonPostback(fakeClient, 'line:U1', 'reply1', params);

    expect(handleAnswerPostback).toHaveBeenCalledTimes(1);
    expect(handleAnswerPostback).toHaveBeenCalledWith(
      fakeClient,
      'line:U1',
      'reply1',
      params
    );
  });

  it('type=wb_start は handleWorkbookStartPostback（client 注入）へ委譲する', async () => {
    const params = new URLSearchParams({ type: 'wb_start', k: 'choice' });
    await dispatchTsudumonPostback(fakeClient, 'line:U1', 'reply1', params);

    expect(handleWorkbookStartPostback).toHaveBeenCalledWith(
      fakeClient,
      'line:U1',
      'reply1',
      params
    );
  });

  it('type=ref_ask は handleReferenceAskPostback（client 注入）へ委譲する', async () => {
    const params = new URLSearchParams({ type: 'ref_ask' });
    await dispatchTsudumonPostback(fakeClient, 'line:U1', 'reply1', params);

    expect(handleReferenceAskPostback).toHaveBeenCalledWith(
      fakeClient,
      'line:U1',
      'reply1',
      params
    );
  });
});

describe('dispatchTsudumonMessage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    docGetMock.mockResolvedValue({ exists: false, data: () => undefined });
  });

  function textEvent(text: string) {
    return {
      type: 'message',
      source: { type: 'user', userId: 'U1' },
      replyToken: 'reply1',
      message: { type: 'text', text },
    } as never;
  }

  it('ライセンスコード（TZM-XXXX-XXXX）は handleTsudumonActivation へ委譲する', async () => {
    await dispatchTsudumonMessage(fakeClient, textEvent('TZM-AB23-CD45'));

    expect(handleTsudumonActivation).toHaveBeenCalledWith(
      fakeClient,
      'line:U1',
      'reply1',
      'TZM-AB23-CD45'
    );
    expect(handleAiChatWith).not.toHaveBeenCalled();
  });

  it('どのコマンドにも一致しない自由文は aiChat.handleAiChatWith にフォールスルーする', async () => {
    await dispatchTsudumonMessage(fakeClient, textEvent('こんにちは！'));

    // フェーズ5b: つづもんBotは AI へ botKind='tsudumon' を渡す
    // （aiChatPrompt.ts のつづもん用知識ブロックへ切り替えるため）。
    expect(handleAiChatWith).toHaveBeenCalledWith(
      fakeClient,
      'line:U1',
      'reply1',
      'こんにちは！',
      undefined,
      undefined,
      'tsudumon'
    );
    expect(handleTsudumonActivation).not.toHaveBeenCalled();
  });
});

describe('handleTsudumonFollow', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    docGetMock.mockResolvedValue({ exists: false, data: () => undefined });
  });

  function followEvent() {
    return {
      source: { type: 'user', userId: 'U1' },
      replyToken: 'reply1',
    };
  }

  it('blocked / onboardingState には一切書き込まない（一問一答の状態を壊さない）', async () => {
    await handleTsudumonFollow(fakeClient, followEvent());

    // 1件目 = users/{uid}、2件目 = tsudumonFollowUps/{uid}（未体験フォローの予定表）。
    // どの書き込みにも一問一答のフィールドを混ぜないこと。
    expect(docSetMock).toHaveBeenCalledTimes(2);
    for (const [payload] of docSetMock.mock.calls) {
      expect(payload).not.toHaveProperty('blocked');
      expect(payload).not.toHaveProperty('onboardingState');
    }
  });

  it('tsudumonFollowed=true / tsudumonBlockedAt=null を書く', async () => {
    await handleTsudumonFollow(fakeClient, followEvent());

    const [payload] = docSetMock.mock.calls[0];
    expect(payload).toMatchObject({
      tsudumonFollowed: true,
      tsudumonBlockedAt: null,
    });
  });

  it('tsudumonFollowedAt が未設定なら書き込む（初回フォロー）', async () => {
    docGetMock.mockResolvedValueOnce({
      exists: true,
      data: () => ({}),
    });

    await handleTsudumonFollow(fakeClient, followEvent());

    const [payload] = docSetMock.mock.calls[0];
    expect(payload).toHaveProperty('tsudumonFollowedAt');
  });

  it('tsudumonFollowedAt が既存なら上書きしない（再フォロー）', async () => {
    docGetMock.mockResolvedValueOnce({
      exists: true,
      data: () => ({ tsudumonFollowedAt: 'EXISTING_TIMESTAMP' }),
    });

    await handleTsudumonFollow(fakeClient, followEvent());

    const [payload] = docSetMock.mock.calls[0];
    expect(payload).not.toHaveProperty('tsudumonFollowedAt');
  });

  it('replyToken で follow 導線（3日間無料お試し・QRの使い方）を reply する', async () => {
    await handleTsudumonFollow(fakeClient, followEvent());

    expect(fakeClient.replyMessage).toHaveBeenCalledTimes(1);
    const [arg] = (fakeClient.replyMessage as ReturnType<typeof vi.fn>).mock
      .calls[0];
    expect(arg.replyToken).toBe('reply1');
    const text = arg.messages[0].text as string;
    expect(text).toContain('3日間');
  });
});
