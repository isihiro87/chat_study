/**
 * つづもん「今日の1単元」の配信時刻設定（平日／土日を別々に選べる）。
 *
 * 設計: pdf-workbook/docs/つづもん-メッセージ設計.md（C-3）
 *
 * 保存先は `tsudumonDaily/{uid}` の `weekdayHour` / `weekendHour`（JSTの「時」0〜23）。
 * 日次配信 cron はこの2フィールドで対象を引くので、**配信判定に追加の read は要らない**。
 *
 * 平日と土日を分けているのは、生活リズムが平日（学校のあと）と休日（朝から）で
 * まったく違うため。「平日17時・土日8時」のような設定ができる。
 */
import * as functions from 'firebase-functions/v1';

/** 選べる時刻（JST）。中学生の生活リズムに合う範囲だけを出す。 */
export const TSUDUMON_HOUR_CHOICES = [
  6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21,
] as const;

/**
 * 学習系pushの頻度。ユーザーが選ぶ（2026-07-26 ユーザー指示）。
 * push は **1日2通が上限**（①今日の1単元＝`tsudumonDaily.lastSentDate`、
 * ②学習後のおつかれさま＝`tsudumonSessions.lastRecapDate`。別々の日付キーで担保する）。
 */
export const TSUDUMON_FREQUENCIES = [
  'daily',
  'week3',
  'weekly',
  'off',
] as const;
export type TsudumonFrequency = (typeof TSUDUMON_FREQUENCIES)[number];
export const DEFAULT_FREQUENCY: TsudumonFrequency = 'daily';

/** 頻度の表示名（アカウントページ・AIの案内で使う）。 */
export const FREQUENCY_LABEL: Record<TsudumonFrequency, string> = {
  daily: '毎日',
  week3: '週3回（月・水・金）',
  weekly: '週1回（月曜）',
  off: '送らない',
};

export function normalizeFrequency(value: unknown): TsudumonFrequency {
  return (TSUDUMON_FREQUENCIES as readonly string[]).includes(value as string)
    ? (value as TsudumonFrequency)
    : DEFAULT_FREQUENCY;
}

/** 曜日の並び（0=日 … 6=土）。 */
export const ALL_DAYS = [0, 1, 2, 3, 4, 5, 6];
const DAY_LABEL = ['日', '月', '火', '水', '木', '金', '土'];

/** 頻度プリセット → 曜日（旧データの読み替えにも使う）。 */
export function daysOfFrequency(frequency: TsudumonFrequency): number[] {
  if (frequency === 'off') return [];
  if (frequency === 'week3') return [1, 3, 5];
  if (frequency === 'weekly') return [1];
  return ALL_DAYS.slice();
}

/**
 * 曜日指定を正規化する。0〜6 の整数だけを残し、重複を除いて昇順にする。
 * 未指定・壊れた値のときは `fallback` を返す（チャットからの自由な指定を安全に受ける）。
 */
export function normalizeDays(value: unknown, fallback: number[]): number[] {
  if (!Array.isArray(value)) return fallback;
  const out: number[] = [];
  for (const v of value) {
    const n = typeof v === 'number' ? v : Number(v);
    if (!Number.isInteger(n) || n < 0 || n > 6) continue;
    if (!out.includes(n)) out.push(n);
  }
  return out.length > 0 || value.length === 0 ? out.sort() : fallback;
}

/** 保存済みドキュメントから配信曜日を解決する（旧 frequency 形式も読める）。 */
export function resolveDays(
  data: Record<string, unknown> | undefined
): number[] {
  const explicit = data?.days;
  if (Array.isArray(explicit)) return normalizeDays(explicit, ALL_DAYS.slice());
  return daysOfFrequency(normalizeFrequency(data?.frequency));
}

