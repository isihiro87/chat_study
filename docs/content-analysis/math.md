# 数学（math）教材作成分析と改善案

## 1. ディレクトリ構成

```
src/data/subjects/math/
├── index.ts                    # 教科エントリポイント
├── contents.md                 # 全学年カリキュラム概要
├── 1st_contents.md             # 中1詳細カリキュラム
├── 2nd_contents.md             # 中2詳細カリキュラム
├── 3rd_contents.md             # 中3詳細カリキュラム
└── units/
    ├── index.ts                # 全Era・Topic集約
    ├── grade1/                 # 4単元・約16トピック
    ├── grade2/                 # 3単元・約13トピック
    └── grade3/                 # 4単元・約15トピック
```

**トピック構成:**
```
topics/{topic-id}/
├── index.ts      # Topic定義（explanation, flashcards, quiz, examples）
├── chat.ts       # 対話形式の解説（任意）
└── quiz/
    ├── structured.md     # 大問小問形式
    ├── advanced.md       # 発展問題
    └── ichimondittou.md  # 一問一答（任意）
```

## 2. 教材タイプ別の作り方

### 2.1 解説（explanation）

**構成:** 4〜5セクション、各セクションにtitle / content / keyPoints

```typescript
explanation: {
  sections: [
    {
      title: '正の数と負の数',
      content: '$0$ より大きい数を「正の数」、...',  // LaTeX数式対応
      keyPoints: [
        '正の数: $0$ より大きい数（例: $+3, +0.5$）',
        '負の数: $0$ より小さい数（例: $-2, -0.7$）',
      ],
    },
  ],
}
```

**特徴:**
- LaTeX記法（`$...$`）で数式表現
- keyPointsは2〜4個の箇条書き
- imageは任意（SVG画像）

### 2.2 チャット（chat.ts）

**型:** `HistoryChat`インターフェースを使用（歴史と共通の型）

**キャラクター:** 先生（左・青系）+ 生徒（右・アンバー系）の2人構成

**コンテンツ要素:**
| タイプ | 用途 |
|--------|------|
| `date` | セクション見出し |
| `narrator` | ナレーション・導入 |
| `message` | キャラクター対話（expression付き） |
| `whiteboard` | 数式展開（LaTeX、段階表示） |
| `summary-point` | 要点まとめ |
| `quiz` | 途中の確認クイズ |
| `image` | 図・グラフ |
| `end` | 最終まとめ |

**数学特有の要素: `whiteboard`**
```typescript
{
  type: 'whiteboard',
  title: '計算例',
  steps: [
    { formula: '$3x + 2 = 11$', annotation: 'まず方程式を立てる' },
    { formula: '$3x = 9$', annotation: '両辺から2を引く' },
    { formula: '$x = 3$', isResult: true },  // 最終結果を強調
  ],
}
```

### 2.3 例題（examples）

**構成:** 5〜6題、各題2〜4ステップ

```typescript
examples: {
  examples: [
    {
      id: 'math-g1-pos-neg-meaning-ex1',
      question: '次の数の絶対値を求めよう。\n$+4, \\quad -9, \\quad 0$',
      steps: [
        {
          title: 'Step 1: 絶対値の意味を確認',
          content: '絶対値は数直線上で原点からの距離だよ。',
          highlight: '絶対値 = 原点からの距離',
        },
      ],
      answer: '$|+4| = 4, \\quad |-9| = 9, \\quad |0| = 0$',
    },
  ],
}
```

### 2.4 フラッシュカード（flashcards）

**構成:** quiz/ichimondittou.mdの全問題をカバーする量（問題数はトピックごとに異なってよい）

```typescript
{
  id: 'math-g1-pn-m-fc1',
  front: '$0$ より大きい数を何という？',   // 問題面（表示は back→front の順）
  back: '正の数（せいのかず）。正の符号 $+$ をつけて表す。',  // 解答面
}
```

### 2.5 クイズ（quiz）

**index.ts内:** quiz/フォルダの3ファイルから作れるだけの4択問題を網羅的に変換（問題数はトピックごとに異なってよい）

```typescript
quiz: {
  questions: [
    {
      id: 'math-g1-pos-neg-meaning-q1',
      question: '次のうち、負の数はどれ？',
      options: ['$+7$', '$0$', '$-3$', '$\\frac{1}{2}$'],
      correctIndex: 2,
      explanation: '$-3$ は $0$ より小さい数なので負の数。',
    },
  ],
}
```

**quiz/ディレクトリ:** Markdown形式の問題集（index.tsのクイズ・フラッシュカードの主要ソース）
- `ichimondittou.md`: 一問一答 → **フラッシュカード化 + 4択クイズ化が必須**（全問をカバー）
- `structured.md`: 大問形式 → **4択クイズに変換**（各小問を独立した問題に分解）
- `advanced.md`: 発展問題 → **difficulty: 'advanced' の4択クイズに変換**

