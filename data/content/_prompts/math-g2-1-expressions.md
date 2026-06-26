# 一問一答コンテンツ生成プロンプト — 数学 中2：式の計算

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **数学 中2 / 式の計算**（`1-expressions`）
- 出力先: `data/content/math/grade2/1-expressions/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/math/units/grade2/1-expressions/2年数学必修1章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/math/units/grade2/1-expressions/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 4 トピック）

### 単項式と多項式（式の種類と次数を見分けよう）

- 出力先: `data/content/math/grade2/1-expressions/monomial-polynomial.json`
- Web版ソース: `src/data/subjects/math/units/grade2/1-expressions/topics/1-monomial-polynomial/index.ts`（既存 flashcards 36件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **単項式と多項式の違い**
    - 単項式: 数や文字のかけ算だけの式（例: $3x$, $-5ab$, $7$）
    - 多項式: 単項式の和（例: $3x + 2y - 5$）
    - 項: 多項式を構成する一つひとつの単項式（例: $3x + 2y − 5$ の項は $3x$, $2y$, $−5$）
  - **次数と係数**
    - 次数: かけ合わされている文字の個数（例: $3x^2y$ の次数は $3$）
    - 係数: 文字にかかっている数（例: $3x^2$ の係数は $3$）
    - $x^2$ の係数は $1$、$-y$ の係数は $-1$
    - 数だけの項（定数項）の次数は $0$
  - **多項式の次数**
    - 多項式の次数 = 各項の次数の最大値
    - 例: $3x^2 + 5x - 1$ → 各項の次数は $2$, $1$, $0$ → 多項式の次数は $2$（$2$ 次式）
    - 例: $2a + 3b - 7$ → 各項の次数は $1$, $1$, $0$ → 多項式の次数は $1$（$1$ 次式）
  - **同類項とまとめ方**
    - 同類項: 文字の部分が同じ項（例: $3x$ と $-5x$ は同類項）
    - $3x$ と $3x^2$ は同類項ではない（$x$ と $x^2$ は別物）
    - まとめ方: $ma + na = (m+n)a$（例: $3x + 5x = 8x$）
    - 分数係数も通分してまとめる（例: $\frac{1}{2}a + \frac{1}{3}a = \frac{5}{6}a$）
  - **同類項をまとめる練習のコツ**
    - 手順①: 同類項を見つける（同じ文字の部分をチェック）
    - 手順②: 同類項どうしの係数を足し引きする
    - 手順③: 次数の高い順に並べると見やすい
    - 例: $x^2 + 9x + 3x^2 - 4x = 4x^2 + 5x$

### 多項式の加法・減法（同類項をまとめて計算しよう）

- 出力先: `data/content/math/grade2/1-expressions/polynomial-add-sub.json`
- Web版ソース: `src/data/subjects/math/units/grade2/1-expressions/topics/2-polynomial-add-sub/index.ts`（既存 flashcards 22件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **同類項をまとめる**
    - 同類項の係数どうしを足す（例: 3x + 5x = 8x）
    - 文字の部分が違う項はそのまま残す（例: 3x + 2y はこれ以上まとめられない）
    - 数だけの項（定数項）も同類項どうしでまとめる
  - **かっこの外し方（引き算で符号反転）**
    - かっこの前が「+」→ そのまま外す（例: +(3x - 2) = 3x - 2）
    - かっこの前が「−」→ 全部の項の符号が変わる（例: -(3x - 2) = -3x + 2）
    - 符号を変えたあとで同類項をまとめる
  - **数×多項式（分配法則）**
    - $2(3x + 5y) = 6x + 10y$（各項に $2$ をかける）
    - $-3(2a - 4b) = -6a + 12b$（マイナスをかけると符号が変わる）
    - 分配法則: $m(a + b) = ma + mb$
  - **多項式÷数**
    - $(10x + 6y) \div 2 = 5x + 3y$（各項を $2$ で割る）
    - $(24a - 15b) \div (-3) = -8a + 5b$（負の数で割ると符号が変わる）
    - $\div \frac{1}{5}$ は $\times 5$ と同じ
  - **かっこがある式の計算（混合）**
    - $2(x + y) + 3(x - 2y) = 2x + 2y + 3x - 6y = 5x - 4y$
    - 各かっこに分配法則を適用 → かっこを全部外す → 同類項をまとめる
    - マイナスの係数のかっこは符号の変化に特に注意
  - **分数の形の式の計算**
    - 分母が同じ → 分子をそのまま計算（例: $\frac{3x-y}{2} + \frac{x+y}{2} = \frac{4x}{2} = 2x$）
    - 分母が違う → まず通分してから分子を計算
    - 引き算のときは引く方の分子全体にかっこをつけて符号に注意

### 単項式の乗法・除法（係数と文字を分けて計算）

- 出力先: `data/content/math/grade2/1-expressions/monomial-mul-div.json`
- Web版ソース: `src/data/subjects/math/units/grade2/1-expressions/topics/3-monomial-mul-div/index.ts`（既存 flashcards 32件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **かけ算（指数法則）**
    - 係数どうしをかける（例: 3 × 5 = 15）
    - 同じ文字は指数を足す（例: $x^2 \times x^3 = x^5$）
    - 例: $3x^2 \times 5x^3 = 15x^5$
  - **単項式の累乗**
    - $(ab)^n = a^n b^n$（それぞれの因数を $n$ 乗する）
    - $(-3x)^2 = (-3)^2 \times x^2 = 9x^2$（偶数乗で正）
    - $(-2a)^3 = (-2)^3 \times a^3 = -8a^3$（奇数乗で負）
    - $(-a)^2 = a^2$（正）と $-a^2 = -(a^2)$（負）は全く違う！
  - **割り算（分数にして約分）**
    - 割り算 → 分数の形にする（例: $6x^3 \div 2x = \frac{6x^3}{2x}$）
    - 係数を約分する（例: $\frac{6}{2} = 3$）
    - 同じ文字は指数を引く（例: $\frac{x^3}{x} = x^2$）
  - **分数係数の除法（逆数をかける）**
    - $a \div \frac{b}{c} = a \times \frac{c}{b}$（逆数をかける）
    - 例: $7ab \div \frac{1}{3}a = 7ab \times \frac{3}{a} = 21b$
    - 例: $-\frac{5}{3}x^2 \div \frac{5}{9}x = -\frac{5}{3}x^2 \times \frac{9}{5x} = -3x$
  - **3つの式の乗除**
    - $A \times B \div C = \frac{A \times B}{C}$ の形にまとめる
    - $A \div B \div C = \frac{A}{B \times C}$ の形にまとめる
    - 例: $(-6xy) \times 8x \div (-2y) = \frac{-48x^2y}{-2y} = 24x^2$
  - **よくある間違いパターン**
    - ❌ $x^2 \times x^3 = x^6$ → ⭕ $x^5$（指数は足す、かけない）
    - ❌ $(-3a)^2 = -9a^2$ → ⭕ $9a^2$（偶数乗は正）
    - ❌ $12a^2b \div 4ab = 3a^2$ → ⭕ $3a$（$a^2 \div a = a$）

### 文字式の利用（整数の性質を文字で証明しよう）

- 出力先: `data/content/math/grade2/1-expressions/literal-expressions.json`
- Web版ソース: `src/data/subjects/math/units/grade2/1-expressions/topics/4-literal-expressions/index.ts`（既存 flashcards 40件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **偶数・奇数・連続整数の表し方**
    - 偶数: $2n$（$n$ は整数）、奇数: $2n + 1$
    - 連続する整数: $n, n + 1, n + 2$
    - 連続する偶数: $2n, 2n + 2, 2n + 4$
    - $k$ の倍数: $kn$（$n$ は整数）
  - **証明の手順**
    - ① 仮定: 数を文字で表す（偶数なら $2n$、奇数なら $2n + 1$）
    - ② 計算: 和・差・積などを計算して整理する
    - ③ 結論: 「$k \times$（整数）の形だから $k$ の倍数」のように書く
  - **2けた・3けたの自然数と文字式**
    - 2けた: $10a + b$（$a$ は1〜9、$b$ は0〜9）
    - 位を入れかえた数: $10b + a$
    - 3けた: $100x + 10y + z$
    - 和 $(10a + b) + (10b + a) = 11(a + b)$ → 11の倍数
  - **等式の変形**
    - 目的の文字を左辺に残し、それ以外を移項する
    - 例: $a = b + c$ を $b$ について解く → $b = a - c$
    - 例: $S = \frac{ah}{2}$ を $h$ について解く → 両辺を2倍して $2S = ah$ → $h = \frac{2S}{a}$
    - 分数やかけ算がある場合は、両辺に同じ数をかけてから移項する
  - **公式の等式変形**
    - $V = \pi r^2 h$ → $h = \frac{V}{\pi r^2}$
    - $S = \frac{(a+b)h}{2}$ → $h = \frac{2S}{a+b}$
    - $V = \frac{1}{3}x^2 h$ → $h = \frac{3V}{x^2}$
  - **よくある証明パターンのまとめ**
    - 連続3整数の和 → $3(n+1)$ → 3の倍数
    - 奇数 + 奇数 → $2(m+n+1)$ → 偶数
    - 2けたの数 + 入れかえた数 → $11(a+b)$ → 11の倍数
    - 2けたの数 − 入れかえた数 → $9(a-b)$ → 9の倍数

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

- 全 4 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
