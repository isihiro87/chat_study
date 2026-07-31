/**
 * 毎日の個別メッセージ（つづもん）の純粋ロジック。
 *
 * 「その子の状況と過去を踏まえたメッセージ」を毎日届けるための、
 * **ふり返る期間の決め方**と**AI に渡す素材の組み立て**を担う。
 *
 * ## ふり返る期間（曜日・日付で変える）
 * 毎日1か月ぶんをふり返ると、話が同じになり・入力トークンも無駄に増える。
 * そこで**節目にだけ長く**ふり返る:
 *
 * | いつ | 期間 | ねらい |
 * |---|---|---|
 * | 毎日 | **前日**（1日） | 「きのうの続き」を拾う。会話が自然につながる |
 * | 月曜 | **1週間** | 週のはじめに先週をふり返って、今週の見通しを持たせる |
 * | 1日 | **1か月** | 月初に前月をふり返る（月末レポートより軽い声かけ） |
 *
 * 長い期間が重なる日は**長い方を優先**する（1日が月曜なら1か月）。
 *
 * 副作用なし・環境非依存。
 */

import type { AnswerLite } from './monthlyReportCore';
import type { AiContext } from './aiContextCore';
import type { AiMemory } from './aiMemoryCore';
import type { StudyPlan } from './studyPlanCore';

/** ふり返る期間の種類。 */
export type LookbackWindow = 'day' | 'week' | 'month';

/** 期間ごとの日数。 */
export const LOOKBACK_DAYS: Record<LookbackWindow, number> = {
  day: 1,
  week: 7,
  month: 31,
};

/** JST の日付部品。 */
function jstParts(now: Date): {
  dateKey: string;
  weekday: number;
  day: number;
} {
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return {
    dateKey: jst.toISOString().slice(0, 10),
    // 0=日, 1=月, ... 6=土
    weekday: jst.getUTCDay(),
    day: jst.getUTCDate(),
  };
}

/**
 * 今日ふり返るべき期間を決める。
 *
 * - 毎月1日 → `month`
 * - 月曜 → `week`
 * - それ以外 → `day`
 *
 * 重なったら長い方（月 > 週 > 日）。
 */
export function decideLookbackWindow(now: Date): LookbackWindow {
  const { weekday, day } = jstParts(now);
  if (day === 1) return 'month';
  if (weekday === 1) return 'week';
  return 'day';
}

/** 期間の開始時刻（ms）。 */
export function lookbackSinceMs(now: Date, window: LookbackWindow): number {
  return now.getTime() - LOOKBACK_DAYS[window] * 24 * 3600 * 1000;
}

/** 期間の日本語表現（プロンプトと文面に使う）。 */
export function windowLabel(window: LookbackWindow): string {
  switch (window) {
    case 'month':
      return 'この1か月';
    case 'week':
      return 'この1週間';
    default:
      return 'きのう';
  }
}

// ---------------------------------------------------------------------------
// 素材の組み立て
// ---------------------------------------------------------------------------

/** 期間内の学習実績（AI に渡す素材）。 */
export interface LookbackSummary {
  window: LookbackWindow;
  /** 期間内の回答数 */
  answered: number;
  correct: number;
  /** 期間内に学習した日数 */
  activeDays: number;
  /** 期間内に取り組んだ単元（多い順・最大5件） */
  topics: Array<{ topic: string; total: number; correct: number }>;
  /** 間違えが多かった単元（最大3件） */
  weakTopics: Array<{ topic: string; total: number; correct: number }>;
  /** 最後に学習した日（YYYY-MM-DD）。無ければ null */
  lastStudiedDate: string | null;
  /** 期間内に一度も学習していないか */
  isSilent: boolean;
}

function jstDateKey(date: Date): string {
  const jst = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
}

