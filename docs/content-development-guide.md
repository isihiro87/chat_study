# 教材コンテンツ開発ガイド

## 概要

「チャットでスタディ」の教材コンテンツを開発するためのガイドです。
歴史チャット、フラッシュカード、クイズなどの各コンテンツの作成方法を説明します。

---

## 1. 歴史チャットコンテンツの作成

### ファイル配置

```
src/data/history-chat/
├── types.ts           # 型定義（変更不要）
├── index.ts           # データエクスポート（新規チャット追加時に更新）
├── sample-chat.ts     # サンプル: 本能寺の変
└── [新規チャット].ts  # 新しいチャットファイル
```

### 新しいチャットの作成手順

#### Step 1: チャットファイルを作成

`src/data/history-chat/` に新しいファイルを作成します。

**例: `src/data/history-chat/taika-reform.ts`（大化の改新）**

```typescript
import type { HistoryChat } from './types';

export const taikaReform: HistoryChat = {
  id: 'taika-reform',           // 一意のID（kebab-case）
  icon: '⚔️',                    // テーマアイコン絵文字
  title: '大化の改新',           // タイトル
  subtitle: '〜645年〜 中大兄皇子と中臣鎌足',  // サブタイトル
  characters: [
    {
      id: 'nakano-oe',           // 識別ID（英字）
      name: '中大兄皇子',         // 表示名
      emoji: '👑',               // アバター絵文字
      colorFrom: '#3B82F6',      // グラデーション開始色
      colorTo: '#60A5FA',        // グラデーション終了色
    },
    {
      id: 'kamatari',
      name: '中臣鎌足',
      emoji: '🎭',
      colorFrom: '#10B981',
      colorTo: '#34D399',
    },
    // 2〜3人程度が適切
  ],
  content: [
    // コンテンツ要素を順番に配置
    // 詳細は下記参照
  ],
};
```

#### Step 2: コンテンツ要素を追加

`content` 配列に以下の要素を追加していきます：

**日付セパレーター**
```typescript
{ type: 'date', text: '645年6月12日' }
```

**ナレーション**
```typescript
{
  type: 'narrator',
  text: '説明文。<strong>重要語句</strong>は太字にできます。'
}
```

**チャットメッセージ**
```typescript
{
  type: 'message',
  side: 'left',              // 'left' または 'right'
  characterId: 'nakano-oe',  // characters配列のidと一致
  text: 'メッセージ本文'
}
```

**クイズ**
```typescript
{
  type: 'quiz',
  question: '問題文',
  options: [
    { letter: 'A', text: '選択肢1', correct: false },
    { letter: 'B', text: '選択肢2', correct: true },  // 正解
    { letter: 'C', text: '選択肢3', correct: false },
    { letter: 'D', text: '選択肢4', correct: false },
  ],
  explanation: '<strong>正解はB</strong>です。解説文...'
}
```

**まとめカード（最後に配置）**
```typescript
{
  type: 'end',
  points: [
    '<strong>645年</strong>、大化の改新が始まった',
    '中大兄皇子と中臣鎌足が蘇我氏を倒した',
    '公地公民の考えを導入',
  ]
}
```

#### Step 3: index.tsに登録

`src/data/history-chat/index.ts` を更新：

```typescript
import { sampleChat } from './sample-chat';
import { taikaReform } from './taika-reform';  // 追加
import type { HistoryChat } from './types';

const chatMap: Record<string, HistoryChat> = {
  sample: sampleChat,
  'taika-reform': taikaReform,  // 追加
};

// 以下は変更不要
```

#### Step 4: トピックデータに紐付け

`src/data/subjects/history/eras/[時代]/topics/[トピック].ts` の `chatId` を更新：

```typescript
export const taikaReform: Topic = {
  // ...
  content: {
    // ...
    chatId: 'taika-reform',  // 作成したチャットのIDを指定
  },
};
```

### コンテンツ作成のルール

