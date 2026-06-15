# プロジェクトメモリ

## ⚠️ 最重要: 「era フォルダ」は公式LINEサービスとは別物（混同禁止）

**`src/data/subjects/{subject}/eras/**` および、そこから生成される `src/data/generated/topic-registry.generated.ts`（`eraMetas` / `topicMetas`）は、Web版フル学習サイト（`www.chatstudy.jp`）専用のデータ・単元体系です。公式LINEサービスとは「別物・別タキソノミー」です。**

- **公式LINE（毎日配信 / 追加で解く / 苦手復習 / LIFF じっくり学ぶ / 範囲設定の出題）の source of truth は `data/content/{subject}/{folder}/*.json`** のみ。ここから `sync-questions-from-content.ts`（→ Firestore `questions`）と `generate-line-study-content.ts`（→ `line-study-*.generated.ts`）に派生する。
- `src/data/subjects/.../eras/` と `data/content/.../` は**単元名・粒度が一致しない**（例: 江戸時代は eras 側が細分化＝「三都の繁栄/五街道と水運/元禄文化…」、content 側は粗い別名）。**eras 側を参照・編集しても公式LINE には一切反映されない。**
- 公式LINE の単元（testScope / questions.topic）を扱うときは **必ず `data/content/` 系**を見る。`topic-registry` / `eras` は見ない。
- ✅ 解消済み（2026-06-08）: 旧 範囲設定 LIFF (`LiffTestRangePage.tsx`) は `topic-registry`（eras 由来）を単元候補に使い、選べる単元が公式LINE の `questions` と食い違っていた。現在は LIFF を廃止し**通常ブラウザページ `src/pages/TestRangePage.tsx`（ルート `/scope`）**へ置き換え、単元候補は **`data/content` 由来の `src/data/generated/line-scope-index.generated.ts`** から取得するようにした（`scripts/generate-line-scope-index.ts` で生成）。これで testScope.topics が Firestore `questions.topic` と一致し配信に反映される。

> 今後 Claude Code / Codex が「公式LINEの単元」を `src/data/subjects/.../eras/` や `topic-registry` で探して混乱しないこと。公式LINEは `data/content/` が正。

## 技術スタック

- 開発環境: devcontainer
- Node.js v24.11.0
- TypeScript 5.x
- パッケージマネージャー: npm

## ⚠️ Firestore 読み取りコストの規律（必読・コード生成時に守る）

Firestore の課金は**ドキュメント1件読むごとに1 read**で、クエリは「ヒット件数ぶん」消費する（クエリ1回＝1 read ではない）。**「本番 webhook 由来の read は極小」という思い込みは禁物**——分析スクリプト・管理画面・LIFF/Web の一覧取得がコレクションを丸ごと舐めて膨れるのに加え、**毎日配信や reply など高頻度の本番ホットパスが「1件選ぶためにコレクションを全件読む」と、1日数十万 read に達する**（実績: ① 分析系で1日23万 read。② 2026-06、出題のたびに `questions` を学年全件 read していて1日20〜40万 read＝後述の規則6）。クエリを書くときは必ず次を守る:

1. **コレクション全件取得（`.get()` だけ）を書かない。** 必ず `.where()` で絞り、`.limit(N)` を付ける。とくに `users` / `answers` は件数が大きい。
2. **件数だけ欲しいときは全件 `.get()` せず `count()` 集計クエリを使う**（1000件ごとに1 read 相当で激安）。
3. **同じドキュメントをループ内で繰り返し読まない。** 一度読んだら変数 / Map にキャッシュして使い回す。
4. **使い捨ての分析スクリプト（`scripts/_*.ts` 等）でも `limit()` 必須。** 全ユーザー走査が要るときは「件数を log で示す」「ページング」「サンプリング」を入れ、無制限スキャンを避ける。実行頻度も最小限に。
5. **管理画面・LIFF の一覧表示はページング前提**で、初期ロードで全件読まない。
6. **「N件のうち1件をランダム/条件で選ぶ」ために全件 `.get()` しない（webhook / cron のホットパスでも）。** 候補集合を毎回読むと `read = 候補件数 × 呼び出し回数` で爆発する。次のいずれかにする: (a) 呼び出しをまたいで再利用できる集合は**モジュールレベルのインメモリ TTL キャッシュ**に載せる（Cloud Functions のインスタンス再利用が効く。例: `functions/src/lineWebhook.ts` の `getGradeQuestionDocs` — subject×grade の questions を TTL 10分でキャッシュし、出題のたびの全件 read を解消）。(b) ビルド時生成の ID インデックス（例: `line-scope-index.generated.ts` 方式）から候補 ID を選び、**該当1件だけ `doc().get()`** する。出題ロジック自体は変えずに read だけ落とせる。

