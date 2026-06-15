# Instagram コメント → 公式LINE 集客フロー 運用ガイド

Instagram 投稿に特定キーワードでコメントしたユーザーへ、Cloud Functions
`instagramWebhook` 経由で公開コメント返信と Instagram DM を自動送信し、
DM 内 URL から公式LINE 友だち追加 → 流入計測まで一連で動かす仕組みの
セットアップと運用手順をまとめる。

関連実装:
- `functions/src/instagramWebhook.ts` (Webhook 受信エントリ)
- `functions/src/igCampaignMatcher.ts` (キャンペーンマッチング)
- `functions/src/instagramApi.ts` (Graph API ラッパー)
- `functions/src/igTypes.ts` (Firestore スキーマ)
- `src/pages/admin/InstagramCampaignsTab.tsx` (Admin UI)
- `src/utils/captureIgReferrer.ts` + `src/hooks/useLiffAuth.ts` (流入計測)

## 1. 初回セットアップ（Meta 側）

### 1-1. Meta App 作成

> **採用方式: Instagram API with Instagram Login（`graph.instagram.com`）**
> 実装（`instagramApi.ts`）はこの方式で書かれている。Meta の新フローはこれが標準。
> Facebook ログイン方式（`graph.facebook.com` + Page Access Token）に戻す場合は
> `instagramApi.ts` の `GRAPH_API_BASE` を `graph.facebook.com/v22.0` に変更すること。

1. https://developers.facebook.com/ にログイン
2. 「マイアプリ」→「アプリを作成」
3. **アプリの詳細**: アプリ名（例 `chatstudy-instagram-campaign`）+ 連絡先メール → 次へ
4. **ユースケース**: 「**Instagram でメッセージとコンテンツを管理**」を選択
   （= コメントへの返信 + ダイレクトメッセージへの回答。旧UIの「Business アプリ種別」「製品を追加 → Instagram」はこのユースケースに統合された）
5. **ビジネス**: ビジネスポートフォリオを選択（なければ新規作成）→ 作成

### 1-2. ユースケースのカスタマイズ（旧「Instagram プロダクト追加」に相当）

1. 左メニュー「**ユースケース**」→「Instagram でメッセージとコンテンツを管理」の「**カスタマイズ**」
2. 左の「**Instagram ログインによる API 設定**」を開く（Facebook ログイン方式ではない方）
3. この画面に「①権限の追加」「②アクセストークン生成」「③Webhooks 設定」が並ぶ

### 1-3. 必須権限の確認

「①必要なメッセージアクセス許可を追加する」で「**Add all required permissions**」を押し、以下が入ることを確認:

| 権限 | 用途 |
|------|------|
| `instagram_business_basic` | 自社アカウント情報取得 |
| `instagram_business_manage_comments` | コメント取得 + 公開返信 |
| `instagram_business_manage_messages` | Private Replies DM 送信 |

（Instagram ログイン方式なので `pages_*` 権限・Page Access Token は不要）

### 1-4. アクセストークン発行

1. 「②アクセストークンを生成する」で対象の **Instagram プロアカウントを接続**
2. 「アクセストークンを生成」→ 出てきた **Instagram User Access Token**（長期・60日）を控える
3. → `META_PAGE_ACCESS_TOKEN` に保存（env 名は互換のため踏襲。中身は IG ユーザートークン）

> このトークンは 60 日で失効。`GET https://graph.instagram.com/v22.0/refresh_access_token?grant_type=ig_refresh_token&access_token=<TOKEN>` で延長できる（§7 参照）。

### 1-5. 自社 IG プロアカウント user_id 取得

```bash
# 上記で得た Instagram User Access Token を使う
IG_TOKEN=...
curl "https://graph.instagram.com/v22.0/me?fields=user_id,username&access_token=${IG_TOKEN}"
# → { "user_id": "17841401234567890", "username": "chatstudy", ... }
```

この `user_id` を `META_IG_USER_ID` に保存（自演コメントの除外判定に使う）。

### 1-6. App Secret の取得

アプリ管理画面「設定」→「ベーシック」の **アプリシークレット** を `META_APP_SECRET` に保存。

