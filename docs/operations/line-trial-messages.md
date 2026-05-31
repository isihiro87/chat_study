# 公式LINE Trial（7日間お試し）ユーザー向け送信内容まとめ

公式LINE の **trial（7日間プレミアムお試し）** ユーザーに送られるメッセージを、トリガー・タイミング・本文・CTA・実装ファイル単位で一覧化したもの。

> このドキュメントは既存実装（`functions/src/` の各 cron / `lineWebhook.ts` のビルダー）から起こした **参照用サマリ**。文言を変えるときは必ず実装側（特に `premiumCopy.ts` / `parentCopy.ts`）も更新すること。本ファイルは source of truth ではない。

---

## 0. 前提：trial の定義とユーザー判定

- **trial 中**: `plan == "premium"` かつ `planSource == "trial"`、`premiumUntil` が未来。`trialStartedAt` を基準に経過日数（JST 暦日）を判定。
- **trial 切れ**: `expireTrialUsers` cron が `premiumUntil` 経過を検知し `plan="free"` / `planSource="trial_expired"` に降格、`trialExpiredAt` を記録。
- **価格ロック**: 体験中に登録 → 月¥680 永続ロック。体験後の登録 → 月¥980。
- 共通スキップ条件（全 cron）: `blocked == true`（公式LINEブロック中）は送信しない。各 milestone に 24h cooldown（`lastTrialReminderAt[milestone]` 等）で重複防止。

文言ヘルパーの一元管理:
- `functions/src/premiumCopy.ts` … 本人向けの価格アンカー / ベネフィット / 損失回避 / CTA を場面別に返す
- `functions/src/parentCopy.ts` … 保護者向けコピー（塾・授業料比較はここでのみ使用可）

---

## 1. 送信フロー全体像（時系列）

| # | タイミング | cron / トリガー | 実装ファイル | 概要 |
|---|-----------|----------------|-------------|------|
| 0 | 1問目回答時（自動開始） | `onAnswerCreated` の `maybeAutoStartTrial` | `onAnswerCreated.ts` → `lineWebhook.buildTrialStartedFlexMessage` | trial 開始通知 |
| 1 | Day 2 / JST 19:00 | `trialDripDay2` | `trialDripDay2.ts` | 「追加で解く」利用状況ベースのヒント |
| 2 | Day 3 / JST 19:00 | `trialDripDay3Parent` | `trialDripDay3Parent.ts` | 保護者向け flex |
| 3 | Day 4 / JST 19:00 | `trialDripDay4` | `trialDripDay4.ts` | 「じっくり学ぶ」案内 + 価格ロック pitch |
| 4 | Day 5 / JST 19:00 | `trialDripDay5Story` | `trialDripDay5Story.ts` | 先輩の体験談（価格訴求なし） |
| 5 | Day 6 / JST 19:00 | `trialDripDay6Projection` | `trialDripDay6Projection.ts` / `trialProjection.ts` | 継続projection「このまま続けたら…」 |
| 6 | Day 7 / JST 18:00 | `trialReminderEveningDay7` | `trialReminderEveningDay7.ts` | 「あと約5時間で終了」損失回避 |
| 7 | Day 8 朝（平日7:00 / 土日8:00） | `expireTrialUsers` | `expireTrialUsers.ts` → `lineWebhook.buildTrialExpiredFlexMessage` | 体験終了通知（free 降格） |
| 8 | Day 15 / 30 / JST 19:00 | `postTrialFollowup` | `postTrialFollowup.ts` | 体験後フォローアップ（月¥980で再開） |
| (補) | 申込離脱から24h後 / JST 19:00 | `trialFormAbandonReminder` | `trialFormAbandonReminder.ts` | 申込フォーム途中離脱の再喚起 |
| (補) | 復帰時 Day7 win-back | `sendWinbackMessages` | `sendWinbackMessages.ts` / `winbackVariations.ts` | trial 経験者に¥680再オープン |

