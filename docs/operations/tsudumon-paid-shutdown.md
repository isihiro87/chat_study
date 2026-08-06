# つづもん 有料受付の停止（2026-08-06）

## なぜ止めたか

2026-08-04 15:01、一問一答の登録者 3,289人へ先行公開を告知。2日後の実績:

```
告知 3,289 → 友だち追加 64（1.9%）→ 教材を開いた 21 → 体験 14 → 課金 0
```

追加した64人のうち **44人（69%）はあいさつを受け取ったあと1歩も動かなかった**。
数字の詳細は `log-snapshots/2026-08-06-tsudumon-launch-2days.md`。

有料の単独プロダクトとしては畳み、**既存の公式LINE（一問一答・3,000人・無料）の
充実に寄せる**判断をした。

**止めた時点で Stripe のサブスクは1件も存在しない**（課金・トライアル中・支払い失敗
すべてゼロ）。返金も解約も発生していない。

## 何を止めて、何を残したか

| | 判断 |
|---|---|
| 新規のお申し込み | **停止** |
| つづもんBot・教材 | **残す**。既存の64人はそのまま使える |
| 体験ライセンス14人 | **失効させず 2029-12-31 まで延長**（8/15 に切れるはずだった） |
| 一問一答（3,000人） | **無風**。挙動・文言とも一切変えていない |
| Stripe アカウント | 触らない（プレミアムと相乗り） |
| お詫び配信 | **送っていない**（ユーザー判断・2026-08-06 時点） |

体験の14人を延長したのは、**失う売上がゼロ**で、かつ全員が実際に教材を開き、
うち6人は翌日以降も戻ってきていたため。撤回に「使えなくなる」を重ねない。

## 単一スイッチ

`functions/src/tsudumonPaidFlow.ts` の `TSUDUMON_PAID_FLOW_ENABLED = false`。

これが効く場所:

| ファイル | 変わること |
|---|---|
| `tsudumonStripe.ts` | `tsudumonCreateCheckout` が 410 |
| `tsudumonParent.ts` | `tsudumonParentCheckout` が 410（配布ずみの保護者URL対策） |
| `tsudumonTrialReminder.ts` | 「あすで終了／1,280円で続ける」を出さない（子・保護者とも） |
| `tsudumonLifecycle.ts` | 未体験フォロー（2日後・7日後）を**送らない**。期限後の再開導線も出さない |
| `tsudumon/followHandlers.ts` | あいさつから体験導線を外す |
| `tsudumonActivate.ts` | `trial_used` の案内から「月額プランで」を外す |
| `tsudumonParentCardHandler.ts` | きょうだい価格（980円）の案内を出さない |

⚠️ `tsudumonLifecycle` は**送信済みフラグを立てずに素通り**させている。
再開したとき、本来届くはずだった人へ改めて送れる。

## Web 側（pdf-workbook・別リポジトリ）

| ファイル | 変えたこと |
|---|---|
| `lp/index.html` | 冒頭に受付停止バナー／CTAを `/ref/04/` へ／価格セクションの申込ボタン削除／FAQ 5件を書き換え |
| `web/account/index.html` | `PAID_FLOW_ENABLED=false`。`?do=subscribe` で確認カードへ進ませない |
| `web/parents/index.html` | 冒頭にバナー／`PAID_FLOW_ENABLED=false` で決済ボタンを出さない |

LPのFAQ構造化データ（JSON-LD）は `node lp/build-lp.mjs` が本文から再生成する。
**本文を直せば検索結果側も直る**（本文とJSON-LDが食い違わない仕組み）。

## 再開するときの手順

1. `TSUDUMON_PAID_FLOW_ENABLED = true`
2. テストを戻す（**受付停止を前提にした assert が3つある**）
   - `tsudumonWebhook.test.ts` … あいさつが `/start/` を含む版へ（旧版は d32fce3a）
   - `tsudumonMessages.test.ts` … 期限終了フォローに再開導線
3. Web の `PAID_FLOW_ENABLED` を true、バナーとCTAを戻す（`lp/` `web/account/` `web/parents/`）
4. Stripe 側で商品・価格が有効か確認
5. LP のFAQ本文を戻して `node lp/build-lp.mjs`

## 未処理（2026-08-06 時点）

- **`tsudumonLpChatCore.ts`（LPのAIチャット）が未対応。** 価格と申込を案内する
  システムプロンプトのままなので、LP訪問者に「1,280円で登録できる」と答えうる。
  作業時点でこのファイルは編集中だったため触っていない。**最優先で直すこと。**
- リッチメニュー（`scripts/setup-tsudumon-richmenu.ts`）は未確認。
  体験・決済へのボタンが残っていないか要点検。
- `web/handoff/index.html` に価格表記が残っている（現在ほぼ未使用の旧ページ）。
- Stripe の商品・価格は有効なまま。コード側で塞いでいるので課金は起きないが、
  ダッシュボードで archive しておくと二重の歯止めになる。
