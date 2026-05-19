# 公式LINE 登録～初回学習までに送られるメッセージ一覧

公式LINE「チャットでスタディ」に友だち追加してくれたユーザーへ送られる
メッセージを、発火タイミング順にまとめたもの。実装は
`functions/src/lineWebhook.ts` および `functions/src/remindIncompleteOnboarding.ts`、
`functions/src/messageVariations.ts` に存在する。

各セリフは原文どおりに記載しているが、`getInitialFirstQuestionIntro` など
ランダムプール式のものは「代表例」と「全バリエーション」の両方を載せている。

---

## ① 友だち追加直後（`follow` イベント）

`handleFollow`（lineWebhook.ts L710〜）が発火し、3メッセージを一括返信する。

### 1-1. ウェルカム＋導入テキスト（1メッセージに統合）

> はじめまして！公式LINEに登録してくれてありがとうございます😊
>
> 早速だけど、3つだけ質問させてください。すぐに終わります！
>
> まずは、学年を教えてね。
> （保護者の方は、お子様の学年を教えてください）

### 1-2. 学年選択 Flex（`buildGradeSelectMessage`）

- ヘッダー: `STEP 1/3 学年を選ぶ`
- 本文: `まずは学年を教えてね。`
- ボタン: `中1` / `中2` / `中3`
- altText: `学年を選んでください`

---

## ② 学年選択後（`select_grade` postback）

`handleSelectGradePostback`（L3226〜）。

### 2-1. 受領テキスト

> {grade}ですね！次は教科を選んでね。

例: 「中2ですね！次は教科を選んでね。」

### 2-2. 教科選択 Flex（`buildSubjectSelectMessage`）

- ヘッダー: `STEP 2/3 教科を選ぶ`
- 本文:
  > 勉強したい教科を選んでね。
  > ※今は「歴史」だけ配信中です。英語・数学・理科・地理は順次追加予定！
- ボタン: `歴史`（現状1択）

> ⚠️ すでに `preferredHour` が確定済みのユーザーが再度学年ボタンを押した場合は、
> 受領テキストの代わりに以下を返す:
> 「すでに{学年}で登録済みです。変更したい場合は『設定変更』と送ってください。」

---

## ③ 教科選択後（`select_subject` postback）

`handleSelectSubjectPostback`（L3308〜）。

### 3-1. 受領テキスト

> {subjectLabel}ですね！最後に、毎日問題を送る時間を選んでね。

例: 「歴史ですね！最後に、毎日問題を送る時間を選んでね。」

### 3-2. 配信時間選択 Flex（`buildTimeSelectMessage`）

- ヘッダー: `STEP 3/3 配信時間を選ぶ`
- 本文:
  > 毎日問題を送る時間を選んでね。学校がない時間で自由にどうぞ。あとから「設定変更」と送れば変えられます。
- ボタン（5択）: `朝6時` / `朝7時` / `夕方4時` / `夕方6時` / `夜8時`

> ℹ️ 過去に削減した8択（17時 / 19時 / 21時）を既に設定済みのユーザーは
> `dailyQuiz17 / 19 / 21` がそのまま配信を続ける。新規ユーザーへの選択肢のみ5択に絞った。

---

## ④ 配信時間選択後（`select_time` postback）

`handleSelectTimePostback`。**配信時間設定時はサマリー flex だけを返す**。1問目は
ユーザーが LIFF で `testScope` を初めて保存したタイミングで Firestore トリガから push する
（⑤を参照）。範囲未設定のまま離脱したら翌日の `dailyQuiz` が初回配信になる。

### 4-1. オンボーディング完了サマリー Flex（`buildOnboardingCompleteSummaryFlex`）

- ヘッダー（amber-500 背景）: `✅ 設定完了！`
- 本文:
  - 学年 / 教科 / 配信時間 のサマリー行
  - お礼テキスト:
    - ニックネーム未設定: 「登録ありがとう！設定できたよ🎉」
    - ニックネーム設定済: 「{nickname}、登録ありがとう！設定できたよ🎉」
  - 次の案内:
    > 次は「出題範囲」を設定しよう！もう習った単元だけにチェックを入れておくと、毎日の1問がその範囲から届くようになるよ。
- フッターボタン: `出題範囲を設定する`（`uri` アクション → `LIFF_TEST_RANGE_URL` を直接開く）
  - 補足: 「※あとからリッチメニューの「出題範囲設定」でもいつでも変更できます」

> ⚠️ 旧フローではここで 1問目を同梱 reply していたが、現在は時間設定 reply はこの flex のみ。
> 1問目の配信は ⑤ `onTestScopeFirstSet` トリガに移譲した。

---

## ⑤ LIFF で出題範囲を初めて保存したタイミング（`onTestScopeFirstSet` トリガ）

`functions/src/onTestScopeFirstSet.ts`。`users/{uid}` の onUpdate トリガ。

**発火条件**:

- `preferredHour` 設定済み（オンボ完了）
- `lastQuestionDeliveredAt` 未設定（一度も配信されてない＝完全な初回）
- `testScope.updatedAt` が before/after で異なる（=新規 set されたタイミング）

**動作**: `selectAndSendQuestion(uid, { isInitialSetup: true, introText, trailingText })` で
1問目を push 配信する。再度 testScope を保存しても `lastQuestionDeliveredAt` が立つため
再 push されない (idempotent)。

### 5-1. 1問目 イントロテキスト（`getInitialFirstQuestionIntro`）

**ニックネーム設定済（INITIAL_INTROS_WITH_NAME・5パターンからランダム）:**

- `{name}、それじゃさっそく今から1問やってみよう！`
- `{name}、登録ありがとう！早速1問目どうぞ！`
- `{name}、セット完了！今から1問やってみよう！`
- `OK {name}、設定できたよ！さっそく1問目！`
- `{name}、準備OK！今から1問やってみよう！`

**ニックネーム未設定（INITIAL_INTROS_NO_NAME・5パターンからランダム）:**

- `それじゃ、さっそく今から1問やってみよう！`
- `登録ありがとう！早速、1問目どうぞ！`
- `セット完了！今から1問やってみよう！`
- `OK、設定できたよ！さっそく1問目！`
- `準備OK！今から1問やってみよう！`

### 5-2. 1問目（4択クイズ Flex）

ユーザーの `grade` × `subject`（初回は `testScope` 無視）から `questions` collection
からランダムに1問選び、`buildQuestionMessage` で4択ボタンを生成。

### 5-3. 1問目 末尾テキスト（`getInitialFirstQuestionTrailing`）

**ニックネーム設定済（4パターンからランダム）:**

- `正解だと思うものをタップしてみよう！明日からは{hourLabel}に1問届くよ。{name}、これからよろしくね！`
- `正解だと思う選択肢をタップ！明日からは{hourLabel}に1問お届けします。{name}、これからよろしくね！`
- `{name}、正解だと思うものをタップ！明日からは毎日{hourLabel}に問題が届くよ。よろしくね！`
- `これだ！と思った選択肢をタップしてみよう！明日からは{hourLabel}に1問届きます。{name}、これからよろしくね！`

**ニックネーム未設定（4パターンからランダム）:**

- `正解だと思うものをタップしてみよう！明日からは{hourLabel}に1問届くよ。これからよろしくね！`
- `正解だと思う選択肢をタップ！明日からは{hourLabel}に1問お届け。これからよろしくね！`
- `正解だと思うものをタップ！明日からは毎日{hourLabel}に問題が届くよ。よろしくね！`
- `これだ！と思った選択肢をタップしてみよう！明日からは{hourLabel}に1問届きます。これからよろしくね！`

---

## ⑥ 1問目に回答した直後（`answer` postback）

`handleAnswer`。最大5メッセージを送る。

### 6-1. 正誤フィードバック（`getCorrectFeedback` / `getIncorrectFeedback`）

連続正解数・連続日数のマイルストーンによってプールを切替（messageVariations.ts L26〜212）。
初回は `correctStreak <= 1`・`dayStreak === 1` のはずなので `CORRECT_DEFAULT` 系（18パターン）または `INCORRECT_TEMPLATES`（15パターン）からランダム。代表例:

- 正解: 「正解！いいね！」「合ってるよ！いいね！」「正解！しっかり覚えられてる！」など
- 不正解: 「惜しい！正解は『{label}』だよ。」「答えは『{label}』。次に出たら思い出そう！」など

### 6-2. 解説テキスト

> 📖 解説
> {question.explanation}

### 6-3. 「明日も届く」案内 Flex（`buildPostAnswerNextStepFlexMessage`）

- 見出し: `📬 明日もまた届くよ`
- 本文: `明日の{hourLabel}に次の1問をお届けします。今日はおつかれさま！`
- バッジ: 連続日数 / 累計回答数（2列横並び）
- フッター/ボタン: なし（CTA なしの情報カード）

### 6-4. ニックネーム聞き取り Flex（`buildAskNicknameFlex`、初回回答かつニックネーム未設定のときだけ）

- ヘッダー（amber-500 背景）: `🙋 これからよろしくね！`
- 本文:
  > 1問目おつかれさま！
  >
  > 良かったらニックネームを教えてくれる？
  > メッセージで時々呼びかけるのに使うね。あとからでも変えられるので気軽にどうぞ😊
- フッターボタン: `ニックネームを入力する`（LIFF `/liff/nickname` を開く）
- 補足: 「※スキップしてもOK。あとから「設定・サポート」でも登録できます」

### 6-5. プレミアム無料お試し案内 Flex（`buildPremiumNudgeFlexMessage('first_answer')`、初回回答かつ無料×中1/中2 のときだけ）

- ヘッダー: `🎉 初めての1問、おつかれさま！`
- リード:
  > これからは毎日1問が無料で届くよ。連続記録や苦手範囲のチェックもぜんぶ無料。
  >
  > 「もっと解きたい」「暗記カードや四択クイズも使いたい」と思ったら、月680円・7日間無料でプレミアムを試せます（ワンタップ開始、カード登録なし、7日後に自動で無料に戻ります）。
