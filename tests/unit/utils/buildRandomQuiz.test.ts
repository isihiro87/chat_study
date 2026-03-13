import { describe, it, expect, vi } from 'vitest';
import type { TopicContent, QuizQuestion, Quiz } from '../../../src/data/types';

// loadMultipleTopicContentsをモック
vi.mock('../../../src/data/subjects/registry', () => ({
  loadMultipleTopicContents: vi.fn(),
}));

import { collectQuestions, buildRandomQuiz } from '../../../src/utils/buildRandomQuiz';
import { loadMultipleTopicContents } from '../../../src/data/subjects/registry';

const mockLoadMultiple = vi.mocked(loadMultipleTopicContents);

function makeQuestion(id: string, text: string): QuizQuestion {
  return {
    type: 'choice' as const,
    question: text,
    options: ['A', 'B', 'C', 'D'],
    correctIndex: 0,
    explanation: `${text}の解説`,
  };
}

function makeContent(questions: QuizQuestion[]): TopicContent {
  return {
    explanation: { sections: [] },
    videos: [],
    flashcards: [],
    quiz: { questions },
  };
}

describe('collectQuestions', () => {
  it('複数トピックの問題を集約できる', async () => {
    const contentMap = new Map<string, TopicContent>();
    contentMap.set('t1', makeContent([makeQuestion('q1', '問題1'), makeQuestion('q2', '問題2')]));
    contentMap.set('t2', makeContent([makeQuestion('q3', '問題3')]));
    mockLoadMultiple.mockResolvedValue(contentMap);

    const result = await collectQuestions(['t1', 't2']);
    expect(result).toHaveLength(3);
    expect(result[0].sourceTopicId).toBe('t1');
    expect(result[2].sourceTopicId).toBe('t2');
  });

  it('存在しないトピックはスキップされる', async () => {
    const contentMap = new Map<string, TopicContent>();
    contentMap.set('t1', makeContent([makeQuestion('q1', '問題1')]));
    mockLoadMultiple.mockResolvedValue(contentMap);

    const result = await collectQuestions(['t1', 'nonexistent']);
    expect(result).toHaveLength(1);
  });

  it('空のトピックリストの場合、空配列を返す', async () => {
    mockLoadMultiple.mockResolvedValue(new Map());
    const result = await collectQuestions([]);
    expect(result).toHaveLength(0);
  });
});

describe('buildRandomQuiz', () => {
  it('指定した数の問題を含むクイズを生成する', async () => {
    const contentMap = new Map<string, TopicContent>();
    contentMap.set(
      't1',
      makeContent([
        makeQuestion('q1', '問題1'),
        makeQuestion('q2', '問題2'),
        makeQuestion('q3', '問題3'),
        makeQuestion('q4', '問題4'),
        makeQuestion('q5', '問題5'),
      ]),
    );
    mockLoadMultiple.mockResolvedValue(contentMap);

    const quiz: Quiz = await buildRandomQuiz(['t1'], 3);
    expect(quiz.questions).toHaveLength(3);
  });

  it('問題数が総数より多い場合、全問題を返す', async () => {
    const contentMap = new Map<string, TopicContent>();
    contentMap.set('t1', makeContent([makeQuestion('q1', '問題1'), makeQuestion('q2', '問題2')]));
    mockLoadMultiple.mockResolvedValue(contentMap);

    const quiz = await buildRandomQuiz(['t1'], 100);
    expect(quiz.questions).toHaveLength(2);
  });

  it('count=0の場合、全問題を返す', async () => {
    const contentMap = new Map<string, TopicContent>();
    contentMap.set('t1', makeContent([makeQuestion('q1', '問題1'), makeQuestion('q2', '問題2')]));
    mockLoadMultiple.mockResolvedValue(contentMap);

    const quiz = await buildRandomQuiz(['t1'], 0);
    expect(quiz.questions).toHaveLength(2);
  });
});
