# 一問一答コンテンツ生成プロンプト — 英語 中1：中1英文法

> **先に `data/content/_prompts/README.md` を読むこと（共通ルール・出力スキーマ・品質基準）。**
> 出力フォーマットの正解例 = `data/content/history/03-japanese-origins/jomon-era.json`。

## この単元

- 教科 / 学年 / 単元: **英語 中1 / 中1英文法**（`grade1 全トピック`）
- 出力先: `data/content/english/grade1/*.json`（下記トピックの各 JSON）
- 編集対象は各 JSON の **`flashcards` と `quiz.questions` のみ**。他フィールドは変更しない。

### 教材PDF
- `src/data/subjects/english/grades/grade1/1年英語新ワーク1,2.pdf`
- `src/data/subjects/english/grades/grade1/1年英語新ワーク3,4.pdf`
- `src/data/subjects/english/grades/grade1/1年英語新ワーク5,6.pdf`
- `src/data/subjects/english/grades/grade1/1年英語新ワーク7,8.pdf`
- `src/data/subjects/english/grades/grade1/1年英語新ワーク9,10章.pdf`
- `src/data/subjects/english/grades/grade1/topics/1年英語新ワーク1,2.pdf`
- `src/data/subjects/english/grades/grade1/topics/1年英語新ワーク3,4.pdf`
- `src/data/subjects/english/grades/grade1/topics/1年英語新ワーク5,6.pdf`
- `src/data/subjects/english/grades/grade1/ワーク1,2章.pdf`
- `src/data/subjects/english/grades/grade1/ワーク3,4章.pdf`
- `src/data/subjects/english/grades/grade1/ワーク5,6章.pdf`
- `src/data/subjects/english/grades/grade1/ワーク7,8章.pdf`
- `src/data/subjects/english/grades/grade1/ワーク9,10章.pdf`
- `src/data/subjects/english/grades/grade1/実力アップ問題集1,2.pdf`
- `src/data/subjects/english/grades/grade1/実力アップ問題集3,4,5.pdf`
- `src/data/subjects/english/grades/grade1/実力アップ問題集6,7.pdf`
- `src/data/subjects/english/grades/grade1/必修テキスト1,2章.pdf`
- `src/data/subjects/english/grades/grade1/必修テキスト3,4章.pdf`
- `src/data/subjects/english/grades/grade1/必修テキスト5,6章.pdf`
- `src/data/subjects/english/grades/grade1/必修テキスト7,8章.pdf`
- `src/data/subjects/english/grades/grade1/必修テキスト9,10章.pdf`
- `src/data/subjects/english/grades/grade1/標準問題集1,2,3.pdf`
- `src/data/subjects/english/grades/grade1/標準問題集4,5,6.pdf`
- `src/data/subjects/english/grades/grade1/標準問題集7,8,9,10.pdf`

### Web版ソース（解説・既存FC/クイズの参照元）
- `src/data/subjects/english/grades/grade1/topics/`
- 下の各トピックに、Web版の解説見出し・要点（keyPoints）と既存 flashcards/quiz 件数を抜粋。**これらを一問一答（flashcards）と4択（quiz.questions）に変換・拡充**する。

## トピックと知識範囲（全 13 トピック）

### Hello, Everyone! の単語（<ruby>教科書<rt>きょうかしょ</rt></ruby> P.11-18 / <ruby>新出<rt>しんしゅつ</rt></ruby>40<ruby>語<rt>ご</rt></ruby>）

