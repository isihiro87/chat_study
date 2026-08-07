/**
 * 配信を止めた期間の定義（**唯一の正本**）。
 *
 * ## なぜ独立したモジュールなのか
 * この情報は2箇所から要る:
 *   - `pushSuspension.ts` … いま push を止めるべきか
 *   - `userStatus.ts` … 止まっていた期間を差し引いた「実質の最終回答日」
 * ところが `pushSuspension` は `userStatus.daysBetweenJst` を使うので、
 * `userStatus` から `pushSuspension` を import すると**循環参照**になる。
 * そこで **何も import しないこのモジュール**に定義を置き、両者から参照する。
 *
 * ## なぜ「止めた期間」を status の判定から差し引くのか
 * 配信が止まっている間、生徒には**解く機会そのものが無い**。それを無回答として
 * 数えると、離れていない人まで dormant / churned に落ちる。
 * 2026-07 の停止では **64.5%（2,395人）が配信対象外**になり、朝6時・7時設定の
 * 約7割に「今日の1問」が届かなくなった（`docs/operations/log-snapshots/
 * 2026-08-03-post-suspension-status-collapse.md`）。
 *
 * ## ⚠️ 次に配信を止めるときは、必ずここに1行足す
 * 2026-08-08 まで、この救済は 2026-07 の期間が `userStatus.ts` に**直接
 * 書き込まれた一度きりの対応**だった。そのため次に月末の枠切れで止めると、
 * 同じ崩壊がそのまま再発する状態だった。ここに足せば
 * status 判定・「おかえり」フローの両方に自動で効く。
 */

export interface SuspensionWindow {
  /** 何の停止か（ログ・ドキュメント用の短い説明） */
  label: string;
  /** 停止の開始（JST） */
  start: Date;
  /** 停止の終了＝配信が戻る時刻（JST） */
  end: Date;
  /**
   * 判定の起点を繰り上げる先。**配信再開のおしらせを送った日**にする。
   * ここを基準に「再開後に解いたかどうか」で自然に status が動く。
   */
  baseline: Date;
  /**
   * 救済の対象にする「停止前の現役」の幅（日）。
   * 停止開始の N 日前までに回答があった人だけを救う
   * （何ヶ月も放置している人まで active に戻さないため）。
   */
  activeWindowDays: number;
}

/**
 * 配信を止めた期間の一覧（古い順）。
 *
 * 上限を停止**終了**にしているのは、**停止中に自分から「1問解く」で解いていた人**を
 * 取りこぼさないため。上限を停止開始にすると「7/1に解いた人は救われるのに
 * 7/27に解いた人は救われない」という逆転が起きる（2026-08-03 実測 211人が該当）。
 */
export const PUSH_SUSPENSION_WINDOWS: readonly SuspensionWindow[] = [
  {
    label: '2026-07 配信枠ひっ迫',
    start: new Date('2026-07-26T00:00:00+09:00'),
    end: new Date('2026-08-01T00:00:00+09:00'),
    // 配信再開のおしらせを送った日。週2（月・木）なので 8/3・8/6 の2回受けられる。
    baseline: new Date('2026-08-03T00:00:00+09:00'),
    activeWindowDays: 30,
  },
];

/** いずれかの停止期間に含まれるか。 */
export function isWithinSuspension(now: Date): boolean {
  const t = now.getTime();
  return PUSH_SUSPENSION_WINDOWS.some(
    (w) => t >= w.start.getTime() && t < w.end.getTime()
  );
}

/**
 * この最終回答日時に適用すべき救済（該当する中でいちばん新しい baseline）を返す。
 * 該当しなければ null。
 *
 * 対象は「停止開始の `activeWindowDays` 日前 〜 停止終了」に回答がある人。
 */
export function findSuspensionGrace(
  lastAnsweredAt: Date
): SuspensionWindow | null {
  const t = lastAnsweredAt.getTime();
  let found: SuspensionWindow | null = null;
  for (const w of PUSH_SUSPENSION_WINDOWS) {
    const from = w.start.getTime() - w.activeWindowDays * 24 * 60 * 60 * 1000;
    if (t >= from && t < w.end.getTime()) {
      // 複数該当したら**いちばん新しい baseline** を採る。
      if (!found || w.baseline.getTime() > found.baseline.getTime()) {
        found = w;
      }
    }
  }
  return found;
}

/** 現在（または直近）の停止期間。後方互換の定数を組み立てるために使う。 */
export const CURRENT_SUSPENSION_WINDOW =
  PUSH_SUSPENSION_WINDOWS[PUSH_SUSPENSION_WINDOWS.length - 1];