> **Day 7 夜（22:00）リマインダーは廃止**（しつこさ回避 + 中学生への深夜配信は不適切なため、2026-05-31 に `trialReminderNightDay7` を削除）。Day 7 の最終接触は夕方 18:00 の 1 回のみ。
>
> **`expireTrialUsers` の配信時刻**: 中学生への深夜配信回避のため、2026-05-31 に JST 03:00 → **平日 07:00 / 土日 08:00** へ変更（cron は `0 7,8 * * *` で両時刻に起動し、曜日に応じて一方だけ実処理）。
>
> **`expireTrialUsers` は多目的 cron**: 体験終了通知（free 降格）に加え、`trialStartedAt` から Day 1 / 3 / 6 / 7朝 のユーザーへ `buildTrialReminderFlexMessage` も同じ時刻に送る。なお Day 6 の夕方には別途 `trialDripDay6Projection`（継続projection）も走る。
>
> **Day 6 / Day 7朝**: `premiumCopy.ts` に `day6` / `day7-morning` の損失回避文言が存在し、`day7-morning` は上記 `expireTrialUsers` の朝リマインダーから利用される。

共通基盤 `trialDripBase.runTrialDrip()`（`trialDripBase.ts`）が「`planSource=="trial"` & `plan=="premium"` を抽出 → `trialStartedAt` からの JST 経過日数が対象日と一致 → 24h cooldown 確認 → `buildMessages()` で本文生成 → push → funnel event + `recordPushDelivery` 記録」を担う。

---

## 2. 各メッセージの本文

### 0. Trial 開始通知（1問目回答で自動開始）
`buildTrialStartedFlexMessage`（`lineWebhook.ts:2764`）。ヘッダー amber `#F59E0B`。

- ヘッダー: `✨ 7日間お試し開始！` / `これから7日間、追加問題・暗記カード・四択クイズ・苦手な問題の出題が全部使えるよ`
- 本文: `1問目おつかれさま！🎉`
  `これから7日間、思いっきり問題を解いて勉強の習慣をつくっていこう。テストや受験に向けて一緒にがんばっていこうね📚`
  `下のボタンから、順番に試してみよう👇`
  - ① まずは「追加で解く」 — 今すぐもう1問チャレンジ！毎日1問じゃ足りない時に。
  - ② 次に「じっくり学ぶ」 — 暗記カードと四択クイズで効率よく覚えられる学習体験。
  - ③ 「苦手を復習」もチェック — 間違えた問題だけ集めて出題。テスト前の総復習に。
- CTA（postback）: `▶ まずは追加で解く`（`type=extra_question`）

---

### 1. Day 2 ドリップ（JST 19:00）
`trialDripDay2.ts` / ヘッダー `🚀 プレミアム体験 2日目`。「追加で解く」利用回数（`trialUsage.extraQuestionCount`）で分岐。

- 利用済み: `{nickname}体験2日目！『追加で解く』を {N} 問やってくれてありがとう。`
- 未利用: `{nickname}体験2日目！まだ『追加で解く』を試してないなら、サクッと1問やってみる？`
- 続けてベネフィット（`getBenefitText("day1")`）: `毎日10問解けて、苦手はピンポイントで復習できます。`
- CTA（postback）: `続けるならこちら`（`action=extra_question`）

---

### 2. Day 3 保護者向け flex（JST 19:00）
`trialDripDay3Parent.ts` / `parentCopy.ts`。

- 見出し: `お子様 / 保護者の方へ`
- 本文: `月¥680 = 塾の授業1回分以下です。` / `お子様の自走習慣を月単位で支援できます。`
- 箇条書き:
  - ✅ 学習履歴は LINE で保護者にも共有可能
  - ✅ 今後追加される教科分も同じ価格で使えます
  - ✅ カード未登録、いつでも停止可
- CTA（URI）: `保護者の方が登録する` → `/liff/premium-apply?parent=true`

---

### 3. Day 4 ドリップ（JST 19:00）
`trialDripDay4.ts`。`trialUsage.jikkuriOpened` で送るバブル数が変わる。

**バブル1（「じっくり学ぶ」未利用者のみ）** ヘッダー `📚 プレミアム体験 4日目`:
- `{nickname}体験4日目！『じっくり学ぶ』はもう試した？`
  + ベネフィット（`day3-feature`）: `暗記カードと四択クイズで、効率よく覚えられる学習体験。`
- CTA（URI）: `じっくり学ぶを開く` → `/liff/units`

