# リポジトリ構造定義書 (Repository Structure Document)

## プロジェクト構造

```
marutto-study/
├── src/                       # ソースコード
│   ├── pages/                 # ページコンポーネント
│   ├── components/            # 共通コンポーネント
│   ├── hooks/                 # カスタムフック
│   ├── data/                  # 静的データ・型定義
│   ├── styles/                # グローバルスタイル
│   ├── App.tsx                # ルートコンポーネント
│   └── main.tsx               # エントリーポイント
├── public/                    # 静的アセット
│   └── images/                # 画像ファイル
├── tests/                     # テストコード
│   ├── unit/                  # ユニットテスト
│   ├── components/            # コンポーネントテスト
│   └── e2e/                   # E2Eテスト
├── docs/                      # プロジェクトドキュメント
└── .claude/                   # Claude Code設定
```

## ディレクトリ詳細

### src/ (ソースコードディレクトリ)

#### pages/

**役割**: React Routerで使用するページコンポーネント

**配置ファイル**:
- `*Page.tsx`: ページコンポーネント

**命名規則**:
- PascalCase + `Page` サフィックス
- 例: `TopPage.tsx`, `LearningPage.tsx`

**依存関係**:
- 依存可能: `components/`, `hooks/`, `data/`
- 依存禁止: 他のページへの直接依存

**例**:
```
pages/
├── TopPage.tsx              # トップページ（科目選択）
├── UnitSelectPage.tsx       # 単元選択ページ
└── LearningPage.tsx         # 学習ページ（タブ切替）
```

#### components/

**役割**: 再利用可能なUIコンポーネント

**配置ファイル**:
- `*.tsx`: Reactコンポーネント
- `*.module.css`: コンポーネント固有のスタイル（必要に応じて）

**命名規則**:
- PascalCase
- 例: `TabBar.tsx`, `FlashcardDeck.tsx`

**サブディレクトリ構造**:
```
components/
├── common/                  # 汎用UIコンポーネント
│   ├── Header.tsx
│   ├── TabBar.tsx
│   ├── ProgressBar.tsx
│   ├── Button.tsx
│   └── Card.tsx
├── learning/                # 学習機能コンポーネント
│   ├── ExplanationView.tsx
│   ├── VideoPlayer.tsx
│   ├── VerticalVideoFeed.tsx
│   ├── FlashcardDeck.tsx
│   ├── Flashcard.tsx
│   ├── QuizView.tsx
│   └── QuizResult.tsx
└── icons/                   # アイコンコンポーネント（必要に応じて）
    └── SubjectIcon.tsx
```

**依存関係**:
- 依存可能: `hooks/`, `data/types`
- 依存禁止: `pages/`

#### hooks/

**役割**: カスタムReactフック

**配置ファイル**:
- `use*.ts`: カスタムフック

**命名規則**:
- camelCase + `use` プレフィックス
- 例: `useSwipe.ts`, `useLocalStorage.ts`

**例**:
```
hooks/
├── useSwipe.ts              # スワイプジェスチャー
├── useLocalStorage.ts       # localStorage管理
├── useQuiz.ts               # クイズの状態管理
├── useFlashcard.ts          # フラッシュカードの状態管理
└── useFirstVisit.ts         # 初回訪問検知（ガイド表示用）
```

**依存関係**:
- 依存可能: `data/types`
- 依存禁止: `pages/`, `components/`

#### data/

**役割**: 静的データ、型定義、定数

**配置ファイル**:
- `types.ts`: 共通型定義
- `constants.ts`: 定数定義
- `subjects/*/`: 科目ごとのコンテンツデータ

**構造**:
```
data/
├── types.ts                 # 型定義
├── constants.ts             # 定数（色、サイズなど）
└── subjects/
    ├── index.ts             # 科目一覧エクスポート
    └── history/             # 歴史科目
        ├── index.ts         # 歴史科目のエクスポート
        └── units/           # 単元データ
            ├── index.ts     # 単元一覧エクスポート
            ├── ancient-japan.ts
            ├── asuka-nara.ts
            └── heian.ts
```

