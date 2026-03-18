import type { Topic } from '../../../../../../../data/types';

export const comparison: Topic = {
  id: 'eng-comparison',
  eraId: 'english-grade2',
  name: '比較',
  subtitle: '比較級 / 最上級 / as〜as',
  icon: '⚖️',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: '比較級（〜より…だ）',
          content:
            '2つのものを比べて「AはBより〜だ」と言いたいとき、比較級を使うよ。短いことばには -er をつけ、長いことばの前には more をつけるよ。',
          keyPoints: [
            '短いことば: tall → taller / old → older',
            '長いことば: beautiful → more beautiful / interesting → more interesting',
            'A is taller than B. = AはBより背が高い。',
            'This book is more interesting than that one. = この本はあの本よりおもしろい。',
            'than 〜 =「〜より」',
          ],
        },
        {
          title: '最上級（いちばん〜だ）と as〜as（同じくらい〜だ）',
          content:
            '3つ以上の中で「いちばん〜だ」と言いたいときは最上級を使うよ。短いことばには -est をつけ、長いことばの前には most をつけるよ。「同じくらい〜だ」は as〜as で表すよ。',
          keyPoints: [
            '短いことば: tall → tallest / old → oldest',
            '長いことば: beautiful → most beautiful / interesting → most interesting',
            'He is the tallest in his class. = 彼はクラスでいちばん背が高い。',
            '最上級の前にはふつう the をつける',
            'as〜as: She is as tall as her mother. = 彼女はお母さんと同じくらいの背の高さだ。',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      // === 比較級の基本 (basic) ===
      {
        id: 'eng-comp-fc1',
        front: 'taller',
        back: 'Tom is (　　) than Ken.\n（トムはケンより背が高い。）',
        hint: 'tall の比較級は…？',
        explanation: '短いことばの比較級は -er をつけるよ。tall → taller',
        difficulty: 'basic',
      },
      {
        id: 'eng-comp-fc2',
        front: 'more interesting',
        back: 'This book is (　　) than that one.\n（この本はあの本よりおもしろい。）',
        hint: 'interesting は長いことばだから、前に何かをつけるよ',
        explanation: '長いことばの比較級は前に more をつけるよ。more interesting',
        difficulty: 'basic',
      },
      {
        id: 'eng-comp-fc3',
        front: 'tallest',
        back: 'He is the (　　) in his class.\n（彼はクラスでいちばん背が高い。）',
        hint: 'tall の最上級は…？',
        explanation: '短いことばの最上級は -est をつけるよ。tall → tallest',
        difficulty: 'basic',
      },
      {
        id: 'eng-comp-fc4',
        front: 'most beautiful',
        back: 'This is the (　　) flower.\n（これはいちばん美しい花です。）',
        hint: 'beautiful は長いことばだから…？',
        explanation: '長いことばの最上級は前に most をつけるよ。most beautiful',
        difficulty: 'basic',
      },
      {
        id: 'eng-comp-fc5',
        front: 'older',
        back: 'She is (　　) than her brother.\n（彼女は弟より年上だ。）',
        hint: 'old の比較級は…？',
        explanation: '短いことばの比較級は -er をつけるよ。old → older',
        difficulty: 'basic',
      },
      // === 同等比較・否定 (standard) ===
      {
        id: 'eng-comp-fc6',
        front: 'as tall as',
        back: 'She is (　　) her mother.\n（彼女はお母さんと同じくらいの背の高さだ。）',
        hint: '「同じくらい〜だ」は…？',
        explanation: '「同じくらい〜だ」は as〜as で表すよ。as tall as',
        difficulty: 'standard',
      },
      {
        id: 'eng-comp-fc7',
        front: 'not as tall as',
        back: 'Ken is (　　) Tom.\n（ケンはトムほど背が高くない。）',
        hint: '「〜ほど…でない」は not as〜as だよ',
        explanation:
          'not as〜as で「〜ほど…でない」を表せるよ。Ken is not as tall as Tom.',
        difficulty: 'standard',
      },
      // === つづり変化 (standard) ===
      {
        id: 'eng-comp-fc8',
        front: 'bigger',
        back: 'This box is (　　) than that one.\n（この箱はあの箱より大きい。）',
        hint: 'big の比較級は？ つづりに注意！',
        explanation: 'big → bigger。最後の文字を重ねて er をつけるよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-comp-fc9',
        front: 'hotter',
        back: 'Today is (　　) than yesterday.\n（今日は昨日より暑い。）',
        hint: 'hot の比較級は？ つづりに注意！',
        explanation: 'hot → hotter。最後の文字を重ねて er をつけるよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-comp-fc10',
        front: 'happier',
        back: 'happy の比較級は？',
        hint: 'y で終わるときは y を i にかえて er をつけるよ',
        explanation: 'happy → happier。y を i にかえて er をつけるよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-comp-fc11',
        front: 'easiest',
        back: 'This is the (　　) question.\n（これはいちばんかんたんな問題だ。）',
        hint: 'easy の最上級は？ y で終わるときは…',
        explanation: 'easy → easiest。y を i にかえて est をつけるよ。',
        difficulty: 'standard',
      },
      // === 不規則変化 (standard) ===
      {
        id: 'eng-comp-fc12',
        front: 'better',
        back: 'This plan is (　　) than that one.\n（この計画はあの計画よりいい。）',
        hint: 'good の比較級はとくべつな形だよ',
        explanation: 'good → better。とくべつな形だから覚えよう。',
        difficulty: 'standard',
      },
      {
        id: 'eng-comp-fc13',
        front: 'best',
        back: 'She is the (　　) singer in our school.\n（彼女は私たちの学校でいちばん歌がうまい。）',
        hint: 'good の最上級はとくべつな形だよ',
        explanation: 'good → best。better → best のセットで覚えよう。',
        difficulty: 'standard',
      },
      {
        id: 'eng-comp-fc14',
        front: 'worse',
        back: 'bad の比較級は？',
        hint: 'good → better と同じようにとくべつな形だよ',
        explanation: 'bad → worse → worst。とくべつな形だから覚えよう。',
        difficulty: 'standard',
      },
      {
        id: 'eng-comp-fc15',
        front: 'more',
        back: 'many / much の比較級は？',
        hint: 'これもとくべつな形だよ',
        explanation: 'many / much → more → most。とくべつな形だから覚えよう。',
        difficulty: 'standard',
      },
      // === the / than / in / of (standard) ===
      {
        id: 'eng-comp-fc16',
        front: 'the',
        back: 'He is (　　) fastest runner.\n（彼はいちばん速い走者だ。）',
        hint: '最上級の前につけることばは…？',
        explanation: '最上級の前にはふつう the をつけるよ。the fastest',
        difficulty: 'standard',
      },
      {
        id: 'eng-comp-fc17',
        front: 'than',
        back: 'She is older (　　) he.\n（彼女は彼より年上だ。）',
        hint: '「〜より」を表すことばは…？',
        explanation: '「〜より」は than だよ。比較級 + than 〜 の形！',
        difficulty: 'standard',
      },
      {
        id: 'eng-comp-fc18',
        front: 'in',
        back: 'He is the tallest (　　) his class.\n（彼はクラスでいちばん背が高い。）',
        hint: '場所や範囲を表すときは…？',
        explanation: '場所・範囲を表すときは in を使うよ。in his class',
        difficulty: 'standard',
      },
      {
        id: 'eng-comp-fc19',
        front: 'of',
        back: 'She is the youngest (　　) the three.\n（彼女は3人の中でいちばん若い。）',
        hint: '数のグループを表すときは…？',
        explanation: '数のグループを表すときは of を使うよ。of the three',
        difficulty: 'standard',
      },
      // === Which / Who 疑問文 (standard) ===
      {
        id: 'eng-comp-fc20',
        front: 'Which is larger, Tokyo or Osaka?',
        back: '「東京と大阪、どちらが大きいですか。」を英語で？',
        hint: 'Which is + 比較級, A or B? の形だよ',
        explanation:
          '2つを比べて「どちらが〜？」は Which is + 比較級, A or B? だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-comp-fc21',
        front: 'Who runs the fastest in your class?',
        back: '「だれがクラスでいちばん速く走りますか。」を英語で？',
        hint: 'Who + 動詞 + the + 最上級…？ の形だよ',
        explanation: '「だれがいちばん〜？」は Who + 動詞 + the + 最上級 だよ。',
        difficulty: 'standard',
      },
      // === like better / the best (advanced) ===
      {
        id: 'eng-comp-fc22',
        front: 'I like winter better than summer.',
        back: '「私は夏より冬が好きです。」を英語で？',
        hint: '「AよりBが好き」は like B better than A だよ',
        explanation:
          '「AよりBが好き」は like B better than A。好きなほうを先に言うよ。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-comp-fc23',
        front: 'He likes soccer the best of all sports.',
        back: '「彼はすべてのスポーツの中でサッカーがいちばん好きです。」を英語で？',
        hint: '「いちばん好き」は like 〜 the best だよ',
        explanation:
          '「いちばん好き」は like 〜 the best。of all 〜 =「すべての〜の中で」',
        difficulty: 'advanced',
      },
      // === one of the + 最上級 / 比較級 and 比較級 (advanced) ===
      {
        id: 'eng-comp-fc24',
        front: 'one of the most famous singers',
        back: 'He is (　　) in the world.\n（彼は世界でいちばん有名な歌手の一人です。）',
        hint: '「いちばん〜な…の一つ」は one of the + 最上級 + 複数名詞 だよ',
        explanation:
          'one of the + 最上級 + 複数名詞 =「いちばん〜な…の一つ」。名詞は複数形にするよ！',
        difficulty: 'advanced',
      },
      {
        id: 'eng-comp-fc25',
        front: 'warmer and warmer',
        back: 'It is getting (　　).\n（だんだん暖かくなっている。）',
        hint: '「だんだん〜」は比較級を2回使うよ',
        explanation:
          '「だんだん〜」は 比較級 + and + 比較級。warmer and warmer',
        difficulty: 'advanced',
      },
      {
        id: 'eng-comp-fc26',
        front: 'most popular',
        back: 'This song is the (　　) in Japan.\n（この曲は日本でいちばん人気がある。）',
        hint: 'popular は長いことばだから…？',
        explanation: '長いことばの最上級は前に most をつけるよ。most popular',
        difficulty: 'basic',
      },
      {
        id: 'eng-comp-fc27',
        front: 'better',
        back: 'She plays the piano (　　) than I.\n（彼女は私より上手にピアノを弾く。）',
        hint: 'well（上手に）の比較級は？ good と同じ変化だよ',
        explanation:
          'well → better → best。good と同じ不規則変化をするよ。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-comp-fc28',
        front: 'biggest',
        back: 'Tokyo is the (　　) city in Japan.\n（東京は日本でいちばん大きい都市です。）',
        hint: 'big の最上級は？ つづりに注意！',
        explanation:
          'big → bigger → biggest。最後の文字を重ねて est をつけるよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-comp-fc29',
        front: 'more difficult',
        back: 'This question is (　　) than that one.\n（この問題はあの問題より難しい。）',
        hint: 'difficult は長いことばだから…？',
        explanation:
          '長いことばの比較級は前に more をつけるよ。more difficult',
        difficulty: 'basic',
      },
      {
        id: 'eng-comp-fc30',
        front: 'worst',
        back: 'bad の最上級は？',
        hint: 'bad → worse → ？',
        explanation: 'bad → worse → worst。不規則変化のセットで覚えよう。',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        // === 4択問題 (choice) ===
        {
          id: 'eng-comp-q1',
          question:
            '「Tom is (　　) than Ken.（トムはケンより背が高い。）」\nの (　　) に入るのは？',
          options: ['tall', 'tallest', 'taller', 'more tall'],
          correctIndex: 2,
          explanation:
            '「〜より背が高い」は比較級。短いことばだから -er をつけて taller だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-comp-q2',
          question:
            '「This book is (　　) than that one.（この本はあの本よりおもしろい。）」\nの (　　) に入るのは？',
          options: [
            'interesting',
            'interestinger',
            'most interesting',
            'more interesting',
          ],
          correctIndex: 3,
          explanation:
            'interesting は長いことばだから、前に more をつけるよ。more interesting',
          difficulty: 'basic',
        },
        {
          id: 'eng-comp-q3',
          question:
            '「She is the (　　) student in our class.（彼女はクラスでいちばん背が高い生徒だ。）」\nの (　　) に入るのは？',
          options: ['taller', 'tallest', 'tall', 'most tall'],
          correctIndex: 1,
          explanation:
            '「いちばん〜」は最上級。短いことばだから -est をつけて tallest だよ。前に the もわすれずに！',
          difficulty: 'basic',
        },
        {
          id: 'eng-comp-q4',
          question:
            '「She is (　　) old (　　) her sister.（彼女はお姉さんと同じくらいの年齢だ。）」\nの (　　) に入る組み合わせは？',
          options: ['as ... as', 'more ... than', 'the ... in', '-er ... than'],
          correctIndex: 0,
          explanation:
            '「同じくらい〜だ」は as〜as で表すよ。as old as だね。',
          difficulty: 'standard',
        },
        {
          id: 'eng-comp-q5',
          question: 'good の比較級・最上級として正しい組み合わせは？',
          options: [
            'gooder — goodest',
            'more good — most good',
            'better — best',
            'weller — wellest',
          ],
          correctIndex: 2,
          explanation:
            'good の比較級は better、最上級は best。とくべつな形だから覚えよう！',
          difficulty: 'standard',
        },
        {
          id: 'eng-comp-q9',
          question:
            '「This box is (　　) than that one.（この箱はあの箱より大きい。）」\nの (　　) に入るのは？',
          options: ['biger', 'more big', 'bigger', 'biggest'],
          correctIndex: 2,
          explanation:
            'big → bigger。「短い母音＋子音」で終わるときは、最後の文字を重ねて er をつけるよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-comp-q10',
          question: 'bad の比較級・最上級として正しい組み合わせは？',
          options: [
            'badder — baddest',
            'worse — worst',
            'more bad — most bad',
            'bader — badest',
          ],
          correctIndex: 1,
          explanation:
            'bad → worse → worst。不規則変化だからセットで覚えよう！',
          difficulty: 'standard',
        },
        {
          id: 'eng-comp-q11',
          question:
            '「He is the tallest (　　) the five.（彼は5人の中でいちばん背が高い。）」\nの (　　) に入るのは？',
          options: ['in', 'of', 'than', 'at'],
          correctIndex: 1,
          explanation:
            '数のグループ（the five = 5人）には of を使うよ。場所には in、数には of！',
          difficulty: 'standard',
        },
        {
          id: 'eng-comp-q12',
          question:
            '「Mt. Fuji is the highest mountain (　　) Japan.（富士山は日本でいちばん高い山です。）」\nの (　　) に入るのは？',
          options: ['of', 'than', 'in', 'at'],
          correctIndex: 2,
          explanation:
            '場所・範囲（Japan）には in を使うよ。in Japan =「日本で」',
          difficulty: 'basic',
        },
        {
          id: 'eng-comp-q13',
          question:
            '「She plays the piano (　　) than I.（彼女は私より上手にピアノを弾く。）」\nの (　　) に入るのは？',
          options: ['good', 'well', 'better', 'best'],
          correctIndex: 2,
          explanation:
            'well（上手に）の比較級は better。good と同じ不規則変化をするよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-comp-q14',
          question:
            '「I like summer (　　) than winter.（私は冬より夏が好きです。）」\nの (　　) に入るのは？',
          options: ['more', 'most', 'better', 'best'],
          correctIndex: 2,
          explanation:
            '「AよりBが好き」は like B better than A。比較級は better を使うよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-comp-q15',
          question:
            '「This problem is (　　) than that one.（この問題はあの問題よりひどい。）」\nの (　　) に入るのは？',
          options: ['bad', 'worse', 'worst', 'more bad'],
          correctIndex: 1,
          explanation: 'bad の比較級は worse。不規則変化だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-comp-q16',
          question:
            '「Ken is (　　) Tom.（ケンはトムほど背が高くない。）」\nの (　　) に入るのは？',
          options: [
            'not as tall as',
            'not taller as',
            'as not tall as',
            'more tall than',
          ],
          correctIndex: 0,
          explanation:
            '「〜ほど…でない」は not as〜as の形。Ken is not as tall as Tom.',
          difficulty: 'standard',
        },
        {
          id: 'eng-comp-q17',
          question:
            '「He is (　　) the most famous singers in the world.（彼は世界でいちばん有名な歌手の一人だ。）」\nの (　　) に入るのは？',
          options: ['one', 'one of', 'the one', 'some of'],
          correctIndex: 1,
          explanation:
            '「いちばん〜な…の一人」は one of the + 最上級 + 複数名詞 の形だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-comp-q18',
          question:
            '「It is getting (　　).（だんだん暑くなっている。）」\nの (　　) に入るのは？',
          options: [
            'hot and hot',
            'hotter and hotter',
            'more hot and hot',
            'hottest and hottest',
          ],
          correctIndex: 1,
          explanation:
            '「だんだん〜」は 比較級 + and + 比較級 の形。hotter and hotter だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-comp-q25',
          question:
            '「Which season do you like (　　)?（あなたはどの季節がいちばん好きですか。）」\nの (　　) に入るのは？',
          options: ['better', 'the best', 'most', 'well'],
          correctIndex: 1,
          explanation:
            '3つ以上の中で「いちばん好き」は like 〜 the best の形だよ。',
          difficulty: 'standard',
        },
        // === 並べ替え問題 (reorder) ===
        {
          id: 'eng-comp-q6',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「彼はトムより背が高い。」という英文を作ろう。',
          words: ['Tom', 'taller', 'he', 'than', 'is'],
          correctOrder: [2, 4, 1, 3, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「He is taller than Tom.」が正解。比較級 + than 〜 =「〜より…だ」の形だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-comp-q7',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「この本はもっとおもしろい。」という英文を作ろう。',
          words: ['more', 'interesting', 'is', 'this', 'book'],
          correctOrder: [3, 4, 2, 0, 1],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「This book is more interesting.」が正解。interesting は長いことばだから、前に more をつけて比較級にするよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-comp-q8',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「彼はトムと同じくらい速く走ります。」という英文を完成させよう。\nHe runs (　　)(　　)(　　) Tom.',
          words: ['fast', 'as', 'as'],
          correctOrder: [1, 0, 2],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「He runs as fast as Tom.」が正解。as〜as =「同じくらい〜だ」の形で、あいだに形容詞や副詞を入れるよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-comp-q19',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「彼女はクラスでいちばん速く走ります。」という英文を作ろう。',
          words: ['fastest', 'runs', 'she', 'the', 'in', 'her class'],
          correctOrder: [2, 1, 3, 0, 4, 5],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「She runs the fastest in her class.」が正解。the + 最上級 + in 〜 =「〜の中でいちばん」の形だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-comp-q20',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「犬とねこ、どちらが好きですか。」という英文を完成させよう。\n(　　)(　　)(　　)(　　)(　　), dogs or cats?',
          words: ['better', 'you', 'which', 'like', 'do'],
          correctOrder: [2, 4, 1, 3, 0],
          punctuation: '?',
          options: [],
          correctIndex: -1,
          explanation:
            '「Which do you like better, dogs or cats?」が正解。Which do you like better, A or B? =「AとBどちらが好き？」の形だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-comp-q21',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「だれがクラスでいちばん背が高いですか。」という英文を作ろう。',
          words: ['the tallest', 'who', 'in', 'is', 'your class'],
          correctOrder: [1, 3, 0, 2, 4],
          punctuation: '?',
          options: [],
          correctIndex: -1,
          explanation:
            '「Who is the tallest in your class?」が正解。Who is the + 最上級 in 〜 ? =「だれがいちばん〜？」の形だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-comp-q22',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「彼は世界でいちばん有名な歌手の一人です。」という英文を作ろう。',
          words: [
            'one of',
            'he',
            'singers',
            'the most famous',
            'is',
            'in the world',
          ],
          correctOrder: [1, 4, 0, 3, 2, 5],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「He is one of the most famous singers in the world.」が正解。one of the + 最上級 + 複数名詞 =「いちばん〜な…の一つ」だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-comp-q23',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「だんだん暑くなっている。」という英文を作ろう。',
          words: ['hotter', 'is', 'it', 'and', 'getting', 'hotter'],
          correctOrder: [2, 1, 4, 0, 3, 5],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「It is getting hotter and hotter.」が正解。比較級 + and + 比較級 =「だんだん〜」の形だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-comp-q24',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「ケンはトムほど背が高くない。」という英文を作ろう。',
          words: ['as', 'not', 'Ken', 'tall', 'Tom', 'as', 'is'],
          correctOrder: [2, 6, 1, 0, 3, 5, 4],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「Ken is not as tall as Tom.」が正解。not as〜as =「〜ほど…でない」の形だよ。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-comp-ex1',
          question:
            '次の日本語を英語にしよう。\n「トムはケンより背が高い。」',
          steps: [
            {
              title: 'Step 1: 「だれが？」をさがそう',
              content: '「トムは」→ 英語で Tom だね。',
              highlight: 'Tom',
            },
            {
              title: 'Step 2: 「〜より背が高い」を比較級にしよう',
              content:
                '「背が高い」= tall。2つを比べて「〜より」だから比較級にするよ。tall は短いことばだから -er をつけて taller だね。',
              highlight: 'is taller',
            },
            {
              title: 'Step 3: 「〜より」を表す than をつけよう',
              content: '「ケンより」→ than Ken をうしろにつけるよ。',
              highlight: 'than Ken',
            },
          ],
          answer:
            'Tom is taller than Ken.（トムはケンより背が高い。）',
        },
        {
          id: 'eng-comp-ex2',
          question:
            '次の日本語を英語にしよう。\n「彼はクラスでいちばん背が高い。」',
          steps: [
            {
              title: 'Step 1: 「だれが？」をさがそう',
              content: '「彼は」→ 英語で He だね。',
              highlight: 'He',
            },
            {
              title: 'Step 2: 「いちばん背が高い」を最上級にしよう',
              content:
                '「いちばん〜」だから最上級。tall は短いことばだから -est をつけて tallest。最上級の前には the をつけるよ。',
              highlight: 'is the tallest',
            },
            {
              title: 'Step 3: 「クラスで」をつけよう',
              content:
                '「クラスで」= in his class。「〜の中で」には in を使うよ。',
              highlight: 'in his class',
            },
          ],
          answer:
            'He is the tallest in his class.（彼はクラスでいちばん背が高い。）',
        },
        {
          id: 'eng-comp-ex3',
          question:
            '次の日本語を英語にしよう。\n「この本はあの本と同じくらいおもしろい。」',
          steps: [
            {
              title: 'Step 1: 「何が？」をさがそう',
              content: '「この本は」→ 英語で This book だね。',
              highlight: 'This book',
            },
            {
              title: 'Step 2: 「同じくらいおもしろい」を as〜as にしよう',
              content:
                '「同じくらい〜だ」は as〜as で表すよ。as interesting as だね。',
              highlight: 'is as interesting as',
            },
            {
              title: 'Step 3: 比べる相手をつけよう',
              content:
                '「あの本」= that one。2つ目の as のうしろに置くよ。',
              highlight: 'that one',
            },
          ],
          answer:
            'This book is as interesting as that one.（この本はあの本と同じくらいおもしろい。）',
        },
        {
          id: 'eng-comp-ex4',
          question:
            '次の日本語を英語にしよう。\n「彼女は私より上手にピアノを弾く。」',
          steps: [
            {
              title: 'Step 1: 「だれが？」をさがそう',
              content: '「彼女は」→ 英語で She だね。',
              highlight: 'She',
            },
            {
              title: 'Step 2: 「ピアノを弾く」を英語にしよう',
              content:
                '「ピアノを弾く」= plays the piano。楽器の前には the をつけるよ。',
              highlight: 'plays the piano',
            },
            {
              title: 'Step 3: 「より上手に」を比較級にしよう',
              content:
                '「上手に」= well。well の比較級は不規則変化で better だよ。「私より」= than I をうしろにつけよう。',
              highlight: 'better than I',
            },
          ],
          answer:
            'She plays the piano better than I.（彼女は私より上手にピアノを弾く。）',
        },
        {
          id: 'eng-comp-ex5',
          question:
            '次の日本語を英語にしよう。\n「英語と数学、どちらが難しいですか。」',
          steps: [
            {
              title: 'Step 1: 「どちら」→ Which を使おう',
              content:
                '2つのものを比べて「どちらが〜？」は Which is …? の形だよ。',
              highlight: 'Which is',
            },
            {
              title: 'Step 2: 「難しい」を比較級にしよう',
              content:
                '「難しい」= difficult。difficult は長いことばだから more をつけるよ。more difficult',
              highlight: 'more difficult',
            },
            {
              title: 'Step 3: 「AとB」→ , A or B? をつけよう',
              content:
                '「英語と数学」→ , English or math? を文末につけるよ。',
              highlight: ', English or math?',
            },
          ],
          answer:
            'Which is more difficult, English or math?（英語と数学、どちらが難しいですか。）',
        },
        {
          id: 'eng-comp-ex6',
          question:
            '次の日本語を英語にしよう。\n「ケンはトムほど背が高くない。」',
          steps: [
            {
              title: 'Step 1: 「だれが？」をさがそう',
              content: '「ケンは」→ 英語で Ken だね。',
              highlight: 'Ken',
            },
            {
              title: 'Step 2: 「〜ほど…でない」→ not as〜as を使おう',
              content:
                '「〜ほど…でない」は not as〜as で表すよ。「背が高い」= tall だから、is not as tall as だね。',
              highlight: 'is not as tall as',
            },
            {
              title: 'Step 3: 比べる相手をつけよう',
              content:
                '「トムほど」→ 2つ目の as のうしろに Tom を置くよ。',
              highlight: 'Tom',
            },
          ],
          answer:
            'Ken is not as tall as Tom.（ケンはトムほど背が高くない。）',
        },
        {
          id: 'eng-comp-ex7',
          question:
            '次の日本語を英語にしよう。\n「富士山は日本でいちばん高い山の一つです。」',
          steps: [
            {
              title: 'Step 1: 「何が？」をさがそう',
              content: '「富士山は」→ 英語で Mt. Fuji だね。',
              highlight: 'Mt. Fuji',
            },
            {
              title: 'Step 2: 「いちばん〜な…の一つ」→ one of the + 最上級 + 複数名詞',
              content:
                '「いちばん高い山の一つ」= one of the highest mountains。名詞は複数形にするよ！',
              highlight: 'is one of the highest mountains',
            },
            {
              title: 'Step 3: 「日本で」をつけよう',
              content:
                '「日本で」= in Japan。場所を表すときは in を使うよ。',
              highlight: 'in Japan',
            },
          ],
          answer:
            'Mt. Fuji is one of the highest mountains in Japan.（富士山は日本でいちばん高い山の一つです。）',
        },
      ],
    },
    chatId: 'eng-comparison',
  },
};
