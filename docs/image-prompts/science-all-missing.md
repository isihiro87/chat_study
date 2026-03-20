# 理科 未作成画像 AI生成プロンプト一覧

## 凡例

- **[NEW]** = 新規作成が必要
- **[REPLACE]** = 既存SVGをAI画像に置き換え（実物の構造を幾何学図形で表現しているため）

---

## 共通スタイル指示（全プロンプトに含める）

以下の共通指示は、各プロンプトの末尾に `{共通スタイル}` として参照されていますが、
実際のAI生成時には省略せずにすべてのプロンプトに含めてください。

```
Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

---

## 1. 生物分野

### 1-1. 花のつくり（断面図）[REPLACE]

**現在のファイル**: `public/images/science/grade1/biology/flower-structure.svg`
**置き換え先**: `public/images/science/grade1/biology/flower-structure.png`
**コード参照箇所**: grade1 biology topic 3 (flower-seed)

```
A cross-section diagram of a typical flower (花のつくり) for Japanese middle school science.

Show a bisected flower from the side, revealing the internal structure:
- 花弁 (petals): 4-5 pink/light red petals, shown in cross-section with one petal facing forward
- めしべ (pistil) in the center: 柱頭 (stigma) at top, 花柱 (style) as the stalk, 子房 (ovary) at the base
- おしべ (stamens) on either side: 花糸 (filament) topped with やく (anther) containing yellow 花粉 (pollen)
- がく (sepals): small green structures at the base of the flower
- 花たく (receptacle): the base where all parts connect to the stem
- 胚珠 (ovules): small round structures visible inside the ovary (子房), highlighted in amber/yellow

Each part labeled with a leader line and Japanese name.
Bottom note: "受粉 → 子房が果実に、胚珠が種子になる"

Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

### 1-2. 相同器官の比較 [REPLACE]

**現在のファイル**: `public/images/science/grade3/biology/homologous-organs.svg`
**置き換え先**: `public/images/science/grade3/biology/homologous-organs.png`
**コード参照箇所**: grade3 biology topic 5 (vertebrate-evolution)

```
A comparison diagram of homologous organs (相同器官) for Japanese middle school science.

Show the forelimb bone structures of 4 animals side by side:
1. ヒトの腕 (human arm) - used for grasping
2. クジラのひれ (whale flipper) - used for swimming
3. コウモリの翼 (bat wing) - used for flying
4. ウマの前あし (horse foreleg) - used for running

For each limb, draw the skeletal structure showing:
- 上腕骨 (humerus) in blue (#3B82F6)
- 前腕骨 (radius/ulna) in cyan (#06B6D4)
- 手根骨 (carpals) in amber (#F59E0B)
- 指の骨 (phalanges) in green (#10B981)

The bones should look anatomically proportional (not rectangles) - elongated for bat fingers, short and wide for whale, etc.
Each animal's limb is in a separate panel with its function labeled below.
A color-coded legend on the right shows which color = which bone.
Title: "相同器官の比較"
Subtitle: "形はちがうが、骨の基本構造は同じ → 共通の祖先をもつ証拠"

Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

### 1-3. 染色体の受けつがれ方（減数分裂と受精）[NEW]

**ファイル名**: `public/images/science/grade3/biology/meiosis-process.png`
**コード参照**: grade3 biology topic 2 (reproduction) に追加予定
**参考**: 3年理科ワーク2章 p.73「学習4 染色体の受けつがれ方」

```
A diagram showing how chromosomes are inherited through meiosis and fertilization, for Japanese middle school science. This is for 中学3年 level — do NOT use "2n" or "n" notation.

The diagram has two sections side by side:

【Left section: 無性生殖 (Asexual reproduction)】
- A parent cell (親) shown as a rounded rectangle containing 4 chromosome bars (2 blue bars and 2 red bars, representing 2 pairs)
- Label: "親" above the cell
- Arrow labeled "体細胞分裂" pointing down
- A child cell (子) containing the same 4 chromosome bars (2 blue, 2 red) — identical to the parent
- Label: "子" below the cell
- Note below: "親と同じ染色体 → 同じ形質"

【Right section: 有性生殖 (Sexual reproduction)】
- Top row: Two parent cells side by side:
  - Left parent cell containing 4 chromosome bars (2 blue, 2 red), labeled "親（雌）"
  - Right parent cell containing 4 chromosome bars (2 blue, 2 red), labeled "親（雄）"
