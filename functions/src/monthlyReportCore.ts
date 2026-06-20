/**
 * 月末ふり返りレポート（AI 学習分析）の純粋ロジック（副作用なし・重い依存なし）。
 *
 * `answers` コレクションから取り出した「その月の回答」を集計し、得意・ニガテ・
 * 頑張ったことを算出する。算出結果は `buildReportSourceText` で自然文にまとめ、
 * Gemini に「中学生向けのふり返りメッセージ」へ変換させる材料にする。
 *
 * Firestore / firebase-admin を import しないため、単体テストから安全に読み込める。
 * 実際のクエリ・送信は `monthlyReport.ts` が担う。
 */

/** 集計対象の1回答（必要な項目だけに絞った軽量版）。 */
export interface AnswerLite {
  questionId: string;
  /** ユーザーが選んだ選択肢の index（0〜3）。不明なら -1。 */
  choice: number;
  topic: string | null;
  subject: string | null;
  isCorrect: boolean;
  answeredAt: Date;
}

/** 単元別の集計。 */
export interface TopicStat {
  topic: string;
  total: number;
  correct: number;
  /** 正答率（0〜100 の整数）。 */
  rate: number;
}

/** レポート生成に必要な集計結果。 */
export interface MonthlyReportStats {
  /** 対象月（"YYYY-MM"）。 */
  monthKey: string;
  totalAnswered: number;
  totalCorrect: number;
  /** 全体正答率（0〜100 の整数）。 */
  correctRate: number;
  /** その月に学習した日数（JST 暦日のユニーク数）。 */
  activeDays: number;
  /** 連続学習日数（呼び出し側が users.stats から渡す。無ければ 0）。 */
  currentStreak: number;
  /** 最も多く取り組んだ単元（同数なら先に出た方）。無ければ null。 */
  mostPracticedTopic: TopicStat | null;
  /** 得意そうな単元（正答率が高い順、最大3件）。 */
  strengths: TopicStat[];
  /** ニガテそうな単元（正答率が低い順、最大3件）。 */
  weaknesses: TopicStat[];
}

/** レポートを出すのに最低限必要な回答数。これ未満なら AI を呼ばず案内文を返す。 */
export const MIN_ANSWERS_FOR_REPORT = 5;

/** 得意（全問正解）とみなすのに必要な単元あたりの最低回答数（偶然を除外）。 */
const MIN_TOPIC_VOLUME = 3;
/** 得意の最大表示件数。 */
const MAX_STRENGTHS = 3;
/** ニガテの最大表示件数（1問でも間違えた単元が対象なので少し多めに許容）。 */
const MAX_WEAKNESSES = 5;

/** JST の暦日（"YYYY-MM-DD"）を返す。 */
export function jstDateKey(date: Date): string {
  const jst = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
}

function topicLabel(topic: string | null): string {
  const t = (topic ?? "").trim();
  return t.length > 0 ? t : "その他";
}

/**
 * その月の回答を集計して `MonthlyReportStats` を返す。
 * answers は対象月のものだけが渡される前提（フィルタは呼び出し側）。
 */
export function aggregateMonthlyReport(
  answers: AnswerLite[],
  opts: { monthKey: string; currentStreak?: number }
): MonthlyReportStats {
  const totalAnswered = answers.length;
  let totalCorrect = 0;
  const days = new Set<string>();
  // 出現順を保つため Map を使う（同率タイ時の安定したソートのため）。
  const byTopic = new Map<string, TopicStat>();

  for (const a of answers) {
    if (a.isCorrect) totalCorrect++;
    days.add(jstDateKey(a.answeredAt));

    const label = topicLabel(a.topic);
    const cur = byTopic.get(label) ?? { topic: label, total: 0, correct: 0, rate: 0 };
    cur.total++;
    if (a.isCorrect) cur.correct++;
    byTopic.set(label, cur);
  }

  for (const stat of byTopic.values()) {
    stat.rate = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
  }

  const topics = [...byTopic.values()];

  // 最も多く取り組んだ単元（total 降順、同数は出現順で先）。
  let mostPracticedTopic: TopicStat | null = null;
  for (const stat of topics) {
    if (!mostPracticedTopic || stat.total > mostPracticedTopic.total) {
      mostPracticedTopic = stat;
    }
  }

  // 得意 = その月に全問正解（1問も間違えていない）かつ一定数こなした単元。
  const strengths = topics
    .filter((t) => t.total >= MIN_TOPIC_VOLUME && t.correct === t.total)
    .sort((a, b) => b.total - a.total)
    .slice(0, MAX_STRENGTHS);

  // ニガテ = 1問でも間違えた単元は「いったん」ここに入れる（回答数の下限なし）。
  // 正答率が低い順 → 同率は間違いの多い（＝回答数の多い）順。
  const weaknesses = topics
    .filter((t) => t.correct < t.total)
    .sort((a, b) => a.rate - b.rate || b.total - a.total)
    .slice(0, MAX_WEAKNESSES);

  return {
    monthKey: opts.monthKey,
    totalAnswered,
    totalCorrect,
    correctRate:
      totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0,
    activeDays: days.size,
    currentStreak: opts.currentStreak ?? 0,
    mostPracticedTopic,
    strengths,
    weaknesses,
  };
}