1. **シーン構成**: 2〜4シーンに分割（導入→展開→結末）
2. **メッセージ数**: 1シーンにつき2〜4通
3. **クイズ**: 各シーンの最後に1問
4. **キャラクター**: 2〜3人が適切
5. **口調**: 時代らしく、ただし中学生が理解できる範囲で
6. **重要語句**: `<strong>` タグで強調

---

## 2. フラッシュカードの作成

### ファイル配置

各単元の `content.flashcards` 配列に追加します。

```typescript
flashcards: [
  {
    id: 'fc1',           // 一意のID
    front: '聖徳太子',    // 表面（問題）
    back: '推古天皇の摂政として活躍',  // 裏面（答え）
    hint: '厩戸皇子とも呼ばれる',      // ヒント（オプション）
  },
  // ...
],
```

### 作成のコツ

- 1単元につき8〜15枚程度
- 表面は簡潔に（人物名、年号、用語など）
- 裏面は1〜2文で説明
- テストに出やすい内容を優先

---

## 3. クイズの作成

### ファイル配置

各単元の `content.quiz.questions` 配列に追加します。

```typescript
quiz: {
  questions: [
    {
      id: 'q1',
      question: '聖徳太子が定めた、役人の心構えを示したものは？',
      options: ['大化の改新', '十七条の憲法', '冠位十二階', '大宝律令'],
      correctIndex: 1,  // 0から始まるインデックス（この場合「十七条の憲法」）
      explanation: '十七条の憲法は604年に制定され...',
    },
    // ...
  ],
},
```

### 作成のルール

- 1単元につき5〜10問
- 4択固定
- 教科書のテストに出るレベル
- 解説は必ず記載
- 語呂合わせがあれば積極的に記載

---

## 4. タップスライドの作成

### ファイル配置

各単元の `content.explanation.slides` 配列に追加します。

```typescript
explanation: {
  slides: [
    {
      id: 'slide-1',
      title: 'スライドセットのタイトル',
      slides: [
        {
          type: 'question',
          question: '問いかけ文',
          subtext: '補足テキスト',
          emoji: '👑',
        },
        {
          type: 'reason',
          headline: '答えの核心',
          points: ['ポイント1', 'ポイント2', 'ポイント3'],
        },
        {
          type: 'conclusion',
          conclusion: '結論・まとめ',
          keywords: [
            { text: '重要語句', isImportant: true },
          ],
        },
      ],
    },
  ],
  sections: [...],  // 従来形式（オプション）
},
```

---

## 5. 新しいコンテンツの追加（階層構造）

### コンテンツ構造の概要

```
時代（Era）
└── トピック（Topic）
    └── コンテンツ（explanation, videos, flashcards, quiz, chat）
```

### ディレクトリ構造

```
src/data/subjects/history/eras/
├── index.ts           # 全時代・トピックのエクスポート
├── asuka/             # 飛鳥時代
│   ├── index.ts       # 時代定義とトピック一覧
│   └── topics/
│       └── taika-reform.ts  # 大化の改新
├── edo/               # 江戸時代
│   ├── index.ts
│   └── topics/
│       └── yoshimune-reform.ts  # 享保の改革
└── [新規時代]/        # 新しい時代を追加
```

### Step 1: 新しい時代フォルダを作成

例: 鎌倉時代を追加する場合

```
src/data/subjects/history/eras/kamakura/
├── index.ts
└── topics/
```

### Step 2: 時代定義ファイルを作成

`src/data/subjects/history/eras/kamakura/index.ts`:

```typescript
import type { Era, Topic } from '../../../../types';
import { genkoInvasion } from './topics/genko-invasion';

// 鎌倉時代
export const kamakuraEra: Era = {
  id: 'kamakura',
  subjectId: 'history',
  name: '鎌倉時代',
  subtitle: '武士の時代のはじまり',
  period: '1185年〜1333年',
  icon: '⚔️',
  order: 3,
};

// 鎌倉時代のトピック一覧
export const kamakuraTopics: Topic[] = [genkoInvasion];
```

### Step 3: トピックファイルを作成

`src/data/subjects/history/eras/kamakura/topics/genko-invasion.ts`:

```typescript
import type { Topic } from '../../../../../types';

export const genkoInvasion: Topic = {
  id: 'genko-invasion',
  eraId: 'kamakura',
  name: '元寇',
  subtitle: '蒙古襲来と鎌倉武士の奮戦',
  icon: '🛡️',
  order: 1,
  content: {
    explanation: { slides: [], sections: [] },
    videos: [],
    flashcards: [],
    quiz: { questions: [] },
    chatId: 'genko-invasion',  // 歴史チャットと紐付け
  },
};
```

### Step 4: eras/index.tsに登録

`src/data/subjects/history/eras/index.ts` を更新：

```typescript
import { asukaEra, asukaTopics } from './asuka';
import { edoEra, edoTopics } from './edo';
import { kamakuraEra, kamakuraTopics } from './kamakura';  // 追加

export const eras: Era[] = [asukaEra, edoEra, kamakuraEra]  // 追加
  .sort((a, b) => a.order - b.order);

export const allTopics: Topic[] = [
  ...asukaTopics,
  ...edoTopics,
  ...kamakuraTopics,  // 追加
];
```

### 既存の時代に新しいトピックを追加

既存の時代（例: 飛鳥時代）に新しいトピックを追加する場合：

1. `topics/` に新しいファイルを作成
2. 時代の `index.ts` でインポートして配列に追加

```typescript
// src/data/subjects/history/eras/asuka/index.ts
import { taikaReform } from './topics/taika-reform';
import { shotokuTaishi } from './topics/shotoku-taishi';  // 追加

export const asukaTopics: Topic[] = [taikaReform, shotokuTaishi];
```

---

## 6. 開発フロー

### 推奨する開発順序

1. **歴史チャット** を先に作成（ストーリーの骨格）
2. **フラッシュカード** を作成（重要語句の抽出）
3. **クイズ** を作成（理解度チェック）
4. **タップスライド** を作成（詳細な解説）
5. 動画は後日追加

### 開発時のチェックリスト

- [ ] 歴史的事実に誤りがないか（教科書と照合）
- [ ] 中学生に分かりやすい表現か
- [ ] 重要語句が適切に強調されているか
- [ ] クイズの難易度は適切か
- [ ] `npm run typecheck` でエラーがないか
- [ ] `npm run build` でビルドが通るか

---

## 7. テーマ候補リスト

### 歴史（時代順）

| 時代 | トピック候補 | 登場人物 | 状態 |
|------|-------------|---------|------|
| 飛鳥時代 | 大化の改新 | 中大兄皇子、中臣鎌足、蘇我入鹿 | ✅ |
| 飛鳥時代 | 聖徳太子の改革 | 聖徳太子、推古天皇 | |
| 奈良時代 | 遣唐使の旅 | 阿倍仲麻呂、鑑真 | |
| 平安時代 | 藤原道長の栄華 | 藤原道長、紫式部 | |
| 鎌倉時代 | 元寇 | 北条時宗、フビライ | |
| 室町時代 | 応仁の乱 | 足利義政、日野富子 | |
| 戦国時代 | 本能寺の変 | 織田信長、明智光秀、羽柴秀吉 | ✅ |
| 江戸時代 | 享保の改革 | 徳川吉宗 | ✅ |
| 江戸時代 | 参勤交代 | 徳川家光、大名 | |
| 幕末 | ペリー来航 | ペリー、幕府役人 | |
| 明治 | 大政奉還 | 徳川慶喜、西郷隆盛 | |

✅ = 構造作成済み（コンテンツは追加中）

---

## 8. ルーティング

アプリ内のルーティングは以下の階層構造に対応しています：

| パス | ページ | 説明 |
|-----|-------|------|
| `/` | TopPage | 科目選択 |
| `/subjects/:subjectId` | EraSelectPage | 時代選択 |
| `/subjects/:subjectId/eras/:eraId` | TopicSelectPage | トピック選択 |
| `/subjects/:subjectId/eras/:eraId/topics/:topicId` | LearningPage | 学習ページ |

