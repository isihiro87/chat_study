# 開発ガイドライン (Development Guidelines)

## コーディング規約

### 命名規則

#### 変数・関数

**TypeScript/React**:
```typescript
// ✅ 良い例
const currentUnit = units[0];
const isFlipped = false;
function handleCardFlip(cardId: string): void { }
function calculateQuizScore(answers: number[]): number { }

// ❌ 悪い例
const u = units[0];
const flag = false;
function flip(id: any): void { }
function calc(arr: any[]): number { }
```

**原則**:
- 変数: camelCase、名詞または名詞句
- 関数: camelCase、動詞で始める（handle, fetch, calculate, render など）
- 定数: UPPER_SNAKE_CASE
- Boolean: `is`, `has`, `should`, `can` で始める

#### コンポーネント・型

```typescript
// コンポーネント: PascalCase
function FlashcardDeck() { }
function QuizView() { }

// Props型: コンポーネント名 + Props
interface FlashcardDeckProps {
  cards: Flashcard[];
  onComplete?: () => void;
}

// 型エイリアス: PascalCase
type TabType = 'explanation' | 'video' | 'flashcard' | 'quiz';
type QuizAnswer = number | null;
```

#### ファイル名

| 種類 | 規則 | 例 |
|------|------|-----|
| コンポーネント | PascalCase | `FlashcardDeck.tsx` |
| フック | camelCase + use | `useSwipe.ts` |
| データファイル | kebab-case | `ancient-japan.ts` |
| 型定義 | camelCase | `types.ts` |

### コードフォーマット

**インデント**: 2スペース

**行の長さ**: 最大100文字

**インポート順序**:
```typescript
// 1. React関連
import { useState, useEffect } from 'react';

// 2. 外部ライブラリ
import { motion } from 'framer-motion';

// 3. 内部モジュール（絶対パス）
import { TabBar } from '@/components/common/TabBar';
import { useSwipe } from '@/hooks/useSwipe';

// 4. 型定義
import type { Flashcard, Quiz } from '@/data/types';

// 5. スタイル・アセット
import './styles.css';
```

### Reactコンポーネント規約

**関数コンポーネントを使用**:
```typescript
// ✅ 良い例: 関数コンポーネント + アロー関数
interface CardProps {
  title: string;
  onClick?: () => void;
}

export function Card({ title, onClick }: CardProps) {
  return (
    <div onClick={onClick}>
      <h2>{title}</h2>
    </div>
  );
}

// ❌ 悪い例: クラスコンポーネント
class Card extends React.Component { }
```

**Propsの分割代入**:
```typescript
// ✅ 良い例
function Header({ title, onBack }: HeaderProps) {
  return <header>{title}</header>;
}

// ❌ 悪い例
function Header(props: HeaderProps) {
  return <header>{props.title}</header>;
}
```

**イベントハンドラの命名**:
```typescript
// ✅ 良い例: handle + 対象 + アクション
function QuizView() {
  const handleOptionClick = (index: number) => { };
  const handleNextQuestion = () => { };

  return <button onClick={handleNextQuestion}>次へ</button>;
}

// Propsとして渡す場合: on + アクション
interface QuizViewProps {
  onComplete: (score: number) => void;
  onAnswerSelect: (questionId: string, answer: number) => void;
}
```

### コメント規約

**コンポーネントのドキュメント**:
```typescript
/**
 * フラッシュカードのデッキコンポーネント
 * スワイプでカード切り替え、タップでフリップ
 */
export function FlashcardDeck({ cards, onComplete }: FlashcardDeckProps) {
  // ...
}
```

**複雑なロジックの説明**:
```typescript
// ✅ 良い例: なぜそうするかを説明
// 初回訪問時のみガイドを表示（localStorageで管理）
const showGuide = !localStorage.getItem('flashcard-guide-shown');

// ❌ 悪い例: 何をしているかを説明（コードを見れば分かる）
// localStorageから値を取得
const value = localStorage.getItem('flashcard-guide-shown');
```