**依存関係**:
- 依存可能: なし（最下層）
- 依存禁止: `pages/`, `components/`, `hooks/`

#### styles/

**役割**: グローバルスタイル

**配置ファイル**:
- `index.css`: Tailwind CSSインポート、グローバルスタイル

**例**:
```
styles/
└── index.css                # @tailwind base/components/utilities
```

### public/ (静的アセットディレクトリ)

**役割**: ビルド時にそのままコピーされる静的ファイル

**構造**:
```
public/
├── favicon.ico              # ファビコン
└── images/
    └── history/             # 歴史科目の画像
        ├── kofun.webp
        ├── asuka.webp
        └── ...
```

**命名規則**:
- kebab-case
- 拡張子: WebP推奨（PNG, JPGも可）

### tests/ (テストディレクトリ)

#### unit/

**役割**: ユニットテストの配置

**構造**:
```
tests/unit/
├── hooks/
│   ├── useSwipe.test.ts
│   └── useQuiz.test.ts
└── data/
    └── subjects/
        └── history/
            └── units.test.ts
```

**命名規則**:
- パターン: `[テスト対象].test.ts`

#### components/

**役割**: コンポーネントテストの配置

**構造**:
```
tests/components/
├── common/
│   ├── TabBar.test.tsx
│   └── Header.test.tsx
└── learning/
    ├── FlashcardDeck.test.tsx
    └── QuizView.test.tsx
```

**命名規則**:
- パターン: `[コンポーネント名].test.tsx`

#### e2e/

**役割**: E2Eテストの配置

**構造**:
```
tests/e2e/
├── learning-flow.test.ts    # 学習フロー全体
├── quiz-completion.test.ts  # クイズ完了
└── flashcard-review.test.ts # フラッシュカード復習
```

### docs/ (ドキュメントディレクトリ)

**配置ドキュメント**:
- `product-requirements.md`: プロダクト要求定義書
- `functional-design.md`: 機能設計書
- `architecture.md`: アーキテクチャ設計書
- `repository-structure.md`: リポジトリ構造定義書（本ドキュメント）
- `development-guidelines.md`: 開発ガイドライン
- `glossary.md`: 用語集

**サブディレクトリ**:
- `ideas/`: 壁打ち・アイデアメモ

## ファイル配置規則

### ソースファイル

| ファイル種別 | 配置先 | 命名規則 | 例 |
|------------|--------|---------|-----|
| ページ | src/pages/ | PascalCase + Page | TopPage.tsx |
| コンポーネント | src/components/*/ | PascalCase | FlashcardDeck.tsx |
| フック | src/hooks/ | camelCase + use | useSwipe.ts |
| 型定義 | src/data/ | camelCase | types.ts |
| コンテンツデータ | src/data/subjects/*/ | kebab-case | ancient-japan.ts |

### テストファイル

| テスト種別 | 配置先 | 命名規則 | 例 |
|-----------|--------|---------|-----|
| ユニットテスト | tests/unit/ | [対象].test.ts | useQuiz.test.ts |
| コンポーネントテスト | tests/components/ | [対象].test.tsx | QuizView.test.tsx |
| E2Eテスト | tests/e2e/ | [シナリオ].test.ts | learning-flow.test.ts |

### 設定ファイル

| ファイル種別 | 配置先 | 例 |
|------------|--------|-----|
| Vite設定 | プロジェクトルート | vite.config.ts |
| TypeScript設定 | プロジェクトルート | tsconfig.json |
| Tailwind設定 | プロジェクトルート | tailwind.config.js |
| ESLint設定 | プロジェクトルート | eslint.config.js |
| Prettier設定 | プロジェクトルート | .prettierrc |

## 命名規則

### ディレクトリ名

- **レイヤーディレクトリ**: 複数形、kebab-case
  - 例: `pages/`, `components/`, `hooks/`
- **機能ディレクトリ**: 単数形または複数形、kebab-case
  - 例: `common/`, `learning/`, `subjects/`
