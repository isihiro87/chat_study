# 一問一答コンテンツ生成プロンプト — 地理 中2：日本の地域的特色

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **地理 中2 / 日本の地域的特色**（`2-japan-features`）
- 出力先: `data/content/geography/grade2/2-japan-features/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- （この単元のPDFは見当たりません。Web版ソースの解説・既存FC/クイズを主素材にしてください）

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/geography/units/grade2/2-japan-features/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 7 トピック）

### 地形から見た日本の特色（山地・河川・海岸・海流の特徴）

- 出力先: `data/content/geography/grade2/2-japan-features/landforms.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/2-japan-features/topics/1-landforms/index.ts`（既存 flashcards 28件 / quiz 27件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **環太平洋造山帯と日本の山地**
    - 日本は環太平洋造山帯に位置し、火山活動・地震が活発
    - 国土の約4分の3が山地・丘陵地（日本アルプスなど）
    - フォッサマグナ：本州中央部の大地溝帯（東西の地質の境目）
  - **日本の河川と地形**
    - 日本の河川：距離が短い・流れが急・流域面積が狭い
    - 扇状地（山から平地に出る所）・三角州（河口付近）が形成される
    - 平野・盆地・台地など、河川がつくる多様な地形
  - **日本の海岸と海流**
    - リアス海岸（三陸海岸など）・砂丘（鳥取砂丘）など多様な海岸地形
    - 海溝・大陸棚が日本列島の周辺に存在
    - 暖流（黒潮・対馬海流）と寒流（親潮）がぶつかる潮目＝好漁場

### 気候から見た日本の特色（四季の変化と6つの気候区分）

- 出力先: `data/content/geography/grade2/2-japan-features/climate.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/2-japan-features/topics/2-climate/index.ts`（既存 flashcards 28件 / quiz 27件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **日本の気候の特徴**
    - 温暖湿潤気候が中心で、四季がはっきりしている
    - 梅雨・台風・季節風（モンスーン）など季節ごとの気象現象
    - 季節風：夏は太平洋側に雨、冬は日本海側に雪をもたらす
  - **6つの気候区分**
    - 北海道の気候：冬が厳しく梅雨がない
    - 日本海側の気候：冬に大雪 ／ 太平洋側の気候：夏に多雨、冬は晴天
    - 中央高地：気温差大・少雨 ／ 瀬戸内：温暖・少雨 ／ 南西諸島：亜熱帯的
  - **気候区分を決める要因**
    - 緯度・標高・海流・季節風・地形が気候区分を決める
    - 山脈が季節風をさえぎり、日本海側と太平洋側の気候差を生む
    - 黒潮（暖流）→温暖、親潮（寒流）→冷涼の影響

### 自然災害と防災・減災（地震・台風・火山と防災の取り組み）

- 出力先: `data/content/geography/grade2/2-japan-features/disasters.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/2-japan-features/topics/3-disasters/index.ts`（既存 flashcards 22件 / quiz 16件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **地震・津波・火山による災害**
    - 環太平洋造山帯に位置し、地震・火山の噴火が頻繁に発生
    - 海底地震による津波が沿岸部に甚大な被害をもたらす
    - 日本には100以上の活火山があり、噴火リスクがある
  - **気象災害**
    - 台風：夏〜秋に接近し暴風・大雨をもたらす
    - 集中豪雨 → 土石流・洪水・がけ崩れの原因に
    - 冷害（農作物の被害）・干害（水不足）・雪崩も発生
  - **防災・減災の取り組み**
    - ハザードマップ：災害リスクと避難場所を示した地図
    - 公助（国・自治体）・自助（自分で守る）・共助（地域で助け合う）
    - 日頃からの備え（避難経路の確認・非常持ち出し品の準備）が重要

### 人口から見た日本の特色（過密と過疎・少子高齢化）

- 出力先: `data/content/geography/grade2/2-japan-features/population.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/2-japan-features/topics/4-population/index.ts`（既存 flashcards 29件 / quiz 15件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **都市への人口集中と過密**
    - 三大都市圏（東京・大阪・名古屋）と地方中枢都市に人口が集中
    - 過密による問題：通勤ラッシュ・住宅不足・交通渋滞
    - ドーナツ化現象：都心の地価高騰→郊外に人口が移動
  - **農村・山間部・離島の過疎化**
    - 農村・山間部・離島で過疎化が進行（若者の都市への流出）
    - 学校・病院の統廃合、公共交通の廃止など地域維持が困難に
    - 地域おこし・Iターン・Uターンなどの過疎対策
  - **少子高齢化の進行**
    - 人口ピラミッド：ピラミッド型→つぼ型に変化
    - 出生率の低下（子どもの減少）と平均寿命の延び（高齢者の増加）
    - 課題：労働力不足・社会保障費の増大・地域社会の衰退

### 資源・エネルギーから見た日本の特色（低い自給率と再生可能エネルギー）

- 出力先: `data/content/geography/grade2/2-japan-features/energy.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/2-japan-features/topics/5-energy/index.ts`（既存 flashcards 34件 / quiz 16件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **鉱産資源の輸入依存**
    - 日本は鉱産資源に乏しく、石油・石炭・天然ガスなどを輸入に依存
    - エネルギー自給率が先進国の中でも特に低い
    - 石油の輸入は中東地域に大きく依存
  - **再生可能エネルギーへの転換**
    - 化石燃料依存を減らし、地球温暖化対策として再生可能エネルギーを推進
    - 太陽光・風力・水力・地熱・バイオマスなどの発電方法
    - 日本は地熱資源が豊富だが、再生可能エネルギーの割合はまだ低い
  - **持続可能な社会に向けた取り組み**
    - 3R：リデュース（減らす）・リユース（再使用）・リサイクル（再資源化）
    - 都市鉱山：使用済み製品からレアメタルを回収
    - 持続可能な社会のために一人ひとりの取り組みが重要

### 産業・交通から見た日本の特色（農業・工業・サービス業と交通網）

- 出力先: `data/content/geography/grade2/2-japan-features/industry.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/2-japan-features/topics/6-industry/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **農業と食料自給率**
    - 食料自給率：カロリーベースで約40%前後（先進国の中でも低い）
    - 農産物のブランド化で付加価値をつける取り組み
    - スマート農業（IT活用）や大規模化も推進
  - **工業とサービス業**
    - 太平洋ベルトに工業地域・工業地帯が集中
    - 四大工業地帯：京浜・中京・阪神・北九州
    - 第三次産業（サービス業）が就業者の約7割。ICTも急成長
  - **交通網と通信網の発達**
    - 新幹線・高速道路で主要都市間の移動時間が大幅短縮
    - 東海道新幹線が三大都市圏を結ぶ大動脈
    - インターネット通信網の普及 → テレワーク・オンライン教育の広がり

### 地域区分の視点（多様な視点で地域を分ける）

- 出力先: `data/content/geography/grade2/2-japan-features/regional-division.json`
- Web版ソース: `src/data/subjects/geography/units/grade2/2-japan-features/topics/7-regional-division/index.ts`（既存 flashcards 28件 / quiz 27件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **地域区分とは何か**
    - 地域区分：さまざまな基準で地域を分けること
    - 自然的特徴（地形・気候）や人文的特徴（人口・産業）を基準にする
    - 使う基準によって同じ地域でも異なる区分になる
  - **多様な視点による地域区分**
    - 標高による区分：山地の多い地域と平野の地域
    - 人口による区分：都市部（高密度）と農村部（低密度）
    - 産業別就業者数・移動時間など、目的に応じてさまざまな視点で区分できる
  - **7つの地方区分と地域の見方**
    - 7つの地方区分：北海道・東北・関東・中部・近畿・中国四国・九州
    - 同じ地方でも地域の特色はさまざま（中部地方の日本海側と太平洋側など）
    - テーマや目的に応じて適切な視点を選んで地域区分を行うことが大切

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

- 全 7 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
