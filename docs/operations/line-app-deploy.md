# LINE 版アプリ（line.chatstudy.jp）運用手順

公式LINE 用の slim な Web アプリ（LIFF + 友だち追加誘導）を、Web 学習サイト本体（`www.chatstudy.jp`）から **別 Vercel プロジェクト・別サブドメイン** で配信するための運用手順。

| 項目 | 値 |
|------|----|
| LINE 版ドメイン | `https://line.chatstudy.jp/` |
| Web 版ドメイン（既存） | `https://www.chatstudy.jp/` |
| ビルドコマンド | `npm run build:line` |
| 出力ディレクトリ | `dist-line/` |
| Vite 設定 | `vite.config.line.ts` |
| エントリ HTML | `index.line.html` |
| エントリ TSX | `src/main.line.tsx` → `src/line/App.line.tsx` |
| public dir | `public_line/`（最小構成、教材画像を含まない） |

> 詳細設計: `.steering/20260510-line-app-split/design.md`

---

## 0. 全体像

```
┌────────────────────────────────────┐
│  リポジトリ chat_study               │
│  ┌─────────────────────────────┐   │
│  │ index.html → src/main.tsx   │   │
│  │ → src/App.tsx               │   │
│  │ + src/data/subjects/        │   │
│  │ + LearningPage / TopPage 等 │   │
│  └────────┬────────────────────┘   │
│           │ npm run build           │
│           ▼ dist/                   │
│           │                         │
│  ┌────────┴────────────────────┐   │
│  │ Vercel: chatstudy-web       │   │
│  │ www.chatstudy.jp            │   │
│  └─────────────────────────────┘   │
│                                    │
│  ┌─────────────────────────────┐   │
│  │ index.line.html             │   │
│  │ → src/main.line.tsx         │   │
│  │ → src/line/App.line.tsx     │   │
│  │ (slim - 学習データなし)      │   │
│  └────────┬────────────────────┘   │
│           │ npm run build:line      │
│           ▼ dist-line/              │
│           │                         │
│  ┌────────┴────────────────────┐   │
│  │ Vercel: chatstudy-line      │   │
│  │ line.chatstudy.jp           │   │
│  └─────────────────────────────┘   │
└────────────────────────────────────┘
```

両アプリとも同じ Firebase プロジェクト（chatstudy-63477）の Auth / Firestore / Functions に接続する。

---

## 1. ローカル動作確認

### ビルド

```bash
cd /workspaces/marutto-study
npm run build:line
```

期待出力:
```
✓ 119 modules transformed.
dist-line/index.line.html         0.58 kB
dist-line/assets/index.line-*.js  727 kB │ gzip: 190 kB
dist-line/assets/index-*.js       122 kB │ gzip:  34 kB
dist-line/assets/WelcomePage-*.js   2.5 kB │ gzip: 1.3 kB
dist-line/assets/LiffUnitsPage-*.js 1.2 kB │ gzip: 0.8 kB
...
✓ built in <1 min（本番Vercelでは30秒前後）
```

### サイズ確認

```bash
du -sh dist-line/   # 1MB前後（Web版は200MB+）
ls dist-line/        # assets, index.line.html, _redirects, robots.txt
```

### 学習データ混入チェック

```bash
for keyword in "LearningPage" "TopPage" "EraSelectPage" "subjects/history" "subjects/science"; do
  count=$(grep -ro "$keyword" dist-line/ 2>/dev/null | wc -l)
  echo "  $keyword: $count occurrences"
done
```

すべて 0 になっていれば bundle が正しく分離できている。1以上のものがあれば、`src/line/App.line.tsx` の import チェーンに不要な依存が紛れている。

### ローカルプレビュー

```bash
npm run preview:line
# → http://localhost:4173/welcome
```

---

## 2. Vercel 新規プロジェクトの作成（user 作業）

### 2-1. Vercel ダッシュボードで Add New Project

1. https://vercel.com/dashboard を開く
2. **Add New** → **Project** → 既存リポジトリ `isihiro87/chat_study` を選択
3. プロジェクト名: `chatstudy-line`（任意）

### 2-2. Build & Output Settings

| 項目 | 値 |
|------|---|
| Framework Preset | Vite |
| Build Command | `npm run build:line` |
| Output Directory | `dist-line` |
| Install Command | `npm install` |
| Development Command | `npm run preview:line` |
| Root Directory | `./`（リポジトリルート） |

### 2-3. Environment Variables

LINE 版に必要な環境変数だけを設定:

| キー | 値 |
|------|----|
| `VITE_FIREBASE_API_KEY` | Web版と同じ（Firebase Console > Web SDK 設定から） |
| `VITE_LINE_LOGIN_CHANNEL_ID` | `2009587166` |
| `VITE_LINE_AUTH_FN_URL` | `https://asia-northeast1-chatstudy-63477.cloudfunctions.net/createLineCustomToken` |
| `VITE_LIFF_ID_UNITS` | `2009587166-LjyCza2c` |
| `VITE_MODE` | `line` |

> ⚠️ Web 版と同じ Firebase プロジェクトを参照するため、`VITE_FIREBASE_*` は Web 版と同値にする。

### 2-4. Deploy

「Deploy」を押す。初回ビルドは数十秒〜1分で完了。`https://chatstudy-line-<random>.vercel.app/welcome` で確認できる。

---

## 3. ドメイン設定（user 作業）

### 3-1. Vercel に line.chatstudy.jp を追加

1. プロジェクト `chatstudy-line` > Settings > **Domains**
2. `line.chatstudy.jp` を入力 → **Add**
3. Vercel が DNS 設定を案内（CNAME or A レコード）

