# タイプでスタディ（タイピングゲーム）利用状況スナップショット

- **取得日**: 2026-06-29
- **対象**: 別 Firebase プロジェクト `type-study-88ced` の `sessions` / `rankings` / `players`
- **取得スクリプト**: `scripts/_typing-usage-snapshot.mjs`（count 集計 + 全件 limit 取得）
  - ⚠ devcontainer 向け node_modules で tsx/esbuild が Windows ネイティブで動かないため `.mjs` 版を使用（`.ts` 版も併存）。
  - 実行前に `type-study-88ced` にアクセスできるアカウントで `gcloud auth application-default login` が必要。
- **背景**: 2026-06-26 に「新ゲーム告知 broadcast」を全友だちへ配信（`scripts/send-typing-game-broadcast.ts`）。

## サマリ（結論）

**まだほとんど使われていない。実質4端末。** 全友だちへ告知した割にプレイは伸びておらず、少人数が繰り返し遊んでいる状態（管理人テスト含む可能性大）。最有力の離脱要因は **PC専用（スマホ・タブレット不可）** 制約。

## 規模（count 集計）

| 指標 | 値 |
|---|---|
| 総プレイ回数 (sessions) | 37 |
| プレイ端末ユニーク (sessions の pid) | 4 |
| ランキング登録 (rankings) | 30（テストモード自己ベスト、1人×単元ごと上書き） |
| データ保存端末 (players) | 7 |

## 日別プレイ回数

| 日付 | 回数 | 備考 |
|---|---|---|
| 2026-06-25 | 2 | 告知前テスト |
| 2026-06-26 | 7 | 全友だち broadcast 配信日 |
| 2026-06-28 | 28 | |

- 1端末あたり平均 9.3 回。リピーター（2回以上）4/4=100%。複数日プレイは1端末のみ。

## 中身

- 人気単元（eraName）TOP: 律令国家・奈良 43.2% / 鎌倉時代②成立 10.8% / 鎌倉時代③文化 5.4% ほか。
- 教科別（subjectId）: ancient-state 43.2% が突出。`__weak`（にがて練習）2件。
- 品質: 平均正答率 79.7% / 平均 107 kpm / パーフェクト率 8.1% / 累計クリア用語 409。

## 計測上の注意・既知の穴

- **暗記/テストの内訳が取れない**: `sessions.mode` は「問題数固定ラウンド」を表す固定値 `'count'` で、暗記/テストの区別は `cfg.hide`（index.html）にあるが **ログに保存していない**。区別を取りたいなら `logSession` の doc に `hide` を追加し、**`firestore.rules` の `isValidSession`（hasOnly/hasAll）にも `hide` を足して `type-study-88ced` にルール再デプロイ**が必要（rules が hasOnly で固定キー検証しているため、フィールド追加だけだと create が弾かれる）。
- players(7) > sessions の pid(4): 古いプレイや App Check 未通過などで session ログが残らなかった端末がある可能性。

## 再取得方法

```bash
gcloud auth application-default login      # type-study-88ced にアクセスできるアカウントで
node scripts/_typing-usage-snapshot.mjs    # Windows ネイティブはこちら
```
