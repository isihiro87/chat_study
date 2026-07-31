/**
 * つづもん（中学歴史）の全19単元。日次配信「今日の1単元」で使う。
 *
 * 正本は `pdf-workbook/books/{NN}-*.json` の title / subtitle。
 * ここは**配信文面のための写し**なので、章を足す・タイトルを変えるときは両方直す
 * （教材の生成物 `https://tsudumon.jp/wb/{NN}/` `/ref/{NN}/` の番号と1対1で対応する）。
 *
 * 学年の対応は marutto-study の CLAUDE.md「学年フォルダの対応」に準拠:
 *   中1 = 01〜06 / 中2 = 07〜12 / 中3 = 13〜19
 */

export interface TsudumonUnit {
  /** 章番号（URL の /wb/{no}/ と一致。2桁ゼロ埋めの文字列） */
  no: string;
  title: string;
  subtitle: string;
  grade: '中1' | '中2' | '中3';
}

export const TSUDUMON_UNITS: readonly TsudumonUnit[] = [
  {
    no: '01',
    title: '年代の表し方',
    subtitle: '西暦・世紀・年代の表し方',
    grade: '中1',
  },
  {
    no: '02',
    title: '古代の世界',
    subtitle: '古代文明 〜 三大宗教の成立',
    grade: '中1',
  },
  {
    no: '03',
    title: '日本の始まり',
    subtitle: '旧石器時代 〜 古墳時代',
    grade: '中1',
  },
  {
    no: '04',
    title: '古代の国家',
    subtitle: '飛鳥時代 〜 平安時代',
    grade: '中1',
  },
  {
    no: '05',
    title: '武士と鎌倉幕府',
    subtitle: '平安時代末期 〜 鎌倉時代',
    grade: '中1',
  },
  {
    no: '06',
    title: '室町時代と中世の世界',
    subtitle: 'モンゴル帝国 〜 応仁の乱',
    grade: '中1',
  },
  {
    no: '07',
    title: 'ヨーロッパと天下統一',
    subtitle: 'ルネサンス 〜 安土桃山時代',
    grade: '中2',
  },
  {
    no: '08',
    title: '幕藩体制の確立',
    subtitle: '江戸幕府成立 〜 天保の改革',
    grade: '中2',
  },
  {
    no: '09',
    title: '市民革命と近代化',
    subtitle: '市民革命 〜 帝国主義の時代',
    grade: '中2',
  },
  {
    no: '10',
    title: '幕末の動乱',
    subtitle: '黒船来航 〜 江戸幕府の滅亡',
    grade: '中2',
  },
  {
    no: '11',
    title: '明治維新と立憲国家',
    subtitle: '明治時代前期',
    grade: '中2',
  },
  {
    no: '12',
    title: '日清・日露の時代',
    subtitle: '条約改正 〜 明治文化',
    grade: '中2',
  },
  {
    no: '13',
    title: '第一次世界大戦と日本',
    subtitle: '明治末期 〜 大正時代',
    grade: '中3',
  },
  { no: '14', title: '大正デモクラシー', subtitle: '大正時代', grade: '中3' },
  {
    no: '15',
    title: '昭和の危機',
    subtitle: '世界恐慌 〜 日中戦争',
    grade: '中3',
  },
  {
    no: '16',
    title: '第二次世界大戦と日本',
    subtitle: '第二次世界大戦の始まり 〜 日本の敗戦',
    grade: '中3',
  },
  {
    no: '17',
    title: '占領と日本国憲法',
    subtitle: 'GHQ占領 〜 日本国憲法制定',
    grade: '中3',
  },
  {
    no: '18',
    title: '冷戦と日本の復興',
    subtitle: '戦後の国際社会 〜 高度経済成長期',
    grade: '中3',
  },
  { no: '19', title: '現代の世界', subtitle: '冷戦終結 〜 令和', grade: '中3' },
] as const;

/**
 * 常時無料の節がある章の番号。
 *
 * ⚠️ **この章がまるごと無料なのではない。** 無料なのは第4章のうちの1節
 * 「律令国家と奈良時代」だけ（正本は `tsudumonCore.TSUDUMON_FREE_WORKBOOK_TOPICS` /
 * `TSUDUMON_FREE_REFERENCE_KEYS`）。第4章は8節あり、残りはロックされる。
 * 文面で「1単元ぜんぶ無料」と書くと、開いた先が鍵だらけで嘘になる。
 */
export const TSUDUMON_FREE_UNIT_NO = '04';

/** カーソル（0始まりの通し番号）を単元に解決する。範囲外は先頭に巻き戻す。 */
export function unitAtCursor(cursor: number): TsudumonUnit {
  const n = TSUDUMON_UNITS.length;
  const i = ((Math.trunc(cursor) % n) + n) % n;
  return TSUDUMON_UNITS[i];
}

/** 学年から、その学年の先頭単元のカーソルを返す（未知の学年は 0）。 */
export function cursorForGrade(grade: string | null | undefined): number {
  if (!grade) return 0;
  const i = TSUDUMON_UNITS.findIndex((u) => u.grade === grade);
  return i < 0 ? 0 : i;
}

export function workbookUrl(no: string): string {
  return `https://tsudumon.jp/wb/${no}/`;
}

export function referenceUrl(no: string): string {
  return `https://tsudumon.jp/ref/${no}/`;
}