### 1-7. Webhook 検証トークンを決める

任意の固有文字列（例: `chatstudy-meta-webhook-2026`）を決めて `META_WEBHOOK_VERIFY_TOKEN` に保存。Meta Webhook 設定の「確認トークン」欄に同じ値を入れる。

## 2. Cloud Functions Secrets 登録

```bash
firebase functions:secrets:set META_APP_SECRET
# プロンプトで App Secret を貼り付け
firebase functions:secrets:set META_PAGE_ACCESS_TOKEN
firebase functions:secrets:set META_IG_USER_ID
firebase functions:secrets:set META_WEBHOOK_VERIFY_TOKEN
```

確認:

```bash
firebase functions:secrets:access META_APP_SECRET
```

## 3. デプロイ

```bash
cd functions && npm run build
FUNCTIONS_DISCOVERY_TIMEOUT=600 firebase deploy --only functions:instagramWebhook
firebase deploy --only firestore:rules,firestore:indexes
```

デプロイ後の Function URL:

```
https://asia-northeast1-chatstudy-63477.cloudfunctions.net/instagramWebhook
```

## 4. Meta Webhook 設定

1. Meta App ダッシュボード →「Webhooks」プロダクト
2. 「Instagram」を選択
3. **Callback URL**: 上記 Function URL
4. **Verify Token**: `META_WEBHOOK_VERIFY_TOKEN` と同じ値
5. 「確認して保存」→ Cloud Functions のログに `200 OK` が出れば成功
6. サブスクライブするフィールド: `comments` を **必須** で有効化

## 5. キャンペーン登録（運用）

1. ローカルで `npm run dev` → `/admin/dashboard` を開く
2. 「インスタ」タブ →「+ 新規キャンペーン」
3. 入力項目:

| 項目 | 説明 |
|------|------|
| Instagram 投稿 ID | Graph API 上の media ID（数値文字列、後述の取り方参照） |
| 投稿 URL | 表示用。`https://www.instagram.com/p/<shortcode>/` 形式 |
| トリガーキーワード | カンマ / 改行区切り。部分一致 + 全角半角 + 大文字小文字を吸収 |
| 公開コメント返信文 | コメント直下に Instagram 上で投稿される返信 |
| Instagram DM 文面 | `{lineUrl}` プレースホルダで URL 展開 |
| LINE 友だち追加 URL | 下記参照 |
| 開始 / 終了日時 | この期間内にコメントが来た時だけトリガー |
| 有効 | チェック外すと Webhook が無視 |

### 5-1. media ID の取り方

Instagram User Access Token を使って:

```bash
IG_TOKEN=...
curl "https://graph.instagram.com/v22.0/me/media?fields=id,permalink,timestamp&limit=10&access_token=${IG_TOKEN}"
```

直近10投稿の `id` と `permalink` が返るので、対象投稿の `id` をコピー。

### 5-2. LINE 友だち追加 URL の作り方（流入計測対応）

DM 内 URL は **LIFF URL 直リンク** にして `?ig_ref=ig_<campaignId>` を付ける。
こうすると LIFF 起動時に `useLiffAuth` が URL クエリから ref を拾い、
`users/{uid}.referrer` に初回のみ書き込む。

```
https://liff.line.me/<LIFF_ID>?ig_ref=ig_<campaignId>
```

- `<LIFF_ID>`: 公式LINE の `liff/units` 等の LIFF アプリ ID
- `<campaignId>`: Firestore docId（Admin UI で発行後に控える）

> ⚠️ `https://lin.ee/xxx?...` 形式の友だち追加 URL は **クエリパラメータが消える**
> 仕様なので、`ig_ref` 計測に使えない。LIFF URL 直リンクを使うこと。
> 未友だちユーザーは LIFF を開く前に LINE 側が「友だち追加」を促す。

### 5-3. DM 文面のサンプル

```
コメントありがとうございます！🌸
お問い合わせの「ほしい」資料は、公式LINEから無料でお届けしています。

下のリンクから友だち追加してね👇
{lineUrl}

中学生向けの暗記カード＋クイズで、毎日5分で続けられる学習サービスです✨
```

