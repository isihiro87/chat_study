import type { TabType } from '../data/types';

const RESUME_PREFIX = 'resume:';

export function saveResumeState<T>(topicId: string, tabType: TabType, state: T): void {
  try {
    sessionStorage.setItem(
      `${RESUME_PREFIX}${topicId}:${tabType}`,
      JSON.stringify(state),
    );
  } catch {
    // sessionStorage full or unavailable — silently ignore
  }
}

export function loadResumeState<T>(topicId: string, tabType: TabType): T | null {
  try {
    const raw = sessionStorage.getItem(`${RESUME_PREFIX}${topicId}:${tabType}`);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function clearResumeState(topicId: string, tabType: TabType): void {
  sessionStorage.removeItem(`${RESUME_PREFIX}${topicId}:${tabType}`);
}

export function clearAllResumeState(topicId: string): void {
  const tabs: TabType[] = ['quiz', 'flashcard', 'chat', 'video'];
  for (const tab of tabs) {
    sessionStorage.removeItem(`${RESUME_PREFIX}${topicId}:${tab}`);
  }
}

export function hasResumeState(topicId: string): boolean {
  const tabs: TabType[] = ['quiz', 'flashcard', 'chat'];
  return tabs.some((tab) => {
    const raw = sessionStorage.getItem(`${RESUME_PREFIX}${topicId}:${tab}`);
    return raw !== null;
  });
}
