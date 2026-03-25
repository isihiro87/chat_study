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

interface StudyEventData {
  type: 'chat_read' | 'explanation_read' | 'video_watched' | 'page_visit';
  topicId?: string;
  subjectId?: string;
  eraId?: string;
  durationMs?: number;
  metadata?: Record<string, unknown>;
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

export async function saveStudyEvent(data: StudyEventData): Promise<void> {
  const uid = getUserId();
  if (!uid) return;

  try {
    await addDoc(collection(db, `users/${uid}/studyEvents`), {
      ...data,
      timestamp: serverTimestamp(),
    });
  } catch (e) {
    console.warn('Failed to save study event:', e);
  }
}
