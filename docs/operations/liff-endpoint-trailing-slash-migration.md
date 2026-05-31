# LIFF endpoint URL 末尾スラッシュ統一 作業手順書

## 目的

Vercel ホスティング設定で `trailingSlash: true` が有効になっているため、
末尾スラッシュ無しの URL（例 `https://line.chatstudy.jp/liff/scope`）に
アクセスすると 308 リダイレクトが走る:

```
LINE WebView → liff.line.me/<LIFF_ID>?param
   ↓ LINE が LIFF endpoint URL に置換
https://line.chatstudy.jp/liff/scope?param
   ↓ Vercel が trailingSlash: true で 308
https://line.chatstudy.jp/liff/scope/?param
   ↓ 1 段余分なラウンドトリップ後にアプリ表示
```

LINE Developers Console に登録している LIFF endpoint URL を末尾 `/` 付きに
変更すると 308 リダイレクトが消え、LINE WebView での初期表示が 200〜500ms
程度短縮される。低速モバイル回線では体感差が大きい。

参考: `2026-05-26 d9e2012 fix(hosting): LIFF ページが古い asset hash を参照する問題を修正`
の根本原因調査で発見された冗長性。

## 前提

- LINE Developers Console にアクセス権がある
- LINE 公式アカウントの所属プロバイダー: **chatstudy**（仮）
- LIFF チャネルID: **2009587166** （LIFF endpoint URL のホストは
  `line.chatstudy.jp` で共通）

## 対象 LIFF endpoint URL（9 件）

| LIFF アプリ名 | 現在の Endpoint URL | 新しい Endpoint URL |
|---|---|---|
| `liff_units` | `https://line.chatstudy.jp/liff/units` | `https://line.chatstudy.jp/liff/units/` |
| `liff_scope` | `https://line.chatstudy.jp/liff/scope` | `https://line.chatstudy.jp/liff/scope/` |
| `liff_report` | `https://line.chatstudy.jp/liff/report` | `https://line.chatstudy.jp/liff/report/` |
| `liff_settings` | `https://line.chatstudy.jp/liff/settings` | `https://line.chatstudy.jp/liff/settings/` |
| `liff_premium_info` | `https://line.chatstudy.jp/liff/premium-info` | `https://line.chatstudy.jp/liff/premium-info/` |
| `liff_premium_apply` | `https://line.chatstudy.jp/liff/premium-apply` | `https://line.chatstudy.jp/liff/premium-apply/` |
| `liff_help` | `https://line.chatstudy.jp/liff/help` | `https://line.chatstudy.jp/liff/help/` |
| `liff_nickname` | `https://line.chatstudy.jp/liff/nickname` | `https://line.chatstudy.jp/liff/nickname/` |
| `liff_contact` | `https://line.chatstudy.jp/liff/contact` | `https://line.chatstudy.jp/liff/contact/` |

各 LIFF の LIFF ID は CLAUDE.md「サイトマップ」セクション、または
`docs/operations/line-app-deploy.md` の `VITE_LIFF_ID_*` 表を参照。

## 作業手順

### 1. LINE Developers Console にログイン

1. https://developers.line.biz/console/ にアクセス
2. プロバイダー一覧から該当プロバイダーを選択
3. 公式LINE のチャネル（Messaging API + LIFF が紐づいているもの）を選択

### 2. 各 LIFF アプリの Endpoint URL を更新

公式LINE チャネルの管理画面で「**LIFF**」タブを開き、上記 9 件の LIFF
アプリそれぞれに対して以下を実行:

1. アプリ名をクリックして詳細を開く
2. 「**Endpoint URL**」欄の値を確認（末尾 `/` 無し版になっているはず）
3. **末尾に `/` を付与**して保存
   - 例: `https://line.chatstudy.jp/liff/scope` → `https://line.chatstudy.jp/liff/scope/`
4. 保存後、画面上部に「更新しました」のトーストが出ることを確認

⚠️ **注意**:
- Endpoint URL のホスト部分（`line.chatstudy.jp`）は変更しない
- 末尾 `/` 以外の部分は触らない
- スコープ（profile / openid / email）など他の項目は触らない

### 3. 動作確認（任意・推奨）

更新した LIFF アプリの「**Try it**」セクションにある QR コードまたは URL
を控え、LINE アプリ（実機）から開く。エラーなくページが表示されれば OK。

または curl で末尾 `/` 無しのアクセスがどのように扱われるか確認:

```bash
# 308 redirect が返るが、Location ヘッダで末尾 / 付きに飛ぶことを確認
curl -I https://line.chatstudy.jp/liff/scope

# 末尾 / 付きはそのまま 200（または 304）が返ることを確認
curl -I https://line.chatstudy.jp/liff/scope/
```

### 4. リッチメニュー / flex の動作確認

LINE 実機で以下を順にタップして、各 LIFF が即座に開けることを確認:

- リッチメニュー「単元を選ぶ」（プレミアム）→ `liff_units`
- リッチメニュー「テスト範囲設定」（無料 + プレミアム）→ `liff_scope`
- リッチメニュー「成績・記録」（プレミアム）→ `liff_report`
- リッチメニュー「設定・サポート」（プレミアム）→ `liff_settings`
- 設定・サポート画面の「お問い合わせ」→ `liff_contact`
- 無料時の「もっと解く」flex の「詳細を見る」→ `liff_premium_info`
- 無料時の「使い方」flex の「使い方を詳しく見る」→ `liff_help`
- premium info ページの「申込フォームを開く」→ `liff_premium_apply`
- 1問目回答後の「ニックネーム教えて」flex（trial 開始時のみ）→ `liff_nickname`

## ロールバック手順

万一 LIFF が動かなくなった場合は、Endpoint URL を末尾 `/` 無しに戻す:

`https://line.chatstudy.jp/liff/scope/` → `https://line.chatstudy.jp/liff/scope`

Vercel 側の `trailingSlash: true` は触らない（SEO 等の理由で必要）。

## このタスク後に確認したい改善点

このタスクは「冗長なリダイレクトを 1 段抜く」だけの最適化なので、ユーザー
体感の劇的な改善は期待しないこと。むしろ重要な根本対応は同時にデプロイした
`vercel.json` の HTML 用 `Cache-Control: no-store` 設定で、こちらが**主因の
LIFF ページ表示不具合**を解決する。

## 関連

- 発端のコミット: `d9e2012 fix(hosting): LIFF ページが古い asset hash を参照する問題を修正`
- Vercel ホスティング設定: `vercel.json`
- LIFF endpoint URL 一覧の正本: CLAUDE.md
- LIFF SDK 認証フロー: `src/hooks/useLiffAuth.ts`
- ジェネリック手順書: `docs/operations/line-app-deploy.md` §「LIFF endpoint URL の更新」
