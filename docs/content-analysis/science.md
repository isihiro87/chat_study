# 理科（science）教材作成分析と改善案

## 1. ディレクトリ構成

```
src/data/subjects/science/
├── index.ts                    # 教科エントリポイント
├── image-prompts/              # 画像生成ガイドライン
└── units/
    ├── index.ts                # 全Era・Topic集約（66エクスポート）
    ├── grade1/                 # 4単元（生物・化学・物理・地学）
    ├── grade2/                 # 4単元（化学変化・生物・天気・電気）
    └── grade3/                 # 4単元（化学・生物・物理・地学）
```

**トピック構成:**
```
topics/{topic-id}/
├── index.ts      # Topic定義（explanation + slides, flashcards, quiz, examples）
├── chat.ts       # 対話形式の解説
└── quiz/
    ├── structured.md     # 大問小問形式
    ├── ichimondittou.md  # 一問一答
    └── advanced.md       # 発展問題
```

**規模:** 12単元・50以上のトピック・300以上のサブトピック

## 2. 教材タイプ別の作り方

### 2.1 解説（explanation）+ スライド（slides）

**テキスト解説（sections）:**
```typescript
explanation: {
  sections: [
    {
      title: 'スケッチのルール',
      content: '理科のスケッチでは、細い1本の線で...',
      image: {
        src: '/images/science/grade1/biology/sketch-method.svg',
        alt: 'スケッチのしかた',
        caption: '理科のスケッチの正しい方法',
      },
      keyPoints: ['細い線で描く', '影はつけない', '輪郭線のみ'],
    },
  ],
}
```

**3タップスライド（slides）— 理科の大きな特徴:**

各SlideSetは厳密に3枚構成: Question → Reason → Conclusion

```typescript
slides: [
  {
    id: 'sci1-obs-slide1',
    title: 'スケッチのルール',
    slides: [
      {
        type: 'question',
        question: '生物のスケッチで大切なルールは何だろう？',
        subtext: '観察記録のコツ',
        emoji: '✏️',
        image: { src: '...', alt: '...' },
      },
      {
        type: 'reason',
        headline: '細い線ではっきり描く！影はつけない！',
        points: ['細い1本の線で輪郭を描く', '影をつけない', '日時等も記入'],
        visual: {                           // 任意の比較表示
          type: 'comparison',
          items: [
            { label: '正しい', value: '細い線', emoji: '✅' },
            { label: '間違い', value: '影付き', emoji: '❌' },
          ],
        },
      },
      {
        type: 'conclusion',
        conclusion: 'スケッチは細い線・影なし・輪郭線で正確に記録する！',
        keywords: [
          { text: 'スケッチ', isImportant: true },
          { text: '観察記録', isImportant: true },
        ],
        nextHint: '次はルーペや顕微鏡の使い方を学ぼう！',
      },
    ],
  },
]
```

### 2.2 チャット（chat.ts）

**キャラクター:** 理科の先生（緑系）+ 生徒（アンバー系）

