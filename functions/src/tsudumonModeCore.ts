/**
 * 学習モード（定期テスト対策 / 入試対策 / 両立）の純粋ロジック。
 *
 * 設計の正本: `pdf-workbook/docs/つづもん-機能ロードマップ.md` §4-1
 *
 * ## なぜモードが要るか
 * 中1・中2は**目の前の定期テスト**が関心事で、範囲外を出されても嬉しくない。
 * 中3は**入試**があるので、範囲に関係なく全19単元を弱点から回したい。
 * 同じ「今日の1単元」でも、選び方の正解が学年で違う。
 *
 * ## 既定は学年から自動判定（`auto`）
 * 中1・中2 = 定期テスト / 中3 = 両立。**自分で選ばせない**のが要点で、
 * 設定させると大半が既定のまま使い、合っていない出題を受け続ける。
 * あとから設定ページ・チャットで変えられる。
 *
 * ## `both`（両立）の切り替え
 * テストの**14日前**になったら自動で定期テストモードに入り、終わったら入試モードに戻る。
 * 「いま何モードか」を人間が管理しなくていいようにする。
 */

import {
  isExamActive,
  daysUntilExam,
  type TsudumonExam,
} from './tsudumonExamCore';
import type { TsudumonProgress, UnitProgress } from './tsudumonProgressCore';
import { TSUDUMON_UNITS } from './tsudumonUnits';

/** ユーザーが選べる設定値。`auto` は学年から決める（既定）。 */
export type TsudumonModeSetting = 'auto' | 'exam' | 'entrance' | 'both';
/** 実際に出題ロジックが使うモード（`auto`/`both` は解決済み）。 */
export type EffectiveMode = 'exam' | 'entrance';

export const MODE_SETTINGS: readonly TsudumonModeSetting[] = [
  'auto',
  'exam',
  'entrance',
  'both',
] as const;

/** 両立モードで、テスト何日前から定期テスト対策に切り替えるか。 */
export const EXAM_SWITCH_DAYS = 14;

export function isModeSetting(value: unknown): value is TsudumonModeSetting {
  return (
    typeof value === 'string' &&
    (MODE_SETTINGS as readonly string[]).includes(value)
  );
}

/** 設定値を読む（未設定・不正値は `auto`）。 */
export function normalizeMode(value: unknown): TsudumonModeSetting {
  return isModeSetting(value) ? value : 'auto';
}

/** `auto` を学年で解決する。中1・中2＝定期テスト / 中3＝両立。 */
export function modeFromGrade(grade: unknown): 'exam' | 'both' {
  return typeof grade === 'string' && grade.includes('3') ? 'both' : 'exam';
}

/**
 * いま実際に使うモードを決める。
 *
 * - `exam` … そのまま定期テスト
 * - `entrance` … そのまま入試
 * - `both` / `auto`（中3） … テスト14日前〜終了までは `exam`、それ以外は `entrance`
 * - `auto`（中1・中2） … `exam`
 *
 * テストの予定が無い `exam` の人は、`pickDailyUnit` 側でカリキュラム順に落ちる
 * （モードだけでは出題は壊れない）。
 */
export function resolveEffectiveMode(opts: {
  setting: unknown;
  grade: unknown;
  exam: TsudumonExam | undefined;
  nowMs: number;
}): EffectiveMode {
  const setting = normalizeMode(opts.setting);
  const resolved = setting === 'auto' ? modeFromGrade(opts.grade) : setting;
  if (resolved === 'exam') return 'exam';
  if (resolved === 'entrance') return 'entrance';
  // both: テストが近ければ定期テスト、それ以外は入試
  return isExamNear(opts.exam, opts.nowMs) ? 'exam' : 'entrance';
}

/** テストが「もう近い」か（両立モードの切り替え判定）。 */
export function isExamNear(
  exam: TsudumonExam | undefined,
  nowMs: number
): boolean {
  if (!isExamActive(exam, nowMs)) return false;
  return daysUntilExam(exam, nowMs) <= EXAM_SWITCH_DAYS;
}

