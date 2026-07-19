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

## 2.5 配信の一時停止・再開（ユーザー自身の選択、2026-07 追加）

ユーザーは設定メニュー（リッチメニュー「設定・サポート」→ flex footer の
「🔕 配信をおやすみする」ボタン）から、自分で配信を一時停止できる。
ブロックの受け皿（「止めたい」の唯一の手段がブロックだった）と配信枠の節約を兼ねる。

- **フィールド**: `users/{uid}.deliveryPaused`（boolean）、`deliveryPausedAt` / `deliveryResumedAt`
- **停止中に止まるもの**: cron 由来 push すべて（dailyQuiz の毎日/週3配信・
  週3移行案内・Win-back）。判定は `userStatus.ts` の `shouldSkipCronPush(data)`
  （blocked と共通、ユニットテストあり）
- **停止中も使えるもの**: reply 系すべて（1問解く / 苦手を復習 / 範囲設定 /
  AIチャット / じっくり学ぶ）。停止確認メッセージにその旨を明記している
- **再開手段**（3経路）:
  1. 停止確認 / 設定メニューの「▶️ 配信を再開する」ボタン（postback `type=resume_delivery`）
  2. 復帰キーワード「再開」等（`detectRestartIntent`）。**停止中ユーザーは
     8日ゲート（RESTART_WELCOME_MIN_INACTIVE_DAYS）をバイパス**して即再開
  3. Win-back CTA 経由の `handleRestartIntent`（write に `deliveryPaused: false` を含む）
- **再開時の処理**: `deliveryPaused=false` + `status='active'` + `statusChangedAt` 更新
  → 翌日以降の dailyQuiz 対象に復帰
- **計測**: funnel イベント `delivery_paused` / `delivery_resumed`
  （`premiumFunnelEvents`）。dailyQuiz done ログに `pausedSkipped=N` が出る

## 2.52 友だち追加直後の「おためし1問」（2026-07 追加）

follow の最初の reply に、学年不問の静的1問（`SAMPLE_QUESTION`、江戸幕府）を同梱する。
ブロックの46%が登録48h以内・無回答層のブロック率28.7%への対策で、オンボ登録より先に
「タップで解ける→解説が届く」成功体験を作る。

- postback `type=sample_answer&c=N` → `handleSampleAnswerPostback`。
  **Firestore の questions / answers / stats には触れない自己完結**（学習記録を汚さない）。
- 回答後: 正誤＋解説＋「毎日こんな1問が届くよ」→ オンボ未完了なら学年選択 flex を再提示。
  完了済みなら「メニューの『1問解く』へ」と案内（冪等・何度押しても同じ）。
- 計測: funnel `sample_question_answered`（context.correct）。

## 2.53 streak 週1おやすみ免除（2026-07 追加）

**ちょうど1日の欠席は、7日に1回まで免除して連続記録を継続**する（+1）。
1日のうっかり欠席で streak がゼロに戻る喪失感（離脱・ブロック誘因）への対策。

- ロジック: `streakState.ts` の `nextStreakState`（純粋関数・UT 21件）。
  免除使用日は `users.stats.streak.lastForgivenDateJst`（JST 日付）に永続化
  （書き込みは `onAnswerCreated` の transaction）。
- 発動時は回答フィードバックに「🎟️ 週1回のおやすみOKでつながってるよ」を添える。
- 連続記録 flex（`handleStreakPostback`）は answers limit(500) の再計算をやめ、
  `users.stats` を真値として表示（免除との整合＋1タップ 500 read 削減）。
  表示判定は `displayStreakDays`（今日/昨日/免除可能な一昨日までは「生きている」扱い）。
- dormant 移行時の streak リセット（`recalculateUserStatuses` 系）は従来どおり。

## 2.55 「考え中…」ローディング表示（2026-07 追加）

ボタンタップ（postback）・メッセージ受信の処理ラグの間、トーク画面に LINE 公式の
ローディングアニメーションを表示する（`showLoadingAnimation` / chat loading API）。

- 実装: `lineWebhook.ts` の `dispatchEvent` 冒頭 → `showThinkingIndicator(event, seconds)`
- 秒数: postback=10秒 / message=20秒（AI チャット・画像音声は Gemini で 10数秒かかるため）。
  **bot の返信が届いた時点で自動的に消える**ので、実際の表示は処理時間ぶんだけ。
- 1:1 トークのみ対応（API 仕様）。呼び出し失敗は warn ログのみで本処理を止めない。
- 制約: webhook のコード実行が始まる前の遅延（LINE 側の配送・コールドスタート）は
  カバーできない（インジケーターを出せるのは関数起動後のため）。

## 2.6 「まだ習ってない」ワンタップ出題除外（2026-07 追加）

問題カード footer 末尾の「🙅 この範囲はまだ習ってない」→ 除外モードを Quick Reply で
選択 → `testScope.topics` を **topic（細かい範囲）単位**で更新し、その場で代わりの
1問を同一 reply で出す。すべて reply（配信枠ゼロ）。

- **モード**: 「この範囲だけ外す」（single）/「ここから先も外す」（after）。
  2択は **flex のボタン**で提示（Quick Reply チップは PC 版 LINE 非表示・
  次の発言で消えるため不採用。2026-07-03 変更）。
  **after の範囲は教科で異なる**: 理科＝同じ単元（era）内のそれ以降だけ、
  歴史・英語・地理＝全体並び（era 順 × era 内 topic 順）でそれ以降すべて。
- **範囲計算**: `lineScopeFlow.computeScopeAfterNotLearned`（純粋関数・テスト済み）。
  範囲未設定ユーザーは「全 topic − 除外分」を新規スコープとして保存（範囲設定の代行）。
- **ガード**: 除外で topics が空になる場合は保存せず「範囲を設定する」チップへ誘導。
  数学は scope eras 未生成のためボタン自体を出さない。
- **書き込み**: `testScope.lastSource='line_inline'` で push トリガを抑止（範囲設定と同じ）。
- **計測**: funnel `not_learned_tap` / `not_learned_applied`（topic / mode / excludedCount / hadScope）。
- **戻し方**: メニューの「出題範囲設定」（scope_start フロー）でいつでも再選択可能。

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
