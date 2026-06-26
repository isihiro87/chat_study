# 一問一答コンテンツ生成プロンプト — 地理 中1：人々の生活と環境

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **地理 中1 / 人々の生活と環境**（`3-life-environment`）
- 出力先: `data/content/geography/grade1/3-life-environment/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- （この単元のPDFは見当たりません。Web版ソースの解説・既存FC/クイズを主素材にしてください）

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/geography/units/grade1/3-life-environment/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 3 トピック）

### 世界の気候と人々の暮らし（寒帯・亜寒帯・温帯・乾燥帯・熱帯・高山の暮らし）

- 出力先: `data/content/geography/grade1/3-life-environment/climate-life.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/3-life-environment/topics/1-climate-life/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **寒帯・亜寒帯の暮らし**
    - 寒帯：イヌイットが狩猟生活。毛皮の衣服やイグルー
    - 亜寒帯：シベリアに針葉樹林（タイガ）と永久凍土が広がる
    - 亜寒帯では高床の家や二重窓など防寒の工夫がある
  - **温帯・乾燥帯の暮らし**
    - 温帯：四季があり、地中海沿岸では石造りの家でオリーブやぶどうを栽培
    - 乾燥帯：オアシスの水を利用した農業や遊牧が中心
    - 乾燥帯では日干しれんがの家。砂漠化が課題
  - **熱帯・高山地域の暮らし**
    - 熱帯：一年中高温多雨。サモアでは風通しのよい家。熱帯雨林やサンゴ礁
    - 高山地域：アンデス山脈でリャマやアルパカの放牧
    - 高山地域ではポンチョを着用し、じゃがいもを栽培

### 世界の気候区の分類（五つの気候帯とさらに細かい気候区）

- 出力先: `data/content/geography/grade1/3-life-environment/climate-zones.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/3-life-environment/topics/2-climate-zones/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **五つの気候帯**
    - 五つの気候帯：熱帯・乾燥帯・温帯・亜寒帯（冷帯）・寒帯
    - 緯度が高くなるほど気温が低くなる傾向がある
    - 標高の高い地域には高山気候が見られる
  - **熱帯・乾燥帯・温帯の気候区**
    - 熱帯：熱帯雨林気候（一年中高温多雨）とサバナ気候（雨季・乾季がある）
    - 乾燥帯：砂漠気候（ほとんど雨なし）とステップ気候（わずかに降雨）
    - 温帯：温暖湿潤気候（日本）・西岸海洋性気候・地中海性気候
  - **亜寒帯・寒帯・高山気候**
    - 亜寒帯（冷帯）：夏冬の気温差が大きく、タイガ（針葉樹林）が広がる
    - 寒帯：ツンドラ気候（コケ類・永久凍土）と氷雪気候（一年中氷雪）
    - 高山気候：標高100mごとに約0.6℃気温が下がる

### 多様な生活・文化と宗教（住居・衣服・食文化とキリスト教・イスラーム・仏教・ヒンドゥー教）

- 出力先: `data/content/geography/grade1/3-life-environment/culture-religion.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/3-life-environment/topics/3-culture-religion/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **気候や環境に合わせた衣食住の工夫**
    - 熱帯：高床式住居（風通し）、乾燥帯：日干しれんがの厚い壁
    - 乾燥帯の衣服：全身を覆う長い衣服、寒帯：毛皮の防寒着
    - アジア：米、ヨーロッパ・西アジア：パン・ナン、草原地帯：乳製品・肉
  - **生活のグローバル化**
    - ファストフード・ジーンズなど共通の生活文化が世界に広がる
    - インターネット・スマートフォンの普及がグローバル化を加速
    - 伝統文化の保存・継承と、グローバル化のバランスが大切
  - **世界の宗教と生活への影響**
    - 世界三大宗教：キリスト教・イスラーム（イスラム教）・仏教
    - イスラーム：ハラール食品・一日五回の礼拝・ラマダーンの断食
    - ヒンドゥー教：牛肉を食べない（牛は神聖な動物）

## 地理固有のルール（README の共通ルールに追加）

- **クイズは短答型（一問一答）を主体**。答えが1語・1値で定まる問題を優先。説明的・列挙的な回答は原則除外。
- 4択の**地名の粒度（国名／地域名／大陸名）を統一**。並列構造の有無も揃え、正答だけ複数地域を含む形にしない。
- 統計値は解説に出典の年・機関の趣旨を添える（不明なら概数・順位を問う形に）。
- 難読地名・用語にはルビ `{漢字|よみ}` を付ける。

## 進め方

1. `data/content/_prompts/README.md`・`docs/content-analysis/geography.md`・`docs/content-quality-standards.md` を読む。
2. 教材PDFを `Read`（大きければ `pages` 指定）。各トピックの Web版ソース `index.ts` の `content`（explanation / 既存 flashcards / quiz）も読む。
3. トピックごとに `flashcards` と `quiz.questions` を生成し、該当 JSON を `Write` で更新（1ファイルずつ）。
4. 難易度配分（basic40/standard40/advanced20）と **正答位置 `correctIndex` の均等分散**を自己チェック。
5. 検証: `npx tsx scripts/sync-content.ts --dry-run --only=geography/**`。

## 完了の目安

- 全 3 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
