# dormant リッチメニュー画像生成プロンプト

休眠ユーザー（`status == "churned"`）向けの公式LINE リッチメニュー画像を、**既存の `free.jpg` をベースに、テイストを変えずに**生成するためのプロンプト集です。

## 前提

- ベース画像: `/workspaces/marutto-study/data/line-richmenu/free.jpg`
- ベース画像のテイスト: 上部ネイビーのヘッダーバー + 4 ブロック（2×2）の白カード + カラフルでやや立体感のあるイラストアイコン + 各ブロック大きめタイトル + 小さなサブテキスト
- 構成・色味・装飾密度は **`free.jpg` と同等**に保つ
- 変更するのは「ヘッダー文言・ヘッダーバッジ・4 ブロックのラベル・アイコン・サブテキスト」のみ

## 画像仕様

| 項目 | 値 |
|------|------|
| サイズ | 2500 × 1686 px |
| ファイル上限 | 1 MB（`prepare-richmenu-images.ts` が自動圧縮） |
| ブロック構成 | **4 ブロック（2×2）**、各 1250 × 843 px（`free-richmenu.json` と完全一致） |
| 配置先 | `data/line-richmenu/raw/dormant-source.png` |
| 整形コマンド | `npx tsx scripts/prepare-richmenu-images.ts` |

## ブロックレイアウト（free.jpg からの差分）

```
┌────────────── ヘッダーバー（ネイビー） ──────────────┐
│ [バッジ: おやすみ中] またいつでも戻ってこれるよ   📕  │
├──────────────────────┬───────────────────────────────┤
│                      │                               │
│     連続記録          │     配信を再開する           │
│  これまでの記録       │     ← 主CTA（最強調）        │
│   （結晶アイコン）     │     （右向き矢印・amber強調） │
│                      │                               │
├──────────────────────┼───────────────────────────────┤
│                      │                               │
│      使い方           │      プレミアム情報           │
│  はじめてでも安心     │   気が向いたら覗いてみて      │
│   （コンパス）        │   （ロケット）               │
│                      │                               │
└──────────────────────┴───────────────────────────────┘
```

| ブロック | 変更内容 | アイコン |
|---|---|---|
| ヘッダーバッジ | `無料プラン` → `おやすみ中`（ネイビー地に白文字、王冠アイコンは外す or 月マークに） | 三日月 🌙 |
| ヘッダー文言 | `毎日1分で勉強習慣！` → `またいつでも戻ってこれるよ` | 開いた本はそのまま流用可 |
| 左上 | `連続記録` `ストリークを確認` → そのまま `連続記録` `これまでの記録` | 結晶アイコン流用（色味そのまま） |
| **右上（主CTA）** | `テスト範囲設定` `範囲に合わせて対策` → **`配信を再開する`** `タップでまた始まる` | 的アイコン → **右向き矢印 or 再生三角（amber #F59E0B 強調）** |
| 左下 | `使い方` `はじめてでも安心` → そのまま | コンパスアイコン流用 |
| 右下 | `もっと解く` `追加問題はプレミアムで` → `プレミアム情報` `気が向いたら覗いてみて`、`プレミアムで解放！` の赤バッジは外す | ロケットアイコン流用 |

**強調順位**: 右上「配信を再開する」が free.jpg の「もっと解く」と同等以上の主役感を持つようにする。

---

## プロンプト本体（日本語版）

> 添付画像（free.jpg）と一緒に画像生成 AI に投げてください。
> ChatGPT 画像生成 / Gemini 2.5 Flash Image / Nano Banana など、添付画像を参照できるモデル前提。

