import { createContext, useContext, useEffect, useState, useCallback, useMemo, type ReactNode } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithCustomToken,
  signOut as firebaseSignOut,
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
} from 'firebase/firestore/lite';
import { auth, db } from '../firebase/config';
import { retryAsync } from '../utils/retryAsync';
import { clearProgress } from '../utils/studyProgressStorage';
import {
  invalidateCachedForUid,
  writeCachedGrade,
  writeCachedPlan,
  type CacheableGrade,
  type CacheablePlan,
} from '../utils/liffStudyCache';
import { withFirestoreTimeout } from '../utils/firestoreTimeout';

interface UserProfile {
  grade: number | null;
}

export interface UserDocStudyStat {
  fcClearCount: number;
  quizClearCount: number;
  quizBestAccuracy: number;
  quizLastAccuracy: number;
}

export interface UserDocStudyPrefs {
  difficulties?: string[];
}

export type PlanSource = 'trial' | 'paid' | 'trial_expired' | null;
export type PreferredHour = 6 | 7 | 16 | 18 | 20 | null;

/**
 * `users/{uid}` の主要フィールドを LIFF 各ページで使いやすい形に整形したもの。
 * 既存ページごとに行っていた `getDoc(users/{uid})` を AuthContext 1 箇所に集約するため。
 */
