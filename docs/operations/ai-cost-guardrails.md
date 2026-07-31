# AI の高額請求を防ぐガードレール（設定手順・運用）

> 対象: つづもん（有料）向け AI 個別サポートで上位モデルを使うにあたり、**想定外の高額請求を構造的に防ぐ**ための設定と運用。
> 設計は `.steering/20260725-ai-personal-support/{requirements,design}.md`。

## 0. 上限は5層ある

| 層 | 上限 | 実体 | バグで突破できるか |
|---|---|---|---|
| **① プロバイダ側** | 予算アラート＋APIクォータ＋専用キー | **クラウドのコンソール設定** | **突破不可** |
| ② サービス全体 | 月 30,000円 / 日 2,000円 | コード（`aiCostCore`） | しうる |
| ③ ユーザー月次 | 350円＋段階デグレード | コード | しうる |
| ④ ユーザー日次 | 月予算の1/10＋200回/日 | コード | しうる |
| ⑤ 1リクエスト | 入力20,000トークン等 | コード | しうる |

**②〜⑤はコードなので実装バグで突破されうる。だから①が必須。** ①だけはコードから独立して効く。

---

## 1. ① Google Cloud 側の設定（必須・最優先）

### 🚨 1-0. まず「どのプロジェクトに課金されているか」を確定する（最重要）

**予算アラートとクォータは「キーが属するプロジェクト」にしか効かない。** ここを間違えると、
設定したのに何も効いていない状態になる。

2026-07-25 に実地調査した結果（`gcloud` で確認済み）:

| 項目 | 実際の値 |
|---|---|
| **Gemini の課金先プロジェクト** | **`gen-lang-client-0677055253`（表示名「Chat-study」）** |
| 請求先アカウント | `019B57-AE7FB8-A5404F`（課金有効） |
| Firebase / Functions のプロジェクト | `chatstudy-63477`（**こちらでは Gemini API は無効**） |

> ⚠️ **`chatstudy-63477` に予算やクォータを設定しても Gemini の支出は止まらない。**
> `gen-lang-client-*` は Google AI Studio が API キーを作るときに自動生成するプロジェクトで、
> Firebase のプロジェクトとは別物。**必ず `gen-lang-client-0677055253` 側に設定する。**

自分で確認する場合:

```bash
gcloud projects list --format="value(projectId,name)"                       # gen-lang-client-* を探す
gcloud services list --enabled --project=<PROJECT> | grep generativelanguage # Gemini API が有効か
gcloud services api-keys list --project=<PROJECT> \
  --format="value(displayName,uid,restrictions.apiTargets[].service)"        # キー一覧（値は出ない）
gcloud billing projects describe <PROJECT> --format="value(billingAccountName,billingEnabled)"
```

### 1-1. 予算アラートを作る

