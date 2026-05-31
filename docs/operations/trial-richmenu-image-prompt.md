# trial リッチメニュー画像生成プロンプト（プレミアム導線追加版）

trial ユーザー（`planSource == "trial"`）向け公式LINE リッチメニュー画像を、
**既存の `trial.jpg` をベースに、テイストを変えずに**「プレミアム」ボタンを
追加するためのプロンプト集です。

## 前提

- ベース画像: `/workspaces/marutto-study/data/line-richmenu/trial.jpg`
- ベース画像のテイスト: 上部ネイビーのヘッダーバー（「お試し中」バッジ + 「7日間、まるごと体験中!」+ 紙飛行機・砂時計）+ **6 ブロック（3×2）** の白カード + カラフルでやや立体感のあるイラストアイコン + 各ブロック大きめタイトル + 小さなサブテキスト
- 構成・色味・装飾密度は **`trial.jpg` と同等**に保つ
- 変更するのは **右上ブロックの「テスト範囲設定」を「プレミアム」に差し替え** のみ

## なぜ右上を差し替えるか

| 候補 | 採否 |
|---|---|
| 右上「テスト範囲設定」 | ✅ **採用**（設定・サポート ページから到達可能なため代替路あり） |
| 右下「設定・サポート」 | ❌ 設定の入口がメニューから消えるとサポート性が落ちる |
| 中下「成績・記録」 | ❌ trial ユーザーの満足感に直結、削るべきでない |
| 上段の「追加で解く」「苦手を復習」 | ❌ trial の主要価値、削るべきでない |

## 画像仕様

| 項目 | 値 |
|------|------|
| サイズ | 2500 × 1686 px |
| ファイル上限 | 1 MB（`prepare-richmenu-images.ts` が自動圧縮） |
| ブロック構成 | **6 ブロック（3×2）**、各 833×843 px（`trial-richmenu.json` と完全一致） |
| 配置先 | `data/line-richmenu/raw/trial-source.png`（既存と同じパス） |
| 整形コマンド | `npx tsx scripts/prepare-richmenu-images.ts` |

## ブロックレイアウト（trial.jpg からの差分）

```
┌───────────── ヘッダーバー（ネイビー） ──────────────┐
│ [お試し中] 7日間、まるごと体験中!     ✈ ⏳          │ ← 変更なし
├──────────┬──────────────┬──────────────────────────┤
│ 追加で解く │  苦手を復習  │  ✨ プレミアム            │ ← 右上のみ差し替え
│今すぐもう1問│間違えた問題から│  ¥680/月でずっと使う      │
│  🚀       │   🎯        │  👑（amber強調）          │
├──────────┼──────────────┼──────────────────────────┤
│じっくり学ぶ│  成績・記録  │  設定・サポート           │ ← 変更なし
│暗記＋クイズ│正答率・連続記録│  通知・学年変更          │
│  📖       │   📊        │   ⚙                       │
└──────────┴──────────────┴──────────────────────────┘
```

| ブロック | 変更内容 | アイコン |
|---|---|---|
| ヘッダー全体 | そのまま流用（変更なし） | 紙飛行機・砂時計そのまま |
| 左上「追加で解く」 | そのまま | ロケット流用 |
| 中上「苦手を復習」 | そのまま | 的アイコン流用 |
| **右上 ※差し替え対象** | `テスト範囲設定` `範囲に合わせて対策` → **`プレミアム`** `¥680/月でずっと使う` | クリップボード → **王冠 👑（amber #F59E0B 強調）** |
| 左下「じっくり学ぶ」 | そのまま | 本アイコン流用 |
| 中下「成績・記録」 | そのまま | チャートアイコン流用 |
| 右下「設定・サポート」 | そのまま | 歯車アイコン流用 |

**強調順位**: 右上「プレミアム」が 6 ブロック中で最も視覚的に強くなるようにする（amber 強めの背景、王冠アイコンを大きめに）。trial 中ユーザーが本登録に進む唯一の物理ボタン入口なので、迷わずタップできる明度・サイズに。

---

