# AI画像生成プロンプト: 理科3年地学

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

## 1. 太陽の表面構造（黒点・コロナ・プロミネンス）

**ファイル名**: `sun-surface.png`
**配置先**: Topic 1 (celestial-motion) - sections[0]

```
A diagram of the Sun's surface features for Japanese middle school science.

Show a large circle representing the Sun with visible features:
- Dark spots on the surface labeled "黒点" (sunspots) with note "温度が低い部分（約4000℃）"
- Wispy outer atmosphere labeled "コロナ" (corona) extending outward
- A flame-like eruption on the edge labeled "プロミネンス" (prominence)
- Surface labeled "光球" with note "表面温度: 約6000℃"

Two small sequential sun images at bottom showing sunspots moving across the surface over several days, labeled "黒点の移動 → 太陽の自転の証拠"

{共通スタイル指示}
```

## 2. すい星の構造と軌道

**ファイル名**: `comet-structure.png`
**配置先**: Topic 3 (solar-system) - sections[1]

```
A two-part diagram of comets for Japanese middle school science.

Top part: "すい星の構造" (Comet Structure)
- A comet with labeled parts:
  - "核" (nucleus) - small solid center, made of ice and dust
  - "コマ" (coma) - fuzzy atmosphere around the nucleus
  - "イオンの尾" (ion tail) - straight tail pointing away from sun, in blue
  - "ちりの尾" (dust tail) - curved tail, in white/yellow
  - Arrow showing "太陽の方向 →"

Bottom part: "すい星の軌道" (Comet Orbit)
- Sun at center
- Highly elliptical orbit showing the comet at different positions
- Near sun: large tail. Far from sun: small/no tail
- Label: "太陽に近づくと尾が長くなる"

{共通スタイル指示}
```

## 3. 銀河系の構造と太陽系の位置

**ファイル名**: `milky-way.png`
**配置先**: Topic 3 (solar-system) - sections[2]

```
A diagram of the Milky Way galaxy structure for Japanese middle school science.

Top view (上から見た図):
- A spiral galaxy with labeled spiral arms
- Sun's position marked with a dot about 2/3 from center, labeled "太陽系の位置"
- Center labeled "銀河系の中心"
- Scale indicator: "直径: 約10万光年"

Side view (横から見た図):
- A thin disk shape with a central bulge
- Sun's position marked
- Height labeled "厚さ: 約1000光年"
- Note: "約2000億個の恒星からなる"

Bottom text: "銀河系（天の川銀河）= 太陽系を含む恒星の大集団"

{共通スタイル指示}
```

---

## 使い方

1. 上記プロンプトを nanobanana (または他の画像生成AI) に入力
2. 生成された画像を `public/images/science/` に配置
3. 対応するトピックの index.ts で image.src を設定
