import { describe, it, expect } from "vitest";
import {
  aggregateMonthlyReport,
  buildReportDisplay,
  buildReportSourceText,
  buildFallbackComment,
  buildQuestionAnalysisText,
  pickQuestionSamples,
  QUESTION_SAMPLE_CAP,
  formatMonthLabel,
  jstDateKey,
  type AnswerLite,
} from "../monthlyReportCore";

let qseq = 0;
/** テスト用 answer 生成ヘルパー。 */
function a(
  topic: string | null,
  isCorrect: boolean,
  iso: string
): AnswerLite {
  return {
    questionId: `q-${++qseq}`,
    choice: isCorrect ? 0 : 1,
    topic,
    subject: "history",
    isCorrect,
    answeredAt: new Date(iso),
  };
}

describe("jstDateKey", () => {
  it("UTC を JST 暦日に変換する（日付境界）", () => {
    // 2026-06-30 15:30 UTC = 2026-07-01 00:30 JST
    expect(jstDateKey(new Date("2026-06-30T15:30:00Z"))).toBe("2026-07-01");
    // 2026-06-30 14:30 UTC = 2026-06-30 23:30 JST
    expect(jstDateKey(new Date("2026-06-30T14:30:00Z"))).toBe("2026-06-30");
  });
});

describe("aggregateMonthlyReport", () => {
  it("正答率・学習日数・最多単元を集計する", () => {
    const answers: AnswerLite[] = [
      a("鎌倉幕府", true, "2026-06-02T01:00:00Z"),
      a("鎌倉幕府", true, "2026-06-02T02:00:00Z"),
      a("鎌倉幕府", false, "2026-06-03T01:00:00Z"),
      a("元寇", false, "2026-06-04T01:00:00Z"),
    ];
    const stats = aggregateMonthlyReport(answers, {
      monthKey: "2026-06",
      currentStreak: 3,
    });
    expect(stats.totalAnswered).toBe(4);
    expect(stats.totalCorrect).toBe(2);
    expect(stats.correctRate).toBe(50);
    expect(stats.activeDays).toBe(3); // 6/2, 6/3, 6/4
    expect(stats.currentStreak).toBe(3);
    expect(stats.mostPracticedTopic?.topic).toBe("鎌倉幕府");
    expect(stats.mostPracticedTopic?.total).toBe(3);
  });

  it("得意=全問正解(かつ最低回答数)、ニガテ=1問でも間違えた単元（件数下限なし）", () => {
    const answers: AnswerLite[] = [
      // 得意: 鎌倉 = 4問中4問正解(100%・全問正解)
      a("鎌倉", true, "2026-06-01T01:00:00Z"),
      a("鎌倉", true, "2026-06-01T02:00:00Z"),
      a("鎌倉", true, "2026-06-01T03:00:00Z"),
      a("鎌倉", true, "2026-06-01T04:00:00Z"),
      // ニガテ: 元寇 = 4問中1問正解(25%・間違いあり)
      a("元寇", true, "2026-06-02T01:00:00Z"),
      a("元寇", false, "2026-06-02T02:00:00Z"),
      a("元寇", false, "2026-06-02T03:00:00Z"),
      a("元寇", false, "2026-06-02T04:00:00Z"),
      // 室町 = 2問とも不正解(0%)。件数が少なくても「1問でも間違えたら」ニガテに入る
      a("室町", false, "2026-06-03T01:00:00Z"),
      a("室町", false, "2026-06-03T02:00:00Z"),
    ];
    const stats = aggregateMonthlyReport(answers, { monthKey: "2026-06" });
    // 得意は全問正解の鎌倉のみ
    expect(stats.strengths.map((t) => t.topic)).toEqual(["鎌倉"]);
    // ニガテは正答率の低い順: 室町(0%) → 元寇(25%)。室町も件数不足でも入る
    expect(stats.weaknesses.map((t) => t.topic)).toEqual(["室町", "元寇"]);
    // 鎌倉は1問も間違えていないのでニガテには入らない
    expect(stats.weaknesses.some((t) => t.topic === "鎌倉")).toBe(false);
  });

  it("惜しい単元（4問中3問正解=75%）でも、1問間違えればニガテに入る", () => {
    const answers: AnswerLite[] = [
      a("江戸", true, "2026-06-01T01:00:00Z"),
      a("江戸", true, "2026-06-01T02:00:00Z"),
      a("江戸", true, "2026-06-01T03:00:00Z"),
      a("江戸", false, "2026-06-01T04:00:00Z"),
    ];
    const stats = aggregateMonthlyReport(answers, { monthKey: "2026-06" });
    expect(stats.weaknesses.map((t) => t.topic)).toEqual(["江戸"]);
    // 全問正解ではないので得意には入らない
    expect(stats.strengths).toEqual([]);
  });

  it("topic が null の回答は『その他』に集約される", () => {
    const answers: AnswerLite[] = [
      a(null, true, "2026-06-01T01:00:00Z"),
      a(null, false, "2026-06-01T02:00:00Z"),
    ];
    const stats = aggregateMonthlyReport(answers, { monthKey: "2026-06" });
    expect(stats.mostPracticedTopic?.topic).toBe("その他");
  });

  it("空配列でも壊れない", () => {
    const stats = aggregateMonthlyReport([], { monthKey: "2026-06" });
    expect(stats.totalAnswered).toBe(0);
    expect(stats.correctRate).toBe(0);
    expect(stats.activeDays).toBe(0);
    expect(stats.mostPracticedTopic).toBeNull();
    expect(stats.strengths).toEqual([]);
    expect(stats.weaknesses).toEqual([]);
  });
});

