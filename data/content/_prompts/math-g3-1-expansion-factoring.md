# 一問一答コンテンツ生成プロンプト — 数学 中3：式の展開と因数分解

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **数学 中3 / 式の展開と因数分解**（`1-expansion-factoring`）
- 出力先: `data/content/math/grade3/1-expansion-factoring/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/math/units/grade3/1-expansion-factoring/3年数学必修1章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/math/units/grade3/1-expansion-factoring/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 6 トピック）

### 式の展開の基本（かっこを外して計算しよう）

- 出力先: `data/content/math/grade3/1-expansion-factoring/expansion-basics.json`
- Web版ソース: `src/data/subjects/math/units/grade3/1-expansion-factoring/topics/1-expansion-basics/index.ts`（既存 flashcards 36件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **多項式×単項式の展開（分配法則）**
    - 分配法則: a(b+c) = ab + ac
    - 例: 3(x+2) = 3x + 6（3をxにも2にもかける）
    - 符号に注意: −2(x−3) = −2x + 6（マイナスどうしの計算に気をつけよう）
  - **多項式×多項式の展開**
    - 公式: (a+b)(c+d) = ac + ad + bc + bd
    - 前のかっこの a を後ろ全体にかけ、次に b を後ろ全体にかける
    - 同類項があればまとめて整理する
  - **多項式÷単項式**
    - (8x²+4x)÷2x → 8x²÷2x + 4x÷2x = 4x + 2
    - 各項ごとに割り算する（分配法則の逆）
    - 符号に注意: (6a²b−12ab²)÷(−3ab) = −2a+4b
  - **異なる文字同士のかっこ×かっこ**
    - (a+2)(b+5) = ab + 5a + 2b + 10
    - 異なる文字では同類項ができにくい → 4項のまま
    - 符号に注意: (a−4)(b+3) = ab + 3a − 4b − 12
  - **同類項のまとめ方のコツ**
    - 同類項 = 文字の部分がまったく同じ項（例: 3xと5x、2x²と−7x²）
    - (x+2)(x+3) = x² + 3x + 2x + 6 → x² + 5x + 6
    - コツ: 展開したら同じ文字の項を探してまとめる。まとめ忘れに注意！

### 乗法の公式（4つの公式で展開を速く）

- 出力先: `data/content/math/grade3/1-expansion-factoring/expansion-formulas.json`
- Web版ソース: `src/data/subjects/math/units/grade3/1-expansion-factoring/topics/2-expansion-formulas/index.ts`（既存 flashcards 33件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **公式1: (x+a)(x+b) の展開**
    - (x+a)(x+b) = x² + (a+b)x + ab
    - 例: (x+3)(x+5) = x² + 8x + 15（足して8、かけて15）
    - x の係数 = a+b、定数項 = a×b と覚えよう
  - **公式2・3: 和と差の2乗**
    - (a+b)² = a² + 2ab + b²（プラスの2乗）
    - (a−b)² = a² − 2ab + b²（マイナスの2乗）
    - 真ん中の項は常に 2ab。符号だけ違う！
  - **公式4: 和と差の積**
    - (a+b)(a−b) = a² − b²
    - +ab と −ab が打ち消し合って消える！
    - 例: (x+3)(x−3) = x² − 9

### 展開の応用（置き換え・式を簡単にする・式のおきかえ）

- 出力先: `data/content/math/grade3/1-expansion-factoring/expansion-advanced.json`
- Web版ソース: `src/data/subjects/math/units/grade3/1-expansion-factoring/topics/3-expansion-advanced/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **置き換えを使った展開**
    - (3x+1)² → a=3x, b=1 とおいて公式2: 9x²+6x+1
    - (4x−1)² → a=4x, b=1 とおいて公式3: 16x²−8x+1
    - (5x−2y)² → a=5x, b=2y: 25x²−20xy+4y²
    - 係数付きのときは (3x)²=9x² のように係数も2乗する！
  - **分数を含む展開**
    - (a−½b)² = a²−ab+¼b²
    - (x+⅓)(x+⅔) → 足して1、かけて2/9
    - 分数の2乗: (½b)² = ¼b²
  - **式を簡単にする**
    - 3(x+4)(x+2)−(x−5)² → 展開してまとめて 2x²+28x−1
    - (x+3)²−(x−3)² = 12x（x²と定数が消える！）
    - マイナスのカッコを外すとき符号が全部変わるのに注意
  - **式のおきかえ**
    - (x+y+4)(x+y+3) → M=x+y → (M+4)(M+3)
    - (a+b−1)² → M=a+b → (M−1)²
    - (2x+y+1)(2x+y−1) → M=2x+y → M²−1

### 因数分解の基本（共通因数をくくり出そう）

