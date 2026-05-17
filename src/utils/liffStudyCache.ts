/**
 * LIFF 版の初期表示を高速化するための、薄い localStorage キャッシュ層。
 *
 * - uid 別の名前空間で TTL 付き JSON を読み書きする
 * - JSON.parse 失敗 / quota exceeded / プライバシーモード等は静かに no-op する
 * - itemStats / 前回学年など、サイズが小さく日次オーダーで変わる値を想定
 *
 * 大規模・厳密なキャッシュ整合性が必要な値（例: 認証トークン）には使用しない。
 */
import type { ItemStat, ItemStatsMap } from '../firebase/itemStats';

const NS_PREFIX = 'liff-study-cache:v1:';

interface CacheEnvelope<T> {
  v: T;
  /** 書き込み時刻（epoch ms） */
  t: number;
  /** TTL（ms）。0 以下なら期限なし */
  ttl: number;
}

function buildKey(key: string, uid: string | null): string {
  return `${NS_PREFIX}${uid ?? '_anon'}:${key}`;
}

function safeGetItem(storageKey: string): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

function safeSetItem(storageKey: string, value: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(storageKey, value);
  } catch {
    // quota exceeded / privacy mode は握り潰す
  }
}

function safeRemoveItem(storageKey: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(storageKey);
  } catch {
    // ignore
  }
}

export interface CachedValue<T> {
  value: T;
  /** TTL 起算で stale 判定された時刻（epoch ms） */
  staleAfter: number;
  /** すでに stale を超過しているか */
  isStale: boolean;
}

/**
 * 任意の JSON 値を取得する。値が存在しない・壊れている・他 uid の場合は null。
 * TTL 超過時も値自体は返す（SWR 風に「即返し→裏で fetch」できるよう、isStale フラグで判別）。
 */
export function getCached<T>(key: string, uid: string | null): CachedValue<T> | null {
  const raw = safeGetItem(buildKey(key, uid));
  if (!raw) return null;
  let parsed: CacheEnvelope<T>;
  try {
    parsed = JSON.parse(raw) as CacheEnvelope<T>;
  } catch {
    safeRemoveItem(buildKey(key, uid));
    return null;
  }
  if (typeof parsed !== 'object' || parsed === null || !('v' in parsed) || !('t' in parsed)) {
    return null;
  }
  const staleAfter = parsed.ttl > 0 ? parsed.t + parsed.ttl : Number.POSITIVE_INFINITY;
  return {
    value: parsed.v,
    staleAfter,
    isStale: Date.now() > staleAfter,
  };
}

export function setCached<T>(
  key: string,
  uid: string | null,
  value: T,
  ttlMs: number,
): void {
  const envelope: CacheEnvelope<T> = { v: value, t: Date.now(), ttl: ttlMs };
  safeSetItem(buildKey(key, uid), JSON.stringify(envelope));
}

/**
 * 指定 uid に紐づくキャッシュエントリを全削除する。
 * uid 切替（別アカウントログイン）時に呼ぶ。
 */
export function invalidateCachedForUid(uid: string | null): void {
  if (typeof window === 'undefined') return;
  const prefix = `${NS_PREFIX}${uid ?? '_anon'}:`;
  try {
    const keysToRemove: string[] = [];
    for (let i = 0; i < window.localStorage.length; i += 1) {
      const k = window.localStorage.key(i);
      if (k && k.startsWith(prefix)) keysToRemove.push(k);
    }
    keysToRemove.forEach(safeRemoveItem);
  } catch {
    // ignore
  }
}

// ---- grade prefetch helpers ---------------------------------------------

const GRADE_KEY = 'grade';
const GRADE_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 日（grade は滅多に変わらない）

export type CacheableGrade = 1 | 2 | 3;

/**
 * 前回ログイン時に観測した grade を読み取る。
 * uid を省略すると `_anon` 名前空間から読む（main.line.tsx の最初期、auth 前に使う想定）。
 */