describe("buildReportSourceText", () => {
  it("数字と単元名を含む材料テキストを生成する", () => {
    const answers: AnswerLite[] = [
      a("鎌倉", true, "2026-06-01T01:00:00Z"),
      a("鎌倉", true, "2026-06-01T02:00:00Z"),
      a("鎌倉", true, "2026-06-01T03:00:00Z"),
      a("元寇", false, "2026-06-02T01:00:00Z"),
      a("元寇", false, "2026-06-02T02:00:00Z"),
      a("元寇", false, "2026-06-02T03:00:00Z"),
    ];
    const stats = aggregateMonthlyReport(answers, {
      monthKey: "2026-06",
      currentStreak: 2,
    });
    const text = buildReportSourceText(stats);
    expect(text).toContain("2026年6月の学習データ");
    expect(text).toContain("解いた問題数: 6問");
    expect(text).toContain("いまの連続学習日数: 2日");
    expect(text).toContain("得意そうな単元");
    expect(text).toContain("鎌倉");
    expect(text).toContain("ニガテそうな単元");
    expect(text).toContain("元寇");
  });
});

describe("formatMonthLabel", () => {
  it("YYYY-MM を日本語月表記にする", () => {
    expect(formatMonthLabel("2026-06")).toBe("2026年6月");
    expect(formatMonthLabel("2026-12")).toBe("2026年12月");
  });
});

