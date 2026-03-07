# AI画像生成プロンプト: 理科3年化学

## 共通スタイル指示（全プロンプトの先頭に付与）

```
Style: flat educational illustration for Japanese middle school textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981), amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape).
No photorealism, no 3D rendering. Simple, diagrammatic, easy to understand.
```

---

## 1. 燃料電池の断面構造図

**ファイル名**: `fuel-cell.png`
**配置先**: Topic 3 (chemical-battery) - explanation sections[2], slides[2]

```
A cross-section diagram of a hydrogen fuel cell (燃料電池).

Left side: hydrogen gas (H2) input with blue arrow, labeled "水素 (H2)".
Right side: oxygen gas (O2) input with red arrow, labeled "酸素 (O2)".
Center: a membrane (電解質膜) separating two electrodes.
Left electrode labeled "負極 (-極)", right electrode labeled "正極 (+極)".
Electrons (e-) flowing through an external circuit wire from left to right, powering a light bulb.
H+ ions moving through the membrane from left to right.
Bottom output: water droplets, labeled "水 (H2O)".
Bottom text: "水素 + 酸素 → 水 + 電気エネルギー"

{共通スタイル指示}
```

## 2. 一次電池・二次電池の比較図

**ファイル名**: `battery-types.png`
**配置先**: Topic 3 (chemical-battery) - explanation sections[2]

```
A side-by-side comparison diagram of battery types for Japanese middle school science.

Left section titled "一次電池（使い切り）":
- A simplified illustration of a cylindrical manganese dry cell (マンガン乾電池)
- A single arrow pointing right labeled "化学反応 → 電気"
- Small text: "マンガン乾電池、アルカリ乾電池"

Right section titled "二次電池（充電可能）":
- A simplified illustration of a rectangular lithium-ion battery (リチウムイオン電池)
- Two arrows (one right, one left) labeled "充電 ⇄ 放電"
- Small text: "リチウムイオン電池、鉛蓄電池"

Between them, a clear visual distinction showing one-way vs reversible reactions.

{共通スタイル指示}
```

---

## 使い方

1. 上記プロンプトを nanobanana (または他の画像生成AI) に入力
2. 生成された画像を `public/images/science/` に配置
3. 対応するトピックの index.ts で image.src を設定
