# プロジェクトメモリ

## 技術スタック

- 開発環境: devcontainer
- Node.js v24.11.0
- TypeScript 5.x
- パッケージマネージャー: npm

## スペック駆動開発の基本原則

### 基本フロー

1. **ドキュメント作成**: 永続ドキュメント(`docs/`)で「何を作るか」を定義
2. **作業計画**: ステアリングファイル(`.steering/`)で「今回何をするか」を計画
3. **実装**: tasklist.mdに従って実装し、進捗を随時更新
4. **検証**: テストと動作確認
5. **更新**: 必要に応じてドキュメント更新

### 重要なルール

#### ドキュメント作成時

**1ファイルずつ作成し、必ずユーザーの承認を得てから次に進む**

承認待ちの際は、明確に伝える:
```
「[ドキュメント名]の作成が完了しました。内容を確認してください。
承認いただけたら次のドキュメントに進みます。」
```

#### 実装前の確認

新しい実装を始める前に、必ず以下を確認:

1. CLAUDE.mdを読む
2. 関連する永続ドキュメント(`docs/`)を読む
3. Grepで既存の類似実装を検索
4. 既存パターンを理解してから実装開始

#### ステアリングファイル管理

作業ごとに `.steering/[YYYYMMDD]-[タスク名]/` を作成:

- `requirements.md`: 今回の要求内容
- `design.md`: 実装アプローチ
- `tasklist.md`: 具体的なタスクリスト

命名規則: `20250115-add-user-profile` 形式

#### ステアリングファイルの管理

**作業計画・実装・検証時は`steering`スキルを使用してください。**

- **作業計画時**: `Skill('steering')`でモード1(ステアリングファイル作成)
- **実装時**: `Skill('steering')`でモード2(実装とtasklist.md更新管理)
- **検証時**: `Skill('steering')`でモード3(振り返り)

詳細な手順と更新管理のルールはsteeringスキル内に定義されています。

## サイトマップ（ページ構成）

| パス | ページ | コンポーネント | 説明 |
|------|--------|---------------|------|
| `/` | トップページ | `TopPage` | 教科選択・学習ダッシュボード・トピック検索 |
| `/subjects/:subjectId` | 学年・時代選択 | `EraSelectPage` | 学年タブ付きの時代/単元一覧 |
| `/subjects/:subjectId/random-quiz` | ランダムクイズ | `RandomQuizPage` | 教科横断のミックスクイズ |
| `/subjects/:subjectId/eras/:eraId` | トピック選択 | `TopicSelectPage` | 時代/単元内のトピック一覧 |
| `/subjects/:subjectId/eras/:eraId/topics/:topicId` | 学習ページ | `LearningPage` | メイン学習画面（タブ切替） |
| `/chat/:chatId` | 歴史チャット | `HistoryChatPage` | 対話形式の歴史学習 |
| `*` | 404ページ | `NotFoundPage` | 存在しないURLのフォールバック |

### 全体構成の補足

- **ErrorBoundary** (`src/components/common/ErrorBoundary.tsx`): App全体をラップ。レンダリングエラー時にフォールバックUIを表示
- **非同期エラーハンドリング**: LearningPage・HistoryChatPageはデータロード失敗時にエラーUI+再試行ボタンを表示
- **トピック検索**: TopPageに全263トピックを対象としたクライアントサイド検索（debounce 300ms、最大10件表示）

### 学習ページのタブ構成

LearningPage内で以下のタブを切り替え（トピックのコンテンツ有無で表示/非表示）:

| タブ | コンポーネント | 説明 |
|------|---------------|------|
| チャット | `ChatContainer` | 対話形式の解説（歴史・地理） |
| フラッシュカード | `FlashcardDeck` | スワイプ式の暗記カード |
| クイズ | `QuizView` | 4択・語順並べ替え問題 |
| 動画 | `VideoPlayer` | YouTube動画（横型・縦型） |