/** 1日（ms）。最終学習からの経過を測る。 */
const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * 入試モードの単元選び。**全19単元を、弱いところから回す**。
 *
 * 優先順位は**段（tier）で決める**。同じ段の中では「放置が長いほど先」。
 * 点数を足し合わせる方式だと、未着手（3段目）が「1問まちがえたまま」（1段目）を
 * 追い越してしまい、設計の優先順位が守られない。
 *
 *   1. 間違えたままの問題が残っている … 200 ＋ 残り問題数×5
 *   2. 正答率が低い（7割未満）        … 100 ＋ 不足ぶん×20
 *   3. まだ手をつけていない            … 50
 *   4. それ以外（できている単元）      … 0
 *
 * これに「最後にやってからの日数（最大30）」を足して、同じ段の中の順番を決める。
 * **段の間隔（50）は段内の加点の最大（20＋30）より広い**ので、段の順序は絶対に逆転しない
 *（ここが狭いと「今日やったばかりで正答率が低い単元」を未着手が追い越す）。
 *
 * 同点はカリキュラム順で安定させる（毎日同じ章が出続けないよう、
 * カーソルを起点に回す）。
 */
export function pickEntranceUnit(opts: {
  progress: TsudumonProgress | undefined;
  cursor: number;
  nowMs: number;
}): { unitNo: string; reason: EntranceReason } {
  const units = opts.progress?.units ?? {};
  const n = TSUDUMON_UNITS.length;
  const start = ((Math.trunc(opts.cursor) % n) + n) % n;

  let best: { no: string; score: number; reason: EntranceReason } | null = null;
  for (let i = 0; i < n; i++) {
    // カーソルを起点に回すことで、同点のときの選択が毎日1つずつずれる。
    const unit = TSUDUMON_UNITS[(start + i) % n];
    const u: UnitProgress | undefined = units[unit.no];
    const scored = scoreUnit(u, opts.nowMs);
    if (!best || scored.score > best.score) {
      best = { no: unit.no, score: scored.score, reason: scored.reason };
    }
  }
  return best
    ? { unitNo: best.no, reason: best.reason }
    : { unitNo: TSUDUMON_UNITS[0].no, reason: 'entrance_new' };
}

/** 入試モードで選んだ理由（配信文面の枕に使う）。 */
export type EntranceReason =
  | 'entrance_wrong'
  | 'entrance_lowscore'
  | 'entrance_new'
  | 'entrance_stale';

/** 正答率がこれ未満なら「まだ固まっていない」とみなす。 */
const LOW_ACCURACY = 0.7;

function scoreUnit(
  u: UnitProgress | undefined,
  nowMs: number
): { score: number; reason: EntranceReason } {
  // 未着手。入試は全範囲から出るので、空白を放置しない。
  if (!u || (u.answered ?? 0) === 0) {
    return { score: 50 + 30, reason: 'entrance_new' };
  }

  const staleDays = u.lastAt
    ? Math.min(30, Math.max(0, Math.floor((nowMs - u.lastAt) / DAY_MS)))
    : 30;
  const wrong = (u.wrongNow ?? []).length;
  if (wrong > 0) {
    return { score: 200 + wrong * 5 + staleDays, reason: 'entrance_wrong' };
  }
  const accuracy = (u.correct ?? 0) / u.answered;
  if (accuracy < LOW_ACCURACY) {
    return {
      score: 100 + Math.round((LOW_ACCURACY - accuracy) * 20) + staleDays,
      reason: 'entrance_lowscore',
    };
  }
  return { score: staleDays, reason: 'entrance_stale' };
}

/** 入試モードの配信文面の枕（なぜこの単元なのか）。 */
export function entranceReasonLead(reason: EntranceReason): string {
  switch (reason) {
    case 'entrance_wrong':
      return '入試までの積み上げ。まちがえたままの問題があるから、ここを固めよう💪';
    case 'entrance_lowscore':
      return '入試までの積み上げ。正答率が上がりきってない単元をもう一度🔁';
    case 'entrance_new':
      return '入試は全範囲から出るよ。まだ手をつけてない単元をひとつ';
    default:
      return 'しばらく空いた単元だよ。思い出しながらいこう';
  }
}

/** 設定ページ・チャットで見せるモードの説明（文言の正本）。 */
export const MODE_LABELS: Record<TsudumonModeSetting, string> = {
  auto: 'おまかせ（学年に合わせる）',
  exam: '定期テスト対策',
  entrance: '入試対策',
  both: '両立（テスト前だけ切り替える）',
};

export const MODE_DESCRIPTIONS: Record<TsudumonModeSetting, string> = {
  auto: '中1・中2は定期テスト対策、中3は両立になります。',
  exam: 'テスト範囲の中から出します。範囲を登録していないときは順番どおりに進みます。',
  entrance: '全19単元を、まちがえたところ・正答率の低いところから回します。',
  both: `ふだんは入試対策、テストの${EXAM_SWITCH_DAYS}日前になったら自動で定期テスト対策に切り替わります。`,
};
