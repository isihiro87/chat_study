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

### 2アプリ構成（Web版 / LINE版）

このリポジトリは1つの React コードベースから **2 種類の Web アプリ**をビルドして、それぞれ別ドメインで配信する。

| アプリ | エントリ | ビルド | 出力 | デプロイ先 | 用途 |
|--------|---------|--------|------|-----------|------|
| **Web版** | `index.html` → `src/main.tsx` → `src/App.tsx` | `npm run build` | `dist/` | `https://www.chatstudy.jp/` | 263トピックの学習体験全部 |
| **LINE版** | `index.line.html` → `src/main.line.tsx` → `src/line/App.line.tsx` | `npm run build:line` | `dist-line/` | `https://line.chatstudy.jp/` | 公式LINE誘導 + LIFF（slim） |

**共有モジュール**（両方の build に含まれる）:
- `src/contexts/AuthContext.tsx` — Firebase Auth + LINE Login 認証
- `src/firebase/config.ts` — Firebase SDK 初期化
- `src/utils/authGuard.ts` — `isPublicPath()` ヘルパー（Web版のみで使用）
- `src/pages/WelcomePage.tsx` — LINE誘導ページ（公式LINE友だち追加 + ログイン併記）
- `src/pages/LiffUnitsPage.tsx` — LIFF エントリページ（リッチメニュー「単元を選ぶ」着地）
- `src/pages/LineCallbackPage.tsx` — LINE Login OAuth コールバック処理
- `src/pages/NotFoundPage.tsx` — 404
- `src/components/common/ErrorBoundary.tsx`

**LINE版にだけ含まれないもの**:
- 学習体験ページ全部（TopPage / EraSelectPage / TopicSelectPage / LearningPage / RandomQuizPage / HistoryChatPage / SettingsPage / AdminPage / LoginPage）
- `src/data/subjects/` 配下の263トピック
- 学習用 Components（FlashcardDeck / QuizView / VideoPlayer / ChatContainer 等）
- `katex` / theme / SSR/prerender / sitemap / image-optimizer / PWA

→ Vite の tree-shaking が `src/line/App.line.tsx` から到達できないモジュールを bundle から除外することで、LINE 版は Web 版の 1/200 のサイズ（dist 200MB → dist-line 1MB前後）になる。

```
┌────────────────────────────────────────────────────────┐
│          リポジトリ chat_study                          │
│                                                        │
│  ┌─────────────────────┐     ┌────────────────────┐  │
│  │ Web版エントリ       │     │ LINE版エントリ      │  │
│  │ src/main.tsx        │     │ src/main.line.tsx   │  │
│  │ → src/App.tsx       │     │ → src/line/App.line │  │
│  └──────────┬──────────┘     └──────────┬─────────┘  │
│             │                            │             │
│             ▼                            ▼             │
│  ┌─────────────────────────────────────────────────┐  │
│  │     共有: AuthContext / WelcomePage /            │  │
│  │     LiffUnitsPage / LineCallbackPage 等           │  │
│  └─────────────────────────────────────────────────┘  │
│                                                        │
│  ┌─────────────────────┐                              │
│  │ Web版固有:           │                              │
│  │ - LearningPage       │                              │
│  │ - 263 topics data    │                              │
│  │ - Flashcard / Quiz   │                              │
│  └─────────────────────┘                              │
└────────────────────────────────────────────────────────┘
       │                                    │
       │ npm run build                      │ npm run build:line
       ▼                                    ▼
   dist/ (200MB)                       dist-line/ (1MB)
       │                                    │
       ▼                                    ▼
   www.chatstudy.jp                    line.chatstudy.jp
```

詳細運用: `docs/operations/line-app-deploy.md`

### フロントエンドアーキテクチャ（Web版）

