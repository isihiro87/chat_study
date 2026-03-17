---
name: prepare-content
description: コンテンツ作成前に教科別分析ファイルを読み込み、品質基準・パターン・過去フィードバックをコンテキストに設定する。コンテンツ作成系スキル（generate-content, improve-from-pdf, generate-quiz）の前に実行する。
allowed-tools: Read, Grep, Glob
---

# コンテンツ作成準備スキル

コンテンツ作成の前に、教科別の品質基準・構造パターン・過去のフィードバックを把握し、作成方針を提示する。

## 使用タイミング

- `/generate-content` や `/improve-from-pdf` の **前** に実行
- 新しい教科のコンテンツに初めて取り組むとき
- 過去のフィードバックを確認してから作業したいとき

## 使用方法

```
/prepare-content <教科ID>
```

教科ID: `math` | `science` | `history` | `geography` | `english`

---

## ステップ1: 分析ファイルの読み込み

対象教科の分析ファイルを読み込む:

| 教科ID | 分析ファイル |
|--------|-------------|
| math | `docs/content-analysis/math.md` |
| science | `docs/content-analysis/science.md` |
| history | `docs/content-analysis/history.md` |
| geography | `docs/content-analysis/geography.md` |
| english | `docs/content-analysis/english.md` |

---

## ステップ2: 教科専用スキルの確認

英語の場合、追加で `.claude/skills/english-content/SKILL.md` を読み込む。

---

## ステップ3: 現在のカバレッジ確認

対象教科のトピック数・コンテンツ充実度を簡易チェック:

```bash
# トピック数
find src/data/subjects/<教科>/ -name "index.ts" -path "*/topics/*" | wc -l

# chat.ts カバレッジ
find src/data/subjects/<教科>/ -name "chat.ts" | wc -l

# quiz/ カバレッジ
find src/data/subjects/<教科>/ -type d -name "quiz" | wc -l
```

---

## ステップ4: 作成方針の提示

以下を整理してユーザーに提示する:

### A. この教科のコンテンツパターン

分析ファイルの「教材タイプ別の作り方」セクションから要点を抽出:
- 使用するコンテンツタイプ（チャット、スライド、例題など）
- ID命名規則
- キャラクター設定（色、名前、表情）

### B. 品質目標値

| 項目 | 目標 |
|------|------|
| フラッシュカード | 15〜25枚/トピック |
| クイズ（index.ts） | 10〜12問/トピック |
| 一問一答 | 40〜50問/トピック |
| 大問小問 | 25〜30問/トピック |
| 発展問題 | 15〜20問/トピック |
| 例題 | 4〜6題/トピック |
| スライド（理科・地理） | 3〜5セット/トピック |

### C. 過去のフィードバック

分析ファイルの「フィードバックログ」セクション（存在する場合）から、この教科で注意すべき点を抽出。

### D. 未実施の改善案

分析ファイルの「改善案」セクションから、今回の作業で取り入れられるものを提案。

---

## 出力形式

```markdown
## コンテンツ作成準備: [教科名]

### パターン概要
- [教材タイプと構造の要点]

### 品質目標
- [目標値テーブル]

### 注意点（過去のフィードバック）
- [フィードバックからの注意点。なければ「まだフィードバックログがありません」]

### 推奨する改善案
- [今回取り入れられる改善案]

### 次のステップ
→ `/improve-from-pdf` or `/generate-content` を実行してください
```