> 新しい Firestore クエリ（webhook / cron / scripts / 管理UI / LIFF いずれも）を書くときは、`.limit()` か `count()` を付けたか・全件スキャンになっていないか・**「1件選ぶために集合を毎回読んでいないか」**を必ず自己チェックしてから出すこと。詳細な事例はメモリ `firestore-read-spike-question-scan` 参照。

## 保存済みログ・データスナップショット（再取得しない）

`firebase functions:log` はページングが壊れていて過去日時を確実に再取得できず、Cloud Functions のログ保持期間も限られる。そのため**調査に使った過去ログは取得時にファイルへ固定保存**してある。**既に保存済みの期間は再フェッチしないこと**（CLI では取れない／時間とコストの無駄）。分析時は下記ファイルを読む。

| 期間 | 保存先 | 内容 |
|---|---|---|
| 2026-06-01 / 06-02 lineWebhook | `docs/operations/log-snapshots/2026-06-01_02-lineWebhook-snapshot.md`（サマリ＋メトリクス）<br>`docs/operations/log-snapshots/lineWebhook-events-2026-06-01_02.log`（生イベント256行） | 無反応調査の生データ。reply失敗0件／topic undefined書込失敗／duplicate 等。結論: 無反応はハード障害でなく応答モード=チャット由来 |
| 2026-06-04 trial×ブロック分析 | `docs/operations/log-snapshots/2026-06-04-trial-block-analysis.md`（分析: `scripts/_analyze-trial-block.ts`） | 全体ブロック15%。trial vs なし比較は付与除外で**無効**、ドリップ多=低ブロックは**生存バイアス**。確定: ブロックは**trial開始〜48hに集中**、06-01一括付与直後に山。強制trialの是非は対照群なしで**判定不能**→今後A/B要 |
| 使用状況スナップショット（追記式） | `docs/operations/log-snapshots/usage-snapshots.md`（取得: `scripts/_usage-scope-snapshot.ts` ほか `_status-verify*.ts`、count集計+limitのみ） | 定点観測。**06-08**: 総435/DAU≈149・24h235回答・正答率54%。当日登録9人はオンボ完了100%だが**範囲設定11%**（動線強化は任意課題）。**status=active 99.8%はトライアル一括満了ウェーブによる一過性で recalc は正常（検証済・修正不要）**。06-09以降 at-risk へ正常化＋Win-back一時増の見込み。新規取得時はこのファイル先頭に追記 |
| KPIダッシュボード（週次・定点） | `docs/operations/line-kpi-dashboard.md`（取得: `scripts/report-user-stats.ts` / `report-funnel-stats.ts` / `report-kpi-gaps.ts`） | 獲得→活性化→継続→学習→収益化の目標vs実測。**06-15 ベースライン**: 登録784・週1学習UU514(北極星)・ブロック率15.1%(無回答層28.7%/48h以内46%)・範囲設定≈25%(新規初日11%=最大の弱点)・D1継続70.6%/D7 54.9%・追加学習率19.1%・正答率53.3%。**誤答後解説閲覧率は計測不能=解説は回答ごと自動同梱で構造上ほぼ100%**。登録日時の実フィールドは `onboardingStartedAt`（`createdAt` は無い）。週次で実測列を追記 |

> 新しく過去ログ／Firestore集計を調査目的で取得したら、同様に `docs/operations/log-snapshots/` 等へ保存し、この表に1行追記してから「再取得不要」と明記すること。

## Firebase Functions デプロイ時の重要メモ

Cloud Functions の discovery は `functions/lib/index.js` をロードして backend spec を解析する。2026-05-19 時点で、この repo は `node -e "require('./lib/index.js')"` が約66秒かかり、Firebase CLI 側の解析時間も乗るため `FUNCTIONS_DISCOVERY_TIMEOUT=120` でも `Cannot determine backend specification. Timeout after 120000.` で失敗することがある。

Functions 全体をデプロイするときは、まず以下を使う:

```bash
FUNCTIONS_DISCOVERY_TIMEOUT=600 firebase deploy --only functions
```

