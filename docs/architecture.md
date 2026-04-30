# 技術仕様書 (Architecture Design Document)

## テクノロジースタック

### 言語・ランタイム

| 技術 | バージョン |
|------|-----------|
| Node.js | v24.11.0 |
| TypeScript | 5.x |
| npm | 11.x |

### フレームワーク・ライブラリ

| 技術 | バージョン | 用途 | 選定理由 |
|------|-----------|------|----------|
| React | 19.x | UIフレームワーク | コンポーネント指向、豊富なエコシステム |
| Vite | 5.x | ビルドツール | 高速な開発サーバー、HMR対応 |
| React Router | 7.x | ルーティング | 宣言的ルーティング、シンプルなAPI |
| Tailwind CSS | 4.x | スタイリング | ユーティリティファースト、レスポンシブ対応が容易 |
| Framer Motion | 12.x | アニメーション | ジェスチャー対応、直感的なAPI |
| Lucide React | 0.x | アイコン | 軽量、シンプル、カスタマイズ可能 |
| Firebase | 12.x | 認証・データベース | Google/LINE認証、Firestore永続化 |

### 開発ツール

| 技術 | バージョン | 用途 | 選定理由 |
|------|-----------|------|----------|
| ESLint | 9.x | 静的解析 | コード品質の維持 |
| Prettier | 3.x | フォーマッター | 一貫したコードスタイル |
| Vitest | 2.x | テスト | Viteネイティブ、高速 |
| Testing Library | 16.x | コンポーネントテスト | ユーザー視点のテスト |

## アーキテクチャパターン

### フロントエンドアーキテクチャ

```
┌─────────────────────────────────────────────────────┐
│                    Pages                             │
│  (TopPage, EraSelectPage, TopicSelectPage,          │
│   LearningPage, RandomQuizPage, HistoryChatPage)    │
├─────────────────────────────────────────────────────┤
│                   Components                         │
│  (TabBar, Header, VideoPlayer, FlashcardDeck,       │
│   QuizView, ChatContainer, etc.)                     │
├─────────────────────────────────────────────────────┤
│                    Hooks                             │
│  (useQuiz, useFlashcard, useStudyProgress,          │
│   useTopicNavigation, useHistoryChat, etc.)         │
├─────────────────────────────────────────────────────┤
│                    Data                              │
│  (TS modules, types, registry)                       │
└─────────────────────────────────────────────────────┘
```

#### Pagesレイヤー
- **責務**: ルーティングに対応するページコンポーネント
- **許可される操作**: Componentsの組み合わせ、Hooksの使用
- **禁止される操作**: 直接的なデータ取得ロジックの実装

#### Componentsレイヤー
- **責務**: 再利用可能なUIコンポーネント
- **許可される操作**: Props経由でのデータ受け取り、Hooksの使用
- **禁止される操作**: ページ固有のロジック、グローバル状態への直接アクセス

#### Hooksレイヤー
- **責務**: 状態管理、副作用、ロジックの抽象化
- **許可される操作**: React APIの使用、Dataレイヤーへのアクセス
- **禁止される操作**: UI描画ロジック

#### Dataレイヤー
- **責務**: データ型定義、静的データ、定数
- **許可される操作**: 型のエクスポート、データのエクスポート
- **禁止される操作**: Reactへの依存

### ディレクトリ構造

