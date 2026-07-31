import { describe, it, expect } from 'vitest';

import {
  classifyDeterministic,
  needsLlmClassification,
  parseLlmSafetyClass,
  appendConcernFooter,
  buildSafetySummary,
  CRISIS_REPLY_TEXT,
  CONCERN_FOOTER_TEXT,
  SUMMARY_CHARS,
} from '../aiSafetyCore';

describe('aiSafetyCore.classifyDeterministic', () => {
  describe('crisis: 自傷・自殺（取りこぼさないことを優先）', () => {
    const crisisTexts = [
      '死にたい',
      'もうしにたいです',
      '消えたいと思ってる',
      'いなくなりたい',
      '生きてる意味がわからない',
      'リスカしちゃった',
      '手首を切ってしまった',
      '自殺のこと考えちゃう',
      '飛び降りたらラクになるかな',
      '自分を傷つけたくなる',
    ];
    for (const text of crisisTexts) {
      it(`「${text}」→ crisis`, () => {
        expect(classifyDeterministic(text)).toBe('crisis');
      });
    }
  });

  describe('crisis: 虐待', () => {
    const texts = [
      '親に殴られる',
      'お父さんに叩かれた',
      '母から暴力をうけてる',
      '家に帰りたくない',
      '体にあざができた',
    ];
    for (const text of texts) {
      it(`「${text}」→ crisis`, () => {
        expect(classifyDeterministic(text)).toBe('crisis');
      });
    }
  });

  describe('crisis: 深刻ないじめ（実害・不登校とセットのときだけ）', () => {
    it('いじめ＋つらい → crisis', () => {
      expect(classifyDeterministic('いじめられててつらい')).toBe('crisis');
    });

    it('いじめ＋学校に行けない → crisis', () => {
      expect(classifyDeterministic('いじめがひどくて学校行けない')).toBe(
        'crisis'
      );
    });

    it('「死ね」と言われた → crisis', () => {
      expect(classifyDeterministic('クラスで死ねって言われた')).toBe('crisis');
    });

    it('「いじめ」単体は crisis にしない（concern で受ける）', () => {
      expect(classifyDeterministic('いじめについて調べてる')).toBe('concern');
    });
  });

  describe('🚨 慣用表現を crisis にしない（ここが緩いと通知が鳴りっぱなしになる）', () => {
    const idioms = [
      'テストで死んだ',
      '数学のテスト死んだわ',
      '死ぬほど眠い',
      'マラソンで死ぬかと思った',
      '死んだw',
      'まじで死ぬ',
      '暑くて死にそう',
      '部活きつくて死んだ',
      '宿題多すぎて死んだ',
      '必死でやった',
      'それ死語だよ',
    ];
    for (const text of idioms) {
      it(`「${text}」→ crisis ではない`, () => {
        expect(classifyDeterministic(text)).not.toBe('crisis');
      });
    }
  });

  describe('concern: 重めの悩み', () => {
    const texts = [
      '友だちとけんかしちゃった',
      '部活やめたいかも',
      'お母さんがわかってくれない',
      '進路が決まらなくて不安',
      '学校行きたくないな',
      '最近眠れないんだ',
      '自分に自信がない',
      'なんかしんどい',
    ];
    for (const text of texts) {
      it(`「${text}」→ concern`, () => {
        expect(classifyDeterministic(text)).toBe('concern');
      });
    }
  });

  describe('normal: 通常の学習・雑談', () => {
    const texts = [
      '御成敗式目って何？',
      '今日の問題おしえて',
      'こんにちは',
      'ありがとう！',
      '鎌倉幕府はいつできた？',
      '',
      '   ',
    ];
    for (const text of texts) {
      it(`「${text}」→ normal`, () => {
        expect(classifyDeterministic(text)).toBe('normal');
      });
    }
  });

  it('慣用表現と本物が混在したら本物を優先する', () => {
    // 「テストで死んだ」は伏せ字になるが「死にたい」は残る
    expect(classifyDeterministic('テストで死んだ…もう死にたい')).toBe('crisis');
  });
});