- **科目ディレクトリ**: 英語名、kebab-case
  - 例: `history/`, `math/`, `english/`

### ファイル名

- **コンポーネント**: PascalCase
  - 例: `TabBar.tsx`, `FlashcardDeck.tsx`
- **フック**: camelCase + use プレフィックス
  - 例: `useSwipe.ts`, `useLocalStorage.ts`
- **データファイル**: kebab-case
  - 例: `ancient-japan.ts`, `types.ts`
- **テストファイル**: [対象].[test|spec].[ts|tsx]
  - 例: `useQuiz.test.ts`, `QuizView.test.tsx`

### コンポーネント内部

- **Props型**: `[コンポーネント名]Props`
  - 例: `TabBarProps`, `QuizViewProps`
- **State型**: `[コンポーネント名]State`
  - 例: `QuizViewState`

## 依存関係のルール

### レイヤー間の依存

```
pages/
    ↓ (OK)
components/
    ↓ (OK)
hooks/
    ↓ (OK)
data/
```

**禁止される依存**:
- `data/` → `hooks/` (❌)
- `data/` → `components/` (❌)
- `data/` → `pages/` (❌)
- `hooks/` → `components/` (❌)
- `hooks/` → `pages/` (❌)
- `components/` → `pages/` (❌)

### コンポーネント間の依存

- `common/` コンポーネントは他のコンポーネントに依存しない
- `learning/` コンポーネントは `common/` に依存可能
- 同階層のコンポーネント間の循環依存は禁止

## スケーリング戦略

### 科目の追加

新しい科目を追加する際の手順:

```
src/data/subjects/
├── history/          # 既存
├── math/             # 新規追加
│   ├── index.ts
│   └── units/
│       ├── index.ts
│       ├── equations.ts
│       └── ...
└── index.ts          # 科目一覧に追加
```

1. `src/data/subjects/[科目名]/` ディレクトリを作成
2. `index.ts` で科目情報をエクスポート
3. `units/` に単元データを追加
4. `src/data/subjects/index.ts` に新科目を追加
5. `public/images/[科目名]/` に画像を配置

### 単元の追加

新しい単元を追加する際の手順:

1. `src/data/subjects/[科目名]/units/[単元名].ts` を作成
2. `src/data/subjects/[科目名]/units/index.ts` にエクスポート追加
3. 必要に応じて `public/images/[科目名]/` に画像を追加

### コンポーネントの分割

**ファイル分割の目安**:
- 1ファイル: 200行以下を推奨
- 200-300行: リファクタリングを検討
- 300行以上: 分割を強く推奨

**分割例**:
```
# 分割前
QuizView.tsx (400行)

# 分割後
QuizView.tsx (150行)        # メインコンポーネント
QuizQuestion.tsx (100行)    # 問題表示
QuizOption.tsx (50行)       # 選択肢
QuizResult.tsx (100行)      # 結果表示
```

## 特殊ディレクトリ

### .steering/ (ステアリングファイル)

**役割**: 特定の開発作業における「今回何をするか」を定義

**構造**:
```
.steering/
└── [YYYYMMDD]-[task-name]/
    ├── requirements.md      # 今回の作業の要求内容
    ├── design.md            # 変更内容の設計
    └── tasklist.md          # タスクリスト
```

**命名規則**: `20250201-add-history-unit` 形式

### .claude/ (Claude Code設定)

**役割**: Claude Code設定とカスタマイズ

**構造**:
```
.claude/
├── commands/                # スラッシュコマンド
├── skills/                  # スキル定義
└── agents/                  # サブエージェント定義
```

## 除外設定

### .gitignore

```
# Dependencies
node_modules/

# Build output
dist/

# Environment
.env
.env.local

# IDE
.idea/
.vscode/
*.swp

# OS
.DS_Store
Thumbs.db

# Test coverage
coverage/

# Logs
*.log
npm-debug.log*
```

### .prettierignore

```
dist/
node_modules/
coverage/
*.md
```

### .eslintignore

```
dist/
node_modules/
coverage/
```
