/**
 * AI チャットの「調べる」機能の判定ロジック（純粋・副作用なし）。
 *
 * ## どう発火するか
 * 無料ティアには function calling を入れていないので、**AI に応答の中へ
 * `[[SEARCH: 調べたい言葉]]` と書かせて**、それをコード側が拾って検索する
 * （`aiWebSearch.searchWeb`）。検索結果を文脈に足してもう一度だけ生成し直す。
 *
 * この形にした理由:
 *   - 「生徒が『調べて』と言ったとき」と「AI が自分で分からないと判断したとき」の
 *     両方を**1つの仕組み**で拾える（正規表現だけだと前者しか拾えない）
 *   - 実行するのは**コード側**なので、AI が勝手に外部へ問い合わせることはない
 *
 * ## コスト
 * Gemini の Google 検索グラウンディングは **月5,000回まで無料**、超過後は
 * $14/1,000回（約 ¥2.2/回）。出典: https://ai.google.dev/gemini-api/docs/pricing
 * （確認日 2026-08-06）。**無料枠を超えないことが最優先**なので、
 *   ① 1人1日あたりの回数 ② サービス全体の月次回数
 * の2段で止める。
 */

/** AI に書かせる検索マーカー。`[[SEARCH: 徳川家康の生まれた年]]` の形。 */
const SEARCH_MARKER_RE = /\[\[SEARCH:\s*([^\]]{1,100})\]\]/;

/** 1人あたりの1日の検索回数上限。 */
export const DEFAULT_USER_DAILY_SEARCH_CAP = 3;
/**
 * サービス全体の月次検索回数上限。
 * Gemini の無料枠 5,000/月 に対して**余裕をもって手前**に置く
 * （1リクエストが複数クエリを発行することがあるため、1:1 では見ない）。
 */
export const DEFAULT_GLOBAL_MONTHLY_SEARCH_CAP = 3_000;

export interface SearchLimits {
  userDailyCap: number;
  globalMonthlyCap: number;
  /** どのティアに提供するか。'off' で完全停止 */
  tier: 'free' | 'premium' | 'off';
}

/** env から上限を組む。不正値は既定（低い方）へ倒す。 */
export function parseSearchLimits(
  env: Record<string, string | undefined> = {}
): SearchLimits {
  const num = (raw: string | undefined, fallback: number): number => {
    if (raw === undefined || raw === '') return fallback;
    const n = Number(raw);
    if (!Number.isFinite(n) || n <= 0) return fallback;
    return n;
  };
  const rawTier = (env.AI_SEARCH_TIER ?? 'free').trim();
  const tier: SearchLimits['tier'] =
    rawTier === 'premium' || rawTier === 'off' ? rawTier : 'free';
  return {
    userDailyCap: num(
      env.AI_SEARCH_USER_DAILY_CAP,
      DEFAULT_USER_DAILY_SEARCH_CAP
    ),
    globalMonthlyCap: num(
      env.AI_SEARCH_GLOBAL_MONTHLY_CAP,
      DEFAULT_GLOBAL_MONTHLY_SEARCH_CAP
    ),
    tier,
  };
}

/** `users/{uid}.aiChat` のうち検索カウンタ部分。 */
export interface SearchCountState {
  /** 検索回数の基準となる JST 日付（YYYY-MM-DD） */
  searchDateJST?: string;
  /** その日の検索回数 */
  searchCount?: number;
}

/** その日すでに何回検索したか（日付が変われば 0）。 */
export function currentSearchCount(
  state: SearchCountState | undefined,
  todayJst: string
): number {
  return state?.searchDateJST === todayJst ? (state?.searchCount ?? 0) : 0;
}

export interface SearchGateInput {
  /** 呼び出し元のティア */
  tier: 'free' | 'paid';
  limits: SearchLimits;
  /** この人の当日の検索回数 */
  userTodayCount: number;
  /** サービス全体の当月の検索回数（取得できなければ undefined） */
  globalMonthCount: number | undefined;
}

export type SearchGate =
  | { allowed: true }
  | {
      allowed: false;
      reason: 'tier' | 'user_daily' | 'global_monthly' | 'off';
    };

