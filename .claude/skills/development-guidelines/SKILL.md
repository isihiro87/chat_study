---
name: development-guidelines
description: 開発ガイドラインを作成するための詳細ガイドとテンプレート。開発ガイドライン作成時にのみ使用。
allowed-tools: Read, Write
---

# 開発ガイドラインスキル

このスキルは、チーム全体で統一された開発プロセスを確立するための詳細ガイドです。

## テンプレートの参照

開発ガイドラインを作成する際は、以下のテンプレートを使用してください:

```bash
Read('.claude/skills/development-guidelines/template.md')
```

## 開発ガイドラインの構成要素

### 1. コーディング規約

**具体的な例を含める**

良い例:
```typescript
// ✅ 良い例: 明確な命名
function calculateTotalPrice(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// ❌ 悪い例: 曖昧な命名
function calc(arr: any[]): number {
  return arr.reduce((s, i) => s + i.p * i.q, 0);
}
```

### 2. Git運用ルール

- ブランチ戦略
- コミットメッセージ規約
- プルリクエストプロセス
- コードレビュー基準

### 3. テスト戦略

- テストの種類と範囲
- カバレッジ目標
- テスト命名規則

## 詳細ガイド

さらに詳しい作成ガイドは以下を参照:

```bash
Read('.claude/skills/development-guidelines/guide.md')
```