/** "2026-06" → "2026年6月"。 */
export function formatMonthLabel(monthKey: string): string {
  const m = /^(\d{4})-(\d{2})$/.exec(monthKey);
  if (!m) return monthKey;
  return `${m[1]}年${Number(m[2])}月`;
}

/**
 * ユーザーに表示する「固定フォーマットの成績ブロック」をコードで組み立てる。
 * 数字・単元の並びは常にこの形なので、毎月レイアウトがブレない（出力形式が一定）。
 * 中学生が読みやすいよう、やさしい言葉＋絵文字＋プレーンテキスト（Markdown なし）。
 * この下に AI が書く「ひとことコメント」を続ける想定。
 */
export function buildReportDisplay(stats: MonthlyReportStats): string {
  const monthLabel = formatMonthLabel(stats.monthKey);
  const lines: string[] = [];

  lines.push(`📊 ${monthLabel}のふり返り`);
  lines.push("");
  lines.push(`✏️ といた問題：${stats.totalAnswered}問`);
  lines.push(
    `⭕ 正かい：${stats.totalCorrect}問（正答率 ${stats.correctRate}%）`
  );
  lines.push(`📅 べんきょうした日：${stats.activeDays}日`);
  if (stats.currentStreak > 0) {
    lines.push(`🔥 れんぞく学習：${stats.currentStreak}日`);
  }

  lines.push("");
  lines.push("💪 とくいな単元");
  if (stats.strengths.length > 0) {
    for (const t of stats.strengths) {
      lines.push(`・${t.topic}（${t.rate}%）`);
    }
  } else {
    lines.push("・もう少し解くと、ここに出てくるよ");
  }

  lines.push("");
  lines.push("📚 ふくしゅうしたい単元");
  if (stats.weaknesses.length > 0) {
    for (const t of stats.weaknesses) {
      lines.push(`・${t.topic}（${t.rate}%）`);
    }
  } else {
    lines.push("・目立ったニガテはなかったよ！その調子👍");
  }

  return lines.join("\n");
}

/**
 * AI 生成に失敗したときに使う、テンプレ（非 AI）のひとことコメント。
 * これでも常にレポートが完成するよう、データから簡単な励まし＋助言を組み立てる。
 */
export function buildFallbackComment(stats: MonthlyReportStats): string {
  const parts: string[] = [];
  if (stats.activeDays > 0) {
    parts.push(`${stats.activeDays}日もコツコツ続けられたね、えらい！`);
  } else {
    parts.push(`今月もよくがんばったね！`);
  }
  if (stats.weaknesses.length > 0) {
    parts.push(
      `来月は「${stats.weaknesses[0].topic}」をメニューの「苦手を復習」で見直すと、もっと点が伸びるよ。`
    );
  } else {
    parts.push(`この調子で、毎日1問ずつ続けていこう。`);
  }
  parts.push(`応援してるよ😊`);
  return parts.join("\n");
}

/** AI に渡す「具体的な分析用」の問題サンプル上限。read とトークンを抑える。 */
export const QUESTION_SAMPLE_CAP = 40;