- 出力先: `data/content/english/grade1/vocab-unit1-hello.json`
- Web版ソース: `src/data/subjects/english/grades/grade1/topics/0a-vocab-unit1-hello/index.ts`（既存 flashcards 41件 / quiz 5件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **Part 1: <ruby>自己紹介<rt>じこしょうかい</rt></ruby>で使うことば（14<ruby>語<rt>ご</rt></ruby>）**
    - <strong>call</strong>「<ruby>呼<rt>よ</rt></ruby>ぶ」+ <strong>me</strong>「<ruby>私<rt>わたし</rt></ruby>を」→ Call me Eddy.（<ruby>私<rt>わたし</rt></ruby>をエディと<ruby>呼<rt>よ</rt></ruby>んで）
    - <strong>from</strong>「〜<ruby>出身<rt>しゅっしん</rt></ruby>の」→ I'm from South Africa.（<ruby>私<rt>わたし</rt></ruby>は<ruby>南<rt>みなみ</rt></ruby>アフリカ<ruby>出身<rt>しゅっしん</rt></ruby>です）
    - <strong>Japanese</strong>「<ruby>日本<rt>にほん</rt></ruby>の」+ <strong>sweet(s)</strong>「<ruby>甘<rt>あま</rt></ruby>いお<ruby>菓子<rt>かし</rt></ruby>」→ Japanese sweets（<ruby>和菓子<rt>わがし</rt></ruby>）
    - <strong>love</strong>「<ruby>大好<rt>だいす</rt></ruby>き」、<strong>join</strong>「<ruby>加<rt>くわ</rt></ruby>わる」、<strong>club</strong>「<ruby>部<rt>ぶ</rt></ruby>」→ I want to join the manga club.（マンガ<ruby>部<rt>ぶ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>りたい）
    - つなぎ<ruby>語<rt>ご</rt></ruby>: <strong>and</strong>（…と〜）、<strong>too</strong>（…もまた）、<strong>the</strong>（その）、<strong>everyone</strong>（みなさん）、<strong>number</strong>（<ruby>数<rt>かず</rt></ruby>）
  - **Part 2: <ruby>好<rt>す</rt></ruby>き<ruby>嫌<rt>きら</rt></ruby>い・<ruby>趣味<rt>しゅみ</rt></ruby>のことば（12<ruby>語<rt>ご</rt></ruby>）**
    - <strong>fan</strong>「ファン」+ <strong>rugby</strong>「ラグビー」→ I'm a rugby fan.（<ruby>私<rt>わたし</rt></ruby>はラグビーのファンです）
    - <strong>often</strong>「よく」+ <strong>watch</strong>「<ruby>見<rt>み</rt></ruby>る」+ <strong>with</strong>「〜と」+ <strong>friend</strong>「<ruby>友達<rt>ともだち</rt></ruby>」→ I often watch rugby with my friends.（<ruby>友達<rt>ともだち</rt></ruby>とよくラグビーを<ruby>見<rt>み</rt></ruby>る）
    - <ruby>否定<rt>ひてい</rt></ruby>: <strong>not</strong>「〜ない」、<strong>don't</strong>「do not の<ruby>短<rt>みじか</rt></ruby>い<ruby>形<rt>かたち</rt></ruby>」、<strong>no</strong>「いいえ」
    - リアクション: <strong>great</strong>「すばらしい」、<strong>oh / wow</strong>「まあ、あら」、<strong>but</strong>「しかし」
  - **Part 3: <ruby>学校<rt>がっこう</rt></ruby>・<ruby>興味<rt>きょうみ</rt></ruby>のことば（14<ruby>語<rt>ご</rt></ruby>）**
    - <ruby>教科<rt>きょうか</rt></ruby>: <strong>English</strong>（<ruby>英語<rt>えいご</rt></ruby>）、<strong>math</strong>（<ruby>数学<rt>すうがく</rt></ruby>）、<strong>art</strong>（<ruby>美術<rt>びじゅつ</rt></ruby>）、<strong>swimming</strong>（<ruby>水泳<rt>すいえい</rt></ruby>）
    - <ruby>学校生活<rt>がっこうせいかつ</rt></ruby>: <strong>school</strong>（<ruby>学校<rt>がっこう</rt></ruby>）、<strong>lesson</strong>（<ruby>授業<rt>じゅぎょう</rt></ruby>）、<strong>lunch</strong>（<ruby>昼食<rt>ちゅうしょく</rt></ruby>）、<strong>take</strong>（<ruby>受<rt>う</rt></ruby>ける）→ I take art lessons.（<ruby>美術<rt>びじゅつ</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けます）
    - <ruby>趣味<rt>しゅみ</rt></ruby>: <strong>draw</strong>（<ruby>絵<rt>え</rt></ruby>をかく）、<strong>comic</strong>（マンガ）、<strong>anime</strong>（アニメ）、<strong>bike</strong>（<ruby>自転車<rt>じてんしゃ</rt></ruby>）
    - <ruby>会話<rt>かいわ</rt></ruby><ruby>表現<rt>ひょうげん</rt></ruby>: <strong>how</strong>（どんなようすで）、<strong>so</strong>（だから）、<strong>about</strong>（〜について）→ How about you?（あなたはどうですか？）

