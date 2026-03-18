# 地理（geography）教材作成分析と改善案

## 1. ディレクトリ構成

```
src/data/subjects/geography/
├── index.ts
├── 1st_contents.md              # 中1カリキュラム参考資料
├── 1st_images.md                # 中1画像参考資料
├── 2nd_contents.md              # 中2カリキュラム参考資料
├── 2nd_images.md                # 中2画像参考資料
└── units/
    ├── index.ts                  # 全Era・Topic集約
    ├── grade1/                   # 4単元
    │   ├── 1-world-shape/        # 3トピック
    │   ├── 2-japan-shape/        # 4トピック
    │   ├── 3-life-environment/   # 3トピック
    │   └── 4-world-regions/      # 15以上のトピック（一部未完成）
    └── grade2/                   # 3単元
        ├── 1-regional-research/  # 3トピック（最小限）
        ├── 2-japan-features/     # 7トピック
        └── 3-japan-regions/      # 7地方トピック
```

**トピック構成:**
```
topics/{topic-id}/
├── index.ts      # Topic定義（explanation + slides, flashcards, quiz, examples）
├── chat.ts       # 対話形式の解説
└── quiz/
    ├── structured.md
    ├── ichimondittou.md
    └── advanced.md
```

**注意:** 地理は中1・中2のみ（中3は公民）

## 2. 教材タイプ別の作り方

### 2.1 解説（explanation）+ スライド

**テキスト解説:**
```typescript
explanation: {
  sections: [
    {
      title: '陸地と海洋の割合',
      content: '地球の表面は、陸地が約3割（約29%）...',
      image: { src: '/images/...', alt: '...', caption: '...' },
      keyPoints: ['陸地：約3割（約29%）', '海洋：約7割（約71%）'],
    },
  ],
}
```

**3タップスライド（理科と同様の形式）:**
```typescript
slides: [
  {
    id: 'geo1-es-slide1',
    title: '陸地と海洋の割合',
    slides: [
      {
        type: 'question',
        question: '地球の表面は陸地と海洋、どちらが多い？',
        subtext: '陸地と海洋の割合',
        emoji: '🌏',
      },
      {
        type: 'reason',
        headline: '海洋が約7割を占める！',
        points: ['陸地は約3割...'],
        visual: {
          type: 'comparison',
          items: [
            { label: '陸地', value: '約3割（29%）', emoji: '🏔️' },
            { label: '海洋', value: '約7割（71%）', emoji: '🌊' },
          ],
        },
      },
      {
        type: 'conclusion',
        conclusion: '地球は海洋が約7割を占める「水の惑星」！',
        keywords: [
          { text: '陸地約3割', isImportant: true },
          { text: '海洋約7割', isImportant: true },
        ],
        nextHint: '次は六つの大陸と三つの大洋を覚えよう！',
      },
    ],
  },
]
```

### 2.2 チャット（chat.ts）

**キャラクター:** 地理の先生（青系）+ 生徒（アンバー系）

```typescript
characters: [
  {
    id: 'teacher',
    name: '地理の先生',
    emoji: '🌍',
    colorFrom: '#2563EB',
    colorTo: '#60A5FA',
    expressions: { explaining: '🧑‍🏫', happy: '😊', excited: '🤩', thinking: '🤔' },
  },
  {
    id: 'student',
    name: '生徒',
    emoji: '👦',
    colorFrom: '#d97706',
    colorTo: '#fbbf24',
    expressions: { curious: '🙋‍♂️', surprised: '😲', thinking: '🤔', happy: '😄' },
  },
]
```

**コンテンツ要素:** 歴史と同じ`HistoryChat`型を使用
- date, narrator, message, summary-point, quiz, image, end
- `<strong>`、`<ruby>`、`<span class="keyword">` 対応

### 2.3 フラッシュカード

**構成:** quiz/ichimondittou.mdの全問題をカバーする量（問題数はトピックごとに異なってよい）

```typescript
{
  id: 'geo1-es-fc1',
  front: '陸地と海洋の割合',
  back: '地球の表面における陸地と海洋の割合はそれぞれ何割？',
  explanation: '陸地は約3割（約29%）、海洋は約7割（約71%）です。',
}
```

### 2.4 クイズ

**index.ts内:** quiz/フォルダ3ファイルから作れるだけの4択問題を網羅的に変換（問題数はトピックごとに異なってよい）

```typescript
{
  id: 'geo1-es-q1',
  question: '地球の表面における陸地と海洋の割合として正しいものはどれ？',
  options: ['陸地約5割・海洋約5割', '陸地約3割・海洋約7割', ...],
  correctIndex: 1,
  explanation: '地球の表面は陸地が約3割...',
}
```

### 2.5 例題

**構成:** 2〜4題/トピック

地理でも例題を使用（地図読み取り、データ分析系の問題）

### 2.6 ID命名規則