```
src/
├── pages/                    # ページコンポーネント
│   ├── TopPage.tsx
│   ├── EraSelectPage.tsx
│   ├── TopicSelectPage.tsx
│   ├── LearningPage.tsx
│   ├── RandomQuizPage.tsx
│   ├── HistoryChatPage.tsx
│   ├── SettingsPage.tsx
│   ├── LineCallbackPage.tsx
│   ├── NotFoundPage.tsx
│   └── AdminPage.tsx
├── components/               # 共通コンポーネント
│   ├── common/              # 汎用UI
│   │   ├── Header.tsx
│   │   ├── TabBar.tsx
│   │   ├── ProgressIndicator.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── ErrorScreen.tsx
│   │   ├── ImageLightbox.tsx
│   │   ├── MathText.tsx
│   │   ├── ResumeDialog.tsx
│   │   ├── SEOHead.tsx
│   │   └── SurveyPopup.tsx
│   ├── learning/            # 学習機能
│   │   ├── VideoPlayer.tsx
│   │   ├── FlashcardDeck.tsx
│   │   ├── FlashcardSetup.tsx
│   │   ├── QuizView.tsx
│   │   └── QuizSetup.tsx
│   ├── history-chat/        # チャット形式学習（歴史・地理）
│   ├── random-quiz/         # ランダムクイズ
│   └── auth/                # 認証関連
├── hooks/                    # カスタムフック
│   ├── useQuiz.ts
│   ├── useFlashcard.ts
│   ├── useStudyProgress.ts
│   ├── useHistoryChat.ts
│   ├── useTopicNavigation.ts
│   ├── useSpeechSynthesis.ts
│   └── useTooltip.ts
├── contexts/                 # React Context
│   └── AuthContext.tsx
├── firebase/                 # Firebase設定・操作
│   ├── config.ts
│   └── firestore.ts
├── data/                     # 静的データ
│   ├── subjects/             # 教科別コンテンツ
│   │   ├── english/
│   │   ├── geography/
│   │   ├── history/
│   │   ├── math/
│   │   └── science/
│   ├── generated/            # ビルド時生成（topic-registry等）
│   └── types.ts
├── utils/                    # ユーティリティ
├── styles/                   # グローバルスタイル
│   └── index.css
├── App.tsx                   # ルートコンポーネント
└── main.tsx                  # エントリーポイント

public/
├── images/                   # 画像アセット
└── favicon.ico
```

## データ永続化戦略

### ストレージ方式

| データ種別 | ストレージ | フォーマット | 理由 |
|-----------|----------|-------------|------|
| 学習コンテンツ | 静的ファイル（TypeScript） | TypeScriptオブジェクト | 型安全、ビルド時検証可能 |
| 学習進捗（将来） | localStorage | JSON | ログイン不要、ブラウザ内完結 |
| 初回ガイド表示フラグ | localStorage | boolean | シンプル、永続化必要 |

### コンテンツデータ構造

```typescript
// src/data/subjects/history/units/ancient-japan.ts
import { Unit } from '@/data/types';

export const ancientJapan: Unit = {
  id: 'ancient-japan',
  subjectId: 'history',
  name: '古墳時代',
  subtitle: '〜大きなお墓を作った時代〜',
  icon: 'pyramid',
  order: 1,
  content: {
    explanation: { ... },
    videos: [ ... ],
    flashcards: [ ... ],
    quiz: { ... }
  }
};
```

### 将来のバックアップ戦略（学習進捗対応時）

- **頻度**: 学習完了時に自動保存
- **保存先**: localStorage
- **エクスポート**: JSON形式でダウンロード可能（将来機能）
- **復元方法**: ファイルアップロードでインポート（将来機能）

## パフォーマンス要件

### レスポンスタイム

| 操作 | 目標時間 | 測定環境 |
|------|---------|---------|
| 初回ページ読み込み（LCP） | 2.5秒以内 | 4G回線 |
| タブ切り替え | 100ms以内 | - |
| カード表裏切り替え | 即時（16ms以内） | - |
| クイズ正誤フィードバック | 即時（16ms以内） | - |

### バンドルサイズ目標

| 対象 | 目標サイズ | 理由 |
|------|----------|------|
| 初期バンドル | 150KB以下（gzip） | 高速な初回読み込み |
| 遅延読み込みチャンク | 50KB以下/チャンク | スムーズなタブ切替 |

### 最適化手法

- **コード分割**: React.lazyでタブコンテンツを分割
- **画像最適化**: WebP形式、適切なサイズ
- **Tree Shaking**: 使用していないコードの除去
- **プリロード**: 次に使いそうなチャンクの先読み