export function readCachedGrade(uid?: string | null): CacheableGrade | null {
  const direct = getCached<CacheableGrade>(GRADE_KEY, uid ?? null);
  if (direct?.value === 1 || direct?.value === 2 || direct?.value === 3) {
    return direct.value;
  }
  if (uid) {
    // uid 別キャッシュが空なら anon 名前空間にもチェック（前回ログイン uid を覚えていない端末向け）
    const fallback = getCached<CacheableGrade>(GRADE_KEY, null);
    if (fallback?.value === 1 || fallback?.value === 2 || fallback?.value === 3) {
      return fallback.value;
    }
  }
  return null;
}

/**
 * grade を localStorage に書く。uid 別と anon の両方に書くことで、
 * 次回起動時の prefetch が auth 完了前でも効くようにする。
 */
export function writeCachedGrade(uid: string | null, grade: CacheableGrade): void {
  setCached(GRADE_KEY, uid, grade, GRADE_TTL_MS);
  if (uid) {
    setCached(GRADE_KEY, null, grade, GRADE_TTL_MS);
  }
}

// ---- plan prefetch helpers ----------------------------------------------

const PLAN_KEY = 'plan';
// plan は trial / 解約 / 7日後の自動 downgrade で変動するため grade より短め。
// 7日経てば自動的に再 fetch → 上書きされる。
const PLAN_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export type CacheablePlan = 'free' | 'premium';

/**
 * 前回観測した plan を読み取る。`/liff/units` 用の重い学習チャンクを
 * 起動直後に prefetch するかどうかを判定するために使う。
 * 安全側に倒し、不明なら null（= prefetch しない）を返す。
 */
export function readCachedPlan(uid?: string | null): CacheablePlan | null {
  const direct = getCached<CacheablePlan>(PLAN_KEY, uid ?? null);
  if (direct?.value === 'free' || direct?.value === 'premium') {
    return direct.value;
  }
  if (uid) {
    const fallback = getCached<CacheablePlan>(PLAN_KEY, null);
    if (fallback?.value === 'free' || fallback?.value === 'premium') {
      return fallback.value;
    }
  }
  return null;
}

/**
 * plan を localStorage に書く。`writeCachedGrade` と同じく uid 別と anon の
 * 両方に書くことで、次回起動時の prefetch ゲートが auth 完了前から有効になる。
 */
export function writeCachedPlan(uid: string | null, plan: CacheablePlan): void {
  setCached(PLAN_KEY, uid, plan, PLAN_TTL_MS);
  if (uid) {
    setCached(PLAN_KEY, null, plan, PLAN_TTL_MS);
  }
}

// ---- itemStats (Map → JSON) helpers -------------------------------------

interface SerializedItemStat {
  attempts: number;
  correct: number;
  lastSeenAt?: number; // epoch ms
}

type SerializedItemStatsByTopic = Record<string, Record<string, SerializedItemStat>>;

const ITEM_STATS_KEY = 'itemStatsByTopic';
const ITEM_STATS_TTL_MS = 24 * 60 * 60 * 1000; // 24 時間

export function serializeItemStatsByTopic(
  byTopic: Map<string, ItemStatsMap>,
): SerializedItemStatsByTopic {
  const out: SerializedItemStatsByTopic = {};
  byTopic.forEach((statsMap, topicId) => {
    const inner: Record<string, SerializedItemStat> = {};
    statsMap.forEach((stat, itemId) => {
      inner[itemId] = {
        attempts: stat.attempts,
        correct: stat.correct,
        lastSeenAt: stat.lastSeenAt ? stat.lastSeenAt.getTime() : undefined,
      };
    });
    out[topicId] = inner;
  });
  return out;
}

export function deserializeItemStatsByTopic(
  raw: SerializedItemStatsByTopic,
): Map<string, ItemStatsMap> {
  const out = new Map<string, ItemStatsMap>();
  for (const [topicId, inner] of Object.entries(raw)) {
    const m: ItemStatsMap = new Map();
    for (const [itemId, s] of Object.entries(inner)) {
      const stat: ItemStat = {
        attempts: s.attempts,
        correct: s.correct,
        lastSeenAt: s.lastSeenAt ? new Date(s.lastSeenAt) : undefined,
      };
      m.set(itemId, stat);
    }
    out.set(topicId, m);
  }
  return out;
}