describe("buildReportDisplay", () => {
  const answers: AnswerLite[] = [
    a("鎌倉", true, "2026-06-01T01:00:00Z"),
    a("鎌倉", true, "2026-06-01T02:00:00Z"),
    a("鎌倉", true, "2026-06-02T03:00:00Z"),
    a("元寇", false, "2026-06-03T01:00:00Z"),
    a("元寇", false, "2026-06-03T02:00:00Z"),
    a("元寇", false, "2026-06-03T03:00:00Z"),
  ];

  it("固定フォーマットの成績ブロックを生成する", () => {
    const stats = aggregateMonthlyReport(answers, {
      monthKey: "2026-06",
      currentStreak: 4,
    });
    const display = buildReportDisplay(stats);
    expect(display).toContain("📊 2026年6月のふり返り");
    expect(display).toContain("✏️ といた問題：6問");
    expect(display).toContain("⭕ 正かい：3問（正答率 50%）");
    expect(display).toContain("📅 べんきょうした日：3日");
    expect(display).toContain("🔥 れんぞく学習：4日");
    expect(display).toContain("💪 とくいな単元");
    expect(display).toContain("・鎌倉（100%）");
    expect(display).toContain("📚 ふくしゅうしたい単元");
    expect(display).toContain("・元寇（0%）");
    // Markdown 記号を含まない
    expect(display).not.toMatch(/\*\*|^#\s|^- /m);
  });

  it("連続学習0なら streak 行を出さない / 得意・ニガテ無しはプレースホルダ", () => {
    // 全問正解（間違いなし）かつ少数 → 得意にもニガテにも入らずプレースホルダ
    const few: AnswerLite[] = [
      a(null, true, "2026-06-01T01:00:00Z"),
      a(null, true, "2026-06-01T02:00:00Z"),
    ];
    const stats = aggregateMonthlyReport(few, { monthKey: "2026-06" });
    const display = buildReportDisplay(stats);
    expect(display).not.toContain("れんぞく学習");
    expect(display).toContain("もう少し解くと、ここに出てくるよ");
    expect(display).toContain("目立ったニガテはなかったよ");
  });
});

describe("pickQuestionSamples", () => {
  it("同じ問題は最新の1回だけにし、上限で打ち切る", () => {
    const answers: AnswerLite[] = [
      { questionId: "qA", choice: 0, topic: null, subject: "history", isCorrect: true, answeredAt: new Date("2026-06-03T00:00:00Z") },
      { questionId: "qA", choice: 2, topic: null, subject: "history", isCorrect: false, answeredAt: new Date("2026-06-01T00:00:00Z") },
      { questionId: "qB", choice: 1, topic: null, subject: "history", isCorrect: false, answeredAt: new Date("2026-06-02T00:00:00Z") },
    ];
    const picked = pickQuestionSamples(answers);
    expect(picked).toEqual([
      { questionId: "qA", isCorrect: true, choice: 0 },
      { questionId: "qB", isCorrect: false, choice: 1 },
    ]);
  });

  it("上限 QUESTION_SAMPLE_CAP を超えない", () => {
    const many: AnswerLite[] = Array.from({ length: QUESTION_SAMPLE_CAP + 10 }, (_, i) => ({
      questionId: `q${i}`,
      choice: 0,
      topic: null,
      subject: "history",
      isCorrect: i % 2 === 0,
      answeredAt: new Date("2026-06-01T00:00:00Z"),
    }));
    expect(pickQuestionSamples(many).length).toBe(QUESTION_SAMPLE_CAP);
  });

  it("questionId が空のものは除外", () => {
    const answers: AnswerLite[] = [
      { questionId: "", choice: 0, topic: null, subject: "history", isCorrect: true, answeredAt: new Date("2026-06-01T00:00:00Z") },
      { questionId: "qX", choice: 0, topic: null, subject: "history", isCorrect: true, answeredAt: new Date("2026-06-01T00:00:00Z") },
    ];
    expect(pickQuestionSamples(answers).map((s) => s.questionId)).toEqual(["qX"]);
  });
});

describe("buildQuestionAnalysisText", () => {
  it("正解は正解選択肢、不正解はユーザーの解答も出す", () => {
    const text = buildQuestionAnalysisText([
      { text: "鎌倉幕府を開いた人物は誰か", isCorrect: true, chosen: "源頼朝", correct: "源頼朝" },
      {
        text: "御成敗式目が定められた年は何年か",
        isCorrect: false,
        chosen: "1185年",
        correct: "1232年",
      },
    ]);
    expect(text).toContain("具体的な分析用");
    expect(text).toContain("⭕ 鎌倉幕府を開いた人物は誰か（正解:「源頼朝」）");
    expect(text).toContain('あなたの解答:「1185年」');
    expect(text).toContain('正解:「1232年」');
  });

  it("空なら空文字", () => {
    expect(buildQuestionAnalysisText([])).toBe("");
  });
});

describe("buildFallbackComment", () => {
  it("ニガテがあれば苦手復習に誘導する", () => {
    const answers: AnswerLite[] = [
      a("元寇", false, "2026-06-01T01:00:00Z"),
      a("元寇", false, "2026-06-01T02:00:00Z"),
      a("元寇", false, "2026-06-02T03:00:00Z"),
    ];
    const stats = aggregateMonthlyReport(answers, { monthKey: "2026-06" });
    const c = buildFallbackComment(stats);
    expect(c).toContain("元寇");
    expect(c).toContain("苦手を復習");
  });
});
