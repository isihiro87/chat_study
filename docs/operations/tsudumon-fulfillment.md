# つづもん 納品・ライセンス運用ランブック

つづもん（PDF問題集＋参考書、期間ライセンス制）の注文1件を納品する手順と、
ライセンス／ダウンロードのトラブル対応。実装の設計は
`.steering/20260718-tsudumon-license/`、教材の組み立ては `../pdf-workbook/README.md` を参照。

## 全体像

```
注文（Stripe 等で入金確認）
  → ① pdf-workbook: 透かし入り zip を作る
  → ② marutto-study: ライセンス発行 + zip アップロード（1コマンド）
  → ③ 出力された案内文を購入者へメール / LINE で送る
購入者:
  DLリンク（回数制限つき）で zip を受け取る
  ライセンスコードを公式LINEに送る → AI採点・AI先生が有効化（学年×期間でゲート）
```

## 納品手順（注文1件あたり）

```powershell
# ① 透かし入り zip（pdf-workbook リポジトリで）
cd C:\Users\user\projects\education-apps\pdf-workbook
python -X utf8 build_delivery.py --plan 中1 --name "山田太郎" --order ORD-12345 --zip

# ② ライセンス発行 + アップロード + 案内文出力（marutto-study で・要 gcloud ADC）
cd C:\Users\user\projects\education-apps\marutto-study
npx tsx scripts/manage-tsudumon.ts issue --plan 中1 --years 1 `
  --name "山田太郎" --order ORD-12345 `
  --zip ..\pdf-workbook\dist\山田太郎_ORD-12345\つづもん_中1.zip
```

`--plan` は `中1|中2|中3|セット`、`--years` は `1|2|3`。
③ コマンドが出力する案内文テンプレ（DLリンク・ライセンスコード・登録手順入り）を
そのまま購入者へ送って完了。

## 仕組みの要点

| 項目 | 内容 |
|---|---|
| ライセンスコード | `TZM-XXXX-XXXX`（0/O/1/I を含まない）。Firestore `tsudumonLicenses/{code}` が正本 |
| 登録 | 購入者がコードを公式LINEに送る → `users/{uid}.tsudumon` に plan/期限を書き込み |
| 期間の起点 | **最初の登録日**から `years` 年（未登録のうちは減らない） |
| 登録台数 | 1コード3アカウントまで（きょうだい用。`issue --max N` で変更可） |
| ゲート | ワーク演習・参考書AI先生の入口3点で判定。無料体験単元（律令国家と奈良時代）は誰でも可 |
| DLリンク | `https://www.chatstudy.jp/tsudumon/dl?c={code}`（既定10回まで・`tsudumonDownload` が302） |
| 複製抑止 | PDF全ページの購入者名透かし（主軸）＋ DL回数上限 ＋ 登録台数上限 ＋ revoke |
| 緊急スイッチ | env `TSUDUMON_GATE_ENABLED=false` で全ゲート開放（lineWebhook 再デプロイ） |

## よくある対応

```powershell
# 状態確認 / 一覧
npx tsx scripts/manage-tsudumon.ts info --code TZM-XXXX-XXXX
npx tsx scripts/manage-tsudumon.ts list

# 「ダウンロードできない（上限）」→ 回数リセット
npx tsx scripts/manage-tsudumon.ts reset-dl --code TZM-XXXX-XXXX

# 流出・不正が疑われる → 停止（DLとコード登録が止まる）
npx tsx scripts/manage-tsudumon.ts revoke --code TZM-XXXX-XXXX

# 期間延長（サポート対応・月額継続の手動運用）
npx tsx scripts/manage-tsudumon.ts extend --code TZM-XXXX-XXXX --until 2028-03-31
# ※ ユーザー側に反映するには、ユーザーにコードをもう一度送ってもらう（再登録で新期限が入る）

# zip の差し替え（教材更新版の配布など）
npx tsx scripts/manage-tsudumon.ts set-zip --code TZM-XXXX-XXXX --zip path\to\new.zip
```

- **期限切れユーザーが「継続希望」と送ってきたら**: 当面は手動対応。
  入金確認 → `extend` → 「もう一度コードを送ってください」と案内。
- **revoke してもユーザーの `users/{uid}.tsudumon` は期限まで残る**
  （ホットパスで license doc を読まない設計のため）。即時停止したい場合は
  該当ユーザーの `tsudumon` フィールドを削除する。

## デプロイ（初回）

```bash
cd functions && npm run build && cd ..
FUNCTIONS_DISCOVERY_TIMEOUT=600 firebase deploy --only functions:lineWebhook,functions:tsudumonDownload
firebase deploy --only firestore:rules
# Vercel（/tsudumon/dl rewrite）は main への push で自動デプロイ
```

前提: Firebase コンソールで **Storage を有効化**しておく（バケットは
`chatstudy-63477.firebasestorage.app` または `.appspot.com`。scripts は両方試す）。