export function readCachedItemStats(uid: string | null): {
  value: Map<string, ItemStatsMap>;
  isStale: boolean;
} | null {
  const hit = getCached<SerializedItemStatsByTopic>(ITEM_STATS_KEY, uid);
  if (!hit) return null;
  try {
    return {
      value: deserializeItemStatsByTopic(hit.value),
      isStale: hit.isStale,
    };
  } catch {
    return null;
  }
}

export function writeCachedItemStats(
  uid: string | null,
  byTopic: Map<string, ItemStatsMap>,
): void {
  setCached(ITEM_STATS_KEY, uid, serializeItemStatsByTopic(byTopic), ITEM_STATS_TTL_MS);
}

// ---- in-progress study session (resume) ---------------------------------

const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 日

function sessionKey(topicId: string, kind: 'fc' | 'quiz'): string {
  return `session:${topicId}:${kind}`;
}

export interface SavedSessionFc {
  kind: 'fc';
  topicId: string;
  itemIds: string[];
  /** 次に解くカードの index（== known.length + unknown.length） */
  idx: number;
  known: string[];
  unknown: string[];
  savedAt: number;
}

export interface SavedSessionQuiz {
  kind: 'quiz';
  topicId: string;
  itemIds: string[];
  idx: number;
  selected: number | null;
  correctCount: number;
  wrong: string[];
  savedAt: number;
}

export type SavedSession = SavedSessionFc | SavedSessionQuiz;

/**
 * 中断中のセッションを読み込む。完了 / 期限切れ / 不正形式なら null。
 */
export function readSavedSession(
  uid: string | null,
  topicId: string,
  kind: 'fc' | 'quiz',
): SavedSession | null {
  const hit = getCached<SavedSession>(sessionKey(topicId, kind), uid);
  if (!hit || hit.isStale) {
    if (hit?.isStale) clearSavedSession(uid, topicId, kind);
    return null;
  }
  const v = hit.value;
  // 完了済（最後のアイテムまで進んでいる）なら無視
  if (!v || typeof v !== 'object' || !Array.isArray(v.itemIds)) return null;
  if (v.idx >= v.itemIds.length) return null;
  return v;
}

export function writeSavedSession(uid: string | null, session: SavedSession): void {
  setCached(sessionKey(session.topicId, session.kind), uid, session, SESSION_TTL_MS);
  // 「最後に学習した」ポインタも更新
  writeLatestSession(uid, {
    topicId: session.topicId,
    kind: session.kind,
    savedAt: session.savedAt,
  });
}

export function clearSavedSession(
  uid: string | null,
  topicId: string,
  kind: 'fc' | 'quiz',
): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(buildKeyExport(sessionKey(topicId, kind), uid));
  } catch {
    /* ignore */
  }
  // クリアしたセッションが latest と一致するなら latest も消す
  const latest = readLatestSession(uid);
  if (latest && latest.topicId === topicId && latest.kind === kind) {
    try {
      window.localStorage.removeItem(buildKeyExport(LATEST_SESSION_KEY, uid));
    } catch {
      /* ignore */
    }
  }
}

// ---- latest session pointer ---------------------------------------------

const LATEST_SESSION_KEY = 'session:latest';

export interface LatestSessionRef {
  topicId: string;
  kind: 'fc' | 'quiz';
  savedAt: number;
}

export function readLatestSession(uid: string | null): LatestSessionRef | null {
  const hit = getCached<LatestSessionRef>(LATEST_SESSION_KEY, uid);
  if (!hit || hit.isStale) return null;
  const v = hit.value;
  if (!v || typeof v !== 'object') return null;
  if (typeof v.topicId !== 'string' || (v.kind !== 'fc' && v.kind !== 'quiz')) return null;
  return v;
}

export function writeLatestSession(uid: string | null, ref: LatestSessionRef): void {
  setCached(LATEST_SESSION_KEY, uid, ref, SESSION_TTL_MS);
}

// 内部 buildKey を再露出（同モジュール内なので import 経路を統一）
function buildKeyExport(key: string, uid: string | null): string {
  return `${NS_PREFIX}${uid ?? '_anon'}:${key}`;
}
