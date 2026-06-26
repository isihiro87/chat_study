# 一問一答コンテンツ生成プロンプト — 理科 中3：生命の連続性

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **理科 中3 / 生命の連続性**（`2-biology`）
- 出力先: `data/content/science/grade3/2-biology/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/science/units/grade3/2-biology/3年理科ワーク2章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/science/units/grade3/2-biology/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 6 トピック）

### 細胞分裂と無性生殖（体細胞分裂・観察方法・無性生殖）

- 出力先: `data/content/science/grade3/2-biology/cell-division.json`
- Web版ソース: `src/data/subjects/science/units/grade3/2-biology/topics/1-cell-division/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **細胞分裂と染色体**
    - 細胞分裂：1つの細胞が2つに分かれること
    - 染色体：核の中にあるひものようなもの。遺伝子をふくむ
    - 遺伝子：生物の形質（形や性質）を決めるもの
  - **体細胞分裂と生物の成長**
    - 体細胞分裂：からだをつくる細胞の分裂。染色体数は変わらない
    - 成長＝細胞分裂で数を増やす → 細胞が大きくなる
    - 植物：根と茎の先端付近で分裂。動物：骨髄で血液細胞をつくる
  - **体細胞分裂の観察（タマネギの根）**
    - 塩酸処理：細胞を1つ1つはなれやすくする
    - 染色液：酢酸カーミン（赤）、酢酸ダーリアバイオレット（紫）
    - カバーガラスの上からおしつぶして根を広げる
    - 根もとに近い部分は細胞が大きい（成長済み）
  - **無性生殖**
    - 生殖：自分と同じ種類の新しい個体をつくること
    - 無性生殖：受精なし。分裂・栄養生殖など。親と同じ形質の子（クローン）
    - 栄養生殖の例：ジャガイモ、サツマイモ、オランダイチゴ、接ぎ木
    - 分裂でふえる例：ゾウリムシ、アメーバ、ミカヅキモ、イソギンチャク

### 有性生殖と減数分裂（有性生殖・発生・減数分裂・染色体の受けつがれ方）

- 出力先: `data/content/science/grade3/2-biology/reproduction.json`
- Web版ソース: `src/data/subjects/science/units/grade3/2-biology/topics/2-reproduction/index.ts`（既存 flashcards 12件 / quiz 5件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **有性生殖と発生のしくみ**
    - 受精：生殖細胞が結合し核が合体 → 受精卵
    - 発生：受精卵が体細胞分裂をくり返して個体になる過程
    - 胚：発生の初期段階のもの
    - 被子植物：花粉→花粉管→精細胞が卵細胞と受精→胚→種子
  - **減数分裂と染色体の受けつがれ方**
    - 減数分裂：生殖細胞をつくるとき、染色体数が半分になる分裂
    - 有性生殖：両親から半分ずつ染色体を受けつぐ
    - 無性生殖の子＝親と同じ染色体（クローン）
    - 同じ品質→無性生殖を利用、新品種→有性生殖を利用

### 遺伝の規則性（メンデルの法則・顕性形質と潜性形質・分離の法則）

