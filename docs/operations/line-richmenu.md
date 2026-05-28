# LINE リッチメニュー（無料／トライアル／有料）運用手順

公式LINEに **無料ユーザー用（4ボタン）／トライアル中ユーザー用（6ボタン）／有料ユーザー用（6ボタン）** のリッチメニューを設置し、Messaging API でユーザー単位に出し分けるための運用手順。

| 項目 | 値 |
|------|----|
| JSON 定義 | `data/line-richmenu/{free,trial,premium}-richmenu.json` |
| 画像出力 | `data/line-richmenu/{free,trial,premium}.{png,jpg}` |
| 画像素材 | `data/line-richmenu/raw/{free,trial,premium}-source.*` |
| 状態管理 | `data/line-richmenu/state.json`（richMenuId 永続化） |
| 運用 CLI | `scripts/manage-line-richmenu.ts` |
| 画像変換 | `scripts/prepare-richmenu-images.ts` |
| 切替 Function | `syncRichMenuToPlan`（HTTPS Callable, 管理者のみ） |
| 環境変数 | `LINE_MESSAGING_CHANNEL_ACCESS_TOKEN` ／ `LINE_RICHMENU_FREE_ID` ／ `LINE_RICHMENU_TRIAL_ID`（任意・未設定時は premium に fallback） ／ `LINE_RICHMENU_PREMIUM_ID` |

> ⚠️ **trial 用 richmenu のフォールバック**: 1問目回答時の自動 trial 開放 (`onAnswerCreated`) と申込フォーム経由の trial 開放 (`onPremiumApplicationCreated`) は `linkRichMenuForUser(lineUserId, "trial")` を呼ぶ。`LINE_RICHMENU_TRIAL_ID` が `.env` に未設定の場合は **`LINE_RICHMENU_PREMIUM_ID` にフォールバック** して link する（Functions ログに `LINE_RICHMENU_TRIAL_ID 未設定のため premium ID を fallback として使用します` が出る）。trial 用画像作成と LINE 上の create が運用上まだ済んでいないフェーズでも、機能解放は壊れない設計。

---

## 0. 全体像

```
┌──────────────────────┐
│ 画像素材（Canva 等）   │
│ raw/free-source.png  │
│ raw/premium-source.* │
└──────────┬───────────┘
           │ npx tsx scripts/prepare-richmenu-images.ts
           ▼
┌──────────────────────┐
│ 2500×1686 / ≤1MB     │
│ free.png / premium.* │
└──────────┬───────────┘
           │ npx tsx scripts/manage-line-richmenu.ts create <free|premium>
           │   → state.json に richMenuId 保存
           │ npx tsx scripts/manage-line-richmenu.ts upload <free|premium> <path>
           ▼
┌──────────────────────────────┐
│ LINE プラットフォーム         │
│ richmenu-AAAA / richmenu-BBBB │
└──────────┬───────────────────┘
           │ set-default で全員に free を割当
           │ syncRichMenuToPlan で個別ユーザーを premium に切替
           ▼
┌──────────────────────────────────────────┐
│ Firestore users/line:{uid}                │
│   plan, premiumUntil, richMenuType,        │
│   lastRichMenuUpdatedAt（Functions 経由のみ）│
└──────────────────────────────────────────┘
```

---

## 1. 必要なもの

| 項目 | 用意するタイミング |
|------|------------------|
| 画像素材2枚（無料用・有料用） | リッチメニュー設置前（Canva 等で作成） |
| `LINE_MESSAGING_CHANNEL_ACCESS_TOKEN` | `functions/.env` に登録済み（`docs/operations/line-webhook-deploy.md` §2） |
| `LINE_RICHMENU_FREE_ID` / `LINE_RICHMENU_TRIAL_ID` / `LINE_RICHMENU_PREMIUM_ID` | リッチメニュー作成後、`functions/.env` に追記して再デプロイ（`LINE_RICHMENU_TRIAL_ID` は任意、未設定なら premium fallback） |
| LIFF アプリ（複数） | 別タスク。本ドキュメントでは `PLACEHOLDER_*` URL のままで進める |

---

## 2. 画像作成ガイド

### 仕様

| 項目 | 値 |
|------|----|
| サイズ | **2500 × 1686 px**（FULL） |
| 形式 | PNG または JPEG |
| ファイルサイズ | **1 MB 以下** |
| アスペクト比 | 約 1.483:1 |

