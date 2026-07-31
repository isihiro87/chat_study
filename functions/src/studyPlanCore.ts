/**
 * 学習プラン（`users/{uid}.studyPlan`）の検証と「今日やること」の算出（純粋ロジック）。
 *
 * テスト日から逆算して、**週単位の粗い配分＋今日やること1つ**を持つ
 * （`requirements.md` §機能8）。日付ごとに細かく割り当てると、
 * 1日ずれただけで全部破綻して中学生が守れなくなるため、粒度を粗くしている。
 *
 * ## 単元名は自由作文させない（最重要）
 * AI が単元名を作ると存在しない名前になる。保存前に**教材の索引と完全一致で照合**し、
 * 1つでも未知の名前があれば保存しない。
 *
 * 副作用なし・環境非依存。
 */

/** プランの1週間ぶん。 */
export interface StudyPlanWeek {
  /** 開始日（YYYY-MM-DD） */
  fromDate: string;
  /** 終了日（YYYY-MM-DD・含む） */
  toDate: string;
  /** この週に取り組む単元（教材の実在キー） */
  topicKeys: string[];
  /** ひとこと（任意） */
  note?: string;
}

export interface StudyPlan {
  /** 対象のテスト日（YYYY-MM-DD） */
  testDate: string;
  weeks: StudyPlanWeek[];
}

/** プランに入れられる週数の上限（テスト対策として現実的な範囲）。 */
export const MAX_WEEKS = 8;
/** 1週あたりの単元数の上限（詰め込みすぎない）。 */
export const MAX_TOPICS_PER_WEEK = 5;
/** ひとことの最大文字数。 */
export const MAX_NOTE_CHARS = 60;

export type PlanValidateResult =
  | { ok: true; value: StudyPlan }
  | { ok: false; reason: string; unknownTopics?: string[] };

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function jstDateKey(date: Date): string {
  const jst = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
}

function isValidDate(s: unknown): s is string {
  if (typeof s !== 'string' || !DATE_RE.test(s)) return false;
  const ms = Date.parse(`${s}T00:00:00Z`);
  if (!Number.isFinite(ms)) return false;
  // 実在しない日（2026-02-31 等）を弾く
  return new Date(ms).toISOString().slice(0, 10) === s;
}

/**
 * AI が作ったプランを検証する。
 *
 * @param validTopicKeys 教材に実在する単元キーの集合（`aiTopicResolver` の索引から作る）
 * @returns 未知の単元があれば `unknownTopics` を返す（AI に選び直させるため）
 */
export function validatePlan(
  raw: unknown,
  validTopicKeys: ReadonlySet<string>,
  now: Date
): PlanValidateResult {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return { ok: false, reason: 'プランの形式が正しくありません' };
  }
  const p = raw as { testDate?: unknown; weeks?: unknown };

  if (!isValidDate(p.testDate)) {
    return { ok: false, reason: 'テストの日は「2026-09-10」の形で指定してね' };
  }
  const today = jstDateKey(now);
  if (p.testDate < today) {
    return { ok: false, reason: 'テストの日が過去になっています' };
  }

  if (!Array.isArray(p.weeks) || p.weeks.length === 0) {
    return { ok: false, reason: '週ごとの予定が空です' };
  }
  if (p.weeks.length > MAX_WEEKS) {
    return { ok: false, reason: `週は${MAX_WEEKS}週までにしてね` };
  }

  const unknownTopics: string[] = [];
  const weeks: StudyPlanWeek[] = [];

  for (const w of p.weeks) {
    if (!w || typeof w !== 'object') {
      return { ok: false, reason: '週の形式が正しくありません' };
    }
    const week = w as {
      fromDate?: unknown;
      toDate?: unknown;
      topicKeys?: unknown;
      note?: unknown;
    };
    if (!isValidDate(week.fromDate) || !isValidDate(week.toDate)) {
      return { ok: false, reason: '週の日付が正しくありません' };
    }
    if (week.toDate < week.fromDate) {
      return { ok: false, reason: '週の開始日と終了日が逆になっています' };
    }
    if (!Array.isArray(week.topicKeys) || week.topicKeys.length === 0) {
      return { ok: false, reason: '週に単元が入っていません' };
    }
    if (week.topicKeys.length > MAX_TOPICS_PER_WEEK) {
      return {
        ok: false,
        reason: `1週間に入れる単元は${MAX_TOPICS_PER_WEEK}個までにしてね`,
      };
    }

    const keys: string[] = [];
    for (const k of week.topicKeys) {
      if (typeof k !== 'string') {
        return { ok: false, reason: '単元の指定が正しくありません' };
      }
      // ここが「存在しない単元名を保存しない」ための関門。
      if (!validTopicKeys.has(k)) {
        unknownTopics.push(k);
        continue;
      }
      keys.push(k);
    }

    let note: string | undefined;
    if (week.note !== undefined) {
      if (typeof week.note !== 'string') {
        return { ok: false, reason: 'ひとことの形式が正しくありません' };
      }
      const t = week.note.trim();
      if (t.length > MAX_NOTE_CHARS) {
        return {
          ok: false,
          reason: `ひとことは${MAX_NOTE_CHARS}文字までにしてね`,
        };
      }
      if (t) note = t;
    }

    weeks.push({
      fromDate: week.fromDate,
      toDate: week.toDate,
      topicKeys: keys,
      ...(note ? { note } : {}),
    });
  }

  if (unknownTopics.length > 0) {
    return {
      ok: false,
      reason: '教材にない単元が含まれています',
      unknownTopics: [...new Set(unknownTopics)],
    };
  }

  return { ok: true, value: { testDate: p.testDate, weeks } };
}

