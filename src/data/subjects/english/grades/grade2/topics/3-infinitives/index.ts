import type { Topic } from '../../../../../../../data/types';

export const infinitives: Topic = {
  id: 'eng-infinitives',
  eraId: 'english-grade2',
  name: '不定詞',
  subtitle: 'to + 動詞の原形 の使い方をマスターしよう',
  icon: '🎯',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '不定詞（to + 動詞の原形）ってなに？',
          content:
            '不定詞とは to + 動詞の原形 のこと。to play、to read、to study のような形だよ。使い方は大きく分けて5つ！ すべて「to + 動詞の原形」で形は同じだけど、文の中での役割で意味が変わるよ。',
          keyPoints: [
            '名詞的用法「〜すること」: I want to play soccer.',
            '副詞的用法（目的）「〜するために」: I went to the park to play soccer.',
            '形容詞的用法「〜するための」: I have a book to read.',
            '副詞的用法（感情の原因）「〜して」: I was happy to hear that.',
            'It is ... to 構文「〜することは…だ」: It is fun to swim.',
          ],
        },
        {
          title: '名詞的用法「〜すること」',
          content:
            'want to / like to / begin to / try to / need to / hope to のように、動詞の後ろにつけて「〜すること」を表すよ。一番よく出てくる使い方！',
          keyPoints: [
            'want to ＝「〜したい」: I want to be a doctor.',
            'like to ＝「〜するのが好き」: She likes to sing.',
            'need to ＝「〜する必要がある」: We need to help sick children.',
            'hope to ＝「〜したいと思う」: I hope to see you again.',
          ],
        },
        {
          title: '副詞的用法（目的）「〜するために」',
          content:
            '「なんのために？」の答えになっている使い方。行動の目的を説明するよ。「なんのために〜した？」と聞いて答えが出れば、この用法！',
          keyPoints: [
            'I went to the park to play soccer. =「なんのために公園に行った？」→「サッカーをするために」',
            'She got up early to catch the bus. =「なんのために早起きした？」→「バスに乗るために」',
            'I use a computer to study English. =「なんのためにPC使う？」→「英語を勉強するために」',
          ],
        },
        {
          title: '形容詞的用法「〜するための・〜すべき」',
          content:
            '前の名詞を後ろから説明する使い方。「どんな〜？」と聞いて答えが出れば、この用法！ something to eat（食べるもの）のように不定代名詞の後ろにもつくよ。',
          keyPoints: [
            'I have a book to read. =「どんな本？」→「読むための本」',
            'I want something to drink. =「どんなもの？」→「飲むためのもの」',
            'There are many places to visit. =「どんな場所？」→「訪れるべき場所」',
          ],
        },
        {
          title: '副詞的用法（感情の原因）「〜して…だ」',
          content:
            'happy / glad / surprised / sad / excited などの感情を表す形容詞の後ろにつけて、「なぜその感情になったか」の原因を表すよ。',
          keyPoints: [
            'I am happy to hear that. = それを聞いてうれしいです。',
            'I was surprised to see many people. = たくさんの人を見て驚きました。',
            'She was glad to meet you. = あなたに会えてうれしかったです。',
          ],
        },
        {
          title: 'It is ... to 構文「〜することは…だ」',
          content:
            'It is + 形容詞 + to + 動詞の原形 で「〜することは…だ」。It は形式主語で、本当の主語は to 以下の部分だよ。important / fun / difficult / easy / necessary などの形容詞と一緒に使うよ。',
          keyPoints: [
            'It is important to study every day. = 毎日勉強することは大切です。',
            'It is fun to cook. = 料理をすることは楽しいです。',
            'It is difficult to understand this story. = この物語を理解することは難しいです。',
          ],
        },
        {
          title: '疑問詞 + to + 動詞の原形',
          content:
            'how to / what to / where to / when to のように、疑問詞のあとに to + 動詞の原形をつけると「〜のしかた」「何を〜すべきか」などの意味になるよ。',
          keyPoints: [
            'how to 〜 =「〜のしかた・どうやって〜するか」: I know how to cook curry.',
            'what to 〜 =「何を〜すべきか」: I don\'t know what to do.',
            'where to 〜 =「どこで（へ）〜すべきか」: Do you know where to go?',
            'when to 〜 =「いつ〜すべきか」: I don\'t know when to start.',
          ],
        },
        {
          title: 'tell / show / teach + 人 + 疑問詞 + to',
          content:
            '「人に〜のしかたを教える・見せる・伝える」は、tell / show / teach + 人 + 疑問詞 + to + 動詞の原形 の形で表すよ。',
          keyPoints: [
            'I can show you how to wear a yukata. = 浴衣の着方を見せてあげるよ。',
            'My friend told me what to do. = 友だちが何をすべきか教えてくれた。',
            'Please tell us where to go. = どこに行けばいいか教えてください。',
            'Who can teach me how to make it? = だれが作り方を教えてくれますか？',
          ],
        },
        {
          title: 'I am sure / glad that + 文（that節）',
          content:
            'I am sure that 〜 は「〜だと確信している」、I am glad that 〜 は「〜でうれしい」という意味。that のあとにはふつうの文（主語 + 動詞）が続くよ。',
          keyPoints: [
            'I am sure that he will come. = 彼が来ると確信しています。',
            'I am glad that you like it. = あなたが気に入ってくれてうれしいです。',
            'I\'m sorry that I was late. = 遅れてごめんなさい。',
            'that は省略できることもあるよ: I\'m glad you like it.',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // === 名詞的用法（basic）===
      {
        id: 'eng-inf-fc1',
        front: 'to play',
        back: 'I want (　　) soccer.\n（私はサッカーをしたいです。）',
        hint: 'want の後ろは to + 動詞の原形 だよ',
        explanation: 'want to play =「したい」。名詞的用法だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-inf-fc2',
        front: 'to read',
        back: 'I like (　　) books.\n（私は本を読むことが好きです。）',
        hint: 'like の後ろは to + 動詞の原形 だよ',
        explanation: 'like to read =「読むのが好き」。名詞的用法だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-inf-fc3',
        front: 'to be',
        back: 'I want (　　) a doctor.\n（私は医者になりたいです。）',
        hint: '「なる」の動詞の原形は be だよ',
        explanation: 'want to be =「〜になりたい」。be も動詞の原形だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-inf-fc4',
        front: 'to help',
        back: 'We need (　　) sick children.\n（私たちは病気の子どもたちを助ける必要があります。）',
        hint: 'need の後ろは to + 動詞の原形',
        explanation: 'need to help =「助ける必要がある」。名詞的用法だよ。',
        difficulty: 'basic',
      },
      // === 副詞的用法・目的（basic）===
      {
        id: 'eng-inf-fc5',
        front: '〜するために',
        back: 'I went to the park to play soccer.\nto play はどの使い方？',
        hint: '「なんのために公園に行った？」と聞いてみよう',
        explanation: '「なんのために？」→「サッカーをするために」。副詞的用法（目的）だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-inf-fc6',
        front: 'to study',
        back: 'I went to the library (　　).\n（勉強するために図書館に行きました。）',
        hint: '「なんのために図書館に行った？」の答えだよ',
        explanation: '「勉強するために」= to study。副詞的用法（目的）だよ。',
        difficulty: 'basic',
      },
      // === 形容詞的用法（basic）===
      {
        id: 'eng-inf-fc7',
        front: '〜するための',
        back: 'I have a book to read.\nto read はどの使い方？',
        hint: '「どんな本？」と聞いてみよう',
        explanation: '「どんな本？」→「読むための本」。前の名詞を説明する形容詞的用法だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-inf-fc8',
        front: 'to drink',
        back: 'I want something (　　).\n（何か飲むものがほしいです。）',
        hint: 'something を説明しているよ',
        explanation: 'something to drink =「飲むためのもの」。形容詞的用法だよ。',
        difficulty: 'basic',
      },
      // === 感情の原因（standard）===
      {
        id: 'eng-inf-fc9',
        front: 'to hear',
        back: 'I am happy (　　) that.\n（それを聞いてうれしいです。）',
        hint: 'happy の原因を表す to + 動詞の原形',
        explanation: 'happy to hear =「聞いてうれしい」。感情の原因を表す副詞的用法だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-inf-fc10',
        front: 'to see',
        back: 'I was surprised (　　) many people.\n（たくさんの人を見て驚きました。）',
        hint: '驚いた原因は何？',
        explanation: 'surprised to see =「見て驚いた」。感情の原因を表す副詞的用法だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-inf-fc11',
        front: 'to meet',
        back: 'She was glad (　　) you.\n（あなたに会えてうれしかったです。）',
        hint: 'glad の後ろに「〜して」の原因をつけよう',
        explanation: 'glad to meet =「会えてうれしい」。感情の原因だよ。',
        difficulty: 'standard',
      },
      // === It is ... to（standard）===
      {
        id: 'eng-inf-fc12',
        front: 'It, to',
        back: '(　　) is important (　　) study every day.\n（毎日勉強することは大切です。）',
        hint: 'It is ... to 構文を使おう',
        explanation: 'It is important to study =「勉強することは大切」。It は形式主語だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-inf-fc13',
        front: 'It is fun to cook',
        back: '「料理をすることは楽しいです。」を英語で？\n（It is ... to 構文で）',
        hint: 'It is + 形容詞 + to + 動詞の原形',
        explanation: 'It is fun to cook. It は形式主語で、to cook が本当の主語だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-inf-fc14',
        front: 'It is difficult to understand',
        back: '「この物語を理解することは難しいです。」を英語で？\n（It is ... to 構文で）',
        hint: 'It is + difficult + to + 動詞の原形',
        explanation: 'It is difficult to understand this story. だよ。',
        difficulty: 'standard',
      },
      // === 用法見分け（standard）===
      {
        id: 'eng-inf-fc15',
        front: '名詞的用法',
        back: 'I want to play tennis.\nto play はどの用法？',
        hint: 'want の目的語になっているよ',
        explanation: 'want to =「〜したい」。動詞の目的語になる名詞的用法だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-inf-fc16',
        front: '副詞的用法（目的）',
        back: 'She got up early to catch the bus.\nto catch はどの用法？',
        hint: '「なんのために早起き？」と聞いてみよう',
        explanation: '「バスに乗るために」→ 目的を表す副詞的用法だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-inf-fc17',
        front: '形容詞的用法',
        back: 'She has a lot of work to do.\nto do はどの用法？',
        hint: '「どんな仕事？」と聞いてみよう',
        explanation: '「するべき仕事」→ work を説明する形容詞的用法だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-inf-fc18',
        front: '副詞的用法（感情の原因）',
        back: 'I was happy to hear the news.\nto hear はどの用法？',
        hint: '「なぜうれしい？」と聞いてみよう',
        explanation: '「聞いてうれしい」→ 感情の原因を表す副詞的用法だよ。',
        difficulty: 'standard',
      },
      // === advanced ===
      {
        id: 'eng-inf-fc19',
        front: 'to catch',
        back: 'She got up early (　　) the bus.\n（彼女はバスに乗るために早く起きました。）',
        hint: '目的を表す不定詞',
        explanation: 'to catch =「乗るために」。副詞的用法（目的）だよ。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-inf-fc20',
        front: '〜すること',
        back: 'She began to sing.\n（彼女は歌い始めました。）\nto sing はどの使い方？',
        hint: 'began（始めた）の目的語だよ',
        explanation: 'began to sing =「歌うことを始めた」。名詞的用法だよ。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-inf-fc21',
        front: 'to eat',
        back: 'Do you have anything (　　)?\n（何か食べるものはありますか。）',
        hint: 'anything を後ろから説明しているよ',
        explanation: 'anything to eat =「食べるもの」。形容詞的用法だよ。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-inf-fc22',
        front: 'It is necessary to practice',
        back: '「毎日練習することは必要です。」を英語で？\n（It is ... to 構文で）',
        hint: '「必要な」= necessary',
        explanation: 'It is necessary to practice every day. だよ。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-inf-fc23',
        front: 'I was excited to know',
        back: '「私の絵が一等賞になったと知ってわくわくしました。」\n「知って」の部分を英語で？',
        hint: '感情の原因を表す to + 動詞の原形',
        explanation: 'excited to know =「知ってわくわくした」。感情の原因だよ。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-inf-fc24',
        front: 'It was difficult for us to understand',
        back: '「この物語を理解することは私たちにとって難しかった。」を英語で？',
        hint: 'It is ... for 人 to ... の形',
        explanation: 'for us で「私たちにとって」を加えられるよ。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-inf-fc25',
        front: 'to collect',
        back: 'They had an event (　　) money.\n（彼らはお金を集めるためにイベントを開きました。）',
        hint: '「なんのためにイベントを開いた？」',
        explanation: 'to collect money =「お金を集めるために」。副詞的用法（目的）だよ。',
        difficulty: 'advanced',
      },
      // === 疑問詞 + to（basic）===
      {
        id: 'eng-inf-fc26',
        front: 'how to use',
        back: 'I know (　　) this machine.\n（私はこの機械の使い方を知っています。）',
        hint: '「〜のしかた」は how to だよ',
        explanation: 'how to use =「使い方・どうやって使うか」。疑問詞 + to + 動詞の原形だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-inf-fc27',
        front: 'what to do',
        back: "I don't know (　　).\n（私は何をすべきかわかりません。）",
        hint: '「何を〜すべきか」は what to だよ',
        explanation: 'what to do =「何をすべきか」。疑問詞 + to + 動詞の原形だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-inf-fc28',
        front: 'where to go',
        back: 'Do you know (　　)?\n（どこへ行けばいいか知っていますか。）',
        hint: '「どこへ〜すべきか」は where to だよ',
        explanation: 'where to go =「どこへ行くべきか」。疑問詞 + to + 動詞の原形だよ。',
        difficulty: 'basic',
      },
      // === 疑問詞 + to（standard）===
      {
        id: 'eng-inf-fc29',
        front: 'when to start',
        back: "I don't know (　　).\n（いつ始めればいいかわかりません。）",
        hint: '「いつ〜すべきか」は when to だよ',
        explanation: 'when to start =「いつ始めるべきか」。疑問詞 + to + 動詞の原形だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-inf-fc30',
        front: 'how to make',
        back: 'Please tell me (　　) a pancake.\n（パンケーキの作り方を教えてください。）',
        hint: 'tell + 人 + 疑問詞 + to の形だよ',
        explanation: 'tell me how to make =「作り方を教えて」。SVOO + 疑問詞 + to の形だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-inf-fc31',
        front: 'how to wear',
        back: 'I can show you (　　) a yukata.\n（浴衣の着方を見せてあげるよ。）',
        hint: 'show + 人 + 疑問詞 + to の形だよ',
        explanation: 'show you how to wear =「着方を見せる」。SVOO + 疑問詞 + to の形だよ。',
        difficulty: 'standard',
      },
      // === that節（standard）===
      {
        id: 'eng-inf-fc32',
        front: 'sure that',
        back: 'I am (　　) he will come.\n（彼が来ると確信しています。）',
        hint: '「〜と確信している」は I am sure that だよ',
        explanation: 'I am sure that 〜 =「〜だと確信している」。that のあとに文が続くよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-inf-fc33',
        front: 'glad that',
        back: 'I am (　　) you like it.\n（あなたが気に入ってくれてうれしいです。）',
        hint: '「〜でうれしい」は I am glad that だよ',
        explanation: 'I am glad that 〜 =「〜でうれしい」。that のあとに文が続くよ。',
        difficulty: 'standard',
      },
      // === advanced ===
      {
        id: 'eng-inf-fc34',
        front: 'what to say',
        back: "I didn't know (　　).\n（何と言えばいいかわかりませんでした。）",
        hint: '「何を〜すべきか」は what to だよ',
        explanation: "what to say =「何と言うべきか」。I didn't know what to say. だよ。",
        difficulty: 'advanced',
      },
      {
        id: 'eng-inf-fc35',
        front: 'how to cook',
        back: 'My mother taught me (　　).\n（母が料理の仕方を教えてくれました。）',
        hint: 'teach + 人 + 疑問詞 + to の形だよ',
        explanation: 'taught me how to cook =「料理の仕方を教えてくれた」。teach + 人 + how to の形だよ。',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        // === 空欄補充（choice / basic）===
        {
          id: 'eng-inf-q1',
          question:
            '「I want (　　) a teacher.」\nの (　　) に入るのは？',
          options: ['be', 'to be', 'being', 'to being'],
          correctIndex: 1,
          explanation:
            'want の後ろは to + 動詞の原形。want to be =「〜になりたい」だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-inf-q2',
          question:
            '「She likes (　　) books.」\nの (　　) に入るのは？',
          options: ['to read', 'read', 'reading to', 'to reading'],
          correctIndex: 0,
          explanation:
            'like の後ろは to + 動詞の原形。like to read =「読むのが好き」だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-inf-q3',
          question:
            '「I want something (　　).」\nの (　　) に入るのは？',
          options: ['to eat', 'eat', 'eating', 'to eating'],
          correctIndex: 0,
          explanation:
            'something to eat =「食べるもの」。前の名詞を説明する形容詞的用法だよ。',
          difficulty: 'basic',
        },
        // === 用法判定（choice / basic）===
        {
          id: 'eng-inf-q4',
          question:
            '「I went to the store to buy milk.」の to buy はどの使い方？',
          options: ['〜すること', '〜するための', '〜するために', '〜して'],
          correctIndex: 2,
          explanation:
            '「なんのためにお店に行った？」→「牛乳を買うために」。副詞的用法（目的）だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-inf-q5',
          question:
            '「I have a lot of homework to do.」の to do はどの使い方？',
          options: ['〜すること', '〜するために', '〜して', '〜するための'],
          correctIndex: 3,
          explanation:
            '「どんな宿題？」→「やるための宿題」。前の名詞を説明する形容詞的用法だよ。',
          difficulty: 'basic',
        },
        // === 感情の原因（choice / standard）===
        {
          id: 'eng-inf-q6',
          question:
            '「I was happy (　　) the good news.」\nの (　　) に入るのは？',
          options: ['hear', 'to hear', 'hearing', 'heard'],
          correctIndex: 1,
          explanation:
            'happy to hear =「聞いてうれしい」。感情の原因を表す副詞的用法だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-inf-q7',
          question:
            '「I was surprised to see many people.」の to see はどの使い方？',
          options: ['〜すること', '〜するための', '〜するために', '〜して（感情の原因）'],
          correctIndex: 3,
          explanation:
            '「なぜ驚いた？」→「たくさんの人を見て」。感情の原因を表す副詞的用法だよ。',
          difficulty: 'standard',
        },
        // === It is ... to（choice / standard）===
        {
          id: 'eng-inf-q8',
          question:
            '「(　　) is important (　　) study every day.」の2つの (　　) に入る組み合わせは？',
          options: ['It, to', 'This, to', 'It, for', 'That, to'],
          correctIndex: 0,
          explanation:
            'It is ... to 構文。It は形式主語で、to study が本当の主語だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-inf-q9',
          question:
            '「Swimming is fun.」を It is ... to 構文に書きかえると？',
          options: [
            'It is fun to swim.',
            'It is fun swimming.',
            'It is to swim fun.',
            'To swim is it fun.',
          ],
          correctIndex: 0,
          explanation:
            'It is fun to swim. Swimming → to swim に変えて It を主語にするよ。',
          difficulty: 'standard',
        },
        // === 用法の見分け（choice / standard）===
        {
          id: 'eng-inf-q10',
          question:
            '「She went to the kitchen to make tea.」の to make はどの使い方？',
          options: ['名詞的用法', '副詞的用法（目的）', '形容詞的用法', '副詞的用法（感情の原因）'],
          correctIndex: 1,
          explanation:
            '「なんのためにキッチンに行った？」→「お茶を入れるために」。副詞的用法（目的）だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-inf-q11',
          question:
            '「Is there a place to eat lunch near here?」の to eat はどの使い方？',
          options: ['名詞的用法', '副詞的用法（目的）', '形容詞的用法', '副詞的用法（感情の原因）'],
          correctIndex: 2,
          explanation:
            '「どんな場所？」→「食べるための場所」。前の名詞 place を説明する形容詞的用法だよ。',
          difficulty: 'standard',
        },
        // === advanced（choice）===
        {
          id: 'eng-inf-q12',
          question:
            '「It was difficult for us to understand this story.」の for us は何を表している？',
          options: [
            '理由',
            '不定詞の意味上の主語',
            '場所',
            '時間',
          ],
          correctIndex: 1,
          explanation:
            'for us は「私たちにとって」。不定詞の動作をするのが誰かを示す「意味上の主語」だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-inf-q13',
          question:
            '次のうち、不定詞の形容詞的用法を含む文はどれ？',
          options: [
            'I want to play tennis.',
            'She went to the park to run.',
            'I have many things to do.',
            'I was glad to see you.',
          ],
          correctIndex: 2,
          explanation:
            'things to do =「するべきこと」。things を後ろから説明する形容詞的用法だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-inf-q14',
          question:
            '次の文のまちがいはどれ？\n「I want play the guitar.」',
          options: [
            'I → My',
            'want → wants',
            'play → to play',
            'the → a',
          ],
          correctIndex: 2,
          explanation:
            'want の後ろは to + 動詞の原形。want to play が正しいよ。',
          difficulty: 'advanced',
        },
        // === reorder questions ===
        {
          id: 'eng-inf-q15',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「私は先生になりたいです。」という英文を作ろう。',
          words: ['a', 'to', 'want', 'I', 'teacher', 'be'],
          correctOrder: [3, 2, 1, 5, 0, 4],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「I want to be a teacher.」が正解。want to be =「〜になりたい」だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-inf-q16',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「私には何か食べるものがあります。」という英文を作ろう。',
          words: ['to', 'something', 'eat', 'I', 'have'],
          correctOrder: [3, 4, 1, 0, 2],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「I have something to eat.」が正解。something to eat で形容詞的用法だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-inf-q17',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「彼は勉強するためにここに来ました。」という英文を作ろう。',
          words: ['to', 'here', 'study', 'came', 'he'],
          correctOrder: [4, 3, 1, 0, 2],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「He came here to study.」が正解。to study =「勉強するために」だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-inf-q18',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「あなたに会えてうれしいです。」という英文を作ろう。',
          words: ['happy', 'am', 'see', 'I', 'to', 'you'],
          correctOrder: [3, 1, 0, 4, 2, 5],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「I am happy to see you.」が正解。happy to see =「会えてうれしい」感情の原因だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-inf-q19',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「英語を勉強することは大切です。」という英文を作ろう。',
          words: ['is', 'to', 'English', 'important', 'it', 'study'],
          correctOrder: [4, 0, 3, 1, 5, 2],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「It is important to study English.」が正解。It is ... to 構文だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-inf-q20',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「彼にはたくさんの読むべき本があります。」という英文を作ろう。',
          words: ['has', 'books', 'to', 'he', 'of', 'a lot', 'read'],
          correctOrder: [3, 0, 5, 4, 1, 2, 6],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「He has a lot of books to read.」が正解。books to read で形容詞的用法だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-inf-q21',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「私はケーキを作るために卵を買いました。」という英文を作ろう。',
          words: ['eggs', 'bought', 'to', 'I', 'a cake', 'make'],
          correctOrder: [3, 1, 0, 2, 5, 4],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「I bought eggs to make a cake.」が正解。to make =「作るために」副詞的用法（目的）だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-inf-q22',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「毎日運動することは体によいです。」という英文を作ろう。',
          words: ['to', 'good', 'it', 'is', 'exercise', 'every day'],
          correctOrder: [2, 3, 1, 0, 4, 5],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「It is good to exercise every day.」が正解。It is ... to 構文だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-inf-q23',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「私はそのニュースを聞いて驚きました。」という英文を作ろう。',
          words: ['surprised', 'was', 'hear', 'I', 'to', 'the news'],
          correctOrder: [3, 1, 0, 4, 2, 5],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「I was surprised to hear the news.」が正解。感情の原因を表す副詞的用法だよ。',
          difficulty: 'advanced',
        },
        // === 疑問詞 + to（choice）===
        {
          id: 'eng-inf-q24',
          question:
            '「I know (　　) to use this machine.」\nの (　　) に入るのは？',
          options: ['what', 'how', 'where', 'who'],
          correctIndex: 1,
          explanation:
            '「使い方を知っている」→ how to use。how to =「〜のしかた」だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-inf-q25',
          question:
            '「I don\'t know (　　) to do next.」\nの (　　) に入るのは？',
          options: ['how', 'where', 'what', 'when'],
          correctIndex: 2,
          explanation:
            '「次に何をすべきかわからない」→ what to do。what to =「何を〜すべきか」だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-inf-q26',
          question:
            '「Do you know (　　) to get a ticket?」\nの (　　) に入るのは？',
          options: ['what', 'when', 'how', 'where'],
          correctIndex: 3,
          explanation:
            '「どこでチケットを手に入れるか」→ where to get。where to =「どこで〜すべきか」だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-inf-q27',
          question:
            '「I don\'t know (　　) to start the project.」\nの (　　) に入るのは？',
          options: ['what', 'how', 'where', 'when'],
          correctIndex: 3,
          explanation:
            '「いつ始めればいいかわからない」→ when to start。when to =「いつ〜すべきか」だよ。',
          difficulty: 'standard',
        },
        // === that節（choice）===
        {
          id: 'eng-inf-q28',
          question:
            '「I am sure (　　) he will come tomorrow.」\nの (　　) に入るのは？',
          options: ['that', 'to', 'what', 'if'],
          correctIndex: 0,
          explanation:
            'I am sure that 〜 =「〜だと確信している」。that のあとに文が続くよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-inf-q29',
          question:
            '「I\'m glad that you passed the test.」の意味として正しいのは？',
          options: [
            'あなたがテストに落ちて残念です。',
            'あなたにテストを受けてほしいです。',
            'あなたがテストを受けたと確信しています。',
            'あなたがテストに受かってうれしいです。',
          ],
          correctIndex: 3,
          explanation:
            'I\'m glad that 〜 =「〜でうれしい」。passed the test =「テストに受かった」だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-inf-q30',
          question:
            '「I\'m sorry (　　) I was late.」\nの (　　) に入るのは？',
          options: ['to', 'because', 'for', 'that'],
          correctIndex: 3,
          explanation:
            'I\'m sorry that 〜 =「〜してごめんなさい」。that のあとに文が続くよ。',
          difficulty: 'standard',
        },
        // === 疑問詞+to reorder ===
        {
          id: 'eng-inf-q31',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「私はパンケーキの作り方を知っています。」という英文を作ろう。',
          words: ['make', 'how', 'know', 'I', 'to', 'a pancake'],
          correctOrder: [3, 2, 1, 4, 0, 5],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「I know how to make a pancake.」が正解。how to make =「作り方」だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-inf-q32',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「私は何を買えばいいかわかりませんでした。」という英文を作ろう。',
          words: ['to', 'what', "didn't", 'I', 'know', 'buy'],
          correctOrder: [3, 2, 4, 1, 0, 5],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「I didn\'t know what to buy.」が正解。what to buy =「何を買うべきか」だよ。',
          difficulty: 'standard',
        },
        // === SVOO + 疑問詞+to reorder ===
        {
          id: 'eng-inf-q33',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「浴衣の着方を見せてあげるよ。」という英文を作ろう。\nI can (　　)(　　)(　　)(　　)(　　) a yukata.',
          words: ['how', 'show', 'to', 'you', 'wear'],
          correctOrder: [1, 3, 0, 2, 4],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「I can show you how to wear a yukata.」が正解。show + 人 + how to =「〜のしかたを見せる」だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-inf-q34',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「どこに行けばいいか教えてください。」という英文を作ろう。\nPlease (　　)(　　)(　　)(　　)(　　).',
          words: ['go', 'tell', 'where', 'me', 'to'],
          correctOrder: [1, 3, 2, 4, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「Please tell me where to go.」が正解。tell + 人 + where to =「どこに行くべきか教える」だよ。',
          difficulty: 'standard',
        },
        // === that節 reorder ===
        {
          id: 'eng-inf-q35',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「彼が来ると確信しています。」という英文を作ろう。',
          words: ['that', 'sure', 'will', 'I', 'come', 'am', 'he'],
          correctOrder: [3, 5, 1, 0, 6, 2, 4],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「I am sure that he will come.」が正解。I am sure that =「〜と確信している」だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-inf-q36',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「あなたが気に入ってくれてうれしいです。」という英文を作ろう。',
          words: ['glad', 'that', 'am', 'I', 'it', 'like', 'you'],
          correctOrder: [3, 2, 0, 1, 6, 5, 4],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「I am glad that you like it.」が正解。I am glad that =「〜でうれしい」だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-inf-q37',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「母が料理の仕方を教えてくれました。」という英文を作ろう。',
          words: ['cook', 'my', 'taught', 'how', 'mother', 'me', 'to'],
          correctOrder: [1, 4, 2, 5, 3, 6, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「My mother taught me how to cook.」が正解。teach + 人 + how to =「〜の仕方を教える」だよ。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-inf-ex1',
          question:
            '次の日本語を英語にしよう。\n「私はピアノをひきたいです。」',
          steps: [
            {
              title: 'Step 1: 「〜したい」は want to 〜',
              content: '「〜したい」は英語で want to 〜 だよ。主語は I。',
              highlight: 'I want to',
            },
            {
              title: 'Step 2: 「ピアノをひく」を英語にしよう',
              content:
                '「ピアノをひく」は play the piano。to の後ろは動詞の原形だから play のまま。',
              highlight: 'play the piano',
            },
            {
              title: 'Step 3: つなげて完成！',
              content: 'I want to + play the piano をつなげるよ。',
              highlight: 'I want to play the piano.',
            },
          ],
          answer:
            'I want to play the piano.\n（私はピアノをひきたいです。）',
        },
        {
          id: 'eng-inf-ex2',
          question:
            '次の日本語を英語にしよう。\n「私はバスに乗るために早く起きました。」',
          steps: [
            {
              title: 'Step 1: メインの文を書こう',
              content:
                '「私は早く起きました」→ I got up early だね。',
              highlight: 'I got up early',
            },
            {
              title: 'Step 2: 目的を to + 動詞の原形 で表そう',
              content:
                '「バスに乗るために」→ to catch the bus。catch は「（乗り物に）乗る、間に合う」の意味。',
              highlight: 'to catch the bus',
            },
            {
              title: 'Step 3: 完成！',
              content:
                '文の後ろに「to + 動詞の原形」を置いて目的を表すよ。',
              highlight: 'I got up early to catch the bus.',
            },
          ],
          answer:
            'I got up early to catch the bus.\n（私はバスに乗るために早く起きました。）',
        },
        {
          id: 'eng-inf-ex3',
          question:
            '次の日本語を英語にしよう。\n「私には読むべき本がたくさんあります。」',
          steps: [
            {
              title: 'Step 1: 「たくさんある」を英語にしよう',
              content: '「〜がたくさんある」は I have a lot of 〜 だよ。',
              highlight: 'I have a lot of',
            },
            {
              title: 'Step 2: 「読むべき本」を英語にしよう',
              content:
                '「本」= books。「読むべき」= to read。books の後ろに to read を置いて説明するよ。',
              highlight: 'books to read',
            },
            {
              title: 'Step 3: つなげて完成！',
              content:
                'I have a lot of + books to read。不定詞が books を後ろから説明する形容詞的用法だよ。',
              highlight: 'I have a lot of books to read.',
            },
          ],
          answer:
            'I have a lot of books to read.\n（私には読むべき本がたくさんあります。）',
        },
        {
          id: 'eng-inf-ex4',
          question:
            '次の日本語を英語にしよう。\n「あなたに会えてとてもうれしかったです。」',
          steps: [
            {
              title: 'Step 1: 「うれしかった」を英語にしよう',
              content:
                '「とてもうれしかった」→ I was very happy。過去形だから was を使うよ。',
              highlight: 'I was very happy',
            },
            {
              title: 'Step 2: 感情の原因を to で表そう',
              content:
                '「会えて」→ to see you。happy の原因を to + 動詞の原形 で表すよ。',
              highlight: 'to see you',
            },
            {
              title: 'Step 3: 完成！',
              content:
                '感情の形容詞（happy/glad/surprised/sad/excited）+ to + 動詞の原形 の形！',
              highlight: 'I was very happy to see you.',
            },
          ],
          answer:
            'I was very happy to see you.\n（あなたに会えてとてもうれしかったです。）',
        },
        {
          id: 'eng-inf-ex5',
          question:
            '次の日本語を英語にしよう。\n「毎日英語を勉強することは大切です。」（It is ... to 構文で）',
          steps: [
            {
              title: 'Step 1: It is + 形容詞 を書こう',
              content:
                '「大切です」→ It is important。It は形式主語だよ。',
              highlight: 'It is important',
            },
            {
              title: 'Step 2: to + 動詞の原形 で「〜すること」を表そう',
              content:
                '「英語を勉強する」→ to study English だよ。',
              highlight: 'to study English',
            },
            {
              title: 'Step 3: 「毎日」を加えて完成！',
              content:
                '「毎日」= every day を最後につけるよ。',
              highlight: 'It is important to study English every day.',
            },
          ],
          answer:
            'It is important to study English every day.\n（毎日英語を勉強することは大切です。）',
        },
        {
          id: 'eng-inf-ex6',
          question:
            '次の英文の不定詞の用法を見分けよう。\n① I like to swim.\n② I went to the pool to swim.\n③ I have a nice pool to swim in.',
          steps: [
            {
              title: 'Step 1: ①を見分けよう',
              content:
                'I like to swim. → like の目的語「泳ぐこと」。動詞の目的語 = 名詞的用法！',
              highlight: '① 名詞的用法',
            },
            {
              title: 'Step 2: ②を見分けよう',
              content:
                'I went to the pool to swim. →「なんのために？」→「泳ぐために」。目的 = 副詞的用法（目的）！',
              highlight: '② 副詞的用法（目的）',
            },
            {
              title: 'Step 3: ③を見分けよう',
              content:
                'I have a nice pool to swim in. →「どんなプール？」→「泳ぐためのプール」。名詞を説明 = 形容詞的用法！',
              highlight: '③ 形容詞的用法',
            },
          ],
          answer:
            '① 名詞的用法（like の目的語）\n② 副詞的用法・目的（「泳ぐために」）\n③ 形容詞的用法（pool を説明）',
        },
        {
          id: 'eng-inf-ex7',
          question:
            '次の日本語を英語にしよう。\n「私はパンケーキの作り方を知っています。」',
          steps: [
            {
              title: 'Step 1: 「知っています」を英語にしよう',
              content: '「私は知っています」→ I know だね。',
              highlight: 'I know',
            },
            {
              title: 'Step 2: 「作り方」を疑問詞 + to で表そう',
              content:
                '「〜のしかた」は how to 〜。「作る」= make だから how to make だよ。',
              highlight: 'how to make',
            },
            {
              title: 'Step 3: 「パンケーキ」をつけて完成！',
              content: 'I know how to make a pancake. だよ。',
              highlight: 'I know how to make a pancake.',
            },
          ],
          answer:
            'I know how to make a pancake.\n（私はパンケーキの作り方を知っています。）',
        },
        {
          id: 'eng-inf-ex8',
          question:
            '次の日本語を英語にしよう。\n「先生が何をすべきか教えてくれました。」',
          steps: [
            {
              title: 'Step 1: 「先生が教えてくれた」を英語にしよう',
              content:
                '「先生が私に教えてくれた」→ My teacher told me。told は tell の過去形だよ。',
              highlight: 'My teacher told me',
            },
            {
              title: 'Step 2: 「何をすべきか」を疑問詞 + to で表そう',
              content:
                '「何を〜すべきか」は what to 〜。「する」= do だから what to do だよ。',
              highlight: 'what to do',
            },
            {
              title: 'Step 3: つなげて完成！',
              content:
                'tell + 人 + 疑問詞 + to + 動詞の原形 の形だよ。',
              highlight: 'My teacher told me what to do.',
            },
          ],
          answer:
            'My teacher told me what to do.\n（先生が何をすべきか教えてくれました。）',
        },
        {
          id: 'eng-inf-ex9',
          question:
            '次の日本語を英語にしよう。\n「彼が一位になったと聞いてうれしいです。」',
          steps: [
            {
              title: 'Step 1: 「うれしいです」を英語にしよう',
              content: '「うれしいです」→ I am glad だね。',
              highlight: 'I am glad',
            },
            {
              title: 'Step 2: 「〜と聞いて」を that節で表そう',
              content:
                'that のあとにふつうの文を続けるよ。「彼が一位になった」→ he won first place',
              highlight: 'that he won first place',
            },
            {
              title: 'Step 3: つなげて完成！',
              content:
                'I am glad that 〜 =「〜でうれしい」。that のあとに文（主語 + 動詞）が続くよ。',
              highlight: 'I am glad that he won first place.',
            },
          ],
          answer:
            'I am glad that he won first place.\n（彼が一位になったと聞いてうれしいです。）',
        },
      ],
    },
    chatId: 'eng-infinitives',
  },
};