### be動詞（am / is / are の使い分けをマスター）

- 出力先: `data/content/english/grade1/be-verbs.json`
- Web版ソース: `src/data/subjects/english/grades/grade1/topics/1-be-verbs/index.ts`（既存 flashcards 30件 / quiz 30件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **am / is / are ってなに？**
    - I（私）のとき → am をつかう（I am a student. = 私は生徒です。）
    - he / she / it（1人のとき）→ is をつかう（She is kind. = 彼女はやさしいです。）
    - you / we / they（あなた・2人いじょう）→ are をつかう（They are happy. = 彼らはうれしいです。）
  - **「〜じゃない」「〜ですか？」の言い方**
    - 「〜じゃない」の例: She is not a teacher. = 彼女は先生じゃないです。（短く言うと She isn't a teacher.）
    - 「〜ですか？」の例: Is she a teacher? = 彼女は先生ですか？
    - 答え方: Yes, she is.（はい） / No, she isn't.（いいえ）
  - **「This is / That is」の使い方**
    - This is my pen. = これは私のペンです。
    - That is your desk. = あれはあなたの机です。
    - Is this a dog? — Yes, it is. / No, it isn't. （「これは犬ですか？」への答えは it を使うよ！）
  - **「He is / She is」で人を紹介する**
    - This is Mr. Ito. He is our math teacher. = こちらは伊藤先生です。彼は私たちの数学の先生です。
    - She is from Canada. = 彼女はカナダ出身です。
    - Is he a student? — Yes, he is. / No, he isn't. （「彼は生徒ですか？」への答えは he を使うよ！）
  - **be動詞を使った自己紹介パターン**
    - I am Taku. / I'm Taku. = 私はタクです。
    - I am twelve. = 私は12歳です。
    - I am from Nagoya. = 私は名古屋出身です。
    - I am in the tennis club. = 私はテニス部に入っています。

### 感嘆文（How ~! / What a ~!）

- 出力先: `data/content/english/grade1/exclamatives.json`
- Web版ソース: `src/data/subjects/english/grades/grade1/topics/10-exclamatives/index.ts`（既存 flashcards 10件 / quiz 12件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **感嘆文ってなに？**
    - How + 形容詞！ = 「なんて〜！」（短い感嘆）
    - What + a/an + 形容詞 + 名詞！ = 「なんて〜な…でしょう！」
    - 文末には「!」（感嘆符・エクスクラメーションマーク）をつける
  - **主語 + be動詞 を最後につける完成形**
    - How + 形容詞 + 主語 + be動詞！ → How cute this dog is!
    - What + a/an + 形容詞 + 名詞 + 主語 + be動詞！ → What an old house this is!
    - be動詞は主語に合わせる（this/he/she → is、these/they → are）
  - **a / an のつけ方と複数名詞の注意**
    - a nice bag（nice の n は子音）
    - an interesting book / an old house（母音で始まる形容詞の前は an）
    - What cute cats these are!（cats は複数なので a なし）

### 一般動詞（like / play / study ... 動きを表すことば）

