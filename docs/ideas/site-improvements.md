# チャットでスタディ サイト改善提案

## Phase 1: すぐに着手できる改善（1-2週間） ✅ 完了

### 1. 画像の最適化 ✅
- ~~334枚の画像が未圧縮のPNG/JPGのまま配信されている~~
- ~~WebP形式への変換、`loading="lazy"` の追加で表示速度を大幅改善~~
- ~~`vite-plugin-imagemin` などのビルド時最適化プラグイン導入~~
- **対応**: `vite-plugin-image-optimizer` を導入（`includePublic: true` でpublic/配下も自動圧縮）

### 2. アクセシビリティ: alt テキストの追加 ✅（対応不要）
- ~~多くの `<img>` タグにaltテキストが未設定~~
- ~~すべての画像に意味のあるaltテキストを追加（装飾的画像は `alt=""`）~~
- **調査結果**: 全3つの`<img>`タグにalt属性が設定済みのため対応不要

### 3. キーボードフォーカス表示の改善 ✅
- ~~ほとんどのボタンに `focus-visible` スタイルがない~~
- ~~`focus-visible:ring-2 focus-visible:ring-amber-500` を全インタラクティブ要素に追加~~
- **対応**: グローバルCSS（`src/styles/index.css`）で `button`, `a`, `input` に `focus-visible` outlineを一括適用

### 4. エラーメッセージの詳細化 ✅
- ~~現在は絵文字+汎用テキストのみ（LearningPage:255-281）~~
- ~~ネットワークエラー、タイムアウト、サーバーエラーなどタイプ別メッセージに分岐~~
- **対応**: `classifyError` ユーティリティで network/timeout/chunk/general の4タイプに分類。中学生向けの優しいメッセージに変更。デプロイ後のチャンクエラー時は自動リロード対応

---

## Phase 2: 短期改善（1ヶ月） ✅ 完了

### 5. ~~レスポンシブデザイン強化~~ ❌ 対応不要
- ~~全ページが `max-w-md` 固定で、タブレット/デスクトップでは左右に大量の余白~~
- **理由**: スマホ縦長表示に特化した設計方針のため、意図的に狭幅にしている

### 6. スケルトンローディング UI ✅
- ~~現在はスピナー+テキストのみ（LearningPage:286-293）~~
- ~~コンテンツの形状に合わせたスケルトンUIでUXを向上~~
- **対応**: LearningPage（ヘッダー+タブバー+コンテンツ）、HistoryChatPage（ヘッダー+チャットメッセージ風）にスケルトンUI実装

### 7. ~~難易度フィルタリング機能~~ ✅ 実装済み
- ~~フラッシュカード・クイズの `difficulty` フィールドはオプションで活用されていない~~
- ~~「基本/標準/応用」の切り替えフィルタを追加~~
- ~~トピック内で難易度ごとの問題数を表示~~
- **状況**: QuizSetup/FlashcardSetupに「基礎/標準/発展」の選択UI・問題数表示・教科別localStorage永続化が実装済み

### 8. 復習スケジューラー（間隔反復学習） ✅
- ~~現在はフラッシュカードが1回限り、クイズは最高スコア保存のみ~~
- ~~Spaced Repetition（間隔反復）の仕組みを導入~~
- ~~`studyProgressStorage.ts` に `nextReviewDate` フィールド追加~~
- ~~「3日後に復習」「1週間後に復習」のリマインド表示~~
- **対応**: TopicProgressにnextReviewDate/reviewCountを追加。クイズ完了時にスコアに応じた簡易SM-2で次回復習日を自動計算。TopPageに「今日の復習」セクション（最大10件、延期ボタン付き: 1/2/3/5/7日後から選択可能）

### 9. テストカバレッジの向上 ✅
- ~~テストファイルが4つのみ（`tests/unit/utils/` 配下）~~
- ~~vitest.config.ts で80%閾値を設定済みだが、実際のカバレッジは低い~~
- ~~TabBar、FlashcardDeck、QuizViewなど主要コンポーネントのテスト追加~~
- **対応**: 5つのテストファイル追加（classifyError, setupPreferencesStorage, useFlashcard, useQuiz, TabBar）。全9ファイル102テストがパス

---

## Phase 3: 中期改善（2-3ヶ月）

