import { doc, getDoc, serverTimestamp, setDoc, type Timestamp } from 'firebase/firestore/lite';
import { db } from '../firebase/config';

export interface TestScope {
  topics: string[];
  updatedAt: Date | null;
}

interface FirestoreTestScope {
  topics?: unknown;
  updatedAt?: Timestamp;
}

export function normalizeTestScope(
  raw: FirestoreTestScope | undefined
): TestScope | null {
  if (!raw) return null;
  const topics = Array.isArray(raw.topics)
    ? raw.topics.filter((t): t is string => typeof t === 'string')
    : [];
  const updatedAt = raw.updatedAt?.toDate?.() ?? null;
  return { topics, updatedAt };
}

export async function getTestScope(uid: string): Promise<TestScope | null> {
  const snap = await getDoc(doc(db, 'users', uid));
  if (!snap.exists()) return null;
  return normalizeTestScope(
    snap.data().testScope as FirestoreTestScope | undefined
  );
}

export async function saveTestScope(uid: string, topics: string[]): Promise<void> {
  await setDoc(
    doc(db, 'users', uid),
    {
      testScope: {
        topics,
        updatedAt: serverTimestamp(),
        // 詳しく設定ページ経由の保存であることを明示。これがないと、直前に
        // トーク内フローで付いた lastSource='line_inline' が merge で残り、
        // onTestScopeSaved の確認 push がスキップされてしまう。
        lastSource: 'page',
      },
    },
    { merge: true }
  );
}

export async function clearTestScope(uid: string): Promise<void> {
  await saveTestScope(uid, []);
}