```
┌─────────────────────────────────────────────────────┐
│                    Pages                             │
│  (TopPage, EraSelectPage, TopicSelectPage,          │
│   LearningPage, RandomQuizPage, HistoryChatPage,    │
│   WelcomePage, LiffUnitsPage, LineCallbackPage)     │
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

## バックエンド（Firebase Cloud Functions）

フロントエンドは静的配信（Vercel）だが、外部サービス連携やサーバ側処理が必要な機能は Firebase Cloud Functions（リージョン: `asia-northeast1`）で受ける。実装は `functions/src/` 配下、デプロイ単位は1ファンクション=1ファイル。

### 現在のファンクション

| Function | 種類 | ソース | 役割 |
|----------|------|--------|------|
| `createLineCustomToken` | HTTPS onRequest | `functions/src/index.ts` | LINE Login（Web）の OAuth コードを Firebase Auth カスタムトークンと交換する |
| `lineWebhook` | HTTPS onRequest | `functions/src/lineWebhook.ts` | LINE Messaging API（公式LINE）の Webhook 受信 |
| `dailyQuiz06` / `dailyQuiz07` / `dailyQuiz17` / `dailyQuiz19` | pubsub.schedule | `functions/src/dailyQuiz.ts` | JST 朝6時/朝7時/夕方5時/夜7時 にユーザーへ問題を push 配信 |
| `syncRichMenuToPlan` | HTTPS Callable | `functions/src/syncRichMenuToPlan.ts` | 管理者が個別ユーザーの課金プラン（free/premium）を切り替える。LINE 側のリッチメニューリンク変更と Firestore 更新を1コマンドで行う |

### LINE 連携の整理

本プロジェクトは LINE Developers の **2つの異なるチャネル** を使う:

1. **LINE Login チャネル** … Web の `/login` から Firebase Auth へ橋渡し（`createLineCustomToken`）
2. **Messaging API チャネル** … 公式LINEの友だち追加・トーク（`lineWebhook`）

両者は別チャネルだが、ユーザーは同一の LINE アカウントを使う。そのため Firestore 上は **共通の uid 規約** で1ドキュメントにマージされる:

- **uid 規約**: `uid = line:{lineUserId}`（`event.source.userId` または LINE Profile API の `userId`）
- **保存先**: `users/{uid}`
- **環境変数の命名分離**:
  - LINE Login: `LINE_LOGIN_CHANNEL_ID` / `LINE_LOGIN_CHANNEL_SECRET`
  - Messaging API: `LINE_MESSAGING_CHANNEL_SECRET` / `LINE_MESSAGING_CHANNEL_ACCESS_TOKEN`

### `lineWebhook` の現マイルストーン対応範囲

- `follow` イベント: 学年選択ボタン（中1/中2/中3）を返信、`users/{uid}` に `provider` / `lineUserId` / `status` / `source: "messaging-webhook"` / `updatedAt` を upsert
- `postback` イベント（`type=select_grade`）: 学年を `users/{uid}.grade` に保存、確認テキスト + 教科選択ボタン（歴史 / 英語）を返信
- `postback` イベント（`type=select_subject`）: 教科を `users/{uid}.subject` に保存（`"history"` / `"english"`）、確認テキスト + 配信時間選択ボタン（朝6時/朝7時/夕方5時/夜7時）を返信
- `postback` イベント（`type=select_time`）: 配信時間を `users/{uid}.preferredHour` に保存（`6` / `7` / `17` / `19`）、確認テキスト + 1問目を即送信
- `postback` イベント（`type=answer`）: M4 で本実装。`questions/{questionId}` を取得 → 正誤判定 → 「正解！」or「不正解。正解は『○○』でした。」+ 解説テキストを返信 → `answers/{auto-id}` に記録（`uid`, `questionId`, `choice`, `isCorrect`, `subject`, `grade`, `answeredAt`）。M5 で重複回答防止追加（`users/{uid}.lastAnsweredQuestionId` で同一問題への再押下を弾く）
- `message` イベント（type=text）: M5 で新設。テキスト本文「設定変更」「せってい変更」を受信したら `users/{uid}.preferredHour` を削除して学年選択ボタンを再送信。設定変更は **1日1回まで**（`users/{uid}.lastSettingsChangeAt` で制限）

### M5 で追加した運用上の制限

- **学年/教科/時間ボタンの再押下防止**: `users/{uid}.preferredHour` 設定済みのユーザーは `select_grade`/`select_subject`/`select_time` postback を受けても「すでに〇〇で登録済みです」テキストのみ返す（フローを進めない）
- **回答ボタンの重複押下防止**: 同じ `questionId` に対する2回目以降の `answer` postback は `users/{uid}.lastAnsweredQuestionId` で弾く
- **1日1問制限**: `users/{uid}.lastQuestionDeliveredAt` を JST 暦日で比較。当日すでに送信済みなら reply 経由・push 経由どちらでも新規問題を送らない（reply 経由は案内テキスト返信、push 経由はスキップしてログ記録）
- **設定変更の1日1回制限**: `users/{uid}.lastSettingsChangeAt` を JST 暦日で比較。当日すでに「設定変更」コマンドを使ったユーザーは2回目以降を弾く
- **登録時の翌日案内**: 時間選択直後の reply に「次回は明日の{時間}にお届けします」を含める

### `dailyQuiz` の動作

- 4つの Pub/Sub schedule ファンクション（`dailyQuiz06/07/17/19`）が Cloud Scheduler により JST 朝6時/朝7時/夕方5時/夜7時に起動
- 共通ロジック `runDailyQuiz(hour)` が `users` から `preferredHour == hour && status == "active"` のユーザーを抽出
- 各ユーザーに対して `selectAndSendQuestion(uid)` を `Promise.allSettled` で並列実行
- LINE Messaging API の `pushMessage` で問題を配信
- 同じ問題が連続で出ないよう `users/{uid}.recentQuestionIds`（直近10件、FIFO）で重複回避

> ⚠️ Firebase Functions v1 の `pubsub.schedule()` の制約で、Cloud Scheduler ジョブ自体は **App Engine デフォルトロケーション（`us-central1`）** に作成される。Functions 本体は `asia-northeast1` で動作。タイムゾーンは `Asia/Tokyo` を指定しているため配信時刻に影響なし。

### `answers` コレクション（M4で新設）

- パス: `answers/{auto-id}`
- フィールド: `uid`, `questionId`, `choice` (0-3), `isCorrect`, `subject`, `grade` (冗長保持), `topic` (冗長保持・byTopic 集計用), `answeredAt`

### `users/{uid}.stats`（事前計算サマリ）

- 書き込み元: `onAnswerCreated` Function（answers 書込みの trigger で同期更新）
- スキーマ:
  ```
  stats: {
    totalAnswered: number,
    totalCorrect: number,
    bySubject: { [subjectId]: { total, correct } },
    byTopic:   { [topicJa]: { total, correct } },
    streak: { current, longest, lastStudyDate ("YYYY-MM-DD" JST) },
    lastAnsweredAt: Timestamp,
  }
  ```
- 読み取り元: `LiffReportPage`（users/{uid} 1 件 read のみで O(1)）
- byTopic の key は `Question.topic` の日本語文字列（topicMetas のスラッグではない）
- 既存ユーザーへは `scripts/backfill-user-stats.ts` で過去 answers を再計算して反映

### `users/{uid}.testScope`（テスト範囲）

- 書き込み元: `LiffTestRangePage`（公式LINE 有料リッチメニュー「テスト範囲設定」）
- スキーマ: `{ topics: string[], updatedAt: Timestamp }`
- topics は `Question.topic` の日本語文字列の配列（粒度を Question データに揃える）
- 読み取り元: `selectAndSendQuestion` / `handleWeakReview`（postback 「追加で解く」「苦手を復習」で出題候補をフィルタ）
- 空配列または未設定なら従来通り全範囲から出題
- ユーザーが選択肢ボタンを押すたびに新規ドキュメントが追加される（重複回答も毎回追記）
- `subject` / `grade` は集計時に `questions` への JOIN なしで教科別・学年別の集計が可能になるため冗長保持
- M5（苦手復習キュー）で `where("uid", "==", X).where("isCorrect", "==", false)` を使って苦手問題抽出に使用予定

### 問題メッセージのデザイン（M4で Flex Message 化）

- 問題提示は **Flex Message bubble**（`buildQuestionMessage`）で構築
- bubble 内に問題文（`wrap: true` で長文対応）+ 縦4ボタン（選択肢）
- 各ボタンは `style: "secondary"`、`height: "sm"`、`spacing: "sm"` で押しやすいサイズに統一
- postback `data` 形式は M3 から不変: `type=answer&questionId=...&choice=<0-3>`

### `questions` コレクション（M3で新設）

- パス: `questions/{questionId}`
- フィールド: `subject`, `grade`, `text`, `choices[4]`, `correctChoiceId`, `explanation`, `createdAt`
- 投入は `scripts/seed-line-questions.ts`（手動 1回実行）で行う
- M3 ではサンプル18問（歴史×3学年×3問 + 英語×3学年×3問）を投入
- 既存 `src/data/subjects/` の全量同期は別マイルストーン（M3.5 等）で検討

苦手復習（M5）、Hosting rewrites（M6）、教科の追加は別マイルストーンで実装予定。

### Webhook URL

- 直接URL: `https://asia-northeast1-chatstudy-63477.cloudfunctions.net/lineWebhook`
- 将来: Firebase Hosting または Vercel rewrites で `https://www.chatstudy.jp/api/line/webhook` へカスタムドメイン化（別マイルストーン）