- From each parent, an arrow labeled "減数分裂" points downward
- Middle row: Two gamete cells (生殖細胞), each containing only 2 chromosome bars (1 blue, 1 red) — half the number of the parent
  - Left gamete labeled "卵"
  - Right gamete labeled "精子"
- From both gametes, arrows labeled "受精" merge downward into one cell
- Bottom: A fertilized egg cell (受精卵) containing 4 chromosome bars (2 blue, 2 red) — the full number restored
- Label: "子" below
- Note below: "両方の親から半分ずつ染色体を受けつぐ → 両親と異なる形質が現れることがある"

Key visual rules:
- Chromosomes are shown as simple vertical bars (not X-shapes), like the textbook model
- Use blue bars for one pair and red bars for the other pair
- Each cell is a rounded rectangle or oval
- The chromosome count is visually obvious: parent = 4 bars, gamete = 2 bars, fertilized egg = 4 bars
- No "2n" or "n" notation anywhere

Title: "染色体の受けつがれ方"

Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

### 1-4. 中間的な化石（イクチオステガ・始祖鳥）[NEW]

**ファイル名**: `public/images/science/grade3/biology/transitional-fossils.png`
**コード参照**: grade3 biology topic 5 (vertebrate-evolution) に追加予定

```
A comparison diagram of two transitional fossils for Japanese middle school science.

Left side: "イクチオステガ (Ichthyostega)" - a creature with fish-like body but with four primitive limbs.
Highlight features: "魚類の特徴" (fish tail, scales) with blue labels, "両生類の特徴" (four legs) with green labels.

Right side: "始祖鳥 (Archaeopteryx)" - a creature with reptile body but with feathered wings.
Highlight features: "は虫類の特徴" (teeth, clawed wings, long tail) with red labels, "鳥類の特徴" (feathers, wings) with amber labels.

Center text: "中間的な生物の化石 = 進化の証拠"

Each creature drawn as a simplified but recognizable silhouette/outline illustration.

Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

### 1-5. メンデルのF1・F2世代の結果 [NEW]

**ファイル名**: `public/images/science/grade3/biology/mendel-f1-f2.png`
**コード参照**: grade3 biology topic 3 (heredity-rules) に追加予定

```
A diagram showing Mendel's pea plant cross-breeding results.

Top row (P generation): Round pea (AA, dominant, green circle) crossed with Wrinkled pea (aa, recessive, yellow circle). Label "親 (P)".
Middle row (F1 generation): All Round peas (Aa). Label "子 (F1) - すべて丸".
Bottom row (F2 generation): 3 Round peas and 1 Wrinkled pea. Label "孫 (F2) - 丸:しわ = 3:1".

Include a simple Punnett square on the right side showing Aa × Aa = AA, Aa, Aa, aa.
Use clear color coding: dominant trait (丸) in green, recessive trait (しわ) in yellow.
Japanese labels throughout.
Arrows connecting each generation.

Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

---

## 2. 化学分野

### 2-1. 一次電池・二次電池の比較図 [NEW]

**ファイル名**: `public/images/science/grade3/chemistry/battery-types.png`
**コード参照**: grade3 chemistry topic 6 (battery-types) に追加予定

```
A side-by-side comparison diagram of battery types for Japanese middle school science.

Left section titled "一次電池（使い切り）":
- A simplified illustration of a cylindrical manganese dry cell (マンガン乾電池)
- A single arrow pointing right labeled "化学エネルギー → 電気エネルギー"
- Small text: "マンガン乾電池、アルカリ乾電池"
- The arrow is one-directional, indicating the reaction cannot be reversed

Right section titled "二次電池（充電可能）":
- A simplified illustration of a rectangular lithium-ion battery (リチウムイオン電池)
- Two arrows (one right, one left) labeled "充電 ⇄ 放電"
- Small text: "リチウムイオン電池、鉛蓄電池"
- The double arrow indicates reversible reactions

Between them, a clear visual distinction showing one-way vs reversible reactions.

Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

---

## 3. 物理分野

### 3-1. 速さと距離・時間のグラフ [NEW]

**ファイル名**: `public/images/science/grade3/physics/motion-graphs.png`
**コード参照**: grade3 physics topic 1 (object-motion) に追加予定

```
Two side-by-side graphs for Japanese middle school physics, showing motion analysis.

Left graph: "距離-時間グラフ"
- X-axis: "時間 (s)" from 0 to 5
- Y-axis: "距離 (m)" from 0 to 25
- Blue straight line from origin (等速直線運動) - labeled "等速直線運動"
- Red curved line from origin, curving upward (だんだん速くなる運動) - labeled "加速する運動"
- Light gray grid background

