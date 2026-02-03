// 科目
export interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
  isAvailable: boolean;
}

// 時代（Era）
export interface Era {
  id: string;
  subjectId: string;
  name: string;
  subtitle: string;
  period: string; // 例: "1603年〜1868年"
  icon: string;
  order: number;
}

// トピック（Topic）- 時代の中の学習単位
export interface Topic {
  id: string;
  eraId: string;
  name: string;
  subtitle: string;
  icon: string;
  order: number;
  content: TopicContent;
}

// トピックコンテンツ
export interface TopicContent {
  explanation: Explanation;
  videos: Video[];
  flashcards: Flashcard[];
  quiz: Quiz;
  chatId?: string; // 歴史チャットのID（オプション）
}

// 後方互換性のためのエイリアス
export type Unit = Topic;
export type UnitContent = TopicContent;

// 説明資料
export interface Explanation {
  sections: ExplanationSection[];
  slides?: SlideSet[]; // 3タップスライド形式（オプション）
}

export interface ExplanationSection {
  title: string;
  content: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  keyPoints?: string[];
}

// 3タップスライド形式
export interface SlideSet {
  id: string;
  title: string; // スライドセットのタイトル（例：「参勤交代の謎」）
  slides: [QuestionSlide, ReasonSlide, ConclusionSlide]; // 必ず3枚
}

// スライド1: 問いかけ
export interface QuestionSlide {
  type: 'question';
  question: string; // 問いかけ文
  subtext?: string; // 補足（例：「参勤交代の謎」）
  emoji?: string; // アイコン用絵文字
  image?: SlideImage;
}

// スライド2: 理由・背景
export interface ReasonSlide {
  type: 'reason';
  headline: string; // 核心的な答え（短く）
  points?: string[]; // 箇条書きポイント（最大3つ）
  visual?: SlideVisual; // 図解・比較など
  image?: SlideImage;
}

// スライド3: 結論・まとめ
export interface ConclusionSlide {
  type: 'conclusion';
  conclusion: string; // キャッチコピー的な結論
  keywords?: Keyword[]; // 重要語句
  nextHint?: string; // 次への誘導（例：「じゃあ〇〇はどうなった？」）
  image?: SlideImage;
}

export interface SlideImage {
  src: string;
  alt: string;
}

export interface SlideVisual {
  type: 'comparison' | 'timeline' | 'diagram' | 'map';
  items: VisualItem[];
}

export interface VisualItem {
  label: string;
  value?: string;
  emoji?: string;
}

export interface Keyword {
  text: string;
  isImportant?: boolean; // テストに出そうな語句
}

// 動画
export interface Video {
  id: string;
  title: string;
  description: string;
  type: 'horizontal' | 'vertical';
  source: 'youtube' | 'external';
  videoId: string;
  duration?: string;
  thumbnail?: string;
}

// フラッシュカード
export interface Flashcard {
  id: string;
  front: string;
  back: string;
  hint?: string;
}

// クイズ
export interface Quiz {
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

// タブの種類
export type TabType = 'video' | 'flashcard' | 'quiz' | 'chat';
