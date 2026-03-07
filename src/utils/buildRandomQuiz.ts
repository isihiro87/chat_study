import type { Quiz, QuizQuestion } from '../data/types';
import { loadMultipleTopicContents } from '../data/subjects/registry';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export async function collectQuestions(topicIds: string[]): Promise<QuizQuestion[]> {
  const contentMap = await loadMultipleTopicContents(topicIds);
  const questions: QuizQuestion[] = [];
  for (const topicId of topicIds) {
    const content = contentMap.get(topicId);
    if (content) {
      questions.push(
        ...content.quiz.questions.map((q) => ({ ...q, sourceTopicId: topicId })),
      );
    }
  }
  return questions;
}

export async function buildRandomQuiz(topicIds: string[], count: number): Promise<Quiz> {
  const allQuestions = await collectQuestions(topicIds);
  const shuffled = shuffleArray(allQuestions);
  const selected = count > 0 && count < shuffled.length
    ? shuffled.slice(0, count)
    : shuffled;
  return { questions: selected };
}
