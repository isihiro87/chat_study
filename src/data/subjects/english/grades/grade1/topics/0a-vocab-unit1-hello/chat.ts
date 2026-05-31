import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const unit1HelloVocabChat: HistoryChat = {
  id: 'eng-vocab-unit1',
  icon: '👋',
  title: 'Hello, Everyone! の<ruby>単語<rt>たんご</rt></ruby>をマスター',
  subtitle: '〜中1<ruby>英語<rt>えいご</rt></ruby> Unit 1〜 <ruby>自己紹介<rt>じこしょうかい</rt></ruby>のことば40<ruby>語<rt>ご</rt></ruby>',
  characters: [
    {
      id: 'teacher',
      name: '<ruby>先生<rt>せんせい</rt></ruby>',
      emoji: '👩‍🏫',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
      expressions: {
        explaining: '🧑‍🏫',
        happy: '😊',
        encouraging: '💪',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '<ruby>生徒<rt>せいと</rt></ruby>',
      emoji: '👦',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: {
        curious: '🙋‍♂️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
        confused: '😵‍💫',
      },
    },
  ],
  content: [
    // ============================================================
    // Part 1: エディの自己紹介（教科書 P.11-13）
    // ============================================================
    {
      type: 'date',
      text: 'Part 1: エディの<ruby>自己紹介<rt>じこしょうかい</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>南<rt>みなみ</rt></ruby>アフリカから<ruby>来<rt>き</rt></ruby>た<ruby>転校生<rt>てんこうせい</rt></ruby>エディが、みんなの<ruby>前<rt>まえ</rt></ruby>で<ruby>自己紹介<rt>じこしょうかい</rt></ruby>するよ。<ruby>教科書<rt>きょうかしょ</rt></ruby> P.11-13 の本<ruby>文<rt>ぶん</rt></ruby>を<ruby>見<rt>み</rt></ruby>てみよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まずこのエディの<ruby>自己紹介<rt>じこしょうかい</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んでみよう！<br/><br/><strong>I\'m Edward Trout. Call me Eddy.</strong><br/>（<ruby>私<rt>わたし</rt></ruby>はエドワード・トラウトです。エディと<ruby>呼<rt>よ</rt></ruby>んでください。）<br/><br/><strong>I\'m twelve. I\'m from South Africa.</strong><br/>（12<ruby>歳<rt>さい</rt></ruby>です。<ruby>南<rt>みなみ</rt></ruby>アフリカ<ruby>出身<rt>しゅっしん</rt></ruby>です。）<br/><br/><strong>I like Japanese sweets.</strong><br/>（<ruby>和菓子<rt>わがし</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。）',
      speakable: [
        "I'm Edward Trout.",
        'Call me Eddy.',
        "I'm twelve.",
        "I'm from South Africa.",
        'I like Japanese sweets.',
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '「Call me Eddy.」って<ruby>何<rt>なん</rt></ruby>ですか？「<ruby>私<rt>わたし</rt></ruby>に<ruby>電話<rt>でんわ</rt></ruby>して」っていう<ruby>意味<rt>いみ</rt></ruby>？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いい<ruby>質問<rt>しつもん</rt></ruby>！ここの <strong>call</strong> は「<ruby>電話<rt>でんわ</rt></ruby>する」じゃなくて「<ruby>呼<rt>よ</rt></ruby>ぶ」の<ruby>意味<rt>いみ</rt></ruby>。<strong>me</strong> は「<ruby>私<rt>わたし</rt></ruby>を」のこと。<br/><br/>Call <strong>me</strong> Eddy.<br/>= <ruby>私<rt>わたし</rt></ruby>を エディ と <ruby>呼<rt>よ</rt></ruby>んで。<br/><br/>つまり「<ruby>本名<rt>ほんみょう</rt></ruby>は Edward Trout だけど、エディってあだ<ruby>名<rt>な</rt></ruby>で<ruby>呼<rt>よ</rt></ruby>んでね」って言ってるんだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'なるほど！じゃあ「I\'m from South Africa.」の <strong>from</strong> はどういう<ruby>意味<rt>いみ</rt></ruby>ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong>from</strong> は「〜から」「〜<ruby>出身<rt>しゅっしん</rt></ruby>の」を<ruby>表<rt>あらわ</rt></ruby>す<ruby>言葉<rt>ことば</rt></ruby>だよ。<ruby>出身地<rt>しゅっしんち</rt></ruby>を<ruby>言<rt>い</rt></ruby>うときに<ruby>必<rt>かなら</rt></ruby>ず<ruby>使<rt>つか</rt></ruby>う！<br/><br/>I\'m <strong>from</strong> South Africa.（<ruby>南<rt>みなみ</rt></ruby>アフリカ<ruby>出身<rt>しゅっしん</rt></ruby>）<br/>I\'m <strong>from</strong> Tokyo.（<ruby>東京<rt>とうきょう</rt></ruby><ruby>出身<rt>しゅっしん</rt></ruby>）<br/>I\'m <strong>from</strong> Nagoya.（<ruby>名古屋<rt>なごや</rt></ruby><ruby>出身<rt>しゅっしん</rt></ruby>）<br/><br/>「I\'m from + <ruby>地名<rt>ちめい</rt></ruby>」で<ruby>自己紹介<rt>じこしょうかい</rt></ruby>に<ruby>使<rt>つか</rt></ruby>えるよ！',
      speakable: ["I'm from Tokyo."],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '「Japanese sweets」も<ruby>気<rt>き</rt></ruby>になります。Japanese は「<ruby>日本語<rt>にほんご</rt></ruby>」じゃないんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いいところに<ruby>気<rt>き</rt></ruby>づいたね！ <strong>Japanese</strong> は<ruby>場面<rt>ばめん</rt></ruby>によって<ruby>意味<rt>いみ</rt></ruby>がかわるよ。<br/><br/>・Japanese sweets = <ruby>日本<rt>にほん</rt></ruby>の<ruby>甘<rt>あま</rt></ruby>いお<ruby>菓子<rt>かし</rt></ruby> = <strong><ruby>和菓子<rt>わがし</rt></ruby></strong><br/>・Japanese food = <ruby>日本料理<rt>にほんりょうり</rt></ruby><br/>・I speak Japanese. = <ruby>私<rt>わたし</rt></ruby>は<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>話<rt>はな</rt></ruby>します<br/><br/>名詞の<ruby>前<rt>まえ</rt></ruby>で使うと「<ruby>日本<rt>にほん</rt></ruby>の〜」、一人で使うと「<ruby>日本語<rt>にほんご</rt></ruby>」になるんだ。<ruby>大文字<rt>おおもじ</rt></ruby>で<ruby>始<rt>はじ</rt></ruby>めるのを<ruby>忘<rt>わす</rt></ruby>れずに！',
    },
    {
      type: 'summary-point',
      text: 'Part 1 のキー<ruby>単語<rt>たんご</rt></ruby>: <strong>call me / from + <ruby>地名<rt>ちめい</rt></ruby> / Japanese + <ruby>名詞<rt>めいし</rt></ruby> / love・join・club</strong>',
    },
    {
      type: 'quiz',
      question: '「<ruby>私<rt>わたし</rt></ruby>を ケン と<ruby>呼<rt>よ</rt></ruby>んでください」を<ruby>英語<rt>えいご</rt></ruby>で<ruby>言<rt>い</rt></ruby>うと？',
      options: [
        { letter: 'A', text: 'Call I Ken.', correct: false },
        { letter: 'B', text: 'Call my Ken.', correct: false },
        { letter: 'C', text: 'Call me Ken.', correct: true },
        { letter: 'D', text: 'Call mine Ken.', correct: false },
      ],
      explanation:
        '<strong><ruby>正解<rt>せいかい</rt></ruby>は C</strong>。「<ruby>呼<rt>よ</rt></ruby>ぶ」のうしろの「<ruby>私<rt>わたし</rt></ruby>を」は <strong>me</strong> を<ruby>使<rt>つか</rt></ruby>うよ。Call <strong>me</strong> Ken.（<ruby>私<rt>わたし</rt></ruby>をケンと<ruby>呼<rt>よ</rt></ruby>んで）',
    },

    // ============================================================
    // Part 2: エディと理子の趣味の会話（教科書 P.14-15）
    // ============================================================
    {
      type: 'date',
      text: 'Part 2: <ruby>趣味<rt>しゅみ</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えることば',
    },
    {
      type: 'narrator',
      text: '<ruby>次<rt>つぎ</rt></ruby>は<ruby>理子<rt>りこ</rt></ruby>とエディがラグビーの<ruby>話<rt>はなし</rt></ruby>で<ruby>盛<rt>も</rt></ruby>り<ruby>上<rt>あ</rt></ruby>がる<ruby>場面<rt>ばめん</rt></ruby>。<ruby>教科書<rt>きょうかしょ</rt></ruby> P.14-15 の<ruby>会話<rt>かいわ</rt></ruby>を見てみよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'この<ruby>会話<rt>かいわ</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んでみて！<br/><br/><ruby>理子<rt>りこ</rt></ruby>: <strong>Eddy, do you like rugby?</strong><br/>（エディ、ラグビーは<ruby>好<rt>す</rt></ruby>き？）<br/>エディ: <strong>Yes, I do.</strong><br/>（うん、<ruby>好<rt>す</rt></ruby>きだよ。）<br/><ruby>理子<rt>りこ</rt></ruby>: <strong>I\'m a rugby fan, too. I often watch rugby with my friends.</strong><br/>（<ruby>私<rt>わたし</rt></ruby>もラグビーのファンだよ。<ruby>友達<rt>ともだち</rt></ruby>とよくラグビーを<ruby>見<rt>み</rt></ruby>るんだ。）<br/>エディ: <strong>Great!</strong><br/>（いいね！）',
      speakable: [
        'Do you like rugby?',
        'Yes, I do.',
        "I'm a rugby fan, too.",
        'I often watch rugby with my friends.',
        'Great!',
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '「fan」って<ruby>聞<rt>き</rt></ruby>いたことあります！「<ruby>扇風機<rt>せんぷうき</rt></ruby>」じゃなくて「ファン」の<ruby>方<rt>ほう</rt></ruby>ですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その<ruby>通<rt>とお</rt></ruby>り！<strong>fan</strong> は「<ruby>扇風機<rt>せんぷうき</rt></ruby>」と「ファン（<ruby>愛好者<rt>あいこうしゃ</rt></ruby>）」の<ruby>両方<rt>りょうほう</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>があるんだ。ここでは「ファン」の<ruby>方<rt>ほう</rt></ruby>。<br/><br/>I\'m a rugby <strong>fan</strong>.（<ruby>私<rt>わたし</rt></ruby>はラグビーのファンです）<br/>I\'m a baseball <strong>fan</strong>.（<ruby>野球<rt>やきゅう</rt></ruby>のファンです）<br/><br/>「a + 好きなもの + fan」の<ruby>形<rt>かたち</rt></ruby>で使うよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '「I\'m a rugby fan, <strong>too</strong>.」の <strong>too</strong> は？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong>too</strong> は「…もまた」って<ruby>意味<rt>いみ</rt></ruby>。<ruby>相手<rt>あいて</rt></ruby>に<ruby>共感<rt>きょうかん</rt></ruby>するときによく使う！<br/><br/>エディが「<ruby>好<rt>す</rt></ruby>き」って言った → <ruby>理子<rt>りこ</rt></ruby>も「<ruby>私<rt>わたし</rt></ruby>もファンだよ」と<ruby>共感<rt>きょうかん</rt></ruby><br/>→ I\'m a rugby fan, <strong>too</strong>.<br/><br/>ふつう文の<ruby>最後<rt>さいご</rt></ruby>に <strong>「, too.」</strong> の<ruby>形<rt>かたち</rt></ruby>でつけるよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '「I <strong>often</strong> watch rugby <strong>with</strong> my friends.」も<ruby>気<rt>き</rt></ruby>になります！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'よく<ruby>気<rt>き</rt></ruby>づいたね！この文には3つのキー<ruby>単語<rt>たんご</rt></ruby>があるよ。<br/><br/>・<strong>often</strong>「よく、しばしば」→ <ruby>動詞<rt>どうし</rt></ruby>の前に置く<br/>・<strong>watch</strong>「<ruby>注意<rt>ちゅうい</rt></ruby>して<ruby>見<rt>み</rt></ruby>る」→ スポーツ・テレビなどに使う<br/>・<strong>with</strong>「…と<ruby>一緒<rt>いっしょ</rt></ruby>に」→ <ruby>誰<rt>だれ</rt></ruby>とするかを<ruby>表<rt>あらわ</rt></ruby>す<br/><br/>I <strong>often</strong> <strong>watch</strong> rugby <strong>with</strong> my friends.<br/>= <ruby>私<rt>わたし</rt></ruby>は <strong>よく</strong> <strong><ruby>友達<rt>ともだち</rt></ruby>と</strong> ラグビーを <strong><ruby>見<rt>み</rt></ruby>る</strong>。<br/><br/>3つの<ruby>単語<rt>たんご</rt></ruby>を<ruby>組<rt>く</rt></ruby>み<ruby>合<rt>あ</rt></ruby>わせると、<ruby>細<rt>こま</rt></ruby>かい<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えられるね！',
    },
    {
      type: 'summary-point',
      text: 'Part 2 のキー<ruby>単語<rt>たんご</rt></ruby>: <strong>fan / too（…もまた）/ often（よく）/ watch（<ruby>見<rt>み</rt></ruby>る）/ with（〜と）/ friend</strong>',
    },
    {
      type: 'quiz',
      question: '「<ruby>私<rt>わたし</rt></ruby>はよくサッカーを<ruby>友達<rt>ともだち</rt></ruby>と<ruby>見<rt>み</rt></ruby>ます。」を<ruby>英語<rt>えいご</rt></ruby>にするとき、(　　) に<ruby>入<rt>はい</rt></ruby>る<ruby>順番<rt>じゅんばん</rt></ruby>は？\nI (　1　) watch soccer (　2　) my friends.',
      options: [
        { letter: 'A', text: '1: with / 2: often', correct: false },
        { letter: 'B', text: '1: often / 2: with', correct: true },
        { letter: 'C', text: '1: too / 2: from', correct: false },
        { letter: 'D', text: '1: from / 2: too', correct: false },
      ],
      explanation:
        '<strong><ruby>正解<rt>せいかい</rt></ruby>は B</strong>。<strong>often</strong>（よく）は<ruby>動詞<rt>どうし</rt></ruby> watch の前。<strong>with</strong>（〜と<ruby>一緒<rt>いっしょ</rt></ruby>に）は my friends の前。I often watch soccer with my friends.',
    },

    // ============================================================
    // Part 3: アナと理子のマンガの話（教科書 P.16-18）
    // ============================================================
    {
      type: 'date',
      text: 'Part 3: <ruby>学校<rt>がっこう</rt></ruby>・<ruby>興味<rt>きょうみ</rt></ruby>のことば',
    },
    {
      type: 'narrator',
      text: '<ruby>最後<rt>さいご</rt></ruby>は<ruby>週末<rt>しゅうまつ</rt></ruby>の<ruby>書店<rt>しょてん</rt></ruby>でアナと<ruby>理子<rt>りこ</rt></ruby>がマンガの<ruby>話<rt>はなし</rt></ruby>をする<ruby>場面<rt>ばめん</rt></ruby>。<ruby>教科書<rt>きょうかしょ</rt></ruby> P.16-18 の<ruby>会話<rt>かいわ</rt></ruby>を見てみよう！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'この<ruby>会話<rt>かいわ</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んでみよう！<br/><br/>アナ: <strong>Do you like comics?</strong><br/>（マンガは<ruby>好<rt>す</rt></ruby>き？）<br/><ruby>理子<rt>りこ</rt></ruby>: <strong>Yes, I do. I draw comics, too.</strong><br/>（うん。<ruby>私<rt>わたし</rt></ruby>もマンガをかくの。）<br/>アナ: <strong>Wow! Are you an anime fan?</strong><br/>（すごい！アニメのファンなの？）<br/><ruby>理子<rt>りこ</rt></ruby>: <strong>Yes, I am.</strong><br/>アナ: <strong>So, are you in the manga club?</strong><br/>（じゃあ、マンガ<ruby>部<rt>ぶ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ってるの？）<br/><ruby>理子<rt>りこ</rt></ruby>: <strong>No, I\'m not. I\'m in the art club.</strong><br/>（いいえ、ちがうの。<ruby>美術部<rt>びじゅつぶ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ってる。）',
      speakable: [
        'Do you like comics?',
        'I draw comics, too.',
        'Are you an anime fan?',
        'Are you in the manga club?',
        "I'm in the art club.",
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>draw</strong> って「<ruby>絵<rt>え</rt></ruby>をかく」ですよね？write（<ruby>書<rt>か</rt></ruby>く）とどう<ruby>違<rt>ちが</rt></ruby>うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いい<ruby>質問<rt>しつもん</rt></ruby>！<ruby>日本語<rt>にほんご</rt></ruby>では<ruby>両方<rt>りょうほう</rt></ruby>「かく」だけど、<ruby>英語<rt>えいご</rt></ruby>では<ruby>使<rt>つか</rt></ruby>い<ruby>分<rt>わ</rt></ruby>けるよ！<br/><br/>・<strong>draw</strong> = <ruby>線<rt>せん</rt></ruby>で<ruby>絵<rt>え</rt></ruby>を<ruby>描<rt>か</rt></ruby>く（マンガ・スケッチ）<br/>・<strong>write</strong> = <ruby>字<rt>じ</rt></ruby>を<ruby>書<rt>か</rt></ruby>く（<ruby>手紙<rt>てがみ</rt></ruby>・<ruby>作文<rt>さくぶん</rt></ruby>）<br/>・<strong>paint</strong> = <ruby>絵<rt>え</rt></ruby>の<ruby>具<rt>ぐ</rt></ruby>でぬる（<ruby>水彩画<rt>すいさいが</rt></ruby>・<ruby>油絵<rt>あぶらえ</rt></ruby>）<br/><br/>I <strong>draw</strong> comics.（マンガを<strong>かく</strong>）はピッタリ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<strong>So,</strong> や <strong>How about you?</strong> もよく出てきますよね。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そう！この2つは<ruby>会話<rt>かいわ</rt></ruby>のつなぎでとても<ruby>大切<rt>たいせつ</rt></ruby>。<br/><br/>・<strong>So,</strong> 〜 「じゃあ、〜」「だから、〜」<br/>　→ <ruby>前<rt>まえ</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>を<ruby>受<rt>う</rt></ruby>けて<ruby>話<rt>はな</rt></ruby>を<ruby>続<rt>つづ</rt></ruby>けるとき<br/>　例: <strong>So</strong>, are you in the manga club?（じゃあ、マンガ<ruby>部<rt>ぶ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ってるの？）<br/><br/>・<strong>How about you?</strong> 「あなたはどう？」<br/>　→ <ruby>自分<rt>じぶん</rt></ruby>のことを<ruby>言<rt>い</rt></ruby>った<ruby>後<rt>あと</rt></ruby>に<ruby>相手<rt>あいて</rt></ruby>に<ruby>聞<rt>き</rt></ruby>き<ruby>返<rt>かえ</rt></ruby>すとき<br/>　例: I like math. <strong>How about you?</strong>',
      speakable: ['How about you?'],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>会話<rt>かいわ</rt></ruby>がうまく<ruby>続<rt>つづ</rt></ruby>けられそう！<ruby>教科<rt>きょうか</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>もたくさんありますね。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'うん、<ruby>教科名<rt>きょうかめい</rt></ruby>はまとめて<ruby>覚<rt>おぼ</rt></ruby>えると<ruby>便利<rt>べんり</rt></ruby>だよ！<br/><br/>📚 <strong><ruby>教科<rt>きょうか</rt></ruby></strong><br/>・<strong>English</strong>（<ruby>英語<rt>えいご</rt></ruby>）← <ruby>大文字<rt>おおもじ</rt></ruby>から！<br/>・<strong>math</strong>（<ruby>数学<rt>すうがく</rt></ruby>）<br/>・<strong>art</strong>（<ruby>美術<rt>びじゅつ</rt></ruby>）<br/>・<strong>swimming</strong>（<ruby>水泳<rt>すいえい</rt></ruby>）<br/><br/>🏫 <strong><ruby>学校<rt>がっこう</rt></ruby><ruby>生活<rt>せいかつ</rt></ruby></strong><br/>・<strong>school</strong>（<ruby>学校<rt>がっこう</rt></ruby>）<br/>・<strong>lesson</strong>（<ruby>授業<rt>じゅぎょう</rt></ruby>）<br/>・<strong>lunch</strong>（<ruby>昼食<rt>ちゅうしょく</rt></ruby>）<br/>・<strong>take art lessons</strong> = <ruby>美術<rt>びじゅつ</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける',
    },
    {
      type: 'summary-point',
      text: 'Part 3 のキー<ruby>単語<rt>たんご</rt></ruby>: <strong>draw / comic / so / how / about / school / art / English / math / lunch / lesson / take / bike / swimming / anime</strong>',
    },
    {
      type: 'quiz',
      question: '「<ruby>美術<rt>びじゅつ</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けます」を<ruby>英語<rt>えいご</rt></ruby>で<ruby>言<rt>い</rt></ruby>うと？',
      options: [
        { letter: 'A', text: 'I draw art lessons.', correct: false },
        { letter: 'B', text: 'I watch art lessons.', correct: false },
        { letter: 'C', text: 'I take art lessons.', correct: true },
        { letter: 'D', text: 'I love art lessons.', correct: false },
      ],
      explanation:
        '<strong><ruby>正解<rt>せいかい</rt></ruby>は C</strong>。「<ruby>授業<rt>じゅぎょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける」は <strong>take</strong> を使うよ。take + <ruby>教科<rt>きょうか</rt></ruby> + lessons の<ruby>形<rt>かたち</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えよう。',
    },

    // ============================================================
    // まとめ
    // ============================================================
    {
      type: 'end',
      points: [
        'Part 1（<ruby>自己紹介<rt>じこしょうかい</rt></ruby>）: call me / from + <ruby>地名<rt>ちめい</rt></ruby> / Japanese + <ruby>名詞<rt>めいし</rt></ruby> / love / join / club',
        'Part 2（<ruby>趣味<rt>しゅみ</rt></ruby>）: fan / too / often / watch / with / friend で「<ruby>誰<rt>だれ</rt></ruby>と何を<ruby>見<rt>み</rt></ruby>るか」を<ruby>表現<rt>ひょうげん</rt></ruby>',
        'Part 3（<ruby>学校<rt>がっこう</rt></ruby>）: draw（<ruby>絵<rt>え</rt></ruby>をかく）/ take + <ruby>教科<rt>きょうか</rt></ruby> + lessons（<ruby>授業<rt>じゅぎょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>ける）',
        '<ruby>会話<rt>かいわ</rt></ruby>のつなぎ: So,〜（じゃあ、〜）/ How about you?（あなたはどう？）',
        '40<ruby>語<rt>ご</rt></ruby>をフラッシュカードで<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>し<ruby>覚<rt>おぼ</rt></ruby>えよう！',
      ],
    },
  ],
};
