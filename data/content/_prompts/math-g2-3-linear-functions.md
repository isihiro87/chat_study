# 一問一答コンテンツ生成プロンプト — 数学 中2：一次関数

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **数学 中2 / 一次関数**（`3-linear-functions`）
- 出力先: `data/content/math/grade2/3-linear-functions/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/math/units/grade2/3-linear-functions/2年数学必修3章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/math/units/grade2/3-linear-functions/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 5 トピック）

### 一次関数の意味（y = ax + b の世界へ）

- 出力先: `data/content/math/grade2/3-linear-functions/meaning.json`
- Web版ソース: `src/data/subjects/math/units/grade2/3-linear-functions/topics/1-meaning/index.ts`（既存 flashcards 32件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **y = ax + b ってなに？**
    - 一次関数の式: y = ax + b（a ≠ 0）
    - a は変化の割合（x が1増えると y が a 増える）
    - b は切片（x = 0 のときの y の値）
  - **変化の割合は一定！**
    - 変化の割合 = y の増加量 ÷ x の増加量 = a（いつでも同じ値）
    - 例: y = 2x + 3 なら、x が1増えるごとに y は2ずつ増える
    - 表を作って確かめると、y の増え方が一定であることがわかる
  - **比例との違い**
    - 比例: y = ax（原点を通る）→ 一次関数の b = 0 の場合
    - 一次関数: y = ax + b（b ≠ 0 なら原点を通らない）
    - 比例は一次関数の仲間（特別な場合）

### グラフの傾きと切片（グラフの読み方・かき方）

- 出力先: `data/content/math/grade2/3-linear-functions/slope-intercept.json`
- Web版ソース: `src/data/subjects/math/units/grade2/3-linear-functions/topics/2-slope-intercept/index.ts`（既存 flashcards 30件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **傾き a の意味**
    - 傾き a > 0 → 右上がりのグラフ（x が増えると y も増える）
    - 傾き a < 0 → 右下がりのグラフ（x が増えると y は減る）
    - |a| が大きいほどグラフは急になる
  - **切片 b の意味とグラフのかき方**
    - 切片 b → y 軸上の点 (0, b) に印をつける
    - 傾き a → 切片から「右に1、上に a」進んだ点をとる（a が負なら下に進む）
    - 2点を結んで直線を引けば完成！
  - **分数の傾きのグラフのかき方**
    - 傾き a/b（既約分数）→ 切片から「右に b、上に a」進む
    - 例: 傾き 2/3 → 右に3、上に2
    - 例: 傾き -3/4 → 右に4、下に3
    - 分母が x の増加分、分子が y の増加分と覚えよう
  - **比例のグラフとの関係（平行移動）**
    - y = ax + b は y = ax を y 軸方向に b だけ平行移動
    - b > 0 なら上に移動、b < 0 なら下に移動
    - 傾きが同じ2つの直線は必ず平行
  - **x の変域と y の変域**
    - 傾き a > 0 のとき: x が最小 → y も最小、x が最大 → y も最大
    - 傾き a < 0 のとき: x が最小 → y は最大、x が最大 → y は最小（逆になる！）
    - x の変域の両端を式に代入して y の値を求め、小さい方から大きい方の順に書く

### 一次関数の式を求める（4つのパターンをマスター）

- 出力先: `data/content/math/grade2/3-linear-functions/find-equation.json`
- Web版ソース: `src/data/subjects/math/units/grade2/3-linear-functions/topics/3-find-equation/index.ts`（既存 flashcards 25件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **パターン①：傾きと切片がわかるとき**
    - 傾き a と切片 b をそのまま y = ax + b に代入するだけ
    - 例: 傾き 3、切片 -2 → y = 3x - 2
    - 問題文の「傾き」「切片」というキーワードに注目しよう
  - **パターン②：傾きと1点の座標がわかるとき**
    - ① 傾き a を y = ax + b に代入 → y = ax + b
    - ② 通る点 (p, q) を代入 → q = ap + b
    - ③ b について解く → b = q - ap
    - 「変化の割合」= 傾き なので、変化の割合が与えられたらそれが a になる
    - 「平行な直線」は傾きが同じ！ y = 3x + 1 に平行 → a = 3
  - **パターン③：2点の座標がわかるとき（傾きから求める）**
    - ① 傾き a = (y₂ - y₁) ÷ (x₂ - x₁) を計算
    - ② 求めた a と、どちらか1点を y = ax + b に代入して b を求める
    - ③ a と b を y = ax + b に当てはめて完成
  - **パターン④：2点の座標がわかるとき（連立方程式を使う）**
    - ① 1つ目の点 (x₁, y₁) を代入 → y₁ = ax₁ + b …式1
    - ② 2つ目の点 (x₂, y₂) を代入 → y₂ = ax₂ + b …式2
    - ③ 式1と式2の連立方程式を加減法で解いて a と b を求める
    - 例: (1, 4) と (3, 10) → a + b = 4, 3a + b = 10 → a = 3, b = 1
    - パターン③と答えは同じ！ やりやすい方を選ぼう

### 方程式とグラフ（2直線の交点＝連立方程式の解）

- 出力先: `data/content/math/grade2/3-linear-functions/equations-and-graphs.json`
- Web版ソース: `src/data/subjects/math/units/grade2/3-linear-functions/topics/4-equations-and-graphs/index.ts`（既存 flashcards 24件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **ax + by = c のグラフ**
    - ax + by = c を y = ○x + △ の形に変形してグラフをかく
    - 例: 2x + y = 6 → y = -2x + 6（傾き -2、切片 6）
    - x の係数と y の係数から傾きと切片が決まる
    - x = 0 と y = 0 を代入して2点を求め、結んでもOK
  - **y = k と x = h のグラフ**
    - y = 3 → y 座標がいつでも 3 の横線
    - x = 2 → x 座標がいつでも 2 の縦線
    - x = h は一次関数ではないけどグラフはかける！
    - 2y - 8 = 0 → y = 4 のように変形してからかく
  - **交点＝連立方程式の解**
    - 2直線の交点 = 2つの方程式を同時に満たす (x, y)
    - 連立方程式を解く ↔ グラフの交点を読み取る（同じこと！）
    - 2直線が平行 → 交点なし → 連立方程式は解なし
  - **直線と図形**
    - 2直線の交点と、各直線の x 切片（または y 切片）が三角形の頂点になる
    - 底辺 × 高さ ÷ 2 で面積を求める
    - 三角形の面積を2等分する直線は、1つの頂点と対辺の中点を通る
    - 中点の公式: ((x1+x2)/2, (y1+y2)/2)

### 一次関数の利用（グラフを読み解く力）

- 出力先: `data/content/math/grade2/3-linear-functions/applications.json`
- Web版ソース: `src/data/subjects/math/units/grade2/3-linear-functions/topics/5-applications/index.ts`（既存 flashcards 22件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **距離・時間・速さのグラフ**
    - グラフの傾き＝速さ（傾きが大きいほど速い）
    - グラフが水平（横に一直線）→ 止まっている
    - 右下がりのグラフ → 引き返している（出発地に戻る方向）
    - 傾きが途中で変わる → 速さが変わった
  - **2人のグラフの読みとり**
    - 2つのグラフの交点 ＝ 2人が出会う（同じ時刻に同じ場所）
    - 交点の x 座標 → 出会う時刻
    - 交点の y 座標 → 出会う場所（出発地からの距離）
    - 2つの式を連立方程式として解けば交点が求まる
  - **水量と一次関数**
    - 水を入れる → 傾きが正（毎分の増加量が傾き）
    - 水を抜く → 傾きが負（毎分の減少量の絶対値が傾き）
    - 最初の水量が切片 b になる
    - y = 0 になるとき → 水そうが空になる時刻
  - **動く点と面積の変化**
    - 点がどの辺にいるかで変域を分ける
    - 各変域で底辺と高さを x の式で表す
    - 面積 = 1/2 × 底辺 × 高さ で y を求める
    - グラフは折れ線になる（変域ごとに傾きが違う）
  - **グラフから式を立てるコツ**
    - グラフの2点を読み取る → 傾きを計算
    - 傾きと通る1点から y = ax + b を求める
    - 変域の境目で値がつながるか確認する
    - 交点は連立方程式を解いて求める

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

- 全 5 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
