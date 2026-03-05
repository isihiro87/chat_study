# デザインガイド

## コンセプト

「ノートに書き込む」ような温かみのある学習体験。中学生が毎日開きたくなる、親しみやすさと見やすさを両立したデザイン。

## カラーパレット

### メインカラー

| 用途 | 色名 | Hex | Tailwind | 使用例 |
|------|------|-----|----------|--------|
| テキスト（見出し） | ダークグレー | `#1f2937` | `gray-800` | ページタイトル、問題文 |
| テキスト（本文） | ミディアムグレー | `#4b5563` | `gray-600` | 説明文、解説 |
| テキスト（補足） | ライトグレー | `#9ca3af` | `gray-400` | ヒント、注釈 |
| 背景（ページ） | ウォームホワイト | `#FAF9F7` | カスタム | body背景 |
| 背景（カード） | ホワイト | `#FFFFFF` | `white` | カード、入力欄 |
| 背景（セクション） | ウォームグレー | `#F5F3F0` | カスタム | セクション区切り |

### アクセントカラー

| 用途 | 色名 | Hex | Tailwind | 使用例 |
|------|------|-----|----------|--------|
| アクセント | アンバー | `#F59E0B` | `amber-500` | アクティブタブ、進捗バー |
| アクセント（濃） | ダークアンバー | `#D97706` | `amber-600` | ホバー、プレス状態 |
| アクセント背景 | ライトアンバー | `#FEF3C7` | `amber-100` | バッジ背景、ハイライト |

### セマンティックカラー（意味を持つ色）

| 用途 | 色名 | Hex | Tailwind | 使用例 |
|------|------|-----|----------|--------|
| 正解 | グリーン | `#10B981` | `emerald-500` | 正解フィードバック |
| 正解背景 | ライトグリーン | `#D1FAE5` | `emerald-100` | 正解カード背景 |
| 不正解 | レッド | `#EF4444` | `red-500` | 不正解フィードバック |
| 不正解背景 | ライトレッド | `#FEE2E2` | `red-100` | 不正解カード背景 |
| 復習 | アンバー | `#F59E0B` | `amber-500` | 復習モード |

### 禁止カラー

以下の色はAI/テック感が出るため使用禁止:

- `indigo-*` 系統（全て）
- `purple-*` 系統（全て）
- `violet-*` 系統（全て）

## ボタンスタイル

### 原則: グラデーション禁止

ボタンには `from-* to-*` グラデーションを使わない。ソリッドカラーのみ使用する。

### ボタンの種類

```
プライマリボタン（CTA）:
  bg-gray-800 text-white rounded-full
  hover: なし（モバイルメイン）
  active: active:scale-95

セカンダリボタン:
  border-2 border-gray-200 bg-white text-gray-700 rounded-full
  active: active:scale-95

アクセントボタン（復習・特別アクション）:
  bg-amber-500 text-white rounded-full
  active: active:scale-95

デンジャーボタン:
  bg-red-500 text-white rounded-full（ほぼ使わない）
```

### 選択肢ボタン（クイズ等）:

```
border-2 border-gray-200 bg-white rounded-xl p-3.5
hover: hover:border-gray-300 hover:bg-gray-50
active: active:scale-[0.98]
```

## タイポグラフィ

### フォント使い分け

| フォント | 用途 | 指定方法 |
|----------|------|----------|
| Zen Maru Gothic | 見出し、ボタンラベル、強調テキスト | `style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}` |
| Noto Sans JP | 本文、選択肢、解説 | `style={{ fontFamily: "'Noto Sans JP', sans-serif" }}` またはデフォルト |

### サイズ階層

- ページタイトル: `text-xl font-bold`
- セクション見出し: `text-lg font-bold`
- 問題文: `text-base font-semibold sm:text-lg`
- 本文: `text-base` または `text-sm`
- キャプション: `text-xs`

## コンポーネントパターン

### カード

```
rounded-2xl border border-gray-200 bg-white p-4
（影は使わない。ボーダーで区切る）
```

### バッジ/ラベル

```
rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700
```

### 正誤フィードバック

```
正解: rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-4
不正解: rounded-2xl border-2 border-red-300 bg-red-50 p-4
```

### プログレス表示

```
ドット: bg-gray-800（完了）/ bg-gray-400（現在）/ bg-gray-200（未完了）
復習モード: bg-amber-500（完了）/ bg-amber-300（現在）/ bg-gray-200（未完了）
```

## 背景色ルール

- ページ背景: `#FAF9F7`（ウォームホワイト）
- カード: `bg-white`（純白）
- セクション区切り: `bg-gray-50` のみ使用
- 意味のある色付き背景: セマンティックカラーの `-50` バリアントのみ（`emerald-50`, `red-50`, `amber-50`）
- `blue-50`, `orange-50`, `purple-50` は使用しない

## shadow（影）ルール

- 基本的に `shadow` は使わない
- 必要な場合のみ `shadow-sm` を使用（フローティング要素のみ）
- `shadow-md`, `shadow-lg` は禁止

## 角丸ルール

| 要素 | 角丸 |
|------|------|
| ページレベルのカード | `rounded-2xl` |
| ボタン（CTA） | `rounded-full` |
| 選択肢ボタン | `rounded-xl` |
| バッジ/ラベル | `rounded-full` |
| 入力欄 | `rounded-xl` |
| 小さな装飾 | `rounded-lg` |