## セキュリティアーキテクチャ

### データ保護

- **個人情報**: 収集しない（ログイン機能なし）
- **localStorage**: 学習進捗のみ（機密情報なし）
- **外部通信**: HTTPS必須

### 入力検証

- **ユーザー入力**: クイズの選択のみ（自由入力なし）
- **バリデーション**: 選択肢インデックスの範囲チェック
- **サニタイゼーション**: 静的コンテンツのため不要

### 外部コンテンツ

- **YouTube埋め込み**: iframe sandboxを使用
- **許可するソース**: youtube.com, youtube-nocookie.com のみ
- **CSP設定**: 必要なドメインのみ許可

## スケーラビリティ設計

### コンテンツ増加への対応

- **想定データ量**: 5科目 × 50単元 × 各種コンテンツ
- **パフォーマンス対策**: 単元ごとの遅延読み込み
- **ビルド時間対策**: インクリメンタルビルド

### 機能拡張性

```
src/data/subjects/
├── history/           # 歴史（MVP）
│   └── units/
├── math/              # 数学（将来）
│   └── units/
├── english/           # 英語（将来）
│   └── units/
└── index.ts           # 科目一覧
```

- **新科目追加**: ディレクトリとデータファイルの追加のみ
- **新単元追加**: unitsフォルダにファイル追加
- **新学習モード追加**: componentsに新コンポーネント追加

## テスト戦略

### ユニットテスト
- **フレームワーク**: Vitest
- **対象**: Hooks、ユーティリティ関数、データ変換ロジック
- **カバレッジ目標**: 80%

### コンポーネントテスト
- **フレームワーク**: Testing Library + Vitest
- **対象**: 各コンポーネントの表示・インタラクション
- **方針**: ユーザー視点でのテスト（data-testidよりロール/ラベル優先）

### E2Eテスト
- **ツール**: Playwright（将来導入）
- **シナリオ**:
  - 科目選択→単元選択→学習完了の一連フロー
  - クイズ全問回答フロー
  - フラッシュカード全カードめくりフロー

### 手動テスト
- **実機テスト**: iPhone Safari、Android Chrome
- **確認項目**: ジェスチャー操作、アニメーション、レスポンシブ表示

## 技術的制約

### 環境要件
- **対応ブラウザ**: Chrome/Edge 90+、Safari 14+、Firefox 90+
- **対応デバイス**: スマートフォン（主）、タブレット、PC
- **最小画面幅**: 320px

### 非対応事項
- **IE11**: 非対応
- **オフライン**: MVP段階では非対応
- **PWA**: MVP段階では非対応

### パフォーマンス制約
- 動画は外部サービス（YouTube）に依存
- 同時に再生できる動画は1つまで

## 依存関係管理

| ライブラリ | 用途 | バージョン管理方針 |
|-----------|------|-------------------|
| react | UIフレームワーク | メジャーバージョン固定（^18） |
| react-router-dom | ルーティング | メジャーバージョン固定（^6） |
| framer-motion | アニメーション | メジャーバージョン固定（^11） |
| tailwindcss | スタイリング | メジャーバージョン固定（^3） |
| typescript | 型システム | メジャーバージョン固定（^5） |
| vite | ビルドツール | メジャーバージョン固定（^5） |

### 依存関係の更新方針
- **セキュリティパッチ**: 即座に適用
- **マイナーバージョン**: 月1回の定期更新
- **メジャーバージョン**: 影響を評価してから計画的に移行

## デプロイメント

### ホスティング
- **推奨**: Vercel または Cloudflare Pages
- **理由**: 無料枠で十分、グローバルCDN、自動デプロイ

### ビルド設定
```bash
# ビルドコマンド
npm run build

# 出力ディレクトリ
dist/
```

### 環境変数
- MVP段階では環境変数不要（外部APIなし）
- 将来的にアナリティクス導入時に追加予定
