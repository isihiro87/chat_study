import {
  DailyCounters,
  MAX_CHARS_PER_MSG,
  MAX_HISTORY,
  REPLY,
  SYSTEM_PROMPT,
  buildGeminiRequest,
  jstToday,
  normalizeMessages,
  parseGeminiReply,
  readLimit,
} from '../tsudumonLpChatCore';

// 2026-07-25 09:00 JST = 2026-07-25 00:00 UTC
const JST_0900 = Date.UTC(2026, 6, 25, 0, 0, 0);
// 2026-07-25 08:00 JST（前日の UTC 23:00）＝同じ JST 日付
const JST_0800 = Date.UTC(2026, 6, 24, 23, 0, 0);
// 2026-07-26 09:00 JST ＝ JST 日付がまたぐ
const NEXT_DAY = Date.UTC(2026, 6, 26, 0, 0, 0);

describe('jstToday', () => {
  it('UTC ではなく JST の日付を返す', () => {
    // UTC では 2026-07-24 だが JST では 2026-07-25
    expect(jstToday(JST_0800)).toBe('2026-07-25');
    expect(jstToday(JST_0900)).toBe('2026-07-25');
  });

  it('JST で日付が変わると値も変わる', () => {
    expect(jstToday(NEXT_DAY)).toBe('2026-07-26');
  });
});

describe('normalizeMessages', () => {
  it('user/assistant を Gemini の role へ変換する', () => {
    const out = normalizeMessages([
      { role: 'user', content: 'こんにちは' },
      { role: 'assistant', content: 'こんにちは！' },
      { role: 'user', content: '値段は？' },
    ]);
    expect(out).toEqual([
      { role: 'user', parts: [{ text: 'こんにちは' }] },
      { role: 'model', parts: [{ text: 'こんにちは！' }] },
      { role: 'user', parts: [{ text: '値段は？' }] },
    ]);
  });

  it(`1メッセージを ${MAX_CHARS_PER_MSG} 文字で切り詰める`, () => {
    const out = normalizeMessages([
      { role: 'user', content: 'あ'.repeat(MAX_CHARS_PER_MSG + 50) },
    ]);
    expect(out?.[0].parts[0].text).toHaveLength(MAX_CHARS_PER_MSG);
  });

  it(`直近 ${MAX_HISTORY} 件だけを残す`, () => {
    // 偶数 index が user。末尾が user で終わるよう 19 件（index 0..18）にする
    const many = Array.from({ length: 19 }, (_, i) => ({
      role: i % 2 === 0 ? 'user' : 'assistant',
      content: `m${i}`,
    }));
    const out = normalizeMessages(many);
    expect(out).toHaveLength(MAX_HISTORY);
    expect(out?.[0].parts[0].text).toBe('m11');
    expect(out?.[MAX_HISTORY - 1].parts[0].text).toBe('m18');
  });

  it('切り詰めた結果、末尾が assistant になる場合は null', () => {
    // 末尾が assistant で終わる並び（index 0..19、19 は assistant）
    const many = Array.from({ length: 20 }, (_, i) => ({
      role: i % 2 === 0 ? 'user' : 'assistant',
      content: `m${i}`,
    }));
    expect(normalizeMessages(many)).toBeNull();
  });

  it('role や content が不正な要素を捨てる', () => {
    const out = normalizeMessages([
      { role: 'system', content: '無視される' },
      { role: 'user', content: 123 },
      null,
      'ただの文字列',
      { role: 'user', content: 'これだけ残る' },
    ]);
    expect(out).toEqual([{ role: 'user', parts: [{ text: 'これだけ残る' }] }]);
  });

  it('空・配列でない・最後が user でない場合は null（＝400）', () => {
    expect(normalizeMessages([])).toBeNull();
    expect(normalizeMessages(undefined)).toBeNull();
    expect(normalizeMessages('messages')).toBeNull();
    expect(
      normalizeMessages([{ role: 'assistant', content: 'AIの発話で終わる' }])
    ).toBeNull();
  });
});

describe('readLimit', () => {
  it('未設定・不正値なら既定値', () => {
    expect(readLimit(undefined, 300)).toBe(300);
    expect(readLimit('', 300)).toBe(300);
    expect(readLimit('abc', 300)).toBe(300);
    expect(readLimit('0', 300)).toBe(300);
    expect(readLimit('-5', 300)).toBe(300);
  });

  it('正の整数なら採用する', () => {
    expect(readLimit('50', 300)).toBe(50);
  });
});