**⚠️ quiz/フォルダ活用ルール:**
- quiz/フォルダの問題は「追加」ではなく、index.tsのクイズ・フラッシュカードの**主要な出題元**
- ichimondittou.mdの全Q&Aペアをフラッシュカード化する（漏れなく）
- structured.mdの各小問を4択クイズに変換する
- advanced.mdの問題はdifficulty: 'advanced'タグ付きで4択化する
- quiz/フォルダに問題があるのにindex.tsに反映されていないのは**不完全な状態**

### 2.6 ID命名規則

| 要素 | パターン | 例 |
|------|----------|-----|
| Topic | `math-g{学年}-{単元}-{トピック}` | `math-g1-pos-neg-meaning` |
| Flashcard | `{topic}-fc{番号}` | `math-g1-pn-m-fc1` |
| Quiz | `{topic}-q{番号}` | `math-g1-pos-neg-meaning-q1` |
| Example | `{topic}-ex{番号}` | `math-g1-pos-neg-meaning-ex1` |

## 3. 作成パイプライン

1. **カリキュラム確認**: `contents.md` / `{学年}_contents.md` で全体像把握
2. **Era定義**: `grade{X}/{unit}/index.ts` にEraオブジェクト作成
3. **Topic定義**: `topics/{topic}/index.ts` に全コンテンツ（explanation, flashcards, quiz, examples）
4. **チャット作成**: `topics/{topic}/chat.ts` にHistoryChat形式（任意）
5. **クイズ拡充**: `topics/{topic}/quiz/` にMarkdown問題集
6. **⚠️ quiz/→index.ts反映**: quiz/フォルダの全問題をindex.tsのクイズ・フラッシュカードに変換（最重要ステップ）
6. **集約登録**: `units/index.ts` にEra・Topicをインポート・エクスポート

**スキル活用:**
- `/improve-from-pdf`: PDFワークブックから問題抽出→クイズ・コンテンツ拡充
- `/generate-quiz`: contents.mdからクイズ生成
- `/generate-content`: contents.mdからchat.ts・index.tsフル生成

## 4. 改善案

### 4.1 スライド（3タップ形式）の導入

**現状:** 数学にはスライド（question→reason→conclusion）が未実装
**理科・地理:** スライドを活用済み

**提案:** 数学でもSlideSetを導入。特に概念理解が重要なトピック（関数の変化の割合、図形の性質など）で効果的。

```typescript
slides: [
  {
    id: 'math-g1-eq-slide1',
    title: '方程式とは？',
    slides: [
      { type: 'question', question: '等号を含む式で、文字の値を求めるものは？', ... },
      { type: 'reason', headline: '方程式 = 等号 + 未知数', points: [...] },
      { type: 'conclusion', conclusion: '方程式は...', keywords: [...] },
    ],
  },
]
```

### 4.2 whiteboardの段階的活用拡大

**現状:** chat.tsでのみwhiteboard使用。一部トピックではchat.ts自体が未作成。
**提案:**
- 全トピックにchat.tsを作成（現在46/44以上あるが網羅性を確認）
- whiteboardのアニメーション機能（`animateInsert`）を積極活用し、計算過程の段階的表示を強化

### 4.3 quiz/ディレクトリの完全活用（最優先）

**現状:** quiz/ディレクトリは全151トピックに存在し、各フォルダにstructured.md・ichimondittou.md・advanced.mdの3ファイルが揃っている。しかし、これらの問題がindex.tsのクイズ・フラッシュカードに十分に反映されていない。
**対応方針:**
- **ichimondittou.md → フラッシュカード**: 全Q&Aペアをフラッシュカードに変換（目標: 25〜40枚）
- **ichimondittou.md + structured.md → 4択クイズ**: 各問題を4択形式に変換（目標: 25〜40問）
- **advanced.md → advancedクイズ**: difficulty: 'advanced'タグ付きで変換
- **難易度バランス**: basic 40% / standard 40% / advanced 20%
- quiz/フォルダの問題数に対してindex.tsの問題数が著しく少ない場合は、コンテンツ拡充の最優先対象とする

### 4.4 図・グラフの充実

**現状:** SVG画像パスは定義されているが、実際の画像ファイルが不足している場合がある。
**提案:**
- 関数のグラフ、図形の証明図、数直線などのSVG画像を体系的に作成
- `image-prompts/` ディレクトリを活用して画像生成指示を標準化

### 4.5 難易度タグの導入