- 出力先: `data/content/english/grade1/general-verbs.json`
- Web版ソース: `src/data/subjects/english/grades/grade1/topics/2-general-verbs/index.ts`（既存 flashcards 30件 / quiz 30件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **一般動詞ってなに？**
    - I play tennis. = 私はテニスをします。（I のときはそのまま！）
    - He plays tennis. = 彼はテニスをします。（He だから play → plays に！）
    - She likes music. = 彼女は音楽が好きです。（She だから like → likes に！）
  - **「〜しない」「〜しますか？」の言い方**
    - 「〜しない」: I don't like math. = 私は数学が好きじゃない。
    - He のとき: He doesn't like math. = 彼は数学が好きじゃない。（likes → like にもどる！）
    - 「〜しますか？」: Do you like math? / Does he like math?
  - **いろいろな一般動詞を覚えよう**
    - like（好き）/ love（大好き）/ want（欲しい）/ have（持っている）: I like sushi. / I want a dog.
    - play（する・弾く）/ watch（見る）/ read（読む）/ draw（描く）: I play baseball. / I watch anime.
    - eat（食べる）/ drink（飲む）/ cook（料理する）/ make（作る）/ study（勉強する）/ speak（話す）/ join（参加する）: I eat ramen. / I cook curry.
  - **canの文 — 「〜できる」**
    - 肯定文: I can play the piano.（私はピアノが弾けます。）
    - 否定文: I cannot（can't）make shumai.（私はシュウマイが作れません。）
    - 疑問文・答え方: Can you read hiragana? — Yes, I can. / No, I can't.
  - **一般動詞 vs be動詞のまちがいやすいポイント**
    - ✗ I am like tennis.（be動詞と一般動詞を両方使ってはダメ！）
    - ✓ I like tennis.（一般動詞だけ） または ✓ I am a tennis player.（be動詞だけ）
    - 「〜しない」の使い分け: She is not kind.（be動詞）/ She doesn't like math.（一般動詞）

### 名詞（単数・複数 / this・that）

- 出力先: `data/content/english/grade1/nouns.json`
- Web版ソース: `src/data/subjects/english/grades/grade1/topics/3-nouns/index.ts`（既存 flashcards 18件 / quiz 28件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **名詞の「1つ」と「2つ以上」**
    - 1つのとき → a book（本が1冊）、an apple（リンゴが1つ）
    - 2つ以上のとき → books（本が2冊以上）、apples（リンゴが2つ以上）
    - x, s, ch, sh で終わるときは es → box → boxes / class → classes
    - y で終わるときは y を i にかえて es → city → cities
  - **this / that のつかい方**
    - this = 近くのもの → This is a pen.（これはペンです。）
    - that = 遠くのもの → That is a book.（あれは本です。）
    - 疑問文 → Is that a school?（あれは学校ですか？）
    - 答え方 → Yes, it is. / No, it is not.

### 名詞の応用（不規則複数形 / How many / these・those）

- 出力先: `data/content/english/grade1/nouns-advanced.json`
- Web版ソース: `src/data/subjects/english/grades/grade1/topics/3b-nouns-advanced/index.ts`（既存 flashcards 18件 / quiz 32件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **不規則な複数形**
    - child → children（子ども → 子どもたち）
    - man → men / woman → women
    - tooth → teeth / foot → feet
    - 形がかわらない：fish → fish / sheep → sheep
  - **How many 〜?（いくつ？）**
    - How many books do you have?（本を何冊もっていますか？）
    - 答え方 → I have three books.（3冊もっています。）
    - How many のあとはかならず複数形！
  - **these / those のつかい方**
    - this → these（これら）/ that → those（あれら）
    - These are pens.（これらはペンです。）
    - Are those your books? — Yes, they are.
    - 答えるときは it ではなく they を使う

### 疑問詞（what / who / where / when / how）