## プロンプト本体（日本語版）

> 添付画像（`trial.jpg`）と一緒に画像生成 AI に投げてください。
> ChatGPT 画像生成 / Gemini 2.5 Flash Image / Nano Banana など、添付画像を参照できるモデル前提。

```
添付した画像（中学生向け学習サービス「チャットでスタディ」公式LINE のお試し中ユーザー向けリッチメニュー）をベースに、右上の「テスト範囲設定」ブロックだけを「プレミアム」案内ボタンに差し替えてください。

【厳守事項：テイストは1ミリも変えない】
- 上部ネイビーのヘッダーバー、6ブロック（3×2）の白カード、カラフルでやや立体感のあるアイコン、大きめのタイトル文字、小さなサブテキスト、カード背景の薄いドットパターン — 全てそのまま継承
- 画像サイズ：2500×1686 ピクセル
- 配色トーン・コントラスト・装飾密度はベース画像と同等
- フォント（日本語ゴシック太字）も同じ印象に揃える
- ヘッダーバー、左上「追加で解く」、中上「苦手を復習」、左下「じっくり学ぶ」、中下「成績・記録」、右下「設定・サポート」の 5 ブロックは一切変更しない（テキスト・アイコン・色・余白すべて完全に同じ）

【変更点は右上ブロックのみ】

■ 右上ブロック ※ここを差し替え・主CTA級の存在感に
- メインタイトル「テスト範囲設定」→「プレミアム」（少し大きめのフォント、王冠の絵文字感を意識した華やかさ）
- サブテキスト「範囲に合わせて対策」→「¥680/月でずっと使う」
- アイコン：クリップボード → 王冠（クラウン）アイコン。立体感のあるイラスト調、amber/ゴールド系の暖色（#F59E0B 〜 #FBBF24 の範囲）
- カード背景：他5ブロックは白だが、ここだけ淡いアンバー（例：#FFF7E6 〜 #FEF3C7）の薄いグラデーション or 白＋amber ライン枠で「特別感」を出す
- 右上隅に小さな星 ✨ や輝きエフェクトを足して、6ブロックの中で一番目を引くようにする（ただしけばけばしくしない、ベース画像の上品さは維持）
- 視覚的に他5ブロックよりひと回り存在感が強い印象（明度・彩度・装飾密度で「ここを押せばプレミアムに進める」と直感で分かるレベル）

【トーン】
- ベース画像のお試し中らしい元気で前向きな印象は全部維持
- 右上「プレミアム」だけ、他5ブロックよりひと段階華やか（王冠＋淡いゴールド背景）にして「お得な本登録への入口」感を出す
- 押し売り感は出さない（金額表記はサブテキストにとどめ、デカデカと「今すぐ買う！」のようなテンションにはしない）

【書き出し】
2500×1686 ピクセル、ファイルサイズ 1MB 以下に収まる程度の解像度・圧縮で出力してください。
```

---

## プロンプト本体（英語版）

> 海外の画像生成 AI（DALL-E, Imagen など）を使うときはこちら。

