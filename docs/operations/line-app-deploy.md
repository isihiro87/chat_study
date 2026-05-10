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

> ⚠️ ビルド最終ステップで `dist-line/index.line.html` → `dist-line/index.html` にリネームされる（`package.json` の `build:line` script 内 `&& mv ...`）。共有 `vercel.json` の rewrite (`destination: /index.html`) を LINE 版でも効かせるための処理。

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

LINE 版に必要な環境変数を設定。**Firebase 環境変数 6個 + LINE 関連 3個 + モード 1個 = 計10個（必須）**。`src/utils/validateEnv.ts` が起動時に Firebase 6個の存在チェックを行い、ひとつでも欠けると JS が早期 throw する点に注意。

#### 必須（10個）

| キー | 値 |
|------|----|
| `VITE_FIREBASE_API_KEY` | `AIzaSyBJuODbPmpu_fiJ8a1ffzDIUwEFszol5Cc` |
| `VITE_FIREBASE_AUTH_DOMAIN` | `chatstudy-63477.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | `chatstudy-63477` |
| `VITE_FIREBASE_STORAGE_BUCKET` | `chatstudy-63477.firebasestorage.app` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | `283901969847` |
| `VITE_FIREBASE_APP_ID` | `1:283901969847:web:9efd3b421e8cdb16091432` |
| `VITE_LINE_LOGIN_CHANNEL_ID` | `2009587166` |
| `VITE_LINE_AUTH_FN_URL` | `https://asia-northeast1-chatstudy-63477.cloudfunctions.net/createLineCustomToken` |
| `VITE_LIFF_ID_UNITS` | `2009587166-LjyCza2c` |
| `VITE_LIFF_ID_TEST_RANGE` | `2009587166-XXXXXXX1`（リッチメニュー「テスト範囲設定」用、Endpoint = `/liff/test-range`） |
| `VITE_LIFF_ID_REPORT` | `2009587166-YYYYYYY2`（リッチメニュー「成績・記録」用、Endpoint = `/liff/report`） |
| `VITE_MODE` | `line` |

#### 任意（GA計測）

| キー | 値 |
|------|----|
| `VITE_FIREBASE_MEASUREMENT_ID` | `G-PW47GDC47V` |

> ⚠️ Web 版と同じ Firebase プロジェクトを参照するため、`VITE_FIREBASE_*` は Web 版と同値にする。値はリポジトリの `/.env`（コミット対象外）から取得。
>
> ⚠️ **Vite は build 時に環境変数を bundle に焼き込む**ため、ENV を追加・変更したあとは Vercel ダッシュボードで **Redeploy**（既存デプロイの右上メニュー「Redeploy」）をクリックして再ビルドする必要がある。Save するだけでは反映されない。

### 2-4. Deploy

「Deploy」を押す。初回ビルドは数十秒〜1分で完了。`https://chatstudy-line-<random>.vercel.app/welcome` で確認できる。

### 2-5. Ignored Build Step（推奨）

Vercel は build concurrency = 1 のため、Web 版 build（200MB+ prerender、10分以上）が走っている間は LINE 版 build が queue で待たされる。**Ignored Build Step** を両プロジェクトに設定して、無関係な変更時は build をスキップさせる。

> 仕組み: コマンドが exit 0 → build スキップ、exit 1 → build 実行。`git diff --quiet` は変更なしで exit 0、変更ありで exit 1 を返すので、`-- <paths>` でフィルタすれば狙った paths にだけ反応するようになる。

**設定場所**: Vercel ダッシュボード → 各プロジェクト → Settings → **Git** → **Ignored Build Step** に下記コマンドを貼り付け → Save。

#### chatstudy-web（Web版）

LINE-only files（`src/line/`、`vite.config.line.ts`、`index.line.html`、`public_line/`、`src/main.line.tsx`）のみの変更時は Web版 build をスキップ:

```bash
git diff --quiet HEAD^ HEAD -- ':!src/line/' ':!src/main.line.tsx' ':!vite.config.line.ts' ':!index.line.html' ':!public_line/'
```

#### chatstudy-line（LINE版）

LINE版が依存する paths（LINE専用 + 共有モジュール + 設定ファイル）に変更があった時だけ build:

```bash
git diff --quiet HEAD^ HEAD -- 'src/line/' 'src/main.line.tsx' 'vite.config.line.ts' 'index.line.html' 'public_line/' 'package.json' 'package-lock.json' 'src/contexts/' 'src/firebase/' 'src/utils/authGuard.ts' 'src/pages/WelcomePage.tsx' 'src/pages/LiffUnitsPage.tsx' 'src/pages/LineCallbackPage.tsx' 'src/pages/NotFoundPage.tsx' 'src/components/common/' 'src/styles/' 'src/data/generated/' 'tailwind.config.js' 'postcss.config.js' 'tsconfig.json' 'vercel.json'
```

> ⚠️ LINE版は LiffUnitsPage が `src/data/generated/topic-registry.generated.ts` を import するため、`src/data/generated/` を watch list に含めること。`src/data/subjects/` の content-only 変更（registry 再生成なし）では LINE版 build をスキップできる。
>
> ⚠️ 共有モジュール（AuthContext / Firebase config 等）を新規追加・移動した場合は、上記の path list を更新すること。

#### 動作確認

設定後、test commit を push して Vercel ダッシュボードで両プロジェクトの動きを確認:

| 変更内容 | chatstudy-web | chatstudy-line |
|---------|--------------|---------------|
| `src/line/foo.tsx` のみ | ⊘ Skipped | ✓ Build |
| `src/data/subjects/foo/index.ts` のみ | ✓ Build | ⊘ Skipped |
| `src/contexts/AuthContext.tsx`（共有） | ✓ Build | ✓ Build |
| `package.json` | ✓ Build | ✓ Build |

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

### ❌ `https://line.chatstudy.jp/welcome` が 404 (Vercel platform 404 NOT_FOUND)
- Vercel の Output Directory が `dist-line` になっているか確認
- **`dist-line/index.html` が存在するか確認**（共有 `vercel.json` の rewrite が `/index.html` を見るため、`index.line.html` のままだと 404 になる）
- 解決: `package.json` の `build:line` で `mv dist-line/index.line.html dist-line/index.html` が走っているか確認。走っていれば Vercel の Redeploy で再ビルド
- `public_line/_redirects` は **Netlify 形式で Vercel では無視**されるため SPA fallback には効かない。`vercel.json` の rewrites が SPA fallback を担う

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

### ❌ ブラウザコンソールに `Uncaught Error: Missing Firebase env: VITE_FIREBASE_AUTH_DOMAIN, ...`
- `src/utils/validateEnv.ts` が Firebase 6個の env をすべて要求している。Vercel に **6個全部** が設定されているか §2-3 と照合
- 追加後は **Redeploy 必須**（save のみでは反映されない、Vite は build 時に env を bundle に焼き込む）

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
