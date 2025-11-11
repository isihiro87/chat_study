---
description: 初回セットアップ: 6つの永続ドキュメントを対話的に作成する
---

# 初回プロジェクトセットアップ

このコマンドは、プロジェクトの6つの永続ドキュメントを対話的に作成します。

## 実行方法

```bash
claude
> /setup-project
```

## 重要な原則

**1ファイルずつ作成し、必ずユーザーの承認を得てから次に進んでください。**

各ドキュメント作成後、以下のメッセージでユーザーに確認を求めてください:
```
「[ドキュメント名]の作成が完了しました。内容を確認してください。
承認いただけたら次のドキュメントに進みます。」
```

ユーザーが「OK」「承認」「次へ」などと返答するまで、次のステップに進んではいけません。

## 手順

### ステップ1: プロダクト要求定義書の作成

1. ユーザーと対話して、プロダクトのビジョンを確認する
2. **prd-writingスキル**を使用してください(`/skill prd-writing`で起動)
3. スキルのテンプレートとガイドに従って`docs/product-requirements.md`を作成
4. ユーザーに確認を求め、**承認されるまで待機**

### ステップ2: 機能設計書の作成

1. `docs/product-requirements.md`を読む
2. **functional-designスキル**を使用してください(`/skill functional-design`で起動)
3. スキルのテンプレートとガイドに従って`docs/functional-design.md`を作成
4. ユーザーに確認を求め、**承認されるまで待機**

### ステップ3: アーキテクチャ設計書の作成

1. 既存のドキュメントを読む
2. **architecture-designスキル**を使用してください(`/skill architecture-design`で起動)
3. スキルのテンプレートとガイドに従って`docs/architecture.md`を作成
4. ユーザーに確認を求め、**承認されるまで待機**

### ステップ4: リポジトリ構造定義書の作成

1. 既存のドキュメントを読む
2. **repository-structureスキル**を使用してください(`/skill repository-structure`で起動)
3. スキルのテンプレートに従って`docs/repository-structure.md`を作成
4. ユーザーに確認を求め、**承認されるまで待機**

### ステップ5: 開発ガイドラインの作成

1. 既存のドキュメントを読む
2. **development-guidelinesスキル**を使用してください(`/skill development-guidelines`で起動)
3. スキルのテンプレートに従って`docs/development-guidelines.md`を作成
4. ユーザーに確認を求め、**承認されるまで待機**

### ステップ6: 用語集の作成

1. 既存のドキュメントを読む
2. **glossary-creationスキル**を使用してください(`/skill glossary-creation`で起動)
3. スキルのテンプレートに従って`docs/glossary.md`を作成
4. ユーザーに確認を求め、**承認されるまで待機**

## 完了条件

- 6つの永続ドキュメントが全て作成されている
- 各ドキュメントがユーザーに承認されている

完了時のメッセージ:
```
「初回セットアップが完了しました!

作成したドキュメント:
✅ docs/product-requirements.md
✅ docs/functional-design.md
✅ docs/architecture.md
✅ docs/repository-structure.md
✅ docs/development-guidelines.md
✅ docs/glossary.md

これで開発を開始する準備が整いました。

今後の使い方:
- ドキュメントの編集: 普通に会話で依頼してください
  例: 「PRDに新機能を追加して」「architecture.mdを見直して」

- 機能の追加: /add-feature [機能名] を実行してください
  例: /add-feature ユーザー認証

- ドキュメントレビュー: /review-docs [パス] を実行してください
  例: /review-docs docs/product-requirements.md
」
```
