/**
 * 参考書AI対話セッション（`users/{uid}.refSession`）の純粋ロジック。
 *
 * ## なぜ切り出したか
 * この対話は「1つの単元の教材本文だけを根拠に答える」モードで、入ると以降の自由文が
 * すべてその単元に接地される。TTL も広い離脱ワードも無かったため、**一度入ると
 * 終了ワードを完全一致で送るまで半永久的に単元へ固定**され、別の話題（例:「江戸時代を
 * 勉強したい」「来週テストなんだけど」）まで「この単元の範囲では説明されていないよ」で
 * 返る事故が起きた（2026-07-26・実機で約5時間の固定を確認）。
 *
 * 判定を副作用なしの関数に集約し、テストで固定する。
 */

/** 最終やり取りからこの時間を過ぎたセッションは自動で閉じる。 */
export const REF_SESSION_TTL_MS = 30 * 60 * 1000;

/**
 * 対話を抜けるワード。完全一致だけでは出口が狭すぎたため、
 * 「別の話がしたい」系の自然な言い回しと、末尾の記号・空白を許容する。
 */
export const REF_END_RE =
  /^(おわり|終わり|おわる|終わる|やめる|やめたい|終了|中断|もどる|戻る|ぬける|抜ける|キャンセル|べつの(話|こと|単元)?|別の(話|こと|単元)?|ちがう(話|単元)|違う(話|単元)|stop|ストップ|exit)[!！。．、\s]*$/i;

/** 対話を抜けたい入力か。 */
export function isRefEndText(text: string): boolean {
  return REF_END_RE.test(text.trim());
}

/**
 * セッションが期限切れか。
 *
 * `updatedAt` が無いのは TTL 導入前に作られた古いセッション。**期限切れ扱いにする**
 * ことで、いま固定されている人も次の発言で自動的に解放される（自己修復）。
 */
export function isRefSessionExpired(
  session: { updatedAt?: number } | null | undefined,
  nowMs: number
): boolean {
  const lastAt = typeof session?.updatedAt === 'number' ? session.updatedAt : 0;
  return nowMs - lastAt > REF_SESSION_TTL_MS;
}