タイムアウトした場合に疑う順番:

1. `cd functions && npm run build`
2. `cd functions && timeout 150s node -e "const t=Date.now(); require('./lib/index.js'); console.log('index loaded '+(Date.now()-t)+'ms')"`
3. `firebase-functions/v1` や `firebase-admin/auth` のトップレベルロードが重い可能性を確認

根本対策は Functions の v2 個別 import 化、または codebase 分割。詳細は `docs/operations/line-webhook-deploy.md` の「Functions discovery timeout 対応」を参照。

### ⚠️ 全体デプロイは Instagram シークレット未設定で止まる（既知・回避策あり）

`firebase deploy --only functions`（全体）は、デプロイ前の secret 検証で次のように失敗する（2026-06-15 時点・未解消）:

```
Error: Failed to validate secret versions:
- Secret [.../META_APP_SECRET] not found or has no versions.
- Secret [.../META_PAGE_ACCESS_TOKEN] not found or has no versions.
- Secret [.../META_IG_USER_ID] not found or has no versions.
- Secret [.../META_WEBHOOK_VERIFY_TOKEN] not found or has no versions.
```

これは `instagramWebhook` が要求する Meta 系シークレットが Secret Manager に未登録なため。**LINE / Win-back / cron 系の変更は instagramWebhook と無関係**なので、対象を絞ってデプロイすれば検証を回避できる（検証は「デプロイ対象の関数が使うシークレット」だけ走る）:

```bash
# 例: Win-back / 復帰計測まわりを変更したとき
FUNCTIONS_DISCOVERY_TIMEOUT=600 firebase deploy \
  --only functions:lineWebhook,functions:recalculateUserStatuses,functions:sendWinbackMessages
```

`instagramWebhook` 自体を直す/デプロイするときは先に `firebase functions:secrets:set META_PAGE_ACCESS_TOKEN`（ほか3つ）でシークレットを登録する。Instagram 運用は `docs/operations/instagram-comment-to-line.md` 参照。

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
| `/premium` | プレミアム LP | `PremiumLandingPage` | 有料プラン申込誘導LP（公開）。CTA → `https://line.chatstudy.jp/liff/premium-apply` |
| `/for-parents` | 保護者向け LP | `ParentsLandingPage` | 保護者向け説明ページ（公開） |
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
  - ~~`/liff/scope`~~ → **廃止。出題範囲設定は LIFF をやめ通常ブラウザページ `https://line.chatstudy.jp/scope`（`TestRangePage`）に置き換え（2026-06-08）。** 認証は LIFF SDK ではなく既存の LINE Login OAuth（`/welcome?next=/scope` → `/auth/line/callback`）。旧 `/liff/scope` は `/scope` へリダイレクトする後方互換ルートのみ残置。webhook/relaunch の「範囲を設定する」ボタンはこの URL を指す（`TEST_RANGE_SCOPE_URL` / env `LINE_SCOPE_URL` で上書き可）。
  - `https://line.chatstudy.jp/liff/report` (premium 成績・記録 flex の「詳しく見る」)
  - `https://line.chatstudy.jp/liff/settings` (premium 設定・サポート flex の「設定画面を開く」)
  - `https://line.chatstudy.jp/liff/premium-info` (無料版「もっと解く」flex の「詳細を見る」)
  - `https://line.chatstudy.jp/liff/premium-apply` (LIFF /premium-info の「申込フォームを開く」CTA、および webhook の各 premium-nudge flex の主CTA。申込内容は Firestore `premiumApplications` collection に保存される)
  - `https://line.chatstudy.jp/liff/help` (無料版「使い方」flex の「使い方を詳しく見る」)
  - `https://line.chatstudy.jp/liff/nickname` (1問目回答後の「ニックネーム教えて」flex から開かれる超シンプルなニックネーム登録ページ)
  - `https://line.chatstudy.jp/liff/contact` (設定・サポートからのお問い合わせフォーム。送信は `submitContactForm` Cloud Function 経由で Firestore `contactSubmissions` 保存 + 管理者LINE push + メール送信)
- LIFF 認証フロー: 各 LIFF ページは `useLiffAuth` フック経由で
  `liff.init()` → `liff.login()`（未ログイン時）→ `getIDToken()` →
  Cloud Function `createLiffFirebaseToken` → `signInWithCustomToken` で
  Firebase Auth にサインイン。`/welcome` 経由の手動 OAuth は外部ブラウザ
  fallback として残置。Firebase の永続化は localStorage なので、初回
  OAuth 同意以降は他の LIFF からも認証セッションを共有できる。
