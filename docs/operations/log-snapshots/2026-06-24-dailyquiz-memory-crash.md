# dailyQuiz メモリ超過クラッシュ（一部ユーザー未配信）— 2026-06-24

## 症状
管理人（`U429b1d951fc7236c9e8e85e5ca96b910` / preferredHour=6）と別ユーザー（ひなた）に、
水曜 2026-06-24 の毎日1問が届かなかった。水曜は週3配信日（月水金）で配信対象日。

## 原因（確定）
`dailyQuiz` 系 cron が **デフォルト 256 MiB** で動作しており、人数の多い時刻枠で
`runDailyQuiz` の `Promise.allSettled(eligibleDocs.map(selectAndSendQuestion))`（全ユーザー一斉並列）が
メモリを超過し **途中で `crash`**。クラッシュ時点で未処理だったユーザーには push されない＝一部だけ未配信。

水曜(6/24 JST)各枠の結果（Cloud Logging REST で取得）:

| 枠 | 結果 |
|---|---|
| dailyQuiz06(6時) | ❌ crash `Memory limit of 256 MiB exceeded`（2026-06-23T21:00:15Z） |
| dailyQuiz07(7時) | ✅ users=122 success=122 regularDeliveryDay=true |
| dailyQuiz16(16時) | ✅ users=91 success=91 |
| dailyQuiz18(18時) | ❌ crash 256 MiB 超過（2026-06-24T09:00:12Z, 268MiB used） |
| dailyQuiz19(19時) | ✅ users=1 |
| dailyQuiz20(20時) | ❌ crash 256 MiB 超過（2026-06-24T11:00:17Z, 268MiB used） |

管理人は preferredHour=6 → クラッシュした 6 時枠に該当し未配信。

クラッシュ初出は 6/21 頃（6/21 20時, 6/22 18/20時, 6/24 6/18/20時）。回帰の背景: ①ユーザー増（朝枠90〜120人）
②`getGradeQuestionDocs` の subject×grade 単位インメモリ TTL キャッシュ ③数学 MathJax 全学年化で問題データ大型化。

## 対処（2026-06-25 デプロイ済み）
`functions/src/dailyQuiz.ts`:
1. 全 `dailyQuiz06〜21` に `.runWith({ memory: "512MB" })` を付与。
2. `runDailyQuiz` の配信を `DELIVERY_CHUNK_SIZE=20` 件ずつ逐次チャンク化（ピークメモリ抑制）。

デプロイ: `firebase deploy --only functions:dailyQuiz06,...,dailyQuiz21`（Instagram secret 回避でスコープ指定）。
デプロイ後 availableMemoryMb=512 を Cloud Functions API で確認済み。

## 経過観察ポイント
- 翌日以降、`dailyQuiz` 系に `Memory limit` ERROR が出ないこと、各枠 done の success が users と一致すること。
- 将来さらにユーザー/問題データが増えたら 512MB でも再発しうる → その時は 1GB 化 or CHUNK_SIZE 縮小。