- 出力先: `data/content/english/grade1/question-words.json`
- Web版ソース: `src/data/subjects/english/grades/grade1/topics/4-question-words/index.ts`（既存 flashcards 15件 / quiz 24件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **what / who で聞いてみよう**
    - What is this? = これは何ですか？ → It is a pen.（それはペンです。）
    - Who is she? = 彼女はだれですか？ → She is Yuki.（彼女はユキです。）
    - what = 何 / who = だれ
  - **where / when / how も覚えよう**
    - Where is the park? = 公園はどこですか？
    - When is your birthday? = 誕生日はいつですか？
    - How are you? = 調子はどうですか？
    - How many cats do you have? = ネコを何匹飼っていますか？

### 疑問詞の応用（前置詞 / What+名詞 / How do you ~?）

- 出力先: `data/content/english/grade1/question-patterns.json`
- Web版ソース: `src/data/subjects/english/grades/grade1/topics/4b-question-patterns/index.ts`（既存 flashcards 20件 / quiz 36件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **前置詞（場所・時間を表す言葉）**
    - in = 〜の中に（in the box / in Tokyo / in the morning）
    - on = 〜の上に（on the desk / on Sunday）
    - at = 〜に（at school / at seven）
    - near = 〜の近くに（near the station）
    - by = 〜のそばに / 〜で（by the window / by bus）
    - under = 〜の下に（under the desk）
    - on foot =「歩いて」（I go to school on foot.）

### 三人称単数現在（he / she / it + 動詞s の使い方）

- 出力先: `data/content/english/grade1/third-person-singular.json`
- Web版ソース: `src/data/subjects/english/grades/grade1/topics/5-third-person-singular/index.ts`（既存 flashcards 20件 / quiz 30件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **he / she / it のとき動詞に s をつけよう**
    - I play tennis. → そのまま
    - He plays tennis. → s がつく！
    - She likes music. → s がつく！
    - s / x / ch / sh / o で終わるとき → es をつける（go → goes）
    - y で終わるとき → y を i にかえて es（study → studies）
  - **have は特別！ → has になる**
    - She has a cat. = 彼女はネコを飼っています。
    - He has two brothers. = 彼には兄弟が2人います。
    - Ken has a bike. = ケンは自転車を持っています。
  - **「〜しない」「〜しますか？」のとき**
    - He doesn't like math. = 彼は数学が好きじゃない。（likes → like にもどる！）
    - Does she play tennis? = 彼女はテニスをしますか？
    - 答え方: Yes, she does. / No, she doesn't.
  - **人名・家族名も三人称単数！**
    - Ken plays soccer. = ケンはサッカーをします。（Ken → he）
    - My sister likes music. = 私の姉は音楽が好きです。（My sister → she）
    - Mr. Tanaka teaches math. = 田中先生は数学を教えます。（Mr. Tanaka → he）
  - **頻度の副詞の位置**
    - He often watches TV. = 彼はよくテレビを見ます。
    - She usually goes to school by bike. = 彼女はふだん自転車で学校に行きます。
    - Ken studies English every day. = ケンは毎日英語を勉強します。

### 代名詞（主格・所有格・目的格・所有代名詞と Whose / Which の使い方）

- 出力先: `data/content/english/grade1/pronouns.json`
- Web版ソース: `src/data/subjects/english/grades/grade1/topics/6-pronouns/index.ts`（既存 flashcards 30件 / quiz 65件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **「だれが」を表す代名詞（主格）**
    - I = 私 / you = あなた / he = 彼 / she = 彼女
    - it = それ（もの・動物）/ we = 私たち / they = 彼ら
    - I は am、he/she/it は is、you/we/they は are を使うよ
  - **「〜の」を表す形（所有格）**
    - I → my（私の）: This is my book. = これは私の本です。
    - you → your（あなたの）: This is your pen. = これはあなたのペンです。
    - he → his（彼の）/ she → her（彼女の）
    - we → our（私たちの）/ they → their（彼らの）
  - **「〜を・〜に」を表す形（目的格）**
    - I → me（私を）/ you → you（あなたを）
    - he → him（彼を）/ she → her（彼女を）
    - we → us（私たちを）/ they → them（彼らを）
    - 動詞のあとに置く: I know him. / Please help us.
  - **「〜のもの」を表す形（所有代名詞）と Whose**
    - mine（私の）/ yours（あなたの）/ his（彼の）/ hers（彼女の）
    - ours（私たちの）/ theirs（彼らの）
    - my pen → mine に書きかえられる（名詞なしで使える）
    - Whose bag is this? — It's mine.（だれのカバン？ — 私のです。）
  - **Which の疑問文**
    - Which do you like, A or B? = AとBどちらが好き？
    - Which + 名詞 do you 〜? = どの〜を…？
    - 例: Which color do you like, red or blue? — I like red.