- LINE Login OAuth Callback URL: 両ドメイン分（`www.chatstudy.jp` / `line.chatstudy.jp`）の
  `/auth/line/callback` および各 LIFF endpoint URL（`/liff/units` / `/liff/scope` /
  `/liff/report` / `/liff/settings` / `/liff/help` / `/liff/premium-info` /
  `/liff/premium-apply` / `/liff/contact`）を LINE Developers Console に登録
- **bundle に学習データが混入していないか**は `grep -r LearningPage dist-line/` などで確認。混入していたら `src/line/App.line.tsx` の import チェーンに不要な依存が紛れた合図

詳細: `docs/operations/line-app-deploy.md`、`.steering/20260510-line-app-split/`

## 公式LINE 運用コマンド

公式LINE の **無料 ↔ 有料 リッチメニュー切替** は短い指示でリクエスト可能:

- 「`U429b1d951fc7236c9e8e85e5ca96b910` をプレミアムに切り替えて（来月末まで）」
- 「`U429...` を解約」「`U429...` を無料に戻して」

→ Claude は `switch-line-plan` スキルを呼び出し、`scripts/manage-line-richmenu.ts sync-plan ...` を実行する（LINE 側のメニューリンクと Firestore の `plan/premiumUntil/richMenuType/lastRichMenuUpdatedAt` を一括更新）。

詳細は `docs/operations/line-richmenu.md` §6 を参照。

## Instagram キャンペーン運用

Instagram 投稿の特定キーワードコメントに対する DM 自動送信 → 公式LINE 誘導フローを `instagramWebhook` Cloud Function で運用している。

- 管理 UI: ローカル `npm run dev` → `/admin/dashboard` →「インスタ」タブで Firestore `igCampaigns` を CRUD
- DM 内 URL: `https://liff.line.me/<LIFF_ID>?ig_ref=ig_<campaignId>` の形式で発行（`?lin.ee/xxx?...` 形式はクエリが消えるため計測不可）
- 流入計測: LIFF 起動時に `useLiffAuth` が `?ig_ref` を拾って `users/{uid}.referrer` に初回のみ書き込み
- Page Access Token は **60日で失効** するため、Cloud Logging の `code: 190` を見たら再発行 → `firebase functions:secrets:set META_PAGE_ACCESS_TOKEN` で更新

セットアップとトラブルシュートは `docs/operations/instagram-comment-to-line.md` を参照。

## 公式LINE 休眠ユーザー除外 + Win-back システム

公式LINE の送信枠（月次プラン上限）を超過しないよう、無回答ユーザーへの配信を段階的に停止し、節目に Win-back メッセージを送る仕組みが組み込まれている。

**ユーザーステータス**（`users/{uid}.status` フィールド、JST 02:00 の `recalculateUserStatuses` cron が毎日再計算）:

| status | 判定（最終回答日からの JST 暦日） | 配信内容 |
|---|---|---|
| `active` | 0〜3日 | 通常の毎日1問配信 + マイルストーンナッジ |
| `at-risk` | 4〜7日 | 通常配信停止、**Day 3 Win-back** のみ（JST 19:00） |
| `dormant` | 8〜14日 | 通常配信停止、**Day 7 Win-back** のみ。streak リセット |
| `churned` | 15日以上 | **Day 14 Win-back（最終）** 送信後は完全静観 |

※ プレミアム会員（有効期限内）は常に `active`。trial 切れ後は free と同じ判定。

**復帰トリガー**: ① 復帰キーワード経路 — ユーザーが「再開」「久しぶり」「もう一度」等の幅広い復帰キーワードを送ると `keywordMatcher.detectRestartIntent` が検知、`isEligibleForRestartWelcome`（最終回答から8日以上）を満たせば status を `active` に戻して即座に「おかえり」 reply + 1 問送信。② ワンタップCTA経路（2026-06-15 追加）— Win-back メッセージの quickReply「今日の1問に挑戦」（postback `type=restart&src=winback`）→ `handleRestartPostback` → `handleRestartIntent(source='winback_cta')`。**明示タップは誤爆リスクがないため8日ゲートをバイパス**し、Day-3=at-risk(4〜7日)の受信者も1タップで復帰できる。実復帰の主経路はキーワード入力より②の「直接もう一度解く」（計測で確認）。

