import type { StudyProgress, TopicProgress } from '../data/types';

const STORAGE_KEY = 'marutto-study-progress';

export const DEFAULT_TOPIC_PROGRESS: TopicProgress = {
  chatRead: false,
  flashcardCompleted: false,
  quizBestScore: null,
  quizTotalQuestions: null,
  lastStudiedAt: '',
};

export const DEFAULT_PROGRESS: StudyProgress = {
  version: 1,
  topics: {},
  streak: {
    currentStreak: 0,
    lastStudyDate: '',
  },
  lastStudiedTopicId: null,
};

export function loadProgress(): StudyProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PROGRESS };
    const parsed = JSON.parse(raw);
    if (parsed && parsed.version === 1) {
      return parsed as StudyProgress;
    }
    return { ...DEFAULT_PROGRESS };
  } catch {
    return { ...DEFAULT_PROGRESS };
  }
}

export function saveProgress(progress: StudyProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.warn('Failed to save study progress:', e);
  }
}

export function getTopicProgress(
  progress: StudyProgress,
  topicId: string,
): TopicProgress {
  return progress.topics[topicId] ?? { ...DEFAULT_TOPIC_PROGRESS };
}

function getToday(): string {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function getYesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export function updateStreak(progress: StudyProgress): StudyProgress {
  const today = getToday();
  const { lastStudyDate, currentStreak } = progress.streak;

  if (lastStudyDate === today) {
    return progress;
  }

  const yesterday = getYesterday();
  const newStreak = lastStudyDate === yesterday ? currentStreak + 1 : 1;

  return {
    ...progress,
    streak: {
      currentStreak: newStreak,
      lastStudyDate: today,
    },
  };
}
