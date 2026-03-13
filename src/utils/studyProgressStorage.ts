import type { StudyProgress, TopicProgress } from '../data/types';

const STORAGE_KEY = 'marutto-study-progress';

export const DEFAULT_TOPIC_PROGRESS: TopicProgress = {
  chatRead: false,
  flashcardCompleted: false,
  exampleCompleted: false,
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
  if (typeof window === 'undefined') return { ...DEFAULT_PROGRESS };
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

export function saveProgress(progress: StudyProgress): boolean {
  if (typeof window === 'undefined') return false;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    return true;
  } catch (e) {
    console.warn('Failed to save study progress:', e);
    if (e instanceof DOMException && e.name === 'QuotaExceededError') {
      // 古いトピック進捗を削除して容量を確保
      const trimmed = trimOldTopics(progress);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
        return true;
      } catch {
        // それでも失敗した場合は諦める
      }
    }
    return false;
  }
}

/** lastStudiedAtが古い順にトピック進捗を半分削除して容量を確保 */
function trimOldTopics(progress: StudyProgress): StudyProgress {
  const entries = Object.entries(progress.topics);
  if (entries.length <= 1) return progress;
  entries.sort((a, b) => (a[1].lastStudiedAt || '').localeCompare(b[1].lastStudiedAt || ''));
  const keep = entries.slice(Math.floor(entries.length / 2));
  return {
    ...progress,
    topics: Object.fromEntries(keep),
  };
}

export function clearProgress(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn('Failed to clear study progress:', e);
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