### 現在進行形（be動詞 + 〜ing で「今〜している」）

- 出力先: `data/content/english/grade1/present-progressive.json`
- Web版ソース: `src/data/subjects/english/grades/grade1/topics/7-present-progressive/index.ts`（既存 flashcards 20件 / quiz 30件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **「今〜しているところ」の言い方**
    - I am playing tennis. = 私は今テニスをしています。
    - He is reading a book. = 彼は今本を読んでいます。
    - They are studying English. = 彼らは今英語を勉強しています。
  - **ing のつけ方と否定文・疑問文**
    - ふつう: play → playing / read → reading
    - e で終わる: make → making / use → using
    - 子音を重ねる: run → running / swim → swimming
    - 「〜していない」: He is not sleeping.
    - 「〜していますか？」: Is he sleeping? — Yes, he is.

### 過去形と過去進行形（was / were / played / was playing）

- 出力先: `data/content/english/grade1/past-tense.json`
- Web版ソース: `src/data/subjects/english/grades/grade1/topics/8-past-tense/index.ts`（既存 flashcards 38件 / quiz 63件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **be動詞と一般動詞の過去形**
    - be動詞: am/is → was / are → were
    - I was busy yesterday. = 私は昨日忙しかったです。
    - 一般動詞: play → played / like → liked / study → studied
    - I played tennis yesterday. = 私は昨日テニスをしました。
    - 特別な形: go → went / have → had / eat → ate / see → saw
  - **過去の否定文・疑問文と過去進行形**
    - 「〜しなかった」: I didn't play tennis. = 私はテニスをしませんでした。
    - 「〜しましたか？」: Did you play tennis? — Yes, I did.
    - 過去進行形: I was watching TV at 8. = 8時にテレビを見ていました。
    - They were playing soccer then. = そのときサッカーをしていました。

### 命令文（〜しなさい / 〜してください / 〜しましょう）

- 出力先: `data/content/english/grade1/imperatives.json`
- Web版ソース: `src/data/subjects/english/grades/grade1/topics/9-imperatives/index.ts`（既存 flashcards 18件 / quiz 30件 を変換元として参照可）
- 解説の構成と要点（src/data/subjects より）:
  - **命令文ってなに？**
    - Open the window.（窓を開けなさい。） — 主語なし、動詞 Open から始める
    - Close the door.（ドアを閉めなさい。）
    - Stand up.（立ちなさい。）
    - Come here.（ここに来なさい。）
  - **Please をつけて丁寧に**
    - Please read this book.（この本を読んでください。）
    - Please listen to me.（私の話を聞いてください。）
    - Please show me your notebook.（私にあなたのノートを見せてください。）
  - **否定の命令文「〜してはいけません」**
    - Do not run here. = Don't run here.（ここで走ってはいけません。）
    - Don't speak loudly in this room.（この部屋で大きな声で話してはいけません。）
    - Please don't use that box.（その箱を使わないでください。）
    - Please don't touch that computer.（そのコンピューターに触らないでください。）
  - **Let's で「〜しましょう」**
    - Let's speak English.（英語で話しましょう。）
    - Let's go to the library after school.（放課後に図書館へ行きましょう。）
    - Let's sing this song together.（いっしょにこの歌を歌いましょう。）

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

- 全 13 トピックの `flashcards` と `quiz.questions` が空でない（各概ね10問以上、教材量が多ければそれ以上）。
- スキーマ検証がエラーなく通る。
