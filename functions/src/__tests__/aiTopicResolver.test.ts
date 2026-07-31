import { describe, it, expect } from 'vitest';

import {
  resolveTopics,
  resolveTopicByKey,
  extractQueryTerms,
  buildGroundingContext,
  buildTopicQuickReply,
  buildReferenceUrl,
  buildWorkbookUrl,
  detectStudyIntent,
  TSUDUMON_BASE_URL,
} from '../aiTopicResolver';
import { REFERENCE_TOPICS } from '../generated/reference-topics.generated';

describe('aiTopicResolver.extractQueryTerms', () => {
  it('人物名・用語を抜き出す', () => {
    const terms = extractQueryTerms('徳川家康の勉強がしたい');
    expect(terms).toContain('徳川家康');
  });

  it('意味のない語を落とす', () => {
    const terms = extractQueryTerms('歴史の勉強について教えて');
    expect(terms).not.toContain('勉強');
    expect(terms).not.toContain('歴史');
    expect(terms).not.toContain('について');
  });

  it('重複しない', () => {
    const terms = extractQueryTerms('鎌倉 鎌倉 鎌倉');
    expect(terms.filter((t) => t === '鎌倉')).toHaveLength(1);
  });

  it('該当なしなら空配列', () => {
    expect(extractQueryTerms('')).toEqual([]);
    expect(extractQueryTerms('あ')).toEqual([]);
  });
});

describe('aiTopicResolver.resolveTopics（実際の教材92単元に対して）', () => {
  it('「徳川家康の勉強がしたい」で江戸の単元に当たる', () => {
    const hits = resolveTopics('徳川家康の勉強がしたい');
    expect(hits.length).toBeGreaterThan(0);
    // 江戸（08章）が最上位に来ること
    expect(hits[0].chapter).toBe('08');
  });

  it('単元名そのもので引ける', () => {
    const hits = resolveTopics('鎌倉幕府について知りたい');
    expect(hits.length).toBeGreaterThan(0);
    expect(hits[0].key).toContain('kamakura');
  });

  it('用語で引ける', () => {
    const hits = resolveTopics('御成敗式目ってなに');
    expect(hits.length).toBeGreaterThan(0);
    expect(hits[0].chapter).toBe('05');
  });

  it('関係のない話題では何も返さない（無理に接地しない）', () => {
    expect(resolveTopics('今日の給食おいしかった')).toEqual([]);
    expect(resolveTopics('こんにちは')).toEqual([]);
    expect(resolveTopics('')).toEqual([]);
  });

  it('スコア降順で返る', () => {
    const hits = resolveTopics('織田信長と豊臣秀吉');
    for (let i = 1; i < hits.length; i++) {
      expect(hits[i - 1].score).toBeGreaterThanOrEqual(hits[i].score);
    }
  });

  it('件数上限を守る', () => {
    const hits = resolveTopics('政治と文化と社会', { limit: 2, minScore: 1 });
    expect(hits.length).toBeLessThanOrEqual(2);
  });

  it('結果には参考書と問題集のURLが入る', () => {
    const hits = resolveTopics('徳川家康');
    expect(hits[0].referenceUrl).toContain(`${TSUDUMON_BASE_URL}/ref/`);
    expect(hits[0].workbookUrl).toContain(`${TSUDUMON_BASE_URL}/wb/`);
  });
});

describe('aiTopicResolver の URL 生成', () => {
  it('参考書は /ref/{章}/#t{位置}', () => {
    expect(buildReferenceUrl('08', 3)).toBe(`${TSUDUMON_BASE_URL}/ref/08/#t3`);
  });

  it('問題集は先頭タブが年表なので +1 する', () => {
    expect(buildWorkbookUrl('08', 3)).toBe(`${TSUDUMON_BASE_URL}/wb/08/#t4`);
  });

  it('章内の位置（anchor）は1始まりで、章ごとに振り直される', () => {
    const first = resolveTopicByKey('01-time-periods');
    expect(first?.anchor).toBe(1);
    // 02章の先頭も 1 に戻る
    const secondChapterHead = resolveTopicByKey('02-human-origins');
    expect(secondChapterHead?.anchor).toBe(1);
  });

  it('章内の2件目は 2 になる', () => {
    const t = resolveTopicByKey('02-ancient-civilizations');
    expect(t?.anchor).toBe(2);
    expect(t?.chapter).toBe('02');
  });

  it('未知のキーは null', () => {
    expect(resolveTopicByKey('99-nope')).toBeNull();
  });
});

describe('aiTopicResolver.buildGroundingContext（教材接地）', () => {
  it('単元が無ければ何も足さない', () => {
    expect(buildGroundingContext(undefined)).toBe('');
  });

  it('教材の要約・重要語・本文が入る', () => {
    const topic = resolveTopicByKey('05-kamakura-bakufu');
    expect(topic).not.toBeNull();
    const ctx = buildGroundingContext(topic!);
    const source = REFERENCE_TOPICS['05-kamakura-bakufu'];
    expect(ctx).toContain(source.name);
    expect(ctx).toContain(source.summary.slice(0, 20));
    expect(ctx).toContain('重要語');
  });

  it('教材と違う説明を禁じる指示が入る', () => {
    const topic = resolveTopicByKey('05-kamakura-bakufu');
    const ctx = buildGroundingContext(topic!);
    expect(ctx).toContain('違う説明をしない');
    expect(ctx).toContain('知ったかぶり');
  });

  it('本文が長くても頭を押さえる（トークン対策）', () => {
    for (const key of Object.keys(REFERENCE_TOPICS)) {
      const ctx = buildGroundingContext(resolveTopicByKey(key)!);
      expect(ctx.length).toBeLessThan(6000);
    }
  });
});

describe('aiTopicResolver.buildTopicQuickReply', () => {
  it('参考書と問題集のリンクを2つ返す', () => {
    const topic = resolveTopicByKey('08-edo-bakufu')!;
    const qr = buildTopicQuickReply(topic);
    expect(qr.items).toHaveLength(2);
    expect(qr.items[0].action.type).toBe('uri');
    expect(qr.items[0].action.uri).toBe(topic.referenceUrl);
    expect(qr.items[1].action.uri).toBe(topic.workbookUrl);
  });

  it('ラベルが LINE の上限20文字に収まる', () => {
    const topic = resolveTopicByKey('08-edo-bakufu')!;
    for (const item of buildTopicQuickReply(topic).items) {
      expect(item.action.label.length).toBeLessThanOrEqual(20);
    }
  });
});

describe('aiTopicResolver.detectStudyIntent', () => {
  const yes = [
    '徳川家康の勉強がしたい',
    '鎌倉幕府をやりたい',
    '御成敗式目について教えて',
    '奈良時代の問題ある？',
    '参考書どこ見ればいい？',
    '江戸時代のところ',
  ];
  for (const text of yes) {
    it(`「${text}」→ 学習意図あり`, () => {
      expect(detectStudyIntent(text)).toBe(true);
    });
  }

  it('雑談では立たない', () => {
    expect(detectStudyIntent('おはよう')).toBe(false);
    expect(detectStudyIntent('')).toBe(false);
  });
});