### 10. オフライン対応（PWA強化） ✅
- ~~`manifest.json` で `display: "standalone"` は設定済みだがService Workerなし~~
- ~~Workboxで Service Worker 自動生成~~
- ~~最後に閲覧したコンテンツをオフラインでも利用可能に~~
- **対応**: `vite-plugin-pwa` を導入。Workboxベースの自動SW生成、Google Fontsキャッシュ、静的アセット自動プリキャッシュを設定。手動sw.js/SW登録を廃止

### 11. 学習進捗ダッシュボード強化 ✅（部分対応）
- ~~現在はストリーク数と総学習トピック数の表示のみ（TopPage:65-78）~~
- 週間・月間の学習時間グラフ → ⏸️ 保留（歴史的データのDB保存が前提）
- ~~教科別の進捗率（プログレスバー）~~
- ~~苦手な単元の自動抽出（クイズスコア < 60% のトピック）~~
- **対応**: TopPageに教科別プログレスバー追加。苦手単元は復習セクション（スコア低い順ソート）で表示

### 12. クイズの問題パターン追加
- 現在は `choice`（4択）と `reorder`（語順並べ替え）の2種類のみ
- 穴埋め問題
- マッチング問題（左右の対応を選ぶ）
- ドラッグ&ドロップ（地図・図表への配置）

### 13. ~~状態管理のシンプル化~~ ✅ 対応不要
- ~~FlashcardDeck.tsx（150+行）で `useState` + `useRef` + `useEffect` が複雑に絡み合う~~
- ~~`useReducer` またはカスタムフックへのロジック分離~~
- **状況**: `useFlashcard`フック(334行)に既にロジック分離済み。FlashcardDeck(621行)の残りはUIレンダリングのみで妥当な分割

### 14. 重複コードの共通化 ✅
- ~~LearningPage と HistoryChatPage で類似のエラーハンドリングパターン~~
- ~~共通エラーコンポーネント / `useErrorBoundary` カスタムフックの抽出~~
- **対応**: `ErrorScreen`共通コンポーネントを作成。両ページのエラー表示を置き換え

---

## Phase 4: 長期改善（3-6ヶ月）

### 15. ダークモード対応 ✅
- ~~design-guide.md ではスコープ外だが、ユーザー需要は高い~~
- ~~`prefers-color-scheme` メディアクエリ + Tailwind dark mode~~
- **対応**: Tailwind v4の`@custom-variant`でclass-basedダークモード実装。SettingsPageに自動/ライト/ダークの3段階切替UI。`themeStorage.ts`でlocalStorage永続化

### 16. シェア機能 ⏸️ 保留
- 「このトピックをクリアしました！」をSNSにシェア
- LINEで友人に問題を送信

### 17. ~~AI チューター統合~~ ❌ 対応不要
- ~~`chatgptPrompt.ts` にプロンプトビルダーが既存~~
- ~~「この問題が解けなかった」→ AIが解説・次のステップを提案~~
- **理由**: 現時点では実装しない

### 18. パーソナライズ学習経路 ⏸️ 保留（ログイン機能・DB連携後）
- 学習スタイル診断（ビジュアル/テキスト/インタラクション重視）
- 診断結果に基づいた推奨コンテンツの表示順変更
- **備考**: ログイン機能・データベース連携が前提。今後実装予定

---

## 技術的負債

### 型安全性の改善
- `types.ts` で多くのフィールドが optional（`chatId?`, `examples?`, `slides?`）
- Discriminated Union型の活用で型推論を強化
- Zodなどのスキーマ検証ライブラリ導入も検討

### ビルドパイプラインの整理 ✅（部分対応）
- `build` スクリプトが4コマンド連鎖（レジストリ生成→TS→Vite→Sitemap→Prerender）
- 段階的エラーハンドリングの追加
- ~~Bundle size分析ツール（`rollup-plugin-visualizer`）の導入~~
- **対応**: `rollup-plugin-visualizer`を導入。ビルド時にdist/stats.htmlにバンドル分析レポート自動生成

### localStorage の容量対策 ✅（確認済み）
- 学習進捗、ストリーク、ブックマークなどを localStorage に保存中
- ~~データ量増加時に IndexedDB への移行を検討~~
- ~~LRUキャッシュでメモリキャッシュの上限管理~~
- **状況**: `trimOldTopics`でQuotaExceededError時に古いトピック半分を自動削除する戦略が実装済みで十分機能している。IndexedDB移行はDB連携時に検討