### グリッド

**無料用（4ボタン・2×2）**:
```
+--------+--------+
| 連続記録 | 単元を選ぶ |  ← 1250×843 / 1250×843
+--------+--------+
| 使い方   | もっと解く |  ← 1250×843 / 1250×843
+--------+--------+
```

**有料用（6ボタン・3×2）**:
```
+------+------+------+
| 追加で │ 苦手を │ テスト │  ← 833 / 834 / 833 × 843
| 解く  │ 復習  │ 範囲  │
+------+------+------+
| 単元を│ 成績・│ 設定・│
| 選ぶ  │ 記録  │ サポート│
+------+------+------+
```

**トライアル用（6ボタン・3×2）**:
レイアウト・ボタン構成は有料用と完全に同一。画像のみ「お試し中」とわかる差別化（例: ヘッダーに「7日間お試し中」バッジ、配色を少しトーンダウン等）を入れる想定。areas は `data/line-richmenu/trial-richmenu.json` に定義済み（premium と同一座標）。

### 文言サンプル（既製の素材と整合）

| ボタン | サブテキスト |
|--------|-------------|
| 連続記録 | ストリークを確認 |
| 単元を選ぶ | 学年・教科を設定 |
| 使い方 | はじめてでも安心 |
| もっと解く | 追加問題はプレミアム |
| 追加で解く | 今すぐもう1問 |
| 苦手を復習 | 間違えた問題から出題 |
| テスト範囲設定 | 範囲に合わせて対策 |
| 成績・記録 | 正答率・連続記録 |
| 設定・サポート | 通知・学年変更 |

### 配色（`docs/design-guide.md` 準拠）

- アクセント: amber-500 (`#F59E0B`)
- 禁止色: indigo / purple / violet 系統
- グラデーションは控えめに（強いグラデは禁止）

---

## 3. 画像変換（リサイズ＋圧縮）

素材を `data/line-richmenu/raw/` に置いて変換スクリプトを実行する。

```bash
# 1. 素材を配置（拡張子は .png / .jpg / .jpeg のいずれか）
cp ~/Downloads/free.png       data/line-richmenu/raw/free-source.png
cp ~/Downloads/trial.png      data/line-richmenu/raw/trial-source.png
cp ~/Downloads/premium.png    data/line-richmenu/raw/premium-source.png

# 2. 変換実行
npx tsx scripts/prepare-richmenu-images.ts
```

期待出力:
```
[free] source: .../raw/free-source.png
  ✓ PNG palette: 928.3 KB → .../free.png

[premium] source: .../raw/premium-source.png
  - PNG palette が 1137.9 KB（>1MB）。JPEG にフォールバックします。
  ✓ JPEG q=90: 507.1 KB → .../premium.jpg
```

PNG パレット圧縮で 1MB を超える場合、JPEG に自動フォールバック（quality を 90 → 70 まで段階的に下げる）。最終的に1MB 以下に収まらない場合は素材側を見直す。

> ✅ **アスペクト比チェック**: 素材が 2500:1686（=1.483）と微妙に異なる場合でも、`fit: "fill"` でストレッチして吸収する。1〜2% 程度の歪みは目視で判別不可。

---

## 4. LIFF URL のプレースホルダ置換

LIFF が確定したら、JSON 内の `PLACEHOLDER_*` を一括置換する。

```bash
# 例: テスト範囲設定 LIFF を本番 URL に差し替える
sed -i 's|https://liff.line.me/PLACEHOLDER_test_range|https://liff.line.me/2009587166-XXXXXXX1|g' \
  data/line-richmenu/premium-richmenu.json

# 例: 成績・記録 LIFF を本番 URL に差し替える
sed -i 's|https://liff.line.me/PLACEHOLDER_report|https://liff.line.me/2009587166-YYYYYYY2|g' \
  data/line-richmenu/premium-richmenu.json
```

LIFF 一覧:

| LIFF | Endpoint URL | 配置 |
|------|-------------|------|
| `VITE_LIFF_ID_UNITS` | `https://line.chatstudy.jp/liff/units` | free + premium「単元を選ぶ」 |
| `VITE_LIFF_ID_TEST_RANGE` | `https://line.chatstudy.jp/liff/test-range` | premium「テスト範囲設定」 |
| `VITE_LIFF_ID_REPORT` | `https://line.chatstudy.jp/liff/report` | premium「成績・記録」 |

