import {
  parseWorkbookText,
  resolveWorkbookTopic,
  getTopicQuestionIds,
  getWorkbookInput,
  findWorkbookInputQuestion,
  normalizeTermAnswer,
  judgeTermAnswer,
} from '../workbookTopic';
import { WORKBOOK_QUESTION_INDEX } from '../generated/workbook-question-index.generated';
import { WORKBOOK_INPUT_INDEX } from '../generated/workbook-input-questions.generated';

describe('parseWorkbookText', () => {
  it('半角スペース区切りの単元名を取り出す', () => {
    expect(parseWorkbookText('ワーク 律令国家と奈良時代')).toBe(
      '律令国家と奈良時代'
    );
  });

  it('全角スペース・コロン区切りにも対応する', () => {
    expect(parseWorkbookText('ワーク　摂関政治')).toBe('摂関政治');
    expect(parseWorkbookText('ワーク:摂関政治')).toBe('摂関政治');
    expect(parseWorkbookText('ワーク：摂関政治')).toBe('摂関政治');
  });

  it('前後の空白は無視する', () => {
    expect(parseWorkbookText('  ワーク 大化の改新  ')).toBe('大化の改新');
  });

  it('「ワーク」単体は null（単元名なし）', () => {
    expect(parseWorkbookText('ワーク')).toBeNull();
    expect(parseWorkbookText('ワーク ')).toBeNull();
  });

  it('プレフィックスなしのテキストは null', () => {
    expect(parseWorkbookText('律令国家と奈良時代')).toBeNull();
    expect(parseWorkbookText('今日のワーク')).toBeNull();
  });
});

describe('resolveWorkbookTopic', () => {
  it('実インデックスから「律令国家と奈良時代」を history-中1 に解決する', () => {
    expect(
      resolveWorkbookTopic('律令国家と奈良時代', WORKBOOK_QUESTION_INDEX)
    ).toEqual({ subject: 'history', grade: '中1' });
  });

  it('存在しない単元名は null', () => {
    expect(
      resolveWorkbookTopic('存在しない単元', WORKBOOK_QUESTION_INDEX)
    ).toBeNull();
    // 「ワークのやり方教えて」→ parse で「のやり方教えて」になるケース
    expect(
      resolveWorkbookTopic('のやり方教えて', WORKBOOK_QUESTION_INDEX)
    ).toBeNull();
  });
});

describe('getTopicQuestionIds', () => {
  it('紙面の (1)〜(8) と同じ順のワーク問題IDを返す', () => {
    const ids = getTopicQuestionIds(
      '律令国家と奈良時代',
      WORKBOOK_QUESTION_INDEX
    );
    expect(ids.length).toBeGreaterThan(0);
    expect(ids[0]).toBe('q-wb-history-04-ritsuryo-nara-1');
    expect(ids[1]).toBe('q-wb-history-04-ritsuryo-nara-2');
    // 全問がワーク専用ID（毎日配信プールの q-history-* と衝突しない）
    for (const id of ids) {
      expect(id.startsWith('q-wb-')).toBe(true);
    }
  });

  it('全92単元が index に存在し、各単元に問題がある', () => {
    const topics = Object.keys(WORKBOOK_QUESTION_INDEX);
    expect(topics.length).toBe(92);
    for (const t of topics) {
      expect(
        getTopicQuestionIds(t, WORKBOOK_QUESTION_INDEX).length
      ).toBeGreaterThanOrEqual(1);
    }
  });

  it('存在しない単元は空配列', () => {
    expect(
      getTopicQuestionIds('存在しない単元', WORKBOOK_QUESTION_INDEX)
    ).toEqual([]);
  });
});

describe('入力問題バンク', () => {
  it('全単元に一問一答があり、IDで逆引きできる', () => {
    const topics = Object.keys(WORKBOOK_INPUT_INDEX);
    expect(topics.length).toBeGreaterThan(0);

    for (const topicName of topics) {
      const input = getWorkbookInput(topicName);
      expect(input.terms.length).toBeGreaterThan(0);

      // terms / written とも、全問が id で逆引きでき、種別・単元名・
      // 紙面の問題番号（1始まり・配列順）が一致する
      input.terms.forEach((q, i) => {
        const found = findWorkbookInputQuestion(q.id);
        expect(found?.kind).toBe('term');
        expect(found?.topicName).toBe(topicName);
        expect(found?.n).toBe(i + 1);
      });
      input.written.forEach((q, i) => {
        const found = findWorkbookInputQuestion(q.id);
        expect(found?.kind).toBe('written');
        expect(found?.topicName).toBe(topicName);
        expect(found?.n).toBe(i + 1);
      });
    }
  });

  it('入力問題のIDが全単元で一意（逆引きが衝突しない）', () => {
    const ids = Object.values(WORKBOOK_INPUT_INDEX).flatMap((t) => [
      ...t.terms.map((q) => q.id),
      ...t.written.map((q) => q.id),
    ]);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('代表単元「律令国家と奈良時代」の中身が紙面と一致する', () => {
    const input = getWorkbookInput('律令国家と奈良時代');
    expect(input.terms[0].a).toBe('大宝律令');
    expect(input.written[0].q).toContain('律令とは何か');
  });

  it('存在しない単元は空配列', () => {
    const input = getWorkbookInput('存在しない単元');
    expect(input.terms).toEqual([]);
    expect(input.written).toEqual([]);
  });
});

describe('normalizeTermAnswer / judgeTermAnswer', () => {
  const entry = { a: '大宝律令', reading: 'たいほうりつりょう' };

  it('漢字・ひらがな・カタカナ・空白ゆれを正解にする', () => {
    expect(judgeTermAnswer('大宝律令', entry)).toBe(true);
    expect(judgeTermAnswer('たいほうりつりょう', entry)).toBe(true);
    expect(judgeTermAnswer('タイホウリツリョウ', entry)).toBe(true);
    expect(judgeTermAnswer(' 大宝 律令 ', entry)).toBe(true);
  });

  it('違う用語・空文字は不正解', () => {
    expect(judgeTermAnswer('御成敗式目', entry)).toBe(false);
    expect(judgeTermAnswer('', entry)).toBe(false);
    expect(judgeTermAnswer('   ', entry)).toBe(false);
  });

  it('全角英数・記号ゆれを正規化する', () => {
    expect(normalizeTermAnswer('ＧＨＱ')).toBe(normalizeTermAnswer('ghq'));
    expect(normalizeTermAnswer('聖徳太子。')).toBe(
      normalizeTermAnswer('聖徳太子')
    );
  });

  it('かっこ書き付きの正答は「前だけ」「中だけ」でも正解になる', () => {
    const sanpo = {
      a: '三宝（仏・法・僧）',
      reading: 'さんぽう（ぶつ・ほう・そう）',
    };
    expect(judgeTermAnswer('三宝', sanpo)).toBe(true);
    expect(judgeTermAnswer('さんぽう', sanpo)).toBe(true);
    expect(judgeTermAnswer('三宝（仏・法・僧）', sanpo)).toBe(true);
    expect(judgeTermAnswer('仏教', sanpo)).toBe(false);

    const kinu = { a: '絹（シルク）', reading: 'きぬ（しるく）' };
    expect(judgeTermAnswer('絹', kinu)).toBe(true);
    expect(judgeTermAnswer('シルク', kinu)).toBe(true);
    expect(judgeTermAnswer('きぬ', kinu)).toBe(true);
    expect(judgeTermAnswer('綿', kinu)).toBe(false);
  });
});
