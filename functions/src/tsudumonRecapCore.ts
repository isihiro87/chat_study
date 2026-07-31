/**
 * 学習が一段落したら「ふり返りの会話」に誘う（リトリーバル練習）。
 *
 * ## 難しさ
 * 「終わった」の検出は本質的にあいまい。ページを離れただけかもしれないし、
 * 調べもので参考書に移っただけかもしれない。**誤検知して毎回話しかけると害**なので、
 * ここは「静かになってから」「意味のある学習をしていたときだけ」に絞る。
 *
 * ## 判定（すべて満たしたときだけ誘う）
 * 1. 最後の同期から **15分以上**なにも届いていない（＝もう見ていない）
 * 2. そのセッションで **5分以上** 学習した、または **3問以上**解いた
 * 3. その日まだ誘っていない（1日1回まで）
 * 4. JST 6:00〜22:00（夜ふかし・早朝に通知しない）
 *
 * 誘い方も「やった？」ではなく「話してみない？」にする。自分の言葉で説明すると
 * 記憶が定着する（retrieval practice / self-explanation）——それが目的なので、
 * 答えられなくても責めない文面にしている。
 */

import type { SessionShape } from './tsudumonProgressCore';
import type { RecapSchedule } from './tsudumonSchedule';

/**
 * 誘うに値する学習量（どちらか満たせばよい）。
 * ちょっと開いただけの日に「おつかれさま」と言うと、言葉が軽くなる。
 */
export const RECAP_MIN_MS = 5 * 60 * 1000;
export const RECAP_MIN_ANSWERED = 3;

// ⛔ 撤去（2026-07-27）: RECAP_QUIET_MS（15分の静けさ）/ RECAP_HOUR_FROM / RECAP_HOUR_TO
//    （通知してよい時間帯）は、**定時配信への変更で概念ごと無くなった**。
//    残しておくと「15分ルールがまだ生きている」と誤読される。
//    いまの送信条件は `shouldSendRecapAt`（その日の学習量 × 曜日 × 正時）だけ。

export interface RecapSession {
  /** 直近に学習していた章 */
  unit?: string;
  /** このセッションで積んだ学習時間(ms) */
  ms?: number;
  /** このセッションで解いた問題数 */
  answered?: number;
  /** 最後に同期が届いた時刻(ms) */
  lastSyncAt?: number;
  /** 誘い待ちか */
  pending?: boolean;
  /** 最後に誘った日（JST・'YYYY-MM-DD'）。1日1回に制限する */
  lastRecapDate?: string;
}

