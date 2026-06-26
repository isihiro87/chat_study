# 一問一答コンテンツ生成プロンプト — 地理 中1：世界の諸地域

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **地理 中1 / 世界の諸地域**（`4-world-regions`）
- 出力先: `data/content/geography/grade1/4-world-regions/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/geography/units/grade1/4-world-regions/1年地理ワーク4章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/geography/units/grade1/4-world-regions/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 15 トピック）

### アジア州(1) 自然・文化・NIES（季節風・ヒマラヤ山脈・チベット高原・アジアNIES）

- 出力先: `data/content/geography/grade1/4-world-regions/asia-basics.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/4-world-regions/topics/1-asia-basics/index.ts`（既存 flashcards 26件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **アジア州の自然と文化**
    - 季節風（モンスーン）が気候に大きな影響を与える
    - 多様な言語・宗教（仏教・イスラーム・ヒンドゥー教など）
    - 華人（中国系の人々）が東南アジアなどで大きな影響力を持つ

### 北アメリカ州(1) 自然・農業（ロッキー山脈・適地適作・アグリビジネス）

- 出力先: `data/content/geography/grade1/4-world-regions/north-america-nature.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/4-world-regions/topics/10-north-america-nature/index.ts`（既存 flashcards 24件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **自然環境と多文化社会**
    - 西部にロッキー山脈、中央にグレートプレーンズ（大平原）
    - ヨーロッパ系・アフリカ系・アジア系・ヒスパニックなど多様な人々
    - USMCA（米国・メキシコ・カナダ協定）で経済連携
  - **適地適作と大規模農業**
    - 適地適作：気候や土壌に合わせた農業
    - センターピボットによる大規模かんがい農業
    - アグリビジネス：穀物メジャーによる生産から流通までの一貫経営

### 北アメリカ州(2) 工業・生活文化（ラストベルト・シリコンバレー・ヒスパニック）

- 出力先: `data/content/geography/grade1/4-world-regions/north-america-industry.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/4-world-regions/topics/11-north-america-industry/index.ts`（既存 flashcards 29件 / quiz 15件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **工業の変化とICT産業**
    - 五大湖周辺：かつての重工業地帯 → ラストベルト（衰退）
    - サンベルト：南部・西部の先端技術産業地域
    - シリコンバレー：ICT企業が集中する世界的な情報産業の中心
  - **生活文化と移民**
    - 自動車社会：広大な国土で車が生活の必需品
    - 大量生産・大量消費の生活様式が世界に影響
    - ヒスパニック移民の増加と労働力としての重要性

### 南アメリカ州(1) 自然・文化（アマゾン・アンデス・パンパ・日系移民）

- 出力先: `data/content/geography/grade1/4-world-regions/south-america-nature.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/4-world-regions/topics/12-south-america-nature/index.ts`（既存 flashcards 23件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **自然と文化**
    - アマゾン川：世界最大の流域面積を持つ川、流域に熱帯雨林が広がる
    - アンデス山脈：南北約7500km、かつてインカ帝国が栄えた
    - スペイン・ポルトガルの植民地支配により混血文化が形成された
  - **自然を生かした暮らし**
    - アマゾン川での漁業が暮らしを支える
    - 焼畑農業からアグロフォレストリー（森林農業）への転換が進む
    - エコツーリズム：自然を守りながら観光収入を得る取り組み

### 南アメリカ州(2) 開発・環境（開発と環境問題・農業・鉱産資源）

- 出力先: `data/content/geography/grade1/4-world-regions/south-america-development.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/4-world-regions/topics/13-south-america-development/index.ts`（既存 flashcards 32件 / quiz 22件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **開発と環境問題**
    - 大豆畑・牧場開発による熱帯雨林の減少が深刻な問題
    - 鉄鉱石・銅鉱の開発、バイオエタノールの生産
    - 経済成長と環境保全を両立させる持続可能な開発が課題

### オセアニア州(1) 自然・産業（乾燥大陸・資源輸出・貿易相手の変化）

- 出力先: `data/content/geography/grade1/4-world-regions/oceania-nature.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/4-world-regions/topics/14-oceania-nature/index.ts`（既存 flashcards 24件 / quiz 23件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **自然と文化**
    - オーストラリア大陸は「乾燥大陸」とよばれる
    - 太平洋には火山島やサンゴ礁の島が多い
    - アボリジニ（オーストラリア）やマオリ（ニュージーランド）などの先住民文化
  - **他地域との結び付き**
    - 羊・牛の放牧と小麦栽培がさかん
    - 鉄鉱石・石炭などの鉱産資源を輸出
    - イギリス中心からAPECを通じたアジア諸国との経済的結び付きへ転換

### オセアニア州(2) 多文化社会・環境（白豪主義・多文化社会・地球温暖化）

- 出力先: `data/content/geography/grade1/4-world-regions/oceania-society.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/4-world-regions/topics/15-oceania-society/index.ts`（既存 flashcards 31件 / quiz 17件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **移民と多文化社会**
    - 白豪主義（ヨーロッパ系以外の移民制限）からの政策転換
    - アジア系移民の受け入れと多文化社会の実現
    - アボリジニなど先住民の権利尊重と文化保護

### アジア州(2) 中国・韓国・東南アジア（経済特区・一人っ子政策・ASEAN・プランテーション）

- 出力先: `data/content/geography/grade1/4-world-regions/asia-east-southeast.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/4-world-regions/topics/2-asia-east-southeast/index.ts`（既存 flashcards 30件 / quiz 25件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **中国・韓国と東南アジア**
    - 中国：経済特区で「世界の工場」に発展。大気汚染・経済格差が課題
    - 韓国：ハイテク工業・K-POP。ソウル過密・少子高齢化が課題
    - 東南アジア：稲作・プランテーション。ASEAN。スラム・交通渋滞が課題

### アジア州(3) 南アジア・西アジア（インド・ICT産業・ヒンドゥー教・OPEC・レアメタル）

- 出力先: `data/content/geography/grade1/4-world-regions/asia-south-west.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/4-world-regions/topics/3-asia-south-west/index.ts`（既存 flashcards 30件 / quiz 25件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **南アジアと西アジア・中央アジア**
    - インド：人口急増・ICT産業の発展。貧富の格差が課題
    - 西アジア・中央アジア：イスラーム文化圏。石油・天然ガスの産出
    - OPEC（石油輸出国機構）で石油の生産・価格に影響力

### ヨーロッパ州(1) 自然・文化（自然環境・地形・農業・言語）

- 出力先: `data/content/geography/grade1/4-world-regions/europe-nature.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/4-world-regions/topics/4-europe-nature/index.ts`（既存 flashcards 24件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **自然と文化**
    - 北大西洋海流と偏西風の影響で高緯度の割に温暖
    - 英語・フランス語・ドイツ語など多様な言語
    - キリスト教が広く信仰（カトリック・プロテスタント・正教会）

### ヨーロッパ州(2) EU統合・環境（EU・環境対策・ルーラルツーリズム）

- 出力先: `data/content/geography/grade1/4-world-regions/europe-eu.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/4-world-regions/topics/5-europe-eu/index.ts`（既存 flashcards 30件 / quiz 25件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **ヨーロッパ統合とEU**
    - EU（ヨーロッパ連合）が1993年に発足
    - 共通通貨ユーロの導入、関税の撤廃
    - パスポート不要の移動、航空機エアバスの共同生産
  - **環境への取り組み**
    - 酸性雨対策で国境を越えた環境協力
    - 風力・太陽光などの再生可能エネルギーを積極導入
    - パークアンドライドやエコツーリズムの推進

### ヨーロッパ州(3) 課題・ロシア（EU課題・ブレグジット・ロシア）

- 出力先: `data/content/geography/grade1/4-world-regions/europe-issues.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/4-world-regions/topics/6-europe-issues/index.ts`（既存 flashcards 30件 / quiz 23件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **統合の課題**
    - 西ヨーロッパと東ヨーロッパの経済格差
    - 難民・移民問題をめぐる加盟国間の対立
    - イギリスのEU離脱（ブレグジット）

### アフリカ州(1) 自然・歴史（サハラ砂漠・ナイル川・キリマンジャロ・北と南の文化）

- 出力先: `data/content/geography/grade1/4-world-regions/africa-nature.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/4-world-regions/topics/7-africa-nature/index.ts`（既存 flashcards 24件 / quiz 25件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **アフリカの自然と歴史**
    - サハラ砂漠：世界最大の砂漠（北アフリカ）
    - サヘル：サハラ砂漠の南側の半乾燥地帯
    - 赤道付近に熱帯雨林、その周辺にサバナ（草原）が分布
    - ヨーロッパ諸国による奴隷貿易と植民地支配の歴史
  - **ナイル川とキリマンジャロ**
    - ナイル川：世界最長級（約6650km）、南から北に流れ地中海へ
    - キリマンジャロ：アフリカ最高峰（約5895m）、赤道付近に氷河
    - 地球温暖化による氷河の縮小が問題
  - **サハラ砂漠の北と南の文化**
    - サハラ北側：イスラム教・アラビア語
    - サハラ南側：キリスト教・伝統宗教・旧宗主国の言語（英語・フランス語）
    - サハラ砂漠が文化の境界線として機能

### アフリカ州(2) 産業・経済（プランテーション・モノカルチャー経済・カカオ・ICT）

- 出力先: `data/content/geography/grade1/4-world-regions/africa-economy.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/4-world-regions/topics/8-africa-economy/index.ts`（既存 flashcards 34件 / quiz 19件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **産業の課題**
    - 焼畑農業や遊牧が伝統的な生業
    - カカオ・コーヒーなどのプランテーション（大農園）
    - レアメタル（コバルト・タンタルなど）が豊富
    - モノカルチャー経済：特定の産物の輸出に依存し、経済が不安定
  - **ギニア湾沿岸のカカオ生産**
    - ギニア湾沿岸（ガーナ・コートジボワール）が世界有数のカカオ産地
    - 世界のカカオの約7割がアフリカ産
    - フェアトレード：生産者に適正な価格を支払い、児童労働の撲滅を目指す
  - **ICT・携帯電話の活用**
    - 携帯電話の急速な普及（リープフロッグ現象）
    - ケニアのエムペサ：モバイル決済サービス
    - ICT活用で従来のインフラ不足を技術で解決

### アフリカ州(3) 社会変化（国境線・民族紛争・砂漠化・ルワンダの和解）

- 出力先: `data/content/geography/grade1/4-world-regions/africa-society.json`
- Web版ソース: `src/data/subjects/geography/units/grade1/4-world-regions/topics/9-africa-society/index.ts`（既存 flashcards 31件 / quiz 19件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **社会の変化**
    - 植民地時代の国境線が民族紛争の一因
    - アフリカの人口は急増中（2050年に世界の約4分の1）
    - アフリカ連合（AU）：アフリカ諸国の協力組織
    - 日本はTICADやNGOを通じてアフリカを支援
  - **砂漠化問題**
    - 砂漠化の原因：過放牧・過耕作・気候変動
    - 「アフリカ緑の長城」：東西約8000kmにわたる植林計画
  - **ルワンダの民族紛争と和解**
    - ルワンダ：1994年にフツ族とツチ族の民族紛争
    - ガチャチャ裁判：住民参加型の対話で和解を推進
    - ICT産業の育成で経済復興（「アフリカのシンガポール」）

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

- 全 15 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