未確定のキー一覧:
```bash
grep -o "PLACEHOLDER_[a-z_]*" data/line-richmenu/*.json | sort -u
```

> ⚠️ JSON を変更したあとは **`create` をやり直す**（既存 richMenu を `delete` → 再 `create`）。LINE 側で areas を後から書き換えることはできない仕様。

---

## 5. リッチメニューの作成・割当

### 5-1. 一覧確認

```bash
npx tsx scripts/manage-line-richmenu.ts list
```

LINE 上の richMenu 一覧と、ローカル `state.json` の対応関係を表示する。

### 5-2. 作成

```bash
npx tsx scripts/manage-line-richmenu.ts create free
npx tsx scripts/manage-line-richmenu.ts create trial     # 任意（trial 専用メニューを使うなら）
npx tsx scripts/manage-line-richmenu.ts create premium
```

- `data/line-richmenu/{target}-richmenu.json` を読んで `POST /v2/bot/richmenu` を発行
- 返却された `richMenuId` を `data/line-richmenu/state.json` に保存

### 5-3. 画像アップロード

```bash
npx tsx scripts/manage-line-richmenu.ts upload free    data/line-richmenu/free.png
npx tsx scripts/manage-line-richmenu.ts upload trial   data/line-richmenu/trial.{png,jpg}  # 任意
npx tsx scripts/manage-line-richmenu.ts upload premium data/line-richmenu/premium.jpg
```

拡張子から Content-Type が判定される（`.png` → `image/png` / `.jpg`/`.jpeg` → `image/jpeg`）。

### 5-4. 全員に無料メニューを割当（デフォルト）

```bash
npx tsx scripts/manage-line-richmenu.ts set-default free
```

これで友だち追加直後のユーザーは自動的に無料メニューを見るようになる。

### 5-5. `functions/.env` に richMenuId を反映

`syncRichMenuToPlan` がプラン切替時に参照するため、`state.json` の値を `functions/.env` にも書き込む。

```env
# 既存（触らない）
LINE_LOGIN_CHANNEL_ID=...
LINE_LOGIN_CHANNEL_SECRET=...
LINE_MESSAGING_CHANNEL_SECRET=...
LINE_MESSAGING_CHANNEL_ACCESS_TOKEN=...

# リッチメニュー（state.json の値をそのまま貼る）
LINE_RICHMENU_FREE_ID=richmenu-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
LINE_RICHMENU_TRIAL_ID=richmenu-zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz   # 任意。未設定なら premium にフォールバック
LINE_RICHMENU_PREMIUM_ID=richmenu-yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
```

その後、Functions を再デプロイ:
```bash
cd /workspaces/marutto-study
FUNCTIONS_DISCOVERY_TIMEOUT=120 firebase deploy --only functions
```

---

## 6. プラン切替（個別ユーザー）

> **推奨**: `manage-line-richmenu.ts sync-plan` を使う（gcloud ADC 経由で Admin SDK が Firestore を直接更新）。
> `firebase functions:shell` は v1 Callable の `auth` シミュレーションをサポートしないため、本番デプロイ済みの `syncRichMenuToPlan` Function を shell から呼び出すと `Request body is missing data.` エラーで失敗する。Function 自体は **Stripe webhook など機械的な呼び出し用** に温存する。

### 6-1. プレミアムへのアップグレード（CLI）

```bash
npx tsx scripts/manage-line-richmenu.ts sync-plan \
  U0123456789abcdef0123456789abcdef \
  premium \
  --until 2026-06-09T00:00:00+09:00
```

期待出力:
```
✓ LINE: premium richmenu (richmenu-yyy...) を U0123... にリンクしました
✓ Firestore: users/line:U0123... を更新しました (plan=premium, richMenuType=premium, premiumUntil=2026-06-09T...)

→ 数秒以内にスマホの LINE メニューが 6ボタン に切り替わります。
```

このコマンドで:
1. LINE API で `premium-richmenu` がそのユーザーにリンクされる（state.json の richMenuId を参照）
2. Firestore `users/line:{lineUserId}` に `plan="premium"` / `premiumUntil` / `richMenuType="premium"` / `lastRichMenuUpdatedAt` が書かれる（admin SDK 経由なので rules バイパス）
3. ユーザーの LINE 画面下のメニューが即時に切り替わる

