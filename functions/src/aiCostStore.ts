/**
 * AI コストの集計（読み書き）。
 *
 * 2系統を持つ:
 *   - **ユーザー分**: `users/{uid}.aiBudget` … 会話のホットパスでは**取得済みの user doc から
 *     読むだけ**なので追加 Firestore read はゼロ。
 *   - **全体分**: `aiCostStats/{YYYY-MM}` … サービス全体のキャップ（②層）用。
 *     毎ターン読むと read 増＋hot doc への write 競合になるため、
 *     **モジュールレベルの TTL キャッシュ（60秒）**で参照する
 *     （`lineWebhook.getGradeQuestionDocs` と同じ思想。CLAUDE.md の read 規律）。
 *
 * 書き込みは `deliveryStats.recordPushDelivery` と同じ `FieldValue.increment` パターン。
 * ⚠️ `set + merge` はドット記法をネストパスに展開しない（literal な top-level フィールドに
 * なる）既知の罠があるため、**ネストしたオブジェクトを直接渡す**。
 *
 * 設計: `.steering/20260725-ai-personal-support/design.md` §2-5
 */

import type { CostState } from './aiCostCore';
import type { AiTier } from './aiTier';
import type { LlmPurpose } from './llmModelResolver';
import type { CostBreakdown } from './llmPrices';

/** 全体集計が読めないときのエラー。呼び出し側は `deny` に倒す（＝AI を呼ばない）。 */
export class CostStateUnavailableError extends Error {
  constructor(cause?: unknown) {
    super(`AI cost state is unavailable: ${String(cause)}`);
    this.name = 'CostStateUnavailableError';
  }
}

/** 全体集計キャッシュの有効期間。最悪この時間ぶんは超過し得る（許容する）。 */
export const GLOBAL_CACHE_TTL_MS = 60_000;

/**
 * Firestore 読み取りが失敗したとき、この時間までは古いキャッシュで代替する。
 * 一時的な障害で**全ユーザーの AI が止まる**のを避けるため。
 * これを超えたら `CostStateUnavailableError`（＝安全側の停止）。
 */
export const GLOBAL_STALE_FALLBACK_MAX_MS = 600_000;

/** フラッド検知のために保持するタイムスタンプ件数。 */
export const RECENT_TIMES_KEEP = 12;

// ---------------------------------------------------------------------------
// JST キー
// ---------------------------------------------------------------------------

/** JST の YYYY-MM-DD。 */
export function jstDayKey(date: Date): string {
  const jst = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
}

/** JST の YYYY-MM。 */
export function jstMonthKey(date: Date): string {
  return jstDayKey(date).slice(0, 7);
}

// ---------------------------------------------------------------------------
// ユーザー分（users/{uid}.aiBudget）
// ---------------------------------------------------------------------------

/** `users/{uid}.aiBudget` の想定形。 */
export interface AiBudgetSnapshot {
  /** 集計対象の JST 月（YYYY-MM）。当月と違えば月次は 0 扱い */
  monthJST?: string;
  monthJpy?: number;
  /** 集計対象の JST 日（YYYY-MM-DD）。当日と違えば日次は 0 扱い */
  dayJST?: string;
  dayJpy?: number;
  dayCount?: number;
  /** 当月のモデル別内訳 */
  byModel?: Record<string, number>;
  /** 当月の用途別内訳 */
  byPurpose?: Record<string, number>;
  /** 直近メッセージ時刻（フラッド検知用・最大 RECENT_TIMES_KEEP 件） */
  recentMessageTimesMs?: number[];
}

/**
 * user doc の `aiBudget` から、当月・当日の使用量を取り出す（純粋関数）。
 * 月・日が変わっていれば 0 にリセットして返す。
 */
export function readUserBudget(
  raw: unknown,
  now: Date
): {
  monthJpy: number;
  dayJpy: number;
  dayCount: number;
  recentMessageTimesMs: number[];
} {
  const b = (raw ?? {}) as AiBudgetSnapshot;
  const sameMonth = b.monthJST === jstMonthKey(now);
  const sameDay = b.dayJST === jstDayKey(now);
  return {
    monthJpy: sameMonth ? safeNumber(b.monthJpy) : 0,
    dayJpy: sameDay ? safeNumber(b.dayJpy) : 0,
    dayCount: sameDay ? safeNumber(b.dayCount) : 0,
    recentMessageTimesMs: Array.isArray(b.recentMessageTimesMs)
      ? b.recentMessageTimesMs.filter(
          (t): t is number => typeof t === 'number' && Number.isFinite(t)
        )
      : [],
  };
}

