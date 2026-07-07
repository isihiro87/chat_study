# ムビスタ × 公式LINE「同一AIが見守る」統合設計メモ

> 状態: **アイデア／設計中**（2026-07-07 時点）。実装着手前の構想。ユーザー承認済みで着手予定。
> 目的: 授業動画アプリ **ムビスタ**（別リポジトリ `movie_study` → `chatstudy.jp/mubista`）と
> 公式LINE（本リポジトリ）の学習記録・AI文脈を共有し、**「同じ先生AIが、動画でもLINEでも
> 自分の勉強を分かってサポートしてくれている」**とユーザーが感じる体験をつくる。
>
> 関連: `docs/ideas/ai-chatbot-v2-design.md`（本統合は §2 の「③ユーザー文脈」「⑦記憶」の拡張）。

---

## 0. なぜ今これができるか（前提の整理）

- **両サービスが同一 Firebase プロジェクト `chatstudy-63477` / 同一 Firestore を共有**している
  （ムビスタの hosting `mubista.web.app` と LINE の Functions が同居）。
- LINE 側の `users/{uid}` には既に **`aiChat.history`（会話履歴）・`lastQuestion`（直近の出題と正解）・
  `testScope`・`answers`** が蓄積され、`buildSystemPrompt(userData)`（`functions/src/aiChatPrompt.ts`）が
  それを Gemini に注入する仕組みが完成している。
- したがって **ムビスタの学習記録を同じ `users/{uid}` に書き込めば、LINE 側 AI は追加スキャンなしで
  「ムビスタでの学習」を認識できる**（read 規律に沿う＝毎ターンのスキャン不要・既に取得済みの user doc に相乗り）。

---

## 1. 全体像

```
ムビスタ (chatstudy.jp/mubista)                     公式LINE (marutto-study / 本リポジトリ)
  │ 視聴・クイズ正誤・AI会話 を送信                     │ 既存 webhook + Gemini (aiChat)
  ▼                                                   ▼
 recordMubistaProgress (新設 onCall/onRequest Function・同居)   buildSystemPrompt が users/{uid} を読む
  │                                                   ▲
  └────────► Firestore users/{uid}.mubista ───────────┘
             ・視聴した単元/章・進捗率・最終視聴
             ・クイズ正誤（単元×問題ごとの試行回数・直近正誤）
             ・ムビスタAIとの会話の軽い要約（任意）
```

- LINE の先生プロンプトに **「ムビスタでの学習」節**を1つ足すだけで、
  「昨日ムビスタで鎌倉幕府を見て、御恩と奉公のクイズを2回間違えてたね。もう一度確認しようか」
  と声かけできる。
- 逆に **ムビスタ側 AI**（`/api/gemini` プロキシ）にも LINE の `answers` / `aiChat.history` の要約を
  渡せば双方向になる（フェーズ4）。

---

## 2. 本質的な課題は1つ＝ID連携（誰のブラウザか）

ムビスタにはログインが無く、`users/{uid}` の uid は LINE 由来。ブラウザと uid を繋ぐ必要がある。
**親アカウント連携推進の方針**と、**本リポジトリに LINE Login OAuth（`/auth/line/callback`）+ LIFF 基盤が
既に完備**されている点が噛み合う。

### 採用方式: LINEログイン / LIFF による連携（推奨A）
- 公式LINE の先生が「今日はムビスタで動画を見よう」と **本人トークン付きリンク**を送る
  → タップで開くと LINE ログイン済みなので **uid が自動で判明**（`useLiffAuth` / OAuth 基盤を流用）。
- この導線自体（LINEが課題を出す→ムビスタで学ぶ→記録がLINEに戻る）が体験の統一感を生む。
- **補助B（コード連携）**: LINEで「連携」→6桁コード→ムビスタで1回入力（LINE外から直接ムビスタに来た人向けの保険）。

### uid の受け渡し（ムビスタ側）
- ムビスタは静的 hosting なので、**LIFF ではなく「短命の連携トークン」方式**が軽い:
  1. LINE 側 `issueMubistaLink`（onRequest, reply 経由 or LIFF）で **署名付き短命トークン**（uid入り・15分）を発行し、
     `https://chatstudy.jp/mubista/?lt=<token>` を送る。
  2. ムビスタが起動時に `lt` を Function `redeemMubistaLink` に渡し、**長命の mubista セッション ID（httpOnly 相当の
     localStorage 保存トークン）**と交換。以後はこのセッションで uid を解決して `recordMubistaProgress` を叩く。
  3. トークンは HMAC 署名（Secret Manager の鍵）で改ざん不可。uid はトークン内に隠蔽（ブラウザに生 uid を晒さない）。

---

## 3. データモデル（`users/{uid}.mubista`）

read 規律のため **1 user doc の 1 フィールドに集約**（配列は上限・要約重視。answers のような別コレクション全走査はしない）。