> 前提: `gcloud auth application-default login` 済み（`docs/operations/line-webhook-deploy.md` §9.5 参照）

### 6-2. 無料に戻す（解約・期限切れ対応）

```bash
npx tsx scripts/manage-line-richmenu.ts sync-plan U0123456789abcdef0123456789abcdef free
```

- LINE 側のリンクが `free-richmenu` に戻る
- Firestore: `plan="free"` / `richMenuType="free"`、`premiumUntil` は **履歴として残す**（`null` にしない）

### 6-2-bis. トライアル状態に手動で切り替える

```bash
npx tsx scripts/manage-line-richmenu.ts sync-plan \
  U0123456789abcdef0123456789abcdef \
  trial \
  --until 2026-06-02T00:00:00+09:00
```

- LINE 側のリンクが `trial-richmenu` に切り替わる（`LINE_RICHMENU_TRIAL_ID` 未設定なら `premium-richmenu` で fallback）
- Firestore: `plan="premium"` / `richMenuType="trial"` / `planSource="trial"` / `premiumUntil=<--until 値>`
- 通常は `onAnswerCreated` の 1問目自動開放、または `onPremiumApplicationCreated` の申込経由開放で自動的に trial 状態になる。本コマンドは「手動でテストする」「期限を延長する」等の運用用

### 6-3. リッチメニューだけ手動で切り替えたい場合

`syncRichMenuToPlan` 相当の Firestore 更新は不要、LINE 側のリンクだけ動かしたい場合（緊急対応・実験）:

```bash
npx tsx scripts/manage-line-richmenu.ts link    premium U0123456789abcdef0123456789abcdef
npx tsx scripts/manage-line-richmenu.ts unlink  U0123456789abcdef0123456789abcdef
```

> ⚠️ **`link` / `unlink` は LINE 側のみ**。Firestore の `plan`/`richMenuType` は変わらない。Webhook の `extra_question`/`weak_review` ハンドラは Firestore の `plan` を見て分岐するため、`link` だけ打つとメニューと挙動がズレる。原則 `sync-plan` を使うこと。

### 6-4. LIFF 申込フォーム経由でアップグレードする（推奨フロー）

ユーザーが LIFF `/liff/premium-apply` から送信した申込は Firestore
`premiumApplications` collection に `status="pending"` で保存され、
`onPremiumApplicationCreated` トリガーが以下を実行する:

1. **7日間 trial を自動開放**（受付即時）
   - `users/{uid}` の `plan="premium"`, `premiumUntil=申込時+7日`, `planSource="trial"`,
     `trialStartedAt=now`, `richMenuType="premium"` を書き込み
   - LINE API でリッチメニューをプレミアム用に即時 link
   - ユーザーに「trial 開始」flex を push
   - **既に有料契約済み（`planSource !== "trial"` で `plan==="premium"`）の場合は trial を再開放しない**
2. 管理者 (`ADMIN_LINE_USER_IDS` env で指定) の LINE に push 通知
   - trial 自動開放の結果（成功 / 既プレミアム / 失敗）を反映した文面
   - 失敗時は手動 `sync-plan` のコマンドが含まれる

trial 期間中の本契約化、もしくは 7日経過後の自動失効（`expireTrialUsers` Function）は §6-6 / §6-7 を参照。

#### 6-4-1. 申込内容の確認

Firestore Console で `premiumApplications` collection を `createdAt desc` で
眺めるか、CLI から拾う:

```bash
# 直近の pending 申込を表示
gcloud firestore documents list \
  --collection-path=premiumApplications \
  --order-by="createdAt desc" --limit=10 \
  --format='value(name,fields.lineUserId.stringValue,fields.displayName.stringValue,fields.status.stringValue,fields.contactTimeBand.stringValue,fields.paymentPreference.stringValue)'
```

> 前提: `gcloud auth application-default login` 済み

#### 6-4-2. trial 期間中の本契約化（sync-plan 実行）

trial は自動開放されているので、追加対応は **本契約化のときだけ**:

```bash
# trial 期間内に本契約 → premium 期限を伸ばす（planSource は明示変更しないので "trial" のまま残る点に注意）
# 本契約化に合わせて planSource="paid" にしたい場合は Firestore Console で手動更新する
npx tsx scripts/manage-line-richmenu.ts sync-plan \
  U0123456789abcdef0123456789abcdef \
  premium \
  --until 2026-08-09T00:00:00+09:00
```