/** 「毎日」「平日」「月・水・金」のような表示。 */
export function daysLabel(days: number[]): string {
  if (days.length === 0) return '送らない';
  if (days.length === 7) return '毎日';
  const sorted = [...days].sort();
  if (sorted.join() === '1,2,3,4,5') return '平日（月〜金）';
  if (sorted.join() === '0,6') return '土日';
  return sorted.map((d) => DAY_LABEL[d]).join('・');
}

/** その曜日が配信対象か（JST基準）。 */
export function isDayEnabled(days: number[], date: Date): boolean {
  const day = new Date(date.getTime() + 9 * 60 * 60 * 1000).getUTCDay();
  return days.includes(day);
}

/**
 * おつかれさまメッセージの既定の時刻（JST）。
 *
 * ⚠️ **2026-07-27 変更**: 以前は「学習の15分後、指定した時間帯の中で」送っていたが、
 * **指定した曜日・時刻ちょうどに送る**方式へ変えた（ユーザー判断）。
 * いつ来るか読めないメッセージは、生活のリズムに組み込めないため。
 * 旧設定（`recap.from`）は移行のため時刻として読み替える。
 */
export const DEFAULT_RECAP_HOUR = 21;

export interface RecapSchedule {
  days: number[];
  hour: number;
}

/** おつかれさま設定の正規化（旧 from/to からの移行を含む）。 */
export function resolveRecapSchedule(
  data: Record<string, unknown> | undefined
): RecapSchedule {
  const raw = (data?.recap ?? {}) as Record<string, unknown>;
  const days = Array.isArray(raw.days)
    ? normalizeDays(raw.days, ALL_DAYS.slice())
    : ALL_DAYS.slice();
  // 旧データ（from/to の時間帯）は「終わりの時刻」を採用する。
  // 生活の中で「1日の終わりに振り返る」ほうが自然なため。
  const legacy =
    typeof raw.hour !== 'number' && typeof raw.to === 'number'
      ? (raw.to as number) - 1
      : undefined;
  const hour = normalizeHour(raw.hour ?? legacy, DEFAULT_RECAP_HOUR);
  return { days, hour };
}

/** その日が配信日か（JST基準）。'off' は常に false。 */
export function isDeliveryDay(
  frequency: TsudumonFrequency,
  date: Date
): boolean {
  if (frequency === 'off') return false;
  if (frequency === 'daily') return true;
  const day = new Date(date.getTime() + 9 * 60 * 60 * 1000).getUTCDay();
  if (frequency === 'week3') return day === 1 || day === 3 || day === 5;
  return day === 1; // weekly = 月曜
}

/** 既定値: 平日は学校・部活のあとの夜、土日は午前中。 */
export const DEFAULT_WEEKDAY_HOUR = 19;
export const DEFAULT_WEEKEND_HOUR = 10;

/**
 * 入力を選択肢に丸める。不正値・未指定は fallback を返す
 * （クライアントを信用せず、必ずサーバ側で検証する）。
 */
export function normalizeHour(value: unknown, fallback: number): number {
  const n =
    typeof value === 'number'
      ? value
      : typeof value === 'string' && value.trim() !== ''
        ? Number(value)
        : NaN;
  if (!Number.isInteger(n)) return fallback;
  return (TSUDUMON_HOUR_CHOICES as readonly number[]).includes(n)
    ? n
    : fallback;
}

/** JST基準で土日か（0=日, 6=土）。 */
export function isWeekendJst(date: Date): boolean {
  const day = new Date(date.getTime() + 9 * 60 * 60 * 1000).getUTCDay();
  return day === 0 || day === 6;
}

/** その日に使う時刻を返す（平日／土日の出し分け）。 */
export function hourForDate(
  date: Date,
  weekdayHour: number,
  weekendHour: number
): number {
  return isWeekendJst(date) ? weekendHour : weekdayHour;
}

/** 「夜7時」のような表示用ラベル。 */
export function hourLabel(hour: number): string {
  if (hour < 12) return `朝${hour}時`;
  if (hour < 18) return `夕方${hour}時`;
  return `夜${hour}時`;
}

