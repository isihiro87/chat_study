# 一問一答コンテンツ生成プロンプト — 数学 中1：変化と対応

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **数学 中1 / 変化と対応**（`4-functions`）
- 出力先: `data/content/math/grade1/4-functions/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/math/units/grade1/4-functions/topics/1年数学必修4章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/math/units/grade1/4-functions/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 3 トピック）

### 比例（y=axの世界を理解しよう）

- 出力先: `data/content/math/grade1/4-functions/proportion.json`
- Web版ソース: `src/data/subjects/math/units/grade1/4-functions/topics/1-proportion/index.ts`（既存 flashcards 43件 / quiz 25件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **関数とは？**
    - $x$ の値を決めると $y$ の値がただ1つ決まる関係を「関数」という
    - 変数: いろいろな値をとる文字（$x$, $y$）
    - 変域: 変数のとりうる値の範囲
  - **比例の式 y=ax**
    - 比例の式: $y = ax$（$a$ は比例定数、$a \neq 0$）
    - $x$ が $n$ 倍 → $y$ も $n$ 倍になる
    - $\frac{y}{x} = a$（$y$ を $x$ で割ると常に一定）
  - **座標とグラフ**
    - 座標平面: $x$ 軸（横）と $y$ 軸（縦）で位置を表す
    - 原点 $O$: 2つの軸の交点 $(0, 0)$
    - 比例のグラフ: 原点を通る直線
    - $a > 0$ → 右上がり、$a < 0$ → 右下がり

### 反比例（y=a/xの双曲線）

- 出力先: `data/content/math/grade1/4-functions/inverse.json`
- Web版ソース: `src/data/subjects/math/units/grade1/4-functions/topics/2-inverse/index.ts`（既存 flashcards 45件 / quiz 24件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **反比例の式 y=a/x**
    - 反比例の式: $y = \frac{a}{x}$（$a \neq 0$）
    - $xy = a$（$x$ と $y$ の積が常に一定）
    - $x$ が2倍 → $y$ は $\frac{1}{2}$ 倍になる
  - **反比例の特徴**
    - $x$ が $n$ 倍 → $y$ は $\frac{1}{n}$ 倍
    - $x \times y = a$（積が一定）で判別できる
    - $x = 0$ は代入できない（$0$ で割れない）
  - **反比例のグラフ（双曲線）**
    - 双曲線: なめらかな2つの曲線で構成
    - 座標軸（$x$ 軸・$y$ 軸）とは交わらない
    - $a > 0$: 右上・左下の領域に曲線
    - $a < 0$: 左上・右下の領域に曲線

### 比例・反比例の利用（グラフを使って問題を解こう）

- 出力先: `data/content/math/grade1/4-functions/graphs.json`
- Web版ソース: `src/data/subjects/math/units/grade1/4-functions/topics/3-graphs/index.ts`（既存 flashcards 41件 / quiz 25件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **グラフからの情報読み取り**
    - グラフ上の点の座標 $(x, y)$ を正確に読み取る
    - 通る点から比例定数 $a$ を求められる
    - 2つのグラフの交点を読み取って連立的に解ける
  - **比例の利用**
    - 速さ一定のとき: 道のり $=$ 速さ $\times$ 時間（比例）
    - 単価一定のとき: 代金 $=$ 単価 $\times$ 個数（比例）
    - 表やグラフから式を立てて問題を解く
  - **反比例の利用**
    - 面積一定: 縦 $\times$ 横 $=$ 一定（反比例）
    - 歯車: 歯数 $\times$ 回転数 $=$ 一定（反比例）
    - 仕事量一定: 人数 $\times$ 日数 $=$ 一定（反比例）
  - **日常の問題解決への応用**
    - まず表を作って $x$ と $y$ の関係を整理する
    - $\frac{y}{x}$ が一定 → 比例、$xy$ が一定 → 反比例
    - グラフを使って途中の値を予測できる

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
