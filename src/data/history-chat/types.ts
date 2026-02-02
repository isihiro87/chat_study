// 歴史チャットコンテンツ全体
export interface HistoryChat {
  id: string;
  icon: string; // テーマアイコン絵文字
  title: string; // テーマタイトル
  subtitle: string; // サブタイトル（登場人物など）
  characters: ChatCharacter[]; // 登場キャラクター
  content: ChatContent[]; // コンテンツ配列
}

// キャラクター定義
export interface ChatCharacter {
  id: string; // 識別ID（英字）
  name: string; // 表示名
  emoji: string; // アバター絵文字
  colorFrom: string; // グラデーション開始色
  colorTo: string; // グラデーション終了色
}

// コンテンツ要素（Union型）
export type ChatContent =
  | DateContent
  | NarratorContent
  | MessageContent
  | QuizContent
  | EndContent;

export interface DateContent {
  type: 'date';
  text: string;
}

export interface NarratorContent {
  type: 'narrator';
  text: string; // HTMLタグ（<strong>等）対応
}

export interface MessageContent {
  type: 'message';
  side: 'left' | 'right';
  characterId: string;
  text: string;
}

export interface QuizContent {
  type: 'quiz';
  question: string;
  options: QuizOption[];
  explanation: string; // HTMLタグ対応
}

export interface QuizOption {
  letter: string; // 'A', 'B', 'C', 'D'
  text: string;
  correct: boolean;
}

export interface EndContent {
  type: 'end';
  points: string[]; // まとめポイント
}
