# 一問一答コンテンツ生成プロンプト — 数学 中3：関数 y=ax²

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **数学 中3 / 関数 y=ax²**（`4-quadratic-functions`）
- 出力先: `data/content/math/grade3/4-quadratic-functions/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/math/units/grade3/4-quadratic-functions/3年数学必修4章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/math/units/grade3/4-quadratic-functions/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 4 トピック）

### y=ax²と放物線（U字型のグラフを描こう）

- 出力先: `data/content/math/grade3/4-quadratic-functions/parabola.json`
- Web版ソース: `src/data/subjects/math/units/grade3/4-quadratic-functions/topics/1-parabola/index.ts`（既存 flashcards 40件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **y=ax²の意味（2乗に比例）**
    - y = ax²（a ≠ 0）の形で、y は x の2乗に比例する
    - x が n 倍になると y は n² 倍になる
    - a が比例定数で、グラフの開き具合を決める
  - **放物線の特徴**
    - a > 0 → 上に開く放物線（U字型）
    - a < 0 → 下に開く放物線（∩字型）
    - |a| が大きいほどグラフは細く、|a| が小さいほど広い
  - **比例定数 a の求め方**
    - y = ax² に既知の (x, y) を代入して a を求める
    - 計算: a = y ÷ x²
    - 1つの点がわかれば比例定数 a が決まる
  - **グラフの対称性と軸**
    - 対称軸は y 軸（x = 0 の直線）
    - 頂点は原点 (0, 0)
    - x と -x で y の値が等しい → 左右対称
  - **放物線の式を求める方法**
    - 通る点 (p, q) → q = ap² で a を求める
    - a の符号でグラフの向きがわかる
    - |a| の大小でグラフの幅がわかる

### 値の変化と変域（x=0をまたぐときに注意）

- 出力先: `data/content/math/grade3/4-quadratic-functions/range.json`
- Web版ソース: `src/data/subjects/math/units/grade3/4-quadratic-functions/topics/2-range/index.ts`（既存 flashcards 31件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **xの増加とyの変化**
    - a > 0: x < 0 で y は減少、x > 0 で y は増加（x = 0 で最小値）
    - a < 0: x < 0 で y は増加、x > 0 で y は減少（x = 0 で最大値）
    - 一次関数と違い、y の変化の仕方が一定でない
  - **変域の求め方（x=0を含む場合の注意）**
    - x の変域が 0 をまたぐ → y の最小値(a>0)または最大値(a<0)は y = 0
    - x の変域の端の値のうち、|x| が大きい方が y の最大値(a>0)を与える
    - 必ず x = 0 を含むかどうかをチェックしよう
  - **増減のまとめ表**
    - a > 0, x < 0 → y は減少 ／ a > 0, x > 0 → y は増加
    - a < 0, x < 0 → y は増加 ／ a < 0, x > 0 → y は減少
    - x = 0 は常に「折り返し点」。a > 0 で最小、a < 0 で最大
  - **変域から a を逆算する方法**
    - x = 0 を含む＋a > 0 → 最大値は |x| が大きい端で y = ax²
    - x = 0 を含む＋a < 0 → 最小値は |x| が大きい端で y = ax²
    - x = 0 を含まない → 端の値を代入して方程式を立てる

### 変化の割合（一次関数との大きな違い）

- 出力先: `data/content/math/grade3/4-quadratic-functions/rate-of-change.json`
- Web版ソース: `src/data/subjects/math/units/grade3/4-quadratic-functions/topics/3-rate-of-change/index.ts`（既存 flashcards 29件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **変化の割合の計算**
    - 変化の割合 = y の増加量 ÷ x の増加量
    - y = ax² では変化の割合 = a(p + q)（x が p から q に変化）
    - 区間によって変化の割合が異なる
  - **公式 a(p + q) の導出**
    - aq² − ap² = a(q + p)(q − p) と因数分解する
    - (q − p) で約分して a(p + q) が得られる
    - 公式を使えば y の値を代入しなくてOK
  - **平均の速さ**
    - 平均の速さ = 移動距離 ÷ 時間 = 変化の割合
    - y = ax² のとき平均の速さ = a(p + q)
    - 時間が経つほど平均の速さが大きくなる（加速する）
  - **一次関数との比較**
    - 一次関数: 変化の割合 = a（常に一定）→ グラフは直線
    - y = ax²: 変化の割合は区間で変わる → グラフは曲線
    - 一次関数は一定の速さで増減、y = ax² は加速・減速する
  - **放物線と直線の交点・面積**
    - 交点: ax² = mx + n を二次方程式として解く
    - △OAB の面積: y 切片で2つの三角形に分割
    - 底辺を y 軸上にとり、高さを各点の |x| にする

### 日常への応用（制動距離・ふりこの長さ）

- 出力先: `data/content/math/grade3/4-quadratic-functions/real-world.json`
- Web版ソース: `src/data/subjects/math/units/grade3/4-quadratic-functions/topics/4-real-world/index.ts`（既存 flashcards 33件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **制動距離（速度の2乗に比例）**
    - 制動距離は速度の2乗に比例: y = av²
    - 速度が2倍 → 制動距離は4倍、速度が3倍 → 9倍
    - 実際の問題では比例定数 a を求めてから計算する
  - **停止距離 = 空走距離 + 制動距離**
    - 空走距離: ブレーキを踏むまでに進む距離（速度に比例）
    - 制動距離: ブレーキが効いてから止まるまで（速度の2乗に比例）
    - 停止距離 = 空走距離 + 制動距離（1次式 + 2次式）
  - **ふりこの長さと周期**
    - ふりこの周期 T 秒の2乗がひもの長さ L cm に比例: T² = aL
    - 長さが4倍 → 周期は2倍（√4 = 2）
    - 長さが9倍 → 周期は3倍（√9 = 3）
  - **図形の重なりと面積変化**
    - 図形の重なりで面積が x² に比例するケースがある
    - 移動距離 x cm のとき面積 y cm² を式で表す
    - 具体的な値から比例定数 a を求めて立式しよう
  - **いろいろな関数（階段状グラフ・水そう）**
    - 階段状グラフ: 料金表など、ある範囲で値が一定になるグラフ
    - 水そうの問題: 底面の形で水面の上昇速度が変わる
    - ボールの斜面実験: 移動距離は時間の2乗に比例

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