- 出力先: `data/content/science/grade3/2-biology/heredity-rules.json`
- Web版ソース: `src/data/subjects/science/units/grade3/2-biology/topics/3-heredity-rules/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **遺伝と形質の基本**
    - 形質：生物の形や性質のこと
    - 遺伝：親の形質が子や孫に伝わること
    - 遺伝子：形質を決めるもの。染色体の中に存在する
    - 純系：何世代重ねても形質が全て親と同じもの
    - 対立形質：どちらか一方しか現れない2つの形質（例：丸形としわ形）
  - **メンデルの交配実験**
    - 顕性形質（優性形質）：子の代で現れる形質
    - 潜性形質（劣性形質）：子の代で現れない（隠れる）形質
    - 自家受粉：花粉をその花のめしべにつけること
    - 孫の代で顕性：潜性＝約3：1の比で現れる
    - メンデルの実験結果：種子の形は丸5474：しわ1850（約3：1）
  - **遺伝子の記号表示と分離の法則**
    - 顕性形質の遺伝子＝大文字（A）、潜性形質＝小文字（a）
    - 親AA × aa → 子はすべてAa（顕性形質）
    - 子Aa × Aa → 孫はAA：Aa：aa＝1：2：1 → 顕性：潜性＝3：1
    - 分離の法則：対になった遺伝子が減数分裂で別々の生殖細胞に入る
    - 相同染色体：形や大きさが同じ、2本1対の染色体

### DNAと遺伝子技術（DNAのしくみ・遺伝子組換え・クローン）

- 出力先: `data/content/science/grade3/2-biology/dna-technology.json`
- Web版ソース: `src/data/subjects/science/units/grade3/2-biology/topics/4-dna-technology/index.ts`（既存 flashcards 10件 / quiz 4件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **DNAと遺伝子の本体**
    - DNA＝デオキシリボ核酸が遺伝子の本体
    - DNAは二重らせん構造をしている
    - DNAは染色体に含まれ、染色体は核の中にある
    - 放射線や紫外線でDNAが変化（突然変異）することがある
  - **遺伝子組換え技術とその活用**
    - 遺伝子組換え：異なる個体の遺伝子を他の個体に導入する技術
    - 農業への応用：害虫に強い作物、日持ちの良いトマト、青いバラ
    - 医療への応用：インスリンの大量生産（糖尿病治療薬）
    - クローン：起源が同じで同一の遺伝子をもつ個体の集団

### 脊椎動物の進化（生物の歴史・水中から陸上へ・脊椎動物の分類）

- 出力先: `data/content/science/grade3/2-biology/vertebrate-evolution.json`
- Web版ソース: `src/data/subjects/science/units/grade3/2-biology/topics/5-vertebrate-evolution/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **生物の歴史と進化**
    - 約40億年前に地球上に生命が誕生した
    - 進化：生物のからだの特徴が長い年月をかけて変化すること
    - 最も古い脊椎動物の化石は約5億年前の魚類
    - 進化の順序：魚類 → 両生類 → ハチュウ類 → 哺乳類・鳥類
  - **脊椎動物の分類と特徴**
    - 魚類：水中・えら呼吸・変温・うろこ・水中に産卵
    - 両生類：子はえら→成体は肺と皮膚呼吸・変温・湿った皮膚・水中に産卵
    - ハチュウ類：陸上・肺呼吸・変温・かたいうろこ・陸上に殻のある卵
    - 鳥類：陸上（飛翔）・肺呼吸・恒温・羽毛・陸上に殻のある卵
    - 哺乳類：陸上・肺呼吸・恒温・体毛・胎生
  - **水中から陸上へ ─ 進化の道すじ**
    - ユーステノプテロン：肺とえらの両方をもった魚類
    - イクチオステガ：最初に陸上で暮らした両生類（4本の足をもつ）
    - 両生類→ハチュウ類：体表が乾燥に強く、殻のある卵で水辺から離れる
    - ハチュウ類→哺乳類：恒温動物として一生を陸上で過ごす

### 進化の証拠と多様性（始祖鳥・相同器官・進化と多様性）

- 出力先: `data/content/science/grade3/2-biology/evolution-evidence.json`
- Web版ソース: `src/data/subjects/science/units/grade3/2-biology/topics/6-evolution-evidence/index.ts`（既存 flashcards 13件 / quiz 6件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **鳥類の出現と始祖鳥**
    - 始祖鳥：約1.5億年前（中生代）の地層から化石が発見
    - 鳥類の特徴：前あしがつばさ、羽毛がある
    - ハチュウ類の特徴：つばさに爪、くちばしに歯、尾骨がある
    - 鳥類はハチュウ類から進化した証拠となる
  - **相同器官と進化の多様性**
    - 相同器官：形やはたらきは違うが、骨格の基本的なつくりが共通の器官
    - 例：コウモリの翼・クジラのひれ・ヒトの手
    - 共通の祖先から進化した証拠となる
    - ハイギョ（肺をもつ魚類）やカモノハシ（卵を産む哺乳類）も進化の証拠
    - 遺伝子の変化が環境に適応して受け継がれた結果が生物の多様性

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