1. [Cloud Console → お支払い](https://console.cloud.google.com/billing) を開く
2. 左メニュー **[予算とアラート]** → **[予算を作成]**
   （請求先アカウント `019B57-AE7FB8-A5404F` を選んでから）
3. **範囲** のステップで:
   - **プロジェクト** → `gen-lang-client-0677055253`（Chat-study）を選ぶ ← ここが 1-0 の要点
   - **サービス** → `Generative Language API` を選んで絞る
     （他の支出に埋もれず、Gemini だけの増加が見える）
4. **金額**:

| 項目 | 推奨値 | 理由 |
|---|---|---|
| 予算の種類 | 指定額 | — |
| 目標金額 | **月 10,000円** | コード側の全体キャップ（30,000円）より低く置き、**先に気づける** |

5. **アクション（しきい値）**: 実績の **50% / 90% / 100%** でメール通知。
   さらに「予測」の 100% も足すと、月末を待たずに超過見込みで気づける。
6. **通知先**: 請求先アカウントの管理者 ＋ 運営2人のメール
   （「請求先アカウントの管理者とユーザーにメールで通知」をON、必要なら宛先を追加）

> ⚠️ **予算アラートは「通知」であって「停止」ではない。** 止めるのは 1-3 のクォータ。
> 💡 自動停止まで作るなら、予算に Pub/Sub 通知を付けて Cloud Function でキーを無効化できる。
> ただし誤停止でサービスが止まるため、まずは「通知＋クォータ」で運用する。

### 1-2. API キーの用途分離（**既に実施済み・追加1本だけ**）

調査時点で `gen-lang-client-0677055253` には**用途別に4本**あり、
すべて `generativelanguage.googleapis.com` に制限済み（良い状態）:

| キー名 | 用途（推定） |
|---|---|
| `1mon-1tou` | 一問一答の公式LINE AIチャット |
| `tsudumon-lp-bot` | つづもんLPのチャットウィジェット |
| `movie study` | ムビスタ |
| `line bot` | LINE bot 系 |

**やること: つづもんAI個別サポート用に5本目を作る。**

1. [Google AI Studio → API keys](https://aistudio.google.com/apikey)
   （または Cloud Console → APIとサービス → 認証情報）
2. **[Create API key]** → プロジェクトは **`gen-lang-client-0677055253`（Chat-study）** を選ぶ
3. 名前を **`tsudumon-ai-support`** にする
4. **[キーを制限]**:
   - **API の制限** → `Generative Language API` のみ
   - アプリケーションの制限 → Cloud Functions からの呼び出しなので **「なし」**（IP 固定は不可）
5. `functions/.env` に追記（**既存の `GEMINI_API_KEY` は消さない**）

```
GEMINI_API_KEY=<既存のまま>                  # 月末レポート・採点・参考書チャット等
GEMINI_API_KEY_LINE_AI=<tsudumon-ai-support> # つづもんAI個別サポート用（新規）
```

> `llmGemini.ts` は `GEMINI_API_KEY_LINE_AI` → `GEMINI_API_KEY` の順に読む。
> 未設定でも既存キーで動くので、**設定は任意だが分離しておくと事故時にこのキーだけ無効化できる。**

6. env を変えたら Functions を再デプロイする（対象を絞る）

### 1-3. API クォータ上限を下げる（これが実質的な「停止装置」）

1. Cloud Console → **[APIとサービス] → [有効なAPI] → [Gemini API]**
   （URL 直打ち: `https://console.cloud.google.com/apis/api/generativelanguage.googleapis.com/quotas?project=gen-lang-client-0677055253`）
2. **[割り当てと上限（Quotas & System Limits）]** タブ
3. 検索窓で `request` や `generate` で絞り、**リクエスト数系の割り当て**を探す
   （名前はモデル階層ごとに分かれている。例: 「per minute per project」「per day per project」）
4. 対象にチェック → **[割り当てを編集]** → 実運用に見合う**低い値**を入れて申請

| 種類 | 推奨初期値 | 根拠 |
|---|---|---|
| 1分あたりリクエスト数 | **60** | 課金者が同時に会話しても足りる |
| 1日あたりリクエスト数 | **3,000** | 課金者100人 × 30回/日 相当 |

5. 上限に達すると API が `429` を返す。コード側はフォールバック文を返して webhook 200 を
   維持するので**サービスは落ちない**（AI 応答だけ止まる）。
6. **最初は低く始めて、課金者が増えたら段階的に上げる。**

> ⚠️ 割り当ての**引き下げ**は即時反映されることが多いが、**引き上げ**は審査で時間がかかる
> 場合がある。低く設定しすぎると戻すのに時間がかかるので、上の推奨値から始める。
> ⚠️ 階層やモデルによって編集できない割り当てもある。その場合は
> **②〜⑤層（コード側の上限）＋予算アラート**で運用する（コード側だけでも実用上は止まる）。

### 1-4. 確認

- [ ] 予算が `gen-lang-client-0677055253` を対象にできているか（`chatstudy-63477` になっていないか）
- [ ] 予算のサービス絞り込みが `Generative Language API` になっているか
- [ ] クォータの編集が反映されたか（数分後に画面を再読み込み）
- [ ] 新キー `tsudumon-ai-support` で `curl` が通るか（キー制限のミスがないか）
- [ ] `functions/.env` に入れたキーでデプロイ後、AI 応答が返るか

---

## 2. ① OpenAI 側の設定（ChatGPT を有効化するときだけ）

**キーを `.env` に入れる前に**必ず先に設定する。

1. [OpenAI Platform](https://platform.openai.com/settings/organization/limits) → **Limits**
2. **Monthly budget（hard limit）** を設定 → 例 **$20/月**。これを超えると API が拒否される
3. **Notification threshold（soft limit）** を設定 → 例 $10/月でメール通知
4. **プロジェクト単位のキー**を作り、このプロジェクトにだけ予算を割り当てる
5. `functions/.env` に `OPENAI_API_KEY` を設定

> `llmOpenai.ts` は未実装のスタブなので、キーを入れても現時点では呼ばれない（`LlmProviderNotConfiguredError`）。**上限設定 → アダプタ実装 → env で用途割り当て**の順で進める。

---

## 3. ②〜⑤ コード側の上限（env で調整）

`functions/.env`（すべて未設定なら**安全側の既定値**が使われる）

```
# 全体キャップ（超過で全ユーザーの AI 呼び出しを停止＋運営通知）
AI_GLOBAL_MONTHLY_CAP_JPY=30000
AI_GLOBAL_DAILY_CAP_JPY=2000

# 課金ユーザー1人あたり（月）
AI_MONTHLY_BUDGET_JPY=350

# 1リクエストの上限
AI_MAX_INPUT_TOKENS=20000

# 為替（保守的に高め = 多めに計上する側）
JPY_PER_USD=155

# 用途別モデル（provider:model 形式。未設定なら既定の階層）
LLM_MODEL_CHAT=gemini:gemini-3.5-flash-lite
LLM_MODEL_COUNSEL=gemini:gemini-3.6-flash
LLM_MODEL_PLAN=gemini:gemini-3.6-flash
LLM_MODEL_ANALYSIS=gemini:gemini-3.5-flash-lite
LLM_MODEL_CLASSIFY=gemini:gemini-3.1-flash-lite
LLM_MODEL_VERIFY=gemini:gemini-3.1-flash-lite
```

**⚠️ フェーズ0（§1）が終わるまで上位モデル（`gemini-3.6-flash`）の env を設定しない。**

**⚠️ 上の `LLM_MODEL_*` は `paid`（つづもん）にしか効かない。** `free`（一問一答・3,000人）は
purpose に関わらず常に最安モデルで、env による上書きも受け付けない（`llmModelResolver.resolveModelRaw`）。

### 3-1. `free` で唯一の env オプトイン（2026-07-26）

```
# 悩み相談（concern）のときだけ、無料Botでも1段上のモデルを使う。
# 未設定＝従来どおり最安。設定しない限り 3,000人が上位モデルに触れることはない。
# 価格表に無いモデルを書いた場合は無視して最安へ倒す（会話は落ちない）。
LLM_MODEL_FREE_COUNSEL=gemini:gemini-3.5-flash-lite
```

有効化の目安: 悩み相談の発生率を5%とすると、中位モデルで **+¥0.01/ターン**、
上位モデル（`gemini-3.6-flash`）だと **+¥0.08/ターン**。上位は費用対効果が悪いので、
**まず中位で試して `aiCostStats.byTier.free` の変化を見る**こと。

---

## 4. 運用（月次・日次の確認）

| 頻度 | やること |
|---|---|
| 日次（自動） | cron が全体コストをログ出力。全体キャップの80%超で運営へ通知 |
| 週次 | `npx tsx scripts/report-ai-cost.ts` で課金者別の分布（中央値・p90・上位者）を確認 |
| 月次 | Cloud Billing の実請求額と `aiCostStats/{YYYY-MM}` の計上額を**突き合わせる**（乖離は計上漏れのサイン） |
| 随時 | 運営通知（急増・全体キャップ・crisis）が来たら該当 uid を確認 |

### 4-1. ティア別の内訳（2026-07-26〜）

`aiCostStats/{YYYY-MM}.byTier` に `free` / `paid` の内訳が入る。

| キー | 何の支出か |
|---|---|
| `byTier.free` | 一問一答（3,000人・無料）の AI チャット＋プロフィール抽出 |
| `byTier.paid` | つづもん（課金者）の会話・分類・検証 |
| （内訳なし） | 月末レポート・記述採点・参考書チャット等の単発生成（`generateGeminiText`） |

**無料側は 2026-07-25 まで計上されていなかった**（`fetch` 直叩きで `llmProvider` を通らなかったため）。
過去月と比較するときは、`byTier` が無い月＝無料分が抜けていることに注意する。

### 計上額と実請求が乖離したときの確認順

1. `aiCostStats` に無い経路から API を呼んでいないか（`llmProvider` を経由しない直呼び）
2. `llmPrices.ts` の価格が古くないか（料金改定）
3. `JPY_PER_USD` が実勢と乖離していないか
4. usage が取れずに推定計上されている割合（ログ）

---

## 5. 参考価格（2026-07-25 時点・要再確認）

出典: https://ai.google.dev/gemini-api/docs/pricing （確認日 2026-07-25）

| モデル | 入力 $/1M | 出力 $/1M | 用途 |
|---|---|---|---|
| `gemini-3.1-flash-lite` | 0.25 | 1.50 | 最安（`free` / classify / verify） |
| `gemini-3.5-flash-lite` | 0.30 | 2.50 | 中位（`paid` の chat / analysis） |
| `gemini-3.6-flash` | 1.50 | 7.50 | 上位（counsel / plan） |
| `gemini-3.1-pro-preview` | 2.00 | 12.00 | 予備（現状使わない） |

### ¥350/月で何ターン話せるか（¥155/USD 換算・目安）

| 構成 | 1ターン | 月あたり |
|---|---|---|
| 中位・入力15,000＋出力800 | 約 ¥1.0 | 約 340ターン（11回/日） |
| 中位・入力30,000＋出力800 | 約 ¥1.7 | 約 200ターン（7回/日） |
| 上位・入力15,000＋出力1,200 | 約 ¥4.4 | 約 80ターン |

> **含意**: 直近ウィンドウを広く取るほど入力トークンが増えて回数が減る。**コンテキストキャッシュの効果を実測してから既定値を確定する**（`design.md` §10）。上位モデルは相談・計画に限定する前提が価格的にも正しい。

---

## 6. 関連

- `.steering/20260725-ai-personal-support/requirements.md` §3-b（多層ハードキャップ）
- `.steering/20260725-ai-personal-support/design.md` §2-5（`aiCostCore` / `aiCostStore`）
- `docs/operations/line-bots-comparison.md`（Bot ごとの AI 能力差）
- `CLAUDE.md`（Firestore read 規律・デプロイの注意）