## 6. 動作確認

1. キャンペーン登録後、テスト用 IG 個人アカウントから対象投稿に「ほしい」とコメント
2. 数十秒以内に対象投稿のコメント直下に公開返信が付く
3. 同じアカウントの IG DM に LINE 友だち追加 URL が届く
4. URL をタップ →（友だち追加 → ）LIFF が起動
5. Firestore で `users/{uid}.referrer` を確認 → `{ source: "instagram", campaignId: "ig_<campaignId>", ... }`
6. Admin UI に戻ると、該当キャンペーンの「コメント」「DM 送信」「LINE 友追加」のカウントが +1

## 7. 月次運用

### Instagram User Access Token の更新（重要）

Instagram User Access Token（長期）は **60日で失効**する。Cloud Logging で
`code: 190` エラーが出たら以下のいずれかで更新:

**A. リフレッシュで延長（失効前・推奨）**
```bash
OLD_TOKEN=...
curl "https://graph.instagram.com/v22.0/refresh_access_token?grant_type=ig_refresh_token&access_token=${OLD_TOKEN}"
# → 新しい長期トークン（さらに60日）が返る
```

**B. 失効後はアプリ管理画面で再生成**
1. ユースケース →「Instagram ログインによる API 設定」→「アクセストークンを生成」
2. 新しい Instagram User Access Token を控える

更新後は必ず:
```bash
firebase functions:secrets:set META_PAGE_ACCESS_TOKEN   # 中身は IG ユーザートークン
firebase deploy --only functions:instagramWebhook        # Secret の再読込
```

カレンダーに **45日ごとの更新リマインダ**を入れることを推奨。

### キャンペーン終了

- 期間切れになると Admin UI 上で自動的に「終了」表示。Webhook 側でも `endsAt` 経過で自動 no-op
- DM 送信枠を保護したいときは「無効化」ボタンで即時停止

## 8. トラブルシュート

### Webhook 検証で 403 が返る

- `META_WEBHOOK_VERIFY_TOKEN` の値が Meta 設定と一致していない
- Secret 設定後に `firebase deploy --only functions:instagramWebhook` で再デプロイしているか確認

### コメントに反応しない

- Cloud Logging で `[instagramWebhook]` ログを確認
- `invalid signature`: `META_APP_SECRET` 不一致 / Meta 側の App Secret を再生成済みの可能性
- `duplicate comment`: 既に処理済み（冪等性ガード）
- `no_match`: mediaId 一致 OR キーワード一致のいずれかが false → Admin UI でキャンペーン設定を再確認
- `skipped_self`: 自社アカウントからのコメント。`META_IG_USER_ID` が正しく設定されているか確認

### DM は届くがコメント返信されない

- Page Access Token のスコープに `instagram_manage_comments` が含まれていない可能性
- ユーザーがアプリをブロックしている / プライベートアカウント

### DM が届かない

- 受信側ユーザーが DM をオフ設定
- Meta API レスポンス `code: 551`（メッセージ送信不可）が `igDmEvents.metaError` に記録される
- Page Access Token 失効（`code: 190`）→ 再発行

### Meta App レビュー前にどこまで使えるか

- 開発モードでは **アプリのロールに登録された IG アカウント** 同士のみ動作
- 本番公開には `instagram_manage_messages` の **アプリレビュー申請**が必要（1〜2 週間目安）
- 申請には DM 自動化フローのスクリーンキャストとアプリ用途説明文が必要

## 9. データモデル一覧（参考）

詳細は `.steering/20260525-instagram-comment-to-line-dm/design.md` を参照。

- `igCampaigns/{campaignId}`: キャンペーン定義（Admin が CRUD）
- `igCommentEvents/{commentId}`: 受信コメント記録 + 冪等性キー（Functions のみ書き込み）
- `igDmEvents/{auto-id}`: DM 送信結果（Functions のみ書き込み）
- `users/{uid}.referrer`: 初回のみ書き込まれる流入元（クライアントから書き込み可、ただし初回のみ）