/**
 * その月の回答から、AI へ渡す「問題サンプル」リストを作る。
 * 同じ問題は最新の1回だけ（recency 降順で渡される前提）。最大 QUESTION_SAMPLE_CAP 件。
 * 返り値の questionId は、呼び出し側が questions コレクションから本文・選択肢を
 * 引くのに使う。choice はユーザーが選んだ選択肢 index。
 */
export function pickQuestionSamples(
  answers: AnswerLite[]
): Array<{ questionId: string; isCorrect: boolean; choice: number }> {
  const seen = new Set<string>();
  const out: Array<{ questionId: string; isCorrect: boolean; choice: number }> =
    [];
  for (const a of answers) {
    if (!a.questionId || seen.has(a.questionId)) continue;
    seen.add(a.questionId);
    out.push({
      questionId: a.questionId,
      isCorrect: a.isCorrect,
      choice: a.choice,
    });
    if (out.length >= QUESTION_SAMPLE_CAP) break;
  }
  return out;
}

/** 問題1件ぶんの「問題文＋ユーザーの解答＋正解」。AI 分析の材料。 */
export interface QuestionAnalysisItem {
  text: string;
  isCorrect: boolean;
  /** ユーザーが選んだ選択肢の文。空なら出力に含めない。 */
  chosen: string;
  /** 正解の選択肢の文。 */
  correct: string;
}

/**
 * 問題本文＋「ユーザーがどう答えたか」＋正解のリストを、AI が
 * 「どんな切り口の問題が得意/ニガテか」を読み取るための材料テキストにする。
 * 不正解のときは“何と間違えたか”が分かるよう、選んだ選択肢を明示する
 * （誤答の傾向＝つまずきの分析に効く）。本文が無い問題は除外。
 */
export function buildQuestionAnalysisText(
  items: QuestionAnalysisItem[]
): string {
  if (items.length === 0) return "";
  const lines: string[] = [
    "【今月解いた問題・あなたの解答・正解（具体的な分析用。⭕=正解 / ✕=不正解）】",
  ];
  for (const it of items) {
    const t = it.text.replace(/\s+/g, " ").trim().slice(0, 60);
    if (!t) continue;
    const correct = it.correct.replace(/\s+/g, " ").trim().slice(0, 30);
    if (it.isCorrect) {
      lines.push(`⭕ ${t}（正解:「${correct}」）`);
    } else {
      const chosen = it.chosen.replace(/\s+/g, " ").trim().slice(0, 30);
      const chosenPart = chosen ? `あなたの解答:「${chosen}」/ ` : "";
      lines.push(`✕ ${t}（${chosenPart}正解:「${correct}」）`);
    }
  }
  return lines.join("\n");
}

/**
 * 集計結果を Gemini に渡す自然文（材料）にまとめる。
 * ここに書いた数字以外を AI が創作しないよう、事実だけを淡々と並べる。
 */
export function buildReportSourceText(stats: MonthlyReportStats): string {
  const lines: string[] = [];
  const monthLabel = formatMonthLabel(stats.monthKey);

  lines.push(`【${monthLabel}の学習データ】`);
  lines.push(`・解いた問題数: ${stats.totalAnswered}問`);
  lines.push(`・正解数: ${stats.totalCorrect}問（正答率${stats.correctRate}%）`);
  lines.push(`・学習した日数: ${stats.activeDays}日`);
  if (stats.currentStreak > 0) {
    lines.push(`・いまの連続学習日数: ${stats.currentStreak}日`);
  }
  if (stats.mostPracticedTopic) {
    lines.push(
      `・いちばん多く取り組んだ単元: ${stats.mostPracticedTopic.topic}（${stats.mostPracticedTopic.total}問）`
    );
  }

  if (stats.strengths.length > 0) {
    lines.push("");
    lines.push("【得意そうな単元（正答率が高い）】");
    for (const t of stats.strengths) {
      lines.push(`・${t.topic}: ${t.total}問中${t.correct}問正解（${t.rate}%）`);
    }
  }

  if (stats.weaknesses.length > 0) {
    lines.push("");
    lines.push("【ニガテそうな単元（正答率が低め）】");
    for (const t of stats.weaknesses) {
      lines.push(`・${t.topic}: ${t.total}問中${t.correct}問正解（${t.rate}%）`);
    }
  }

  return lines.join("\n");
}
