# 一問一答コンテンツ生成プロンプト — 地理 中2：日本の諸地域

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **地理 中2 / 日本の諸地域**（`3-japan-regions`）
- 出力先: `data/content/geography/grade2/3-japan-regions/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/geography/units/grade2/3-japan-regions/2年地理ワーク7章 (1).pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/geography/units/grade2/3-japan-regions/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 11 トピック）

### 九州地方（火山・シラス台地・促成栽培・エコタウン）

- 出力先: `data/content/geography/grade2/3-japan-regions/kyushu.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/3-japan-regions/topics/1-kyushu/index.ts`（既存 flashcards 34件 / quiz 21件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **火山とシラス台地**
    - 阿蘇山の巨大カルデラと活火山の桜島
    - シラス台地は水はけがよく、畜産やさつまいも栽培に利用
    - 克灰袋や砂防ダムなどの火山災害対策
  - **温暖な気候と自然のめぐみ**
    - 台風対策の伝統的な家屋の工夫（沖縄のコンクリート造り）
    - 温泉資源が豊富（別府・湯布院）
    - 地熱発電（八丁原）・太陽光発電など自然エネルギーの活用
  - **気候を生かした農業**
    - 筑紫平野の稲作（九州最大の穀倉地帯）
    - 宮崎平野の促成栽培（きゅうり・ピーマンなど）
    - 南九州（鹿児島・宮崎）の畜産（肉牛・豚・鶏）
  - **公害からエコタウンへ**
    - 北九州市：公害から環境都市へ転換、エコタウン事業
    - 水俣市：水俣病の教訓から環境モデル都市へ再生
    - 公害の経験を生かした環境保全のまちづくり

### 東北地方（奥羽山脈・やませ・リアス海岸・伝統産業・震災復興）

- 出力先: `data/content/geography/grade2/3-japan-regions/tohoku.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/3-japan-regions/topics/10-tohoku/index.ts`（既存 flashcards 34件 / quiz 19件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **奥羽山脈と気候の違い**
    - 奥羽山脈が東北地方の日本海側と太平洋側を分ける
    - やませ：太平洋側に吹く冷たい北東風、冷害の原因
    - 品種改良でやませ（冷害）対策を推進
  - **リアス海岸と豊かな漁業**
    - リアス海岸：入り江を利用した養殖漁業が盛ん
    - 三陸沖：潮目（暖流と寒流がぶつかる）で好漁場
    - 気仙沼港・石巻港：水揚げ量が多い漁港
  - **夏祭りと食文化**
    - 東北四大祭り：ねぶた・竿燈・七夕・花笠
    - 稲作の豊作を願う行事がルーツ
    - 雪国の保存食文化（漬物・干し餅・きりたんぽ）
  - **伝統産業と東日本大震災**
    - 南部鉄器：海外でデザイン性が評価、グローバル化に成功
    - 東日本大震災（2011年）：津波で甚大な被害
    - 防潮堤・高台移転・防災教育で新しいまちづくり

### 北海道地方（亜寒帯気候・アイヌ・大規模農業・酪農・観光）

- 出力先: `data/content/geography/grade2/3-japan-regions/hokkaido.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/3-japan-regions/topics/11-hokkaido/index.ts`（既存 flashcards 33件 / quiz 18件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **広大な面積と亜寒帯気候**
    - 日本の面積の約22%、亜寒帯（冷帯）気候
    - 冬は厳しい寒さ（内陸で氷点下20度以下）
    - 二重窓・断熱材・ロードヒーティングで寒さ対策
  - **豊富な水産資源とアイヌの歴史**
    - 豊かな水産資源（さけ・ほたて・昆布など）
    - アイヌの人々の独自の文化と歴史
    - ウポポイ（民族共生象徴空間）でアイヌ文化を継承
  - **大規模農業と酪農**
    - 石狩平野：客土・品種改良で稲作が発展
    - 十勝平野：じゃがいも・小麦・てんさい・豆類の輪作
    - 根釧台地：酪農が盛ん、生乳生産量日本一
  - **ブランド化と観光・エコツーリズム**
    - 夕張メロンなど食のブランド化で付加価値向上
    - 知床（世界自然遺産）など豊かな自然を生かした観光
    - エコツーリズムで自然と観光の両立

### 中国・四国地方①（自然環境と交通）

- 出力先: `data/content/geography/grade2/3-japan-regions/chugoku-shikoku-nature.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/3-japan-regions/topics/2-chugoku-shikoku-nature/index.ts`（既存 flashcards 35件 / quiz 15件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **3つの地域と気候の違い**
    - 山陰（日本海側）：冬に雪が多い
    - 瀬戸内（瀬戸内海沿岸）：降水量が少なく温暖
    - 南四国（太平洋側）：夏に降水量が非常に多い
  - **交通網の整備とストロー現象**
    - 本州四国連絡橋：瀬戸大橋・明石海峡大橋・しまなみ海道の3ルート
    - 交通網整備で物流・観光が活性化
    - ストロー現象：地方の人口や消費が大都市に流出

### 中国・四国地方②（産業と地域の課題）

- 出力先: `data/content/geography/grade2/3-japan-regions/chugoku-shikoku-industry.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/3-japan-regions/topics/3-chugoku-shikoku-industry/index.ts`（既存 flashcards 25件 / quiz 14件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **瀬戸内工業地域**
    - 石油化学コンビナートが瀬戸内海沿岸に立地
    - 水島（倉敷市）・周南市などが代表的な工業都市
    - 瀬戸内海は波が穏やかで大型船の航行に適する
  - **農業と特産品**
    - 高知県：促成栽培（なす・ピーマン）
    - 愛媛県：みかん、瀬戸内：レモン
    - 鳥取県：なし・らっきょう
  - **ICTを活用した過疎地域の挑戦**
    - 上勝町の葉っぱビジネス：高齢者がタブレットで受注・出荷
    - 松江市：Rubyの開発拠点としてIT企業を誘致
    - ICTを活用した過疎地域の活性化

### 近畿の自然と大阪大都市圏（リアス海岸・琵琶湖・古都の景観保全・阪神工業地帯）

- 出力先: `data/content/geography/grade2/3-japan-regions/kinki-nature.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/3-japan-regions/topics/4-kinki-nature/index.ts`（既存 flashcards 27件 / quiz 12件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **近畿地方の自然環境**
    - リアス海岸：若狭湾・志摩半島に分布、養殖漁業に適する
    - 琵琶湖：日本最大の湖、淀川を通じて近畿の水源
    - 紀伊山地：吉野杉の林業。黒潮で南部は温暖
  - **歴史的な古都と景観保全**
    - 京都・奈良：かつての都で歴史的な町並みが残る
    - 景観条例で建物の高さ制限や看板規制を実施
    - オーバーツーリズム（観光公害）が課題
  - **大阪大都市圏と阪神工業地帯**
    - 大阪：西日本最大の経済の中心地
    - 阪神工業地帯：中小企業が多く技術力が高い
    - 東大阪市：「ものづくりの町」、人工衛星の開発

### 近畿の都市問題と農山村（ニュータウン・ポートアイランド・過疎化対策・地域おこし）

- 出力先: `data/content/geography/grade2/3-japan-regions/kinki-urban.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/3-japan-regions/topics/5-kinki-urban/index.ts`（既存 flashcards 18件 / quiz 14件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **ニュータウンの課題と再開発**
    - ポートアイランド：海の埋め立てによる人工島
    - ニュータウンの高齢化・老朽化が深刻
    - 再開発と若者の呼び込みが課題
  - **山村・漁村の過疎化対策**
    - 吉野地方：吉野杉の林業、外国産木材に押され衰退
    - 伊根町：舟屋の伝統的景観を生かした観光振興
    - 和束町：宇治茶の産地、茶畑の景観を活用

### 中部地方①（自然と東海）（日本アルプス・濃尾平野・中京工業地帯・自動車産業）

- 出力先: `data/content/geography/grade2/3-japan-regions/chubu-tokai.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/3-japan-regions/topics/6-chubu-tokai/index.ts`（既存 flashcards 22件 / quiz 12件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **日本アルプスと3つの地域**
    - 日本アルプス（飛驒・木曽・赤石山脈）が境界
    - 東海：温暖で降水量が多い太平洋側の気候
    - 中央高地：冷涼な内陸性気候、北陸：冬に豪雪
  - **東海地方と中京工業地帯**
    - 豊田市：トヨタ自動車の本社、自動車産業の中心
    - 中京工業地帯：製造品出荷額が日本最大
    - 静岡県：楽器（浜松）・お茶（牧之原台地）

### 中部地方②（中央高地と北陸）（抑制栽培・甲府盆地・諏訪・稲作・伝統工芸品・コンパクトシティ）

- 出力先: `data/content/geography/grade2/3-japan-regions/chubu-highland.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/3-japan-regions/topics/7-chubu-highland/index.ts`（既存 flashcards 22件 / quiz 10件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **中央高地の農業と工業**
    - 抑制栽培：冷涼な気候を生かし、高原野菜を夏に出荷
    - 甲府盆地：ぶどう・桃などの果樹栽培
    - 諏訪地方：精密機械工業（「東洋のスイス」）
  - **北陸の稲作と伝統的工芸品**
    - 越後平野の稲作、新潟県は米の生産量日本一
    - 冬の副業から発展した伝統的工芸品
    - 鯖江のメガネ、輪島塗、九谷焼、燕三条の金属製品

### 関東の自然と東京（関東平野・関東ローム層・ヒートアイランド・世界都市東京・一極集中）

- 出力先: `data/content/geography/grade2/3-japan-regions/kanto-nature.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/3-japan-regions/topics/8-kanto-nature/index.ts`（既存 flashcards 24件 / quiz 10件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **関東平野と自然環境**
    - 関東平野：日本最大の平野
    - 関東ローム層：火山灰が堆積した赤土、畑作に利用
    - ヒートアイランド現象：都市部の気温が郊外より高い
  - **世界都市・東京**
    - 東京：政治・経済・情報の中心機能が集中する世界都市
    - 一極集中：地方の過疎化を招く原因
    - 首都直下型地震のリスク集中が課題
  - **東京大都市圏と人口**
    - 大都市圏に日本の人口の約3分の1が集中
    - 昼間人口と夜間人口の差が大きい
    - ニュータウンの高齢化・老朽化が課題

### 東京大都市圏と関東の産業（近郊農業・京浜工業地帯・京葉工業地域・北関東工業地域・特産品）

- 出力先: `data/content/geography/grade2/3-japan-regions/kanto-industry.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/3-japan-regions/topics/9-kanto-industry/index.ts`（既存 flashcards 17件 / quiz 9件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **農業と工業**
    - 近郊農業：都市に近い立地で新鮮な野菜を供給
    - 京浜工業地帯：出版・印刷・情報産業
    - 京葉工業地域：石油化学、北関東：自動車・電気機械

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

- 全 11 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
