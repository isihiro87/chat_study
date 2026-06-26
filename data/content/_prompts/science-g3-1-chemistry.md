# 一問一答コンテンツ生成プロンプト — 理科 中3：化学変化とイオン

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **理科 中3 / 化学変化とイオン**（`1-chemistry`）
- 出力先: `data/content/science/grade3/1-chemistry/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/science/units/grade3/1-chemistry/topics/3年理科ワーク1章.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/science/units/grade3/1-chemistry/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 6 トピック）

### 電解質と電気分解（電解質・非電解質・電気分解のしくみ）

- 出力先: `data/content/science/grade3/1-chemistry/electrolyte-electrolysis.json`
- Web版ソース: `src/data/subjects/science/units/grade3/1-chemistry/topics/1-electrolyte-electrolysis/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **電解質と非電解質**
    - 電解質：塩化ナトリウム（NaCl）、塩化水素（HCl）、水酸化ナトリウム（NaOH）、塩化銅（CuCl₂）、硫酸など
    - 非電解質：砂糖、エタノールなど（水に溶けてもイオンにならない）
    - 電解質の水溶液に電流が流れるのは、イオンが電気を運ぶから
    - 蒸留水だけでは電流は流れない（イオンが存在しないため）
  - **塩化銅水溶液の電気分解**
    - 陽極 = 電源の＋極につないだ電極、陰極 = 電源の−極につないだ電極
    - 塩化銅水溶液の電気分解：陰極に銅（赤色の固体）、陽極に塩素（刺激臭の気体）
    - 化学反応式：CuCl₂ → Cu + Cl₂
    - 長時間続けると水溶液の青色がうすくなる（Cu²⁺が減少するため）
    - 陰極には陽イオン（Cu²⁺）が引きつけられ、電子を受け取って銅原子になり付着する
  - **塩酸の電気分解**
    - 塩酸の電気分解にはH字管を使用する
    - 陰極から水素が発生（確認：マッチの火を近づけるとポンと音を立てて燃える）
    - 陽極から塩素が発生（確認：刺激臭、赤インクの色が消える＝漂白作用）
    - 水素のほうが多く集まる（塩素は水に溶けやすいため、一部が溶けて量が少なくなる）

### 原子の構造とイオン（原子核・電子・イオン式・電離式）

- 出力先: `data/content/science/grade3/1-chemistry/atom-ion.json`
- Web版ソース: `src/data/subjects/science/units/grade3/1-chemistry/topics/2-atom-ion/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **原子の構造**
    - 原子核 = 陽子（＋）＋ 中性子（電気なし）。電子（−）が原子核のまわりを回る
    - 陽子の数 ＝ 電子の数 → ＋と−が打ち消し合い、原子全体は電気的に中性
    - 同位体（アイソトープ）：同じ元素で中性子の数が異なる原子どうし
  - **イオンとイオン式**
    - 陽イオン：原子が電子を失ってできる（例：Na⁺、Cu²⁺、H⁺、Mg²⁺）
    - 陰イオン：原子が電子を得てできる（例：Cl⁻、OH⁻、SO₄²⁻）
    - イオン式の書き方：元素記号の右上に＋/−の符号を書く（2個なら2+、2−と書く）
    - 多原子イオン：複数の原子からなるイオン（OH⁻、SO₄²⁻、NH₄⁺）
  - **電離式**
    - NaCl → Na⁺ + Cl⁻（塩化ナトリウム）
    - HCl → H⁺ + Cl⁻（塩化水素）
    - CuCl₂ → Cu²⁺ + 2Cl⁻（塩化銅）
    - NaOH → Na⁺ + OH⁻（水酸化ナトリウム）

### 酸性・アルカリ性の性質（指示薬・pH・酸とアルカリの正体）

- 出力先: `data/content/science/grade3/1-chemistry/acid-alkali-property.json`
- Web版ソース: `src/data/subjects/science/units/grade3/1-chemistry/topics/3-acid-alkali-property/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **酸性とアルカリ性の性質**
    - リトマス紙：酸性→青を赤に変える、アルカリ性→赤を青に変える、中性→変化なし
    - BTB溶液：酸性→黄色、中性→緑色、アルカリ性→青色
    - フェノールフタレイン溶液：アルカリ性で赤色に変わる（酸性・中性では無色）
    - 酸性の水溶液にマグネシウムリボンを入れると水素（H₂）が発生する
  - **酸性・アルカリ性の水溶液の例**
    - 酸性：塩酸、硫酸、酢酸（食酢）、炭酸水
    - アルカリ性：水酸化ナトリウム水溶液、石灰水、アンモニア水
    - 中性：食塩水、砂糖水
  - **酸とアルカリの正体とpH**
    - 酸性の正体：H⁺（水素イオン）が多い
    - アルカリ性の正体：OH⁻（水酸化物イオン）が多い
    - pH 0〜6：酸性、pH 7：中性、pH 8〜14：アルカリ性
    - pH 2とpH 5ではpH 2のほうが酸性が強い（小さいほど強い酸性）
  - **酸・アルカリの電離式**
    - 塩酸：HCl → H⁺ + Cl⁻
    - 硫酸：H₂SO₄ → 2H⁺ + SO₄²⁻
    - 水酸化ナトリウム：NaOH → Na⁺ + OH⁻
  - **酸性・アルカリ性を示すものの正体の実験**
    - 塩酸＋青色リトマス紙：変色が陽極側に広がる（H⁺が陰極に移動）
    - 水酸化ナトリウム＋赤色リトマス紙：変色が陰極側に広がる（OH⁻が陽極に移動）
    - 酸性の正体はH⁺（陽イオン）、アルカリ性の正体はOH⁻（陰イオン）と証明できる

