# 数学ホワイトボード表示の分析と改善案

## 1. 現状の仕組み

### コンポーネント構成

| コンポーネント | 用途 | ファイル |
|---|---|---|
| `MathWhiteboardBlock` | 数学用（ステップ順次表示） | `src/components/history-chat/MathWhiteboardBlock.tsx` |
| `WhiteboardBlock` | 歴史・地理用（全ステップ一括表示） | `src/components/history-chat/WhiteboardBlock.tsx` |

`ChatContainer.tsx` で `chat.id.startsWith('math-')` により使い分けている。

### 数式の表現方法

- **プレーンテキスト + HTML タグ** で数式を記述（例: `x² − 5x + 6 = 0`）
- `<strong>` で変化箇所をamber色にハイライト
- `<ruby>` でふりがな表示
- `dangerouslySetInnerHTML` でレンダリング（現在は静的データのみで安全）

### データ構造（`WhiteboardStep`）

```typescript
{
  formula: string;         // 数式（HTML文字列）
  annotation?: string;     // 解説テキスト（HTML文字列）
  isResult?: boolean;      // 答えの式フラグ
  animateInsert?: boolean; // <strong>のアニメーション用（未実装）
}
```

### UX フロー

1. ユーザーがタップするたびに1ステップずつ表示
2. 最新ステップのみ annotation を表示（AnimatePresence でフェードイン/アウト）
3. 過去のステップは `text-gray-400` で薄く表示
4. 結果ステップは amber色の下線で強調
5. 「← もどる」ボタンで前ステップに戻れる
6. 進捗を「X / Y」で表示

---

## 2. 現状の課題

### 課題A: 数式表現の限界

**深刻度: 高**

プレーンテキストでは表現できない数式がある:

| 数式 | 現状の表記 | 問題点 |
|---|---|---|
| 分数 | `(−b ± √(b²−4ac)) / 2a` | 分数線がなく分子・分母の区別がつきにくい |
| 平方根 | `√12`, `√(b²−4ac)` | 根号の範囲が曖昧（√12 は √1×2 にも見える） |
| 累乗 | `x²`, `b²` | Unicode上付き文字に依存。³以上は使えない場面がある |
| 連立方程式 | 式を別ステップに分割 | 中括弧 `{` でまとめた表記ができない |

特に中3「解の公式」(`x = (−b ± √(b²−4ac)) / 2a`) はテキストでは読みにくく、学習効果が低下する。

### 課題B: animateInsert の未実装

**深刻度: 低**

`animateInsert: true` がデータに含まれているが、CSS/JSでの実装が未完了。`<strong>` タグの遅延フェードインが意図だが、現状は即座に表示される。

### 課題C: 高さの事前確保が不正確

**深刻度: 低**

`stepsAreaMinHeight = steps.length * 2.0` rem で高さを確保しているが、annotation の有無やテキスト折り返しで実際の高さと乖離する。ステップ数が多い場合（中3の解の公式: 5ステップ）にレイアウトが跳ねることがある。

### 課題D: 式の変化がわかりにくい

**深刻度: 中**

ステップ間で「何が変わったか」を視覚的に示す手段が `<strong>` のamber色のみ。

- 移項で符号が変わった箇所
- 新しく追加された項
- 消去された項

これらの区別がつかず、すべて同じamber色で表示される。

### 課題E: 過去ステップの薄すぎる表示

**深刻度: 中**

過去ステップが `text-gray-400` で非常に薄く、前の式を参照しながら理解したいユーザーにとって読みにくい。特にステップ数が多い中2・中3の内容で顕著。

### 課題F: スクロール時のコンテキスト喪失

**深刻度: 低**

`maxHeight: '50vh'` でスクロール可能だが、ステップ数が多い場合にタイトルや初期の式がスクロールアウトし、「何の問題を解いているか」がわからなくなる。

---

## 3. 改善案

### 改善案1: KaTeX による数式レンダリング

**対象課題: A**