/** 期間内の回答から素材を組み立てる。 */
export function summarizeLookback(
  answers: AnswerLite[],
  window: LookbackWindow,
  now: Date
): LookbackSummary {
  const since = lookbackSinceMs(now, window);
  const inWindow = answers.filter((a) => a.answeredAt.getTime() >= since);

  const days = new Set<string>();
  const byTopic = new Map<
    string,
    { topic: string; total: number; correct: number }
  >();
  let correct = 0;

  for (const a of inWindow) {
    if (a.isCorrect) correct++;
    days.add(jstDateKey(a.answeredAt));
    const key = (a.topic ?? '').trim() || 'その他';
    const cur = byTopic.get(key) ?? { topic: key, total: 0, correct: 0 };
    cur.total++;
    if (a.isCorrect) cur.correct++;
    byTopic.set(key, cur);
  }

  const topics = [...byTopic.values()].sort((a, b) => b.total - a.total);
  const weakTopics = topics
    .filter((t) => t.correct < t.total)
    .sort(
      (a, b) => a.correct / a.total - b.correct / b.total || b.total - a.total
    )
    .slice(0, 3);

  // 期間外も含めて最後に学習した日を出す（沈黙が続いているときの声かけに使う）。
  let lastMs = 0;
  for (const a of answers) {
    lastMs = Math.max(lastMs, a.answeredAt.getTime());
  }

  return {
    window,
    answered: inWindow.length,
    correct,
    activeDays: days.size,
    topics: topics.slice(0, 5),
    weakTopics,
    lastStudiedDate: lastMs > 0 ? jstDateKey(new Date(lastMs)) : null,
    isSilent: inWindow.length === 0,
  };
}

/** 前回送ったメッセージの記録（同じ話題の繰り返しを避ける）。 */
export interface DailyMessageHistory {
  /** 直近に送った本文（最大3件・新しい順） */
  recentTexts?: string[];
  /** 最後に送った JST 日付 */
  lastSentDateJST?: string;
}

/**
 * AI に渡す素材テキストを作る。
 *
 * ここに書いた事実**以外**を作らせないよう、数字は淡々と並べる。
 */
export function buildDailySourceText(opts: {
  summary: LookbackSummary;
  context?: AiContext;
  memory?: AiMemory;
  plan?: StudyPlan;
  /** プランの「今日やること」1行（`studyPlanCore.buildTodayPlanLine`） */
  todayPlanLine?: string | null;
  /** 直近に送った文（同じ言い回しを避けさせるため素材に含める） */
  history?: DailyMessageHistory;
  now: Date;
}): string {
  const { summary } = opts;
  const lines: string[] = [];
  const label = windowLabel(summary.window);

  lines.push(`【ふり返る期間】${label}`);

  if (summary.isSilent) {
    lines.push(`・${label}は問題を解いていない`);
    if (summary.lastStudiedDate) {
      lines.push(`・最後に解いたのは ${summary.lastStudiedDate}`);
    } else {
      lines.push('・まだ一度も解いていない');
    }
  } else {
    lines.push(
      `・${label}に解いた問題: ${summary.answered}問（正解 ${summary.correct}問）`
    );
    lines.push(`・学習した日数: ${summary.activeDays}日`);
    if (summary.topics.length > 0) {
      lines.push(
        `・取り組んだ単元: ${summary.topics
          .map((t) => `${t.topic}（${t.total}問中${t.correct}問正解）`)
          .join('、')}`
      );
    }
    if (summary.weakTopics.length > 0) {
      lines.push(
        `・つまずいた単元: ${summary.weakTopics.map((t) => t.topic).join('、')}`
      );
    }
  }

  if (opts.memory?.nextTestDate) {
    lines.push(`・次のテスト: ${opts.memory.nextTestDate}`);
  }
  if (opts.memory?.goal) lines.push(`・目標: ${opts.memory.goal}`);
  if (opts.memory?.busyNote)
    lines.push(`・予定/忙しさ: ${opts.memory.busyNote}`);
  if (opts.todayPlanLine) {
    lines.push(`・今日のプラン: ${opts.todayPlanLine.replace(/^📅 /, '')}`);
  }
  if (opts.context && opts.context.hasEnoughData) {
    if (opts.context.weaknesses.length > 0) {
      lines.push(
        `・長期的なニガテ: ${opts.context.weaknesses
          .slice(0, 3)
          .map((t) => t.topic)
          .join('、')}`
      );
    }
  }

  // 直近に送った文を渡して、書き出し・言い回しの重複をモデル側で避けさせる。
  // （`isTooSimilar` は最後の安全網。まずここで防ぐほうが自然な文になる）
  const recent = opts.history?.recentTexts ?? [];
  if (recent.length > 0) {
    lines.push('');
    lines.push('【最近この子に送った文（同じ書き出し・言い回しを避ける）】');
    for (const t of recent.slice(0, 3)) {
      lines.push(`・${t.replace(/\s+/gu, ' ').slice(0, 60)}`);
    }
  }

  return lines.join('\n');
}

