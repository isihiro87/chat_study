import {
  collection,
  doc,
  getDocs,
  query,
  where,
  writeBatch,
  serverTimestamp,
  increment,
  Timestamp,
} from 'firebase/firestore/lite';
import { db, auth } from './config';

export interface ItemStat {
  attempts: number;
  correct: number;
  lastSeenAt?: Date;
}

export type ItemStatsMap = Map<string, ItemStat>;

export interface ItemResult {
  itemId: string;
  isCorrect: boolean;
}

function getUserId(): string | null {
  return auth.currentUser?.uid ?? null;
}

function docIdFor(topicId: string, itemId: string): string {
  return `${topicId}__${itemId}`;
}

/**
 * ユーザーの全 itemStats を topicId → ItemStatsMap で返す。
 * トピック一覧で進捗ピルを出すための一括ロード用。
 */
export async function loadAllItemStatsByTopic(): Promise<Map<string, ItemStatsMap>> {
  const result = new Map<string, ItemStatsMap>();
  const uid = getUserId();
  if (!uid) return result;

  try {
    const snap = await getDocs(collection(db, `users/${uid}/itemStats`));
    snap.forEach((d) => {
      const data = d.data() as {
        topicId?: string;
        itemId?: string;
        attempts?: number;
        correct?: number;
        lastSeenAt?: Timestamp;
      };
      const { topicId, itemId } = data;
      if (!topicId || !itemId) return;
      let m = result.get(topicId);
      if (!m) {
        m = new Map();
        result.set(topicId, m);
      }
      m.set(itemId, {
        attempts: data.attempts ?? 0,
        correct: data.correct ?? 0,
        lastSeenAt: data.lastSeenAt?.toDate(),
      });
    });
  } catch (e) {
    console.warn('Failed to load all item stats:', e);
  }
  return result;
}

export async function loadItemStats(topicId: string): Promise<ItemStatsMap> {
  const map: ItemStatsMap = new Map();
  const uid = getUserId();
  if (!uid) return map;

  try {
    const q = query(
      collection(db, `users/${uid}/itemStats`),
      where('topicId', '==', topicId),
    );
    const snap = await getDocs(q);
    snap.forEach((d) => {
      const data = d.data() as {
        itemId?: string;
        attempts?: number;
        correct?: number;
        lastSeenAt?: Timestamp;
      };
      const itemId = data.itemId;
      if (!itemId) return;
      map.set(itemId, {
        attempts: data.attempts ?? 0,
        correct: data.correct ?? 0,
        lastSeenAt: data.lastSeenAt?.toDate(),
      });
    });
  } catch (e) {
    console.warn('Failed to load item stats:', e);
  }
  return map;
}

export async function updateItemStats(
  topicId: string,
  results: ItemResult[],
): Promise<void> {
  const uid = getUserId();
  if (!uid || results.length === 0) return;

  try {
    const batch = writeBatch(db);
    for (const r of results) {
      const ref = doc(db, `users/${uid}/itemStats`, docIdFor(topicId, r.itemId));
      batch.set(
        ref,
        {
          topicId,
          itemId: r.itemId,
          attempts: increment(1),
          correct: increment(r.isCorrect ? 1 : 0),
          lastSeenAt: serverTimestamp(),
        },
        { merge: true },
      );
    }
    await batch.commit();
  } catch (e) {
    console.warn('Failed to update item stats:', e);
  }
}

/** Optimistically merge results into a local map (for immediate UI feedback). */
export function applyResultsToLocalStats(
  current: ItemStatsMap,
  results: ItemResult[],
): ItemStatsMap {
  const next = new Map(current);
  for (const r of results) {
    const prev = next.get(r.itemId) ?? { attempts: 0, correct: 0 };
    next.set(r.itemId, {
      attempts: prev.attempts + 1,
      correct: prev.correct + (r.isCorrect ? 1 : 0),
      lastSeenAt: new Date(),
    });
  }
  return next;
}