プレーンHTML文字列の代わりに [KaTeX](https://katex.org/) を導入し、LaTeX記法で数式を記述する。

**変更イメージ:**

```typescript
// Before
{ formula: 'x = (−b ± √(b²−4ac)) / 2a' }

// After
{ formula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}' }
```

**メリット:**
- 分数、平方根、累乗、連立方程式の中括弧など、あらゆる数式を正確に表現可能
- 教科書と同じ見た目になり、学習効果が向上
- KaTeX は軽量（バンドルサイズ約 100KB gzip）で SSR にも対応

**考慮点:**
- 全 chat.ts データの formula を LaTeX 記法に書き換える必要がある（3ファイル、約30ステップ）
- `<strong>` による部分ハイライトの代替手段が必要（KaTeX の `\textcolor{#D97706}{...}` で可能）
- `<ruby>` タグとの併用方法の検討（annotation 側はHTML据え置きで問題なし）
- `dangerouslySetInnerHTML` を KaTeX のレンダリング関数に置き換え

**実装規模:** 中（コンポーネント改修 + データ書き換え）

---

### 改善案2: 変化箇所の種類別ハイライト

**対象課題: D**

`<strong>` 一種類だけでなく、変化の種類ごとに異なる視覚表現を用意する。

**案:**

| 変化の種類 | 表現 | CSS クラス例 |
|---|---|---|
| 新規追加 | amber色 + 太字（現状維持） | `.math-wb-added` |
| 移項（符号反転） | amber色 + 打消し線 → 新しい符号 | `.math-wb-moved` |
| 消去 | 薄いグレー + 打消し線 | `.math-wb-cancelled` |

**データ構造の拡張案:**

```typescript
interface WhiteboardStep {
  formula: string;
  annotation?: string;
  isResult?: boolean;
  // 既存の animateInsert を廃止し、より汎用的なマーカーに
  highlights?: Array<{
    type: 'added' | 'moved' | 'cancelled';
    text: string;
  }>;
}
```

**考慮点:**
- HTML文字列ベースでは実装が煩雑。KaTeX 導入（改善案1）と併せて検討すると効率的
- 色の種類が増えすぎると中学生には混乱する可能性（最大2〜3種類に抑える）

**実装規模:** 中〜大（KaTeX併用ならデータ構造変更 + CSS追加）

---

### 改善案3: animateInsert の実装

**対象課題: B**

既にデータに `animateInsert: true` が設定されているステップの `<strong>` 要素を、ステップ表示後に遅延でフェードイン + スケールアニメーションさせる。

**実装アプローチ:**

1. `MathWhiteboardBlock` で `animateInsert && isLatest` のとき、formula を2段階でレンダリング
   - 初回: `<strong>` 内テキストを `opacity: 0` で非表示
   - 600ms後: `opacity: 1` + `scale(1.05→1.0)` でフェードイン

2. CSS のみで実装する場合:
   ```css
   .math-wb-formula.animate-insert strong {
     animation: wb-insert 0.4s ease-out 0.6s both;
   }
   @keyframes wb-insert {
     from { opacity: 0; transform: scale(1.1); }
     to { opacity: 1; transform: scale(1); }
   }
   ```

**考慮点:**
- `dangerouslySetInnerHTML` で挿入されたDOMに対してCSS アニメーションを適用する形になる
- 「もどる」→「再進行」時にアニメーションが再発火しないようにする制御が必要

**実装規模:** 小

---

### 改善案4: 過去ステップの視認性改善

**対象課題: E**

過去ステップの色を `text-gray-400` から `text-gray-500` に変更し、最新ステップとの差別化は維持しつつ読みやすさを確保する。

**段階的な透明度:**

| ステップ位置 | 現状 | 改善案 |
|---|---|---|
| 最新（通常） | `text-gray-800` | `text-gray-800`（変更なし） |
| 最新（結果） | amber-900 + 下線 | 変更なし |
| 1つ前 | `text-gray-400` | `text-gray-600` |
| 2つ以上前 | `text-gray-400` | `text-gray-500` |

**考慮点:**
- 差別化が弱まりすぎると「今どこを見ればいいか」がわからなくなる
- 背景色のグラデーション（最新だけ薄い amber 背景）という代替案もある

**実装規模:** 小

---

### 改善案5: タイトル固定表示（スティッキーヘッダー）

**対象課題: F**

ステップ数が多くスクロールが発生する場合に、タイトル行を `position: sticky; top: 0` で固定する。

```tsx
{title && (
  <p className="sticky top-0 z-10 bg-white pb-1 mb-2 text-xs font-bold text-gray-400">
    {title}
  </p>
)}
```

**考慮点:**
- 現状の `maxHeight: 50vh` のスクロールコンテナとの親子関係を調整する必要がある
- タイトルがない whiteboard もあるため、影響は限定的

**実装規模:** 小

---

### 改善案6: 連立方程式の中括弧表記

**対象課題: A（部分的）**

KaTeX を導入しなくても、連立方程式を並べて表示する専用レイアウトを追加する。

**データ構造の拡張案:**

```typescript
interface WhiteboardStep {
  formula: string;
  formula2?: string;  // 連立の2行目
  grouped?: boolean;  // 中括弧でグループ化
  // ...
}
```

**レンダリング:**
```
  ⎧ ① x + y = 7
  ⎩ ② x − y = 3
```

左側に CSS で中括弧を描画し、2つの式を並べる。

**考慮点:**
- KaTeX 導入（改善案1）で自然に解決されるため、KaTeX を導入する場合は不要
- 中括弧の描画は CSS `border-left` + `border-radius` で近似可能

**実装規模:** 小〜中

---

## 4. 優先度まとめ

| 優先度 | 改善案 | 効果 | 工数 |
|---|---|---|---|
| **高** | 1. KaTeX導入 | 数式表現力の劇的向上。中3内容の学習効果改善 | 中 |
| **高** | 4. 過去ステップ視認性 | 少ない変更で読みやすさ向上 | 小 |
| **中** | 3. animateInsert実装 | 既存データを活かしたUX向上 | 小 |
| **中** | 2. 変化種類別ハイライト | 理解促進だが色が増えすぎるリスク | 中〜大 |
| **低** | 5. スティッキーヘッダー | ステップ数が少ない現状では恩恵小 | 小 |
| **低** | 6. 連立方程式の中括弧 | KaTeX導入で解決可能 | 小〜中 |

### 推奨アプローチ

1. まず **改善案4**（過去ステップ視認性）と **改善案3**（animateInsert）を実装（低工数・即効性）
2. 次に **改善案1**（KaTeX導入）を検討。これにより改善案2・6も自然に解決される
3. KaTeX 導入後に **改善案2**（変化種類別ハイライト）を `\textcolor` で実装
