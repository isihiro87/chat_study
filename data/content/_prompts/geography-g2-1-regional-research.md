# 一問一答コンテンツ生成プロンプト — 地理 中2：地域調査の手法

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **地理 中2 / 地域調査の手法**（`1-regional-research`）
- 出力先: `data/content/geography/grade2/1-regional-research/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- （この単元のPDFは見当たりません。Web版ソースの解説・既存FC/クイズを主素材にしてください）

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/geography/units/grade2/1-regional-research/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 3 トピック）

### 地域調査の進め方（調査テーマの設定・仮説と検証・発表）

- 出力先: `data/content/geography/grade2/1-regional-research/research-methods.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/1-regional-research/topics/1-research-methods/index.ts`（既存 flashcards 28件 / quiz 25件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **調査テーマの決め方**
    - 身近な地域を観察して疑問を見つける
    - 具体的でしぼったテーマを設定する
    - 地図を見たり実際に歩いたりしてヒントを得る
  - **仮説を立てて検証する**
    - 仮説は根拠をつけた予想のこと
    - 仮説を立てると調査の方向性が明確になる
    - 調査結果をもとに仮説を検証・修正する
  - **調査結果のまとめと発表**
    - 地図・グラフ・表を使ってわかりやすくまとめる
    - 主題図を作成して地域の特徴を視覚化する
    - 「テーマ → 仮説 → 方法 → 結果 → 考察」の順で発表する

### 地形図の活用（縮尺と距離の計算・等高線・地形図の比較）

- 出力先: `data/content/geography/grade2/1-regional-research/topographic-maps.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/1-regional-research/topics/2-topographic-maps/index.ts`（既存 flashcards 28件 / quiz 15件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **縮尺の理解と距離の計算**
    - 2万5千分の1地形図：地図上1cm = 実際250m
    - 5万分の1地形図：地図上1cm = 実際500m
    - 実際の距離 = 地図上の距離 × 縮尺の分母
  - **等高線の読み取り**
    - 等高線の間隔がせまい＝傾斜がきつい、広い＝ゆるやか
    - 2万5千分の1地形図では10mごとに等高線、50mごとに計曲線
    - 尾根：等高線が低い方に突き出す。谷：等高線が高い方に入り込む
  - **新旧の地形図や空中写真の比較**
    - 「地理院地図」で現在と過去の地形図を閲覧できる
    - 新旧の地形図を比較して土地利用の変化を読み取る
    - 空中写真と地形図の比較で地域の実際の様子を理解する

### 野外調査（フィールドワーク）の手法（ルートマップ・野外観察・聞き取り調査）

- 出力先: `data/content/geography/grade2/1-regional-research/fieldwork.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/1-regional-research/topics/3-fieldwork/index.ts`（既存 flashcards 31件 / quiz 13件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **ルートマップの作成と事前準備**
    - ルートマップに調査経路と観察ポイントを記入する
    - 事前に地図で地域の概要を把握しておく
    - 天候・安全面を考慮し必要な持ち物を準備する
  - **写真撮影やスケッチによる記録**
    - 写真撮影は場所・方角・日時をメモする
    - スケッチは自分が注目した点を強調して記録できる
    - 観察したことはその場でメモをとる
  - **聞き取り調査の実施**
    - 事前に質問項目を準備しておく
    - 調査の目的を伝え、丁寧な言葉づかいでマナーを守る
    - 得られた情報は他の調査結果と合わせて分析する

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
