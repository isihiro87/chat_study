import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithCustomToken,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  type User,
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase/config';

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
}

const AuthContext = createContext<AuthContextType | null>(null);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

const LINE_LOGIN_CHANNEL_ID = import.meta.env.VITE_LINE_LOGIN_CHANNEL_ID;
const LINE_AUTH_FN_URL = import.meta.env.VITE_LINE_AUTH_FN_URL;
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

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<UserProfile>(DEFAULT_PROFILE);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        const userDoc = doc(db, `users/${firebaseUser.uid}`);
        try {
          const snap = await getDoc(userDoc);
          if (snap.exists()) {
            const data = snap.data();
            setUserProfile({ grade: data.grade ?? null });
          }
        } catch {
          // Firestoreエラーは無視（オフライン等）
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
    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const signInWithLine = () => {
    window.location.href = getLineLoginUrl();
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
  };

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

  return (
    <AuthContext.Provider value={{ user, loading, userProfile, signInWithGoogle, signInWithLine, signOut, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