### 教科構成

| 教科ID | 教科名 | 学年 | コンテンツ形式 |
|--------|--------|------|---------------|
| `history` | 歴史 | 1-3年 | チャット, フラッシュカード, クイズ |
| `english` | 英語 | 1-3年 | 解説, フラッシュカード, クイズ |
| `math` | 数学 | 1-3年 | 解説, 例題, フラッシュカード, クイズ |
| `science` | 理科 | 1-3年 | 解説/スライド, フラッシュカード, クイズ |
| `geography` | 地理 | 1-2年 | チャット, フラッシュカード, クイズ |

## ディレクトリ構造

### 永続的ドキュメント(`docs/`)

アプリケーション全体の「何を作るか」「どう作るか」を定義:

#### 下書き・アイデア（`docs/ideas/`）
- 壁打ち・ブレインストーミングの成果物
- 技術調査メモ
- 自由形式（構造化は最小限）
- `/setup-project`実行時に自動的に読み込まれる

#### 正式版ドキュメント
- **product-requirements.md** - プロダクト要求定義書
- **functional-design.md** - 機能設計書
- **architecture.md** - 技術仕様書
- **repository-structure.md** - リポジトリ構造定義書
- **development-guidelines.md** - 開発ガイドライン
- **design-guide.md** - デザインガイド（色・ボタン・タイポグラフィ規約）
- **glossary.md** - ユビキタス言語定義

## デザイン規約（必読）

UIを実装・変更する際は必ず `docs/design-guide.md` を参照すること。

- **禁止色**: indigo, purple, violet 系統は使用禁止
- **アクセント色**: amber-500 (`#F59E0B`) を統一アクセントに使用
- **ボタン**: グラデーション(`from-* to-*`)禁止。ソリッドカラーのみ
- **背景**: ページ背景は `#FAF9F7`（ウォームホワイト）
- **影**: `shadow-md`, `shadow-lg` 禁止。`shadow-sm` のみ許可

### 作業単位のドキュメント(`.steering/`)

特定の開発作業における「今回何をするか」を定義:

- `requirements.md`: 今回の作業の要求内容
- `design.md`: 変更内容の設計
- `tasklist.md`: タスクリスト

## 2つのアプリ構成（Web版 / LINE版）

このリポジトリは1つの React コードベースから **2 種類の Web アプリ**をビルドして、それぞれ別ドメインで配信する。

| アプリ | エントリ | ビルド | 出力先 | デプロイ先 | 役割 |
|--------|---------|--------|--------|-----------|------|
| **Web版**（フル学習サイト） | `index.html` → `src/main.tsx` → `src/App.tsx` | `npm run build` | `dist/` | `https://www.chatstudy.jp/` | 263トピックの学習体験全部（TopPage / EraSelect / TopicSelect / LearningPage / RandomQuiz / HistoryChat / Settings / Admin） |
| **LINE版**（公式LINE誘導 + LIFF） | `index.line.html` → `src/main.line.tsx` → `src/line/App.line.tsx` | `npm run build:line` | `dist-line/` | `https://line.chatstudy.jp/` | WelcomePage / LiffUnitsPage / LineCallbackPage の slim ビルド（学習データは含まない） |

**共有モジュール**: `src/contexts/AuthContext.tsx` / `src/firebase/config.ts` / `src/utils/authGuard.ts` / `src/pages/{WelcomePage,LiffUnitsPage,LineCallbackPage,NotFoundPage}.tsx` / `src/components/common/ErrorBoundary.tsx`

**LINE版にだけ含まれないもの**: 学習体験ページ（LearningPage / TopPage / 263トピックデータ / Flashcard / Quiz / VideoPlayer / ChatContainer / katex / theme / SSR/prerender）