### 中和反応（中和のしくみ・塩（えん）・さまざまな中和）

- 出力先: `data/content/science/grade3/1-chemistry/neutralization.json`
- Web版ソース: `src/data/subjects/science/units/grade3/1-chemistry/topics/4-neutralization/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **中和と塩（えん）**
    - 中和：H⁺ + OH⁻ → H₂O（酸とアルカリが打ち消し合う）
    - 塩（えん）：酸の陰イオンとアルカリの陽イオンが結びついた物質
    - 中和は発熱反応（温度が上がる）
    - BTB溶液の色変化：黄色（酸性）→緑色（中性）→青色（アルカリ性）
  - **さまざまな中和反応**
    - HCl + NaOH → NaCl（塩化ナトリウム）+ H₂O
    - HNO₃ + KOH → KNO₃（硝酸カリウム）+ H₂O
    - H₂SO₄ + Ba(OH)₂ → BaSO₄（硫酸バリウム・白い沈殿）+ 2H₂O
    - H₂CO₃ + Ca(OH)₂ → CaCO₃（炭酸カルシウム・白い沈殿）+ 2H₂O

### 電池のしくみ（電池の条件・電極反応・イオンへのなりやすさ）

- 出力先: `data/content/science/grade3/1-chemistry/battery-basics.json`
- Web版ソース: `src/data/subjects/science/units/grade3/1-chemistry/topics/5-battery-basics/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **電池のしくみ**
    - 電池の2条件：①異なる2種類の金属 ②電解質水溶液
    - 同じ金属2枚 → イオンへのなりやすさの差がなく電子が移動しない → NG
    - 蒸留水 → イオンが存在しない → NG
    - 砂糖水 → 非電解質（分子のまま）でイオンにならない → NG
    - イオンになりやすい金属 → −極（電子を放出する側）
  - **電極の反応と電子の流れ**
    - −極（Zn板）: Zn → Zn²⁺ + 2e⁻（亜鉛が溶けて小さくなる）
    - ＋極（Cu板）: 2H⁺ + 2e⁻ → H₂（水素が発生）
    - 電子の流れ：−極（Zn）→ 導線 → ＋極（Cu）
    - 電流の向き：＋極 → −極（電子の流れと逆！）
    - ＋極表面に水素の気泡が付着すると電圧が低下する（簡単な電池の欠点）
  - **金属のイオンへのなりやすさ**
    - イオンへのなりやすさの大きい順：Mg（マグネシウム） > Zn（亜鉛） > Fe（鉄） > Cu（銅） > Ag（銀）
    - イオンへのなりやすさが大きい金属 = 電子を失いやすい = −極になる
    - 2つの金属のイオンへのなりやすさの差が大きいほど、大きな電圧が得られる
    - 硫酸銅水溶液 + Zn板 → Zn板に赤色の銅が付着（Zn > Cuだから）
    - 硝酸銀水溶液 + Cu線 → Cu線に銀が付着、水溶液が青色に（Cu > Agだから）

### いろいろな電池（ダニエル電池・一次電池・二次電池・燃料電池）

- 出力先: `data/content/science/grade3/1-chemistry/battery-types.json`
- Web版ソース: `src/data/subjects/science/units/grade3/1-chemistry/topics/6-battery-types/index.ts`（既存 flashcards 28件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **ダニエル電池**
    - ダニエル電池：Zn板（−極）+ ZnSO₄水溶液 ｜セロハン膜｜ CuSO₄水溶液 + Cu板（＋極）
    - −極: Zn → Zn²⁺ + 2e⁻（Zn板が溶ける）、＋極: Cu²⁺ + 2e⁻ → Cu（Cu板に銅が付着）
    - CuSO₄水溶液の青色がうすくなる（Cu²⁺が減少するため）
    - セロハン膜：2つの水溶液の混合を防ぎ、イオンだけを通す
  - **身近な電池の種類**
    - 一次電池：マンガン乾電池、アルカリ乾電池（使い切り）
    - 二次電池：リチウムイオン電池、鉛蓄電池、ニッケル水素電池（充電 = 逆向きの化学反応）
  - **燃料電池**
    - 燃料電池：2H₂ + O₂ → 2H₂O（水の電気分解 2H₂O → 2H₂ + O₂ の逆反応）
    - 水しか排出しないクリーンエネルギー

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