```typescript
characters: [
  {
    id: 'teacher',
    name: '理科の先生',
    emoji: '👩‍🏫',
    colorFrom: '#059669',
    colorTo: '#34d399',
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

**コンテンツ要素:** date, narrator, message, quiz, summary-point, image, end
- `<ruby>`タグでふりがな対応
- `<strong>`で重要語句を強調
- SVG画像の埋め込み対応

### 2.3 フラッシュカード

**構成:** quiz/ichimondittou.mdの全問題をカバーする量（問題数はトピックごとに異なってよい）

```typescript
{
  id: 'sci1-obs-fc1',
  front: 'スケッチのルール',
  back: '理科のスケッチで守るべきルールは？',
  explanation: '細い1本の線で輪郭を描き、影はつけない...',
}
```

### 2.4 クイズ

**index.ts内:** quiz/フォルダ3ファイルから作れるだけの4択問題を網羅的に変換（問題数はトピックごとに異なってよい）

```typescript
{
  id: 'sci1-obs-q1',
  question: 'ルーペで観察するとき、正しい方法はどれか？',
  options: ['ルーペを観察物に近づけて持つ', 'ルーペを目に近づけて持ち...', ...],
  correctIndex: 1,
  explanation: 'ルーペは目に近づけて固定し...',
}
```

### 2.5 例題

**構成:** 2〜3題/トピック、各3〜4ステップ

```typescript
{
  id: 'sci1-obs-ex1',
  question: '顕微鏡の操作手順を正しい順番に並べなさい。',
  steps: [
    { title: 'Step 1: 接眼レンズを取り付ける', content: '...', highlight: '接眼レンズが先' },
    { title: 'Step 2: 対物レンズを取り付ける', content: '...', highlight: '低倍率から' },
  ],
  answer: '接眼レンズ→対物レンズ→反射鏡→プレパラート→ピント合わせ',
}
```

### 2.6 画像パス規則

```
/images/science/grade{1-3}/{分野}/{トピックスラグ}.svg
```
例: `/images/science/grade1/biology/sketch-method.svg`

## 3. 作成パイプライン

1. **単元構成確認**: PDFワークブック（`1年理科ワーク1章.pdf`等）で内容把握
2. **Era定義**: `grade{X}/{unit}/index.ts` にEra作成
3. **Topic定義**: `topics/{topic}/index.ts` に全コンテンツ
   - explanation: テキスト解説 + 3タップスライド
   - flashcards(25〜40枚), quiz(25〜40問), examples
4. **チャット作成**: `topics/{topic}/chat.ts` に対話形式解説
5. **クイズ拡充**: `topics/{topic}/quiz/` にMarkdown問題集
6. **⚠️ quiz/→index.ts反映**: quiz/フォルダの全問題をindex.tsのクイズ・フラッシュカードに変換（最重要ステップ）
7. **集約登録**: `units/index.ts` に追加

**スキル活用:** `/improve-from-pdf` でPDFワークブックから一括拡充

## 4. 改善案

### 4.1 スライドのvisual活用強化

**現状:** スライドのvisualプロパティ（比較表、プロセス図）が一部のみ使用。
**提案:** 全スライドSetのreasonスライドにvisualを追加。特に以下で効果的:
- `type: 'comparison'`: 対照実験の比較
- `type: 'process'`（新規）: 実験手順のフロー表示
- `type: 'table'`（新規）: データ表の視覚化

### 4.2 実験動画との連携

**現状:** `videos: []` で動画コンテンツが空。
**提案:**
- 実験手順の解説動画（YouTube）を各実験系トピックに追加
- 安全な実験操作のデモ映像を優先的に整備
- 物理・化学分野の実験は特に動画が効果的

### 4.3 quiz/フォルダの完全活用（最優先）

**現状:** quiz/フォルダに大量の問題（各ファイル100〜180行以上）があるにもかかわらず、index.tsのフラッシュカードは6〜8枚、クイズは6〜7問と著しく少ない。
**対応方針:**
- **ichimondittou.md → フラッシュカード**: 全Q&Aペアをフラッシュカードに変換（目標: 25〜40枚）
- **ichimondittou.md + structured.md → 4択クイズ**: 各問題を4択形式に変換（目標: 25〜40問）
- **advanced.md → advancedクイズ**: difficulty: 'advanced'タグ付きで変換
- **難易度バランス**: basic 40% / standard 40% / advanced 20%
- quiz/フォルダの問題数に対してindex.tsの問題数が著しく少ない場合は、コンテンツ拡充の最優先対象とする

**⚠️ quiz/フォルダに問題があるのにindex.tsに反映されていないのは不完全な状態**

### 4.5 分野横断の関連リンク

**現状:** トピック間の関連付けがない。
**提案:** 理科は分野横断的な知識が重要（化学変化→エネルギー→電気など）。Topicに `relatedTopics: string[]` を追加し、関連トピックへの誘導を実装。

### 4.6 観察・実験レポート形式の導入

**現状:** クイズは知識確認のみ。
**提案:** 実験レポート形式の学習コンテンツを新設:
- 仮説→方法→結果→考察の流れを体験的に学ぶ
- 穴埋め形式で実験レポートを完成させるインタラクティブ教材

### 4.7 image-promptsの体系化

**現状:** `image-prompts/` ディレクトリが存在するが、活用度が不明。
**提案:** 全トピックに対応する画像プロンプトを標準テンプレートで整備。SVG生成の品質と統一感を向上。

### 4.8 例題の増量

**現状:** 2〜3題/トピック。
**提案:** 4〜6題に増量（improve-from-pdfスキルの目標値に合わせる）。特に計算問題（化学式の計算、電力の計算など）で段階的な例題が有効。

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
