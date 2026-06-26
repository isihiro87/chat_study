# 一問一答コンテンツ生成プロンプト — 数学 中2：連立方程式

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **数学 中2 / 連立方程式**（`2-simultaneous-equations`）
- 出力先: `data/content/math/grade2/2-simultaneous-equations/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/math/units/grade2/2-simultaneous-equations/2年数学必修2章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/math/units/grade2/2-simultaneous-equations/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 6 トピック）

### 連立方程式の基本（2つの式で2つの未知数を求める）

- 出力先: `data/content/math/grade2/2-simultaneous-equations/basics.json`
- Web版ソース: `src/data/subjects/math/units/grade2/2-simultaneous-equations/topics/1-basics/index.ts`（既存 flashcards 33件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **二元一次方程式って？**
    - 二元一次方程式: $x$ と $y$ の2つの文字をふくむ一次方程式
    - 「二元」＝未知数が2つ、「元」＝未知数
    - $x^2$ や $xy$ があると一次方程式ではない
  - **二元一次方程式の解**
    - 解は $(x, y)$ の組で表す
    - 例: $x + y = 5$ の解は $(1, 4)$, $(2, 3)$, $(3, 2)$ など無限にある
    - 1つの二元一次方程式だけでは解が定まらない
  - **連立方程式とは**
    - 連立方程式: 2つの式を組み合わせたもの
    - 解: 2つの式を同時に満たす $x$, $y$ の値の組
    - 2つの式があれば、解は通常1つに決まる
  - **表を使って解を見つけよう**
    - 片方の式の解を表にまとめる
    - もう片方の式も満たす組を探す
    - 両方の表で一致する $(x, y)$ が連立方程式の解
  - **解の確かめ方**
    - 求めた値を2つの式の両方に代入する
    - 両方の式で等式が成り立てば解
    - 片方だけ成り立ってもダメ！両方とも成り立つ必要がある

### 加減法（式を足したり引いたりして解こう）

- 出力先: `data/content/math/grade2/2-simultaneous-equations/elimination.json`
- Web版ソース: `src/data/subjects/math/units/grade2/2-simultaneous-equations/topics/2-elimination/index.ts`（既存 flashcards 17件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **加減法とは？**
    - 2つの式を足すか引くかして、1つの文字を消す（消去する）方法
    - 消去した後は、残った1つの文字だけの方程式を解く
    - 求まった値をもとの式に代入して、もう1つの文字を求める
  - **符号が逆のとき → 足す**
    - 例: $x + y = 7$ と $x - y = 3$ → 足すと $y$ が消えて $2x = 10$
    - $+3y$ と $-3y$ のように絶対値が同じで符号が逆 → 足す
    - 足した後、残った文字の方程式を解く
  - **符号が同じとき → 引く**
    - 例: $3x + 2y = 16$ と $x + 2y = 10$ → ①−②で $y$ が消えて $2x = 6$
    - 引くとき、引かれる式の**すべての項の符号が変わる**ことに注意
    - 左辺だけでなく右辺も必ず引く
  - **片方の式を定数倍して係数をそろえる**
    - 例: $2x + 3y = 16$ と $x + y = 6$ → ②を$2$倍して $2x + 2y = 12$ にする
    - ①−② で $y = 4$ が求まる
    - 何倍するかは「消したい文字の係数の比」で決める
  - **両方の式を定数倍して係数をそろえる**
    - 例: $2x + 3y = 12$ と $3x + 2y = 13$
    - $x$ を消すなら: ①×$3$、②×$2$ → $6x + 9y = 36$、$6x + 4y = 26$
    - 引くと $5y = 10$、$y = 2$ が求まる
    - 係数の最小公倍数を考えると計算がシンプルになる

### 代入法（一方の式をもう一方に代入）

- 出力先: `data/content/math/grade2/2-simultaneous-equations/substitution.json`
- Web版ソース: `src/data/subjects/math/units/grade2/2-simultaneous-equations/topics/3-substitution/index.ts`（既存 flashcards 32件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **代入法とは**
    - 代入法: 一方の式をもう一方に代入して、1つの文字だけの式にする方法
    - 「代入」=「入れかえ」。$y$ のところに式をそのまま入れる
    - 加減法と同じく、目的は「文字を1つ消す」こと
  - **$y = \circ\circ$ の形がある場合**
    - $y = 2x$, $x + y = 9$ → ②の $y$ に $2x$ を代入: $x + 2x = 9$
    - $x = \circ\circ$ の形でも同じ要領でもう一方に代入できる
    - 代入するときは式全体にかっこをつけよう（符号ミス防止）
  - **式を変形してから代入する場合**
    - $x + y = 5 \rightarrow y = 5 - x$ のように、係数1の文字について解く
    - 変形した式をもう一方に代入して、1つの文字の方程式にする
    - 例: $y = 5 - x$ を $3x + 2y = 13$ に代入 → $3x + 2(5 - x) = 13$
  - **代入後のかっこの展開**
    - $3x + 2(5 - x) = 13 \rightarrow 3x + 10 - 2x = 13 \rightarrow x = 3$
    - $2(y + 1) + y = 8 \rightarrow 2y + 2 + y = 8 \rightarrow 3y = 6$
    - 代入する式はかっこで囲む！ $-2y$ のとき $-2(x - 3)$ と書く
  - **加減法と代入法の使い分け**
    - $y = \circ\circ$ や $x = \circ\circ$ の形がある → 代入法が便利
    - 同じ文字の係数がそろっている → 加減法が便利
    - 係数が1の文字があれば、変形してから代入法も使える

### いろいろな連立方程式（分数・小数・かっこ付き・A=B=C・解と文字の値）

- 出力先: `data/content/math/grade2/2-simultaneous-equations/various.json`
- Web版ソース: `src/data/subjects/math/units/grade2/2-simultaneous-equations/topics/4-various/index.ts`（既存 flashcards 23件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **かっこがある連立方程式**
    - かっこを展開（分配法則）→ 同類項をまとめる → $ax + by = c$ の形に整理
    - 例: $2(x + 3) + y = 11$ → $2x + 6 + y = 11$ → $2x + y = 5$
    - 両辺にかっこがある場合も同様に展開: $5(x-1) = 3(y+1)$ → $5x - 3y = 8$
    - 移項するときは符号の変化に注意！
  - **係数に分数がある連立方程式**
    - 分母の最小公倍数を両辺にかけて分数をはらう
    - 例: $\frac{x}{2} + \frac{y}{3} = 5$ → 分母 $2, 3$ のLCMは $6$ → $3x + 2y = 30$
    - $\frac{x-1}{3} + \frac{y}{2} = 2$ のように分子にかっこがある場合、LCMをかけた後に展開して整理
    - 分数をはらってから加減法 or 代入法で解く
  - **係数に小数がある連立方程式**
    - 小数第1位まで → $10$ 倍（例: $0.2x + 0.3y = 1.3$ → $2x + 3y = 13$）
    - 小数第2位まで → $100$ 倍（例: $0.02x + 0.05y = 0.16$ → $2x + 5y = 16$）
    - $10$ 倍した後、さらに共通因数で割れる場合は割って簡単にする
    - 例: $1.2x - 0.3y = 0.9$ → $12x - 3y = 9$ → $4x - y = 3$
  - **A = B = C の形の方程式**
    - $A = B = C$ → $\begin{cases} A = B \\ B = C \end{cases}$ または $\begin{cases} A = B \\ A = C \end{cases}$ に分ける
    - 右辺が定数のとき（$A = B = 7$ など）はそれぞれ独立に解ける
    - 例: $x + y = 2x - 1 = 5$ → $\begin{cases} x + y = 5 \\ 2x - 1 = 5 \end{cases}$
    - 3つの式から2つ選ぶので、計算しやすい組み合わせを選ぼう
  - **連立方程式の解と文字の値**
    - 解を両方の式に代入 → $a, b$ についての連立方程式ができる
    - 例: $ax + 2y = 7$ に $x=1, y=2$ を代入 → $a + 4 = 7$ → $a = 3$
    - $a, b$ が両方の式に混ざっている場合は、$a, b$ の連立方程式を解く
    - 求めた $a, b$ を元の式に戻して検算しよう
  - **整理のポイントまとめ**
    - かっこ → 展開して整理
    - 分数 → 分母のLCMをかけて整数化
    - 小数 → $10$倍・$100$倍して整数化
    - $A = B = C$ → 2つの式に分ける
    - 解と文字 → 解を代入して逆算

### 連立方程式の利用（文章題を式に変えよう）

- 出力先: `data/content/math/grade2/2-simultaneous-equations/applications.json`
- Web版ソース: `src/data/subjects/math/units/grade2/2-simultaneous-equations/topics/5-applications/index.ts`（既存 flashcards 29件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **文章題の解き方—立式の手順**
    - 求めたいものを $x$, $y$ とおく
    - 問題文から 2 つの等しい関係を見つける
    - 連立方程式を解き、代入法か加減法を使う
    - 答えが問題の条件に合っているか必ず確認する
  - **数量・代金の問題**
    - 個数の合計 → $x + y = (合計)$
    - 金額の合計 → $(単価_1)x + (単価_2)y = (合計金額)$
    - 係数が大きいときは両辺を割って簡単にする
    - 2 けたの数の問題は $10x + y$ と表す
  - **割合の問題**
    - $A$ の $p$% $= A \times \dfrac{p}{100}$
    - 小数の式は 10 倍・100 倍して整数にする
    - 「全体の人数」と「割合から求めた人数」で 2 式
    - 分数にして通分する方法でもOK
  - **割合の増減の問題**
    - $p$% 増 → 元 $\times (1 + \dfrac{p}{100})$
    - $p$% 減 → 元 $\times (1 - \dfrac{p}{100})$
    - 20% 引き → $0.8$ 倍、30% 引き → $0.7$ 倍
    - 「定価の合計」と「割引後の合計」で 2 式を立てる
  - **よくあるミスと注意点**
    - $x$, $y$ が何を表すか必ず書く
    - 割合は $\dfrac{p}{100}$ を忘れずに掛ける
    - 小数の式は 10 倍・100 倍して整数にする
    - 解いた後は元の問題文に代入して確認

### 速さ・濃度の文章題（速さ・時間・距離と食塩水の問題）

- 出力先: `data/content/math/grade2/2-simultaneous-equations/applications-advanced.json`
- Web版ソース: `src/data/subjects/math/units/grade2/2-simultaneous-equations/topics/6-applications-advanced/index.ts`（既存 flashcards 26件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **速さ・時間・距離の問題**
    - 距離 $=$ 速さ $\times$ 時間
    - 時間 $=$ $\dfrac{\text{距離}}{\text{速さ}}$
    - 行き帰りは距離が等しい → 式が 1 つできる
    - 合計時間や合計距離でもう 1 式
  - **分数を含む速さの問題**
    - 分数は分母の最小公倍数を掛けて整数にする
    - 単位をそろえる（km と m、時間と分）
    - 距離を $x$, $y$ にするか、時間にするかは問題次第
    - 分速 $\times$ 分 $=$ m、時速 $\times$ 時間 $=$ km
  - **食塩水の濃度の問題**
    - 食塩の量 $=$ 食塩水 $\times$ $\dfrac{\text{濃度(%)}}{100}$
    - 混ぜる前の食塩の合計 $=$ 混ぜた後の食塩の量
    - 食塩水の量の合計でもう 1 式
    - 小数は 100 倍して整数にすると計算しやすい
  - **よくあるミスと注意点**
    - 単位をそろえる（分→時間は $\div 60$）
    - 濃度は $\dfrac{p}{100}$ を忘れずに掛ける
    - 分数は最小公倍数を掛けて整数にしてから計算
    - 解いた後は元の問題文に代入して確認

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
