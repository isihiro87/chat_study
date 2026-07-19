/**
 * Win-back メッセージのバリエーション集と、重複回避選択ロジック。
 *
 * 設計（requirements.md §B-2）:
 *   - Day 3 / Day 7 / Day 14 の各タッチポイントで **10 種以上** のバリエーション
 *   - 過去 90 日に送信したものは再選択を避ける
 *   - 全バリエーション送信済みなら最も古いものから再利用
 *   - トーンは "gentle" / "empathetic" / "social-proof" / "passive-aggressive" / "milestone-loss" を混在
 */

import type { WinbackTouchpoint } from './userDocTypes';

export type WinbackTone =
  | 'gentle'
  | 'empathetic'
  | 'social-proof'
  | 'passive-aggressive'
  | 'milestone-loss';

export interface WinbackContext {
  /** 最終回答からの経過日数（暦日ベース） */
  daysSinceLastAnswer: number;
  /** 失われた連続記録（dormant 移行時に保存されていた値） */
  previousStreak?: number;
  /** 苦手リスト件数 */
  weakReviewCount?: number;
}

export interface WinbackVariation {
  id: string;
  tone: WinbackTone;
  body: (ctx: WinbackContext) => string;
}

// 2026-06: ニックネーム廃止に伴い、Win-back の名前呼びかけは行わない。
// 既存の各バリエーション本文が呼ぶ namePrefix(...) は常に空文字を返す。
// 引数は後方互換のため受け取るだけで使用しない。
const namePrefix = (_name?: string): string => '';

// =====================================================
// Day 3 Win-back（at-risk 移行直後・軽く「ひさしぶり」）
// =====================================================
export const DAY_3_WINBACK_VARIATIONS: WinbackVariation[] = [
  {
    id: 'day3-v01',
    tone: 'gentle',
    body: (_c) =>
      `${namePrefix()}ひさしぶり！1問だけ一緒にやってみない？気楽でいいよ。`,
  },
  {
    id: 'day3-v02',
    tone: 'gentle',
    body: (_c) =>
      `${namePrefix()}ちょっとひさしぶりだね。1問だけサクッとやってみよう！`,
  },
  {
    id: 'day3-v03',
    tone: 'empathetic',
    body: (_c) =>
      `${namePrefix()}最近どう？忙しい時期かな。1問だけならすぐ終わるよ。`,
  },
  {
    id: 'day3-v04',
    tone: 'empathetic',
    body: (_c) =>
      `${namePrefix()}お休みの日だったかな。気が向いたら1問だけどうぞ。`,
  },
  {
    id: 'day3-v05',
    tone: 'gentle',
    body: (_c) => `${namePrefix()}ひさびさの1問、肩の力抜いていこう！`,
  },
  {
    id: 'day3-v06',
    tone: 'social-proof',
    body: (_c) =>
      `${namePrefix()}最近1問だけ戻ってきた人がたくさんいるよ。あなたもどう？`,
  },
  {
    id: 'day3-v07',
    tone: 'milestone-loss',
    body: (c) => {
      const streak = c.previousStreak ?? 0;
      if (streak >= 3) {
        return `${namePrefix()}${streak}日続いてた連続記録、もったいない！今日1問やればまた繋がるよ。`;
      }
      return `${namePrefix()}今日1問やれば、また連続記録の積み重ねが始まるよ！`;
    },
  },
  {
    id: 'day3-v08',
    tone: 'gentle',
    body: (_c) => `${namePrefix()}1問だけでも、やったら今日の自分えらい！`,
  },
  {
    id: 'day3-v09',
    tone: 'empathetic',
    body: (_c) =>
      `${namePrefix()}テスト勉強中かな？1問だけでも気分転換になるよ。`,
  },
  {
    id: 'day3-v10',
    tone: 'gentle',
    body: (_c) =>
      `${namePrefix()}ちょっと間が空いたね。1問だけ、肩の力抜いてやってみよう。`,
  },
  {
    id: 'day3-v11',
    tone: 'social-proof',
    body: (_c) =>
      `${namePrefix()}数日ぶりに戻ってきた先輩、気づいたら連続記録がまた伸びてたよ！`,
  },
  {
    id: 'day3-v12',
    tone: 'gentle',
    body: (_c) => `${namePrefix()}今日の1問、すぐ終わるよ。サクッとどうぞ！`,
  },
];