**バブル2（全員に送る価格ロック pitch）** `buildPriceLockPitchFlex`（`lineWebhook.ts:2644`、`source="trial_drip_day4"`）:
- ヘッダー: `🔒 ずっと月¥680のまま！`
- intro: `{nickname}体験 4日目、ちょうど折り返しだよ。続けて使うなら今のうちに登録しておくとお得！`
- 強調ボックス: `✨ 体験中に登録すると…` / `ずっと月¥680のまま！` / `体験期間が終わった日から課金が始まるので、二重には引き落とされません。`
- 注意書き: `⚠ 体験終了後（1週間経過後）は通常価格の 月 ¥980 になります。`
- CTA: `今すぐ月¥680で登録`（→ premium-apply） / `詳細を見る`（→ premium-info）

> jikkuriOpened == true のユーザーは **バブル2のみ**。

---

### 4. Day 5 体験談（JST 19:00、価格訴求なし）
`trialDripDay5Story.ts` / ヘッダー `💬 先輩の体験談`。

- `{nickname}体験5日目！こんな使い方をしている先輩がいます。`
  `中2のAさんは、苦手復習機能で1週間に20問の苦手を克服。テスト本番では『これ、復習したやつ！』が3問出たそうです。`
- CTA（postback / secondary）: `苦手を復習する`（`action=weak_review`）

---

### 5. Day 6 継続projection（JST 19:00）
`trialDripDay6Projection.ts`（純粋ロジックは `trialProjection.ts`）/ ヘッダー `📈 このまま続けたら…`。

ここまでの解答ペース（`stats.totalAnswered ÷ 6日`）から、継続した場合の累計問題数を見積もって「凄さ」を実感させる。**`stats.totalAnswered` が 0 のユーザーには送らない**（projection を出せないため skip）。

- 本文:
  - `{nickname}体験6日目！ここまで {totalAnswered}問 解いたね👏`
  - `1日あたり約{pace}問のペース。この調子で続けると…`
  - projection 箇条書き（`buildDay6ProjectionBullets`、概数は 100以上で10の位丸め）:
    - **中1 / 中2（学年未設定含む）**: `📅 1か月で 約◯問` / `🗓 半年で 約◯問` / `🎯 1年で 約◯問`
    - **中3**: `📅 1か月で 約◯問` / `🎯 半年で 約◯問` ← 受験まで1年ないため**半年で打ち切り**
  - 締め: 中3 `受験本番まで、毎日の積み重ねが大きな差になるよ。` / 中1・中2 `続ければ続けるほど、テストや受験で大きな差になるよ。`
- CTA（URI）: `このまま続ける` → `/liff/premium-apply?src=trial_drip_day6`

> Day 6 は朝に `expireTrialUsers` の day6 リマインダーも走る（別 `lastTrialReminderAt` キー `day6` / `day6Projection` で cooldown 衝突を回避）。

---

### 6. Day 7 夕方リマインダー（JST 18:00）
`trialReminderEveningDay7.ts` / ヘッダー `⏰ あと約5時間で終了`。苦手数（`stats.weakCount`）を埋め込む。

- 損失回避（`getLossAversionText("day7-evening", {weakCount})`）:
  - weakCount>0: `体験は今夜23:59で終了します。{N}問の苦手リストは、無料に戻ると毎日1問ずつしか復習できなくなります。`
  - 0件: `体験は今夜23:59で終了します。『じっくり学ぶ』や暗記カードが使えるのも今夜までです。`
- 価格（`getPriceAnchorText("day7-evening", 680)`）: `今夜中の登録で月¥680ロック。明日からの新規登録は月¥980に戻ります。`
- CTA（URI）: `今夜中に月¥680で確定` → `/liff/premium-apply`

> Day 7 夜（22:00）リマインダーは廃止済み（§1 の備考参照）。

---

### 7. Trial 終了通知（Day 8 朝 / 平日7:00・土日8:00）
`expireTrialUsers.ts` → `buildTrialExpiredFlexMessage`（`lineWebhook.ts:3164`）。free 降格・richmenu 戻し後に送信。配信時刻は中学生への深夜配信回避のため 03:00 から **平日7:00 / 土日8:00** に変更済み。