trial 自動開放が失敗した場合（管理者通知に `❌ trial 自動開放に失敗しました` が含まれる）、上記コマンドで手動 link する。

#### 6-4-3. ステータスを `approved` / `rejected` / `cancelled` に更新

開通後、Firestore Console から該当ドキュメントを開いて手動で
`status` フィールドを `pending` → `approved` に変更する（必要に応じて
`approvedAt` / `approvedBy` を追記）。あるいは Admin SDK から:

```bash
# 例: applicationId を指定して approved にする
gcloud firestore documents update \
  premiumApplications/<applicationId> \
  --field-mask=status,approvedAt,approvedBy \
  --fields=status=approved,approvedAt=$(date -Iseconds),approvedBy=ishimotty.gst@gmail.com
```

未開通のまま放置しないこと（`pending` のまま残ると申込状況の把握が困難になる）。
却下や利用者キャンセルの場合も `rejected` / `cancelled` を明示してドキュメントを残す
（履歴として保持、削除はしない）。

#### 6-4-4. 失敗時の挙動

- **管理者 push が届かない**: `ADMIN_LINE_USER_IDS` env が空 or 誤った userId 設定。
  Functions ログで `[onPremiumApplicationCreated] ADMIN_LINE_USER_IDS not set; ...`
  を確認。env を修正後 `firebase deploy --only functions:onPremiumApplicationCreated`
- **申込フォームから submit できない**: firestore.rules の `premiumApplications`
  create ルールを確認。`request.resource.data.uid == request.auth.uid` と
  `request.resource.data.status == 'pending'` の両方が必要。
- **LIFF /premium-apply が開けない**: `VITE_LIFF_ID_PREMIUM_APPLY` env を
  本番値に更新済か / LINE Developers Console の LIFF endpoint URL が
  `https://line.chatstudy.jp/liff/premium-apply` を指しているか確認

### 6-5. Function を直接叩きたい場合（プログラマティック呼び出し）

将来 Stripe webhook 等から自動切替する場合は、`syncRichMenuToPlan` HTTPS Callable に Admin SDK で Firebase Auth カスタムトークンを発行 → Web SDK で sign-in → ID token を Bearer に付けて HTTPS POST する流れになる。本ドキュメント執筆時点では未使用のためサンプルコードは別ステアリングで実装する。

### 6-6. trial 自動失効（`expireTrialUsers` Function）

Cloud Scheduler が毎日 **03:00 JST** に `expireTrialUsers` を起動する。

処理対象は `users.where(planSource == "trial").where(plan == "premium")`:

| 残り日数 | アクション |
|---------|-----------|
| `<= 0` 日 | リッチメニューを free に戻す + `plan="free"`, `planSource="trial_expired"`, `trialExpiredAt=now` を書き込み + 「trial 終了」flex を push |
| `1〜2` 日 | リマインダー flex を push（「trial 残り N 日」）。直近 24h 以内にリマインダー送信済みならスキップ（`lastTrialReminderAt` で gate） |
| `> 2` 日 | スキップ |

冪等性: `planSource` が `trial_expired` に変わると次回以降のクエリから外れる。

### 6-7. trial を手動で延長・終了させる

trial 中ユーザーの期限を延長したい場合は通常の `sync-plan` で `--until` を上書き:

```bash
npx tsx scripts/manage-line-richmenu.ts sync-plan \
  U0123456789abcdef0123456789abcdef \
  premium \
  --until 2026-09-01T00:00:00+09:00
```

trial 中に強制的に free に戻したい場合（例: 申込内容に不審点があった等）:

```bash
npx tsx scripts/manage-line-richmenu.ts sync-plan \
  U0123456789abcdef0123456789abcdef \
  free
```

> ⚠️ 手動 `sync-plan` は `planSource` を変更しない（Callable Function 経由のため）。
> trial → 本契約化に合わせて `planSource="paid"` を残したい場合は Firestore Console で
> 該当 user ドキュメントを直接編集する。

---

## 7. リッチメニューを更新する（areas や URL を変更したい）

LINE のリッチメニューは **areas を後から変更できない**。変更したい場合は再作成する。

