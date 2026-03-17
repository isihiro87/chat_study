import type { Topic } from '../../../../../../../data/types';

export const indirectQuestions: Topic = {
  id: 'eng-indirect-questions',
  eraId: 'english-grade3',
  name: '間接疑問文',
  subtitle: '疑問のことばが文の途中に入る言い方',
  icon: '🤔',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: '間接疑問文ってなに？',
          content:
            'ふつうの疑問文は「What does he like?（彼は何が好き？）」のように、疑問のことばが文のいちばん最初にくるよね。でも「彼が何を好きか知っている」のように、疑問のことばが文の途中に入ることがあるよ。これが間接疑問文だよ。いちばん大事なポイントは、疑問のことばのあとは「主語 + 動詞」の順番になること。疑問文のことばの並べ方にはしないよ。',
          keyPoints: [
            '疑問文: What does he like? → 間接疑問文: I know what he likes.',
            '疑問文: Where does she live? → 間接疑問文: Do you know where she lives?',
            'ポイント: 疑問のことばのあとは「主語 + 動詞」の順番！',
          ],
        },
        {
          title: 'いろいろな疑問のことばで使える',
          content:
            'what, who, where, when, how のどの疑問のことばでも間接疑問文が作れるよ。I know / Do you know / Tell me / I wonder などといっしょに使うことが多いよ。',
          keyPoints: [
            'I know what he likes. = 私は彼が何を好きか知っています。',
            'Tell me when the party starts. = パーティーがいつ始まるか教えてください。',
            "I don't know how she did it. = 彼女がどうやってそれをしたか知りません。",
          ],
        },
        {
          title: '間違いやすいポイント',
          content:
            'いちばん多い間違いは、間接疑問文なのに疑問文のことばの並べ方にしてしまうこと。does / did が入ったり、動詞と主語がひっくり返ったりしないように注意しよう！',
          keyPoints: [
            '❌ I know what does he like. → ⭕ I know what he likes.',
            '❌ Tell me where does she live. → ⭕ Tell me where she lives.',
            '❌ Do you know when did it start? → ⭕ Do you know when it started?',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // FlashcardDeck では back→表面（先に見える）、front→裏面（フリップで見える）
      {
        id: 'eng-iq-fc1',
        front: 'he likes',
        back: 'I know what (　　).\n（私は彼が何を好きか知っています。）',
        hint: '間接疑問文では疑問のことばのあとは「主語 + 動詞」の順番だよ。',
        explanation: 'what のあとは he likes。does he like にはしないよ。',
      },
      {
        id: 'eng-iq-fc2',
        front: 'she lives',
        back: 'Do you know where (　　)?\n（あなたは彼女がどこに住んでいるか知っていますか？）',
        hint: '疑問のことばのあとは「主語 + 動詞」の順番。she は1人だから…？',
        explanation: 'where のあとは she lives。does she live にはしないよ。',
      },
      {
        id: 'eng-iq-fc3',
        front: 'the party starts',
        back: 'Tell me when (　　).\n（パーティーがいつ始まるか教えてください。）',
        hint: '「主語 + 動詞」の順番にしよう。the party は1つだから…？',
        explanation: 'when のあとは the party starts。does the party start にはしないよ。',
      },
      {
        id: 'eng-iq-fc4',
        front: 'she did it',
        back: "I don't know how (　　).\n（彼女がどうやってそれをしたか知りません。）",
        hint: '過去の話。「主語 + 動詞」の順番にしよう。',
        explanation: 'how のあとは she did it。did she do it にはしないよ。',
      },
      {
        id: 'eng-iq-fc5',
        front: 'who made this cake',
        back: "I don't know (　　).\n（誰がこのケーキを作ったか知りません。）",
        hint: '「誰が作ったか」。who が主語になるパターンだよ。',
        explanation: 'who が主語のときは、もともと who made ... の順番だからそのまま使えるよ。',
      },
      {
        id: 'eng-iq-fc6',
        front: 'what she wants',
        back: 'Do you know (　　)?\n（あなたは彼女が何をほしいか知っていますか？）',
        hint: '疑問のことば + 「主語 + 動詞」の順番にしよう。',
        explanation: 'what she wants が正しい形。what does she want にはしないよ。',
      },
      {
        id: 'eng-iq-fc7',
        front: 'where he went',
        back: 'I wonder (　　).\n（彼がどこに行ったのかなあ。）',
        hint: '過去の話。「主語 + 動詞」の順番にしよう。',
        explanation: 'where のあとは he went。did he go にはしないよ。',
      },
      {
        id: 'eng-iq-fc8',
        front: 'how old he is',
        back: 'Do you know (　　)?\n（あなたは彼が何歳か知っていますか？）',
        hint: 'how old のあとは「主語 + 動詞」。be動詞の文だよ。',
        explanation: 'how old he is が正しい形。how old is he にはしないよ。',
      },
      {
        id: 'eng-iq-fc9',
        front: 'when he will come',
        back: 'I wonder (　　).\n（彼がいつ来るのかなあ。）',
        hint: '未来の話。will を使うよ。「主語 + 動詞」の順番に注意！',
        explanation: 'when のあとは he will come。will he come にはしないよ。',
      },
      {
        id: 'eng-iq-fc10',
        front: 'what time it is',
        back: 'Do you know (　　)?\n（今何時か知っていますか？）',
        hint: 'what time のあとは「主語 + 動詞」の順番だよ。',
        explanation: 'what time it is が正しい形。what time is it にはしないよ。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'eng-iq-q1',
          question: '「I know what he (　　).（私は彼が何を好きか知っています。）」\nの (　　) に入るのは？',
          options: ['does like', 'likes', 'like', 'is like'],
          correctIndex: 1,
          explanation: '間接疑問文では what のあとは「主語 + 動詞」。he は1人だから likes だよ。',
        },
        {
          id: 'eng-iq-q2',
          question: '「Do you know where she (　　)?（彼女がどこに住んでいるか知っていますか？）」\nの (　　) に入るのは？',
          options: ['lives', 'does live', 'live', 'living'],
          correctIndex: 0,
          explanation: '間接疑問文では where のあとは「主語 + 動詞」。she は1人だから lives だよ。',
        },
        {
          id: 'eng-iq-q3',
          question: '次のうち、正しい英文はどれ？',
          options: [
            'Tell me where does he live.',
            'Tell me where he does live.',
            'Tell me where he lives.',
            'Tell me does he live where.',
          ],
          correctIndex: 2,
          explanation: '間接疑問文では疑問のことばのあとは「主語 + 動詞」の順番。Tell me where he lives. が正解だよ。',
        },
        {
          id: 'eng-iq-q4',
          question: '「彼がいつ来るか知っていますか？」を英語にすると？',
          options: [
            'Do you know when will he come?',
            'Do you know he when will come?',
            'Do you know when does he come?',
            'Do you know when he will come?',
          ],
          correctIndex: 3,
          explanation: '間接疑問文では when のあとは「主語 + 動詞」。he will come の順番だよ。',
        },
        {
          id: 'eng-iq-q5',
          question: '「I don\'t know (　　).（誰がこの本を書いたか知りません。）」\nの (　　) に入るのは？',
          options: [
            'who wrote this book',
            'who did write this book',
            'who this book wrote',
            'who was wrote this book',
          ],
          correctIndex: 0,
          explanation: 'who が主語のときはもともと「who + 動詞」の順番だからそのまま使えるよ。who wrote this book が正解。',
        },
        {
          id: 'eng-iq-q6',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「私は彼女がどこに住んでいるか知っています。」という英文を完成させよう。\nI know (　　)(　　)(　　).',
          words: ['lives', 'she', 'where'],
          correctOrder: [2, 1, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「I know where she lives.」が正解。where（どこに）+ she（彼女が）+ lives（住んでいる）の順番だよ。間接疑問文では「疑問詞 + 主語 + 動詞」の語順になるよ。',
        },
        {
          id: 'eng-iq-q7',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「あなたが何がほしいか教えてください。」という英文を完成させよう。\nTell me (　　)(　　)(　　).',
          words: ['want', 'you', 'what'],
          correctOrder: [2, 1, 0],
          punctuation: '.',
          options: [],
          correctIndex: -1,
          explanation: '「Tell me what you want.」が正解。what（何を）+ you（あなたが）+ want（ほしい）の順番だよ。間接疑問文では「疑問詞 + 主語 + 動詞」の語順になるよ。',
        },
        {
          id: 'eng-iq-q8',
          type: 'reorder',
          question: '次の単語を正しい順番にならべて、\n「彼がだれか知っていますか？」という英文を完成させよう。\nDo you know (　　)(　　)(　　)?',
          words: ['is', 'he', 'who'],
          correctOrder: [2, 1, 0],
          punctuation: '?',
          options: [],
          correctIndex: -1,
          explanation: '「Do you know who he is?」が正解。who（だれ）+ he（彼が）+ is（です）の順番だよ。間接疑問文では「疑問詞 + 主語 + 動詞」の語順になるよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'eng-iq-ex1',
          question: '次の疑問文を間接疑問文にしよう。\n「What does she want?」を「I know ...」に続けよう。',
          steps: [
            {
              title: 'Step 1: 疑問文のことばの並べ方を確認しよう',
              content: 'もとの疑問文は What does she want? だね。does she want が「疑問文のことばの並べ方」だよ。',
              highlight: 'does she want',
            },
            {
              title: 'Step 2: 「主語 + 動詞」の順番に変えよう',
              content: 'does she want → she wants に変えるよ。does が消えて、動詞に s がもどるよ。',
              highlight: 'she wants',
            },
            {
              title: 'Step 3: I know のうしろにつなげよう',
              content: 'I know what she wants. で完成！文のおわりは ? ではなく . にするよ。',
              highlight: 'I know what she wants.',
            },
          ],
          answer: 'I know what she wants.\n（私は彼女が何をほしいか知っています。）',
        },
        {
          id: 'eng-iq-ex2',
          question: '次の日本語を英語にしよう。\n「パーティーがいつ始まるか教えてください。」',
          steps: [
            {
              title: 'Step 1: 「教えてください」を英語にしよう',
              content: '「教えてください」は Tell me で始めるよ。',
              highlight: 'Tell me',
            },
            {
              title: 'Step 2: 疑問のことばを選ぼう',
              content: '「いつ」は when だね。Tell me when ... と続けよう。',
              highlight: 'when',
            },
            {
              title: 'Step 3: 「主語 + 動詞」の順番で続けよう',
              content: '「パーティーが始まる」= the party starts。間接疑問文だから does the party start にはしないよ！',
              highlight: 'the party starts',
            },
          ],
          answer: 'Tell me when the party starts.\n（パーティーがいつ始まるか教えてください。）',
        },
        {
          id: 'eng-iq-ex3',
          question: '次の日本語を英語にしよう。\n「あなたは彼がどこに住んでいるか知っていますか？」',
          steps: [
            {
              title: 'Step 1: 「〜を知っていますか？」を英語にしよう',
              content: '「知っていますか？」は Do you know ...? で始めるよ。',
              highlight: 'Do you know',
            },
            {
              title: 'Step 2: 疑問のことばを選ぼう',
              content: '「どこに」は where だね。Do you know where ... と続けよう。',
              highlight: 'where',
            },
            {
              title: 'Step 3: 「主語 + 動詞」の順番で続けよう',
              content: '「彼が住んでいる」= he lives。does he live にはしないよ！文のおわりは ? をつけるよ。',
              highlight: 'he lives',
            },
          ],
          answer: 'Do you know where he lives?\n（あなたは彼がどこに住んでいるか知っていますか？）',
        },
      ],
    },
    chatId: 'eng-indirect-questions',
  },
};
