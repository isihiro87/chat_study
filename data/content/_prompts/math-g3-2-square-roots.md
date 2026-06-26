# 一問一答コンテンツ生成プロンプト — 数学 中3：平方根

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **数学 中3 / 平方根**（`2-square-roots`）
- 出力先: `data/content/math/grade3/2-square-roots/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/math/units/grade3/2-square-roots/3年数学必修2章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/math/units/grade3/2-square-roots/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 4 トピック）

### 平方根の意味と大小（√の世界への入り口）

- 出力先: `data/content/math/grade3/2-square-roots/meaning.json`
- Web版ソース: `src/data/subjects/math/units/grade3/2-square-roots/topics/1-meaning/index.ts`（既存 flashcards 43件 / quiz 49件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **平方根の意味**
    - 平方根: 2乗するとaになる数のこと
    - 9の平方根は ±3（3² = 9、(−3)² = 9）
    - √9 = 3（正の平方根）、−√9 = −3（負の平方根）
  - **有理数と無理数**
    - 有理数: 分数で表せる数（整数・有限小数・循環小数）
    - 無理数: 分数で表せない数（√2 = 1.41421356...）
    - √4 = 2、√9 = 3 など、きれいな整数になるものもある
  - **平方根の値（近似値）**
    - √2 = 1.414…（ひとよひとよにひとみごろ）
    - √3 = 1.732…（ひとなみにおごれや）
    - √5 = 2.236…（ふじさんろく）
  - **有限小数と循環小数**
    - 有限小数: 割り切れる小数（例: 5/8 = 0.625）
    - 循環小数: くり返す小数（例: 1/3 = 0.333...）
    - 有限小数・循環小数は有理数、無限に不規則な小数は無理数
  - **近似値と有効数字**
    - 誤差 = 近似値 − 真の値
    - 有効数字: 意味のある数字の桁数
    - 例: 4507m を有効数字3けたで → 4.51 × 10³ m

### 根号の乗法・除法（√の中身どうしを計算）

- 出力先: `data/content/math/grade3/2-square-roots/mul-div.json`
- Web版ソース: `src/data/subjects/math/units/grade3/2-square-roots/topics/2-mul-div/index.ts`（既存 flashcards 35件 / quiz 58件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **√a × √b = √(ab) の計算**
    - 乗法: √a × √b = √(ab)
    - 除法: √a ÷ √b = √(a/b)
    - 例: √2 × √3 = √6、√10 ÷ √2 = √5
  - **√の中を小さくする（素因数分解）**
    - √12 = √(4×3) = 2√3（4 = 2² を外に出す）
    - √48 = √(16×3) = 4√3（16 = 4² を外に出す）
    - ルートの中は「素因数分解」で整理する
  - **a√b ⇔ √c の変形**
    - $a\sqrt{b} = \sqrt{a^2 b}$（外の数を2乗して中に入れる）
    - $\sqrt{c} = a\sqrt{b}$（中から整数の2乗を取り出す）
    - 例: $3\sqrt{5} = \sqrt{45}$、$4\sqrt{3} = \sqrt{48}$
  - **√をふくむ式の値**
    - $\sqrt{200} = 10\sqrt{2}$（$\sqrt{2}$ の形に変形）
    - $\sqrt{75} = 5\sqrt{3}$（$\sqrt{3}$ の形に変形）
    - 与えられた近似値が使えるよう $\sqrt{2}$・$\sqrt{3}$・$\sqrt{5}$ の形にそろえる

### 分母の有理化（分母の√をなくそう）

- 出力先: `data/content/math/grade3/2-square-roots/rationalization.json`
- Web版ソース: `src/data/subjects/math/units/grade3/2-square-roots/topics/3-rationalization/index.ts`（既存 flashcards 39件 / quiz 67件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **有理化の方法**
    - 有理化: 分母の√をなくすこと
    - 1/√a → (1×√a)/(√a×√a) = √a/a
    - 例: 1/√2 = √2/2、3/√5 = 3√5/5
  - **計算練習のポイント**
    - 分母分子に「同じ√」をかけるのがコツ
    - √a × √a = a（ルートが消える！）
    - 約分できるときは最後に約分する
  - **先に簡単にしてから有理化**
    - $\sqrt{8} = 2\sqrt{2}$ など、まず分母を簡単にする
    - 例: $\frac{4}{\sqrt{8}} = \frac{4}{2\sqrt{2}} = \frac{2}{\sqrt{2}} = \sqrt{2}$
    - 分母に係数が出たら分子と約分できることが多い
  - **√をふくむ式の値**
    - 先に有理化してから数値を代入する
    - 例: $\frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$。√3 = 1.732 を代入すると $\frac{1.732}{3} = 0.577$
    - 分母に√があると割り算がむずかしいので必ず有理化する

### 根号の和差と展開（同じ√はまとめられる）

- 出力先: `data/content/math/grade3/2-square-roots/add-expand.json`
- Web版ソース: `src/data/subjects/math/units/grade3/2-square-roots/topics/4-add-expand/index.ts`（既存 flashcards 40件 / quiz 59件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **根号の和差（同類項的に扱う）**
    - 同じ√はまとめられる: 3√2 + 5√2 = 8√2
    - 違う√はまとめられない: √2 + √3 はこのまま
    - √の中を簡単にしてからまとめる: √8 + √2 = 2√2 + √2 = 3√2
  - **展開公式の適用**
    - (√a + b)(√a − b) = a − b²（和と差の積）
    - (√a + b)² = a + 2b√a + b²（完全平方）
    - 展開後にルートが消えることもある！
  - **分配法則と根号**
    - √a(√b + √c) = √(ab) + √(ac) と展開する
    - 展開後は √ の中を素因数分解して簡単にする
    - √2 × √6 = √12 = 2√3 のように計算できる
  - **いろいろな展開公式**
    - (√a + b)² = a + 2b√a + b²
    - (√a − b)² = a − 2b√a + b²
    - (√a)² = a（ルートと2乗は打ち消し合う）
  - **式の値と平方根の利用**
    - 式を因数分解してから代入すると計算が楽になる
    - x = √5 + 1 のとき x − 1 = √5 と変形して使う
    - 有理化で分母のルートを消してから計算することも

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