Right graph: "速さ-時間グラフ"
- X-axis: "時間 (s)" from 0 to 5
- Y-axis: "速さ (m/s)" from 0 to 10
- Blue horizontal line (等速直線運動) - labeled "等速直線運動"
- Red ascending straight line from origin (だんだん速くなる運動) - labeled "加速する運動"
- Light gray grid background

Clean, minimal design with clear axis labels in Japanese. Both graphs use the same color scheme for consistency.

Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

### 3-2. 水圧と浮力の模式図 [NEW]

**ファイル名**: `public/images/science/grade3/physics/water-pressure-buoyancy.png`
**コード参照**: grade3 physics topic 2 (force-action) に追加予定

```
A diagram showing water pressure and buoyancy for Japanese middle school science.

Left section: "水圧" (Water Pressure)
- A container of blue-tinted water
- A rectangular object submerged in the water
- Arrows pointing inward from all directions (up, down, left, right) onto the object
- Deeper arrows are longer/bolder to show pressure increases with depth
- Label: "深いほど水圧が大きい"
- Depth markers on the side

Right section: "浮力" (Buoyancy)
- Same container and object setup
- Large upward arrow from bottom of object labeled "下面にかかる水圧（大）"
- Smaller downward arrow from top of object labeled "上面にかかる水圧（小）"
- Net upward arrow beside the object labeled "浮力 = 下面の水圧 − 上面の水圧"
- Formula at bottom: "浮力の大きさ = 物体が押しのけた水の重さ"

Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

### 3-3. 斜面上の力の分解 [NEW]

**ファイル名**: `public/images/science/grade3/physics/incline-forces.png`
**コード参照**: grade3 physics topic 2 (force-action) に追加予定

```
A force decomposition diagram on an inclined plane for Japanese middle school physics.

Show an inclined surface (斜面) at approximately 30 degrees, with a box-shaped object on it.
The object has three force arrows:
1. 重力 (gravity): a red downward arrow from the center of the object, pointing straight down. Label "重力 (W)" in red.
2. 斜面方向の分力: a blue arrow pointing down along the slope surface. Label "斜面に平行な分力" in blue.
3. 斜面に垂直な分力: a green arrow pointing perpendicular to the slope surface (into the slope). Label "斜面に垂直な分力" in green.

Show dashed lines forming a parallelogram to illustrate the force decomposition.
The angle of the slope is simply indicated by a small arc mark (no Greek letter).
A note: "斜面が急なほど、斜面方向の分力が大きくなる"

Normal force (垂直抗力) shown as a thin gray arrow pointing away from the slope surface.

Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

### 3-4. 慣性の法則の身近な例 [NEW]

**ファイル名**: `public/images/science/grade3/physics/inertia-examples.png`
**コード参照**: grade3 physics topic 2 (force-action) に追加予定

```
Two everyday examples of inertia (慣性の法則) for Japanese middle school physics.

Example 1 (left panel): "電車の急ブレーキ"
- A simple side-view of a train car decelerating (arrow showing train stopping)
- A standing passenger leaning forward due to inertia
- Speech bubble or label: "体は動き続けようとする"
- Arrow showing the direction the passenger falls (forward)

Example 2 (right panel): "テーブルクロス引き"
- A table with a tablecloth, a glass and plate on top
- The cloth being pulled quickly to the right (motion arrow)
- The glass and plate remaining in place (staying still)
- Label: "コップは止まり続けようとする"

Title: "慣性の法則（運動の第一法則）"
Bottom note: "物体は、力を加えられない限り、今の運動状態を続けようとする"

Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

### 3-5. 作用・反作用の法則 [NEW]

**ファイル名**: `public/images/science/grade3/physics/action-reaction.png`
**コード参照**: grade3 physics topic 2 (force-action) に追加予定

```
A diagram illustrating Newton's third law (作用・反作用の法則) for Japanese middle school physics.

Main illustration: Two students on ice skates (or roller skates) facing each other and pushing against each other's hands.
- Student A pushes Student B → arrow pointing right, labeled "作用（AがBを押す力）" in blue
- Student B pushes Student A back → arrow pointing left, labeled "反作用（BがAを押す力）" in red
- Both arrows are the same length (same magnitude)
- Both students slide away from each other (small motion arrows)

Key points listed below:
- "作用と反作用は同じ大きさ"
- "作用と反作用は反対向き"
- "作用と反作用は同時にはたらく"
- "作用と反作用は別々の物体にはたらく"

Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