async function getDb() {
  const { initializeApp, getApps } = await import('firebase-admin/app');
  const { getFirestore, FieldValue } = await import('firebase-admin/firestore');
  if (getApps().length === 0) initializeApp();
  return { db: getFirestore(), FieldValue };
}

/**
 * 配信時刻の取得・保存。
 * POST { idToken }                                  → 現在の設定を返す
 * POST { idToken, weekdayHour, weekendHour }        → 保存して、保存後の値を返す
 *   → { ok:true, weekdayHour, weekendHour, choices }
 *
 * 認証は tsudumonEntitlement と同型（idToken 検証 → `line:` prefix 必須）。
 * ライセンスの有無は問わない（体験中・購入前でも先に決めておける。実際に届くかは
 * 日次配信 cron 側がライセンスを見て判定する）。
 */
export const tsudumonSchedule = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }
    const {
      idToken,
      weekdayHour,
      weekendHour,
      frequency,
      days,
      recapDays,
      recapHour,
      recapFrom,
      recapTo,
    } = req.body ?? {};
    if (typeof idToken !== 'string' || !idToken) {
      res.status(400).json({ error: 'idToken is required' });
      return;
    }

    try {
      const { getApps, initializeApp } = await import('firebase-admin/app');
      const { getAuth } = await import('firebase-admin/auth');
      if (getApps().length === 0) initializeApp();
      let uid: string;
      try {
        uid = (await getAuth().verifyIdToken(idToken)).uid;
      } catch {
        res.status(401).json({ error: 'invalid_token' });
        return;
      }
      if (!uid.startsWith('line:')) {
        res.status(403).json({ error: 'line_login_required' });
        return;
      }

      const { db, FieldValue } = await getDb();
      const ref = db.doc(`tsudumonDaily/${uid}`);
      const snap = await ref.get();
      const cur = snap.data() ?? {};
      const curWeekday = normalizeHour(cur.weekdayHour, DEFAULT_WEEKDAY_HOUR);
      const curWeekend = normalizeHour(cur.weekendHour, DEFAULT_WEEKEND_HOUR);
      const curFrequency = normalizeFrequency(cur.frequency);

      const wantsUpdate =
        weekdayHour !== undefined ||
        weekendHour !== undefined ||
        frequency !== undefined ||
        days !== undefined ||
        recapDays !== undefined ||
        recapHour !== undefined ||
        recapFrom !== undefined ||
        recapTo !== undefined;
      if (!wantsUpdate) {
        res.status(200).json({
          ok: true,
          weekdayHour: curWeekday,
          weekendHour: curWeekend,
          frequency: curFrequency,
          days: resolveDays(cur),
          recap: resolveRecapSchedule(cur),
          choices: TSUDUMON_HOUR_CHOICES,
          frequencies: TSUDUMON_FREQUENCIES,
        });
        return;
      }

      const nextWeekday = normalizeHour(weekdayHour, curWeekday);
      const nextWeekend = normalizeHour(weekendHour, curWeekend);
      const nextFrequency =
        frequency === undefined ? curFrequency : normalizeFrequency(frequency);
      const patch = validateSchedulePatch(
        { days, recapDays, recapHour, recapFrom, recapTo },
        cur
      );
      await ref.set(
        {
          lineUserId: uid.slice('line:'.length),
          weekdayHour: nextWeekday,
          weekendHour: nextWeekend,
          frequency: nextFrequency,
          ...(patch.ok ? patch.value : {}),
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
      const saved = (await ref.get()).data() ?? {};
      console.log(
        `[tsudumonSchedule] uid=${uid} weekday=${nextWeekday} ` +
          `weekend=${nextWeekend} frequency=${nextFrequency}`
      );
      res.status(200).json({
        ok: true,
        weekdayHour: nextWeekday,
        weekendHour: nextWeekend,
        frequency: nextFrequency,
        days: resolveDays(saved),
        recap: resolveRecapSchedule(saved),
        choices: TSUDUMON_HOUR_CHOICES,
        frequencies: TSUDUMON_FREQUENCIES,
      });
    } catch (error) {
      console.error('[tsudumonSchedule] failed:', error);
      res.status(500).json({ error: 'internal' });
    }
  });

