---
name: sync-line-questions
description: data/content/history の quiz 問題を Firestore `questions` collection に同期するスキル。LIFF の testScope（細かいトピック名）と webhook の出題（毎日配信 / 追加で解く / 苦手復習）の整合性を取るために使う。「問題を同期して」「クイズを Firestore に反映」「sync-questions」などの指示で起動。
allowed-tools: Bash, Read
---

# 学習コンテンツ → Firestore questions 同期スキル

LIFF「テスト範囲設定」で保存される `users/{uid}.testScope.topics` は **細かい topic 名**（例: `"旧石器時代と縄文時代"`）。webhook の `selectAndSendQuestion` / `handleWeakReview` はこれを Firestore `questions.topic` と一致比較して出題候補を絞り込む。

`data/content/history/*.json` の quiz 問題を Firestore に同期しないと testScope を設定しても「準備中」になってしまうため、JSON を編集 / 追加した直後は必ずこのスキルで反映する。

## 起動トリガー

ユーザーから以下のような指示を受けたら起動:

- 「問題を Firestore に同期して」「クイズを反映」「sync-questions」
- 「data/content の問題を webhook 側に反映」
- 「テスト範囲で出題されないので問題を同期」
- 「`sync-questions-from-content` を実行」

## 実行手順

### ステップ1: dry-run で差分確認

```bash
npx tsx scripts/sync-questions-from-content.ts --dry-run
```

出力例:
```
[sync] mode=dry-run prune=false project=chatstudy-63477
[sync] loaded 1472 quiz questions from data/content/history
  中1: 661 問
  中2: 526 問
  中3: 285 問
[sync] dry-run, no writes
```

ここで件数が想定外に少ない / 多い場合は処理を止めてユーザーに確認。

### ステップ2: 実書き込み

```bash
npx tsx scripts/sync-questions-from-content.ts
```

進捗ログが 50 件毎に出る。完了まで 1-2 分。

### ステップ3 (任意): prune

JSON 側で削除された問題を Firestore からも消す場合:

```bash
npx tsx scripts/sync-questions-from-content.ts --prune
```

`syncSource == "content-history-v1"` のうち、現在の JSON に対応する ID が無いものを削除する。`data/line-questions` 由来の古い問題は対象外（残る）。

### ステップ4: 結果報告

```
✓ wrote 1472 questions
  内訳: 中1=661 / 中2=526 / 中3=285
これでテスト範囲設定が反映される（追加で解く / 苦手復習 / 毎日配信）。
```

## 前提条件

- gcloud ADC 認証済み: `gcloud auth application-default login`
  - エラー `ApplicationDefaultCredentialsError` が出たら、上記コマンドの実行をユーザーに依頼
- ローカル `data/content/history/*.json` が同期したい内容になっていること

## Document ID とフィールドの規則

- ID: `q-history-{topicId}-{questionId}`（例: `q-history-jomon-era-q1`）
- フィールド:
  - `subject`: `"history"`
  - `grade`: `"中1"` / `"中2"` / `"中3"`（フォルダ番号 01-06 / 07-12 / 13-19）
  - `topic`: topic.name（細かい日本語、testScope と完全一致する）
  - `text`, `choices`, `correctChoiceId`, `explanation`, `difficulty`
  - `contentTopicId`: トレース用、元 JSON の topic.topicId
  - `syncSource`: `"content-history-v1"`（prune の識別子）
  - `lastSyncedAt`: serverTimestamp

## 関連リソース

- スクリプト: `scripts/sync-questions-from-content.ts`
- ペアの generator: `scripts/generate-line-study-content.ts`（LIFF じっくり学ぶ用 TS）
- 旧データ: `data/line-questions/*.json` + `scripts/manage-line-questions.ts`（粗いトピック名、共存）
- webhook 側読み出し: `functions/src/lineWebhook.ts` の `selectAndSendQuestion` / `handleWeakReview`
- CLAUDE.md「LIFF『じっくり学ぶ』の学習データフロー」節