### 3-6. 記録タイマーのテープ [NEW]

**ファイル名**: `public/images/science/grade3/physics/record-timer-tape.png`
**コード参照**: grade3 physics topic 1 (object-motion) に追加予定

```
A diagram showing how to use a record timer tape (記録タイマーのテープ) to analyze motion, for Japanese middle school physics.
Reference: 3年理科ワーク3章 p.91-92

The diagram has three parts arranged vertically: the tape explanation at top, then two examples (constant speed & acceleration) each showing a tape and its corresponding bar graph.

【Top: 記録タイマーの説明】
A short section showing:
- A horizontal strip of paper tape with dots printed on it
- The dots are small and individually visible
- An annotation showing that the timer prints 50 dots per second (東日本の場合)
- A bracket grouping 5 consecutive dots, labeled: "5打点 = 1/50 × 5 = 0.1秒"
- The key idea: "打点の間隔が大きいほど、速さが速い"

【Middle: おしたとき（等速直線運動）】
Left side - the tape:
- A horizontal paper tape with dots on it
- The dots are evenly spaced throughout
- Vertical lines (labeled A, B, C, D, E, F) cut the tape every 5 dots
- Each segment (AB, BC, CD, DE, EF) is the same length (e.g., all labeled "1.5cm")
- This shows constant speed

Right side - bar graph made from the cut segments:
- Y-axis: "0.1秒間の移動距離 [cm]" with scale (e.g., 0-8)
- X-axis: "時間 [s]" with labels 0.1, 0.2, 0.3, 0.4
- All bars are the same height (equal distance in each 0.1s interval)
- Title above: "おしたとき"

【Bottom: おす力を強めたとき（だんだん速くなる運動）】
Left side - the tape:
- A horizontal paper tape with dots on it
- The first dots are close together (slow), the gaps gradually increase toward the right (faster)
- Vertical lines (labeled A, B, C, D, E, F) cut the tape every 5 dots
- Each successive segment is longer than the previous one
- This shows acceleration

Right side - bar graph made from the cut segments:
- Same axes as above
- Bars get progressively taller from left to right (increasing distance per 0.1s)
- Title above: "おす力を強めたとき"

Title: "記録タイマーによる運動の記録"

Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

---

## 4. 地学分野

### 4-1. 太陽の表面構造 [NEW]

**ファイル名**: `public/images/science/grade3/earth/sun-surface.png`
**コード参照**: grade3 earth topic 1 (celestial-basic) に追加予定

```
A diagram of the Sun's surface features for Japanese middle school science.

Show a large circle representing the Sun with visible features:
- Dark spots on the surface labeled "黒点" (sunspots) with note "温度が低い部分（約4000℃）"
- Wispy outer atmosphere labeled "コロナ" (corona) extending outward as a faint glow
- A flame-like eruption on the edge labeled "プロミネンス" (prominence) shooting out from the surface
- Surface labeled "光球" with note "表面温度: 約6000℃"

Two small sequential sun images at bottom showing sunspots moving across the surface over several days (day 1, day 3, day 5), labeled "黒点の移動 → 太陽の自転の証拠"

Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

### 4-2. 天体の日周運動と星の動き [NEW]

**ファイル名**: `public/images/science/grade3/earth/diurnal-motion.png`
**コード参照**: grade3 earth topic 2 (celestial-observation) に追加予定
**参考**: 3年理科ワーク4章 p.129「学習3 太陽の1日の動き」p.130「学習5 星の1日の動き」

