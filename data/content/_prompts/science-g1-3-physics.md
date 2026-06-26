# 一問一答コンテンツ生成プロンプト — 理科 中1：光・音・力の世界

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **理科 中1 / 光・音・力の世界**（`3-physics`）
- 出力先: `data/content/science/grade1/3-physics/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/science/units/grade1/3-physics/1年理科ワーク3章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/science/units/grade1/3-physics/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 3 トピック）

### 光の世界（光の直進・反射・屈折・レンズ）

- 出力先: `data/content/science/grade1/3-physics/light.json`
- Web版ソース: `src/data/subjects/science/units/grade1/3-physics/topics/1-light/index.ts`（既存 flashcards 30件 / quiz 32件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **光の直進と反射**
    - 光源：自ら光を出す物体（太陽・電球など）
    - 反射の法則：入射角＝反射角
    - 乱反射：ざらざらした面でさまざまな方向に反射する現象
  - **光の屈折と全反射**
    - 屈折：光が異なる物質の境界面で進む方向が変わる現象
    - 空気→ガラス・水：屈折角＜入射角（境界面に近づく）
    - 全反射：入射角が大きいと光がすべて反射する現象（光ファイバーに利用）
  - **凸レンズと像**
    - 凸レンズ：中央がふくらんだレンズ。光を集める
    - 実像：焦点より遠い物体の像。上下左右が逆。スクリーンに映る
    - 虚像：焦点より近い物体の像。正立で大きい。スクリーンに映らない

### 音の世界（音の伝わり方・振幅・振動数）

- 出力先: `data/content/science/grade1/3-physics/sound.json`
- Web版ソース: `src/data/subjects/science/units/grade1/3-physics/topics/2-sound/index.ts`（既存 flashcards 24件 / quiz 32件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **音の発生と伝わり方**
    - 音源：振動して音を出している物体
    - 音は物質の振動が波として伝わる（真空中では伝わらない）
    - 空気中の音速：約340m/s
  - **音の大きさと高さ**
    - 音の大きさ：振幅が大きい → 大きい音
    - 音の高さ：振動数が多い → 高い音
    - 振動数の単位：Hz（ヘルツ）＝1秒間の振動の回数
  - **弦の振動と音**
    - 弦が短い・細い・強く張る → 振動数が大きい → 高い音
    - 弦を強くはじく → 振幅が大きい → 大きい音
    - オシロスコープ：音の波形を画面に表示する装置

### 力の世界（力のはたらき・フックの法則・力のつり合い）

- 出力先: `data/content/science/grade1/3-physics/force.json`
- Web版ソース: `src/data/subjects/science/units/grade1/3-physics/topics/3-force/index.ts`（既存 flashcards 24件 / quiz 32件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **力の3つのはたらきとさまざまな力**
    - 力の3つのはたらき：形を変える・運動の状態を変える・支える
    - 重力：地球が物体を引く力（地球の中心に向かう）
    - 摩擦力：面にそって運動をさまたげる向きにはたらく力
  - **力のはかり方とフックの法則**
    - 力の単位：N（ニュートン）。約100gの物体にはたらく重力が約1N
    - フックの法則：ばねの力の大きさとばねののびは比例する
    - ばねばかり：ばねののびを利用して力をはかる器具
  - **力の表し方とつり合い**
    - 力の3要素：作用点・力の向き・力の大きさ
    - 2力のつり合いの3条件：一直線上・大きさが等しい・向きが反対
    - 重力（N）と質量（kg）は異なる。質量は場所によらず一定

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
