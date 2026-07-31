import { describe, it, expect } from 'vitest';

import {
  detectRecallIntent,
  pickRecallSegments,
  buildRecallContext,
  MAX_RECALL_SEGMENTS,
  MAX_RECALL_TOKENS,
  type DigestLite,
} from '../aiRecallCore';

const TOPICS = new Set([
  '鎌倉幕府の成立',
  '律令国家と奈良時代',
  '明治維新と新政府',
]);

describe('aiRecallCore.detectRecallIntent', () => {
  describe('過去参照を検知する', () => {
    const shouldDetect = [
      '前に部活で時間ないって話したけど、どうすればいい？',
      'さっき言ったやつもう一回おしえて',
      'きのう話した勉強のやり方おぼえてる？',
      '先週相談したこと、どうなった？',
      'テストの日いつって言ったっけ？',
      'あの時の話の続きがしたい',
      '部活の話だけど、やっぱり時間がない',
    ];
    for (const text of shouldDetect) {
      it(`「${text}」→ needed`, () => {
        const r = detectRecallIntent(text, TOPICS);
        expect(r.needed).toBe(true);
        expect(r.via).toBe('reference');
      });
    }
  });

  describe('単元名の一致でも検知する', () => {
    it('実在する単元名が含まれれば needed', () => {
      const r = detectRecallIntent('鎌倉幕府の成立をもう一度やりたい', TOPICS);
      expect(r.needed).toBe(true);
      expect(r.via).toBe('topic');
      expect(r.hints).toContain('鎌倉幕府の成立');
    });

    it('単元名リストを渡さなければ単元では検知しない', () => {
      const r = detectRecallIntent('鎌倉幕府の成立をやりたい');
      expect(r.needed).toBe(false);
    });
  });

  describe('トリガーが無ければ検索しない（毎ターン全文検索を防ぐ）', () => {
    const shouldNotDetect = [
      '御成敗式目って何？',
      'こんにちは',
      '今日の問題おしえて',
      '数学の宿題手伝って',
      'ありがとう！',
      '',
      '   ',
    ];
    for (const text of shouldNotDetect) {
      it(`「${text}」→ 検索しない`, () => {
        const r = detectRecallIntent(text, TOPICS);
        expect(r.needed).toBe(false);
        expect(r.hints).toEqual([]);
      });
    }
  });

  it('手がかり語からストップワードを除く', () => {
    const r = detectRecallIntent('前に話したことについておしえて', TOPICS);
    expect(r.needed).toBe(true);
    expect(r.hints).not.toContain('こと');
    expect(r.hints).not.toContain('おしえて');
  });

  it('手がかり語は重複せず上限以内', () => {
    const r = detectRecallIntent(
      '前に話した部活と勉強と時間とテストと点数と友だちと先生と成績と目標と計画のこと',
      TOPICS
    );
    expect(new Set(r.hints).size).toBe(r.hints.length);
    expect(r.hints.length).toBeLessThanOrEqual(8);
  });
});

