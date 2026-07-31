/**
 * 保護者に見せる学習サマリの組み立て（純粋ロジック）。
 * 設計: pdf-workbook/.steering/20260727-parent-handoff/design.md §6
 *
 * ## このファイルの最も重要な性質
 *
 * **保護者に出してよいデータの範囲を、このモジュールの入出力で固定する。**
 * つまり「レスポンスから削る」のではなく「そもそも組み立てられない」ようにする。
 *
 * 保護者に出さないもの（2026-07-27 ユーザー判断）:
 *   - つづ先生とのトークの内容・質問文・悩み相談
 *   - 記述問題の解答本文・AI採点の講評
 *   - **まちがえた問題**（問題文も、まちがいが残っている「件数」も出さない）
 *
 * 件数すら出さない理由: 出せば保護者は詰める材料に使い、子は「間違えると親に見られる」と
 * 学習する。するとわざと簡単な問題だけを解くようになり、学習データ自体が壊れる。
 * 精度の指標は**正答率だけ**に留める。
 *
 * この方針をコードで守るため、`tsudumonProgressCore` の `unitsNeedingReview` /
 * `topWrongQids` / `wrongLeft` は**このファイルから import しない**（テストで固定）。
 */
import { getJstDateString, jstDateDiffDays } from './streakState';
import { TSUDUMON_UNITS } from './tsudumonUnits';
import { toMillis } from './tsudumonInviteCore';
// 日別ログの実体は学習ログ側（tsudumonProgress.days）にある。ここは読むだけ。
// ⚠️ この import は `readStudyDayLogs` だけに使う。まちがい関連
//    （unitsNeedingReview / topWrongQids / wrongLeft）は**絶対に使わない**（下記の方針）。
import { readStudyDayLogs, type StudyDayLog } from './tsudumonProgressCore';

/** 「直近7日」の定義。 */
export const RECENT_WINDOW_DAYS = 7;

export { readStudyDayLogs };
export type { StudyDayLog };

export type ChildPlanState = 'trial' | 'active' | 'expired' | 'none';

export interface ChildPlan {
  state: ChildPlanState;
  /** 画面にそのまま出す文言 */
  label: string;
  /** Stripe Billing Portal を出せるか（customerId を持っているか） */
  canManage: boolean;
}

export interface ChildStudy {
  /** 直近7日で学習した日数（0〜7） */
  daysThisWeek: number;
  minutesThisWeek: number;
  minutesTotal: number;
  /** 1問でも解いた単元数 */
  unitsStarted: number;
  /** 全単元数（分母。19） */
  unitsTotal: number;
  answered: number;
  /** 正答率（%・整数）。1問も解いていなければ null */
  accuracy: number | null;
  /** 「きょう」「きのう」「3日前」。一度も学習していなければ null */
  lastStudiedLabel: string | null;
}

export interface ChildSummary {
  name: string;
  grade: string | null;
  plan: ChildPlan;
  study: ChildStudy;
}

/** 直近 N 日の集計（日数・分・問題数）。 */
export function summarizeRecentDays(
  logs: StudyDayLog[],
  nowMs: number,
  windowDays: number = RECENT_WINDOW_DAYS
): { days: number; minutes: number; answered: number } {
  const today = getJstDateString(new Date(nowMs));
  let days = 0;
  let ms = 0;
  let answered = 0;
  for (const log of logs) {
    const diff = jstDateDiffDays(log.d, today);
    // 0 = 今日、windowDays-1 = 7日前まで。未来日付（負）は壊れた値として無視する。
    if (diff < 0 || diff > windowDays - 1) continue;
    // 「学習した日」は時間か問題数のどちらかがあること（0分0問の記録は数えない）
    if (log.ms > 0 || log.a > 0) days += 1;
    ms += log.ms;
    answered += log.a;
  }
  return { days, minutes: Math.round(ms / 60000), answered };
}

/** 最後に学習した日の相対表現。 */
export function lastStudiedLabel(
  lastAtMs: number | null,
  nowMs: number
): string | null {
  if (!lastAtMs || !Number.isFinite(lastAtMs) || lastAtMs <= 0) return null;
  const diff = jstDateDiffDays(
    getJstDateString(new Date(lastAtMs)),
    getJstDateString(new Date(nowMs))
  );
  if (diff <= 0) return 'きょう';
  if (diff === 1) return 'きのう';
  if (diff < 7) return `${diff}日前`;
  if (diff < 14) return '1週間以上前';
  return '2週間以上前';
}

