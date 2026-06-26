# 一問一答コンテンツ生成プロンプト — 数学 中3：二次方程式

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **数学 中3 / 二次方程式**（`3-quadratic-equations`）
- 出力先: `data/content/math/grade3/3-quadratic-equations/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/math/units/grade3/3-quadratic-equations/3年数学必修3章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/math/units/grade3/3-quadratic-equations/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 4 トピック）

### 二次方程式の基本（x²の方程式、解が2つ）

- 出力先: `data/content/math/grade3/3-quadratic-equations/basics.json`
- Web版ソース: `src/data/subjects/math/units/grade3/3-quadratic-equations/topics/1-basics/index.ts`（既存 flashcards 35件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **二次方程式とは（ax²+bx+c=0）**
    - 二次方程式の標準形: ax² + bx + c = 0（aは0でない）
    - 例: x² − 5x + 6 = 0、2x² + 3x − 1 = 0
    - 「二次」= xの最高次数が2であること
  - **解が2つある理由（x²=9 → x=±3）**
    - x² = k（k>0）のとき、x = ±√k で解が2つ
    - 例: x² = 9 → x = ±3（3²=9、(−3)²=9）
    - x² = 0 のときは x = 0（解が1つ）、x² = −1 は解なし
  - **ax² = b 型の解き方**
    - ax² = b → x² = b/a → x = ±√(b/a)
    - 例: 2x² − 18 = 0 → 2x² = 18 → x² = 9 → x = ±3
    - 4x² = 1 → x² = 1/4 → x = ±1/2（分数も出るよ）
  - **(x+m)² = n 型の解き方**
    - (x+m)² = n → x+m = ±√n → x = −m ± √n
    - 例: (x−3)² = 5 → x−3 = ±√5 → x = 3 ± √5
    - 例: (x+2)² = 9 → x+2 = ±3 → x = 1 または x = −5
  - **解の個数のまとめ**
    - k > 0 → 解は2つ（x = ±√k）
    - k = 0 → 解は1つ（x = 0）
    - k < 0 → 解なし（2乗して負にはならない）

### 因数分解で解く（A×B=0ならA=0またはB=0）

- 出力先: `data/content/math/grade3/3-quadratic-equations/factoring.json`
- Web版ソース: `src/data/subjects/math/units/grade3/3-quadratic-equations/topics/2-factoring/index.ts`（既存 flashcards 34件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **A×B=0の原則**
    - A × B = 0 ならば A = 0 または B = 0
    - (x−2)(x−3) = 0 なら x−2 = 0 または x−3 = 0
    - 答え: x = 2 または x = 3
  - **因数分解して解く手順**
    - 手順①: 右辺を0にする（移項して整理）
    - 手順②: 左辺を因数分解する
    - 手順③: 各因数 = 0 として x の値を求める
  - **完全平方式と差の平方**
    - x²−a² = 0 → (x+a)(x−a) = 0 → x = ±a
    - x²−2ax+a² = 0 → (x−a)² = 0 → x = a
    - x²+2ax+a² = 0 → (x+a)² = 0 → x = −a
  - **係数をそろえてから因数分解**
    - 例: −x²+5x−6=0 → 両辺に−1をかけて x²−5x+6=0
    - 例: 2x²−10x+12=0 → 両辺を2で割って x²−5x+6=0
    - 例: −4x²+8x−4=0 → −4で割って x²−2x+1=0
  - **展開→整理→因数分解**
    - (x−3)(x−4)=2 → x²−7x+12=2 → x²−7x+10=0 → (x−2)(x−5)=0
    - 右辺が0でないと A×B=0 の原則が使えない！
    - 必ず右辺を0にしてから因数分解すること

### 平方完成と解の公式（どんな二次方程式でもOK）

- 出力先: `data/content/math/grade3/3-quadratic-equations/formula.json`
- Web版ソース: `src/data/subjects/math/units/grade3/3-quadratic-equations/topics/3-formula/index.ts`（既存 flashcards 22件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **平方完成（(x+m)²=nの形にする）**
    - x² + bx = (x + b/2)² − (b/2)²
    - 例: x² + 6x = (x+3)² − 9
    - (x+m)² = n の形にすれば x+m = ±√n で解ける
  - **平方完成で二次方程式を解く手順**
    - Step1: x² + px = −q（定数項を移項）
    - Step2: (x + p/2)² = (p/2)² − q（平方完成）
    - Step3: x + p/2 = ±√((p/2)² − q)（平方根をとる）
  - **解の公式 x = (−b±√(b²−4ac)) / 2a**
    - 解の公式: x = (−b ± √(b²−4ac)) / 2a
    - b²−4ac（判別式）が正なら解2つ、0なら解1つ、負なら解なし
    - どんな二次方程式でもこの公式で解ける！
  - **判別式 b²−4ac と解の個数**
    - b²−4ac > 0 → 異なる2つの実数解
    - b²−4ac = 0 → 解は1つだけ
    - b²−4ac < 0 → 実数解なし
    - 解が1つだけのとき x = −b / 2a
  - **解の公式の使い方のコツ**
    - b が負のとき −b は正になる（符号ミスに注意）
    - c が負のとき −4ac は正になる
    - √の中身は素因数分解して簡単にする（√12 = 2√3）
    - 分子・分母を約分できるか最後に確認

### 二次方程式の利用（文章題と図形の問題）

- 出力先: `data/content/math/grade3/3-quadratic-equations/applications.json`
- Web版ソース: `src/data/subjects/math/units/grade3/3-quadratic-equations/topics/4-applications/index.ts`（既存 flashcards 24件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **文章題の解き方（3ステップ）**
    - 求めるものを $x$ と置く
    - 問題文の条件から方程式を立てる
    - 解を求めたら、問題の条件に合うか吟味する
  - **数の問題（連続する整数）**
    - 連続する整数 → $n, n+1$ と置く
    - 連続する3つの整数 → $n-1, n, n+1$（真ん中を $n$）
    - 正の整数や自然数の条件を忘れずに吟味
  - **図形の面積・道幅の問題**
    - 辺の長さや動いた距離を $x$ と置く
    - 面積の公式（長方形、三角形など）を使って式を立てる
    - 道幅の問題は「道を端に寄せて」残りを長方形で計算
  - **容積の問題（厚紙から箱を作る）**
    - 底面の1辺 $= (\text{元の辺}) - 2x$
    - 高さ $= x$（切り取った正方形の1辺）
    - $0 < x < \dfrac{\text{短い辺}}{2}$ の範囲に注意
  - **動く点の問題**
    - 速さ $\times$ 時間 $=$ 距離で点の位置を式に
    - 三角形の面積 $= \dfrac{1}{2} \times$ 底辺 $\times$ 高さ
    - $x$ の範囲内の解だけが答え（両方OKの場合もある）

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
