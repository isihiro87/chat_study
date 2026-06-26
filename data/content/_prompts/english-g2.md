# 一問一答コンテンツ生成プロンプト — 英語 中2：中2英文法

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **英語 中2 / 中2英文法**（`grade2 全トピック`）
- 出力先: `data/content/english/grade2/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/english/grades/grade2/topics/2年英語新ワーク0,1.pdf`
- `src/data/subjects/english/grades/grade2/topics/2年英語新ワーク2,3.pdf`
- `src/data/subjects/english/grades/grade2/topics/2年英語新ワーク4,5.pdf`
- `src/data/subjects/english/grades/grade2/topics/2年英語新ワーク6,7.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/english/grades/grade2/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 6 トピック）

### 5つの文構造（be going to / will / SVOO / SVOC）

- 出力先: `data/content/english/grade2/sentence-structures.json`
- Web版ソース: `src/data/subjects/english/grades/grade2/topics/1-sentence-structures/index.ts`（既存 flashcards 33件 / quiz 30件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **be going to ＋動詞の原形**
    - I am going to visit Osaka tomorrow. = 明日大阪を訪れるつもりです。
    - Are you going to study tonight? — Yes, I am. / No, I'm not.
    - She is not going to come to the party. = 彼女はパーティーに来ない予定です。
  - **will ＋動詞の原形**
    - I will help you. = 手伝いましょう。（その場の意志）
    - It will rain tomorrow. = 明日は雨が降るでしょう。（予測）
    - Will you open the window? = 窓を開けてくれますか。（依頼）
  - **be going to と will の使い分け**
    - 前からの計画 → be going to: I'm going to visit Kyoto next week.（前から決めていた旅行）
    - その場の判断 → will: I'll answer the phone.（電話が鳴った→出ようと決めた）
    - 予測 → will: It will be hot tomorrow.（天気予報的な予測）
  - **SVOO（動詞＋人＋もの）の文**
    - He gave me a book. = 彼は私に本をくれました。（me = 「〜に」、a book = 「〜を」）
    - She teaches us English. = 彼女は私たちに英語を教えます。
    - SVOO → SVO 書きかえ: He gave me a book. → He gave a book to me.（give/show/teach/tell → to、buy/make → for）
  - **SVOC（call＋A＋B）の文**
    - People call this area Little India. = 人々はこの地域をリトル・インディアと呼びます。
    - We call him Ken. = 私たちは彼をケンと呼びます。（him = Ken が成り立つ）
    - They named the cat Tama. = 彼らはそのネコをタマと名付けました。
  - **5文型の見分けかた まとめ**
    - 動詞の後ろに何もない → SV（I run.）
    - S = C になる → SVC（She is kind. / He looks happy.）
    - 目的語が1つ → SVO（I play tennis.）
    - 後ろの2つが = → SVOC（They call him Ken.）、≠ → SVOO（He gave me a book.）

### 接続詞（when / if / because / that で文をつなげよう）

- 出力先: `data/content/english/grade2/conjunctions.json`
- Web版ソース: `src/data/subjects/english/grades/grade2/topics/2-conjunctions/index.ts`（既存 flashcards 32件 / quiz 30件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **when「〜するとき」**
    - When I got home, I watched TV. = 家に帰ったとき、テレビを見ました。（カンマあり）
    - I watched TV when I got home. = 家に帰ったとき、テレビを見ました。（カンマなし）
    - When I was a child, I lived in Tokyo. = 子どものとき、東京に住んでいました。
  - **if「もし〜なら」★ if の後ろでは will を使わない！**
    - If you are free, let's play soccer. = もし暇なら、サッカーをしよう。
    - ✅ If it rains tomorrow, I will stay home.（if の後ろは rains＝現在形）
    - ❌ If it will rain tomorrow...（if の後ろに will は使えない！）
  - **because「〜なので」**
    - I like summer because I can swim. = 泳げるので、夏が好きです。
    - Because it was raining, I stayed home. = 雨が降っていたので、家にいました。（文頭→カンマ）
    - ⚠️ because と so は同時に使えない！ ❌ Because it rained, so I stayed home.
  - **that「〜ということ」と I don't think that...**
    - I think (that) he is kind. = 彼がやさしいと思います。（that は省略OK）
    - I know (that) she can speak English. = 彼女が英語を話せると知っています。
    - I don't think (that) it is easy. = 簡単だとは思いません。（think を否定する）
  - **カンマのルール まとめ**
    - 文頭 → カンマあり: When I got home, I watched TV.
    - 文中 → カンマなし: I watched TV when I got home.
    - that → カンマなし（常に文中で使う）: I think that he is kind.

### 不定詞（to + 動詞の原形 の使い方をマスターしよう）

- 出力先: `data/content/english/grade2/infinitives.json`
- Web版ソース: `src/data/subjects/english/grades/grade2/topics/3-infinitives/index.ts`（既存 flashcards 35件 / quiz 37件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **不定詞（to + 動詞の原形）ってなに？**
    - 名詞的用法「〜すること」: I want to play soccer.
    - 副詞的用法（目的）「〜するために」: I went to the park to play soccer.
    - 形容詞的用法「〜するための」: I have a book to read.
    - 副詞的用法（感情の原因）「〜して」: I was happy to hear that.
    - It is ... to 構文「〜することは…だ」: It is fun to swim.
  - **名詞的用法「〜すること」**
    - want to ＝「〜したい」: I want to be a doctor.
    - like to ＝「〜するのが好き」: She likes to sing.
    - need to ＝「〜する必要がある」: We need to help sick children.
    - hope to ＝「〜したいと思う」: I hope to see you again.
  - **副詞的用法（目的）「〜するために」**
    - I went to the park to play soccer. =「なんのために公園に行った？」→「サッカーをするために」
    - She got up early to catch the bus. =「なんのために早起きした？」→「バスに乗るために」
    - I use a computer to study English. =「なんのためにPC使う？」→「英語を勉強するために」
  - **形容詞的用法「〜するための・〜すべき」**
    - I have a book to read. =「どんな本？」→「読むための本」
    - I want something to drink. =「どんなもの？」→「飲むためのもの」
    - There are many places to visit. =「どんな場所？」→「訪れるべき場所」
  - **副詞的用法（感情の原因）「〜して…だ」**
    - I am happy to hear that. = それを聞いてうれしいです。
    - I was surprised to see many people. = たくさんの人を見て驚きました。
    - She was glad to meet you. = あなたに会えてうれしかったです。
  - **It is ... to 構文「〜することは…だ」**
    - It is important to study every day. = 毎日勉強することは大切です。
    - It is fun to cook. = 料理をすることは楽しいです。
    - It is difficult to understand this story. = この物語を理解することは難しいです。
  - **疑問詞 + to + 動詞の原形**
    - how to 〜 =「〜のしかた・どうやって〜するか」: I know how to cook curry.
    - what to 〜 =「何を〜すべきか」: I don't know what to do.
    - where to 〜 =「どこで（へ）〜すべきか」: Do you know where to go?
    - when to 〜 =「いつ〜すべきか」: I don't know when to start.
  - **tell / show / teach + 人 + 疑問詞 + to**
    - I can show you how to wear a yukata. = 浴衣の着方を見せてあげるよ。
    - My friend told me what to do. = 友だちが何をすべきか教えてくれた。
    - Please tell us where to go. = どこに行けばいいか教えてください。
    - Who can teach me how to make it? = だれが作り方を教えてくれますか？
  - **I am sure / glad that + 文（that節）**
    - I am sure that he will come. = 彼が来ると確信しています。
    - I am glad that you like it. = あなたが気に入ってくれてうれしいです。
    - I'm sorry that I was late. = 遅れてごめんなさい。
    - that は省略できることもあるよ: I'm glad you like it.

### 助動詞（can / must / have to / may / should）

- 出力先: `data/content/english/grade2/modal-verbs.json`
- Web版ソース: `src/data/subjects/english/grades/grade2/topics/4-modal-verbs/index.ts`（既存 flashcards 30件 / quiz 30件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **can / must / have to のつかい方**
    - can = 〜できる：I can swim. = 私は泳ぐことができます。
    - must = 〜しなければならない：You must study. = あなたは勉強しなければなりません。
    - have to = 〜しなければならない：I have to go. = 私は行かなければなりません。
    - must と have to はほぼ同じ意味だけど、否定文の意味がちがう！
    - 助動詞のうしろの動詞は、いつでももとの形（何もつけない形）！
  - **may / should のつかい方**
    - may（許可）= 〜してもよい：You may sit down. = 座ってもいいですよ。
    - may（推量）= 〜かもしれない：It may rain tomorrow. = 明日雨が降るかもしれない。
    - should = 〜すべき・〜したほうがいい：You should eat breakfast. = 朝ごはんを食べたほうがいいよ。
  - **助動詞の否定文・疑問文**
    - 否定文：You must not run here. = ここで走ってはいけません。（must not = 〜してはいけない）
    - 否定文：You don't have to run. = 走らなくてもよい。（don't have to = 〜しなくてもよい）
    - must not と don't have to は意味がちがうから注意！
    - 疑問文：Can you swim? = あなたは泳げますか？ — Yes, I can. / No, I can't.

### 比較（比較級 / 最上級 / as〜as）

- 出力先: `data/content/english/grade2/comparison.json`
- Web版ソース: `src/data/subjects/english/grades/grade2/topics/5-comparison/index.ts`（既存 flashcards 40件 / quiz 35件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **比較級（〜より…だ）**
    - 短いことば: tall → taller / old → older
    - 長いことば: beautiful → more beautiful / interesting → more interesting
    - A is taller than B. = AはBより背が高い。
    - This book is more interesting than that one. = この本はあの本よりおもしろい。
    - than 〜 =「〜より」
  - **最上級（いちばん〜だ）と as〜as（同じくらい〜だ）**
    - 短いことば: tall → tallest / old → oldest
    - 長いことば: beautiful → most beautiful / interesting → most interesting
    - He is the tallest in his class. = 彼はクラスでいちばん背が高い。
    - 最上級の前にはふつう the をつける
    - as〜as: She is as tall as her mother. = 彼女はお母さんと同じくらいの背の高さだ。

### 受け身の文（be動詞 + 過去分詞 / by 〜）

- 出力先: `data/content/english/grade2/passive-voice.json`
- Web版ソース: `src/data/subjects/english/grades/grade2/topics/6-passive-voice/index.ts`（既存 flashcards 40件 / quiz 37件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **受け身の文の基本（be動詞 + 過去分詞）**
    - 受け身の文 = be動詞 + 過去分詞
    - This book is read by many people. = この本は多くの人に読まれています。
    - English is spoken in many countries. = 英語は多くの国で話されています。
    - by 〜 = 〜によって（だれがしたかを言いたいとき）
    - 過去分詞: played, used, written, made など（ed をつけるものと、特別な形のものがある）
  - **受け身の否定文・疑問文**
    - 否定文: This room is not used now. = この部屋は今使われていません。
    - 疑問文: Is English spoken in Canada? = カナダでは英語が話されていますか？
    - 答え方: Yes, it is. / No, it is not.
    - 受け身の過去: was/were + 過去分詞（This temple was built in 1300. = この寺は1300年に建てられました。）

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

- 全 6 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
