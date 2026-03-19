import type { Topic } from '../../../../../../../data/types';

export const passiveVoice: Topic = {
  id: 'eng-passive-voice',
  eraId: 'english-grade2',
  name: '受け身の文',
  subtitle: 'be動詞 + 過去分詞 / by 〜',
  icon: '🔄',
  order: 6,
  content: {
    explanation: {
      sections: [
        {
          title: '受け身の文の基本（be動詞 + 過去分詞）',
          content:
            '「〜される」「〜された」と言いたいとき、受け身の文を使うよ。受け身の文は「be動詞 + 過去分詞」の形で作るよ。',
          keyPoints: [
            '受け身の文 = be動詞 + 過去分詞',
            'This book is read by many people. = この本は多くの人に読まれています。',
            'English is spoken in many countries. = 英語は多くの国で話されています。',
            'by 〜 = 〜によって（だれがしたかを言いたいとき）',
            '過去分詞: played, used, written, made など（ed をつけるものと、特別な形のものがある）',
          ],
        },
        {
          title: '受け身の否定文・疑問文',
          content:
            '受け身の否定文はbe動詞のうしろに not をつけるだけ。疑問文はbe動詞を文のいちばん最初にもってくるよ。ふつうのbe動詞の文と同じルールだね。',
          keyPoints: [
            '否定文: This room is not used now. = この部屋は今使われていません。',
            '疑問文: Is English spoken in Canada? = カナダでは英語が話されていますか？',
            '答え方: Yes, it is. / No, it is not.',
            '受け身の過去: was/were + 過去分詞（This temple was built in 1300. = この寺は1300年に建てられました。）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      // --- basic (10枚) ---
      {
        id: 'eng-pass-fc1',
        front: 'is read',
        back: 'This book (　　) by many people.\n（この本は多くの人に読まれています。）',
        hint: '「読まれている」は受け身だよ。be動詞 + 過去分詞は…？',
        explanation:
          '受け身の文は be動詞 + 過去分詞。read の過去分詞は read（形は同じだけど発音がちがうよ）。',
        difficulty: 'basic',
      },
      {
        id: 'eng-pass-fc2',
        front: 'is spoken',
        back: 'English (　　) in many countries.\n（英語は多くの国で話されています。）',
        hint: '「話されている」は受け身。speak の過去分詞は…？',
        explanation: 'speak の過去分詞は spoken。English is spoken.',
        difficulty: 'basic',
      },
      {
        id: 'eng-pass-fc3',
        front: 'was built',
        back: 'This temple (　　) in 1300.\n（この寺は1300年に建てられました。）',
        hint: '過去の受け身だよ。build の過去分詞は…？',
        explanation: '過去の受け身は was/were + 過去分詞。build → built。',
        difficulty: 'basic',
      },
      {
        id: 'eng-pass-fc4',
        front: 'is made',
        back: 'This chair (　　) of wood.\n（このいすは木で作られています。）',
        hint: '「作られている」は受け身。make の過去分詞は…？',
        explanation: 'make の過去分詞は made。is made of 〜 =「〜で作られている」。',
        difficulty: 'basic',
      },
      {
        id: 'eng-pass-fc5',
        front: 'is loved',
        back: 'This movie (　　) by everyone.\n（この映画はみんなに愛されています。）',
        hint: '「愛されている」は受け身。love の過去分詞は…？',
        explanation: 'love の過去分詞は loved。is loved =「愛されている」。',
        difficulty: 'basic',
      },
      {
        id: 'eng-pass-fc6',
        front: 'is used',
        back: 'This computer (　　) by many students.\n（このコンピュータは多くの生徒に使われています。）',
        hint: '「使われている」は受け身。use の過去分詞は…？',
        explanation: 'use の過去分詞は used。is used =「使われている」。',
        difficulty: 'basic',
      },
      {
        id: 'eng-pass-fc7',
        front: 'given',
        back: 'give（あげる）の過去分詞は？',
        hint: 'give - gave - ???',
        explanation: 'give → gave → given だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-pass-fc8',
        front: 'taken',
        back: 'take（取る）の過去分詞は？',
        hint: 'take - took - ???',
        explanation: 'take → took → taken だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-pass-fc9',
        front: 'seen',
        back: 'see（見る）の過去分詞は？',
        hint: 'see - saw - ???',
        explanation: 'see → saw → seen だよ。',
        difficulty: 'basic',
      },
      {
        id: 'eng-pass-fc10',
        front: 'eaten',
        back: 'eat（食べる）の過去分詞は？',
        hint: 'eat - ate - ???',
        explanation: 'eat → ate → eaten だよ。',
        difficulty: 'basic',
      },
      // --- standard (12枚) ---
      {
        id: 'eng-pass-fc11',
        front: 'by',
        back: 'This song was written (　　) him.\n（この歌は彼によって書かれました。）',
        hint: '「〜によって」を表すことばは…？',
        explanation: 'by 〜 =「〜によって」。だれがしたかを言いたいときに使うよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-pass-fc12',
        front: 'is not used',
        back: 'This room (　　) now.\n（この部屋は今使われていません。）',
        hint: '受け身の否定文。be動詞のうしろに not をつけるよ',
        explanation: '受け身の否定文は be動詞 + not + 過去分詞。is not used',
        difficulty: 'standard',
      },
      {
        id: 'eng-pass-fc13',
        front: 'Is',
        back: '(　　) English spoken in Canada?\n（カナダでは英語が話されていますか？）',
        hint: '受け身の疑問文。be動詞をいちばん最初にもってくるよ',
        explanation:
          '受け身の疑問文は be動詞を文のいちばん最初にもってくる。Is English spoken ...?',
        difficulty: 'standard',
      },
      {
        id: 'eng-pass-fc14',
        front: 'were invited',
        back: 'They (　　) to the party.\n（彼らはパーティーに招待されました。）',
        hint: '過去の受け身で、They だから…？',
        explanation: 'They だから were。invite の過去分詞は invited。were invited',
        difficulty: 'standard',
      },
      {
        id: 'eng-pass-fc15',
        front: 'was written',
        back: 'This song (　　) by him.\n（この歌は彼によって書かれました。）',
        hint: '過去の受け身。write の過去分詞は…？',
        explanation: 'write → written。過去の受け身は was + 過去分詞だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-pass-fc16',
        front: 'were taken',
        back: 'These pictures (　　) last week.\n（これらの写真は先週撮られました。）',
        hint: '過去の受け身で、These pictures は複数だから…？',
        explanation: '複数だから were。take の過去分詞は taken。were taken',
        difficulty: 'standard',
      },
      {
        id: 'eng-pass-fc17',
        front: 'was discovered',
        back: 'It (　　) in 1900.\n（それは1900年に発見されました。）',
        hint: '過去の受け身。discover の過去分詞は…？',
        explanation: 'discover の過去分詞は discovered。was discovered =「発見された」。',
        difficulty: 'standard',
      },
      {
        id: 'eng-pass-fc18',
        front: 'broken',
        back: 'break（壊す）の過去分詞は？',
        hint: 'break - broke - ???',
        explanation: 'break → broke → broken だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-pass-fc19',
        front: 'chosen',
        back: 'choose（選ぶ）の過去分詞は？',
        hint: 'choose - chose - ???',
        explanation: 'choose → chose → chosen だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-pass-fc20',
        front: 'sung',
        back: 'sing（歌う）の過去分詞は？',
        hint: 'sing - sang - ???',
        explanation: 'sing → sang → sung だよ。',
        difficulty: 'standard',
      },
      {
        id: 'eng-pass-fc21',
        front: 'found',
        back: 'find（見つける）の過去分詞は？',
        hint: 'find - found - ???',
        explanation: 'find → found → found だよ。過去形と同じ形だね。',
        difficulty: 'standard',
      },
      {
        id: 'eng-pass-fc22',
        front: 'cut',
        back: 'cut（切る）の過去分詞は？',
        hint: 'cut - cut - ???',
        explanation: 'cut → cut → cut。ぜんぶ同じ形だよ。',
        difficulty: 'standard',
      },
      // --- advanced (6枚) ---
      {
        id: 'eng-pass-fc23',
        front: 'Was',
        back: '(　　) this cake made by your mother?\n（このケーキはお母さんによって作られましたか？）',
        hint: '受け身の疑問文（過去）。be動詞をいちばん最初にもってくるよ',
        explanation: '過去の受け身の疑問文は Was/Were + 主語 + 過去分詞 ...?',
        difficulty: 'advanced',
      },
      {
        id: 'eng-pass-fc24',
        front: 'known',
        back: 'know（知っている）の過去分詞は？',
        hint: 'know - knew - ???',
        explanation: 'know → knew → known だよ。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-pass-fc25',
        front: 'of',
        back: 'This desk is made (　　) wood.\n（この机は木で作られています。）',
        hint: '材料が見てわかるときは…？',
        explanation: 'be made of 〜 = 材料が見てわかるとき。木がそのまま見えるよね。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-pass-fc26',
        front: 'from',
        back: 'Wine is made (　　) grapes.\n（ワインはぶどうから作られます。）',
        hint: '原料が変化して見えないときは…？',
        explanation:
          'be made from 〜 = 原料が変化して見えないとき。ぶどうがワインに変わるよね。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-pass-fc27',
        front: 'for',
        back: 'Kyoto is known (　　) its temples.\n（京都はお寺で有名です。）',
        hint: '「〜で有名」の前置詞は…？',
        explanation: 'be known for 〜 =「〜で有名」。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-pass-fc28',
        front: 'in',
        back: 'I am interested (　　) science.\n（私は科学に興味があります。）',
        hint: '「〜に興味がある」の前置詞は…？',
        explanation: 'be interested in 〜 =「〜に興味がある」。',
        difficulty: 'advanced',
      },
      // --- 助動詞+受け身 / be called (12枚) ---
      {
        id: 'eng-pass-fc29',
        front: 'will be enjoyed',
        back: 'Mt. Fuji (　　) by people forever.\n（富士山は人々に永遠に楽しまれるでしょう。）',
        hint: '「〜されるでしょう」は助動詞 + be + 過去分詞だよ',
        explanation: 'will be + 過去分詞で「〜されるでしょう」。enjoy の過去分詞は enjoyed。',
        difficulty: 'standard',
      },
      {
        id: 'eng-pass-fc30',
        front: 'can be seen',
        back: 'It (　　) on the walls of public baths.\n（それは銭湯の壁に見ることができます。）',
        hint: '「見ることができる」を受け身にすると…？ can + be + ???',
        explanation: 'can be + 過去分詞で「〜されることができる」。see の過去分詞は seen。',
        difficulty: 'standard',
      },
      {
        id: 'eng-pass-fc31',
        front: 'must be followed',
        back: 'School rules (　　).\n（校則は守られなければなりません。）',
        hint: '「守られなければならない」= must + be + ???',
        explanation: 'must be + 過去分詞で「〜されなければならない」。follow の過去分詞は followed。',
        difficulty: 'standard',
      },
      {
        id: 'eng-pass-fc32',
        front: 'should be cleaned',
        back: 'Classrooms (　　) every day.\n（教室は毎日きれいにされるべきです。）',
        hint: '「きれいにされるべき」= should + be + ???',
        explanation: 'should be + 過去分詞で「〜されるべき」。clean の過去分詞は cleaned。',
        difficulty: 'standard',
      },
      {
        id: 'eng-pass-fc33',
        front: 'is called',
        back: 'This dish (　　) okonomiyaki.\n（この料理はお好み焼きと呼ばれています。）',
        hint: '「〜と呼ばれている」は受け身だよ。be + ???',
        explanation: 'be called 〜 =「〜と呼ばれている」。call の過去分詞は called。',
        difficulty: 'basic',
      },
      {
        id: 'eng-pass-fc34',
        front: 'was listed',
        back: 'Mt. Fuji (　　) as a World Heritage site in 2013.\n（富士山は2013年に世界遺産に登録されました。）',
        hint: '「リストに載せられた」= 過去の受け身。list の過去分詞は…？',
        explanation: 'list の過去分詞は listed。過去の受け身は was + 過去分詞。',
        difficulty: 'standard',
      },
      {
        id: 'eng-pass-fc35',
        front: 'is covered',
        back: 'The mountain (　　) with snow.\n（その山は雪でおおわれています。）',
        hint: '「おおわれている」は受け身。cover の過去分詞は…？',
        explanation: 'cover の過去分詞は covered。is covered with 〜 =「〜でおおわれている」。',
        difficulty: 'standard',
      },
      {
        id: 'eng-pass-fc36',
        front: 'must not be washed',
        back: 'This kind of shoes (　　) with water.\n（この種類の靴は水で洗ってはいけません。）',
        hint: '「洗ってはいけない」= must not + be + ???',
        explanation: 'must not be + 過去分詞で「〜されてはいけない」。wash の過去分詞は washed。',
        difficulty: 'advanced',
      },
      {
        id: 'eng-pass-fc37',
        front: 'selected',
        back: 'select（選ぶ）の過去分詞は？',
        hint: 'ふつうの動詞は -ed をつけるよ',
        explanation: 'select → selected。This place is selected as a World Heritage site.',
        difficulty: 'basic',
      },
      {
        id: 'eng-pass-fc38',
        front: 'protected',
        back: 'protect（守る・保護する）の過去分詞は？',
        hint: 'ふつうの動詞は -ed をつけるよ',
        explanation: 'protect → protected。These forests must be protected.',
        difficulty: 'basic',
      },
      {
        id: 'eng-pass-fc39',
        front: 'can be found',
        back: 'This plant (　　) in cold places.\n（この植物は寒い場所で見つけることができます。）',
        hint: '「見つけることができる」を受け身にすると…？ can + be + ???',
        explanation: 'can be + 過去分詞。find の過去分詞は found。can be found =「見つけることができる」。',
        difficulty: 'standard',
      },
      {
        id: 'eng-pass-fc40',
        front: 'will be needed',
        back: 'More volunteers (　　) next year.\n（来年はもっと多くのボランティアが必要とされるでしょう。）',
        hint: '「必要とされるでしょう」= will + be + ???',
        explanation: 'will be + 過去分詞で「〜されるでしょう」。need の過去分詞は needed。',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        // --- choice: basic (6問) ---
        {
          id: 'eng-pass-q1',
          question:
            '「English (　　) in many countries.（英語は多くの国で話されています。）」\nの (　　) に入るのは？',
          options: ['speaks', 'is speaking', 'is spoken', 'spoken'],
          correctIndex: 2,
          explanation: '「話されている」は受け身。be動詞 + 過去分詞で is spoken だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-pass-q2',
          question:
            '「This temple (　　) in 1300.（この寺は1300年に建てられました。）」\nの (　　) に入るのは？',
          options: ['was built', 'is built', 'built', 'was building'],
          correctIndex: 0,
          explanation:
            '1300年のことだから過去の受け身。was + 過去分詞で was built だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-pass-q3',
          question:
            '「This song was written (　　) him.（この歌は彼によって書かれました。）」\nの (　　) に入るのは？',
          options: ['of', 'by', 'to', 'for'],
          correctIndex: 1,
          explanation:
            '「〜によって」は by だよ。written by him = 彼によって書かれた',
          difficulty: 'basic',
        },
        {
          id: 'eng-pass-q4',
          question: 'speak の過去分詞として正しいのは？',
          options: ['speaked', 'spoke', 'spoken', 'speaking'],
          correctIndex: 2,
          explanation:
            'speak → spoke → spoken だよ。speak は不規則動詞で、過去分詞は spoken。',
          difficulty: 'basic',
        },
        {
          id: 'eng-pass-q5',
          question: 'make の過去分詞として正しいのは？',
          options: ['maked', 'making', 'made', 'maken'],
          correctIndex: 2,
          explanation: 'make → made → made だよ。過去形と過去分詞が同じ形。',
          difficulty: 'basic',
        },
        {
          id: 'eng-pass-q6',
          question: 'write の過去分詞として正しいのは？',
          options: ['writed', 'wrote', 'writing', 'written'],
          correctIndex: 3,
          explanation: 'write → wrote → written だよ。',
          difficulty: 'basic',
        },
        // --- choice: standard (7問) ---
        {
          id: 'eng-pass-q7',
          question:
            '「Is this book read by many people?」に「はい」で答えるとき、正しいのは？',
          options: [
            'Yes, it does.',
            'Yes, it reads.',
            'Yes, it was.',
            'Yes, it is.',
          ],
          correctIndex: 3,
          explanation: 'Is で聞かれたら is で答えるよ。Yes, it is.',
          difficulty: 'standard',
        },
        {
          id: 'eng-pass-q8',
          question: '「This room is not used now.」の意味として正しいのは？',
          options: [
            'この部屋は今使っています。',
            'この部屋は今使いません。',
            'この部屋は今使われていません。',
            'この部屋は今使われました。',
          ],
          correctIndex: 2,
          explanation: '受け身の否定文だよ。is not used =「使われていない」。',
          difficulty: 'standard',
        },
        {
          id: 'eng-pass-q9',
          question:
            '「They (　　) to the party yesterday.（彼らは昨日パーティーに招待されました。）」\nの (　　) に入るのは？',
          options: ['are invited', 'was invited', 'were invited', 'invited'],
          correctIndex: 2,
          explanation:
            '主語が They（複数）で過去のことだから were invited だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-pass-q10',
          question:
            '「These pictures (　　) last week.（これらの写真は先週撮られました。）」\nの (　　) に入るのは？',
          options: ['was taken', 'were taken', 'is taken', 'are taken'],
          correctIndex: 1,
          explanation:
            '主語が These pictures（複数）で過去のことだから were taken。take の過去分詞は taken。',
          difficulty: 'standard',
        },
        {
          id: 'eng-pass-q11',
          question:
            '「Many people speak English.」を受け身にすると正しいのは？',
          options: [
            'English is spoken by many people.',
            'English spoken by many people.',
            'English was spoken by many people.',
            'English speaks by many people.',
          ],
          correctIndex: 0,
          explanation:
            '能動文の目的語（English）を主語にして、be動詞 + 過去分詞 + by 〜 にするよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-pass-q12',
          question: 'give の過去分詞として正しいのは？',
          options: ['gived', 'gave', 'given', 'giving'],
          correctIndex: 2,
          explanation: 'give → gave → given だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-pass-q13',
          question: 'break の過去分詞として正しいのは？',
          options: ['breaked', 'broke', 'broken', 'breaking'],
          correctIndex: 2,
          explanation: 'break → broke → broken だよ。',
          difficulty: 'standard',
        },
        // --- choice: advanced (5問) ---
        {
          id: 'eng-pass-q14',
          question:
            '「This desk is made (　　) wood.（この机は木で作られています。）」\nの (　　) に入るのは？',
          options: ['by', 'from', 'of', 'in'],
          correctIndex: 2,
          explanation:
            '材料が見てわかるときは of。木がそのまま見えるから is made of wood だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-pass-q15',
          question:
            '「Wine is made (　　) grapes.（ワインはぶどうから作られます。）」\nの (　　) に入るのは？',
          options: ['of', 'from', 'by', 'with'],
          correctIndex: 1,
          explanation:
            '原料が変化して見えないときは from。ぶどうがワインに変わるから is made from grapes。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-pass-q16',
          question:
            '「Kyoto is known (　　) its temples.（京都はお寺で有名です。）」\nの (　　) に入るのは？',
          options: ['by', 'for', 'of', 'to'],
          correctIndex: 1,
          explanation: 'be known for 〜 =「〜で有名」。for が正解だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-pass-q17',
          question:
            '「I am interested (　　) science.（私は科学に興味があります。）」\nの (　　) に入るのは？',
          options: ['at', 'for', 'of', 'in'],
          correctIndex: 3,
          explanation: 'be interested in 〜 =「〜に興味がある」。in が正解だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-pass-q18',
          question:
            '「She was surprised (　　) the news.（彼女はそのニュースに驚きました。）」\nの (　　) に入るのは？',
          options: ['in', 'by', 'at', 'for'],
          correctIndex: 2,
          explanation: 'be surprised at 〜 =「〜に驚く」。at が正解だよ。',
          difficulty: 'advanced',
        },
        // --- reorder: standard (6問) ---
        {
          id: 'eng-pass-q19',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「英語はここで話されています。」という英文を作ろう。',
          words: ['here', 'is', 'spoken', 'English'],
          correctOrder: [3, 1, 2, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「English is spoken here.」が正解。受け身の文は be動詞 + 過去分詞の形だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-pass-q20',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「そのケーキは彼女によって作られました。」という英文を作ろう。',
          words: ['her', 'made', 'was', 'the', 'by', 'cake'],
          correctOrder: [3, 5, 2, 1, 4, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「The cake was made by her.」が正解。過去の受け身は was/were + 過去分詞。by 〜 =「〜によって」だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-pass-q21',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「この歌は多くの人に愛されています。」という英文を作ろう。',
          words: ['loved', 'this', 'is', 'song', 'many', 'by', 'people'],
          correctOrder: [1, 3, 2, 0, 5, 4, 6],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「This song is loved by many people.」が正解。be動詞 + 過去分詞 + by 〜 の形だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-pass-q22',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「フランス語はここでは話されていません。」という英文を作ろう。',
          words: ['not', 'French', 'spoken', 'is', 'here'],
          correctOrder: [1, 3, 0, 2, 4],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「French is not spoken here.」が正解。受け身の否定文は be動詞 + not + 過去分詞。',
          difficulty: 'standard',
        },
        // --- reorder: advanced (4問) ---
        {
          id: 'eng-pass-q23',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「この部屋は毎日使われていますか？」という英文を作ろう。',
          words: ['used', 'this', 'is', 'room', 'every', 'day'],
          correctOrder: [2, 1, 3, 0, 4, 5],
          punctuation: '?',
          options: [],
          correctIndex: -1,
          explanation:
            '「Is this room used every day?」が正解。受け身の疑問文は be動詞を文のいちばん最初にもってくるよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-pass-q24',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「この寺はいつ建てられましたか？」という英文を作ろう。',
          words: ['built', 'this', 'when', 'was', 'temple'],
          correctOrder: [2, 3, 1, 4, 0],
          punctuation: '?',
          options: [],
          correctIndex: -1,
          explanation:
            '「When was this temple built?」が正解。疑問詞 + was + 主語 + 過去分詞 の語順だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-pass-q25',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「このいすは木で作られています。」という英文を作ろう。',
          words: ['of', 'this', 'made', 'is', 'chair', 'wood'],
          correctOrder: [1, 4, 3, 2, 0, 5],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「This chair is made of wood.」が正解。be made of 〜 =「〜で作られている」（材料が見てわかるとき）。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-pass-q26',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「京都はお寺で有名です。」という英文を作ろう。',
          words: ['its', 'Kyoto', 'known', 'is', 'for', 'temples'],
          correctOrder: [1, 3, 2, 4, 0, 5],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「Kyoto is known for its temples.」が正解。be known for 〜 =「〜で有名」だよ。',
          difficulty: 'advanced',
        },
        // --- choice: 助動詞+受け身 / be called (7問) ---
        {
          id: 'eng-pass-q27',
          question:
            '「Mt. Fuji (　　) by people forever.（富士山は人々に永遠に楽しまれるでしょう。）」\nの (　　) に入るのは？',
          options: ['will enjoy', 'will be enjoyed', 'is enjoyed', 'enjoys'],
          correctIndex: 1,
          explanation:
            '「〜されるでしょう」は助動詞 + be + 過去分詞。will be enjoyed が正解だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-pass-q28',
          question:
            '「School rules (　　).（校則は守られなければなりません。）」\nの (　　) に入るのは？',
          options: ['must follow', 'must be followed', 'are followed', 'must following'],
          correctIndex: 1,
          explanation:
            '「守られなければならない」は must + be + 過去分詞。must be followed が正解。',
          difficulty: 'standard',
        },
        {
          id: 'eng-pass-q29',
          question:
            '「This dish (　　) okonomiyaki.（この料理はお好み焼きと呼ばれています。）」\nの (　　) に入るのは？',
          options: ['calls', 'is calling', 'is called', 'called'],
          correctIndex: 2,
          explanation:
            '「〜と呼ばれている」は受け身の be called。is called が正解だよ。',
          difficulty: 'basic',
        },
        {
          id: 'eng-pass-q30',
          question:
            '「This plant (　　) in cold places.（この植物は寒い場所で見つけることができます。）」\nの (　　) に入るのは？',
          options: ['can find', 'can be found', 'is found', 'can found'],
          correctIndex: 1,
          explanation:
            '「見つけることができる」を受け身にすると can be found。can + be + 過去分詞の形だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-pass-q31',
          question: '助動詞のある受け身の文の形として正しいのは？',
          options: [
            '助動詞 + 過去分詞',
            '助動詞 + be + 過去分詞',
            'be動詞 + 助動詞 + 過去分詞',
            '助動詞 + being + 過去分詞',
          ],
          correctIndex: 1,
          explanation:
            '助動詞のある受け身は「助動詞 + be + 過去分詞」の形。will be enjoyed, can be found など。',
          difficulty: 'standard',
        },
        {
          id: 'eng-pass-q32',
          question:
            '「Nurses help doctors.」を受け身にすると正しいのは？',
          options: [
            'Doctors are helped by nurses.',
            'Doctors is helped by nurses.',
            'Doctors helped by nurses.',
            'Doctors are help by nurses.',
          ],
          correctIndex: 0,
          explanation:
            '目的語 doctors を主語にして、be動詞 + 過去分詞 + by 〜。Doctors（複数）だから are helped by nurses.',
          difficulty: 'standard',
        },
        {
          id: 'eng-pass-q33',
          question:
            '「His violin was made 300 years ago.」の下線部（300 years ago）をたずねる疑問文は？',
          options: [
            'What was his violin made?',
            'When was his violin made?',
            'Where was his violin made?',
            'Who was his violin made?',
          ],
          correctIndex: 1,
          explanation:
            '「300年前に」は「いつ」をたずねているから When を使うよ。When was his violin made?',
          difficulty: 'advanced',
        },
        // --- reorder: 助動詞+受け身 / be called (4問) ---
        {
          id: 'eng-pass-q34',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「富士山は人々に永遠に楽しまれるでしょう。」という英文を作ろう。',
          words: ['be', 'Mt. Fuji', 'will', 'enjoyed', 'by', 'people', 'forever'],
          correctOrder: [1, 2, 0, 3, 4, 5, 6],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「Mt. Fuji will be enjoyed by people forever.」が正解。助動詞 + be + 過去分詞の形だよ。',
          difficulty: 'standard',
        },
        {
          id: 'eng-pass-q35',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「この料理はお好み焼きと呼ばれています。」という英文を作ろう。',
          words: ['called', 'this', 'is', 'dish', 'okonomiyaki'],
          correctOrder: [1, 3, 2, 0, 4],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「This dish is called okonomiyaki.」が正解。be called 〜 =「〜と呼ばれている」。',
          difficulty: 'basic',
        },
        {
          id: 'eng-pass-q36',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「なぜその都市は花の都と呼ばれているのですか。」という英文を作ろう。',
          words: ['the City', 'is', 'why', 'called', 'of Flowers', 'the city'],
          correctOrder: [2, 1, 5, 3, 0, 4],
          punctuation: '?',
          options: [],
          correctIndex: -1,
          explanation:
            '「Why is the city called the City of Flowers?」が正解。疑問詞 + be動詞 + 主語 + called 〜 の語順だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'eng-pass-q37',
          type: 'reorder',
          question:
            '次の単語を正しい順番にならべて、\n「これらの森は保護されなければなりません。」という英文を作ろう。',
          words: ['must', 'these', 'be', 'forests', 'protected'],
          correctOrder: [1, 3, 0, 2, 4],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation:
            '「These forests must be protected.」が正解。助動詞 + be + 過去分詞の形だよ。',
          difficulty: 'standard',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-pass-ex1',
          question:
            '次の日本語を英語にしよう。\n「英語は多くの国で話されています。」',
          steps: [
            {
              title: 'Step 1: 「何が？」をさがそう',
              content: '「英語は」→ 英語で English だね。',
              highlight: 'English',
            },
            {
              title: 'Step 2: 「話されている」を受け身にしよう',
              content:
                '受け身は be動詞 + 過去分詞。speak の過去分詞は spoken だよ。English は1つのことだから is を使うね。',
              highlight: 'is spoken',
            },
            {
              title: 'Step 3: 「多くの国で」をつけよう',
              content: '「多くの国で」= in many countries。',
              highlight: 'in many countries',
            },
          ],
          answer:
            'English is spoken in many countries.（英語は多くの国で話されています。）',
        },
        {
          id: 'eng-pass-ex2',
          question:
            '次の文を受け身の文にしよう。\nMany people read this book.（多くの人がこの本を読みます。）',
          steps: [
            {
              title: 'Step 1: 「〜を」にあたることばを主語にしよう',
              content:
                '「〜を」にあたることば = this book。これを文のいちばん最初にもってくるよ。',
              highlight: 'This book',
            },
            {
              title: 'Step 2: be動詞 + 過去分詞にしよう',
              content:
                'This book は1つのことだから be動詞は is。read の過去分詞は read。',
              highlight: 'is read',
            },
            {
              title: 'Step 3: 「〜によって」をつけよう',
              content:
                '「多くの人によって」= by many people をうしろにつけるよ。',
              highlight: 'by many people',
            },
          ],
          answer:
            'This book is read by many people.（この本は多くの人に読まれています。）',
        },
        {
          id: 'eng-pass-ex3',
          question:
            '次の受け身の文を疑問文にして、Yes で答えよう。\nEnglish is spoken in Canada.（カナダでは英語が話されています。）',
          steps: [
            {
              title: 'Step 1: be動詞をさがそう',
              content:
                'English is spoken in Canada. の中で、be動詞をさがすと… is があるね！',
              highlight: 'is',
            },
            {
              title: 'Step 2: be動詞を文のいちばん最初にもっていこう',
              content:
                'is を English の前にもっていって、おわりに ？ をつけるよ。',
              highlight: 'Is English spoken in Canada?',
            },
            {
              title: 'Step 3: Yes で答えよう',
              content:
                'English は it で受けるよ。Is で聞かれたら is で答えるんだね。',
              highlight: 'Yes, it is.',
            },
          ],
          answer:
            'Is English spoken in Canada? — Yes, it is.\n（カナダでは英語が話されていますか？ — はい、話されています。）',
        },
        {
          id: 'eng-pass-ex4',
          question:
            '次の文を受け身の文にしよう。\nShe cleaned the room yesterday.（彼女は昨日その部屋を掃除しました。）',
          steps: [
            {
              title: 'Step 1: 「〜を」にあたることばを主語にしよう',
              content:
                '「〜を」= the room。これを文のいちばん最初にもってくるよ。',
              highlight: 'The room',
            },
            {
              title: 'Step 2: was/were + 過去分詞にしよう',
              content:
                '過去のことだから was/were を使うよ。The room は単数だから was。clean の過去分詞は cleaned。',
              highlight: 'was cleaned',
            },
            {
              title: 'Step 3: 「〜によって」と「いつ」をつけよう',
              content:
                '「彼女によって」= by her、「昨日」= yesterday をうしろにつけるよ。',
              highlight: 'by her yesterday',
            },
          ],
          answer:
            'The room was cleaned by her yesterday.（その部屋は昨日彼女によって掃除されました。）',
        },
        {
          id: 'eng-pass-ex5',
          question:
            '次の日本語を英語にしよう。\n「英語は多くの国で話されています。」（by 〜 は省略）',
          steps: [
            {
              title: 'Step 1: by 〜 を省略するのはどんなとき？',
              content:
                'だれがするかが「一般的な人々」のときや、言う必要がないときは by 〜 を省略するよ。',
              highlight: 'by を省略',
            },
            {
              title: 'Step 2: 主語 + be動詞 + 過去分詞',
              content:
                'English is spoken まではいつもと同じだね。',
              highlight: 'English is spoken',
            },
            {
              title: 'Step 3: 場所をつけて完成！',
              content:
                '「多くの国で」= in many countries をつけるだけ。by 〜 はつけなくてOK！',
              highlight: 'in many countries',
            },
          ],
          answer:
            'English is spoken in many countries.（英語は多くの国で話されています。）\n※ だれが話すかは言わなくてもわかるので by 〜 は省略するのがふつう。',
        },
        {
          id: 'eng-pass-ex6',
          question:
            '「be made of 〜」と「be made from 〜」のちがいを例文で理解しよう。',
          steps: [
            {
              title: 'Step 1: be made of 〜（材料が見てわかるとき）',
              content:
                'This chair is made of wood.（このいすは木で作られている。）\n→ いすを見れば「木だな」とわかるよね！',
              highlight: 'is made of wood',
            },
            {
              title: 'Step 2: be made from 〜（原料が変化して見えないとき）',
              content:
                'Wine is made from grapes.（ワインはぶどうから作られる。）\n→ ワインを見ても「ぶどうだ」とはわからないよね！',
              highlight: 'is made from grapes',
            },
            {
              title: 'Step 3: まとめ',
              content:
                'of = 材料が見える（木→机、ガラス→窓）\nfrom = 原料が変化（ぶどう→ワイン、牛乳→チーズ）',
              highlight: 'of = 見える / from = 変化',
            },
          ],
          answer:
            'be made of 〜 = 材料が見てわかるとき\nbe made from 〜 = 原料が変化して見えないとき',
        },
        {
          id: 'eng-pass-ex7',
          question:
            '次の日本語を英語にしよう。\n「校則は守られなければなりません。」',
          steps: [
            {
              title: 'Step 1: 主語を確認しよう',
              content: '「校則は」= School rules だね。',
              highlight: 'School rules',
            },
            {
              title: 'Step 2: 助動詞+受け身の形にしよう',
              content:
                '「守られなければならない」= must + be + 過去分詞。follow（守る）の過去分詞は followed だよ。',
              highlight: 'must be followed',
            },
            {
              title: 'Step 3: 完成！',
              content:
                '助動詞のある受け身は「助動詞 + be + 過去分詞」の形。beを忘れないようにしよう！',
              highlight: 'School rules must be followed.',
            },
          ],
          answer:
            'School rules must be followed.（校則は守られなければなりません。）',
        },
        {
          id: 'eng-pass-ex8',
          question:
            '次の日本語を英語にしよう。\n「この料理はお好み焼きと呼ばれています。」',
          steps: [
            {
              title: 'Step 1: 主語を確認しよう',
              content: '「この料理は」= This dish だね。',
              highlight: 'This dish',
            },
            {
              title: 'Step 2: 「呼ばれている」を受け身にしよう',
              content:
                '「〜と呼ばれている」= is called（受け身）。call の過去分詞は called だよ。',
              highlight: 'is called',
            },
            {
              title: 'Step 3: 名前をつけて完成！',
              content:
                'うしろに呼ばれている名前をそのまま置くだけ。okonomiyaki をつけて完成！',
              highlight: 'okonomiyaki',
            },
          ],
          answer:
            'This dish is called okonomiyaki.（この料理はお好み焼きと呼ばれています。）',
        },
      ],
    },
    chatId: 'eng-passive-voice',
  },
};
