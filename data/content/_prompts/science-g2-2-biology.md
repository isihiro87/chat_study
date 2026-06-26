# 一問一答コンテンツ生成プロンプト — 理科 中2：生物の体のつくりとはたらき

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **理科 中2 / 生物の体のつくりとはたらき**（`2-biology`）
- 出力先: `data/content/science/grade2/2-biology/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/science/units/grade2/2-biology/2年理科ワーク2章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/science/units/grade2/2-biology/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 6 トピック）

### 生物と細胞（植物細胞・動物細胞・単細胞生物と多細胞生物）

- 出力先: `data/content/science/grade2/2-biology/cells.json`
- Web版ソース: `src/data/subjects/science/units/grade2/2-biology/topics/1-cells/index.ts`（既存 flashcards 43件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **植物の細胞と動物の細胞**
    - 共通のつくり：細胞膜、細胞質、核
    - 核は酢酸オルセイン・酢酸カーミンで赤く染まる
    - 植物細胞だけにあるもの：細胞壁、葉緑体、液胞
  - **単細胞生物と多細胞生物**
    - 単細胞生物：1つの細胞ですべての生命活動を行う（例：ゾウリムシ、ミカヅキモ）
    - 多細胞生物：多くの細胞が集まってできている
    - 多細胞生物の体の階層：細胞 → 組織 → 器官 → 個体
  - **細胞の呼吸**
    - 細胞の呼吸：酸素を使い養分を分解してエネルギーを取り出す
    - 細胞の呼吸で二酸化炭素が放出される
    - すべての生物の細胞で常に行われている

### 光合成と呼吸（光合成・気孔・蒸散・植物の呼吸）

- 出力先: `data/content/science/grade2/2-biology/plant-photosynthesis.json`
- Web版ソース: `src/data/subjects/science/units/grade2/2-biology/topics/2-plant-photosynthesis/index.ts`（既存 flashcards 37件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **葉と光合成**
    - 光合成：光＋二酸化炭素＋水 → デンプン（養分）＋酸素
    - 光合成は葉緑体で行われる
    - デンプンの確認：ヨウ素液が青紫色に変化
  - **気孔と蒸散**
    - 気孔：2つの孔辺細胞に囲まれたすきま（CO₂の取り込み口）
    - 蒸散：気孔から水蒸気が出ていくこと（葉の裏側で盛ん）
    - 蒸散が主な原動力となって根からの吸水が起こる
  - **植物の呼吸と光合成の関係**
    - 植物の呼吸：酸素を取り入れ、二酸化炭素を放出（常に行う）
    - 昼：光合成 ＞ 呼吸 → 見かけ上は酸素のみ放出
    - 夜：呼吸のみ → 二酸化炭素を放出

### 動物のからだのつくりとはたらき（消化・吸収・呼吸・血液循環・排出）

- 出力先: `data/content/science/grade2/2-biology/animal-body.json`
- Web版ソース: `src/data/subjects/science/units/grade2/2-biology/topics/3-animal-body/index.ts`（既存 flashcards 48件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **消化のしくみ**
    - 消化管：口→食道→胃→小腸→大腸→肛門
    - アミラーゼ（だ液）：デンプン→麦芽糖
    - ペプシン（胃液）・トリプシン（すい液）：タンパク質→アミノ酸
    - 胆汁：肝臓で作られ消化酵素を含まないが、リパーゼを助ける
    - リパーゼ（すい液）：脂肪→脂肪酸＋モノグリセリド
  - **吸収のしくみ**
    - 小腸の柔毛：表面積を大きくして効率よく吸収
    - ブドウ糖・アミノ酸 → 毛細血管 → 肝臓
    - 脂肪酸・モノグリセリド → 再び脂肪 → リンパ管
  - **呼吸と血液の循環**
    - 肺胞：表面積が大きく、効率よく気体交換（O₂取込み・CO₂放出）
    - 心臓：右心房・右心室・左心房・左心室の4つの部屋
    - 体循環：心臓→全身→心臓 / 肺循環：心臓→肺→心臓
  - **血液の成分と排出**
    - 赤血球（ヘモグロビン）：O₂を運ぶ / 白血球：細菌を分解 / 血小板：止血
    - 血しょう：液体成分。養分・不要物を運ぶ。一部が組織液になる
    - 肝臓：アンモニア→尿素（無害化）
    - 腎臓：血液から不要物をこし出して尿を作る

### 水と養分の通り道（維管束・道管・師管・蒸散の実験）

- 出力先: `data/content/science/grade2/2-biology/plant-transport.json`
- Web版ソース: `src/data/subjects/science/units/grade2/2-biology/topics/3-plant-transport/index.ts`（既存 flashcards 41件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **水の通り道（維管束）**
    - 道管：根から吸収した水・肥料分の通り道
    - 師管：葉で作られた養分の通り道
    - 維管束：道管と師管の集まり（単子葉類＝散らばる、双子葉類＝輪の形）
    - 根毛：根の表面にあり、表面積を広げて吸水効率を上げる

### 感覚器官（目・耳・鼻・皮膚・舌のつくりとはたらき）

- 出力先: `data/content/science/grade2/2-biology/sensory-organs.json`
- Web版ソース: `src/data/subjects/science/units/grade2/2-biology/topics/5-sensory-organs/index.ts`（既存 flashcards 43件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **刺激の受けとり**
    - 感覚器官：目、耳、鼻、皮膚、舌の5つ
    - 目の網膜、耳のうずまき管が刺激を受けとる
    - 受けとった刺激は感覚神経で信号として伝わる

### 神経と運動（神経系・反射・骨と筋肉）

- 出力先: `data/content/science/grade2/2-biology/nerves-muscles.json`
- Web版ソース: `src/data/subjects/science/units/grade2/2-biology/topics/6-nerves-muscles/index.ts`（既存 flashcards 45件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **神経のはたらき**
    - 中枢神経：脳（判断・命令）＋せきずい（中継）
    - 末しょう神経：感覚神経（刺激を伝える）＋運動神経（命令を伝える）
    - 意識的反応：感覚器官→感覚神経→せきずい→脳→せきずい→運動神経→運動器官
  - **反射**
    - 反射：意識とは無関係に起こる決まった反応
    - 反射の経路：感覚器官→感覚神経→せきずい→運動神経→運動器官（脳を経由しない）
    - 反射が速い理由：脳を経由しないため信号の伝達距離が短い
  - **骨と筋肉のはたらき**
    - 筋肉の両端はけんになっている
    - 関節をまたいで骨についている
    - 一方の筋肉が縮む→もう一方が伸びる＝曲げ伸ばしのしくみ

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

- 全 6 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
