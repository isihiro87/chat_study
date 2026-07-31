/**
 * 学習分析サマリ（`users/{uid}.aiContext`）の純粋ロジック。
 *
 * つづもん（有料）の AI が「わたしの苦手どこ？」に**推測でなく実データで**答えるための材料。
 * 会話のホットパスで `answers` を集計すると read 規律に反するので、
 * **夜間 cron が1日1回だけ計算**して1フィールドに置く（`requirements.md` §機能5）。
 *
 * ## 鮮度について（重要）
 * 集計は「前日夜まで」なので、**今日解いたぶんは入っていない**。
 * プロンプトにその旨を明記して、AI に「今日の分も含む」と断定させない。
 *
 * 副作用なし・環境非依存（Firestore を import しない）。
 */

import {
  aggregateMonthlyReport,
  type AnswerLite,
  type TopicStat,
} from './monthlyReportCore';

/** 分析の対象期間（日）。直近30日。 */
export const ANALYSIS_WINDOW_DAYS = 30;

/** 学習ペースを見る期間（日）。 */
export const PACE_WINDOW_DAYS = 14;

/** プロンプトに列挙する単元の最大数。 */
const MAX_TOPICS_SHOWN = 5;

/** ワーク演習（つづもん）の集計。`users/{uid}.workbookStats` から作る。 */
export interface WorkbookSummary {
  total: number;
  correct: number;
  /** 正答率（0〜100 の整数） */
  rate: number;
  /** 苦手な単元（正答率が低い順・最大3件） */
  weakTopics: TopicStat[];
}

/** `users/{uid}.aiContext` の中身。 */
export interface AiContext {
  /** 集計した JST 日付（YYYY-MM-DD）。鮮度の表示に使う */
  computedDateJST: string;
  /** 直近30日の回答数 */
  totalAnswered: number;
  totalCorrect: number;
  /** 正答率（0〜100 の整数） */
  correctRate: number;
  /** 直近14日で学習した日数 */
  activeDaysInPace: number;
  /** 得意（全問正解かつ一定数こなした単元） */
  strengths: TopicStat[];
  /** ニガテ（正答率が低い単元） */
  weaknesses: TopicStat[];
  /** 最も多く取り組んだ単元 */
  mostPracticed: TopicStat | null;
  /** つづもんワーク演習の集計（あれば） */
  workbook?: WorkbookSummary;
  /** 分析に足る回答数があるか */
  hasEnoughData: boolean;
}

/** 分析を出すのに最低限必要な回答数。これ未満なら「まだ分析できない」と伝える。 */
export const MIN_ANSWERS_FOR_ANALYSIS = 5;

/** JST の YYYY-MM-DD。 */
export function jstDateKey(date: Date): string {
  const jst = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
}

/**
 * `users/{uid}.workbookStats` からワーク演習のサマリを作る。
 * 形: `{ total, correct, byTopic: { [folder]: { [topic]: { t, c } } } }`
 */
export function summarizeWorkbookStats(
  raw: unknown
): WorkbookSummary | undefined {
  if (!raw || typeof raw !== 'object') return undefined;
  const s = raw as {
    total?: unknown;
    correct?: unknown;
    byTopic?: Record<string, Record<string, { t?: number; c?: number }>>;
  };
  const total = numberOr(s.total, 0);
  const correct = numberOr(s.correct, 0);
  if (total <= 0) return undefined;

  const topics: TopicStat[] = [];
  const byTopic = s.byTopic;
  if (byTopic && typeof byTopic === 'object') {
    // byTopic は「フォルダ → 単元 → {t,c}」の2段。単元名だけを取り出す。
    for (const folder of Object.values(byTopic)) {
      if (!folder || typeof folder !== 'object') continue;
      for (const [topic, v] of Object.entries(folder)) {
        const t = numberOr(v?.t, 0);
        const c = numberOr(v?.c, 0);
        if (t <= 0) continue;
        topics.push({
          topic,
          total: t,
          correct: c,
          rate: Math.round((c / t) * 100),
        });
      }
    }
  }

  const weakTopics = topics
    .filter((t) => t.correct < t.total)
    .sort((a, b) => a.rate - b.rate || b.total - a.total)
    .slice(0, 3);

  return {
    total,
    correct,
    rate: total > 0 ? Math.round((correct / total) * 100) : 0,
    weakTopics,
  };
}

