# AI画像生成プロンプト: 理科3年物理

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

## 1. 滑車と仕事の原理

**ファイル名**: `pulley-work.png`
**配置先**: Topic 3 (energy-work) - sections[1]

```
A comparison diagram of pulley systems for Japanese middle school science.

Left side: "定滑車" (fixed pulley)
- A pulley attached to a ceiling beam
- A rope going over it with a weight (100N) on one side and a hand pulling down on the other
- Labels: "力の大きさ: 100N", "引く距離: 1m", "仕事: 100J"
- Note: "力の向きが変わるだけ"

Right side: "動滑車" (movable pulley)
- A pulley attached to the weight, rope going up to ceiling and back down
- A weight (100N) with a hand pulling the rope
- Labels: "力の大きさ: 50N", "引く距離: 2m", "仕事: 100J"
- Note: "力は半分、距離は2倍"

Center bottom text: "仕事の原理: 道具を使っても仕事の量は変わらない"

{共通スタイル指示}
```

## 2. 速さと距離・時間のグラフ

**ファイル名**: `motion-graphs.png`
**配置先**: Topic 1 (object-motion) - sections[1], sections[2]

```
Two side-by-side graphs for Japanese middle school physics.

Left graph: "距離-時間グラフ"
- X-axis: "時間 (s)", Y-axis: "距離 (m)"
- Blue straight line (等速直線運動) - labeled
- Red curved line (だんだん速くなる運動) - labeled
- Grid background

Right graph: "速さ-時間グラフ"
- X-axis: "時間 (s)", Y-axis: "速さ (m/s)"
- Blue horizontal line (等速直線運動) - labeled
- Red ascending line (だんだん速くなる運動) - labeled
- Grid background

Clean, minimal design with clear axis labels in Japanese.

{共通スタイル指示}
```

## 3. 水圧と浮力の模式図

**ファイル名**: `water-pressure-buoyancy.png`
**配置先**: Topic 2 (force-action) - sections[2]

```
A diagram showing water pressure and buoyancy for Japanese middle school science.

Left section: "水圧" (Water Pressure)
- A rectangular object submerged in blue water
- Arrows pointing inward from all directions (up, down, left, right)
- Deeper arrows are longer/bolder to show pressure increases with depth
- Label: "深いほど水圧が大きい"

Right section: "浮力" (Buoyancy)
- Same rectangular object in water
- Large upward arrow from bottom labeled "下面にかかる水圧（大）"
- Smaller downward arrow from top labeled "上面にかかる水圧（小）"
- Net upward arrow labeled "浮力 = 下面の水圧 - 上面の水圧"

{共通スタイル指示}
```

---

## 使い方

1. 上記プロンプトを nanobanana (または他の画像生成AI) に入力
2. 生成された画像を `public/images/science/` に配置
3. 対応するトピックの index.ts で image.src を設定