// =====================================================
// Day 5 Win-back（at-risk 中の追撃・6日目。day3 を送ったが戻ってこない層へ）
//   2026-06 追加: 回復可能ウィンドウ内のタッチ数を増やし、churned 化前に拾う。
//   トーンは day3 より一歩踏み込むが、まだ軽く・前向きに保つ。
// =====================================================
export const DAY_5_WINBACK_VARIATIONS: WinbackVariation[] = [
  {
    id: 'day5-v01',
    tone: 'gentle',
    body: () => `また少し空いちゃったね。1問だけ、今日のうちにどう？`,
  },
  {
    id: 'day5-v02',
    tone: 'empathetic',
    body: () =>
      `ここ数日おつかれさま。気が向いたタイミングで1問だけでも大丈夫だよ。`,
  },
  {
    id: 'day5-v03',
    tone: 'milestone-loss',
    body: (c) => {
      const weak = c.weakReviewCount ?? 0;
      if (weak > 0) {
        return `間違えたままの問題が${weak}問あるよ。今日1問だけ復習しておかない？`;
      }
      return `今日1問やっておくと、明日からまたリズムが戻しやすいよ。`;
    },
  },
  {
    id: 'day5-v04',
    tone: 'social-proof',
    body: () =>
      `1問だけ戻ってきた人の多くが、そのまま続けられてるよ。あなたもどう？`,
  },
  {
    id: 'day5-v05',
    tone: 'gentle',
    body: () => `むずかしく考えなくて大丈夫。サクッと1問だけいこう！`,
  },
  {
    id: 'day5-v06',
    tone: 'empathetic',
    body: () => `忙しいよね。1問だけなら30秒。気楽に戻ってきてね。`,
  },
];

// =====================================================
// Day 7 Win-back（dormant 移行直後・「久しぶり、戻ってこない？」+ インセンティブ）
// =====================================================
export const DAY_7_WINBACK_VARIATIONS: WinbackVariation[] = [
  {
    id: 'day7-v01',
    tone: 'gentle',
    body: (_c) =>
      `${namePrefix()}1週間ちょっとぶりだね。1問だけでも久しぶりにどうかな？`,
  },
  {
    id: 'day7-v02',
    tone: 'empathetic',
    body: (_c) =>
      `${namePrefix()}しばらくお休みしてたね、おつかれさま。ゆっくりでいいから戻ってきてね。`,
  },
  {
    id: 'day7-v03',
    tone: 'milestone-loss',
    body: (_c) =>
      `${namePrefix()}連続記録はリセットされちゃったけど、また1日目から積み上げよう！`,
  },
  {
    id: 'day7-v04',
    tone: 'gentle',
    body: (_c) =>
      `${namePrefix()}おかえり待ってるよ。1問だけ、また始めてみない？`,
  },
  {
    id: 'day7-v05',
    tone: 'social-proof',
    body: (_c) =>
      `${namePrefix()}しばらくぶりに戻ってきた人、結構いるよ。1問だけならすぐ終わる！`,
  },
  {
    id: 'day7-v06',
    tone: 'empathetic',
    body: (_c) =>
      `${namePrefix()}最近忙しかったかな？1問だけ、ぼちぼちいこう。`,
  },
  {
    id: 'day7-v07',
    tone: 'gentle',
    body: (_c) =>
      `${namePrefix()}ひさしぶり！今日1問だけ、肩の力抜いてどうぞ。`,
  },
  {
    id: 'day7-v08',
    tone: 'gentle',
    body: (_c) =>
      `${namePrefix()}久しぶりだね。ブランクあっても全然大丈夫だよ。`,
  },
  {
    id: 'day7-v09',
    tone: 'milestone-loss',
    body: (c) => {
      const weak = c.weakReviewCount ?? 0;
      if (weak > 0) {
        return `${namePrefix()}間違えたままの問題が${weak}問溜まってるよ。1問だけでも復習してみない？`;
      }
      return `${namePrefix()}1問だけでも、今日やったら今週の積み重ねが始まるよ。`;
    },
  },
  {
    id: 'day7-v10',
    tone: 'empathetic',
    body: (_c) =>
      `${namePrefix()}ペースは人それぞれ。1問でいいから、また会えるとうれしいな。`,
  },
  {
    id: 'day7-v11',
    tone: 'gentle',
    body: (_c) => `${namePrefix()}ひさびさの1問、気楽にどうぞ！`,
  },
  {
    id: 'day7-v12',
    tone: 'social-proof',
    body: (_c) =>
      `${namePrefix()}先週戻ってきた人の声: 「1問だけでも気分転換になった」`,
  },
];