function numberOr(v: unknown, fallback: number): number {
  return typeof v === 'number' && Number.isFinite(v) && v >= 0 ? v : fallback;
}

/**
 * 直近30日の回答＋ワーク演習から `aiContext` を組み立てる。
 *
 * 単元別の得意/ニガテの算出は既存の `aggregateMonthlyReport` を再利用する
 * （月末レポートと同じ基準になるので、AI の説明とレポートで食い違わない）。
 */
export function buildAiContext(opts: {
  answers: AnswerLite[];
  workbookStatsRaw?: unknown;
  now: Date;
}): AiContext {
  const { answers, now } = opts;
  const agg = aggregateMonthlyReport(answers, {
    monthKey: jstDateKey(now).slice(0, 7),
  });

  // 直近14日の学習日数（ペース）。
  const paceSince = now.getTime() - PACE_WINDOW_DAYS * 24 * 3600 * 1000;
  const paceDays = new Set<string>();
  for (const a of answers) {
    if (a.answeredAt.getTime() >= paceSince) {
      paceDays.add(jstDateKey(a.answeredAt));
    }
  }

  return {
    computedDateJST: jstDateKey(now),
    totalAnswered: agg.totalAnswered,
    totalCorrect: agg.totalCorrect,
    correctRate: agg.correctRate,
    activeDaysInPace: paceDays.size,
    strengths: agg.strengths,
    weaknesses: agg.weaknesses,
    mostPracticed: agg.mostPracticedTopic,
    workbook: summarizeWorkbookStats(opts.workbookStatsRaw),
    hasEnoughData: agg.totalAnswered >= MIN_ANSWERS_FOR_ANALYSIS,
  };
}

/**
 * `aiContext` をシステムプロンプトへ注入する節にする。
 *
 * ここで渡した数字・単元名**以外**を AI に作らせないよう、明示的に釘を刺す。
 * データが足りないときは「まだ分析できない」と正直に言わせる。
 */
export function buildAiContextPrompt(
  ctx: AiContext | undefined,
  now: Date
): string {
  if (!ctx) return '';

  const staleness = describeStaleness(ctx.computedDateJST, now);

  if (!ctx.hasEnoughData) {
    return (
      `\n\n# この子の学習分析（実データ）\n` +
      `まだ解いた問題が少ないので、得意・ニガテを判定できる段階じゃない（直近30日で${ctx.totalAnswered}問）。\n` +
      `「わたしの苦手どこ？」と聞かれたら、**推測でニガテを作らず**、` +
      `「もう少し解くと分かるようになるよ」と正直に伝えて、まず数問solveするよう促して。`
    );
  }

  const lines: string[] = [];
  lines.push(`- 集計期間: 直近${ANALYSIS_WINDOW_DAYS}日（${staleness}）`);
  lines.push(
    `- 解いた問題: ${ctx.totalAnswered}問 / 正解 ${ctx.totalCorrect}問（正答率 ${ctx.correctRate}%）`
  );
  lines.push(
    `- 学習ペース: 直近${PACE_WINDOW_DAYS}日のうち ${ctx.activeDaysInPace}日 学習`
  );
  if (ctx.mostPracticed) {
    lines.push(
      `- いちばん多く取り組んだ単元: ${ctx.mostPracticed.topic}（${ctx.mostPracticed.total}問）`
    );
  }
  lines.push(formatTopics('得意そうな単元', ctx.strengths));
  lines.push(formatTopics('ニガテそうな単元', ctx.weaknesses));

  if (ctx.workbook) {
    lines.push(
      `- つづもんワーク演習: ${ctx.workbook.total}問 / 正解 ${ctx.workbook.correct}問（正答率 ${ctx.workbook.rate}%）`
    );
    if (ctx.workbook.weakTopics.length > 0) {
      lines.push(
        `  ワークでニガテな単元: ${ctx.workbook.weakTopics
          .map((t) => `${t.topic}（${t.rate}%）`)
          .join('、')}`
      );
    }
  }

  return (
    `\n\n# この子の学習分析（実データ・正確）\n` +
    `以下はシステムが集計した実際の数字。学習状況・得意・ニガテを聞かれたら、` +
    `**推測せずこの数字と単元名だけを使って**答える。\n` +
    `⚠️ ここに無い単元名を作らない。ここに無い数字を言わない。\n` +
    `⚠️ この集計は**${staleness}**なので、「今日の分も入ってるよ」とは言わない。\n` +
    lines.join('\n')
  );
}

