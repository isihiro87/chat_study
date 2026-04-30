import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from './config';

interface QuizAnswerDetail {
  questionIndex: number;
  correct: boolean;
  chosenOption: number | null;
  correctOption: number;
  timeMs: number;
}

interface QuizAttemptData {
  topicId: string;
  subjectId: string;
  eraId: string;
  difficulty: string[];
  score: number;
  totalQuestions: number;
  answers: QuizAnswerDetail[];
}

interface FlashcardSessionData {
  topicId: string;
  subjectId: string;
  eraId: string;
  totalCards: number;
  firstRoundRemembered: number;
  firstRoundTotal: number;
  reviewRounds: number;
  cardResults: { cardId: string; rememberedCount: number; againCount: number }[];
}

function getUserId(): string | null {
  return auth.currentUser?.uid ?? null;
}

export async function saveQuizAttempt(data: QuizAttemptData): Promise<void> {
  const uid = getUserId();
  if (!uid) return;

  try {
    await addDoc(collection(db, `users/${uid}/quizAttempts`), {
      ...data,
      completedAt: serverTimestamp(),
    });
  } catch (e) {
    console.warn('Failed to save quiz attempt:', e);
  }
}

export async function saveFlashcardSession(data: FlashcardSessionData): Promise<void> {
  const uid = getUserId();
  if (!uid) return;

  try {
    await addDoc(collection(db, `users/${uid}/flashcardSessions`), {
      ...data,
      completedAt: serverTimestamp(),
    });
  } catch (e) {
    console.warn('Failed to save flashcard session:', e);
  }
}

