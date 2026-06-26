# 一問一答コンテンツ生成プロンプト — 地理 中1：世界の姿

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **地理 中1 / 世界の姿**（`1-world-shape`）
- 出力先: `data/content/geography/grade1/1-world-shape/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- （この単元のPDFは見当たりません。Web版ソースの解説・既存FC/クイズを主素材にしてください）

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/geography/units/grade1/1-world-shape/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 3 トピック）

### 地球の姿（大陸と大洋・六つの州の区分）

- 出力先: `data/content/geography/grade1/1-world-shape/earth-shape.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/1-world-shape/topics/1-earth-shape/index.ts`（既存 flashcards 28件 / quiz 24件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **陸地と海洋の割合**
    - 陸地：約3割（約29%）、海洋：約7割（約71%）
    - 北半球に陸地が多く、南半球に海洋が多い
    - 地球は「水の惑星」とよばれる
  - **六つの大陸と三つの大洋**
    - 六大陸：ユーラシア・アフリカ・北アメリカ・南アメリカ・オーストラリア・南極
    - 三大洋：太平洋（最大）・大西洋・インド洋
    - ユーラシア大陸が最大、太平洋が最も広い海洋
  - **世界の六つの州**
    - 六つの州：アジア・ヨーロッパ・アフリカ・北アメリカ・南アメリカ・オセアニア
    - アジア州が最も面積が広く、人口も最多
    - 日本はアジア州に属する

### 世界のさまざまな国々（国旗・国境・面積・人口）

- 出力先: `data/content/geography/grade1/1-world-shape/world-countries.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/1-world-shape/topics/2-world-countries/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **国の位置と国旗のデザイン**
    - 国旗には自然・歴史・宗教が反映されている
    - 南十字星（オーストラリア等）、ユニオンジャック（旧イギリス植民地）、三日月と星（イスラム教圏）
    - 国名の由来：アイスランド＝「氷の島」、エクアドル＝「赤道」
  - **国境の引かれ方と面積のちがい**
    - 自然的国境：山脈（ヒマラヤ等）・川（ライン川等）・海
    - 人為的国境：緯線・経線に沿った直線（アフリカに多い）
    - 面積最大はロシア（約1,710万km²）、最小はバチカン市国（約0.44km²）
    - 島国（日本・イギリス等）と内陸国（モンゴル・スイス等）
  - **世界の人口と人口密度**
    - 世界の人口は約80億人以上
    - 人口が多い国：中国・インド（それぞれ約14億人）
    - 人口密度＝人口÷面積（1km²あたりの人数）
    - 人口密度が高い国（バングラデシュ等）と低い国（モンゴル等）

### 地球上の位置と地図（緯度と経度・地球儀と世界地図）

- 出力先: `data/content/geography/grade1/1-world-shape/location-maps.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/1-world-shape/topics/3-location-maps/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **緯度と経度**
    - 緯度：赤道（0度）を基準に北緯・南緯（各90度まで）
    - 経度：本初子午線（0度）を基準に東経・西経（各180度まで）
    - 緯度と経度の組み合わせで地球上のどの地点も表せる
  - **高緯度地域の白夜と極夜**
    - 白夜：夏に太陽が一日中沈まない現象
    - 極夜：冬に太陽が一日中昇らない現象
    - 北極圏（北緯66.6度以北）・南極圏（南緯66.6度以南）で起こる
  - **地球儀と世界地図の特徴**
    - 地球儀：面積・距離・方位・形のすべてを正しく表せる
    - 世界地図：球体を平面にするため、すべてを同時に正しく表せない
    - 目的に応じた図法の選択が重要（メルカトル・モルワイデ・正距方位など）

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