/** 数値以外・NaN は 0（「読めなかった」ではなく「使っていない」として扱える形だけ通す）。 */
function safeNumber(v: unknown): number {
  return typeof v === 'number' && Number.isFinite(v) && v >= 0 ? v : 0;
}

/**
 * 会話履歴から「直前にユーザーが送ったテキスト」を取り出す（同一反復の検知用）。
 * `aiChat.history` は user/model 交互なので、末尾から最初の user ターンを探す。
 */
export function lastUserTextFromHistory(
  history: Array<{ role: string; text: string }> | undefined
): string | undefined {
  if (!Array.isArray(history)) return undefined;
  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i]?.role === 'user') return history[i].text;
  }
  return undefined;
}

// ---------------------------------------------------------------------------
// 全体分（aiCostStats/{YYYY-MM}）— TTL キャッシュつき
// ---------------------------------------------------------------------------

interface GlobalCacheEntry {
  monthKey: string;
  dayKey: string;
  monthJpy: number;
  dayJpy: number;
  /** 無料ティアの当月累計（`byTier.free`） */
  freeMonthJpy: number;
  /** 無料ティアの当日累計（`byTierDay[dayKey].free`） */
  freeDayJpy: number;
  fetchedAtMs: number;
}

/** Cloud Functions のインスタンス再利用に乗せるモジュールレベルキャッシュ。 */
let globalCache: GlobalCacheEntry | null = null;

/** テスト用: キャッシュを消す。 */
export function __resetGlobalCostCache(): void {
  globalCache = null;
}

/** テスト用: キャッシュを差し込む（無料ティア分は省略可＝0）。 */
export function __seedGlobalCostCache(
  entry: Omit<GlobalCacheEntry, 'freeMonthJpy' | 'freeDayJpy'> &
    Partial<Pick<GlobalCacheEntry, 'freeMonthJpy' | 'freeDayJpy'>>
): void {
  globalCache = { freeMonthJpy: 0, freeDayJpy: 0, ...entry };
}

/**
 * 全体コストを取得する（TTL キャッシュ経由）。
 *
 * - キャッシュが新鮮ならそれを返す（Firestore read ゼロ）
 * - 期限切れなら 1 read して更新
 * - read が失敗したら、`GLOBAL_STALE_FALLBACK_MAX_MS` 以内の古いキャッシュで代替。
 *   それも無ければ `CostStateUnavailableError`（＝呼び出し側が AI を止める）
 */
export async function loadGlobalCost(
  now: Date,
  deps?: { fetchDoc?: () => Promise<Record<string, unknown> | undefined> }
): Promise<{
  monthJpy: number;
  dayJpy: number;
  /** 無料ティアの当月累計（`evaluateFreeGate` のサブキャップ用） */
  freeMonthJpy: number;
  /** 無料ティアの当日累計（同上） */
  freeDayJpy: number;
  fromCache: boolean;
}> {
  const monthKey = jstMonthKey(now);
  const dayKey = jstDayKey(now);
  const nowMs = now.getTime();

  if (
    globalCache &&
    globalCache.monthKey === monthKey &&
    globalCache.dayKey === dayKey &&
    nowMs - globalCache.fetchedAtMs < GLOBAL_CACHE_TTL_MS
  ) {
    return {
      monthJpy: globalCache.monthJpy,
      dayJpy: globalCache.dayJpy,
      freeMonthJpy: globalCache.freeMonthJpy,
      freeDayJpy: globalCache.freeDayJpy,
      fromCache: true,
    };
  }

  try {
    const fetchDoc = deps?.fetchDoc ?? (() => fetchGlobalDoc(monthKey));
    const data = await fetchDoc();
    const monthJpy = safeNumber(data?.totalJpy);
    const byDay = (data?.byDay ?? {}) as Record<string, unknown>;
    const dayJpy = safeNumber(byDay[dayKey]);
    // ティア別。`byTierDay` は 2026-08-06 以降に書かれ始めるので、
    // 遡及分は 0 のまま（＝上限に当たらない）で問題ない。
    const byTier = (data?.byTier ?? {}) as Record<string, unknown>;
    const freeMonthJpy = safeNumber(byTier.free);
    const byTierDay = (data?.byTierDay ?? {}) as Record<string, unknown>;
    const todayTier = (byTierDay[dayKey] ?? {}) as Record<string, unknown>;
    const freeDayJpy = safeNumber(todayTier.free);
    globalCache = {
      monthKey,
      dayKey,
      monthJpy,
      dayJpy,
      freeMonthJpy,
      freeDayJpy,
      fetchedAtMs: nowMs,
    };
    return { monthJpy, dayJpy, freeMonthJpy, freeDayJpy, fromCache: false };
  } catch (error) {
    // 古いキャッシュで代替できるならする（一時障害で全停止させない）。
    if (
      globalCache &&
      globalCache.monthKey === monthKey &&
      nowMs - globalCache.fetchedAtMs < GLOBAL_STALE_FALLBACK_MAX_MS
    ) {
      console.warn(
        '[aiCostStore] global cost read failed; using stale cache:',
        error
      );
      const sameDay = globalCache.dayKey === dayKey;
      return {
        monthJpy: globalCache.monthJpy,
        // 日付が変わっていれば当日分は不明なので 0 ではなく月次を流用しない。
        dayJpy: sameDay ? globalCache.dayJpy : 0,
        freeMonthJpy: globalCache.freeMonthJpy,
        freeDayJpy: sameDay ? globalCache.freeDayJpy : 0,
        fromCache: true,
      };
    }
    throw new CostStateUnavailableError(error);
  }
}

