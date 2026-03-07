# AI画像生成プロンプト: 理科3年生物

## 共通スタイル指示

```
Style: flat educational illustration for Japanese middle school textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape).
No photorealism, no 3D rendering. Simple, diagrammatic, easy to understand.
```

---

## 1. 減数分裂の過程図

**ファイル名**: `meiosis-process.png`
**配置先**: Topic 1 (growth-reproduction) - sections[2]

```
A step-by-step diagram of meiosis (減数分裂) for middle school science.

Show a parent cell at top with 4 chromosomes (2 pairs), labeled "母細胞 (2n=4)".
Step 1: First division - cell splits into 2 cells, each with 2 chromosomes. Label "第一分裂".
Step 2: Second division - each cell splits again into 2 cells, each with 2 chromosomes (1 from each pair). Label "第二分裂".
Result: 4 gamete cells at bottom, each with half the chromosomes. Label "生殖細胞 (n=2)".
Use color-coded chromosomes (blue pair and red pair) to show how they separate.
Arrows between each step.

{共通スタイル指示}
```

## 2. 中間的な化石（シーラカンス・始祖鳥）

**ファイル名**: `transitional-fossils.png`
**配置先**: Topic 3 (evolution) - sections[1]

```
A comparison diagram of two transitional fossils for Japanese middle school science.

Left side: "イクチオステガ (Ichthyostega)" - a creature with fish-like body but with four primitive limbs.
Highlight features: "魚類の特徴" (fish tail, scales) with blue labels, "両生類の特徴" (four legs) with green labels.

Right side: "始祖鳥 (Archaeopteryx)" - a creature with reptile body but with feathered wings.
Highlight features: "は虫類の特徴" (teeth, clawed wings, long tail) with red labels, "鳥類の特徴" (feathers, wings) with amber labels.

Center text: "中間的な生物の化石 = 進化の証拠"

{共通スタイル指示}
```

## 3. メンデルのF1・F2世代の結果

**ファイル名**: `mendel-f1-f2.png`
**配置先**: Topic 2 (genetics) - sections[0]

```
A diagram showing Mendel's pea plant cross-breeding results.

Top row (P generation): Round pea (AA, dominant, green circle) crossed with Wrinkled pea (aa, recessive, yellow circle). Label "親 (P)".
Middle row (F1 generation): All Round peas (Aa). Label "子 (F1) - すべて丸".
Bottom row (F2 generation): 3 Round peas and 1 Wrinkled pea. Label "孫 (F2) - 丸:しわ = 3:1".

Include a simple Punnett square on the side showing Aa x Aa = AA, Aa, Aa, aa.
Use clear color coding: dominant trait in green, recessive trait in yellow.
Japanese labels throughout.

{共通スタイル指示}
```

---

## 使い方

1. 上記プロンプトを nanobanana (または他の画像生成AI) に入力
2. 生成された画像を `public/images/science/` に配置
3. 対応するトピックの index.ts で image.src を設定