### 3-2. DNS で CNAME 追加

ドメインレジストラ（お名前.com 等）の管理画面で:

| Type | Name | Value |
|------|------|-------|
| CNAME | `line` | `cname.vercel-dns.com.` |

反映には数分〜数時間かかる。`dig line.chatstudy.jp` で確認。

### 3-3. SSL 証明書

Vercel が Let's Encrypt で自動発行。ドメインが有効化されると数分で HTTPS 化される。

---

## 4. LIFF Endpoint URL の更新（user 作業）

LINE 版ドメインに切り替える。

1. https://developers.line.biz/console/ にログイン
2. **LINE Login チャネル**（`2009587166`）> **LIFF** タブ
3. 既存LIFF（`2009587166-LjyCza2c`）の「Edit」
4. **Endpoint URL** を以下に変更:
   - 旧: `https://www.chatstudy.jp/liff/units`
   - **新**: `https://line.chatstudy.jp/liff/units`
5. **Update** で保存

> ✅ LIFF ID は変えないので、リッチメニュー JSON や Firestore は無変更。LINE プラットフォームが内部で endpoint URL を解決する。

---

## 5. LINE Login Callback URL の追加（user 作業）

### 重要: 既存の Web 版 URL は **削除しない**、追加だけ。

1. **LINE Login チャネル**（`2009587166`）> **LINE Login設定** タブ
2. **Callback URL** に以下を追加（既存の `https://www.chatstudy.jp/auth/line/callback` も残す）:
   - 追加: `https://line.chatstudy.jp/auth/line/callback`
3. **更新** で保存

両方の callback URL を許可することで、Web 版・LINE 版どちらからの OAuth でも動く。

---

## 6. 動作確認

### スマホ LINE
- リッチメニュー「単元を選ぶ」→ LINE 内 webview で `line.chatstudy.jp/liff/units` が開く → liff.init() → 認証済なら `www.chatstudy.jp` の TopPage に遷移
- 未認証なら LINE Login OAuth が走り、`line.chatstudy.jp/auth/line/callback` で認証 → TopPage

### ブラウザ直アクセス（PC / シークレットウィンドウ）
- `https://line.chatstudy.jp/` → `/welcome` にリダイレクト → WelcomePage 表示
- `https://line.chatstudy.jp/welcome` → WelcomePage
- `https://line.chatstudy.jp/some/random/path` → NotFoundPage

### Web 版 regression
- `https://www.chatstudy.jp/` → 既存通り TopPage
- `https://www.chatstudy.jp/subjects/history/eras/jomon/topics/joumon-jidai` → LearningPage
- 既存 LINE Auth ユーザーが認証セッション維持

---

## 7. トラブルシュート

### ❌ `https://line.chatstudy.jp/welcome` が 404
- Vercel の Output Directory が `dist-line` になっているか確認
- `_redirects` が `dist-line/` に含まれているか確認（SPA fallback）
- `public_line/_redirects` が `/*    /index.line.html   200` になっているか確認

### ❌ LIFF が `Invalid endpoint URL` エラー
- LINE Developers Console の Endpoint URL が `https://line.chatstudy.jp/liff/units` になっているか確認
- DNS 反映待ちの可能性、5-10分後に再試行

### ❌ LINE Login OAuth で `Invalid redirect_uri` エラー
- LINE Login チャネルの Callback URL に `https://line.chatstudy.jp/auth/line/callback` が登録されているか確認
- 微妙なtypo（`/callback` 末尾スラッシュなど）の確認

### ❌ build:line で学習データが混入する
- `dist-line/assets/*.js` を `grep` して確認
- `src/line/App.line.tsx` の import 文を見直す
- 共有モジュール（AuthContext 等）が間接的に学習体験ページを import していないか
- 共有モジュールに学習体験への依存を追加するときは LINE 版 build を必ずチェック

### ❌ build:line がハングする（devcontainer のメモリ問題）
- `NODE_OPTIONS="--max-old-space-size=4096" npm run build:line`
- それでもダメなら ローカル devcontainer 外（ホストマシン）で実行
- 本番 Vercel の build 環境では発生しない（メモリ余裕あり）

### ❌ Vercel build で `Cannot find module 'tailwindcss'` 等のエラー
- `package.json` の `devDependencies` に `@tailwindcss/vite` `tailwindcss` が含まれているか確認
- Vercel Install Command が `npm install`（`npm install --production` ではない）になっているか

---

## 8. 関連ドキュメント

- `CLAUDE.md` — 2アプリ構成のサマリ
- `docs/architecture.md` — フロントエンドアーキテクチャ章
- `docs/operations/line-richmenu.md` — リッチメニュー運用
- `docs/operations/line-webhook-deploy.md` — Webhook 運用
- `.steering/20260510-line-app-split/` — 本機能のステアリング
- `vite.config.line.ts` / `index.line.html` / `src/main.line.tsx` / `src/line/App.line.tsx` — LINE 版実装

---

## 9. 将来の拡張

- 「テスト範囲設定 LIFF」「成績・記録 LIFF」など追加 → `src/pages/` に新規 Page を作って `src/line/App.line.tsx` の Routes に追加
- LINE 版を完全停止判断 → Vercel の `chatstudy-line` プロジェクトを Pause、Web 版で全機能をまかなう
- Web 版を完全停止判断（LINE 一本化） → `src/main.tsx` / `src/App.tsx` / `src/pages/` の学習体験系を削除、`vite.config.line.ts` を `vite.config.ts` にリネーム
