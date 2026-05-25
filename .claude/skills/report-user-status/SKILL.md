---
name: report-user-status
description: 公式LINE 登録者の現状（アカウント数 / 学年・教科・配信時刻の登録率 / プラン構成 / status / クイズ回答率）と、プレミアム導線ファネル（richmenu_tap → premium_info_view → apply_view → apply_submit、trial_started など）を Firestore から集計して表示するスキル。「登録者数を教えて」「ユーザーの登録状況を確認」「プレミアム申込のファネルを見せて」「trial が 0 の原因」などで起動。
allowed-tools: Bash, Read
---

# 公式LINE 登録者ステータス / 申込ファネル レポートスキル

Firestore (`chatstudy-63477`) の `users` / `answers` / `premiumFunnelEvents` / `premiumApplications` を集計して、現状の登録者数・属性充足率・プラン構成・クイズ回答率・プレミアム申込ファネルを表示する。

施策効果検証や「今、無料/プレミアムの内訳どうなってる？」「trial に進んだ人いる？」のような質問に即答するために使う。

## 起動トリガー

ユーザーから以下のような指示を受けたら起動:

- 「現在の登録者情報を取得して」「ユーザーの登録状況を確認」「登録者数教えて」
- 「学年別 / 配信時刻別の人数」「プレミアム会員何人？」「trial 中は何人？」
- 「クイズ回答率」「何人がクイズに答えてる？」
- 「プレミアム申込ファネルを見せて」「申込フォームの離脱率」
- 「richmenu のプレミアムタップ数」「`/liff/premium-info` まで到達した UU」

## 実行手順

### ステップ0: 認証確認

```bash
gcloud auth application-default print-access-token >/dev/null 2>&1 && echo OK || echo NG
```

`NG` の場合はユーザーに `gcloud auth application-default login` の実行を依頼してから続行する。

### ステップ1: 登録者サマリ

```bash
npx tsx scripts/report-user-stats.ts
```

出力される項目:

- 登録アカウント総数（**管理者2件は自動除外**: `ADMIN_LINE_USER_IDS` で定義）
- LINE 連携率（`lineUserId` あり）
- オンボーディング状態（`complete` / `started` / `(unset)` 別）
  - ⚠️ 実書き込みは `"complete"` だが型定義 `userDocTypes.ts` は `"completed"` で不一致。スクリプト側は `"complete"` でカウントしている
- 属性充足率: 学年 / 教科 / 配信時刻 / ニックネーム
- プラン: `free` / `premium` 別、有効 premium のうち trial 中 / paid 内訳
- `status`: active / at-risk / dormant / churned
- クイズ回答: 1問でも回答した UU / 直近7日 / 直近30日 / 全 answers 件数 / 正答率（`users.stats` 集計）

### ステップ2: プレミアム申込ファネル

```bash
npx tsx scripts/report-funnel-stats.ts
```

出力される項目:

- eventType 別の総件数 / UU / 直近30日 / 直近7日
- **クライアント側申込ファネル**（UU ベース通過率）:
  1. `liff_units_open`（じっくり学ぶ LIFF 起動）
  2. `liff_premium_info_view`（`/liff/premium-info` 到達）
  3. `liff_premium_apply_view`（`/liff/premium-apply` 到達）
  4. `liff_premium_apply_submit`（申込フォーム送信）
- **サーバー側重要イベント**:
  `richmenu_premium_info_tap` / `trial_started` / `trial_reminder_sent` /
  `trial_drip_sent` / `trial_evening_reminder_sent` / `trial_night_reminder_sent` /
  `trial_expired` / `premium_apply_form_abandoned` / `post_trial_followup_sent` /
  `paid_contract_started` / `paid_cancel_requested` / `checkout_session_created` /
  `winback_sent` / `status_transition` / `restart_intent_detected`

### ステップ3: 結果報告

要点を Markdown 表にまとめてユーザーに返す。特に以下のシグナルは強調する:

- プラン: 一般ユーザーで `premium 有効 = 0` なら申込導線が機能していない可能性
- ファネル: `richmenu_premium_info_tap UU` >> `liff_premium_info_view UU` の脱落が大きければ LIFF 起動失敗や計測漏れを疑う
- `liff_premium_apply_view UU > 0` かつ `liff_premium_apply_submit UU = 0` なら申込フォーム自体に離脱要因
- `status=at-risk / dormant / churned` の比率が高ければ win-back の効果を確認

## 集計対象から除外する管理者

`scripts/report-user-stats.ts` と `scripts/report-funnel-stats.ts` の両方に
`ADMIN_LINE_USER_IDS` 定数を定義（同じ Set を持つ）:

- `U429b1d951fc7236c9e8e85e5ca96b910`
- `U732828c7b975479c97a104c5cbc45b7a`

管理者が増えた場合は **両ファイルの ADMIN_LINE_USER_IDS** に追記する。
（ユーザーから「`U...` も管理者として除外して」と依頼があれば 2 箇所の更新を提案する）

## 前提条件

- gcloud ADC 認証済み: `gcloud auth application-default login`
- `tsx` が devcontainer に入っていること（既に入っている）
- Firebase Admin SDK は `firebase-admin/app applicationDefault()` で初期化

## 関連リソース

- スクリプト:
  - `scripts/report-user-stats.ts`（users / answers / stats）
  - `scripts/report-funnel-stats.ts`（premiumFunnelEvents）
- 集計対象スキーマ:
  - `functions/src/userDocTypes.ts` — users コレクションのサーバ側型
  - `functions/src/funnelEvent.ts` — `ServerFunnelEventType` 一覧
  - `src/utils/funnelEvent.ts` — クライアント側で記録される 4 種 eventType
- 関連スキル: `switch-line-plan`（個別ユーザーのプラン切替）
- 関連ドキュメント: CLAUDE.md 「公式LINE 休眠ユーザー除外 + Win-back システム」