/** 日次メッセージ生成のシステムプロンプト。 */
export const DAILY_MESSAGE_PROMPT = `あなたは中学生の学習を見守る担当です。
その子の学習記録をもとに、**毎日1通だけ届く短い声かけ**を書きます。

# 書き方
- **2〜4文**。LINE の吹き出し1つで読み切れる長さ。
- まず具体的に触れる。「きのうは○○を3問解いてたね」のように、渡された事実を1つ使う。
- そのあとに、今日の小さな一歩を1つだけ提案する。「今日は△△を5分だけどう？」
- 最後に短く背中を押す。

# 守ること
- **渡された事実だけを使う。** 数字・単元名を作らない。書いていないことは言わない。
- 解いていない日を責めない。「サボった」「なんで」は禁止。
  休んでいた子には「おかえり」「ムリしなくていいよ」の姿勢で。
- プレッシャーをかけない。「絶対」「必ず」「〜しないと」は使わない。
- 毎回おなじ言い回しにしない。前回と同じ書き出しは避ける。
- Markdown 記法（** ## - など）は使わない。LINE では記号がそのまま見える。
- 絵文字は多くても1〜2個。`;

/**
 * 直近に送った文と似すぎていないか（同じ言い回しの繰り返しを避ける）。
 * 先頭20文字が一致したら「似ている」とみなす。
 */
export function isTooSimilar(
  candidate: string,
  history: DailyMessageHistory | undefined
): boolean {
  const head = (candidate ?? '').replace(/\s+/gu, '').slice(0, 20);
  if (head.length < 10) return false;
  return (history?.recentTexts ?? []).some(
    (t) => t.replace(/\s+/gu, '').slice(0, 20) === head
  );
}

/** 送信履歴を更新する（最大3件）。 */
export function pushMessageHistory(
  history: DailyMessageHistory | undefined,
  text: string,
  now: Date
): DailyMessageHistory {
  const recent = [text, ...(history?.recentTexts ?? [])].slice(0, 3);
  return { recentTexts: recent, lastSentDateJST: jstDateKey(now) };
}

/** 今日すでに送っているか（二重送信の防止）。 */
export function alreadySentToday(
  history: DailyMessageHistory | undefined,
  now: Date
): boolean {
  return history?.lastSentDateJST === jstDateKey(now);
}

/**
 * AI 生成に失敗したときのフォールバック文。
 * **必ず何かは届く**ようにする（沈黙より、短くても声をかけるほうがよい）。
 */
export function buildFallbackDailyMessage(
  summary: LookbackSummary,
  todayPlanLine?: string | null
): string {
  if (summary.isSilent) {
    return todayPlanLine
      ? `おはよう！${todayPlanLine.replace(/^📅 /, '')}\n少しずつでいいから、また一緒にやっていこう😊`
      : 'おはよう！きょうは1問だけでもやってみない？ムリのないペースでいこう😊';
  }
  const head = `${windowLabel(summary.window)}は${summary.answered}問といたね、いい調子！`;
  const tail = todayPlanLine
    ? todayPlanLine.replace(/^📅 /, '')
    : 'きょうも少しだけ進めてみよう😊';
  return `${head}\n${tail}`;
}