### リッチメニュー × プラン切替

公式LINE 上に **無料用（4ボタン）／有料用（6ボタン）** の2種のリッチメニューを設置し、Messaging API のユーザー単位リンクで出し分ける。

**コンポーネント**:

| 場所 | 役割 |
|------|------|
| `data/line-richmenu/{free,premium}-richmenu.json` | リッチメニュー定義（areas・action）の正本。バージョン管理対象 |
| `data/line-richmenu/state.json` | LINE 側で生成された `richMenuId` の永続化先（バージョン管理対象、secret は含まない） |
| `data/line-richmenu/{free.png, premium.{png,jpg}}` | アップロード用画像（2500×1686、1MB 以下） |
| `data/line-richmenu/raw/*` | 画像素材（変換前） |
| `scripts/manage-line-richmenu.ts` | LINE API を直叩きする CLI（list / create / upload / set-default / link / unlink / delete） |
| `scripts/prepare-richmenu-images.ts` | sharp で 2500×1686 にリサイズ、PNG パレット → JPEG fallback で 1MB 以下に圧縮 |
| `syncRichMenuToPlan` | 管理者が個別ユーザーのプランを切り替える HTTPS Callable |
| `lineWebhook` の `extra_question` / `weak_review` postback | 有料メニューの「追加で解く」「苦手を復習」を即時に問題返信で処理 |

