# 休眠プレミアム/トライアル資産の棚卸し（2026-07-19）

2026-06 の全機能無料化（コミット `da2ab58`）で停止したまま温存されている課金関連コードの一覧と、
**再開する場合の必須チェックリスト**。方針: 削除はせず温存（CLAUDE.md 準拠）。削除に切り替える場合は本書の「削除候補」節を使う。

## 1. kill-switch フラグ（すべて false で停止中）

| フラグ | 場所 | 止めているもの |
|---|---|---|
| `PREMIUM_FLOW_ENABLED` | `functions/src/lineWebhook.ts:677` | 訴求CTA 4系統（もう1問ナッジ/使い方/成績・記録/premium_info）※premium_info は 2026-07-19 から「全員無料」案内reply＋1問送信に転用中 |
| `PREMIUM_FLOW_ENABLED` | `functions/src/createStripeCheckoutSession.ts` | Stripe Checkout（410 を返す） |
| `TRIAL_GRANT_ENABLED` | `functions/src/onPremiumApplicationCreated.ts` | 申込→trial 自動開放 |
| `TRIAL_FLOW_ENABLED` | `functions/src/onAnswerCreated.ts` | 自動trial・プレミアムnudge・first_extra followup |
| `TRIAL_DRIP_ENABLED` | `functions/src/trialDripBase.ts` | trial ドリップ（day2/4/5/6/7 系列） |
| `POST_TRIAL_FOLLOWUP_ENABLED` | `functions/src/postTrialFollowup.ts` | trial後追い |
| `ABANDON_REMINDER_ENABLED` | `functions/src/trialFormAbandonReminder.ts` | フォーム離脱リマインド |
| `TRIAL_EXPIRE_ENABLED` | `functions/src/expireTrialUsers.ts` | trial失効処理 |

## 2. 休眠している文言・資産（価格入り）

- **flexビルダー群**（`lineWebhook.ts` 約7700〜8800行）: `buildPremiumInfoFlexMessage` / `buildPriceLockPitchFlex`（¥680ロック）/ `buildTrialStartedFlexMessage`（7日間）/ `buildTrialReminderFlexMessage`（day1/3/6/7）/ `buildTrialExpiredFlexMessage`（¥980・差額¥3,600）/ `buildPaidStartedFlexMessage` / `buildPremiumNudgeFlexMessage` / `NUDGE_COPY`
- **コピーモジュール**: `premiumCopy.ts`（場面別¥680/¥980訴求）/ `parentCopy.ts`（保護者向け価格比較）/ `priceCalculator.ts`（体験中¥680永続ロック/通常¥980）
- **Stripe**: `createStripeCheckoutSession.ts`（`STRIPE_PRICE_TRIAL_680`/`STRIPE_PRICE_NORMAL_980`）/ `stripeWebhook.ts` / `cancelStripeSubscription.ts`
- **cron 本体**（index.ts から export 撤去済み）: trialDrip 系 / trialReminderEveningDay7 / postTrialFollowup / trialFormAbandonReminder / expireTrialUsers
- **リッチメニューJSON**: `data/line-richmenu/{free,trial,premium}-richmenu.json`（**LINE 上の実体は削除済み**・state.json も default のみ。2026-07-19 に Firestore の旧 `richMenuType` 値 364人分も掃除済み）
- **Firestore フィールド**: `plan` / `planSource` / `premiumUntil` / `lockedMonthlyPrice` / `trialStartedAt` 等（既存ユーザーに残存。読み手は上記フラグで全て停止中）

## 3. ⚠️ 再開チェックリスト（フラグを true に戻す前に必ず全部やる）

現状は「AIチャットが全ユーザーに『公式LINEは無料』と断言する」構成のため、**フラグ復活だけ行うと AI と訴求文言が正面衝突**する。

1. [ ] `aiChatPrompt.ts` の「# 料金について」「# 仕組みが新しくなったこと」を有料プラン前提に書き直す
2. [ ] `scripts/eval-ai-chat.ts` の料金系ケース（無料断言の expect）を新料金に合わせて更新し、実行して pass させる
3. [ ] `functions/src/__tests__/aiChatPrompt.test.ts` の料金アサーションを更新
4. [ ] `premium_info` postback の「全員無料になった」案内reply（`lineWebhook.ts` handlePostback 内）を撤去
5. [ ] 価格を変える場合: `premiumCopy.ts` / `priceCalculator.ts` / flexビルダー / Stripe price env / `winbackVariations.ts` の価格ロック文言を一括更新（¥680/¥980 が分散している）
6. [ ] リッチメニュー: free/trial/premium を create/upload/set-default し直す（LINE 上に実体なし）
7. [ ] トライアル日数を変える場合: `trialDuration.ts` と全文言（「7日間」多数）を同期
8. [ ] 配信頻度文言（「はじめは毎日→週3回」）と有料特典の整合を確認
9. [ ] `docs/message-copy-guidelines.md` に有料訴求のトーン規定を追記

## 4. 削除候補（方針転換して削除する場合の対象）

上記 §1・§2 の全ファイル/関数＋ `syncRichMenuToPlan.ts` の trial 分岐、`userDocTypes.ts` の plan 系フィールド定義。
削除時は `switch-line-plan` スキル（sync-plan 前提）と `docs/operations/line-richmenu.md` §6 も同時改訂すること。