```
添付した画像（中学生向け学習サービスの公式LINE 無料プラン用リッチメニュー）をベースに、休眠中ユーザー向けバージョンを作ってください。

【厳守事項：テイストは1ミリも変えない】
- 上部ネイビーのヘッダーバー、4ブロック（2×2）の白カード、カラフルでやや立体感のあるアイコン、大きめのタイトル文字、小さなサブテキスト、カード背景の薄いドットパターン — 全てそのまま継承
- 画像サイズ：2500×1686 ピクセル
- 配色トーン・コントラスト・装飾密度はベース画像と同等
- フォント（日本語ゴシック太字）も同じ印象に揃える

【変更点は以下の "テキスト・アイコン・配色アクセント" のみ】

■ ヘッダーバー（上部ネイビー帯）
- 左の黄色いバッジ「👑 無料プラン」→「🌙 おやすみ中」に差し替え（バッジの形・色は黄→淡いグレーに変更し、休止感を出す）
- 中央メイン文言「毎日1分で勉強習慣！」→「またいつでも戻ってこれるよ」
- 右側の開いた本のイラスト → そのまま流用 OK

■ 左上ブロック（流用＋テキスト微調整）
- メインタイトル「連続記録」→ そのまま
- サブテキスト「ストリークを確認」→「これまでの記録」
- 結晶（クリスタル）アイコン → そのまま流用

■ 右上ブロック ※ここが最重要・主CTAに変更
- メインタイトル「テスト範囲設定」→「配信を再開する」
- サブテキスト「範囲に合わせて対策」→「タップでまた始まる」
- アイコン：的（ダーツ）→ 右向きの大きな矢印アイコン または再生三角アイコンに変更
- 配色アクセント：オレンジ→アンバー（#F59E0B）でやや強めに、ベース画像で「もっと解く」が持っていた主役感を引き継がせる
- 視覚的に4ブロックの中で一番目立つ位置にする（明度・彩度・サイズ感で他3つよりひと回り強い印象）

■ 左下ブロック（テキスト・アイコンともそのまま流用）
- メインタイトル「使い方」
- サブテキスト「はじめてでも安心」
- コンパスアイコン → そのまま流用（teal の色味も維持）

■ 右下ブロック（テキスト変更、赤バッジは外す）
- メインタイトル「もっと解く」→「プレミアム情報」
- サブテキスト「追加問題はプレミアムで」→「気が向いたら覗いてみて」
- 右上の赤い「プレミアムで解放！」バッジは削除（休眠ユーザーに押し売り感を与えないため）
- ロケットアイコン → そのまま流用

【トーン】
- ベース画像の元気で前向きな印象は維持しつつ、ヘッダーだけ少し落ち着いた印象に
- 「またいつでも戻ってこれる」感を残しつつ、見た目はベース画像とほぼ同じ賑やかさで OK

【書き出し】
2500×1686 ピクセル、ファイルサイズ 1MB 以下に収まる程度の解像度・圧縮で出力してください。
```

---

## プロンプト本体（英語版）

> 海外の画像生成 AI（DALL-E, Imagen など）を使うときはこちら。

