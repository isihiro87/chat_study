import type { Topic } from '../../../../../../../data/types';

export const questionWords: Topic = {
  id: 'eng-question-words',
  eraId: 'english-grade1',
  name: '疑問詞',
  subtitle: 'what / who / where / when / how',
  icon: '❓',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: 'what / who で聞いてみよう',
          content:
            '「何？」と聞きたいときは what、「だれ？」と聞きたいときは who を文のいちばん最初に置くよ。答えるときは Yes / No ではなく、具体的に答えるよ。',
          keyPoints: [
            'What is this? = これは何ですか？ → It is a pen.（それはペンです。）',
            'Who is she? = 彼女はだれですか？ → She is Yuki.（彼女はユキです。）',
            'what = 何 / who = だれ',
          ],
        },
        {
          title: 'where / when / how も覚えよう',
          content:
            'where は「どこ」、when は「いつ」、how は「どう・どのくらい」。how は他のことばとくっつけると意味がかわるよ。how many =「いくつ」、how old =「何歳」など。',
          keyPoints: [
            'Where is the park? = 公園はどこですか？',
            'When is your birthday? = 誕生日はいつですか？',
            'How are you? = 調子はどうですか？',
            'How many cats do you have? = ネコを何匹飼っていますか？',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-qw-fc1',
        front: 'What',
        back: '(　　) is this?\n（これは何ですか？）',
        hint: '「何」を聞くときに使うことばは…？',
        explanation: '「何」は what だよ。What is this?',
      },
      {
        id: 'eng-qw-fc2',
        front: 'Who',
        back: '(　　) is he?\n（彼はだれですか？）',
        hint: '「だれ」を聞くときに使うことばは…？',
        explanation: '「だれ」は who だよ。Who is he?',
      },
      {
        id: 'eng-qw-fc3',
        front: 'Where',
        back: '(　　) is the library?\n（図書館はどこですか？）',
        hint: '「どこ」を聞くときに使うことばは…？',
        explanation: '「どこ」は where だよ。Where is the library?',
      },
      {
        id: 'eng-qw-fc4',
        front: 'When',
        back: '(　　) is your birthday?\n（あなたの誕生日はいつですか？）',
        hint: '「いつ」を聞くときに使うことばは…？',
        explanation: '「いつ」は when だよ。When is your birthday?',
      },
      {
        id: 'eng-qw-fc5',
        front: 'How',
        back: '(　　) are you?\n（調子はどうですか？）',
        hint: '「どう」を聞くときに使うことばは…？',
        explanation: '「どう」は how だよ。How are you?',
      },
      {
        id: 'eng-qw-fc6',
        front: 'How many',
        back: '(　　) books do you have?\n（あなたは本を何冊もっていますか？）',
        hint: '「いくつ」「何冊」を聞くときは how + …？',
        explanation: '「いくつ」は how many だよ。How many books do you have?',
      },
      {
        id: 'eng-qw-fc7',
        front: 'How old',
        back: '(　　) are you?\n（あなたは何歳ですか？）',
        hint: '年齢を聞くときは how + …？',
        explanation: '「何歳」は how old だよ。How old are you?',
      },
      {
        id: 'eng-qw-fc8',
        front: 'What time',
        back: '(　　) is it?\n（今何時ですか？）',
        hint: '時間を聞くときは what + …？',
        explanation: '「何時」は what time だよ。What time is it?',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-qw-q1',
          question: '「彼女はだれですか？」を英語にすると？',
          options: ['What is she?', 'Who is she?', 'Where is she?', 'How is she?'],
          correctIndex: 1,
          explanation: '「だれ」は who だよ。Who is she?',
        },
        {
          id: 'eng-qw-q2',
          question: '「学校はどこですか？」を英語にすると？',
          options: [
            'What is the school?',
            'When is the school?',
            'Where is the school?',
            'Who is the school?',
          ],
          correctIndex: 2,
          explanation: '「どこ」は where だよ。Where is the school?',
        },
        {
          id: 'eng-qw-q3',
          question: '「What is this?」に対する答えとして正しいのは？',
          options: [
            'Yes, it is.',
            'It is a book.',
            'I am fine.',
            'He is Ken.',
          ],
          correctIndex: 1,
          explanation: '「これは何ですか？」と聞かれたから、具体的に答えるよ。It is a book.（それは本です。）',
        },
        {
          id: 'eng-qw-q4',
          question: '「あなたは何歳ですか？」を英語にするとき、最初にくるのは？',
          options: ['How many', 'How old', 'What old', 'When old'],
          correctIndex: 1,
          explanation: '「何歳」は how old だよ。How old are you?',
        },
        {
          id: 'eng-qw-q5',
          question: '「テストはいつですか？」を英語にすると？',
          options: [
            'What is the test?',
            'Where is the test?',
            'When is the test?',
            'How is the test?',
          ],
          correctIndex: 2,
          explanation: '「いつ」は when だよ。When is the test?',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-qw-ex1',
          question: '次の日本語を英語にしよう。\n「これは何ですか？」',
          steps: [
            {
              title: 'Step 1: 「何」を英語にしよう',
              content: '「何」は英語で what だよ。疑問詞はいちばん最初に置くよ！',
              highlight: 'What',
            },
            {
              title: 'Step 2: be動詞を置こう',
              content: '「これ」は this。this のときのbe動詞は is だよ。',
              highlight: 'is',
            },
            {
              title: 'Step 3: つなげて完成！',
              content: 'What + is + this で完成！おわりに ? をつけるのをわすれずに。',
              highlight: 'What is this?',
            },
          ],
          answer: 'What is this?（これは何ですか？）',
        },
        {
          id: 'eng-qw-ex2',
          question: '次の日本語を英語にしよう。\n「公園はどこですか？」',
          steps: [
            {
              title: 'Step 1: 「どこ」を英語にしよう',
              content: '「どこ」は英語で where だよ。いちばん最初に置こう。',
              highlight: 'Where',
            },
            {
              title: 'Step 2: be動詞を置こう',
              content: '「公園」は the park。1つの場所のbe動詞は is だよ。',
              highlight: 'is',
            },
            {
              title: 'Step 3: つなげて完成！',
              content: 'Where + is + the park で完成！',
              highlight: 'Where is the park?',
            },
          ],
          answer: 'Where is the park?（公園はどこですか？）',
        },
        {
          id: 'eng-qw-ex3',
          question: '次の日本語を英語にしよう。\n「あなたはネコを何匹飼っていますか？」',
          steps: [
            {
              title: 'Step 1: 「何匹」を英語にしよう',
              content: '「何匹」＝「いくつ」は英語で how many だよ。そのあとに cats（ネコ）をつけよう。',
              highlight: 'How many cats',
            },
            {
              title: 'Step 2: 「飼っていますか？」を英語にしよう',
              content: '「飼っている」は have。you に聞いているから Do you have だね。',
              highlight: 'do you have',
            },
            {
              title: 'Step 3: つなげて完成！',
              content: 'How many cats + do you have + ? で完成！',
              highlight: 'How many cats do you have?',
            },
          ],
          answer: 'How many cats do you have?（あなたはネコを何匹飼っていますか？）',
        },
      ],
    },
    chatId: 'eng-question-words',
  },
};