export interface UserDoc {
  uid: string;
  nickname: string | null;
  grade: CacheableGrade | null;
  subject: string | null;
  testScopeTopics: string[];
  studyStats: Record<string, UserDocStudyStat>;
  studyPrefs: Record<string, UserDocStudyPrefs>;
  plan: CacheablePlan;
  planSource: PlanSource;
  preferredHour: PreferredHour;
  /**
   * 登録時に確定した永続月額（680 / 980）。
   * 未登録ユーザーや旧データでは null。LIFF /premium-apply で価格表示に使う。
   */
  lockedMonthlyPrice: 680 | 980 | null;
  /**
   * 有料サブスクで解約予約済みなら true。Stripe `cancel_at_period_end=true` 同等。
   * 解約予約中は `currentPeriodEnd` までプレミアム機能を維持し、その日に free に降格する。
   */
  cancelAtPeriodEnd: boolean;
  /**
   * 有料サブスクの現在の課金期間終了タイミング (= 解約予約時の停止日)。
   * 解約予約中の UI で「○月○日まで使えます」を表示するために使う。
   */
  currentPeriodEnd: Date | null;
  /**
   * プレミアム機能の有効期限。trial / paid どちらでも設定される。
   * trial 中なら trial 終了日、paid なら次回課金日相当。
   * LP の「あと N 日でトライアル終了」表示に使う。
   */
  premiumUntil: Date | null;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  userProfile: UserProfile;
  userDoc: UserDoc | null;
  userDocLoaded: boolean;
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

const GRADE_LABEL_TO_NUMBER: Record<string, CacheableGrade> = {
  中1: 1,
  中2: 2,
  中3: 3,
};

function parseUserDoc(uid: string, data: Record<string, unknown>): UserDoc {
  const gradeLabel = typeof data.grade === 'string' ? data.grade : undefined;
  const grade = gradeLabel ? GRADE_LABEL_TO_NUMBER[gradeLabel] ?? null : null;

  const subject =
    typeof data.subject === 'string' ? (data.subject as string) : null;

  const testScopeRaw = (data.testScope as Record<string, unknown> | undefined)
    ?.topics;
  const testScopeTopics = Array.isArray(testScopeRaw)
    ? (testScopeRaw as unknown[]).filter((t): t is string => typeof t === 'string')
    : [];

  const plan: CacheablePlan = data.plan === 'premium' ? 'premium' : 'free';
  const rawPlanSource = data.planSource;
  const planSource: PlanSource =
    rawPlanSource === 'trial' ||
    rawPlanSource === 'paid' ||
    rawPlanSource === 'trial_expired'
      ? rawPlanSource
      : null;
  const nickname =
    typeof data.nickname === 'string' && data.nickname.trim().length > 0
      ? data.nickname
      : null;

  const rawHour = data.preferredHour;
  const preferredHour: PreferredHour =
    rawHour === 6 ||
    rawHour === 7 ||
    rawHour === 16 ||
    rawHour === 18 ||
    rawHour === 20
      ? rawHour
      : null;

  const studyStats: Record<string, UserDocStudyStat> = {};
  const rawStats = (data.studyStats as Record<string, unknown> | undefined) ?? {};
  for (const [k, v] of Object.entries(rawStats)) {
    if (v && typeof v === 'object') {
      const s = v as Partial<UserDocStudyStat>;
      studyStats[k] = {
        fcClearCount: typeof s.fcClearCount === 'number' ? s.fcClearCount : 0,
        quizClearCount: typeof s.quizClearCount === 'number' ? s.quizClearCount : 0,
        quizBestAccuracy:
          typeof s.quizBestAccuracy === 'number' ? s.quizBestAccuracy : 0,
        quizLastAccuracy:
          typeof s.quizLastAccuracy === 'number' ? s.quizLastAccuracy : 0,
      };
    }
  }

  const studyPrefs: Record<string, UserDocStudyPrefs> = {};
  const rawPrefs = (data.studyPrefs as Record<string, unknown> | undefined) ?? {};
  for (const [k, v] of Object.entries(rawPrefs)) {
    if (v && typeof v === 'object') {
      const p = v as Partial<UserDocStudyPrefs>;
      studyPrefs[k] = {
        difficulties: Array.isArray(p.difficulties)
          ? (p.difficulties as unknown[]).filter(
              (d): d is string => typeof d === 'string',
            )
          : undefined,
      };
    }
  }

  const rawLockedPrice = data.lockedMonthlyPrice;
  const lockedMonthlyPrice: 680 | 980 | null =
    rawLockedPrice === 680 || rawLockedPrice === 980 ? rawLockedPrice : null;

  const cancelAtPeriodEnd = data.cancelAtPeriodEnd === true;
  const cpeRaw = data.currentPeriodEnd as
    | { toDate?: () => Date }
    | undefined
    | null;
  const currentPeriodEnd =
    cpeRaw && typeof cpeRaw.toDate === 'function' ? cpeRaw.toDate() : null;
  const premiumUntilRaw = data.premiumUntil as
    | { toDate?: () => Date }
    | undefined
    | null;
  const premiumUntil =
    premiumUntilRaw && typeof premiumUntilRaw.toDate === 'function'
      ? premiumUntilRaw.toDate()
      : null;

  return {
    uid,
    nickname,
    grade,
    subject,
    testScopeTopics,
    studyStats,
    studyPrefs,
    plan,
    planSource,
    preferredHour,
    lockedMonthlyPrice,
    cancelAtPeriodEnd,
    currentPeriodEnd,
    premiumUntil,
  };
}

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
 * 呼び出し条件: liff.init() 完了済み + liff.isLoggedIn() = true。
 * これらを満たさない場合は呼ばれず、上位の `useLiffAuth` フックが
 * `liff.login()` 発動などのフォールバックを行う。
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

// LINE 版（line.chatstudy.jp）共通の挙動制御フラグ。
// Auth 永続化は localStorage（browserLocalPersistence、Firebase デフォルト）の
// まま維持する。これにより複数 LIFF タブ間で認証セッションを共有でき、
// LIFF を開くたびに OAuth 同意画面を踏まされる体験を回避できる。
//
// LINE WebView 等で IndexedDB / localStorage アクセスが不安定なときに
// onAuthStateChanged が発火せず、loading=true のまま LoadingScreen が永続表示
// される症状（2026-05-31 報告）の救済タイマー。
//
// 過去に LIFF_AUTH_TIMEOUT_MS(8s) で loading=false を強制したところ、auth 復元
// が遅れた端末で誤って user=null と見做されて /welcome に飛ばされる問題が
// あったが、今回は auth.currentUser を同期的に読んで「Firebase 内部での復元
// は既に終わっているが onAuthStateChanged だけ届いていない」ケースを救済する
// 設計に変更。currentUser が立っていれば true source として採用、null なら
// 未ログインと判定して /welcome に進めて手動 OAuth フォールバックさせる。
const AUTH_RESOLVE_FALLBACK_MS = 5000;

// users/{uid} doc の getDoc に被せる hard timeout。これがないと fetch が
// hang した際 userDocLoaded が永久に false のままで、レンダーガードが
// LoadingScreen を出し続ける。
const USER_DOC_FETCH_TIMEOUT_MS = 5000;

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [userDoc, setUserDoc] = useState<UserDoc | null>(null);
  const [userDocLoaded, setUserDocLoaded] = useState(false);