```
Using the attached image (a Japanese LINE Official Account rich menu for "Marutto", a junior-high learning service, free-plan version) as the base, create a "dormant user" variant.

[STRICT RULE: Do not change the visual taste at all]
- Keep: the navy header bar at top, the 2x2 white card layout, the colorful semi-3D icons, large bold titles + small subtitles, the subtle dot pattern on card backgrounds.
- Image size: 2500 × 1686 pixels
- Match the base image in color balance, contrast, and decoration density
- Use the same Japanese gothic bold font style

[Only modify text, icons, and accent colors as follows]

■ Header bar (top navy strip)
- Replace the yellow "👑 無料プラン" (free plan) badge with "🌙 おやすみ中" (on a break). Change badge color from yellow to a calm light gray to signal pause.
- Replace the center text "毎日1分で勉強習慣！" (1 min daily for study habit!) with "またいつでも戻ってこれるよ" (you can always come back).
- Keep the open-book illustration on the right.

■ Top-Left block (reuse + minor text tweak)
- Keep title: "連続記録" (Streak)
- Subtitle: change to "これまでの記録" (your past record)
- Reuse the crystal icon as-is

■ Top-Right block ※ MOST IMPORTANT — make this the visual focal point
- Title: change to "配信を再開する" (Resume delivery)
- Subtitle: change to "タップでまた始まる" (tap to restart)
- Icon: replace the dartboard with a large right-pointing arrow or a play-triangle icon
- Accent color: switch from orange to amber (#F59E0B), slightly stronger. Inherit the visual prominence that "もっと解く" had in the base image.
- This block must be the most eye-catching of the four (slightly higher saturation/size than the other three)

■ Bottom-Left block (keep text and icon)
- Title: "使い方" (How to use)
- Subtitle: "はじめてでも安心" (safe for first-timers)
- Reuse the teal compass icon

■ Bottom-Right block (change text, remove red badge)
- Title: change "もっと解く" to "プレミアム情報" (Premium info)
- Subtitle: change "追加問題はプレミアムで" to "気が向いたら覗いてみて" (peek anytime you feel like it)
- Remove the red "プレミアムで解放！" badge in the top-right corner (avoid a hard sell to dormant users)
- Reuse the rocket icon

[Tone]
- Maintain the upbeat, friendly impression of the base. Only the header bar should feel slightly calmer.
- The overall feel should remain almost as lively as the base — a gentle dormant variant, not a somber redesign.

[Output]
Export at 2500 × 1686 pixels, at a resolution/compression that stays under 1 MB.
```

---

## 出力検証チェックリスト

採用前に必ず確認してください:

- [ ] 画像サイズが 2500 × 1686 px（または `prepare-richmenu-images.ts` で 1MB 以下に整形できる）
- [ ] 全体のテイスト（配色・装飾・密度）が `free.jpg` とほぼ同じ印象
- [ ] **右上「配信を再開する」が 4 ブロック中で最も視覚的に強い**
- [ ] ヘッダーバッジが「無料プラン」から「おやすみ中」に変わっている
- [ ] ヘッダー文言が「またいつでも戻ってこれるよ」に変わっている
- [ ] 右下の「プレミアムで解放！」赤バッジが削除されている
- [ ] 結晶・コンパス・ロケットアイコンの色味が `free.jpg` と一致

検証 OK なら以下を実行:

```bash
# 1. 生成画像を所定の場所に配置
mv ~/Downloads/generated_dormant.png data/line-richmenu/raw/dormant-source.png

# 2. 2500×1686 / 1MB 以下に整形
npx tsx scripts/prepare-richmenu-images.ts

# 3. LINE 側に登録
npx tsx scripts/manage-line-richmenu.ts create dormant
npx tsx scripts/manage-line-richmenu.ts upload dormant data/line-richmenu/dormant.jpg
# (出力された richMenuId を控える)

# 4. 環境変数に登録
# - functions/.env に LINE_RICHMENU_DORMANT_ID=richmenu-xxxxx を追記
# - Cloud Functions 本番にもデプロイ時に同 ID を Secret として登録
```

詳細手順は `docs/operations/line-richmenu.md` §dormant メニュー追加手順を参照。

## トラブルシュート

| 症状 | 原因 | 対処 |
|------|------|------|
| 全体の雰囲気が変わってしまう（落ち着きすぎ / 暗くなる） | model が「dormant」を悲観的に解釈しすぎ | プロンプトの「ベース画像とほぼ同じ賑やかさで OK」をより強調 |
| 右上の主CTA感が弱い | 強調指示が弱い | プロンプト末尾に「右上のブロックを他3ブロックよりサイズ感・彩度ともワンランク強く」と追記 |
| 「おやすみ中」バッジが派手すぎる | 黄→グレー変更が無視される | 「badge background must be soft warm gray, not yellow」と明示 |
| アイコンが差し替えで全別物に | model がアイコン全体を作り直す | 「reuse the original icons except the dartboard, which becomes a right-arrow」と明示 |
| 1MB を超える | 写真的なノイズ・微細パターンが多い | `prepare-richmenu-images.ts` が自動で JPEG q=70 まで圧縮するが、超える場合は素材の細かい質感を減らす |
