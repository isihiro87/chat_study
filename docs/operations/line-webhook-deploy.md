# LINE Messaging API Webhook 運用手順

公式LINE（Messaging API）の Webhook を Firebase Cloud Functions の `lineWebhook` で受けるための **環境構築 / デプロイ / 動作確認 / トラブルシュート** をまとめた永続ドキュメント。LINE 連携を再設定するときも、まずこのドキュメントを参照する。

| 項目 | 値 |
|------|----|
| Function 名 | `lineWebhook` |
| ソース | `functions/src/lineWebhook.ts` |
| リージョン | `asia-northeast1` |
| Webhook URL（直接） | `https://asia-northeast1-chatstudy-63477.cloudfunctions.net/lineWebhook` |
| 利用チャネル | LINE Developers の **Messaging API チャネル**（LINE Login チャネルとは別物） |
| 共有データ | Firestore `users/{uid}`（`uid = line:{lineUserId}`、LINE Login と共通） |
| 環境変数方式 | `functions/.env` 方式（既存 `createLineCustomToken` と統一）。Secret Manager は将来オプション |

> 所要時間の目安: 初回セットアップ **15〜20分**（CLIインストール・LINE Developers操作・実機テスト含む）

---

## 0. 前提条件（最初の1回だけ）

### 必要なツール

| ツール | バージョン | 必須 / 任意 |
|--------|-----------|-------------|
| Node.js | v22 系（Functionsランタイム）。ローカルは v24 でも可 | 必須 |
| npm | v10+ | 必須 |
| Firebase CLI | 最新 | 必須 |
| Google Cloud CLI (`gcloud`) | 最新 | Secret Manager 移行時のみ必要（`.env` 方式では不要） |

### CLI インストールとログイン

```bash
# Firebase CLI（未インストールなら）
npm install -g firebase-tools
firebase --version

# Firebase ログイン（ブラウザが開く）
firebase login

# プロジェクト確認（chatstudy-63477 になっていればOK）
firebase use
# 違っていれば:
firebase use chatstudy-63477
```

> ⚠️ devcontainer 環境では Firebase CLI が未インストールの場合がある。`firebase login` はブラウザ認証が必要なのでホスト側のブラウザで完了させる。

---

## 1. LINE Developers で Channel secret / Access token を取得

1. https://developers.line.biz/console/ にログイン
2. プロバイダー（チャットでスタディ用のもの）を選択
3. **Messaging API チャネル** を開く
   - ※「LINE Login チャネル」とは別物。アイコンが緑の吹き出しのほう
   - 同プロバイダー内に無ければ「新規チャネル作成」→「**Messaging API**」で作成
4. **Channel secret を取得**
   - 「Basic settings」タブ
   - 「Channel secret」の行 → 文字列をコピー（32文字程度）
5. **Channel access token を取得**
   - 「Messaging API」タブ
   - 「Channel access token」セクション → 「**Issue**」ボタンで長期トークンを発行
   - 表示された文字列をコピー（200文字以上の長い文字列）
   - ※既に発行済みなら表示されているそれを使う

> ⚠️ どちらの値も **誰にも見せない**。Slack や Issue に貼らない。漏洩したら同じ画面の「Reissue」で即時無効化できる。

---

## 2. Firebase Functions の環境変数設定

### 必要な環境変数

| キー | 役割 | 取得元 |
|------|------|--------|
| `LINE_MESSAGING_CHANNEL_SECRET` | Webhook 署名検証 | LINE Developers > Messaging API チャネル > Basic settings > Channel secret |
| `LINE_MESSAGING_CHANNEL_ACCESS_TOKEN` | reply / push 用 | LINE Developers > Messaging API チャネル > Messaging API > Channel access token（長期トークン） |

> ⚠️ 既存の **LINE Login** 用 `LINE_LOGIN_CHANNEL_ID` / `LINE_LOGIN_CHANNEL_SECRET` を **絶対に削除しない**。Messaging API は別チャネルなので命名空間を `LINE_MESSAGING_*` で分離している。

### `.env` 方式（推奨・既存 `createLineCustomToken` と統一）

`functions/.env` に値をセット（Git管理外）:

```env
LINE_LOGIN_CHANNEL_ID=2009587166
LINE_LOGIN_CHANNEL_SECRET=...   # 既存。触らない

LINE_MESSAGING_CHANNEL_SECRET=<ステップ1の Channel secret>
LINE_MESSAGING_CHANNEL_ACCESS_TOKEN=<ステップ1の Channel access token>
```

`.env` に値があれば、`firebase deploy` 時に Functions のランタイム環境変数として一緒にアップロードされる。コード側は `process.env.LINE_MESSAGING_*` で読むだけで動く（`lineWebhook.ts` 実装済み）。

> ✅ `functions/.env` はルート `.gitignore` の `.env` ルールでカバー済み。`git ls-files` で未追跡確認済み。
> ✅ ローカルマシンには平文で残るため、共有マシンでは扱いに注意。

### Secret Manager 方式（将来オプション）

本番運用でローカル平文を避けたい場合は Firebase Secret Manager に移行可能。ただし **コード側に `runWith({ secrets: [...] })` バインドを追加するコード変更が必要**。

