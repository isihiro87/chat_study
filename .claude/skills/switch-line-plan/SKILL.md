---
name: switch-line-plan
description: 公式LINEの特定ユーザーを「無料 ↔ 有料」に1コマンドで切り替える管理者スキル。LINE Messaging APIのリッチメニュー再リンクとFirestore更新を一気通貫で実行する。「U... をプレミアムに」「U... 解約」のような短い指示で実行。
allowed-tools: Bash, Read
---

# LINE プラン切替スキル

公式LINE の特定ユーザーを **無料 ↔ 有料** に切り替えるための管理者向けスキル。

裏側でやること:
1. LINE Messaging API で richmenu のリンクを差し替え（4ボタン ↔ 6ボタン）
2. Firestore `users/line:{uid}` に `plan / premiumUntil / richMenuType / lastRichMenuUpdatedAt` を書き込み

## 起動トリガー

ユーザーから以下のような指示を受けたら、即座にこのスキルを使う:

- 「U429b1d951fc7236c9e8e85e5ca96b910 をプレミアムに切り替えて」
- 「U429... を有料化、期限は来月末」
- 「U429... の有料を解約」「U429... を無料に戻して」
- 「これプレミアム化して: U429...」

## 実行手順

### ステップ1: 引数の解釈

- **lineUserId**: 「U」+ 32桁の小文字16進。`U[0-9a-f]{32}` でない場合はユーザーに修正依頼
- **plan**:
  - 「プレミアム」「有料」「premium」「アップグレード」 → `premium`
  - 「無料」「解約」「free」「ダウングレード」「戻す」 → `free`
- **--until（プレミアム時のみ）**:
  - 「2026-06-09」 → `2026-06-09T00:00:00+09:00`
  - 「来月末」「30日後」「1ヶ月」 → 今日（`currentDate` メモリ参照）から計算して ISO8601 に変換
  - 指定なし → `--until` を付けない（`premiumUntil` を更新しない）

### ステップ2: コマンド組み立て

プレミアムへ:
```bash
npx tsx scripts/manage-line-richmenu.ts sync-plan <lineUserId> premium [--until <ISO8601>]
```

無料へ:
```bash
npx tsx scripts/manage-line-richmenu.ts sync-plan <lineUserId> free
```

### ステップ3: Bash で実行

`Bash` ツールで上記コマンドを実行。出力にエラーが含まれたらそのまま見せて、必要なら修正案を提示。

### ステップ4: 結果報告

成功した場合は出力をそのままユーザーに見せる:

```
✓ LINE: premium richmenu (richmenu-...) を U429... にリンクしました
✓ Firestore: users/line:U429... を更新しました (plan=premium, ...)
→ 数秒以内にスマホの LINE メニューが 6ボタン に切り替わります。
```

## エラー対応

| エラー | 原因 | 対処 |
|--------|------|------|
| `lineUserId は 'U' で始まる33文字...` | userId 形式不正 | ユーザーに正しい userId を聞き直す |
| `state.json に <plan> の richMenuId がありません` | richmenu 未作成 | `docs/operations/line-richmenu.md` §5 の create 手順を案内 |
| `LINE API ... failed: 400 ... rich menu not found` | richmenu が削除されている | `manage-line-richmenu.ts list` で確認 → 必要なら recreate |
| `LINE API ... failed: 401` | アクセストークン期限切れ | LINE Developers で再発行 → `functions/.env` 更新 |

## 注意事項

- 本スキルは **本番 LINE / 本番 Firestore に直接書き込む**。実行前にユーザーの意図を再確認するのが望ましい（特に「解約」系）。
- `gcloud auth application-default login` 済みであること（admin SDK が ADC を使う）。

## 関連ドキュメント

- `docs/operations/line-richmenu.md` §6 — 詳細運用手順
- `scripts/manage-line-richmenu.ts` — 実装
- `functions/src/syncRichMenuToPlan.ts` — 同等処理の Cloud Function（プログラマティック呼び出し用に温存）
