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
  emoji: string; // アバター絵文字（デフォルト表情）
  colorFrom: string; // グラデーション開始色
  colorTo: string; // グラデーション終了色
  expressions?: Record<string, string>; // 表情マップ（例: { happy: '😊', surprised: '😲' }）
}

// コンテンツ要素（Union型）
export type ChatContent =
  | DateContent
  | NarratorContent
  | MessageContent
  | QuizContent
  | SummaryPointContent
  | WhiteboardContent
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
  expression?: string; // キャラクターの表情キー（ChatCharacter.expressionsに対応）
  speakable?: string[]; // 音声再生対象の英文リスト（英語科目用）
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

export interface SummaryPointContent {
  type: 'summary-point';
  text: string; // ミニまとめの1行テキスト
}

export interface WhiteboardStep {
  formula: string; // 数式（HTML対応）
  annotation?: string; // 補足説明（HTML対応）
  isResult?: boolean; // 最終結果のハイライト
}

export interface WhiteboardContent {
  type: 'whiteboard';
  title?: string; // ホワイトボードのタイトル
  steps: WhiteboardStep[];
}

export interface EndContent {
  type: 'end';
  points: string[]; // まとめポイント
}
