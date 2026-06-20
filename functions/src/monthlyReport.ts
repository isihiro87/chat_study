/**
 * 月末ふり返りレポート（AI 学習分析）の本体。
 *
 * フロー:
 *   1. 月末に `sendMonthlyReportInvite` cron が「今月のレポートを見る」ボタン（flex）を
 *      push する（配信枠を1通消費）。
 *   2. ユーザーがボタンをタップ → postback `type=monthly_report&month=YYYY-MM` →
 *      `handleMonthlyReportPostback` が、その月の `answers` を集計し、Gemini で
 *      中学生向けのふり返りメッセージへ変換して reply（配信枠ゼロ）。
 *
 * コスト規律:
 *   - answers はその月の範囲に絞り `.limit()` 付きで1クエリのみ（全件スキャンしない）。
 *   - 同じ月のレポートは `users/{uid}.monthlyReport` にキャッシュし、再タップ時は
 *     Gemini を呼ばずキャッシュを返す（連打しても課金が増えない）。
 *   - 回答数が少なすぎる月は AI を呼ばず案内文を返す（課金ゼロ）。
 */

import { getLineClient, getUserPlan } from "./lineWebhook";
import { generateGeminiText } from "./aiChat";
import { buildMonthlyReportSystemPrompt } from "./monthlyReportPrompt";
import {
  aggregateMonthlyReport,
  buildReportDisplay,
  buildReportSourceText,
  buildFallbackComment,
  buildQuestionAnalysisText,
  pickQuestionSamples,
  formatMonthLabel,
  MIN_ANSWERS_FOR_REPORT,
  type AnswerLite,
} from "./monthlyReportCore";

/**
 * Gemini の出力トークン上限。コメント本文は3〜5文（100〜200字）と短いが、
 * flash 系は分析（思考）にもトークンを使うため、本文が途中で切れないよう
 * 余裕を持たせる（上限なので短く収まる分には消費されない）。
 */
const REPORT_MAX_OUTPUT_TOKENS = 2048;
/**
 * 月末レポートの得意・不得意分析に使うモデル。
 * AI チャット（既定 flash-lite）より analysis 精度の高い flash を明示指定する。
 */
const REPORT_MODEL = "gemini-3.5-flash";
/**
 * 予備モデル。primary（3.5-flash）が混雑（503）等で使えないとき、テンプレに
 * 落とす前にこちらで AI 分析を試みる。AI チャット既定の軽量モデル。
 */
const REPORT_FALLBACK_MODEL = process.env.GEMINI_MODEL || "gemini-3.1-flash-lite";
/**
 * 分析用 Gemini のタイムアウト（ms）。flash は flash-lite より遅く、問題リスト
 * の分析もあるため、AI チャットの 12s より長めにとる（reply は postback 由来で
 * replyToken の有効期間にも余裕がある）。
 */
const REPORT_TIMEOUT_MS = 28_000;
/** 1ユーザーの集計に読む answers の上限（その月の回答だけなので十分）。 */
const ANSWERS_QUERY_LIMIT = 500;

/** postback データ種別。 */
export const MONTHLY_REPORT_POSTBACK_TYPE = "monthly_report";

/** JST の年月（"YYYY-MM"）を返す。 */
export function currentJstMonthKey(date: Date): string {
  const jst = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 7);
}

/**
 * "YYYY-MM"（JST の月）を、絶対時刻（UTC ミリ秒）の [start, end) 範囲に変換する。
 * start = その月 JST 1日 00:00、end = 翌月 JST 1日 00:00。
 */
export function monthKeyToRange(monthKey: string): {
  startMs: number;
  endMs: number;
} | null {
  const m = /^(\d{4})-(\d{2})$/.exec(monthKey);
  if (!m) return null;
  const year = Number(m[1]);
  const month = Number(m[2]); // 1〜12
  const JST_OFFSET = 9 * 60 * 60 * 1000;
  // JST 月初 00:00 を UTC ミリ秒で表す（UTC の同時刻から 9h 引く）。
  const startMs = Date.UTC(year, month - 1, 1, 0, 0, 0) - JST_OFFSET;
  const endMs = Date.UTC(year, month, 1, 0, 0, 0) - JST_OFFSET;
  return { startMs, endMs };
}

