---
description: contents.mdをもとにchat.ts・index.ts（explanation, flashcards, quiz）をフル生成する
---

# フルコンテンツ生成コマンド

**引数:** トピックフォルダのパス (例: `/generate-content src/data/subjects/history/eras/grade1/1-ancient-world/topics/1-human-origins`)

---

## 前提条件

- 引数で指定されたトピックフォルダが存在すること
- 同ディレクトリに`contents.md`が存在すること（なければステップ1.5でテンプレートを作成して停止）
- 同ディレクトリに`index.ts`と`chat.ts`が存在する場合は読み込んで既存の設定値（id, eraId, name等）を保持する（存在しない場合は新規作成）

---

## ステップ1: ファイルの読み込み

1. 引数で指定されたフォルダ内の以下を読み込む:
   - `contents.md`（ソース教材）
   - `index.ts`（既存のTopic定義）
   - `chat.ts`（既存のHistoryChat定義）
2. 型定義ファイルを確認:
   - `src/data/types.ts`（Topic型・Flashcard型・Quiz型）
   - `src/data/history-chat/types.ts`（HistoryChat型・ChatContent型）
3. 参考パターンとして以下を読み込む:
   - `src/data/subjects/history/eras/grade1/1-ancient-world/topics/1-human-origins/chat.ts`（最良のchat.tsサンプル）
   - `src/data/subjects/history/eras/grade1/1-ancient-world/topics/1-human-origins/index.ts`（最良のindex.tsサンプル）

---

## ステップ1.5: contents.mdが存在しない場合

`contents.md`が見つからない場合、以下のテンプレートを作成して**停止**する。
ユーザーに「contents.mdを作成しました。内容を記入してから再度コマンドを実行してください」と伝える。

```markdown
🏛️ ① [トピック名]

[トピックの導入文。背景や時代の雰囲気を2-3文で。]

📜 [セクション1タイトル]

**重要用語1**: 説明文。

**重要用語2**: 説明文。

🏘️ [セクション2タイトル]

**重要用語3**: 説明文。

**重要用語4**: 説明文。

🌾 [セクション3タイトル（任意）]

**重要用語5**: 説明文。
```

---

## ステップ2: contents.mdの分析

contents.mdから以下の情報を抽出する:

1. **テーマ情報**: アイコン絵文字、タイトル（①の後のテキスト）
2. **セクション構成**: 各見出し（📜、🏘️、🏭、🌾など）の絵文字+テキスト
3. **重要キーワード**: `**太字**`で囲まれた全ての用語（これがflashcardとquizの元になる）
4. **学習ポイント**: 各セクションの核となる概念・因果関係
5. **時代背景**: 年号、人物名、地名
6. **難読漢字**: ふりがな（ruby）が必要な漢字を特定

---

## ステップ3: chat.tsの生成

### 🚨 最重要: 生徒の質問パターン

**このコマンドの核心は「勉強がやや苦手な中学生でも楽しくついていける」チャットを生成すること。**

生徒キャラクターは以下のような素朴な疑問を積極的に投げかける:
- 「えっ、それってどういう意味ですか？」
- 「なんでそうなったんですか？」
- 「〇〇と△△って何が違うんですか？」
- 「テストに出ますか？」
- 「覚え方ってありますか？」
- 「今の言葉でいうとどんな感じ？」

### キャラクター設定

必ず2名構成:

**キャラ1（先生/解説者ロール）** - `side: 'left'`
- contents.mdのテーマに合った人物（研究者、歴史上の人物など）
- expressions必須: `explaining`, `happy`, `excited`, `thinking` を最低限含む
- 語尾は「〜だよ」「〜なんだ」など親しみやすい口調

**キャラ2（生徒ロール）** - `side: 'right'`
- 必ず生徒キャラ（中学生想定）
- expressions必須: `curious`, `surprised`, `thinking`, `happy` を最低限含む
- 語尾は「〜ですか？」「〜なんですね！」など敬語まじりの砕けた口調
- **各シーンで最低1回は質問すること**

### content配列の構成

```
date（時代の始まり）
  → narrator（導入、重要語にruby・keyword・strong）
  → message × 2-4（先生が説明、生徒が質問、先生が答える）
  → summary-point（シーンの要点を1行で）
  → quiz（理解度チェック1問）

date（次の時代/場面）
  → narrator
  → message × 2-4
  → summary-point
  → quiz

end（まとめ4-5点）
```

### HTMLタグの使い方

以下のタグを**必ず**使用する:

1. **重要キーワード（初出時）**: `<strong><span class="keyword"><ruby>漢字<rp>(</rp><rt>よみがな</rt><rp>)</rp></ruby></span></strong>`
2. **難読漢字のふりがな**: `<ruby>漢字<rp>(</rp><rt>よみがな</rt><rp>)</rp></ruby>`
3. **用語解説ツールチップ**: `<span data-tooltip="わかりやすい説明">用語</span>`
4. **強調（2回目以降）**: `<strong>用語</strong>`
5. **summary-point内**: `<span class="keyword">キーワード</span>`

### ふりがなルール