```bash
# 値の登録（プロンプトに入力）
firebase functions:secrets:set LINE_MESSAGING_CHANNEL_SECRET
firebase functions:secrets:set LINE_MESSAGING_CHANNEL_ACCESS_TOKEN

# 確認
firebase functions:secrets:access LINE_MESSAGING_CHANNEL_SECRET
```

その上で `lineWebhook.ts` を以下のように変更（マイルストーン1時点では未実施）:

```ts
export const lineWebhook = functions
  .region("asia-northeast1")
  .runWith({
    secrets: ["LINE_MESSAGING_CHANNEL_SECRET", "LINE_MESSAGING_CHANNEL_ACCESS_TOKEN"],
  })
  .https.onRequest(async (req, res) => { ... });
```

漏洩時は `firebase functions:secrets:set` で上書きすれば即時切り替わる。

---

## 3. ビルド

```bash
cd /workspaces/marutto-study/functions
npm run build
```

`> tsc` だけ表示されてプロンプトに戻れば成功。

---

## 4. デプロイ

```bash
cd /workspaces/marutto-study
FUNCTIONS_DISCOVERY_TIMEOUT=600 firebase deploy --only functions
```

初回は **5〜10分** かかる。途中で IAM / Cloud Run / Cloud Build APIs の有効化を求められたら **Y** で進める。