| 要素 | パターン | 例 |
|------|----------|-----|
| Era | `geo{学年}-{unit-slug}` | `geo1-world-shape` |
| Topic | `geo{学年}-{topic-slug}` | `geo1-earth-shape` |
| Flashcard | `geo{学年}-{略}-fc{番号}` | `geo1-es-fc1` |
| Quiz | `geo{学年}-{略}-q{番号}` | `geo1-es-q1` |
| Slide | `geo{学年}-{略}-slide{番号}` | `geo1-es-slide1` |

**Era order規則:** 中1 = 21〜24、中2 = 31〜33

## 3. 作成パイプライン

1. **カリキュラム確認**: `1st_contents.md` / `2nd_contents.md` で内容把握
2. **Era定義**: `grade{X}/{unit}/index.ts` にEra作成（order: 21〜）
3. **Topic定義**: `topics/{topic}/index.ts`
   - explanation: テキスト解説 + 3タップスライド
   - flashcards（25〜40枚）, quiz（25〜40問）, examples
4. **チャット作成**: `topics/{topic}/chat.ts`
5. **クイズ拡充**: `topics/{topic}/quiz/`
6. **⚠️ quiz/→index.ts反映**: quiz/フォルダの全問題をindex.tsのクイズ・フラッシュカードに変換（最重要ステップ）
7. **集約登録**: `units/index.ts`

**参考資料:** `1st_images.md` / `2nd_images.md` で画像参考資料も整備済み

## 4. 改善案

### 4.1 地図インタラクション機能

**現状:** 地図は静的SVG画像のみ。
**提案:**
- クリッカブルな地図コンポーネントを新設
- 大陸・国・地方をタップで選択 → 情報表示
- 白地図クイズ（地名を当てる問題形式）

### 4.2 世界の諸地域（grade1/4-world-regions）の完成

**現状:** 15以上のトピックが存在するが「一部未完成」の状態。
**提案:**
- 全地域トピックのコンテンツを完成させる
- 地域比較のクロスリファレンスを整備
- 優先度: アジア → ヨーロッパ → アフリカ → 北米 → 南米 → オセアニア

### 4.3 統計データの視覚化

**現状:** スライドのvisualで比較表示はあるが、データの種類が限定的。
**提案:**
- 人口・面積・GDPなどの統計データをグラフ形式で表示
- スライドのvisualに `type: 'bar-chart'` / `type: 'pie-chart'` を追加
- 地理特有のデータ読み取り力を強化

### 4.4 地域調査（grade2/1-regional-research）の充実

**現状:** 3トピックで「最小限のコンテンツ」。
**提案:**
- 調査方法の具体的な手順解説を追加
- フィールドワーク・統計分析の例題を追加
- 地域調査レポートのテンプレート的な学習教材

### 4.5 気候・産業の横断的比較

**現状:** 各地域を個別に学習するが、横断比較が困難。
**提案:**
- 気候帯別の生活比較マトリックス
- 産業構造の比較（農業国vs工業国）
- Topicに `compareTo: string[]` で比較対象トピックを指定

### 4.6 フラッシュカードへのhint追加

**現状:** 地理のフラッシュカードには`hint`フィールドがない（英語では使用済み）。
**提案:** 全フラッシュカードにhintを追加。地名の覚え方のコツや関連付けを提供。

### 4.7 動画コンテンツの導入

**現状:** `videos: []` で未使用。
**提案:**
- 各地域の風景・文化を紹介する動画
- 産業・農業の実際の様子を映像で理解
- 自然災害（地震・台風）のメカニズム解説動画

### 4.8 contents.mdとimages.mdの連携強化

**現状:** 参考資料としてcontents.mdとimages.mdが存在するが、コンテンツ生成スキルとの連携が不明確。
**提案:** generate-contentスキルがこれらのファイルを自動参照する仕組みを整備。画像参照の標準化。

## 5. フィードバックログ

### 2026-03-16 全教科共通フィードバック（チャット・クイズ・フラッシュカード品質改善）
- **対象**: 全トピック共通
- **指摘1**: セリフだけが続くと飽きる → 6〜7つ以上連続する場合は画像を挟む（4つ程度はOK。挟める画像がない場合は不要）
- **指摘2**: summary-pointの後には必ずquizを入れる
- **指摘3**: 未知の可能性がある用語には説明を入れる
- **指摘4**: quiz/フォルダの一問一答・構造問題・発展問題をもとにフラッシュカード・クイズ・例題の数を充実させる
- **指摘5**: クイズは選択問題・並べ替え問題を原則とする
- **指摘6**: フラッシュカード・クイズには難易度タグ（basic/standard/advanced）を付与する
- **対応**: generate-content, improve-from-pdf, review-contentスキルを更新済み
- **汎用ルール**: フラッシュカード・クイズの問題数は統一不要。quiz/フォルダの問題を主要ソースとして、作れるだけの問題を網羅的に変換する。難易度バランスはbasic40%/standard40%/advanced20%