```bash
# 1. JSON を編集
$EDITOR data/line-richmenu/free-richmenu.json

# 2. 古い richMenu を削除
npx tsx scripts/manage-line-richmenu.ts list      # 古い richMenuId を確認
npx tsx scripts/manage-line-richmenu.ts delete <oldRichMenuId>

# 3. 再作成 → 画像アップロード → デフォルト再設定
npx tsx scripts/manage-line-richmenu.ts create free
npx tsx scripts/manage-line-richmenu.ts upload free data/line-richmenu/free.png
npx tsx scripts/manage-line-richmenu.ts set-default free

# 4. functions/.env の LINE_RICHMENU_FREE_ID を新しい ID に更新 → 再デプロイ
```

> ⚠️ デフォルトを切り替えても、**過去に個別リンクされたユーザー**には旧メニューが残る。一括で巻き戻したい場合は、対象ユーザー全員に対して `link free <userId>` を打ち直す必要がある（または LINE Developers Console から「全ユーザーに適用」を選ぶ）。

---

## 8. トラブルシュート

### ❌ `create` で `400 Bad Request: areas overlap`
JSON の `bounds` が重なっている、もしくは合計が 2500×1686 を埋め尽くしていない。`width × height = 2500 × 1686` を満たすか確認。

### ❌ `upload` で `400 Bad Request: image size too large`
画像が 1MB を超えている。`prepare-richmenu-images.ts` を再実行するか、JPEG quality を 75〜80 に落とす。

### ❌ `upload` で `415 Unsupported Media Type`
拡張子と Content-Type が一致していない。`.png` 以外を `image/png` で送っているケース。スクリプトは拡張子から自動判定するので、ファイル名の拡張子を確認する。

### ❌ `link` で `400 Bad Request: rich menu not found`
`state.json` の `richMenuId` が LINE 側で削除されている。`list` で実在を確認し、必要なら `create` をやり直す。

### ❌ メニューが切り替わらない
- LINE クライアントのキャッシュ。トークを開き直す or LINE アプリを再起動
- `syncRichMenuToPlan` の Firestore 更新は成功しているが LINE 側のリンクが失敗しているケース → Functions ログ（`firebase functions:log --only syncRichMenuToPlan`）を確認
- `LINE_RICHMENU_FREE_ID` / `LINE_RICHMENU_PREMIUM_ID` が `.env` に未設定 → デプロイ時に embed されないため、Function は `failed-precondition` を返す

### ❌ リッチメニュー数の上限
LINE は **アカウントあたり 1000 個** までリッチメニューを保持できる。`list` で不要な richMenu が残っていれば `delete` する。

### ❌ 1日1問制限が `extra_question` でも効いている
- `selectAndSendQuestion` の `bypassDailyLimit` オプションが渡っていない
- premium 判定が free に倒れている → `users/{uid}` の `plan` / `premiumUntil` を Firestore Console で確認

---

## 9. 関連ドキュメント

- `docs/operations/line-webhook-deploy.md` — Messaging API Webhook の元運用ドキュメント
- `docs/architecture.md` — 「リッチメニュー × プラン切替」の節
- `docs/ideas/line-official-strategy.md` — 戦略文脈（タグ別リッチメニューの全体像）
- `.steering/20260509-line-richmenu-free-premium/` — 本機能のステアリング（requirements / design / tasklist）
- `functions/src/lineWebhook.ts` — `extra_question` / `weak_review` postback ハンドラ
- `functions/src/syncRichMenuToPlan.ts` — プラン切替 Callable Function
- `scripts/manage-line-richmenu.ts` — リッチメニュー CRUD
- `scripts/prepare-richmenu-images.ts` — 画像リサイズ＋圧縮

---

## 10. 将来の拡張

- ~~**自動の有料期限切れ巻き戻し**~~ → 2026-05 に `expireTrialUsers` Function として実装済（§6-6）
- **決済との接続**: Stripe webhook → `syncRichMenuToPlan` を呼び出す中間 Function
- ~~**A/B テスト用の第3メニュー**: `LINE_RICHMENU_TRIAL_ID` を環境変数に追加し、`syncRichMenuToPlan` の plan に `"trial"` を許可~~ → 2026-05 に trial 専用リッチメニュー / RichMenuPlan=`"trial"` として実装済（`.steering/20260526-trial-richmenu/`）
- **リッチメニュー切替アラート**: `lastRichMenuUpdatedAt` をベースに「直近30日切替なし」のユーザー通知