> ⚠️ **`FUNCTIONS_DISCOVERY_TIMEOUT=600` を必ず付ける**。
> Firebase CLI のデフォルト discovery タイムアウトは 10秒で、`@line/bot-sdk` や `firebase-functions/v1` を含む Functions 全体のロードに依存するため、デフォルトでは
> `Error: User code failed to load. Cannot determine backend specification. Timeout after 10000.`
> でデプロイが失敗する。2026-05-19 時点では `FUNCTIONS_DISCOVERY_TIMEOUT=120` でも
> `Timeout after 120000.` で失敗するケースを確認済み。`functions/lib/index.js` の単純ロードだけで約66秒かかり、Firebase CLI 側の解析時間も乗るため **600 を標準** とする。
> [Firebase 公式ドキュメント参照](https://firebase.google.com/docs/functions/tips#avoid_deployment_timeouts_during_initialization)。

### Functions discovery timeout 対応

`Cannot determine backend specification. Timeout after ...` が出たら、Functions の discovery が `functions/lib/index.js` をロードしきれていない。まず timeout を 600 秒に上げて全関数デプロイする。

```bash
FUNCTIONS_DISCOVERY_TIMEOUT=600 firebase deploy --only functions
```

それでも失敗する場合は、ローカルで以下を確認する。

```bash
cd /workspaces/marutto-study/functions
npm run build
timeout 150s node -e "const t=Date.now(); require('./lib/index.js'); console.log('index loaded '+(Date.now()-t)+'ms')"
timeout 30s node -e "const t=Date.now(); require('firebase-functions/v1'); console.log('ff v1 loaded '+(Date.now()-t)+'ms')"
timeout 30s node -e "const t=Date.now(); require('firebase-admin/auth'); console.log('admin auth loaded '+(Date.now()-t)+'ms')"
```

2026-05-19 の切り分けでは、`require('./lib/index.js')` が約66秒、`require('firebase-functions/v1')` と `require('firebase-admin/auth')` は単体でも非常に重いことを確認した。典型的な `listen()`、トップレベル `await`、外部 API 呼び出しではなく、Functions SDK / Admin SDK のトップレベルロードが主因。

恒久対策の候補:

- `firebase-functions/v1` の一括 import を減らし、v2 の個別 import (`firebase-functions/v2/https`, `firebase-functions/v2/scheduler` など) に寄せる
- Functions を用途別 codebase に分割して discovery 対象を小さくする
- トップレベルでは Firestore/Auth/LINE/Stripe などの重い SDK を初期化しない

> ⚠️ **`--only functions:lineWebhook` 単体デプロイの落とし穴**:
> Firebase Cloud Functions は **関数単位でデプロイ** されるため、`lineWebhook.ts` のコードを変更して `--only functions:lineWebhook` だけ更新しても、`dailyQuiz.ts` から `import { selectAndSendQuestion } from "./lineWebhook"` で参照している `dailyQuiz06/07/17/19` 関数は **前回デプロイ時のコードのまま** 動き続ける（各関数が別々の bundle）。
>
> 同様に、`lineWebhook.ts` から re-export している `buildTrialStartedFlexMessage` / `buildTrialReminderFlexMessage` / `buildTrialExpiredFlexMessage` / `getLineClient` / `getUserPlan` を `onPremiumApplicationCreated` / `expireTrialUsers` が参照しているため、これらの共有関数を変更したら関連 Function も再デプロイが必要。
>
> **`selectAndSendQuestion` / `buildQuestionMessage` / `buildTrial*FlexMessage` などの共有関数を変更したら、必ず `--only functions`（全関数）で再デプロイすること**。lineWebhook 単体デプロイで完結するのは、`handleSelectGradePostback` や `handleAnswerPostback` のように lineWebhook 側のみで完結する変更の場合のみ。

### 新規 Function を追加した時のチェックリスト

- `functions/src/index.ts` に `export` 行を追加
- 初回デプロイ時は `firebase deploy --only functions:<新関数名>` で個別にデプロイ
- pubsub.schedule 系の Function は初回デプロイ時に Cloud Scheduler ジョブが自動生成される（GCP Console > Cloud Scheduler で確認）
  - 例: `expireTrialUsers` → `firebase-schedule-expireTrialUsers-asia-northeast1` というジョブが作成される
  - 初回デプロイ後、Cloud Console から手動実行（"今すぐ実行"）して動作確認するのが安全

成功すると最後に以下のような出力が出る:

```
✔ functions[lineWebhook(asia-northeast1)] Successful create operation.
✔ functions[createLineCustomToken(asia-northeast1)] Successful update operation.
Function URL (lineWebhook(asia-northeast1)): https://asia-northeast1-chatstudy-63477.cloudfunctions.net/lineWebhook
```

> ❗ Node エンジンの警告（`EBADENGINE`）が出ても、デプロイ環境は Node 22 で動くため **無視して大丈夫**（ローカルだけ Node 24 のため）。

### デプロイ後のヘルスチェック（GET）

ブラウザで開く、または curl:

```bash
curl -i https://asia-northeast1-chatstudy-63477.cloudfunctions.net/lineWebhook
```

期待値:

```
HTTP/2 200
Content-Type: application/json

{"message":"LINE webhook endpoint is working."}
```

---

## 5. LINE Developers 側の Webhook URL 設定

ステップ1で開いた **Messaging API チャネル** に戻る:

1. 「Messaging API」タブを開く
2. **「Webhook settings」** セクションを探す
3. **Webhook URL** に下記を貼り付け → 「**Update**」を押す
   ```
   https://asia-northeast1-chatstudy-63477.cloudfunctions.net/lineWebhook
   ```
4. **「Use webhook」** のトグルを **オン** にする
5. すぐ右にある **「Verify」** ボタンを押す
   - **Success** と出れば、署名検証まで含めて疎通成功 🎉
   - **Failed** の場合は §10 トラブルシュートへ

---

## 6. LINE 自動応答との競合を切る（重要）

同じ「Messaging API」タブを下にスクロール:

| 項目 | 設定値 |
|------|-------|
| Auto-reply messages（応答メッセージ） | **Disabled** |
| Greeting messages（あいさつメッセージ） | **Disabled** |
| Webhook | **Enabled**（ステップ5で設定済） |

それぞれ「Edit」リンクから LINE Official Account Manager に飛んで切り替える。

> 💡 **これをやらないと、コード側の学年選択ボタンと、LINE 既定のあいさつ文が二重に届く。** 旧管理画面（LINE Official Account Manager）の「応答モード」「あいさつメッセージ」も同様に確認すること。

---

## 7. 実機テスト

ステップ1の Messaging API チャネルの「Bot info」または「Messaging API」タブに **QRコード** がある:

1. スマホの LINE で QR コードを読み取り → **「友だち追加」** をタップ
2. 数秒以内に「学年選択」というタイトルのボタンメッセージが届く
3. **「中2」** を押す
4. 「**中2ですね！次に教科を選んでください。**」というテキストが届く

> 💡 既に追加済みの場合、**ブロック解除や再オープンでは `follow` イベントは再送されない**（端末・OS依存）。
> いったん **公式アカウントを削除（ブロック→ホーム画面の「友だち」一覧から削除）→ 再度 QR 追加** で `follow` を発火させる。

---

## 8. Firestore Console での確認

1. https://console.firebase.google.com/project/chatstudy-63477/firestore を開く
2. **users** コレクションを開く
3. 自分の `line:U....`（U で始まる長い ID）のドキュメントを開く
4. 以下が書き込まれていれば成功:

| フィールド | 値 |
|----------|-----|
| `provider` | `"line"` |
| `lineUserId` | `U...`（自分のLINE userId） |
| `status` | `"active"` |
| `source` | `"messaging-webhook"` |
| `grade` | `"中1"` / `"中2"` / `"中3"` |
| `subject` | `"history"` / `"english"`（M2 以降） |
| `preferredHour` | `6` / `7` / `17` / `19`（M3 以降） |
| `recentQuestionIds` | 直近10件の questionId の配列（M3 以降） |
| `lastAnsweredQuestionId` | 直近回答済み問題の ID（M5 以降。重複回答防止） |
| `lastQuestionDeliveredAt` | 直近送信時刻 Timestamp（M5 以降。1日1問制限の判定キー） |
| `lastSettingsChangeAt` | 直近の「設定変更」実行時刻 Timestamp（M5 以降。設定変更を1日1回に制限） |
| `updatedAt` | 直近の Timestamp |

`questions` コレクションも併せて確認:

| パス | 内容 |
|------|------|
| `questions/{questionId}` | サンプル問題18件（M3 で seed 投入） |
| 例: `questions/q-history-g1-001` | 中1歴史の問題、`subject: "history", grade: "中1", text, choices[4], correctChoiceId, explanation` |

`answers` コレクション（M4 以降）:

| パス | 内容 |
|------|------|
| `answers/{auto-id}` | ユーザーがボタン押下するたびに追加される回答履歴 |
| フィールド | `uid`, `questionId`, `choice` (0-3), `isCorrect`, `subject`, `grade`, `answeredAt` |
| 重複回答 | 同じ `uid + questionId` で複数 answers が記録される（ユニーク制約なし） |

> 同じ `users/{uid}` を LINE Login（`createLineCustomToken`）も使うため、ドキュメントが既にある場合は **マージ** されて `displayName` / `photoURL` などは保持される。

---

## 9. 既存 LINE Login が壊れていないことの確認（任意）

念のため、Web の `/login` から LINE ログインも動くか確認:

1. https://www.chatstudy.jp/login を開く
2. 「LINEでログイン」を押す
3. 通常通り認証されてサイトに戻れる
4. Firebase Console > Firestore の同じ `users/line:U...` ドキュメントが、`displayName` / `photoURL` / `lastActiveAt` などはそのままで、`grade` も保持されていることを確認

---

## 10. よくあるエラーと確認ポイント

### ログの見方

```bash
# 直近のログ
firebase functions:log --only lineWebhook --lines 100

# ストリーム（リアルタイム）
firebase functions:log --only lineWebhook --follow
```

| プレフィクス | 意味 |
|------------|------|
| `[lineWebhook] missing x-line-signature header` | LINE 以外からのアクセス、または LINE 側の障害 |
| `[lineWebhook] invalid signature` | Channel secret が誤り or rawBody 改変 |
| `[lineWebhook] event.source is not a user` | グループ参加など `source.type !== "user"`。本実装では握り潰す |
| `[lineWebhook] unhandled event type:` | `unfollow`, `message`（テキスト送信時）など。マイルストーン1ではログのみ |
| `[lineWebhook] unhandled postback type:` | マイルストーン2以降の type が誤って届いた、もしくはユーザーが古いボタンを押した |
| `[lineWebhook] handle* firestore write failed` | Firestore 書き込みエラー。Admin 権限・ルール・ネットワークを確認 |
| `[lineWebhook] handle* reply failed` | LINE API エラー。replyToken 期限切れ、access_token 失効、本文不正など |

> プライバシー保護のため、メッセージ本文や個人情報の詳細はログ出力しない方針（lineUserId は出る）。

### ❌ デプロイ時に `Cannot determine backend specification. Timeout after 10000`

Firebase CLI の discovery プロセスがデフォルト 10秒で打ち切られる。`@line/bot-sdk` を依存に含むこのコードベースでは安定して 10秒を超える。

対処:
```bash
FUNCTIONS_DISCOVERY_TIMEOUT=60 firebase deploy --only functions:lineWebhook,functions:createLineCustomToken
```

`60`（秒）で十分。これでも失敗する場合は `120` などに延長。なお、コード側でも `@line/bot-sdk` は **トップレベル import せず動的 import**（`await import("@line/bot-sdk")`）にしてあり、これと組み合わせて discovery 負荷を最小化している。

### ❌ ステップ5の「Verify」が Failed

| ログ | 原因 | 対処 |
|------|------|------|
| `LINE_MESSAGING_CHANNEL_SECRET is not set` | `.env` の値が空 / デプロイ前 | ステップ2→3→4をやり直す |
| `invalid signature` | Channel secret 値が違う | ステップ1の取得元が **Messaging API チャネル** か再確認（LINE Loginチャネルと取り違えやすい） |
| ログに何も出ない | Webhook URL の typo | ステップ5のURLをコピペし直す |
| 401 Unauthorized でログ自体が出ない | Cloud Run 側の invoker 権限 | Firebase 通常デプロイなら自動付与。手動変更してしまった場合は `allUsers` に invoker 権限を再付与 |

### ❌ 401 Invalid signature（Verify 以外でも）

| 原因 | 確認ポイント |
|------|-------------|
| `LINE_MESSAGING_CHANNEL_SECRET` 未設定 / 値違い | `.env` の値、LINE Developers の Channel secret と一致しているか |
| Channel secret が **LINE Login** のものと混同 | Messaging API チャネルの Basic settings から取得しているか |
| ヘッダー名が違う | LINE Platform からは `x-line-signature` で来る（小文字）。コードは `req.get("x-line-signature")` で取得 |
| `req.body` を再シリアライズしている | 本実装は `req.rawBody` を使用。署名検証は **改変前の生バイト** でないと必ず失敗 |

### ❌ 500 Server misconfigured

- `LINE_MESSAGING_CHANNEL_SECRET` が空。`.env` 値の登録漏れ or Function に bind されていない
- `firebase functions:log --only lineWebhook` でエラーログを確認

### ❌ 友だち追加してもボタンが届かない

- ステップ6（応答メッセージ・あいさつメッセージのオフ）をやり直す
- LINE Developers > Messaging API タブの **Auto-reply messages**, **Greeting messages** を全部 Disabled に
- `firebase functions:log` で `event received: follow` のログが出ているかを確認
  - 出ていない → LINE 側設定が原因
  - 出ているが reply 失敗 → Channel access token を確認（Reissue して `.env` 更新→再デプロイ）
- ブロック解除や再オープンでは `follow` 再送されない。**公式アカウントを削除 → 再 QR 追加** で発火させる

### ❌ ボタンを押しても何も返ってこない

- `firebase functions:log` で `unhandled postback type:` などが出ていないか確認
- Channel access token を **Reissue** して `.env` に入れ直し、再デプロイ
- replyToken の有効期限切れ（数十秒〜1分）。Firestore I/O で時間がかかりすぎていないかログで確認

### ❌ replyMessage が「Invalid reply token」

- replyToken の有効期限切れ。1つのreplyTokenで複数回 reply を呼ぶと2回目以降エラー（実装上1回しか使っていないことを確認）

### ❌ 既存 LINE Login（Webからの `/login`）が動かなくなった

- `LINE_LOGIN_CHANNEL_ID` / `LINE_LOGIN_CHANNEL_SECRET` の `.env` 値が消えていないか
- `firebase deploy` で `createLineCustomToken` が誤ってアンデプロイされていないか:
  ```bash
  firebase functions:list
  ```
- `createLineCustomToken` のソース（`functions/src/index.ts`）に意図しない変更が入っていないか:
  ```bash
  git diff functions/src/index.ts
  ```

### ❌ デプロイで `Permission denied` 系エラー

```bash
firebase login --reauth
```

`gcloud` を使った権限確認が必要な場合のみ:

```bash
gcloud config set project chatstudy-63477
gcloud auth list
```

---

## 9.5. 問題データの seed（M3 以降）

`questions` コレクションへサンプル問題を投入する。LINE Webhook 経由・定期配信ともにこのコレクションを参照するため、M3 以降は **デプロイ後に必ず1回 seed を実行** すること（再実行も可、merge: true で安全）。

### 前提セットアップ（最初の1回だけ）

```bash
# gcloud CLI のインストール（apt 経由）
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates gnupg curl
curl -fsSL https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg
echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee /etc/apt/sources.list.d/google-cloud-sdk.list
sudo apt-get update && sudo apt-get install -y google-cloud-cli

# Application Default Credentials のログイン（ブラウザ認証）
gcloud auth application-default login
gcloud auth application-default set-quota-project chatstudy-63477
gcloud config set project chatstudy-63477
```

> ⚠️ devcontainer の Python は `python3` のみで `python` symlink がないため、公式の `curl https://sdk.cloud.google.com | bash` 形式は失敗する。**apt 経由が確実**。

### seed スクリプト実行

```bash
cd /workspaces/marutto-study
npx tsx scripts/seed-line-questions.ts
```

期待出力:
```
Seeding 18 questions to chatstudy-63477...
Seeded 18 questions:
  - q-history-g1-001
  ...
  - q-english-g3-003
```

問題内容を変更したい場合は `scripts/seed-line-questions.ts` 内の `QUESTIONS` 配列を編集してから再実行する（merge: true なので既存ドキュメントは安全に上書きされる）。

## 9.6. Cloud Scheduler の確認方法（M3 以降）

### GCP Console から手動実行（テスト用）

1. https://console.cloud.google.com/cloudscheduler?project=chatstudy-63477 を開く
2. リージョンが **`us-central1`** になっていることに注意（Firebase Functions v1 の制約、後述）
3. `firebase-schedule-dailyQuiz07-asia-northeast1`（など）を選択
4. 右側の縦三点メニュー（︙）から「**強制実行**」をクリック
5. ログを確認:
   ```bash
   firebase functions:log --only dailyQuiz07 --lines 30
   ```
6. 期待ログ: `[dailyQuiz07] start` → `[dailyQuiz07] done users=N success=N failed=0 elapsed=...`

### gcloud CLI から手動実行

```bash
gcloud scheduler jobs run firebase-schedule-dailyQuiz07-asia-northeast1 --location=us-central1
```

### Cloud Scheduler のリージョンについて（重要）

**Cloud Scheduler ジョブは `us-central1` に作成される**が、これは Firebase Functions v1 の `pubsub.schedule()` の既知の挙動。実害はない:

```
Cloud Scheduler (us-central1, JST 7:00 で起動)
  ↓ Pub/Sub publish (グローバル)
Cloud Functions (asia-northeast1, runDailyQuiz 実行)
  ↓
LINE 配信
```

- **タイムゾーン**: Scheduler 側で `Asia/Tokyo` 指定済 → JST 時刻通りに起動
- **レイテンシ**: Pub/Sub 経由で 100〜200ms 増程度。配信時刻には影響なし
- **コスト**: 無料枠（3ジョブ無料）+ $0.10/job/month の微少な追加

修正手段:
- App Engine ロケーション変更 → **不可**（一度設定すると変更不可、Google 仕様）
- Cloud Functions v2 に移行 → 可能だが Functions コードのリファクタが必要。本格運用フェーズで検討
- 現状そのまま運用が **推奨**

---

## 11. 設定値の全体マップ（重要）

「どの値がどこで管理されているか」「コードに書く値か / 管理画面で設定する値か」を整理。**別アカウント運用時に最初に見るべき表**。

### A. ファイルで管理する値

| ファイル | キー | 値の役割 | 入手元 |
|---------|------|---------|-------|
| `functions/.env` | `LINE_LOGIN_CHANNEL_ID` | LINE Login（Web `/login`）の Channel ID | LINE Developers > **LINE Login チャネル** > Basic settings |
| `functions/.env` | `LINE_LOGIN_CHANNEL_SECRET` | LINE Login の Channel secret（OAuthトークン交換に使用） | 同上 |
| `functions/.env` | `LINE_MESSAGING_CHANNEL_SECRET` | **Webhook の署名検証** に使用 | LINE Developers > **Messaging API チャネル** > Basic settings |
| `functions/.env` | `LINE_MESSAGING_CHANNEL_ACCESS_TOKEN` | reply / push API 呼び出しの認証 | LINE Developers > **Messaging API チャネル** > Messaging API タブ > Channel access token |
| `/.env`（フロント用） | `VITE_FIREBASE_*` | Firebase Web SDK 初期化（公開して問題なし） | Firebase Console > プロジェクト設定 > Web アプリ |
| `/.env`（フロント用） | `VITE_LINE_LOGIN_CHANNEL_ID` | フロントから LINE Login へリダイレクトする際の Channel ID（公開可、secretは含まない） | LINE Developers > **LINE Login チャネル** |
| `/.env`（フロント用） | `VITE_LINE_AUTH_FN_URL` | `createLineCustomToken` Function の URL | デプロイ後の Functions URL |
| `.firebaserc` | `projects.default` | Firebase プロジェクト ID（git管理対象） | Firebase Console > プロジェクト ID |

> ⚠️ `functions/.env` は **絶対にコミット禁止**（`.gitignore` でカバー済）。secret 値が入っているため。
> ✅ `/.env` の `VITE_*` はビルド時にフロントバンドルに埋め込まれて公開されるが、API キー類は Firebase Auth ドメイン制限で守られているため公開して問題ない。

### B. 管理画面（Web UI）で設定する値（**コードに書かない**）

| 設定項目 | 設定する場所 | 値 |
|---------|------------|-----|
| **Webhook URL** | LINE Developers Console > Messaging API チャネル > **Messaging API** タブ > Webhook settings | `https://asia-northeast1-chatstudy-63477.cloudfunctions.net/lineWebhook` |
| **Use webhook トグル** | 同上 | ON |
| **Auto-reply messages** | LINE Official Account Manager（または Developers Console から Edit リンク） | Disabled |
| **Greeting messages** | LINE Official Account Manager | Disabled |
| **LINE Login コールバックURL** | LINE Developers Console > LINE Login チャネル > LINE Login設定 | `https://www.chatstudy.jp/auth/line/callback` |
| **Firebase Auth: LINE Login プロバイダ** | （未使用 / カスタムトークン方式のため不要） | — |

> ⚠️ **Webhook URL はコードでもファイルでもなく、LINE Developers Console の Web 画面で手動設定する**。これは LINE 側の仕様なので変更不可。

### C. `firebase functions:secrets:set` で管理する値（オプション）

現在は使用していない（`.env` 方式）。本番運用で `.env` 平文を避けたい場合のみ移行を検討。移行時はコード側に `runWith({ secrets: [...] })` の追加が必要。

### D. デプロイ実行時に使うフラグ

| フラグ | 値 | 役割 |
|-------|----|------|
| `FUNCTIONS_DISCOVERY_TIMEOUT` | `60`（秒） | Firebase CLI の関数 discovery タイムアウト延長。`@line/bot-sdk` 等を含むコードベースで必須 |

### E. M3 以降で追加された Firestore コレクション・Function

| 種別 | 名前 | 役割 | 管理方法 |
|------|------|------|---------|
| Firestore | `questions/{questionId}` | 一問一答用の問題マスタ | `scripts/seed-line-questions.ts` で手動 seed |
| Firestore | `answers/{auto-id}` | 回答履歴（M4 以降）。Webhook が自動で書き込み | 手動操作なし。`uid + questionId` で重複可 |
| Function | `dailyQuiz06` / `dailyQuiz07` / `dailyQuiz17` / `dailyQuiz19` | JST 6/7/17/19 時に問題を push 配信 | `firebase deploy --only functions` で自動作成 |
| Cloud Scheduler ジョブ | `firebase-schedule-dailyQuizXX-asia-northeast1` | 上記 Function を起動するクロン | Firebase deploy 時に自動作成（App Engine デフォルトロケーション=`us-central1` に作成、動作には影響なし） |
| Pub/Sub topic | `firebase-schedule-dailyQuizXX-asia-northeast1` | Cloud Scheduler → Function 間のメッセージング | 自動作成 |

---

## 12. これまでの実装サマリ（チャネルマップ）

```
┌─────────────────────────────────────────────────────────────┐
│  LINE プラットフォーム                                       │
│  ┌──────────────────────┐  ┌────────────────────────────┐  │
│  │ LINE Login チャネル   │  │ Messaging API チャネル      │  │
│  │ (Channel ID:         │  │ (公式LINEアカウント)        │  │
│  │  2009587166)         │  │                             │  │
│  └──────┬───────────────┘  └─────────────┬──────────────┘  │
│         │ OAuth code                     │ Webhook event    │
└─────────┼─────────────────────────────────┼─────────────────┘
          │                                 │
          ▼                                 ▼
┌──────────────────────┐         ┌──────────────────────────┐
│ createLineCustomToken│         │ lineWebhook              │
│ (asia-northeast1)    │         │ (asia-northeast1)        │
│ functions/src/       │         │ functions/src/           │
│   index.ts           │         │   lineWebhook.ts         │
│                      │         │                          │
│ 役割:                │         │ 役割:                    │
│ - OAuth code を交換  │         │ - 署名検証               │
│ - Firebase Auth      │         │ - follow → 学年ボタン     │
│   カスタムトークン   │         │ - postback → grade保存    │
│   発行               │         │                          │
└──────────┬───────────┘         └──────────┬───────────────┘
           │                                │
           └────────────┬───────────────────┘
                        ▼
              ┌────────────────────────┐
              │ Firestore              │
              │ users/line:{userId}    │
              │   - provider: "line"   │
              │   - displayName        │ ← LINE Login 由来
              │   - photoURL           │ ← LINE Login 由来
              │   - lineUserId         │
              │   - grade              │ ← Messaging Webhook 由来
              │   - source             │
              │   - status             │
              │   - updatedAt          │
              └────────────────────────┘
```

**ポイント**: 2つのチャネルは別物だが、**ユーザーは同じ LINE アカウントを使う**ので、`uid = line:{lineUserId}` の同一ドキュメントに両方の情報がマージされる。

---

## 13. 別アカウント・別環境で運用するときのチェックリスト

新しい Firebase プロジェクト・新しい LINE Developers アカウントで同じ仕組みを立ち上げる場合の **差し替え対象一覧**。

### Step 1: Firebase プロジェクトを新規作成

- [ ] [Firebase Console](https://console.firebase.google.com/) で新規プロジェクト作成
- [ ] Firestore を有効化（Native モード推奨）
- [ ] Authentication を有効化（必要なら）
- [ ] **Blaze プラン（従量制）に切り替え**（Cloud Functions のデプロイには Blaze 必須）

### Step 2: ローカル設定を新プロジェクトに切り替え

| ファイル | 変更内容 |
|---------|---------|
| `.firebaserc` | `projects.default` を新プロジェクト ID に |
| `firebase.json` | 変更不要（runtime: nodejs22 のまま） |
| `firestore.rules` | 既存ルールをそのままコピー。**管理者メールアドレス** (`ishimotty.gst@gmail.com`) を新運用者のものに差し替え |

```bash
firebase use --add  # 新プロジェクトを追加・選択
```

### Step 3: LINE Developers の準備

#### 3-1. LINE Login チャネル（Web ログインを使う場合のみ）
- [ ] プロバイダーを作成（既存可）
- [ ] LINE Login チャネルを新規作成
- [ ] **Channel ID** をメモ
- [ ] **Channel secret** をメモ
- [ ] **Callback URL** に `https://<新ドメイン>/auth/line/callback` を登録

#### 3-2. Messaging API チャネル（公式LINE）
- [ ] 同プロバイダー内で Messaging API チャネルを新規作成（または既存 LINE 公式アカウントを紐付け）
- [ ] **Channel secret** をメモ
- [ ] 「Messaging API」タブで **Channel access token** を Issue してメモ
- [ ] LINE Official Account Manager で
  - [ ] Auto-reply messages: **Disabled**
  - [ ] Greeting messages: **Disabled**

### Step 4: 環境変数の差し替え

| ファイル | キー | 差し替え内容 |
|---------|------|------------|
| `functions/.env` | `LINE_LOGIN_CHANNEL_ID` | 新 LINE Login Channel ID |
| `functions/.env` | `LINE_LOGIN_CHANNEL_SECRET` | 新 LINE Login Channel secret |
| `functions/.env` | `LINE_MESSAGING_CHANNEL_SECRET` | 新 Messaging API Channel secret |
| `functions/.env` | `LINE_MESSAGING_CHANNEL_ACCESS_TOKEN` | 新 Messaging API Channel access token |
| `/.env` | `VITE_FIREBASE_*` 一式 | 新 Firebase プロジェクトの Web SDK 設定 |
| `/.env` | `VITE_LINE_LOGIN_CHANNEL_ID` | 新 LINE Login Channel ID |
| `/.env` | `VITE_LINE_AUTH_FN_URL` | デプロイ後に確定する Function URL（Step 5 後） |

### Step 5: デプロイ

```bash
cd /workspaces/marutto-study/functions
npm install
npm run build

cd ..
FUNCTIONS_DISCOVERY_TIMEOUT=60 firebase deploy --only functions
```

デプロイ後の出力に表示される **Function URL** をメモ:
```
Function URL (lineWebhook(asia-northeast1)): https://asia-northeast1-<新プロジェクトID>.cloudfunctions.net/lineWebhook
Function URL (createLineCustomToken(asia-northeast1)): https://asia-northeast1-<新プロジェクトID>.cloudfunctions.net/createLineCustomToken
```

`dailyQuiz06/07/17/19` も同時に作成され、Cloud Scheduler ジョブが App Engine デフォルトロケーション（多くの場合 `us-central1`）に4つ作られる。

### Step 5.5: 問題データの seed

```bash
gcloud auth application-default login
gcloud auth application-default set-quota-project <新プロジェクトID>
gcloud config set project <新プロジェクトID>

cd /workspaces/marutto-study
# scripts/seed-line-questions.ts 内の projectId を新プロジェクトに置き換え（要編集）
npx tsx scripts/seed-line-questions.ts
```

> ⚠️ `scripts/seed-line-questions.ts` 内に `projectId: "chatstudy-63477"` がハードコードされているため、新プロジェクトでは事前に値を置き換えること。

### Step 6: 管理画面で URL を反映

| 設定箇所 | 設定値 |
|---------|-------|
| LINE Developers > Messaging API チャネル > Webhook URL | `https://asia-northeast1-<新プロジェクトID>.cloudfunctions.net/lineWebhook` |
| LINE Developers > Messaging API > Use webhook | **ON** |
| LINE Developers > Messaging API > Verify | クリックして Success |
| LINE Developers > LINE Login チャネル > Callback URL | `https://<新ドメイン>/auth/line/callback` |
| `/.env` の `VITE_LINE_AUTH_FN_URL` | デプロイ後の `createLineCustomToken` URL |

### Step 7: ハードコードされた値の検索と差し替え

新プロジェクト ID やドメインがハードコードされていないか確認:

```bash
# プロジェクト ID 検索
grep -rn "chatstudy-63477" --include="*.ts" --include="*.tsx" --include="*.json" --include="*.md" .

# ドメイン検索
grep -rn "chatstudy.jp" --include="*.ts" --include="*.tsx" --include="*.json" --include="*.md" .
```

主に書き換えが必要な可能性がある場所:
- `docs/operations/line-webhook-deploy.md` 内の URL（このファイル自身）
- `docs/architecture.md` 内の URL
- フロントの定数で URL を直書きしている箇所（Vite の `VITE_*` 経由が望ましい）

### Step 8: 動作確認（本書 §4〜§9 と同じ）

- [ ] GET ヘルスチェック
- [ ] LINE Verify ボタン Success
- [ ] スマホで友だち追加 → 学年選択ボタン
- [ ] 中Xボタン押下 → 確認テキスト
- [ ] Firestore Console で `grade` 保存確認
- [ ] LINE Login（Web `/login`）動作確認

---

## 14. 本番運用時にやること（セキュリティ・信頼性向上）

立ち上げ直後ではなく、**安定運用フェーズで順次対応**する事項。

### 必須レベル

- [ ] **Channel secret / Channel access token のローテーション**（漏洩時、または半年〜1年に1回）
  - LINE Developers で Reissue → `functions/.env` 更新 → 再デプロイ
- [ ] **`.env` ファイルのバックアップ**（パスワードマネージャ等で管理）
- [ ] **管理者メールアドレスの確認**（`firestore.rules` に書かれているもの）

### 推奨レベル

- [ ] **Firebase Secret Manager への移行**（`.env` 平文を避けたい場合）
  - `firebase functions:secrets:set LINE_MESSAGING_CHANNEL_SECRET`
  - コード側に `runWith({ secrets: ["LINE_MESSAGING_CHANNEL_SECRET", "LINE_MESSAGING_CHANNEL_ACCESS_TOKEN"] })` を追加
- [ ] **Cloud Logging のアラート設定**
  - `[lineWebhook] handle* failed` のログが一定数を超えたら通知
- [ ] **Cloud Monitoring の uptime check**
  - GET `/lineWebhook` が 200 を返さなくなったら通知
- [ ] **`runWith({ minInstances: 1 })` の付与**（コールドスタート対策、コスト増あり）

### オプション

- [ ] **Firebase Hosting rewrites による `https://<ドメイン>/api/line/webhook` 化**
  - LINE Developers の Webhook URL を切り替え
  - 詳細: マイルストーン6の別ステアリングで実施
- [ ] **Lステップ等の外部ツールへの移行**
  - Webhook URL は1つしか設定できないので、コード側 Webhook を停止 or Lステップが提供する転送機能を使う

---

## 15. 関連ドキュメント

- `docs/architecture.md` — 全体アーキテクチャ（バックエンド章に Messaging API Webhook の位置付け）
- `docs/ideas/line-official-strategy.md` — Instagram → 公式LINE → Web の戦略文脈
- `.steering/20260507-line-webhook-api/` — マイルストーン1の実装ステアリング（requirements / design / tasklist）
- `functions/src/lineWebhook.ts` — 本ドキュメントが対象とする実装
- `functions/src/index.ts` — `createLineCustomToken`（LINE Login）と同居している export 集約点

---

## 16. 将来の拡張（マイルストーン2以降）

実装はそれぞれ別ステアリングで実施。本ドキュメントは更新時に追記する。

- 教科選択 postback（`type=select_subject`）
- 一問一答配信（`questions/{questionId}` を読み出して Buttons template で送信）
- 正誤判定 postback（`type=answer`）と `answers/{answerId}` 保存
- `reviewQueue/{reviewId}` の追加・出題
- Firebase Hosting rewrites による `https://www.chatstudy.jp/api/line/webhook` カスタムドメイン化
- Lステップ移行時の URL 切替手順
- Secret Manager への移行（`runWith({ secrets: [...] })` 追加）