**`users/{uid}` への追加フィールド**（`plan/premiumUntil/richMenuType/lastRichMenuUpdatedAt`）はクライアントから書けない。`firestore.rules` の `touchesProtectedUserFields` ヘルパーで保護され、書き込みは `syncRichMenuToPlan`（admin SDK）経由のみ。

**プラン判定**: `lineWebhook.ts` の `getUserPlan(userData)` ヘルパーが `plan === "premium"` かつ `premiumUntil > now` のときだけ `"premium"` を返す。期限切れは自動的に `"free"` 扱いになるが、LINE 側のメニュー切替は別タスク（自動巻き戻しジョブはスコープ外）。

**`extra_question` の動作**:
- `selectAndSendQuestion` に `bypassDailyLimit?: boolean` を追加
- premium ユーザーの場合のみ「当日送信済み」の早期 return をスキップして、即時に1問送る
- free ユーザーの場合は「もっと解くにはプレミアムが必要」という案内テキストを返す（リッチメニュー上には現れないが、古い menu 経由で到達するケースのガード）

**`weak_review` の動作**:
- `answers` を `where(uid).where(isCorrect=false).orderBy(answeredAt desc).limit(50)` で取得
- `questionId` を unique 化し、ランダム1件の `questions/{id}` を取り出して `buildQuestionMessage` で再出題
- 候補が0件なら「まずは追加問題を解こう」と案内
- `lastQuestionDeliveredAt` は更新する（`dailyQuiz` とのバッティング回避）

**運用**: 詳細手順・トラブルシュートは `docs/operations/line-richmenu.md` を参照。

### 運用手順

デプロイ・環境変数設定・LINE Developers 側の操作・トラブルシュートは `docs/operations/line-webhook-deploy.md` を参照。リッチメニューに関する手順は `docs/operations/line-richmenu.md` を参照。

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
