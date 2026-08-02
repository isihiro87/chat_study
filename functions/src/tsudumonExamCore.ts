/**
 * テスト（定期テスト）の日と範囲。純粋ロジック。
 *
 * ## 設計の勘どころ
 * 中学生は**自分のテスト範囲を正確に把握していないことが多い**（プリントを無くす、
 * 範囲表が配られるのが直前、など）。だから「正しい範囲を入力させるフォーム」ではなく、
 * **AIとの会話で目星をつけて登録する**形にする。
 *
 * - 確度 `estimated`（たぶんこのへん）でも**登録してよい**。空のままより圧倒的に役立つ
 * - あとから会話で何度でも直せる。上書きは常に最新を正とする
 * - 範囲が分からないままでも、日次配信は従来どおり動く（登録は任意）
 *
 * 設計: pdf-workbook/docs/つづもん-機能ロードマップ.md フェーズA/B
 */
import { TSUDUMON_UNITS } from './tsudumonUnits';
import {
  TSUDUMON_TOPICS,
  expandUnitsToTopics,
  topicById,
  topicsOfUnit,
  unitNosOfTopics,
} from './tsudumonTopics';
import {
  isRefComplete,
  isWorkbookComplete,
  type TsudumonProgress,
  type UnitProgress,
} from './tsudumonProgressCore';

/** 範囲の確からしさ。 */
export type ExamConfidence = 'confirmed' | 'estimated';

/** `users/{uid}.tsudumonExam` の形。 */
export interface TsudumonExam {
  /** テスト初日（JST・'YYYY-MM-DD'） */
  date: string;
  /**
   * 出題範囲の章番号（'01'〜'19'）。
   * `topicIds` があるときは**そこから導かれた章**が入る（常に整合する）。
   */
  unitNos: string[];
  /**
   * 出題範囲の節ID（例 '08-edo-bakufu'）。**細かく指定したい人だけが持つ。**
   *
   * 章だけでは粗すぎる（第08章は9節あり「江戸幕府の成立〜享保の改革」が
   * 指定できなかった）ため 2026-08-02 に追加。
   * ⚠️ 未設定の古いデータは「`unitNos` の章ぜんぶ」を意味する。読むときは
   * 直接触らず `examTopicIds()` を通すこと。
   */
  topicIds?: string[];
  confidence: ExamConfidence;
  /** 目星をつけた根拠のメモ（「学校は江戸の途中まで」など） */
  note?: string;
  updatedAt: number;
}

export type ExamValidation =
  | { ok: true; value: TsudumonExam }
  | { ok: false; reason: string };

/** テストが終わってからも1日は範囲を残す（当日の夜まで役に立つため）。 */
const KEEP_AFTER_EXAM_MS = 24 * 60 * 60 * 1000;
/** 先すぎる日付は入力ミスとみなす。 */
const MAX_AHEAD_DAYS = 180;
const MAX_UNITS = 19;
/** 節の上限（全92節）。範囲＝教材ぜんぶ、も一応許す。 */
const MAX_TOPICS = 92;

/**
 * 確認文で節を字下げして並べるときの先頭（全角スペース＋罫線）。
 * 全角スペースをソースに直接書くと eslint の no-irregular-whitespace が
 * 「紛れ込んだ空白」として弾く（skipTemplates / skipComments が既定で false）。
 * 表示には必要な文字なので、コード側では組み立てる。
 */
const TOPIC_INDENT = `${String.fromCharCode(0x3000)}└ `;
const NOTE_MAX = 120;

function isValidDateString(value: unknown): value is string {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);
}

/** 'YYYY-MM-DD'（JST）をその日の 00:00 JST のミリ秒にする。 */
export function examDateToMs(date: string): number {
  return Date.parse(`${date}T00:00:00+09:00`);
}