例:
- `/subjects/history` → 歴史の時代一覧
- `/subjects/history/eras/edo` → 江戸時代のトピック一覧
- `/subjects/history/eras/edo/topics/yoshimune-reform` → 享保の改革の学習ページ

---

## 9. 理科教材の開発方針

### 9.1 ディレクトリ構造

```
src/data/subjects/science/units/grade3/
├── 1-chemistry/          # 化学分野
│   ├── index.ts          # 分野定義
│   └── topics/
│       ├── 1-solution-ions/
│       │   ├── index.ts  # トピック定義（explanation, flashcards, quiz, examples）
│       │   └── chat.ts   # チャット解説
│       ├── 2-acid-alkali/
│       └── 3-chemical-battery/
├── 2-biology/            # 生物分野
├── 3-physics/            # 物理分野
└── 4-earth/              # 地学分野
```

各トピックは `index.ts`（学習コンテンツ）と `chat.ts`（チャット形式の解説）の2ファイルで構成。

### 9.2 図解（イラスト）の開発方針

理科教材では**視覚的な図解**が理解度向上の鍵。すべてのトピックで以下を目標とする。

#### 図解のカバレッジ目標

| コンテンツ | 目標 |
|---|---|
| explanation.sections | 各セクションに1つの図（`image`プロパティ） |
| explanation.slides | 各スライドセットのquestionスライドに1つの図 |
| chat | テキストのみ（図は不要） |

#### SVG vs AI画像生成の使い分け

| SVGで作成 | AI画像生成（nanobanana等） |
|---|---|
| 模式図・概念図 | 断面構造・実物風イラスト |
| 比較表・一覧表 | 化石・生物のリアルな描写 |
| 化学式・反応式のビジュアル | 複雑な実験装置の全体像 |
| グラフ・スケール | 天体写真風の図 |
| フローチャート | 顕微鏡写真風の図 |

**判断基準**: テキストとシンプルな図形で表現できるもの → SVG。写実的・立体的な描写が必要 → AI画像生成。

### 9.3 SVG作成の統一ルール

既存SVG群との統一感を保つため、以下のスタイルを厳守する。

#### 基本テンプレート

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" fill="none">
  <!-- Background -->
  <rect width="400" height="250" rx="16" fill="#F5F3F0"/>

  <!-- Title -->
  <text x="200" y="25" text-anchor="middle"
        font-family="sans-serif" font-size="14"
        font-weight="bold" fill="#1f2937">タイトル</text>

  <!-- Content here -->

  <!-- Bottom explanation -->
  <text x="200" y="240" text-anchor="middle"
        font-family="sans-serif" font-size="10"
        fill="#4B5563">補足テキスト</text>

  <!-- Arrow markers (if needed) -->
  <defs>
    <marker id="arrow" markerWidth="7" markerHeight="5"
            refX="7" refY="2.5" orient="auto">
      <path d="M0,0 L7,2.5 L0,5" fill="#6B7280"/>
    </marker>
  </defs>
</svg>
```

#### スタイル規約

| 項目 | 値 |
|---|---|
| 背景色 | `#F5F3F0`（ウォームホワイト） |
| 角丸 | `rx="16"` |
| フォント | `font-family="sans-serif"` |
| viewBox | 横長 `400x180` 〜 `400x300` |
| タイトルサイズ | `font-size="14"` `font-weight="bold"` |
| 本文サイズ | `font-size="10"` 〜 `font-size="12"` |
| 注釈サイズ | `font-size="8"` 〜 `font-size="9"` |

#### 色パレット（`docs/design-guide.md` 準拠）

| 色 | コード | 用途 |
|---|---|---|
| 青 | `#3B82F6` | 陽イオン、正極、水系 |
| 赤 | `#EF4444` | 陰イオン、温度、酸性 |
| 緑 | `#10B981` | 生物系、塩素、アルカリ性の補助 |
| アンバー | `#F59E0B` | アクセント、銅、強調 |
| グレー | `#6B7280` | 中性子、導線、補助要素 |
| シアン | `#06B6D4` | OH-イオン、水圧、補助色 |
| ピンク | `#EC4899` | DNA、卵細胞、補助色 |
| テキスト（見出し） | `#1f2937` | タイトル |
| テキスト（本文） | `#374151` | 本文 |
| テキスト（注釈） | `#6B7280` | 補足 |

