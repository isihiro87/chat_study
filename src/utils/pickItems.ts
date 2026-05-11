import type { ItemStatsMap } from '../firebase/itemStats';

export type PickMode = 'random' | 'sequential';

/** 誤答多 tier の閾値: 正答率がこの未満なら Tier2 */
const LOW_ACCURACY_THRESHOLD = 0.5;

function tierOf(itemId: string, stats: ItemStatsMap): 0 | 1 | 2 {
  const s = stats.get(itemId);
  if (!s || s.attempts === 0) return 0; // Tier1: 未着手
  const accuracy = s.correct / s.attempts;
  if (accuracy < LOW_ACCURACY_THRESHOLD) return 1; // Tier2: 誤答多
  return 2; // Tier3: 正答多
}

function shuffleInPlace<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * 学習履歴に基づき、出題する items を選び並べる。
 *
 * - 各 item を Tier1（未着手）/ Tier2（誤答多）/ Tier3（その他）に分類
 * - tier 順に結合（Tier1 → Tier2 → Tier3）
 * - 各 tier 内: mode='random' ならシャッフル、'sequential' なら入力順を保つ
 * - excludeIds に含まれる id はスキップ（既出問題の除外）
 * - count='all' なら全件、それ以外は先頭 count 件を返す
 */
export function pickItems<T extends { id: string }>(
  items: readonly T[],
  stats: ItemStatsMap,
  count: number | 'all',
  mode: PickMode,
  excludeIds: ReadonlySet<string> = new Set(),
): T[] {
  const tiers: T[][] = [[], [], []];
  for (const it of items) {
    if (excludeIds.has(it.id)) continue;
    tiers[tierOf(it.id, stats)].push(it);
  }
  if (mode === 'random') {
    for (const t of tiers) shuffleInPlace(t);
  }
  const all = [...tiers[0], ...tiers[1], ...tiers[2]];
  if (count === 'all' || all.length <= count) return all;
  return all.slice(0, count);
}

/**
 * stats 内で attempts>0 な item の数を集計。Setup 画面のプリビュー用。
 */
export interface TierCounts {
  unseen: number;
  wrongHeavy: number;
  correctHeavy: number;
}

export function countTiers<T extends { id: string }>(
  items: readonly T[],
  stats: ItemStatsMap,
): TierCounts {
  const out: TierCounts = { unseen: 0, wrongHeavy: 0, correctHeavy: 0 };
  for (const it of items) {
    switch (tierOf(it.id, stats)) {
      case 0:
        out.unseen++;
        break;
      case 1:
        out.wrongHeavy++;
        break;
      case 2:
        out.correctHeavy++;
        break;
    }
  }
  return out;
}