/**
 * 検索してよいか判定する。
 *
 * ⚠️ 集計が読めない（`globalMonthCount` が undefined）ときは**通す**。
 * 検索は無料枠 5,000/月 の内側で運用しており、数分間読めなくても事故になる額に
 * 達しない。一方 deny に倒すと機能が黙って死ぬ（`aiCostCore.evaluateFreeGate`
 * と同じ判断）。
 */
export function evaluateSearchGate(input: SearchGateInput): SearchGate {
  const { tier, limits, userTodayCount, globalMonthCount } = input;
  if (limits.tier === 'off') return { allowed: false, reason: 'off' };
  // premium 限定運用にしたときは、無料ティアからの検索を止める。
  if (limits.tier === 'premium' && tier !== 'paid') {
    return { allowed: false, reason: 'tier' };
  }
  if (userTodayCount >= limits.userDailyCap) {
    return { allowed: false, reason: 'user_daily' };
  }
  if (
    typeof globalMonthCount === 'number' &&
    Number.isFinite(globalMonthCount) &&
    globalMonthCount >= limits.globalMonthlyCap
  ) {
    return { allowed: false, reason: 'global_monthly' };
  }
  return { allowed: true };
}

export interface ExtractedSearch {
  /** マーカーを取り除いた本文 */
  text: string;
  /** 検索したい言葉（マーカーが無ければ null） */
  query: string | null;
}

/**
 * AI の応答から検索マーカーを取り出し、本文から取り除く。
 *
 * マーカーが本文に残ったまま生徒に届くと意味不明なので、
 * **検索するかどうかに関わらず必ず取り除く**（上限に達した場合も同じ）。
 */
export function extractSearchRequest(raw: string): ExtractedSearch {
  const text = raw ?? '';
  const match = SEARCH_MARKER_RE.exec(text);
  if (!match) return { text, query: null };
  const query = match[1].trim();
  const stripped = text.replace(SEARCH_MARKER_RE, '').trim();
  return { text: stripped, query: query || null };
}

/** 上限に達したときに、検索せずに返す一言（本文の後ろに足す）。 */
export function searchUnavailableNote(
  reason: Exclude<SearchGate, { allowed: true }>['reason']
): string {
  switch (reason) {
    case 'user_daily':
      return '\n\n（ごめんね、今日はもう調べものの回数を使いきっちゃった💦 また明日調べてみるね）';
    case 'tier':
    case 'off':
    case 'global_monthly':
    default:
      return '\n\n（いまインターネットで調べる機能が使えないんだ💦 教科書や先生にも確認してみてね）';
  }
}

/**
 * システムプロンプトに足す「調べる」機能の説明。
 *
 * ⚠️ **使いどころを絞る。** 教科の学習内容は教材のほうが正確で、検索に頼ると
 * かえって不正確になる（つづもんの実運用で確認済み）。また毎ターン検索すると
 * 無料枠 5,000/月 をすぐ使い切る。
 */
export const SEARCH_GUIDE = `

# インターネットで調べられる（使いどころは絞る）
どうしても分からないこと・自分の知識だと古いかもしれないことは、インターネットで調べられる。
調べたいときは、**返事の最後に \`[[SEARCH: 調べたい言葉]]\` と書く**（生徒には見えない）。
そのあとシステムが調べて、その結果をもとにもう一度あなたが答える。

**調べてよいとき**
- 生徒に「調べて」「検索して」と頼まれたとき
- 最近のニュース・今年の出来事など、あなたの知識では古い可能性があること
- 教科書の範囲外の一般常識、人物や場所の細かい情報

**調べてはいけないとき（こちらのほうが多い）**
- **教科の学習内容そのもの**（歴史・英語・理科・地理の用語や年号）。教材の説明のほうが正確で、生徒の学習とも噛み合う。自分の言葉で説明する
- いま配信中の問題の答え（ヒントで導く方針は変わらない）
- 雑談・相談・サービスの使い方の質問
- 生徒の名前・学校名など**個人情報を含む検索は絶対にしない**

分かることは自分で答える。**迷ったら調べない。**`;
