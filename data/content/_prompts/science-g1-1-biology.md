# 一問一答コンテンツ生成プロンプト — 理科 中1：生物の観察と分類

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **理科 中1 / 生物の観察と分類**（`1-biology`）
- 出力先: `data/content/science/grade1/1-biology/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/science/units/grade1/1-biology/1年理科ワーク1章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/science/units/grade1/1-biology/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 6 トピック）

### 観察のしかた（スケッチ・ルーペ・分類の基準）

- 出力先: `data/content/science/grade1/1-biology/observation.json`
- Web版ソース: `src/data/subjects/science/units/grade1/1-biology/topics/1-observation/index.ts`（既存 flashcards 15件 / quiz 19件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **生物の観察と記録**
    - 観察記録：日時・場所・天気・気温・生物名・スケッチ・気づきを記入
    - スケッチのルール：細い線で描く、影をつけない、輪郭線で表す
    - 生物カード：観察結果を1種類ずつカードにまとめる
  - **ルーペと顕微鏡の使い方**
    - ルーペ：目に近づけて持ち、観察物を動かしてピントを合わせる
    - 双眼実体顕微鏡：立体的に観察できる（倍率20〜40倍）
    - 顕微鏡：接眼レンズ→対物レンズの順に取り付け、低倍率から観察する
  - **生物の特徴と分類**
    - 分類の基本：共通点と相違点に注目してグループ分けする
    - 分類の基準：花の色、葉の形、足の数など目的に応じて選ぶ
    - 科学的な分類：体のつくりなど変化しにくい特徴を基準にする

### 顕微鏡の詳細（プレパラート・倍率計算・顕微鏡の各部分）

- 出力先: `data/content/science/grade1/1-biology/microscope-detail.json`
- Web版ソース: `src/data/subjects/science/units/grade1/1-biology/topics/2-microscope-detail/index.ts`（既存 flashcards 15件 / quiz 11件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **プレパラートの作り方**
    - プレパラート＝スライドガラス＋カバーガラス
    - カバーガラスは端からゆっくり下ろし、気泡が入らないようにする
    - 水はスポイトで1滴たらす
  - **倍率の計算と視野の変化**
    - 倍率＝接眼レンズの倍率×対物レンズの倍率
    - 倍率を上げると視野は狭くなり、暗くなる
    - しぼりや反射鏡（凹面鏡）で明るさを調節する

### 花と種子のしくみ（花のつくり・受粉・被子植物と裸子植物）

- 出力先: `data/content/science/grade1/1-biology/flower-seed.json`
- Web版ソース: `src/data/subjects/science/units/grade1/1-biology/topics/3-flower-seed/index.ts`（既存 flashcards 20件 / quiz 30件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **花のつくりと種類**
    - 花の構造：外側から がく → 花弁 → おしべ → めしべ
    - 受粉：花粉がめしべの柱頭につくこと → 子房が果実、胚珠が種子になる
    - 離弁花（花弁が離れている）と合弁花（花弁がくっついている）
  - **被子植物と裸子植物・双子葉類と単子葉類**
    - 被子植物：胚珠が子房に包まれている（果実ができる）
    - 裸子植物：胚珠がむき出し（マツ・イチョウなど、果実はできない）
    - 双子葉類＝網状脈・主根と側根 ／ 単子葉類＝平行脈・ひげ根
  - **マツの花と裸子植物の特徴**
    - 雄花のりん片に花粉のう、雌花のりん片に胚珠がむき出し
    - 裸子植物は風によって花粉が運ばれる（風媒花）
    - 裸子植物の例：マツ、イチョウ、スギ、ソテツ

### 植物の分類（シダ植物・コケ植物・植物全体の分類）

- 出力先: `data/content/science/grade1/1-biology/plant-groups.json`
- Web版ソース: `src/data/subjects/science/units/grade1/1-biology/topics/4-plant-groups/index.ts`（既存 flashcards 20件 / quiz 30件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **種子をつくらない植物**
    - シダ植物：根・茎・葉の区別あり、維管束あり、胞子でふえる
    - コケ植物：根・茎・葉の区別なし、維管束なし、仮根で固定
    - 植物全体の分類：種子植物（被子植物・裸子植物）→ 胞子植物（シダ・コケ）
  - **シダ植物の詳細**
    - 地下茎から葉と根が出ている
    - 葉の裏に胞子のうがある
    - 例：イヌワラビ、スギナ（ツクシ）、ゼンマイ
  - **コケ植物の詳細**
    - 仮根は固定のみ（水は体の表面全体で吸収）
    - 維管束なし、根・茎・葉の区別なし
    - 雌株と雄株の区別がある。例：ゼニゴケ、コスギゴケ
  - **植物の分類まとめ**
    - 種子をつくる → 種子植物 → 被子植物（子房あり）or 裸子植物（子房なし）
    - 被子植物 → 双子葉類（子葉2枚・網状脈・主根側根）or 単子葉類（子葉1枚・平行脈・ひげ根）
    - 種子をつくらない → シダ植物（維管束あり）or コケ植物（維管束なし）

### 脊椎動物（5つのグループ・恒温動物と変温動物・卵生と胎生）

- 出力先: `data/content/science/grade1/1-biology/vertebrates.json`
- Web版ソース: `src/data/subjects/science/units/grade1/1-biology/topics/5-vertebrates/index.ts`（既存 flashcards 20件 / quiz 30件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **脊椎動物の5つのグループ**
    - 魚類：えら呼吸・うろこ・卵生・変温動物
    - 両生類：子はえら→親は肺と皮膚・しめった皮膚・卵生・変温動物
    - 鳥類：肺呼吸・羽毛・卵生・恒温動物 ／ 哺乳類：肺呼吸・毛・胎生・恒温動物
  - **恒温動物と変温動物**
    - 恒温動物：鳥類・哺乳類（体温を一定に保てる）
    - 変温動物：魚類・両生類・ハチュウ類（周りの温度で体温が変わる）
    - 卵生：卵を産む（魚類・両生類・ハチュウ類・鳥類） ／ 胎生：体内で育つ（哺乳類）
  - **卵の殻と子の生まれ方**
    - 殻のない卵を水中に産む：魚類・両生類
    - 殻のある卵を陸上に産む：ハチュウ類・鳥類（殻が乾燥から守る）
    - 胎生：哺乳類だけ（母親の体内で育ち、母乳で育てられる）

### 無脊椎動物と分類（節足動物・軟体動物・動物の分類まとめ）

- 出力先: `data/content/science/grade1/1-biology/invertebrates.json`
- Web版ソース: `src/data/subjects/science/units/grade1/1-biology/topics/6-invertebrates/index.ts`（既存 flashcards 20件 / quiz 30件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **無脊椎動物（節足動物）**
    - 節足動物：外骨格・体やあしに節がある（昆虫類・甲殻類など）
    - 昆虫類：頭・胸・腹の3部分、あし3対6本（胸から出る）、気門で呼吸
    - 甲殻類：エビ・カニ・ミジンコなど、えらで呼吸 ／ クモ：4対8本（昆虫類ではない）
  - **無脊椎動物（軟体動物・その他）**
    - 軟体動物：外とう膜で内臓が包まれている（イカ・タコ・アサリなど）
    - イカ：腕10本、水を噴き出して移動 ／ 軟体動物のあしは筋肉
    - その他：ウニ・ヒトデ（棘皮動物）、ミミズ（環形動物）など
  - **動物の分類まとめ**
    - 背骨あり＝脊椎動物（約7万種）→5グループ
    - 背骨なし＝無脊椎動物（約146万種）→節足動物・軟体動物・その他
    - 見た目でなく体のつくりで分類する（クジラ＝哺乳類、ペンギン＝鳥類）

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