**復帰・状態遷移の計測（2026-06-15 修正）**: `restart_intent_detected`（context: `previousStatus` / `source`）を `handleRestartIntent` で、`status_transition`（context: `from` / `to`）を `recalculateUserStatuses` cron で `logServerFunnelEvent` する。以前はどちらも型定義のみで**未記録**だったため、ファネル上は復帰0件に見えていた（実際は Win-back 受信者の約28%が再回答＝機能していた。実復帰率は `winback_sent` の送信時刻と `users.lastAnsweredAt` の結合で算出）。Win-back 効果の定点指標は `scripts/report-funnel-stats.ts` の「Win-back 効果」セクションで確認（restart の source 別 / 回復遷移 `*→active` の from 別 UU）。

**Win-back バリエーション**: 各タッチポイントで 10 種以上を Firestore 履歴（過去 90 日）と照合して重複回避（`functions/src/winbackVariations.ts`）。

**価格ロック**（D-3 セールスコピー対応）:
- 体験中の登録 → 月¥680 永続ロック（`users.lockedMonthlyPrice = 680`、`premiumApplications.lockedPrice = 680`）
- 体験後の登録 → 月¥980
- Day 7 Win-back で trial 経験者には ¥680 価格ロックを再オープン（生涯 1 回・3日以内に登録すれば ¥680）

**送信枠モニタリング**: `deliveryStats/{YYYY-MM}` collection に push 種別ごとの月次カウントを記録。`monthlyDeliveryReport` cron が毎月 1 日 09:00 JST に前月分を Cloud Logging へ出力（仮上限 30,000 通の 80% 超過時は WARNING）。

詳細は `.steering/20260519-line-message-retention-overhaul/` 配下を参照。

**初期セットアップ（デプロイ時 1 回限り）**:
```bash
# users コレクションに status / lockedMonthlyPrice 初期値を書き込む
gcloud auth application-default login
npx tsx scripts/migrate-user-status.ts --dry-run    # 差分確認
npx tsx scripts/migrate-user-status.ts              # 実書き込み
```

## 公式LINE フォールバック AI チャットボット（Gemini）

既存コマンド（設定変更 / ニックネーム / 復帰キーワード等）にマッチしない自由文・画像・音声に、サービス仕様を内蔵した Gemini チャットボットが reply で応答する。**reply 送信なので LINE の月間配信枠は消費しない**（コストは Gemini 側のみ）。

**関連ファイル**:
- `functions/src/aiChat.ts` — オーケストレーション（レート制限 → Gemini 呼び出し → reply → 状態書き戻し）。`callGemini` は `inlineData` でマルチモーダル入力に対応。
- `functions/src/aiChatCore.ts` — 副作用なしの純粋ロジック（レート判定・履歴トリム・JST 日付）。テストは `__tests__/aiChatCore.test.ts`。
- `functions/src/aiChatPrompt.ts` — システムプロンプト。`buildSystemPrompt(userData)` が学年・教科・**直近の出題問題**を文脈に差し込む。教科を増やすときは `SUBJECT_AVAILABILITY` を更新するだけ。
- `functions/src/lineWebhook.ts` の `handleMessage` → `handleMediaMessage`（画像・音声）/ `handleAiChat`（テキスト）。

**コスト管理（多層）**:
1. 全ユーザー共通 **1日20回**上限（`DAILY_LIMIT`）。超過時は API を呼ばず固定文（課金ゼロ）。
2. 出力トークン上限 `MAX_OUTPUT_TOKENS=500` ＋ 入力履歴ターン制限（free 3 / premium 6）。
3. Gemini 呼び出し**成功時のみ** count を消費（エラーで枠を無駄にしない）。
4. 月の最初の応答に AI 注意書きを1通添える（`lastDisclaimerMonth`）。

**モデル**: env `GEMINI_MODEL`（既定 `gemini-3.1-flash-lite`）。API キーは env `GEMINI_API_KEY`。

