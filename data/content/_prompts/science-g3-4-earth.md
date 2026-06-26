# 一問一答コンテンツ生成プロンプト — 理科 中3：地球と宇宙

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **理科 中3 / 地球と宇宙**（`4-earth`）
- 出力先: `data/content/science/grade3/4-earth/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/science/units/grade3/4-earth/3年理科ワーク4章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/science/units/grade3/4-earth/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 6 トピック）

### 地球の運動と天体の動き①（太陽・自転・公転・年周運動）

- 出力先: `data/content/science/grade3/4-earth/celestial-basic.json`
- Web版ソース: `src/data/subjects/science/units/grade3/4-earth/topics/1-celestial-basic/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **太陽と恒星**
    - 恒星：自ら光を出す天体（例：太陽）
    - 黒点：太陽表面の暗い部分（温度が低い）
    - コロナ・プロミネンス：太陽のまわりに見える構造
    - 黒点の移動 → 太陽の自転の証拠
  - **天球と日周運動**
    - 自転：地球が西から東へ1日1回転する運動
    - 日周運動：天体の1日の見かけの動き（東→南中→西）
    - 天球：観測者を中心とした仮想の球面
  - **地球の自転と方位・時刻**
    - 北極の方向 = 北
    - 南中時刻 = 正午（その地点での太陽が最も高い時刻）
    - 経度の違い → 時差が生じる
  - **年周運動と季節の変化**
    - 公転：地球が太陽のまわりを1年で1周する運動
    - 年周運動：星座が1か月で約30度ずつ西へ移動
    - 黄道：太陽の天球上の見かけの通り道
    - 地軸の傾き23.4度 → 季節の変化
    - 夏至：南中高度が高く昼が長い ／ 冬至：南中高度が低く昼が短い

### 地球の運動と天体の動き②（天球・星の方位別の動き・南中高度計算）

- 出力先: `data/content/science/grade3/4-earth/celestial-observation.json`
- Web版ソース: `src/data/subjects/science/units/grade3/4-earth/topics/2-celestial-observation/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **天球の観測方法**
    - 天球：観測者を中心とした仮想の球面
    - 天頂：天球上で観測者の真上の点
    - 天の子午線：天頂と北の点・南の点を結ぶ線
    - 南中：天体が天の子午線を通過すること
    - 透明半球：●印の間隔が等しい → 太陽は等速で動く
  - **星の方位別の動き**
    - 東の空：右ななめ上に動く
    - 南の空：右（西）に動く
    - 西の空：右ななめ下に動く
    - 北の空：北極星を中心に反時計回り
    - 北極星：地軸の延長線上にあるためほとんど動かない
    - 1時間に約15度（360÷24＝15）
  - **南中高度の計算**
    - 春分・秋分の南中高度：90度−緯度
    - 夏至の南中高度：90度−緯度＋23.4度
    - 冬至の南中高度：90度−緯度−23.4度
    - 春分・秋分：真東→真西、夏至：北寄り、冬至：南寄り
    - 白夜：北極で夏に太陽がしずまない現象
    - 極夜：北極で冬に太陽がのぼらない現象

### 月と金星の見え方①（満ち欠け・内惑星・日食と月食）

- 出力先: `data/content/science/grade3/4-earth/moon-venus-basic.json`
- Web版ソース: `src/data/subjects/science/units/grade3/4-earth/topics/3-moon-venus-basic/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **月の満ち欠け**
    - 月は地球の衛星（自ら光を出さない）
    - 太陽光を反射して光る
    - 太陽・地球・月の位置関係で形が変化
    - 約29.5日で満ち欠けを1周する
  - **金星の見え方**
    - 金星は内惑星（地球より内側を公転）
    - 真夜中には見えない
    - 明け方の東の空（明けの明星）か夕方の西の空（よいの明星）
    - 距離の変化で大きさと形が変わる
  - **日食と月食**
    - 日食：太陽−月−地球（新月時）→ 月が太陽をかくす
    - 月食：太陽−地球−月（満月時）→ 地球の影に月が入る

### 月と金星の見え方②（月の公転・金星の満ち欠け・皆既日食と金環日食）

- 出力先: `data/content/science/grade3/4-earth/moon-venus-detail.json`
- Web版ソース: `src/data/subjects/science/units/grade3/4-earth/topics/4-moon-venus-detail/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **月の公転と自転**
    - 月は反時計回り（西→東）に公転
    - 南中時刻は毎日約50分ずつ遅くなる
    - 自転周期＝公転周期＝約27.3日
    - 常に同じ面を地球に向ける
  - **金星の大きさと形の変化**
    - 近い＝大きくて欠ける（三日月のような形）
    - 遠い＝小さくて丸い
    - 外惑星は真夜中にも見え、ほぼ丸く見える
    - よいの明星：太陽の東側、明けの明星：太陽の西側
  - **日食と月食の種類**
    - 太陽の直径は月の約400倍、距離も約400倍→見かけの大きさがほぼ同じ
    - 皆既日食：月が太陽を完全にかくす
    - 金環日食：月が遠く、太陽のふちがリング状に見える
    - 日食は限られた場所、月食はどこでも見える

### 太陽系の天体（惑星の分類・特徴・衛星と小天体）

- 出力先: `data/content/science/grade3/4-earth/solar-system-planets.json`
- Web版ソース: `src/data/subjects/science/units/grade3/4-earth/topics/5-solar-system-planets/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **太陽系の天体**
    - 地球型惑星：水星・金星・地球・火星（岩石・小型・高密度）
    - 木星型惑星：木星・土星・天王星・海王星（気体・大型・低密度）
    - 小惑星：火星と木星の間に多い小さな天体
    - すい星：氷や塵でできた天体（尾を引く）
  - **各惑星の特徴**
    - 水星：クレーターが多い、大気がほとんどない
    - 金星：二酸化炭素の厚い大気、温室効果で約460℃
    - 火星：表面が赤い（酸化鉄）、大気が非常に薄い
    - 木星：太陽系最大、大赤斑（巨大な渦）
    - 土星：環（リング）、密度が水より小さい（0.69g/cm³）
    - 天王星：自転軸が横倒し
    - 海王星：青い色、太陽系で最も遠い惑星
  - **衛星**
    - 衛星：惑星のまわりを公転する天体
    - 地球の衛星は月
    - 木星の衛星：ガニメデ・カリスト・イオ・エウロパ
  - **小天体とすい星**
    - 小惑星：火星と木星の間に帯状に分布
    - すい星（彗星）：氷と塵でできた天体。太陽に近づくと尾を引く
    - 太陽系外縁天体：冥王星など太陽系の外側の天体

### 宇宙の広がり（銀河系・光年・天文単位）

- 出力先: `data/content/science/grade3/4-earth/universe.json`
- Web版ソース: `src/data/subjects/science/units/grade3/4-earth/topics/6-universe/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **宇宙の広がり**
    - 銀河：恒星が数千億個集まった大集団
    - 銀河系（天の川銀河）：太陽系が属する銀河（渦巻き円盤状）
    - 光年：光が1年間に進む距離
    - 天文単位：太陽と地球の平均距離
  - **銀河系のスケール**
    - 銀河系の直径：約10万光年
    - 銀河系の厚さ：約1.5万光年
    - 銀河系の恒星数：約2000億個
    - 太陽系の位置：中心から約3万光年
    - 1天文単位 ≒ 約1.5億km
    - 1光年 ≒ 約9.5兆km ≒ 約6.3万天文単位

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