/** 契約状態の判定と表示文言。 */
export function buildChildPlan(
  tsudumonRaw: unknown,
  hasStripeCustomer: boolean,
  nowMs: number
): ChildPlan {
  const raw =
    tsudumonRaw && typeof tsudumonRaw === 'object'
      ? (tsudumonRaw as Record<string, unknown>)
      : null;
  const expiresAtMs = raw ? toMillis(raw.expiresAt) : null;
  const source = raw && typeof raw.source === 'string' ? raw.source : '';

  if (!raw || expiresAtMs === null) {
    return { state: 'none', label: 'まだ登録されていません', canManage: false };
  }
  if (nowMs >= expiresAtMs) {
    return {
      state: 'expired',
      label: `ご利用期間が終了しています（${dateLabel(expiresAtMs)}まで）`,
      canManage: hasStripeCustomer,
    };
  }
  if (source === 'trial') {
    const rest = Math.max(
      1,
      Math.ceil((expiresAtMs - nowMs) / (24 * 3600 * 1000))
    );
    return {
      state: 'trial',
      label: `無料体験中（あと${rest}日）`,
      canManage: false,
    };
  }
  return {
    state: 'active',
    label: `${dateLabel(expiresAtMs)}までご利用いただけます`,
    canManage: hasStripeCustomer,
  };
}

/**
 * 保護者に見せる子1人ぶんのサマリを組み立てる。
 *
 * @param userData `users/{childUid}` のデータ（丸ごと渡してよい。出す項目はここで絞る）
 * @param fallbackName 呼び名が未設定のときの表示（例: 「中2のお子さん」）
 */
export function buildChildSummary(
  userData: Record<string, unknown> | null,
  fallbackName: string,
  nowMs: number
): ChildSummary {
  const data = userData ?? {};
  const progress =
    data.tsudumonProgress && typeof data.tsudumonProgress === 'object'
      ? (data.tsudumonProgress as Record<string, unknown>)
      : null;
  const totals =
    progress && progress.totals && typeof progress.totals === 'object'
      ? (progress.totals as Record<string, unknown>)
      : {};

  const answered = numberOr(totals.answered, 0);
  const correct = numberOr(totals.correct, 0);
  const recent = summarizeRecentDays(readStudyDayLogs(progress), nowMs);

  const stripeTsudumon =
    data.stripeTsudumon && typeof data.stripeTsudumon === 'object'
      ? (data.stripeTsudumon as Record<string, unknown>)
      : null;
  const hasStripeCustomer = !!(
    stripeTsudumon && typeof stripeTsudumon.customerId === 'string'
  );

  const name =
    typeof data.tsudumonParentName === 'string' && data.tsudumonParentName
      ? data.tsudumonParentName
      : fallbackName;
  const grade = typeof data.grade === 'string' ? data.grade : null;

  return {
    name,
    grade,
    plan: buildChildPlan(data.tsudumon, hasStripeCustomer, nowMs),
    study: {
      daysThisWeek: recent.days,
      minutesThisWeek: recent.minutes,
      minutesTotal: Math.round(numberOr(totals.msTotal, 0) / 60000),
      unitsStarted: numberOr(totals.startedUnits, 0),
      unitsTotal: TSUDUMON_UNITS.length,
      answered,
      accuracy: answered > 0 ? Math.round((correct / answered) * 100) : null,
      lastStudiedLabel: lastStudiedLabel(readLastAt(progress), nowMs),
    },
  };
}

// ---------------------------------------------------------------------------
// 親子連携の判定（純粋）
// ---------------------------------------------------------------------------

/** 子1人につながれる保護者の上限。 */
export const MAX_PARENTS_PER_CHILD = 2;
/** 保護者1人につながれる子の上限（きょうだい）。 */
export const MAX_CHILDREN_PER_PARENT = 4;

export interface LinkedChild {
  uid: string;
  name: string;
  grade: string | null;
  linkedAt: unknown;
}

export interface LinkedParent {
  uid: string;
  linkedAt: unknown;
}

export interface ParentLinkInput {
  parentUid: string;
  childUid: string;
  childName: string;
  childGrade: string | null;
  /** 連携時刻（Firestore Timestamp などをそのまま入れる） */
  linkedAt: unknown;
}

export type ParentLinkResult =
  | {
      ok: true;
      /** 既に連携済みだった（push も funnel も再実行しない） */
      already: boolean;
      children: LinkedChild[];
      parents: LinkedParent[];
    }
  | {
      ok: false;
      reason: 'self_link' | 'too_many_children' | 'too_many_parents';
    };

