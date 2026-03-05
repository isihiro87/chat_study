const STORAGE_KEY = 'session-completed-topics';
const POPUP_SHOWN_KEY = 'session-summary-popup-shown';
const TRIGGER_COUNT = 3;

function getCompletedTopics(): string[] {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCompletedTopics(topicIds: string[]): void {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(topicIds));
}

export function addCompletedTopic(topicId: string): void {
  const topics = getCompletedTopics();
  if (!topics.includes(topicId)) {
    topics.push(topicId);
    saveCompletedTopics(topics);
  }
}

export function shouldShowSummaryQuizPopup(): boolean {
  const topics = getCompletedTopics();
  const alreadyShown = sessionStorage.getItem(POPUP_SHOWN_KEY) === 'true';
  return topics.length >= TRIGGER_COUNT && !alreadyShown;
}

export function getSessionCompletedTopics(): string[] {
  return getCompletedTopics();
}

export function markPopupShown(): void {
  sessionStorage.setItem(POPUP_SHOWN_KEY, 'true');
}

export function resetPopupShown(): void {
  sessionStorage.removeItem(POPUP_SHOWN_KEY);
}