/** `setPushSchedule` ツールが書き込む形。 */
export interface PushSchedulePatch {
  days?: number[];
  weekdayHour?: number;
  weekendHour?: number;
  /** おつかれさまメッセージ。**時刻はひとつ**（2026-07-27 に時間帯から変更）。 */
  recap?: { days: number[]; hour: number };
}

export type SchedulePatchValidation =
  | { ok: true; value: PushSchedulePatch; summary: string }
  | { ok: false; reason: string };

/**
 * チャットからの配信設定変更を検証する。
 *
 * 「平日だけにして」「土曜の朝がいい」「おつかれさまは夜だけ」のような要望を
 * AI が構造化して渡してくる。**曜日は0〜6の配列**で、時刻は選択肢に丸める。
 * どちらか片方だけの変更でよい（渡されなかった項目は現状維持）。
 */
export function validateSchedulePatch(
  args: Record<string, unknown>,
  current: Record<string, unknown> | undefined
): SchedulePatchValidation {
  const patch: PushSchedulePatch = {};
  const parts: string[] = [];

  if (args.days !== undefined) {
    const days = normalizeDays(args.days, resolveDays(current));
    patch.days = days;
    parts.push(`「今日の1単元」は${daysLabel(days)}`);
  }
  if (args.weekdayHour !== undefined) {
    patch.weekdayHour = normalizeHour(args.weekdayHour, DEFAULT_WEEKDAY_HOUR);
    parts.push(`平日は${hourLabel(patch.weekdayHour)}ごろ`);
  }
  if (args.weekendHour !== undefined) {
    patch.weekendHour = normalizeHour(args.weekendHour, DEFAULT_WEEKEND_HOUR);
    parts.push(`土日は${hourLabel(patch.weekendHour)}ごろ`);
  }

  const wantsRecap =
    args.recapDays !== undefined ||
    args.recapHour !== undefined ||
    args.recapFrom !== undefined ||
    args.recapTo !== undefined;
  if (wantsRecap) {
    const cur = resolveRecapSchedule(current);
    const days =
      args.recapDays !== undefined
        ? normalizeDays(args.recapDays, cur.days)
        : cur.days;
    // 旧引数（recapFrom/recapTo）で来ても受ける。時刻はひとつなので
    // 「終わりの時刻」を優先して読み替える（1日の終わりに振り返る想定）。
    const hourArg =
      args.recapHour !== undefined
        ? args.recapHour
        : args.recapTo !== undefined
          ? (args.recapTo as number) - 1
          : args.recapFrom;
    const hour = normalizeHour(hourArg, cur.hour);
    patch.recap = { days, hour };
    parts.push(
      days.length === 0
        ? 'おつかれさまメッセージは送らない'
        : `おつかれさまメッセージは${daysLabel(days)}の${hourLabel(hour)}ごろ`
    );
  }

  if (Object.keys(patch).length === 0) {
    return { ok: false, reason: '変更したい内容が読み取れませんでした' };
  }
  return { ok: true, value: patch, summary: parts.join('／') };
}

/** 設定変更を生徒に伝える定型文。 */
export function buildScheduleAckText(summary: string): string {
  return [
    '配信の設定を変えたよ⚙️',
    '',
    summary,
    '',
    'いつでも「毎日にして」「土日はいらない」みたいに言ってくれれば、すぐ直すよ。',
    '設定ページ（https://tsudumon.jp/settings/）からも変えられるよ。',
  ].join('\n');
}