describe('DailyCounters', () => {
  it('全体上限に達すると isTotalExceeded が true', () => {
    const c = new DailyCounters();
    expect(c.isTotalExceeded(JST_0900, 2)).toBe(false);
    c.record(JST_0900, 'ip|a');
    c.record(JST_0900, 'ip|b');
    expect(c.isTotalExceeded(JST_0900, 2)).toBe(true);
  });

  it('利用者ごとの上限は key ごとに独立している', () => {
    const c = new DailyCounters();
    c.record(JST_0900, 'ip|a');
    c.record(JST_0900, 'ip|a');
    expect(c.isUserExceeded(JST_0900, 'ip|a', 2)).toBe(true);
    expect(c.isUserExceeded(JST_0900, 'ip|b', 2)).toBe(false);
  });

  it('JST の日付が変わるとリセットされる', () => {
    const c = new DailyCounters();
    c.record(JST_0900, 'ip|a');
    c.record(JST_0900, 'ip|a');
    expect(c.isTotalExceeded(JST_0900, 2)).toBe(true);

    expect(c.isTotalExceeded(NEXT_DAY, 2)).toBe(false);
    expect(c.isUserExceeded(NEXT_DAY, 'ip|a', 2)).toBe(false);
    expect(c.snapshot()).toEqual({ date: '2026-07-26', total: 0, users: 0 });
  });

  it('同じ JST 日内（UTC 日をまたぐ）ではリセットされない', () => {
    const c = new DailyCounters();
    c.record(JST_0800, 'ip|a'); // UTC 07-24 / JST 07-25
    expect(c.isTotalExceeded(JST_0900, 1)).toBe(true); // UTC 07-25 / JST 07-25
  });
});

describe('parseGeminiReply', () => {
  it('candidates の parts を連結する', () => {
    const data = {
      candidates: [
        { content: { parts: [{ text: 'こん' }, { text: 'にちは' }] } },
      ],
    };
    expect(parseGeminiReply(data)).toBe('こんにちは');
  });

  it('空・不正な応答は既定の文言にフォールバックする', () => {
    expect(parseGeminiReply({})).toBe(REPLY.emptyCandidate);
    expect(parseGeminiReply(null)).toBe(REPLY.emptyCandidate);
    expect(parseGeminiReply({ candidates: [] })).toBe(REPLY.emptyCandidate);
    expect(
      parseGeminiReply({ candidates: [{ content: { parts: [{ text: '' }] } }] })
    ).toBe(REPLY.emptyCandidate);
  });
});

describe('buildGeminiRequest', () => {
  it('systemInstruction と生成設定を含む', () => {
    const body = JSON.parse(
      buildGeminiRequest([{ role: 'user', parts: [{ text: '値段は？' }] }])
    );
    expect(body.systemInstruction.parts[0].text).toBe(SYSTEM_PROMPT);
    expect(body.contents).toHaveLength(1);
    expect(body.generationConfig.maxOutputTokens).toBe(400);
    expect(body.generationConfig.temperature).toBe(0.6);
  });
});

describe('REPLY（移行前の Vercel 版と同一であること）', () => {
  it('全ての文言が公式LINEの案内URLを含む', () => {
    for (const text of Object.values(REPLY)) {
      expect(text).toContain('https://lin.ee/XGIhuYi');
    }
  });

  it('上限到達の文言が要件どおり', () => {
    expect(REPLY.totalLimit).toBe(
      '申し訳ありません、本日のチャット対応が上限に達しました。よくある質問はページ下部のFAQに、その他は公式LINEでお答えできます。 https://lin.ee/XGIhuYi'
    );
    expect(REPLY.userLimit).toBe(
      '本日のチャットのご利用上限に達しました。また明日お使いいただけます。\nお急ぎのご質問や無料体験は、公式LINEでどうぞ。 https://lin.ee/XGIhuYi'
    );
  });
});

describe('SYSTEM_PROMPT', () => {
  it('商品の基本事実を含む（LP文言との齟齬防止）', () => {
    expect(SYSTEM_PROMPT).toContain('月額1,280円');
    expect(SYSTEM_PROMPT).toContain('3日間');
    expect(SYSTEM_PROMPT).toContain('つづもん相談チャット');
  });

  it('売り込みを禁止している', () => {
    expect(SYSTEM_PROMPT).toContain('売り込み・煽り');
  });
});
