# 一問一答コンテンツ生成プロンプト — 理科 中2：化学変化と原子・分子

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **理科 中2 / 化学変化と原子・分子**（`1-chemical-change`）
- 出力先: `data/content/science/grade2/1-chemical-change/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/science/units/grade2/1-chemical-change/2年理科ワーク1章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/science/units/grade2/1-chemical-change/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 5 トピック）

### 物質のなり立ち（分解・原子・元素記号・分子・化学式）

- 出力先: `data/content/science/grade2/1-chemical-change/matter-composition.json`
- Web版ソース: `src/data/subjects/science/units/grade2/1-chemical-change/topics/1-matter-composition/index.ts`（既存 flashcards 60件 / quiz 36件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **分解（化学変化）**
    - 熱分解：炭酸水素ナトリウム → 炭酸ナトリウム + 水 + 二酸化炭素
    - 熱分解：酸化銀 → 銀 + 酸素
    - 電気分解：水 → 水素（陰極）+ 酸素（陽極）、体積比2:1
  - **原子と元素**
    - 原子の性質：それ以上分割できない、他の原子に変わらない、なくならない
    - 元素記号：1文字目は大文字、2文字目は小文字（例：Cu, Fe, Na）
    - 周期表：性質の似た元素を整理して並べた表
  - **分子と化学式**
    - 分子をつくる物質：水素（H₂）、酸素（O₂）、水（H₂O）、二酸化炭素（CO₂）
    - 分子をつくらない物質：銅（Cu）、鉄（Fe）、塩化ナトリウム（NaCl）
    - 純粋な物質 = 単体（1種類の元素）+ 化合物（2種類以上の元素）
    - 混合物：2種類以上の物質が混じり合ったもの（例：食塩水、空気）

### 物質どうしの化学変化（化合・化合物の性質・化学反応式）

- 出力先: `data/content/science/grade2/1-chemical-change/chemical-combination.json`
- Web版ソース: `src/data/subjects/science/units/grade2/1-chemical-change/topics/2-chemical-combination/index.ts`（既存 flashcards 46件 / quiz 32件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **化合（異なる物質の結びつき）**
    - 鉄 + 硫黄 → 硫化鉄（Fe + S → FeS）：熱と光を出して激しく反応
    - 銅 + 硫黄 → 硫化銅（Cu + S → CuS）
    - 水素 + 酸素 → 水（2H₂ + O₂ → 2H₂O）
    - 炭素 + 酸素 → 二酸化炭素（C + O₂ → CO₂）
  - **化合物の性質**
    - 鉄：磁石につく、塩酸で水素が発生
    - 硫化鉄：磁石につかない、塩酸で硫化水素（卵の腐った臭い）が発生
    - 化合物の性質は、もとの物質の性質とは異なる
  - **化学反応式**
    - 手順：日本語 → 化学式に置きかえ → 係数をつけて原子の数を合わせる
    - 例：2H₂ + O₂ → 2H₂O（水素の燃焼）
    - 例：Fe + S → FeS（鉄と硫黄の化合）
    - 左辺と右辺で各原子の数が等しくなるのがルール

### 酸素がかかわる化学変化（酸化・燃焼・還元）

- 出力先: `data/content/science/grade2/1-chemical-change/oxidation-reduction.json`
- Web版ソース: `src/data/subjects/science/units/grade2/1-chemical-change/topics/3-oxidation-reduction/index.ts`（既存 flashcards 47件 / quiz 32件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **酸化と燃焼**
    - 酸化：物質が酸素と結びつく化学変化。できた物質 = 酸化物
    - 燃焼：熱や光を出す激しい酸化
    - 金属の酸化：2Cu + O₂ → 2CuO、2Mg + O₂ → 2MgO
    - 有機物の燃焼：炭素と水素が酸化 → CO₂ + H₂O
  - **還元**
    - 還元：酸化物から酸素がうばわれる化学変化
    - 2CuO + C → 2Cu + CO₂（CuOは還元、Cは酸化）
    - 酸化と還元は常に同時に起こる
    - 応用：鉄鉱石（酸化鉄）から鉄を取り出す製鉄

### 化学変化と物質の質量（質量保存の法則・質量比）

- 出力先: `data/content/science/grade2/1-chemical-change/mass-conservation.json`
- Web版ソース: `src/data/subjects/science/units/grade2/1-chemical-change/topics/4-mass-conservation/index.ts`（既存 flashcards 42件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **質量保存の法則**
    - 化学変化の前後で物質全体の質量は変わらない
    - 原子が新しくできたり、なくなったりしないから
    - 密閉容器なら気体が発生する反応でも質量は保存される
    - 物理変化（溶解・状態変化）でも質量は保存される
  - **化学変化する物質どうしの質量の比**
    - 銅:酸素 = 4:1（銅4gに酸素1gが結びつく）
    - マグネシウム:酸素 = 3:2（Mg3gに酸素2gが結びつく）
    - 質量比は常に一定（物質の量に関係なく同じ比）
    - 余った物質はそのまま残る

### 化学変化とその利用（発熱反応・吸熱反応・化学エネルギー）

- 出力先: `data/content/science/grade2/1-chemical-change/chemical-energy.json`
- Web版ソース: `src/data/subjects/science/units/grade2/1-chemical-change/topics/5-chemical-energy/index.ts`（既存 flashcards 44件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **発熱反応と吸熱反応**
    - 発熱反応：鉄粉の酸化（化学かいろ）、ガスの燃焼、中和反応
    - 吸熱反応：水酸化バリウム+塩化アンモニウム、炭酸水素ナトリウム+クエン酸
    - 化学エネルギー：物質がもっているエネルギー
  - **生活や社会での化学変化の利用**
    - 化学かいろ：鉄粉の酸化による発熱反応
    - 燃焼によるエネルギー利用：メタン、プロパン、ガソリン
    - 胃薬：炭酸水素ナトリウム（重そう）で胃酸を中和
    - 漂白剤：過酸化水素水の分解による漂白作用
    - 銅のさび（緑青）：金属内部を保護する

## 理科固有のルール（README の共通ルールに追加）

- 重要用語・現象・実験器具・法則・観察結果を網羅的にカード/クイズ化する。
- 計算系（密度・濃度・湿度・圧力・オームの法則・仕事・速さ・力 など）は**計算問題も4択に含める**。選択肢は単位・有効桁・数式表記を揃える。
- グラフ・実験装置の図に依存する問題は、必要な数値・条件を問題文に明記してテキストだけで解ける形にする。
- 難読漢字・化学物質名にはルビ `{漢字|よみ}` を付ける。

## 進め方

1. `data/content/_prompts/README.md`・`docs/content-analysis/science.md`・`docs/content-quality-standards.md` を読む。
2. 教材PDFを `Read`（大きければ `pages` 指定）。各トピックの Web版ソース `index.ts` の `content`（explanation / 既存 flashcards / quiz）も読む。
3. トピックごとに `flashcards` と `quiz.questions` を生成し、該当 JSON を `Write` で更新（1ファイルずつ）。
4. 難易度配分（basic40/standard40/advanced20）と **正答位置 `correctIndex` の均等分散**を自己チェック。
5. 検証: `npx tsx scripts/sync-content.ts --dry-run --only=science/**`。

## 完了の目安

- 全 5 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