**TODOコメント**:
```typescript
// TODO: 学習進捗の保存機能を追加（#123）
// FIXME: iOS Safariでスワイプが効かない場合がある
```

### エラーハンドリング

**Reactコンポーネントでのエラー処理**:
```typescript
function VideoPlayer({ videoId }: VideoPlayerProps) {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  if (error) {
    return (
      <div className="error-message">
        <p>動画を読み込めませんでした</p>
        <button onClick={() => setError(null)}>もう一度試す</button>
      </div>
    );
  }

  if (isLoading) {
    return <div className="loading">読み込み中...</div>;
  }

  return <iframe src={`https://youtube.com/embed/${videoId}`} />;
}
```

**エラーメッセージのトーン**（中学生向け）:
```typescript
// ✅ 良い例: やわらかい表現
const ERROR_MESSAGES = {
  LOAD_FAILED: '読み込めませんでした。もう一度試してね',
  NETWORK_ERROR: 'インターネットに接続してね',
  VIDEO_UNAVAILABLE: 'この動画は見られないみたい',
};

// ❌ 悪い例: 堅い表現
const ERROR_MESSAGES = {
  LOAD_FAILED: 'データの取得に失敗しました',
  NETWORK_ERROR: 'ネットワークエラーが発生しました',
};
```

## Tailwind CSS規約

### クラス名の順序

```tsx
// 1. レイアウト（display, position）
// 2. サイズ（width, height）
// 3. 余白（margin, padding）
// 4. 背景・ボーダー
// 5. テキスト
// 6. その他（animation, transition）

<div className="
  flex items-center justify-center
  w-full h-64
  p-4 mx-auto
  bg-white rounded-xl shadow-md
  text-gray-800 text-lg font-medium
  transition-transform hover:scale-105
">
```

### レスポンシブデザイン

```tsx
// モバイルファースト: 小さい画面から大きい画面へ
<div className="
  p-4 md:p-6 lg:p-8
  text-base md:text-lg
  grid grid-cols-1 md:grid-cols-2
">
```

### カスタムクラスの定義

`tailwind.config.js` でプロジェクト固有の設定:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        secondary: '#F59E0B',
        success: '#10B981',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
};
```

## Git運用ルール

### ブランチ戦略

**ブランチ種別**:
- `main`: 本番環境にデプロイ可能な状態
- `develop`: 開発の最新状態
- `feature/[機能名]`: 新機能開発
- `fix/[修正内容]`: バグ修正
- `refactor/[対象]`: リファクタリング

**フロー**:
```
main
  └─ develop
      ├─ feature/flashcard-animation
      ├─ feature/quiz-feedback
      └─ fix/video-player-ios
```

### コミットメッセージ規約

**フォーマット**:
```
<type>(<scope>): <subject>

<body>
```

**Type**:
- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメント
- `style`: コードフォーマット（機能変更なし）
- `refactor`: リファクタリング
- `test`: テスト追加・修正
- `chore`: ビルド、設定等

**例**:
```
feat(flashcard): カードフリップアニメーションを追加

- Framer Motionを使用した3Dフリップ効果
- タップでめくる、スワイプで次へ
- 初回訪問時のガイド表示
```

### プルリクエストプロセス

**作成前のチェック**:
- [ ] 全てのテストがパス (`npm test`)
- [ ] Lintエラーがない (`npm run lint`)
- [ ] 型チェックがパス (`npm run typecheck`)
- [ ] 実機でスマホ動作確認済み

**PRテンプレート**:
```markdown
## 概要
[変更内容の簡潔な説明]

## 変更内容
- [変更点1]
- [変更点2]

## スクリーンショット
[スマホ表示のスクリーンショット]

## テスト
- [ ] ユニットテスト追加
- [ ] iPhone Safari で動作確認
- [ ] Android Chrome で動作確認
```

## テスト戦略

### テストの種類

#### ユニットテスト

**対象**: フック、ユーティリティ関数

**カバレッジ目標**: 80%