export function jstDateKey(nowMs: number): string {
  return new Date(nowMs + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

export function jstHour(nowMs: number): number {
  return new Date(nowMs + 9 * 60 * 60 * 1000).getUTCHours();
}

/** いま誘ってよいか（判定はこの1関数に集約してテストで固定する）。 */
/**
 * いま「おつかれさま」を送るときか。
 *
 * ## 2026-07-27 の方針変更（ユーザー判断）
 * 以前は「学習が止まって15分後」に送っていた。いつ来るか読めないので、
 * **指定した曜日・時刻ちょうどに送る**方式へ変えた。生活のリズムに組み込める。
 *
 * 条件:
 *   1. **その日に学習している**（学習していない日には送らない＝催促にしない）
 *   2. 学習量が少なすぎない（ちょっと開いただけでは送らない）
 *   3. その日まだ送っていない（1日1回）
 *   4. ユーザーが選んだ曜日で、選んだ時刻ちょうど
 */
export function shouldSendRecapAt(
  session: RecapSession | undefined,
  nowMs: number,
  /** ユーザー設定（曜日・時刻）。省略時は毎日 夜9時。 */
  schedule: RecapSchedule = { days: [0, 1, 2, 3, 4, 5, 6], hour: 21 }
): boolean {
  const lastSyncAt = session?.lastSyncAt ?? 0;
  if (!lastSyncAt) return false;
  const today = jstDateKey(nowMs);
  // 1. きょう学習した人だけ（前日ぶんを翌日に送らない）
  if (jstDateKey(lastSyncAt) !== today) return false;
  // 2. 学習量が少なすぎるときは誘わない
  const ms = session?.ms ?? 0;
  const answered = session?.answered ?? 0;
  if (ms < RECAP_MIN_MS && answered < RECAP_MIN_ANSWERED) return false;
  // 3. 1日1回まで
  if (session?.lastRecapDate === today) return false;
  // 4. 選んだ曜日・時刻ちょうど（cron は毎正時に走る）
  if (jstHour(nowMs) !== schedule.hour) return false;
  const day = new Date(nowMs + 9 * 60 * 60 * 1000).getUTCDay();
  if (!schedule.days.includes(day)) return false;
  return true;
}

/**
 * 古くなったセッションは「誘わずに畳む」。
 * 一晩明けてから「おつかれさま！」と言われても意味がないため。
 */
export function isStaleSession(
  session: RecapSession | undefined,
  nowMs: number
): boolean {
  const lastSyncAt = session?.lastSyncAt ?? 0;
  // 定時配信になったので「◯時間たったら畳む」ではなく**日をまたいだら畳む**。
  // 朝7時に勉強して夜9時に振り返る、が成立しなくなるため。
  return !!lastSyncAt && jstDateKey(lastSyncAt) !== jstDateKey(nowMs);
}

function minutes(ms: number): number {
  return Math.max(1, Math.round(ms / 60000));
}

/**
 * 誘いの文面。学習の「かたち」に合わせて言うことを変える。
 *
 * 共通の設計:
 *   - まず**やったことを承認する**（やり切っていなくても必ず認める）
 *   - そのうえで「話してみない？」と誘う（自分の言葉で言い直すと定着するため）
 *   - 宿題にしない。断れる余白を必ず残す
 */
export function buildRecapMessage(
  session: RecapSession,
  unitTitle: string | null,
  shape: SessionShape = 'partial_wb',
  extra: { wrongLeft?: number; workbookUrl?: string } = {}
): string {
  const ms = session.ms ?? 0;
  const answered = session.answered ?? 0;
  const facts: string[] = [];
  if (unitTitle) facts.push(`「${unitTitle}」`);
  if (answered > 0) facts.push(`${answered}問`);
  if (ms > 0) facts.push(`${minutes(ms)}分`);
  const factLine =
    facts.length > 0
      ? `${facts.join(' / ')} すすめたね。ちゃんと積み上がってるよ。`
      : 'よくがんばったね。';

  const head: Record<SessionShape, string[]> = {
    both_done: [
      'おつかれさま！参考書も問題集も、ひととおりやり切ったね🎉',
      factLine,
    ],
    wb_done_high: [
      'おつかれさま！問題、最後までやり切ったね🎉',
      factLine,
      'しかもよくできてる。ちゃんと身についてるよ。',
    ],
    wb_done_low: [
      'おつかれさま！問題、最後までやり切ったね。',
      factLine,
      'まちがえた問題があるのは、ぜんぜん悪いことじゃないよ。いまが伸びるところ。',
    ],
    ref_done_only: ['おつかれさま！参考書を読み切ったね📖', factLine],
    ref_done: ['おつかれさま！参考書を読み切ったね📖', factLine],
    partial_wb: [
      'おつかれさま！ここまで進んだね。',
      factLine,
      '途中でも大丈夫。少しずつでちゃんと前に進んでるよ。',
    ],
    partial_ref: [
      'おつかれさま！今日はここまで読んだね。',
      factLine,
      '途中でも大丈夫。読んだぶんはちゃんと残ってるよ。',
    ],
  };

  const invite = unitTitle
    ? `たとえば「${unitTitle}でいちばん心に残ったことは？」でもいいし、`
    : 'たとえば「今日いちばん心に残ったことは？」でもいいし、';

  const tail: Record<SessionShape, string[]> = {
    both_done: [
      'せっかくだから、いま学んだことをちょっとだけ話してみない？',
      '覚えたことを自分の言葉で言い直すと、それだけで記憶に残りやすくなるんだ。',
      '',
      invite,
      '「ここがよく分からなかった」でも大歓迎。そこから一緒に整理しよう。',
    ],
    wb_done_high: [
      'せっかくだから、いま解いたところをちょっとだけ話してみない？',
      '自分の言葉で説明できたら、それはもう「分かってる」ってことだよ。',
      '',
      invite,
      '説明してみて詰まったところがあれば、そこを一緒に見直そう。',
    ],
    wb_done_low: [
      ...(extra.wrongLeft
        ? [
            `まちがえたままの問題が${extra.wrongLeft}問あるから、そこだけ一緒に整理してみない？`,
          ]
        : ['分からなかったところ、ひとつだけ一緒に整理してみない？']),
      'どこで迷ったかを話してくれたら、つまずきの正体をさがすよ。',
      ...(extra.workbookUrl ? ['', '▶ もう一度ひらく', extra.workbookUrl] : []),
    ],
    ref_done_only: [
      '読んだ内容、ちょっとだけ話してみない？',
      '自分の言葉で言い直すと、読んだだけのときよりずっと記憶に残るんだ。',
      '',
      invite,
      '「ここがよく分からなかった」でも大歓迎だよ。',
      ...(extra.workbookUrl
        ? [
            '',
            'それか、読んだところがどれくらい身についたか、問題で試してみる？',
            extra.workbookUrl,
          ]
        : []),
    ],
    ref_done: [
      '読んだ内容、ちょっとだけ話してみない？',
      '自分の言葉で言い直すと、記憶に残りやすくなるよ。',
      '',
      invite,
      '「ここがよく分からなかった」でも大歓迎。',
    ],
    partial_wb: [
      'よかったら、いまやったところをちょっとだけ話してみない？',
      '短くていいよ。自分の言葉にすると、それだけで残りやすくなるんだ。',
      '',
      invite,
      '「ここが分からなくて止まった」でも大歓迎。そこから一緒に見ていこう。',
    ],
    partial_ref: [
      'よかったら、いま読んだところをちょっとだけ話してみない？',
      '短くていいよ。自分の言葉にすると、それだけで残りやすくなるんだ。',
      '',
      invite,
      '「ここが分からなかった」でも大歓迎。',
    ],
  };

  return [
    ...head[shape],
    '',
    ...tail[shape],
    '',
    'もちろん、今日はもう休みたい気分ならスルーで大丈夫だよ🌙',
  ].join('\n');
}

/**
 * ふり返りに誘った直後だと AI に知らせる文脈。
 * これが無いと、生徒が「◯◯かな」と話し始めても AI が唐突に感じてしまう。
 */
export function buildRecapContext(
  session: RecapSession | undefined,
  unitTitle: string | null,
  nowMs: number
): string {
  const invitedAt = session?.lastRecapDate;
  if (!invitedAt || invitedAt !== jstDateKey(nowMs)) return '';
  return (
    `\n\n# さっき「ふり返りの会話」に誘ったところです\n` +
    `${unitTitle ? `この子は直前に「${unitTitle}」を学習しました。` : 'この子は直前まで学習していました。'}` +
    `「習ったことを自分の言葉で話してみない？」と誘ってあります。\n` +
    `- 生徒が内容を話し始めたら、**まず受け止めてほめる**。細かい間違いは後回しで、言えたこと自体を認める。\n` +
    `- 説明がぬけていたら、責めずに「じゃあ○○はどうだったっけ？」と1つずつ思い出させる（答えを先に言わない）。\n` +
    `- 「わからない」と言われたら、教材の言葉を借りてヒントを出し、思い出せたらしっかりほめる。\n` +
    `- 話したくなさそうなら、あっさり引く。しつこく聞かない。`
  );
}