**運用上の重要点**:
- Web版に変更を入れる場合: `src/App.tsx` 配下、`src/pages/` の Web 用ページ、`src/data/subjects/` などを編集
- LINE版に変更を入れる場合: `src/line/App.line.tsx`、`src/pages/Welcome*`/`Liff*`/`LineCallback*`、共有 AuthContext を編集
- LIFF endpoint URL（LINE Developers Console で管理）:
  - `https://line.chatstudy.jp/liff/units` (premium「じっくり学ぶ」)
  - `https://line.chatstudy.jp/liff/scope` (free + premium「テスト範囲設定」flex の「範囲を設定する」)
  - `https://line.chatstudy.jp/liff/report` (premium 成績・記録 flex の「詳しく見る」)
  - `https://line.chatstudy.jp/liff/settings` (premium 設定・サポート flex の「設定画面を開く」)
  - `https://line.chatstudy.jp/liff/premium-info` (無料版「もっと解く」flex の「詳細を見る」)
  - `https://line.chatstudy.jp/liff/help` (無料版「使い方」flex の「使い方を詳しく見る」)
- LIFF 認証フロー: 各 LIFF ページは `useLiffAuth` フック経由で
  `liff.init()` → `liff.login()`（未ログイン時）→ `getIDToken()` →
  Cloud Function `createLiffFirebaseToken` → `signInWithCustomToken` で
  Firebase Auth にサインイン。`/welcome` 経由の手動 OAuth は外部ブラウザ
  fallback として残置。Firebase の永続化は localStorage なので、初回
  OAuth 同意以降は他の LIFF からも認証セッションを共有できる。
- LINE Login OAuth Callback URL: 両ドメイン分（`www.chatstudy.jp` / `line.chatstudy.jp`）の
  `/auth/line/callback` および各 LIFF endpoint URL（`/liff/units` / `/liff/scope` /
  `/liff/report` / `/liff/settings` / `/liff/help` / `/liff/premium-info`）を
  LINE Developers Console に登録
- **bundle に学習データが混入していないか**は `grep -r LearningPage dist-line/` などで確認。混入していたら `src/line/App.line.tsx` の import チェーンに不要な依存が紛れた合図

詳細: `docs/operations/line-app-deploy.md`、`.steering/20260510-line-app-split/`

## 公式LINE 運用コマンド

公式LINE の **無料 ↔ 有料 リッチメニュー切替** は短い指示でリクエスト可能:

- 「`U429b1d951fc7236c9e8e85e5ca96b910` をプレミアムに切り替えて（来月末まで）」
- 「`U429...` を解約」「`U429...` を無料に戻して」

→ Claude は `switch-line-plan` スキルを呼び出し、`scripts/manage-line-richmenu.ts sync-plan ...` を実行する（LINE 側のメニューリンクと Firestore の `plan/premiumUntil/richMenuType/lastRichMenuUpdatedAt` を一括更新）。

詳細は `docs/operations/line-richmenu.md` §6 を参照。

## 開発プロセス

### 初回セットアップ

1. このテンプレートを使用
2. `/setup-project` で永続的ドキュメント作成(対話的に6つ作成)
3. `/add-feature [機能]` で機能実装

### 日常的な使い方

**基本は普通に会話で依頼してください:**

```bash
# ドキュメントの編集
> PRDに新機能を追加してください
> architecture.mdのパフォーマンス要件を見直して
> glossary.mdに新しいドメイン用語を追加

# 機能追加(定型フローはコマンド)
> /add-feature ユーザープロフィール編集

# 詳細レビュー(詳細なレポートが必要なとき)
> /review-docs docs/product-requirements.md
```

**ポイント**: スペック駆動開発の詳細を意識する必要はありません。Claude Codeが適切なスキルを判断してロードします。

## ドキュメント管理の原則

### 永続的ドキュメント(`docs/`)

- 基本設計を記述
- 頻繁に更新されない
- プロジェクト全体の「北極星」

### 作業単位のドキュメント(`.steering/`)

- 特定の作業に特化
- 作業ごとに新規作成
- 履歴として保持