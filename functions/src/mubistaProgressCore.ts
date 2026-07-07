/**
 * ムビスタ学習イベントの純粋ロジック（副作用なし・重い依存なし）。
 *
 * `recordMubistaProgress.ts` がこの core を使って `users/{uid}.mubista` を更新する。
 * Firestore の `Timestamp` は import せず、時刻はエポックミリ秒（number）で扱う
 * ＝ Function 側で Timestamp と相互変換する（テストから安全に読める）。
 *
 * 統合設計: docs/ideas/mubista-line-shared-brain.md / .steering/20260707-mubista-progress-sink
 */

/** 単元サマリ（Timestamp をミリ秒にした core 版）。 */
export interface MubistaUnitCore {
  title: string;
  progress: number;
  viewedAtMs: number;
  quiz?: { asked: number; correct: number; wrongConcepts: string[] };
}

export interface MubistaWrongCore {
  unit: string;
  concept: string;
  atMs: number;
}

export interface MubistaProgressCore {
  lastViewedAtMs: number;
  lastUnit: string;
  units: Record<string, MubistaUnitCore>;
  recentWrong: MubistaWrongCore[];
  aiSummary?: string;
}

/** ムビスタから届く 1 件の学習イベント。 */
export type MubistaEvent =
  | { type: 'view'; unit: string; title: string; progress: number }
  | {
      type: 'quiz';
      unit: string;
      title: string;
      concept: string;
      correct: boolean;
    };

/** 上限（read/write コストと文脈トークンのバランス）。 */
export const MAX_UNITS = 40;
export const MAX_WRONG_CONCEPTS = 8; // 1 単元あたり
export const MAX_RECENT_WRONG = 10; // 横断
export const MAX_TITLE_LEN = 60;
export const MAX_CONCEPT_LEN = 40;
export const MAX_UNIT_ID_LEN = 80;

/** 単元 id の許容文字（英数・ハイフン・アンダースコア）。 */
const UNIT_ID_RE = /^[a-zA-Z0-9_-]{1,80}$/;

/** progress を 0..1 にクランプ（NaN は 0）。 */
export function clampProgress(v: unknown): number {
  const n = typeof v === 'number' ? v : Number(v);
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(1, n));
}

/** 文字列を安全化（trim＋長さ制限）。null/undefined は空文字。 */
export function safeStr(v: unknown, maxLen: number): string {
  if (typeof v !== 'string') return '';
  return v.trim().slice(0, maxLen);
}

/**
 * 受信イベントを検証・正規化する。無効なら null（＝呼び出し側で 400/no-op）。
 */
export function normalizeEvent(raw: unknown): MubistaEvent | null {
  if (!raw || typeof raw !== 'object') return null;
  const e = raw as Record<string, unknown>;
  const unit = safeStr(e.unit, MAX_UNIT_ID_LEN);
  const title = safeStr(e.title, MAX_TITLE_LEN);
  if (!UNIT_ID_RE.test(unit) || !title) return null;

  if (e.type === 'view') {
    return { type: 'view', unit, title, progress: clampProgress(e.progress) };
  }
  if (e.type === 'quiz') {
    const concept = safeStr(e.concept, MAX_CONCEPT_LEN);
    if (!concept) return null;
    return { type: 'quiz', unit, title, concept, correct: e.correct === true };
  }
  return null;
}

/** 空の初期状態。 */
function emptyProgress(): MubistaProgressCore {
  return { lastViewedAtMs: 0, lastUnit: '', units: {}, recentWrong: [] };
}

/**
 * イベントを適用して新しい状態を返す（元オブジェクトは変更しない）。
 * - view: progress は max を保持（下がらない）。title/viewedAt/lastUnit を更新。
 * - quiz: asked++、correct なら correct++、誤答は wrongConcepts と recentWrong に反映。
 * - units が MAX_UNITS 超なら viewedAt 昇順で間引き。
 */
export function applyMubistaEvent(
  prev: MubistaProgressCore | undefined,
  event: MubistaEvent,
  nowMs: number
): MubistaProgressCore {
  // ディープコピー（副作用なし）。
  const base = prev ? structuredClone(prev) : emptyProgress();
  const units = base.units;

  const cur: MubistaUnitCore = units[event.unit] ?? {
    title: event.title,
    progress: 0,
    viewedAtMs: 0,
  };
  cur.title = event.title;
  cur.viewedAtMs = nowMs;

  if (event.type === 'view') {
    cur.progress = Math.max(cur.progress, clampProgress(event.progress));
  } else {
    const quiz = cur.quiz ?? { asked: 0, correct: 0, wrongConcepts: [] };
    quiz.asked += 1;
    if (event.correct) {
      quiz.correct += 1;
    } else {
      if (!quiz.wrongConcepts.includes(event.concept)) {
        quiz.wrongConcepts.push(event.concept);
        if (quiz.wrongConcepts.length > MAX_WRONG_CONCEPTS) {
          quiz.wrongConcepts = quiz.wrongConcepts.slice(-MAX_WRONG_CONCEPTS);
        }
      }
      // 横断 recentWrong：同 unit+concept は最新へ更新（重複排除）、新しい順・上限。
      base.recentWrong = [
        { unit: event.unit, concept: event.concept, atMs: nowMs },
        ...base.recentWrong.filter(
          (w) => !(w.unit === event.unit && w.concept === event.concept)
        ),
      ].slice(0, MAX_RECENT_WRONG);
    }
    cur.quiz = quiz;
  }

  units[event.unit] = cur;
  base.lastUnit = event.unit;
  base.lastViewedAtMs = nowMs;

  // units 間引き（viewedAt 昇順で古いものを落とす）。
  const ids = Object.keys(units);
  if (ids.length > MAX_UNITS) {
    ids
      .sort((a, b) => units[a].viewedAtMs - units[b].viewedAtMs)
      .slice(0, ids.length - MAX_UNITS)
      .forEach((id) => delete units[id]);
  }

  return base;
}
