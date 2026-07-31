/**
 * つづもんの学習ログ（進み具合・時間・正誤）の純粋ロジック。
 *
 * ## 背景
 * つづもんのWeb教材の進捗は、これまで**端末の localStorage にしか無かった**
 * （`tzmwb-{章}` / `tzmref-{章}`）。そのためサーバ側には「どこまで進んだか」も
 * 「何をどれだけ間違えたか」も無く、AIが個別に対応できなかった。
 * 教材ページから定期的にスナップショットを送ってもらい、ここで集計する。
 *
 * ## 送られてくるもの（`recordTsudumonProgress`）
 * - **進捗はフル・スナップショット**（冪等。取りこぼしても次回で追いつく）
 * - **時間は増分**（前回送信からの可視時間。二重計上を避けるためクライアントで消す）
 *
 * ## 保存先
 * - `users/{uid}.tsudumonProgress` … ここで作るサマリ。AIは**1 read**で読める
 * - `tsudumonEvents/{uid}/syncs/{id}` … 生の同期ログ（「どんなふうに進めたか」の時系列）
 */

/** 設問の種別。qid の接頭辞から決まる（`qa-…` `qz-…` `wr-…`）。 */
export type QuestionKind = 'qa' | 'qz' | 'wr';

const KIND_LABEL: Record<QuestionKind, string> = {
  qa: '一問一答',
  qz: '4択',
  wr: '記述',
};

/** 1章ぶんの集計。 */
export interface UnitProgress {
  /** 参考書で読み終えたセクション数 */
  refSteps: number;
  /** 問題集で解き終えたセクション数 */
  wbSteps: number;
  answered: number;
  correct: number;
  /** 参考書を読んでいた時間(ms) */
  msRef: number;
  /** 問題集を解いていた時間(ms) */
  msWb: number;
  /** いま間違えたままの設問 */
  wrongNow: string[];
  /** その章の参考書の全節数（教材ページが送ってくる。0=未取得） */
  refTotal: number;
  /** その章の問題集の全設問数（同上） */
  qTotal: number;
  lastAt: number;
}

/**
 * 日別の学習ログ1件。ドキュメントを膨らませないためキーは1文字。
 * `d` = JST日付 'YYYY-MM-DD' / `ms` = その日の学習時間 / `a` = その日解いた問題数
 *
 * 「直近7日で何日やったか」は `units[].lastAt`（1点しか持たない）からは出せないので、
 * 日単位の記録をここに持つ。保護者ダッシュボードと週次の振り返りが読む。
 */
export interface StudyDayLog {
  d: string;
  ms: number;
  a: number;
}

/** 日別ログの保持件数。直近2週間ぶんだけ持つ（ドキュメント肥大を防ぐ）。 */
export const STUDY_DAY_LOG_MAX = 14;

export interface TsudumonProgress {
  updatedAt: number;
  units: Record<string, UnitProgress>;
  /** 日別の学習ログ（直近14日）。古い進捗ドキュメントには無いことがある。 */
  days?: StudyDayLog[];
  totals: {
    answered: number;
    correct: number;
    msRef: number;
    msWb: number;
    /** 合計学習時間（参考書＋問題集） */
    msTotal: number;
    /** 1問でも解いた章の数 */
    startedUnits: number;
  };
  byKind: Record<QuestionKind, { answered: number; correct: number }>;
  /** 設問ごとの「間違えた回数」。多い順に上位だけ保持する。 */
  wrong: Record<string, number>;
  /**
   * **直前に開いていた章**（'01'〜'19'）。
   * AIが「さっきやってた単元」を推測ではなく事実として使うためのもの。
   * 学習時間が付いている章＝いま開いていたページ、として同期のたびに更新する。
   */
  lastUnit?: string;
  /** `lastUnit` を記録した時刻（ms）。 */
  lastUnitAt?: number;
}

/** クライアントから届く1章ぶんのスナップショット。 */
export interface UnitSnapshot {
  /** 参考書で読み終えたセクション数 */
  refSteps?: number;
  /** 問題集で解き終えたセクション数 */
  wbSteps?: number;
  /** 設問の正誤（qid → 1=正解 / 0=不正解）。**その章の全状態**を送る */
  r?: Record<string, number>;
  /** 前回送信からの可視時間(ms) */
  msRef?: number;
  msWb?: number;
  /** その章の全節数・全設問数（「やり切ったか」の判定に使う） */
  refTotal?: number;
  qTotal?: number;
}

export interface ProgressSyncPayload {
  units: Record<string, UnitSnapshot>;
}

