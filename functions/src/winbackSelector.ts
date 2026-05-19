/**
 * Win-back バリエーション選択ロジック（重複回避）。
 *
 * 設計（requirements.md §B-2）:
 *   - 過去 90 日に送信したバリエーション ID は再選択しない
 *   - 全バリエーション送信済みなら最も古い送信日のものから再利用
 *   - 候補が複数残っている場合はランダム選択（同じユーザーが連続で同じトーンを
 *     受けにくくする副次効果も狙う）
 */

import type { WinbackTouchpoint } from "./userDocTypes";
import {
  getVariationsFor,
  type WinbackVariation,
} from "./winbackVariations";

export interface WinbackHistoryEntryLite {
  variationId: string;
  sentAt: Date;
}

export interface SelectWinbackInput {
  touchpoint: WinbackTouchpoint;
  history: WinbackHistoryEntryLite[];
  now: Date;
  windowDays?: number;
  /** ランダム関数を差し替えるためのフック（テスト用） */
  random?: () => number;
}

const DEFAULT_WINDOW_DAYS = 90;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

/**
 * 次に送信すべきバリエーションを選択する。
 *
 * @returns 選ばれた WinbackVariation
 * @throws 該当 touchpoint にバリエーションが 1 件もない場合（実装ミスでない限り起きない）
 */
export function selectNextWinbackVariation(
  input: SelectWinbackInput
): WinbackVariation {
  const {
    touchpoint,
    history,
    now,
    windowDays = DEFAULT_WINDOW_DAYS,
    random = Math.random,
  } = input;

  const variations = getVariationsFor(touchpoint);
  if (variations.length === 0) {
    throw new Error(
      `selectNextWinbackVariation: no variations defined for ${touchpoint}`
    );
  }

  const windowMs = windowDays * MS_PER_DAY;
  const recentlySentIds = new Set(
    history
      .filter((h) => now.getTime() - h.sentAt.getTime() < windowMs)
      .map((h) => h.variationId)
  );

  // 1. 直近 windowDays 以内に送っていない候補から選ぶ
  const fresh = variations.filter((v) => !recentlySentIds.has(v.id));
  if (fresh.length > 0) {
    return fresh[Math.floor(random() * fresh.length)];
  }

  // 2. 全候補が直近送信済み → 最も古い送信日のものを返す
  const sentAtById = new Map<string, number>();
  for (const h of history) {
    const prev = sentAtById.get(h.variationId);
    if (prev === undefined || h.sentAt.getTime() < prev) {
      sentAtById.set(h.variationId, h.sentAt.getTime());
    }
  }

  let oldest: WinbackVariation | null = null;
  let oldestMs = Infinity;
  for (const v of variations) {
    const last = sentAtById.get(v.id);
    if (last === undefined) {
      // 履歴にない（理論上ここには来ないが念のため fresh として扱う）
      return v;
    }
    if (last < oldestMs) {
      oldestMs = last;
      oldest = v;
    }
  }

  // variations.length >= 1 が保証されているため必ず非 null
  return oldest ?? variations[0];
}
