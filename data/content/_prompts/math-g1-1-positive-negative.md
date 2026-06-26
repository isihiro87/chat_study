# 一問一答コンテンツ生成プロンプト — 数学 中1：正の数・負の数

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **数学 中1 / 正の数・負の数**（`1-positive-negative`）
- 出力先: `data/content/math/grade1/1-positive-negative/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/math/units/grade1/1-positive-negative/1年数学必修1章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/math/units/grade1/1-positive-negative/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 4 トピック）

### 正の数・負の数と絶対値（正負の数の意味と大小を理解しよう）

- 出力先: `data/content/math/grade1/1-positive-negative/meaning.json`
- Web版ソース: `src/data/subjects/math/units/grade1/1-positive-negative/topics/1-meaning/index.ts`（既存 flashcards 43件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **正の数と負の数**
    - 正の数: $0$ より大きい数（例: $+3, +0.5, +\frac{1}{2}$）
    - 負の数: $0$ より小さい数（例: $-2, -0.7, -\frac{3}{4}$）
    - $0$ は正の数でも負の数でもない
  - **整数の分類**
    - 自然数（正の整数）: $1, 2, 3, \ldots$
    - 整数: $\ldots, -2, -1, 0, +1, +2, \ldots$
    - 反対の性質をもつ量を正負で表す（例: $+500$ 円の収入 ↔ $-300$ 円の支出）
  - **絶対値**
    - $+3$ の絶対値は $3$、$-3$ の絶対値も $3$
    - 絶対値は符号を取った数（距離だから必ず $0$ 以上）
    - $0$ の絶対値は $0$
  - **数の大小**
    - 正の数 $> 0 >$ 負の数
    - 負の数どうし: 絶対値が大きいほど小さい（例: $-5 < -2$）
    - 不等号: $-3 < -1 < 0 < 2 < 5$

### 加法と減法（正負の数のたし算・ひき算をマスター）

- 出力先: `data/content/math/grade1/1-positive-negative/add-sub.json`
- Web版ソース: `src/data/subjects/math/units/grade1/1-positive-negative/topics/2-add-sub/index.ts`（既存 flashcards 12件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **同符号の加法**
    - $(+3) + (+5) = +(3 + 5) = +8$
    - $(-3) + (-5) = -(3 + 5) = -8$
    - ルール: 絶対値の和に共通の符号をつける
  - **異符号の加法**
    - $(+7) + (-3) = +(7 - 3) = +4$（$7 > 3$ だから正）
    - $(+3) + (-7) = -(7 - 3) = -4$（$7 > 3$ だから負）
    - ルール: 絶対値の大きい方から小さい方をひき、大きい方の符号をつける
  - **減法（ひき算）→ 加法に変換**
    - $(+5) - (+3) = (+5) + (-3) = +2$
    - $(+5) - (-3) = (+5) + (+3) = +8$
    - $(-2) - (+4) = (-2) + (-4) = -6$
  - **項（こう）**
    - $5 - 3 + 2$ の項は $+5, -3, +2$
    - 加法だけの式: $(+5) + (-3) + (+2)$
    - 項を使うと、正の項と負の項をまとめて計算できる

### 乗法と除法（正負の数のかけ算・わり算のルール）

- 出力先: `data/content/math/grade1/1-positive-negative/mul-div.json`
- Web版ソース: `src/data/subjects/math/units/grade1/1-positive-negative/topics/3-mul-div/index.ts`（既存 flashcards 36件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **乗法の符号のルール**
    - $(+) \times (+) = +$ 、 $(-) \times (-) = +$ → 同符号は正
    - $(+) \times (-) = -$ 、 $(-) \times (+) = -$ → 異符号は負
    - 絶対値どうしをかけて、符号のルールで符号を決める
  - **3つ以上の数の乗法**
    - 負の数が偶数個 → 結果は正（例: $(-2) \times (-3) \times (-1) \times (-4) = +24$）
    - 負の数が奇数個 → 結果は負（例: $(-2) \times (-3) \times (-1) = -6$）
    - $0$ をかけると結果は必ず $0$
  - **逆数と除法**
    - $\frac{2}{3}$ の逆数は $\frac{3}{2}$（分子と分母を入れかえる）
    - $5$ の逆数は $\frac{1}{5}$
    - $a \div b = a \times \frac{1}{b}$（わり算はかけ算に変換）

### いろいろな計算と素因数分解（累乗・四則混合・素因数分解を学ぼう）

- 出力先: `data/content/math/grade1/1-positive-negative/various.json`
- Web版ソース: `src/data/subjects/math/units/grade1/1-positive-negative/topics/4-various/index.ts`（既存 flashcards 36件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **累乗と指数**
    - $3^2 = 3 \times 3 = 9$（$3$ の $2$ 乗）
    - $(-2)^3 = (-2) \times (-2) \times (-2) = -8$（$-2$ の $3$ 乗）
    - $(-2)^2 = 4$ だけど $-2^2 = -4$（かっこの有無に注意！）
  - **四則混合計算の順序**
    - 1. 累乗を先に計算する
    - 2. かっこの中を先に計算する
    - 3. 乗法・除法を先に計算する
    - 4. 最後に加法・減法を計算する
  - **分配法則**
    - $5 \times (3 + 7) = 5 \times 3 + 5 \times 7 = 15 + 35 = 50$
    - $(-4) \times (6 - 2) = (-4) \times 6 + (-4) \times (-2) = -24 + 8 = -16$
    - 逆に共通因数でくくることもできる: $3 \times 8 + 3 \times 2 = 3 \times (8 + 2) = 30$
  - **素数と素因数分解**
    - 素数: $2, 3, 5, 7, 11, 13, \ldots$（$1$ は素数ではない）
    - $12 = 2^2 \times 3$（$12$ の素因数分解）
    - $60 = 2^2 \times 3 \times 5$（$60$ の素因数分解）

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
