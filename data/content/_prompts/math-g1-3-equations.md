# 一問一答コンテンツ生成プロンプト — 数学 中1：方程式

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **数学 中1 / 方程式**（`3-equations`）
- 出力先: `data/content/math/grade1/3-equations/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/math/units/grade1/3-equations/topics/1年数学必修3章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/math/units/grade1/3-equations/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 3 トピック）

### 方程式の基本と移項（方程式の解き方の基礎）

- 出力先: `data/content/math/grade1/3-equations/basics.json`
- Web版ソース: `src/data/subjects/math/units/grade1/3-equations/topics/1-basics/index.ts`（既存 flashcards 30件 / quiz 27件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **方程式と解の概念**
    - 方程式: 未知数を含む等式（例: $x + 3 = 7$）
    - 解: 方程式を成り立たせる未知数の値
    - 方程式を解く = 解を求めること
  - **等式の性質**
    - 両辺に同じ数を加えても等式は成り立つ: $A = B \Rightarrow A + C = B + C$
    - 両辺から同じ数を引いても等式は成り立つ: $A = B \Rightarrow A - C = B - C$
    - 両辺に同じ数をかけても等式は成り立つ: $A = B \Rightarrow A \times C = B \times C$
    - 両辺を同じ数で割っても等式は成り立つ（0 以外）: $A = B \Rightarrow \dfrac{A}{C} = \dfrac{B}{C}$
  - **移項**
    - 移項: 等式の一方の辺の項を、符号を変えて他方の辺に移すこと
    - + の項を移項すると − になる、− の項を移項すると + になる
    - 移項を使えば、未知数を左辺に、数を右辺にまとめられる
  - **ax = b の形にして解を求める**
    - ステップ①: 移項して $ax = b$ の形にする
    - ステップ②: 両辺を $a$ で割る → $x = \dfrac{b}{a}$
    - 解を求めたら、元の式に代入して確かめよう

### 小数・分数の方程式（分母をはらってスッキリ解こう）

- 出力先: `data/content/math/grade1/3-equations/fractions.json`
- Web版ソース: `src/data/subjects/math/units/grade1/3-equations/topics/2-fractions/index.ts`（既存 flashcards 35件 / quiz 25件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **小数の方程式**
    - 小数第1位まで → 両辺を 10倍
    - 小数第2位まで → 両辺を 100倍
    - 整数にしてから、ふつうの方程式として解く
  - **分数の方程式（分母をはらう）**
    - 分母をはらう: 分母の最小公倍数を両辺にかける
    - すべての項にもれなくかけるのがポイント
    - 分母がなくなったら、ふつうの方程式として解く
  - **最終的に ax = b の形にする**
    - 小数 → 10倍・100倍 → 整数に変換
    - 分数 → 分母の最小公倍数をかけて分母をはらう
    - 整数にしたら移項 → $ax = b$ → $x = \dfrac{b}{a}$

### 比例式と方程式の利用（文章題を方程式で解こう）

- 出力先: `data/content/math/grade1/3-equations/applications.json`
- Web版ソース: `src/data/subjects/math/units/grade1/3-equations/topics/3-applications/index.ts`（既存 flashcards 32件 / quiz 25件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **比例式**
    - 比例式: $a : b = c : d$
    - 内項の積 = 外項の積: $ad = bc$
    - 例: $2 : 3 = x : 9$ → $2 \times 9 = 3 \times x$ → $x = 6$
  - **方程式の文章題の解き方**
    - ステップ①: 求めたいものを $x$ とおく
    - ステップ②: 問題文の条件を式にする（等しい関係を見つける）
    - ステップ③: 方程式を解く
    - ステップ④: 解が問題に合うか確かめる（解の吟味）
  - **解の吟味**
    - 解の吟味: 求めた解が問題の条件に合うか確認すること
    - 個数・人数など → 自然数（正の整数）でなければならない
    - 速さ・距離など → 負の数にならないか確認

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
