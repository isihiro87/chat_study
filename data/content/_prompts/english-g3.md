# 一問一答コンテンツ生成プロンプト — 英語 中3：中3英文法

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **英語 中3 / 中3英文法**（`grade3 全トピック`）
- 出力先: `data/content/english/grade3/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/english/grades/grade3/topics/3年英語新ワーク0,1,2.pdf`
- `src/data/subjects/english/grades/grade3/topics/3年英語新ワーク3,4.pdf`
- `src/data/subjects/english/grades/grade3/topics/3年英語新ワーク5,6.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/english/grades/grade3/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 10 トピック）

### 現在完了（have/has + 過去分詞で「過去〜今」をつなぐ）

- 出力先: `data/content/english/grade3/present-perfect.json`
- Web版ソース: `src/data/subjects/english/grades/grade3/topics/1-present-perfect/index.ts`（既存 flashcards 33件 / quiz 30件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **現在完了ってなに？**
    - 継続「ずっと〜している」: I have lived here for five years. = 私は5年間ここに住んでいます。
    - 経験「〜したことがある」: I have visited Kyoto. = 私は京都を訪れたことがあります。
    - 完了・結果「もう〜した」: I have finished my homework. = 私は宿題を終えました。
  - **いっしょに使うことば**
    - for（〜の間）/ since（〜から）→ 継続のサイン: I have known her since 2020. = 2020年から彼女を知っています。
    - ever（今までに）/ never（一度も〜ない）→ 経験のサイン: Have you ever been to Osaka? = 大阪に行ったことはありますか？
    - just（ちょうど）/ already（もう）/ yet（まだ・もう）→ 完了のサイン: I have just finished. = ちょうど終えたところです。
  - **否定文と疑問文**
    - 否定文: I have not seen the movie yet. = 私はまだその映画を見ていません。（have not = haven't）
    - 疑問文: Have you finished your homework? = 宿題は終わりましたか？
    - 答え方: Yes, I have. / No, I haven't.

### 仮定法（If I were ~ / I wish ~ で想像を伝えよう）

- 出力先: `data/content/english/grade3/subjunctive.json`
- Web版ソース: `src/data/subjects/english/grades/grade3/topics/10-subjunctive/index.ts`（既存 flashcards 28件 / quiz 30件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **仮定法ってなに？**
    - If I were you, I would study harder. = もし私があなただったら、もっと一生懸命勉強するのに。
    - If I had a lot of money, I would travel around the world. = もしたくさんお金があったら、世界中を旅するのに。
    - ポイント: 過去の形を使うけど過去の話ではない → 「現実じゃない」ことを表す
  - **I wish ~ で「〜だったらいいのに」**
    - I wish I could fly. = 空を飛べたらいいのに。（can → could）
    - I wish I were taller. = もっと背が高ければいいのに。（be動詞 → were）
    - I wish I had a car. = 車を持っていたらいいのに。（have → had）
  - **仮定法のルールまとめ**
    - be動詞 → 全部 were にする（I were, he were, she were...）
    - can → could / have → had / ふつうの動詞も過去の形
    - 「〜するのに」は would + 動詞

### make・show の応用（make 人 〜 / show 人 that の使い方）

- 出力先: `data/content/english/grade3/make-show.json`
- Web版ソース: `src/data/subjects/english/grades/grade3/topics/2-make-show/index.ts`（既存 flashcards 30件 / quiz 33件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **make +「〜を」+「〜に」ってなに？**
    - The news made me happy. = そのニュースは私をうれしくさせました。
    - The movie made her sad. = その映画は彼女を悲しくさせました。
    - This song makes me excited. = この曲は私をワクワクさせます。
  - **show / tell + 人 + that + 文**
    - He showed me that it was true. = 彼は私にそれが本当だと示しました。
    - She told me that she was busy. = 彼女は私に忙しいと言いました。
    - that は省略OK → She told me she was busy. でも同じ意味。

### 現在完了進行形（have been + ~ing で「ずっと〜し続けている」）

- 出力先: `data/content/english/grade3/present-perfect-progressive.json`
- Web版ソース: `src/data/subjects/english/grades/grade3/topics/3-present-perfect-progressive/index.ts`（既存 flashcards 33件 / quiz 33件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **現在完了進行形ってなに？**
    - I have been studying for two hours. = 私は2時間ずっと勉強し続けています。
    - She has been running since this morning. = 彼女は今朝からずっと走っています。
    - They have been waiting for thirty minutes. = 彼らは30分間ずっと待っています。
  - **現在完了とのちがい**
    - 状態の継続 → 現在完了: I have lived here for ten years. = 10年間ここに住んでいます。
    - 動作の継続 → 現在完了進行形: I have been reading for two hours. = 2時間ずっと読んでいます。
    - 迷ったら「体を動かす感じがあるかな？」と考えてみよう！

### 不定詞（応用）（It is for to / want人to / let人do）

- 出力先: `data/content/english/grade3/infinitives-advanced.json`
- Web版ソース: `src/data/subjects/english/grades/grade3/topics/4-infinitives-advanced/index.ts`（既存 flashcards 32件 / quiz 31件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **It is ... for 人 to ~ の形**
    - It is important for us to study English. = 私たちにとって英語を勉強することは大切です。
    - It is easy for me to read this book. = 私にとってこの本を読むのは簡単です。
    - It is difficult for him to wake up early. = 彼にとって早起きするのは難しいです。
  - **want / ask / tell + 人 + to ~**
    - I want you to come. = 私はあなたに来てほしいです。
    - She asked me to help her. = 彼女は私に手伝うように頼みました。
    - The teacher told us to be quiet. = 先生は私たちに静かにするように言いました。
  - **let / help + 人 + 動詞のもとの形**
    - Let me help you. = 私にあなたを手伝わせてください。
    - My parents let me go to the concert. = 両親は私をコンサートに行かせてくれました。
    - Can you help me carry this box? = この箱を運ぶのを手伝ってくれますか？

### 間接疑問文（疑問のことばが文の途中に入る言い方）

- 出力先: `data/content/english/grade3/indirect-questions.json`
- Web版ソース: `src/data/subjects/english/grades/grade3/topics/5-indirect-questions/index.ts`（既存 flashcards 28件 / quiz 30件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **間接疑問文ってなに？**
    - 疑問文: What does he like? → 間接疑問文: I know what he likes.
    - 疑問文: Where does she live? → 間接疑問文: Do you know where she lives?
    - ポイント: 疑問のことばのあとは「主語 + 動詞」の順番！
  - **いろいろな疑問のことばで使える**
    - I know what he likes. = 私は彼が何を好きか知っています。
    - Tell me when the party starts. = パーティーがいつ始まるか教えてください。
    - I don't know how she did it. = 彼女がどうやってそれをしたか知りません。
  - **間違いやすいポイント**
    - ❌ I know what does he like. → ⭕ I know what he likes.
    - ❌ Tell me where does she live. → ⭕ Tell me where she lives.
    - ❌ Do you know when did it start? → ⭕ Do you know when it started?

### 過去分詞による後置修飾（名詞のうしろから「〜された…」と説明を加える形）

- 出力先: `data/content/english/grade3/past-participle-modifier.json`
- Web版ソース: `src/data/subjects/english/grades/grade3/topics/6-past-participle-modifier/index.ts`（既存 flashcards 32件 / quiz 30件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **過去分詞で名詞をうしろから説明しよう**
    - a book written in English = 英語で書かれた本（名詞のうしろから説明）
    - the window broken by the ball = ボールで割られた窓
    - a language spoken in many countries = たくさんの国で話されている言語
  - **1語だけなら前に置ける**
    - 1語だけ → 前に置ける: a broken window（壊れた窓）
    - 説明がつくとき → うしろに置く: the window broken by the ball（ボールで壊された窓）
    - by 〜 で「〜によって」を伝えられる: a picture painted by Picasso（ピカソが描いた絵）

### 現在分詞による後置修飾（名詞のうしろから「〜している…」と説明を加える形）

- 出力先: `data/content/english/grade3/present-participle-modifier.json`
- Web版ソース: `src/data/subjects/english/grades/grade3/topics/7-present-participle-modifier/index.ts`（既存 flashcards 32件 / quiz 30件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **〜ingで名詞をうしろから説明しよう**
    - the boy running in the park = 公園で走っている男の子
    - the girl playing the piano = ピアノを弾いている女の子
    - the man standing over there = あそこに立っている男の人
  - **〜ingと過去分詞のちがい**
    - 〜ing →「〜している」（自分で動いている）: the girl singing a song = 歌を歌っている女の子
    - 過去分詞 →「〜された」（誰かにされている）: the song sung by the girl = その女の子に歌われた歌
    - 迷ったら「自分で動いてる？」「誰かにされてる？」で判断しよう

### 接触節（名詞 + 主語 + 動詞 でうしろから説明する形）

- 出力先: `data/content/english/grade3/contact-clause.json`
- Web版ソース: `src/data/subjects/english/grades/grade3/topics/8-contact-clause/index.ts`（既存 flashcards 33件 / quiz 30件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **接触節ってなに？**
    - The book I bought yesterday was interesting. = 私がきのう買った本はおもしろかったです。
    - The girl he likes is Yuki. = 彼が好きな女の子はユキです。
    - The movie we watched was exciting. = 私たちが見た映画はワクワクしました。
  - **that/whichを省略した形**
    - The book that I bought = The book I bought（that を省略）
    - The movie which we watched = The movie we watched（which を省略）
    - 会話では省略するのがふつう → 接触節をよく使うよ

### 関係代名詞（who / which / that で名詞をくわしく説明する）

- 出力先: `data/content/english/grade3/relative-pronouns.json`
- Web版ソース: `src/data/subjects/english/grades/grade3/topics/9-relative-pronouns/index.ts`（既存 flashcards 31件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **関係代名詞ってなに？**
    - The boy who plays soccer is Ken. = サッカーをする男の子はケンです。（who = 人）
    - The book which I read was interesting. = 私が読んだ本はおもしろかった。（which = もの）
    - This is the cat that I found. = これは私が見つけた猫です。（that = 人でもものでもOK）
  - **who / which / that の使い分け**
    - who → 人だけ: I have a friend who lives in America.
    - which → ものだけ: The book which I read was interesting.
    - that → 人でもものでもOK: The boy that plays soccer is Ken. / The book that I read was interesting.
  - **接触節との関係**
    - The book that I read = The book I read（that を省略 → 接触節）
    - 会話では省略するのがふつう
    - ただし who は省略しないことが多いよ

## 英語固有のルール（README の共通ルールに追加）

- クイズは2タイプ可: `type:"choice"`（4択）と `type:"reorder"`（語順並べ替え: `words`/`correctOrder`/`punctuation`、`docs/reorder-question-guide.md` 参照）。
- フラッシュカードの front/back の向き・スタイルは、対応する Web版ソース（`index.ts`）の既存 flashcards に合わせる。
- 4択の活用形接尾辞（-ing/-ed/to+動詞）・並列構造（A and B）の有無を選択肢間で統一。正答だけ複数要素を含む形にしない。
- 画像不要。ルビ `{漢字|よみ}` は使わない。文法用語は中学生に分かる平易な言い換えを使う。

## 進め方

1. `data/content/_prompts/README.md`・`docs/content-analysis/english.md`・`docs/content-quality-standards.md` を読む。
2. 教材PDFを `Read`（大きければ `pages` 指定）。各トピックの Web版ソース `index.ts` の `content`（explanation / 既存 flashcards / quiz）も読む。
3. トピックごとに `flashcards` と `quiz.questions` を生成し、該当 JSON を `Write` で更新（1ファイルずつ）。
4. 難易度配分（basic40/standard40/advanced20）と **正答位置 `correctIndex` の均等分散**を自己チェック。
5. 検証: `npx tsx scripts/sync-content.ts --dry-run --only=english/**`。

## 完了の目安

- 全 10 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
