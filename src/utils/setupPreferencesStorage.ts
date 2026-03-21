import type { Difficulty } from '../data/types';

const STORAGE_KEY = 'marutto-study-setup-prefs';

export interface QuizPreferences {
  selectedDifficulties: Difficulty[];
  questionCount: number | null;
  shuffleOrder: boolean;
}

export interface FlashcardPreferences {
  selectedDifficulties: Difficulty[];
  batchSize: number | null;
  shuffleOrder: boolean;
}

interface SetupPreferences {
  quiz: Record<string, QuizPreferences>;
  flashcard: Record<string, FlashcardPreferences>;
}

const DEFAULT_DIFFICULTIES: Difficulty[] = ['basic', 'standard'];

export const DEFAULT_QUIZ_PREFERENCES: QuizPreferences = {
  selectedDifficulties: DEFAULT_DIFFICULTIES,
  questionCount: null,
  shuffleOrder: true,
};

export const DEFAULT_FLASHCARD_PREFERENCES: FlashcardPreferences = {
  selectedDifficulties: DEFAULT_DIFFICULTIES,
  batchSize: 10,
  shuffleOrder: true,
};

function loadAll(): SetupPreferences {
  if (typeof window === 'undefined') return { quiz: {}, flashcard: {} };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { quiz: {}, flashcard: {} };
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      return {
        quiz: parsed.quiz ?? {},
        flashcard: parsed.flashcard ?? {},
      };
    }
    return { quiz: {}, flashcard: {} };
  } catch {
    return { quiz: {}, flashcard: {} };
  }
}

function saveAll(prefs: SetupPreferences): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch (e) {
    console.warn('Failed to save setup preferences:', e);
  }
}

export function loadQuizPreferences(subjectId: string | undefined): QuizPreferences {
  if (!subjectId) return { ...DEFAULT_QUIZ_PREFERENCES };
  const all = loadAll();
  const saved = all.quiz[subjectId];
  if (!saved) return { ...DEFAULT_QUIZ_PREFERENCES };
  return {
    selectedDifficulties: Array.isArray(saved.selectedDifficulties) && saved.selectedDifficulties.length > 0
      ? saved.selectedDifficulties
      : DEFAULT_QUIZ_PREFERENCES.selectedDifficulties,
    questionCount: saved.questionCount ?? DEFAULT_QUIZ_PREFERENCES.questionCount,
    shuffleOrder: typeof saved.shuffleOrder === 'boolean' ? saved.shuffleOrder : DEFAULT_QUIZ_PREFERENCES.shuffleOrder,
  };
}

export function saveQuizPreferences(subjectId: string | undefined, prefs: QuizPreferences): void {
  if (!subjectId) return;
  const all = loadAll();
  all.quiz[subjectId] = prefs;
  saveAll(all);
}

export function loadFlashcardPreferences(subjectId: string | undefined): FlashcardPreferences {
  if (!subjectId) return { ...DEFAULT_FLASHCARD_PREFERENCES };
  const all = loadAll();
  const saved = all.flashcard[subjectId];
  if (!saved) return { ...DEFAULT_FLASHCARD_PREFERENCES };
  return {
    selectedDifficulties: Array.isArray(saved.selectedDifficulties) && saved.selectedDifficulties.length > 0
      ? saved.selectedDifficulties
      : DEFAULT_FLASHCARD_PREFERENCES.selectedDifficulties,
    batchSize: saved.batchSize !== undefined ? saved.batchSize : DEFAULT_FLASHCARD_PREFERENCES.batchSize,
    shuffleOrder: typeof saved.shuffleOrder === 'boolean' ? saved.shuffleOrder : DEFAULT_FLASHCARD_PREFERENCES.shuffleOrder,
  };
}

export function saveFlashcardPreferences(subjectId: string | undefined, prefs: FlashcardPreferences): void {
  if (!subjectId) return;
  const all = loadAll();
  all.flashcard[subjectId] = prefs;
  saveAll(all);
}
