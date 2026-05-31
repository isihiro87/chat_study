# 公式LINE メッセージシステム運用ガイド

休眠ユーザー除外システム / Win-back キャンペーン / 価格ロック / トライアル
ドリップキャンペーン / 月次送信モニタリングの運用ガイド。

実装の経緯と設計は `.steering/20260519-line-message-retention-overhaul/`
配下のステアリングファイルを参照。

---

## 1. 全体像

公式LINE メッセージは大きく分けて 4 種類:

1. **通常配信（毎日 1 問）** — `dailyQuiz06-21` cron
2. **Trial ライフサイクル** — 開始 / Day 1〜7 リマインダー / 期限切れ通知
3. **Win-back** — 離脱ユーザー向けの節目メッセージ（Day 3 / 7 / 14）
4. **その他** — Onboarding 未完了リマインダー、申込フォーム離脱フォローアップ、
   trial 切れ後フォローアップ、マイルストーンナッジ

すべての push は `deliveryStats/{YYYY-MM}` collection にカウントされ、
月次レポートで上限超過を検知する。

## 2. ユーザーステータスと配信制御

`users/{uid}.status` フィールドが「active / at-risk / dormant / churned」
のいずれかを保持する。

| status | 判定条件（JST 暦日） | 配信内容 |
|---|---|---|
| `active` | 0〜3日 | 通常配信 + マイルストーンナッジ |
| `at-risk` | 4〜7日 | 通常配信停止、Day 3 Win-back のみ |
| `dormant` | 8〜14日 | 通常配信停止、Day 7 Win-back のみ。streak リセット |
| `churned` | 15日以上 | Day 14 Win-back（最終）送信後は完全静観 |

判定ロジックは `functions/src/userStatus.ts` の `computeStatusFromLastAnswer`
（純粋関数、ユニットテスト 25 件カバー）。

`recalculateUserStatuses` cron が毎日 JST 02:00 に発火し、全 users を batch
読み込みして status を再計算 → `statusChangedAt` を更新する。

## 3. 復帰トリガー（再開キーワード）

ユーザーが「再開」「久しぶり」「もう一度」等のテキストを送ると、
`functions/src/keywordMatcher.ts` の `detectRestartIntent` が検知して:

1. `users/{uid}.status` を `active` に戻す
2. `statusChangedAt` を更新
3. 「おかえり」reply を返す
4. 即座に 1 問配信

幅広く検知することを優先（誤検知より復帰機会優先）。検知対象キーワード
は `RESTART_KEYWORDS` 定数を参照。

## 4. Win-back メッセージ

`sendWinbackMessages` cron が毎日 JST 19:00 に発火し、「今日 statusChangedAt
が更新された at-risk / dormant / churned ユーザー」を抽出して push する。

| status | タッチポイント | 概要 |
|---|---|---|
| at-risk | Day 3 | 軽めのリマインド（12 種以上） |
| dormant | Day 7 | 復帰インセンティブ含む（12 種以上）。trial 経験者には ¥680 価格ロック再オープン |
| churned | Day 14 | passive-aggressive 含む最終通知（11 種） |

**バリエーション選択**: `functions/src/winbackSelector.ts` の
`selectNextWinbackVariation` が過去 90 日の送信履歴を Firestore から
取得し、未送信のものから選ぶ。全種送信済みなら最も古いものから再利用。

**履歴の保持先**: `users/{uid}.winbackHistory.{day3|day7|day14}` の配列

## 5. Trial ドリップキャンペーン

体験中ユーザーへの段階的ナッジ。すべて `functions/src/trialDripBase.ts`
の共通ロジック経由で重複防止 + 24h cooldown を実装。

| Cron | 発火時刻 | Day | 内容 |
|---|---|---|---|
| `expireTrialUsers` | 03:00 | 1 / 3 / 6 / 7 朝 | 既存リマインダー（A-11 で 12h ガード追加） |
| `trialDripDay2` | 19:00 | 2 | 利用状況パーソナライズ |
| `trialDripDay3Parent` | 19:00 | 3 | 保護者向け flex |
| `trialDripDay4` | 19:00 | 4 | じっくり学ぶ未利用者のみ |
| `trialDripDay5Story` | 19:00 | 5 | 体験談（価格訴求なし） |
| `trialReminderEveningDay7` | 18:00 | 7 | あと約 5 時間 |

> `trialReminderNightDay7`（22:00 / 今夜 23:59 まで）は 2026-05-31 に廃止（しつこさ回避 + 中学生への深夜配信が不適切なため）。

各 milestone は `users/{uid}.lastTrialReminderAt.{milestone}` に送信履歴を保持。

## 6. 価格ロック（¥680 / ¥980）

セールスコピー設計（requirements.md §D-3）に基づく価格構造:

- **体験中の登録** → `lockedMonthlyPrice = 680` 永続ロック
- **体験後 / 体験未経験の登録** → `lockedMonthlyPrice = 980`
- 教科追加で新規価格は値上げするが、既存ユーザーは登録時の価格を維持

**価格判定**: `functions/src/priceCalculator.ts` の `determineApplicationPrice`
- `priceLockExpiresAt > now` → 680
- `priceLockReopenedAt` から 3 日以内 + `priceLockReopenUsed === false` → 680
- それ以外 → 980

**価格ロック再オープン**: Day 7 Win-back で trial 経験者にのみ提供。
生涯 1 回限り（`priceLockReopenUsed` フラグで保証）。

## 7. 月次送信モニタリング

`deliveryStats/{YYYY-MM}` collection に push 種別ごとのカウントを記録。

- 各 push 送信処理から `recordPushDelivery(pushType)` を呼ぶ
- `monthlyDeliveryReport` cron が毎月 1 日 09:00 JST に前月分を集計
- 仮上限 30,000 通の 80% 超過時は Cloud Logging に WARNING 出力

実プランに合わせて `MONTHLY_QUOTA_GUESS` 定数を要調整。

## 8. 初期セットアップ（デプロイ時 1 回限り）

新システムを本番に有効化する手順:

```bash
# 1. Firestore に新フィールド初期値を書き込む
gcloud auth application-default login
npx tsx scripts/migrate-user-status.ts --dry-run    # 差分確認
npx tsx scripts/migrate-user-status.ts              # 実書き込み

# 2. Functions デプロイ
cd functions
npm run deploy
```

`migrate-user-status.ts` は以下を実施:
- 全 users に `status: "active"` を初期設定
- プレミアム会員に `lockedMonthlyPrice: 680` を初期設定（過去価格保護）
- `statusChangedAt` を `createdAt` または現在時刻で初期化
- 旧 `lastTrialReminderAt`（Timestamp）を新 map 形式に変換

## 9. 監視するべきメトリクス

Cloud Logging で以下のログを定期確認:

- `[recalculateUserStatuses] done: ...` — status 別件数の急変
- `[sendWinbackMessages] done: ...` — Win-back 送信数、失敗数
- `[monthlyDeliveryReport] ... ⚠️ quota usage XX%` — 月次送信枠超過警告
- `[dailyQuiz06-21] zero active users for hour=...` — migration 未実施警告

## 10. トラブルシューティング

### 「再開」と送ったのに反応しない

1. Cloud Logging で `[lineWebhook] restart intent detected for {uid}` が出ているか確認
2. 出ていない場合は `keywordMatcher.detectRestartIntent` の挙動を `__tests__/keywordMatcher.test.ts` で確認
3. webhook イベントの順序問題（onboardingState=`awaiting_name` を先に処理）

### Win-back が想定外のユーザーに届く

1. `users/{uid}.statusChangedAt` の日時を確認（その日の 19:00 に発火する）
2. `users/{uid}.winbackHistory.{touchpoint}` で過去送信履歴を確認
3. 90 日窓内なら重複しないが、超えれば再選択される

### 価格ロックが期待と異なる

1. `users/{uid}.priceLockExpiresAt` と `priceLockReopenedAt` を確認
2. `priceCalculator.determineApplicationPrice` のロジックを `__tests__/priceCalculator.test.ts` で再確認
3. `premiumApplications/{id}.lockedPrice` で最終確定値を確認

## 11. 関連ファイル

```
functions/src/
├── userDocTypes.ts                # users 型定義（完全版）
├── deliveryStatsTypes.ts          # deliveryStats 型
├── userStatus.ts                  # status 判定純粋関数 + テスト
├── winbackVariations.ts           # Win-back メッセージ集
├── winbackSelector.ts             # 重複回避選択ロジック
├── priceCalculator.ts             # 価格判定純粋関数
├── keywordMatcher.ts              # 復帰キーワード検知
├── premiumCopy.ts                 # セールスコピー一元管理 + 禁止語テスト
├── parentCopy.ts                  # 保護者向けコピー
├── deliveryStats.ts               # 送信枠記録ヘルパー
├── trialDripBase.ts               # trial drip 共通処理
├── recalculateUserStatuses.ts     # status 日次再計算 cron
├── sendWinbackMessages.ts         # Win-back 送信 cron
├── trialDrip{Day2,Day3Parent,Day4,Day5Story}.ts
├── trialReminder{Evening,Night}Day7.ts
├── trialFormAbandonReminder.ts
├── postTrialFollowup.ts
├── monthlyDeliveryReport.ts
└── __tests__/                     # 90 件のユニットテスト

scripts/
└── migrate-user-status.ts         # 初期マイグレーション
```