// =====================================================
// Day 10 Win-back（dormant 中の追撃・11日目。day7 後・churned 化(15日)の手前で拾う）
//   2026-06 追加。「まだ間に合う」ニュアンスで最後のひと押し（最終通知は day14）。
// =====================================================
export const DAY_10_WINBACK_VARIATIONS: WinbackVariation[] = [
  {
    id: 'day10-v01',
    tone: 'empathetic',
    body: () => `しばらく空いたけど、また1問から気軽に再開できるよ。`,
  },
  {
    id: 'day10-v02',
    tone: 'milestone-loss',
    body: () => `今ならまだ、いつもの調子に戻しやすいタイミング。1問だけどう？`,
  },
  {
    id: 'day10-v03',
    tone: 'gentle',
    body: () => `ブランクは気にしなくて大丈夫。今日1問だけ、また始めよう。`,
  },
  {
    id: 'day10-v04',
    tone: 'social-proof',
    body: () =>
      `10日ぶりくらいに戻ってきた人もたくさんいるよ。1問だけならすぐ終わる！`,
  },
  {
    id: 'day10-v05',
    tone: 'milestone-loss',
    body: (c) => {
      const weak = c.weakReviewCount ?? 0;
      if (weak > 0) {
        return `苦手のまま残ってる問題が${weak}問。1問だけでも今日つぶしておかない？`;
      }
      return `今日1問やれば、また積み上げをやり直せるよ。`;
    },
  },
  {
    id: 'day10-v06',
    tone: 'empathetic',
    body: () => `無理しなくていいからね。戻りたくなったら1問だけどうぞ。`,
  },
];

// =====================================================
// Day 14 Win-back（churned 移行直後・最終通知・passive-aggressive 含む）
// =====================================================
export const DAY_14_WINBACK_VARIATIONS: WinbackVariation[] = [
  {
    id: 'day14-v01',
    tone: 'passive-aggressive',
    body: (_c) =>
      `${namePrefix()}もうこれで通知を止めようかな…って思ったけど、やっぱり最後にもう1回。`,
  },
  {
    id: 'day14-v02',
    tone: 'passive-aggressive',
    body: (_c) =>
      `${namePrefix()}最後のメッセージにするね。気が向いたら「再開」って送ってくれれば、いつでも戻れるよ。`,
  },
  {
    id: 'day14-v03',
    tone: 'gentle',
    body: (_c) =>
      `${namePrefix()}今日でメッセージはおしまいにします。また会える日を待ってるね。`,
  },
  {
    id: 'day14-v04',
    tone: 'empathetic',
    body: (_c) =>
      `${namePrefix()}通知の数を一旦少なめにするね。戻りたくなったら「再開」とだけ送って！`,
  },
  {
    id: 'day14-v05',
    tone: 'passive-aggressive',
    body: (_c) =>
      `${namePrefix()}そろそろ送るのも遠慮しようかな。でも本当に最後、1問だけ。`,
  },
  {
    id: 'day14-v06',
    tone: 'milestone-loss',
    body: (_c) =>
      `${namePrefix()}しばらく送るのをお休みするね。気が変わったら「再開」と一言だけで戻れるよ。`,
  },
  {
    id: 'day14-v07',
    tone: 'gentle',
    body: (_c) =>
      `${namePrefix()}今日でメッセージは一旦お休み。いつでも待ってるよ。`,
  },
  {
    id: 'day14-v08',
    tone: 'passive-aggressive',
    body: (_c) =>
      `${namePrefix()}しつこくならないように、これで一度終わりにするね。`,
  },
  {
    id: 'day14-v09',
    tone: 'empathetic',
    body: (_c) =>
      `${namePrefix()}ペースが合わなかったかな、ごめんね。気が向いたらいつでも「再開」って送って。`,
  },
  {
    id: 'day14-v10',
    tone: 'gentle',
    body: (_c) =>
      `${namePrefix()}メッセージは一旦お休みするね。戻ってきたい時は「再開」と送ってね。`,
  },
  {
    id: 'day14-v11',
    tone: 'passive-aggressive',
    body: (_c) =>
      `${namePrefix()}最後にこれだけ。あなたのペースを尊重します。また会えるのを待ってるね。`,
  },
];

/** タッチポイントごとのバリエーション集を返す */
export function getVariationsFor(
  touchpoint: WinbackTouchpoint
): WinbackVariation[] {
  switch (touchpoint) {
    case 'day3':
      return DAY_3_WINBACK_VARIATIONS;
    case 'day5':
      return DAY_5_WINBACK_VARIATIONS;
    case 'day7':
      return DAY_7_WINBACK_VARIATIONS;
    case 'day10':
      return DAY_10_WINBACK_VARIATIONS;
    case 'day14':
      return DAY_14_WINBACK_VARIATIONS;
  }
}
