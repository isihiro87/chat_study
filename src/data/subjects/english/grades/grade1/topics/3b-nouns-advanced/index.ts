import type { Topic } from '../../../../../../../data/types';

export const nounsAdvanced: Topic = {
  id: 'eng-nouns-advanced',
  eraId: 'english-grade1',
  name: '名詞の応用',
  subtitle: '不規則複数形 / How many / these・those',
  icon: '📝',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '不規則な複数形',
          content:
            'おしりに s をつけない特別な複数形もあるよ。child → children, man → men, woman → women, tooth → teeth, foot → feet のように形がガラッとかわるものや、fish, sheep のように単数形と複数形が同じ形のものもあるよ。',
          keyPoints: [
            'child → children（子ども → 子どもたち）',
            'man → men / woman → women',
            'tooth → teeth / foot → feet',
            '形がかわらない：fish → fish / sheep → sheep',
          ],
        },
        {
          title: 'How many 〜?（いくつ？）',
          content:
            '数をたずねるときは How many を使うよ。How many のあとにはかならず名詞の複数形がくるよ。答えるときも数字 + 複数形の形にするよ。',
          keyPoints: [
            'How many books do you have?（本を何冊もっていますか？）',
            '答え方 → I have three books.（3冊もっています。）',
            'How many のあとはかならず複数形！',
          ],
        },
        {
          title: 'these / those のつかい方',
          content:
            'this（これ）の複数形が these（これら）、that（あれ）の複数形が those（あれら）だよ。複数だから be動詞は are を使い、答えるときは they を使うよ。',
          keyPoints: [
            'this → these（これら）/ that → those（あれら）',
            'These are pens.（これらはペンです。）',
            'Are those your books? — Yes, they are.',
            '答えるときは it ではなく they を使う',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-na-fc1',
        front: 'men',
        back: 'man の「2人以上」の形は？',
        hint: 'これはとくべつな変わり方をするよ。a が別の文字にかわるよ。',
        explanation: 'man → men。a が e にかわる不規則変化だよ。',
      },
      {
        id: 'eng-na-fc2',
        front: 'teeth',
        back: 'tooth の「2つ以上」の形は？',
        hint: 'これはとくべつな変わり方をするよ。そのまま覚えよう！',
        explanation: 'tooth → teeth。不規則変化なのでそのまま覚えよう。',
      },
      {
        id: 'eng-na-fc3',
        front: 'fish',
        back: 'fish の「2匹以上」の形は？',
        hint: '単数形とまったく同じ形だよ！',
        explanation: 'fish → fish。単数形と複数形が同じ形の名詞もあるよ。',
      },
      {
        id: 'eng-na-fc4',
        front: 'How many books do you have?',
        back: '「あなたは本を何冊もっていますか？」\nを英語にすると？',
        hint: '「いくつ」は How many。そのあとの名詞は複数形にするよ。',
        explanation: 'How many + 複数形の名詞 + do you have? の形だよ。',
      },
      {
        id: 'eng-na-fc5',
        front: 'These',
        back: '(　　) are my pens.\n（これらは私のペンです。）',
        hint: 'this の複数形で、近くにある「これら」を意味することばは？',
        explanation: 'this の複数形は these だよ。be動詞は are を使うよ。',
      },
      {
        id: 'eng-na-fc6',
        front: 'Those',
        back: '(　　) are cats.\n（あれらはネコです。）',
        hint: 'that の複数形で、遠くにある「あれら」を意味することばは？',
        explanation: 'that の複数形は those だよ。be動詞は are を使うよ。',
      },
      {
        id: 'eng-na-fc7',
        front: 'classes',
        back: 'class の「2つ以上」の形は？',
        hint: 's で終わることばには s じゃなくて…？',
        explanation: 's で終わるときは es をつけるよ。class → classes',
      },
      {
        id: 'eng-na-fc8',
        front: 'dishes',
        back: 'dish の「2つ以上」の形は？',
        hint: 'sh で終わることばには s じゃなくて…？',
        explanation: 'sh で終わるときは es をつけるよ。dish → dishes',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-na-q1',
          question: 'child の「2人以上」の形で正しいのは？',
          options: ['childs', 'childes', 'children', 'childer'],
          correctIndex: 2,
          explanation: 'child → children。不規則変化なのでそのまま覚えよう。s や es をつけるのではないよ。',
        },
        {
          id: 'eng-na-q2',
          question: '「あなたはペンを何本もっていますか？」を英語にすると？',
          options: [
            'How many pen do you have?',
            'How many pens do you have?',
            'How much pens do you have?',
            'How many pens are you have?',
          ],
          correctIndex: 1,
          explanation: 'How many のあとは名詞の複数形を使うよ。pen → pens。How much は数えられないものに使うよ。',
        },
        {
          id: 'eng-na-q3',
          question: '「(　　) are my books.（これらは私の本です。）」\nの (　　) に入るのは？',
          options: ['This', 'That', 'These', 'It'],
          correctIndex: 2,
          explanation: '「これら」は this の複数形 these を使うよ。複数だから be動詞は are になるよ。',
        },
        {
          id: 'eng-na-q4',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「あなたはペンを何本もっていますか？」という英文を作ろう。',
          words: ['do', 'pens', 'how', 'have', 'many', 'you'],
          correctOrder: [2, 4, 1, 0, 5, 3],
          punctuation: '?',
          options: [],
          correctIndex: -1,
          explanation: '「How many pens do you have?」が正解。How many（いくつ）+ pens（ペン）+ do you have?（もっていますか）の順番だよ。',
        },
        {
          id: 'eng-na-q5',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「これらは私の本です。」という英文を作ろう。',
          words: ['my', 'these', 'books', 'are'],
          correctOrder: [1, 3, 0, 2],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「These are my books.」が正解。These（これらは）+ are（です）+ my books（私の本）の順番だよ。',
        },
        {
          id: 'eng-na-q6',
          question: '「I have three (　　).（私は魚を3匹もっています。）」\nの (　　) に入るのは？',
          options: ['fishs', 'fishes', 'fish', 'a fish'],
          correctIndex: 2,
          explanation: 'fish は単数形と複数形が同じ形だよ。s をつけなくていいんだ。three fish が正解。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-na-ex1',
          question: '次の日本語を英語にしよう。\n「あなたは本を何冊もっていますか？」',
          steps: [
            {
              title: 'Step 1: 「何冊」を英語にしよう',
              content: '「いくつ」「何冊」は How many を使うよ。',
              highlight: 'How many',
            },
            {
              title: 'Step 2: 「本」を複数形にしよう',
              content: 'How many のあとの名詞はかならず複数形にするよ。book → books',
              highlight: 'books',
            },
            {
              title: 'Step 3: 「もっていますか」を英語にしよう',
              content: '疑問文だから do you have? の形にするよ。',
              highlight: 'do you have?',
            },
          ],
          answer: 'How many books do you have?（あなたは本を何冊もっていますか？）',
        },
        {
          id: 'eng-na-ex2',
          question: '次の日本語を英語にしよう。\n「これらは私のペンです。」',
          steps: [
            {
              title: 'Step 1: 「これらは」を英語にしよう',
              content: '「これ」は this だけど、「これら」は複数だから these を使うよ。',
              highlight: 'These',
            },
            {
              title: 'Step 2: 「〜です」を英語にしよう',
              content: 'these は複数だから be動詞は are を使うよ。',
              highlight: 'are',
            },
            {
              title: 'Step 3: 「私のペン」を英語にしよう',
              content: '「私の」は my。ペンは複数だから pens だよ。my pens',
              highlight: 'my pens',
            },
          ],
          answer: 'These are my pens.（これらは私のペンです。）',
        },
      ],
    },
    chatId: 'eng-nouns-advanced',
  },
};