**禁止色**: indigo, purple, violet 系統（`docs/design-guide.md` に明記）

#### ファイル命名規則

```
public/images/science/[内容を表すkebab-case].svg
```

例: `ph-scale.svg`, `motion-tape.svg`, `eclipse-mechanism.svg`

### 9.4 AI画像生成プロンプトの管理

#### プロンプトファイルの配置

```
docs/image-prompts/
├── science-chemistry.md   # 化学分野
├── science-biology.md     # 生物分野
├── science-physics.md     # 物理分野
└── science-earth.md       # 地学分野
```

#### 共通スタイル指示（全プロンプト共通）

```
Style: flat educational illustration for Japanese middle school textbook.
Background: warm white (#F5F3F0), clean and minimal.
Color palette: blue (#3B82F6), red (#EF4444), green (#10B981),
              amber (#F59E0B), gray (#6B7280).
Labels: Japanese text, clear sans-serif font, no decorative elements.
Aspect ratio: 16:10 (landscape).
No photorealism, no 3D rendering. Simple, diagrammatic, easy to understand.
```

#### プロンプト記載フォーマット

```markdown
## [番号]. [図のタイトル]

**ファイル名**: `[filename].png`
**配置先**: Topic [N] ([topic-name]) - sections[N]

\`\`\`
[英語のプロンプト本文]
{共通スタイル指示}
\`\`\`
```

#### 生成画像の配置手順

1. プロンプトでnanobanana等で画像を生成
2. `public/images/science/` に配置
3. 対応トピックの `index.ts` で `image.src` を設定

### 9.5 理科チャット（chat.ts）の作成ルール

#### キャラクター構成

```typescript
characters: [
  { id: 'teacher', name: '理科の先生', emoji: '👩‍🏫',
    colorFrom: '#059669', colorTo: '#34d399',
    expressions: { explaining: '🧑‍🏫', happy: '😊', excited: '🤩', thinking: '🤔' }
  },
  { id: 'student', name: '生徒', emoji: '👦',
    colorFrom: '#d97706', colorTo: '#fbbf24',
    expressions: { curious: '🙋‍♂️', surprised: '😲', thinking: '🤔', happy: '😄' }
  },
]
```

全理科チャットで **先生と生徒の2人構成** を統一。

#### コンテンツ構成

1. **各セクションごとに**: `date` → `narrator` → メッセージ数往復 → `summary-point`
2. **各セクション末尾に**: `quiz`（1問）
3. **最終**: `end`（まとめポイント）

#### ルビの付け方

中学生が読めない漢字にルビを付ける:

```html
<ruby>電解質<rp>(</rp><rt>でんかいしつ</rt><rp>)</rp></ruby>
```

#### 化学式の表記

上付き・下付き文字を使用:

```html
H<sup>+</sup>    <!-- イオンの価数 -->
H<sub>2</sub>O   <!-- 分子式の添字 -->
Na<sup>+</sup>   <!-- 陽イオン -->
Cl<sup>−</sup>   <!-- 陰イオン（マイナス記号は全角を使用） -->
```

#### 重要語句の強調

```html
<strong><span class="keyword">用語</span></strong>
```

### 9.6 分野別の注意点

#### 化学

- 化学式は正確に（上付き・下付き文字、電荷表記）
- 電気分解: 陰極/陽極の対応を間違えないこと
- イオン化傾向の順番: Mg > Zn > Fe > Cu > Ag

#### 生物

- 「優性・劣性」ではなく「顕性・潜性」を使用（2022年〜の教科書改訂に準拠）
- 染色体数の説明は具体的な数値例で（例: 2n=4 → n=2）
- 生殖の分類: 無性生殖（分裂・出芽・栄養生殖）と有性生殖

#### 物理