  useEffect(() => {
    let lastUid: string | null = null;
    let resolvedByListener = false;

    // Firebase の永続化はデフォルト（browserLocalPersistence = localStorage / IndexedDB）
    // のまま使用。明示的な setPersistence 呼び出しは不要。
    const persistencePromise: Promise<void> = Promise.resolve();

    // onAuthStateChanged が AUTH_RESOLVE_FALLBACK_MS 以内に発火しなかった場合は
    // auth.currentUser を信頼して loading をリリースする。currentUser があれば
    // 単独で userDoc fetch も走らせる（このまま userDocLoaded=false で放置すると
    // LiffTestRangePage などのレンダーガードに引っかかって LoadingScreen が
    // 残り続けるため）。
    const fallbackTimer = window.setTimeout(() => {
      if (resolvedByListener) return;
      const current = auth.currentUser;
      console.warn(
        `[auth] onAuthStateChanged が ${AUTH_RESOLVE_FALLBACK_MS}ms 以内に発火しませんでした。auth.currentUser=${current ? current.uid : 'null'} で代替解決します。`,
      );
      setUser(current);
      if (!current) {
        setUserDoc(null);
        setUserDocLoaded(true);
        setLoading(false);
        return;
      }
      // currentUser はあるので userDoc を独自に fetch（listener と同じ動作）
      const uid = current.uid;
      const userDocRef = doc(db, `users/${uid}`);
      const emptyUserDoc: UserDoc = {
        uid,
        nickname: null,
        grade: null,
        subject: null,
        testScopeTopics: [],
        studyStats: {},
        studyPrefs: {},
        plan: 'free',
        planSource: null,
        preferredHour: null,
        lockedMonthlyPrice: null,
        cancelAtPeriodEnd: false,
        currentPeriodEnd: null,
        premiumUntil: null,
      };
      void (async () => {
        try {
          const snap = await withFirestoreTimeout(
            retryAsync(() => getDoc(userDocRef)),
            USER_DOC_FETCH_TIMEOUT_MS,
            `fallback getDoc users/${uid}`,
          );
          if (snap.exists()) {
            const data = snap.data();
            setUserProfile({ grade: data.grade ?? null });
            const parsed = parseUserDoc(uid, data);
            setUserDoc(parsed);
            if (parsed.grade) writeCachedGrade(uid, parsed.grade);
            writeCachedPlan(uid, parsed.plan);
          } else {
            setUserDoc(emptyUserDoc);
            writeCachedPlan(uid, 'free');
          }
        } catch (e) {
          console.warn('[auth] fallback userDoc fetch failed', e);
          setUserDoc(emptyUserDoc);
        } finally {
          setUserDocLoaded(true);
          setLoading(false);
        }
      })();
    }, AUTH_RESOLVE_FALLBACK_MS);

    let unsubscribe: (() => void) | undefined;
    void persistencePromise.then(() => {
      unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        resolvedByListener = true;
        window.clearTimeout(fallbackTimer);
        setUser(firebaseUser);

        // uid が切り替わったら（別アカウントログイン）旧 uid のキャッシュを無効化する。
        // 同一 uid の連続ログインや初回ログインでは何もしない。
        if (lastUid && lastUid !== (firebaseUser?.uid ?? null)) {
          invalidateCachedForUid(lastUid);
          // 古いユーザーの doc が画面に残らないようにクリア
          setUserDoc(null);
          setUserDocLoaded(false);
        }
        lastUid = firebaseUser?.uid ?? null;

        if (firebaseUser) {
          const userDocRef = doc(db, `users/${firebaseUser.uid}`);
          // 空のフォールバック userDoc。timeout 時にもこれを入れて render を解放する。
          const emptyUserDoc: UserDoc = {
            uid: firebaseUser.uid,
            nickname: null,
            grade: null,
            subject: null,
            testScopeTopics: [],
            studyStats: {},
            studyPrefs: {},
            plan: 'free',
            planSource: null,
            preferredHour: null,
            lockedMonthlyPrice: null,
            cancelAtPeriodEnd: false,
            currentPeriodEnd: null,
            premiumUntil: null,
          };
          try {
            const snap = await withFirestoreTimeout(
              retryAsync(() => getDoc(userDocRef)),
              USER_DOC_FETCH_TIMEOUT_MS,
              `getDoc users/${firebaseUser.uid}`,
            );
            if (snap.exists()) {
              const data = snap.data();
              setUserProfile({ grade: data.grade ?? null });
              const parsed = parseUserDoc(firebaseUser.uid, data);
              setUserDoc(parsed);
              if (parsed.grade) {
                // 次回起動時の grade chunk prefetch に使うため LS にメモする
                writeCachedGrade(firebaseUser.uid, parsed.grade);
              }
              // 次回起動時の「無料ユーザーに重い学習チャンクを prefetch しない」
              // ゲートに使うため LS にメモする
              writeCachedPlan(firebaseUser.uid, parsed.plan);
            } else {
              setUserDoc(emptyUserDoc);
              // doc 不在 = 新規ユーザーは確実に free なので明示的にキャッシュする
              writeCachedPlan(firebaseUser.uid, 'free');
            }
          } catch (e) {
            console.warn('[auth] Failed to load user profile (timeout/error)', e);
            // タイムアウト or fetch エラー時は空 userDoc を入れて render をブロックしない。
            // 実際のデータが後で到着した場合はバックグラウンド更新（後述）で反映する。
            setUserDoc(emptyUserDoc);
            // タイムアウトで先に進んでも、元の getDoc は裏で生きていることがある。
            // 戻ってきたらサイレントに userDoc を更新する（fire-and-forget）。
            void retryAsync(() => getDoc(userDocRef))
              .then((late) => {
                if (!late.exists()) return;
                const parsed = parseUserDoc(firebaseUser.uid, late.data());
                setUserDoc(parsed);
                if (parsed.grade) writeCachedGrade(firebaseUser.uid, parsed.grade);
                writeCachedPlan(firebaseUser.uid, parsed.plan);
              })
              .catch(() => {
                // 既に上で警告済み。ここではノイズを増やさない。
              });
          } finally {
            setUserDocLoaded(true);
          }
          if (shouldWriteLastActive(firebaseUser.uid)) {
            // lastActiveAt の書き込みは fire-and-forget。レンダーをブロックする必要がない。
            // ここを await すると複数 LIFF タブ同時起動時の IDB / Firestore 競合で
            // setLoading(false) が遅延してロード画面が長引く。
            void (async () => {
              try {
                await setDoc(userDocRef, {
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
            })();
          }
        } else {
          setUserProfile(DEFAULT_PROFILE);
          setUserDoc(null);
          setUserDocLoaded(false);
        }
        setLoading(false);
      });
    });

    return () => {
      window.clearTimeout(fallbackTimer);
      if (unsubscribe) unsubscribe();
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
      userDoc,
      userDocLoaded,
      signInWithGoogle,
      signInWithLine,
      signOut,
      updateUserProfile,
      deleteAccount,
    }),
    [
      user,
      loading,
      userProfile,
      userDoc,
      userDocLoaded,
      signInWithGoogle,
      signInWithLine,
      signOut,
      updateUserProfile,
      deleteAccount,
    ],
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
