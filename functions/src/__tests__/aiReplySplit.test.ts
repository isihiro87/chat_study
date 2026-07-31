import { describe, it, expect } from 'vitest';

import {
  splitReply,
  buildReplyMessages,
  finishTruncated,
  SOFT_LIMIT,
  HARD_LIMIT,
  MAX_BUBBLES,
  TRUNCATED_NOTICE,
} from '../aiReplySplit';

describe('aiReplySplit.splitReply', () => {
  it('空文字なら空配列（送信をスキップできる）', () => {
    expect(splitReply('')).toEqual([]);
    expect(splitReply('   ')).toEqual([]);
  });

  it('短い文はそのまま1つ', () => {
    expect(splitReply('こんにちは')).toEqual(['こんにちは']);
  });

  it('段落（空行）で分ける', () => {
    const text = `${'あ'.repeat(300)}\n\n${'い'.repeat(300)}`;
    const bubbles = splitReply(text);
    expect(bubbles).toHaveLength(2);
    expect(bubbles[0]).toContain('あ');
    expect(bubbles[1]).toContain('い');
  });

  it('段落が無ければ文末で分ける', () => {
    const sentence = `${'あ'.repeat(200)}。`;
    const bubbles = splitReply(sentence.repeat(3));
    expect(bubbles.length).toBeGreaterThan(1);
  });

  it('吹き出し数の上限を超えない', () => {
    const text = Array.from(
      { length: 20 },
      (_, i) => `${'あ'.repeat(350)}${i}`
    ).join('\n\n');
    expect(splitReply(text).length).toBeLessThanOrEqual(MAX_BUBBLES);
  });

  it('上限を超えたぶんは最後の吹き出しにまとまる（内容を捨てない）', () => {
    const paragraphs = Array.from({ length: 6 }, (_, i) =>
      `段落${i}`.padEnd(350, 'あ')
    );
    const bubbles = splitReply(paragraphs.join('\n\n'));
    expect(bubbles).toHaveLength(MAX_BUBBLES);
    // 最後の段落の内容が失われていない
    expect(bubbles[bubbles.length - 1]).toContain('段落5');
  });

  it('LINE の上限を超えない', () => {
    const huge = 'あ'.repeat(HARD_LIMIT * 3);
    for (const b of splitReply(huge)) {
      expect(b.length).toBeLessThanOrEqual(HARD_LIMIT);
    }
  });

  it('目安の文字数に概ね収まる', () => {
    const text = Array.from({ length: 3 }, () => 'あ'.repeat(200)).join('\n\n');
    const bubbles = splitReply(text);
    // 段落単位なので厳密ではないが、極端に長い吹き出しは作らない
    for (const b of bubbles) {
      expect(b.length).toBeLessThan(SOFT_LIMIT * 2.5);
    }
  });

  it('オプションで上限を変えられる', () => {
    const text = Array.from({ length: 4 }, (_, i) => `p${i}`).join('\n\n');
    expect(splitReply(text, { softLimit: 1, maxBubbles: 2 })).toHaveLength(2);
  });
});

describe('aiReplySplit.buildReplyMessages', () => {
  const qr = {
    items: [
      {
        type: 'action' as const,
        action: { type: 'uri', label: 'x', uri: 'https://a' },
      },
    ],
  };

  it('吹き出しをメッセージ配列にする', () => {
    const msgs = buildReplyMessages(['a', 'b']);
    expect(msgs).toHaveLength(2);
    expect(msgs[0]).toMatchObject({ type: 'text', text: 'a' });
  });

  it('Quick Reply は最後の吹き出しだけに付く', () => {
    const msgs = buildReplyMessages(['a', 'b'], { quickReply: qr });
    expect(msgs[0].quickReply).toBeUndefined();
    expect(msgs[1].quickReply).toBe(qr);
  });

  it('先頭に注意書きを差し込める', () => {
    const msgs = buildReplyMessages(['a'], { leadingText: 'お知らせ' });
    expect(msgs).toHaveLength(2);
    expect(msgs[0]).toMatchObject({ text: 'お知らせ' });
  });

  it('注意書きがあっても Quick Reply は最後に付く', () => {
    const msgs = buildReplyMessages(['a', 'b'], {
      leadingText: 'お知らせ',
      quickReply: qr,
    });
    expect(msgs[msgs.length - 1].quickReply).toBe(qr);
  });

  it('吹き出しが空なら注意書きだけ', () => {
    expect(buildReplyMessages([], { leadingText: 'x' })).toHaveLength(1);
  });
});

describe('aiReplySplit.finishTruncated（出力上限で切れた応答の始末）', () => {
  it('未完成な最後の文を落として案内を足す', () => {
    const out = finishTruncated(
      '江戸幕府は1603年に開かれたよ。次に参勤交代という制度が'
    );
    expect(out).toContain('江戸幕府は1603年に開かれたよ。');
    expect(out).not.toContain('参勤交代という制度が');
    expect(out).toContain(TRUNCATED_NOTICE.trim());
  });

  it('文末で終わっていれば本文はそのまま', () => {
    const out = finishTruncated('鎌倉幕府は源頼朝が開いたよ！');
    expect(out.startsWith('鎌倉幕府は源頼朝が開いたよ！')).toBe(true);
    expect(out).toContain(TRUNCATED_NOTICE.trim());
  });

  it('文末が1つも無いときは本文を消さない（全部落とさない）', () => {
    const out = finishTruncated('とちゅうでちょんぎれた文章');
    expect(out).toContain('とちゅうでちょんぎれた文章');
  });

  it('空文字は空のまま（送信をスキップできる）', () => {
    expect(finishTruncated('')).toBe('');
    expect(finishTruncated('   ')).toBe('');
  });

  it('！？や半角記号も文末として扱う', () => {
    expect(finishTruncated('すごいね！ところで次は')).toContain('すごいね！');
    expect(finishTruncated('OK? そのあと')).toContain('OK?');
  });
});
