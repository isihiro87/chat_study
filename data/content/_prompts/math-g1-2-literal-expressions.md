# 一問一答コンテンツ生成プロンプト — 数学 中1：文字の式

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **数学 中1 / 文字の式**（`2-literal-expressions`）
- 出力先: `data/content/math/grade1/2-literal-expressions/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/math/units/grade1/2-literal-expressions/1年数学必修2章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/math/units/grade1/2-literal-expressions/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 3 トピック）

### 文字式の表し方（×や÷を省いた表し方をマスター）

- 出力先: `data/content/math/grade1/2-literal-expressions/notation.json`
- Web版ソース: `src/data/subjects/math/units/grade1/2-literal-expressions/topics/1-notation/index.ts`（既存 flashcards 32件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **数量を文字で表す**
    - 1個 $a$ 円のりんごを5個買った代金 → $5a$ 円
    - 時速 $x$ km で3時間走った道のり → $3x$ km
    - 文字を使うと、数が変わっても同じ式で表せる
  - **乗法記号×を省くルール**
    - ×の記号は省略する（例: $a \times b$ → $ab$）
    - 数は文字の前に書く（例: $x \times 3$ → $3x$）
    - 1は省略する（例: $1 \times a$ → $a$）、$-1$ も符号だけ（$-a$）
    - 同じ文字の積は指数で表す（例: $a \times a$ → $a^2$）
  - **除法記号÷は分数で表す**
    - $a \div b$ → $\dfrac{a}{b}$
    - $x \div 3$ → $\dfrac{x}{3}$
    - ÷は絶対に使わない！必ず分数にする
  - **代入と式の値**
    - 代入 = 文字に数を当てはめること
    - 式の値 = 代入して計算した結果
    - 負の数を代入するときは、かっこをつける（例: $x = -2$ なら $3x = 3 \times (-2) = -6$）
  - **数量を文字式で表す（実生活の場面）**
    - 代金 = 単価 × 個数（例: 1個 $a$ 円を $n$ 個 → $an$ 円）
    - おつり = 出した金額 − 代金（例: 1000円出して $a$ 円の品を3個 → $1000 - 3a$ 円）
    - 道のり = 速さ × 時間、速さ = 道のり ÷ 時間、時間 = 道のり ÷ 速さ
    - 割合の表し方: $a$ 円の30%引き → $0.7a$ 円、$a$ 円の $x$ %増し → $a(1 + \dfrac{x}{100})$ 円
    - 面積: 三角形 = $\dfrac{ah}{2}$、円 = $\pi r^2$
  - **式の意味を読み取る**
    - $5a$ → 「$a$ の5倍」「$a$ 円の品5個分の代金」など
    - $\dfrac{a}{3}$ → 「$a$ を3で割った値」「$a$ km を3時間で行く速さ」など
    - $1000 - 4a$ → 「$a$ 円の品4個を買い1000円出したおつり」
    - 式の意味は場面によって変わる。問題文をよく読もう！

### 文字式の計算（項・係数と同類項の計算）

- 出力先: `data/content/math/grade1/2-literal-expressions/calculations.json`
- Web版ソース: `src/data/subjects/math/units/grade1/2-literal-expressions/topics/2-calculations/index.ts`（既存 flashcards 34件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **項と係数**
    - $5x - 3y + 2$ の項は $5x$, $-3y$, $2$ の3つ
    - $5x$ の係数は $5$、$-3y$ の係数は $-3$
    - 数だけの項（$2$ など）を「定数項」と呼ぶ
  - **同じ文字の項をまとめる**
    - $3x + 5x = (3 + 5)x = 8x$（分配法則の逆）
    - $7a - 2a = (7 - 2)a = 5a$
    - 文字の部分が違う項はまとめられない（$3x + 2y$ はそのまま）
  - **かっこのはずし方**
    - 前が+: $+(3x - 2) = 3x - 2$（そのまま）
    - 前が-: $-(3x - 2) = -3x + 2$（符号が全部変わる）
    - かっこを外してから同類項をまとめよう
  - **文字式と数の乗法・除法**
    - $(4x + 6) \times 2 = 8x + 12$（各項に2をかける）
    - $(6x - 9) \div 3 = 2x - 3$（各項を3で割る）
    - 分配法則を使って、かっこの中の全部の項に計算する

### 関係を表す式（等式と不等式で数量関係を表そう）

- 出力先: `data/content/math/grade1/2-literal-expressions/relations.json`
- Web版ソース: `src/data/subjects/math/units/grade1/2-literal-expressions/topics/3-relations/index.ts`（既存 flashcards 34件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **等式**
    - 等式: = を使って数量が等しい関係を表す式
    - 左辺 = 右辺 の形
    - 例: $x + 3 = 10$（$x$ に $3$ を足すと $10$ になる）
  - **不等式**
    - $a > b$: $a$ は $b$ より大きい
    - $a < b$: $a$ は $b$ より小さい
    - $a \geqq b$: $a$ は $b$ 以上（$b$ と同じかそれより大きい）
    - $a \leqq b$: $a$ は $b$ 以下（$b$ と同じかそれより小さい）
  - **文章から等式・不等式をつくる**
    - 「$x$ 個のりんごと $3$ 個のみかんで合計 $10$ 個」→ $x + 3 = 10$
    - 「$a$ 円は $500$ 円以上」→ $a \geqq 500$
    - 「$x$ km は $30$ km 未満」→ $x < 30$（未満 = より小さい）
  - **式の意味を読み取る**
    - $50x + 30y = 410$ → 「1個50円の品物 $x$ 個と1個30円の品物 $y$ 個で合計410円」
    - $3a \leqq 1500$ → 「1個 $a$ 円の品物を3個買うと代金は1500円以下」
    - 式を見たら、まず各項が何を表すか考えよう
    - 不等号の向きから「以上」「以下」「未満」「より大きい」を正しく読み取ろう

## 数学固有のルール（README の共通ルールに追加）

- ⚠️ **数学のフラッシュカードは「計算結果・具体値を答える問題」のみ**。定義・手順・法則名・「コツは？」型のFCは**作成禁止**。
- 数学FCは必ず `explanation`（途中式）を使う。`front`=答え、`back`=問題。
- LaTeX はJSON文字列なのでバックスラッシュ二重（`\\frac`, `\\sqrt`, `\\times`, `\\pm`）。式は `$...$` で囲む。
- 4択の数式表記（分数/小数・`\\pm` の有無・括弧）を選択肢間で統一。重複選択肢禁止。
- 解が1つでも「重解」の語は使わず `x=3` のように値で書く。解が2つなら `x=\\pm 2` 等。
- 問題文にヒント・解法の指示を入れない。

## 進め方

1. `data/content/_prompts/README.md`・`docs/content-analysis/math.md`・`docs/content-quality-standards.md` を読む。
2. 教材PDFを `Read`（大きければ `pages` 指定）。各トピックの Web版ソース `index.ts` の `content`（explanation / 既存 flashcards / quiz）も読む。
3. トピックごとに `flashcards` と `quiz.questions` を生成し、該当 JSON を `Write` で更新（1ファイルずつ）。
4. 難易度配分（basic40/standard40/advanced20）と **正答位置 `correctIndex` の均等分散**を自己チェック。
5. 検証: `npx tsx scripts/sync-content.ts --dry-run --only=math/**`。

## 完了の目安

- 全 3 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