describe('aiRecallCore.pickRecallSegments', () => {
  const digests: DigestLite[] = [
    {
      seq: 1,
      summary: '部活が忙しくて勉強時間が取れないと相談された',
      keywords: ['部活', '時間', '相談'],
      approxTokens: 3000,
    },
    {
      seq: 2,
      summary: '鎌倉幕府の成立について質問された',
      keywords: ['鎌倉幕府の成立', '歴史'],
      approxTokens: 3000,
    },
    {
      seq: 3,
      summary: '雑談。好きな食べ物の話',
      keywords: ['雑談', '食べ物'],
      approxTokens: 3000,
    },
  ];

  it('手がかりに一致するセグメントを選ぶ', () => {
    expect(pickRecallSegments(['部活'], digests)).toEqual([1]);
  });

  it('keywords 一致を summary 一致より優先する', () => {
    const d: DigestLite[] = [
      { seq: 1, summary: '部活の話', keywords: [], approxTokens: 100 },
      { seq: 2, summary: 'べつの話', keywords: ['部活'], approxTokens: 100 },
    ];
    // どちらも1件だけ選ばせると keywords 側が勝つ
    expect(pickRecallSegments(['部活'], d, { maxSegments: 1 })).toEqual([2]);
  });

  it('一致が無ければ空（原文は引かない）', () => {
    expect(pickRecallSegments(['宇宙'], digests)).toEqual([]);
  });

  it('手がかりが空なら空', () => {
    expect(pickRecallSegments([], digests)).toEqual([]);
  });

  it('digests が空なら空', () => {
    expect(pickRecallSegments(['部活'], [])).toEqual([]);
  });

  it('件数上限を超えない（⑤層）', () => {
    const many: DigestLite[] = Array.from({ length: 10 }, (_, i) => ({
      seq: i + 1,
      summary: '部活の話',
      keywords: ['部活'],
      approxTokens: 100,
    }));
    expect(pickRecallSegments(['部活'], many).length).toBeLessThanOrEqual(
      MAX_RECALL_SEGMENTS
    );
  });

  it('トークン上限を超えるセグメントは選ばない', () => {
    const heavy: DigestLite[] = [
      {
        seq: 1,
        summary: '部活の話',
        keywords: ['部活'],
        approxTokens: MAX_RECALL_TOKENS + 1,
      },
    ];
    expect(pickRecallSegments(['部活'], heavy)).toEqual([]);
  });

  it('合計がトークン上限に収まる範囲だけ選ぶ', () => {
    const d: DigestLite[] = [
      { seq: 1, summary: '部活', keywords: ['部活'], approxTokens: 5000 },
      { seq: 2, summary: '部活', keywords: ['部活'], approxTokens: 5000 },
    ];
    // 5000+5000 = 10000 > 8000 なので1件だけ
    expect(pickRecallSegments(['部活'], d)).toHaveLength(1);
  });

  it('approxTokens が無いセグメントは保守的（多め）に見積もる', () => {
    const d: DigestLite[] = [
      { seq: 1, summary: '部活', keywords: ['部活'] },
      { seq: 2, summary: '部活', keywords: ['部活'] },
      { seq: 3, summary: '部活', keywords: ['部活'] },
    ];
    // 4000 × 2 = 8000 で上限ちょうど → 2件まで
    expect(pickRecallSegments(['部活'], d)).toHaveLength(2);
  });

  it('返り値は時系列（古い→新しい）', () => {
    const d: DigestLite[] = [
      { seq: 5, summary: '部活', keywords: ['部活'], approxTokens: 100 },
      { seq: 2, summary: '部活', keywords: ['部活'], approxTokens: 100 },
    ];
    expect(pickRecallSegments(['部活'], d)).toEqual([2, 5]);
  });
});

describe('aiRecallCore.buildRecallContext', () => {
  it('セグメントが無ければ空文字（プロンプトに何も足さない）', () => {
    expect(buildRecallContext([])).toBe('');
  });

  it('過去の記録であることを明示する', () => {
    const ctx = buildRecallContext([
      {
        seq: 1,
        messages: [
          { role: 'user', text: '部活が忙しい' },
          { role: 'model', text: 'たいへんだね' },
        ],
        periodLabel: '2026年6月ごろ',
      },
    ]);
    expect(ctx).toContain('過去');
    expect(ctx).toContain('2026年6月ごろ');
    expect(ctx).toContain('部活が忙しい');
    // 覚えているふりをさせない指示が入っている
    expect(ctx).toContain('ふりをしない');
  });

  it('生徒とAIの発話を区別して並べる', () => {
    const ctx = buildRecallContext([
      {
        seq: 1,
        messages: [
          { role: 'user', text: 'しつもん' },
          { role: 'model', text: 'こたえ' },
        ],
      },
    ]);
    expect(ctx).toContain('生徒: しつもん');
    expect(ctx).toContain('あなた: こたえ');
  });
});
