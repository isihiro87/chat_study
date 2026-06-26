# 一問一答コンテンツ生成プロンプト — 理科 中2：気象のしくみと天気の変化

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **理科 中2 / 気象のしくみと天気の変化**（`3-weather`）
- 出力先: `data/content/science/grade2/3-weather/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/science/units/grade2/3-weather/2年理科ワーク3章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/science/units/grade2/3-weather/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 8 トピック）

### 気象の観測と圧力（天気の記号・乾湿計・圧力の計算）

- 出力先: `data/content/science/grade2/3-weather/weather-observation.json`
- Web版ソース: `src/data/subjects/science/units/grade2/3-weather/topics/1-weather-observation/index.ts`（既存 flashcards 18件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **気象観測**
    - 天気は雲量で判断：0〜1＝快晴、2〜8＝晴れ、9〜10＝くもり
    - 天気図では天気を記号で表す（○＝快晴、◎＝晴れ、●＝くもりなど）
    - 乾湿計：乾球温度計と湿球温度計の示度の差から湿度を求める
  - **圧力**
    - 圧力＝力〔N〕÷ 面積〔m²〕
    - 単位：Pa（パスカル）＝ N/m²
    - 同じ力でも面積が小さいほど圧力は大きくなる

### 大気圧と天気図（大気圧・等圧線・高低気圧・風向風力）

- 出力先: `data/content/science/grade2/3-weather/pressure-atmosphere.json`
- Web版ソース: `src/data/subjects/science/units/grade2/3-weather/topics/2-pressure-atmosphere/index.ts`（既存 flashcards 20件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **大気圧（気圧）**
    - 大気圧＝上空の空気の重さによる圧力
    - あらゆる向きにはたらく（上下左右すべて）
    - 標高が高いほど大気圧は低くなる
    - 海面上の標準気圧：約1013hPa
  - **等圧線と天気図**
    - 等圧線：同時刻の気圧が等しい地点を結んだ線
    - 1000hPaを基準に4hPaごとに引く
    - 等圧線の間隔がせまい → 風が強い
    - 高気圧→下降気流→晴れ、低気圧→上昇気流→くもり・雨
  - **風向・風力と天気図記号**
    - 風向＝風が吹いてくる方向（16方位で表す）
    - 矢羽根の数＝風力
    - 天気記号：○快晴、◎晴れ、●くもり
    - 高気圧→時計回りに吹き出す、低気圧→反時計回りに吹き込む（北半球）

### 等圧線と風（等圧線・高気圧と低気圧・風の吹き方）

- 出力先: `data/content/science/grade2/3-weather/isobars-wind.json`
- Web版ソース: `src/data/subjects/science/units/grade2/3-weather/topics/3-isobars-wind/index.ts`（既存 flashcards 18件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **等圧線と風**
    - 等圧線：天気図上で気圧の等しい地点を結んだ線
    - 風：空気が高気圧から低気圧へ移動する現象
    - 等圧線の間隔が狭い → 気圧差が大きい → 風が強い
  - **高気圧と低気圧**
    - 高気圧：下降気流 → 地表で時計回りに吹き出す → 天気がよい
    - 低気圧：上昇気流 → 地表で反時計回りに吹き込む → 天気がくずれやすい
    - 上昇気流で空気が冷やされると雲ができる

### 水蒸気と湿度（飽和水蒸気量・露点・湿度の計算）

- 出力先: `data/content/science/grade2/3-weather/humidity-dewpoint.json`
- Web版ソース: `src/data/subjects/science/units/grade2/3-weather/topics/4-humidity-dewpoint/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **水蒸気と湿度**
    - 飽和水蒸気量：空気1m³中に含める水蒸気の最大量（g/m³）。気温が高いほど大きい
    - 露点：水蒸気が凝結し始める温度
    - 湿度（%）＝ 実際の水蒸気量 ÷ 飽和水蒸気量 × 100

### 雲のでき方（雲の発生・水の循環・上昇気流）

- 出力先: `data/content/science/grade2/3-weather/cloud-formation.json`
- Web版ソース: `src/data/subjects/science/units/grade2/3-weather/topics/5-cloud-formation/index.ts`（既存 flashcards 18件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **雲の発生と水の循環**
    - 空気が上昇→気圧低下→膨張→温度低下→露点に達すると水滴・氷の粒ができる
    - 水滴や氷の粒が集まったものが雲
    - 地球の水は蒸発と降水で絶えず循環している

### 気団と前線（寒冷前線・温暖前線・温帯低気圧）

- 出力先: `data/content/science/grade2/3-weather/fronts.json`
- Web版ソース: `src/data/subjects/science/units/grade2/3-weather/topics/6-fronts/index.ts`（既存 flashcards 24件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **気団と前線**
    - 気団：気温・湿度がほぼ一様な空気の塊
    - 前線面：異なる気団の境界面
    - 前線：前線面と地表面の交わる線
    - 暖気は密度が小さいため、寒気の上に乗り上げる
  - **前線の種類と天気の変化**
    - 寒冷前線：寒気が暖気の下に潜り込む→積乱雲→短時間の強い雨→通過後は北寄りの風で気温急低下
    - 温暖前線：暖気が寒気の上を這い上がる→乱層雲・高層雲→広範囲の弱い長雨→通過後は南寄りの風で気温上昇
    - 閉そく前線・停滞前線もある
    - 温帯低気圧には南東に温暖前線、南西に寒冷前線が伴う

### 大気の動き（偏西風・季節風・海陸風・気団）

- 出力先: `data/content/science/grade2/3-weather/atmospheric-circulation.json`
- Web版ソース: `src/data/subjects/science/units/grade2/3-weather/topics/7-atmospheric-circulation/index.ts`（既存 flashcards 21件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **地球規模の大気の循環**
    - 赤道と極の温度差が大気循環の原動力
    - 中緯度帯では偏西風が西から東へ吹く
    - 日本の天気が西から東へ変わるのは偏西風の影響
  - **季節風と海陸風**
    - 大陸は温まりやすく冷めやすい、海洋は温まりにくく冷めにくい
    - 季節風：夏は海洋→大陸、冬は大陸→海洋に吹く
    - 海陸風：昼は海風（海→陸）、夜は陸風（陸→海）

### 日本の四季の天気（西高東低・梅雨・台風・気象災害）

- 出力先: `data/content/science/grade2/3-weather/japan-seasons.json`
- Web版ソース: `src/data/subjects/science/units/grade2/3-weather/topics/8-japan-seasons/index.ts`（既存 flashcards 21件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **日本の四季の天気**
    - 冬：西高東低の気圧配置、シベリア高気圧、日本海側は大雪・太平洋側は乾燥した晴れ
    - 夏：太平洋高気圧に覆われ、南東の季節風、高温多湿
    - 春・秋：移動性高気圧と低気圧が交互に通過、天気が周期的に変化
    - 梅雨・秋雨：停滞前線が日本付近に停滞
    - 台風：熱帯低気圧が発達（最大風速17m/s以上）
  - **天気の予測と災害**
    - 数値予報：コンピュータで大気の状態をシミュレーション
    - ハザードマップ：災害の危険がある地域を示した地図
    - 特別警報：重大な災害が予想されるときに発表される

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

- 全 8 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