async function fetchGlobalDoc(
  monthKey: string
): Promise<Record<string, unknown> | undefined> {
  const { db } = await getDb();
  const snap = await db.doc(`aiCostStats/${monthKey}`).get();
  return snap.data();
}

// ---------------------------------------------------------------------------
// 状態のまとめ取り（evaluateGate へ渡す形）
// ---------------------------------------------------------------------------

/**
 * `evaluateGate` に渡す `CostState` を組み立てる。
 * user doc は**取得済みのものを渡す**（追加 read ゼロ）。
 * 全体分だけ TTL キャッシュ経由で読む。
 *
 * @throws {CostStateUnavailableError} 全体分が取得できず古いキャッシュも無い場合
 */
export async function loadCostState(opts: {
  userData: Record<string, unknown> | undefined;
  userText?: string;
  now: Date;
  deps?: { fetchDoc?: () => Promise<Record<string, unknown> | undefined> };
}): Promise<CostState> {
  const { monthJpy, dayJpy, dayCount, recentMessageTimesMs } = readUserBudget(
    opts.userData?.aiBudget,
    opts.now
  );
  const global = await loadGlobalCost(opts.now, opts.deps);
  const aiChat = opts.userData?.aiChat as
    | { history?: Array<{ role: string; text: string }> }
    | undefined;

  return {
    globalMonthJpy: global.monthJpy,
    globalDayJpy: global.dayJpy,
    userMonthJpy: monthJpy,
    userDayJpy: dayJpy,
    userDayCount: dayCount,
    recentMessageTimesMs,
    lastUserText: lastUserTextFromHistory(aiChat?.history),
  };
}

// ---------------------------------------------------------------------------
// 計上（書き込み）
// ---------------------------------------------------------------------------

export interface RecordCostInput {
  /**
   * 計上先のユーザー。**省略すると全体集計のみ**に計上する
   * （月末レポート・記述採点などユーザー予算と別系統の単発生成用）。
   * 全体キャップ（②層）には必ず載るので、どの経路の支出も見逃さない。
   */
  uid?: string;
  purpose: LlmPurpose;
  cost: CostBreakdown;
  now: Date;
  /** 直近メッセージ時刻の更新に使う（フラッド検知） */
  recentMessageTimesMs?: number[];
  /**
   * どのティアの支出か（`aiCostStats.byTier` の内訳用）。
   * 省略すると内訳を書かない（既存の単発生成の呼び出し元は無影響）。
   * 無料Bot（3,000人）と有料Botの支出を**分けて見る**ために使う。
   */
  tier?: AiTier;
}

/**
 * 1 回の LLM 呼び出しぶんを計上する。
 *
 * - `users/{uid}.aiBudget`（当月・当日・内訳）
 * - `aiCostStats/{YYYY-MM}`（全体・日別・モデル別・用途別）
 *
 * 月・日が変わっていたら**加算ではなく上書き**でリセットする
 * （`FieldValue.increment` だと前月の値に足してしまうため）。
 *
 * 失敗しても throw しない（返信は済んでいるのでログのみ）。ただし
 * **連続失敗は上限が効かなくなる兆候**なので ERROR で残す。
 */