- ヘッダー: `無料トライアルが終了しました`
- 本文:
  - `7日間無料トライアルをご利用いただきありがとうございました。`
  - `リッチメニューは無料版に戻りましたが、毎日1問は引き続きお届けします。`
  - `また始めたくなったら月¥980から続けられます。¥980 と ¥680 の差は年間¥3,600。3か月で問題集1冊分の差です。`
- CTA（URI）: `今ならまだ月¥980` → `/liff/premium-apply?src=post-trial-day8`

---

### 8. 体験後フォローアップ（Day 15 / Day 30 / JST 19:00）
`postTrialFollowup.ts`。対象は `planSource=="trial_expired"` かつ `status != "churned"`（churned は Win-back と競合するため除外）。価格は¥980。

**Day 15**:
- 見出し: `プレミアム体験から2週間。やっぱり試したくなったら、いつでもどうぞ。`
- ベネフィット（`day15-post`）: `気が変わったら、いつでも月¥980で再スタートできます。`
- 価格（`day15-post`）: `再開はいつでも月¥980から。あなたのペースで戻ってきてね。`
- CTA: `今ならまだ月¥980` → `/liff/premium-apply`

**Day 30**:
- 見出し: `プレミアム体験から1ヶ月。あなたのペースで、また始められます。`
- ベネフィット / 価格は Day 15 と同文（`day30-post`）
- CTA: `今ならまだ月¥980` → `/liff/premium-apply`

---

### (補) 申込フォーム途中離脱リマインダー（JST 19:00）
`trialFormAbandonReminder.ts`。`premiumApplicationStartedAt` 記録済みだが 24h 経っても `premiumApplications` に submit していない人へ 1 回だけ。`plan=="premium"` / `planSource=="trial"` は既申込として skip。

- 本文: `途中で止まってない？1分で完了するよ。プレミアム申込フォームをまた開けます。`
- CTA: 申込フォームを再度開く

---

### (補) Win-back（復帰トリガー / trial 経験者向け）
`sendWinbackMessages.ts` / `winbackVariations.ts`。status が at-risk / dormant / churned のユーザーへの Win-back のうち、**Day 7 タッチポイントで trial 経験者**には価格ロックを再オープン（`premiumCopy.ts` の `winback-day7-trial-experienced` / `winback-day7-trial-fresh`）:

- 経験者（`winback-day7-trial-experienced`）:
  - 価格: `戻ってきてくれてありがとう。特別に¥680価格ロックを再オープンします。`
  - ベネフィット: `今から3日以内に登録すれば、月¥680のままずっと使えます。`
  - CTA: `月¥680ロックで再開する`
- 未体験（`winback-day7-trial-fresh`）:
  - 価格: `まだ7日間無料の体験は使えるよ。今から始めれば月¥680で続けられる。`
  - ベネフィット: `暗記カード・四択クイズ・苦手復習が全部使える7日間。`
  - CTA: `7日間無料で始める`

---

## 3. 文言設計の鉄則（`premiumCopy.ts` 冒頭より）

テストで保証されている禁止事項:
- 「コーヒー」「カフェ」「ジュース」「お菓子」「マンガ」を比較対象に使わない（中学生のリアルに合わない）
- 「全教科」「全科目」表現を使わない（コンテンツは歴史科目のみ）
- 「通常¥1,280」など旧表記を使わない（新価格体系: 体験中¥680 / 体験後¥980）
- 「急げ」「損する」「今しか」など煽り表現禁止
- 学習関連の比較（ワークブック / 問題集 / 副教材）のみ使用
- 塾比較・授業料比較は `parentCopy.ts`（保護者向け）でのみ使用

---

## 4. 関連ドキュメント
- `.steering/2026-05/20260525-auto-trial-on-first-answer/` — 1問目自動 trial 開放の設計
- `.steering/2026-05/20260526-trial-richmenu/` — trial 専用リッチメニュー
- `docs/operations/trial-richmenu-image-prompt.md` — trial richmenu 画像生成プロンプト
- `docs/operations/line-onboarding-messages.md` — 友だち追加直後のオンボーディング文言
- `docs/operations/line-message-system.md` — メッセージシステム全体設計（送信枠・status・Win-back）