/**
 * 親子連携の結果を決める（副作用なし）。Firestore への書き込みは呼び出し側。
 *
 * ここを純粋にしておく理由は、**冪等性と上限**がこの機能でいちばん壊れやすく、
 * かつトランザクションの中に埋めるとテストできなくなるため。
 *
 * - 同じカードを2回開く → `already: true`。積み増さず、表示名だけ最新化する
 * - きょうだいの2枚目 → 子が増える
 * - 上限超過 → 理由つきで拒否
 */
export function resolveParentLink(
  parentRaw: unknown,
  childRaw: unknown,
  input: ParentLinkInput
): ParentLinkResult {
  const { parentUid, childUid, childName, childGrade, linkedAt } = input;

  // 同じ端末で子がログインしたまま保護者が操作した場合など。
  if (!parentUid || !childUid || parentUid === childUid) {
    return { ok: false, reason: 'self_link' };
  }

  const children = readLinkedChildren(parentRaw);
  const parents = readLinkedParents(childRaw);

  const already = children.some((c) => c.uid === childUid);
  if (!already && children.length >= MAX_CHILDREN_PER_PARENT) {
    return { ok: false, reason: 'too_many_children' };
  }
  const parentAlready = parents.some((p) => p.uid === parentUid);
  if (!parentAlready && parents.length >= MAX_PARENTS_PER_CHILD) {
    return { ok: false, reason: 'too_many_parents' };
  }

  const nextChildren = already
    ? children.map((c) =>
        c.uid === childUid ? { ...c, name: childName, grade: childGrade } : c
      )
    : [
        ...children,
        { uid: childUid, name: childName, grade: childGrade, linkedAt },
      ];
  const nextParents = parentAlready
    ? parents
    : [...parents, { uid: parentUid, linkedAt }];

  return { ok: true, already, children: nextChildren, parents: nextParents };
}

/** 保護者ドキュメントから連携中の子を読む（壊れた要素は捨てる）。 */
export function readLinkedChildren(parentRaw: unknown): LinkedChild[] {
  const raw =
    parentRaw && typeof parentRaw === 'object'
      ? (parentRaw as Record<string, unknown>).tsudumonChildren
      : null;
  if (!Array.isArray(raw)) return [];
  return raw
    .filter(
      (c): c is Record<string, unknown> =>
        !!c &&
        typeof c === 'object' &&
        typeof (c as { uid?: unknown }).uid === 'string'
    )
    .map((c) => ({
      uid: c.uid as string,
      name: typeof c.name === 'string' ? c.name : '',
      grade: typeof c.grade === 'string' ? c.grade : null,
      linkedAt: c.linkedAt ?? null,
    }));
}

/** 子ドキュメントから連携中の保護者を読む。 */
export function readLinkedParents(childRaw: unknown): LinkedParent[] {
  const raw =
    childRaw && typeof childRaw === 'object'
      ? (childRaw as Record<string, unknown>).tsudumonParents
      : null;
  if (!Array.isArray(raw)) return [];
  return raw
    .filter(
      (p): p is Record<string, unknown> =>
        !!p &&
        typeof p === 'object' &&
        typeof (p as { uid?: unknown }).uid === 'string'
    )
    .map((p) => ({ uid: p.uid as string, linkedAt: p.linkedAt ?? null }));
}

/** 連携を解除した結果（子から解除する）。副作用なし。 */
export function resolveParentUnlink(childRaw: unknown): {
  parentUids: string[];
} {
  return { parentUids: readLinkedParents(childRaw).map((p) => p.uid) };
}

/** 呼び名が未設定のときの既定表示。本名は保存しないので学年で代替する。 */
export function fallbackChildName(_grade?: unknown): string {
  // 学年は付けない（2026-07-31）。保護者は自分の子の学年を知っているので
  // 「中2の」は情報を足さないうえ、users.grade が古いと嘘になる。
  // きょうだいの見分けは、保護者がダッシュボードの「表示名を変える」で付ける。
  return 'お子さん';
}

/** 最後に学習した時刻（全単元の lastAt の最大）。 */
function readLastAt(progress: Record<string, unknown> | null): number | null {
  if (!progress) return null;
  const direct = toMillis(progress.updatedAt);
  if (direct !== null) return direct;
  const units = progress.units;
  if (!units || typeof units !== 'object') return null;
  let max = 0;
  for (const unit of Object.values(units as Record<string, unknown>)) {
    if (!unit || typeof unit !== 'object') continue;
    const lastAt = numberOr((unit as Record<string, unknown>).lastAt, 0);
    if (lastAt > max) max = lastAt;
  }
  return max > 0 ? max : null;
}

function numberOr(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

/** 「M月D日」（JST）。 */
function dateLabel(ms: number): string {
  const d = new Date(ms + 9 * 3600 * 1000);
  return `${d.getUTCMonth() + 1}月${d.getUTCDate()}日`;
}
