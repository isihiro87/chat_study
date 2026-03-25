const STORAGE_KEY = 'chatstudy-user-prefs';

interface UserPreferences {
  grade: number | null;
}

const DEFAULT_PREFS: UserPreferences = {
  grade: null,
};

export function loadUserPreferences(): UserPreferences {
  if (typeof window === 'undefined') return { ...DEFAULT_PREFS };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PREFS };
    return { ...DEFAULT_PREFS, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_PREFS };
  }
}

export function saveUserPreferences(prefs: Partial<UserPreferences>): void {
  if (typeof window === 'undefined') return;
  try {
    const current = loadUserPreferences();
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...current, ...prefs }));
  } catch {
    // ignore
  }
}

export function getUserGrade(): number | null {
  return loadUserPreferences().grade;
}

export function setUserGrade(grade: number | null): void {
  saveUserPreferences({ grade });
}
