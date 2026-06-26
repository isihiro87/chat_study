# 一問一答コンテンツ生成プロンプト — 理科 中1：物質の性質と状態変化

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **理科 中1 / 物質の性質と状態変化**（`2-chemistry`）
- 出力先: `data/content/science/grade1/2-chemistry/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/science/units/grade1/2-chemistry/1年理科ワーク2章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/science/units/grade1/2-chemistry/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 4 トピック）

### 身のまわりの物質とその性質（物体と物質・金属と非金属・密度・有機物と無機物）

- 出力先: `data/content/science/grade1/2-chemistry/substance-properties.json`
- Web版ソース: `src/data/subjects/science/units/grade1/2-chemistry/topics/1-substance-properties/index.ts`（既存 flashcards 34件 / quiz 32件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **物体と物質・金属の性質**
    - 物体＝形や用途に注目（例：缶、スプーン）、物質＝材料に注目（例：アルミニウム、鉄）
    - 金属の性質：金属光沢・電気や熱の伝導性・展性・延性
    - 金属以外の物質を非金属という（例：ガラス、プラスチック、木）
  - **密度による物質の区別**
    - 密度（g/cm³）＝ 質量（g）÷ 体積（cm³）
    - 密度は物質ごとに固有の値 → 物質の見分けに使える
    - 水の密度は約1.0g/cm³。水より密度が小さい物質は水に浮く
  - **有機物と無機物**
    - 有機物：炭素をふくみ、燃やすと二酸化炭素が発生する物質
    - 無機物：有機物以外の物質（食塩、鉄、ガラスなど）
    - ガスバーナーの操作手順を正しく覚えることが大切

### 気体の性質（気体の発生と性質・集め方）

- 出力先: `data/content/science/grade1/2-chemistry/gas-properties.json`
- Web版ソース: `src/data/subjects/science/units/grade1/2-chemistry/topics/2-gas-properties/index.ts`（既存 flashcards 31件 / quiz 36件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **身のまわりの気体の性質**
    - 酸素：二酸化マンガン＋うすい過酸化水素水で発生。火のついた線香が激しく燃える
    - 二酸化炭素：石灰石＋うすい塩酸で発生。石灰水が白くにごる
    - 水素：亜鉛＋うすい塩酸で発生。火をつけるとポンと音をたてて燃える
  - **気体の集め方**
    - 水上置換法：水にとけにくい気体向け。純粋に集められる（酸素・水素・窒素）
    - 上方置換法：空気より軽い気体向け（アンモニア・水素）
    - 下方置換法：空気より重い気体向け（二酸化炭素・塩素）
  - **アンモニアの性質と噴水実験**
    - アンモニア：刺激臭・水に非常にとけやすい・アルカリ性・空気より軽い
    - 噴水実験：アンモニアが水にとけて気圧が下がり水が吹き上がる
    - 塩化アンモニウム＋水酸化カルシウムを加熱すると発生

### 水溶液の性質（溶解・質量パーセント濃度・溶解度と再結晶）

- 出力先: `data/content/science/grade1/2-chemistry/solution-properties.json`
- Web版ソース: `src/data/subjects/science/units/grade1/2-chemistry/topics/3-solution-properties/index.ts`（既存 flashcards 23件 / quiz 26件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **物質が水にとけるようす**
    - 溶質（とけている物質）＋ 溶媒（とかしている液体）＝ 溶液
    - 水溶液の特徴：透明・濃さが均一・溶質が沈まない
    - 純物質＝1種類の物質、混合物＝2種類以上の物質が混じったもの
  - **質量パーセント濃度**
    - 質量パーセント濃度（%）＝ 溶質の質量 ÷ 溶液の質量 × 100
    - 溶液の質量 ＝ 溶質の質量 ＋ 溶媒の質量（水の質量）
    - 濃度の計算では「溶液」の質量で割ることに注意
  - **溶解度と再結晶**
    - 溶解度＝水100gにとける物質の最大質量。温度で変化する
    - 溶解度曲線：温度と溶解度の関係をグラフにしたもの
    - 再結晶：飽和水溶液を冷やして結晶をとり出す方法

### 物質の姿と状態変化（状態変化・体積と質量の変化・沸点と融点・蒸留）

- 出力先: `data/content/science/grade1/2-chemistry/state-change.json`
- Web版ソース: `src/data/subjects/science/units/grade1/2-chemistry/topics/4-state-change/index.ts`（既存 flashcards 15件 / quiz 16件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **物質の状態変化**
    - 状態変化：温度によって固体・液体・気体の間で状態が変わること
    - 融解（固→液）、凝固（液→固）、蒸発（液→気）、凝縮（気→液）
    - 状態変化しても物質の種類は変わらない（粒子の運動が変わるだけ）
  - **体積と質量の変化**
    - 状態変化で体積は変わるが、質量は変わらない
    - 一般に固体→液体→気体で体積は増加する（粒子の間隔が広がる）
    - 水は例外：液体→固体で体積が増える（氷が水に浮く理由）
  - **沸点・融点と蒸留**
    - 沸点：液体→気体になる温度。融点：固体→液体になる温度
    - 純粋な物質は状態変化中、温度が一定になる
    - 蒸留：沸点の違いを利用して混合物から物質を分離する方法

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

- 全 4 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
