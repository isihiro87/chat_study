# lineWebhook ログスナップショット（2026-06-01 / 06-02）

> **目的・なぜ保存したか**
> `firebase functions:log` はページングが壊れていて**狙った日時を再取得できない**（`--lines` を変えるたびに別の窓が返る）うえ、Cloud Functions のログは保持期間が限られる。無反応調査の生データが将来取れなくなる前に、**2026-06-01 / 06-02 のログをこのフォルダに固定保存**した。
>
> **⚠️ 今後この2日分のログは再取得しないこと**（CLI では確実に取れない／コストと時間の無駄）。分析が必要なら下記の保存ファイルを読む。

- 取得・保存日: 2026-06-03（JST）
- 取得方法: `firebase functions:log --only lineWebhook --lines {0,1500,2000,4000,6000}` を複数回フェッチ→結合→重複除去→時刻順
- 生データ（アプリレベルイベント 256 行）: [`lineWebhook-events-2026-06-01_02.log`](./lineWebhook-events-2026-06-01_02.log)
  - 内容: `[lineWebhook]` / `[aiChat]` の意味あるイベント行（duplicate・unfollow・unhandled text・restart・topic書込失敗・各種 locked 等）。
  - 除外: `Function execution started` / `took N ms / status 200` の定型行（件数・統計のみ下表に集約。生行は量が多く価値が低いため非保存）。

## カバレッジ（取得できた時間帯と欠損）

| 日付 | 取得できた時間範囲(UTC) | 欠損（≒深夜・低トラフィック帯） |
|---|---|---|
| 2026-06-01 | 03:52 〜 21:05 | 00:00–03:52, 21:05–24:00 |
| 2026-06-02 | 04:30 〜 23:57 | 00:00–04:30 |

※ 欠損はいずれも深夜帯で配信・操作がほぼ無い時間。主要な活動時間帯は網羅。

## 日別メトリクス

| 指標 | 2026-06-01 | 2026-06-02 |
|---|---|---|
| 稼働ユニークユーザー | 56 | 34 |
| 関数実行回数（捕捉分） | 1,262 | 801 |
| 平均実行時間 | 269 ms | 620 ms |
| 実行 ≥2s / ≥3s / ≥5s | 12(1.0%) / 3(0.2%) / 2(0.2%) | 42(5.2%) / 18(2.2%) / 11(1.4%) |
| handleAnswer duplicate（再タップ） | 16 | 59 |
| **reply失敗・トークン失効** | **0** | **0** |
| topic undefined で answers 書込失敗 | 3 | 2 |
| unhandled text（自由文がAI未到達） | 49 | 18 |
| restart intent 検知 | 1 | 4 |
| unfollow（blocked 化） | 22 | 13 |

## 調査結論（このスナップショットから確定したこと）

1. **「答えても時々無反応」はハード障害ではない**：両日とも reply失敗・トークン失効は **0件**。返信は成功しており、無反応は LINE 側（応答モード=チャットの手動対応 standby）由来か、遅延の体感。
   - 根本対策: LINE Official Account の**応答モードをチャット→OFF（Bot主体）**にする（基本OFF、確認時のみON運用で合意）。
2. **topic undefined バグ**（answers 書込失敗 = 回答未記録 → onAnswerCreated 未発火）を確認 → `lineWebhook.ts` の `answers.add` で `subject/grade/topic ?? null` フォールバックを入れて**修正済み・デプロイ済み**。
3. **unhandled text は AI デプロイ前（06-02 14:41 UTC 以前）の旧コード由来**。AI チャットボット稼働後は自由文を AI が処理するため減少。
4. 参考シグナル（別タスク候補）: unhandled text に「出題範囲が設定できません」「範囲が違う!」等の**範囲設定への不満**が複数。CLAUDE.md 既知の「範囲設定LIFFが topic-registry を使い data/content と食い違う」問題と整合。

## 関連

- 無反応の原因切り分け・対策の経緯は本スナップショットと同時期の会話で実施。
- コード修正: topic フォールバック（`functions/src/lineWebhook.ts`）、AI プロンプト強化（`functions/src/aiChatPrompt.ts`）。
