import type { Quiz, QuizQuestion } from '../data/types';
import { getTopic } from '../data/subjects/registry';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function collectQuestions(topicIds: string[]): QuizQuestion[] {
  const questions: QuizQuestion[] = [];
  for (const topicId of topicIds) {
    const topic = getTopic(topicId);
    if (topic) {
      questions.push(
        ...topic.content.quiz.questions.map((q) => ({ ...q, sourceTopicId: topicId })),
      );
    }
  }
  return questions;
}

export function buildRandomQuiz(topicIds: string[], count: number): Quiz {
  const allQuestions = collectQuestions(topicIds);
  const shuffled = shuffleArray(allQuestions);
  const selected = count > 0 && count < shuffled.length
    ? shuffled.slice(0, count)
    : shuffled;
  return { questions: selected };
}
