---
description: contents.mdをもとにchat.tsとindex.tsの4択クイズを生成・更新する
---

# 4択クイズ生成コマンド

**引数:** contents.mdのパス (例: `/generate-quiz src/data/subjects/history/eras/edo-late/topics/kyoho-reform/contents.md`)

---

## 前提条件

- 引数で指定されたcontents.mdファイルが存在すること
- 同じディレクトリにindex.tsとchat.tsが存在すること

---

## ステップ1: ファイルの読み込み

1. 引数で指定されたcontents.mdを読み込む
2. 同じディレクトリにあるindex.tsを読み込む
3. 同じディレクトリにあるchat.tsを読み込む
4. 型定義ファイルを確認:
   - `src/data/types.ts` (Topic型)
   - `src/data/history-chat/types.ts` (HistoryChat型)

---

## ステップ2: contents.mdの分析

contents.mdから以下の情報を抽出する:

1. **テーマ情報**: アイコン、タイトル（①の後のテキスト）
2. **セクション構成**: 各見出し（📜、🏘️、🏭、🌾など）とその内容
3. **重要キーワード**: `**太字**`で囲まれた用語
4. **学習ポイント**: 各セクションの核となる概念

---

## ステップ3: 4択クイズの設計

contents.mdの内容に基づき、以下の基準で4択クイズを設計する:

### クイズ設計の原則

1. **重要キーワードをカバー**: `**太字**`で強調された用語は必ずクイズに含める
2. **各セクションから出題**: 主要なセクションごとに1-2問
3. **中学生レベル**: 用語の意味や関連性を問う基本的な問題
4. **紛らわしい選択肢**: 同じ時代・文脈の用語を不正解選択肢に使う

### chat.ts用クイズ形式

```typescript
{
  type: 'quiz',
  question: '問題文',
  options: [
    { letter: 'A', text: '選択肢1', correct: false },
    { letter: 'B', text: '選択肢2', correct: true },
    { letter: 'C', text: '選択肢3', correct: false },
    { letter: 'D', text: '選択肢4', correct: false },
  ],
  explanation: '<strong>正解はB「選択肢2」</strong>です。解説文。',
}
```

### index.ts用クイズ形式

```typescript
{
  id: 'q1',
  question: '問題文',
  options: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
  correctIndex: 1, // 0-indexed
  explanation: '解説文',
}
```

---

## ステップ4: 自己確認（品質チェック）

**生成したクイズをファイルに書き込む前に、以下の観点で自己確認を行う。**

### チェック項目

1. **歴史的正確性**
   - 問題文と正解が史実に基づいているか
   - 年号や人物名に誤りがないか

2. **問題の適切性**
   - 中学生が理解できるレベルか
   - 問題文が曖昧でないか
   - 正解が1つに特定できるか

3. **選択肢の品質**
   - 不正解の選択肢が明らかにおかしくないか
   - 紛らわしすぎて不公平でないか
   - 4つの選択肢が適切に分散しているか

4. **解説の充実度**
   - 正解の理由が明確に説明されているか
   - 学習につながる補足情報があるか

5. **contents.mdとの整合性**
   - 太字キーワードがクイズでカバーされているか
   - 重要なセクションが漏れていないか

### 問題があった場合

- 自己修正してから次のステップに進む
- 修正内容を記録しておく

---

## ステップ5: chat.tsの更新

### 更新対象

chat.tsファイル全体を再生成する（キャラクター設定含む）

### 構成ルール

1. **characters**: contents.mdのテーマに合った2名のキャラクター
   - 歴史上の人物や関係者
   - 適切なemoji、グラデーション色を設定

2. **content配列の構成**:
   ```
   date → narrator → message(s) → quiz → message(s) → narrator → quiz → ... → end
   ```

3. **クイズの配置**: 学習ポイントの説明後に配置（2-4問程度）

4. **endセクション**: contents.mdの主要ポイントを4-5個のまとめとして記載

### 生成後の確認

- TypeScriptの型に準拠しているか
- インポート文が正しいか
- exportが正しい形式か

---

## ステップ6: index.tsの更新

### 更新対象

- `quiz.questions` 配列のみを更新
- **flashcardsは絶対に変更しない**

### 更新手順

1. 既存のindex.tsを読み込む
2. flashcardsの内容を保持
3. quiz.questionsのみを新しいクイズで置き換える
4. Editツールで該当部分のみを更新

### クイズの対応関係

- chat.tsで使用したクイズと同じ問題をindex.ts用の形式に変換
- letter形式 → correctIndex形式に変換
- HTML解説 → プレーンテキスト解説に変換

---

## ステップ7: 検証

1. 生成したファイルが正しくコンパイルされるか確認:
   ```bash
   npx tsc --noEmit src/data/subjects/history/eras/[対象パス]/chat.ts
   npx tsc --noEmit src/data/subjects/history/eras/[対象パス]/index.ts
   ```

2. エラーがあれば修正

---

## 出力形式

完了時に以下を報告:

1. 生成したクイズの数
2. 更新したファイルのパス
3. 変更内容のサマリー

---

## 注意事項

- **flashcardsは絶対に変更しない**
- クイズは中学生が理解できるレベルで作成
- 歴史的な正確性を担保する
- 既存ファイルがある場合は完全に上書きする（クイズ部分）
- **ステップ4の自己確認を必ず行ってからファイルを書き換える**
