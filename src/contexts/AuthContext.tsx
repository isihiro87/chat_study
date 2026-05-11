import { createContext, useContext, useEffect, useState, useCallback, useMemo, type ReactNode } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithCustomToken,
  signOut as firebaseSignOut,
  setPersistence,
  browserSessionPersistence,
  deleteUser,
  GoogleAuthProvider,
  type User,
} from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  serverTimestamp,
  writeBatch,
} from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { retryAsync } from '../utils/retryAsync';
import { clearProgress } from '../utils/studyProgressStorage';

interface UserProfile {
  grade: number | null;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  userProfile: UserProfile;
  signInWithGoogle: () => Promise<void>;
  signInWithLine: () => void;
  signOut: () => Promise<void>;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>;
  deleteAccount: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

const LINE_LOGIN_CHANNEL_ID = import.meta.env.VITE_LINE_LOGIN_CHANNEL_ID;
const LINE_AUTH_FN_URL = import.meta.env.VITE_LINE_AUTH_FN_URL;
const LINE_AUTH_LIFF_FN_URL = import.meta.env.VITE_LINE_AUTH_LIFF_FN_URL;
const LINE_CALLBACK_PATH = '/auth/line/callback';

const DEFAULT_PROFILE: UserProfile = { grade: null };

// 24時間以内の lastActiveAt 重複書き込みを抑止する
const ACTIVE_THRESHOLD_MS = 24 * 60 * 60 * 1000;

function shouldWriteLastActive(uid: string): boolean {
  try {
    const last = localStorage.getItem(`auth:lastActiveAt:${uid}`);
    if (!last) return true;
    const lastMs = Number(new Date(last));
    if (Number.isNaN(lastMs)) return true;
    return Date.now() - lastMs > ACTIVE_THRESHOLD_MS;
  } catch {
    return true;
  }
}

function markLastActive(uid: string): void {
  try {
    localStorage.setItem(`auth:lastActiveAt:${uid}`, new Date().toISOString());
  } catch {
    // localStorage が使えない環境では握り潰す
  }
}

// Firestore writeBatch の上限（1コミットあたり500オペレーション）
const FIRESTORE_BATCH_LIMIT = 500;

async function deleteSubcollection(uid: string, name: string): Promise<void> {
  const snap = await getDocs(collection(db, `users/${uid}/${name}`));
  for (let i = 0; i < snap.docs.length; i += FIRESTORE_BATCH_LIMIT) {
    const batch = writeBatch(db);
    snap.docs.slice(i, i + FIRESTORE_BATCH_LIMIT).forEach((d) => batch.delete(d.ref));
    await batch.commit();
  }
}

function getLineLoginUrl(): string {
  const redirectUri = `${window.location.origin}${LINE_CALLBACK_PATH}`;
  const state = crypto.randomUUID();
  sessionStorage.setItem('line-login-state', state);
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: LINE_LOGIN_CHANNEL_ID,
    redirect_uri: redirectUri,
    state,
    scope: 'profile openid',
  });
  return `https://access.line.me/oauth2/v2.1/authorize?${params}`;
}

export async function handleLineCallback(code: string, state: string): Promise<void> {
  const savedState = sessionStorage.getItem('line-login-state');
  if (state !== savedState) {
    throw new Error('Invalid state parameter');
  }
  sessionStorage.removeItem('line-login-state');

  if (!LINE_AUTH_FN_URL) {
    throw new Error('VITE_LINE_AUTH_FN_URL is not configured');
  }

  const redirectUri = `${window.location.origin}${LINE_CALLBACK_PATH}`;

  const res = await fetch(LINE_AUTH_FN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code, redirectUri }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'LINE login failed');
  }

  const { customToken } = await res.json();
  await signInWithCustomToken(auth, customToken);
}

/**
 * LIFF SDK の ID トークンを Cloud Function `createLiffFirebaseToken` に送信し、
 * Firebase の custom token に変換して signInWithCustomToken で Firebase Auth に
 * ログインする。LIFF webview 内で /welcome → LINE OAuth → /auth/line/callback の
 * リダイレクトチェーンを回避するための fast-path。
 *
 * 呼び出し条件: liff.init() 完了済み + liff.isInClient() = true +
 * liff.isLoggedIn() = true。これらを満たさない環境では fall back として
 * 従来の signInWithLine フローを使う。
 */
export async function signInWithLiffIdToken(idToken: string): Promise<void> {
  const url = LINE_AUTH_LIFF_FN_URL as string | undefined;
  if (!url) {
    throw new Error('VITE_LINE_AUTH_LIFF_FN_URL is not configured');
  }
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken }),
  });
  if (!res.ok) {
    let detail = '';
    try {
      detail = JSON.stringify(await res.json());
    } catch {
      // ignore
    }
    throw new Error(`LIFF auth failed: ${res.status} ${detail}`);
  }
  const { customToken } = await res.json();
  await signInWithCustomToken(auth, customToken);
}

