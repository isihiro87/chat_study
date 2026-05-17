/**
 * 公式LINE のセリフのバリエーション集と、状況に応じてランダム選出する純粋関数群。
 *
 * トーン方針: やわらかい励ましをベースに、短く、迷わず、押しつけない。
 * 中学生には親しみやすく、保護者が見ても安心できる言い回しに揃える。
 * 各プールは 8〜18 種を目安に、同じ場面で連続して同じ文言が出にくくする。
 */

const DAY_STREAK_MILESTONES = [3, 7, 14, 30, 100] as const;

export function pickRandom<T>(arr: readonly T[]): T {
  if (arr.length === 0) {
    throw new Error("pickRandom: empty array");
  }
  return arr[Math.floor(Math.random() * arr.length)];
}

export function isDayStreakMilestone(dayStreak: number): boolean {
  return (DAY_STREAK_MILESTONES as readonly number[]).includes(dayStreak);
}

// =====================================================
// 正解フィードバック
// =====================================================

const CORRECT_STREAK_10_PLUS = [
  (n: number) => `${n}問連続正解！すごい集中力だね！`,
  (n: number) => `${n}問続けて正解！しっかり身についてきてるね！`,
  (n: number) => `${n}問連続！本当にがんばってるね！`,
  (n: number) => `${n}問連続正解！かなりいい流れだよ！`,
  (n: number) => `${n}問連続正解！この調子で続けよう！`,
  (n: number) => `${n}連続正解！落ち着いて解けてるね！`,
  (n: number) => `${n}問連続！積み重ねが見えてきたね！`,
  (n: number) => `${n}連続！集中できていていいね！`,
];

const CORRECT_STREAK_5 = [
  "5問連続正解！リズム出てきたね！",
  "5問続けて正解！その調子だよ！",
  "5連続！だんだん覚えてきてるね！",
  "5問連続正解、すごいよ！",
  "5問連続！いい流れだね！",
  "5連続！集中できてるね！",
  "5問連続正解！調子が上がってきたね！",
  "5連続！しっかり解けてるよ！",
  "5問続けて正解！いい流れ！",
  "5連続！この調子でいこう！",
];

const CORRECT_STREAK_3 = [
  "3問連続正解！いい感じ！",
  "3問続けて正解！流れに乗ってきた！",
  "3連続！その調子で続けよう！",
  "3問連続、すごいよ！",
  "3連続正解！リズム出てきた！",
  "3連続！いいね！",
  "3問続けて正解！調子いいね！",
  "3連続！この勢いで次もいこう！",
  "3連続！しっかり解けてるね！",
  "3連続正解！集中できてるね！",
];

const DAY_MILESTONE_100 = [
  "100日連続！本当にすごい。よくここまで続けたね！",
  "100日続いた！自信もっていいよ！",
  "100日達成！ここまで続けた力は大きいよ！",
  "100日連続！継続は力になるね！",
  "100日続けたあなた、本当にすごい！",
];
const DAY_MILESTONE_30 = [
  "30日連続！もう習慣になってるね！",
  "30日続いてる！すごい積み重ね！",
  "30日達成！えらいよ！",
  "1ヶ月連続！本当にすごい！",
  "30日連続！この継続力、強い！",
  "30日達成！学習のリズムができてきたね！",
  "30日続いた！誇っていいよ！",
  "30日連続！今日までの積み重ね、しっかり力になってるよ！",
];
const DAY_MILESTONE_14 = [
  "2週間続いてる！すごいよ！",
  "14日連続！コツコツできてるね！",
  "2週間達成！この調子！",
  "2週間続いた！本当にすごい！",
  "14日連続！もう習慣になりそう！",
  "2週間続けてる！自分のペース掴んでるね！",
  "14日達成！えらいよ、本当に！",
  "2週間連続！続ける力がついてきたね！",
];
const DAY_MILESTONE_7 = [
  "1週間連続！すごいよ！",
  "7日続いた！もう習慣になりそう！",
  "1週間達成！えらい！",
  "7日連続、ナイス継続！",
  "1週間続いた！この調子で続けよう！",
  "7日達成！いいペースだね！",
  "1週間連続！よく続けられているよ！",
  "7日続けた！すごい積み重ねだね！",
];
const DAY_MILESTONE_3 = [
  "3日続いた！3日坊主ならず、いいね！",
  "3日連続！ここから習慣になるよ！",
  "3日続いた！えらい！",
  "3日連続達成！この勢い大事！",
  "3日続いた！いいスタートだね！",
  "3日連続！ここを越えたら続くよ！",
  "3日達成！いいリズム！",
  "3日連続！よく続いているよ！",
];