function formatTopics(label: string, topics: TopicStat[]): string {
  if (topics.length === 0) return `- ${label}: まだ判定できるほどデータがない`;
  const shown = topics
    .slice(0, MAX_TOPICS_SHOWN)
    .map((t) => `${t.topic}（${t.total}問中${t.correct}問正解・${t.rate}%）`)
    .join('、');
  return `- ${label}: ${shown}`;
}

/** 集計日と現在の差から鮮度の表現を作る。 */
export function describeStaleness(computedDateJST: string, now: Date): string {
  const today = jstDateKey(now);
  if (computedDateJST === today) return '今日の未明までの集計';
  const diffDays = daysBetween(computedDateJST, today);
  if (diffDays === 1) return '前日夜までの集計';
  if (diffDays <= 7) return `${diffDays}日前までの集計`;
  return `${diffDays}日前の古い集計（最新ではない）`;
}

function daysBetween(fromDateKey: string, toDateKey: string): number {
  const from = Date.parse(`${fromDateKey}T00:00:00Z`);
  const to = Date.parse(`${toDateKey}T00:00:00Z`);
  if (!Number.isFinite(from) || !Number.isFinite(to)) return 0;
  return Math.max(0, Math.round((to - from) / (24 * 3600 * 1000)));
}

// ---------------------------------------------------------------------------
// 分析リクエストの検知と自己検証
// ---------------------------------------------------------------------------

/** 「自分の学習状況を知りたい」意図の表現。 */
const ANALYSIS_INTENT_PATTERNS: RegExp[] = [
  /(苦手|にがて|ニガテ)(な|の)?(単元|とこ|ところ|分野)?[はっ]?/,
  /(得意|とくい)(な|の)?(単元|とこ|ところ|分野)?[はっ]?/,
  /(成績|せいせき|正答率|正解率|点数)/,
  /(どのくらい|どれくらい|どんくらい)[^。\n]{0,8}(でき|解け|進ん|やった)/,
  /(わたし|私|ぼく|僕|自分|おれ|俺)[^。\n]{0,6}(分析|ぶんせき|状況|調子)/,
  /(最近|さいきん)[^。\n]{0,6}(どう|調子)/,
  /(何問|なんもん)[^。\n]{0,6}(解いた|やった)/,
  /(復習|ふくしゅう)[^。\n]{0,8}(どこ|どれ|なに|何)/,
];

/** ユーザーの発話が「学習分析の依頼」かどうか（決定論）。 */
export function detectAnalysisIntent(userText: string): boolean {
  const text = (userText ?? '').normalize('NFKC');
  if (!text.trim()) return false;
  return ANALYSIS_INTENT_PATTERNS.some((re) => re.test(text));
}

/**
 * 分析回答の自己検証プロンプト。
 * 「注入した数字・単元名以外を使っていないか」を最安モデルで機械的に確認する。
 */
export const ANALYSIS_VERIFY_PROMPT = `あなたは、AIが書いた学習アドバイスに事実の誤りが無いかを点検する担当です。

「データ」に書かれた数字・単元名だけを使っているかを確認してください。
次のどちらか1語だけを出力してください。説明は不要です。

ok  … データに無い数字や単元名が出てきていない
ng  … データに無い数字や単元名が出てきている（または数字が食い違っている）`;

/** 検証用の入力テキストを組む。 */
export function buildAnalysisVerifyInput(
  contextPrompt: string,
  answer: string
): string {
  return `【データ】\n${contextPrompt}\n\n【AIが書いた文】\n${answer}`;
}

/** 検証結果を読む。判定不能なら ok（誤検知で正しい回答を捨てない）。 */
export function parseVerifyResult(raw: string): boolean {
  const t = (raw ?? '').toLowerCase();
  if (t.includes('ng')) return false;
  return true;
}
