# 一問一答コンテンツ生成プロンプト — 理科 中2：電流とその利用

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **理科 中2 / 電流とその利用**（`4-electricity`）
- 出力先: `data/content/science/grade2/4-electricity/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/science/units/grade2/4-electricity/2年理科ワーク4章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/science/units/grade2/4-electricity/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 7 トピック）

### 静電気と放電（帯電・放電・真空放電）

- 出力先: `data/content/science/grade2/4-electricity/static-electricity.json`
- Web版ソース: `src/data/subjects/science/units/grade2/4-electricity/topics/1-static-electricity/index.ts`（既存 flashcards 32件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **静電気と帯電**
    - 異なる物質をこすり合わせると電子が移動して帯電する
    - 電気には＋と−の2種類がある
    - 同じ種類の電気どうしは反発し合い、異なる種類の電気どうしは引き合う
  - **放電と真空放電**
    - 放電：たまった電気が空間を移動する現象（雷など）
    - 真空放電：気圧を低くした空間で起こる放電
    - 蛍光灯やネオンサインは真空放電を利用している

### 陰極線と電子・放射線（クルックス管・電流の正体・放射線）

- 出力先: `data/content/science/grade2/4-electricity/cathode-electron.json`
- Web版ソース: `src/data/subjects/science/units/grade2/4-electricity/topics/2-cathode-electron/index.ts`（既存 flashcards 8件 / quiz 6件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **陰極線と電子、電流の正体**
    - クルックス管で−極から＋極へ向かう粒子の流れ＝陰極線（電子線）
    - 陰極線の正体は電子（−の電気をもつ非常に小さな粒子）
    - 電流の正体＝導線中を電子が−極→＋極へ移動すること
    - 電流の向きは歴史的に＋→−とされている（電子の移動と逆向き）
  - **放射線の性質と利用**
    - 放射線：X線・α線・β線・γ線などの総称
    - 放射性物質：放射線を出す物質（ウラン・ラジウムなど）
    - 透過性：放射線が物質を通り抜ける性質（種類により異なる）
    - 医療（レントゲン）や工業など幅広く利用されている

### 回路と電流・電圧（直列・並列回路の電流と電圧）

- 出力先: `data/content/science/grade2/4-electricity/circuit-ohm.json`
- Web版ソース: `src/data/subjects/science/units/grade2/4-electricity/topics/2-circuit-ohm/index.ts`（既存 flashcards 34件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **回路の基本**
    - 回路図は電気用図記号を使って表す
    - 直列回路：電流の通り道が一本道
    - 並列回路：電流の通り道が途中で枝分かれする
  - **電流と電圧の測定・規則性**
    - 電流計は直列、電圧計は並列につなぐ。最大の端子からつなぐ
    - 直列回路：I＝I₁＝I₂、V＝V₁＋V₂
    - 並列回路：I＝I₁＋I₂、V＝V₁＝V₂

### 電気エネルギー（電力・熱量・電力量）

- 出力先: `data/content/science/grade2/4-electricity/electric-energy.json`
- Web版ソース: `src/data/subjects/science/units/grade2/4-electricity/topics/3-electric-energy/index.ts`（既存 flashcards 25件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **電力（W）**
    - 電力[W] = 電圧[V] × 電流[A]
    - 電力が大きいほど、1秒あたりに多くの電気エネルギーを消費する
    - 100Vで2A流れる電熱器の電力は 100×2＝200W
  - **熱量（J）と電力量**
    - 熱量[J] = 電力[W] × 時間[s]
    - 電力量の単位：J（ジュール）またはWh（ワット時）
    - 1Wh = 3600J（1時間 = 3600秒）
    - 水の上昇温度は電力と時間に比例する

### オームの法則と抵抗（V=RI・合成抵抗・導体と不導体）

- 出力先: `data/content/science/grade2/4-electricity/ohms-law.json`
- Web版ソース: `src/data/subjects/science/units/grade2/4-electricity/topics/3-ohms-law/index.ts`（既存 flashcards 8件 / quiz 6件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **オームの法則と抵抗**
    - オームの法則：V＝R×I（電圧＝抵抗×電流）
    - 抵抗の単位はΩ（オーム）
    - 導体：電気を通しやすい物質（金属など）
    - 不導体（絶縁体）：電気を通しにくい物質（ゴム、ガラスなど）
  - **合成抵抗**
    - 直列回路の合成抵抗：R＝R₁＋R₂（各抵抗の和）
    - 並列回路の合成抵抗：1/R＝1/R₁＋1/R₂（逆数の和）
    - 並列の合成抵抗はどの抵抗よりも小さくなる
    - 抵抗の大きさは物質の種類・長さ・太さで決まる

### 電流と磁界（1）（磁界・磁力線・電磁力・モーター）

- 出力先: `data/content/science/grade2/4-electricity/current-magnetism.json`
- Web版ソース: `src/data/subjects/science/units/grade2/4-electricity/topics/4-current-magnetism/index.ts`（既存 flashcards 33件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **磁界と磁力線**
    - 磁界：磁力がはたらく空間
    - 磁界の向き：磁針のN極が指す向き
    - 磁力線：N極から出てS極に入る。間隔がせまいほど磁力が強い
  - **電流がつくる磁界**
    - 1本の導線：同心円状の磁界ができる（右手の法則）
    - 右手の法則：親指を電流の向きに合わせると、4本の指が磁界の向き
    - コイル：棒磁石と同様の磁界ができる。電流の向きで極が決まる
  - **電流が磁界から受ける力**
    - 磁界中の電流は力を受ける
    - 電流の向きを逆にする → 力の向きも逆になる
    - 磁界の向きを逆にする → 力の向きも逆になる
    - モーター：電流が磁界から受ける力を利用して回転する装置

### 電流と磁界（2）（電磁誘導・発電機・直流と交流）

- 出力先: `data/content/science/grade2/4-electricity/electromagnetic-induction.json`
- Web版ソース: `src/data/subjects/science/units/grade2/4-electricity/topics/5-electromagnetic-induction/index.ts`（既存 flashcards 10件 / quiz 4件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **電磁誘導**
    - 電磁誘導：コイル内の磁界変化 → 電圧が生じる → 誘導電流が流れる
    - 誘導電流を大きくする方法：磁石を速く動かす／コイルの巻数を増やす／強い磁石を使う
    - 発電機：電磁誘導を利用して電気をつくる装置
  - **直流と交流**
    - 直流（乾電池）：一定方向の電流。交流（コンセント）：向きが周期的に変化する電流
    - 周波数（Hz）：交流の1秒あたりの振動回数。東日本50Hz、西日本60Hz
    - 交流は変圧器で電圧を変えやすい → 送電に利用

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

- 全 7 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