/**
 * 月末招待 flex メッセージを組み立てる（cron が push する本体）。
 * タップで postback `type=monthly_report&month=YYYY-MM` を発火する。
 */
export function buildMonthlyReportInviteMessage(monthKey: string) {
  const monthLabel = formatMonthLabel(monthKey);
  return {
    type: "flex" as const,
    altText: `${monthLabel}の学習レポートができたよ`,
    contents: {
      type: "bubble" as const,
      body: {
        type: "box" as const,
        layout: "vertical" as const,
        spacing: "md" as const,
        contents: [
          {
            type: "text" as const,
            text: `📊 ${monthLabel}のふり返り`,
            weight: "bold" as const,
            size: "lg" as const,
            color: "#111827",
            wrap: true,
          },
          {
            type: "text" as const,
            text: "今月がんばったこと・得意・ニガテを、きみ専用にまとめたよ。ボタンを押すと届くよ😊",
            size: "sm" as const,
            color: "#6B7280",
            wrap: true,
          },
        ],
      },
      footer: {
        type: "box" as const,
        layout: "vertical" as const,
        contents: [
          {
            type: "button" as const,
            style: "primary" as const,
            color: "#F59E0B",
            action: {
              type: "postback" as const,
              label: "今月のレポートを見る",
              data: `type=${MONTHLY_REPORT_POSTBACK_TYPE}&month=${monthKey}`,
              displayText: "今月のレポートを見る",
            },
          },
        ],
      },
    },
  };
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * 分析コメントを AI で生成する。primary（3.5-flash）を数回リトライ（503/混雑の
 * スパイクは一時的なことが多い）→ それでもダメなら予備モデルで1回 → 全部ダメなら
 * null。reply token の有効期間に収まるよう、合計でも数十秒に収める。
 */
async function generateAnalysisComment(
  systemPrompt: string,
  sourceText: string
): Promise<string | null> {
  const attempts: Array<{ model: string; timeoutMs: number }> = [
    { model: REPORT_MODEL, timeoutMs: REPORT_TIMEOUT_MS },
    { model: REPORT_MODEL, timeoutMs: REPORT_TIMEOUT_MS },
    { model: REPORT_FALLBACK_MODEL, timeoutMs: 18_000 },
  ];
  for (let i = 0; i < attempts.length; i++) {
    const { model, timeoutMs } = attempts[i];
    try {
      const text = await generateGeminiText(
        systemPrompt,
        sourceText,
        REPORT_MAX_OUTPUT_TOKENS,
        model,
        timeoutMs
      );
      if (text.trim()) return text.trim();
    } catch (error) {
      console.error(
        `[monthlyReport] gemini attempt ${i + 1} failed (model=${model}):`,
        (error as Error).message
      );
    }
    // 次の試行まで少し待つ（混雑スパイクをやり過ごす）。最後の試行後は待たない。
    if (i < attempts.length - 1) await sleep(1500);
  }
  return null;
}

/** firebase-admin の Firestore を遅延初期化して返す（lineWebhook と同パターン）。 */
async function getDb() {
  const { initializeApp, getApps } = await import("firebase-admin/app");
  const { getFirestore, FieldValue, Timestamp } = await import(
    "firebase-admin/firestore"
  );
  if (getApps().length === 0) {
    initializeApp();
  }
  return { db: getFirestore(), FieldValue, Timestamp };
}

async function replyTextSimple(
  replyToken: string,
  text: string
): Promise<void> {
  const client = await getLineClient();
  await client.replyMessage({
    replyToken,
    messages: [{ type: "text", text }],
  });
}

/**
 * トーク画面に「考え中…」のローディングアニメーションを表示する（best-effort）。
 * reply token も月間配信枠も消費しない専用 API。loadingSeconds は5の倍数・最大60。
 * その後 reply（レポート本体）が届くとアニメーションは自動的に消える。
 */
async function startLoadingAnimation(
  lineUserId: string,
  loadingSeconds: number
): Promise<void> {
  try {
    const client = await getLineClient();
    await client.showLoadingAnimation({ chatId: lineUserId, loadingSeconds });
  } catch (error) {
    console.warn("[monthlyReport] loading animation failed:", error);
  }
}

/**
 * 月末レポート postback のハンドラ。`lineWebhook.handlePostback` から呼ばれる。
 */
export async function handleMonthlyReportPostback(
  uid: string,
  replyToken: string | undefined,
  params: URLSearchParams
): Promise<void> {
  if (!replyToken) return;

  const monthKey = params.get("month") || currentJstMonthKey(new Date());
  const range = monthKeyToRange(monthKey);
  if (!range) {
    await replyTextSimple(
      replyToken,
      "ごめんね、レポートをうまく出せなかったみたい💦 もう一度ボタンを押してみてね。"
    ).catch(() => undefined);
    return;
  }

  const { db, FieldValue, Timestamp } = await getDb();

  // ユーザードキュメントを1回だけ読む（plan / grade / streak / キャッシュ）。
  let grade: string | undefined;
  let currentStreak = 0;
  let cachedText: string | null = null;
  try {
    const snap = await db.doc(`users/${uid}`).get();
    const data = (snap.exists ? snap.data() : {}) as Record<string, unknown>;
    void getUserPlan(data); // 将来のプラン別出し分け用（現状は共通）
    if (typeof data.grade === "string") grade = data.grade;
    const stats = (data.stats as Record<string, unknown> | undefined) ?? {};
    const streak = (stats.streak as Record<string, unknown> | undefined) ?? {};
    if (typeof streak.current === "number") currentStreak = streak.current;
    const mr = (data.monthlyReport as Record<string, unknown> | undefined) ?? {};
    if (mr.month === monthKey && typeof mr.text === "string" && mr.text) {
      cachedText = mr.text;
    }
  } catch (error) {
    console.error("[monthlyReport] user fetch failed:", error);
  }

  // 同じ月のレポートは生成済みならキャッシュを返す（Gemini を呼ばない）。
  if (cachedText) {
    await replyTextSimple(replyToken, cachedText).catch((e) =>
      console.error("[monthlyReport] cached reply failed:", e)
    );
    void logViewed(uid, monthKey, true);
    return;
  }

  // ここから集計＋AI 分析で数十秒かかることがある。トーク画面に「考え中…」の
  // ローディングアニメーションを出す（reply token も配信枠も消費しない）。
  // 失敗しても本処理は止めない。レポート reply が届くと自動で消える。
  const lineUserId = uid.startsWith("line:") ? uid.slice("line:".length) : uid;
  void startLoadingAnimation(lineUserId, 30);

  // その月の answers を集計（範囲＋limit のみ。全件スキャンしない）。
  let answers: AnswerLite[] = [];
  try {
    // orderBy は desc（集計は順序非依存）。既存の複合インデックス
    // (uid ASC, answeredAt DESC) をそのまま使い、新規インデックス作成を避ける。
    const snap = await db
      .collection("answers")
      .where("uid", "==", uid)
      .where("answeredAt", ">=", Timestamp.fromMillis(range.startMs))
      .where("answeredAt", "<", Timestamp.fromMillis(range.endMs))
      .orderBy("answeredAt", "desc")
      .limit(ANSWERS_QUERY_LIMIT)
      .get();
    answers = snap.docs.map((d) => {
      const v = d.data();
      const ts = v.answeredAt as { toDate?: () => Date } | undefined;
      return {
        questionId: typeof v.questionId === "string" ? v.questionId : "",
        choice: typeof v.choice === "number" ? v.choice : -1,
        topic: typeof v.topic === "string" ? v.topic : null,
        subject: typeof v.subject === "string" ? v.subject : null,
        isCorrect: v.isCorrect === true,
        answeredAt: ts?.toDate ? ts.toDate() : new Date(range.startMs),
      };
    });
  } catch (error) {
    console.error("[monthlyReport] answers query failed:", error);
    await replyTextSimple(
      replyToken,
      "ごめんね、レポートの作成に失敗しちゃった💦 少し時間をおいて、もう一度ボタンを押してみてね。"
    ).catch(() => undefined);
    return;
  }

  const monthLabel = formatMonthLabel(monthKey);

  // 回答が少なすぎる月は AI を呼ばず案内文（課金ゼロ）。
  if (answers.length < MIN_ANSWERS_FOR_REPORT) {
    await replyTextSimple(
      replyToken,
      `${monthLabel}はまだ問題が少なめだったから、ふり返りはお休みするね。来月はメニューの「1問解く」でどんどん解いてみよう！たくさん解くほど、きみ専用のレポートがくわしくなるよ😊`
    ).catch((e) => console.error("[monthlyReport] few-answers reply failed:", e));
    return;
  }

  const stats = aggregateMonthlyReport(answers, { monthKey, currentStreak });

  // 成績ブロックはコードで固定フォーマット生成（出力形式を一定に保つ）。
  const display = buildReportDisplay(stats);

  // 「具体的な分析」用に、その月の問題本文＋正誤を AI に渡す材料を作る。
  // questions コレクションから本文を引く（unique・上限つきの getAll で read を抑える）。
  const samples = pickQuestionSamples(answers);
  let questionAnalysisText = "";
  try {
    const refs = samples.map((s) => db.doc(`questions/${s.questionId}`));
    if (refs.length > 0) {
      const docs = await db.getAll(...refs);
      // questionId → { text, choices, correctChoiceId }
      const qById = new Map<
        string,
        { text: string; choices: string[]; correctChoiceId: number }
      >();
      for (const d of docs) {
        if (!d.exists) continue;
        const data = d.data() ?? {};
        const text = typeof data.text === "string" ? data.text : "";
        const choices = Array.isArray(data.choices)
          ? (data.choices as unknown[]).map((c) => String(c))
          : [];
        const correctChoiceId =
          typeof data.correctChoiceId === "number" ? data.correctChoiceId : -1;
        if (text.trim()) qById.set(d.id, { text, choices, correctChoiceId });
      }
      const items = samples
        .map((s) => {
          const q = qById.get(s.questionId);
          if (!q) return null;
          return {
            text: q.text,
            isCorrect: s.isCorrect,
            chosen: q.choices[s.choice] ?? "",
            correct: q.choices[q.correctChoiceId] ?? "",
          };
        })
        .filter((it): it is NonNullable<typeof it> => it !== null);
      questionAnalysisText = buildQuestionAnalysisText(items);
    }
  } catch (error) {
    // 本文が引けなくても、トピック集計だけで AI コメントは作れる（致命ではない）。
    console.error("[monthlyReport] question text fetch failed:", error);
  }

  const sourceText = questionAnalysisText
    ? `${buildReportSourceText(stats)}\n\n${questionAnalysisText}`
    : buildReportSourceText(stats);

  // 分析コメントを AI で生成。3.5-flash が一時的に 503（高負荷）を返すことが
  // あるので、数回リトライ → それでもダメなら予備モデル（flash-lite）→ 最後に
  // テンプレ、の順でフォールバックし、できる限り AI 分析を返す。
  const systemPrompt = buildMonthlyReportSystemPrompt(grade);
  const aiComment = await generateAnalysisComment(systemPrompt, sourceText);
  const comment = aiComment ?? buildFallbackComment(stats);

  const reportText = `${display}\n\n─────\n${comment}`;

  // reply（配信枠ゼロ）。
  try {
    await replyTextSimple(replyToken, reportText);
  } catch (error) {
    console.error("[monthlyReport] reply failed:", error);
    return; // 返信できなければキャッシュも書かない
  }

  // 生成成功時のみキャッシュを書き戻す（同月の再タップで Gemini を呼ばないため）。
  try {
    await db.doc(`users/${uid}`).set(
      {
        monthlyReport: {
          month: monthKey,
          text: reportText,
          generatedAt: FieldValue.serverTimestamp(),
        },
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error("[monthlyReport] cache write failed:", error);
  }

  void logViewed(uid, monthKey, false);
}

/** レポート閲覧を funnel に記録（fire-and-forget）。 */
async function logViewed(
  uid: string,
  monthKey: string,
  cached: boolean
): Promise<void> {
  try {
    const { logServerFunnelEvent } = await import("./funnelEvent");
    await logServerFunnelEvent("monthly_report_viewed", uid, {
      month: monthKey,
      cached,
    });
  } catch (error) {
    console.warn("[monthlyReport] funnel log failed:", error);
  }
}
