const FIREBASE_KEYS = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
] as const;

const LINE_KEYS = ['VITE_LINE_LOGIN_CHANNEL_ID', 'VITE_LINE_AUTH_FN_URL'] as const;

export function validateEnv(): void {
  const env = import.meta.env as Record<string, string | undefined>;

  const missingFirebase = FIREBASE_KEYS.filter((k) => !env[k]);
  if (missingFirebase.length > 0) {
    throw new Error(`Missing Firebase env: ${missingFirebase.join(', ')}`);
  }

  const missingLine = LINE_KEYS.filter((k) => !env[k]);
  if (missingLine.length > 0) {
    console.warn(
      `[auth] Missing LINE env: ${missingLine.join(', ')}. LINE login will fail.`,
    );
  }
}