以下の漢字には必ずrubyタグを付ける:
- 歴史用語（猿人、原人、磨製石器、律令、摂政など）
- 人名（聖徳太子、中臣鎌足など ※読みが難しい場合）
- 中学1年レベルを超える漢字の組み合わせ

### quiz形式（chat.ts内）

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

### endセクション

```typescript
{
  type: 'end',
  points: [
    // contents.mdの重要ポイント4-5個
    // HTMLタグ（strong, ruby）を使用
  ],
}
```

---

## ステップ4: index.tsの生成

### explanation.sections

contents.mdのセクション構成に従い生成:

```typescript
explanation: {
  sections: [
    {
      title: 'セクション名',
      content: 'セクションの説明文（2-3文）',
      keyPoints: [
        'ポイント1',
        'ポイント2',
        'ポイント3',
      ],
    },
    // セクション数はcontents.mdに準拠（通常2-3個）
  ],
},
```

### flashcards

contents.mdの**太字キーワード**を元に8〜13枚生成:

```typescript
flashcards: [
  {
    id: 'fc1',
    front: '用語（漢字）',
    back: 'この用語に関する問い形式の説明',
  },
  // ...
],
```

- `front`: 覚えるべき用語（短く）
- `back`: 「〜は？」「〜を何という？」の問い形式
- 太字キーワードを**全て**カバーする
- 不足する場合は重要な年号・人名も追加

### quiz.questions

太字キーワードを網羅する3〜5問:

```typescript
quiz: {
  questions: [
    {
      id: 'q1',
      question: '問題文',
      options: ['選択肢A', '選択肢B', '選択肢C', '選択肢D'],
      correctIndex: 0, // 0-indexed
      explanation: '解説文（プレーンテキスト）',
    },
    // ...
  ],
},
```

- chat.tsのクイズと同じ問題を含む（形式変換: letter→correctIndex, HTML→プレーンテキスト）
- 追加の問題があってもよい
- 同じ時代・文脈の紛らわしい選択肢を使う
- correctIndexの位置は問題ごとにバラけさせる

### chatId

フォルダ名と一致するkebab-caseのID:
```typescript
chatId: 'human-origins', // フォルダ名の先頭「数字-」を除去したkebab-case（例: 1-human-origins → human-origins, 6-kyoho-reform → kyoho-reform）
```

---

## ステップ5: 自己確認（品質チェック）

**生成したコンテンツをファイルに書き込む前に、以下の全項目をチェック。**

### A. 歴史的正確性
- [ ] 年号・人物名・事実関係に誤りがないか
- [ ] 教科書レベルの記述と矛盾しないか

### B. 中学生への配慮
- [ ] 難しい漢字にふりがな（ruby）が付いているか
- [ ] 専門用語にツールチップ（data-tooltip）が付いているか
- [ ] 生徒キャラが各シーンで質問しているか
- [ ] 説明が長すぎず、1メッセージ2-3文以内か

### C. コンテンツ品質
- [ ] summary-pointが各シーンにあるか
- [ ] expressionが各messageに設定されているか
- [ ] endのpointsが4-5個あるか
- [ ] flashcardsが8〜13枚あるか
- [ ] quiz.questionsが3〜5問あるか
- [ ] 太字キーワードがflashcardsとquizでカバーされているか

### D. 技術的整合性
- [ ] chat.tsの型がHistoryChatに準拠しているか
- [ ] index.tsの型がTopicに準拠しているか
- [ ] chatIdがchat.tsのidと一致しているか
- [ ] characterIdがcharactersのidと一致しているか
- [ ] expressionキーがcharactersのexpressionsキーに存在するか

### 問題があった場合
- 自己修正してから次のステップに進む

---

## ステップ6: ファイル書き込み

1. **chat.ts**を全体上書き
2. **index.ts**を全体上書き
3. **history-chat/index.ts**のチャット登録を確認:
   - `src/data/history-chat/index.ts`を読み込む
   - 生成したchatIdが未登録の場合のみ、import文とchatMap登録を追加

---

## ステップ7: 検証

1. TypeScriptコンパイルチェック:
   ```bash
   npx tsc --noEmit
   ```
2. エラーがあれば修正して再チェック

---

## 出力形式

完了時に以下を報告:

1. 生成したコンテンツの概要
   - キャラクター名
   - シーン数
   - クイズ数（chat.ts内）
   - フラッシュカード数
   - クイズ数（index.ts内）
2. 更新したファイルのパス一覧
3. 品質チェックの結果サマリー

---

## 注意事項

- **生徒の質問パターンが最重要**: 勉強がやや苦手な中学生でも楽しくついていける会話を生成する
- **ふりがなを忘れない**: 難読漢字には必ずrubyタグを付ける
- **ステップ5の品質チェックを必ず実行してからファイルを書き換える**
- 既存のindex.tsのid, eraId, name, subtitle, icon, orderは変更しない（contentのみ更新）
- 既存のchat.tsとindex.tsのcontentは全体上書きする（ただしindex.tsのid, eraId, name, subtitle, icon, orderは保持）
- `/generate-quiz`との違い: こちらはflashcardsも含むフルコンテンツ生成（引数もフォルダパス vs ファイルパス）