**例**:
```typescript
describe('useQuiz', () => {
  it('正解を選択するとスコアが増加する', () => {
    const { result } = renderHook(() => useQuiz(mockQuiz));

    act(() => {
      result.current.selectAnswer(0); // 正解
    });

    expect(result.current.score).toBe(1);
  });

  it('全問回答後にisCompleteがtrueになる', () => {
    const { result } = renderHook(() => useQuiz(mockQuiz));

    mockQuiz.questions.forEach((_, index) => {
      act(() => {
        result.current.selectAnswer(0);
        result.current.nextQuestion();
      });
    });

    expect(result.current.isComplete).toBe(true);
  });
});
```

#### コンポーネントテスト

**対象**: UIコンポーネントの表示・インタラクション

**例**:
```typescript
describe('FlashcardDeck', () => {
  it('カードの表面が表示される', () => {
    render(<FlashcardDeck cards={mockCards} />);

    expect(screen.getByText('聖徳太子')).toBeInTheDocument();
  });

  it('タップでカードがめくれる', async () => {
    render(<FlashcardDeck cards={mockCards} />);

    const card = screen.getByRole('button', { name: /カード/ });
    await userEvent.click(card);

    expect(screen.getByText('冠位十二階を制定')).toBeInTheDocument();
  });
});
```

### テスト命名規則

**日本語での記述を推奨**（中学生向けプロダクトのため理解しやすさ重視）:

```typescript
describe('QuizView', () => {
  it('問題文が表示される', () => { });
  it('選択肢が4つ表示される', () => { });
  it('正解を選ぶと緑色になる', () => { });
  it('不正解を選ぶと赤色になり正解が表示される', () => { });
  it('全問回答後に結果画面が表示される', () => { });
});
```

## コードレビュー基準

### レビューポイント

**機能性**:
- [ ] PRDの要件を満たしているか
- [ ] エッジケースが考慮されているか（空配列、長いテキスト等）
- [ ] エラーハンドリングが適切か

**ユーザビリティ（特に重視）**:
- [ ] スマホで操作しやすいか（タップ領域44px以上）
- [ ] 中学生にとって分かりやすい表現か
- [ ] 読み込み中・エラー時のフィードバックがあるか

**可読性**:
- [ ] 命名が明確か
- [ ] コンポーネントの責務が単一か
- [ ] 複雑なロジックにコメントがあるか

**パフォーマンス**:
- [ ] 不要な再レンダリングがないか
- [ ] 画像・動画の遅延読み込みが実装されているか

### レビューコメントの書き方

**優先度の明示**:
- `[必須]`: 修正必須（バグ、セキュリティ問題）
- `[推奨]`: 修正推奨（可読性、パフォーマンス改善）
- `[提案]`: 検討してほしい（より良い方法の提案）
- `[質問]`: 理解のための質問

**例**:
```markdown
[推奨] このコンポーネントは200行を超えているので、
QuizQuestion と QuizResult に分割すると保守しやすくなります。

[質問] この状態管理をuseReducerにした理由を教えてください。
useStateでも実現できそうに見えますが、何かメリットがありますか？
```

## 開発環境セットアップ

### 必要なツール

| ツール | バージョン | インストール方法 |
|--------|-----------|-----------------|
| Node.js | v24.11.0 | `nvm install 24` |
| npm | 11.x | Node.jsに付属 |

### セットアップ手順

```bash
# 1. リポジトリのクローン
git clone https://github.com/[org]/marutto-study.git
cd marutto-study

# 2. 依存関係のインストール
npm install

# 3. 開発サーバーの起動
npm run dev

# 4. ブラウザで確認
# http://localhost:5173
```

### 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー（ビルド後の確認）
npm run preview

# テスト実行
npm test

# テスト（ウォッチモード）
npm run test:watch

# Lint
npm run lint

# 型チェック
npm run typecheck

# フォーマット
npm run format
```

### 推奨VS Code拡張機能

- **ESLint**: コードの静的解析
- **Prettier**: コードフォーマット
- **Tailwind CSS IntelliSense**: Tailwindクラスの補完
- **ES7+ React/Redux/React-Native snippets**: Reactスニペット
