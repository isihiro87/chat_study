/**
 * AI ティア判定（純粋ロジック）。
 *
 * ここは **高額請求の最大の事故点**。「つづもん未登録ユーザーが paid になる」＝
 * 無料Bot の 3,000 フォロワーが上位モデルを使える状態になるため、独立した
 * モジュールに切り出して単体テストで固める（`requirements.md` §3-b）。
 *
 * 判定は取得済みの `users/{uid}` スナップショットだけで行う＝**追加 Firestore read ゼロ**
 * （`tsudumonCore.evaluateTsudumonAccess` と同じ規律）。
 *
 * 二重ゲート:
 *   1. どちらの Bot から呼ばれたか（つづもんBot以外は常に free）
 *   2. つづもんライセンス/体験が有効か
 * 片方だけでは paid にしない。
 */

import { evaluateTsudumonAccess } from './tsudumonCore';

/** 呼び出し元の Bot。`aiChat.AiChatBotKind` と対応する。 */
export type AiBotKind = 'ichimon' | 'tsudumon';

/**
 * AI の機能ティア。
 * - `free`: 現行と同一の挙動（最安モデル・1日40回・履歴6ターン）
 * - `paid`: 個別サポート（計画・分析・相談・長期記憶・教材接地）を使える
 */
export type AiTier = 'free' | 'paid';

/**
 * 課金の実体。`paid` の中でも**予算の大きさを変える**ために区別する。
 * - `license`: 月額1,280円のサブスク購入者 → 通常予算
 * - `trial`: 3日間無料お試し（`tsudumon.source === 'trial'`）→ **小さい予算**
 *   （体験は 1 uid 1 回・72時間で失効するが、上位モデルを無制限に使わせない）
 * - `none`: 権利なし
 */
export type AiEntitlement = 'license' | 'trial' | 'none';

export interface TierResolution {
  tier: AiTier;
  entitlement: AiEntitlement;
  /** free に落ちた理由（ログ・監視用。paid のときは undefined） */
  freeReason?: 'bot' | 'no_license' | 'expired' | 'unknown';
}

export interface TierInput {
  /** 呼び出し元の Bot */
  bot: AiBotKind;
  /** users/{uid}.tsudumon の生値（Timestamp のまま渡してよい） */
  tsudumonRaw: unknown;
  nowMs: number;
}

const FREE: TierResolution = { tier: 'free', entitlement: 'none' };

/**
 * ティアを判定する。**例外を投げない**（判定不能なら free ＝安全側に倒す）。
 */
export function resolveTier(input: TierInput): TierResolution {
  // ゲート1: つづもんBot以外は常に free。
  // 一問一答Bot（3,000フォロワー・無料）が paid になる経路を作らない。
  if (input?.bot !== 'tsudumon') {
    return { ...FREE, freeReason: 'bot' };
  }

  let access: ReturnType<typeof evaluateTsudumonAccess>;
  try {
    // grade は null（学年不問）。AI チャットは単元固有のゲートではない。
    access = evaluateTsudumonAccess(input.tsudumonRaw, null, input.nowMs);
  } catch {
    // 判定でこけたら free（安全側）。ここを paid に倒すと請求事故になる。
    return { ...FREE, freeReason: 'unknown' };
  }

  if (access === 'expired') return { ...FREE, freeReason: 'expired' };
  if (access !== 'ok') return { ...FREE, freeReason: 'no_license' };

  return {
    tier: 'paid',
    entitlement: isTrialEntitlement(input.tsudumonRaw) ? 'trial' : 'license',
  };
}

/** `tsudumon.source === 'trial'`（3日間無料お試し）かどうか。 */
function isTrialEntitlement(raw: unknown): boolean {
  if (!raw || typeof raw !== 'object') return false;
  return (raw as { source?: unknown }).source === 'trial';
}

/**
 * ティア＋権利から「月次予算の倍率」を返す。
 * 体験は通常予算の 1/7（3日間で使い切っても月額の被害が小さい水準）。
 * `free` は AI 予算制の対象外（回数制のまま）なので 0 を返す。
 */
export function budgetScale(resolution: TierResolution): number {
  if (resolution.tier !== 'paid') return 0;
  return resolution.entitlement === 'trial' ? 1 / 7 : 1;
}