// LINE 版（line.chatstudy.jp）では、複数 LIFF を同時に開いた場合の
// IndexedDB ロック競合を回避するため、Auth 永続化を sessionStorage に切り替える。
// sessionStorage は webview タブ毎に独立しており、タブを閉じるとクリアされる。
const IS_LINE_MODE = import.meta.env.VITE_MODE === 'line';

// AuthContext の loading が予期せず長引いた場合に強制的にフォールバックする
// safety timeout（LINE 版のみ、ネットワーク不調・IndexedDB ハング時の救済）。
const LIFF_AUTH_TIMEOUT_MS = 8000;

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<UserProfile>(DEFAULT_PROFILE);

  useEffect(() => {
    let safetyTimer: number | undefined;

    // LINE 版は session-only 永続化に切り替えてから onAuthStateChanged を購読
    const persistencePromise = IS_LINE_MODE
      ? setPersistence(auth, browserSessionPersistence).catch((e) => {
          console.warn('[auth] setPersistence(sessionStorage) failed', e);
        })
      : Promise.resolve();

    let unsubscribe: (() => void) | undefined;
    void persistencePromise.then(() => {
      unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        setUser(firebaseUser);
        if (firebaseUser) {
          const userDoc = doc(db, `users/${firebaseUser.uid}`);
          try {
            const snap = await retryAsync(() => getDoc(userDoc));
            if (snap.exists()) {
              const data = snap.data();
              setUserProfile({ grade: data.grade ?? null });
            }
          } catch (e) {
            console.warn('[auth] Failed to load user profile after retries', e);
          }
          if (shouldWriteLastActive(firebaseUser.uid)) {
            try {
              await setDoc(userDoc, {
                displayName: firebaseUser.displayName || null,
                email: firebaseUser.email || null,
                photoURL: firebaseUser.photoURL || null,
                provider: firebaseUser.providerData[0]?.providerId === 'google.com' ? 'google' : 'line',
                lastActiveAt: serverTimestamp(),
              }, { merge: true });
              markLastActive(firebaseUser.uid);
            } catch {
              // Firestoreエラーは無視（オフライン等）
            }
          }
        } else {
          setUserProfile(DEFAULT_PROFILE);
        }
        setLoading(false);
      });
    });

    if (IS_LINE_MODE) {
      safetyTimer = window.setTimeout(() => {
        setLoading((prev) => {
          if (prev) {
            console.warn(
              `[auth] LINE mode auth init timed out after ${LIFF_AUTH_TIMEOUT_MS}ms; falling back to unauthenticated state`
            );
          }
          return false;
        });
      }, LIFF_AUTH_TIMEOUT_MS);
    }

    return () => {
      if (unsubscribe) unsubscribe();
      if (safetyTimer !== undefined) window.clearTimeout(safetyTimer);
    };
  }, []);

  const signInWithGoogle = useCallback(async () => {
    await signInWithPopup(auth, googleProvider);
  }, []);

  const signInWithLine = useCallback(() => {
    window.location.href = getLineLoginUrl();
  }, []);

  const signOut = useCallback(async () => {
    await firebaseSignOut(auth);
  }, []);

  const updateUserProfile = useCallback(async (data: Partial<UserProfile>) => {
    setUserProfile((prev) => ({ ...prev, ...data }));
    if (user) {
      try {
        await setDoc(doc(db, `users/${user.uid}`), data, { merge: true });
      } catch {
        // ignore
      }
    }
  }, [user]);

  const deleteAccount = useCallback(async () => {
    const current = auth.currentUser;
    if (!current) {
      throw new Error('No authenticated user');
    }
    const uid = current.uid;

    await deleteSubcollection(uid, 'quizAttempts');
    await deleteSubcollection(uid, 'flashcardSessions');
    await deleteSubcollection(uid, 'studyEvents');
    await deleteDoc(doc(db, `users/${uid}`));

    try {
      localStorage.removeItem(`auth:lastActiveAt:${uid}`);
    } catch {
      // ignore
    }
    try {
      clearProgress();
    } catch {
      // ignore
    }

    await deleteUser(current);
  }, []);

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      loading,
      userProfile,
      signInWithGoogle,
      signInWithLine,
      signOut,
      updateUserProfile,
      deleteAccount,
    }),
    [user, loading, userProfile, signInWithGoogle, signInWithLine, signOut, updateUserProfile, deleteAccount],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