/** テスト日までの残り日数（JST 暦日）。 */
export function daysUntilTest(plan: StudyPlan, now: Date): number {
  const target = Date.parse(`${plan.testDate}T00:00:00Z`);
  const today = Date.parse(`${jstDateKey(now)}T00:00:00Z`);
  if (!Number.isFinite(target)) return 0;
  return Math.round((target - today) / (24 * 3600 * 1000));
}

/** 今日が含まれる週を返す（無ければ null）。 */
export function findCurrentWeek(
  plan: StudyPlan,
  todayJst: string
): StudyPlanWeek | null {
  for (const w of plan.weeks) {
    if (w.fromDate <= todayJst && todayJst <= w.toDate) return w;
  }
  return null;
}

/**
 * 「今日やること」を1つ選ぶ。
 *
 * 週内の単元を**日付で回す**（同じ週の間に全部に触れられる）。
 * ランダムにしないのは、同じ日に何度聞いても答えが変わらないようにするため。
 */
export function pickTodayTopicKey(
  week: StudyPlanWeek,
  todayJst: string
): string | null {
  if (week.topicKeys.length === 0) return null;
  const from = Date.parse(`${week.fromDate}T00:00:00Z`);
  const today = Date.parse(`${todayJst}T00:00:00Z`);
  if (!Number.isFinite(from) || !Number.isFinite(today))
    return week.topicKeys[0];
  const offset = Math.max(0, Math.round((today - from) / (24 * 3600 * 1000)));
  return week.topicKeys[offset % week.topicKeys.length];
}

/**
 * 毎日プッシュ・reply の両方から使う「今日の1行」。
 *
 * **日次プッシュ本体は別作業**（つづもんBotの「今日の問題」）なので、
 * ここを純粋関数にしておき、実装時にそのまま差し込めるようにする。
 *
 * @param topicName `topicKey` → 表示名の解決関数（`aiTopicResolver` を渡す）
 * @returns プランが無い・期間外なら null（従来の文面のまま出す）
 */
export function buildTodayPlanLine(
  plan: StudyPlan | undefined,
  now: Date,
  topicName: (key: string) => string | null
): string | null {
  if (!plan) return null;
  const today = jstDateKey(now);
  const left = daysUntilTest(plan, now);
  if (left < 0) return null; // テストが終わっている

  const week = findCurrentWeek(plan, today);
  if (!week) {
    // 期間外でも残り日数だけは伝える（カウントダウンの効果）。
    return left === 0
      ? '📅 きょうがテスト本番だね。落ち着いていこう！'
      : `📅 テストまであと${left}日`;
  }

  const key = pickTodayTopicKey(week, today);
  const name = key ? topicName(key) : null;
  const head = left === 0 ? 'きょうがテスト本番' : `テストまであと${left}日`;
  if (!name) return `📅 ${head}`;
  return `📅 ${head}。きょうは「${name}」をやろう`;
}

/**
 * プランをシステムプロンプトへ注入する節にする。
 * 週の一覧は出さず、**今日やること**に絞る（長くしても守られない）。
 */
export function buildPlanPrompt(
  plan: StudyPlan | undefined,
  now: Date,
  topicName: (key: string) => string | null
): string {
  if (!plan) return '';
  const line = buildTodayPlanLine(plan, now, topicName);
  if (!line) return '';

  const today = jstDateKey(now);
  const week = findCurrentWeek(plan, today);
  const weekTopics = week
    ? week.topicKeys
        .map((k) => topicName(k))
        .filter((n): n is string => !!n)
        .join('、')
    : '';

  return (
    `\n\n# この子の学習プラン（本人と決めたもの）\n` +
    `- ${line}\n` +
    (weekTopics ? `- 今週の範囲: ${weekTopics}\n` : '') +
    (week?.note ? `- 今週のひとこと: ${week.note}\n` : '') +
    `プラン通りに進んでいるかを問い詰めない。遅れていても責めず、` +
    `「今日はここだけやってみよう」と小さく提案する。`
  );
}

/** プラン保存後にユーザーへ返す確認文（AI 任せにしないため定型）。 */
export function buildPlanAckText(
  plan: StudyPlan,
  now: Date,
  topicName: (key: string) => string | null
): string {
  const left = daysUntilTest(plan, now);
  const line = buildTodayPlanLine(plan, now, topicName);
  return [
    `📋 ${plan.testDate}のテストにむけて、${plan.weeks.length}週間のプランを作ったよ！`,
    left >= 0 ? `テストまであと${left}日。` : '',
    line ? line.replace(/^📅 /, '') : '',
    'むりのないペースでいこう😊',
  ]
    .filter(Boolean)
    .join('\n');
}
