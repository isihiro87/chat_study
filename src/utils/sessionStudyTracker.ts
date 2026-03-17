const STORAGE_KEY = 'session-completed-topics';
const POPUP_SHOWN_KEY = 'session-summary-popup-shown';
const TRIGGER_COUNT = 3;

interface CompletedEntry {
  topicId: string;
  subjectId: string;
  grade: number;
}

function getCompletedEntries(): CompletedEntry[] {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    // 旧形式（string[]）との互換性
    if (Array.isArray(parsed) && parsed.length > 0 && typeof parsed[0] === 'string') {
      return [];
    }
    return parsed;
  } catch {
    return [];
  }
}

function saveCompletedEntries(entries: CompletedEntry[]): void {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function addCompletedTopic(topicId: string, subjectId: string, grade: number): void {
  const entries = getCompletedEntries();
  if (!entries.some((e) => e.topicId === topicId)) {
    entries.push({ topicId, subjectId, grade });
    saveCompletedEntries(entries);
  }
}

export function shouldShowSummaryQuizPopup(subjectId: string, grade: number): boolean {
  const entries = getCompletedEntries();
  const alreadyShown = sessionStorage.getItem(POPUP_SHOWN_KEY) === 'true';
  const matchingCount = entries.filter(
    (e) => e.subjectId === subjectId && e.grade === grade,
  ).length;
  return matchingCount >= TRIGGER_COUNT && !alreadyShown;
}

export function getSessionCompletedTopics(subjectId: string, grade: number): string[] {
  const entries = getCompletedEntries();
  return entries
    .filter((e) => e.subjectId === subjectId && e.grade === grade)
    .map((e) => e.topicId);
}

export function markPopupShown(): void {
  sessionStorage.setItem(POPUP_SHOWN_KEY, 'true');
}

export function resetPopupShown(): void {
  sessionStorage.removeItem(POPUP_SHOWN_KEY);
}