```
A two-part educational diagram of diurnal motion (日周運動) for Japanese middle school science.

【Upper section: 天球上の太陽の動き】
A transparent hemisphere (天球) drawn as a 3D dome, viewed from the WEST side at a slightly elevated angle (西側のやや上方から見た図). This is the standard textbook perspective used in Japanese science education.

CRITICAL layout of cardinal directions as seen from this viewpoint:
- 東 (East) is at the LEFT/BACK of the image
- 南 (South) is at the LEFT/FRONT of the image (viewer's right-hand side when facing the dome)
- 西 (West) is at the RIGHT/FRONT of the image (nearest to viewer)
- 北 (North) is at the RIGHT/BACK of the image

The dome is viewed at an angle so you can see the inside of the dome and the ground plane beneath it.

Elements on the dome:
- 天頂 (zenith): labeled at the very top of the dome
- 子午線: a line drawn on the dome surface connecting 南 on the ground → 天頂 → 北 on the ground (a great circle arc running left-right over the top from this viewpoint)
- Sun's daytime path: a curved arc on the dome surface. The sun rises from 東 (back-left), travels upward across the dome, reaches its highest point where it crosses the 子午線 (this is 南中), then descends to 西 (front-right, nearest to viewer)
- The sun icon is drawn at its highest point (南中) — this is where the arc crosses the 子午線, on the south-facing side of the dome
- 南中高度: the angle between the southern horizon and the sun's 南中 position, shown with an angle arc
- The arc is labeled "昼間の太陽の通り道"
- Below the ground plane, a dashed arc shows "夜間の太陽の通り道"
- An observer figure stands at the center of the ground plane, facing south

【Lower section: 各方位の星の1日の動き】
Four rectangular panels side by side, each showing star trail patterns as curved arrow streaks on a dark/gray background representing the night sky:
- Panel 1 "東の空": Stars move diagonally upward to the right (右斜め上に動く). Ground/horizon line at the bottom.
- Panel 2 "南の空": Stars move in arcs from left to right (東→西), curving upward. The highest arc is at the top center. Ground/horizon at bottom.
- Panel 3 "西の空": Stars move diagonally downward to the right (右斜め下に動く). Ground/horizon at bottom.
- Panel 4 "北の空": Stars move in concentric circles counterclockwise around a fixed central point labeled "北極星". The north star barely moves.

Below the panels:
- A small diagram showing Earth with 地軸 (axis) tilted, and two arrows: "地球の自転（西→東）" and "日周運動（東→西）= 見かけの動き"
- Note: "天体は1日に1回、東から西へ動いて見える（1時間に約15度）"

Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

### 4-3. 年周運動 [NEW]

**ファイル名**: `public/images/science/grade3/earth/annual-motion.png`
**コード参照**: grade3 earth topic 2 (celestial-observation) に追加予定

```
A diagram of annual motion (年周運動) and seasonal constellations for Japanese middle school science.

Central layout:
- Sun (太陽) at the center, drawn as a yellow circle
- Earth's orbital path as an elliptical ring around the sun
- Earth shown at 4 positions corresponding to seasons (top=summer, right=autumn, bottom=winter, left=spring)
- At each position, show the direction the night sky faces (away from sun)

Background constellations visible at each season:
- 春 (Spring): しし座 (Leo)
- 夏 (Summer): さそり座 (Scorpius)
- 秋 (Autumn): ペガスス座 (Pegasus)
- 冬 (Winter): オリオン座 (Orion)

Each constellation shown as a simple dot-and-line pattern.
Label: "地球の公転により、季節ごとに見える星座が変わる"
Note: "黄道 = 太陽が天球上を動くように見える道すじ"

Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

### 4-4. 金星の見え方 [NEW]

**ファイル名**: `public/images/science/grade3/earth/venus-phases.png`
**コード参照**: grade3 earth topic 4 (moon-venus-detail) に追加予定

```
A diagram showing how Venus appears from Earth (金星の見え方) for Japanese middle school science.

Top-down orbital view:
- Sun at center (yellow circle)
- Venus orbit (inner circle) with Venus shown at 6 positions around its orbit
- Earth orbit (outer circle) with Earth fixed at one position
- Dashed lines from Earth to each Venus position showing the line of sight

For each Venus position, show a small inset of how Venus appears (its phase):
- When Venus is between Earth and Sun (内合): thin crescent, large apparent size
- When Venus is on the far side of Sun (外合): nearly full, small apparent size
- Intermediate positions: half-lit (like quarter phases), medium size

Labels:
- "よいの明星" (evening star): Venus visible when east of Sun, with note "夕方、西の空に見える"
- "あけの明星" (morning star): Venus visible when west of Sun, with note "明け方、東の空に見える"
- "最大離角" (greatest elongation): the positions where Venus appears furthest from Sun

Bottom note: "金星は地球より内側を公転 → 真夜中には見えない"

Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

### 4-5. すい星の構造と軌道 [NEW]

**ファイル名**: `public/images/science/grade3/earth/comet-structure.png`
**コード参照**: grade3 earth topic 5 (solar-system-planets) に追加予定

```
A two-part diagram of comets for Japanese middle school science.

Top part: "すい星の構造" (Comet Structure)
- A comet with labeled parts:
  - "核" (nucleus) - small solid center, made of ice and dust, shown as a dark circle
  - "コマ" (coma) - fuzzy atmosphere around the nucleus, shown as a glowing halo
  - "イオンの尾" (ion tail) - straight tail pointing directly away from sun, drawn in blue
  - "ちりの尾" (dust tail) - curved tail, drawn in white/amber
  - Arrow showing "太陽の方向 →" to indicate the sun's direction (tails always point away from sun)