const CORRECT_DEFAULT = [
  "正解！いいね！",
  "合ってるよ！いいね！",
  "できてるね！",
  "正解。よく覚えてるね！",
  "正解！いい感じ！",
  "合ってるよ！",
  "正解！しっかり覚えられてる！",
  "やった、正解！",
  "そう、それ！正解！",
  "いいね、正解！",
  "合ってる！",
  "正解！落ち着いて解けてるね！",
  "正解！",
  "そうそう、正解！",
  "正解、バッチリ！",
  "しっかり正解！",
  "正解！その調子！",
  "正解！その通り！",
];

const CORRECT_TRAILING_OPTIONAL = [
  "この調子で次もいこう！",
  "いいペースだよ！",
  "明日もこの調子で！",
  "1問1問、しっかり積み重ねてるね",
  "ゆっくりでいいから続けようね",
  "焦らずいこう",
  "覚えられてきてるね",
  "今日もえらい！",
  "次もいけるよ！",
  // 空文字（無し）を半分くらい混ぜて、毎回末尾が付かないようにする
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

export interface CorrectFeedbackInput {
  /** 今回を含めた最新からの連続正解数（>=1 のとき正解） */
  correctStreak: number;
  /** 今日を含めた連続学習日数 */
  dayStreak: number;
  /** 連続日数が今日の回答で初めて節目に到達したかどうか */
  isMilestoneDay: boolean;
}

export function getCorrectFeedback(input: CorrectFeedbackInput): string {
  const { correctStreak, dayStreak, isMilestoneDay } = input;

  // 連続正解の節目を最優先（中学生がいちばん「やった！」と感じる瞬間）
  if (correctStreak >= 10) {
    return pickRandom(CORRECT_STREAK_10_PLUS)(correctStreak);
  }
  if (correctStreak === 5) {
    return pickRandom(CORRECT_STREAK_5);
  }
  if (correctStreak === 3) {
    return pickRandom(CORRECT_STREAK_3);
  }

  // 次に連続日数のマイルストーン
  if (isMilestoneDay) {
    if (dayStreak === 100) return pickRandom(DAY_MILESTONE_100);
    if (dayStreak === 30) return pickRandom(DAY_MILESTONE_30);
    if (dayStreak === 14) return pickRandom(DAY_MILESTONE_14);
    if (dayStreak === 7) return pickRandom(DAY_MILESTONE_7);
    if (dayStreak === 3) return pickRandom(DAY_MILESTONE_3);
  }

  // 通常時はデフォルト + 約半分の確率で末尾に励ましをくっつける
  const head = pickRandom(CORRECT_DEFAULT);
  const trail = pickRandom(CORRECT_TRAILING_OPTIONAL);
  return trail ? `${head} ${trail}` : head;
}

// =====================================================
// 不正解フィードバック
// =====================================================

const INCORRECT_TEMPLATES = [
  (label: string) => `惜しい！正解は『${label}』だよ。`,
  (label: string) => `答えは『${label}』。次に出たら思い出そう！`,
  (label: string) => `正解は『${label}』。忘れてもまた出るから大丈夫！`,
  (label: string) => `答えは『${label}』だったよ。次に出たらきっと覚えてる！`,
  (label: string) => `惜しい！正解は『${label}』。今ここで覚えよう。`,
  (label: string) => `正解は『${label}』。気にせず次へいこう！`,
  (label: string) => `少し難しかったね。正解は『${label}』だよ。`,
  (label: string) => `惜しい！正解は『${label}』だったよ。`,
  (label: string) => `正解は『${label}』。間違えた問題こそチャンス！`,
  (label: string) => `『${label}』が正解！次に出たら思い出せるよ。`,
  (label: string) => `今のは『${label}』が正解。ここで確認できたね。`,
  (label: string) => `正解は『${label}』。気を取り直して次！`,
  (label: string) => `答えは『${label}』。今覚えればOK！`,
  (label: string) => `正解は『${label}』だったよ。落ち込まないでね`,
  (label: string) => `惜しい！『${label}』が正解。次につなげよう！`,
];

export function getIncorrectFeedback(input: { correctLabel: string }): string {
  return pickRandom(INCORRECT_TEMPLATES)(input.correctLabel);
}

// =====================================================
// 配信時の前置きテキスト（push 経路）
// =====================================================

const FIRST_TIME_INTROS = [
  "はじめての1問だよ。気軽にいこう！",
  "1問目、気楽にやってみてね！",
  "さっそく1問。間違えても大丈夫だよ！",
  "最初の1問、いってみよう！",
  "ようこそ！さっそく1問いこう！",
  "はじめまして！まずは1問やってみよう！",
  "記念すべき1問目、肩の力抜いていこう！",
  "1問目、ドキドキしなくて大丈夫だよ！",
];

const COMEBACK_LONG_INTROS = [
  "おかえり！戻ってきてくれてうれしい。今日の1問だよ！",
  "久しぶりだね。1問だけ、肩の力抜いてやってみよう！",
  "また会えてうれしい。1問やっていこう！",
  "ひさしぶり！焦らず1問ずつ、また始めよう！",
  "戻ってきてくれてありがとう。今日の1問だよ！",
  "ひさしぶり！また一緒にやろう！",
  "おかえり！今日も1問いこう！",
  "また来てくれた！うれしい。今日の1問！",
  "ひさしぶりだね！ゆっくりでいいから再スタート！",
  "戻ってきてくれてありがとう！1問だけでも今日はえらい！",
  "おかえり！ブランクあっても全然大丈夫だよ！",
  "ひさびさ！1問だけ一緒にやろう！",
  "また勉強再開してくれてありがとう！1問どうぞ！",
];

const COMEBACK_SHORT_INTROS = [
  "ひさしぶり！1問だけ一緒にやろう！",
  "おかえり。今日の1問、気楽にどうぞ！",
  "また来てくれた！1問やっていこう！",
  "戻ってきたね。今日の1問だよ！",
  "戻ってきたね！1問いこう！",
  "ひさびさ！まずは1問だけどうぞ！",
  "おかえり！今日の1問、肩の力抜いていこう！",
  "また会えたね！1問だけ気軽に！",
  "ひさしぶり！今日も1問やってみよう！",
  "戻ってきてくれてうれしい！1問いこう！",
];

const STREAK_LONG_INTROS = [
  "今日も来てくれてありがとう。1問どうぞ！",
  "毎日えらい！今日の1問だよ！",
  "今日もコツコツ、いいね。1問いこう！",
  "続けてる姿、かっこいいよ。今日の1問！",
  "今日もありがとう！1問だけサクッと！",
  "毎日続けてるの、すごいことだよ。1問どうぞ！",
  "今日も来てくれてうれしい！1問いこう！",
  "コツコツ続けるのが一番強い。今日の1問！",
  "今日もえらい！サクッと1問！",
  "毎日がんばってるね。今日の1問だよ！",
];

const STREAK_SHORT_INTROS = [
  (n: number) => `${n}日連続中！今日の1問だよ！`,
  (n: number) => `${n}日続いてる！その調子で1問いこう！`,
  (n: number) => `${n}日連続、いい流れ。今日の1問！`,
  (n: number) => `${n}日目も来てくれてうれしい。1問どうぞ！`,
  (n: number) => `${n}連続！今日もいくよ！`,
  (n: number) => `${n}日続いてる、いいね！今日の1問！`,
  (n: number) => `${n}日達成中！この調子で1問！`,
  (n: number) => `${n}日続けるってすごいこと。今日も1問！`,
  (n: number) => `${n}日連続！もう習慣だね。今日の1問！`,
  (n: number) => `${n}日目！いい調子。1問いこう！`,
];

const DEFAULT_INTROS = [
  "今日の1問だよ！",
  "今日もやっていこう。1問どうぞ！",
  "今日の1問、気楽にどうぞ！",
  "今日もお疲れさま。1問だけやってみよう！",
  "1問だけでも、やったらえらい！",
  "今日も1問いってみよう！",
  "さっと1問、いってみよう！",
  "1問だけ、肩の力抜いてやってみてね！",
  "今日の1問、さっといこう！",
  "ちょっとひと息、1問やっていこう！",
  "今日の1問だよ。気軽にどうぞ！",
  "1問やったら今日の自分、ちょっと自慢できるよ！",
  "ぱっと1問、やってみよう！",
  "今日もいくよ、1問！",
];

export interface DailyIntroInput {
  /** 直近の回答からの経過日数（JST 暦日ベース）。一度も回答していなければ null */
  daysSinceLastAnswer: number | null;
  /** 連続学習日数（今日を含むかは問わない） */
  dayStreak: number;
}

export function getDailyIntro(input: DailyIntroInput): string {
  const { daysSinceLastAnswer, dayStreak } = input;

  // 一度も回答したことがない（初回配信）
  if (daysSinceLastAnswer === null) {
    return pickRandom(FIRST_TIME_INTROS);
  }

  // 復帰歓迎（長め）
  if (daysSinceLastAnswer >= 7) {
    return pickRandom(COMEBACK_LONG_INTROS);
  }
  // 復帰歓迎（軽め）
  if (daysSinceLastAnswer >= 3) {
    return pickRandom(COMEBACK_SHORT_INTROS);
  }

  // 長期継続をさりげなく称える
  if (dayStreak >= 14) {
    return pickRandom(STREAK_LONG_INTROS);
  }
  // 短期継続を明示的に称える
  if (dayStreak >= 3) {
    return pickRandom(STREAK_SHORT_INTROS)(dayStreak);
  }

  return pickRandom(DEFAULT_INTROS);
}

// =====================================================
// 個別ボタンからの呼び出しに対する intro
// =====================================================

const EXTRA_QUESTION_INTROS = [
  "もう1問いこう！",
  "じゃあ、もう1問！",
  "つづけて1問どうぞ！",
  "次の1問だよ！",
  "もう1問、気楽にどうぞ！",
  "いくよ、もう1問！",
  "次いこう、もう1問！",
  "やる気あるね！1問追加！",
  "さっと、もう1問！",
  "じゃあいくよ、次の1問！",
  "もう1問、やってみよう！",
  "いいやる気！1問追加！",
  "つづけてもう1問！",
  "いい流れだね、もう1問！",
];

export function getExtraQuestionIntro(): string {
  return pickRandom(EXTRA_QUESTION_INTROS);
}

const WEAK_REVIEW_INTROS = [
  "苦手から1問！復習でしっかり覚えよう！",
  "前間違えた問題から1問。もう一度トライ！",
  "苦手復習、1問いこう。今度は大丈夫！",
  "もう一度、復習の1問！",
  "苦手から出すよ。落ち着いてどうぞ！",
  "前に間違えた問題、もう一度いくよ！",
  "苦手は伸びしろ！1問やっていこう！",
  "もう一度、1問チャレンジ！",
  "苦手こそ覚えるチャンス！1問いこう！",
  "復習の1問、いってみよう！",
  "前に迷った問題、もう一度確認しよう！",
  "間違えた問題ほど力になる！1問！",
  "苦手を少しずつ減らそう！",
];

const WEAK_REVIEW_EMPTY = [
  "まだ苦手データがないみたい。まずは『追加で解く』で挑戦して、間違えた問題が貯まったら戻ってきてね！",
  "苦手データはまだありません。『追加で解く』で問題を解いて、間違えた問題が貯まってから来てみてね！",
  "苦手リストはまだ空です。『追加で解く』で問題を解くと、復習できる問題が増えていきます。",
  "復習する苦手がまだないよ。『追加で解く』で挑戦してから来てみてね！",
  "苦手データ、まだないみたい。先に『追加で解く』で問題に挑戦してみよう！",
];

export function getWeakReviewIntro(opts?: { empty?: boolean }): string {
  if (opts?.empty) {
    return pickRandom(WEAK_REVIEW_EMPTY);
  }
  return pickRandom(WEAK_REVIEW_INTROS);
}

// =====================================================
// 初期設定完了直後（時間選択後）の最初の1問
// =====================================================

const INITIAL_INTROS = [
  (hourLabel: string) =>
    `明日から${hourLabel}に毎日1問が届きます。今日は早速、今から1問送るね！`,
  (hourLabel: string) =>
    `設定できました。明日から${hourLabel}に毎日1問、今日はこのまま1問目いきます！`,
  (hourLabel: string) =>
    `これで明日から${hourLabel}に毎日届きます。今日は早速、最初の1問！`,
  (hourLabel: string) =>
    `OK！明日から${hourLabel}に毎日1問。今日は今から送るね！`,
  (hourLabel: string) =>
    `登録完了！明日から${hourLabel}に届くよ。今日はお試しで1問目どうぞ！`,
  (hourLabel: string) =>
    `明日から${hourLabel}に毎日1問。今日は待たずに、今から1問送ります！`,
  (hourLabel: string) =>
    `毎日の配信は明日から${hourLabel}。今日は早速この場で1問やってみよう！`,
  (hourLabel: string) =>
    `セット完了！明日から${hourLabel}に毎日1問、今日は今から1問目！`,
];

const INITIAL_TRAILINGS = [
  (hourLabel: string) => `次回は明日の${hourLabel}にお届けするね！`,
  (hourLabel: string) => `また明日の${hourLabel}に会おう！`,
  (hourLabel: string) => `次は明日の${hourLabel}にお届け！`,
  (hourLabel: string) => `明日の${hourLabel}に次の1問が届くよ！`,
  (hourLabel: string) => `また明日の${hourLabel}にお会いしましょう！`,
  (hourLabel: string) => `明日の${hourLabel}、楽しみにしててね！`,
  (hourLabel: string) => `次の問題は明日の${hourLabel}にね！`,
  (hourLabel: string) => `また明日の${hourLabel}にお邪魔します！`,
];

export function getInitialFirstQuestionIntro(hourLabel: string): string {
  return pickRandom(INITIAL_INTROS)(hourLabel);
}

export function getInitialFirstQuestionTrailing(hourLabel: string): string {
  return pickRandom(INITIAL_TRAILINGS)(hourLabel);
}

// =====================================================
// 当日すでに送信済みの返信
// =====================================================

const ALREADY_DELIVERED_TEXTS = [
  (hourLabel: string) => `今日はもう1問送ったよ。明日また${hourLabel}に会おう！`,
  (hourLabel: string) => `今日の1問は配信済み！明日の${hourLabel}に続きをどうぞ！`,
  (hourLabel: string) => `今日のぶんは送ったよ。また明日の${hourLabel}に来てね！`,
  (hourLabel: string) => `今日はもう1問届けたよ。続きは明日の${hourLabel}に！`,
  (hourLabel: string) => `本日の1問はお届け済み！明日の${hourLabel}にまた会おう！`,
  (hourLabel: string) => `今日のは送ったから、また明日の${hourLabel}にね！`,
  (hourLabel: string) => `今日は配信済みだよ。明日の${hourLabel}にお楽しみに！`,
  (hourLabel: string) => `今日はもうお届けしたよ。次は明日の${hourLabel}！`,
];

export function getAlreadyDeliveredText(hourLabel: string): string {
  return pickRandom(ALREADY_DELIVERED_TEXTS)(hourLabel);
}
