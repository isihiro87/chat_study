# 一問一答コンテンツ生成プロンプト — 理科 中1：大地の変化

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **理科 中1 / 大地の変化**（`4-earth`）
- 出力先: `data/content/science/grade1/4-earth/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/science/units/grade1/4-earth/1年理科ワーク4章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/science/units/grade1/4-earth/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 3 トピック）

### 火をふく大地（マグマと噴火・火山噴出物・火成岩・火山の恵みと災害）

- 出力先: `data/content/science/grade1/4-earth/volcano.json`
- Web版ソース: `src/data/subjects/science/units/grade1/4-earth/topics/1-volcano/index.ts`（既存 flashcards 31件 / quiz 40件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **マグマと火山の形**
    - マグマ：地下にある高温で溶けた岩石
    - ねばりけ強い → 溶岩ドーム（爆発的噴火・白っぽい溶岩）
    - ねばりけ中程度 → 円すい型（成層火山）
    - ねばりけ弱い → 楯状火山（おだやかな噴火・黒っぽい溶岩）
  - **火山噴出物と鉱物**
    - 火山噴出物：溶岩、火山灰、火山弾、軽石、火山ガス
    - 無色鉱物：石英（透明）、長石（白色）
    - 有色鉱物：黒雲母、角閃石、輝石、カンラン石
  - **火成岩のつくりと種類**
    - 火山岩（急冷）：斑状組織（斑晶＋石基）→ 流紋岩・安山岩・玄武岩
    - 深成岩（徐冷）：等粒状組織 → 花こう岩・せん緑岩・はんれい岩
    - 覚え方：「りあげ（流・安・玄）かせは（花・せ・は）」白→黒の順

### 動き続ける大地（地震のゆれ・P波とS波・プレート・地震への備え）

- 出力先: `data/content/science/grade1/4-earth/earthquake.json`
- Web版ソース: `src/data/subjects/science/units/grade1/4-earth/topics/2-earthquake/index.ts`（既存 flashcards 25件 / quiz 40件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **地震のゆれの伝わり方**
    - 震源：地震が発生した地下の場所 / 震央：震源の真上の地表
    - P波（速い）→ 初期微動 / S波（遅い）→ 主要動
    - 初期微動継続時間：震源から遠いほど長い
    - マグニチュード：地震の規模 / 震度：各地のゆれの強さ
  - **地震が起こるところ**
    - プレート：地球の表面をおおう十数枚の岩盤
    - 日本は複数のプレートの境界に位置 → 地震が多い
    - 断層：岩盤がずれた跡 / 活断層：将来地震を起こす可能性がある断層
    - 海溝：プレートが沈み込む場所 / 津波：海底地震で発生
  - **地震に備えるために**
    - 土砂くずれ：山やがけが崩壊する災害
    - 液状化：水分の多い地盤が液体のようにふるまう現象
    - 緊急地震速報：P波を検知して大きなゆれの前に警告
    - ハザードマップで危険な場所を確認し備えることが大切

### 地層から読みとる大地の変化（地層のなり立ち・堆積岩・化石・大地の変動）

- 出力先: `data/content/science/grade1/4-earth/strata.json`
- Web版ソース: `src/data/subjects/science/units/grade1/4-earth/topics/3-strata/index.ts`（既存 flashcards 28件 / quiz 40件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **地層のなり立ち**
    - 風化：岩石が気温の変化や雨風でもろくなること
    - 流水のはたらき：侵食 → 運搬 → 堆積
    - 粒の大きさ：れき（2mm以上）> 砂（0.06～2mm）> 泥（0.06mm以下）
    - 粒が大きいものほど河口近くに堆積する
  - **堆積岩と化石**
    - 堆積岩：れき岩・砂岩・泥岩（粒の大きさ）、石灰岩・チャート（生物の遺骸）、凝灰岩（火山灰）
    - 石灰岩：うすい塩酸で二酸化炭素が発生
    - 示相化石：当時の環境がわかる（例：サンゴ→暖かく浅い海）
    - 示準化石：地層の時代がわかる（三葉虫→古生代、アンモナイト→中生代）
  - **大地の変動**
    - しゅう曲：地層が横からの力で波打つように曲がること
    - 断層：地層が力を受けてずれること
    - 隆起：海底が持ち上がって陸地になること
    - 柱状図：地層の断面図。凝灰岩の層が鍵層として対比の目印になる

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

- 全 3 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