Bottom part: "すい星の軌道" (Comet Orbit)
- Sun at center
- A highly elliptical orbit showing the comet at 4 different positions
- Near sun: comet shown with large, long tail
- Far from sun: comet shown small with no visible tail
- Label: "太陽に近づくと尾が長くなる"

Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

### 4-6. 銀河系の想像図 [NEW]

**ファイル名**: `public/images/science/grade3/earth/milky-way.png`
**コード参照**: grade3 earth topic 6 (universe) に追加予定
**参考**: 3年理科ワーク4章 p.149「学習2 宇宙の広がり」銀河系の想像図

```
A single imaginative illustration of the Milky Way galaxy (銀河系の想像図) for Japanese middle school science, viewed from a slightly elevated oblique angle (斜め上から見た想像図) — NOT two separate top/side views.

The illustration shows:
- A large spiral galaxy with swirling arms of stars, viewed from a slight angle above so that both the spiral structure and the disk thickness are visible
- The galaxy has a bright dense center and spiral arms extending outward
- The disk is visibly thin relative to its width

Labels and measurements marked directly on the illustration:
- "約10万光年" as a horizontal scale line showing the full diameter
- "約1.5万光年" as a vertical scale line showing the thickness of the disk
- "約3万光年" as a line from center to the position of our solar system
- "太陽系" marked with an arrow pointing to a specific location about 2/3 from the center, within one of the spiral arms

Additional labels:
- Near the edge of the galaxy, two arrows pointing in opposite directions along the plane: "夏の天の川の方向" (toward center, brighter) and "冬の天の川の方向" (away from center, dimmer)
- These explain why the Milky Way (天の川) appears as a band of stars in the sky: we are looking along the disk of the galaxy

Bottom text: "銀河系（天の川銀河）…太陽系をふくむ、約2000億個の恒星からなる銀河"

The overall feel should resemble the textbook's 銀河系の想像図 — a single dramatic but educational view of the galaxy with measurement annotations.

Style: flat educational illustration for Japanese middle school (中学校) textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape orientation).
No photorealism, no 3D rendering, no gradients. Simple, diagrammatic, flat design, easy to understand at a glance.
All text labels must be in Japanese. No furigana (ruby text) needed.
Line weight: consistent 2px for main elements, 1px for labels and annotations.
```

---

## サマリー

| # | 分野 | ファイル名 | 種別 | 状態 |
|---|------|-----------|------|------|
| 1-1 | 生物 | flower-structure.png | REPLACE | ⬜ AI画像未生成（SVGは存在） |
| 1-2 | 生物 | homologous-organs.png | REPLACE | ✅ AI画像生成済み |
| 1-3 | 生物 | meiosis-process.png | NEW | ✅ AI画像生成済み |
| 1-4 | 生物 | transitional-fossils.png | NEW | ✅ AI画像生成済み |
| 1-5 | 生物 | mendel-f1-f2.png | NEW | ✅ AI画像生成済み |
| 2-1 | 化学 | battery-types.png | NEW | ✅ AI画像生成済み |
| 3-1 | 物理 | motion-graphs.png | NEW | ✅ AI画像生成済み |
| 3-2 | 物理 | water-pressure-buoyancy.png | NEW | ✅ AI画像生成済み |
| 3-3 | 物理 | incline-forces.png | NEW | ✅ AI画像生成済み |
| 3-4 | 物理 | inertia-examples.png | NEW | ✅ AI画像生成済み |
| 3-5 | 物理 | action-reaction.png | NEW | ✅ AI画像生成済み |
| 3-6 | 物理 | record-timer-tape.svg | NEW | ✅ SVGで作成済み（シンプル図のため） |
| 4-1 | 地学 | sun-surface.png | NEW | ✅ AI画像生成済み |
| 4-2 | 地学 | diurnal-motion.png | NEW | ✅ AI画像生成済み |
| 4-3 | 地学 | annual-motion.png | NEW | ✅ AI画像生成済み |
| 4-4 | 地学 | venus-phases.png | NEW | ✅ AI画像生成済み |
| 4-5 | 地学 | comet-structure.png | NEW | ✅ AI画像生成済み |
| 4-6 | 地学 | milky-way.png | NEW | ✅ AI画像生成済み |

**合計: 18枚中17枚完了（残り1枚: flower-structure.pngのAI置換）**
