# 一問一答コンテンツ生成プロンプト — 地理 中1：日本の姿

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **地理 中1 / 日本の姿**（`2-japan-shape`）
- 出力先: `data/content/geography/grade1/2-japan-shape/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- （この単元のPDFは見当たりません。Web版ソースの解説・既存FC/クイズを主素材にしてください）

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/geography/units/grade1/2-japan-shape/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 4 トピック）

### 世界の中での日本の位置（緯度・経度で見る日本の位置）

- 出力先: `data/content/geography/grade1/2-japan-shape/japan-position.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/2-japan-shape/topics/1-japan-position/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **緯度・経度から見た日本の位置**
    - 北緯約20度〜約46度、東経約123度〜約154度に位置
    - 標準時子午線は東経135度（兵庫県明石市）
    - 北半球の中緯度に位置し、四季がはっきりしている
  - **大陸や海洋との位置関係**
    - ユーラシア大陸の東側に位置する島国
    - 太平洋の北西部にあたる
    - 周囲を日本海・太平洋・オホーツク海・東シナ海に囲まれている
  - **同じ緯度・経度の国々との比較**
    - 同緯度にカイロ・ワシントンD.C.・上海などがある
    - 島国のため同緯度の大陸内部より温暖で降水量が多い
    - 東側に位置するためヨーロッパやアメリカより早く朝を迎える

### 時差から見た日本の位置（標準時子午線・時差の計算・日付変更線）

- 出力先: `data/content/geography/grade1/2-japan-shape/time-difference.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/2-japan-shape/topics/2-time-difference/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **経度と時差のしくみ**
    - 地球は24時間で360度回転 → 経度15度で1時間の時差
    - 経度0度の本初子午線（ロンドン）が基準
    - 東へ行くほど時刻が進み、西へ行くほど遅れる
  - **日本の標準時子午線**
    - 日本の標準時子午線：東経135度（兵庫県明石市など）
    - 日本とイギリスの時差：9時間（日本が進んでいる）
    - 日本は全国で1つの標準時を使用
  - **日付変更線の役割**
    - 日付変更線：太平洋上のほぼ経度180度の線
    - 西→東へ越えると1日戻す、東→西で1日進める
    - 日本は日付変更線の西側 → 世界でも早く新しい1日を迎える

### 日本の領域の特色と領土問題（領土・領海・排他的経済水域・北方領土・竹島・尖閣諸島）

- 出力先: `data/content/geography/grade1/2-japan-shape/territory.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/2-japan-shape/topics/3-territory/index.ts`（既存 flashcards 28件 / quiz 26件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **日本の領域（領土・領海・領空）**
    - 領土：約38万km²（約6,800の島々からなる島国）
    - 領海：沿岸から12海里（約22km）の範囲
    - 領空：領土と領海の上空
  - **排他的経済水域と離島の重要性**
    - 排他的経済水域（EEZ）：沿岸から200海里（約370km）の範囲
    - 日本のEEZは領土面積の約12倍（世界第6位）
    - 沖ノ鳥島（最南端）・南鳥島（最東端）がEEZ確保に重要
  - **日本の領土問題**
    - 北方領土（択捉島・国後島・色丹島・歯舞群島）：日本固有の領土、ロシアが占拠
    - 竹島（島根県）：日本固有の領土、韓国が占拠
    - 尖閣諸島（沖縄県）：日本が有効に支配、周辺に地下資源の可能性

### 日本の都道府県と地域区分（47都道府県・7地方区分・県庁所在地）

- 出力先: `data/content/geography/grade1/2-japan-shape/prefectures.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/2-japan-shape/topics/4-prefectures/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **廃藩置県と47都道府県のなりたち**
    - 1871年の廃藩置県で藩が廃止され、府・県が置かれた
    - 現在は1都1道2府43県の47都道府県
    - 県境は山脈・河川などの自然地形や旧藩の領域がもとになっている
  - **7地方区分**
    - 7地方区分：北海道・東北・関東・中部・近畿・中国四国・九州
    - 地理的な位置や歴史的なまとまりで区分されている
    - 中部地方は9県で最も県の数が多い
  - **県庁所在地**
    - 県庁所在地は都道府県庁が置かれている都市
    - 県名と県庁所在地名が異なる県が18ある
    - 代表例：宮城県→仙台市、栃木県→宇都宮市、愛知県→名古屋市、兵庫県→神戸市

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

- 全 4 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
