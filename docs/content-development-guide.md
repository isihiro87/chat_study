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

## 9. 参考資料

- **型定義（時代・トピック）**: `src/data/types.ts`
- **型定義（チャット）**: `src/data/history-chat/types.ts`
- **サンプル（チャット）**: `src/data/history-chat/sample-chat.ts`（本能寺の変）
- **サンプル（時代・トピック構造）**: `src/data/subjects/history/eras/`
