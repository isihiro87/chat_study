# 一問一答コンテンツ生成プロンプト — 理科 中3：運動とエネルギー

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **理科 中3 / 運動とエネルギー**（`3-physics`）
- 出力先: `data/content/science/grade3/3-physics/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/science/units/grade3/3-physics/3年理科ワーク3章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/science/units/grade3/3-physics/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 5 トピック）

### 物体の運動（速さ・記録タイマー・等速直線運動）

- 出力先: `data/content/science/grade3/3-physics/object-motion.json`
- Web版ソース: `src/data/subjects/science/units/grade3/3-physics/topics/1-object-motion/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **運動の記録と速さ**
    - 記録タイマー：東日本50回/秒（0.02秒間隔）、西日本60回/秒
    - 平均の速さ = 移動距離 ÷ かかった時間
    - 瞬間の速さ：ごく短い時間（打点間隔が十分短いとき）の速さ
  - **等速直線運動**
    - 等速直線運動：速さも向きも変わらない運動
    - 記録テープの打点間隔がすべて等しい
    - 移動距離は時間に比例する（グラフは原点を通る直線）
  - **だんだん速くなる運動・おそくなる運動**
    - だんだん速くなる運動：斜面を下る物体、自由落下（重力で速さが一定の割合で増加）
    - だんだんおそくなる運動：斜面を上る物体、摩擦力がはたらく運動
    - 記録テープの打点間隔の変化で運動のようすがわかる

### 力のはたらき方（合力と分力・慣性・作用反作用）

- 出力先: `data/content/science/grade3/3-physics/force-action.json`
- Web版ソース: `src/data/subjects/science/units/grade3/3-physics/topics/2-force-action/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **力の合成と分解**
    - 合力：2つの力を1つにまとめた力。平行四辺形の対角線で求める
    - 分力：1つの力を2つに分けた力。斜面上の重力分解が代表例
    - 同じ向きの2力の合力 = 和、逆向きの2力の合力 = 差
  - **慣性の法則**
    - 慣性の法則：合力が0なら、静止→静止のまま、運動→等速直線運動を続ける
    - 慣性：物体がもとの運動状態を続けようとする性質
    - 例：電車が急ブレーキ → 乗客が前に倒れる（慣性で前に進み続けようとする）
  - **作用・反作用の法則**
    - 作用・反作用：同じ大きさ、逆向き、一直線上、別々の物体にはたらく
    - つり合いとの違い：つり合いは同じ物体、作用・反作用は別々の物体
    - 例：壁を押す→壁から押し返される、ロケットのガス噴射

### エネルギーと力学的エネルギー（エネルギーの種類・力学的エネルギーの保存）

- 出力先: `data/content/science/grade3/3-physics/energy-work.json`
- Web版ソース: `src/data/subjects/science/units/grade3/3-physics/topics/3-energy-work/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **エネルギーと力学的エネルギー**
    - 運動エネルギー：運動している物体がもつ。速さが大きいほど、質量が大きいほど大きい
    - 位置エネルギー：高い位置にある物体がもつ。高さが高いほど、質量が大きいほど大きい
    - 力学的エネルギー = 運動エネルギー + 位置エネルギー（摩擦なしなら保存される）

### 水圧と浮力（水中ではたらく力）

- 出力先: `data/content/science/grade3/3-physics/water-pressure.json`
- Web版ソース: `src/data/subjects/science/units/grade3/3-physics/topics/3-water-pressure/index.ts`（既存 flashcards 18件 / quiz 12件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **水圧**
    - 水圧：水中の物体にあらゆる方向からはたらく圧力
    - 深いほど水圧は大きくなる（上にある水の重力が増えるため）
    - 同じ深さでは方向によらず水圧は等しい
  - **浮力**
    - 浮力 = 上向きの水圧 − 下向きの水圧（上下の水圧差）
    - 浮力は水中にある物体の体積に比例。質量・深さには無関係
    - 水面に浮いて静止 → 浮力 = 重力（つり合い）

### 仕事とエネルギー変換（仕事の原理・仕事率・変換効率）

- 出力先: `data/content/science/grade3/3-physics/work-energy-conversion.json`
- Web版ソース: `src/data/subjects/science/units/grade3/3-physics/topics/5-work-energy-conversion/index.ts`（既存 flashcards 18件 / quiz 9件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **仕事と仕事率**
    - 仕事[J] = 力の大きさ[N] × 力の向きに動いた距離[m]
    - 仕事の原理：滑車やてこを使っても、仕事の総量は変わらない
    - 仕事率[W] = 仕事[J] ÷ かかった時間[s]
  - **エネルギーの変換と保存**
    - 変換効率 = 有効に利用できたエネルギー ÷ 投入したエネルギー × 100[%]
    - 熱の伝わり方：伝導（物質中を伝わる）、対流（液体・気体の流れ）、放射（電磁波）
    - エネルギー保存の法則：エネルギーの総量はつねに一定

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

- 全 5 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