- 出力先: `data/content/math/grade3/1-expansion-factoring/factoring-basics.json`
- Web版ソース: `src/data/subjects/math/units/grade3/1-expansion-factoring/topics/3-factoring-basics/index.ts`（既存 flashcards 35件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **因数分解＝展開の逆**
    - 展開: a(b+c) → ab+ac（かっこを外す）
    - 因数分解: ab+ac → a(b+c)（かっこにまとめる）
    - 因数分解は展開の逆の作業！
  - **共通因数のくくり出し**
    - 共通因数: すべての項に共通する因数
    - 例: 6x + 9 → 3(2x+3)（共通因数は3）
    - 例: x²+3x → x(x+3)（共通因数はx）
    - 数と文字の両方をくくり出す: 4x²+8x → 4x(x+2)
  - **和と差の積の因数分解**
    - 公式: a²−b² = (a+b)(a−b)
    - 例: x²−25 = (x+5)(x−5)（x²=a², 25=5²=b²）
    - 例: 4a²−81 = (2a+9)(2a−9)（4a²=(2a)², 81=9²）
    - 引き算の形（○²−△²）を見つけるのがコツ！
  - **平方の公式による因数分解**
    - 公式: a²+2ab+b² = (a+b)²
    - 公式: a²−2ab+b² = (a−b)²
    - 見分け方: 両端が2乗、真ん中がその2倍
    - 例: x²+10x+25 = (x+5)²（5²=25, 2×x×5=10x ✓）
  - **係数付きの因数分解**
    - 例: 9x²+6x+1 → (3x)²+2·3x·1+1² = (3x+1)²
    - 例: 4a²−20ab+25b² → (2a)²−2·2a·5b+(5b)² = (2a−5b)²
    - 手順: ①両端を○²の形に ②真ん中が2×○×△か確認 ③(○±△)²
    - 係数が大きくても落ち着いて2乗を探そう

### 公式を使った因数分解（かけて○足して△の数を探そう）

- 出力先: `data/content/math/grade3/1-expansion-factoring/factoring-formulas.json`
- Web版ソース: `src/data/subjects/math/units/grade3/1-expansion-factoring/topics/4-factoring-formulas/index.ts`（既存 flashcards 30件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **x²+(a+b)x+ab の因数分解**
    - x²+(a+b)x+ab = (x+a)(x+b)
    - コツ: かけて定数項、足して x の係数になる2つの数を探す
    - 例: x²+7x+12 → かけて12、足して7 → 3と4 → (x+3)(x+4)
  - **2乗の公式を使った因数分解**
    - a²+2ab+b² = (a+b)²
    - a²−2ab+b² = (a−b)²
    - a²−b² = (a+b)(a−b)
  - **因数分解の公式選択フロー**
    - 2項（a²−b²の形）→ 和と差の積 (a+b)(a−b)
    - 3項で完全平方 → (a+b)² または (a−b)²
    - 3項でそれ以外 → かけて○足して△で (x+a)(x+b)
    - 共通因数があれば先にくくり出す！
  - **共通因数くくり出し→公式（2段階因数分解）**
    - 例: 3x²+9x+6 → 3(x²+3x+2) → 3(x+1)(x+2)
    - 例: ax²−8ax+16a → a(x²−8x+16) → a(x−4)²
    - 共通因数を見落とさないことが大切！
  - **置き換えを使った因数分解**
    - 例: (x+2)²+5(x+2)+6 → M=x+2 とおくと M²+5M+6=(M+2)(M+3) → (x+4)(x+5)
    - グループ分け: ax−ay+bx−by → a(x−y)+b(x−y) → (a+b)(x−y)
    - 置き換えた後は必ずもとの式に戻す！

### 式の計算の利用（整数の性質の証明と計算の工夫）

- 出力先: `data/content/math/grade3/1-expansion-factoring/calculation-applications.json`
- Web版ソース: `src/data/subjects/math/units/grade3/1-expansion-factoring/topics/5-calculation-applications/index.ts`（既存 flashcards 24件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **整数の性質の証明**
    - 連続する2つの整数: n, n+1
    - 連続する2つの奇数: 2n-1, 2n+1
    - 連続する2つの偶数: 2n, 2n+2
    - 「○の倍数」を示すには ○×(整数) の形にまとめる
  - **因数分解を利用した数の計算**
    - 35²−25² = (35+25)(35−25) = 60×10 = 600
    - 51×49 = (50+1)(50−1) = 50²−1² = 2499
    - 数をきりのいい数±小さい数と考えるのがコツ
  - **展開の公式を利用した数の計算**
    - 101² = (100+1)² = 10000+200+1 = 10201
    - 98² = (100−2)² = 10000−400+4 = 9604
    - 10.3×9.7 = (10+0.3)(10−0.3) = 100−0.09 = 99.91
  - **式の値の計算**
    - x=96のとき x²+8x+16 → (x+4)² = 100² = 10000
    - (x+3)(x−6)−x(x−5) → 展開して −3x−18 にしてから代入
    - x²−y² → (x+y)(x−y) にしてから代入
  - **図形の性質の証明**
    - 道の面積 S = 幅m × 真ん中の線の長さℓ
    - 大きい長方形の面積−小さい長方形の面積で道の面積を求める
    - 展開して整理 → 因数分解で美しい公式にまとめる

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

- 全 6 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