```
users/{uid}.mubista = {
  lastViewedAt: Timestamp,
  lastUnit: "kamakura-bakufu",              // 直近に見た単元
  units: {                                   // 単元ごとの軽いサマリ（最大 ~40 件で古いものから間引き）
    "kamakura-bakufu": {
      title: "鎌倉幕府の成立",
      progress: 0.8,                         // 視聴進捗（0..1）
      viewedAt: Timestamp,
      quiz: { asked: 4, correct: 3, wrongConcepts: ["御恩と奉公"] }  // 直近セッションの集計
    },
    ...
  },
  recentWrong: [                             // 横断の「直近まちがえた概念」最大10件（LINE声かけ用）
    { unit: "kamakura-bakufu", concept: "御恩と奉公", at: Timestamp }
  ],
  aiSummary?: string                         // ムビスタAIとの会話の軽い要約（任意・フェーズ4）
}
```

- **書き込みは Function 側で正規化**（クライアントから来た生イベントを検証し、units をマージ、上限で間引き）。
- **LINE プロンプト注入**（`buildSystemPrompt`）は units/recentWrong から数行に要約するだけ＝トークン節約。

---

## 4. セキュリティ / プライバシー（中学生・保護者連携前提）

- **生 uid をブラウザに出さない**（署名トークン経由）。`recordMubistaProgress` はセッショントークンで uid を解決。
- Firestore セキュリティルール: `users/{uid}.mubista` は **Functions（Admin SDK）経由のみ書き込み**、
  クライアント直書き禁止。読みも本人/Functions のみ。
- **保護者連携**: 親アカウントが子の学習を見られる導線（既存の親向け LP / trial-drip-parent の思想）に接続。
  学習記録の共有範囲・削除手段を保護者向けに明示（フェーズ2以降で `/for-parents` と整合）。
- LINE 配信枠: **フェーズ1〜4 は reply（無料枠）＋データ共有のみ**。
  **push での能動的な声かけ（「昨日の続きやろう」通知）は配信枠を消費するのでフェーズ5＝有料ユーザー向け機能**に切り出す。

---

## 5. 段階プラン

| フェーズ | 内容 | 主リポジトリ | 目安 |
|---|---|---|---|
| **1** | 学習イベント基盤: `recordMubistaProgress` Function 新設 + `users/{uid}.mubista` スキーマ + ムビスタから送信 | 両方 | 1日 |
| **2** | ID連携: `issueMubistaLink`/`redeemMubistaLink`（署名トークン）+ ムビスタ起動時連携 + 補助コード連携 | 両方 | 1〜2日 |
| **3** | LINE 先生プロンプトに「ムビスタ学習」節を注入 + 先生ペルソナ統一（名前・口調） | LINE | 1日 |
| **4** | 双方向: ムビスタ AI（/api/gemini）に LINE の answers/history 要約を渡す | 両方 | 0.5日 |
| **5**（後日・有料） | push 声かけ（「昨日の鎌倉の続きやろう」）を有料ユーザー限定で | LINE | — |

- 各フェーズは **動くものを見てから次へ**。フェーズ1で「ムビスタで解いた記録が LINE の user doc に貯まる」ところまで。

---

## 6. 先生ペルソナの統一（確定 2026-07-07）

**共通の名前＝「スタ先生」（愛称「スタ」）**。両サービスで同一人格として運用し「同じAIが見守る」体験の核にする。

- **由来**: サービス名 `チャットでスタディ` / `ムビ**スタ**` に埋め込まれた「スタ」。ブランド想起で"同じ頭脳"を無意識に伝える。
- **キャラ**（LINE 既存設定 `aiChatPrompt.ts` の「あなたのキャラクター・話し方」を踏襲）:
  中学生の友だちのお兄さん・お姉さんのような距離感／前向き・簡潔（1返信2〜4文）／絵文字控えめ／
  否定しない・寄り添う／難語はやさしく言いかえ。**堅い「先生」より親しみ重視**なので、地の文では
  愛称「スタ」も使う（「スタだよ」）。性別は固定しない。
- **反映先**:
  - LINE: `functions/src/aiChatPrompt.ts` の「あなたのキャラクター・話し方」冒頭に「あなたの名前は『スタ先生』」を明記。
  - ムビスタ: `movie_study/mubista-prototype.html` の AI チャット（`Gemini` システムプロンプト `lessonContext()` 付近）と
    「先生に質問」FAB のラベル/紹介文に「スタ先生」。FAB アイコン🤖の隣に名前を添える。
  - 一人称・呼びかけ・励ましのトーンを両者で揃える（同じ語尾・同じ距離感）。
- **UI 表示例**: ムビスタ「スタに質問」／LINE「スタだよ、昨日ムビスタで見た鎌倉どうだった？」

## 7. 未確定・要検討

- ムビスタ AI 会話要約をどこまで持つか（プライバシーとトークンのバランス）。
- 連携解除 UI（子・保護者双方）。
- read/コスト: `recordMubistaProgress` は 1 視聴で user doc を 1 read + 1 write 程度に抑える（セッション解決込みで数 read 以内）。
- スタ先生の見た目（アイコン/立ち絵）を作るか（現状ムビスタ FAB は🤖絵文字）。作るなら Codex 依頼。