- フッターボタン: `7日間無料で始める`（LIFF `/liff/premium-apply`）／ `詳細を見る`（LIFF `/liff/premium-info`）

> ℹ️ 中3 はプレミアム未対応のため出さない。premium 既加入者にも出さない。
> 過去には `buildPostAnswerNextStepFlexMessage` 内のリード＋ボタンとして埋め込んでいたが、
> 初日カードはシンプルに保つため独立 flex に切り出した。

---

## ⑦ ニックネームをメッセージで送ったとき（`awaiting_name` 状態）

`handleNicknameInput`。LIFF を使わずトークでテキスト入力したケース。

### 7-1. 受領テキスト

> {nickname}って呼ぶね！よろしく😊
> じゃあ、まずは学年を教えてね。

### 7-2. 学年選択 Flex

`buildGradeSelectMessage`（①-2 と同じ）。

> 空白だけ送られた場合は次のテキストのみ返す:
> 「空白だけだと呼び方が分からないので、もう一度送ってね🙏（ニックネームでもOK）」

---

## ⑧ オンボーディング離脱時のリマインド（24時間後・スケジュール push）

`remindIncompleteOnboarding.ts`。`onboardingState ∈ {started, awaiting_name}` で
`onboardingStartedAt` から24時間以上経過しているユーザーに、1回だけ push する
（その後 `onboardingState=reminded` に遷移し、再リマインドはしない）。

### 8-1. リマインドテキスト

次のフォーマットで送信。`{step本文}` は止まっているステップで差し替え。

> 登録ありがとうございました🙏
> 設定がまだ途中になっているみたいです。
> 30秒で終わるから、良かったらこのまま続きをやってみてね！
>
> {step本文}
>
> （name の場合）そのまま続きを送ってね。
> （それ以外）下のボタンから続きができます。

step本文は以下のいずれか:

| 止まっているステップ | テキスト |
|---|---|
| name（ニックネーム待ち） | `あとはお名前（ニックネーム）を送ってもらえれば、続きが始められます。` |
| grade（学年未選択） | `あとは学年を選ぶだけで、設定を再開できます。` |
| subject（教科未選択） | `あとは教科を選ぶだけで、設定完了まであと少しだよ。` |
| time（配信時間未選択） | `あとは配信時間を選ぶだけで、明日から毎日1問お届けします。` |

### 8-2. ステップ別 Flex

リマインドテキストに続けて、止まっている step に応じた選択 Flex を1つ同梱する
（name の場合は Flex なし）:

- grade: `buildGradeSelectMessage`（①-2 と同じ）
- subject: `buildSubjectSelectMessage`（②-2 と同じ）
- time: `buildTimeSelectMessage`（③-2 と同じ）

---

## ⑨ 翌日以降の「毎日1問」配信（`dailyQuiz0X`）

`functions/src/dailyQuiz.ts` が `preferredHour` に応じて 6/7/16/17/18/19/20/21 時に
push 配信する。intro テキストは `getDailyIntro`（messageVariations.ts L343）で
状態別プールから選ぶ。

| 状態 | 代表プール | 例 |
|---|---|---|
| 初配信（過去回答なし） | `FIRST_TIME_INTROS`（8件） | `はじめての1問だよ。気軽にいこう！` |
| 7日以上ブランク | `COMEBACK_LONG_INTROS`（13件） | `おかえり！戻ってきてくれてうれしい。今日の1問だよ！` |
| 3〜6日ブランク | `COMEBACK_SHORT_INTROS`（10件） | `ひさしぶり！1問だけ一緒にやろう！` |
| 連続14日以上 | `STREAK_LONG_INTROS`（10件） | `今日も来てくれてありがとう。1問どうぞ！` |
| 連続3〜13日 | `STREAK_SHORT_INTROS`（10件、{n}日埋込み） | `{n}日連続中！今日の1問だよ！` |
| その他 | `DEFAULT_INTROS`（14件） | `今日の1問だよ！` |

ニックネーム設定済の場合、約1/3の確率で intro 冒頭に「{name}、」が付く。

---

## メモ

- すべての Flex は `altText` を持つ。プッシュ通知ロック画面で表示される文言なので、
  本ファイルでも明示している。
- 「設定変更」と送ると `handleSettingsChange`（L627）で `preferredHour` を消し、
  再度学年→教科→時間の3ステップを案内する（1日1回のみ）。
- すでに `preferredHour` が確定したユーザーが古い grade/subject/time ボタンを再タップ
  すると、`すでに{値}で登録済みです。変更したい場合は『設定変更』と送ってください。`
  というガードテキストが返る。
- 公式LINE登録 → 初回設定完了までの遷移は Firestore `users/{uid}.onboardingState` で管理:
  `started → (awaiting_name) → reminded` または `started → complete`。