```
Using the attached image (a Japanese LINE Official Account rich menu for "Chat de Study", a junior-high learning service, trial-user version) as the base, replace ONLY the top-right block from "テスト範囲設定" (Test scope setting) to a "Premium" guide block.

[STRICT RULE: Do not change the visual taste at all]
- Keep: the navy header bar at top, the 3×2 white card layout (6 blocks), the colorful semi-3D icons, large bold titles + small subtitles, the subtle dot pattern on card backgrounds.
- Image size: 2500 × 1686 pixels
- Match the base image in color balance, contrast, and decoration density
- Use the same Japanese gothic bold font style
- Do NOT modify the header, the top-left "追加で解く", top-center "苦手を復習", bottom-left "じっくり学ぶ", bottom-center "成績・記録", or bottom-right "設定・サポート" blocks (text, icons, colors, spacing must remain exactly the same).

[Only the top-right block is changed]

■ Top-Right block ※ replace and make it the most prominent
- Title: change "テスト範囲設定" to "プレミアム" (slightly larger font, with a regal/premium feel)
- Subtitle: change "範囲に合わせて対策" to "¥680/月でずっと使う" (Use forever at ¥680/month)
- Icon: replace clipboard with a crown icon. Semi-3D illustration, amber/gold warm tones (#F59E0B to #FBBF24 range).
- Card background: while the other 5 blocks are white, this one should have a soft amber gradient (e.g., #FFF7E6 to #FEF3C7) or a white background with an amber border, signaling "special".
- Add a small star ✨ or sparkle effect in the top-right corner of this block. Make it the most eye-catching of the 6 blocks (but stay tasteful — the base image's refinement should be preserved).
- This block must feel one tier stronger in visual weight than the other 5 (saturation/brightness/decoration density), so users instantly understand "this leads to the premium plan".

[Tone]
- Maintain the upbeat, friendly impression of the trial menu
- Only the top-right "プレミアム" block should feel one notch more elegant (crown + soft gold background), signaling "the gateway to a great-value paid plan"
- Avoid a hard sell — keep the price in the subtitle, don't blast "BUY NOW!" energy

[Output]
Export at 2500 × 1686 pixels, at a resolution/compression that stays under 1 MB.
```

---

## 出力検証チェックリスト

採用前に必ず確認してください:

- [ ] 画像サイズが 2500 × 1686 px（または `prepare-richmenu-images.ts` で 1MB 以下に整形できる）
- [ ] **右上「プレミアム」が 6 ブロック中で最も視覚的に強い**（明度・彩度・装飾密度）
- [ ] 全体のテイスト（配色・装飾・密度）が `trial.jpg` とほぼ同じ印象
- [ ] ヘッダー（「お試し中」「7日間、まるごと体験中!」、紙飛行機・砂時計）が一切変わっていない
- [ ] 左上「追加で解く」、中上「苦手を復習」、左下「じっくり学ぶ」、中下「成績・記録」、右下「設定・サポート」の 5 ブロックが ベース画像と完全に同じ
- [ ] 右上のサブテキストが「¥680/月でずっと使う」になっている（金額が正しい）
- [ ] 王冠アイコンが立体感のあるイラスト調で、amber/ゴールド系
- [ ] ヘッダーバーの色味・パターンが `trial.jpg` と一致

---

## 採用後の差し替え手順

1. **生成画像を保存**: `data/line-richmenu/raw/trial-source.png` に上書き（既存と同じパス）
2. **整形**:
   ```bash
   npx tsx scripts/prepare-richmenu-images.ts
   ```
   → `data/line-richmenu/trial.jpg` が更新される
3. **trial-richmenu.json の右上 area を「プレミアム」リンクに変更**:
   ```json
   {
     "bounds": { "x": 1667, "y": 0, "width": 833, "height": 843 },
     "action": {
       "type": "uri",
       "label": "プレミアム",
       "uri": "https://liff.line.me/2009587166-k51bH4LC"
     }
   }
   ```
4. **新しい richMenu を作成**:
   ```bash
   npx tsx scripts/manage-line-richmenu.ts create trial
   # → 新 richMenuId を出力
   ```
5. **画像アップロード**:
   ```bash
   npx tsx scripts/manage-line-richmenu.ts upload trial ./data/line-richmenu/trial.jpg
   ```
6. **`functions/.env` の `LINE_RICHMENU_TRIAL_ID` を新 ID に更新**
7. **functions 再デプロイ**:
   ```bash
   FUNCTIONS_DISCOVERY_TIMEOUT=600 firebase deploy --only functions
   ```
8. **既存 trial ユーザーへ再リンク**（メニュー切替を即時反映）:
   ```bash
   npx tsx scripts/migrate-existing-users-to-trial.ts --confirm --skip-flex --include-zero-answers
   # または自分だけ:
   npx tsx scripts/manage-line-richmenu.ts sync-plan U429b1d951fc7236c9e8e85e5ca96b910 trial --until 2026-06-07T23:59:59+09:00
   ```
9. **LINE アプリでメニューが切り替わったことを目視確認**