/** 保持する「間違えた設問」の上限（ドキュメント肥大を防ぐ）。 */
const WRONG_MAX = 60;
/** 1章あたりの wrongNow 上限。 */
const WRONG_NOW_MAX = 40;
/** 1回の同期で受け付ける最大の時間増分（12時間）。タブ放置による異常値を弾く。 */
const MS_DELTA_MAX = 12 * 60 * 60 * 1000;

export function kindOfQid(qid: string): QuestionKind | null {
  if (qid.startsWith('qa-')) return 'qa';
  if (qid.startsWith('qz-')) return 'qz';
  if (qid.startsWith('wr-')) return 'wr';
  return null;
}

function emptyProgress(): TsudumonProgress {
  return {
    updatedAt: 0,
    units: {},
    totals: {
      answered: 0,
      correct: 0,
      msRef: 0,
      msWb: 0,
      msTotal: 0,
      startedUnits: 0,
    },
    byKind: {
      qa: { answered: 0, correct: 0 },
      qz: { answered: 0, correct: 0 },
      wr: { answered: 0, correct: 0 },
    },
    wrong: {},
  };
}

function num(value: unknown, max = Number.MAX_SAFE_INTEGER): number {
  const n = typeof value === 'number' && Number.isFinite(value) ? value : 0;
  return Math.max(0, Math.min(Math.trunc(n), max));
}

/** 章キー（'01'〜'19'）として妥当か。 */
export function isValidUnitKey(key: string): boolean {
  return /^(0[1-9]|1[0-9])$/.test(key);
}

/**
 * 受信ペイロードを検証して正規化する。
 * 章キー・qid の形が不正なものは**黙って捨てる**（不正な入力で全体を落とさない）。
 */
export function normalizePayload(raw: unknown): ProgressSyncPayload {
  const out: ProgressSyncPayload = { units: {} };
  const units = (raw as ProgressSyncPayload | undefined)?.units;
  if (!units || typeof units !== 'object') return out;
  for (const [key, value] of Object.entries(units)) {
    if (!isValidUnitKey(key) || !value || typeof value !== 'object') continue;
    const snap = value as UnitSnapshot;
    const r: Record<string, number> = {};
    if (snap.r && typeof snap.r === 'object') {
      for (const [qid, v] of Object.entries(snap.r)) {
        if (typeof qid !== 'string' || !kindOfQid(qid)) continue;
        if (qid.length > 80) continue;
        // 正解=1 / 不正解=0。クライアントの都合で true が来ても受け取る。
        r[qid] = (v as unknown) === 1 || (v as unknown) === true ? 1 : 0;
      }
    }
    out.units[key] = {
      refSteps: num(snap.refSteps, 500),
      wbSteps: num(snap.wbSteps, 500),
      msRef: num(snap.msRef, MS_DELTA_MAX),
      msWb: num(snap.msWb, MS_DELTA_MAX),
      refTotal: num(snap.refTotal, 500),
      qTotal: num(snap.qTotal, 500),
      r,
    };
  }
  return out;
}

/** `tsudumonProgress.days` を安全に読み出す（壊れた値は捨てる）。 */
export function readStudyDayLogs(progressRaw: unknown): StudyDayLog[] {
  if (!progressRaw || typeof progressRaw !== 'object') return [];
  const days = (progressRaw as Record<string, unknown>).days;
  if (!Array.isArray(days)) return [];
  const out: StudyDayLog[] = [];
  for (const entry of days) {
    if (!entry || typeof entry !== 'object') continue;
    const e = entry as Record<string, unknown>;
    if (typeof e.d !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(e.d)) continue;
    out.push({
      d: e.d,
      ms: finiteOr(e.ms, 0),
      a: finiteOr(e.a, 0),
    });
  }
  return out;
}

/**
 * 日別ログに当日ぶんを足して返す（純粋）。同じ日は加算し、古いものから捨てる。
 * `mergeProgress` の中で呼ぶので、**追加の Firestore read は発生しない**。
 */
export function appendStudyDay(
  logs: StudyDayLog[],
  today: string,
  addedMs: number,
  addedAnswered: number
): StudyDayLog[] {
  const current = logs.find((l) => l.d === today);
  const next = logs.filter((l) => l.d !== today);
  next.push({
    d: today,
    ms: (current?.ms ?? 0) + Math.max(0, addedMs),
    a: (current?.a ?? 0) + Math.max(0, addedAnswered),
  });
  next.sort((a, b) => (a.d < b.d ? -1 : a.d > b.d ? 1 : 0));
  return next.slice(-STUDY_DAY_LOG_MAX);
}

