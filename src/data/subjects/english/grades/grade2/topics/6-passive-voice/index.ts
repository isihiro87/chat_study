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
      {
        id: 'eng-pass-fc1',
        front: 'is read',
        back: 'This book (　　) by many people.\n（この本は多くの人に読まれています。）',
        hint: '「読まれている」は受け身だよ。be動詞 + 過去分詞は…？',
        explanation: '受け身の文は be動詞 + 過去分詞。read の過去分詞は read（形は同じだけど発音がちがうよ）。',
      },
      {
        id: 'eng-pass-fc2',
        front: 'is spoken',
        back: 'English (　　) in many countries.\n（英語は多くの国で話されています。）',
        hint: '「話されている」は受け身。speak の過去分詞は…？',
        explanation: 'speak の過去分詞は spoken。English is spoken.',
      },
      {
        id: 'eng-pass-fc3',
        front: 'was built',
        back: 'This temple (　　) in 1300.\n（この寺は1300年に建てられました。）',
        hint: '過去の受け身だよ。build の過去分詞は…？',
        explanation: '過去の受け身は was/were + 過去分詞。build → built。',
      },
      {
        id: 'eng-pass-fc4',
        front: 'is made',
        back: 'This chair (　　) of wood.\n（このいすは木で作られています。）',
        hint: '「作られている」は受け身。make の過去分詞は…？',
        explanation: 'make の過去分詞は made。is made of 〜 =「〜で作られている」。',
      },
      {
        id: 'eng-pass-fc5',
        front: 'by',
        back: 'This song was written (　　) him.\n（この歌は彼によって書かれました。）',
        hint: '「〜によって」を表すことばは…？',
        explanation: 'by 〜 =「〜によって」。だれがしたかを言いたいときに使うよ。',
      },
      {
        id: 'eng-pass-fc6',
        front: 'is not used',
        back: 'This room (　　) now.\n（この部屋は今使われていません。）',
        hint: '受け身の否定文。be動詞のうしろに not をつけるよ',
        explanation: '受け身の否定文は be動詞 + not + 過去分詞。is not used',
      },
      {
        id: 'eng-pass-fc7',
        front: 'Is',
        back: '(　　) English spoken in Canada?\n（カナダでは英語が話されていますか？）',
        hint: '受け身の疑問文。be動詞をいちばん最初にもってくるよ',
        explanation: '受け身の疑問文は be動詞を文のいちばん最初にもってくる。Is English spoken ...?',
      },
      {
        id: 'eng-pass-fc8',
        front: 'were invited',
        back: 'They (　　) to the party.\n（彼らはパーティーに招待されました。）',
        hint: '過去の受け身で、They だから…？',
        explanation: 'They だから were。invite の過去分詞は invited。were invited',
      },
      {
        id: 'eng-pass-fc9',
        front: 'is loved',
        back: 'This movie (　　) by everyone.\n（この映画はみんなに愛されています。）',
        hint: '「愛されている」は受け身。love の過去分詞は…？',
        explanation: 'love の過去分詞は loved。is loved by everyone =「みんなに愛されている」',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-pass-q1',
          question: '「English (　　) in many countries.（英語は多くの国で話されています。）」\nの (　　) に入るのは？',
          options: ['speaks', 'is speaking', 'is spoken', 'spoken'],
          correctIndex: 2,
          explanation: '「話されている」は受け身。be動詞 + 過去分詞で is spoken だよ。',
        },
        {
          id: 'eng-pass-q2',
          question: '「This temple (　　) in 1300.（この寺は1300年に建てられました。）」\nの (　　) に入るのは？',
          options: ['built', 'is built', 'was built', 'was building'],
          correctIndex: 2,
          explanation: '1300年のことだから過去の受け身。was + 過去分詞で was built だよ。',
        },
        {
          id: 'eng-pass-q3',
          question: '「This song was written (　　) him.（この歌は彼によって書かれました。）」\nの (　　) に入るのは？',
          options: ['of', 'to', 'by', 'for'],
          correctIndex: 2,
          explanation: '「〜によって」は by だよ。written by him = 彼によって書かれた',
        },
        {
          id: 'eng-pass-q4',
          question: '「Is this book read by many people?」に「はい」で答えるとき、正しいのは？',
          options: [
            'Yes, it does.',
            'Yes, it is.',
            'Yes, it was.',
            'Yes, it reads.',
          ],
          correctIndex: 1,
          explanation: 'Is で聞かれたら is で答えるよ。Yes, it is.',
        },
        {
          id: 'eng-pass-q5',
          question: '「This room is not used now.」の意味として正しいのは？',
          options: [
            'この部屋は今使っています。',
            'この部屋は今使われていません。',
            'この部屋は今使いません。',
            'この部屋は今使われました。',
          ],
          correctIndex: 1,
          explanation: '受け身の否定文だよ。is not used =「使われていない」。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-pass-ex1',
          question: '次の日本語を英語にしよう。\n「英語は多くの国で話されています。」',
          steps: [
            {
              title: 'Step 1: 「何が？」をさがそう',
              content: '「英語は」→ 英語で English だね。',
              highlight: 'English',
            },
            {
              title: 'Step 2: 「話されている」を受け身にしよう',
              content: '受け身は be動詞 + 過去分詞。speak の過去分詞は spoken だよ。English は1つのことだから is を使うね。',
              highlight: 'is spoken',
            },
            {
              title: 'Step 3: 「多くの国で」をつけよう',
              content: '「多くの国で」= in many countries。',
              highlight: 'in many countries',
            },
          ],
          answer: 'English is spoken in many countries.（英語は多くの国で話されています。）',
        },
        {
          id: 'eng-pass-ex2',
          question: '次の文を受け身の文にしよう。\nMany people read this book.（多くの人がこの本を読みます。）',
          steps: [
            {
              title: 'Step 1: 「〜を」にあたることばを主語にしよう',
              content: '「〜を」にあたることば = this book。これを文のいちばん最初にもってくるよ。',
              highlight: 'This book',
            },
            {
              title: 'Step 2: be動詞 + 過去分詞にしよう',
              content: 'This book は1つのことだから be動詞は is。read の過去分詞は read。',
              highlight: 'is read',
            },
            {
              title: 'Step 3: 「〜によって」をつけよう',
              content: '「多くの人によって」= by many people をうしろにつけるよ。',
              highlight: 'by many people',
            },
          ],
          answer: 'This book is read by many people.（この本は多くの人に読まれています。）',
        },
        {
          id: 'eng-pass-ex3',
          question: '次の受け身の文を疑問文にして、Yes で答えよう。\nEnglish is spoken in Canada.（カナダでは英語が話されています。）',
          steps: [
            {
              title: 'Step 1: be動詞をさがそう',
              content: 'English is spoken in Canada. の中で、be動詞をさがすと… is があるね！',
              highlight: 'is',
            },
            {
              title: 'Step 2: be動詞を文のいちばん最初にもっていこう',
              content: 'is を English の前にもっていって、おわりに ？ をつけるよ。',
              highlight: 'Is English spoken in Canada?',
            },
            {
              title: 'Step 3: Yes で答えよう',
              content: 'English は it で受けるよ。Is で聞かれたら is で答えるんだね。',
              highlight: 'Yes, it is.',
            },
          ],
          answer: 'Is English spoken in Canada? — Yes, it is.\n（カナダでは英語が話されていますか？ — はい、話されています。）',
        },
      ],
    },
    chatId: 'eng-passive-voice',
  },
};