describe('aiSafetyCore.needsLlmClassification（LLM 呼び出しを絞る）', () => {
  it('決定論が crisis なら絶対に呼ばない（確実に固定応答へ・コストゼロ）', () => {
    expect(needsLlmClassification('死にたい', 'crisis')).toBe(false);
  });

  it('concern / normal でも呼ばない', () => {
    expect(needsLlmClassification('友だちとけんかした', 'concern')).toBe(false);
    expect(needsLlmClassification('こんにちは', 'normal')).toBe(false);
  });

  it('unknown かつ十分な長さなら呼ぶ', () => {
    expect(
      needsLlmClassification('なんだかずっと涙が出てくるんだよね', 'unknown')
    ).toBe(true);
  });

  it('unknown でも短ければ呼ばない（相槌にコストをかけない）', () => {
    expect(needsLlmClassification('つらい', 'unknown')).toBe(false);
  });
});

describe('aiSafetyCore.parseLlmSafetyClass', () => {
  it('応答から分類を読む', () => {
    expect(parseLlmSafetyClass('crisis')).toBe('crisis');
    expect(parseLlmSafetyClass('concern')).toBe('concern');
    expect(parseLlmSafetyClass('normal')).toBe('normal');
  });

  it('前後に文字があっても読む', () => {
    expect(parseLlmSafetyClass('分類: CRISIS です')).toBe('crisis');
  });

  it('判定不能なら concern（素通りより安全側）', () => {
    expect(parseLlmSafetyClass('')).toBe('concern');
    expect(parseLlmSafetyClass('わかりません')).toBe('concern');
  });
});

describe('aiSafetyCore の文言', () => {
  it('crisis の固定文に公的窓口の番号が入っている', () => {
    expect(CRISIS_REPLY_TEXT).toContain('0120-0-78310'); // 24時間子供SOSダイヤル
    expect(CRISIS_REPLY_TEXT).toContain('0120-99-7777'); // チャイルドライン
    expect(CRISIS_REPLY_TEXT).toContain('0120-007-110'); // こどもの人権110番
  });

  it('crisis の固定文が「きみは悪くない」と伝えている', () => {
    expect(CRISIS_REPLY_TEXT).toContain('悪くない');
  });

  it('crisis の固定文に Markdown 記法が入っていない（LINE で記号が見えるため）', () => {
    expect(CRISIS_REPLY_TEXT).not.toMatch(/\*\*|^#\s|^- /m);
  });

  it('concern の末尾文を付与する', () => {
    expect(appendConcernFooter('つらかったね。')).toContain(
      CONCERN_FOOTER_TEXT.trim()
    );
  });

  it('AI が既に同趣旨を書いていたら二重に付けない', () => {
    const answer = 'つらかったね。信頼できる大人にも話してみてね。';
    expect(appendConcernFooter(answer)).toBe(answer);
  });

  it('空の応答でも末尾文だけは返す', () => {
    expect(appendConcernFooter('')).toBe(CONCERN_FOOTER_TEXT.trim());
  });
});

describe('aiSafetyCore.buildSafetySummary（通知に全文を載せない）', () => {
  it('短い文はそのまま', () => {
    expect(buildSafetySummary('つらい')).toBe('つらい');
  });

  it('長い文は冒頭だけに切る', () => {
    const long = 'あ'.repeat(200);
    const s = buildSafetySummary(long);
    expect(s.length).toBeLessThanOrEqual(SUMMARY_CHARS + 1); // +1 は「…」
    expect(s.endsWith('…')).toBe(true);
  });

  it('改行を潰す（通知が読みやすいように）', () => {
    expect(buildSafetySummary('あ\n\nい　う')).toBe('あ い う');
  });
});