function finiteOr(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

/** JST の 'YYYY-MM-DD'。 */
function jstDay(nowMs: number): string {
  return new Date(nowMs + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

/**
 * サマリへスナップショットを畳み込む。
 *
 * - 進捗（読了数・解答数）は **max** を取る（再送・端末違いで巻き戻らない）
 * - 時間は **加算**（増分が届く前提）
 * - 「間違えた回数」は、**前回は間違いでなかった設問が不正解になったとき**に +1
 *   （同じ誤答を送り直しても増えない＝冪等）
 * - 日別ログ `days` に当日ぶんを加算（保護者ダッシュボードの「今週◯日」の元データ）
 */
export function mergeProgress(
  prev: TsudumonProgress | undefined,
  payload: ProgressSyncPayload,
  nowMs: number
): TsudumonProgress {
  const next: TsudumonProgress = prev
    ? {
        ...emptyProgress(),
        ...prev,
        units: { ...prev.units },
        wrong: { ...prev.wrong },
      }
    : emptyProgress();

  // 「直前に開いていた単元」を選ぶための作業変数。
  let lastUnit: string | undefined;
  let topMs = 0;

  for (const [key, snap] of Object.entries(payload.units)) {
    const before: UnitProgress = next.units[key] ?? {
      refSteps: 0,
      wbSteps: 0,
      answered: 0,
      correct: 0,
      msRef: 0,
      msWb: 0,
      wrongNow: [],
      refTotal: 0,
      qTotal: 0,
      lastAt: 0,
    };
    const entries = Object.entries(snap.r ?? {});
    const answered = entries.length;
    const correct = entries.filter(([, v]) => v === 1).length;
    const wrongNow = entries
      .filter(([, v]) => v !== 1)
      .map(([qid]) => qid)
      .slice(0, WRONG_NOW_MAX);

    // 新しく間違えた設問だけ回数を増やす（前回すでに間違いだったものは数えない）。
    const wasWrong = new Set(before.wrongNow ?? []);
    for (const qid of wrongNow) {
      if (!wasWrong.has(qid)) {
        next.wrong[qid] = (next.wrong[qid] ?? 0) + 1;
      }
    }

    // ⚠️ **この同期で実際に進んだ章だけ** `lastAt` を更新する。
    //
    // 教材ページは毎回 localStorage 全体（＝過去にやった全章）を送ってくる。
    // 以前はそのすべてに `lastAt = 今` を入れていたため、**どの章も同じ時刻**になり、
    // 「最近やった章」が意味を持たなかった（第1章を読んだ直後に別の章の
    // 理解度チェックが出た事故の根本原因・2026-07-27）。
    const msDelta = (snap.msRef ?? 0) + (snap.msWb ?? 0);
    const advanced =
      msDelta > 0 ||
      (snap.refSteps ?? 0) > before.refSteps ||
      (snap.wbSteps ?? 0) > before.wbSteps ||
      answered > before.answered ||
      correct > before.correct ||
      wrongNow.join(',') !== (before.wrongNow ?? []).join(',');

    next.units[key] = {
      refSteps: Math.max(before.refSteps, snap.refSteps ?? 0),
      wbSteps: Math.max(before.wbSteps, snap.wbSteps ?? 0),
      answered: Math.max(before.answered, answered),
      correct: Math.max(before.correct, correct),
      msRef: before.msRef + (snap.msRef ?? 0),
      msWb: before.msWb + (snap.msWb ?? 0),
      wrongNow,
      // 総数は教材ページからしか分からない。一度取れたら保持する（0で上書きしない）。
      refTotal: Math.max(before.refTotal ?? 0, snap.refTotal ?? 0),
      qTotal: Math.max(before.qTotal ?? 0, snap.qTotal ?? 0),
      lastAt: advanced ? nowMs : (before.lastAt ?? 0),
    };

    // 「いま開いていた章」を1つだけ覚える。学習時間が付いている章＝そのページ。
    // これがあると、AIは「さっき読んでいた単元」を推測ではなく事実として使える。
    if (msDelta > topMs) {
      topMs = msDelta;
      lastUnit = key;
    } else if (!lastUnit && advanced) {
      lastUnit = key;
    }
  }

  // 種別ごとの集計は、全章の現在状態から作り直す（数え漏れ・二重計上が起きない）。
  const byKind = emptyProgress().byKind;
  for (const [key, snap] of Object.entries(payload.units)) {
    void key;
    for (const [qid, v] of Object.entries(snap.r ?? {})) {
      const kind = kindOfQid(qid);
      if (!kind) continue;
      byKind[kind].answered += 1;
      if (v === 1) byKind[kind].correct += 1;
    }
  }
  // 今回送られてこなかった章のぶんは前回値を保つ（部分同期でも壊れない）。
  for (const kind of ['qa', 'qz', 'wr'] as QuestionKind[]) {
    next.byKind[kind] = {
      answered: Math.max(
        next.byKind[kind]?.answered ?? 0,
        byKind[kind].answered
      ),
      correct: Math.max(next.byKind[kind]?.correct ?? 0, byKind[kind].correct),
    };
  }

  const units = Object.values(next.units);
  next.totals = {
    answered: units.reduce((a, u) => a + u.answered, 0),
    correct: units.reduce((a, u) => a + u.correct, 0),
    msRef: units.reduce((a, u) => a + u.msRef, 0),
    msWb: units.reduce((a, u) => a + u.msWb, 0),
    msTotal: units.reduce((a, u) => a + u.msRef + u.msWb, 0),
    startedUnits: units.filter((u) => u.answered > 0 || u.refSteps > 0).length,
  };
  next.updatedAt = nowMs;

  // 日別ログ。実際に何かした日だけを記録する（0分0問の同期では日数を増やさない）。
  const msDelta = Object.values(payload.units).reduce(
    (a, u) => a + (u.msRef ?? 0) + (u.msWb ?? 0),
    0
  );
  const answeredDelta = Math.max(
    0,
    next.totals.answered - (prev?.totals?.answered ?? 0)
  );
  next.days = readStudyDayLogs(prev);
  if (msDelta > 0 || answeredDelta > 0) {
    next.days = appendStudyDay(
      next.days,
      jstDay(nowMs),
      msDelta,
      answeredDelta
    );
  }

  // 間違えた設問が増えすぎたら、回数の多い順に上位だけ残す。
  const wrongEntries = Object.entries(next.wrong);
  if (wrongEntries.length > WRONG_MAX) {
    next.wrong = Object.fromEntries(
      wrongEntries.sort((a, b) => b[1] - a[1]).slice(0, WRONG_MAX)
    );
  }
  if (lastUnit) {
    next.lastUnit = lastUnit;
    next.lastUnitAt = nowMs;
  }
  return next;
}

function minutes(ms: number): number {
  return Math.round(ms / 60000);
}

function accuracy(correct: number, answered: number): number | null {
  return answered > 0 ? Math.round((correct / answered) * 100) : null;
}

/** 「間違えやすい設問」を多い順に返す。 */
export function topWrongQids(
  progress: TsudumonProgress | undefined,
  limit = 5
): Array<{ qid: string; count: number; kind: QuestionKind | null }> {
  if (!progress?.wrong) return [];
  return Object.entries(progress.wrong)
    .filter(([, count]) => count >= 2) // 1回だけの誤答は「間違えやすい」とは言わない
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([qid, count]) => ({ qid, count, kind: kindOfQid(qid) }));
}

/** いま復習するとよい章（間違いが残っている章を、間違いの多い順に）。 */
export function unitsNeedingReview(
  progress: TsudumonProgress | undefined,
  limit = 3
): Array<{ unit: string; wrong: number }> {
  if (!progress?.units) return [];
  return Object.entries(progress.units)
    .map(([unit, u]) => ({ unit, wrong: (u.wrongNow ?? []).length }))
    .filter((x) => x.wrong > 0)
    .sort((a, b) => b.wrong - a.wrong)
    .slice(0, limit);
}

/**
 * AI へ差し込む学習状況の要約。
 * 記録が無ければ空文字（平常時のプロンプトを汚さない）。
 */
export function buildTsudumonProgressContext(
  progress: TsudumonProgress | undefined,
  unitName: (unit: string) => string
): string {
  if (!progress || progress.totals.answered === 0) {
    if (!progress || progress.totals.msTotal === 0) return '';
  }
  const t = progress.totals;
  const acc = accuracy(t.correct, t.answered);
  const lines: string[] = [
    `\n\n# この子のつづもんの学習状況（実データ・作り話をしない）`,
    `- 取り組んだ章: ${t.startedUnits} / 19`,
    `- 解いた問題: ${t.answered}問（正解 ${t.correct}問${acc !== null ? `・正答率 ${acc}%` : ''}）`,
    `- 学習時間: 合計 ${minutes(t.msTotal)}分（参考書 ${minutes(t.msRef)}分 / 問題集 ${minutes(t.msWb)}分）`,
  ];

  const kinds = (['qa', 'qz', 'wr'] as QuestionKind[])
    .filter((k) => progress.byKind[k]?.answered > 0)
    .map((k) => {
      const b = progress.byKind[k];
      const a = accuracy(b.correct, b.answered);
      return `${KIND_LABEL[k]} ${b.answered}問${a !== null ? `（正答率 ${a}%）` : ''}`;
    });
  if (kinds.length > 0) lines.push(`- 形式べつ: ${kinds.join(' / ')}`);

  // **直前に開いていた単元**。「理解度チェック」「さっきのところ」を単元をまたがず
  // 扱えるようにするための、いちばん確かな手がかり（推測させない）。
  if (progress.lastUnit) {
    lines.push(
      `- 直前にひらいていた章: ${unitName(progress.lastUnit)}` +
        `（「さっきの」「いまやったところ」はこの章のこと）`
    );
  }

  const recent = Object.entries(progress.units)
    .sort((a, b) => b[1].lastAt - a[1].lastAt)
    .slice(0, 3)
    .map(([unit, u]) => {
      const parts: string[] = [];
      if (u.refSteps > 0) parts.push(`参考書 ${u.refSteps}節`);
      if (u.answered > 0)
        parts.push(`問題 ${u.answered}問中${u.correct}問正解`);
      if (u.msRef + u.msWb > 0) parts.push(`${minutes(u.msRef + u.msWb)}分`);
      return `${unitName(unit)}（${parts.join('・') || '未着手'}）`;
    });
  if (recent.length > 0) lines.push(`- 最近やった章: ${recent.join(' / ')}`);

  const review = unitsNeedingReview(progress);
  if (review.length > 0) {
    lines.push(
      `- 間違えたままの問題が残っている章: ` +
        review.map((r) => `${unitName(r.unit)}（${r.wrong}問）`).join(' / ')
    );
  }

  const weak = topWrongQids(progress);
  if (weak.length > 0) {
    lines.push(
      `- くり返し間違えている問題: ` +
        weak
          .map(
            (w) =>
              `${w.kind ? KIND_LABEL[w.kind] : '問題'}（${w.count}回まちがえ）`
          )
          .join(' / ')
    );
  }

  lines.push(
    `この数字は実際の記録です。**ここに無いことは推測で言わない**` +
      `（「地理もがんばってるね」のような、記録に無い教科・単元の話をしない）。` +
      `ほめるときも、具体的な数字を根拠にする。`
  );
  return lines.join('\n');
}

/** 「やり切った」とみなす到達率（厳密すぎない。ユーザー決定 2026-07-26）。 */
export const COMPLETION_RATIO = 0.8;

/** その章の参考書を読み切ったか（総数が分からないうちは false）。 */
export function isRefComplete(u: UnitProgress | undefined): boolean {
  if (!u || !u.refTotal) return false;
  return u.refSteps >= Math.ceil(u.refTotal * COMPLETION_RATIO);
}

/** その章の問題集をやり切ったか（総数が分からないうちは false）。 */
export function isWorkbookComplete(u: UnitProgress | undefined): boolean {
  if (!u || !u.qTotal) return false;
  return u.answered >= Math.ceil(u.qTotal * COMPLETION_RATIO);
}

/**
 * その学習セッションの「かたち」。おつかれさまメッセージの出し分けに使う。
 *
 * ユーザー決定（2026-07-26）:
 *   - やり切っていなくても送る。ただし**やったことを承認する**トーンにする
 *   - 参考書だけ読んだ人には「問題も解いてみない？」と誘ってよい
 */
export type SessionShape =
  | 'both_done' // 参考書も問題集もやり切った
  | 'wb_done_high' // 問題集をやり切った・よくできている
  | 'wb_done_low' // 問題集をやり切った・間違いが残っている
  | 'ref_done_only' // 参考書は読み切った・問題集は未着手
  | 'ref_done' // 参考書を読み切った（問題集は途中）
  | 'partial_wb' // 問題集の途中
  | 'partial_ref'; // 参考書の途中

/** 正答率がこれ以上なら「よくできている」。 */
const HIGH_ACCURACY = 0.8;

export function classifySession(u: UnitProgress | undefined): SessionShape {
  const refDone = isRefComplete(u);
  const wbDone = isWorkbookComplete(u);
  const answered = u?.answered ?? 0;
  const accuracy = answered > 0 ? (u?.correct ?? 0) / answered : 0;

  if (refDone && wbDone) return 'both_done';
  if (wbDone) return accuracy >= HIGH_ACCURACY ? 'wb_done_high' : 'wb_done_low';
  if (refDone) return answered === 0 ? 'ref_done_only' : 'ref_done';
  if (answered > 0) return 'partial_wb';
  return 'partial_ref';
}

/** その章で間違えたまま残っている問題数。 */
export function wrongLeft(u: UnitProgress | undefined): number {
  return (u?.wrongNow ?? []).length;
}
