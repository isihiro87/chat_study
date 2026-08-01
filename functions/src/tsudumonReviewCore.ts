/**
 * ニガテの間隔反復（spaced repetition）の純粋ロジック。
 *
 * 設計の正本: `pdf-workbook/docs/つづもん-機能ロードマップ.md` フェーズD
 *
 * ## push を増やさずに実現する
 * つづもんの約束は **1日2通まで**（①今日の1単元 ②おつかれさま）。
 * 「3日後にもう一度」のために3通目を送ると、その約束が壊れてブロックされる。
 * そこで**既存の2通に相乗り**する:
 *   - 「今日の1単元」の末尾に「◯◯に、まちがえたままの問題が◯問のこっているよ」を添える
 *   - 解き直しは既存の「復習する」（トーク内で1問ずつ）で完結する
 * このファイルは「**いま声をかけるべき単元はどれか**」だけを決める。
 *
 * ## なぜ単元単位なのか（問題単位ではなく）
 * サーバが持っているのは `wrongNow`（間違えたままの設問ID）と、単元ごとの
 * `lastAt`（最後にやった時刻）だけで、**設問ごとの「いつ間違えたか」は無い**。
 * 単元単位でも「3日後・1週間後・2週間後にもう一度」の効果は出るので、
 * 追加のデータ収集をせずに始められる形にしてある（問題単位はフェーズ2）。
 *
 * ## 状態
 * `tsudumonReview/{uid}` に `{ units: { '08': { stage, lastPromptedAt } } }`。
 * `stage` は 0→1→2 と進み、それぞれ 3日後・1週間後・2週間後に声をかける。
 * 声をかけた時点で stage を1つ進めるので、**同じ単元を毎日催促しない**。
 */

import type { TsudumonProgress, UnitProgress } from './tsudumonProgressCore';

/** 何日後にもう一度声をかけるか（段階ごと）。 */
export const REVIEW_INTERVALS_DAYS: readonly number[] = [3, 7, 14];

const DAY_MS = 24 * 60 * 60 * 1000;

/** `tsudumonReview/{uid}` の形。 */
export interface ReviewState {
  units?: Record<string, { stage?: number; lastPromptedAt?: number }>;
}

export interface DueUnit {
  unitNo: string;
  /** 間違えたまま残っている問題数 */
  wrong: number;
  /** いまの段階（0=3日後 / 1=1週間後 / 2=2週間後） */
  stage: number;
  /** 予定日を何日オーバーしているか（大きいほど先に声をかける） */
  overdueDays: number;
}

/** 段階を配列の範囲に収める（データが壊れていても落ちない）。 */
export function normalizeStage(value: unknown): number {
  const n =
    typeof value === 'number' && Number.isFinite(value) ? Math.trunc(value) : 0;
  return Math.min(REVIEW_INTERVALS_DAYS.length - 1, Math.max(0, n));
}

/**
 * いま声をかけるべき単元を、急ぎの順に返す。
 *
 * 条件:
 *   - 間違えたままの問題が残っている（`wrongNow`）
 *   - 最後にやってから、その段階の間隔（3/7/14日）が過ぎている
 *   - 前回声をかけてから、少なくとも同じ間隔だけ空いている（毎日催促しない）
 */
export function dueReviewUnits(
  progress: TsudumonProgress | undefined,
  state: ReviewState | undefined,
  nowMs: number
): DueUnit[] {
  const units = progress?.units ?? {};
  const out: DueUnit[] = [];
  for (const [unitNo, u] of Object.entries(units)) {
    const wrong = (u as UnitProgress)?.wrongNow?.length ?? 0;
    if (wrong <= 0) continue;
    const st = state?.units?.[unitNo];
    const stage = normalizeStage(st?.stage);
    const intervalMs = REVIEW_INTERVALS_DAYS[stage] * DAY_MS;
    const lastAt = (u as UnitProgress)?.lastAt ?? 0;
    if (!lastAt) continue;

    // 学習からの経過が間隔に達していなければ、まだ早い（忘れる前に出しても効かない）。
    const since = nowMs - lastAt;
    if (since < intervalMs) continue;
    // 直前に声をかけたばかりなら、間隔ぶん空けるまで待つ。
    const prompted = st?.lastPromptedAt ?? 0;
    if (prompted && nowMs - prompted < intervalMs) continue;

    out.push({
      unitNo,
      wrong,
      stage,
      overdueDays: Math.floor((since - intervalMs) / DAY_MS),
    });
  }
  // 予定日を大きく過ぎているもの → 残り問題数が多いもの、の順。
  out.sort((a, b) => b.overdueDays - a.overdueDays || b.wrong - a.wrong);
  return out;
}

/**
 * 声をかけたあとの状態を作る（段階を1つ進める）。
 * 最終段階（2週間後）に達したらそのまま留まる——間違いが残っている限り、
 * 2週間おきに思い出す機会を作りつづける。
 */
export function markPrompted(
  state: ReviewState | undefined,
  unitNo: string,
  nowMs: number
): ReviewState {
  const units = { ...(state?.units ?? {}) };
  const stage = normalizeStage(units[unitNo]?.stage);
  units[unitNo] = {
    stage: Math.min(REVIEW_INTERVALS_DAYS.length - 1, stage + 1),
    lastPromptedAt: nowMs,
  };
  return { units };
}

/**
 * 全問正解になった単元の予定を消す（次に間違えたら 3日後から数え直す）。
 * 記録が残り続けると「もう解けている単元」に何度も声をかけてしまう。
 */
export function clearSolved(
  state: ReviewState | undefined,
  progress: TsudumonProgress | undefined
): ReviewState {
  const units = { ...(state?.units ?? {}) };
  let changed = false;
  for (const unitNo of Object.keys(units)) {
    const wrong = progress?.units?.[unitNo]?.wrongNow?.length ?? 0;
    if (wrong <= 0) {
      delete units[unitNo];
      changed = true;
    }
  }
  return changed ? { units } : { units };
}

/** 「今日の1単元」に添える1行（間隔反復の声かけ）。 */
export function buildReviewNudge(due: DueUnit, unitTitle: string): string {
  const when =
    due.stage === 0 ? '3日前' : due.stage === 1 ? '1週間ほど前' : '少し前';
  return (
    `📝 ${when}にやった「${unitTitle}」、まちがえたままの問題が${due.wrong}問のこってるよ。` +
    `\n忘れかけの今がいちばん効くタイミング。「復習する」って送ってくれたら、ここから出すね。`
  );
}
