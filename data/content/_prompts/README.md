# 一問一答コンテンツ生成プロンプト集

教材PDF（各教科の `src/data/subjects/.../*.pdf`）と units の解説ソースをもとに、`data/content/{教科}/grade{N}/.../*.json` の **`flashcards`（一問一答カード）と `quiz.questions`（4択）を、できるだけ多く**埋めるためのプロンプト集です。

- 各プロンプトは **単元（unit）ごと**に1ファイル（例: `science-g1-1-biology.md`）。1単元＝原則1章ぶんの教材PDF。Claude Code（本リポジトリ内）に貼り付けて実行する想定。
- 各プロンプトには、その単元の**実際の中身（`src/data/subjects` のトピックの解説見出し・要点 keyPoints・既存 flashcards/quiz 件数）を埋め込み済み**。Web版の既存 flashcards/quiz が一問一答・4択への主要な変換元になる。
- このREADMEは**全プロンプト共通のルール**。各プロンプトの冒頭で「まず README.md を読む」と指示している。
- 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`（flashcards 20件 + quiz 24件）。

計 **33 単元プロンプト / 186 トピック**。

| 教科 | 単元プロンプト | トピック数 |
|---|---|---|
| 理科 | `science-g{1,2,3}-*.md`（中1: biology/chemistry/physics/earth ほか 計12単元） | 16 / 26 / 23 |
| 数学 | `math-g{1,2,3}-*.md`（計11単元） | 13 / 15 / 18 |
| 地理 | `geography-g{1,2}-*.md`（中3は公民のため無し・計7単元） | 25 / 21 |
| 英語 | `english-g{1,2,3}.md`（単元層が無いため学年単位・計3ファイル） | 13 / 6 / 10 |

> 英語のみ `units/` 相当の単元フォルダが無いため、学年単位（`english-g{N}.md`）で1ファイルにまとめている。

---

## 0. 大前提

- **対象は `data/content/{教科}/grade{N}/` 配下の既存スケルトン JSON**。各ファイルには `subjectId / eraId / topicId / name / subtitle / icon / order / videos / flashcards / quiz` が入っており、**`flashcards` と `quiz.questions` だけが空**。ここを埋める。
- **`subjectId / eraId / topicId / name / subtitle / icon / order / videos` は変更しない**。`flashcards` 配列と `quiz.questions` 配列のみ追記する。
- **1トピック = 1 JSON ファイル**を `Write` で上書き保存する。
- 学習指導要領レベル（中学）。難しすぎる専門用語・高校範囲には踏み込まない。

## 1. 出力スキーマ（`data/content/_schema.ts` 準拠）

```jsonc
{
  // ↓ ここから上は既存のまま触らない
  "subjectId": "...", "eraId": "...", "topicId": "...",
  "name": "...", "subtitle": "...", "icon": "...", "order": 1, "videos": [],

  "flashcards": [
    {
      "id": "fc1",                      // fc1, fc2, ... 連番でユニーク
      "front": "答え（用語・人物・語句）", // ＝答え。簡潔に
      "back": "問い（〜は？ で終わる問題文）",
      "explanation": "補足・背景（任意。数学では必須）",
      "hint": "ヒント（任意）",
      "difficulty": "basic"             // basic | standard | advanced
    }
  ],
  "quiz": {
    "questions": [
      {
        "id": "q1",                     // q1, q2, ... 連番でユニーク
        "question": "問題文（〜は？／最も適切なものは？ 等）",
        "options": ["選択肢A", "選択肢B", "選択肢C", "選択肢D"], // 原則4つ
        "correctIndex": 0,              // options 内の正答位置 (0〜3)
        "explanation": "なぜその答えになるかの解説",
        "difficulty": "basic"
      }
      // 英語のみ語順並べ替え (type:"reorder") も可。english-* プロンプト参照
    ]
  }
}
```

## 2. 「一問一答」= flashcards と quiz の両方を作る

`jomon-era.json` のように、**同じ単元の知識を flashcards（選択肢なしの一問一答）と quiz（4択）の両方**で作る。両者で同じ用語を扱ってよい（別モダリティの学習なので重複OK）。

### flashcards（暗記カード）
- `front` = **答え**（用語そのもの）、`back` = **問い**。向きを逆にしない。
- 例: `front: "{縄文|じょうもん}土器"`, `back: "表面に縄目のような文様がある土器は？"`
- 重要用語・人物・出来事・現象・器具・法則を、**PDFと units 解説から漏れなく**カード化する。

### quiz（4択）
- 1問1答形式の独立した4択。`options` は原則4つ、`correctIndex` で正答位置を指定。
- `explanation` は必須。なぜ正答か＋誤答がなぜ違うかが分かるように。

## 3. 「できるだけ多く」網羅する

- **教材PDFに載っている問題・重要語を全てカード/クイズに変換**する。さらに units の `index.ts` の `explanation`（keyPoints 含む）にある重要事項も出題化する。
- **問題数はトピック間で統一しなくてよい**（内容量に応じて多寡が出てよい）。少なくとも各トピック flashcards・quiz とも10問以上を目安、内容が濃ければ20問超でよい。
- 難易度の配分目安: **basic 40% / standard 40% / advanced 20%**。全カード・全クイズに `difficulty` を付ける。

## 4. 選択肢（4択）の品質ルール ※全教科共通・違反が多い

- **正答位置 `correctIndex` を均等分散**（A/B/C/D ≒ 各25%）。作成後に分布を必ず確認し、偏れば選択肢順を入れ替えて調整。
- **4つの選択肢は形式・粒度・接尾辞・長さ・情報量を揃える**。正答だけ長い／詳しい／複数要素を含む、にしない。
- 「〜のみ」「〜だけ」「〜のまま」など**不自然な限定表現を付け足さない**。
- **重複選択肢禁止**（同じ値・実質同義の選択肢を入れない）。
- 誤答（ディストラクター）は「ありがちな誤解」を突く、もっともらしいものにする。誤答パターンが単調にならないよう注意。
- 図・グラフ・写真を見ないと解けない問題は、**テキストだけで完結する形に言い換える**（数値・条件を問題文に明記）。

## 5. 表記ルール

- **ふりがなルビ**: 難読漢字は `{漢字|よみ}` 形式でルビを付ける（例: `{岩宿|いわじゅく}{遺跡|いせき}`）。常用の易しい漢字には付けない。**英単語・数式には使わない**。
- **数式（数学・理科の計算）**: JSON 文字列内の LaTeX はバックスラッシュを二重にする（`\\frac`, `\\sqrt`, `\\times`, `\\pm`）。`$...$` で囲む。数式の直後に説明文が続く場合は `\\n` で改行。
- 半角・全角、句読点は既存コンテンツ（`jomon-era.json` 等）に合わせる。

## 6. 手順（各プロンプト共通）

1. この README と、対象教科の `docs/content-analysis/{教科}.md`・`docs/content-quality-standards.md` を読む。
2. プロンプトに記載の**教材PDFを `Read`** で読む（PDFが大きい場合は `pages` 指定で分割）。
3. 各トピックについて、対応する `src/data/subjects/.../index.ts` の `content.explanation` を読み、扱う知識範囲を把握する。
4. トピックごとに flashcards / quiz.questions を生成し、該当 JSON を `Write` で更新する。
5. **正答分布・難易度配分・選択肢の粒度**を自己チェックして調整する。
6. 検証: `npx tsx scripts/sync-content.ts --dry-run --only={教科}/**` でスキーマ（`_schema.ts`）違反が無いか確認（id 重複・correctIndex 範囲外などを検出）。

## 7. 参考（既存スキル・資産）

- `docs/content-analysis/{教科}.md` … 教科別の作り方・過去フィードバック・固有ルール。
- `docs/content-quality-standards.md` … 全教科共通の品質基準。
- `generate-quiz` / `generate-content` スキル … 同種の生成を対話的に行うスキル。本プロンプトはそのバッチ版。
- 既存の完成例: `data/content/history/**/*.json`（特に `03-japanese-origins/jomon-era.json`）。

> ⚠️ 補足: `data/content/{教科}/grade{N}/` 配下のこの構成は、公式LINE の同期スクリプト（`sync-questions-from-content.ts` / `generate-line-study-content.ts`）にはまだ配線されていない（history 用フォルダマップのみ）。本プロンプトは JSON 生成までを対象とする。配信反映が必要になったら各ジェネレータへ教科別マップを追加すること。