export async function recordCost(input: RecordCostInput): Promise<void> {
  const monthKey = jstMonthKey(input.now);
  const dayKey = jstDayKey(input.now);
  const jpy = input.cost.costJpy;

  // 全体キャッシュにも即座に反映しておく（TTL 内の後続呼び出しが過小評価しないように）。
  // ⚠️ 無料ティアは1分間に何十ターンも走るので、ここを更新しないと
  //    TTL（60秒）のあいだ上限判定が古い値のままになり、キャップを踏み越える。
  if (globalCache && globalCache.monthKey === monthKey) {
    globalCache.monthJpy += jpy;
    if (globalCache.dayKey === dayKey) globalCache.dayJpy += jpy;
    if (input.tier === 'free') {
      globalCache.freeMonthJpy += jpy;
      if (globalCache.dayKey === dayKey) globalCache.freeDayJpy += jpy;
    }
  }

  try {
    const { db, FieldValue } = await getDb();
    await Promise.all([
      // uid が無い単発生成はユーザー予算に載せない（全体キャップだけに載せる）。
      input.uid
        ? writeUserBudget(db, FieldValue, input, monthKey, dayKey, jpy)
        : Promise.resolve(),
      writeGlobalStats(db, FieldValue, input, monthKey, dayKey, jpy),
    ]);
  } catch (error) {
    console.error('[aiCostStore] recordCost failed (limits may drift):', error);
  }
}

async function writeUserBudget(
  db: FirebaseFirestore.Firestore,
  FieldValue: typeof import('firebase-admin/firestore').FieldValue,
  input: RecordCostInput,
  monthKey: string,
  dayKey: string,
  jpy: number
): Promise<void> {
  if (!input.uid) return; // 呼び出し側でガードしているが二重に守る
  const ref = db.doc(`users/${input.uid}`);
  // 月・日の境界を跨いだかを判定するため、書き込み前の値をトランザクションで見る。
  // user doc は他の処理も書くので、aiBudget フィールドだけを対象にする。
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const prev = (snap.data()?.aiBudget ?? {}) as AiBudgetSnapshot;
    const sameMonth = prev.monthJST === monthKey;
    const sameDay = prev.dayJST === dayKey;

    const byModel = sameMonth ? { ...(prev.byModel ?? {}) } : {};
    byModel[input.cost.model] = (byModel[input.cost.model] ?? 0) + jpy;
    const byPurpose = sameMonth ? { ...(prev.byPurpose ?? {}) } : {};
    byPurpose[input.purpose] = (byPurpose[input.purpose] ?? 0) + jpy;

    const times = (
      input.recentMessageTimesMs ??
      (Array.isArray(prev.recentMessageTimesMs)
        ? prev.recentMessageTimesMs
        : [])
    ).slice(-RECENT_TIMES_KEEP);

    tx.set(
      ref,
      {
        aiBudget: {
          monthJST: monthKey,
          monthJpy: (sameMonth ? safeNumber(prev.monthJpy) : 0) + jpy,
          dayJST: dayKey,
          dayJpy: (sameDay ? safeNumber(prev.dayJpy) : 0) + jpy,
          dayCount: (sameDay ? safeNumber(prev.dayCount) : 0) + 1,
          byModel,
          byPurpose,
          recentMessageTimesMs: times,
          lastAt: FieldValue.serverTimestamp(),
        },
      },
      { mergeFields: ['aiBudget'] }
    );
  });
}

async function writeGlobalStats(
  db: FirebaseFirestore.Firestore,
  FieldValue: typeof import('firebase-admin/firestore').FieldValue,
  input: RecordCostInput,
  monthKey: string,
  dayKey: string,
  jpy: number
): Promise<void> {
  // 全体分は increment で十分（月キーがドキュメント ID なので月境界の混入が起きない）。
  // ⚠️ ドット記法ではなくネストしたオブジェクトを渡す（set+merge の既知の罠）。
  await db.doc(`aiCostStats/${monthKey}`).set(
    {
      yearMonth: monthKey,
      totalJpy: FieldValue.increment(jpy),
      callCount: FieldValue.increment(1),
      estimatedCount: FieldValue.increment(input.cost.estimated ? 1 : 0),
      byDay: { [dayKey]: FieldValue.increment(jpy) },
      byModel: { [input.cost.model]: FieldValue.increment(jpy) },
      byPurpose: { [input.purpose]: FieldValue.increment(jpy) },
      // ティア別の内訳（free = 一問一答3,000人 / paid = 課金者）。
      // `byTierDay` は「無料ティアの日次サブキャップ」の判定材料
      // （`aiCostCore.evaluateFreeGate`）。月次だけだと月初の急増を当日に止められない。
      ...(input.tier
        ? {
            byTier: { [input.tier]: FieldValue.increment(jpy) },
            byTierDay: {
              [dayKey]: { [input.tier]: FieldValue.increment(jpy) },
            },
          }
        : {}),
      lastUpdatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
}

/** firebase-admin の遅延初期化（`aiChat` と同パターン）。 */
async function getDb() {
  const { initializeApp, getApps } = await import('firebase-admin/app');
  const { getFirestore, FieldValue } = await import('firebase-admin/firestore');
  if (getApps().length === 0) {
    initializeApp();
  }
  return { db: getFirestore(), FieldValue };
}