**マルチモーダル（画像・音声）**: LINE の image / audio メッセージは実体がイベントに載らないため、`api-data.line.me/v2/bot/message/{id}/content`（外部提供は `originalContentUrl`）からバイナリを取得し base64 で Gemini に渡す（`handleMediaMessage`）。
- 画像 → `image/jpeg`。**flash-lite で確実に動作**。
- 音声 → `audio/mp4`（LINE は m4a）。**60秒超はダウンロード前に断る**（課金ゼロ）。flash-lite の音声対応・MIME は実機検証の上で運用。NG なら full flash 系へ `GEMINI_MODEL` 切替。
- 取得8MB上限。取得・解析失敗時はフォールバック文で webhook（200）を維持。
- メディアもテキストと同じ**1日20回枠**で計上。履歴には base64 を残さず `[画像を送信]` / `[音声を送信]` マーカーのみ保存。

**直近の出題問題の認識**: 問題を送る各経路（`selectAndSendQuestion` / `handleWeakReview`）で `users/{uid}.lastQuestion`（id / topic / text / choices / correctChoiceId / explanation のスナップショット）を保存し、`buildSystemPrompt` が文脈に注入する。これでユーザーが「さっきの問題」「なんで？」と聞くと AI が正解・解説込みで答えられる。**新しい問題の送信経路を増やしたら `buildLastQuestionSnapshot` の書き込みも追加する**こと（`buildQuestionMessage` を呼ぶ箇所が目印）。

## LIFF「じっくり学ぶ」の学習データフロー

LIFF 内インライン学習体験（暗記カード / クイズ）と LINE 公式の毎日配信 / 追加で解く / 苦手復習 は、**同じ source（`data/content/{subject}/{folder}/*.json`）から派生する 2 系統のデータ**を使う:

```
data/content/history/{folder}/{topic}.json   ← source of truth
  ├─ flashcards: 暗記カード本体
  └─ quiz.questions: 4 択問題本体
        │
        ├── generate-line-study-content.ts
        │     → src/data/generated/line-study-history-g{1,2,3}.generated.ts
        │     → LIFF「じっくり学ぶ」が grade 別に動的 import（lazy chunk）
        │
        └── sync-questions-from-content.ts
              → Firestore `questions` collection（topic = topic.name 細かい名前）
              → webhook の毎日配信 / 追加で解く / 苦手復習が利用
              → users/{uid}.testScope.topics と一致比較
```

**重要**: testScope.topics は **`data/content/` 由来の `topic.name`**（細かい日本語、例: "旧石器時代と縄文時代"）であるべき。webhook は Firestore `questions.topic` と完全一致比較するため、**問題を追加・編集したら必ず両方を同期する**。
（範囲設定ページ `TestRangePage`〔ルート `/scope`〕は `data/content` 由来の `line-scope-index.generated.ts` を単元候補に使うので、ここで保存される topic.name は `questions.topic` と一致する。**単元を追加・編集したら scope index も再生成する**。）:

```bash
# JSON を編集したら 3 つ実行
npx tsx scripts/generate-line-study-content.ts          # LIFF「じっくり学ぶ」用 generated TS を更新
npx tsx scripts/generate-line-scope-index.ts            # 出題範囲設定ページの単元候補を更新
npx tsx scripts/sync-questions-from-content.ts          # Firestore questions に反映（要 gcloud ADC）
```

短い指示でリクエスト可能:
- 「問題を Firestore に同期して」「クイズを反映」「sync-questions」 → `sync-line-questions` スキルが起動

### 学年フォルダの対応

| 学年 | data/content/history のフォルダ |
|------|------------------------------|
| 中1 | 01-history-basics / 02-ancient-world / 03-japanese-origins / 04-ancient-state / 05-warrior-kamakura / 06-medieval-world |
| 中2 | 07-early-modern / 08-edo-establishment / 09-modern-era / 10-bakumatsu / 11-meiji-early / 12-meiji-late |
| 中3 | 13-ww1-japan / 14-taisho-democracy / 15-showa-crisis / 16-ww2-japan / 17-postwar-japan / 18-cold-war-era / 19-modern-world |

両 generator 側にも同じ対応マップがあるので、新規フォルダを足したらどちらも更新する。

### Firestore `questions` collection の同期 ID 規則

- 新ソース由来（data/content）: `q-history-{topicId}-{questionId}`、`syncSource: "content-history-v1"`
- 旧ソース由来（data/line-questions/*.json）: `q-{subject}-g{grade}-{NNN}`、topic は粗いカテゴリ
- 両方が `questions` collection に共存。testScope を設定すると新ソース側だけがマッチする
- 古いものを掃除する場合は `manage-line-questions.ts` で delete

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