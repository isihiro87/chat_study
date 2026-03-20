import type { Topic } from '../../../../../../../data/types';

export const sentenceStructures: Topic = {
  id: 'eng-sentence-structures',
  eraId: 'english-grade2',
  name: '5つの文構造',
  subtitle: 'be going to / will / SVOO / SVOC',
  icon: '🏗️',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: 'be going to ＋動詞の原形',
          content:
            '「〜するつもりです」「〜する予定です」と、前から決めていた予定や計画を伝えるときに使うよ。am / is / are going to + 動詞の原形 の形だよ。疑問文は Are you going to ...? 否定文は am/is/are + not going to だよ。',
          keyPoints: [
            'I am going to visit Osaka tomorrow. = 明日大阪を訪れるつもりです。',
            'Are you going to study tonight? — Yes, I am. / No, I\'m not.',
            'She is not going to come to the party. = 彼女はパーティーに来ない予定です。',
          ],
        },
        {
          title: 'will ＋動詞の原形',
          content:
            'will は「〜するでしょう」（予測）や「〜します」（その場の意志）を表すよ。短縮形は I\'ll / won\'t。疑問文は Will you ...? で、依頼「〜してくれますか」の意味にもなるよ。',
          keyPoints: [
            'I will help you. = 手伝いましょう。（その場の意志）',
            'It will rain tomorrow. = 明日は雨が降るでしょう。（予測）',
            'Will you open the window? = 窓を開けてくれますか。（依頼）',
          ],
        },
        {
          title: 'be going to と will の使い分け',
          content:
            'be going to は「前から決めていた予定」、will は「その場で決めた意志」や「予測」に使うよ。迷ったら「前から計画していたか？」と考えてみよう！',
          keyPoints: [
            '前からの計画 → be going to: I\'m going to visit Kyoto next week.（前から決めていた旅行）',
            'その場の判断 → will: I\'ll answer the phone.（電話が鳴った→出ようと決めた）',
            '予測 → will: It will be hot tomorrow.（天気予報的な予測）',
          ],
        },
        {
          title: 'SVOO（動詞＋人＋もの）の文',
          content:
            'SVOO は「だれに」「なにを」の2つが動詞の後ろに並ぶ形。give / show / teach / tell / buy / make などの動詞で使うよ。「〜に」「〜を」の順番に注意！',
          keyPoints: [
            'He gave me a book. = 彼は私に本をくれました。（me = 「〜に」、a book = 「〜を」）',
            'She teaches us English. = 彼女は私たちに英語を教えます。',
            'SVOO → SVO 書きかえ: He gave me a book. → He gave a book to me.（give/show/teach/tell → to、buy/make → for）',
          ],
        },
        {
          title: 'SVOC（call＋A＋B）の文',
          content:
            '「AをBと呼ぶ」は call A B。A = B の関係が成り立つのが SVOC の特徴だよ。name（名付ける）も同じ形で使えるよ。',
          keyPoints: [
            'People call this area Little India. = 人々はこの地域をリトル・インディアと呼びます。',
            'We call him Ken. = 私たちは彼をケンと呼びます。（him = Ken が成り立つ）',
            'They named the cat Tama. = 彼らはそのネコをタマと名付けました。',
          ],
        },
        {
          title: '5文型の見分けかた まとめ',
          content:
            '動詞の後ろに何があるかで形が決まるよ。何もなければ SV、S=C なら SVC、目的語1つなら SVO、2つ並べば SVOO か SVOC。後ろの2つが =（イコール）になれば SVOC、ならなければ SVOO！',
          keyPoints: [
            '動詞の後ろに何もない → SV（I run.）',
            'S = C になる → SVC（She is kind. / He looks happy.）',
            '目的語が1つ → SVO（I play tennis.）',
            '後ろの2つが = → SVOC（They call him Ken.）、≠ → SVOO（He gave me a book.）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // === be going to（basic）===
      {
        id: 'eng-ss-fc1',
        front: 'am going to visit',
        back: 'I ___ ___ ___ ___ Osaka tomorrow.\n（私は明日大阪を訪れるつもりです。）',
        hint: '前からの予定は be going to + 動詞の原形',
        explanation: '主語が I なので am going to + visit だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-ss-fc2',
        front: 'is going to cook',
        back: 'He ___ ___ ___ ___ dinner tonight.\n（彼は今晩料理をするつもりです。）',
        hint: '主語が He のときの be going to は？',
        explanation: 'He は三人称単数なので is going to だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-ss-fc3',
        front: 'Are you going to',
        back: '___ ___ ___ ___ go shopping tomorrow?\n（あなたは明日買い物に行くつもりですか。）',
        hint: 'be going to の疑問文は be を主語の前に',
        explanation: 'Are you going to ...? で「〜するつもりですか」だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-ss-fc4',
        front: 'is not going to',
        back: 'She ___ ___ ___ ___ come to the party.\n（彼女はパーティーに来ないつもりです。）',
        hint: 'be going to の否定文は be + not',
        explanation: 'She is not (isn\'t) going to で「〜しないつもり」だよ。',
        difficulty: 'basic',
      },
      // === will（basic）===
      {
        id: 'eng-ss-fc5',
        front: 'will help',
        back: 'I ___ ___ you.\n（私が手伝いましょう。）',
        hint: 'その場で決めた意志は will',
        explanation: 'will + 動詞の原形 で「〜しましょう」。その場の判断だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-ss-fc6',
        front: 'will start',
        back: 'The concert ___ ___ in ten minutes.\n（コンサートは10分後に始まるでしょう。）',
        hint: '予測は will を使うよ',
        explanation: 'will + 動詞の原形 で「〜するでしょう」。予測を表すよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-ss-fc7',
        front: "won't (will not)",
        back: 'I ___ go to the party.\n（私はパーティーに行かないつもりです。）',
        hint: 'will の否定の短縮形は？',
        explanation: "will not の短縮形は won't だよ。",
        difficulty: 'basic',
      },
      {
        id: 'eng-ss-fc8',
        front: 'Will you open',
        back: '___ ___ ___ the window?\n（窓を開けてくれますか。）',
        hint: 'Will you ...? は依頼の意味にもなるよ',
        explanation: 'Will you ...? で「〜してくれますか」という丁寧な依頼だよ。',
        difficulty: 'basic',
      },
      // === be going to vs will（standard）===
      {
        id: 'eng-ss-fc9',
        front: 'be going to',
        back: '前から計画していた予定を言うとき、\nbe going to と will のどちらを使う？',
        hint: '以前からの計画・予定には…',
        explanation: 'be going to は前からの予定・計画に使うよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-ss-fc10',
        front: 'will',
        back: 'その場で「〜しよう」と決めたとき、\nbe going to と will のどちらを使う？',
        hint: 'その場の判断・意志には…',
        explanation: 'will はその場で決めた意志に使うよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-ss-fc11',
        front: "I'll answer it.",
        back: '電話が鳴っています。「私が出ましょう。」を英語で？\n（その場の判断）',
        hint: 'その場で決めた意志だから will',
        explanation: "今この瞬間に決めたので will（I'll）を使うよ。",
        difficulty: 'standard',
      },
      // === SVOO（standard）===
      {
        id: 'eng-ss-fc12',
        front: 'show you',
        back: 'I will ___ ___ two photos.\n（私はあなたに写真を2枚見せましょう。）',
        hint: 'SVOO: 動詞 + 人 + もの',
        explanation: 'show + 人 + もの で「〜に〜を見せる」。SVOO の形だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-ss-fc13',
        front: 'teaches us',
        back: 'She ___ ___ English.\n（彼女は私たちに英語を教えています。）',
        hint: 'teach + 人 + もの で「〜に〜を教える」',
        explanation: 'teach は SVOO でよく使う動詞。主語が She なので teaches だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-ss-fc14',
        front: 'tell me',
        back: 'Please ___ ___ the story.\n（私にその話を教えてください。）',
        hint: 'tell + 人 + もの で「〜に〜を伝える」',
        explanation: 'tell + 人 + もの で「〜に〜を教える/伝える」。SVOO の形だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-ss-fc15',
        front: 'bought her',
        back: 'He ___ ___ a present.\n（彼は彼女にプレゼントを買いました。）',
        hint: 'buy + 人 + もの で「〜に〜を買う」',
        explanation: 'buy の過去形は bought。buy + 人 + もの で SVOO だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-ss-fc16',
        front: 'made me',
        back: 'My mother ___ ___ a cake.\n（母は私にケーキを作ってくれた。）',
        hint: 'make + 人 + もの で「〜に〜を作る」',
        explanation: 'make の過去形は made。make + 人 + もの で SVOO だよ。',
        difficulty: 'standard',
      },
      // === SVOC（standard）===
      {
        id: 'eng-ss-fc17',
        front: 'call this area Little India',
        back: 'People ___ ___ ___ ___ ___.\n（人々はこの地域をリトル・インディアと呼びます。）',
        hint: 'call + A + B で「AをBと呼ぶ」',
        explanation: 'call A B は SVOC。A = B（this area = Little India）が成り立つよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-ss-fc18',
        front: 'call me Ken-chan',
        back: 'My friends ___ ___ ___.\n（私の友達は私をケンちゃんと呼びます。）',
        hint: 'call + A + B で「AをBと呼ぶ」',
        explanation: 'me = Ken-chan が成り立つから SVOC だよ。',
        difficulty: 'standard',
      },
      // === 5文型判定（standard / advanced）===
      {
        id: 'eng-ss-fc19',
        front: 'SV',
        back: 'I run.（私は走ります。）\nこの文の形は？',
        hint: '動詞の後ろに何かある？',
        explanation: '動詞の後ろに何もないから SV だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-ss-fc20',
        front: 'SVC',
        back: 'She is kind.（彼女はやさしいです。）\nこの文の形は？',
        hint: 'She = kind になるかな？',
        explanation: 'She = kind が成り立つから SVC だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-ss-fc21',
        front: 'SVO',
        back: 'I play tennis.（私はテニスをします。）\nこの文の形は？',
        hint: 'I = tennis になる？',
        explanation: 'I ≠ tennis。目的語が1つだから SVO だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-ss-fc22',
        front: 'SVOO',
        back: 'He gives me a book.（彼は私に本をくれます。）\nこの文の形は？',
        hint: 'me = a book になる？',
        explanation: 'me ≠ a book。「〜に」「〜を」が並ぶ SVOO だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-ss-fc23',
        front: 'SVOC',
        back: 'They call him Ken.（彼らは彼をケンと呼びます。）\nこの文の形は？',
        hint: 'him = Ken になる？',
        explanation: 'him = Ken が成り立つから SVOC だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-ss-fc24',
        front: 'SVC',
        back: 'He looks happy.（彼はうれしそうに見える。）\nこの文の形は？',
        hint: 'He = happy になるかな？',
        explanation: 'look は「〜に見える」のとき SVC。He = happy が成り立つよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-ss-fc25',
        front: 'SVOC',
        back: 'The news made her happy.（そのニュースは彼女をうれしくさせた。）\nこの文の形は？',
        hint: 'her = happy になる？',
        explanation: 'her = happy が成り立つから SVOC。make は SVOO にも SVOC にもなるよ。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-ss-fc26',
        front: 'to me',
        back: 'He gave me a book. を書きかえると\nHe gave a book ___ ___.',
        hint: 'SVOO → SVO の書きかえ。give は to を使うよ',
        explanation: 'give は to を使う。He gave a book to me. だよ。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-ss-fc27',
        front: 'for me',
        back: 'My mother made me a cake. を書きかえると\nMy mother made a cake ___ ___.',
        hint: 'make は to と for のどっち？',
        explanation: 'make は for を使う。My mother made a cake for me. だよ。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-ss-fc28',
        front: 'SVOC',
        back: 'His father made him a great player.\n（彼の父が彼を偉大な選手にした。）\nこの文の形は？',
        hint: 'him = a great player になる？',
        explanation: 'him = a great player が成り立つ → SVOC。make は「〜にする」の意味だよ。',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        // === be going to / will（choice）===
        {
          id: 'eng-ss-q1',
          question:
            '「I (　　) going to visit Osaka tomorrow.」\nの (　　) に入るのは？',
          options: ['am', 'is', 'are', 'was'],
          correctIndex: 0,
          explanation: '主語が I のときの be 動詞は am だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-ss-q2',
          question:
            '「She (　　) going to cook dinner tonight.」\nの (　　) に入るのは？',
          options: ['am', 'are', 'is', 'was'],
          correctIndex: 2,
          explanation: '主語が She のときの be 動詞は is だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-ss-q3',
          question:
            '「The concert (　　) start soon.」\nの (　　) に入るのは？',
          options: ['is going', 'will', 'going to', 'does'],
          correctIndex: 1,
          explanation: '予測を表す「〜するでしょう」は will だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-ss-q4',
          question: 'will not の短縮形はどれ？',
          options: ["won't", "willn't", "wouldn't", "don't"],
          correctIndex: 0,
          explanation: "will not の短縮形は won't だよ。",
          difficulty: 'basic',
        },
        {
          id: 'eng-ss-q5',
          question:
            '電話が鳴っています。「私が出ましょう。」を英語で言うと？',
          options: [
            "I'm going to answer it.",
            'I can answer it.',
            'I answered it.',
            "I'll answer it.",
          ],
          correctIndex: 3,
          explanation:
            'その場で「〜しよう」と決めた意志は will を使うよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-ss-q6',
          question:
            '前から旅行を計画していて「来週京都に行く予定です」と言いたいとき、正しいのは？',
          options: [
            'I will go to Kyoto next week.',
            "I'm going to go to Kyoto next week.",
            'I go to Kyoto next week.',
            'I went to Kyoto next week.',
          ],
          correctIndex: 1,
          explanation:
            '前からの計画・予定は be going to を使うよ。',
          difficulty: 'standard',
        },
        // === SVOO / SVOC（choice）===
        {
          id: 'eng-ss-q7',
          question:
            '「She ___ us English.（彼女は私たちに英語を教えています。）」\nの ___ に入るのは？',
          options: ['teaches', 'tells', 'says', 'speaks'],
          correctIndex: 0,
          explanation:
            'teach + 人 + もの で「〜に〜を教える」。SVOO の形だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-ss-q8',
          question:
            '「People ___ this area Little India.（人々はこの地域をリトル・インディアと呼びます。）」\nの ___ に入るのは？',
          options: ['say', 'tell', 'call', 'speak'],
          correctIndex: 2,
          explanation:
            'call A B で「AをBと呼ぶ」。SVOC の形だよ。',
          difficulty: 'standard',
        },
        // === 5文型判定（choice）===
        {
          id: 'eng-ss-q9',
          question: '「I run.（私は走ります。）」はどの形？',
          options: ['SV', 'SVC', 'SVO', 'SVOO'],
          correctIndex: 0,
          explanation: '動詞の後ろに何もないから SV だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-ss-q10',
          question:
            '「He is a student.（彼は生徒です。）」はどの形？',
          options: ['SV', 'SVO', 'SVC', 'SVOC'],
          correctIndex: 2,
          explanation: 'He = a student が成り立つから SVC だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-ss-q11',
          question:
            '「She gave him a present.（彼女は彼にプレゼントをあげた。）」はどの形？',
          options: ['SVC', 'SVO', 'SVOC', 'SVOO'],
          correctIndex: 3,
          explanation:
            'him ≠ a present。「〜に」「〜を」が並んでいるから SVOO だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-ss-q12',
          question:
            '「We call her Yuki.（私たちは彼女をユキと呼びます。）」はどの形？',
          options: ['SVO', 'SVOC', 'SVOO', 'SVC'],
          correctIndex: 1,
          explanation: 'her = Yuki が成り立つから SVOC だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-ss-q13',
          question:
            '「The news made her happy.」はどの形？',
          options: ['SVOO', 'SVO', 'SVOC', 'SVC'],
          correctIndex: 2,
          explanation:
            'her = happy が成り立つから SVOC。make は SVOC で「〜をにする」だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-ss-q14',
          question:
            '「He gave me a book.」を書きかえた文として正しいのは？',
          options: [
            'He gave a book for me.',
            'He gave a book to me.',
            'He gave to me a book.',
            'He gave a book me.',
          ],
          correctIndex: 1,
          explanation:
            'give は to を使う。「動詞 + もの + to + 人」の形に書きかえるよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-ss-q15',
          question:
            '「My mother made me a sweater.」を書きかえるとき、正しいのは？',
          options: [
            'My mother made a sweater to me.',
            'My mother made a sweater at me.',
            'My mother made for me a sweater.',
            'My mother made a sweater for me.',
          ],
          correctIndex: 3,
          explanation:
            'make は for を使う。buy/make/cook → for だよ。',
          difficulty: 'advanced',
        },
        // === reorder questions ===
        {
          id: 'eng-ss-q16',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「私たちは明日、博物館を訪れるつもりです。」という英文を作ろう。',
          words: ['visit', 'are', 'we', 'to', 'going', 'the museum'],
          correctOrder: [2, 1, 4, 3, 0, 5],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「We are going to visit the museum tomorrow.」が正解。be going to + 動詞の原形 の形だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-ss-q17',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「コンサートはまもなく始まるでしょう。」という英文を作ろう。',
          words: ['will', 'the concert', 'soon', 'start'],
          correctOrder: [1, 0, 3, 2],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「The concert will start soon.」が正解。will + 動詞の原形 だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-ss-q18',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「彼女は私にプレゼントをくれました。」という英文を作ろう。',
          words: ['a', 'me', 'she', 'present', 'gave'],
          correctOrder: [2, 4, 1, 0, 3],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「She gave me a present.」が正解。SVOO の形だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-ss-q19',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「私たちは彼をケンと呼びます。」という英文を作ろう。',
          words: ['Ken', 'call', 'we', 'him'],
          correctOrder: [2, 1, 3, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「We call him Ken.」が正解。call A B（SVOC）の形だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-ss-q20',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「私のおばは子どもたちに英語を教えています。」という英文を作ろう。',
          words: ['teaches', 'aunt', 'English', 'my', 'children'],
          correctOrder: [3, 1, 0, 4, 2],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「My aunt teaches children English.」が正解。teach + 人 + もの の SVOO だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-ss-q21',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「あなたは来週、何を買うつもりですか。」という英文を作ろう。',
          words: ['are', 'buy', 'what', 'to', 'you', 'going'],
          correctOrder: [2, 0, 4, 5, 3, 1],
          punctuation: '?',
          options: [],
          correctIndex: -1,
          explanation:
            '「What are you going to buy next week?」が正解。疑問詞 + be going to の疑問文だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-ss-q22',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「彼はうれしそうに見えます。」という英文を作ろう。',
          words: ['happy', 'he', 'looks'],
          correctOrder: [1, 2, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「He looks happy.」が正解。SVC の形だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-ss-q23',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「私はあなたにこの街を案内しましょう。」という英文を作ろう。',
          words: ['show', 'I', 'this town', 'will', 'you'],
          correctOrder: [1, 3, 0, 4, 2],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「I will show you this town.」が正解。will + SVOO の形だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-ss-q24',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「彼らはその犬をポチと呼んでいます。」という英文を作ろう。',
          words: ['the dog', 'call', 'they', 'Pochi'],
          correctOrder: [2, 1, 0, 3],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「They call the dog Pochi.」が正解。call A B（SVOC）の形だよ。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-ss-ex1',
          question:
            '次の日本語を英語にしよう。\n「私は明日、友達とサッカーをする予定です。」（be going to を使って）',
          steps: [
            {
              title: 'Step 1: 主語と be 動詞を決めよう',
              content: '主語は I だから、be動詞は am だね。',
              highlight: 'I am',
            },
            {
              title: 'Step 2: going to + 動詞の原形',
              content:
                '「〜する予定」は going to + 動詞の原形。「サッカーをする」= play soccer だよ。',
              highlight: 'going to play soccer',
            },
            {
              title: 'Step 3: 残りの情報を加えて完成！',
              content:
                '「友達と」= with my friends、「明日」= tomorrow を付け加えるよ。',
              highlight:
                'I am going to play soccer with my friends tomorrow.',
            },
          ],
          answer:
            'I am going to play soccer with my friends tomorrow.\n（私は明日、友達とサッカーをする予定です。）',
        },
        {
          id: 'eng-ss-ex2',
          question:
            '次の日本語を英語にしよう。\n「明日は雨が降らないでしょう。」（will を使って）',
          steps: [
            {
              title: 'Step 1: 主語と will を書こう',
              content: '天気は it を使うよ。「〜ないでしょう」は will not だね。',
              highlight: 'It will not',
            },
            {
              title: "Step 2: won't に短縮しよう",
              content: "will not の短縮形は won't だよ。",
              highlight: "It won't",
            },
            {
              title: 'Step 3: 完成！',
              content: '「雨が降る」= rain、「明日」= tomorrow を付けるよ。',
              highlight: "It won't rain tomorrow.",
            },
          ],
          answer:
            "It won't rain tomorrow.\n（明日は雨が降らないでしょう。）",
        },
        {
          id: 'eng-ss-ex3',
          question:
            '次の日本語を英語にしよう。\n「母は私にお弁当を作ってくれました。」（SVOO の形で）',
          steps: [
            {
              title: 'Step 1: 主語と動詞を決めよう',
              content:
                '「母」= My mother、「作った」= made（make の過去形）だね。',
              highlight: 'My mother made',
            },
            {
              title: 'Step 2: SVOO の順番で「人」→「もの」',
              content:
                '「私に」= me、「お弁当を」= a lunch box。動詞 + 人 + もの の順番だよ。',
              highlight: 'me a lunch box',
            },
            {
              title: 'Step 3: 完成！',
              content: 'My mother made me a lunch box. SVOO の形ができたね！',
              highlight: 'My mother made me a lunch box.',
            },
          ],
          answer:
            'My mother made me a lunch box.\n（母は私にお弁当を作ってくれました。）',
        },
        {
          id: 'eng-ss-ex4',
          question:
            '次の文の形（SV / SVC / SVO / SVOO / SVOC）を答えよう。\n「The story made me sad.（その話は私を悲しくさせた。）」',
          steps: [
            {
              title: 'Step 1: 主語と動詞をさがそう',
              content:
                'S = The story（その話は）、V = made（〜させた）だね。',
              highlight: 'The story made',
            },
            {
              title: 'Step 2: 動詞の後ろの2つをチェック',
              content:
                'made の後ろに me（私を）と sad（悲しい）の2つがあるね。',
              highlight: 'me sad',
            },
            {
              title: 'Step 3: 後ろの2つが = になるかたしかめよう',
              content:
                'me = sad？ 私 = 悲しい → なるね！ だから SVOC。make は SVOO にも SVOC にもなるから注意！',
              highlight: 'SVOC',
            },
          ],
          answer: 'SVOC（me = sad が成り立つので SVOC）',
        },
        {
          id: 'eng-ss-ex5',
          question:
            '「He gave me a book.」を「動詞＋もの＋to/for＋人」の形に書きかえよう。',
          steps: [
            {
              title: 'Step 1: SVOO を確認',
              content:
                'He gave me a book. → 「me（人）」と「a book（もの）」が並んでいるね。',
              highlight: 'me a book',
            },
            {
              title: 'Step 2: give は to と for のどっち？',
              content:
                'give/show/teach/tell → to を使う。buy/make/cook → for を使うよ。give だから to だね！',
              highlight: 'to',
            },
            {
              title: 'Step 3: 書きかえて完成！',
              content:
                '「もの」を先に、「to + 人」を後ろに置くよ。',
              highlight: 'He gave a book to me.',
            },
          ],
          answer:
            'He gave a book to me.\n（give は to を使う。「動詞 + もの + to + 人」の形。）',
        },
        {
          id: 'eng-ss-ex6',
          question:
            '次の日本語を英語にしよう。\n「みんなはこの祭りを『ねぶた』と呼んでいます。」（SVOC の形で）',
          steps: [
            {
              title: 'Step 1: 主語と動詞',
              content:
                '「みんなは」= Everyone、「呼ぶ」= calls（三人称単数）。',
              highlight: 'Everyone calls',
            },
            {
              title: 'Step 2: A と B を決めよう',
              content:
                'A =「この祭りを」= this festival、B =「ねぶた」= "Nebuta"。call A B の順番だよ。',
              highlight: 'this festival "Nebuta"',
            },
            {
              title: 'Step 3: 完成！',
              content:
                'Everyone calls this festival "Nebuta". SVOC の形ができたね！ this festival = Nebuta が成り立つ。',
              highlight: 'Everyone calls this festival "Nebuta".',
            },
          ],
          answer:
            'Everyone calls this festival "Nebuta".\n（みんなはこの祭りを「ねぶた」と呼んでいます。）',
        },
      ],
    },
    chatId: 'eng-sentence-structures',
  },
};