/** JST の今日（'YYYY-MM-DD'）。 */
export function jstToday(nowMs: number): string {
  return new Date(nowMs + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

/** テストまであと何日か（当日=0・過ぎたら負）。 */
export function daysUntilExam(exam: TsudumonExam, nowMs: number): number {
  const today = examDateToMs(jstToday(nowMs));
  return Math.round((examDateToMs(exam.date) - today) / (24 * 60 * 60 * 1000));
}

/** いま有効なテスト予定か（終わったものは無視する）。 */
export function isExamActive(
  exam: TsudumonExam | undefined,
  nowMs: number
): exam is TsudumonExam {
  if (!exam?.date || !Array.isArray(exam.unitNos)) return false;
  return examDateToMs(exam.date) + KEEP_AFTER_EXAM_MS >= nowMs;
}

/**
 * AI の `setExamScope` 呼び出しを検証する。
 * 章番号は実在するものだけ通す（AI が作文した番号を弾く）。
 */
export function validateExam(
  args: Record<string, unknown>,
  nowMs: number
): ExamValidation {
  const date = args.testDate ?? args.date;
  if (!isValidDateString(date)) {
    return {
      ok: false,
      reason: 'テストの日を YYYY-MM-DD の形で教えてください',
    };
  }
  const ms = examDateToMs(date);
  if (Number.isNaN(ms)) {
    return { ok: false, reason: 'その日付は読み取れませんでした' };
  }
  const diffDays = Math.round((ms - examDateToMs(jstToday(nowMs))) / 86400000);
  if (diffDays < -1) {
    return {
      ok: false,
      reason: 'もう終わった日付のようです。次のテストの日を教えてください',
    };
  }
  if (diffDays > MAX_AHEAD_DAYS) {
    return { ok: false, reason: '半年より先の日付は登録できません' };
  }

  // 節（topicIds）が来ていればそちらを正とし、章はそこから導く。
  // 節と章の両方を受け取って別々に検証すると、食い違ったときにどちらを信じるか
  // 決められない。**節が来たら章は計算するだけ**にして矛盾を作らない。
  const rawTopics = args.topicIds ?? args.topics;
  let topicIds: string[] | undefined;
  if (Array.isArray(rawTopics) && rawTopics.length > 0) {
    const seen = new Set<string>();
    for (const item of rawTopics) {
      const id = String(item);
      if (!topicById(id) || seen.has(id)) continue;
      seen.add(id);
    }
    if (seen.size === 0) {
      return {
        ok: false,
        reason:
          '教材にある範囲が見つかりませんでした。単元の名前で教えてください',
      };
    }
    if (seen.size > MAX_TOPICS) {
      return { ok: false, reason: '範囲が多すぎます' };
    }
    // 教材の並び順にそろえる（保存のたびに順番が変わらないように）
    topicIds = TSUDUMON_TOPICS.filter((t) => seen.has(t.id)).map((t) => t.id);
  }

  const raw = args.unitNos ?? args.units;
  let unitNos: string[];
  if (topicIds) {
    unitNos = unitNosOfTopics(topicIds);
  } else {
    if (!Array.isArray(raw) || raw.length === 0) {
      return { ok: false, reason: '範囲の単元を1つ以上えらんでください' };
    }
    const valid = new Set(TSUDUMON_UNITS.map((u) => u.no));
    unitNos = [];
    for (const item of raw) {
      // '4' や 4 で来ても拾う（AI・生徒の表記ゆれを吸収する）
      const no = String(item).padStart(2, '0');
      if (!valid.has(no) || unitNos.includes(no)) continue;
      unitNos.push(no);
    }
    if (unitNos.length === 0) {
      return {
        ok: false,
        reason:
          '教材にある単元が見つかりませんでした。単元の番号か名前で教えてください',
      };
    }
    if (unitNos.length > MAX_UNITS) {
      return { ok: false, reason: '単元が多すぎます' };
    }
    unitNos = unitNos.sort();
  }

  const confidence: ExamConfidence =
    args.confidence === 'confirmed' ? 'confirmed' : 'estimated';
  const note =
    typeof args.note === 'string' && args.note.trim()
      ? args.note.trim().slice(0, NOTE_MAX)
      : undefined;

  return {
    ok: true,
    value: {
      date,
      unitNos,
      ...(topicIds ? { topicIds } : {}),
      confidence,
      ...(note ? { note } : {}),
      updatedAt: nowMs,
    },
  };
}

/**
 * 範囲に含まれる節ID。**範囲を読むときは必ずこれを通す。**
 *
 * `topicIds` を持たない古いデータは「`unitNos` の章ぜんぶ」を意味するので、
 * ここで展開する。呼び出し側が毎回この分岐を書くと、片方だけ直して
 * 「章指定の人にだけ範囲が効かない」事故になる。
 */
export function examTopicIds(exam: TsudumonExam | undefined): string[] {
  if (!exam) return [];
  if (exam.topicIds && exam.topicIds.length > 0) return [...exam.topicIds];
  return expandUnitsToTopics(exam.unitNos ?? []);
}

/** 範囲が節まで絞り込まれているか（章まるごとではないか）。 */
export function isTopicScoped(exam: TsudumonExam | undefined): boolean {
  return !!exam?.topicIds && exam.topicIds.length > 0;
}

/**
 * その章のうち**範囲に入っている最初の節**の番号（教材の `#t{index}`）。
 *
 * 範囲を節まで絞った人に章の目次を出すと、9節の中から範囲の3節を自分で
 * 探すことになる。配信カードの行き先をここまで下ろすために使う。
 * 節指定が無い（章まるごと）ときは undefined ＝従来どおり章のトップ。
 */
export function firstInScopeTopicIndex(
  exam: TsudumonExam | undefined,
  unitNo: string
): number | undefined {
  if (!isTopicScoped(exam)) return undefined;
  const inUnit = examTopicIds(exam)
    .map((id) => topicById(id))
    .filter((t) => t?.unitNo === unitNo)
    .map((t) => t!.index)
    .sort((a, b) => a - b);
  return inUnit[0];
}

function unitTitle(no: string): string {
  return TSUDUMON_UNITS.find((u) => u.no === no)?.title ?? `第${no}章`;
}

/** 登録できたことを生徒に伝える定型文（AIの作文に任せない）。 */
export function buildExamAckText(exam: TsudumonExam, nowMs: number): string {
  const days = daysUntilExam(exam, nowMs);
  const when =
    days > 0 ? `あと${days}日` : days === 0 ? 'いよいよ今日' : 'きのう';
  // 節まで絞ってあるなら**節名を出す**。章名だけ返すと、せっかく
  // 「江戸幕府の成立〜享保の改革」を選んだ子に「幕藩体制の確立」とだけ返り、
  // 狭めた指定が伝わったのか分からない。
  const list = isTopicScoped(exam)
    ? exam.unitNos
        .map((no) => {
          const names = examTopicIds(exam)
            .map((id) => topicById(id))
            .filter((t) => t?.unitNo === no)
            .map((t) => t!.name);
          return names.length === topicsOfUnit(no).length
            ? `・${unitTitle(no)}（ぜんぶ）`
            : `・${unitTitle(no)}\n${names
                .map((n) => `${TOPIC_INDENT}${n}`)
                .join('\n')}`;
        })
        .join('\n')
    : exam.unitNos.map((no) => `・${unitTitle(no)}`).join('\n');
  return [
    `テストの予定を覚えたよ📅（${exam.date}・${when}）`,
    '',
    exam.confidence === 'estimated'
      ? '【たぶんこのあたりの範囲】'
      : '【テスト範囲】',
    list,
    '',
    'あしたからの「今日の1単元」は、この範囲を優先してお届けするね。',
    exam.confidence === 'estimated'
      ? '範囲がはっきりしたら、いつでも「範囲がわかった」と教えてね。すぐ直すよ。'
      : 'ちがっていたら、いつでも言ってね。',
  ].join('\n');
}

/**
 * AI に渡すテスト予定の文脈。未登録・終了後は空文字。
 * 「範囲が曖昧なら会話で目星をつける」方針もここで指示する。
 */
export function buildExamContext(
  exam: TsudumonExam | undefined,
  nowMs: number
): string {
  if (!isExamActive(exam, nowMs)) {
    return (
      `\n\n# テストの予定（未登録）\n` +
      `この子のテストの日・範囲はまだ分かっていません。テスト勉強の相談をされたら、` +
      `**まずテストの日を聞き**、そのあと範囲を一緒に絞り込んでください。\n` +
      `- 範囲を覚えていない子は多いので、責めない。「プリントある？」の一択で終わらせない\n` +
      `- 「学校でいまどのあたりを習ってる？」「前のテストはどこまでだった？」のように、` +
      `**単元名を出して**聞くと答えやすい（例:「江戸幕府のはじまりはもう授業でやった？」）\n` +
      `- だいたいの見当がついたら「たぶんこのあたりでいい？」と確認し、` +
      `**確度 estimated で登録してよい**（完璧を待たない。あとで直せる）\n` +
      `- 登録は setExamScope ツールで行う。範囲が1単元でも登録する価値がある`
    );
  }
  const days = daysUntilExam(exam, nowMs);
  // 節まで絞ってあれば節名で渡す。章名だけ渡すと AI が範囲外の節をすすめる。
  const list = isTopicScoped(exam)
    ? examTopicIds(exam)
        .map((id) => topicById(id))
        .filter((t): t is NonNullable<typeof t> => !!t)
        .map((t) => `${t.unitNo} ${unitTitle(t.unitNo)}／${t.name}`)
        .join(' / ')
    : exam.unitNos.map((no) => `${no} ${unitTitle(no)}`).join(' / ');
  return (
    `\n\n# テストの予定（登録ずみ・実データ）\n` +
    `- テスト日: ${exam.date}（あと${Math.max(0, days)}日）\n` +
    `- 範囲: ${list}\n` +
    `- 確度: ${exam.confidence === 'confirmed' ? '本人が確認ずみ' : '会話でつけた目星（ズレている可能性あり）'}\n` +
    (exam.note ? `- メモ: ${exam.note}\n` : '') +
    `この範囲と残り日数を踏まえて助言する。範囲外の単元・節をすすめない。\n` +
    (isTopicScoped(exam)
      ? `範囲は**節まで**絞ってある。同じ章でも一覧に無い節は範囲外なので出さない。\n`
      : '') +
    (exam.confidence === 'estimated'
      ? `確度が目星なので、範囲の話が出たら「範囲、これで合ってる？」と一度だけ確認してよい（しつこく聞かない）。\n`
      : '') +
    `範囲や日付が変わったと言われたら、setExamScope で登録し直す。`
  );
}

/**
 * 「今日の1単元」に出す章を決める（フェーズB）。
 *
 * 優先順位:
 *   1. テスト範囲の中で、間違えたままの問題が残っている章（いちばん点になる）
 *   2. テスト範囲の中で、まだ終わっていない章
 *   3. 範囲外で、間違えたままの問題が残っている章
 *   4. カリキュラム順（従来どおり。テスト予定が無いときの既定）
 *
 * 返り値の `reason` は配信文面の枕に使う（なぜこの単元なのかを伝えるため）。
 */
export type DailyPickReason =
  | 'exam_review'
  | 'exam_next'
  | 'review'
  | 'curriculum';

export function pickDailyUnit(opts: {
  exam: TsudumonExam | undefined;
  progress: TsudumonProgress | undefined;
  cursor: number;
  nowMs: number;
}): { unitNo: string; reason: DailyPickReason } {
  const { exam, progress, cursor, nowMs } = opts;
  const units = progress?.units ?? {};
  const wrongLeft = (no: string) => (units[no]?.wrongNow ?? []).length;
  const done = (no: string) => {
    const u: UnitProgress | undefined = units[no];
    return (
      isWorkbookComplete(u) || (isRefComplete(u) && (u?.answered ?? 0) > 0)
    );
  };

  if (isExamActive(exam, nowMs)) {
    const scope = exam.unitNos;
    const reviewable = scope
      .filter((no) => wrongLeft(no) > 0)
      .sort((a, b) => wrongLeft(b) - wrongLeft(a));
    if (reviewable.length > 0) {
      return { unitNo: reviewable[0], reason: 'exam_review' };
    }
    const remaining = scope.filter((no) => !done(no));
    if (remaining.length > 0) {
      return { unitNo: remaining[0], reason: 'exam_next' };
    }
    // 範囲をやり切っていたら、範囲内をカリキュラム順に回す（総復習）
    return {
      unitNo: scope[Math.abs(Math.trunc(cursor)) % scope.length],
      reason: 'exam_next',
    };
  }

  const anyReview = Object.keys(units)
    .filter((no) => wrongLeft(no) > 0)
    .sort((a, b) => wrongLeft(b) - wrongLeft(a));
  // 復習ばかりにならないよう、3回に1回だけ復習を混ぜる
  if (anyReview.length > 0 && Math.abs(Math.trunc(cursor)) % 3 === 2) {
    return { unitNo: anyReview[0], reason: 'review' };
  }

  const n = TSUDUMON_UNITS.length;
  const i = ((Math.trunc(cursor) % n) + n) % n;
  return { unitNo: TSUDUMON_UNITS[i].no, reason: 'curriculum' };
}

/** 配信文面の枕（なぜこの単元なのか）。 */
export function pickReasonLead(
  reason: DailyPickReason,
  exam: TsudumonExam | undefined,
  nowMs: number
): string {
  const days = exam ? Math.max(0, daysUntilExam(exam, nowMs)) : 0;
  switch (reason) {
    case 'exam_review':
      return `テストまであと${days}日。まちがえたままの問題があるから、ここを固めるのが近道💪`;
    case 'exam_next':
      return `テストまであと${days}日。範囲の中から、きょうはここ！`;
    case 'review':
      return 'きょうは復習の日。まちがえたところ、もう一度だけいこう🔁';
    default:
      return '';
  }
}