- 単位は正確に: N（ニュートン）、J（ジュール）、W（ワット）、m/s
- 公式は `仕事[J] = 力[N] × 距離[m]` の形式で単位を明示
- 記録タイマー: 東日本50Hz、西日本60Hzの違いに言及

#### 地学

- 天体の見え方は「観測者から見た方角」を明記
- 自転と公転の向き: どちらも西→東（北極上空から見て反時計回り）
- 季節の原因: 地軸の傾き（23.4度）であり、太陽との距離ではないことを強調

### 9.7 現在の図解カバレッジ（2026-03-07時点）

#### SVG一覧（`public/images/science/`）

| ファイル | 分野 | 内容 | 参照元 |
|---|---|---|---|
| electrolysis-model.svg | 化学 | NaCl電離イメージ | T1-S1 |
| electrolysis-apparatus.svg | 化学 | 電気分解装置図 | T1-S2 |
| atom-model.svg | 化学 | 原子の構造 | T1-S3 |
| indicator-colors.svg | 化学 | 指示薬の色変化一覧 | T2-S1 |
| ph-scale.svg | 化学 | pHスケール | T2-S2 |
| neutralization.svg | 化学 | 中和反応の模式図 | T2-S3 |
| battery-model.svg | 化学 | ダニエル電池 | T3-S1 |
| ionization-tendency.svg | 化学 | イオン化傾向の序列 | T3-S2 |
| cell-division.svg | 生物 | 細胞分裂 | T1-slide1 |
| reproduction-types.svg | 生物 | 無性/有性生殖の比較 | T1-S2 |
| mendel-cross.svg | 生物 | メンデルの交配実験 | T2-slide1 |
| dna-hierarchy.svg | 生物 | 遺伝子の階層構造 | T2-S2 |
| evolution-tree.svg | 生物 | 進化の系統樹 | T3-slide1 |
| homologous-organs.svg | 生物 | 相同器官の比較 | T3-S3 |
| motion-tape.svg | 物理 | 記録タイマーのテープ | T1-S1 |
| force-composition.svg | 物理 | 力の合成と分解 | T2-S1 |
| inertia-diagram.svg | 物理 | 慣性の法則 | T2-S2 |
| mechanical-energy.svg | 物理 | 力学的エネルギー保存 | T3-S1 |
| energy-conversion.svg | 物理 | エネルギー変換の流れ | T3-S3 |
| celestial-sphere.svg | 地学 | 天球と日周運動 | T1-S2 |
| seasons-tilt.svg | 地学 | 地軸の傾きと季節 | T1-S4 |
| moon-phases.svg | 地学 | 月の満ち欠け | T2-S1 |
| venus-orbit.svg | 地学 | 金星の公転と見え方 | T2-S2 |
| eclipse-mechanism.svg | 地学 | 日食・月食のしくみ | T2-S3 |
| solar-system.svg | 地学 | 太陽系の惑星 | T3-S1 |

#### AI画像生成プロンプト（`docs/image-prompts/`）

| ファイル | プロンプト数 | 内容 |
|---|---|---|
| science-chemistry.md | 2 | 燃料電池、一次/二次電池比較 |
| science-biology.md | 3 | 減数分裂、中間化石、メンデルF1/F2 |
| science-physics.md | 3 | 滑車と仕事、運動グラフ、水圧と浮力 |
| science-earth.md | 3 | 太陽表面、すい星、銀河系 |

---

## 10. 参考資料

- **型定義（時代・トピック）**: `src/data/types.ts`
- **型定義（チャット）**: `src/data/history-chat/types.ts`
- **サンプル（チャット）**: `src/data/history-chat/sample-chat.ts`（本能寺の変）
- **サンプル（時代・トピック構造）**: `src/data/subjects/history/eras/`
- **理科サンプル（化学）**: `src/data/subjects/science/units/grade3/1-chemistry/`
- **SVG図解**: `public/images/science/`
- **AI画像プロンプト**: `docs/image-prompts/`
- **デザインガイド（色・ボタン規約）**: `docs/design-guide.md`
