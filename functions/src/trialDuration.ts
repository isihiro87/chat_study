/**
 * トライアル終了日時を「開始日を1日目とする 7 暦日（JST）」で計算する。
 *
 * 開始日含め 7 日間（D 〜 D+6）が有効で、7 日目(D+6) の 23:59:59.999 JST に終了。
 * 例: 6/1 開始 → 6/7 23:59:59 JST まで有効、6/8 失効。
 *
 * 旧実装は `開始時刻 + 7×24h` だったため、時刻付きスタートだと 8 暦日目まで
 * またがり「7日間=6/7」の認識とズレていた。これを暦日基準に統一する。
 * （既存ユーザーの premiumUntil は変更しない＝今後の付与から適用）
 */
export function computeTrialEndJst(start: Date): Date {
  const JST = 9 * 60 * 60 * 1000;
  const jst = new Date(start.getTime() + JST);
  const startMidnightUtc =
    Date.UTC(jst.getUTCFullYear(), jst.getUTCMonth(), jst.getUTCDate()) - JST;
  return new Date(startMidnightUtc + 7 * 24 * 60 * 60 * 1000 - 1);
}