**現状:** クイズ問題に難易度情報がない。
**提案:** QuizQuestionに `difficulty: 'basic' | 'standard' | 'advanced'` フィールドを追加。ランダムクイズで難易度別出題が可能に。

### 4.6 計算ドリルモードの追加

**現状:** クイズは4択のみ。数学では自由入力形式の計算問題が有効。
**提案:** 新しいクイズタイプ `type: 'input'` で自由記述の計算ドリルを実装。

```typescript
{
  id: 'math-g1-calc-drill-1',
  type: 'input',
  question: '$(-3) + (+7) = ?$',
  correctAnswer: '4',
  acceptableAnswers: ['4', '+4'],
  explanation: '...',
}
```

### 4.7 前提知識リンクの追加

**現状:** トピック間の依存関係が明示されていない。
**提案:** Topicに `prerequisites: string[]`（前提トピックID配列）を追加。学習順序のガイドや「この単元を先に復習しよう」の案内に活用。

### 4.8 contents.mdの活用強化

**現状:** contents.mdはカリキュラム全体像を記述しているが、コンテンツ生成との連携が弱い。
**提案:** contents.mdにトピックごとの「重要用語リスト」「頻出問題パターン」を追記し、generate-contentスキルがこれを参照して品質の高いコンテンツを自動生成できるようにする。

## 5. フィードバックログ

### 2026-03-19 数学フラッシュカード・クイズ品質改善
- **対象**: 数学全トピック共通
- **指摘1**: フラッシュカードで回答と解説が混在して見づらい → `front`に回答のみ、`explanation`フィールドに解説を分離する
- **指摘2**: 「完全平方数」は中学で一般に習わない → 「整数の2乗」「整数の2乗の数」に置換する
- **指摘3**: 「工夫して計算すると？」系の問題で、工夫しない方法が先に紹介されている → 工夫した方法を先に表示
- **対応**: 中3平方根 全4トピック（意味・乗除・有理化・和差展開）のchat.ts・index.ts修正済み
- **汎用ルール**: 数学フラッシュカードは必ず`explanation`フィールドを使い、front=回答、explanation=途中式・解説とする

### 2026-03-19 全教科共通：クイズ品質基準
- **対象**: 全教科全トピック共通
- **指摘1**: チャット内クイズは直前に説明した解法で解ける問題にする（説明していないステップを要求しない）
- **指摘2**: クイズの解説で数式と説明文が同じ行に表示されて見づらい → 数式の後に`\n`で改行を入れる
- **指摘3**: 選択肢に「〜のまま」等の不自然な表現を使わない
- **指摘4**: 正答の位置（A/B/C/D）が偏らないようにする（各25%前後を目安）
- **対応**: 中3平方根 全4トピック修正済み
- **汎用ルール**: 上記4点は全教科・全トピックに適用

### 2026-03-19 有理化トピック固有の修正
- **対象**: 中3平方根・分母の有理化
- **指摘1**: 導入で「なぜ分母が√2だとわかりにくいのか」が不明瞭 → 無限小数での割り算の困難さを具体的に説明
- **指摘2**: 問題文に「約分」の指示は不要 → 「有理化・約分すると？」→「有理化すると？」
- **指摘3**: ≈記号が中学生に唐突 → =に置換
- **指摘4**: 問題文に（先に8を簡単にしよう）などの指示は不要 → 削除
- **指摘5**: 約分前の計算式を誤答に入れすぎ → 2-3問に制限、誤答バリエーションを増やす
- **対応**: chat.ts・index.ts修正済み
- **汎用ルール**: 問題文にヒント・指示を入れない。誤答パターンが単調にならないよう注意

### 2026-03-16 全教科共通フィードバック（チャット・クイズ・フラッシュカード品質改善）
- **対象**: 全トピック共通
- **指摘1**: セリフだけが続くと飽きる → 6〜7つ以上連続する場合は画像を挟む（4つ程度はOK。挟める画像がない場合は不要）
- **指摘2**: summary-pointの後には必ずquizを入れる
- **指摘3**: 未知の可能性がある用語には説明を入れる
- **指摘4**: quiz/フォルダの一問一答・構造問題・発展問題をもとにフラッシュカード・クイズ・例題の数を充実させる
- **指摘5**: クイズは選択問題・並べ替え問題を原則とする
- **指摘6**: フラッシュカード・クイズには難易度タグ（basic/standard/advanced）を付与する
- **対応**: generate-content, improve-from-pdf, review-contentスキルを更新済み
- **汎用ルール**: フラッシュカード・クイズの問題数は統一不要。quiz/フォルダの問題を主要ソースとして、作れるだけの問題を網羅的に変換する。難易度バランスはbasic40%/standard40%/advanced20%
