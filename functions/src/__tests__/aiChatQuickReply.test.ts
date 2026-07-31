// @vitest-environment node
/**
 * AI 応答に添える Quick Reply の組み立て。
 *
 * postback の `data` は `lineWebhook.handlePostback` に**実在するタイプ**でなければ
 * 押しても何も起きない（＝取りこぼしが増える）。ここで固定しておく。
 */
import { describe, it, expect } from 'vitest';

import {
  buildIntentQuickReply,
  buildFallbackQuickReply,
  MAX_QUICK_REPLY_ITEMS,
  type QuickReplyUrls,
} from '../aiChatQuickReply';

const URLS: QuickReplyUrls = {
  units: 'https://liff.line.me/units-test',
  contact: 'https://liff.line.me/contact-test',
};

/** チップの action をまとめて取り出す（アサーション用）。 */
function actions(text: string): Array<Record<string, string>> {
  return buildIntentQuickReply(text, URLS)?.items.map((i) => i.action) ?? [];
}

describe('buildIntentQuickReply: 既存の3意図（回帰防止）', () => {
  it('設定変更', () => {
    expect(actions('配信時刻を変更したい')).toContainEqual(
      expect.objectContaining({ type: 'message', text: '設定変更' })
    );
  });

  it('出題範囲設定', () => {
    expect(actions('まだ習ってない範囲が出る')).toContainEqual(
      expect.objectContaining({ data: 'type=scope_start' })
    );
  });

  it('1問解く', () => {
    expect(actions('問題ちょうだい')).toContainEqual(
      expect.objectContaining({ data: 'type=extra_question&src=ai_chat' })
    );
  });
});

describe('buildIntentQuickReply: 2026-07-26 に追加した意図', () => {
  it('苦手・復習 → 苦手を復習', () => {
    for (const text of [
      '苦手な単元を復習したい',
      'まちがえた問題やり直したい',
    ]) {
      expect(actions(text)).toContainEqual(
        expect.objectContaining({ data: 'type=weak_review' })
      );
    }
  });

  it('暗記カード・じっくり → じっくり学ぶ（uri）', () => {
    expect(actions('暗記カードで覚えたい')).toContainEqual(
      expect.objectContaining({ type: 'uri', uri: URLS.units })
    );
  });

  it('配信が多い → ブロックではなく「おやすみ」へ逃がす', () => {
    for (const text of ['通知がうるさい', 'もう送らないでほしい']) {
      expect(actions(text)).toContainEqual(
        expect.objectContaining({ data: 'type=pause_delivery' })
      );
    }
  });

  it('再開したい → 配信を再開', () => {
    expect(actions('また問題を届けてほしい、再開したい')).toContainEqual(
      expect.objectContaining({ data: 'type=resume_delivery' })
    );
  });

  it('不具合 → お問い合わせ（uri）', () => {
    expect(actions('ボタンが動かないんだけど')).toContainEqual(
      expect.objectContaining({ type: 'uri', uri: URLS.contact })
    );
  });
});

describe('buildIntentQuickReply: 件数と該当なし', () => {
  it('関係ない話題ではチップを出さない', () => {
    expect(
      buildIntentQuickReply('織田信長ってどんな人？', URLS)
    ).toBeUndefined();
  });

  it('たくさん当たっても3件までに絞る', () => {
    const q = buildIntentQuickReply(
      '設定変更して範囲も変えたいし問題も解きたいし苦手も復習したい。暗記カードもやりたい',
      URLS
    );
    expect(q?.items.length).toBe(MAX_QUICK_REPLY_ITEMS);
  });
});

describe('buildFallbackQuickReply（上限到達・エラー時の出口）', () => {
  it('AI 以外で続けられる3つを出す', () => {
    const items = buildFallbackQuickReply(URLS).items;
    expect(items.length).toBe(3);
    const datas = items.map((i) => i.action.data ?? i.action.uri);
    expect(datas).toEqual([
      'type=extra_question&src=ai_chat',
      'type=weak_review',
      URLS.units,
    ]);
  });
});
